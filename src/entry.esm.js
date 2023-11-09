import { createApp, h } from 'vue';

import SweetAlertVuetify from './sweet-alert-vuetify.vue';
export { SweetAlertVuetify };

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via app.use() as well as app.component(),
export default /*#__PURE__*/(() => ({
  // Attach install function executed by app.use()
  install: (app, vuetify = null, optionsUse = {}) => {
    if (!vuetify) {
      return console.error('Use app.use(SweetAlertVuetify, vuetify)');
    };

    const property = optionsUse.property || '$swal';
    const container = document.querySelector('[data-app=true]') || document.body;
    let SWAVuetify = null;
    let element = null;

    const close = () => {
      container.removeChild(element);
      SWAVuetify.unmount();
      SWAVuetify = null;
      element = null;
    }

    const open = (alertDefault, config = {}) => {
      const options = {
        alertDefault,
        config: config.config,
        closeDestroy: config?.closeDestroy ?? true,
        modelValue: config?.modelValue ?? true,
        hideOverlay: config?.hideOverlay ?? false,
      }

      return new Promise(resolve => {
        const appAlreadyExists = SWAVuetify;

        if (appAlreadyExists) {
          close();
        }

        SWAVuetify = createApp({
          components: SweetAlertVuetify,
          data() {
            return {
              dialog: false,
            }
          },
          methods: {
            resolveValue(value) {
              close();
              resolve(value);
            }
          },
          render() {
            return h(SweetAlertVuetify, {
              modelValue: this.dialog,
              'onUpdate:modelValue': this.resolveValue,
              ...options,
            })
          }
        })

        element = document.createElement('div');
        container.appendChild(element);
        SWAVuetify.use(vuetify);
        SWAVuetify.mount(element);
      })
    }

    app.config.globalProperties[property] = open;
    app.config.globalProperties[property].close = close;
    app.component('SweetAlertVuetify', SweetAlertVuetify);
  }
}
))();

