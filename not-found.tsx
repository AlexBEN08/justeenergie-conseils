
export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl md:text-6xl font-semibold text-gray-800">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-6 text-gray-700">Page non trouvée</h2>
        <p className="mt-4 text-xl md:text-2xl text-gray-500">La page que vous recherchez n'existe pas ou a été déplacée.</p>
      </div>
    );
}
