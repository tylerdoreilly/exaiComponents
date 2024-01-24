<script setup>
import { defineProps, ref, toRefs, onMounted } from 'vue'
import { createPopper } from '@popperjs/core'
import { useEventListener, onClickOutside } from '@vueuse/core'

const popperInstance = ref(null)
const popcorn = ref(null)
const tooltip = ref(null)

const props = defineProps({
  text: String,
});

const { text } = toRefs(props);

onMounted(() => {
  useEventListener(popcorn.value, 'click', show)

  onClickOutside(popcorn.value, hide)

  popperInstance.value = createPopper(popcorn.value, tooltip.value, {
    placement: 'right-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8]
        }
      }
    ]
  })
})

function show () {
  tooltip.value.setAttribute('data-show', '')
  popperInstance.value.update()
}

function hide () {
  tooltip.value.removeAttribute('data-show')
}

</script>

<template>
  <div>
    <div ref="tooltip" class="tooltip">
        <div class="arrow" data-popper-arrow></div>
        <slot></slot>
    </div>

    <button ref="popcorn"
      class="
        popcorn
        bg-blue-500
        text-white
        px-3 py-2
        rounded
      "
    >
      {{ text }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.tooltip {
  display: none;
}

.tooltip[data-show] {
  display: block;
  background:white;
  padding:10px;
  color:black;
}

.arrow,
.arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

.arrow {
  visibility: hidden;
}

.arrow::before {
  visibility: visible;
  content: '';
  transform: rotate(45deg);
}

.tooltip[data-popper-placement^='top'] > .arrow {
  bottom: -4px;
}

.tooltip[data-popper-placement^='bottom'] > .arrow {
  top: -4px;
}

.tooltip[data-popper-placement^='left'] > .arrow {
  right: -4px;
}

.tooltip[data-popper-placement^='right'] > .arrow {
  left: -4px;
}
</style>