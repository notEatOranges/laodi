/*
 * @Description:
 * @Date: 2023-09-25 10:42:43
 * @LastEditors: huangly
 * @LastEditTime: 2023-09-25 11:32:48
 * @FilePath: /A-work/packages/components/src/input/Input.ts
 */
import Input from "./Input.vue";

/**
 * 定义props类型
 */
export interface InputProps {
  modelValue: string; // 输入框的值
  placeholder?: string; // 输入框的占位符
  disabled?: boolean; // 是否禁用
  readonly?: boolean; // 是否只读
  clearable?: boolean; // 是否可清空
  maxlength?: number; // 最大输入长度
}

/**
 * 定义emit类型
 */
export type InputEmits = {
  "update:modelValue": [value: string];
};

/**
 * 定义instance类型
 */
export type InputInstance = InstanceType<typeof Input>;
