import { motion } from "framer-motion";
import { useState } from "react";
import { SystemFocus, type SystemData } from "@/components/system-focus";

const systemsData: SystemData[] = [
  {
    id: "metagrid",
    title: "MetaGrid",
    tagline: "Metadata-driven foundation for structured CRUD generation.",
    whatItDoes:
      "Inspects database schemas, stores table and column metadata, and dynamically generates CRUD operations through structured rule layers.",
    howStructured: [
      "Separation of validation, metadata resolution, and execution",
      "Compiler-like query builders",
      "Deterministic metadata sync strategy",
      "Operation rules isolated from SQL builders",
    ],
    whatItTaughtMe:
      "Structure reduces accidental complexity. Clear responsibility boundaries create extensible systems.",
  },
  {
    id: "studentos",
    title: "StudentOS",
    tagline:
      "A modular academic productivity system designed with structured workflows.",
    whatItDoes:
      "A structured academic system combining notes, task planning, AI summaries, and workflow automation.",
    howStructured: [
      "Modular feature architecture",
      "Separation of processing and presentation layers",
      "Background task handling for heavy operations",
      "Structured data flow across modules.",
    ],
    whatItTaughtMe:
      "Systems grow sustainable only when modules evolve independently.",
  },
  {
    id: "keyforge",
    title: "Keyforge Password Manager",
    tagline:
      "A secure, client-side password manager built with encryption-first principles.",
    whatItDoes:
      "A password manager that encrypts credentials locally and manages secure storage without exposing raw secrets.",
    howStructured: [
      "Encryption-first design",
      "Clear separation between storage and cryptographic logic",
      "Deterministic password handling",
      "Minimal attack surface principles.",
    ],
    whatItTaughtMe:
      "Security requires deliberate structure. Convenience must never override clarity.",
  },
];

// Helper for consistent fade-up animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Home() {
  const [activeSystem, setActiveSystem] = useState<SystemData | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-foreground selection:text-background">
      {/* Minimal Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-8 md:px-12 md:py-10 flex justify-between items-center mix-blend-difference bg-background/0">
        <div
          className="text-sm font-medium tracking-[0.05em] text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Gaurav Singh
        </div>
        <div className="flex space-x-6 text-sm text-foreground/60">
          <button
            onClick={() => scrollTo("principles")}
            className="hover:text-foreground transition-colors duration-300 tracking-[0.05em]"
          >
            Principles
          </button>
          <span className="opacity-30">|</span>
          <button
            onClick={() => scrollTo("systems")}
            className="hover:text-foreground transition-colors duration-300 tracking-[0.05em]"
          >
            Systems
          </button>
          <span className="opacity-30">|</span>
          <button
            onClick={() => scrollTo("direction")}
            className="hover:text-foreground transition-colors duration-300 tracking-[0.05em]"
          >
            Direction
          </button>
        </div>
      </nav>

      {/* Section 1: Opening */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          className="space-y-12"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] tracking-tight md:leading-[1.4] max-w-4xl mx-auto text-balance"
          >
            Most software is built to function.
            <br />I am learning to build it with structure.
          </motion.h1>

          <motion.div variants={fadeUp} className="space-y-1">
            <p className="text-base md:text-lg font-medium tracking-wide text-foreground/90">
              Gaurav Singh
            </p>
            <p className="text-sm md:text-base text-muted-foreground font-light tracking-wider uppercase">
              Developer focused on systems
            </p>
          </motion.div>
        </motion.div>

        {/* Minimal scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollTo("principles")}
        >
          <span className="w-[1px] h-12 bg-gradient-to-b from-border to-transparent block" />
        </motion.div>
      </section>

      {/* Section 2: Principles */}
      <section
        id="principles"
        className="min-h-screen py-32 px-6 md:px-12 flex items-center justify-center"
      >
        <div className="w-full max-w-4xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-sm font-light tracking-widest uppercase text-muted-foreground mb-20 md:mb-32 text-center"
          >
            Principles
          </motion.h2>

          <div className="space-y-24 md:space-y-32">
            {[
              {
                title: "Structure Before Speed",
                desc: "Quick solutions fix immediate problems. Structured systems prevent future ones.",
              },
              {
                title: "Clarity Over Cleverness",
                desc: "If it’s hard to understand, it’s hard to maintain.",
              },
              {
                title: "Systems Over Scripts",
                desc: "If behavior can be described, it should not be rewritten.",
              },
            ].map((principle, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 items-baseline group"
              >
                <h3 className="text-xl md:text-2xl font-serif text-foreground/90 group-hover:text-foreground transition-colors duration-500">
                  {idx + 1}. {principle.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Systems */}
      <section
        id="systems"
        className="min-h-screen py-32 px-6 md:px-12 bg-[#141414] border-y border-border/20 flex flex-col justify-center"
      >
        <div className="w-full max-w-5xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16 text-sm uppercase tracking-[0.3em] text-foreground/60"
          >
            Systems
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {systemsData.map((system, idx) => (
              <motion.div
                key={system.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: idx * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                onClick={() => setActiveSystem(system)}
                className="group relative block p-8 md:p-10 border border-border/40 bg-background/50 hover:bg-[#1a1a1a] cursor-pointer transition-all duration-500 ease-out"
              >
                <div className="h-full flex flex-col justify-between space-y-12">
                  <h3 className="text-2xl font-serif text-foreground leading-snug group-hover:-translate-y-1 transition-transform duration-500">
                    {system.title}
                  </h3>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-2">
                      {system.tagline}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Direction */}
      <section
        id="direction"
        className="min-h-screen py-32 px-6 flex items-center justify-center text-center"
      >
        <div className="w-full max-w-3xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-sm font-light tracking-widest uppercase text-muted-foreground mb-16 md:mb-24"
          >
            Direction
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-6 text-2xl md:text-4xl font-serif text-foreground/80 leading-[1.6] md:leading-[1.6]"
          >
            <p className="hover:text-foreground transition-colors duration-700">
              I am moving from writing code to designing structure.
            </p>
            <p className="hover:text-foreground transition-colors duration-700">
              From solving tasks to shaping systems.
            </p>
            <p className="hover:text-foreground transition-colors duration-700">
              From making software work to giving it structure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-12 text-center text-xs tracking-widest text-muted-foreground uppercase border-t border-border/20">
        © {new Date().getFullYear()} Gaurav Singh
      </footer>

      {/* System Focus Modal Layer */}
      <SystemFocus
        system={activeSystem}
        onClose={() => setActiveSystem(null)}
      />
    </div>
  );
}
