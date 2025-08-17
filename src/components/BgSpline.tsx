import React from "react";

export default function BgSpline() {
  const SRC = "https://my.spline.design/claritystream-UP1e3zVdkyCdHDXSf8h1Ko0O/";

  return (
    <>
      <iframe
        title="AIVesting Background"
        src={SRC}
        className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        loading="eager"
      />
      {/* Legibility overlays */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-[#0B0E17]/86 via-[#0B0E17]/64 to-[#0B0E17]/32" />
      <div className="pointer-events-none fixed inset-0 -z-10 [box-shadow:inset_0_0_160px_60px_rgba(0,0,0,0.55)]" />
      {/* Reduced motion + mobile fallback */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          iframe[title="AIVesting Background"] { display: none; }
          body::before {
            content: ""; position: fixed; inset: 0; z-index: -10;
            background: #0B0E17 url("/bg-fallback.jpg") center/cover no-repeat;
          }
        }
        @media (max-width: 1024px) {
          iframe[title="AIVesting Background"] { display: none; }
          body::before {
            content: ""; position: fixed; inset: 0; z-index: -10;
            background: #0B0E17 url("/bg-fallback-mobile.jpg") center/cover no-repeat;
          }
        }
      `}</style>
    </>
  );
} 