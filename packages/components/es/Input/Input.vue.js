import { defineComponent as r, computed as c, ref as f, openBlock as i, createElementBlock as m, withDirectives as _, createElementVNode as h, vModelText as x } from "vue";
const y = { class: "ld-input" }, b = ["disabled", "placeholder", "readonly", "clearable", "maxlength"], V = /* @__PURE__ */ r({
  name: "LaoInput",
  __name: "Input",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    maxlength: { default: 10 }
  },
  emits: ["update:modelValue"],
  setup(d, { expose: n, emit: u }) {
    const e = d, a = c({
      get: () => e.modelValue,
      set: (l) => {
        u("update:modelValue", l);
      }
    }), t = f();
    function s() {
      var l;
      (l = t.value) == null || l.focus();
    }
    return n({
      focus: s
    }), (l, o) => (i(), m("div", y, [
      _(h("input", {
        type: "text",
        "onUpdate:modelValue": o[0] || (o[0] = (p) => a.value = p),
        ref_key: "inputRef",
        ref: t,
        class: "ld-input__control",
        disabled: e.disabled,
        placeholder: e.placeholder,
        readonly: e.readonly,
        clearable: e.clearable,
        maxlength: e.maxlength
      }, null, 8, b), [
        [x, a.value]
      ])
    ]));
  }
});
export {
  V as default
};
