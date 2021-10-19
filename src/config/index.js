const configDefault = {
    icon: "info",
    iconVisible: true,
    iconClass: "",
    maxWidth: "500px",
    class: "",
    title: {
        visible: true,
        text: "Default",
        style: {
            class: "",
            style: ""
        },
    },
    buttonCancel: {
        visible: true,
        text: "Cancel",
        valueReturn: false,
        close: true,
        emitEventClick: "clickButtonCancel",
        style: {
            text: false,
            color: "error",
            class: "",
            depressed: true,
            width: "30%",
            maxWidth: "200px",
            minWidth: "100px",
        },
    },
    buttonOk: {
        visible: true,
        text: "Ok",
        valueReturn: true,
        close: true,
        emitEventClick: "clickButtonOk",
        style: {
            text: false,
            color: "primary",
            class: "",
            depressed: true,
            width: "30%",
            maxWidth: "200px",
            minWidth: "100px",
        },
    },
    loading: {
        text: 'Loading...',
        style: {
            size: 100,
            color: 'primary',
            width: '4',
            indeterminate: true
        }
    },
};

const configDefaultSuccess = {
    icon: "success",
    iconVisible: true,
    iconClass: "",
    title: {
        visible: true,
        text: "Success",
        style: {
            class: "",
            style: ""
        },
    },
    maxWidth: "500px",
    class: "",
    buttonCancel: {
        visible: false,
        text: "Cancel",
        valueReturn: false,
        close: true,
        emitEventClick: "clickButtonCancel",
        style: {
            text: false,
            color: "error",
            class: "",
            depressed: true,
            width: "30%",
            maxWidth: "200px",
            minWidth: "100px",
        },
    },
    buttonOk: {
        visible: true,
        text: "Ok",
        valueReturn: true,
        close: true,
        emitEventClick: "clickButtonOk",
        style: {
            text: false,
            color: "green darken-1",
            class: "white--text",
            depressed: true,
            width: "20%",
            maxWidth: "200px",
            minWidth: "100px",
        },
    },
    loading: {
        text: 'Loading...',
        style: {
            size: 100,
            color: 'primary',
            width: '4',
            indeterminate: true
        }
    },
};

const configDefaultError = {
    icon: "error",
    iconVisible: true,
    iconClass: "",
    title: {
        visible: true,
        text: "Error",
        style: {
            class: "",
            style: ""
        },
    },
    maxWidth: "500px",
    class: "",
    buttonCancel: {
        visible: false,
        text: "Cancel",
        valueReturn: false,
        close: true,
        emitEventClick: "clickButtonCancel",
        style: {
            text: false,
            color: "error",
            class: "",
            depressed: true,
            width: "30%",
            maxWidth: "200px",
            minWidth: "100px",
        },
    },
    buttonOk: {
        visible: true,
        text: "Ok",
        valueReturn: true,
        close: true,
        emitEventClick: "clickButtonOk",
        style: {
            text: false,
            color: "error",
            class: "",
            depressed: true,
            width: "20%",
            maxWidth: "200px",
            minWidth: "100px",
        },
    },
    loading: {
        text: 'Loading...',
        style: {
            size: 100,
            color: 'primary',
            width: '4',
            indeterminate: true
        }
    },
};

const configDefaultConfirm = {
    icon: "info",
    iconVisible: true,
    iconClass: "",
    title: {
        visible: true,
        text: "Confirm",
        style: {
            class: "",
            style: ""
        },
    },
    maxWidth: "500px",
    class: "",
    buttonCancel: {
        visible: true,
        text: "Cancel",
        valueReturn: false,
        close: true,
        emitEventClick: "clickButtonCancel",
        style: {
            text: false,
            color: "error",
            class: "",
            depressed: true,
            width: "30%",
            maxWidth: "200px",
            minWidth: "100px",
        },
    },
    buttonOk: {
        visible: true,
        text: "Ok",
        valueReturn: true,
        close: true,
        emitEventClick: "clickButtonOk",
        style: {
            text: false,
            color: "primary",
            class: "",
            depressed: true,
            width: "20%",
            maxWidth: "200px",
            minWidth: "100px",
        },
    },
    loading: {
        text: 'Loading...',
        style: {
            size: 100,
            color: 'primary',
            width: '4',
            indeterminate: true
        }
    },
};

const configDefaultLoading = {
    icon: "",
    iconVisible: true,
    iconClass: "",
    title: {
        visible: true,
        text: "",
        style: {
            class: "",
            style: ""
        },
    },
    maxWidth: "500px",
    class: "",
    buttonCancel: {},
    buttonOk: {},
    loading: {
        text: 'Loading...',
        style: {
            size: 100,
            color: 'primary',
            width: '4',
            indeterminate: true
        }
    },
};

const getDefault = (type) => {
    switch (type) {
        case "success":
            return configDefaultSuccess;
        case "error":
            return configDefaultError;  
        case "confirm":
            return configDefaultConfirm;    
        case "loading":
            return configDefaultLoading;
        default:
            return configDefault;
    }
};

export {
    configDefault,
    configDefaultSuccess,
    configDefaultError,
    configDefaultConfirm,
    configDefaultLoading,
    getDefault,
}