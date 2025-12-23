import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import ContactForm from "../components/ContactForm";

export default function Landing() {

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const { user } = useContext(AuthContext);

  console.log(user)

  const FAQs = [
    {
      q: "Is Mentivra free to use?",
      a: "Yes. Our platform is currently free during early access development.",
    },
    {
      q: "Do you provide chapter-wise PYQs?",
      a: "Yes. Each subject is organized chapter-wise, topic-wise, and year-wise.",
    },
    {
      q: "Are answer keys available?",
      a: "Correct answers are available and detailed solutions are being added.",
    },
    {
      q: "Is this made by real JEE/NEET aspirants?",
      a: "The platform is shaped by people who cleared national exams.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-32 relative overflow-hidden bg-[#03081e]">

      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-indigo-900/30 pointer-events-none" />

      {/* Glass Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />

      {/* HERO SECTION */}
      <div className="relative z-10 max-w-4xl px-6 text-center">

        <h1 data-aos="fade-up" className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6">
          Learn With Clarity
          <span className="block text-indigo-400 mt-2">
            Perform With Confidence
          </span>
        </h1>

        <p data-aos="fade-up"
          data-aos-delay="150" className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-lg md:text-xl">
          Practice previous year questions chapter-wise with clarity and focus.
          Designed for serious aspirants and trusted by parents.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex justify-center gap-4">
          <Link
            to={user ? "/dashboard" : "/signup"}
            className="px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white transition text-lg"
          >
            Start Practicing
          </Link>

          {!user && (
            <Link
              to="/login"
              className="px-6 py-3 rounded-md border border-white/20 text-gray-200 hover:border-white/40 transition text-lg"
            >
              Login
            </Link>
          )}
        </div>


      </div>

      {/* PRODUCT DESCRIPTION & CREDIBILITY CARD */}
      <div data-aos="zoom-in" className="relative z-10 w-full mt-32 px-6 ">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-lg">

          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-6">
            JEE & NEET - Preparation Structured Calm Effective.
          </h2>

          <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed mb-8">
            Mentivra offers carefully curated JEE & NEET previous year questions — chapter-wise, subject-wise,
            and year-based — across Physics, Chemistry, Mathematics, and Biology.
          </p>

          <p className="text-gray-400 text-center text-md leading-relaxed max-w-3xl mx-auto mb-10">
            Our platform is backed by successful JEE/NEET aspirants who cleared these exams and understand what truly matters.
            We provide promising career guidance, most-likely important questions, and answer keys to help serious students improve rapidly.
          </p>

          {/* OFFICIAL EXAM WEBSITE BUTTONS */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">

            <a
              href="https://jeemain.nta.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 transition text-white text-center min-w-[220px]"
            >
              Visit Official JEE Website
            </a>

            <a
              href="https://neet.nta.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 transition text-white text-center min-w-[220px]"
            >
              Visit Official NEET Website
            </a>

          </div>

          {/* SYLLABUS DOWNLOAD */}
          <div className="flex flex-col md:flex-row justify-center gap-6">

            <a
              href="JEE_Syllabus.pdf"
              download
              className="px-6 py-3 rounded-md border border-white/20 text-gray-200 hover:border-white/40 transition min-w-[220px] text-center"
            >
              Download JEE Syllabus (PDF)
            </a>

            <a
              href="NEET_Syllabus.pdf"
              download
              className="px-6 py-3 rounded-md border border-white/20 text-gray-200 hover:border-white/40 transition min-w-[220px] text-center"
            >
              Download NEET Syllabus (PDF)
            </a>

          </div>

          {/* SYLLABUS VIEW LINKS */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">

            <a
              href="https://jeemain.nta.nic.in/document/syllabus-for-jee-main-2025/"
              className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 transition text-gray-200 border border-white/10 min-w-[220px] text-center"
            >
              View JEE Syllabus Online
            </a>

            <a
              href="https://neet.nta.nic.in/document/syllabus-for-neet-ug-2025-examination-reg/"
              className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 transition text-gray-200 border border-white/10 min-w-[220px] text-center"
            >
              View NEET Syllabus Online
            </a>

          </div>

        </div>
      </div>

      {/* SUBJECT SHOWCASE */}
      <div className="relative z-10 w-full mt-32 px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Subjects Available
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

          {["Physics", "Chemistry", "Mathematics", "Biology"].map((sub, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="
                bg-white/5 backdrop-blur-xl border border-white/10 
                rounded-xl p-6 text-center transition 
                hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]
              "
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {sub}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Topic-wise structured previous year questions to boost accuracy.
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* FAQ SECTION */}
      <div data-aos="fade-up" className="relative z-10 w-full mt-32 px-6 pb-32">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">

          {FAQs.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl 
                p-5 cursor-pointer transition hover:bg-white/10
              "
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-white font-medium text-lg">
                  {item.q}
                </h3>

                <span className="text-indigo-400 text-xl font-bold">
                  {openFAQ === index ? "-" : "+"}
                </span>
              </div>

              {openFAQ === index && (
                <p className="text-gray-300 mt-3 leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}

        </div>
      </div>
      {/* CONTACT SECTION */}
      <div className="relative z-10 w-full mt-32 px-6 pb-32 " data-aos="zoom-in">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Contact Us
        </h2>

        <ContactForm />
      </div>

      {/* Bottom Spacer */}
      <div className="h-32" />


    </div>
  );
}
