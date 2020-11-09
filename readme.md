# Vue AutoReload Plugin
AutoReload – это плагин для VueJS 2.6, предназначенный для автоматичесеого обновления скриптов в браузере пользователя после деплоя.

[Статья на Хабре](https://habr.com/ru/post/527026/)

## Использование

### Внедрение генератора version.json

**vue.config.js**
```javascript
const path = require('path');

// генерация файла version.json с версией сборки
const AutoReloadUtils = require('./src/plugins/AutoReload/versionGenerator');
AutoReloadUtils.generateVersionFile(path.resolve(path.join(__dirname, 'public/version.json')));

module.exports = {
    ...
};
```

### Включение плагина

**main.js**
```javascript
import AutoReload from '@/plugins/AutoReload';

...

new Vue({
    router,

    created() {
        Vue.use(AutoReload, {
            config: {...},
            router: this.$router,
            vm: this,
        });
    },

    render: h => h(App),
}).$mount('#app');
```
