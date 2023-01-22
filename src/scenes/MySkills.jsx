import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I am experienced in web application development and I am famaliar
            with lots of JavaScript framework as well as different operating
            systems. And also, I am a quick learner with adaptability!
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="../assets/skills-image.jpg"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.jpg" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <div className="flex justify-center md:justify-start my-5 gap-5">
                <p className="font-playfair font-semibold text-5xl">01 </p>
                <img
                  className="ml-8 mt-2"
                  alt="linkedin-link"
                  src="../assets/react.png"
                />
                <img
                  className="mt-2"
                  alt="linkedin-link"
                  src="../assets/nodejs.png"
                />
                <img
                  className="mt-2"
                  alt="linkedin-link"
                  src="../assets/dotnet.png"
                />
              </div>

              <p className="font-playfair font-semibold text-3xl mt-3">
                React / NodeJS / .Net
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-1 z-[-1]"></div>
          </div>
          <p className="mt-5">
            Build reactive, performant, large-scale web applications with
            popular frameworks such as React, NodeJS, and .Net Core.
          </p>
          <p className="mt-2">
            Embrace third-party libraries such as Material UI, Styled
            Components, Redux, Express, Pug. Familiar with ASP.NET MVC
            framework.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <div className="flex justify-center md:justify-start my-5 gap-5">
                <p className="font-playfair font-semibold text-5xl">02</p>
                <img
                  className="ml-10 mt-2"
                  alt="linkedin-link"
                  src="../assets/aws.png"
                />
                <img
                  className="ml-10 mt-2"
                  alt="linkedin-link"
                  src="../assets/docker.png"
                />
              </div>
              <p className="font-playfair font-semibold text-3xl mt-3">
                AWS / Docker
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Certified AWS Cloud Practitioner with hands-on experience of
            container management and infrastructure design. Capable of
            configuring instances, constinuos integration, and continuous
            deployment of enterprise-level applications.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <div className="flex justify-center md:justify-start my-5 gap-5">
                <p className="font-playfair font-semibold text-5xl">03</p>
                <img
                  className="ml-10 mt-2"
                  alt="linkedin-link"
                  src="../assets/mongodb.png"
                />
                <img
                  className="mt-2"
                  alt="linkedin-link"
                  src="../assets/firebase.png"
                />
              </div>
              <p className="font-playfair font-semibold text-3xl mt-3">
                MongoDB / Firebase
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Migrate from traditional SQL to NoSQL database like MongoDB, and set
            up Schema, data encripton, data aggregation. Leverage Firebase to
            enable real-time user authentication and autherization.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
