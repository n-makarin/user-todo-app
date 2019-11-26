<template>
  <div class="pagination">
    <div
      v-for="link in linkList"
      :key="link.id"
      class="pagination__link"
    >
      <nuxt-link :to="link.path" :class="{ 'link_active': link.active }">
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
  computed: {
    linkList () {
      const pageQuery: string = '/?page='
      const pageNumber: Types.PageNumber = {
        first: 1,
        prev: this.getPrevPageNumber(),
        next: this.getNextPageNumber(),
        last: this.getLastPageNumber()
      }
      const currentPageNumber: number = this.pageNumber
      return [
        {
          id: 'first',
          title: 'first',
          path: pageQuery + pageNumber.first,
          active: pageNumber.first === currentPageNumber
        },
        {
          id: 'prev',
          title: 'prev',
          path: pageQuery + pageNumber.prev,
          active: pageNumber.prev === currentPageNumber
        },
        {
          id: 'next',
          title: 'next',
          path: pageQuery + pageNumber.next,
          active: pageNumber.next === currentPageNumber
        },
        {
          id: 'last',
          title: 'last',
          path: pageQuery + pageNumber.last,
          active: pageNumber.last === currentPageNumber
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
.pagination {
  display: flex;
  &__link {
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
    a {
      display: block;
      text-decoration: none;
      padding: 4px 10px;
      border-radius: 3px;
      background: rgba(66,185,131,0.77255);
      color: white;
      font-weight: 500;
      &.link_active {
        opacity: .4;
      }
    }
  }
}
</style>
