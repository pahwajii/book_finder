import { useState } from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import Filters from "./Filters";

export default function BookFinder() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    author: "",
    ebook: "",
    language: "",
    year: ""
  });

  const searchBooks = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      let results = data.docs.slice(0, 30);

    
    // Author
    if (filters.author) {
      results = results.filter((book) =>
        book.author_name?.some((a) =>
          a.toLowerCase().includes(filters.author.toLowerCase())
        )
      );
    }

    // Ebook
    if (filters.ebook) {
      results = results.filter((book) =>
        filters.ebook === "ebooks"
          ? book.ebook_count_i > 0
          : book.ebook_count_i === 0
      );
    }

    // Language
    if (filters.language) {
      results = results.filter((book) =>
        book.language?.includes(filters.language.toLowerCase())
      );
    }

    // Year
    if (filters.year) {
      results = results.filter(
        (book) =>
          book.first_publish_year &&
          book.first_publish_year >= parseInt(filters.year)
      );
    }
      setBooks(results);
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    }
    setLoading(false);
  };

  const resetFilters = () => {
    setFilters({ genre: "", author: "", ebook: "", language: "", year: "" });
    setBooks([]);
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 p-6">
      <aside className="hidden md:block w-1/2 bg-white p-5 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <Filters filters={filters} setFilters={setFilters} resetFilters={resetFilters} />
      </aside>

      <main className="w-full md:w-3/4">
        <header className="flex justify-between items-center mb-6 border-b pb-3">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span role="img" aria-label="book">📚</span> BookFinder
          </h1>
          <span className="block md:hidden">
            <Filters filters={filters} setFilters={setFilters} resetFilters={resetFilters} />
          </span>
        </header>

        <SearchBar query={query} setQuery={setQuery} onSearch={searchBooks} />
        {loading && <p className="text-blue-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        <BookList books={books} />
      </main>
    </div>
  );
}
