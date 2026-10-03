import { Heart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

function BookCard({ book }) {
  return (
    <div className="book-card">

      <div className="book-image">
        <img
          src={book.image}
          alt={book.title}
        />

        <button className="heart-button">
          <Heart size={19} />
        </button>
      </div>

      <div className="book-info">

        <span className="book-category">
          {book.category}
        </span>

        <h3>{book.title}</h3>

        <p>{book.author}</p>

        <div className="rating">
          <Star size={16} fill="currentColor" />
          <span>{book.rating}</span>
        </div>

        <Link
          to={`/book/${book.id}`}
          className="details-link"
        >
          View details
        </Link>

      </div>

    </div>
  )
}

export default BookCard