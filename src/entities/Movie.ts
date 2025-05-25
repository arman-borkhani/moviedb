import Genre from "./Genre"

export default interface Movie {
  id: number
  title: string
  adult: boolean
  poster_path: string
  vote_average: number
  release_date: string
  runtime: number
  genres: Genre[]
  overview: string
  budget: number
  status: string
  revenue: number
  original_language: string
}
