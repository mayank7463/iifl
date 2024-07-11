import React, { useState, useEffect } from "react";
import "./DownloadButton.css";

const DownloadButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [buttonText, setButtonText] = useState("Download report");

  useEffect(() => {
    if (isDownloading) {
      const timer = setTimeout(() => {
        setIsDownloading(false);
        setIsComplete(true);
        setButtonText("Complete");
      }, 5000); // Simulate download time
      return () => clearTimeout(timer);
    }
  }, [isDownloading]);

  const handleButtonClick = () => {
    setIsDownloading(true);
    setButtonText("");
  };

  return (
    <button
      className={`relative overflow-hidden inline-grid items-center justify-center border border-gray-400 bg-white rounded-lg px-4 h-12 w-[40%] text-gray-500 ${
        isDownloading ? "is-downloading" : ""
      } ${isComplete ? "is-complete" : ""}`}
      onClick={handleButtonClick}
    >
      <span className="icon transform transition-transform duration-350 ease-in-out pl-2">
        <span className="block max-w-8 max-h-8">
          <svg viewBox="0 0 50 50">
            <g
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g id="arrow">
                <path
                  id="stem"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M25.0005 35.0005L33.708 26.293 25.0005 35.0005zM25.0005 35.0005L25.0005 10.8419364 25.0005 35.0005z"
                />
                <path
                  id="tick"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M25.0005,35.0005 L33.708,26.293 L25.0005,35.0005 Z"
                />
                <path
                  id="tick2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M25.0005,35.0005 L43.0005,17.0005 L25.0005,35.0005 Z"
                />
                <line
                  x1="16.293"
                  x2="25"
                  y1="26.293"
                  y2="35.001"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </g>
              <path
                id="bottom"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M24.9844157,49.0011568 L24.9844157,29.0011568 L24.9844157,49.0011568 Z"
                transform="rotate(-90 24.984 39.001)"
              />
            </g>
          </svg>
        </span>
      </span>
      <span className="text transform transition-transform duration-750 delay-750 ease-in-out pl-10">
        {buttonText}
      </span>
      <span className="bar absolute bottom-[-0.0625em] left-[-5px] h-[0.25em] w-[calc(100%+10px)] transform scale-x-0 origin-left bg-blue-600 transition-transform duration-[5s]"></span>
    </button>
  );
};

export default DownloadButton;
