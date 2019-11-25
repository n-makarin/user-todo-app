<template>
  <div class="index">
    <h1>Users</h1>
    {{ userList }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as Types from '~/types/index'

export default Vue.extend({
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  async asyncData (context) {
    await context.store.dispatch('user/setList', { pageNumber: context.route.query.page })
    const userList: Types.UserList = context.store.getters['user/list']
    return {
      userList
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
