<template>
  <div class="base-button">
    <el-button
      :loading="loading"
      @click="clickHandler"
    >
      <slot name="header">
        Brak napisu
      </slot>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    clickHandler() {
      this.$emit('click');
    },
  },
};
</script>
