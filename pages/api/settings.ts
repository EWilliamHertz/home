import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { query } from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session?.user?.email) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    if (req.method === 'GET') {
      const results = await query(
        'SELECT panel_name, panel_order, visible, config_data FROM panel_configs WHERE user_id = (SELECT id FROM users WHERE email = $1) ORDER BY panel_order',
        [session.user.email]
      );
      return res.status(200).json(results);
    }

    if (req.method === 'POST') {
      const { panels } = req.body;
      
      for (let i = 0; i < panels.length; i++) {
        const panel = panels[i];
        await query(
          `INSERT INTO panel_configs (user_id, panel_name, panel_order, visible, config_data)
           SELECT id, $1, $2, $3, $4 FROM users WHERE email = $5
           ON CONFLICT (user_id, panel_name) DO UPDATE SET panel_order = $2, visible = $3, config_data = $4`,
          [panel.name, i, panel.visible, JSON.stringify(panel.config), session.user.email]
        );
      }
      return res.status(200).json({ success: true });
    }
  } catch (error) {
    console.error('Settings error:', error);
    res.status(500).json({ error: 'Failed to update settings' });
  }
}
