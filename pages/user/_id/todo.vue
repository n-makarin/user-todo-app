<template>
  <div class="todo">
    <a class="todo__back" href="javascript:void(0);" @click.prevent="$router.go(-1)">back</a>
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
    const todoList: Types.TodoList = context.store.getters['todo/list/data']
    return {
      user,
      todoList
    }
  }
})
</script>

<style lang="scss" scoped>
.todo {
  padding: 20px 0;
  &__back {
    display: inline-block;
    text-decoration: none;
    padding: 4px 10px;
    border-radius: 3px;
    background: rgba(66,185,131,0.77255);
    color: white;
    font-weight: 500;
  }
}
</style>
