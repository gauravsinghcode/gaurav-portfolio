import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

export interface SystemData {
  id: string;
  title: string;
  tagline: string;
  whatItDoes: string;
  howStructured: string[];
  whatItTaughtMe: string;
}

interface SystemFocusProps {
  system: SystemData | null;
  onClose: () => void;
}

export function SystemFocus({ system, onClose }: SystemFocusProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (system) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [system]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {system && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-[#1f1f1f] overflow-y-auto hide-scrollbar"
        >
          <div className="min-h-screen flex flex-col w-full max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              onClick={onClose}
              className="fixed top-8 right-6 md:right-12 p-2 text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2 group"
              aria-label="Close"
            >
              <span className="text-sm font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Close
              </span>
              <X className="w-6 h-6 stroke-[1.5]" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="space-y-16 max-w-2xl mt-12"
            >
              <header className="space-y-6">
                <h2 className="text-4xl md:text-5xl text-foreground font-serif leading-tight">
                  {system.title}
                </h2>
                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                    {system.tagline}
                  </p>
                  {system.id === "keyforge" && (
                    <a
                      href="https://github.com/gauravsinghcode/keyforge-password-manager"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-foreground/60 hover:text-foreground underline underline-offset-4 transition-colors duration-300 font-light tracking-wide"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              </header>

              <div className="w-full h-[1px] bg-border/50" />

              <div className="space-y-16 pb-24">
                <section className="space-y-4">
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                    What it does
                  </h3>
                  <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-light">
                    {system.whatItDoes}
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                    How it is structured
                  </h3>
                  <ul className="space-y-5">
                    {system.howStructured.map((item, index) => (
                      <li key={index} className="pl-5 border-l border-white/10">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-4">
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                    What it taught me
                  </h3>
                  <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-light">
                    {system.whatItTaughtMe}
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
