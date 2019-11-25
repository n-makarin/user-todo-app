<template>
  <table class="user-list">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(user) in data"
        :key="user.id"
        class="user-list__item user-list-item"
        @click="$router.push(`user/${user.id}/todo`)"
      >
        <th class="user-list-item__name">
          {{ user.name }}
        </th>
        <td class="user-list-item__email">
          {{ user.email }}
        </td>
        <td class="user-list-item__phone">
          {{ user.phone }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue'
// import * as Types from '~/types/index'

export default Vue.extend({
  components: {
  },
  props: {
    data: {
      type: Array,
      default: () => []
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
.user-list {
  text-align: left;
  &-item {
    &__name {
      font-weight: normal;
    }
  }
}
</style>
