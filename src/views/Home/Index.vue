<template>
    <div class="page">
        <h2>О проекте</h2>
        <p>
            Данный проект представляет из себя демонстрационный стенд плагина AutoReload
            для VueJS. Здесь вы можете попробовать функционал автоматического обновления скриптов.
        </p>
        <p>Плагин написан для конкурса статей ТехноТекст 2020.</p>

        <p>Чтобы попробовать плагин в действии, нажмите на кнопку ниже.</p>
        <p>Обновление произойдет в течение минуты или при переходе на другую страницу приложения.</p>
        <p>
            <el-button @click="resetVersion"
                       type="danger"
                       size="medium">
                Сбросить версию сборки
            </el-button>
        </p>

        <h2>Ссылки</h2>
        <p>Статья на хабре: <a href="https://habr.com/ru/post/527026/" target="_blank">Автоматическое обновление скриптов после деплоя</a></p>
        <p>Исходники на github: <a href="https://github.com/Doomer3D/vue-auto-reload" target="_blank">https://github.com/Doomer3D/vue-auto-reload</a></p>
        <p>Другая интересная статья: <a href="https://habr.com/ru/post/453642/" target="_blank">Умный парсер числа, записанного прописью</a></p>
    </div>
</template>

<script>
    export default {
        methods: {
            /** сбросить версию сборки */
            resetVersion() {
                if (this.$autoReload?.lastVersion) {
                    this.$autoReload.lastVersion.BundleVersion = '2020-01-01T00:00:00.000Z';
                }
            }
        },
    }
</script>

<style src="./index.scss" lang="scss" />
