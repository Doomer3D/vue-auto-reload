import axios from 'axios';
import Version from './Version';

/**
 * получить версию сборки
 * @return {Version} версия сборки
 */
export async function getVersion() {
    const versionData = (await axios.get(`version.json?timestamp=${new Date().getTime()}`)).data;
    if (versionData) {
        return new Version(versionData);
    } else {
        console.error('Не удалось получить информацию о версии сборки фронта');
    }
}

/**
 * проверить, что значение является булевым
 * @param {any} value значение
 * @return {Boolean} результат
 */
export function isBoolean(value) {
    return value === true || value === false || toString.call(value) === '[object Boolean]';
}
