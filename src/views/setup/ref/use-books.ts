import { reactive, ref, toRefs, computed } from 'vue'

export interface Book {
  title: string
  author: string
  year: number
}

export interface Info {
  books: Book[]
  searchYear: number
  searchKey: string
}

function useBooks() {
  const info = reactive<Info>({ books: [], searchKey: '', searchYear: -1 })

  const filterBooks = computed(() => info.books.filter((book) => book.title.includes(info.searchKey)))

  const onAddBook = (title: string, author: string, year: number) => {
    info.books.push({ title, author, year })
  }

  return {
    info,
    filterBooks,
    onAddBook,
  }
}

export default useBooks
