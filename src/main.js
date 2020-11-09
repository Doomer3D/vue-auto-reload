import Vue from 'vue';

// Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/ru-RU';
import locale from 'element-ui/lib/locale';

// dayjs
import 'dayjs/locale/ru';
import dayjsDuration from 'dayjs/plugin/duration';
import dayjs from 'dayjs';
import dayjsRelativeTime from 'dayjs/plugin/relativeTime';
import dayjsUtc from 'dayjs/plugin/utc';

// компоненты приложения
import router from '@router';
import store from '@store';
import AutoReload from '@/plugins/AutoReload';
import constants from './constants';
import App from './App.vue';

Vue.use(ElementUI);
locale.use(lang);

Vue.config.productionTip = false;

// локализация для функций работы с датами. Замена moment.js
dayjs.locale('ru');
dayjs.extend(dayjsDuration);
dayjs.extend(dayjsRelativeTime);
dayjs.extend(dayjsUtc);

new Vue({
    router,
    store,

    created() {
        Vue.use(AutoReload, {
            config: {
                // модуль включен
                Enabled: true,
                // ежеминутное обновление
                CheckInterval: constants.checkInterval,
            },
            router: this.$router,
            vm: this,
        });
    },

    render: h => h(App),
}).$mount('#app');

