import Vue from 'vue';
import VueI18n, { LocaleMessages, DateTimeFormats } from 'vue-i18n';

import zhCN from './zh-CN.json';
import enUS from './en-US.json';

import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN';
import elementEnLocale from 'element-ui/lib/locale/lang/en';
import ElementLocale from 'element-ui/lib/locale'

const messages: LocaleMessages = {
    'zh-CN': {
        ...zhCN,
        ...elementZhLocale
    },
    'en-US': {
        ...enUS,
        ...elementEnLocale
    }
}

Vue.use(VueI18n);

const i18n = new VueI18n({
    messages
})

ElementLocale.i18n((key: any, value: any) => i18n.t(key, value));

export default i18n;
