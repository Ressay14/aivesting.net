import { motion } from "framer-motion";

interface SectionBlockProps {
  eyebrow?: string;
  title: string;
  body: string;
  media?: React.ReactNode;
  flip?: boolean;
}

export default function SectionBlock({ eyebrow, title, body, media, flip = false }: SectionBlockProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="py-20 bg-[#0B0E17]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-10 sm:px-10 md:grid-cols-2">
        {flip ? (
          <>
            <motion.div {...fadeInRight} className="order-2 md:order-1">
              {media}
            </motion.div>
            <motion.div {...fadeInLeft} className="order-1 md:order-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-300"
              >
                {eyebrow}
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="mb-6 text-4xl font-extra-bold leading-tight text-white md:text-5xl"
              >
                {title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="text-xl text-gray-300 font-light"
              >
                {body}
              </motion.p>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div {...fadeInLeft} className="order-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-300"
              >
                {eyebrow}
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="mb-6 text-4xl font-extra-bold leading-tight text-white md:text-5xl"
              >
                {title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="text-xl text-gray-300 font-light"
              >
                {body}
              </motion.p>
            </motion.div>
            <motion.div {...fadeInRight} className="order-2">
              {media}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
} 