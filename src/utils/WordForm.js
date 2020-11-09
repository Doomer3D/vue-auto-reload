
/** класс для формирования строк с числительными */
export default class WordForm {
    /**
     * выбрать корректную форму слова для числительного
     * @param {Number} count число
     * @param {String} form0 форма 0 (ноль окон)
     * @param {String} form1 форма 1 (одно окно)
     * @param {String} form2 форма 2 (два окна)
     * @return {String} результат
     */
    static get(count, form0, form1, form2) {
        if (Array.isArray(form0)) {
            // массив форм
            if (form0.length == 1) {
                return WordForm.get(count, form0[0], form0[0], form0[0]);
            } else if (form0.length == 3) {
                return WordForm.get(count, form0[0], form0[1], form0[2]);
            } else {
                throw new Error('Передано неверное число форм слова');
            }
        } else {
            // три формы
            // eslint-disable-next-line no-bitwise
            if ((count / 10 >> 0) % 10 == 1) {
                return form0;
            } else {
                switch (count % 10) {
                    case 1:
                        return form1;
                    case 2:
                    case 3:
                    case 4:
                        return form2;
                    default:
                        return form0;
                }
            }
        }
    }

    /**
     * выбрать корректную форму слова для числительного и записать в виде числа с формой
     * @param {Number} count число
     * @param {String} form0 форма 0 (ноль окон)
     * @param {String} form1 форма 1 (одно окно)
     * @param {String} form2 форма 2 (два окна)
     * @return {String} результат
     */
    static getAsCount(count, form0, form1, form2) {
        return `${count} ${WordForm.get(count, form0, form1, form2)}`;
    }
}
