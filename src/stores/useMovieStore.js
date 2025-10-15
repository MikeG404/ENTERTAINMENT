import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useMovieStore = create(
  persist(
    (set, get) => ({
      movies: [
        {
          id: 1,
          category: "Movie",
          title: "Interstellar",
          year: 2014,
          genre: ["Adventure", "Drama", "Sci-Fi"],
          rating: 8.6,
          image:
            "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        },
        {
          id: 2,
          category: "Movie",
          title: "The Dark Knight",
          year: 2008,
          genre: ["Action", "Crime", "Drama"],
          rating: 9.0,
          image:
            "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        },
        {
          id: 3,
          category: "Movie",
          title: "Parasite",
          year: 2019,
          genre: ["Comedy", "Drama", "Thriller"],
          rating: 8.6,
          image:
            "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        },
        {
          id: 4,
          category: "Movie",
          title: "Dune: Part One",
          year: 2021,
          genre: ["Adventure", "Sci-Fi"],
          rating: 8.0,
          image:
            "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        },
        {
          id: 5,
          category: "Movie",
          title: "Oppenheimer",
          year: 2023,
          genre: ["Biography", "Drama", "History"],
          rating: 8.8,
          image:
            "https://image.tmdb.org/t/p/w500/bafYWgFzQYvv7cM6B8HkPzKzK8f.jpg",
        },
        {
          id: 6,
          category: "Movie",
          title: "Inception",
          year: 2010,
          genre: ["Action", "Sci-Fi", "Thriller"],
          rating: 8.8,
          image:
            "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
        },
        {
          id: 7,
          category: "Movie",
          title: "The Matrix",
          year: 1999,
          genre: ["Action", "Sci-Fi"],
          rating: 8.7,
          image:
            "https://image.tmdb.org/t/p/w500/aOiCz2oF3Yw2bRzCQXDfZjZk6aa.jpg",
        },
        {
          id: 8,
          category: "Movie",
          title: "Blade Runner 2049",
          year: 2017,
          genre: ["Sci-Fi", "Thriller"],
          rating: 8.0,
          image:
            "https://image.tmdb.org/t/p/w500/aMpyrCizvS2Dg3xnzj2y0mQ6Vhm.jpg",
        },
      ],

      tvSeries: [
        {
          id: 1,
          category: "TV Series",
          title: "Breaking Bad",
          year: 2008,
          genre: ["Crime", "Drama", "Thriller"],
          rating: 9.5,
          image:
            "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
        },
        {
          id: 2,
          category: "TV Series",
          title: "Game of Thrones",
          year: 2011,
          genre: ["Action", "Adventure", "Drama"],
          rating: 9.2,
          image:
            "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
        },
        {
          id: 3,
          category: "TV Series",
          title: "The Last of Us",
          year: 2023,
          genre: ["Drama", "Horror", "Sci-Fi"],
          rating: 8.8,
          image:
            "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        },
        {
          id: 4,
          category: "TV Series",
          title: "Stranger Things",
          year: 2016,
          genre: ["Drama", "Fantasy", "Mystery"],
          rating: 8.7,
          image:
            "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        },
        {
          id: 5,
          category: "TV Series",
          title: "Chernobyl",
          year: 2019,
          genre: ["Drama", "History", "Thriller"],
          rating: 9.4,
          image:
            "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
        },
        {
          id: 6,
          category: "TV Series",
          title: "Black Mirror",
          year: 2011,
          genre: ["Drama", "Sci-Fi", "Thriller"],
          rating: 8.8,
          image:
            "https://image.tmdb.org/t/p/w500/p7oK6tKQp4v2a1V0kUQn4Xf0q2r.jpg",
        },
        {
          id: 7,
          category: "TV Series",
          title: "Peaky Blinders",
          year: 2013,
          genre: ["Crime", "Drama"],
          rating: 8.8,
          image:
            "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
        },
        {
          id: 8,
          category: "TV Series",
          title: "The Boys",
          year: 2019,
          genre: ["Action", "Comedy", "Crime"],
          rating: 8.7,
          image:
            "https://image.tmdb.org/t/p/w500/mY7SeH4HFFxW1hiI6cWJ4O5U43u.jpg",
        },
        {
          id: 9,
          category: "TV Series",
          title: "Better Call Saul",
          year: 2015,
          genre: ["Crime", "Drama"],
          rating: 9.0,
          image:
            "https://image.tmdb.org/t/p/w500/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg",
        },
      ],


      bookmarks: [],
      toggleBookmark: (id) => {
        const { bookmarks } = get();
        const exists = bookmarks.includes(id);
        const next = exists
          ? bookmarks.filter((b) => b !== id)
          : [...bookmarks, id]

        set({ bookmarks: next })
      },
      isBookmarked: (id) => get().bookmarks.includes(id)
    })));
