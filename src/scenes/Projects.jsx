import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, img, description, href }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <a href={href} target="_blank" rel="noreferrer">
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">
            {/* Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt. */}
            {description}
          </p>
        </a>
      </div>
      <img src={`../assets/${img}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          During my journey learning coding, I built a lot of interesting
          projects. Check it up!
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Crown Clothing"
            img="project-1"
            description="An e-commerce website using React"
            href="https://react-project-crown-clothing.netlify.app/"
          />
          <Project
            title="Natours"
            img="project-2"
            description="A tourism websitde using NodeJS"
            href="https://natours-y8cf.onrender.com/"
          />

          {/* ROW 2 */}
          <Project
            title="Map Pin"
            img="project-3"
            description="A map for creating memorable locations"
            href="https://map-pin-app.netlify.app/"
          />
          <Project
            title="Social Media"
            img="project-4"
            description="A social media app"
          />
          <Project
            title="Ransomware"
            img="project-5"
            description="A Python blackmail application exploring security vulnerability"
          />

          {/* ROW 3 */}
          <Project
            title="Patient Record"
            img="project-6"
            description="An ASP.NET application with MVC framework"
          />
          <Project
            title="Tindog"
            img="project-7"
            description="A website enbales fun for dogs"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            FULL-STACK WEBSITE DEVELOPMENT
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
