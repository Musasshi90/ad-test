"use client";

import { useEffect, useState } from 'react';

export default function AdSenseDebug() {
  const [status, setStatus] = useState("Checking connection...");
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // 1. Set initial width and update info
    setScreenWidth(window.innerWidth);

    // 2. Trigger the Google Ad push
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense push error:", e);
    }

    // 3. Run the Debug Logger (Wait 4 seconds like your original code)
    const timer = setTimeout(() => {
      if (window.adsbygoogle && window.adsbygoogle.loaded) {
        setStatus("✅ SUCCESS: AdSense Script Active. Check for 'Nice Job' image.");
      } else if (window.adsbygoogle) {
        setStatus("⚠️ SCRIPT LOADED: But not 'initialized' yet. Try refreshing.");
      } else {
        setStatus("❌ BLOCKED: Script failed to load. (Check ISP/VPN/AdBlock)");
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#0f172a', color: 'white' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>SpawnHop Ad Test</h1>
      
      {/* AD CONTAINER */}
      <div style={{
        margin: '20px auto',
        width: '100%',
        maxWidth: '728px',
        minHeight: '250px',
        background: '#1e293b',
        border: '2px dashed #334155',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '12px'
      }}>
        <ins className="adsbygoogle"
             style={{ display: 'block', width: '100%' }}
             data-ad-client="ca-pub-3940256099942544"
             data-ad-slot="6300975411"
             data-ad-format="auto"
             data-full-width-responsive="true" />
      </div>

      {/* SYSTEM LOG BOX */}
      <div style={{
        marginTop: '30px',
        padding: '15px',
        background: '#000',
        borderRadius: '8px',
        textAlign: 'left',
        fontFamily: 'monospace',
        fontSize: '12px',
        border: '1px solid #333'
      }}>
        <div style={{ color: '#4ade80', marginBottom: '5px' }}>[SYSTEM LOG]</div>
        <div style={{ color: status.includes('✅') ? '#4ade80' : status.includes('⚠️') ? '#fbbf24' : '#f87171' }}>
          {status}
        </div>
        <div style={{ marginTop: '5px', color: '#60a5fa' }}>
          Screen Width: {screenWidth}px
        </div>
      </div>
    </div>
  );
}