<script setup>
  import ExaiHeader from '@/components/ExaiHeader.vue'
  import ExaiPopover from '@/components/ExaiPopover.vue'
  import ExaiButton from '@/components/ExaiButton.vue'
</script>

<template>
 <ExaiHeader appTitle="Exai Component Library">
    <template #headerActions>
      <div>Hello</div> 
      <div>Tyler</div> 
      <ExaiPopover text="Popover">
        <p>Hey this is a test</p>
      </ExaiPopover>
      <exai-button text="btn test" ></exai-button>
    </template>
 </ExaiHeader>
 <div class="container">
  <div class="nav">
    nav
  </div>
  
  <div class="main">
    content
  </div>
</div>  
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
