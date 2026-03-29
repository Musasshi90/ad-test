"use client";

import { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    try {
      // Ensure adsbygoogle is defined and only push once
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="my-8 w-full flex justify-center overflow-hidden">
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3940256099942544"
        data-ad-slot="6300975411"
      />
    </div>
  );
}