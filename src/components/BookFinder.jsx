import { useState } from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import Filters from "./Filters";

export default function BookFinder() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({ genre: "", author: "" });

  const searchBooks = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setBooks([]);
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      let results = data.docs.slice(0, 30);

      if (filters.genre) {
        results = results.filter((book) =>
          filters.genre === "Fiction"
            ? book.subject?.includes("Fiction")
            : !book.subject?.includes("Fiction")
        );
      }

      if (filters.author) {
        results = results.filter((book) =>
          book.author_name?.some((a) => a.toLowerCase().includes(filters.author.toLowerCase()))
        );
      }

      setBooks(results);
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    }
    setLoading(false);
  };

  const resetFilters = () => {
    setFilters({ genre: "", author: "" });
    setBooks([]);
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 p-6">
      <aside className="w-full md:w-1/4 bg-white p-5 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <Filters filters={filters} setFilters={setFilters} resetFilters={resetFilters} />
      </aside>

      <main className="w-full md:w-3/4">
        <header className="flex justify-between items-center mb-6 border-b pb-3">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span role="img" aria-label="book">📚</span> BookFinder
          </h1>
          <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
        </header>

        <SearchBar query={query} setQuery={setQuery} onSearch={searchBooks} />
        {loading && <p className="text-blue-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        <BookList books={books} />
      </main>
    </div>
  );
}
