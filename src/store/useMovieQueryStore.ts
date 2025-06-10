import { create } from 'zustand'

interface MovieQuery {
  searchText?: string
  genreId?: number
  sortOrder?: string
}

interface MovieQueryStore {
  movieQuery: MovieQuery
  setSearchText: (searchText: string) => void
  setGenreId: (genreId: number) => void
  setSortOrder: (SortOrder: string) => void
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: {},
  setSearchText: (searchText) => set(() => ({ movieQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, genreId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, sortOrder } })),
}))

export default useMovieQueryStore
