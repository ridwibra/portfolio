"use client";
import React, { useState } from "react";

const TAB_DATA = [
  {
    title: "Lesson Plans",
    id: "lessns",
    content: (
      <div className="grid md:grid-cols-1 gap-6">
        {[
          "/files/Lesson Plan for Advanced EFA 04_11_2025.pdf",
          "/files/Lesson Plan for Advanced EFA 04_12_2025.pdf",
          "/files/Lesson Plan for Advanced EFA 23_10_2025.pdf",
        ].map((src, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <iframe
              src={src}
              className="w-full h-[70vh] md:h-[80vh] rounded-md"
              title={`Lesson Plan ${i + 1}`}
            />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Teaching Video",
    id: "teaching",
    content: (
      <div className="flex justify-center">
        <video
          controls
          className="rounded-lg shadow-lg w-full md:w-3/4 h-[60vh] md:h-[70vh] border border-gray-200 dark:border-gray-700"
        >
          <source src="/videos/teaching.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    ),
  },
  {
    title: "Letter to Employer",
    id: "letter",
    content: (
      <div className="flex justify-center">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden w-full md:w-[80%]">
          <iframe
            src="\files\Dear Future Employers.pdf"
            className="w-full h-[70vh] md:h-[80vh] rounded-md"
            title="Letter to Employer"
          />
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("lessns");

  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center py-12 px-6"
    >
      <div className="text-center max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-10">
          I am a teacher with the English For All program. I have been teaching
          for many years. I am passionate about helping students improve their
          English skills and achieve their goals. I am committed to providing a
          supportive and engaging learning environment for all of my students.
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {TAB_DATA.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 
                ${
                  tab === t.id
                    ? "bg-primary-600 text-white shadow-md"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-primary-500 hover:text-white"
                }`}
            >
              {t.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8 text-gray-700 dark:text-gray-300">
          {TAB_DATA.find((t) => t.id === tab)?.content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
