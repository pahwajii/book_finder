export default function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 text-left">
        <h2 className="text-lg font-semibold mb-1 truncate">{book.title}</h2>
        <p className="text-sm text-gray-600 mb-1 truncate">
          {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </p>
        <p className="text-xs text-gray-500 mb-2">
          {book.first_publish_year ? `First published: ${book.first_publish_year}` : "Year: N/A"}
        </p>
        <a
          href={`https://openlibrary.org${book.key}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 px-3 py-1 text-center bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
        >
          View More
        </a>
      </div>
    </div>
  );
}
