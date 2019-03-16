<template>
  <div class="base-input">
    <el-input
      v-model="value"
      type="text"
    />
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
