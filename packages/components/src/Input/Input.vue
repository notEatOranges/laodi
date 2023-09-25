<!--
 * @Description: 
 * @Date: 2023-09-25 10:42:05
 * @LastEditors: huangly
 * @LastEditTime: 2023-09-25 11:33:39
 * @FilePath: /A-work/packages/components/src/input/Input.vue
-->
<template>
  <div class="ld-input">
    <input type="text" v-model="state" ref="inputRef" class="ld-input__control" :disabled="props.disabled" :placeholder="props.placeholder" :readonly="props.readonly" :clearable="props.clearable" :maxlength="props.maxlength"/>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { InputEmits, InputProps } from "./Input";

defineOptions({
  name: "LaoInput",
});

const emit = defineEmits<InputEmits>();
const props = withDefaults(defineProps<InputProps>(), {
  modelValue: "",
  disabled: false,
  placeholder: '',
  readonly: false,
  clearable: false,
  maxlength: 10,
});

const state = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit("update:modelValue", val);
  },
});

const inputRef = ref<HTMLInputElement>();

function focus() {
  inputRef.value?.focus();
}

defineExpose({
  focus,
});
</script>