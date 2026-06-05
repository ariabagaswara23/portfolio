import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  link?: string;
  year?: string;
  color?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  techStack,
  link,
  year = "2025",
  color = "#00a2fa",
}) => {
  return (
    <div className="flex flex-col bg-custom-glass rounded-xl overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,162,250,0.15)] group">
      {/* Image Section */}
      <div className="relative w-full aspect-video bg-[#050B14]/50 p-4 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        {/* Year Badge */}
        <div className="absolute top-4 right-4 bg-[#0B1120]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-white shadow-lg">
          {year}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-2xl font-bold text-white mb-3" style={{ color: color }}>{title}</h3>
        <p className="text-sm text-gray-300 mb-5 flex-grow leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="mb-6">
          <ul className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <li
                key={index}
                className="text-xs text-white/90 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md font-medium transition-colors hover:bg-white/10"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Link */}
        {link && (
          <div className="mt-auto pt-4 border-t border-white/10">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300"
            >
              View Project <FaExternalLinkAlt className="ml-2 w-3 h-3" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
