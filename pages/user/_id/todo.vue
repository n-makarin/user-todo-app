<template>
  <div class="index">
    <a href="javascript:void(0);" @click.prevent="$router.go(-1)">back</a>
    <h1>{{ user.name }}</h1>
    <todo-list :data="todoList" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as Types from '~/types/index'
import TodoList from '~/components/todo/list.vue'

export default Vue.extend({
  components: {
    TodoList
  },
  data () {
    return {
    }
  },
  computed: {
    userId (): string {
      return this.$route.params.id
    }
  },
  async asyncData (context): Promise<any> {
    const userId: number = Number(context.route.params.id)
    await context.store.dispatch('user/get', userId)
    await context.store.dispatch('todo/list/get', userId)

    const user: any = context.store.getters['user/data']
    const todoList: Types.TodoList = context.store.getters['user/data']
    return {
      user,
      todoList
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
