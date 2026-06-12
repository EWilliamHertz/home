import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { google } from 'googleapis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session || !(session as any).accessToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const calendar = google.calendar({
      version: 'v3',
      auth: (session as any).accessToken,
    });

    const now = new Date();
    const events = await calendar.events.list({
      calendarId: 'primary',
      timeMin: now.toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    res.status(200).json(events.data.items || []);
  } catch (error) {
    console.error('Calendar error:', error);
    res.status(500).json({ error: 'Failed to fetch calendar' });
  }
}
