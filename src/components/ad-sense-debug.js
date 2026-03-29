"use client";

import { useEffect, useState } from 'react';

export default function AdSenseDebug() {
  const [status, setStatus] = useState("Scanning for AdSense...");
  const [userAgent, setUserAgent] = useState("loading..."); // Default state
  const [isMounted, setIsMounted] = useState(false); // Track if we are on client

  useEffect(() => {
    setIsMounted(true); // Now we know we are on the client side
    setUserAgent(navigator.userAgent.slice(0, 50)); // Set real UA here

    const interval = setInterval(() => {
      if (window.adsbygoogle) {
        clearInterval(interval);
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          setStatus("✅ SUCCESS: Script detected!");
        } catch (e) {
          setStatus("❌ PUSH ERROR");
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-slate-900 text-white min-h-screen">
      <h1 className="text-xl font-bold mb-4 text-center">SpawnHop Mobile Debug</h1>

      <div className="bg-slate-800 border-2 border-dashed border-slate-700 h-[250px] flex items-center justify-center rounded-lg overflow-hidden">
        <ins className="adsbygoogle"
             style={{ display: 'block', width: '300px', height: '250px' }}
             data-ad-client="ca-pub-3940256099942544"
             data-ad-slot="6300975411" />
      </div>

      <div className="mt-6 p-3 bg-black border border-slate-700 rounded font-mono text-xs">
        <p className="text-green-500">[LOG]: {status}</p>
        
        {/* Only show the UserAgent after mounting to prevent mismatch */}
        <p className="text-blue-400 mt-2">
           Browser: {isMounted ? userAgent : "loading..."}
        </p>
      </div>
    </div>
  );
}