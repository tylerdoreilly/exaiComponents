<script>
import { toRefs } from 'vue'

export default {
    props: ["text"],
    setup(props) {
      
      const { text } = toRefs(props);
      console.log(text.value);

      return {
        text
      }
    }
  }
</script>

<template>
    <p class="body-txt-level-1">{{ text }}</p>
</template>

<style lang="scss">
.body-txt-level-1{
    font-weight:bold;
    font-size:18px;
}
</style>
