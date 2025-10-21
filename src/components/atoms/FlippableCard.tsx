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
      className="w-full lg:w-72 h-96 perspective cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform transform-style-preserve-3d ${
          flipOn === "hover"
            ? "hover:rotate-y-180"
            : isFlipped
            ? "rotate-y-180"
            : ""
        }`}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 rounded-2xl shadow-lg overflow-hidden backface-hidden flex flex-col justify-around`}
          style={{ backgroundColor: color }}
        >
          {/* Year Container */}
          <div className="flex items-center justify-between backdrop-blur-sm mx-4">
            <h2 className="text-6xl font-bold text-white text-start opacity-20">
              {year}
            </h2>
            <div className="w-8 h-8 bg-white opacity-20 rounded-sm"></div>
          </div>
          {/* Image container */}
          <div className="flex justify-center items-start p-4 h-1/2">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full object-contain transition-transform duration-500 group-hover:scale-105 rounded-md"
              />
            </div>
          </div>
          {/* Title section */}
          <div className="flex flex-col w-full justify-center backdrop-blur-sm">
            <div className="w-full border-t-2 border-dashed border-white/30 mb-3" />
            <h2 className="text-3xl font-semibold text-white text-end px-3">
              {title}
            </h2>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl shadow-lg p-4 rotate-y-180 backface-hidden flex flex-col justify-between"
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
                  className="text-xs text-white backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm"
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
              className="mt-4 text-sm text-white font-medium underline text-right"
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
