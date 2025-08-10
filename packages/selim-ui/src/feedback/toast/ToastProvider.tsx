import React from 'react';
import './toast.css';

type ToastVariant = 'default' | 'success' | 'warning' | 'danger';
export interface ToastOptions { id?: string; title?: string; description?: string; variant?: ToastVariant; durationMs?: number }

interface Toast extends Required<Pick<ToastOptions, 'id' | 'title' | 'description' | 'variant'>> { expiresAt?: number }

interface ToastContextValue { addToast: (opts: ToastOptions) => void }
const ToastContext = React.createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);
  const addToast = React.useCallback((opts: ToastOptions) => {
    const id = opts.id || Math.random().toString(36).slice(2);
    const variant = opts.variant || 'default';
    const toast: Toast = { id, title: opts.title || '', description: opts.description || '', variant, expiresAt: opts.durationMs ? Date.now() + opts.durationMs : undefined };
    setToasts((prev) => [...prev, toast]);
  }, []);

  React.useEffect(() => {
    const i = setInterval(() => {
      setToasts((prev) => prev.filter((t) => !t.expiresAt || t.expiresAt > Date.now()));
    }, 500);
    return () => clearInterval(i);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="su-toast__viewport">
        {toasts.map((t) => (
          <div key={t.id} className={["su-toast", `su-toast--${t.variant}`].join(' ')}>
            {t.title ? <div className="su-toast__title">{t.title}</div> : null}
            {t.description ? <div className="su-toast__desc">{t.description}</div> : null}
            <button className="su-toast__close" onClick={() => setToasts((prev) => prev.filter((x) => x.id !== t.id))}>×</button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within <ToastProvider/>');
  return ctx;
}

