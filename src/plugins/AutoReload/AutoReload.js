import Config from './Config';
import { getVersion } from './utils';

/** @typedef {import('./Version').default} Version */

/**
 * модуль автоматического обновления
 */
export default class AutoReload {
    /**
     * конструктор
     * @param {Object} options настройки
     */
    constructor(options) {
        /** экземпляр роутера */
        this.router = options.router;

        /** экземпляр Vue */
        this.vm = options.vm;

        /** конфигурация */
        this.config = new Config(options.config);

        /**
         * предыдущее значение версии
         * @type {Version}
         */
        this.lastVersion = null;

        /**
         * таймер проверки обновления
         * @type {Number}
         */
        this.timer = null;
    }

    /** инициализировать модуль */
    async init() {
        const config = this.config;

        if (config.Enabled) {
            // получаем начальную версию сборки
            this.lastVersion = await getVersion();

            if (this.lastVersion && config.CheckInterval > 0) {
                // запускаем сервис проверки обновления
                this.timer = setInterval(async () => {
                    this.check();
                }, config.CheckInterval * 1000);
            }

            // внедряем проверку в роутер
            this.router.beforeEach(async (to, from, next) => {
                await this.check(this.router.resolve(to).href);
                next();
            });
        }
    }

    /**
     * проверить на наличие обновления
     * @param {String} href целевая страница
     */
    async check(href) {
        // получаем информацию о версии
        const version = await getVersion();

        if (this.lastVersion.BundleVersion != version.BundleVersion) {
            // версия сборки изменилась

            if (this.config.Notification) {
                // показываем уведомление об обновлении
                await this.vm.$alert(this.config.NotificationMessage, 'Предупреждение', {
                    type: 'warning',
                    confirmButtonText: 'OK',
                    closeOnClickModal: true,
                    closeOnPressEscape: true,
                }).catch(() => { });
            }

            // запоминаем новую версию сборки
            // повторный запрос нужен, чтобы не было двойной перезагрузки,
            // если сборка была изменена еще раз до того, как пользователь обновит страницу
            this.lastVersion = await getVersion();

            this.reload(href);
        }
    }

    /**
     * инициировать перезагрузку
     * @param {String} href целевая страница
     */
    reload(href) {
        if (href) {
            window.location.href = href;
        } else {
            window.location.reload(true);
        }
    }
}
