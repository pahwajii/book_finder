import { useState } from "react";
import { Menu, X, Filter } from "lucide-react";

export default function Filters({ filters, setFilters, resetFilters }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Mobile Toggle Button */} <div className="md:hidden flex justify-end items-center ">
       <button onClick={() => setOpen(!open)} className="p-2 rounded-lg border border-gray-300 bg-white shadow-md" >
        {open ? <X size={20} /> : <Menu size={20} />} 
      </button> 
    </div>

      {/* Sidebar / Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-72 bg-white shadow-lg p-6 transform transition-transform duration-300 z-50 md:static md:translate-x-0 md:shadow-none md:w-auto md:p-0
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="space-y-6">
          {/* Author Filter */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Author</h3>
            <input
              type="text"
              value={filters.author}
              onChange={(e) =>
                setFilters({ ...filters, author: e.target.value })
              }
              placeholder="e.g. J.K. Rowling"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Ebook Filter */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Ebook</h3>
            <div className="flex gap-3">
              <button
                onClick={() => setFilters({ ...filters, ebook: "ebooks" })}
                className={`px-3 py-1 rounded-lg text-sm ${
                  filters.ebook === "ebooks"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                Available
              </button>
              <button
                onClick={() => setFilters({ ...filters, ebook: "no_ebook" })}
                className={`px-3 py-1 rounded-lg text-sm ${
                  filters.ebook === "no_ebook"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                Not Available
              </button>
            </div>
          </div>

          {/* Language Filter */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Language</h3>
            <input
              type="text"
              value={filters.language}
              onChange={(e) =>
                setFilters({ ...filters, language: e.target.value })
              }
              placeholder="e.g. eng, fre"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Year Filter */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Published After</h3>
            <input
              type="number"
              value={filters.year}
              onChange={(e) =>
                setFilters({ ...filters, year: e.target.value })
              }
              placeholder="e.g. 2000"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Reset Filters */}
          <button
            onClick={resetFilters}
            className="w-full px-4 py-2 mt-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Dark Overlay for Mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}
    </div>
  );
}
