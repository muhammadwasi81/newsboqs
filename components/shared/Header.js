import React from "react";
import dynamic from "next/dynamic";
import MenuLogo from "./MenuLogo";
import { SideNavBarProvider } from "../../lib/side-menu-hook"; // Import the context provider


const HorizontalAdSpot = dynamic(() => import("./ads/HorizontalAdSpot"), {
  ssr: false,
});

export default function Header({
  showAdSpace,
  isAbsolute,
  menuData,
  fixedHeight,
  name = null
}) {
  return (
    <SideNavBarProvider>
      <div
        className={`${isAbsolute ? "md:absolute" : ""
          } relative bg-white top-0 w-full z-30 h-full ${fixedHeight ? "4xl:h-28" : ""}`}
      >
        <div
          className={`w-full flex flex-col md:flex-row justify-between ${!isAbsolute ? "bg-transparent" : "bg-accent-color md:bg-transparent "
            }`}
        >
          <div
            className={`flex px-4 mx-auto justify-between w-full ${!showAdSpace ? "md:w-full" : "md:w-1/4"}`}
          >
            <MenuLogo domainName={name} menuData={menuData} showMenuTrigger={true} />
          </div>

          {showAdSpace && <HorizontalAdSpot />}
        </div>
      </div>
    </SideNavBarProvider>
  );
}
