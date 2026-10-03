import { useState } from 'react'
import { ChevronRight, BookOpen } from 'lucide-react'
import BookCard from "../components/BookCard"

const books = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    category: 'Fiction',
    rating: 4.5,
    image: 'https://covers.openlibrary.org/b/isbn/0525559474-L.jpg',
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self Help',
    rating: 4.8,
    image: 'https://covers.openlibrary.org/b/isbn/0735211299-L.jpg',
  },
  {
    id: 3,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Fiction',
    rating: 4.6,
    image: 'https://covers.openlibrary.org/b/isbn/0062315005-L.jpg',
  },
  {
    id: 4,
    title: 'It Ends with Us',
    author: 'Colleen Hoover',
    category: 'Romance',
    rating: 4.3,
    image: 'https://covers.openlibrary.org/b/isbn/1501110365-L.jpg',
  },
]

const genres = [
  'Romance',
  'Mystery',
  'Fantasy',
  'Science Fiction',
  'Self Help',
  'Biography',
]

function Home() {
  const [search, setSearch] = useState('')

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <main>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">

          <span className="small-heading">
            YOUR NEXT GREAT READ
          </span>

          <h1>
            Find a book you'll
            <span> love.</span>
          </h1>

          <p>
            Discover your next favorite book from thousands of
            stories, authors, and genres.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search by title or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button>Search</button>
          </div>

        </div>
      </section>


      {/* GENRES */}
      <section className="genres-section">

        <div className="section-header">

          <div>
            <span className="section-label">
              EXPLORE
            </span>

            <h2>Browse by genre</h2>
          </div>

          <button className="view-all">
            View all
            <ChevronRight size={18} />
          </button>

        </div>

        <div className="genre-list">

          {genres.map((genre) => (
            <button
              className="genre-card"
              key={genre}
            >
              {genre}
            </button>
          ))}

        </div>

      </section>


      {/* POPULAR BOOKS */}
      <section className="books-section">

        <div className="section-header">

          <div>
            <span className="section-label">
              DISCOVER
            </span>

            <h2>
              {search ? 'Search results' : 'Popular books'}
            </h2>
          </div>

        </div>


        {filteredBooks.length > 0 ? (

          <div className="book-grid">

            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))}

          </div>

        ) : (

          <div className="empty-state">
            <BookOpen size={40} />

            <h3>No books found</h3>

            <p>
              Try searching for another title or author.
            </p>
          </div>

        )}

      </section>


      {/* LIBRARY PROMOTION */}
      <section className="library-section">

        <div className="library-content">

          <div>

            <span className="section-label">
              YOUR COLLECTION
            </span>

            <h2>
              Your personal
              <br />
              reading library.
            </h2>

            <p>
              Save books you want to read and keep your
              favorite stories in one place.
            </p>

            <button className="library-button">
              Go to My Library
              <ChevronRight size={18} />
            </button>

          </div>

          <div className="library-icon">
            <BookOpen size={90} strokeWidth={1} />
          </div>

        </div>

      </section>

    </main>
  )
}

export default Home