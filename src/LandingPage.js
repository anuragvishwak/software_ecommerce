import React from "react";
import Navbar from "./Navbar";
import img1 from "./Untitled design.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { FaUserGraduate } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="w-full">
      <Navbar />

      <div className="w-full">
        <div className="py-28">
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl md:text-6xl w-7/12 text-[#783f8e] text-center font-bold">
              Launch Your Career with a
            </p>
            <p className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#783f8e] to-[#393e41] bg-clip-text text-transparent">
              Website That Speaks for You.
            </p>
            <p className="text-lg w-7/12 text-center md:text-xl text-[#393e41] my-7 italic">
              Stand out in college projects, impress recruiters, and showcase
              your skills with professionally crafted websites — made just for
              students, freshers, and aspiring developers.
            </p>

            <div className="flex space-x-3">
              <button className="border-[#783f8e] text-[#783f8e] border hover:bg-[#783f8e] py-1 px-5 rounded hover:text-white shadow">
                Learn More
              </button>
              <button className="bg-gradient-to-r from-[#783f8e] to-[#393e41] py-1 px-5 rounded text-white shadow">
                Explore Projects
              </button>
            </div>

            <div className="flex items-center mt-3 space-x-4">
              <div className="flex items-center space-x-1">
                <IoMdCheckmarkCircleOutline className="text-green-500" />
                <p className="text-[#393e41] font-semibold">
                  Free Consultation
                </p>
              </div>

              <div className="flex items-center space-x-1">
                <IoMdCheckmarkCircleOutline className="text-green-500" />
                <p className="text-[#393e41] font-semibold">30 Day Support</p>
              </div>
              <div className="flex items-center space-x-1">
                <IoMdCheckmarkCircleOutline className="text-green-500" />
                <p className="text-[#393e41] font-semibold">
                  Mobile Responsive
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full  justify-center">
          <div>
            <div className="flex items-center space-x-3 justify-center">
              <p className="text-5xl text-[#783f8e] font-bold">Our</p>
              <p className="text-5xl font-bold bg-gradient-to-r from-[#783f8e] to-[#393e41] bg-clip-text text-transparent">
                Services
              </p>
            </div>
            <div className="flex justify-center">
              <p className="text-lg w-10/12 my-5  text-center text-[#393e41] italic">
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
              <div className="w-auto border border-[#783f8e] rounded p-5 shadow">
                <div className="flex text-[#783f8e] items-center space-x-3">
                  <FaUserGraduate size={33} />
                  <p className="text-2xl font-bold">Student Projects</p>
                </div>
                <p className="text-[#393e41] font-semibold">
                  Build stunning websites for your academic and final-year
                  projects that impress teachers, evaluators, and peers.
                </p>
              </div>

              <div className="w-auto border border-[#783f8e] rounded p-5 shadow">
                <div className="flex text-[#783f8e] items-center space-x-3">
                  <GiGraduateCap size={43} />
                  <p className="text-2xl font-bold">
                    Fresher Portfolios & Projects
                  </p>
                </div>
                <p className="text-[#393e41] font-semibold">
                  Launch your career with a professional online presence that
                  goes beyond just a resume.
                </p>
              </div>

              <div className="w-auto border border-[#783f8e] rounded p-5 shadow">
                <div className="flex text-[#783f8e] items-center space-x-3">
                  <TbWorld size={35} />
                  <p className="text-2xl font-bold">Custom CMS Websites</p>
                </div>
                <p className="text-[#393e41] font-semibold">
                  Professional, responsive websites tailored to your brand and
                  business goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#783f8e] to-[#393e41] p-10 my-20">
          <div className="flex items-center space-x-3 justify-center">
            <p className="text-5xl text-white font-bold">Why</p>
            <p className="text-5xl font-bold text-white">Choose Us</p>
          </div>
          <p className="font-semibold text-white my-4 italic text-center px-20">
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

          <div className="grid mt-16 text-white grid-cols-3 gap-5">
            <div className="p-3 rounded-xl border border-white">
              <p className="font-bold text-lg ">Student Focused Solutions</p>
              <p>
                We understand the needs of students and freshers - our services
                are crafted to help you shine in college, internships, and job
                applications
              </p>
            </div>

            <div className="p-3 rounded-xl border border-white">
              <p className="font-bold text-lg ">Real Projects, Not Just Templates</p>
              <p>
                We build custom project and portfolio websites that reflect your
                work and your identity — no generic designs or cookie-cutter
                layouts.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-white">
              <p className="font-bold text-lg ">End-to-End Service</p>
              <p>
                From design to deployment, we handle everything — including
                custom domain setup, hosting, and project guidance.
              </p>
            </div>
            
            <div className="p-3 rounded-xl border border-white">
              <p className="font-bold text-lg ">Responsive & Recruiter-Ready</p>
              <p>
                All websites are mobile-friendly, SEO-optimized, and designed to
                leave a lasting impression on evaluators and recruiters.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-white">
              <p className="font-bold text-lg ">No Code? No Problem</p>
              <p>
                You don’t need to know coding — just share your content, and
                we’ll take care of the rest.
              </p>
            </div>
            
            <div className="p-3 rounded-xl border border-white">
              <p className="font-bold text-lg ">Built for Real-World Impact</p>
              <p>
                Our websites are more than just academic submissions — they
                double as live portfolios to showcase in interviews and on
                LinkedIn.
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
