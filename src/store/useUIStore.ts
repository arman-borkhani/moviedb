import { create } from 'zustand'

interface UIStore {
  darkMode: boolean
  toggleDarkMode: () => void
}

const useUIStore = create<UIStore>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}))

export default useUIStore
