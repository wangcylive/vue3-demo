import { ref, Ref, onMounted } from 'vue'
function getRepo(): Ref<number> {
  const count = ref<number>(0)

  onMounted(async () => {
    console.log('getRepo', performance.now())
    const resp = await fetch('https://api.github.com/repos/facebook/react')
    if (resp.ok) {
      const data = await resp.json()
      count.value = data.stargazers_count
    }
  })

  return count
}

export default getRepo
