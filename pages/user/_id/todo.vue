<template>
  <div class="index">
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
  }
})
</script>

<style lang="scss" scoped>
</style>
