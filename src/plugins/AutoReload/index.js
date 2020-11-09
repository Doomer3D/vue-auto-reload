////////////////////////////////////////////////////////////////
// плагин автоматического обновления
////////////////////////////////////////////////////////////////

import AutoReload from './AutoReload';

const AutoReloadModule = {
    /**
     * установить плагин
     * @param {Object} Vue экземпляр Vue
     * @param {Object} options настройки
     */
    install(Vue, options) {
        const module = new AutoReload(options);
        module.init();

        // запоминаем ссылку на модуль плагина, это нужно для демострации работы плагина
        Vue.prototype.$autoReload = module;
    },
};

export default AutoReloadModule;
