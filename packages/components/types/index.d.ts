import { AllowedComponentProps } from 'vue';
import { App } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import type { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { VNodeProps } from 'vue';

declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;

declare const _default_2: DefineComponent<{
    modelValue: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: PropType<boolean>;
        default: boolean;
    };
    clearable: {
        type: PropType<boolean>;
        default: boolean;
    };
    maxlength: {
        type: PropType<number>;
        default: number;
    };
}, {
    focus: typeof focus_2;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    modelValue: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: PropType<boolean>;
        default: boolean;
    };
    clearable: {
        type: PropType<boolean>;
        default: boolean;
    };
    maxlength: {
        type: PropType<number>;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {
    modelValue: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    maxlength: number;
}, {}>;

declare function focus_2(): void;

/**
 * 定义emit类型
 */
export declare type InputEmits = {
    "update:modelValue": [value: string];
};

/**
 * 定义instance类型
 */
export declare type InputInstance = InstanceType<typeof _default_2>;

/**
 * 定义props类型
 */
export declare interface InputProps {
    modelValue: string;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    maxlength?: number;
}

export declare const LaoInput: SFCWithInstall<DefineComponent<{
    modelValue: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: PropType<boolean>;
        default: boolean;
    };
    clearable: {
        type: PropType<boolean>;
        default: boolean;
    };
    maxlength: {
        type: PropType<number>;
        default: number;
    };
}, {
    focus: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    modelValue: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: PropType<boolean>;
        default: boolean;
    };
    clearable: {
        type: PropType<boolean>;
        default: boolean;
    };
    maxlength: {
        type: PropType<number>;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {
    modelValue: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    maxlength: number;
}, {}>> & Record<string, any>;

declare type SFCWithInstall<T> = T & Plugin_2;

export { }
