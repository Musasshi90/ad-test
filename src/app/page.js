import AdBanner from "@/components/ad-banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-8">SpawnHop Ads Test</h1>
      
      <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 w-full max-w-2xl">
        <p className="mb-4">The Google Test Ad should appear below:</p>
        
        {/* THE AD UNIT */}
        <AdBanner />
        
      </div>
    </main>
  );
}