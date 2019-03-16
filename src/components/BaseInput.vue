<template>
  <div class="base-input">
    <el-input
      v-model="value"
      v-validate="'required'"
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
