<template>
  <div class="todo-list">
    <todo
      v-for="todo in data"
      :key="todo.id"
      :title="todo.title"
      :completed="todo.completed"
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
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
    }
  },
  computed: {
  }
})
</script>

<style lang="scss" scoped>
</style>
