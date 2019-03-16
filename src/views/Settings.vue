<template>
  <div class="setting">
    <h1>Setting</h1>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  methods: {
    checkIfUserIsAdmin() {
      const { localStorage } = window;
      const isAdmin = localStorage.getItem('isAdmin');
      return isAdmin === 'true';
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.checkIfUserIsAdmin()) {
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
