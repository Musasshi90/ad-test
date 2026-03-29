"use client";

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function AdSenseDebug() {
  const [status, setStatus] = useState("Waiting for Script...");

  // This function runs the moment Google's script is actually READY
  const handleOnReady = () => {
    console.log("AdSense Script is ready!");
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      setStatus("✅ SUCCESS: AdSense Initialized.");
    } catch (e) {
      setStatus("❌ PUSH ERROR: Check Console.");
    }
  };

  return (
    <div className="bg-slate-900 p-5 text-center text-white min-h-screen">
      <h1 className="text-xl font-bold">SpawnHop Mobile Ad Test</h1>

      {/* Re-declaring the script here with onReady for local debugging */}
      <Script
        id="adsense-init"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3940256099942544"
        onReady={handleOnReady} // 👈 This waits for the script to finish loading
      />

      <div className="my-5 w-full max-w-[728px] min-h-[250px] bg-slate-800 border-2 border-dashed border-slate-600 flex items-center justify-center mx-auto rounded-xl">
        <ins className="adsbygoogle"
             style={{ display: 'block', width: '100%' }}
             data-ad-client="ca-pub-3940256099942544"
             data-ad-slot="6300975411"
             data-ad-format="auto"
             data-full-width-responsive="true" />
      </div>

      <div className="mt-8 p-4 bg-black rounded-lg text-left font-mono text-xs border border-slate-700">
        <div className="text-green-400 mb-1">[SYSTEM LOG]</div>
        <div className={status.includes('✅') ? 'text-green-400' : 'text-yellow-400'}>
          {status}
        </div>
      </div>
    </div>
  );
}