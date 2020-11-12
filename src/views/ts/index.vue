<template>
  <div>
    <input type="text" v-model.trim="info.name" />
    <div>info: {{ infoStr }}</div>
    <table>
      <tbody>
        <tr v-for="(book, index) of books" :key="index">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.year }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="onAddBook">Add Book</button>
    <div>
      <ts-demo1>323232</ts-demo1>
      <ts-demo2>demo2</ts-demo2>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, computed, defineComponent } from 'vue'
import TsDemo1 from '@/views/ts/demo1.vue'
import TsDemo2 from '@/views/ts/demo2.vue'

interface Book {
  title: string
  author: string
  year: number
}

interface Info {
  name: string
  age: number
}

export default defineComponent({
  name: 'TsModule',
  components: {
    TsDemo1,
    TsDemo2,
  },
  setup() {
    const info = reactive<Info>({ name: '', age: 0 })
    const books = reactive<Book[]>([])

    const infoStr = computed(() => `name: ${info.name}, age: ${info.age}`)

    const onAddBook = () => {
      books.push({
        title: 'A',
        author: 'B',
        year: 1991,
      })
    }

    return {
      info,
      books,
      infoStr,
      onAddBook,
    }
  },
})
</script>

<style lang="scss"></style>
