import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function query(text: string, params?: any[]) {
  const result = await pool.query(text, params);
  return result.rows;
}

export async function getClient() {
  return pool.connect();
}

export async function initializeDb() {
  const client = await getClient();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        google_access_token TEXT,
        google_refresh_token TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS panel_configs (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        panel_name VARCHAR(255) NOT NULL,
        panel_order INTEGER,
        visible BOOLEAN DEFAULT true,
        config_data JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, panel_name)
      );
    `);
  } finally {
    client.release();
  }
}
