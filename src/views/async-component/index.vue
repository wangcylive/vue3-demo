<template>
  <div>
    <h4>Async Component</h4>
    <button @click="showAsyncDemo1">load async demo1</button>
    <suspense v-if="visibleRef">
      <template #default>
        <async-demo1 />
      </template>
      <template #fallback>
        <div>加载中，请等待</div>
      </template>
    </suspense>
    <hr />
    <button @click="showAsyncDemo2">load async demo2</button>
    <async-demo2 v-if="visibleRef2" />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, h } from 'vue'
export default defineComponent({
  name: 'AsyncComponent',
  components: {
    AsyncDemo1: defineAsyncComponent(() => import('@/views/async-component/async1.vue')),
    AsyncDemo2: defineAsyncComponent({
      loader: () => import('@/views/async-component/async2.vue'),
      loadingComponent: h('div', 'loading...'),
      delay: 0,
      suspensible: false,
      timeout: 1000,
      onError(error, retry, fail, attempts) {
        console.log('onError', error, retry, fail, attempts)
        if (/*error.message.match(/fetch/) && */attempts <= 3) {
          // 请求发生错误时重试，最多可尝试 3 次
          retry()
        } else {
          // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
          // 必须调用其中一个才能继续错误处理。
          fail()
        }
      }
    }),
  },
  setup() {
    const visibleRef = ref<boolean>(false)
    const showAsyncDemo1 = () => {
      visibleRef.value = true
    }

    const visibleRef2 = ref<boolean>(false)
    const showAsyncDemo2 = () => {
      visibleRef2.value = true
    }
    return {
      visibleRef,
      showAsyncDemo1,
      visibleRef2,
      showAsyncDemo2,
    }
  },
})
</script>

<style lang="scss"></style>
