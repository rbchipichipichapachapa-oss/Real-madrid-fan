export default function News() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Real Madrid News
        </h1>
        
        <div className="space-y-6">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Aktuelle Transfergerüchte</h2>
            <p className="text-gray-700 mb-4">
              Die neuesten Updates zu möglichen Zugängen und Abgängen bei Real Madrid.
            </p>
            <div className="text-sm text-gray-500">Veröffentlicht: 1. Oktober 2025</div>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Trainingsupdate</h2>
            <p className="text-gray-700 mb-4">
              Einblicke in die Vorbereitungen des Teams auf das nächste wichtige Spiel.
            </p>
            <div className="text-sm text-gray-500">Veröffentlicht: 30. September 2025</div>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Fanberichte</h2>
            <p className="text-gray-700 mb-4">
              Erfahrungsberichte von Fans aus dem letzten Heimspiel im Santiago Bernabéu.
            </p>
            <div className="text-sm text-gray-500">Veröffentlicht: 29. September 2025</div>
          </article>
        </div>
      </div>
    </main>
  );
}