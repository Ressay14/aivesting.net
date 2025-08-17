import { motion } from "framer-motion";
const EASE = [0.22,1,0.36,1] as const;

export default function SectionBlock({
  eyebrow, title, body, media, flip=false
}: {
  eyebrow?: string; title: string; body: string; media?: React.ReactNode; flip?: boolean;
}) {
  return (
    <section className="bg-[#0B0E17]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 sm:px-10 md:grid-cols-2">
        <div className={flip ? "order-2 md:order-1" : ""}>
          {eyebrow && <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } }}
            viewport={{ once: true, margin: "-10% 0px" }}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-white/70 backdrop-blur"
          >{eyebrow}</motion.span>}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay: 0.05 }}}
            viewport={{ once: true, margin: "-10% 0px" }}
            className="mt-3 text-3xl font-bold sm:text-4xl"
          >{title}</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay: 0.12 }}}
            viewport={{ once: true, margin: "-10% 0px" }}
            className="mt-3 max-w-xl text-white/75"
          >{body}</motion.p>
        </div>

        {media && (
          <motion.div
            className={flip ? "order-1 md:order-2" : ""}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: 0.1 }}}
            viewport={{ once: true, margin: "-10% 0px" }}
            whileHover={{ y: -4, transition: { duration: 0.3, ease: EASE }}}
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              {media}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 