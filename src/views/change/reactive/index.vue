<template>
  <div>
    <ul>
      <li v-for="(book, index) of books" :key="index">name: {{ book.name }}, year: {{ book.year }}</li>
    </ul>
    <button @click="onChangeYear">Change Year</button>
    <ul>
      <li v-for="([key, value], index) of map.entries()" :key="index">{{ key }} = {{ value }}</li>
    </ul>
    <button @click="onSetMap">Set Map</button><button @click="onClearMap">Clear Map</button>
    <div>{{ info?.name?.size }}</div>
  </div>
</template>

<script>
export default {
  name: 'Reactive',
  data() {
    return {
      books: [{ name: 'Sant' }],
      map: new Map(),
      info: {},
    }
  },
  mounted() {
    setTimeout(() => {
      this.info.name = {
        size: 3,
      }
    }, 1000)

    const obj1 = {}
    const obj1Proxy = new Proxy(obj1, {
      get(target, key, receiver) {
        console.log(target, key, receiver)
        return Reflect.get(target, key, receiver)
      },
      set(target, key, value, receiver) {
        console.log('set', target, key, value, receiver)
        return Reflect.set(target, key, value, receiver)
      }
    })

    obj1Proxy.info = {

    }
    obj1Proxy.info.name = 'info'
    obj1Proxy.info.name = 'info2'
  },
  methods: {
    onAddBook() {
      this.books.push({ name: 'wen ming', year: 2003 })
    },
    onChangeYear() {
      this.books[0].year = 2000 + Math.floor(Math.random() * 10)
    },
    onSetMap() {
      const key = `key${this.map.size}`
      const value = new Date().toUTCString()
      this.map.set(key, value)
    },
    onClearMap() {
      this.map.clear()
    },
  },
}
</script>

<style lang="scss"></style>
