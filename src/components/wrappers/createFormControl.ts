import { createComponent, reactive } from '@vue/composition-api'

export default function createFormControl() {
  return createComponent({
    props: {
      errorMessages: {
        type: [Array, String],
        default: () => []
      },
      disabled: {
        type: Boolean,
        default: false
      },
      hint: {
        type: String
      },
      label: {
        type: String
      },
      messages: {
        type: [Array, String],
        default: () => []
      },
      name: {
        type: String
      },
      placeholder: {
        type: String
      },
      readonly: {
        type: Boolean,
        default: false
      },
      required: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Number, String],
        default: null
      }
    },

    setup({ hint, disabled, readonly, required }) {
      const state = reactive({
        appendIcon: readonly ? 'mdi-lock' : undefined,
        clearable: !disabled && !readonly && !required,
        persistentHint: Boolean(hint)
      })

      return { state }
    }
  })
}
