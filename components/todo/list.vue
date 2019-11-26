<template>
  <div class="todo-list">
    <todo
      v-for="todo in data"
      :key="todo.id"
      :title="todo.title"
      :completed="todo.completed"
      class="todo-list__item"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Todo from '~/components/todo.vue'

export default Vue.extend({
  components: {
    Todo
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
})
</script>

<style lang="scss" scoped>
.todo-list {
  &__item {
    margin: 10px 0;
  }
}
</style>
