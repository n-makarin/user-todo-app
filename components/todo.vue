<template>
  <div class="todo">
    <div class="todo-title">
      {{ title }}
    </div>
    <input id="checkbox" v-model="checked" type="checkbox">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    checked: {
      get (): any {
        return this.completed
      },
      set (): any {
        // send request to set todo value
      }
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
