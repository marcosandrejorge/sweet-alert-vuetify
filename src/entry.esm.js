
// Import vue component
import SweetAlertVuetify from '@/sweet-alert-vuetify.vue';

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
export default /*#__PURE__*/(() => {
  // Get component instance
  const installable = SweetAlertVuetify;

  // Attach install function executed by Vue.use()
  installable.install = (Vue, vuetify = null, optionsUse = {}) => {
    if (!vuetify) {
      console.error('Use Vue.use(SweetAlertVuetify, vuetify)');
    };
    const property = optionsUse.property || '$swal';
    const Ctor = Vue.extend(Object.assign({ vuetify }, SweetAlertVuetify));
    let cmp;
    function createDialogCmp(options) {
      cmp?.close();
      const container = document.querySelector('[data-app=true]') || document.body
      return new Promise(resolve => {
        cmp = new Ctor(Object.assign({}, {
          propsData: Object.assign({}, options),
          destroyed: () => {
            container.removeChild(cmp.$el);
            resolve(cmp.valueReturn);
          }
        }));
        container.appendChild(cmp.$mount().$el);
      });
    }

    function open(alertDefault, config = {}) {
      return createDialogCmp({
        alertDefault,
        config: config.config,
        closeDestroy: config?.closeDestroy ?? true,
        modelSweet: config?.modelSweet ?? true,
        hideOverlay: config?.hideOverlay ?? false,
      });
    };

    function close() {
      cmp?.close();
    };

    Vue.prototype[property] = open;
    Vue.prototype[property].close = close;
    Vue.component('SweetAlertVuetify', installable);
  };
  return installable;
})();

