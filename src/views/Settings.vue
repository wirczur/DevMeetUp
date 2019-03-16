<template>
  <div class="setting">
    <h1>Setting</h1>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'Setting',
  computed: {
    ...mapGetters('user', ['isAdmin']),
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.isAdmin) {
        next();
      } else {
        next({
          name: 'home',
        });
      }
    });
  },
};

</script>
