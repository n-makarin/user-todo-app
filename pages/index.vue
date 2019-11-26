<template>
  <div class="index">
    <h1>Users</h1>
    <user-list :data="userList" />
    <pagination
      :total-count="userTotalCount"
      :list-limit="userListLimit"
      :page-number="pageNumber"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as Types from '~/types/index'
import UserList from '~/components/user-list.vue'
import Pagination from '~/components/user-list/pagination.vue'

export default Vue.extend({
  middleware: 'userList',
  components: {
    UserList,
    Pagination
  },
  data () {
    return {
      userList: [],
      userTotalCount: 0
    }
  },
  computed: {
    userListLimit (): number {
      return this.$store.getters['user/list/limit']
    },
    pageNumber (): number {
      return Number(this.$route.query.page)
    }
  },
  watch: {
    /**
     * Set userList by changing pageNumber
     */
    async pageNumber (newValue): Promise<void> {
      await this.$store.dispatch('user/list/set', { pageNumber: newValue })
      this.userList = this.$store.getters['user/list/data']
    }
  },
  async asyncData (context): Promise<any> {
    await context.store.dispatch('user/list/set', { pageNumber: context.route.query.page })

    const userList: Types.UserList = context.store.getters['user/list/data']
    const userTotalCount: number = Number(context.store.getters['user/list/totalCount'])
    return {
      userList,
      userTotalCount
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
