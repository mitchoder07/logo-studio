import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Set these in your Vercel project's Environment Variables:
//   RESEND_API_KEY      — from Resend dashboard → API Keys
//   RESEND_AUDIENCE_ID   — optional, from Resend dashboard → Audiences
//                          (only needed if you want new subscribers
//                          automatically grouped into a specific list;
//                          Resend Contacts are global by default now)
export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Missing RESEND_API_KEY env var.');
    return NextResponse.json(
      { error: 'Subscriptions are not set up yet — try again soon.' },
      { status: 500 }
    );
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  const payload: Record<string, unknown> = { email, unsubscribed: false };
  if (audienceId) payload.audience_id = audienceId;

  const res = await fetch('https://api.resend.com/contacts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    // Treat "already subscribed" as a success from the visitor's POV.
    const already =
      res.status === 409 ||
      String(body?.message ?? '')
        .toLowerCase()
        .includes('already');
    if (already) return NextResponse.json({ ok: true });

    console.error('Resend error:', res.status, body);
    return NextResponse.json(
      { error: 'Something went wrong. Try again.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
