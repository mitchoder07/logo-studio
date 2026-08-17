"use client";

import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useSyncExternalStore,
  ReactNode,
} from "react";
import {
  translations,
  locales,
  type Locale,
  type Translation,
  localeMeta,
} from "./translations";

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "upin-locale";

// useSyncExternalStore for reading the locale from localStorage.
// This is the React-recommended pattern for external stores and avoids
// both hydration mismatches and setState-in-effect anti-patterns.
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("upin-locale-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("upin-locale-change", callback);
  };
}

function getSnapshot(): string {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && locales.includes(saved as Locale)) return saved;
  } catch {
    // localStorage not available
  }
  const browserLang = navigator.language.split("-")[0] as Locale;
  if (locales.includes(browserLang)) return browserLang;
  return "en";
}

function getServerSnapshot(): string {
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  ) as Locale;

  // Apply locale to <html> element (DOM mutation only — no setState)
  useEffect(() => {
    const meta = localeMeta[locale];
    document.documentElement.lang = locale;
    document.documentElement.dir = meta.dir;
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      // ignore
    }
    // Notify all subscribers (including this component) to re-read
    window.dispatchEvent(new Event("upin-locale-change"));
  }, []);

  const value: I18nContextValue = {
    locale,
    setLocale,
    t: translations[locale],
    dir: localeMeta[locale].dir,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
