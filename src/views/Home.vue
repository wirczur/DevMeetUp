<template>
  <div class="home">
    <label>
      {{ label }}
      <BaseInput
        @change="changeHandler"
      />
    </label>
    <BaseButton
      class="main-margin"
      :loading="clickButton"
      :label="labelButton"
      @click="clickHandler"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseButton from '@/components/BaseButton';
import BaseInput from '@/components/BaseInput';

export default {
  name: 'Home',
  components: {
    BaseButton,
    BaseInput,
  },
  inheritAttrs: false,
  data() {
    return {
      clickButton: false,
      label: 'Wartość',
      labelButton: 'test',
    };
  },
  methods: {
    changeHandler(value) {
      console.log(value);
    },
    clickHandler() {
      this.clickButton = !this.clickButton;
    },
  },
};
</script>

<style lang="sass" scoped>
  .main-margin
    margin: 20px
</style>
