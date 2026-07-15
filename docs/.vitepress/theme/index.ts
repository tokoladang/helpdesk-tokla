import DefaultTheme from 'vitepress/theme'
import AnswerAccordion from '../components/AnswerAccordion.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AnswerAccordion', AnswerAccordion)
  },
}
