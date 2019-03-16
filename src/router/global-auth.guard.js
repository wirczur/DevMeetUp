import router from '../router';

router.beforeEach((to, from, next) => {
  const { localStorage } = window;
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  if (to.name === 'settings') {
    if (isAdmin) {
      next();
    } else {
      next({
        name: 'home',
      });
    }
  } else {
    next();
  }
});
