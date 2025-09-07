export default function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <header className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Yusuf Visual & Cinematic Storytelling</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Vendor fotografi dan videografi dengan sentuhan elegan, autentik, dan penuh emosi.
        </p>
      </header>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">🟢 Tentang Kami</h2>
        <p>
          Kami adalah <b>Yusuf Visual & Cinematic Storytelling</b>, vendor fotografi dan videografi
          yang berdiri dengan semangat untuk mengabadikan momen sekaligus menyampaikan cerita.
          Fokus kami adalah menghasilkan karya elegan, autentik, dan penuh emosi, baik untuk acara
          pernikahan, prewedding, wisuda, hingga konten cinematic.
        </p>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} Yusuf Visual & Cinematic Storytelling</p>
      </footer>
    </div>
  );
}
