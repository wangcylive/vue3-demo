<template>
  <div>
    <div><label>Search</label><input type="text" v-model="searchKey" /></div>
    <div>
      <h4>Input</h4>
      <div>
        <label>title:</label>
        <input type="text" v-model.trim="inputBook.title" />
      </div>
      <div>
        <label>author:</label>
        <input type="text" v-model.trim="inputBook.author" />
      </div>
      <div>
        <label>year:</label>
        <input type="text" v-model.number="inputBook.year" />
      </div>
      <div>
        <button @click="onInputBook">onAdd</button>
      </div>
    </div>
    <table>
      <caption>
        Filter Books
      </caption>
      <thead>
        <tr>
          <td>Title</td>
          <td>Author</td>
          <td>Year</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) of filterBooks" :key="index">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.year }}</td>
        </tr>
      </tbody>
    </table>
    <table>
      <caption>
        Books
      </caption>
      <thead>
        <tr>
          <td>Title</td>
          <td>Author</td>
          <td>Year</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) of books" :key="index">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.year }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, toRef } from 'vue'
import useBooks, { Book } from './use-books'
export default defineComponent({
  name: 'RefDemo',
  setup() {
    const { filterBooks, info, onAddBook } = useBooks()
    const inputBook = reactive<Book>({ title: '', author: '', year: 0 })
    const { searchKey, books } = toRefs(info)

    const onInputBook = () => {
      const { title, author, year } = inputBook
      if (title && author && Number.isInteger(year) && year > 0) {
        onAddBook(title, author, year)
      }
    }

    return {
      filterBooks,
      books,
      searchKey,
      info,
      inputBook,
      onInputBook,
    }
  },
})
</script>

<style lang="scss"></style>
