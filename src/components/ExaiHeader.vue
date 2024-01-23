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
    }
  }
</script>

<template>
    <header class="exai-header">
      <div class="exai-header__title">{{ appTitle }}</div>
    </header>
</template>

<style lang="scss" scoped>
  .exai-header{
      display:flex;
      flex-direction:row;
      align-items: center;
      height:55px;
      width:100%;
      background:darken(#181818, 5%);
      padding:0 15px;
  }
</style>
