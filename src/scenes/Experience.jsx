import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          EXPERIENCE
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's where my journey started and still going on.
        </p>
      </motion.div>

      {/* EXPERIENCE */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-10 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-opensans text-3xl text-deep-blue">
            E-learning Developer
          </p>
          <p className="text-left text-xl mt-3">
            Created e-learning courses using Articulate and Captivate,
            communicated intensively with designers, engineers, and developers.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-10 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-opensans text-3xl text-deep-blue">
            International Student
          </p>
          <p className="text-left text-xl mt-3">
            Completed two Graduate Certificates: Computer Applications
            Development (GPA: 3.91), and Computer Application Security (GPA:
            3.88).
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-10 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-opensans text-3xl text-deep-blue">
            Bank Sales Manager
          </p>
          <p className="text-left text-xl mt-3">
            Gathered, processed, stored, and analyzed data that involve the
            transactions and other activities of the customers to improve the
            sales strategy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
