import React, { useState } from "react";
import tinycolor from "tinycolor2";

interface FlippableCardProps {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  link?: string;
  year?: string;
  color?: string;
  flipOn?: "hover" | "click";
}

const FlippableCard: React.FC<FlippableCardProps> = ({
  title,
  image,
  description,
  techStack,
  link,
  year = "2025",
  color = "#fff",
  flipOn = "hover",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (flipOn === "click") setIsFlipped((prev) => !prev);
  };

  const toColor = tinycolor(color).analogous()[1].toHexString();
  const foregroundColor = tinycolor(color).lighten(40).toHexString();

  return (
    <div
      className="w-full lg:w-72 h-96 perspective cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-all duration-700 transform transform-style-preserve-3d ${
          flipOn === "hover"
            ? "hover:rotate-y-180"
            : isFlipped
            ? "rotate-y-180"
            : ""
        }`}
      >
        {/* Front */}
        <div
          className={`
    absolute inset-0 rounded-2xl overflow-hidden backface-hidden
    flex flex-col justify-between
    shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1
  `}
          style={{
            background: `linear-gradient(145deg, ${color} 40%, ${toColor} 100%)`,
          }}
        >
          {/* Top section */}
          <div className="flex items-center justify-between px-5 py-4 bg-white/5 backdrop-blur-md">
            <h2 className="text-6xl font-bold text-white/20 tracking-tight">
              {year}
            </h2>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/30 to-transparent" />
          </div>

          {/* Image */}
          <div className="relative flex justify-center items-center px-5">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-inner">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
              />
              {/* subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
            </div>
          </div>

          {/* Bottom title */}
          <div className="relative px-5 py-4 bg-white/10 backdrop-blur-sm border-t border-white/20">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-right drop-shadow-sm">
              {title}
            </h2>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl shadow-lg p-4 rotate-y-180 backface-hidden flex flex-col justify-between transition-shadow duration-300 hover:shadow-xl"
          style={{
            background: `linear-gradient(135deg, ${color}, ${toColor})`,
          }}
        >
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Description
            </h3>
            <p className="text-sm text-white/80">{description}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mt-4 mb-2">
              Tech Stack
            </h4>
            <ul className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <li
                  key={index}
                  className="text-xs text-white backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm transition-transform duration-300 hover:scale-105"
                  style={{
                    backgroundColor: tinycolor(color)
                      .setAlpha(0.2)
                      .toRgbString(),
                    border: `1px solid ${foregroundColor}`,
                  }}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm text-white font-medium underline text-right transition-colors duration-300 hover:text-opacity-80"
            >
              See Project →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
