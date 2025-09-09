import BookFinder from "../components/BookFinder";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow">
        <div className="flex items-center gap-3">
          <img
            src="/Gemini_Generated_Image_ytw8wjytw8wjytw8.png"
            alt="Book Finder Logo"
            className="w-12 h-12"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Book Finder</h1>
            <p className="text-gray-600">Search and explore books with ease</p>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          <a
            href="#about"
            className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition"
          >
            About
          </a>
        </nav>
      </header>

      {/* Main content full-width */}
      <main className="flex-grow w-full px-6 py-8">
        <BookFinder />
      </main>

      {/* Footer */}
      <footer
        id="about"
        className="bg-gray-900 text-gray-200 py-10 text-center"
      >
        <h2 className="text-xl font-semibold mb-2">About</h2>
        <p className="text-gray-400 mb-4 max-w-md mx-auto">
          Hi, I'm <span className="text-white font-medium">Lakshay Pahwa</span>, a passionate{" "}
          <span className="text-blue-400">Web Developer</span> who loves building clean and
          user-friendly applications.
        </p>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Lakshay Pahwa
        </p>
      </footer>
    </div>
  );
}
