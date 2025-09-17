import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Willkommen bei Real Madrid Fan
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Aktuelle Neuigkeiten</h2>
            <p className="text-gray-700">
              Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten rund um Real Madrid.
            </p>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Spielplan</h2>
            <p className="text-gray-700">
              Hier finden Sie alle kommenden Spiele und Ergebnisse.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Die ultimative Fanseite für alle Real Madrid Anhänger
          </p>
        </div>
      </div>
    </main>
  );
}
