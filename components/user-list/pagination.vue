<template>
  <div class="pagination">
    <div
      v-for="link in linkList"
      :key="link.id"
    >
      <nuxt-link :to="link.path">
        {{ link.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as Types from '~/types/index'

export default Vue.extend({
  components: {
  },
  props: {
    totalCount: {
      type: Number,
      required: true
    },
    listLimit: {
      type: Number,
      default: () => 5
    },
    pageNumber: {
      type: Number,
      default: () => 1
    }
  },
  data () {
    return {

    }
  },
  computed: {
    linkList () {
      const pageQuery: string = '/?page='
      const pageNumber: Types.PageNumber = {
        first: 1,
        prev: this.getPrevPageNumber(),
        next: this.getNextPageNumber(),
        last: this.getLastPageNumber()
      }
      return [
        {
          id: 'first',
          title: 'first',
          path: pageQuery + pageNumber.first
        },
        {
          id: 'prev',
          title: 'prev',
          path: pageQuery + pageNumber.prev
        },
        {
          id: 'next',
          title: 'next',
          path: pageQuery + pageNumber.next
        },
        {
          id: 'last',
          title: 'last',
          path: pageQuery + pageNumber.last
        }
      ]
    }
  },
  methods: {
    getPrevPageNumber (): number {
      const pageNumber: number = this.pageNumber - 1
      return pageNumber >= 1 ? pageNumber : 1
    },
    getNextPageNumber (): number {
      const pageNumber: number = this.pageNumber + 1
      return pageNumber * this.listLimit <= this.totalCount ? pageNumber : this.pageNumber
    },
    getLastPageNumber (): number {
      return this.totalCount / this.listLimit
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
