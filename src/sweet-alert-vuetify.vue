<template>
  <div>
    <v-row justify="center" class="mt-10">
      <v-dialog v-if="dialog" v-model="dialog" persistent :hide-overlay="hideOverlay" :max-width="getMaxWidth"
        :class="getClass">
        <v-card>
          <v-card-text class="pb-0">
            <div class="text-center" v-if="showLoading">
              <v-container fluid fill-height class="sweet-loader">
                <v-layout row class="d-flex justify-center text-center">
                  <v-progress-circular v-bind="configLoading.style"></v-progress-circular>
                </v-layout>
              </v-container>
            </div>
            <div class="text-center" v-if="!showLoading">
              <div class="svg-box" v-if="isSuccess">
                <svg class="circular green-stroke" :class="getIconClass">
                  <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10" />
                </svg>
                <svg class="checkmark green-stroke" :class="getIconClass">
                  <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)">
                    <path class="checkmark__check" fill="none" d="M616.306,283.025L634.087,300.805L673.361,261.53" />
                  </g>
                </svg>
              </div>

              <div class="svg-box" v-if="isError">
                <svg class="circular red-stroke" :class="getIconClass">
                  <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10" />
                </svg>
                <svg class="cross red-stroke" :class="getIconClass">
                  <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-502.652,-204.518)">
                    <path class="first-line" d="M634.087,300.805L673.361,261.53" fill="none" />
                  </g>
                  <g transform="matrix(-1.28587e-16,-0.79961,0.79961,-1.28587e-16,-204.752,543.031)">
                    <path class="second-line" d="M634.087,300.805L673.361,261.53" />
                  </g>
                </svg>
              </div>
              <div class="svg-box" v-if="isInfo">
                <svg class="circular yellow-stroke" :class="getIconClass">
                  <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10" />
                </svg>
                <svg class="alert-sign yellow-stroke" :class="getIconClass">
                  <g transform="matrix(1,0,0,1,-615.516,-257.346)">
                    <g transform="matrix(0.56541,-0.56541,0.56541,0.56541,93.7153,495.69)">
                      <path class="line" d="M634.087,300.805L673.361,261.53" fill="none" />
                    </g>
                    <g transform="matrix(2.27612,-2.46519e-32,0,2.27612,-792.339,-404.147)">
                      <circle class="dot" cx="621.52" cy="316.126" r="1.318" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </v-card-text>
          <v-card-title class="justify-center" v-if="configTitle.visible">
            <template v-if="!showLoading">
              <slot name="title">
                <p v-bind="configTitle.style" v-html="configTitle.text"></p>
              </slot>
            </template>
            <template v-if="showLoading">
              <p v-bind="configLoading.style">{{ configLoading.text }}</p>
            </template>
          </v-card-title>
          <v-card-text class="text-center">
            <slot name="content">
              <p class="text-body-2" style="word-break:normal;" v-if="getSubtitle !== ''" v-html="getSubtitle"></p>
            </slot>
          </v-card-text>
          <v-card-actions class="mb-4" v-if="!showLoading">
            <v-layout row>
              <div class="d-flex justify-center text-center">
                <v-btn v-if="configButtonCancel.visible" v-bind="getStyleButtonCancel"
                  @click="closeAlert(configButtonCancel)">
                  {{ configButtonCancel.text }}
                </v-btn>

                <v-btn v-if="configButtonOk.visible" v-bind="getStyleButtonOk" @click="closeAlert(configButtonOk)">
                  {{ configButtonOk.text }}
                </v-btn>
              </div>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch, defineComponent } from 'vue';

import {
  configDefault as configDefaultJSON,
  getDefault,
} from './config'
import { components } from "../dev/plugins/vuetify";

export default defineComponent({
  name: 'SweetAlertVuetify',
  components,
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    alertDefault: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Object,
      default: () => {
        return configDefaultJSON;
      }
    },
    hideOverlay: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const dialog = ref(false);
    const configDefault = ref(configDefaultJSON);
    const configButtonOk = ref(null);
    const configButtonCancel = ref(null);
    const configLoading = ref(null);
    const configTitle = ref(null);
    const valueReturn = ref(false);
    const showLoading = ref(false);

    const getConfigIcon = computed(() => {
      return props.config?.icon ?? configDefault.value.icon;
    })
    const getIconVisible = computed(() => {
      return props.config?.iconVisible ?? configDefault.value.iconVisible;
    })
    const getIconClass = computed(() => {
      return props.config?.iconClass ?? configDefault.value.iconClass;
    })
    const getSubtitle = computed(() => {
      return props.config?.subtitle ?? configDefault.value.subtitle;
    })
    const getMaxWidth = computed(() => {
      return props.config?.maxWidth ?? configDefault.value.maxWidth;
    })
    const getClass = computed(() => {
      return props.config?.class ?? configDefault.value.class;
    })
    const isSuccess = computed(() => {
      return getConfigIcon.value == "success" && getIconVisible.value;
    })
    const isError = computed(() => {
      return getConfigIcon.value == "error" && getIconVisible.value;
    })
    const isInfo = computed(() => {
      return getConfigIcon.value == "info" && getIconVisible.value;
    })
    const getStyleButtonCancel = computed(() => {
      let objStyle = { ...configButtonCancel.value.style };
      objStyle["class"] += configButtonOk.value.visible ? " mr-1" : "";
      return objStyle;
    })
    const getStyleButtonOk = computed(() => {
      let objStyle = { ...configButtonOk.value.style };
      objStyle["class"] += configButtonCancel.value.visible ? " ml-1" : "";
      return objStyle;
    })

    const setConfigButtonCancel = () => {
      configButtonCancel.value = {
        visible: props.config?.buttonCancel?.visible ?? configDefault.value.buttonCancel.visible,
        text: props.config?.buttonCancel?.text ?? configDefault.value.buttonCancel.text,
        valueReturn: props.config?.buttonCancel?.valueReturn ?? configDefault.value.buttonCancel.valueReturn,
        close: props.config?.buttonCancel?.close ?? configDefault.value.buttonCancel.close,
        emitEventClick: props.config?.buttonCancel?.emitEventClick ?? configDefault.value.buttonCancel.emitEventClick,
        style: props.config?.buttonCancel?.style ?? configDefault.value.buttonCancel.style,
      };
    }
    const setConfigButtonOk = () => {
      configButtonOk.value = {
        visible: props.config?.buttonOk?.visible ?? configDefault.value.buttonOk.visible,
        text: props.config?.buttonOk?.text ?? configDefault.value.buttonOk.text,
        valueReturn: props.config?.buttonOk?.valueReturn ?? configDefault.value.buttonOk.valueReturn,
        close: props.config?.buttonOk?.close ?? configDefault.value.buttonOk.close,
        emitEventClick: props.config?.buttonOk?.emitEventClick ?? configDefault.value.buttonOk.emitEventClick,
        style: props.config?.buttonOk?.style ?? configDefault.value.buttonOk.style,
      }
    }
    const setConfigLoading = () => {
      configLoading.value = {
        text: props.config?.loading?.text ?? configDefault.value.loading.text,
        style: props.config?.loading?.style ?? configDefault.value.loading.style,
      }
    }
    const setConfigTitle = () => {
      configTitle.value = {
        text: props.config?.title?.text ?? configDefault.value.title.text,
        visible: props.config?.title?.visible ?? configDefault.value.title.visible,
        style: props.config?.title?.style ?? configDefault.value.title.style,
      }
    }
    const updateConfigAlert = () => {
      setConfigButtonCancel();
      setConfigButtonOk();
      setConfigLoading();
      setConfigTitle();
    }
    const updateConfigDefault = () => {
      configDefault.value = { ...getDefault(props.alertDefault) };
    }
    const updateLoading = () => {
      showLoading.value = props.loading;
      if (props.alertDefault === "loading") showLoading.value = true;
    }
    const closeAlert = (button) => {
      valueReturn.value = button?.valueReturn ?? false;
      if (button?.emitEventClick) {
        emit(button.emitEventClick, valueReturn.value);
      }
      
      emit("update:modelValue", valueReturn.value);

      if (button?.close) {
        emit("update:modelValue", false);
        close();
      } 
    }
    const openAlert = () => {
      emit("input:modelValue", true);
      document.addEventListener('keyup', onEnterPressed);
    }
    const onEnterPressed = (e) => {
      if (e.keyCode === 13 && !showLoading.value) {
        e.stopPropagation()
        closeAlert(configButtonOk.value);
      }
    }
    const close = () => {
      document.removeEventListener('keyup', onEnterPressed);
    }

    onMounted(() => {
      updateLoading();
      updateConfigDefault();
      updateConfigAlert();
      dialog.value = props.modelValue;
      if (props.modelValue) openAlert();
    })

    watch(
      () => props.modelValue,
      (value) => {
        dialog.value = value;
        value ? openAlert() : close();
      }
    )

    watch(
      () => props.alertDefault,
      () => {
        updateConfigDefault();
      }
    )

    watch(
      () => [props.config, props.alertDefault],
      () => {
        updateConfigAlert();
      },
      { deep: true }
    )

    watch(
      () => props.loading,
      () => {
        updateLoading();
      }
    )

    return {
      dialog,
      configDefault,
      configButtonOk,
      configButtonCancel,
      configLoading,
      configTitle,
      valueReturn,
      showLoading,
      // ---
      getConfigIcon,
      getIconVisible,
      getIconClass,
      getSubtitle,
      getMaxWidth,
      getClass,
      isSuccess,
      isError,
      isInfo,
      getStyleButtonCancel,
      getStyleButtonOk,
      // ---
      setConfigButtonCancel,
      setConfigButtonOk,
      setConfigLoading,
      setConfigTitle,
      updateConfigAlert,
      updateConfigDefault,
      updateLoading,
      closeAlert,
      openAlert,
      onEnterPressed,
      close,
    }
  }
})
</script>

<style scoped>
.d-flex {
  flex: 1 1 auto;
  max-width: 100%;
}

.sweet-loader {
  min-height: 150px;
}

.v-card {
  overflow: hidden !important;
}

.v-card-title {
  white-space: normal;
}

.svg-box {
  display: inline-block;
  position: relative;
  width: 150px;
}

.green-stroke {
  stroke: #7CB342;
}

.red-stroke {
  stroke: #FF6245;
}

.yellow-stroke {
  stroke: #FFC107;
}


.circular circle.path {
  stroke-dasharray: 330;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  opacity: 0.4;
  animation: 0.7s draw-circle ease-out;
}

/*------- Checkmark ---------*/
.checkmark {
  stroke-width: 6.25;
  stroke-linecap: round;
  position: absolute;
  top: 56px;
  left: 49px;
  width: 52px;
  height: 40px;
}

.checkmark path {
  animation: 1s draw-check ease-out;
}

@keyframes draw-circle {
  0% {
    stroke-dasharray: 0, 330;
    stroke-dashoffset: 0;
    opacity: 1;
  }

  80% {
    stroke-dasharray: 330, 330;
    stroke-dashoffset: 0;
    opacity: 1;
  }

  100% {
    opacity: 0.4;
  }
}

@keyframes draw-check {
  0% {
    stroke-dasharray: 49, 80;
    stroke-dashoffset: 48;
    opacity: 0;
  }

  50% {
    stroke-dasharray: 49, 80;
    stroke-dashoffset: 48;
    opacity: 1;
  }

  100% {
    stroke-dasharray: 130, 80;
    stroke-dashoffset: 48;
  }
}

/*---------- Cross ----------*/

.cross {
  stroke-width: 6.25;
  stroke-linecap: round;
  position: absolute;
  top: 54px;
  left: 54px;
  width: 40px;
  height: 40px;
}

.cross .first-line {
  animation: 0.7s draw-first-line ease-out;
}

.cross .second-line {
  animation: 0.7s draw-second-line ease-out;
}

@keyframes draw-first-line {
  0% {
    stroke-dasharray: 0, 56;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 0, 56;
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dasharray: 56, 330;
    stroke-dashoffset: 0;
  }
}

@keyframes draw-second-line {
  0% {
    stroke-dasharray: 0, 55;
    stroke-dashoffset: 1;
  }

  50% {
    stroke-dasharray: 0, 55;
    stroke-dashoffset: 1;
  }

  100% {
    stroke-dasharray: 55, 0;
    stroke-dashoffset: 70;
  }
}

.alert-sign {
  stroke-width: 6.25;
  stroke-linecap: round;
  position: absolute;
  top: 40px;
  left: 68px;
  width: 15px;
  height: 70px;
  animation: 0.5s alert-sign-bounce cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.alert-sign .dot {
  stroke: none;
  fill: #FFC107;
}

@keyframes alert-sign-bounce {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(0);
    opacity: 1;
  }

  100% {
    transform: scale(1);
  }
}
</style>