<template>
  <div class="index">
    <h1>{{ user.name }}</h1>
    todo
    <a href="javascript:void(0);" @click.prevent="$router.go(-1)">back</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {
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
    await context.store.dispatch('user/get', context.route.params.id)

    const user: any = context.store.getters['user/data']
    return {
      user
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
