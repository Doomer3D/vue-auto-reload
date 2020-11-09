<template>
    <div class="page">
        <h2 class="title">{{ $route.meta.title }}</h2>

        <!-- Информация о сборке фронта -->
        <template v-if="frontVersion">
            <h2>Информация о сборке фронтенда</h2>
            <div class="tools-block">
                <dl>
                    <dt>Тип сборки</dt>
                    <dd>{{ frontVersion.Build }}</dd>
                    <dt>Версия</dt>
                    <dd>{{ frontVersion.AppVersion }}</dd>
                    <dt>Дата сборки</dt>
                    <dd class="tools-date-info">
                        <i class="el-icon-date"></i>
                        {{ bundleVersion.format('YYYY.MM.DD') }}
                        <i class="el-icon-time"></i>
                        {{ bundleVersion.format('HH:mm') }}
                        <span class="ago">
                            ({{ dayjs.duration(bundleVersion.diff(now)).humanize(true) }})
                        </span>
                    </dd>
                    <dt>Интервал проверки на обновление</dt>
                    <dd>{{ WordForm.getAsCount(checkInterval, 'секунд', 'секунда', 'секунды') }}</dd>
                </dl>
            </div>
        </template>
    </div>
</template>

<script>
    import dayjs from 'dayjs';
    import constants from '@/constants';
    import { getVersion } from '@/plugins/AutoReload/utils.js';
    import WordForm from '@utils/WordForm';

    export default {
        data: () => ({
            now: dayjs(),
            dayjs,
            WordForm,
            frontVersion: null,
            checkInterval: constants.checkInterval,
        }),

        computed: {
            bundleVersion() {
                return dayjs(this.frontVersion?.BundleVersion ?? '2020-01-01T00:00');
            }
        },

        async created() {
            this.frontVersion = await getVersion();
        },
    }
</script>

<style src="./index.scss" lang="scss" />
