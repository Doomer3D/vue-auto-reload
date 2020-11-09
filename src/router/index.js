import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
    routes,
    mode: 'history',
});

router.beforeEach((to, from, next) => {
    if (to.meta.isSlashed) {
        // маршрут со слешами
        if (to.fullPath.includes('%2F')) {
            next(to.fullPath.replace('%2F', '/'));
        }
    }
    next();
});

export default router;
