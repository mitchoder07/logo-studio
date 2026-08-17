"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

type CodePreviewProps = {
  code: string;
  language: string;
  filename: string;
};

export function CodePreview({ code, language, filename }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-2xl glass-strong shadow-2xl shadow-black/30"
    >
      {/* Editor title bar */}
      <div className="flex items-center gap-2 border-b border-foreground/10 bg-foreground/[0.04] px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="ml-2 flex items-center gap-2">
          <span className="font-mono text-[11px] text-muted-foreground">
            {filename}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="ml-auto flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
          data-cursor="pointer"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="max-h-[420px] overflow-auto">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: "1.25rem",
            background: "transparent",
            fontSize: "13px",
            lineHeight: 1.65,
            fontFamily: "var(--font-geist-mono), monospace",
          }}
          showLineNumbers
          lineNumberStyle={{
            color: "rgba(255,255,255,0.25)",
            paddingRight: "1rem",
            userSelect: "none",
            minWidth: "2.5em",
          }}
          wrapLongLines={false}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  );
}
