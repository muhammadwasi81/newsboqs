import React, { useEffect } from "react";
// import AdSense from "react-adsense";

export default function InArticleAdSpot() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  // if (!process?.browser?.window) {
  //   return null;
  // }

  return (
    // <ins
    //   className="adsbygoogle"
    //   style={{ display: "block", textAlign: center }}
    //   data-ad-layout="in-article"
    //   data-ad-format="fluid"
    //   data-ad-client="ca-pub-1992640305654571"
    //   data-ad-slot="7497184820"
    // />
    <ins
    className="adsbygoogle"
    style={{ display: "block", textAlign: center }}
    data-ad-layout="in-article"
    data-ad-format="fluid"
    data-ad-client="ca-pub-1992640305654571"
  />
  );

  // return (
  //   <div className="w-full h-32 flex bg-green-600 text-white justify-center items-center">

  //   </div>
  //   // <></>
  // );
}
