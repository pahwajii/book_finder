import BookCard from "./BookCard";

export default function BookList({ books }) {
  if (books.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {books.map((book, idx) => (
        <BookCard key={idx} book={book} />
      ))}
    </div>
  );
}
