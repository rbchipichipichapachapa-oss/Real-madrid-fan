export default function Spielplan() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Spielplan
        </h1>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Kommende Spiele</h2>
            
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Real Madrid vs. Barcelona</div>
                    <div className="text-sm text-gray-600">LaLiga</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">23. Oktober 2025</div>
                    <div className="text-sm text-gray-600">20:45 Uhr</div>
                  </div>
                </div>
              </div>

              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Atlético Madrid vs. Real Madrid</div>
                    <div className="text-sm text-gray-600">LaLiga</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">30. Oktober 2025</div>
                    <div className="text-sm text-gray-600">18:30 Uhr</div>
                  </div>
                </div>
              </div>

              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Real Madrid vs. Valencia</div>
                    <div className="text-sm text-gray-600">LaLiga</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">5. November 2025</div>
                    <div className="text-sm text-gray-600">21:00 Uhr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Letzte Ergebnisse</h2>
            
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Real Madrid 3 - 1 Sevilla</div>
                    <div className="text-sm text-gray-600">LaLiga</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">28. September 2025</div>
                  </div>
                </div>
              </div>

              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Real Sociedad 0 - 2 Real Madrid</div>
                    <div className="text-sm text-gray-600">LaLiga</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">24. September 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}