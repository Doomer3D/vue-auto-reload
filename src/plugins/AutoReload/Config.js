import { isBoolean } from './utils';

/**
 * конфигурация модуля автоматического обновления
 */
export default class Config {
    /**
     * конструктор
     * @param {Object} origin образец
     */
    constructor(origin) {
        /**
         * признак включения модуля
         * @type {Boolean}
         */
        this.Enabled = isBoolean(origin.Enabled) ? origin.Enabled : true;

        /**
         * интервал проверки на обновление в секундах
         * @type {Number}
         */
        this.CheckInterval = origin.CheckInterval ?? 1 * 60;

        /**
         * признак показа уведомления об обновлении
         * @type {Boolean}
         */
        this.Notification = isBoolean(origin.Notification) ? origin.Notification : true;

        /**
         * текст уведомления
         * @type {String}
         */
        this.NotificationMessage = origin.NotificationMessage
            ?? 'Система была обновлена, страница будет перезагружена.';
    }
}
