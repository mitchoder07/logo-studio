'use client';

import * as React from 'react';
import { Mail, Check, Loader2 } from 'lucide-react';

/**
 * Front-end for "email me when a new logo goes up." Posts to /api/subscribe.
 * NOTE: that route currently just validates and acknowledges — it doesn't
 * actually store subscribers or send email yet. Wire it up to a real
 * provider (Resend, Buttondown, ConvertKit, Mailchimp, etc.) to make this
 * live. See the comment in src/app/api/subscribe/route.ts.
 */
export function NewsletterForm() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = React.useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus('error');
        setMessage(data.error ?? 'Something went wrong.');
        return;
      }
      setStatus('success');
      setMessage("You're on the list — new logos will land in your inbox.");
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-sm text-gold">
        <Check className="h-4 w-4 shrink-0" strokeWidth={1.5} />
        {message}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2 max-w-sm">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Mail
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            strokeWidth={1.5}
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="w-full rounded-md border border-border bg-background py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center gap-2 rounded-md border border-gold/60 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold hover:bg-gold/20 transition-colors disabled:opacity-60 whitespace-nowrap"
        >
          {status === 'loading' ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" strokeWidth={1.5} />
          ) : (
            'Subscribe'
          )}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-xs text-red-400">{message}</p>
      )}
      <p className="text-[10px] text-muted-foreground/70">
        Get an email whenever a new logo lands. No spam.
      </p>
    </form>
  );
}
