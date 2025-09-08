import { Search } from "lucide-react";

export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="flex gap-2 mb-6">
      <div className="relative w-full">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={onSearch}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}

