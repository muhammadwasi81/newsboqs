import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { SocialMediaLinks } from "../../data";
import LangSwitch from "./LangSwitch"

export default function Footer() {
    
  return (
    <div className="bg-transparent mt-4 w-full py-3 px-5 border-t border-gray-400">
      <div className="w-full relative flex flex-col md:flex-row gap-y-5 justify-between items-center  container mx-auto">
        
        <div className="text-gray-400 font-semibold text-xs">
          Newsboqs Copyright 2023. 
        </div>

        {/* SUBDOMAIN LINKS */}
        <div className="flex justify-evenly gap-x-3">
          {SocialMediaLinks.map((SocialMediaLink) => (
            <div
              className={`h-8 text-accent-color hover:underline hover:text-accent-color/60 text-sm flex text-center justify-center items-center `}
              key={SocialMediaLink}
            >
              <NextLink
                prefetch={false}
                target="_blank"
                href={SocialMediaLink.link}
              >
                {SocialMediaLink.platform}
              </NextLink>
            </div>
          ))}
        </div>
          <LangSwitch/>
      </div>
    </div>
  );
}
