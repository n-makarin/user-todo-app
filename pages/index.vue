<template>
  <div class="index">
    <h1>Users</h1>
    <user-list :data="userList" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as Types from '~/types/index'
import UserList from '~/components/user-list.vue'

export default Vue.extend({
  components: {
    UserList
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
