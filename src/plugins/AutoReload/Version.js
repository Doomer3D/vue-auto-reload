/**
 * информация о версии
 */
export default class Version {
    /**
     * конструктор
     * @param {Object} origin образец
     */
    constructor(origin) {
        /**
         * версия сборки
         * @type {String}
         */
        this.AppVersion = origin?.AppVersion ?? '0.0.0';

        /**
         * тип сборки
         * @type {String}
         */
        this.Build = origin?.Build;

        /**
         * дата версии сборки
         * @type {String}
         */
        this.BundleVersion = origin?.BundleVersion ?? '2020-01-01T00:00';
    }
}
