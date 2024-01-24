<script>
import { toRefs } from 'vue'

export default {
    props: ["appTitle"],
    setup(props) {
      
      const { appTitle } = toRefs(props);
      console.log(appTitle.value);

      return {
        appTitle
      }
    },
    computed: {
      hasHeaderActions() {
        return !!this.$slots.headerActions;
      }
    }
  }
</script>

<template>
    <header class="exai-header">
      <div class="exai-header__title">{{ appTitle }}</div>
      <div class="exai-header__actions" v-if="hasHeaderActions">
        <slot name="headerActions">Test</slot>
      </div>
    </header>
</template>

<style lang="scss" scoped>
  .exai-header{
      display:flex;
      flex-direction:row;
      justify-content: space-between;
      align-items: center;
      height:55px;
      width:100%;
      background:#161618;
      padding:0 15px;

      &__actions{
        display:flex;
        flex-direction:row;
        align-items: center;
        gap:15px;
      }
  }
</style>
