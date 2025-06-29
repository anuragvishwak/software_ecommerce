import React from "react";
import Navbar from "./Navbar";
import img1 from "./Untitled design.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { FaUserGraduate } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full">
      <Navbar />

      <div className="w-full">
        <div className="py-60">
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start 50px below
            animate={{ opacity: 1, y: 0 }} // Animate to original position
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center items-center"
          >
            <p className="text-4xl md:text-6xl w-7/12 text-[#5c24cc] text-center font-bold">
              Launch Your Career with a
            </p>
            <p className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#5c24cc] to-[#FF0B55] bg-clip-text text-transparent">
              Website That Speaks for You.
            </p>
            <p className="text-lg w-7/12 text-center md:text-xl text-[#333333] my-7 italic">
              Stand out in college projects, impress recruiters, and showcase
              your skills with professionally crafted websites — made just for
              students, freshers, and aspiring developers.
            </p>

            <div className="flex space-x-3">
              <button className="border-[#2b233a] text-[#2b233a] border hover:border-none hover:bg-gradient-to-r from-[#5c24cc] to-[#FF0B55] py-1 px-5 rounded hover:text-white shadow">
                Learn More
              </button>
              <button className="bg-gradient-to-r from-[#5c24cc]  to-[#FF0B55] py-1 px-5 rounded text-white shadow">
                Explore Projects
              </button>
            </div>

            <div className="flex items-center mt-3 space-x-4">
              <div className="flex items-center space-x-1">
                <IoMdCheckmarkCircleOutline className="text-green-500" />
                <p className="text-[#333333] font-semibold">
                  Free Consultation
                </p>
              </div>

              <div className="flex items-center space-x-1">
                <IoMdCheckmarkCircleOutline className="text-green-500" />
                <p className="text-[#333333] font-semibold">30 Day Support</p>
              </div>
              <div className="flex items-center space-x-1">
                <IoMdCheckmarkCircleOutline className="text-green-500" />
                <p className="text-[#333333] font-semibold">
                  Mobile Responsive
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex w-full  justify-center">
          <div>
            <div className="flex items-center space-x-3 justify-center">
              <p className="text-5xl text-[#5c24cc] font-bold">Our</p>
              <p className="text-5xl font-bold bg-gradient-to-r from-[#5c24cc] to-[#FF0B55] bg-clip-text text-transparent">
                Services
              </p>
            </div>
            <div className="flex justify-center">
              <p className="text-lg w-10/12 my-5  text-center text-[#333333] italic">
                We specialize in creating modern, responsive websites for
                students, freshers, and early-stage startups. Whether it’s a
                portfolio, college project, or a landing page, we deliver clean
                and professional designs tailored to your goals. Our websites
                are built to perform well, look great on all devices, and leave
                a lasting impression. Let us help you build your online identity
                with confidence.
              </p>
            </div>

            <div className="grid grid-cols-3 p-5 gap-6">
              <div className="w-auto border border-[#2b233a] p-5 shadow">
                <div className="flex text-[#2b233a] items-center space-x-3">
                  <FaUserGraduate className="text-[#5c24cc]" size={33} />
                  <p className="text-2xl bg-gradient-to-r from-[#5c24cc] to-[#FF0B55] bg-clip-text text-transparent font-bold">Student Projects</p>
                </div>
                <p className="text-[#333333] text-justify my-10 font-semibold">
                  Build visually stunning and functionally impressive websites
                  for your academic assignments and final-year projects that not
                  only meet technical requirements but truly wow your teachers,
                  evaluators, and peers. Our designs help you stand out with
                  clean code, modern UI/UX, and features that bring your project
                  ideas to life — making your submissions memorable,
                  professional, and presentation-ready.
                </p>

                <button className="mt-6">
                  <div className="flex items-center space-x-2">
                    <p className="bg-gradient-to-r from-[#5c24cc] to-[#FF0B55] bg-clip-text text-transparent font-bold">Learn More</p>
                    <FaArrowRightLong className="mt-1" />
                  </div>
                </button>
              </div>

              <div className="w-auto border border-[#2b233a] p-5 shadow">
                <div className="flex text-[#2b233a] items-center space-x-3">
                  <GiGraduateCap className="text-[#FF0B55]" size={43} />
                  <p className="text-2xl bg-gradient-to-r from-[#5c24cc] to-[#FF0B55] bg-clip-text text-transparent font-bold">
                    Fresher Portfolios & Projects
                  </p>
                </div>
                <p className="text-[#333333] text-justify my-10 font-semibold">
                  Launch your career with a powerful and professional online
                  presence that goes far beyond just a traditional resume. With
                  a personalized website that highlights your skills, projects,
                  and achievements in a visually engaging and interactive
                  format, you’ll stand out to recruiters, potential employers,
                  and academic institutions — making a strong first impression
                  before you even step into an interview.
                </p>

                <button className="mt-4">
                  <div className="flex items-center space-x-2">
                    <p className="bg-gradient-to-r from-[#5c24cc] to-[#FF0B55] bg-clip-text text-transparent font-bold">Learn More</p>
                    <FaArrowRightLong className="mt-1" />
                  </div>
                </button>
              </div>

              <div className="w-auto border border-[#2b233a] p-5 shadow">
                <div className="flex text-[#2b233a] items-center space-x-3">
                  <TbWorld className="text-[#5c24cc]" size={35} />
                  <p className="text-2xl bg-gradient-to-r from-[#5c24cc] to-[#FF0B55] bg-clip-text text-transparent font-bold">Custom CMS Websites</p>
                </div>
                <p className="text-[#333333] text-justify my-10 font-semibold">
                  We craft professional, fully responsive websites that are
                  thoughtfully tailored to reflect your unique brand identity
                  and align seamlessly with your specific business or academic
                  goals. Whether you're building a personal portfolio, launching
                  a startup, or showcasing a final-year project, our websites
                  are designed to look exceptional on every device while
                  delivering clarity, performance, and purpose that resonate
                  with your audience.
                </p>

                <button>
                  <div className="flex  items-center space-x-2">
                    <p className="bg-gradient-to-r from-[#5c24cc] to-[#FF0B55] font-bold bg-clip-text text-transparent">Learn More</p>
                    <FaArrowRightLong className="mt-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 my-40">
          <div className="flex items-center space-x-3 justify-center">
            <p className="text-5xl text-[#5c24cc] font-bold">Why</p>
            <p className="text-5xl font-bold bg-gradient-to-r from-[#5c24cc] to-[#FF0B55] bg-clip-text text-transparent">
              Choose Us
            </p>
          </div>
          <p className="text-[#333333] my-10 italic text-center px-20">
            At our core, we focus on helping students and freshers make a
            powerful first impression. Whether it's a college project,
            internship application, or job hunt, we create custom websites that
            truly represent you — not just templated pages. From interactive
            resumes to live project showcases, we handle everything from design
            to deployment, including domain setup and hosting. Our websites are
            fully responsive, SEO-friendly, and crafted to impress evaluators
            and recruiters alike. Even if you don’t know how to code, we make it
            easy for you to stand out with a professional online presence that
            speaks volumes.
          </p>

          <div className="flex items-center">
            <div>
              <div className="flex space-x-5 mb-5">
                <div
                  className="p-3 rounded-xl border-2 bg-white border-[#5c24cc]
"
                >
                  <p className="font-bold text-lg bg-gradient-to-r from-[#5c24cc] to-[#FF0B55] bg-clip-text text-transparent">
                    Student Focused Solutions
                  </p>
                  <p className="text-[#333333] text-justify">
                    We understand the needs of students and freshers - our
                    services are crafted to help you shine in college,
                    internships, and job applications
                  </p>
                </div>

                <div className="p-3 rounded-xl border-2 border-[#FF0B55] bg-white">
                  <p className="font-bold bg-gradient-to-r from-[#5c24cc] to-[#FF0B55] bg-clip-text text-transparent text-lg">
                    Real Projects, Not Just Templates
                  </p>
                  <p className="text-[#333333] text-justify">
                    We build custom project and portfolio websites that reflect
                    your work and your identity — no generic designs or
                    cookie-cutter layouts.
                  </p>
                </div>

                <div className="p-3 rounded-xl border-2 border-[#5c24cc] bg-white">
                  <p className="font-bold text-lg bg-gradient-to-r from-[#5c24cc] to-[#FF0B55] bg-clip-text text-transparent">
                    End-to-End Service
                  </p>
                  <p className="text-[#333333] text-justify">
                    From design to deployment, we handle everything — including
                    custom domain setup, hosting, and project guidance.
                  </p>
                </div>
              </div>

              <div className="flex space-x-5">
                <div className="p-3 rounded-xl border-2 border-[#FF0B55] bg-white">
                  <p className="font-bold text-lg bg-gradient-to-r from-[#5c24cc] to-[#FF0B55] bg-clip-text text-transparent">
                    Responsive & Recruiter-Ready
                  </p>
                  <p className="text-[#333333] text-justify">
                    All websites are mobile-friendly, SEO-optimized, and
                    designed to leave a lasting impression on evaluators and
                    recruiters.
                  </p>
                </div>

                <div className="p-3 rounded-xl border-2 border-[#5c24cc] bg-white">
                  <p className="font-bold text-lg bg-gradient-to-r from-[#5c24cc] to-[#FF0B55] bg-clip-text text-transparent">
                    No Code? No Problem
                  </p>
                  <p className="text-[#333333] text-justify">
                    You don’t need to know coding — just share your content, and
                    we’ll take care of the rest.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 w-9/12 rounded-xl border ml-5 border-white bg-gradient-to-r from-[#5c24cc] to-[#FF0B55]">
              <p className="font-bold text-lg text-white">
                Built for Real-World Impact
              </p>
              <p className="text-white text-justify">
                Our websites go far beyond standard academic submissions — they
                are crafted to function as powerful, real-world portfolios that
                not only fulfill college requirements but also serve as live
                showcases of your skills and achievements. Whether you're
                preparing for interviews or building your presence on platforms
                like LinkedIn or GitHub, these websites act as a lasting digital
                identity that helps you stand out to recruiters, mentors, and
                peers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
