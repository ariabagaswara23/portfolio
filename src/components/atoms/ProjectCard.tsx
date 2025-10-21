import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  year?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  techStack,
  link,
  year = "2025",
}) => {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="group cursor-pointer rounded-xl overflow-hidden shadow-lg z-10 bg-[#003757] text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image || "https://via.placeholder.com/400x300?text=No+Image"}
          alt={"tes"}
          className="w-full h-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105 border-b-primary border-b-4"
        />
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-xl font-semibold group-hover:text-[#00a2fa] transition-colors duration-300">
          {title || "Project Title"}
        </h3>
        <p className="text-xs text-gray-400">{year}</p>
        <p className="text-sm text-gray-200">
          {description || "Project description goes here."}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-[#00a2fa]/20 border border-[#00a2fa]/40 text-[#00a2fa] px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
