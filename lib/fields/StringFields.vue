<template>
  <input type="text" :value="value" @input="handleChange" />
</template>

<script lang="ts" setup="props">
import { defineProps, PropType } from 'vue'
import { Schema } from '../types'

const props = defineProps({
  schema: {
    type: Object as PropType<Schema>
  },
  value: {
    required: true
  },
  onChange: {
    type: Function as PropType<(v: any) => void>,
    required: true
  }
})

const handleChange = (e: any) => {
  console.log(e)
  props.onChange(e.target.value)
}
</script>
