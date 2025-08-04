import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import Movie from '../entities/Movie'

interface WatchlistStore {
  watchlist: Movie[]
  addToWatchlist: (movie: Movie) => void
  removeFromWatchlist: (id: number) => void
}

const useWatchlistStore = create<WatchlistStore>()(
  persist(
    (set, get) => ({
      watchlist: [],
      addToWatchlist: (movie: Movie) => {
        const exists = get().watchlist.find((m) => m.id === movie.id)
        if (!exists) {
          set((state) => ({
            watchlist: [...state.watchlist, movie],
          }))
        }
      },
      removeFromWatchlist: (id: number) => {
        set((state) => ({
          watchlist: state.watchlist.filter((m) => m.id !== id),
        }))
      },
    }),
    {
      name: 'watchlist-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useWatchlistStore
