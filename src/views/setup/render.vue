<script lang="ts">
import { h, ref, reactive, onBeforeUnmount } from 'vue'
export default {
  name: 'render',
  setup() {
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })

    const timeID = setInterval(() => {
      readersNumber.value++
      book.title = 'React'
    }, 1e3 * 3)

    onBeforeUnmount(() => {
      clearInterval(timeID)
    })

    return () => h('div', [readersNumber.value, ' ', book.title])
  },
}
</script>

<style scoped></style>
