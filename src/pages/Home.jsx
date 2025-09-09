import BookFinder from "../components/BookFinder";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with logo */}
      <header className="flex items-center gap-3 p-4 bg-white shadow">
        <img
          src="/Gemini_Generated_Image_ytw8wjytw8wjytw8.png"
          alt="Book Finder Logo"
          className="w-12 h-12"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Book Finder</h1>
          <p className="text-gray-600">Search and explore books with ease</p>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <BookFinder />
      </div>
    </div>
  );
}