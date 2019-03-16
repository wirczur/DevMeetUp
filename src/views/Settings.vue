<template>
  <div class="setting">
    <h1>Setting</h1>
  </div>
</template>

<script>
export default {
  name: 'Setting',

  beforeRouteEnter(to, from, next) {
    const { localStorage } = window;
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (isAdmin) {
      next();
    } else {
      next({
        name: 'home',
      });
    }
  },
};

</script>
