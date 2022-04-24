import Vue from 'vue'
import App from './App.vue'
import keyring from "@polkadot/ui-keyring"
import { cryptoWaitReady } from "@polkadot/util-crypto"

cryptoWaitReady().then(() => {
  keyring.loadAll({ ss58Format: 42, type: "sr25519" })
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
