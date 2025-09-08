export default function Filters({ filters, setFilters, resetFilters }) {
  return (
    <div className="space-y-5">
      {/* Genre Filter */}
      <div>
        <h3 className="font-medium mb-2">Genre</h3>
        <div className="flex gap-3">
          <button
            onClick={() => setFilters({ ...filters, genre: "Fiction" })}
            className={`px-3 py-1 rounded-lg ${
              filters.genre === "Fiction" ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            Fiction
          </button>
          <button
            onClick={() => setFilters({ ...filters, genre: "Non-Fiction" })}
            className={`px-3 py-1 rounded-lg ${
              filters.genre === "Non-Fiction" ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            Non-Fiction
          </button>
        </div>
      </div>

      {/* Author Filter */}
      <div>
        <h3 className="font-medium mb-2">Author</h3>
        <input
          type="text"
          value={filters.author}
          onChange={(e) => setFilters({ ...filters, author: e.target.value })}
          placeholder="e.g. J.K. Rowling"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Ebook Filter */}
      <div>
        <h3 className="font-medium mb-2">Ebook Availability</h3>
        <div className="flex gap-3">
          <button
            onClick={() => setFilters({ ...filters, ebook: "ebooks" })}
            className={`px-3 py-1 rounded-lg ${
              filters.ebook === "ebooks" ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            Ebooks
          </button>
          <button
            onClick={() => setFilters({ ...filters, ebook: "no_ebook" })}
            className={`px-3 py-1 rounded-lg ${
              filters.ebook === "no_ebook" ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            No Ebook
          </button>
        </div>
      </div>

      {/* Language Filter */}
      <div>
        <h3 className="font-medium mb-2">Language</h3>
        <input
          type="text"
          value={filters.language}
          onChange={(e) => setFilters({ ...filters, language: e.target.value })}
          placeholder="e.g. eng"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Year Filter */}
      <div>
        <h3 className="font-medium mb-2">Published After Year</h3>
        <input
          type="number"
          value={filters.year}
          onChange={(e) => setFilters({ ...filters, year: e.target.value })}
          placeholder="e.g. 1990"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Reset Filters */}
      <button
        onClick={resetFilters}
        className="w-full px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        Reset Filters
      </button>
    </div>
  );
}
