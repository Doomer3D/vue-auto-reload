export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@views/Home/Index.vue'),
    },
    {
        path: '/info',
        name: 'info',
        component: () => import('@views/Info/Index.vue'),
    },
    {
        path: '*',
        redirect: '/'
    }
];
