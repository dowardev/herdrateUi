import DefaultTheme from 'vitepress/theme'
import '@catppuccin/vitepress/theme/mocha/mauve.css'
import '@herdrate/vue'
import * as Herdrate from '@herdrate/vue'
import { useToast } from '@herdrate/vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    for (const [name, component] of Object.entries(Herdrate)) {
      app.component(name, component)
    }

    const { toasts, add, remove } = useToast()
    app.config.globalProperties.$toast = add
    app.config.globalProperties.$toasts = toasts
    app.config.globalProperties.$removeToast = remove
  },
}
