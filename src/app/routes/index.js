import Home from './Home';

export const createRoutes = store => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home(store),
  childRoutes: []
});

export default createRoutes;
