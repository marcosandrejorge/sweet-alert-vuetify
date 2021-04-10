<template>
  <div>
    <v-row justify="center" class="mt-10">
      <v-dialog
        v-if="dialog"
        v-model="dialog"
        persistent
        :max-width="getMaxWidth"
      >
        <v-card>
          <v-card-text class="pb-0">
            <div class="text-center" v-if="loading">
              <v-container fluid fill-height class="sweet-loader">
                  <v-layout align-center justify-center>
                      <v-flex>
                        <v-progress-circular
                          v-bind="getConfigLoading.style"
                        ></v-progress-circular>
                      </v-flex>
                  </v-layout>
              </v-container>
            </div>
            <div class="text-center" v-if="!loading">
              <div class="svg-box" v-if="isSuccess">
                <svg class="circular green-stroke">
                    <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10"/>
                </svg>
                <svg class="checkmark green-stroke">
                    <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)">
                      <path class="checkmark__check" fill="none" d="M616.306,283.025L634.087,300.805L673.361,261.53"/>
                    </g>
                </svg>
              </div>

              <div class="svg-box" v-if="isError">
                  <svg class="circular red-stroke">
                      <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10"/>
                  </svg>
                  <svg class="cross red-stroke">
                      <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-502.652,-204.518)">
                          <path class="first-line" d="M634.087,300.805L673.361,261.53" fill="none"/>
                      </g>
                      <g transform="matrix(-1.28587e-16,-0.79961,0.79961,-1.28587e-16,-204.752,543.031)">
                          <path class="second-line" d="M634.087,300.805L673.361,261.53"/>
                      </g>
                  </svg>
              </div>
              <div class="svg-box" v-if="isInfo">
                  <svg class="circular yellow-stroke">
                      <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10"/>
                  </svg>
                  <svg class="alert-sign yellow-stroke">
                      <g transform="matrix(1,0,0,1,-615.516,-257.346)">
                          <g transform="matrix(0.56541,-0.56541,0.56541,0.56541,93.7153,495.69)">
                              <path class="line" d="M634.087,300.805L673.361,261.53" fill="none"/>
                          </g>
                          <g transform="matrix(2.27612,-2.46519e-32,0,2.27612,-792.339,-404.147)">
                              <circle class="dot" cx="621.52" cy="316.126" r="1.318" />
                          </g>
                      </g>
                  </svg>
              </div>
            </div>
          </v-card-text>
          <v-card-title class="justify-center">
            <div v-if="!loading">{{ getTitle }}</div>
            <div v-if="loading">{{ getConfigLoading.text }}</div>
          </v-card-title>
          <v-card-text>
            <slot name="content"></slot>
          </v-card-text>
          <v-card-actions class="mb-4" v-if="!loading">
            <v-layout row>
              <v-flex justify-center class="text-center">
                <v-btn
                  v-if="getConfigButtonCancel.visible"
                  v-bind="getStyleButtonCancel"
                  @click="closeAlert(getConfigButtonCancel)"
                >
                  {{ getConfigButtonCancel.text }}
                </v-btn>
                
                <v-btn
                  v-if="getConfigButtonOk.visible"
                  v-bind="getStyleButtonOk"
                  @click="closeAlert(getConfigButtonOk)"
                >
                  {{ getConfigButtonOk.text }}
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import {     
  configDefault,
  getDefault,
} from './config'
import {
  VRow,
  VDialog,
  VBtn,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VSpacer,
  VLayout,
  VFlex,
  VProgressCircular,
  VContainer,
} from "vuetify/lib";
export default /*#__PURE__*/{
  name: 'SweetAlertVuetify', // vue component name
  components: {
    VRow,
    VDialog,
    VBtn,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VSpacer,
    VLayout,
    VFlex,
    VProgressCircular,
    VContainer
  },
  model: {
    prop: "modelSweet",
  },
  props:{
    modelSweet: {
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
        return configDefault;
      }
    }
  },
  data() {
    return {
      dialog: false,
      resolve: null,
      reject: null,
      configDefault: configDefault,
    };
  },
  computed: {
    getConfigIcon() {
      return this.config?.icon ?? this.configDefault.icon;
    },
    getIconVisible() {
      return this.config?.iconVisible ?? this.configDefault.iconVisible;
    },
    getTitle() {
      return this.config?.title ?? this.configDefault.title;
    },
    getMaxWidth() {
      return this.config?.maxWidth ?? this.configDefault.maxWidth;
    },
    getConfigButtonCancel() {
      return {
        visible: this.config?.buttonCancel?.visible ?? this.configDefault.buttonCancel.visible,
        text: this.config?.buttonCancel?.text ?? this.configDefault.buttonCancel.text,
        valueReturn: this.config?.buttonCancel?.valueReturn ?? this.configDefault.buttonCancel.valueReturn,
        close: this.config?.buttonCancel?.close ?? this.configDefault.buttonCancel.close,
        emitEventClick: this.config?.buttonCancel?.emitEventClick ?? this.configDefault.buttonCancel.emitEventClick,
        style: this.config?.buttonCancel?.style ?? this.configDefault.buttonCancel.style,
      }
    },
    getConfigButtonOk() {
      return {
        visible: this.config?.buttonOk?.visible ?? this.configDefault.buttonOk.visible,
        text: this.config?.buttonOk?.text ?? this.configDefault.buttonOk.text,
        valueReturn: this.config?.buttonOk?.valueReturn ?? this.configDefault.buttonOk.valueReturn,
        close: this.config?.buttonOk?.close ?? this.configDefault.buttonOk.close,
        emitEventClick: this.config?.buttonOk?.emitEventClick ?? this.configDefault.buttonOk.emitEventClick,
        style: this.config?.buttonOk?.style ?? this.configDefault.buttonOk.style,
      }
    },
    getConfigLoading() {
      return {
        text: this.config?.loading?.text ?? this.configDefault.loading.text,
        style: this.config?.loading?.style ?? this.configDefault.loading.style,
      }
    },
    isSuccess() {
      return this.getConfigIcon == "success" && this.getIconVisible;
    },
    isError() {
      return this.getConfigIcon == "error" && this.getIconVisible;
    },
    isInfo() {
      return this.getConfigIcon == "info" && this.getIconVisible;
    },
    getStyleButtonCancel() {
      let objStyle = {...this.getConfigButtonCancel.style};
      objStyle["class"] += this.getConfigButtonOk.visible ? " mr-1" : "";
      return objStyle;
    },
    getStyleButtonOk() {
      let objStyle = {...this.getConfigButtonOk.style};
      objStyle["class"] += this.getConfigButtonCancel.visible ? " ml-1" : "";
      return objStyle;
    }
  },
  methods: {
    updateConfigDefault() {
      this.configDefault = {...getDefault(this.alertDefault)};
    },
    updateModelSweet() {
      this.modelSweet ? this.openAlert() : this.dialog = false;
    },
    closeAlert(button) {
      if (button?.close) {
        this.dialog = false;
      }
      this.resolve(button?.valueReturn);
      this.$emit(button.emitEventClick, button.valueReturn);
      this.$emit("change", button.valueReturn);
      this.$emit("input", false);
    },
    
    openAlert() {
      this.dialog = true;
      this.$emit("input", true);
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      });
    },
  },
  mounted() {
    this.updateModelSweet();
    this.updateConfigDefault();
  },
  watch: {
    modelSweet() {
      this.updateModelSweet();
    },
    alertDefault() {
      this.updateConfigDefault();
    }
  }
};
</script>

<style scoped>

.sweet-loader {
  min-height: 150px;
}

.v-card {
  overflow: hidden !important;
}

.svg-box {
  display:inline-block;
  position: relative;
  width:150px;
}

.green-stroke {
  stroke:#7CB342;
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
.checkmark{
	stroke-width: 6.25;
  stroke-linecap: round;
	position:absolute;
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
      stroke-dasharray: 0,330;
      stroke-dashoffset: 0;
      opacity: 1;
  }

  80% {
      stroke-dasharray: 330,330;
      stroke-dashoffset: 0;
      opacity: 1;
  }

  100%{
      opacity: 0.4;
  }
}

@keyframes draw-check {
  0% {
      stroke-dasharray: 49,80;
      stroke-dashoffset: 48;
      opacity: 0;
  }

  50% {
      stroke-dasharray: 49,80;
      stroke-dashoffset: 48;
      opacity: 1;
  }

  100% {
      stroke-dasharray: 130,80;
      stroke-dashoffset: 48;
  }
}

/*---------- Cross ----------*/

.cross {
  stroke-width:6.25;
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
      stroke-dasharray: 0,56;
      stroke-dashoffset: 0;
  }

  50% {
      stroke-dasharray: 0,56;
      stroke-dashoffset: 0;
  }

  100% {
      stroke-dasharray: 56,330;
      stroke-dashoffset: 0;
  }
}

@keyframes draw-second-line {
  0% {
      stroke-dasharray: 0,55;
      stroke-dashoffset: 1;
  }

  50% {
      stroke-dasharray: 0,55;
      stroke-dashoffset: 1;
  }

  100% {
      stroke-dasharray: 55,0;
      stroke-dashoffset: 70;
  }
}

.alert-sign {
  stroke-width:6.25;
  stroke-linecap: round;
  position: absolute;
  top: 40px;
  left: 68px;
  width: 15px;
  height: 70px;
  animation: 0.5s alert-sign-bounce cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.alert-sign .dot {
  stroke:none;
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
