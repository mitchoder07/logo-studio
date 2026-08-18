import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  // TODO: this currently just validates and acknowledges the request — it
  // does not store the subscriber or send anything. To make this live,
  // wire it up to a real email provider, e.g.:
  //
  //   - Resend (resend.com) + their Audiences API — simplest for a
  //     Vercel-hosted Next.js app, has a generous free tier.
  //   - Buttondown, ConvertKit, or Mailchimp — good if you want a hosted
  //     "compose and send" UI for the actual new-logo announcement email.
  //
  // Whichever you pick, you'll add their SDK/API call here, store the
  // provider's API key as a Vercel environment variable, and then trigger
  // a "new logo" campaign from their dashboard (or another API call) each
  // time you add a logo.

  return NextResponse.json({ ok: true });
}
