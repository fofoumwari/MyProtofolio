// src/sections/About.tsx
import React from 'react';
import Section from '../components/sections';

const About: React.FC = () => {
  // Your unlisted YouTube Video ID
  const youtubeVideoId = "OWktuUeKuMI";

  // Google Drive file ID of your CV
  const cvFileId = "1kfl857UZJ1IfRCJj_IbV83tdgfWne7mE";

  return (
    <Section id="about" title="About Me" subtitle="Get to know me better">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Video Embed */}
        <div className="w-full lg:w-1/2">
          <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="About me video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Bio Text and Download Links */}
        <div className="w-full lg:w-1/2">
          <p className="text-lg text-gray-700 mb-6">
            I’m Florence, a passionate Electronics and Telecommunication Engineer with a strong drive for
            innovation and problem-solving. My expertise spans embedded systems, IoT, and web development,
            where I enjoy building impactful solutions that blend creativity with technology. I am particularly
            interested in the fields of Artificial Intelligence and modern web development, and I continuously
            seek opportunities to learn, collaborate, and apply my skills to projects that empower people and
            create lasting change.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`https://drive.google.com/file/d/${cvFileId}/view?usp=sharing`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              View CV
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
