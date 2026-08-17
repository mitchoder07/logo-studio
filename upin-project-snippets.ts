export type CodeSnippet = {
  language: string;
  filename: string;
  code: string;
};

export const projectCodeSnippets: CodeSnippet[] = [
  // 1. Al-Bashir Academy LMS — course analytics dashboard card (TypeScript)
  {
    language: "typescript",
    filename: "al-bashir/analytics-card.tsx",
    code: `import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

interface CourseAnalyticsProps {
  courseTitle: string;
  completionData: { week: string; completions: number }[];
  activeStudents: number;
}

/**
 * Al-Bashir Academy LMS — Course analytics card.
 * Part of the instructor-facing dashboard, built with Recharts.
 */
export function CourseAnalyticsCard(props: CourseAnalyticsProps) {
  const { courseTitle, completionData, activeStudents } = props;

  return (
    <div className="analytics-card">
      <header className="analytics-header">
        <h3>{courseTitle}</h3>
        <span className="active-count">{activeStudents} active students</span>
      </header>

      <div className="analytics-chart">
        <ResponsiveContainer width="100%" height={140}>
          <AreaChart data={completionData}>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="completions"
              stroke="var(--brand-gold)"
              fill="var(--brand-gold)"
              fillOpacity={0.15}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <footer className="analytics-footer">
        <span>Weekly completions</span>
      </footer>
    </div>
  );
}`,
  },

  // 2. Rafaab — AI shopping assistant + flash sale countdown (TypeScript/React)
  {
    language: "typescript",
    filename: "rafaab/flash-sale.tsx",
    code: `"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Rafaab — Flash sale countdown.
 * Live countdown + Paystack-ready CTA. Mobile-first.
 */
export function FlashSaleCountdown({ endsAt }: { endsAt: string }) {
  const [remaining, setRemaining] = useState(() => msLeft(endsAt));

  useEffect(() => {
    const id = setInterval(() => setRemaining(msLeft(endsAt)), 1000);
    return () => clearInterval(id);
  }, [endsAt]);

  if (remaining <= 0) {
    return <div className="flash-ended">Sale ended</div>;
  }

  const parts = splitDuration(remaining);

  return (
    <motion.div
      className="flash-countdown"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {parts.map((p) => (
        <div key={p.label} className="flash-part">
          <span className="flash-value">{p.value}</span>
          <span className="flash-label">{p.label}</span>
        </div>
      ))}
    </motion.div>
  );
}

function msLeft(iso: string) {
  return Math.max(0, new Date(iso).getTime() - Date.now());
}

function splitDuration(ms: number) {
  const s = Math.floor(ms / 1000);
  return [
    { label: "HRS", value: pad(Math.floor(s / 3600)) },
    { label: "MIN", value: pad(Math.floor((s % 3600) / 60)) },
    { label: "SEC", value: pad(s % 60) },
  ];
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}`,
  },

  // 3. Your Studio — LogoCard component with masonry grid + lightbox (TypeScript/React)
  {
    language: "typescript",
    filename: "your-studio/logo-card.tsx",
    code: `'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Logo } from '@/data/logos';

interface LogoCardProps {
  logo: Logo;
  index: number;
  onOpen: (logo: Logo) => void;
}

/**
 * Your Studio — LogoCard.
 * Masonry grid card with hover overlay, palette swatches,
 * and click-to-open lightbox behavior.
 */
export function LogoCard({ logo, index, onOpen }: LogoCardProps) {
  return (
    <article
      className="group relative cursor-pointer animate-fade-up"
      style={{ animationDelay: \`\${Math.min(index, 12) * 0.04}s\` }}
      onClick={() => onOpen(logo)}
    >
      <div className={cn(
        'relative aspect-square overflow-hidden bg-card border border-border',
        'transition-all duration-500 group-hover:border-gold'
      )}>
        <Image
          src={\`/logos/\${logo.slug}.png\`}
          alt={\`\${logo.name} — \${logo.style} logo for \${logo.industry}\`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="text-white text-base truncate" style={{ fontFamily: 'var(--font-serif)' }}>
            {logo.name}
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-white/60 truncate">
            {logo.industry} · {logo.style}
          </div>
        </div>
      </div>
    </article>
  );
}`,
  },

  // 4. Baca — word-by-word Quran reader component (JavaScript)
  {
    language: "javascript",
    filename: "baca/word-reader.js",
    code: `/**
 * Baca — Word-by-word Quran reader.
 * Highlights the active word, plays audio, and respects focus.
 */
export class WordByWordReader {
  constructor(container, verses) {
    this.container = container;
    this.verses = verses;
    this.activeIndex = -1;
    this.audio = new Audio();
    this.render();
  }

  render() {
    this.container.innerHTML = "";
    this.verses.forEach((verse, vIdx) => {
      const vEl = document.createElement("article");
      vEl.className = "verse";
      vEl.setAttribute("aria-label", \`Verse \${verse.number}\`);

      verse.words.forEach((word, wIdx) => {
        const wEl = document.createElement("button");
        wEl.type = "button";
        wEl.className = "word";
        wEl.textContent = word.text;
        wEl.setAttribute("data-verse", vIdx);
        wEl.setAttribute("data-word", wIdx);
        wEl.setAttribute(
          "aria-label",
          \`\${word.translation}, word \${wIdx + 1}\`
        );
        wEl.addEventListener("click", () => this.activate(vIdx, wIdx));
        vEl.appendChild(wEl);
      });

      this.container.appendChild(vEl);
    });
  }

  activate(vIdx, wIdx) {
    this.clearActive();
    const el = this.container.querySelector(
      \`[data-verse="\${vIdx}"][data-word="\${wIdx}"]\`
    );
    if (!el) return;
    el.classList.add("word--active");
    el.focus({ preventScroll: false });
    this.activeIndex = wIdx;

    const word = this.verses[vIdx].words[wIdx];
    if (word.audio) {
      this.audio.src = word.audio;
      this.audio.play().catch(() => {});
    }
  }

  clearActive() {
    this.container
      .querySelectorAll(".word--active")
      .forEach((el) => el.classList.remove("word--active"));
  }
}`,
  },

  // 5. Crypto Vault — AES-256 encryption (JavaScript)
  {
    language: "javascript",
    filename: "crypto-vault/aes.js",
    code: `/**
 * Crypto Vault — AES-256-GCM in the browser.
 * Zero data leaves the device. Key derived from password via PBKDF2.
 */
const SUBTLE = window.crypto.subtle;
const ENC = new TextEncoder();
const DEC = new TextDecoder();

const PBKDF2_ITERATIONS = 250_000;
const SALT_BYTES = 16;
const IV_BYTES = 12;

export async function deriveKey(password, salt) {
  const baseKey = await SUBTLE.importKey(
    "raw",
    ENC.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  return SUBTLE.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: PBKDF2_ITERATIONS,
      hash: "SHA-256",
    },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

export async function encryptSecret(password, plaintext) {
  const salt = window.crypto.getRandomValues(new Uint8Array(SALT_BYTES));
  const iv = window.crypto.getRandomValues(new Uint8Array(IV_BYTES));
  const key = await deriveKey(password, salt);

  const ciphertext = await SUBTLE.encrypt(
    { name: "AES-GCM", iv },
    key,
    ENC.encode(plaintext)
  );

  return {
    salt: toBase64(salt),
    iv: toBase64(iv),
    ciphertext: toBase64(new Uint8Array(ciphertext)),
  };
}

export async function decryptSecret(password, payload) {
  const salt = fromBase64(payload.salt);
  const iv = fromBase64(payload.iv);
  const key = await deriveKey(password, salt);

  const plaintext = await SUBTLE.decrypt(
    { name: "AES-GCM", iv },
    key,
    fromBase64(payload.ciphertext)
  );
  return DEC.decode(plaintext);
}

function toBase64(bytes) {
  return btoa(String.fromCharCode(...bytes));
}

function fromBase64(str) {
  return Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
}`,
  },

  // 6. Similarity Checker — text similarity algorithm (JavaScript)
  {
    language: "javascript",
    filename: "similarity-checker/similarity.js",
    code: `/**
 * Similarity Checker — multi-algorithm text similarity.
 * Returns 0..1 score and a per-algorithm breakdown.
 */

export function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^\\w\\s]/g, " ")
    .split(/\\s+/)
    .filter(Boolean);
}

export function cosineSimilarity(a, b) {
  const ta = tokenize(a);
  const tb = tokenize(b);
  const freq = new Map();

  for (const w of ta) freq.set(w, (freq.get(w) ?? 0) + 1);
  for (const w of tb) freq.set(w, (freq.get(w) ?? 0) - 1);

  let dot = 0;
  let magA = 0;
  let magB = 0;

  const allWords = new Set([...ta, ...tb]);
  for (const w of allWords) {
    const fa = ta.filter((x) => x === w).length;
    const fb = tb.filter((x) => x === w).length;
    dot += fa * fb;
    magA += fa * fa;
    magB += fb * fb;
  }

  if (magA === 0 || magB === 0) return 0;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

export function jaccardSimilarity(a, b) {
  const sa = new Set(tokenize(a));
  const sb = new Set(tokenize(b));
  let intersection = 0;
  for (const w of sa) if (sb.has(w)) intersection++;
  return intersection / (sa.size + sb.size - intersection);
}

export function levenshteinRatio(a, b) {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n === 0 ? 1 : 0;
  if (n === 0) return 0;

  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  const dist = dp[m][n];
  return 1 - dist / Math.max(m, n);
}

export function scoreSimilarity(a, b) {
  const cosine = cosineSimilarity(a, b);
  const jaccard = jaccardSimilarity(a, b);
  const lev = levenshteinRatio(a, b);
  const overall = 0.5 * cosine + 0.3 * jaccard + 0.2 * lev;
  return { overall, cosine, jaccard, levenshtein: lev };
}`,
  },

  // 7. Cyber Bot — chatbot suggested prompts (JavaScript)
  {
    language: "javascript",
    filename: "cyber-bot/prompts.js",
    code: `/**
 * Cyber Bot — suggested-prompts engine.
 * Returns the most relevant follow-up prompts for a given answer.
 */

const PROMPT_LIBRARY = [
  {
    id: "phishing",
    text: "How do I spot a phishing email?",
    keywords: ["phishing", "email", "scam", "spoof"],
  },
  {
    id: "passwords",
    text: "What makes a strong password?",
    keywords: ["password", "credential", "auth"],
  },
  {
    id: "2fa",
    text: "Why should I enable two-factor auth?",
    keywords: ["2fa", "mfa", "factor", "otp"],
  },
  {
    id: "vpn",
    text: "Does a VPN actually protect me?",
    keywords: ["vpn", "tunnel", "encrypt", "network"],
  },
  {
    id: "ransomware",
    text: "How does ransomware spread?",
    keywords: ["ransomware", "malware", "encrypt", "virus"],
  },
  {
    id: "updates",
    text: "Why are software updates important?",
    keywords: ["update", "patch", "vulnerability", "cve"],
  },
];

export function suggestPrompts(answerText, limit = 3) {
  const lower = answerText.toLowerCase();
  const scored = PROMPT_LIBRARY.map((p) => {
    let score = 0;
    for (const kw of p.keywords) {
      if (lower.includes(kw)) score += 1;
    }
    return { ...p, score };
  });

  return scored
    .filter((p) => p.score >= 0)
    .sort((a, b) => b.score - a.score || Math.random() - 0.5)
    .slice(0, limit)
    .map((p) => ({ id: p.id, text: p.text }));
}

export function formatAnswerCard(answer) {
  return {
    title: answer.title,
    summary: answer.summary,
    bullets: answer.bullets ?? [],
    source: answer.source ?? "Cyber Bot knowledge base",
    prompts: suggestPrompts(\`\${answer.title} \${answer.summary}\`),
  };
}`,
  },

  // 8. Cyber-Words — game loop (JavaScript)
  {
    language: "javascript",
    filename: "cyber-words/game.js",
    code: `/**
 * Cyber-Words Guess — game loop.
 * 5-letter word guessing with color-coded feedback.
 */

const WORDS = [
  "PHISH",
  "VIRUS",
  "PATCH",
  "CIPHER",
  "TOKEN",
  "SPOOF",
  "BREACH",
  "PROXY",
  "WORMS",
  "FIREW",
];

const MAX_GUESSES = 6;
const WORD_LENGTH = 5;

export function createGame() {
  const answer = WORDS[Math.floor(Math.random() * WORDS.length)];
  return {
    answer,
    guesses: [],
    status: "playing",
    current: "",
  };
}

export function submitGuess(game, guess) {
  if (game.status !== "playing") return game;
  const g = guess.toUpperCase().slice(0, WORD_LENGTH);
  if (g.length !== WORD_LENGTH) return game;

  const feedback = evaluateGuess(g, game.answer);
  const guesses = [...game.guesses, { word: g, feedback }];

  let status = "playing";
  if (g === game.answer) status = "won";
  else if (guesses.length >= MAX_GUESSES) status = "lost";

  return { ...game, guesses, status, current: "" };
}

function evaluateGuess(guess, answer) {
  const result = Array(WORD_LENGTH).fill("absent");
  const answerChars = answer.split("");
  const guessChars = guess.split("");

  // First pass: correct positions
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = "correct";
      answerChars[i] = null;
    }
  }

  // Second pass: present but misplaced
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (result[i] === "correct") continue;
    const idx = answerChars.indexOf(guessChars[i]);
    if (idx !== -1) {
      result[i] = "present";
      answerChars[idx] = null;
    }
  }

  return result;
}

export function nextKeyState(feedback) {
  // Map letter -> best state across all guesses
  return feedback.reduce((acc, f) => {
    if (!acc[f]) acc[f] = true;
    return acc;
  }, {});
}`,
  },

  // 9. Kopi — Coffee shop product card with hover animation
  {
    language: "javascript",
    filename: "kopi/product-card.js",
    code: `/**
 * Kopi — Coffee shop product card.
 * Warm hover animation, accessible focus state.
 */
class ProductCard {
  constructor(element) {
    this.card = element;
    this.image = this.card.querySelector(".product-image");
    this.addButton = this.card.querySelector(".add-to-cart");

    this.bindEvents();
  }

  bindEvents() {
    this.card.addEventListener("mouseenter", this.onHover.bind(this));
    this.card.addEventListener("mouseleave", this.onLeave.bind(this));
    this.addButton.addEventListener("click", this.onAddToCart.bind(this));
  }

  onHover() {
    this.image.style.transform = "scale(1.08) translateY(-4px)";
    this.card.style.boxShadow = "0 12px 32px rgba(120, 80, 40, 0.25)";
  }

  onLeave() {
    this.image.style.transform = "scale(1) translateY(0)";
    this.card.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)";
  }

  onAddToCart(event) {
    const productId = this.card.dataset.productId;
    const productName = this.card.dataset.name;

    Cart.add({ id: productId, name: productName, qty: 1 });
    Toast.show(\`\${productName} added to cart\`, { type: "success" });

    // Haptic-style button feedback
    this.addButton.classList.add("pulse");
    setTimeout(() => this.addButton.classList.remove("pulse"), 400);
  }
}

// Initialize all product cards on the menu page
document.querySelectorAll(".product-card").forEach((el) => {
  new ProductCard(el);
});`,
  },
];
