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

export default Vue.extend({
  components: {
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
$green: #42b983c5;
$light-green: #1087751c;
.user-list {
  width: 100%;
  text-align: left;
  table {
    border-collapse: collapse;
  }
  thead th {
    color: black;
    font-size: 14px;
    font-weight: 500;
    background: $green;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  th, td {
    height: 30px;
    padding: 0 10px;
  }
  tbody tr {
    transition: background .2s;

    &:hover {
      background: $light-green;
    }
  }
  &-item {
    cursor: pointer;
    &__name {
      width: 33.3%;
      font-weight: normal;
    }
  }
}
</style>
