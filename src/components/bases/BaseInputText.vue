<template>
  <v-text-field
    :append-icon="state.appendIcon"
    :clearable="state.clearable"
    :disabled="disabled"
    :error-messages="errorMessages"
    :hint="hint"
    :label="label"
    :messages="messages"
    :name="name"
    :persistent-hint="state.persistentHint"
    :placeholder="placeholder"
    :readonly="readonly"
    :required="required"
    :value="value"
    :class="[
      'c-input-text',
      { '--readonly': readonly, '--required': required }
    ]"
  />
</template>

<script lang="ts">
import createFormControl from '@/components/wrappers/createFormControl'
export default createFormControl()
</script>

<style scoped lang="scss">
.c-input-text {
  &.--required {
    ::v-deep {
      .v-label {
        &:after {
          content: '（必須）';
          color: var(--v-error-base);
          font-size: 0.618em;
        }
      }
    }
  }
}
</style>
