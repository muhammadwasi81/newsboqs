import React from "react";

export default function LeftAccentedH2Text({ text, isCapitalize = false, isUppercase = false }) {
  return (
    <div className="flex flex-row items-center mb-4">
      <span className="h-full  bg-accent-color">&nbsp;</span>
      <h2
        className={`font-bold text-2xl block  ml-2 ${
          isCapitalize ? "capitalize" : isUppercase ? "uppercase" : ""
        }`}
      >
        {text}
      </h2>
    </div>
  );
}
