<template>
  <div class="home">
    <h2>
      <font :color="settings ? settings.color : 'black'">
        {{ settings.title }}
      </font>
    </h2>
    <label>
      {{ label }}
      <BaseInput
        :required="required"
        @change="changeHandler"
      />
    </label>
    <BaseButton
      class="main-margin"
      :loading="clickButton"
      :label="labelButton"
      @click="clickHandler"
    >
      <template v-slot:header="test">
        Custom header
      </template>
    </BaseButton>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseButton from '@/components/BaseButton';
import BaseInput from '@/components/BaseInput';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    BaseButton,
    BaseInput,
  },
  inheritAttrs: false,
  data() {
    return {
      required: true,
      clickButton: false,
      label: 'Wartość',
      labelButton: 'test',
    };
  },
  computed: {
    ...mapGetters('settings', ['settings']),
  },
  created() {
    this.getSettings();
  },
  methods: {
    ...mapActions('settings', ['getSettings']),
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
