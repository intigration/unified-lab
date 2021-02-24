import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  const getGDPR = localStorage.getItem('GDPR:accepted')

  Vue.use(VueGtag, {
    config: { id: 'G-er' },
    bootstrap: getGDPR === 'true',
    appName: 'sqa-expert',
    enabled: getGDPR === 'true',
    pageTrackerScreenviewEnabled: true
  }, app.router)
}
