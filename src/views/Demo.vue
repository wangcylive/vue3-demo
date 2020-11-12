<template>
  <div>
    <div>
      <span>time: {{ time }}</span>
      <span style="margin: 0 10px;">list: {{ list.join(',') }}</span>
      <button @click="onClick">Change</button>
    </div>

    <div style="margin-top: 10px;">
      <input v-model.trim="userName" />
      <button @click="onAddUserName">Add</button>
      <setup-demo :user="propsUser" />
      <hr />
      <setup-render />
    </div>
    <teleport to="body">
      <div>append to body</div>
    </teleport>
  </div>
</template>

<script>
import SetupDemo from '@/views/setup/index'
import SetupRender from '@/views/setup/render'
import { ref, onMounted } from 'vue'
export default {
  name: 'Demo',
  components: {
    SetupDemo,
    SetupRender,
  },
  data() {
    const date = new Date()
    return {
      time: `${date.toTimeString().split(' ')[0]}.${date.getMilliseconds()}`,
      userName: '',
      propsUser: '',
    }
  },
  setup(props) {
    const list = ref([])
    console.log('setup', performance.now())

    setTimeout(() => {
      list.value.push('w1', 'p2', 's3')
    }, 1000)

    onMounted(() => {
      console.log('onMounted', performance.now())
      list.value.push(2)
    })
    return {
      list,
    }
  },
  mounted() {
    console.log('mounted', performance.now())
  },
  methods: {
    onClick() {
      const date = new Date()
      this.time = `${date.toTimeString().split(' ')[0]}.${date.getMilliseconds()}`
    },
    onAddUserName() {
      if (this.userName) {
        this.propsUser = this.userName
      }
    },
  },
}
</script>

<style></style>
