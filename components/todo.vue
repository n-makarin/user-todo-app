<template>
  <div class="todo">
    <div class="todo__checkbox">
      <input id="checkbox" v-model="checked" type="checkbox">
      <span />
    </div>
    <div class="todo__title">
      {{ title }}
    </div>
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
.todo {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  &__title {
    &:first-letter {
      text-transform: uppercase;
    }
  }
  &__checkbox {
    position: relative;
    margin-right: 10px;
    height: 20px;
    input {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 2;
      cursor: pointer;

      /* checked */
      &:checked ~ span {
        &::before {
          opacity: 1;
        }
      }
    }
    span {
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 3px;
      border: 1px solid #c5c5c5;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        top: 19%;
        left: 24%;
        width: 6px;
        height: 5px;
        border-bottom: 2px solid rgb(156, 156, 214);
        border-left: 2px solid rgb(156, 156, 214);
        transform: rotate(-45deg);
        opacity: 0;
      }
    }
    &:hover span {
      background: #f3f3f3;
    }
  }
}
</style>
