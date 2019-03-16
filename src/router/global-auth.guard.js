import router from '../router';

router.beforeEach((to, from, next) => {
  const { localStorage } = window;
  const isAdmin = localStorage.getItem('isAdmin');
  if (isAdmin) {
    next();
  } else {
    next();
  }
});
