<template>
  <div class="base-input">
    <el-input
      v-model="value"
      v-validate="required ? 'required' : null"
      type="text"
      name="wartosc"
    />
    <span>{{ errors.first('wartosc') && 'Wprowadz wartość' }}</span>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: null,
    };
  },
  watch: {
    value(newValue) {
      this.$emit('change', newValue);
    },
  },
};
</script>
