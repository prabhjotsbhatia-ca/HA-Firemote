import {LitElement, html, css, unsafeHTML} from './lit/lit-all.min.js';
const HAFiremoteVersion = 'v3.0.3';
console.groupCollapsed("%c 🔥 FIREMOTE-CARD 🔥 %c "+HAFiremoteVersion+" installed ", "color: orange; font-weight: bold; background: black", "color: green; font-weight: bold;"),
console.log("Readme:", "https://github.com/PRProd/HA-Firemote"),
console.groupEnd();

const fireEvent = (node, type, detail, options) => {
  options = options || {};
  detail = detail === null || detail === undefined ? {} : detail;
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed
  });
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
}


const devices = {
  "amazon-fire": {

    "meta": {
      "friendlyName": "Amazon Fire",
      "supported": true,
    },

    "Smart TV": {

      "fire_tv_hisense_u6_4k_uhd_2022": {
        "supported": false,
        "friendlyName": "Hisense U6 4K UHD - Fire TV (2022)",
        "defaultEventListenerBinPath": "/dev/input/event0",
        "defaultRemoteStyle": "AF5",
        "hdmiInputs": 4,
      },
      "fire_tv_toshiba_v35": {
        "supported": true,
        "friendlyName": "Toshiba Fire TV (V35 Series - 2021)",
        "defaultEventListenerBinPath": "/dev/input/event0",
        "defaultRemoteStyle": "AF5",
        "hdmiInputs": 4,
      },
      "fire_tv_4_series": {
        "supported": true,
        "friendlyName": "Fire TV (4 Series - 2021)",
        "defaultEventListenerBinPath": "/dev/input/event0",
        "defaultRemoteStyle": "AF5",
        "hdmiInputs": 4,
      },

    },

    "Fire TV Cube": {

      "fire_tv_cube_third_gen": {
        "supported": true,
        "friendlyName": "Fire TV Cube (3rd Gen - 2022)",
        "defaultEventListenerBinPath": "/dev/input/event3",
        "defaultRemoteStyle": "AF5",
        "hdmiInputs": 1,
      },
      "fire_tv_cube_second_gen": {
        "supported": true,
        "friendlyName": "Fire TV Cube (2nd Gen - 2019)",
        "defaultEventListenerBinPath": "/dev/input/event5",
        "defaultRemoteStyle": "AF4",
        "hdmiInputs": 0,
      },
      "fire_tv_cube_first_gen": {
        "supported": true,
        "friendlyName": "Fire TV Cube (1st Gen - 2018)",
        "defaultEventListenerBinPath": "/dev/input/event5",
        "defaultRemoteStyle": "AF1",
        "hdmiInputs": 0,
      },
    },

    "Streaming Media Player": {

      "fire_tv_stick_4k_max_second_gen": {
        "supported": true,
        "friendlyName": "Fire TV Stick 4K Max (2nd Gen - 2023)",
        "defaultEventListenerBinPath": "/dev/input/event5",
        "defaultRemoteStyle": "AF4",
        "hdmiInputs": 0,
      },
      "fire_tv_stick_4k_max": {
        "supported": true,
        "friendlyName": "Fire TV Stick 4K Max (1st Gen - 2021)",
        "defaultEventListenerBinPath": "/dev/input/event5",
        "defaultRemoteStyle": "AF4",
        "hdmiInputs": 0,
      },
      "fire_tv_3rd_gen": {
        "supported": true,
        "friendlyName": "Fire TV Stick (3rd Gen - 2020)",
        "defaultEventListenerBinPath": "/dev/input/event4",
        "defaultRemoteStyle": "AF3",
        "hdmiInputs": 0,
      },
      "fire_tv_stick_lite": {
        "supported": true,
        "friendlyName": "Fire TV Stick Lite (1st Gen - 2020)",
        "defaultEventListenerBinPath": "/dev/input/event4",
        "defaultRemoteStyle": "AF2",
        "hdmiInputs": 0,
      },
      "fire_stick_4k": {
        "supported": true,
        "friendlyName": "Fire TV Stick 4K (1st Gen - 2018)",
        "defaultEventListenerBinPath": "/dev/input/event4",
        "defaultRemoteStyle": "AF3",
        "hdmiInputs": 0,
      },
      "fire_stick_second_gen": {
        "supported": true,
        "friendlyName": "Fire TV Stick (2nd gen - 2016 - 2019)",
        "defaultEventListenerBinPath": "/dev/input/event4",
        "defaultRemoteStyle": "AF3",
        "hdmiInputs": 0,
      },
      "fire_stick_basic": {
        "supported": true,
        "friendlyName": "Fire TV Stick (Basic Edition - 2017)",
        "defaultEventListenerBinPath": "/dev/input/event4",
        "defaultRemoteStyle": "AF1",
        "hdmiInputs": 0,
      },
      "fire_stick_second_gen_2015": {
        "supported": false,
        "friendlyName": "Fire TV Stick (2nd Gen - 2015)",
        "defaultEventListenerBinPath": "",
        "defaultRemoteStyle": "",
        "hdmiInputs": 0,
      },
      "fire_stick_first_gen": {
        "supported": true,
        "friendlyName": "Fire TV Stick (1st gen - 2014)",
        "defaultEventListenerBinPath": "/dev/input/event1",
        "defaultRemoteStyle": "AF1",
        "hdmiInputs": 0,
      },
      "fire_tv_third_gen_2017": {
        "supported": true,
        "friendlyName": "Fire TV (3rd Gen - 2017)",
        "defaultEventListenerBinPath": "/dev/input/event3",
        "defaultRemoteStyle": "AF1",
        "hdmiInputs": 0,
      },

    },
  },


  "apple-tv": {

    "meta": {
      "friendlyName": "Apple TV",
      "supported": true,
    },

    "noCategory": {

      "appletv-gen4": {
        "supported": true,
        "friendlyName": "Apple TV - (HD) Gen4 2015",
        "defaultRemoteStyle": "AR2",
        "hdmiInputs": 0,
      },

      "appletv-4k-gen2": {
        "supported": true,
        "friendlyName": "Apple TV 4K - Gen2 2021",
        "defaultRemoteStyle": "AR3",
        "hdmiInputs": 0,
      },

    }

  },


  "chromecast": {

    "meta": {
      "friendlyName": "Chromecast",
      "supported": true,
    },

    "noCategory": {

      "chromecast-4k": {
        "supported": true,
        "friendlyName": "Chromecast 4K",
        "defaultRemoteStyle": "CC1",
        "hdmiInputs": 0,
      },

      "chromecast-hd": {
        "supported": true,
        "friendlyName": "Chromecast HD",
        "defaultRemoteStyle": "CC1",
        "hdmiInputs": 0,
      },

    }

  },


  "nvidia-shield": {

    "meta": {
      "friendlyName": "NVIDIA Shield",
      "supported": true,
    },

    "noCategory": {

      "shield-tv-2017": {
        "supported": true,
        "friendlyName": "SHIELD TV (2015 or 2017)",
        "defaultRemoteStyle" : "NS1",
      },
      "shield-tv-pro-2017": {
        "supported": true,
        "friendlyName": "SHIELD TV Pro (2015 or 2017)",
        "defaultRemoteStyle" : "NS1",
      },
      "shield-tv-2019": {
        "supported": true,
        "friendlyName": "SHIELD TV (2019)",
        "defaultRemoteStyle" : "NS2",
      },
      "shield-tv-pro-2019": {
        "supported": true,
        "friendlyName": "SHIELD TV Pro (2019)",
        "defaultRemoteStyle" : "NS2",
      },

    },
  },


  "xiaomi": {

    "meta": {
      "friendlyName": "Xiaomi",
      "supported": true,
    },

    "Mi Box": {

      "mi-box-s": {
        "supported": true,
        "friendlyName": "Mi Box S",
        "defaultEventListenerBinPath": "/dev/input/event2",
        "defaultRemoteStyle": "XM2",
        "hdmiInputs": 0,
      },

    },

    "TV Stick": {

      "xiaomi-tv-stick-4k": {
        "supported": false,
        "friendlyName": "TV Stick 4K",
        "defaultEventListenerBinPath": "/dev/input/event4",
        "defaultRemoteStyle": "XM1",
        "hdmiInputs": 0,
      },

      "mi-tv-stick": {
        "supported": false,
        "friendlyName": "Mi TV Stick",
        "defaultEventListenerBinPath": "/dev/input/event2",
        "defaultRemoteStyle": "XM2",
        "hdmiInputs": 0,
      },

    },

  },

}
const devicemap = new Map(Object.entries(devices));

const fastappchoices = {

  "abc-iview": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1735.8 430.1" style="enable-background:new 0 0 1735.8 430.1" xml:space="preserve"><style>.abciview0{fill:#00bfbd}</style><g id="Layer_1"><g id="Layer_2_1_"><path d="M63.3 96.6c16.7-.3 36.9 6 50.6 22.8 6.2 6 17.6 34.8 17.6 34.8l68.2 181c8.8 21.7 35.1 23.4 42.9 1.6l21.2-57.1 36.1 95.1c-17.6 32.1-34.6 39.9-54.7 47.3-23.5 7.3-51.6 4.9-71.8-7.6-6.7-4.3-24.3-15.7-36.1-44.6L65.5 169.3v182.6l26.9-77.2 34.5 96.3c-5 22.1-21 40.6-39.6 49.3-20.3 9.6-44.6 6.2-63-5.4C6 401.3.8 385.3 0 356.7l.2-197.6c2.1-32.9 23.1-50.8 41.6-58.8 8.2-2.7 11.8-3.5 21.5-3.7z"/><path d="M377.3 426c-16.7.3-36.9-6-50.6-22.8-6.2-6-17.6-34.8-17.6-34.8l-68.1-181c-8.8-21.8-35.1-23.4-42.9-1.6l-21.2 57.1-36.1-95.1c17.6-32 34.6-39.9 54.7-47.3 23.5-7.3 51.6-4.9 71.8 7.6 6.7 4.3 24.3 15.8 36.1 44.6l71.8 200.5V170.5l-26.8 77.2-34.5-96.3c5-22.2 21-40.6 39.6-49.3 20.3-9.6 44.6-6.2 63 5.4 18.3 13.6 23.5 29.6 24.3 58.1l-.3 197.6c-2.1 32.9-23.1 50.8-41.6 58.8-8.3 3-11.9 3.8-21.6 4z"/></g><g id="Layer_5"><path class="abciview0" d="M1229.9 330c-18.2 22.3-45.9 36.5-77 36.5-54.9 0-99.4-44.5-99.4-99.4s44.5-99.4 99.4-99.4c54.6 0 98.9 44 99.4 98.4h63.8c-.7-89.4-73.3-161.6-162.8-161.6-89.9 0-162.8 72.9-162.8 162.8s72.9 162.8 162.8 162.8c67.7 0 125.8-41.3 150.3-100.2h-73.7v.1z"/><path d="m1250.5 267.5-127.9-76.2v152.3z"/><path class="abciview0" d="M903.5 116.3h71.9v304.3h-71.9zM889.2 116.3h-77.4l-72.1 194.3-72.9-194.3h-78.6l121 304.3h59zM502.5 116.3h71.9v304.3h-71.9z"/><circle class="abciview0" cx="537.5" cy="44.3" r="44.3"/><path class="abciview0" d="m1735.8 116.3-108.6 304.3h-59.4l-56-184.6-55 184.6h-59.6l-108-304.3h77.3l60.8 196 54.2-196h62.3l54 194.7 60-194.7z" id="Layer_4"/></g></g></svg>',
      "friendlyName": "ABC iview (AU)",
      "className": "abciviewButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "au.net.abc.iview",
          "androidName": "au.net.abc.iview",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n au.net.abc.iview/.ui.router.TvLauncherActivity",
      },
      "apple-tv": {
          "appName": "ABC iview",
      },
      "chromecast": {
          "appName": "au.net.abc.iview",
          "androidName": "au.net.abc.iview",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n au.net.abc.iview/.ui.router.TvLauncherActivity",
      },
      "nvidia-shield": {
          "appName": "au.net.abc.iview",
          "androidName": "au.net.abc.iview",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n au.net.abc.iview/.ui.router.TvLauncherActivity",
      },
      "xiaomi": {
          "appName": "au.net.abc.iview",
          "androidName": "au.net.abc.iview",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n au.net.abc.iview/.ui.router.TvLauncherActivity",
      },
  },



  "ace-stream-media": {
      "button": '<svg viewBox="0 0 245 59" width="245" height="59" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#asma)" fill-rule="evenodd" clip-rule="evenodd"><path d="M55.5 2.937C50.676-.052 46-.485 41.754.422c-4.072.866-7.992 3.035-11.318 5.597-.861-.551-1.693-1.103-2.511-1.637-.746 1.626-1.512 3.29-2.296 4.973l-2.416 5.289c2.178-.705 4.388-1.424 6.646-2.15l7.025-2.264-3.231-2.105c2.976-2.135 6.25-3.943 9.757-4.97a22.877 22.877 0 0 1 12.075-.218h.015z" fill="#F15E4B"/><path d="M63.268 29.802c3.745-8.059 3.306-13.344.723-16.611-2.402-3.039-6.643-4.353-11.12-4.592.629-1.416 1.254-2.814 1.857-4.183l-7.413 3.466-7.174 3.36 3.851 3.656 4.305 4.093c.765-1.733 1.514-3.441 2.247-5.124 3.67.52 7.077 1.704 9.47 4.026 2.528 2.47 3.934 6.25 3.263 11.93l-.009-.021z" fill="#8A5DA7"/><path d="M31.294 59.003c9.817-1.831 16.291-6.184 19.961-11.42a20.021 20.021 0 0 0 3.25-7.428c.566-2.673.58-5.435.042-8.115a959.168 959.168 0 0 0 6.816-2.31 1492.244 1492.244 0 0 1-7.341-4.044 2954.423 2954.423 0 0 1-6.451-3.512 5148.106 5148.106 0 0 0-3.708 7.2c-1.28 2.504-2.586 5.064-3.92 7.68 2.25-.774 4.531-1.553 6.847-2.362a22.833 22.833 0 0 1-2.706 12.682c-2.393 4.38-6.477 8.469-12.79 11.626v.003z" fill="#4A8DA0"/><path d="M2.25 47.317c2.53 5.528 6.54 7.914 11.117 8.04 4.821.134 9.998-2.24 14.535-5.634 1.217 1.336 2.468 2.712 3.753 4.127.982-2.874 1.952-5.67 2.887-8.393.92-2.635 1.816-5.208 2.686-7.72-2.947.67-5.834 1.31-8.655 1.949l-8.124 1.84c1.105 1.201 2.236 2.446 3.407 3.723-3.708 2.538-7.608 4.43-11.436 4.942-3.699.505-7.203-.29-10.17-2.889v.015z" fill="#26A75A"/><path d="M5.008 20.868C1.102 26.602-.258 30.885.038 34.016c.315 3.313 2.507 5.364 5.52 6.395-.906 1.712-1.839 3.445-2.78 5.199 2.284-1.034 4.596-2.085 6.936-3.151 2.364-1.06 4.752-2.152 7.174-3.256-.984-1.808-1.923-3.544-2.84-5.216-.873-1.61-1.718-3.164-2.535-4.662-.91 1.699-1.836 3.422-2.778 5.17-2.41-.895-4.264-2.325-5.013-4.598-.712-2.157-.44-5.086 1.28-9.035l.006.006z" fill="#FEC827"/><path d="M29.216 1.955c-6.281 1.817-10.483 4.272-13.29 6.961a17.393 17.393 0 0 0-5.096 8.821l-4.264 1.419a2217.403 2217.403 0 0 0 6.006 6.423c1.48-1.958 2.942-3.884 4.382-5.777 1.415-1.848 2.807-3.682 4.17-5.487-1.691.56-3.366 1.112-5.025 1.655a17.582 17.582 0 0 1 3.851-7.4c2.009-2.31 4.95-4.558 9.266-6.612v-.003z" fill="#F58120"/></g><path d="m111.078 37-7.777-12.918c-.278-.464-.612-.761-1.132-.761-.52 0-.872.297-1.15.76L93.258 37h2.692l6.125-10.357 3.007 5.049h-4.14l-1.113 1.911h6.385L108.238 37h2.84zm13.133 0v-2.357h-7.313c-2.431 0-4.194-1.875-4.194-4.418 0-2.561 1.781-4.361 4.194-4.361h7.313v-2.358h-7.313c-3.768 0-6.552 2.636-6.552 6.608 0 3.916 2.784 6.886 6.552 6.886h7.313zm13.978 0v-2.357h-9.726v-8.78h9.708v-2.357h-12.046V37h12.064zm-.52-5.865v-1.986h-7.479v1.986h7.479zM155.78 37c2.821 0 4.194-1.689 4.194-3.953 0-2.617-1.466-3.898-4.194-3.898h-6.181c-1.039 0-1.689-.613-1.689-1.634 0-1.02.631-1.651 1.708-1.651h9.688v-2.358h-9.688c-2.692 0-4.158 1.615-4.158 3.787 0 2.227 1.578 3.842 4.12 3.842h6.2c1.262 0 1.967.594 1.967 1.744 0 1.059-.705 1.764-1.967 1.764h-10.116V37h10.116zm12.897 0V25.864h5.123v-2.358h-12.603v2.358h5.123V37h2.357zm22.546 0-4.065-4.102c1.745-.668 2.784-2.246 2.784-4.473 0-3.007-1.818-4.919-4.9-4.919h-9.688V37h2.338V25.864h7.35c1.615 0 2.58.853 2.58 2.598 0 1.745-.891 2.71-2.58 2.71h-5.623v2.079h5.048L187.882 37h3.341zm13.288 0v-2.357h-9.726v-8.78h9.707v-2.357h-12.046V37h12.065zm-.52-5.865v-1.986h-7.48v1.986h7.48zM223.439 37l-7.777-12.918c-.279-.464-.613-.761-1.133-.761-.519 0-.872.297-1.15.76L205.62 37h2.692l6.125-10.357 3.006 5.049h-4.139l-1.113 1.911h6.385L220.599 37h2.84zm20.588 0-3.452-12.695c-.186-.65-.557-.966-1.132-.966-.502 0-.91.279-1.133.799l-4.157 9.54-4.158-9.54a1.272 1.272 0 0 0-1.188-.799c-.631 0-1.002.316-1.169.966L224.167 37h2.32l2.58-9.485 3.805 8.78c.241.575.65.89 1.207.89.575 0 .946-.315 1.206-.89l3.823-8.78 2.58 9.485h2.339z" fill="#F2F2F2"/><defs><clipPath id="asma"><path fill="#fff" d="M0 0h66v59H0z"/></clipPath></defs></svg>',
      "friendlyName": "Ace Stream Media",
      "className": "aceStreamMediaButton",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "org.acestream.media",
          "androidName": "org.acestream.media",
      },
      "chromecast": {
          "appName": "org.acestream.media.atv",
          "androidName": "org.acestream.media.atv",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n org.acestream.media.atv/org.videolan.vlc.gui.tv.MainTvActivity",
      },
      "nvidia-shield": {
          "appName": "org.acestream.media.atv",
          "androidName": "org.acestream.media.atv",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n org.acestream.media.atv/org.videolan.vlc.gui.tv.MainTvActivity",
      },
      "xiaomi": {
          "appName": "org.acestream.media.atv",
          "androidName": "org.acestream.media.atv",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n org.acestream.media.atv/org.videolan.vlc.gui.tv.MainTvActivity",
      },
  },



  "all-4": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="716.183" height="1000" viewBox="0 0 71.618 100"><path style="vector-effect:none;fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.56871" d="M28.068-38.948h8.035v-8.117h-8.04v8.117h.005M54.467-38.948h20.087v-8.117H54.467v8.117M41.266-38.948H49.3V-66.78h-8.035v27.835-.003M54.47-52.284h8.034V-66.78h-8.035v14.496M12.681-85.332h10.34l13.077-16.315v-12.9L12.68-85.333M54.466-116.268v30.938h8.035v-40.964l-8.035 10.024v.003M41.266-120.99v35.654H49.3v-45.68l-8.035 10.024v.003M55.653-138.945l-1.189 1.485v12.897l7.434-9.273-6.242-5.109h-.003" transform="translate(-9.696 138.945)"/><g style="fill:#00e1c3;fill-opacity:1;stroke:none"><path d="m20.744 22.903-2.533 3.16h10.11v-3.16h-7.577" style="vector-effect:none;fill-rule:evenodd" transform="matrix(2.56871 0 0 2.56871 -1.13 0)"/></g><g style="fill:#fadc00;fill-opacity:1;stroke:none"><path d="M.44 26.063h15.417v-3.16H.441l-.001 3.16" style="vector-effect:none;fill-rule:evenodd" transform="matrix(2.56871 0 0 2.56871 -1.13 0)"/></g></svg>',
      "friendlyName": "All4",
      "className": "allFourButton",
      "appName": "com.channel4.ondemand",
      "androidName": "com.channel4.ondemand",
      "adbLaunchCommand": "adb shell am start -n com.channel4.ondemand/com.novoda.all4.launch.LaunchActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "amc-plus": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 400 207.441" width="400" height="207.441"><linearGradient id="amcpa" gradientTransform="rotate(355)"><stop offset="0%" stop-color="#43757e"/><stop offset="60%" stop-color="#9fffe8"/></linearGradient><g fill-rule="evenodd"><path d="M367.531 19.697c0 10.826.069 19.575.153 19.443.191-.301.18-38.286-.012-38.769-.077-.196-.141 8.501-.141 19.326M355.237 25c-.024 7.645.025 14.008.109 14.14.137.217.132-14.142-.009-24.099-.031-2.168-.076 2.314-.1 9.959m1.455 38.906c-1.346.541-1.296-.129-1.297 17.574l-.001 16.023-16.281.056-16.282.055-.575.575-.576.575-.057 4.508c-.062 4.834.144 6.003 1.042 5.932.198-.016.314.045.259.134-.232.375 1.291.413 16.512.413h15.958v15.987c0 9.51.076 15.941.188 15.871.104-.063.145.051.091.255-.381 1.46 1.325 1.962 6.37 1.877 6.438-.109 5.799 1.886 5.799-18.112v-15.878h15.751c8.663 0 15.893-.055 16.067-.121.273-.105.319-.946.334-6.121l.017-5.999h-32.169V81.525c0-13.852-.041-16.066-.313-16.591-.353-.683-1.029-1.126-1.383-.907-.144.089-.178.052-.087-.095.182-.294-8.637-.319-9.367-.026m-.935 25.772c-.031 4.365-.057.794-.057-7.935 0-8.73.026-12.301.057-7.936.031 4.365.031 11.507 0 15.871m0 43.554c-.031 4.373-.057.855-.057-7.817s.026-12.25.057-7.951c.031 4.299.031 11.394 0 15.768" fill="#f2f2f2"/><path d="M0 103.734v103.735h183.84c166.062 0 183.827-.031 183.716-.322-.071-.185-.036-.268.081-.195.135.083.204-6.599.202-19.44-.002-13.727-.068-19.473-.221-19.255-.171.245-.191.214-.089-.146.159-.569-.458-1.58-.869-1.423-.16.062-.241.031-.179-.069.211-.342-.819-.431-4.966-.431-4.148 0-5.178.089-4.967.431.062.1-.019.131-.179.069-.36-.138-1.052.861-.889 1.286.066.171.027.249-.088.178-.135-.083-.205 4.742-.205 13.993v14.121H10.788V11.203H355.4l-.055 13.985c-.03 7.732.025 13.935.123 13.874.098-.06.115.089.038.333-.211.664.923 1.745 1.642 1.564.328-.082.528-.045.528.097 0 .16 1.171.23 3.851.23 2.86 0 3.812-.061 3.702-.24-.106-.172.042-.201.524-.105.562.112.77.037 1.269-.462l.597-.597.012-19.519c.006-10.736.065-19.686.131-19.889.1-.311.083-.32-.104-.059-.194.269-.225.262-.227-.052C367.428.018 358.54 0 183.714 0H0v103.734m77.075-46.976c-15.829 2.428-26.376 11.638-29.793 26.017-.944 3.97-.563 4.208 6.587 4.117 6.415-.081 5.698.339 7.358-4.319 2.859-8.028 11.339-12.751 22.902-12.756 14.676-.005 22.375 4.403 24.993 14.312.433 1.638 1.186 10.196.921 10.462-.065.065-6.25.179-13.743.252-7.493.074-14.499.235-15.568.359-23.261 2.689-35.959 13.604-35.997 30.939-.041 19.021 16.177 28.136 42.402 23.833 8.235-1.352 14.801-3.884 21.525-8.302l1.504-.988v3.123c0 5.204-.062 5.156 6.639 5.156 5.373 0 5.817-.095 6.344-1.356.367-.878.442-52.581.085-57.98-1.33-20.062-11.399-30.414-31.982-32.881-3.344-.4-11.531-.394-14.177.012m195.332-.1c-30.346 4.743-46.998 37.88-34.065 67.788 13.382 30.947 53.386 35.748 72.898 8.749 6.076-8.407 5.767-9.405-2.94-9.501-6.651-.073-6.492-.113-8.203 2.063-13.765 17.503-36.732 15.421-48.391-4.388-1.163-1.977-2.827-6.31-3.384-8.817-.767-3.449-.874-4.507-.888-8.818-.014-4.372.028-4.807.826-8.576 5.538-26.142 35.86-34.142 51.743-13.652.826 1.066 1.426 1.663 1.603 1.595.155-.06.227-.019.16.09-.153.247.813.509 1.253.34.195-.075.269-.038.187.094-.254.411 10.256.159 11.028-.265 1.882-1.03 1.122-3.421-2.865-9.014-8.969-12.585-25.013-19.868-38.962-17.688m-138.382 2.004c-1.584.791-1.452-3.302-1.448 44.969.005 48.196-.109 44.479 1.387 45.099 1.14.472 10.486.231 11.059-.286.955-.861.926.021 1.035-31.535.079-22.836.161-29.958.341-29.565 1.444 3.15 6.987 15.364 8.475 18.673 1.052 2.339 3.128 6.913 4.613 10.166a8287.764 8287.764 0 0 1 9.011 19.813c6.683 14.754 5.06 13.009 12.024 12.925 5.867-.071 5.578.019 6.634-2.072.58-1.148 10.164-22.162 11.905-26.102.802-1.815 12.022-26.517 14.492-31.905l1.074-2.341.103 30.453c.083 24.206.158 30.548.37 30.917.59 1.033 1.116 1.117 6.586 1.05l5.069-.062.575-.575.575-.576.052-43.719c.049-41.305.032-43.759-.311-44.445-.598-1.194-1.152-1.277-8.039-1.205-7.505.079-6.684-.348-8.969 4.664-5.699 12.5-9.051 19.887-12.082 26.624-.855 1.901-10.734 23.628-11.886 26.141-.235.513-.957 2.1-1.604 3.527-3.96 8.736-4.628 10.166-4.753 10.166-.076 0-1.461-2.918-3.077-6.484a7008.209 7008.209 0 0 0-8.554-18.828 12474.51 12474.51 0 0 1-14.328-31.535 271.882 271.882 0 0 0-1.503-3.319 657.39 657.39 0 0 1-2.342-5.187c-2.081-4.649-2.491-5.292-3.573-5.592-1.441-.4-12.058-.28-12.911.146M355.7 81.743c0 8.729.026 12.3.057 7.935.031-4.364.031-11.506 0-15.871s-.057-.794-.057 7.936m-245.534 33.69v7.549l-1.919 1.826c-9.465 9.009-19.123 12.746-32.93 12.743-12.162-.002-17.231-3.386-17.223-11.496.007-8.137 5.144-13.29 16.029-16.081 5.736-1.47 8.613-1.718 21.728-1.872 6.219-.073 11.984-.151 12.811-.175l1.504-.043v7.549m245.534 9.982c0 8.672.026 12.19.057 7.817.031-4.374.031-11.469 0-15.768-.031-4.299-.057-.721-.057 7.951" fill="url(#amcpa)"/></g></svg>',
      "friendlyName": "AMC+",
      "className": "amcPlusButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.amcplus.amcfiretv",
          "androidName": "com.amcplus.amcfiretv",
          "adbLaunchCommand": "adb shell am start -n com.amcplus.amcfiretv/com.amcplus.tv.MainActivity",
      },
      "apple-tv": {
          "appName": "AMC+",
      },
      "chromecast": {
          "appName": "com.amcplus.amcandroidtv",
          "androidName": "com.amcplus.amcandroidtv",
          "adbLaunchCommand": "adb shell am start -n com.amcplus.amcandroidtv/com.amcplus.tv.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.amcplus.amcandroidtv",
          "androidName": "com.amcplus.amcandroidtv",
          "adbLaunchCommand": "adb shell am start -n com.amcplus.amcandroidtv/com.amcplus.tv.MainActivity",
      },
      "xiaomi": {
          "appName": "com.amcplus.amcandroidtv",
          "androidName": "com.amcplus.amcandroidtv",
          "adbLaunchCommand": "adb shell am start -n com.amcplus.amcandroidtv/com.amcplus.tv.MainActivity",
      },
  },


  "app-opener": {
      "button": "App Opener",
      "friendlyName": "App Opener",
      "appName": "devsimon.appopener",
      "className": "appOpenerButton",
      "androidName": "devsimon.appopener",
      "adbLaunchCommand": "adb shell am start -n devsimon.appopener/devsimon.appopener.MainActivity",
      "deviceFamily": ["amazon-fire"], },


  "apple-appstore": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="778" height="728" viewBox="0 0 778 728" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M93.3 506.7c-18.4 0-33.3-15-33.3-33.4S75 440 93.3 440h350c33.4 0 66.7 66.7 50 66.7h-400zm466.7 0c-18.4 0-33.3-15-33.3-33.4s15-33.3 33.3-33.3h133.3c18.4 0 33.4 15 33.4 33.3s-15 33.4-33.4 33.4H560zm-145.6-450c9.2-16 29.6-21.4 45.6-12.2 16 9 21.4 29.5 12.2 45.5L242 490c-9.2 16-29.6 21.4-45.5 12.2-16-9.2-21.5-29.6-12.3-45.5l230.2-400zm-287.7 500c16.6-33.4 116.6-66.7 83.3-9.3L155.6 640c-9.2 16-29.6 21.4-45.6 12.2-16-9.2-21.4-29.5-12.2-45.5l29-50zM297.8 90c-9.2-16-3.7-36.4 12.2-45.5 16-9.2 36.4-3.7 45.6 12.2l58 101c9.2 16 3.7 36.3-12.3 45.5-16 9.2-36.3 3.7-45.5-12.3l-58-101zm129 233.3c-30-50 0-150 23.8-100l221.7 383.5c9.2 16 3.7 36.3-12.2 45.5-16 9.2-36.4 3.7-45.6-12.2L426.7 323.3z" fill="#fff" fill-rule="nonzero" stroke="none"/></svg>',
      "friendlyName": 'Apple App Store',
      "className": "appleAppStoreButton",
      "appName": "App Store",
      "deviceFamily": ["apple-tv"],
  },


  "apple-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 53.231 26.889"><path fill="#fff" d="M14.89 4.311C15.815 3.15 16.447 1.594 16.28 0c-1.355.067-3.012.895-3.974 2.057-.86.994-1.622 2.62-1.426 4.143 1.528.133 3.047-.762 4.01-1.889M16.263 6.498c-2.214-.134-4.095 1.256-5.151 1.256-1.06 0-2.678-1.19-4.43-1.158C4.407 6.63 2.294 7.92 1.136 9.97c-2.38 4.095-.629 10.177 1.684 13.514 1.123 1.653 2.478 3.471 4.26 3.404 1.685-.067 2.348-1.087 4.394-1.087 2.05 0 2.642 1.087 4.425 1.056 1.853-.033 3.007-1.653 4.13-3.306 1.288-1.88 1.818-3.698 1.85-3.8-.034-.034-3.565-1.39-3.6-5.454-.034-3.404 2.775-5.022 2.909-5.12-1.587-2.348-4.064-2.611-4.924-2.678M30.358 3.365v4.488h3.608v2.964h-3.608v10.558c0 1.634.72 2.391 2.297 2.391.396 0 1.044-.055 1.296-.089v2.98c-.432.09-1.296.162-2.14.162-3.734 0-5.187-1.437-5.187-5.065V10.819h-2.768V7.855h2.768V3.367zM46.6 26.67h-3.965L35.972 7.857h3.942l4.677 15.12h.089l4.676-15.12h3.875z"/></svg>',
      "friendlyName": 'Apple TV',
      "className": "appleTvButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "Apple TV+ (Fire TV)",
          "androidName": "com.apple.atve.amazon.appletv",
          "adbLaunchCommand": "adb shell am start -n com.apple.atve.amazon.appletv/.MainActivity",
      },
      "apple-tv": {
          "appName": "TV",
      },
      "chromecast": {
          "appName": "com.apple.atve.androidtv.appletv",
          "androidName": "com.apple.atve.androidtv.appletv",
          "adbLaunchCommand": "adb shell am start -n com.apple.atve.androidtv.appletv/.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.apple.atve.androidtv.appletv",
          "androidName": "com.apple.atve.androidtv.appletv",
          "adbLaunchCommand": "adb shell am start -n com.apple.atve.androidtv.appletv/.MainActivity",
      },
      "xiaomi": {
          "appName": "com.apple.atve.androidtv.appletv",
          "androidName": "com.apple.atve.androidtv.appletv",
          "adbLaunchCommand": "adb shell am start -n com.apple.atve.androidtv.appletv/.MainActivity",
      },
  },


  "apple-tv-arcade": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="362" height="361" viewBox="0 0 362 361" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M280.7 246.8l-63.6 29c-14 6.3-23.4 8.8-37 8.8a78 78 0 0 1-33-7L79.4 247c-8.7-4-11.8-6.8-13.7-9.4-1.2-1.5-2-3.6-2-5.5v-9.3s0-5.5 5.4-3l78 35c9.2 4.2 20 7 33 7 12.7 0 22.2-2.3 33-7l77.8-35c5.4-2.5 5.4 3 5.4 3v9.3h0c0 2-.6 4-2 5.5-2.3 3-5 5.2-13.6 9.3zm15.5-52.3c0 7.5-9.7 12-15.5 15L213 240a77 77 0 0 1-33 7 80 80 0 0 1-32.9-7l-67.7-30.7c-5.8-2.8-15.6-7.4-15.6-15s10-12.2 15.6-15L147 149c6.3-3 13.4-5 21.2-6.2v53.5c0 5 5.3 8.5 11.7 8.5 6.5 0 11.7-3.4 11.7-8.5v-53.6c7.4 1 14 3 21.3 6.3l67.7 30.5c5.6 2.7 15.5 7.4 15.5 15zm-175.3-7c-6.6-3.8-17.2-3.8-23.8 0-6.5 3.8-6.5 10 .1 13.8s17.2 3.8 23.8 0c6.5-3.8 6.5-10-.1-13.8zm26.7-85.6c0-18 14.5-32.5 32.4-32.5S212.5 84 212.5 102c0 18-14.6 32.4-32.5 32.4S147.6 120 147.6 102z" stroke="none" fill-rule="nonzero"/></svg>',
      "friendlyName": 'Apple Arcade',
      "className": "appleArcadeButton",
      "appName": "Arcade",
      "deviceFamily": ["apple-tv"],
  },


  "apple-tv-computers": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1300" height="800" viewBox="0 0 1300 800" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M324.5 214.7a50 50 0 0 1 50.2-50.2h549.6a50 50 0 0 1 50.2 50.2v374.6a50 50 0 0 1-50.2 50.2H374.7a50 50 0 0 1-50.2-50.2z" fill="none" stroke-width="42"/><g stroke-linejoin="miter" fill="#fff" fill-rule="nonzero"><path d="M169.5 637.5h960" stroke-width="45"/><path d="M581.2 327.3v161.4c0 9.7 9.5 16 17.3 11.2l138-82.6c6.8-4 6.8-14.6 0-18.6l-138-82.6c-7.8-4.7-17.3 1.5-17.3 11.2z" stroke-width="25"/></g></svg>',
      "friendlyName": 'Apple Computers',
      "className": "appleComputersButton",
      "appName": "Computers",
      "deviceFamily": ["apple-tv"],
  },


  "apple-tv-facetime": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="601" height="601" viewBox="0 0 601 601" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M91.5 227.3v146c0 32 26 57.7 57.7 57.7H325c32 0 57.7-26 57.7-57.7v-146c0-32-26-57.7-57.7-57.7H149.3c-32-.1-57.8 25.8-57.8 57.7zm379.3-39l-66.2 54.6c-6 5-9.3 12-9.3 19.7V338c0 7.6 3.3 14.7 9 19.6l66.2 55.6c15 12.6 38 2 38-17.7V206c.1-19.5-22.7-30.3-37.8-17.8z"/></svg>',
      "friendlyName": 'Apple FaceTime',
      "className": "appleFacetimeButton",
      "appName": "FaceTime",
      "deviceFamily": ["apple-tv"],
  },


  "apple-tv-fitness": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="402" height="401" viewBox="0 0 402 401" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M186.8 26.8c-75.4 6.7-136.2 57.7-155 130A174 174 0 0 0 200 373.5c101-.1 181-86.5 173-186.8-4-48.7-27-92.2-65.2-122.6-17.6-14-38.5-25-59.8-31l-27.7-5.5a171 171 0 0 0-33.5-.9M214 64.3c33 4.4 59.6 17 82 39.6a136 136 0 0 1-37.8 218.8c-67 32-149 3.2-180.6-63.6L71.5 244c-23.2-68.4 8.7-139.3 76.2-169.5 17.6-8 47.8-12.5 66.3-10" fill="#f82961"/><path d="M190 76.7c-62.3 5.3-111.5 57-113.4 119.6-3 94 96 157.2 179.8 114.8a124 124 0 0 0 63-146 125 125 0 0 0-92.7-85.8c-4.6-1-11.5-1.7-10.4-1.2-1 .7-9.4-2.8-26.3-1.4m20.4 37.6c72.4 9 102.3 97 50.4 148-47.4 46.6-128.3 23.5-144.2-41.3-14.2-58 35-114 93.8-106.6" fill="#b6fb05"/><path d="M193.2 126.2c-60.3 5.7-88.5 78-48.4 123.6a75 75 0 0 0 129.6-41.3c4.6-39.7-26.2-78.7-64.4-81.6-1.6-.1-3.7-.4-4.6-.6a80 80 0 0 0-12.2-.1m17.4 38.5a37 37 0 0 1 5.6 68.7 37 37 0 0 1-44.1-56.7c8.7-10.7 26-16 38.5-12" fill="#0eedbd"/></svg>',
      "friendlyName": 'Apple Fitness',
      "className": "appleFitnessButton",
      "appName": "Fitness",
      "deviceFamily": ["apple-tv"],
  },


  "apple-tv-movies": {
      "button": 'movies',
      "friendlyName": 'Apple Movies - iTunes',
      "className": "appleTvMoviesButton",
      "appName": "Movies",
      "deviceFamily": ["apple-tv"],
  },


  "apple-tv-music": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="361" height="361" viewBox="0 0 361 361" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M254 55c-1 0-8 1-9 2L138 78h0c-3 1-5 2-7 3-2 2-3 4-3 7-1 1-1 2-1 4v134c0 3 0 6-2 9-2 2-5 3-8 4-2 0-5 0-7 1-9 2-14 3-20 5-5 2-8 4-11 7-6 7-9 15-8 23 1 7 4 13 9 18 4 3 8 5 13 6s11 1 19-1c5-1 9-2 13-4 4-3 7-6 10-9 2-4 4-8 5-13 1-4 1-8 1-13V143c0-6 2-8 7-9l93-19c6-1 9 1 9 7v79c0 3-1 6-3 9-2 2-4 3-7 4-3 0-5 1-7 1-9 2-15 3-20 5s-9 5-12 8c-6 6-8 14-8 22 1 7 4 13 9 18 4 3 8 6 13 7 6 1 11 0 20-1 4-1 8-3 12-5s8-5 10-9c3-4 4-8 5-12 1-5 1-9 1-14V65c0-7-3-10-9-10z" stroke="none"/></svg>',
      "friendlyName": 'Apple Music',
      "className": "appleTvMusicButton",
      "appName": "Music",
      "deviceFamily": ["apple-tv"],
  },


  "apple-tv-photos": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="467" height="468" viewBox="0 0 467 468" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><g stroke="none"><use xlink:href="#vIPB" fill="#faa830"/><use xlink:href="#GILU" fill="#f3785c"/><path d="M116 47h8c-2 1-3 0-4 0s-2 1-4 0zm-70 72v4-4zm0 0" fill="#f0613f"/><use xlink:href="#y0Xl" fill="#f5e321"/><path d="M343 48h6-3-3zm0 0" fill="#f3de02"/><use xlink:href="#W8PM" fill="#f09705"/><use xlink:href="#Y2Sp" fill="#ee4f11"/><path d="M420 122v-5 9-4zm0 0" fill="#f3de00"/><use xlink:href="#TIpi" fill="#e64700"/><use xlink:href="#he5k" fill="#c73f3f"/><use xlink:href="#G1zJ" fill="#d187b0"/><use xlink:href="#qDDS" fill="#c5280a"/><use xlink:href="#VM9k" fill="#b0bf0a"/><use xlink:href="#SDlO" fill="#b8d751"/><use xlink:href="#kpEf" fill="#ae7f00"/><use xlink:href="#Qg1m" fill="#7f2330"/><use xlink:href="#ANCs" fill="#4a8f07"/><use xlink:href="#z7Xg" fill="#874a85"/><path d="M248 232v5-5zm0 0" fill="#abcf35"/><use xlink:href="#u96S" fill="#4c9e38"/><use xlink:href="#wXpz" fill="#6bbdae"/><use xlink:href="#NoRz" fill="#a38cbf"/><use xlink:href="#IVp1" fill="#78abdc"/><use xlink:href="#YWOU" fill="#4c5ea6"/><use xlink:href="#n1lk" fill="#307f97"/><use xlink:href="#G4kW" fill="#3f3073"/><use xlink:href="#SLBM" fill="#236b30"/><use xlink:href="#ZSm1" fill="#1e4773"/><use xlink:href="#vIPB" fill="#faa830"/><use xlink:href="#GILU" fill="#f3785c"/><path d="M116 47h8c-2 1-3 0-4 0s-2 1-4 0zm-70 72v4-4zm0 0" fill="#f0613f"/><use xlink:href="#y0Xl" fill="#f5e321"/><path d="M343 48h6-3-3zm0 0" fill="#f3de02"/><use xlink:href="#W8PM" fill="#f09705"/><use xlink:href="#Y2Sp" fill="#ee4f11"/><path d="M420 122v-5 9-4zm0 0" fill="#f3de00"/><use xlink:href="#TIpi" fill="#e64700"/><use xlink:href="#he5k" fill="#c73f3f"/><use xlink:href="#G1zJ" fill="#d187b0"/><use xlink:href="#qDDS" fill="#c5280a"/><use xlink:href="#VM9k" fill="#b0bf0a"/><use xlink:href="#SDlO" fill="#b8d751"/><use xlink:href="#kpEf" fill="#ae7f00"/><use xlink:href="#Qg1m" fill="#7f2330"/><use xlink:href="#ANCs" fill="#4a8f07"/><use xlink:href="#z7Xg" fill="#874a85"/><path d="M248 232v5-5zm0 0" fill="#abcf35"/><use xlink:href="#u96S" fill="#4c9e38"/><use xlink:href="#wXpz" fill="#6bbdae"/><use xlink:href="#NoRz" fill="#a38cbf"/><use xlink:href="#IVp1" fill="#78abdc"/><use xlink:href="#YWOU" fill="#4c5ea6"/><use xlink:href="#n1lk" fill="#307f97"/><use xlink:href="#G4kW" fill="#3f3073"/><use xlink:href="#SLBM" fill="#236b30"/><use xlink:href="#ZSm1" fill="#1e4773"/></g><defs ><path id="vIPB" d="M216 2c10-2 20-3 29-1 14 2 27 9 38 19s19 24 22 39c-4 3-8 6-12 10-3 4-7 7-11 11-11 11-22 23-34 34-3 4-7 7-10 11-2 3-4 5-5 8-2-3-3-6-5-8-2-3-5-5-7-8a754.51 754.51 0 0 1-40-40c-4-4-8-8-12-11-2-3-5-5-8-7h0c3-12 9-24 17-33 10-12 23-20 38-24zm16 206c2 3 4 6 6 8v1h1 0-13l6-9zm0 0"/><path id="GILU" d="M73 64c12-10 28-16 43-17h4 4c13 1 26 5 38 13h0c-1 1-1 3-1 4-1 6-1 12-1 18v55c0 6 0 11 1 17 0 2 1 4 1 6-5-1-10-1-15-1H73c-5 0-11 0-16 1h0c-7-11-11-24-11-37v-5c0-9 2-19 7-28 4-10 11-19 20-26zm143 151c4 1 7 2 10 2-2 3-5 6-8 9-1-4-1-7-2-11zm0 0"/><path id="y0Xl" d="M306 60c11-8 24-12 37-12h3 3c12 0 23 4 33 9 10 6 19 14 25 23 8 11 12 24 13 37-1 2 0 3 0 5 0 1-1 3 0 4-1 13-5 26-12 37-6-2-12-2-18-2h-71c-4 0-9 1-14 2 2-7 3-15 3-22V94 74c0-5-1-10-2-14zm-67 157c4 0 8 0 11-1-1 3-1 7-2 11-3-3-6-6-9-10zm0 0"/><path id="W8PM" d="M294 69c4-4 8-7 12-10 1 5 2 9 2 14v21 46c0 7-1 15-3 22-11 2-21 7-30 14-8 7-16 17-20 27-2 4-3 8-4 12-4 1-8 1-11 2h-1v-1c-2-3-4-6-6-8v-1c3-5 6-10 7-16 5-14 5-29 1-42-2-6-4-12-7-17h0c1-2 3-5 5-7 3-4 6-7 10-11 11-12 23-23 34-34 4-4 7-8 11-11zm0 0"/><path id="Y2Sp" d="M161 64c0-2 0-3 1-5 3 2 6 4 8 6l12 12c13 13 26 27 40 40 2 2 4 5 7 8 1 2 3 5 5 7h0c-4 7-7 14-9 21-3 14-2 28 2 41 2 5 4 9 6 13h0c-2 4-4 7-6 9v1c-4-1-7-1-10-2-3-11-8-22-15-31-9-10-21-19-34-23-2 0-4-1-5-1h-1c0-2-1-4-1-6-1-6-1-12-1-18V82c0-6 0-12 1-18zm0 0"/><path id="TIpi" d="M225 154c2-7 5-15 8-21 3 5 6 10 7 16 5 14 4 29 0 43-2 5-4 11-7 16-2-4-4-8-6-13-5-13-5-28-2-41zm0 0"/><path id="he5k" d="M57 160c5-1 10-1 16-1h74c5 0 10 1 15 2 3 14 11 27 22 37 9 9 20 15 32 18 1 3 1 6 2 10h0l-11 8v-1c-11-6-24-10-36-11-15 0-29 3-41 11h0c-6-4-11-8-16-13l-42-42c-4-4-7-7-11-12-1-1-3-3-4-6zm0 0"/><path id="G1zJ" d="M31 171c8-5 17-9 26-11h0c2 2 3 4 4 6 4 4 8 8 11 12l42 42c5 5 10 9 16 12-6 4-11 8-16 13l-47 47c-4 4-7 8-10 13-12-3-23-8-32-16-10-9-17-20-21-32-3-9-4-19-4-29 1-11 4-22 9-32 6-10 13-18 22-25zm177 62c3-2 7-5 10-7v15c-4-3-7-6-10-8zm0 0"/><path id="qDDS" d="M162 160c2 0 4 1 5 1 13 4 25 13 34 23 7 9 12 20 15 31-12-3-23-9-32-18-10-9-18-23-22-37zm0 0"/><path id="VM9k" d="M305 163c4-1 9-2 14-2h71c6 0 12 0 18 1-3 5-7 9-10 13-15 14-30 29-44 43-4 4-8 8-12 11-2 2-4 3-6 5h0c-10-6-21-10-32-11-12-2-25 0-37 5-4 1-7 3-10 5h0l-9-6h0c1-4 1-8 2-11v-1c6-1 11-3 17-6 18-9 32-26 38-46zm0 0"/><path id="SDlO" d="M408 162c11 2 22 7 31 15 8 6 15 15 20 24 5 12 8 26 7 39-1 12-5 24-11 34-9 14-22 25-37 31-3 1-6 1-9 2h0c-3-5-7-10-11-14l-42-42-12-12c-3-2-5-4-8-6 2-1 4-2 6-4 5-3 8-7 12-11 15-14 29-29 44-44 4-3 7-8 10-12zm-160 64c3 3 6 5 9 7l-9 6v-2-5-6zm0 0"/><path id="kpEf" d="M275 176c8-7 19-12 30-14-6 20-20 38-39 47-5 3-10 5-16 6 1-4 2-8 4-12 5-10 12-20 21-27zm0 0"/><path id="Qg1m" d="M130 233c12-8 27-12 41-11 13 0 26 4 37 11-5 3-10 5-14 7-14 5-29 5-43 2-8-2-15-5-21-9zm0 0"/><path id="ANCs" d="M267 228c12-5 25-7 38-6 11 2 22 6 31 12-10 6-22 10-34 11-13 0-26-2-37-8-3-1-5-2-8-4 3-2 7-4 10-5zm0 0"/><path id="z7Xg" d="M130 232h0c6 4 13 7 21 9 14 3 29 3 43-2 4-2 9-4 14-6h0c3 2 7 4 10 7h0c-1 4-1 7-2 10h0c-10 3-20 8-29 14-13 10-22 24-26 40h0c-4 1-8 2-12 2H79c-7 0-15 0-22-2 3-4 7-9 11-13l47-47c4-4 9-9 15-12zm0 0"/><path id="u96S" d="M257 233h0c2 2 5 3 8 4 11 6 24 8 37 8 12-1 24-5 34-11h0c3 2 5 3 8 6 4 3 8 7 12 11l42 43c4 4 8 8 11 13-6 2-12 2-18 2h-71c-6 0-11-1-16-2-3-10-7-20-14-29-10-13-24-23-40-27-1-4-2-8-2-12h0l9-6zm0 0"/><path id="wXpz" d="M238 249c3-4 6-7 10-10 0 4 1 8 2 12-4-1-8-2-12-2zm66 58c5 1 10 1 15 1h72c6 0 12 0 18-1h0c6 10 9 22 10 34 1 11-2 23-6 34-5 10-12 19-20 26s-18 12-28 15c-13 3-26 3-39 0-8-2-15-5-22-9v-1c1-5 2-11 2-17v-50-22c-1-3-1-7-2-10zm0 0"/><path id="NoRz" d="M216 251c1-3 1-7 2-10 3 3 5 5 8 9-3 0-7 0-10 1zM57 305c7 2 14 2 22 2h69c5-1 9-1 13-2l-3 12v18 52c0 7 0 14 2 20h0c-10 7-22 11-34 12-13 1-27-1-39-7-10-5-18-11-25-20-8-9-13-20-15-31-3-14-2-28 2-41 2-5 5-10 8-15zm0 0"/><path id="IVp1" d="M226 249h12l-6 9c-1-3-3-5-5-7 0-1 0-1-1-2zm6 84c2 3 3 5 5 7 3 5 7 8 11 12l45 45c3 4 7 7 12 10h0c-3 12-9 23-16 32s-16 16-27 21-23 7-35 6-24-5-34-12c-17-10-29-28-33-47h0c6-4 11-9 16-14l45-45c4-4 8-9 11-15zm0 0"/><path id="YWOU" d="M216 251c4-1 7-2 10-2h0c1 0 1 1 1 1 2 3 4 5 5 8h0c-3 5-5 10-7 15-4 13-4 27-1 39 2 8 4 15 8 21h0c-3 6-7 10-11 15l-45 45c-5 5-10 10-16 14-2-7-2-14-2-21v-51c0-6 0-13 1-19 0-4 1-8 2-11h0c6-1 11-3 16-6a70.24 70.24 0 0 0 34-34c2-5 4-9 5-14zm0 0"/><path id="n1lk" d="M238 249h0c4 0 8 1 12 2 1 6 3 13 6 19 5 9 12 17 21 24 8 6 17 10 27 13 1 3 1 7 2 10v22 50c0 6 0 12-2 17-4-2-8-6-12-9l-44-45c-4-4-8-7-11-12-2-2-3-4-5-7h0c6-10 10-22 10-34 1-15-3-29-10-41h0l6-9zm0 0"/><path id="G4kW" d="M188 265c8-7 18-12 28-14-1 5-3 10-5 14-7 15-19 28-34 35-5 2-10 4-16 5 4-16 14-30 27-40zm0 0"/><path id="SLBM" d="M250 251c16 4 30 14 40 27 7 8 12 18 14 29-10-3-19-7-27-13-8-7-15-15-20-24-3-6-6-12-7-19zm0 0"/><path id="ZSm1" d="M232 258c8 12 11 27 11 41-1 12-4 24-11 35-3-7-6-14-8-21-3-13-3-27 1-39 2-6 4-11 7-16zm0 0"/></defs></svg>',
      "friendlyName": 'Apple Photos',
      "className": "appleTvPhotosButton",
      "appName": "Photos",
      "deviceFamily": ["apple-tv"],
  },


  "apple-tv-podcasts": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1011" height="1011" viewBox="0 0 1011 1011" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M727 453c0-122-99-221-222-221-122 0-221 99-221 221 0 87 50 163 123 199l-3-44v-1c0-6 0-11 2-16-43-31-71-81-71-138 0-93 77-170 170-170 94 0 171 77 171 170 0 57-28 107-71 138 2 5 2 10 2 16v1l-3 44c73-36 123-112 123-199zm135 18c0-198-160-358-357-358-198 0-358 160-358 358 0 168 117 310 274 347l-5-54c-126-38-218-155-218-293 0-169 138-307 307-307s306 138 306 307c0 138-92 255-218 293l-4 54c157-37 273-179 273-347zm-272-34c0 47-38 85-85 85s-85-38-85-85 38-85 85-85 85 38 85 85zm-8 171c0-29-32-52-60-52h-17-17c-28 0-59 23-59 52l20 238c3 29 27 51 56 51h0 0c29 0 53-22 56-51l21-238z"/></svg>',
      "friendlyName": 'Apple Podcasts',
      "className": "appleTvPodcastsButton",
      "appName": "Podcasts",
      "deviceFamily": ["apple-tv"],
  },


  "apple-tv-tvshows": {
      "button": 'tv shows',
      "friendlyName": 'Apple TV Shows - iTunes',
      "className": "appleTvshowsButton",
      "appName": "TV Shows",
      "deviceFamily": ["apple-tv"],
  },


  "ard-mediathek": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" height="534.36" width="1163.853" fill="#fff" viewbox="0 0 1163.853 534.36"><path d="M982.736 347.343V127.814l-220.357 79.262v54.783l73.036-26.564v164.75l147.321-52.703M898.707.004c-90.622 0-171.76 45.333-220.069 114.333l38.859 27.149c39.707-56.568 105.642-94.434 180.057-94.434 120.762 0 216.733 98.957 216.733 220.129s-95.97 220.135-216.733 220.135c-74.434 0-139.97-38.145-179.676-94.738l-39.567 27.614c48.307 69.023 127.034 114.168 217.674 114.168 148.232 0 267.859-119.96 267.859-267.515 0-147.562-117.581-266.841-265.138-266.841" fill-rule="evenodd"/><path d="M556.895 347.954c-9.199 0-21.619-.472-28.167-1.509V185.966c7.059-.415 17.46-.66 28.167-.66 48.68 0 72.344 26.763 72.344 81.809 0 55.152-22.989 80.838-72.344 80.838m3.156-204.366c-26.107 0-43.38.448-57.256.811l-21.872.401h-1.2v243.879l9.639.233 62.92 1.005c84.152 0 128.629-43.132 128.629-124.74 0-79.548-41.792-121.59-120.86-121.59M78.508 297.714l23.832-74.892c3.199-9.996 6.411-21.575 8.856-31.877 2.287 8.828 5.383 19.601 9.237 32.12l23.899 74.649zm66.29-152.102l-.276-.815H83.347L0 389.191h49.402l15.986-50.24h92.148l16.084 50.24h54.251l-83.072-243.579"/><path d="M306.229 185.429c3.745-.112 16.349-.448 34.757-.448 26.96 0 40.063 11.465 40.063 35.049 0 23.256-13.969 35.049-41.517 35.049h-33.303zm88.465 119.674c-3.723-6.368-8.129-12.833-11.629-17.739 31.053-10.957 49.657-35.789 49.657-69.278 0-48.737-30.545-74.501-88.337-74.501l-65.976.871-19.817.341h-1.2v244.394h48.837v-93.206h27.029l55.029 93.206h58.743l-52.336-84.088"/></svg>',
      "friendlyName": "ARD Mediathek",
      "className": "ardMediathekButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "de.swr.ard.avp.mobile.android.amazon",
          "androidName": "de.swr.ard.avp.mobile.android.amazon",
          "adbLaunchCommand": "adb shell am start -n de.swr.ard.avp.mobile.android.amazon/de.swr.ard.avp.mobile.android.amazon.TvActivity",
      },
      "apple-tv": {
          "appName": "ARD Mediathek",
      },
      "chromecast": {
          "appName": "de.swr.avp.ard.tv",
          "androidName": "de.swr.avp.ard.tv",
          "adbLaunchCommand": "adb shell am start -n de.swr.avp.ard.tv/de.swr.avp.ard.tv.TvActivity",
      },
      "nvidia-shield": {
          "appName": "de.swr.avp.ard.tv",
          "androidName": "de.swr.avp.ard.tv",
          "adbLaunchCommand": "adb shell am start -n de.swr.avp.ard.tv/de.swr.avp.ard.tv.TvActivity",
      },
      "xiaomi": {
          "appName": "de.swr.avp.ard.tv",
          "androidName": "de.swr.avp.ard.tv",
          "adbLaunchCommand": "adb shell am start -n de.swr.avp.ard.tv/de.swr.avp.ard.tv.TvActivity",
      },
  },


  "arte": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="343" height="85" viewBox="0 0 343 85" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#f47920" fill-rule="nonzero"><path d="M187.4 0h34v15.4h20v21l-20 .1v46a74 74 0 0 1-25.1-.8 13 13 0 0 1-7.7-7.7c-1-3-1-28.4-1.2-37.4h-13.7V15.4h13.7l.1-15.4zM45 13.6c19.3-1.4 41 4.6 45 18.3l.6 3.4.1 47.4H57.2v-19c-9.4 2.8-29.6 7-16.8 19H7c-5-1-8-7.7-6.7-14.3 1-6 4.8-10 9.2-12.6 11-6.3 27-6 41-9.3 2-.5 3.7-.7 5-1.6.8-.6 1.2-1.4 1.4-2.6C58 36.6 52 35 47 35c-1.6.1-4 .3-5.3.8a12 12 0 0 0-3 1.5C37 38.5 36 40.4 36 43.4H3.4a36 36 0 0 1 1.7-7.5 32 32 0 0 1 6.3-10.2c7.4-8 19.4-11 33.7-12zm111.6.2a25 25 0 0 1 9.6 1.6v21.2c-6 0-12.6-.4-16.8 1.4-2.5 1-5 3.6-6 6-1.3 3.3-1 8.6-.8 13.2v25.3H108v-67l31.7-.1c.1 2.7-.1 6 .1 8 3.4-5.5 8.5-9 16.8-9.7zM337 37.4A37 37 0 0 0 321.4 20c-8-4.3-19.2-7.2-32-6.2-23 1.7-38.5 12.2-42.4 33a46 46 0 0 0 1.8 23c1 2.6 5.3 11.7 7.3 12.4 3-.2 18.7 0 25 0V65.7l59.4-.1c1.3-10.2-.2-21-3.4-28.2zM280 48c.2-3 .6-5.2 1.7-7.2 1.8-3 5-5.2 9.3-5.7 10.7-1 15.6 4 16.6 13H280z"/></svg>',
      "friendlyName": 'ARTE',
      "className": "arteButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"], 
      "amazon-fire": {
          "appName": "de.swr.ard.avp.mobile.android.amazon",
          "androidName": "de.swr.ard.avp.mobile.android.amazon",
          "adbLaunchCommand": "adb shell am start -n de.swr.ard.avp.mobile.android.amazon/de.swr.ard.avp.mobile.android.amazon.TvActivity",
      },
      "apple-tv": {
          "appName": "ARTE",
      },
      "chromecast": {
          "appName": "tv.arte.plus7",
          "androidName": "tv.arte.plus7",
          "adbLaunchCommand": "adb shell am start -n tv.arte.plus7/.leanback.MainActivity",
      },
      "nvidia-shield": {
          "appName": "tv.arte.plus7",
          "androidName": "tv.arte.plus7",
          "adbLaunchCommand": "adb shell am start -n tv.arte.plus7/.leanback.MainActivity",
      },
      "xiaomi": {
          "appName": "tv.arte.plus7",
          "androidName": "tv.arte.plus7",
          "adbLaunchCommand": "adb shell am start -n tv.arte.plus7/.leanback.MainActivity",
      },
  },


  "bbc-iplayer": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="822" height="371" viewBox="0 0 822 371" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><g fill="#ff4c98" fill-rule="nonzero"><path d="M211.8 225.6h-31.2v144h99.7v-27h-68.5v-117zm395.7 82.7h60.7v-25.7h-60.7v-31.2h68.3v-25.8h-99.4v144h103.3v-25.8h-72.2v-35.4zm-608-36h30v97h-30v-97zm0-46.8h30v24.6h-30v-24.6zM146.7 238c-10-8.2-24.3-12.3-43-12.3h-52v144h30.8v-49h21c12.4 0 23-2 31.5-5.5 8.7-3.7 15.2-9 19.7-16a46 46 0 0 0 6.8-25.7c0-15.3-5-27-15-35.2zM123 290.5c-4.8 3.7-11.8 5.5-21 5.5H82.6v-46h19.6c9 0 16 1.8 20.7 5.6 4.8 3.7 7.2 9.6 7.2 17.5s-2.4 13.7-7.2 17.4z"/><path d="M211.7 225.6h-31v144h99.7v-27h-68.6v-117zM493 296c-6-10.3-29.2-60-34.8-70.5h-35.4L477 323v46.5H508V323l54.4-97.4H528c-5.7 10.6-29 60-35 70.5zm-107.5-70.5h-33.6c-38.3 94-47.6 118.7-56.8 144h33.4l10.5-31.2h58.6l10.5 31.2h34.2l-56.8-144zm-37.6 87l20.4-55.5 20.2 55.5h-40.6zm456 27.5l-18-28.7a43 43 0 0 0 19.3-15.5c4.5-6.7 6.8-14.8 6.8-24.3 0-14.8-5-26-15.3-34s-24.8-12-43.8-12H700v144h30.7v-52.3h25l30 52.3h35.8zm-31-52.3c-5 3.4-12.3 5-22 5h-20.2V250H751c9.6 0 16.8 1.7 21.8 5.2 5 3.5 7.3 9 7.3 16.3s-2.5 12.8-7.4 16.2z"/><path d="M211.7 225.6h-31v144h99.7v-27h-68.6v-117z"/></g><path d="M121.6-.5V164h165.2V-.5H121.6zm115.2 116c-2.8 4-6.8 7-12 9-5.3 2.2-11.5 3.3-19 3.3h-37V35.5h35c10.3 0 18.2 2 24 6 5.6 4 8.4 10 8.4 17.7a21 21 0 0 1-3 11.4c-2 3.3-5 5.8-9 7.7 5.5 1.8 9.7 4.7 12.6 8.6 3 4 4.4 8.7 4.4 14.3 0 5.5-1.4 10.3-4.3 14.3zm-23.6-45.3c2.6-2 4-5 4-8.8 0-7.3-5-11-15-11h-14.3v23H202c5 0 8.6-1 11.2-3.2zM204.4 88h-16.7v25h16.5c5.6 0 10-1 13-3.2s4.5-5.2 4.5-9c0-8.5-5.7-12.7-17.3-12.7zM328.2-.5V164h165.2V-.5H328.2zm115.2 116a27 27 0 0 1-12.1 9.1c-5.2 2.2-11.5 3.3-18.8 3.3h-37V35.5h34.8a40 40 0 0 1 23.9 6.1c5.7 4 8.5 10 8.5 17.7a21 21 0 0 1-3 11.4c-2 3.3-5 5.8-9 7.7 5.5 1.8 9.7 4.7 12.6 8.6 3 4 4.3 8.7 4.3 14.3 0 5.5-1.4 10.3-4.2 14.3zm-23.7-45.3c2.6-2 4-5 4-8.8 0-7.3-5-11-15-11h-14.3v23h14.3c5 0 8.6-1 11-3.2zM411 88h-16.7v25h16.4c5.7 0 10-1 13-3.2 3-2 4.6-5.2 4.6-9 0-8.5-5.8-12.7-17.3-12.7zm123.7 76H700V-.5H534.7V164zM653.4 122a54 54 0 0 1-13.4 5c-5 1.2-10.4 2-16 2a58 58 0 0 1-20.1-3.3 40 40 0 0 1-15.1-9.3c-4-4-7.2-9-9.4-15S576 89 576 81.7c0-7.2 1-13.7 3.4-19.5s5.6-10.8 10-15a43 43 0 0 1 15.4-9.5 58 58 0 0 1 20.1-3.3 62 62 0 0 1 14.6 1.6c4.6 1 9 2.6 12.8 4.6v18c-3.6-2.4-7.5-4.2-11.7-5.4-4-1.2-8.6-1.8-13.2-1.8-6.4 0-11.8 1.2-16.3 3.5-4.5 2.4-8 5.8-10.4 10.3s-3.6 10-3.6 16.4c0 6.4 1.2 12 3.5 16.4s5.7 8 10 10.3a33 33 0 0 0 16 3.6 50 50 0 0 0 26.7-7.5V122z" fill="#000" fill-rule="nonzero"/></svg>',
      "friendlyName": 'BBC iPlayer (UK)',
      "className": "bbciplayerButton",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield"],
      "amazon-fire": {
          "appName": "uk.co.bbc.iplayer",
          "androidName": "uk.co.bbc.iplayer",
      },
      "chromecast": {
          "appName": "bbc.iplayer.android",
          "androidName": "bbc.iplayer.android",
          "adbLaunchCommand": "adb shell am start -n bbc.iplayer.android/external.androidtv.bbciplayer.deeplinking.DeepLinkActivity",
      },
      "nvidia-shield": {
          "appName": "com.nvidia.bbciplayer",
          "androidName": "com.nvidia.bbciplayer",
          "adbLaunchCommand": "adb shell am start -n com.nvidia.bbciplayer/.BaseWebViewActivity",
      },
  },


  "bell-fibe-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="layer" x="0px" y="0px" viewBox="-153 153 597 245" xml:space="preserve"><g><path d="M-109.6,207.8v51.8h92.5v19.7h-92.5v113.5h-21.7l-0.3-183.3c0-4.7,0.7-9.7,1-12.7c4-20.4,19.4-35.7,41.4-38.1 c2-0.3,8.7-1,13-1h72.8v19.7h-75.5C-98.6,177.4-109.6,185.8-109.6,207.8" style="fill:#00518D;"/><path d="M39,200.8c-9.7,0-14.3-5-14.3-14.7c0-9.7,4.7-14.3,14.3-14.3s14,4.7,14,14.3C53,195.8,48.6,200.8,39,200.8 M27.9,232.5h21.7v160.3H27.9V232.5z" style="fill:#00518D;"/><path d="M124.1,384.1c-7-3.3-10.3-0.3-10.3,5.3v3.3H93.1V155h20.7v101.5c13.7-18.7,34.7-27.7,58.8-27.7 c46.4,0,75.8,33.4,75.8,81.5c0,47.4-31.1,84.5-78.8,84.5C149.8,394.8,138.1,390.8,124.1,384.1 M113.8,308v49.7 c13.7,9.7,31.7,18.7,54.1,18.7c39.4,0,58.4-29.7,58.4-66.1c0-34.1-17.7-62.1-55.1-62.1C138.8,248.2,113.8,272.2,113.8,308" style="fill:#00518D;"/><path class="st0" d="M352.2,376.7c21.4,0,38.7-6.7,55.1-18.7l10,16c-18.7,14.3-39.7,21.7-66.8,21.7c-51.8,0-81.5-35.4-81.5-83.8 c0-47.1,32.1-83.8,77.8-83.8c43.4,0,72.1,29.1,74.5,71.8c0,0,1,12.7,1,15.4H291.4C292.4,351.4,313.8,376.7,352.2,376.7 M292.1,296.9h106.5c-3.7-29.4-20.7-50.4-51.8-50.4C317.1,246.5,296.4,269.2,292.1,296.9" style="fill:#00518D;"/></g></svg>',
      "friendlyName": 'Bell Fibe TV (Canada)',
      "appName": "ca.bell.tv.firetv",
      "className": "bellFibeTVButton",
      "androidName": "ca.bell.tv.firetv",
      "adbLaunchCommand": "adb shell am start -n ca.bell.tv.firetv/ca.bell.fiberemote.tv.MainTvActivity",
      "deviceFamily": ["amazon-fire"],},


  "bgtime-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="336" height="93" viewBox="0 0 336 93" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M70 62c1.3-6-3-10.8-8-12.5L60.4 57 58 69c-1 4.7-5.8 8.5-14.5 8.5H31c-5.4 0-9.6-2.7-12.5-8-1 1.7-2.8 3-4.7 3.6-1.6.5-3.3.6-5 .1 4.7 9.4 12.6 14.5 22.2 14.5h12.3c16.3 0 23-8.3 24.6-16.4-.1.1 1.3-6.5 2-9.4zM14 41l8 25.2c.7 2 2.7 3.6 5 3.6.5 0 1-.1 1.6-.3 2.7-1 4.2-3.8 3.3-6.5l-8-25c-.7-2-2.7-3.6-5-3.6-.5 0-1 .1-1.6.3-2.7 1-4.2 3.8-3.3 6.5zm-4 3.6c-.7-2-2.7-3.6-5-3.6-.5 0-1 .1-1.6.3C2 41.7 1 42.6.4 44-.2 45-.3 46.5.1 48l6 18.6c1 2 3 3.5 5 3.5.5 0 1-.1 1.6-.3 1.3-.4 2.4-1.3 3-2.6.6-1.2.7-2.6.3-4l-6-18.6zm17-14h10.8L29 3.6c-.7-2-2.7-3.6-5-3.6-.5 0-1 .1-1.6.3-2.7 1-4.2 3.8-3.3 6.5l8 23.8zM60.3 1C59 .7 57.8.5 56.6.5c-4 0-7.6 2-8.6 5.2l-8 25h10.8L60.3 1zm9.2 39.6c-2-3-6-6.3-13.8-6.3h-28c.6 3.2 2.7 10.3 11.2 10.3h18.3c7 0 12 3.4 14.6 8.5 1-5 .2-9-2.3-12.5z" fill="#01a19a" fill-rule="nonzero"/><path d="M229.3 44.7c-4 0-7.3 1.5-9.8 4.3l-.4.5-.4-.5c-2.3-2.8-5.8-4.3-9.8-4.3-8.3 0-14 5.7-14 14v18h7.4V58.4c0-3.8 2.7-6.5 6.6-6.5 5.7 0 6.4 4.5 6.4 6.5v18.3h7.4V58.4c0-3.8 2.8-6.5 6.6-6.5 5.8 0 6.4 4.5 6.4 6.5v11.8c0 5 4.7 6.5 7.2 6.5h.2v-18c0-8.5-5.4-14-13.8-14zm-46.5.8v31.2h.2c2.5 0 7.2-1.4 7.2-6.5V45.5h-7.4zm86.6.3a16 16 0 0 0-6-1.2c-6.6 0-12.5 4-15 10.2-3.5 8.3.3 17.8 8.4 21.2a18 18 0 0 0 6.6 1.5h.8c4-.1 7.4-1.8 10-4.8l.4-.4-.1-.1c-1-1.3-3-2.6-5-2.6-.7 0-1.3.1-2 .4-1.3.6-3 1-4.4 1s-2.8-.3-4-.8a9 9 0 0 1-5.2-5.9l-.2-.7h24.7v-.1a15 15 0 0 0-9.1-17.6zm-15 11.7l.4-.8c1.7-3.6 5-5.8 8.5-5.8 1.2 0 2.3.2 3.5.7 2.4 1 4 2.8 5 5.2l.2.7h-17.5zm-113-12.8c-9.2 0-16 7-16 16.4 0 9 6.7 16.3 15 16.3a13 13 0 0 0 8.8-3.3l1-.8v2.3c0 6.5-3 10-8.8 10-3.2 0-5.5 3.6-5.8 5.5h0l.1.1c1.8.8 3.7 1 5.7 1h.2c10-.1 16-6.5 16-17V61c.1-9.3-6.8-16.4-16-16.4zm0 26c-4.8 0-8.6-4-8.6-9.4s3.8-9.6 8.6-9.6c4.7 0 8.6 4.3 8.6 9.6 0 5.2-4 9.4-8.6 9.4zm45-35.7c-2.3 0-4 1.8-4 4a4 4 0 1 0 8 0 4 4 0 0 0-4-4zm-78.2 10c-3.6 0-6.6 1-8.8 3.4l-1 1V34h-.2c-2.5 0-7.2 1.4-7.2 6.5V61c0 9.3 7 16.3 16 16.3s16-7 16-16.3c0-9-6.7-16.4-15-16.4zm-1 25.8c-4.7 0-8.6-4.2-8.6-9.4 0-5.3 4-9.6 8.6-9.6 4.8 0 8.6 4.2 8.6 9.6 0 5.3-3.8 9.4-8.6 9.4zm62.6-7V52h5.8v-6.5h-5.8V37h-.2c-2.5 0-7.2 1.3-7.2 6.4v20c0 8.2 4.4 13 12 13l3.8-.1h.2V70h-2.7c-4 .1-5.8-2-5.8-6.2zm165.5-18.3c-.1 0-.7-.1-1.5-.1-2 0-5.6.5-6.8 3.6l-7.3 19-8.6-22.5h-7.3l12 31.2h7.8l12-31.2h-.3zM305 70h-2.7c-4 0-5.8-2-5.8-6.3V52h5.8v-6.5h-5.8V37h-.2c-2.5 0-7.2 1.3-7.2 6.4v20c0 8.2 4.4 13 12 13l3.8-.1h.2V70zm-21.7-.7c-2.3 0-4 1.8-4 4a4 4 0 1 0 8 0 4 4 0 0 0-4-4z" fill-rule="nonzero"/></svg>',
      "button-round": '<svg xmlns="http://www.w3.org/2000/svg" width="694" height="467" viewBox="0 0 694 467" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M423.8 167c3.4-15.8-8-28.4-21-33l-4.2 19.7-6.3 31.6c-2.6 12.3-15.2 22.3-38 22.3h-32.8c-14.2 0-25.2-7-32.8-21-2.7 4.4-7.4 8-12.4 9.4-4.2 1.3-8.6 1.6-13 .3 12.3 24.7 33 38 58.3 38h32.3c42.8 0 60.4-21.8 64.6-43a506 506 0 0 1 5.3-24.7zm-147.2-55.2l21 66.2c1.8 5.3 7 9.5 13 9.5a14 14 0 0 0 4.2-.8c7-2.7 11-10 8.7-17l-21-65.7c-2-5.2-7-9.4-13.2-9.4-1.3 0-2.6.2-4.2.8-7 2.6-11 10-8.7 17zm-10.5 9.5c-1.8-5.3-7-9.5-13-9.5a14 14 0 0 0-4.2.8c-3.7 1-6.3 3.4-8 7-1.6 2.6-1.8 6.6-.8 10.5l15.8 49c2.6 5.2 8 9 13 9 1.3 0 2.7-.2 4.2-.7 3.4-1 6.3-3.5 8-7 1.6-3 1.8-6.8.8-10.5L266 121.3zm44.7-36.8h28.4l-23.2-71c-1.8-5.3-7-9.5-13-9.5a14 14 0 0 0-4.2.8c-7 2.6-11 10-8.7 17l21 62.5zm87.5-77.8c-3.4-.8-6.6-1.3-9.7-1.3-10.6 0-20 5.3-22.6 13.7l-21 65.6h28.4l25-78zm24 104c-5.2-8-15.7-16.6-36.2-16.6h-73.6c1.6 8.4 7 27 29.5 27h48a41 41 0 0 1 38.4 22.3c2.6-13 .5-23.7-6-32.8z" fill="#01a19a"/><path d="M387.8 309.7a33 33 0 0 0-25.7 11.3l-1 1.3-1-1.3c-6-7.4-15.3-11.3-25.8-11.3a35 35 0 0 0-36.8 36.8v47.3H317v-48c0-10 7-17 17.3-17 15 0 16.8 11.8 16.8 17v48h19.5v-48c0-10 7.3-17 17.3-17 15.2 0 16.8 11.8 16.8 17v31c0 13 12.4 17 19 17h.6v-47.3a34 34 0 0 0-36.3-36.8zm-122.2 2v82h.6c6.5 0 19-3.7 19-17v-65h-19.5zm227.5.8c-5-2-10.3-3-15.7-3.2-17.4 0-33 10.6-39.4 26.8-9.2 21.8.8 46.8 22 55.7 5.5 2.4 11.4 3.8 17.4 4h2c10.5-.3 19.4-4.8 26.2-12.6l1-1-.3-.3c-2.6-3.4-7.8-6.8-13-6.8-1.8 0-3.4.3-5.3 1-3.4 1.5-7.8 2.6-11.5 2.6s-7.4-.8-10.5-2c-6.7-2.8-11.7-8.5-13.7-15.5l-.5-1.8h65v-.3c4.8-19.2-5.5-39-24-46.2zm-39.4 30.7l1-2c4.5-9.4 13-15.2 22.3-15.2 3.2 0 6 .5 9.2 1.8 6.3 2.7 10.5 7.4 13 13.7l.6 1.8h-46zM157 309.7c-24.2 0-42 18.4-42 43 0 23.6 17.6 42.8 39.4 42.8a34 34 0 0 0 23.1-8.7l2.6-2v6c0 17-8 26.2-23 26.2-8.4 0-14.5 9.5-15.2 14.5h0l.2.3c4.8 2 9.7 2.6 15 2.6h.5c26.3-.3 42-17 42-44.7v-37.3c.2-24.4-18-43-42-43zm0 68.3c-12.6 0-22.6-10.5-22.6-24.7s10-25.2 22.6-25.2c12.3 0 22.6 11.3 22.6 25.2C179.5 367 169 378 157 378zM275 284.2c-6 0-10.5 4.8-10.5 10.5 0 5.8 4.7 10.5 10.5 10.5s10.5-4.7 10.5-10.5-4.7-10.5-10.5-10.5zM69.7 310.5c-9.5 0-17.4 2.6-23 9L44 322v-40.5h-.5c-6.6 0-19 3.7-19 17v53.8c0 24.5 18.4 42.8 42 42.8 23.7 0 42-18.3 42-42.8 0-23.6-17.6-43-39.4-43zM67 378.3c-12.4 0-22.6-11-22.6-24.7 0-14 10.5-25.2 22.6-25.2 12.6 0 22.5 11 22.5 25.2 0 14-10 24.7-22.5 24.7zM231.5 360v-31h15.2v-17h-15.2v-22.3h-.5c-6.6 0-19 3.4-19 16.8v52.5c0 21.6 11.5 34.2 31.5 34.2l10-.3h.5v-16.5h-7c-10.5.2-15.2-5.3-15.2-16.3zm434.8-48c-.3 0-2-.3-4-.3-5.2 0-14.7 1.4-18 9.5l-19 50-22.6-59h-19.2l31.5 82h20.5l31.5-82h-.7zm-79.6 64.4h-7c-10.5 0-15.3-5.3-15.3-16.6V329h15.3v-17h-15.3v-22.3h-.5c-6.6 0-19 3.4-19 16.8v52.5c0 21.6 11.5 34.2 31.5 34.2l10-.3h.5v-16.5zm-57-2c-6 0-10.6 4.8-10.6 10.5 0 5.8 4.7 10.5 10.6 10.5 5.8 0 10.5-4.7 10.5-10.5s-4.7-10.5-10.5-10.5z"/></svg>',
      "friendlyName": 'bgtime.tv',
      "className": "bgtimeTvButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "bg.mytv.android",
          "androidName": "bg.mytv.android",
          "adbLaunchCommand": "adb shell am start -n bg.mytv.android/.activities.ActivityLogin",
      },
      "apple-tv": {
          "appName": "bgtime.tv",
      },
      "chromecast": {
          "appName": "bg.mytv.android",
          "androidName": "bg.mytv.android",
          "adbLaunchCommand": "adb shell am start -n bg.mytv.android/.activities.ActivityLogin",
      },
      "nvidia-shield": {
          "appName": "bg.mytv.android",
          "androidName": "bg.mytv.android",
          "adbLaunchCommand": "adb shell am start -n bg.mytv.android/.activities.ActivityLogin",
      },
      "xiaomi": {
          "appName": "bg.mytv.android",
          "androidName": "bg.mytv.android",
          "adbLaunchCommand": "adb shell am start -n bg.mytv.android/.activities.ActivityLogin",
      },
 },


  "binge-au": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="915" height="201" viewbox="0 0 915 201"><g transform="matrix(3.78 0 0 3.78 457.39 100.22)"><linearGradient id="bingeA" gradientUnits="userSpaceOnUse" x1="13.739" y1="48.924" x2="243.549" y2="49.113"><stop offset="0%" stop-color="#2173fa"/><stop offset="13.900000000000002%" stop-color="#3241de"/><stop offset="35.6%" stop-color="#5117bf"/><stop offset="42.9%" stop-color="#6911ac"/><stop offset="54.7%" stop-color="#92078b"/><stop offset="62.8%" stop-color="#a90178"/><stop offset="72.1%" stop-color="#c00057"/><stop offset="80.4%" stop-color="#cf0541"/><stop offset="88.9%" stop-color="#db363a"/><stop offset="100%" stop-color="#eb7531"/></linearGradient><path transform="translate(-132.29 -49.89)" d="M11.245 76.421h26.194c5.931 0 12.038.366 17.462-2.51 8.324-4.415 13.434-21.009 1.058-23.948 2.255-1.055 4.375-1.83 5.874-3.969C65.335 41 64.78 30.71 59.927 26.78c-2.79-2.26-6.354-2.724-9.788-3.056-7.142-.691-14.517-.22-21.696-.22h-7.409l-2.75.017-.646 3.952-1.407 10.054-4.986 38.894m61.648-52.916L71.04 38.057h18.212L75.009 45.4l-5.207 3.079-1.184 8.098-2.34 19.844h12.965l5 .012.53-3.716 1.349-10.054 3.131-24.606 1.963-14.589-6.417.037H72.893M89.56 76.42l16.421.017 3.44-27.517 3.667 6.35 7.503 14.023 3.815 7.14 4.594.004h11.906l6.615-52.916-16.421-.017-3.44 27.781c-3.834-5.814-6.866-12.557-9.988-18.785-1.234-2.462-4.264-8.973-4.264-8.973l-4.004-.023h-9.26l-3.81.046-.73 5.775M200.95 45.993h-23.019c1.056 2.536 2.507 5.015 3.857 7.408.575 1.02 2.021 3.103 2.021 3.103s-2.036 2.93-2.968 3.687c-4.787 3.89-12.214.618-14.988-4.144-3.526-6.05-.54-14.498 5.993-17.075 3.39-1.337 7.284-.916 10.848-.916h19.314l1.852-14.552h-23.018c-4.835 0-9.86-.409-14.552.984-18.74 5.562-24.61 30.614-11.354 44.52 6.746 7.077 15.218 7.412 24.318 7.412h13.23l4.45-.023 1.177-8.179c1.054-7.374 1.479-14.902 2.839-22.225m1.058 30.427h41.275l3.344-.021.697-3.948 1.251-10.318-28.046-.265.53-4.762h23.283l1.852-14.552H222.91l.53-4.498 28.31-.265 1.588-14.023-32.809-.264h-8.202l-3.563.012-.48 3.956-1.29 10.054-4.986 38.894M31.882 44.142c.231-1.489 1.437-7.633 1.437-7.633l3.061-.04c2.709 0 6.636-.523 8.826 1.446 2.686 2.417.536 5.668-2.211 6.11-1.386.224-2.835.117-4.234.117h-6.879M29.36 63.986l1.255-8.874 4.775-.058c2.981 0 6.322-.385 8.963 1.305 4.144 2.526.799 6.798-2.416 7.414-1.57.3-3.171.213-4.762.213z" fill="url(#bingeA)" fill-rule="evenodd"/></g></svg>',
      "friendlyName": 'Binge (AU)',
      "className": "bingeAuButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "au.com.streamotion.ares.tv",
          "androidName": "au.com.streamotion.ares.tv",
          "adbLaunchCommand": "adb shell am start -n au.com.streamotion.ares.tv/au.com.streamotion.ares.tv.main.MainActivity",
      },
      "apple-tv": {
          "appName": "BINGE",
      },
      "chromecast": {
          "appName": "au.com.streamotion.ares.tv",
          "androidName": "au.com.streamotion.ares.tv",
          "adbLaunchCommand": "adb shell am start -n au.com.streamotion.ares.tv/au.com.streamotion.ares.tv.main.MainActivity",
      },
      "nvidia-shield": {
          "appName": "au.com.streamotion.ares.tv",
          "androidName": "au.com.streamotion.ares.tv",
          "adbLaunchCommand": "adb shell am start -n au.com.streamotion.ares.tv/au.com.streamotion.ares.tv.main.MainActivity",
      },
      "xiaomi": {
          "appName": "au.com.streamotion.ares.tv",
          "androidName": "au.com.streamotion.ares.tv",
          "adbLaunchCommand": "adb shell am start -n au.com.streamotion.ares.tv/au.com.streamotion.ares.tv.main.MainActivity",
      },
 },


  "bookmarker-1": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="551" viewBox="0 0 1000 551" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M927 0H777.4c-12.2 0-23 17.4-23 38v384c0 7 1 12.7 3 17 2 5.3 5.6 8.4 9.2 8.4 3.5 0 7.2-2.7 10.6-7.8l67-98.6c2-3 5-4.8 8.2-4.8a10 10 0 0 1 8.1 4.8l66.7 98.6c3.5 5 7 7.8 10.4 7.8 6 0 11.6-8 11.6-25.5V38c0-20.6-10-38-22-38z" fill="red"/><path d="M205.3 59.5zM514.5 455h-48.8V146.8C454 158 438.5 169 419.4 180s-36.2 19.5-51.4 25v-46.7c27.3-12.7 51.2-28 71.6-46.2 20.5-18 35-35.7 43.4-52.7h31.5V455z"/></svg>',
      "friendlyName": 'Bookmarker 1',
      "className": "bookmarker1Button",
      "appName": "com.esaba.bookmarker1",
      "androidName": "com.esaba.bookmarker1",
      "adbLaunchCommand": "adb shell am start -n com.esaba.bookmarker1/.MainActivity",
      "deviceFamily": ["amazon-fire"],},


  "channels-dvr": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="744" height="217" viewBox="0 0 744 217" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><g stroke="none"><path d="M143 34.8c-9.2-11.4-19.2-19-26.5-27.5-6-7.5 4-10 9-2.5l22 22.7c5 2.5 7.5 10 15 5C180 10 189.5 2.7 192.5 0c12.5 2.5-7.5 17.5-20 35l135.5-.2s7.5 0 7.5 7.5l-.5 165.2c0 10-7.5 7.5-10 7.5l-295-.2c-2.4-.8-10 2.7-10-9.8V42.5C0 35 10 35 10 35" fill="#fafafb"/><path d="M107.7 45l50.3-.3v145h-50L107.7 45z" fill="#66bac4"/><path d="M55.5 44.8v145h-45v-145h45z" fill="#ebd96e"/><path d="M55.5 44.8H108l.5 144.5-53 .5v-145z" fill="#a4c35f"/><path d="M260.5 187.3h-50V44.8H258l2.5 142.5z" fill="#e36c62"/><path d="M158 44.8h52.5v142.5H158" fill="#c5839f"/><path d="M305.5 187.3H258V44.8h47.5v142.5z" fill="#7093e1"/><path d="M139.5 83.6l70 39c3 2.4 5.5 5 0 8l-70 39c-4.5 3-7 .4-8-3l-.5-79c1.5-5 4-5 8.5-4z" fill="#fefefe"/><path d="M108 187.3h52.5v20H108v-20z" fill="#e36c63"/><path d="M210.5 187.3v20H158v-20h52.5z" fill="#5348a3"/><path d="M210.5 187.3h50v20h-50v-20z" fill="#67b8c4"/><path d="M258 187.3h47.5v20H258v-20z" fill="#5e3f9f"/><path d="M55.5 187.3v20c-15.5 0-30.2-.3-45 0v-20" fill="#7093e1"/><path d="M108.5 187.3h-53v20H108l.5-20z" fill="#54508e"/></g><path d="M378.7 75.4H391a28 28 0 0 1-1.8 8 23 23 0 0 1-6.6 9.7q-7 6.2-19 6.4h-.6a30 30 0 0 1-8.4-1.2c-2.3-.6-4.5-1.6-6.6-3a27 27 0 0 1-9.3-10L338 84q-3.6-7.4-3.7-17.2V60a57 57 0 0 1 .8-9.2 37 37 0 0 1 2.8-8.5c1.3-3 3-5.6 5.4-8a26 26 0 0 1 4.8-3.8c3.6-2.3 7.7-3.6 12-4l3.5-.2q11.8 0 19 6.4 7.2 6.4 8.4 18h-12.3l-.7-4q-.5-2-1.3-3.6c-.6-1.3-1.5-2.5-2.5-3.5q-3-2.8-8.3-3.3c-.7 0-1.5-.1-2.2-.1q-8 0-12.4 6c-1.2 1.7-2 3.6-2.8 5.6q-.8 2.6-1.2 5.7c-.3 2-.4 4-.4 6V66c0 2.2.1 4.3.4 6.5q.4 3.2 1.2 5.8c.6 2 1.5 3.6 2.5 5.3 2.2 3.3 5.8 5.4 9.7 6 .8.1 1.6.1 2.4.1a26 26 0 0 0 4-.3q2-.3 3.8-1c1.2-.5 2.2-1 3.2-2s2-2 2.5-3.3q.8-1.6 1.3-3.6c.4-1.3.6-2.6.8-4zm34-52v28q5.8-6.7 14.7-6.7a20 20 0 0 1 7.2 1.1q9.7 3.5 10 18.2v34.5h-12v-34c.1-1 0-1.8-.1-2.7q-.4-3-2-4.7l-.3-.3c-1-.8-2-1.4-3-1.7q-1.2-.4-2.6-.5c-.5-.1-1-.1-1.5-.1-1.7 0-3.3.3-5 1q-3 1.3-5 4.2c-.3.4-.6.8-.8 1.3v37.7h-12v-75h12zm329.2 38h-12c0-1.2-.3-2.3-.8-3.4-.5-1-1-1.6-1.8-2.3-1-1-2.5-1.6-4-2-1-.2-2-.3-2.8-.3l-2.7.2q-1.7.4-3 1.2c-.3.1-.5.2-.7.4Q712 57 711.8 60v.2q0 2.6 2 4l.3.3c.5.3 1 .5 1.5.7q2.6 1.2 7.8 2.3c1.4.3 2.7.7 4 1q2 .6 3.7 1.3c1 .4 2.2.8 3.2 1.4q3.6 2 5.5 4.5c.1.2.3.4.4.6.8 1.3 1.4 2.8 1.7 4.3v3c.1 4-1.6 7.8-4.5 10.4l-1.4 1.2a23 23 0 0 1-7.6 3.5q-3 .7-6.3.8c-.5.1-1 .1-1.6.1-2 0-4.2-.2-6.3-.6-1.8-.4-3.6-1-5.2-1.8a15 15 0 0 1-4.8-3c-1.2-1-4-3.3-5-4.6-1.2-1.8-.3-2.6-.7-4.7a15 15 0 0 1-.3-2.9H710a14 14 0 0 0 .6 2.8c.5 1.5 1.4 2.7 2.6 3.6 1 1 2.4 1.5 3.8 1.8q1.4.4 3.2.5h.8c1 0 1.7-.1 2.6-.2q1.3-.2 2.4-.5c.7-.3 1.5-.6 2-1 .6-.4 1-1 1.6-1.6.6-1 1-2 .8-3 .1-.7-.1-1.5-.3-2.2q-.6-1.4-2-2.4c-.1-.1-.2-.1-.3-.2q-2-1.4-6.6-2.5c-.7-.1-1.4-.3-2-.4q-4.8-1-8.3-2.4l-1.8-.8c-1.6-.8-3-1.7-4.3-2.8-3-2.3-4.7-6-4.6-9.7q0-6.8 5.7-11.4 5.8-4.6 14.7-4.6a35 35 0 0 1 6.5.6q4.3 1 7.6 3.2l1.2 1c1.8 1.4 3.2 3.2 4.3 5.2q1.5 3 1.5 6.8v.1zM510.3 45.7h11.2l.4 6c3.3-4.2 8.2-6.8 13.6-7 .6-.1 1-.1 1.7-.1 2.4-.1 4.8.3 7 1q9.5 3.5 9.7 17.8v35H542v-34-2.8q-.5-3-2-4.7c-.7-.7-1.6-1.3-2.6-1.7q-2-.7-4.5-.7c-1.7 0-3.4.3-5 1q-3 1.2-4.8 4c-.4.4-.6 1-1 1.4v37.6h-12V45.7zm55.6 0h11l.4 6c3.3-4.2 8.3-6.8 13.6-7 .6-.1 1.2-.1 1.7-.1 2.4-.1 4.8.3 7 1q9.5 3.5 9.7 17.8v35h-11.8v-34l-.2-2.8q-.5-3-2-4.7c-.7-.7-1.6-1.3-2.6-1.7q-1.8-.7-4.5-.7c-1.7 0-3.4.3-5 1q-3 1.2-4.8 4c-.3.4-.6 1-1 1.4v37.6h-12V45.7zm-66 52.8h-12q-.7-1.2-1.2-3.8c-.1-.4-.1-.8-.2-1-3.4 3.7-8.3 5.8-13.4 6h-.5a23 23 0 0 1-5.8-.7 17 17 0 0 1-7.2-3.9c-1.6-1.5-3-3.3-4-5.4-.7-1.8-1-3.8-1-5.8a16 16 0 0 1 1-5.7 14 14 0 0 1 5.4-7.3q6.3-4.5 18-4.5h7.3V63q0-4-2.3-6.6c-.8-1-2-1.6-3-2q-1.2-.4-2.6-.5c-.5-.1-1-.1-1.4-.1-1 0-2 .1-3 .3-1.3.3-2.6 1-3.7 1.8-.7.5-1.3 1-1.7 1.8-.6 1-1 2-1 3.3h-12c0-2.5.8-5 2.2-7 .2-.4.5-.7.7-1 1.5-2 3.3-3.5 5.4-4.7.8-.5 1.6-1 2.5-1.3 2.4-1 5-1.7 7.7-2 1-.2 2.2-.2 3.3-.2 2 0 4 .2 6.2.6q3.8.8 6.7 2.7c.7.4 1.3 1 2 1.4 2.8 2.3 4.7 5.7 5.3 9.3.2 1.3.4 2.5.4 3.8v23.8c0 1.5 0 3 .2 4.4q.2 2 .7 4c.3 1 .6 2 1 3v.8zm119.6-25V72c0-2.7.3-5.3 1-8 .5-2.2 1.2-4.3 2.2-6.2a24 24 0 0 1 5.2-7.2c1-1 2-1.8 3.3-2.5 3.7-2.4 8-3.6 12.3-3.5a27 27 0 0 1 6.9.8c3.8 1 7.2 3 9.8 6q5 5.8 5.7 15.6l.2 4v4.7h-34.5c.1 1.6.4 3.2 1 4.7.6 2 1.8 4 3.4 5.7 2.4 2.4 5.6 3.7 9 3.8h.8c4.6.1 9-1.8 12-5.2.4-.4.8-1 1.2-1.4l6.4 6q-3.2 4.8-8.5 7.4-5.3 2.6-12 2.6a30 30 0 0 1-8.5-1.2c-3.7-1-7-3-9.8-6-3.4-3.5-5.7-8-6.5-12.8l-.5-6zm68.3-50v75H676v-75h12zm-56 43.7h22.6v-1q-.3-4-1.7-6.8c-.4-.8-1-1.5-1.5-2.2-1.4-1.5-3.2-2.5-5.2-3a21 21 0 0 0-2.5-.2c-1.3 0-2.6.2-3.8.6-1.6.6-3 1.6-4 2.8q-3 3.4-3.8 9.6zM486.2 83.7v-10h-6.4l-3.4.2q-4 .4-6.2 2c-.1.1-.2.1-.3.2-1.8 1.2-3 3-3.2 5.2-.1.4-.1 1-.1 1.3 0 .8.1 1.6.3 2.4.4 1.2 1 2.2 2 3a7 7 0 0 0 3.4 1.8q1 .2 2.5.3h.1c2.3 0 4.6-.6 6.6-1.8q3-1.7 4.7-4.5zM441 114.5l25.2 70.4 25.4-70.4h19.2l-36 90H458l-36-90h19zm138 90l-20-34.7h-19.4v34.7H522v-90h35.2c3.5 0 7 .2 10.3.7q10 1.5 16.5 6.3a22 22 0 0 1 8.7 13.4c.5 2.3.7 4.5.7 6.8q0 9-4.8 15c-2.5 3-5.7 5.7-9.5 7.6l-4 1.8 22.4 37.5v.8H579zm-211.2 0H339v-90h29.6a58 58 0 0 1 13.2 1.5 47 47 0 0 1 10.3 3.8 38 38 0 0 1 16 15c2.7 4.7 4.5 10 5.2 15a61 61 0 0 1 .5 7.3v4.5a52 52 0 0 1-1.4 11.8 43 43 0 0 1-4.3 10.7 38 38 0 0 1-16.2 15q-10.4 5.3-24 5.3zm.8-77.4h-12.2v65h11.3a43 43 0 0 0 8.7-.9c4.8-1 9-3.4 12.4-6.8q6-6.2 7-17l.3-5.2v-5c0-2.8-.2-5.7-.7-8.5q-1.5-8.6-6.4-14a23 23 0 0 0-13.5-7c-2.3-.4-4.7-.6-7-.6zm171 0v30.2h18a33 33 0 0 0 5.5-.5q5-1 8.3-3.5c2.5-2 4.2-5 4.7-8l.2-3a18 18 0 0 0-.5-4.6q-.8-3-2.8-5.4l-1.3-1.2q-3.7-3.2-10.4-4c-1-.1-2-.2-3.2-.2h-18.4z" fill="#fff" stroke-linejoin="miter" stroke-width=".9"/></svg>',
      "button-round": '<svg xmlns="http://www.w3.org/2000/svg" width="367" height="267" viewBox="0 0 367 267" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M168 49.8c-9.2-11.4-19.2-19-26.5-27.5-6-7.5 4-10 9-2.5l22 22.7c5 2.5 7.5 10 15 5 17.5-22.5 27-29.8 30-32.5 12.5 2.5-7.5 17.5-20 35l135.5-.2s7.5 0 7.5 7.5l-.5 165.2c0 10-7.5 7.5-10 7.5l-295-.2c-2.4-.8-10 2.7-10-9.8V57.5C25 50 35 50 35 50" fill="#fafafb"/><path d="M132.7 60l50.3-.3v145h-50L132.7 60z" fill="#66bac4"/><path d="M80.5 59.8v145h-45v-145h45z" fill="#ebd96e"/><path d="M80.5 59.8H133l.5 144.5-53 .5v-145z" fill="#a4c35f"/><path d="M285.5 202.3h-50V59.8H283l2.5 142.5z" fill="#e36c62"/><path d="M183 59.8h52.5v142.5H183" fill="#c5839f"/><path d="M330.5 202.3H283V59.8h47.5v142.5z" fill="#7093e1"/><path d="M164.5 98.6l70 39c3 2.4 5.5 5 0 8l-70 39c-4.5 3-7 .4-8-3l-.5-79c1.5-5 4-5 8.5-4z" fill="#fefefe"/><path d="M133 202.3h52.5v20H133v-20z" fill="#e36c63"/><path d="M235.5 202.3v20H183v-20h52.5z" fill="#5348a3"/><path d="M235.5 202.3h50v20h-50v-20z" fill="#67b8c4"/><path d="M283 202.3h47.5v20H283v-20z" fill="#5e3f9f"/><path d="M80.5 202.3v20c-15.5 0-30.2-.3-45 0v-20" fill="#7093e1"/><path d="M133.5 202.3h-53v20H133l.5-20z" fill="#54508e"/></svg>',
      "friendlyName": 'Channels: Whole Home DVR',
      "className": "channelsDVRButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"], 
      "amazon-fire": {
          "appName": "com.getchannels.dvr.app",
          "androidName": "com.getchannels.dvr.app",
          "adbLaunchCommand": "adb shell am start -n com.getchannels.dvr.app/com.getchannels.android.MainActivity",
      },
      "apple-tv": {
          "appName": "Channels",
      },
      "chromecast": {
          "appName": "com.getchannels.dvr.app",
          "androidName": "com.getchannels.dvr.app",
          "adbLaunchCommand": "adb shell am start -n com.getchannels.dvr.app/com.getchannels.android.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.getchannels.dvr.app",
          "androidName": "com.getchannels.dvr.app",
          "adbLaunchCommand": "adb shell am start -n com.getchannels.dvr.app/com.getchannels.android.MainActivity",
      },
      "xiaomi": {
          "appName": "com.getchannels.dvr.app",
          "androidName": "com.getchannels.dvr.app",
          "adbLaunchCommand": "adb shell am start -n com.getchannels.dvr.app/com.getchannels.android.MainActivity",
      },
 },


  "cheers-danmu-player": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1056" height="816" viewBox="0 0 1056 816" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M792.2 353.4h-22.5A133 133 0 0 0 694 239.5L759.3 138c5.5-8.5 7.3-19 5-28.7-2.3-10-8.6-18.4-17.3-23.6s-19.2-6.6-29-3.8a37 37 0 0 0-22.9 18.1l-69 127c-22.6 1.8-44.4 9.5-63.2 22.2a132 132 0 0 0-74.3-22.7 133 133 0 0 0-132.5 126.7h-21.7c-3.3 0-6 2.6-6 6V373a140 140 0 0 0 139.6 139.5h65.4v142.2c0 5.2-3.3 10-8.5 12l-12.6 6 .2-7.7c0-73-59.2-132.2-132-132.2S248.3 592 248.3 665c0 78 68.2 84.7 132.2 84.7 31.5 0 64-1.7 89-12.7 1 .3 2 .4 3 .4h181.7c4.5 0 8.5-2.4 10.7-6.3 2-3.8 2-8.5-.4-12.3-11.5-18-34.6-41.4-65-53-3.8-1.4-6.3-5-6.3-9V512.4h65.4c77 0 139.5-62.6 139.5-139.5v-13.6c0-1.6-.6-3-1.7-4.2s-2.6-1.7-4.2-1.7z" fill="#e6e7e8"/><path d="M613.2 209a126 126 0 0 1 47.7 9.4L730.3 111c6.2-9.7 6.6-22 1-32-5.5-10-16-16.3-27.5-16.3-11.5 0-22 6.3-27.5 16.3l-70.8 130.4c2.5-.2 5-.3 7.6-.3z" fill="#0089ef"/><path d="M613 209c-26.6 0-52.6 8.4-74.2 24.2a126 126 0 0 1 52 102h148.5C739.4 265.5 683 209 613 209z"/><path d="M613.2 226.8a126 126 0 0 0-62.1 16.4 126 126 0 0 1 39.8 92H738a126 126 0 0 0-124.9-108.4z" fill="#6dc9f7"/><path d="M464.6 209a126 126 0 0 0-126.2 126.2H591c0-69.7-56.5-126.2-126.3-126.2z" fill="#fa759e"/><path d="M464.6 209a126 126 0 0 0-126.2 126.2H591c0-69.7-56.5-126.2-126.3-126.2z"/><path d="M589.6 335.2a126 126 0 0 0-124.9-108.4c-63.7 0-116.3 47-125 108.4h250z" fill="#fa759e"/><g fill="#d4fbff"><path d="M635.4 698a134 134 0 0 0-62.1-50.7c-6-2.2-10-8-10-14.4V482.4h-47.8v148a19 19 0 0 1-12.2 17.5 122 122 0 0 0-22.3 12c-4.3 23.3-17 37.7-35.6 46.5 1 .5 2 .8 3 .8h181.8c4.8 0 7.8-5.3 5.2-9.4z"/><path d="M310.4 335.3v13.5c0 73.8 59.8 133.7 133.6 133.7h190.5c73.8 0 133.6-60 133.6-133.7v-13.5H310.4z"/></g><path d="M482.7 640.8c0 69.8-56.5 78.8-126.3 78.8-69.7 0-126.2-9-126.2-78.8a126 126 0 0 1 126.2-126.2c69.8 0 126.3 56.5 126.3 126.2z" fill="#ffd7e5"/><path d="M768.2 329.6H745c-2.2-50.3-32.6-93.3-75.7-113.7L735 114a37 37 0 0 0 4.9-28.6A37 37 0 0 0 722.8 62a36 36 0 0 0-28.7-3.8 36 36 0 0 0-22.7 18L602 203.8c-22.6 2-44.4 9.7-63 22.5-22-15-47.8-23-74.3-23a132 132 0 0 0-131.8 126.3h-22.5c-3 0-5.6 2.5-5.6 5.7v13.5c0 76.8 62.4 139.3 139.3 139.3h65.6v142.5c0 5.3-3.4 10-8.6 12.2a98 98 0 0 0-13 6.3l.3-8.2a132 132 0 0 0-132-132 132 132 0 0 0-131.9 132c0 78 68 84.4 132 84.4 31.6 0 64.2-1.6 89-12.7 1 .3 2 .4 3 .5h181.8c4.3-.1 8.3-2.4 10.4-6.2s2-8.4-.4-12a140 140 0 0 0-64.8-52.9c-4-1.5-6.5-5-6.5-9V488h65.7c76.8 0 139.3-62.5 139.3-139.3v-13.5c0-1.5-.6-3-1.7-4-1-1-2.5-1.6-4-1.6zm-86.8-248c3.3-6 9-10.6 15.7-12.5 6.7-1.8 14-1 20 2.7a26 26 0 0 1 12 16.2 25 25 0 0 1-3.4 19.8L659 211.4a131 131 0 0 0-43.4-8l66-121.8zm-68.2 133a121 121 0 0 1 120.4 114.9h-137a132 132 0 0 0-47.8-96c18.7-12 40.7-19 64.5-19zm-148.5 0a121 121 0 0 1 120.4 114.9H344.3c3-64 55.8-115 120.4-115zM236 641a121 121 0 0 1 120.5-120.6A121 121 0 0 1 477 640.9c0 61-44.2 73-120.6 73C280 714 236 702 236 641zm335.4 11.7c27.8 10.5 48.8 32 59.3 48.3l-.4.8H463.6a66 66 0 0 0 22.5-38.3 106 106 0 0 1 19.2-10c9.6-3.8 15.8-12.8 15.8-22.7V488h36.4v144.7c0 8.8 5.4 16.6 13.8 19.8zm63.3-176H444a128 128 0 0 1-124.7-99.3H381c3.2 0 5.7-2.6 5.7-5.7S384 366 381 366h-63.6c-.8-5.7-1-11.4-1.2-17.2V341h446.4v7.8l-1.2 17.2h-267c-3.2 0-5.7 2.6-5.7 5.7s2.5 5.7 5.7 5.7h265a128 128 0 0 1-124.6 99.3zM468 366h-58.7c-3 0-5.7 2.6-5.7 5.7s2.6 5.7 5.7 5.7H468c3 0 5.7-2.6 5.7-5.7 0-3.2-2.6-5.7-5.7-5.7z" fill="#3a2c60"/><path d="M356.4 556.8a74 74 0 0 0-74.2 74.2c0 41 33.2 46.3 74.2 46.3s74.3-5.3 74.3-46.3-33.3-74.2-74.3-74.2z" fill="#fa759e"/></svg>',
      "friendlyName": 'Cheers - Danmu Player',
      "appName": "Cheers - Danmu Player",
      "className": "cheersDanmuPlayerButton",
      "androidName": "com.",
      "deviceFamily": [],
  },


  "cnn": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="825" height="400" viewbox="0 0 825 400" xml:space="preserve"><g><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#fff;fill-rule:nonzero;opacity:1" transform="translate(-81 -298.01)" d="M159.518 500.118c0 65.79 53.52 119.321 119.316 119.321h112.614c6.27 0 11.315-6.177 11.315-11.281V387.24c0-14.64 11.905-26.546 26.551-26.546 9.378 0 18.126 4.979 22.815 13 .57.962 34.66 59.745 70.748 121.98 34.475 59.44 70.12 120.903 70.716 121.92 1.586 2.709 4.694 4.454 7.922 4.454 5.121 0 9.28-4.164 9.28-9.284V387.24c0-14.64 11.915-26.546 26.55-26.546 9.384 0 18.127 4.979 22.827 13 .558.962 34.622 59.75 70.688 121.98 34.446 59.428 70.059 120.881 70.671 121.92 1.57 2.709 4.69 4.454 7.922 4.454 5.116 0 9.275-4.164 9.275-9.284V320.378H775.58v174.044s-80.42-138.427-83.03-142.875c-11.736-20.068-34.004-32.745-57.689-32.745-37.117 0-67.214 30.108-67.214 67.225v108.395s-80.421-138.427-83.03-142.875c-11.737-20.068-34.004-32.745-57.695-32.745-37.11 0-67.208 30.108-67.208 67.225v178.115c.017 6.483-4.859 12.13-11.944 12.146h-68.455c-42.063 0-76.17-34.102-76.17-76.176 0-42.068 34.107-76.165 76.17-76.165h57.333v-43.156h-57.815c-65.797 0-119.316 53.53-119.316 119.327"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#fff;fill-rule:nonzero;opacity:1" transform="translate(-81 -298)" d="M836.002 320.375V612.76c0 14.641-11.917 26.552-26.552 26.552-9.383 0-18.126-4.984-22.826-13.005-.563-.963-34.627-59.74-70.688-121.98-34.446-59.423-70.058-120.876-70.671-121.915-1.57-2.708-4.69-4.46-7.923-4.46-5.12 0-9.273 4.17-9.273 9.285v225.523c0 14.641-11.917 26.552-26.552 26.552-9.383 0-18.126-4.984-22.826-13.005-.564-.957-34.65-59.74-70.743-121.975-34.468-59.44-70.113-120.908-70.715-121.92-1.587-2.708-4.694-4.46-7.922-4.46-5.121 0-9.29 4.17-9.29 9.285V608.16c0 15.205-13.356 28.538-28.577 28.538H278.836c-75.306 0-136.578-61.272-136.578-136.583 0-75.317 61.272-136.589 136.578-136.589h57.814v-43.151h-57.765c-99.27 0-179.734 80.47-179.734 179.74 0 99.27 80.465 179.74 179.734 179.74h113.692c43.064.027 70.754-25.212 70.7-71.755V505.586s81 139.401 83.025 142.87c11.746 20.068 34.014 32.75 57.699 32.75 37.116 0 67.214-30.113 67.214-67.225V505.586s80.415 138.422 83.025 142.87c11.741 20.068 34.01 32.75 57.694 32.75 37.116 0 67.214-30.113 67.214-67.225V320.375h-43.146z"/></g></svg>',
      "friendlyName": 'CNN',
      "className": "cnnButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.cnn.mobile.fire.tv",
          "androidName": "com.cnn.mobile.fire.tv",
          "adbLaunchCommand": "adb shell am start -n com.cnn.mobile.fire.tv/com.cnnplusrn.MainActivity",
      },
      "apple-tv": {
          "appName": "CNN",
      },
      "chromecast": {
          "appName": "com.cnn.mobile.android.tv",
          "androidName": "com.cnn.mobile.android.tv",
          "adbLaunchCommand": "adb shell am start -n com.cnn.mobile.android.tv/com.cnnplusrn.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.cnn.mobile.android.tv",
          "androidName": "com.cnn.mobile.android.tv",
          "adbLaunchCommand": "adb shell am start -n com.cnn.mobile.android.tv/com.cnnplusrn.MainActivity",
      },
      "xiaomi": {
          "appName": "com.cnn.mobile.android.tv",
          "androidName": "com.cnn.mobile.android.tv",
          "adbLaunchCommand": "adb shell am start -n com.cnn.mobile.android.tv/com.cnnplusrn.MainActivity",
      }, 
   },


  "cosmote-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="351" height="46" viewBox="0 0 351 46" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M322.8 5.9l2 .1c.8 0 1.6.4 2 1.4l6 20.9v.1c.1.1.1.4.4.3.2 0 .2-.2.3-.3L340 6.2c.3-.2.8-.2 1.2-.3h1 6c.5 0 1 0 1.5.2.2 0 .3.1.3.4 0 .2-.1.5-.2.7l-10.5 31.3c-.2.5-.4.9-.7 1.3a3 3 0 0 1-1 .4c-.4.1-.8.2-1.3.2H329c-.4 0-.8-.1-1.2-.2-.6-.2-1-.6-1.3-1.3l-8-24.3c0-.3-.2-.4-.5-.4l-6.5.4v24.5c0 .9-.4 1.3-1.2 1.3h-7.6c-.7 0-1-.4-1-1.2v-6.3-18.1-.4c0-.1-.1-.2-.2-.2h-.5-6.4c-1 0-1.2-.1-1.2-1.2V6.7c0-.2 0-.4.2-.5.2-.2.2-.2.4-.2.5 0 1-.1 1.4-.1" fill="#018be1"/><path d="M181 21.2l-9.6 19-9-19.1c-.2 0-.2.2-.2.3l-2 18.4c-.1.3-.2.5-.5.5-2.6-.1-5.3 0-8 0-.1 0-.2-.1-.3-.1l.3-2 5-30.5c.6-.7 1.4-.9 2.2-1h5.3c.2 0 .4.1.5.3l6.3 15.1c0 .1 0 .1.1.2.1.2.4.2.5-.1l6-14.1c.6-1 1.5-1.4 2.6-1.4h6.2c.3 0 .4.1.4.4l4.8 32.4c.1.1.1.3.1.5s0 .3-.2.2c-.1 0-.3.1-.4.1h-7c-.1 0-.2 0-.3-.1-.2 0-.3-.1-.4-.3 0-.9-.1-1.8-.3-2.6-.1-.4 0-.9-.1-1.3l-.4-2.4-.4-3.3-1-7.6c0-.5-.1-1-.1-1.5h-.2zM102 5.5c1.5 0 2.8.2 4 .5 2 .5 4 1.4 6 2.5 1.2.8 2.3 1.7 3.2 2.8 1.3 1.6 2.4 3.3 3.2 5.3.3.8.5 1.5.7 2.3.6 2.4.6 4.9.1 7.4-.3 1.7-1 3.3-1.6 4.8-1.3 2.5-3 4.5-5.4 6.1l-2.4 1.4c-.8.3-1.6.7-2.4.9-2.2.7-4.5 1-6.8.8l-3.2-.6c-2.2-.6-4.2-1.7-6-3.1a16 16 0 0 1-4.6-5.4c-.5-.9-1-1.9-1.3-2.9a18 18 0 0 1-.8-5.1c0-1.2.1-2.4.3-3.6.4-2 1.2-4 2.3-5.7.7-1.3 1.6-2.4 2.5-3.4 1-1 2.2-1.9 3.5-2.6 1.7-1 3.6-1.7 5.5-2.1 1-.2 2.2-.3 3.2-.3zm0 26.5c1.2 0 2-.1 3-.4 1-.4 2-.9 3-1.7 1.7-1.4 2.6-3.2 3-5.3.3-2 0-4.1-1-5.9-.7-1.4-1.7-2.6-3-3.5-1.2-.8-2.5-1.2-4-1.4-1.2-.1-2.3 0-3.5.3-3 1-5 2.9-5.8 5.8-1 2.6-.7 5.2.7 7.6 1 1.7 2.2 2.9 4 3.7 1 .6 2.4.9 3.6.8z" fill="#13d800"/><path d="M268 19h8.5c.5 0 .6-.1.6.6v6.7c0 .5 0 .5-.6.5H268h-.5c-.1.2.1.3.1.4 1 1.7 2.3 3 4 3.9 2.7 1.4 5.3 1.2 8-.2l2-1.2c.4-.3 1-.4 1.5-.4.6-.1 1 .1 1.5.6 1 1 1.7 2.2 2.2 3.6l.6 1.3c.2.4.1.8-.3 1.2-1.4 1.3-3 2.3-4.7 3.1a19 19 0 0 1-7.4 1.3c-1.5-.1-3-.3-4.3-.7-3.4-1-6.3-2.9-8.6-5.6-1-1.2-2-2.6-2.6-4.1-.5-1.1-1-2.3-1-3.5-.3-1.3-.3-2.8-.3-4.2 0-1.7.4-3.3 1-4.9.3-1.2.8-2.2 1.5-3.3.3-.6.7-1.2 1-1.7.8-1.1 1.6-2 2.7-2.9s2.4-1.7 3.7-2.4c2-.9 4-1.5 6.2-1.6a22 22 0 0 1 5.7.5c1.3.3 2.5.8 3.7 1.4 1 .5 2 1.2 2.8 1.8s1 .7.5 1.7c-.5 1.5-1.2 2.9-2.2 4.1-.3.4-.7.9-1.2 1.1-.3.1-.7.2-1 .1-.8-.2-1.4-.6-2-.9-1.2-.6-2.4-1.2-3.8-1.4-.7 0-1.3-.1-2 0s-1.4.4-2 .6c-1.5.5-2.7 1.5-3.7 2.6-.5.6-.8 1.2-1.2 1.8z" fill="#018be1"/><path d="M121.6 34.3l3.6-4.4c.2-.2.4-.5.7-.6.6-.5 1-.6 2 0 .6.3 1 .7 1.5 1.1 1 .8 2.2 1.5 3.5 2.1 1 .4 2 .5 3 .4.6 0 1.2-.1 1.7-.4 1-.4 1.6-1.5 1.5-2.5 0-.5-.3-1-.6-1.3-.6-.7-1.4-1.2-2-1.7-1.3-.7-2.6-1.4-4-1.9l-2.5-1.3-3-1.9c-1.5-1.2-2.7-2.4-3.4-4.1-.3-.7-.4-1.4-.4-2.1-.1-1.3 0-2.5.5-3.7l1.2-2.1c1.6-2.2 3.8-3.5 6.4-4.1 1.7-.4 3.4-.5 5-.2 1 .1 2 .3 2.8.6 1.2.3 2.3.7 3.4 1.1l4 1.9.7.4c.1.1.2.2.1.4-1 1.6-1.7 3.3-2.6 4.9-.3.5-.7.7-1.2.8-.5 0-1 0-1.5-.3-.8-.3-1.5-.6-2.2-1-1.2-.6-2.4-1-3.6-1.4-.7-.2-1.5-.3-2.3-.1-.7.3-1.2.7-1.4 1.4-.2.6 0 1.2.6 1.7.5.4 1 .7 1.6.9l2.2 1c.8.4 1.7.8 2.5 1.2.3.2.6.3 1 .6 0 .1.2.1.4.2 1.4.6 2.8 1.5 4 2.6l1.5 1.5c.7.8 1.2 1.8 1.6 2.8.7 1.6.7 3.3.4 5-.4 1.6-1 3-2 4.4-1 1.3-2.3 2.3-3.8 3-2.3 1-4.6 1.3-7 1.2-1 0-2-.1-2.8-.3l-2.3-.6c-.4-.2-1-.3-1.4-.5-1.4-.6-2.8-1.4-4-2.3l-2.6-2.1c-.1-.1-.2-.2-.4-.3zM53 23.3c0-1.7.1-3.2.5-4.7.6-2.4 1.8-4.6 3.3-6.5 1.6-2.1 3.6-3.6 6-4.8.5-.2 1-.5 1.5-.7l3-.8c1.6-.3 3.2-.3 4.7-.3.7 0 1.4.1 2 .2.2.1.3.1.6.2 1 .2 1.8.6 2.7.9a20 20 0 0 1 6 4.1c.2.3.2.4 0 .5-1.2 1.2-2.3 2.5-3.5 3.7-.4.4-.7.7-1.2.9-.7.3-1.4.2-2-.1s-1.2-.7-1.7-1c-1.6-.9-3.3-1.2-5-1a9 9 0 0 0-5.6 2.9c-.8.8-1.5 1.9-2 3-.5 1.7-.7 3.4-.3 5.1.4 1.8 1.3 3.3 2.6 4.6 1 .8 2 1.5 3 2 1.2.4 2.5.6 3.8.5 1.2-.1 2.2-.4 3.3-1 .6-.3 1.2-.8 1.8-1.2.4-.2 1-.4 1.4-.5s1 .1 1.4.5l4 4.1c.3.3.3.3 0 .7L82 35.8c-1 1.1-2.3 1.9-3.7 2.6l-2 .9c-2.6 1-5.2 1.3-8 .9-1.3-.2-2.7-.6-4-1-1-.4-2-1-2.8-1.5l-3-2.4c-1.4-1.5-2.6-3.2-3.5-5-.6-1.2-1.3-3.4-1.6-4.8" fill="#13d800"/><path d="M37.4 38.6c-.3.9-.2.1.1-.2.5-1.1.4-1.9.5-3.1 0-1.8-.3-3.5-.8-5.2-.7-2.3-2-4.3-3.4-6.2l-2.4-3.1L20 9.6c-.7-.8-1-1.6-1.4-2.5s-.3-1.8-.3-2.6c.3-1.4 1-2.5 2-3.5C22 0 23.2-.5 25-.5l2.3.1c1.3.1 2.6.4 4 .9a20 20 0 0 1 5.6 3.4c1 1.1 2.3 2.5 3.4 3.9 1 1.6 2 3.3 2.8 5.1.6 1.4 1 2.9 1.4 4.4.5 2.3.5 4.6.4 6.9l-.5 3.1c-.3 1-.5 2-1 3-.5 1.4-1 2.8-2 4.1L39 37.9l-2 1.9c-.2.2-.5.4-.5.3l1-1.5z" fill="#018be1"/><path d="M23 43.5c-2 2.5-1.8 1-4.6 1.5-1.7-.3-3.3-.7-5-1.3-1.4-.5-2.6-1.2-3.7-1.9-2-1.4-4-3.1-5.4-5a34 34 0 0 1-3.1-5.2c-.6-1.3-1-2.6-1.3-4-.5-1.6-.6-3.2-.6-4.9 0-1.4-.1-2.7.1-4.1.2-1.2.4-2.4.8-3.5.2-.7.4-1.4.7-2.1.4-.9.8-1.9 1.4-2.8l2.7-3.8c.6-.7 1.3-1.4 2-2-.1.5-.3 1-.5 1.4-.3.8-.4 1.6-.5 2.4 0 1.3.1 2.6.3 3.9.4 2.1 1.3 4 2.3 5.8l1.2 1.8 2.6 3.2c.4.6 1 1.2 1.4 1.7l10.7 10.5c.3.5.5 1.1.8 1.6.2.3.3.7.3 1.1.3 1.4-.1 2.6-1 3.7" fill="#13d800"/><path d="M200 10.7l1.8-1.6c.8-.5 1.6-1 2.4-1.4.8-.5 1.7-.9 2.6-1.2a16 16 0 0 1 5.3-1c1 0 2.2 0 3.3.2 2 .3 3.6.9 5.3 1.8 2 1 3.8 2.3 5.3 4 .6.8 1.2 1.7 1.7 2.6.8 1.4 1.4 2.9 1.8 4.4.7 2.4.8 4.9.4 7.3l-1 3.2c-.6 1.7-1.5 3.2-2.5 4.6-.7.9-1.4 1.6-2 2.3-1.4 1.2-3 2.3-4.6 2.9-.3-.6-.6-1.2-1-1.7l-.1-.1c-.1-.5-.4-.9-.8-1.2-.2-.2-.4-.3-.3-.5 0-.3-.2-.4-.3-.5-.3-.2-.4-.5-.7-.5v-.2c.2-.3-.1-.4-.2-.6-.1-.4-.6-.5-.6-1-.3-.1-.3-.5-.4-.7l.2-.2c1.8-.5 3.3-1.5 4.4-3.1.8-1.2 1.4-2.5 1.7-3.9.3-1.6.1-3.2-.4-4.8-.1-.3-.3-.7-.5-1-.3-.6-.6-1.2-1-1.7-1-1.5-2.6-2.3-4.3-2.9-1-.4-2-.5-3.2-.4-1.5.1-3 .6-4.3 1.4-1 .7-1.7 1.5-2.4 2.4-.4 0-.6-.3-.7-.5-.2-.3-.2-.7-.7-.7-.1 0-.1-.1-.1-.2.1-.1.1-.2 0-.3-.4-.7-1-1.2-1.3-1.8-.2-.4-.6-.8-.7-1.3-.1 0-.1-.1-.2-.2-.6-.5-1-1.3-1.6-1.9zm47.8 16.8l-.1 12.1c0 .7.1.7-.7.7h-6.5-.4c-.1-.1-.2-.1-.2-.3v-.4-24c0-.5.1-1-.1-1.5-.4-.1-1 0-1.4 0-7.6 0-7.6.1-7.6-.4V9.2c0-1.6.8-2.3 2.4-2.5h.4H254c.4 0 1 .1 1.3.2 1 .2 1.6.8 1.7 2.1v4.7c0 .4 0 .4-.5.4h-8c-.6 0-.6 0-.6.6" fill="#018be1"/><path d="M215 31.7c.1.3.1.7.4.8 0 .5.5.6.7 1 0 .2.3.3.1.5 0 .1.1.2.1.2.3.1.5.4.7.5.2.2.3.3.3.5 0 .3.1.4.3.5.4.4.7.8 1 1.3v.1c.6.5.8 1.1 1 1.7a10 10 0 0 1-2.9 1c-1.5.4-3 .6-4.5.5-1.5 0-3-.2-4.4-.6-.6-.2-1.3-.3-2-.6-1.2-.6-2.4-1.2-3.5-2-2.5-1.8-4.5-4.1-5.8-7-1.3-2.7-1.7-5.6-1.5-8.6.1-.7.1-1.4.2-2 .2-.9.4-1.7.7-2.5.4-.9.8-1.7 1.2-2.6.2-.4.5-.8.7-1.1.4-.5.7-.9 1-1.4l1-1.2c.6.6 1 1.3 1.6 1.9.1 0 .1.1.2.2.1.5.5.8.7 1.2.4.6 1 1.2 1.3 1.8.1.1.1.2.1.4-.1 0 0 .1 0 .1.5 0 .5.5.7.7.1.3.3.5.7.5-1 1.3-1.4 2.7-1.6 4.2-.2 1.8 0 3.6.8 5.2.5 1.1 1.2 2 2 2.8 1.2 1.1 2.7 1.9 4.4 2.2h0c.8.1 1.6.1 2.4.1h0 0c.6 0 1.2-.2 1.7-.3zM12.4 22.2c-.5-.3-.7-.7-1-1.1-.8-1-1.7-2.1-2.4-3.2-.8-1.4-1.5-2.9-2-4.5-.5-1.8-.7-3.6-.6-5.4.1-1.3.4-2.5 1-3.7.3-.6.7-1 1.2-1.4C10 2 11.6 1 13 .4s3-1 4.6-.9c1 .1 2 .3 2.8.8.4.2.4.3.1.6a6 6 0 0 0-2 2.7c-.4.8-.4 1.6-.4 2.4 0 .6.2 1.1.5 1.7.3.7.6 1.4 1.2 2 .2.2.2.4-.1.7l-1.4 1.1a18 18 0 0 0-4.1 5.4c-.4.7-.7 1.5-1 2.2-.2.6-.5 1.2-.6 1.9v.2c-.2.3-.2.6-.2 1 0-.1-.1-.1-.1 0z" fill="#13d800"/><g fill="#018be1"><path d="M36.3 40c-1.3 1.1-3.6 2.5-5.2 3.3-.8.4-2.3 1.1-3 1.2-1.2.3-3.2.8-5 .7-2.7.1 3-3.2 3.2-6.2.3-1.6-.3-3.1-1.2-4.4l-.6-.9c-.1-.2-.1-.4.1-.5.4-.3.7-.7 1-1 1.8-1.5 3.2-3.3 4.3-5.3A103 103 0 0 0 32 22l5.8 12.3c0 1.1-.2 3-.6 4-.2.3-.3.6-.4.9"/><path d="M32 22.1l.8 1.1c.8 1 1.5 2 2.2 3.1.4.6.7 1.2 1 1.9.1.3.3.6.4.9l1 2.7c.5 3.1.2 1.6.3 2.6zm-19.7.1h.2c0 .1 0 .1-.1.1v-.1zM211 31.9h0 0zm2.5.1h0v.1z"/></g></svg>',
      "friendlyName": 'COSMOTE TV',
      "className": "cosmoteTVButton",
      "appName": "gr.cosmote.cosmotetv.androidtv",
      "androidName": "gr.cosmote.cosmotetv.androidtv",
      "adbLaunchCommand": "adb shell am start -n gr.cosmote.cosmotetv.androidtv/dt.ote.poc.presentation.view.tv.TvActivity",
      "deviceFamily": ["chromecast", "nvidia-shield", "xiaomi"],},


  "crave-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 808.7 143.14"><g><path d="M695.89 58.14a101.48 101.48 0 012-15.55c2.48-10.14 6.54-12.39 17.8-14.42a125.62 125.62 0 0121.41-1.58 136.74 136.74 0 0121.9 1.58c18.25 3.15 21.86 7.89 21.86 30zm62.87-56.79a187.56 187.56 0 00-43-.23C693 4.06 680.11 8.79 672.23 27.94c-5.18 12.39-6.76 28.17-6.76 43.27 0 13.75 1.35 28.62 5.86 40.79 7.89 21.41 20.28 26.59 44.39 29.75a163.85 163.85 0 0021.41 1.13 176.13 176.13 0 0022.08-1.35c22.08-2.93 37-9.69 44.39-30.87l-28.39-6.76c-3.15 6.75-7.44 8.1-16.21 10.1-6.54 1.58-14.2 2-21.86 2.25a105.19 105.19 0 01-21.14-1.58c-11.94-2-15.32-4.73-18-16.9a77.47 77.47 0 01-2-16.23h112.11C811 30 804.51 7.44 758.76 1.35zM618.14 2.48l-46.2 111.77L525.75 2.48h-32l56.56 137.69h43.49L650.14 2.48zm-439.21 0v137.69h30V97.58h37.41l27.94 42.59h33.58l-29.3-45.52c19.61 0 33.58-18.7 33.58-44.39 0-27-12.17-47.77-45.07-47.77zm30 26.59h56.79c13.3 0 16.9 10.37 17.35 21.18.23 10.82-4.06 21.86-17.35 21.86H208.9zM0 71.44c0 14.65 1.58 30 6.31 42.14 8.11 21 21.41 25 43.94 27.94a165.46 165.46 0 0021.41 1.35 169 169 0 0021.63-1.35c23.44-2.93 37-9.24 44.85-27.94a56.17 56.17 0 003.61-13.75l-28.4-6.53c-3.35 13.7-7.66 16.45-19.83 18.93A114.46 114.46 0 0171.66 114a121.35 121.35 0 01-21.41-2c-11-2-13.29-4.73-16-14-2-7-2.93-16.9-2.93-26.59s.9-19.61 2.93-26.59c2.71-9.24 5-11.94 16-14a121.3 121.3 0 0121.41-2 114.5 114.5 0 0121.86 1.8c12.17 2.48 16.48 5.18 19.83 18.93l28.4-6.55a56.16 56.16 0 00-3.61-13.75c-7.89-18.7-21.41-25-44.85-27.94A169 169 0 0071.66 0a165.46 165.46 0 00-21.41 1.35C27.72 4.28 14.42 8.34 6.31 29.3 1.58 41.46 0 56.79 0 71.44zm473-24.79C473 9.69 447.1 0 405.41 0c-18.93 0-38.08 2.7-52.06 6.54l7.44 25.24a180.62 180.62 0 0144.62-5c27.49.68 39.89 2 38.08 27.94A318.45 318.45 0 00405.41 53c-44.62.9-67.41 6.31-67.41 42.37 0 37.63 22.76 47.77 67.38 47.77 18.48 0 41.69-.45 67.6-7.89zm-29.52 33.8v33.13a228.51 228.51 0 01-38.08 2.48c-28.62-.45-38.08-.68-38.08-20.73 0-16.68 13.3-17.35 38.08-17.35a300.36 300.36 0 0138.09 2.47z" fill="#00c1f3"></path></g></svg>',
      "friendlyName": 'Crave TV (Canada)',
      "appName": "ca.bellmedia.cravetv",
      "className": "craveTVButton",
      "androidName": "ca.bellmedia.cravetv",
      "adbLaunchCommand": "adb shell am start -n ca.bellmedia.cravetv/axis.androidtv.sdk.app.MainActivity",
      "deviceFamily": ["amazon-fire"],},


  "crunchyroll": {
      "button": '<svg version="1.1" id="cr_close" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 615 116.9" xml:space="preserve"><style>.crunchyroll{fill:#f47521}</style><path class="crunchyroll" d="M601.3 90.5V21.7h12.1v68.9h-12.1zM575.2 90.5V21.7h12.1v68.9h-12.1zM565 65.7c0 16.6-8.3 25.5-23.6 25.5s-23.6-8.9-23.6-25.5 8.3-25.5 23.6-25.5S565 49.1 565 65.7zm-11.5 0c0-13.4-4.5-15.9-11.5-15.9s-11.5 2.5-11.5 15.9S535 81.6 542 81.6c6.4 0 11.5-2.5 11.5-15.9zM512.7 40.2v10.2c-6.4 0-14 0-14 3.2v37h-12.1v-44c.6-7.7 26.1-6.4 26.1-6.4zM440 110.3c9-22.3 8.3-20.4 9-22.3l-17.9-47.2h12.8l11.5 34.4 10.8-34.4H479l-19.1 51-7 18.5H440zM424.1 60.6v30H412V59.9c0-4.5-1.3-8.9-12.1-8.9-2.8.1-5.6.5-8.3 1.3v38.3h-12.1V21.7h12.1v19.8c3.2-1.4 6.7-2 10.2-1.9 14.6.6 22.3 8.2 22.3 21zM357.2 81c4.4-.2 8.7-1 12.8-2.6v10.2c-4.7 1.9-9.6 2.7-14.7 2.5-15.3 0-23.6-8.9-23.6-25.5s8.3-26.1 23.6-26.1c5 .2 9.9 1 14.7 2.6v10.2c-4.1-1.6-8.4-2.4-12.8-2.5-8.3 0-13.4 2.5-13.4 15.3 0 13.3 5.1 15.9 13.4 15.9zM324 59.3v31.2h-11.5V59.3c0-4.5 0-8.9-10.2-8.9-3.2 0-9.6.6-9.6 2.5v37.6h-11.5V49.1c0-8.3 10.2-9.6 22.9-9.6 12.9.7 19.9 5.8 19.9 19.8zM269.8 40.8v27.4c0 14.7-5.1 23.6-22.3 23.6s-21.7-8.9-21.7-23.6V40.8h11.5v28.7c0 8.3 3.2 10.8 10.2 10.8 7 0 10.2-2.5 10.2-10.8V40.8h12.1zM216.3 40.2v10.2c-6.4 0-14 0-14 3.2v37h-12.1v-44c.6-7.7 26.1-6.4 26.1-6.4zM166.5 81c4.2-.1 8.3-1 12.1-2.6v10.2c-4.7 1.9-9.6 2.7-14.7 2.5-15.3 0-23.6-8.9-23.6-25.5s8.3-26.1 23.6-26.1c5 .2 9.9 1 14.7 2.6v10.2c-3.9-1.5-8-2.4-12.1-2.5-8.3 0-13.4 2.5-13.4 15.3-.6 13.3 5.2 15.9 13.4 15.9zM15.5 65.7c0-27.9 22.6-50.4 50.5-50.4 26.3.1 48.1 20.3 50.2 46.5v-3.2c0-31.7-25.7-57.4-57.4-57.4S1.4 27 1.4 58.7 27.1 116 58.8 116h3.8c-26.4-1.8-47-23.8-47.1-50.3z"/><path class="crunchyroll" d="M93.2 68.2C83 68.2 74.8 60 74.7 49.9c0-7.8 4.8-14.7 12.1-17.4-5.7-3-12-4.6-18.5-4.5-22.2 0-40.2 18-40.2 40.2s18 40.2 40.2 40.2 40.2-18 40.2-40.2c.1-2.6-.1-5.1-.6-7.7-3.1 5.1-8.8 8-14.7 7.7z"/></svg>',
      "button-round": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1056" height="816" viewBox="0 0 1056 816" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><g stroke="none" fill="#f78b24" fill-rule="nonzero"><path d="M602 766.3c0-.2 2.6-6.7 6-14.4l5.8-15.7c0-1-5.3-15.6-11.7-32.6l-11.8-32c0-.8 3-1.3 9.2-1.3h9.2l7.5 23.3c4 12.7 7.6 22.7 7.8 22a9612 9612 0 0 0 7.3-23l7-21.8 9.6-.4 9.6.2a5343 5343 0 0 1-33.4 88.5l-3 7-9.5.3c-5.2.2-9.5.1-9.5-.2zM209 741a29 29 0 0 1-20.8-16c-2.2-4-2.5-6.6-2.5-19.5 0-16 1.3-20.3 8.4-27.5 7.8-8 23.8-10.6 39-6.8l6.2 1.6v7.7 7.6l-3.3-.8a62 62 0 0 0-19.9-1.7c-9 1.2-13.3 7.7-13.3 20 0 12 4 18.2 12.7 20 4.2 1 10 .4 20.6-2l3.3-.7-.4 7.4c-.3 7.4-.3 7.4-4.7 9A66 66 0 0 1 209 741zm116.2 0c-10-1.8-15.7-6.2-19.5-14.8-1.7-4-2.2-9.2-2.5-30.3l-.5-25.6h9 9l.3 24c.4 23.4.5 24.2 3.2 27 5.3 5.8 19 4.8 22-1.6 1-2 1.5-9.8 1.6-26v-23.3h8.8 8.8v24c0 27.4-1 33.7-7.5 40-6 6-20.3 9-32.6 6.8zm153.8.5l-5.4-1.2c-6.8-1-14.4-7-18.2-13.8-3-5.5-3.5-7.6-4-18.6-.3-10.4 0-13.4 2-19 5-13 14.5-19.2 30-19.3a84 84 0 0 1 15.6 1.5l6.2 1.6v7.7 7.6l-3.3-.8a59 59 0 0 0-19.9-1.7c-9 1.2-13.3 7.7-13.3 20 0 19 9.7 24.2 33.3 18.3l3.2-1v7.7 7.6l-5.5 1.4c-6 1.5-19 2.7-21 2zm264.8-71.8c-8 0-10.5.5-16.2 3.2-12 6-16.4 15-16.4 32.6 0 20.6 7.7 32 24 35.3a57 57 0 0 0 24.5-1.9c11.5-4.8 17.7-16.4 17.7-33.4 0-13.6-2.8-21.5-10-28-6.4-6-12-7.8-23.8-7.8zm0 14.7l2 .2c9.8 1 14 7 14 21 0 8.6-1.7 14.3-5.3 17.6-4 4-14 4.6-19 1.4-4.7-3-6.3-7.8-6.3-19.2 0-15 4.2-21 14.6-21z"/><use xlink:href="#UAU8"/><path d="M379.5 710c0-32 .5-34.6 6.4-37.4 9.7-4.4 34.4-4.6 42.7-.4 11 5.7 12 9.5 12 41.4v26h-8.2-8.3v-22.2l-1.2-25.7c-1.6-4.6-5.4-6.2-14.2-6.2-12.3 0-11.6-1.5-11.6 28.3v25.8h-9-8.8V710zm139-18v-47.7h9.4 9.4v13.4V671l4.5-1c6.3-1.5 11.8-1.3 18.8.5a26 26 0 0 1 17.6 13c3.2 6 3.3 6.2 3.7 31l.4 25h-9-9v-21l-1.2-25.3c-1.6-5.7-6-8-15-8-11.6 0-10.8-2.2-10.8 27.8v26.4h-9.4-9.4V692z"/><use xlink:href="#UAU8" x="413.2"/><path d="M790.4 692v-47.7h9.4 9.4V692v47.7h-9.4-9.4V692zm36.6 0v-47.7h8.8 9V692v47.7h-9-8.8V692zM488.4 588l-43.4-7.5a281 281 0 0 1-182.6-147.7 257 257 0 0 1-27.7-121.2c0-45.7 8.3-82 27.5-121.3a268 268 0 0 1 54.5-75.6A280 280 0 0 1 479.6 36c20.6-2.7 64.3-1.8 83.6 1.7 40 7.3 76 21.6 108.3 43A276 276 0 0 1 793.3 272c2.4 16.8 3.8 51.8 2.2 54.7-1 1.6-1.4-.1-2-7-3-34.2-17.7-75.6-38-106.5-62-94-178-134-285-98.3a244 244 0 0 0-162 182.3c-8.5 42-6 83 7.6 123.5a246 246 0 0 0 153.3 153.4 261 261 0 0 0 53.5 12c17.3 1.4 13 2.7-8.4 2.5l-26-.6zm59.4-34.5c-89.5-6.5-163.6-73.2-179-161.2-2.8-16-3.4-46-1-60.6A196 196 0 0 1 536 165.5c17.7-2.5 49.4-1.6 66.5 2a209 209 0 0 1 44.1 14.3l10 4.7-9.4 4.4c-34 16-55 53.6-50 89.6a89 89 0 0 0 65.6 74.5 97 97 0 0 0 45.4 0 90 90 0 0 0 41.6-24.7c4-4 7.6-7 8-6.5s1.2 6.2 2 12.6a238 238 0 0 1-2.4 60.9 195 195 0 0 1-74.8 117.8c-37 28-86 42-134.8 38.5z"/></g><defs ><path id="UAU8" d="M255 707l.3-32.6 6.2-2c3.4-1 11.5-2.4 18-2.8l11.7-.8v7.7 7.8l-6.7.7-9.5 1.3-2.6.6v26.4 26.5h-9-8.8l.3-32.7z"/></defs></svg>',
      "friendlyName": 'Crunchyroll',
      "className": "crunchyrollButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.crunchyroll.crunchyroid",
          "androidName": "com.crunchyroll.crunchyroid",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n com.crunchyroll.crunchyroid/.main.ui.MainActivity",
      },
      "apple-tv": {
          "appName": "Crunchyroll",
      },
      "chromecast": {
          "appName": "com.crunchyroll.crunchyroid",
          "androidName": "com.crunchyroll.crunchyroid",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n com.crunchyroll.crunchyroid/.main.ui.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.crunchyroll.crunchyroid",
          "androidName": "com.crunchyroll.crunchyroid",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n com.crunchyroll.crunchyroid/.main.ui.MainActivity",
      },
      "xiaomi": {
          "appName": "com.crunchyroll.crunchyroid",
          "androidName": "com.crunchyroll.crunchyroid",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n com.crunchyroll.crunchyroid/.main.ui.MainActivity",
      }, 
   },


  "curiosity-stream": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305.319 104.94" fill="none" width="523.831" height="179.897"><path fill-rule="evenodd" clip-rule="evenodd" d="M292.974 57.879V18.687h12.552v39.192c0 7.524-4.878 15.126-12.552 17.595v10.557H280.42V75.48A18.753 18.753 0 0 1 268 57.879V18.687h12.42v39.192c0 3.186 2.898 6.171 6.345 6.171 3.45 0 6.21-2.985 6.21-6.174zm-6.186 47.061c-3.663 0-6.633-3.075-6.633-6.873 0-3.801 2.97-6.873 6.63-6.873 3.666 0 6.633 3.072 6.633 6.87 0 3.801-2.97 6.873-6.63 6.873z" fill="url(&quot;#CSa&quot;)" style="fill:url(#CSa);stroke-width:3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.693 75.117c-10.335 0-18.735-8.361-18.735-18.639V19.05C-.042 8.775 8.361.27 18.693.27 29.02.27 37.42 8.775 37.42 19.05H24.89c0-3.429-2.755-6.3-6.199-6.3s-6.336 2.871-6.336 6.3v37.428c0 3.426 2.892 6.162 6.336 6.162a6.15 6.15 0 0 0 6.198-6.162h12.528c0 10.278-8.4 18.639-18.726 18.639zm43.11.246c-10.467 0-18.87-7.551-18.87-16.971V19.008h12.54v39.384c0 3.099 2.748 5.706 6.33 5.706 3.441 0 6.198-2.607 6.198-5.706V19.008h12.531v39.384c0 9.42-8.4 16.971-18.729 16.971zm53.85-.456h12.4V19.053h-12.4V74.91zM98.364 22.518V19.05h-12.39v55.86h12.39l-.06-36.498c-.02-7.686 12.66-8.268 12.66-8.268V18.969s-8.973.858-12.6 3.549zm54.477 7.698c-3.438 0-6.198 2.49-6.198 5.586v22.563c0 3.105 2.76 5.718 6.198 5.718 3.447 0 6.192-2.613 6.192-5.718v-22.56c0-3.099-2.745-5.589-6.192-5.589zm0 45.147c-10.326 0-18.726-7.56-18.726-16.998v-22.56c0-9.303 8.4-16.869 18.726-16.869 10.332 0 18.735 7.566 18.735 16.866v22.563c0 9.438-8.403 16.998-18.735 16.998zm43.107-33.732c10.332 0 18.732 7.566 18.732 16.869 0 9.42-8.4 16.992-18.732 16.992-10.47 0-18.867-7.572-18.867-16.992h12.537c0 3.228 2.754 5.7 6.33 5.7 3.45 0 6.195-2.472 6.195-5.7 0-3.099-2.748-5.58-6.33-5.58-10.332 0-18.732-7.572-18.732-16.869 0-9.426 8.4-16.992 18.867-16.992 10.332 0 18.732 7.566 18.732 16.992h-12.537c0-3.225-2.748-5.7-6.195-5.7-3.576 0-6.33 2.475-6.33 5.7 0 3.099 2.754 5.58 6.33 5.58zm23.553 33.276h12.402V18.999h-12.402V74.91zM256.554 62.4h6.204v12.501h-6.2c-10.333 0-18.727-8.385-18.727-18.696V0h12.396v18.999l12.531.018v12.177h-12.53v25.011c0 3.441 2.894 6.192 6.33 6.192zM.915 100.551h2.211c.156 1.212.657 2.223 2.748 2.223 1.365 0 2.331-.741 2.331-1.854 0-1.11-.57-1.533-2.574-1.854-2.955-.387-4.353-1.263-4.353-3.522 0-1.974 1.728-3.456 4.302-3.456 2.661 0 4.248 1.179 4.491 3.489H7.965c-.225-1.263-.969-1.803-2.385-1.803-1.4 0-2.127.657-2.127 1.584 0 .978.417 1.467 2.56 1.77 2.9.39 4.403 1.197 4.403 3.609 0 2.088-1.815 3.723-4.542 3.723-3.369 0-4.788-1.635-4.959-3.909zm24.813-6.54h-3.444v-1.77h9.192v1.77h-3.435v10.281h-2.313V94.008zm22.701 3.807c1.54 0 2.352-.639 2.352-1.92v-.069c0-1.38-.882-1.854-2.352-1.854h-1.848v3.843zm-4.146-5.58h4.146c2.712 0 4.614 1.08 4.614 3.54v.069c0 1.89-1.209 2.85-2.748 3.237l3.474 5.208h-2.49l-3.228-4.872h-1.47v4.872h-2.298V92.241zm22.272.003h7.722v1.77h-5.424v3.3h4.353V99h-4.353v3.522h5.718v1.77h-8.016zm23.757 7.431h3.645l-1.812-5.595-1.83 5.595zm.468-7.431h3.006l4.077 12.051h-2.385l-.984-2.982h-4.716l-.969 2.982h-2.16zm19.923 0h3.075l3.246 8.226 3.18-8.226h3.042v12.051h-2.298V95.19l-3.68 9.102h-.745l-3.75-9.102v9.102h-2.07z" fill="#fff" style="stroke-width:3"/><defs><linearGradient id="CSa" x1="85.307" y1="15.516" x2="104.187" y2="28.231" gradientUnits="userSpaceOnUse" gradientTransform="matrix(3 0 0 3 -.042 0)"><stop stop-color="#ECC334"/><stop offset="1" stop-color="#EB8B4C"/></linearGradient></defs></svg>',
      "friendlyName": "Curiosity Stream",
      "className": "curiosityStreamButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.curiosity.curiositystream",
          "androidName": "com.curiosity.curiositystream",
          "adbLaunchCommand": "adb shell am start -n com.curiosity.curiositystream/com.curiosity.activities.MainActivity",
      },
      "apple-tv": {
          "appName": "CuriosityStream",
      },
      "chromecast": {
          "appName": "com.curiosity.curiositystream.androidtv",
          "androidName": "com.curiosity.curiositystream.androidtv",
          "adbLaunchCommand": "adb shell am start -n com.curiosity.curiositystream.androidtv/com.curiosity.activities.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.curiosity.curiositystream.androidtv",
          "androidName": "com.curiosity.curiositystream.androidtv",
          "adbLaunchCommand": "adb shell am start -n com.curiosity.curiositystream.androidtv/com.curiosity.activities.MainActivity",
      },
      "xiaomi": {
          "appName": "com.curiosity.curiositystream.androidtv",
          "androidName": "com.curiosity.curiositystream.androidtv",
          "adbLaunchCommand": "adb shell am start -n com.curiosity.curiositystream.androidtv/com.curiosity.activities.MainActivity",
      },
  },

  "cyberghost": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.969 34.024" width="148.969" height="34.024"><path d="M34.024 17.012a17.012 17.012 0 1 0-17.012 17.012 17.025 17.025 0 0 0 17.012-17.012z" style="fill:#fc0"/><path d="M45.381 28.721a8.407 8.407 0 1 0-16.814 0c0 4.65-1.956 13.043 2.694 13.043 20.698-.001 14.12-8.393 14.12-13.043zm-10.264 4.848C33.388 33.569 32 31.613 32 29.2s1.389-4.366 3.119-4.366 3.119 1.956 3.119 4.366-1.419 4.369-3.121 4.369zm7.23-1.446c-1.361 0-2.467-1.559-2.467-3.459s1.106-3.459 2.467-3.459 2.467 1.559 2.467 3.459c0 1.928-1.106 3.459-2.467 3.459z" transform="translate(-20.175 -14.544)" style="fill:#323232"/><path d="M46.613 25.744c-5.387 0-6.635-3.317-6.72-6.1-.226-5.78 2.836-11.989 10.038-11.989a13.355 13.355 0 0 1 3.487.425l-.652 2.609a10.68 10.68 0 0 0-3.119-.482c-4.678 0-6.606 4.395-6.465 8.761.085 2.807 1.531 4.168 4.366 4.168a17.848 17.848 0 0 0 3.431-.369 10.72 10.72 0 0 0 1.73-.6 18.189 18.189 0 0 1 .4 2.41 10.145 10.145 0 0 1-1.73.6 24.91 24.91 0 0 1-4.763.567z" style="fill:#fff"/><path d="M55.998 29.289a6.016 6.016 0 0 1-4.451 2.041 8.046 8.046 0 0 1-1.7-.17l.4-2.523a4.016 4.016 0 0 0 1.418.227 2.917 2.917 0 0 0 2.1-.936 3.752 3.752 0 0 0 .964-2.92 44.142 44.142 0 0 0-2.134-10.746h3.2a36.329 36.329 0 0 1 1.418 8.137 5.538 5.538 0 0 1-.085.964h.057a68.91 68.91 0 0 0 3.828-9.045l2.949-.028c-2.804 8.053-5.384 12.306-7.964 14.999z" style="fill:#fff"/><path d="M66.943 25.829a17.979 17.979 0 0 1-4.055-.425L65.1 11.171l.028-.057a30.578 30.578 0 0 0-1.928-.227l.283-1.843a33.848 33.848 0 0 1 4.877-.2l-.766 4.877a24.8 24.8 0 0 1-1.106 4.111h.057c1.077-2.268 2.637-3.884 4.65-3.884 1.73 0 2.722 1.134 2.807 3.544.114 4.368-2.069 8.337-7.059 8.337zm3.145-9.328c-1.644 0-3.516 3.743-3.884 6.1l-.142.766a5.787 5.787 0 0 0 1.276.17c2.637 0 3.743-3.062 3.658-5.444-.027-1.11-.339-1.592-.908-1.592zM77.319 20.982a4.852 4.852 0 0 0-.028.907c.057 1.3.567 1.7 2.155 1.7a8.751 8.751 0 0 0 3.289-.68l.822-.34-.454 2.467a13.55 13.55 0 0 1-4.508.822c-2.892 0-4.083-1.333-4.168-3.856-.17-4.763 2.608-8 6.153-8 2.807 0 3.743 1.389 3.8 2.779.056 2.726-2.609 4.059-7.061 4.201zm2.977-4.82c-1.5 0-2.382 1.361-2.75 2.864 2.637-.085 4-.652 3.941-1.843 0-.653-.453-1.021-1.191-1.021z" style="fill:#fff"/><path d="M91.609 16.866c-2.013-.766-3.856 2.637-4.423 6.266l-.369 2.467h-2.863s1.219-7.542 1.389-8.676a2.846 2.846 0 0 0-.851-2.5l3.969-.34a26.12 26.12 0 0 1-.879 3.544h.057c1.134-2.438 2.325-4.111 4.48-3.658zM101.335 25.773c-4.735 0-7.4-2.382-7.542-6.663-.227-6.72 4.395-11.568 11.029-11.568a19.2 19.2 0 0 1 4.905.624l-.766 2.75a13.269 13.269 0 0 0-4.423-.822c-4.508 0-7.769 3.686-7.6 8.563.085 2.864 1.928 4.565 4.933 4.565a9.791 9.791 0 0 0 2.694-.369l.17-.057.964-6.294h2.835l-1.276 8.279a19.375 19.375 0 0 1-5.926.992zM120.165 25.631h-2.864l1.134-7.145c.2-1.389-.028-1.956-.766-1.956-1.531 0-3.459 3.573-3.884 6.238l-.454 2.892h-2.866l2.24-14.432.028-.057a30.578 30.578 0 0 0-1.928-.227l.255-1.843a34.023 34.023 0 0 1 4.877-.2l-.737 4.82a23.735 23.735 0 0 1-1.077 4.055l.057.028c.964-2.041 2.467-3.8 4.65-3.8 2.212 0 2.92 1.559 2.552 3.771zM126.484 25.859c-3.176 0-4.508-1.5-4.593-4.083-.17-4.763 2.949-7.769 6.578-7.769 3.261 0 4.537 1.73 4.622 4.14.17 4.706-3.034 7.712-6.607 7.712zm1.645-9.357c-2.127 0-3.317 2.552-3.232 4.82.057 1.248.567 2.013 1.9 2.013 2.041 0 3.374-2.268 3.289-4.82-.057-1.308-.624-2.008-1.957-2.008zM148.6 16.502h-2.694l-.794 5.132c-.2 1.361 0 1.73.936 1.73a5.106 5.106 0 0 0 1.418-.17l-.2 2.325a11.156 11.156 0 0 1-2.325.312c-2.438 0-3.176-1.162-2.75-3.884l.851-5.444h-1.814l.369-2.268h1.815l.539-3.516 2.949-.6-.624 4.111h2.694z" style="fill:#fff"/><path d="M138.821 16.134a6.435 6.435 0 0 1 1.786.227l.369-2.155a11.8 11.8 0 0 0-2.126-.2c-3.261 0-4.82 1.616-4.763 3.686.085 2.694 3.005 3.034 3.062 4.565a1.1 1.1 0 0 1-.68 1.077h-.028c-.085.028-.2.085-.284.113a4.54 4.54 0 0 1-3.374-.312 5.388 5.388 0 0 1-1.758 2.041 13.048 13.048 0 0 0 4.054.68c3.544.028 5.132-1.985 5.075-3.884-.085-2.523-3.062-3.176-3.119-4.593-.003-.707.592-1.245 1.786-1.245z"style="fill:#fff" /></svg>',
      "friendlyName": 'CyberGhost VPN',
      "className": "cyberghostButton",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.cyberghostvpn.amazon",
          "androidName": "com.cyberghostvpn.amazon",
          "adbLaunchCommand": "adb shell am start -n com.cyberghostvpn.amazon/de.mobileconcepts.cyberghost.view.app.AppActivity",
      },
      "chromecast": {
          "appName": "de.mobileconcepts.cyberghost",
          "androidName": "de.mobileconcepts.cyberghost",
          "adbLaunchCommand": "adb shell am start -n de.mobileconcepts.cyberghost/.view.app.AppActivity",
      },
      "nvidia-shield": {
          "appName": "de.mobileconcepts.cyberghost",
          "androidName": "de.mobileconcepts.cyberghost",
          "adbLaunchCommand": "adb shell am start -n de.mobileconcepts.cyberghost/.view.app.AppActivity",
      },
      "xiaomi": {
          "appName": "de.mobileconcepts.cyberghost",
          "androidName": "de.mobileconcepts.cyberghost",
          "adbLaunchCommand": "adb shell am start -n de.mobileconcepts.cyberghost/.view.app.AppActivity",
      },
   },


  "daily-wire": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1054" height="103" viewBox="0 0 1054 103" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M994.6 1h18.4v59h-18.4z" opacity=".5"/><g fill="#d81c24"><path d="M1013 41.7h-18.4v59h18.4z"/><path d="M994.6 60V41.7h59L1048 60h-53.4z" fill-rule="nonzero"/></g><path d="M1013 41.7V60h-59l6-18.4h53z" opacity=".5" fill-rule="nonzero"/><g fill="#bcbebf"><path d="M70 50.4c0-10.8-4.8-20.3-13.2-26-5.8-4-14.3-6.2-24-6.2l-9 .5v65c0 .5.3.7.7.7a69 69 0 0 0 8 .4c8.7 0 17.3-2.2 23.6-6.6a33 33 0 0 0 14-27.7v-.1zm22.8-.5a48 48 0 0 1-23.4 42.3C59 99 45 102 29 102c-6 0-12.6-.1-17.3-.2L0 101.3v-.6c2-1.2 2-6 2-43v-14l-2-40V2.2c3-.1 7.6-.5 13.5-.6L31 1.2c16.3 0 28.8 2.8 38.4 8C85.8 18 92.8 34 92.8 49.7v.2zm73.8 16.7l-.1-.4L155 38h-.1a385 385 0 0 1-12.1 28.2l-.1.4h24zM136 81.8c-6 13-8.4 18.3-7 19v.8h-25.6v-.8c1.6-.8 4.4-6 22.8-43.5l28-57.4h3.2L185 57.5l22.3 43.4v.8h-27.5v-.8c1.5-.8-1-6-6.7-19h-37zm122.5-24.3c0 37.3 0 42 2 43.4v.8h-25.8v-1c2-1.4 2-6 2-43.2v-14l-2-40.7v-1h25.6v1c-2 1.3-2 6-2 40.7v14zm45-14l-2-40.7v-1H327v1c-2 1.4-2 6-2 40.7v41c0 1 .3 1 1.3 1H350a41 41 0 0 0 6.9-.4c1.6-.2 3.5-.7 4-1.2h1l-.3 18h-60v-1c2-1 2-6 2-43.2v-14zm126 17V64c0 30.6 0 36 2 37v.8h-25.8v-1c2-1 2-6.3 2-36.6v-2.7l-10.3-16.3C374 8.5 371.2 3.6 369.2 2.6v-.8h28v.8c-1.6 1 1.7 6.2 10 19.6l11.7 20h.3C422 37 426.5 30 431 22.6c8.4-13.7 11.8-19.3 10.3-20v-.8h26v.8c-1.7 1-4.5 5.7-28 42.6l-9.7 15.2zM615 103h-3c-27.2-51.6-30.6-59.3-33.3-65.8h-.1c-2.6 6.6-6.3 14.5-34 65.8h-3L521 41 506.7 2V1h26v1c-1.8 1 0 6 8 30.8l7.5 25.6h.5a425 425 0 0 1 12.2-25.7l17-30.5h3L598 33l12 24.8h.3l7-24.3L625 2V1h24.3v1c-1.8 1-3.4 6-14 39L615 103zm93-46.2c0 37.3 0 42 2 43.4v.8h-26v-1c2-1.4 2-6 2-43.2v-14L684 2V1h25.6v1c-2 1.3-2 6-2 40.7v14zm91-25.5c0-9.2-6.8-14.6-17.7-14.6l-5.8.3v30.4c1 .2 2.7.2 4.2.2 4 0 8-1 11-2.6 4-2 8.3-6.4 8.3-13.6v-.1zm-44.2 11.4L753 2v-.8l10.6-.3a303 303 0 0 1 13.7-.3c8.2 0 15.4.6 21.7 2.4 9 2.6 21.4 10 21.4 27 0 12-7 19.5-12.2 23-2.8 2-6 3.7-8.4 4.5v.2L826 90a66 66 0 0 0 9.4 10.1v.8h-21.8c-1.3 0-3.2-.2-4.6-.6l-29.8-39h-4v5c0 27.6.1 33 1.7 33.7v.8h-24v-.8c1.7-.8 1.7-6 1.7-43.4v-14zM911 58.2h-18.8v24.2c0 1.2.2 1.8 1 2.3h24.3c6 0 10-.2 11.2-1.5h.8l-.1 17.8h-60.7v-.8c2-.8 2-6 2-43.4v-14l-2-40.8V1h59.4l-.2 18h-1c-1-1.4-7.5-1.8-16.4-1.8H892v25.2h18.5" fill-rule="nonzero"/><path d="M927.2 42.2h-35.7l.1 16.7H920l7-16.7z" fill-rule="nonzero"/></g></svg>',
      "friendlyName": "Daily Wire",
      "className": "dailyWireButton",
      "appName": "Daily Wire",
      "deviceFamily": ["apple-tv"],
   },


  "dazn": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 32 32" width="32" height="32"><path style="fill:#fff;" d="m19.697 11.052 1.032-3.459 1.052 3.459zm5.131 3.027-2.697-8.172c-.063-.177-.131-.297-.209-.355-.077-.052-.203-.083-.369-.083h-1.495a.613.613 0 0 0-.38.093c-.079.057-.147.172-.199.344l-2.724 8.172c-.036.041-.052.129-.052.255 0 .197.12.297.36.297h1.12c.104 0 .187 0 .249-.011a.268.268 0 0 0 .156-.068.4.4 0 0 0 .1-.151c.031-.068.061-.161.099-.271l.421-1.428h3.079l.432 1.401c.036.12.068.213.104.281a.504.504 0 0 0 .115.161.302.302 0 0 0 .151.073h.005c.057.005.136.011.229.011h1.199c.239 0 .359-.1.359-.297 0-.036 0-.079-.005-.12a1.323 1.323 0 0 0-.052-.14zm-1.323 3.29h-.865c-.224 0-.369.032-.443.095-.072.067-.109.197-.109.396v4.848l-2.547-4.864c-.099-.204-.203-.333-.301-.391-.1-.057-.271-.084-.521-.084h-.797c-.224 0-.369.032-.443.095-.072.067-.109.197-.109.396v8.181c0 .199.037.328.104.391.068.063.215.099.439.099h.875c.224 0 .369-.036.443-.099s.109-.192.109-.391v-4.864l2.547 4.875c.099.208.203.339.303.396.099.057.271.083.52.083h.797c.224 0 .369-.036.443-.099s.109-.192.109-.391V17.86c0-.199-.036-.329-.109-.396-.073-.063-.219-.095-.443-.095zm4.271-.776 2.219 2.219v11.183H2.006V18.812l2.219-2.219a.839.839 0 0 0 0-1.187l-2.219-2.219V2.004h27.989v11.183l-2.224 2.219a.848.848 0 0 0 0 1.187zM32 0H0v14.151L1.849 16 0 17.849V32h32V17.849L30.151 16 32 14.151zM14.229 24.625h-3.615l3.807-5.355a.947.947 0 0 0 .115-.203.686.686 0 0 0 .027-.183v-1.025c0-.199-.036-.329-.109-.396-.073-.063-.224-.095-.448-.095H8.511c-.199 0-.328.037-.385.109-.063.073-.095.224-.095.453v.776c0 .229.032.38.095.453.057.073.187.109.385.109h3.391l-3.756 5.355a.575.575 0 0 0-.14.359v1.057c0 .199.036.328.109.391s.224.099.443.099h5.667c.197 0 .328-.036.391-.109.057-.072.088-.228.088-.457v-.771c0-.235-.031-.387-.088-.459-.063-.073-.193-.109-.391-.109zm-1.688-13.646c0 .349-.02.647-.068.881a1.486 1.486 0 0 1-.228.572.864.864 0 0 1-.428.308 1.957 1.957 0 0 1-.645.088h-1.057V7.271h1.057c.484 0 .839.145 1.052.432s.317.761.317 1.423zm1.844-3.719c-.303-.609-.713-1.063-1.229-1.353-.52-.292-1.172-.437-1.959-.437h-2.64c-.224 0-.369.036-.443.099s-.109.192-.109.391v8.181c0 .199.036.329.109.396.073.063.219.095.443.095h2.959c1.396 0 2.353-.595 2.864-1.787.12-.276.204-.552.251-.828.052-.355.077-.709.072-1.063v-1.74c0-.489-.02-.875-.072-1.156a2.906 2.906 0 0 0-.256-.817l.005.02z"/></svg>',
      "friendlyName": "DAZN",
      "className": "daznButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.dazn",
          "androidName": "com.dazn",
          "adbLaunchCommand": "adb shell am start -n com.dazn/com.dazn.MainActivity",
      },
      "apple-tv": {
          "appName": "DAZN",
      },
      "chromecast": {
          "appName": "com.dazn",
          "androidName": "com.dazn",
          "adbLaunchCommand": "adb shell am start -n com.dazn/com.dazn.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.dazn",
          "androidName": "com.dazn",
          "adbLaunchCommand": "adb shell am start -n com.dazn/com.dazn.MainActivity",
      },
      "xiaomi": {
          "appName": "com.dazn",
          "androidName": "com.dazn",
          "adbLaunchCommand": "adb shell am start -n com.dazn/com.dazn.MainActivity",
      },
   },


  "directv-stream": {
      "button": '<svg viewBox="0 0 409.21 137.9" xmlns="http://www.w3.org/2000/svg"><g><path d="M245.35,1c8.85-2.14,18.89-.83,26.14,5,5.6,4.32,8.8,11.07,10,17.92-5.49-.76-10.95-1.68-16.45-2.31-1.71-3.53-4.59-6.81-8.59-7.61a13,13,0,0,0-14.22,5.78c-5.38-.32-10.76-.52-16.15-.47A26.44,26.44,0,0,1,245.35,1Z"/><path d="m0 58.24q0-28.74 0-57.49h29.56c7.79 0.12 15.92 3.14 20.6 9.63 6.85 8.43 5.25 20 5.6 30.1-5.07 1.45-10.19 2.7-15.26 4.15 0-6.72 0.21-13.48-0.72-20.15-0.68-5.53-5.73-9.8-11.19-10.14-4.44-0.23-8.89 0-13.33-0.09v38.37c-5.13 1.76-10.18 3.71-15.26 5.62z"/><path d="M69.26.75h15V34.06c-5,1.06-10,2.1-15,3.22Z"/><path d="M99.26.75h31.19c8.22,0,16.65,4.22,20.61,11.6,2,3.3,2.6,7.14,3.09,10.89-5.06.68-10.12,1.25-15.19,1.84.14-4.89-3-9.87-8.06-10.59-5.52-.55-11.09-.07-16.63-.23q0,7.21,0,14.43c-5,.8-10,1.68-15,2.53Z"/><path d="m166.51 0.75h50.49q0 6.75 0 13.5h-35.47c0 2.19 0 4.38-0.09 6.57-5 0.33-10 0.75-14.93 1.22z"/><path d="m175.26 92.83c3.33-2.51 6.56-5.14 10-7.55v7h9.23v9.26h-9.25c0.13 7.83-0.24 15.69 0.18 23.52 1.41 3.58 6 2.82 9.07 2.77v9c-4.89 0.38-10.24 0.56-14.55-2.13-3.67-2.6-4.53-7.44-4.65-11.65-0.09-10.05 0-20.16-0.03-30.22z"/><path d="m141.72 94.22c7.77-6.07 20.23-4.74 26.64 2.75-2.44 1.92-4.91 3.8-7.33 5.74-3.27-3.68-10.31-4.93-13.52-0.64-1.31 2.61 0.87 5 3.28 5.73 4.72 2.22 10.07 2.81 14.69 5.25 7.58 4.48 7.23 17.21-0.54 21.31-9.63 5.67-25 3.42-29.71-7.67 2.83-1.59 5.61-3.26 8.47-4.81 2.14 6 9.62 7.93 15 5.34 2.08-1.12 3.05-4 1.46-5.94-5.13-4-12.06-4.09-17.66-7.14-7.03-3.99-7.08-15.23-0.78-19.92z"/><path d="m211.49 98.81c2.54-5.21 8.22-7.54 13.75-7.66v10.77c-3.72-0.06-7.73 0.63-10.47 3.35-2.76 2.4-3.29 6.27-3.31 9.71v21.78h-9.74v-44.51h9.75q0.04 3.28 0.02 6.56z"/><path d="m243.06 91.73c7-1.66 15.07-0.82 20.68 4 6.64 5.39 9.27 14.44 8.07 22.73q-17.69 0-35.38 0c2.21 11.37 19.2 13.92 25.57 4.75q4 2.4 8.12 4.76c-8.79 13.49-31.66 13.05-40.24-0.42-3.6-5.42-4.32-12.34-3.15-18.63a22.43 22.43 0 0 1 16.33-17.22m-3.49 12.35c-1.68 1.77-2.46 4.14-3.25 6.4 8.63 0 17.27 0.06 25.91 0-0.76-2.17-1.38-4.5-3-6.26-4.76-5.77-14.7-5.62-19.66-0.11z"/><path d="m276.52 106c2.93-8.36 11-15 20-15a19.24 19.24 0 0 1 16.28 6.91c-0.05-1.89-0.07-3.77-0.08-5.65h9.77q0 22.26 0 44.52h-9.75v-6c-7.47 9.68-23.44 9-31.25 0.13-6.25-6.49-7.81-16.5-5-24.9m19.51-5.38c-7.32 1.21-12.27 9.06-10.77 16.23 0.88 7.13 8.11 12.52 15.2 11.5 7.9-0.49 13.73-8.73 12.15-16.38-0.88-7.7-9.12-13.17-16.58-11.35z"/><path d="m337.9 97c5.87-8.16 20-8.21 25.24 0.64 4.68-7.15 15.05-8.44 22.24-4.57 5.25 2.9 8.07 9 8.12 14.8v28.86h-9.75q0-12.89 0-25.78c0-2.78-0.24-5.86-2.19-8-3.1-3.62-9.23-3.56-12.65-0.43-2.51 2.42-3.26 6.07-3.18 9.45q0 12.39 0 24.79h-9.73v-25.8c-0.07-3-0.35-6.48-2.69-8.71-3.68-3.38-10.18-2.42-13.07 1.55-1.78 2.33-2.24 5.34-2.25 8.2q0 12.38 0 24.74h-9.76v-44.49q4.89 0 9.79 0-0.02 2.39-0.12 4.75z"/></g><g><path style="fill:#0071ba;" d="m285.26 0.75q27.51 0 55 0v13.49h-20q0 31.5 0 63h-15q0-31.5 0-63h-20q-0.01-6.74 0-13.49z"/><path style="fill:#0071ba;" d="m347.32 0.75h15.63c5.18 16.38 10.2 32.81 15.2 49.25 5.17-16.42 10.15-32.85 15.22-49.25h15.84q-12.57 38.25-25.34 76.51h-11.3q-12.76-38.21-25.25-76.51z"/><path style="fill:#0071ba;" d="m225.12 24.73c5.16 0.08 10.32 0.28 15.47 0.55-0.57 6.9-0.24 13.83-0.34 20.74 0.14 4.74 0.1 10.1 3.33 13.92 4.46 5.51 13.81 5.88 18.66 0.71 1.92-2 2.8-4.63 3.71-7.15h15.56a28.75 28.75 0 0 1-8.58 17c-12.03 11.5-34.18 9.33-43.54-4.5-3.63-5.33-4.34-11.95-4.56-18.23-0.18-7.7-0.12-15.38 0.29-23.04z"/><path style="fill:#0071ba;" d="m166.51 28.09q7.5-0.84 15-1.59v5.25q15.12 0 30.24 0v13.74h-30.25v18h35.47c0.05 4.57 0 9.15 0 13.72q-25.25 0-50.49 0 0.02-24.54 0.03-49.12z"/><path style="fill:#0071ba;" d="m99.25 40.63a522.82 522.82 0 0 1 54.2-10.71 21.37 21.37 0 0 1-13.15 14.42c5.57 11 11.33 21.89 16.94 32.87-5.87 0.08-11.75 0-17.62 0.06-4.87-10.23-10-20.34-14.88-30.53h-10.47q0 15.24 0 30.48h-15c-0.02-12.22 0.01-24.38-0.02-36.59z"/><path style="fill:#0071ba;" d="m69.35 49.83c4.48-2.49 10-3.34 14.91-5.1q0 16.26 0 32.51h-15c0.07-9.13-0.14-18.24 0.09-27.41z"/><path style="fill:#0071ba;" d="M6,77.2a321.42,321.42,0,0,1,49.3-22.88c-1,6.35-3.57,12.72-8.68,16.85-5.3,4.46-12.4,6.11-19.2,6.09C20.29,77.23,13.15,77.3,6,77.2Z"/></g></svg>',
      "friendlyName": "DIRECTV stream",
      "className": "direcTVStreamButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.att.tv",
          "androidName": "com.att.tv",
          "adbLaunchCommand": "adb shell am start -n com.att.tv/com.clientapp.MainActivity",
      },
      "apple-tv": {
          "appName": "DIRECTV",
      },
      "chromecast": {
          "appName": "com.att.tv",
          "androidName": "com.att.tv",
          "adbLaunchCommand": "adb shell am start -n com.att.tv/com.clientapp.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.att.tv",
          "androidName": "com.att.tv",
          "adbLaunchCommand": "adb shell am start -n com.att.tv/com.clientapp.MainActivity",
      },
      "xiaomi": {
          "appName": "com.att.tv",
          "androidName": "com.att.tv",
          "adbLaunchCommand": "adb shell am start -n com.att.tv/com.clientapp.MainActivity",
      },
   },


  "discovery-plus": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 590 97" width="590" height="97" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd" fill="#fff"><path d="M45.5-.5h14v80h-14a32.437 32.437 0 0 0-.5-8c-13.217 12.147-26.217 11.813-39-1-3.26-4.642-5.427-9.642-6.5-15v-11c4.84-18.921 16.84-26.421 36-22.5 3.842 1.668 7.009 4.168 9.5 7.5.5-9.994.666-19.994.5-30zm-21 34c18.03.2 24.197 8.866 18.5 26-5.964 8.435-13.464 10.102-22.5 5-5.687-5.884-7.52-12.884-5.5-21 2.022-4.52 5.189-7.853 9.5-10z"/><path d="M73.5-.5h15v14h-15v-14z"/><path d="M542.5-.5h13v34h34v12h-34v34h-13v-34h-33v-12h33v-34z"/><path d="M115.5 20.5c9.77-1.017 18.603 1.317 26.5 7-.497 3.988-2.33 7.322-5.5 10a42.242 42.242 0 0 0-15.5-5c-3.788-.194-6.288 1.473-7.5 5 .333 1.667 1.333 2.667 3 3 5.988 2.165 11.988 4.332 18 6.5 10.908 6.948 12.741 15.781 5.5 26.5-7.858 6.305-16.691 8.139-26.5 5.5-6.16-1.155-11.494-3.822-16-8 2.342-2.853 4.009-6.02 5-9.5a95.808 95.808 0 0 1 12 5.5c2.843.446 5.676.946 8.5 1.5 6.134-.108 8.301-2.942 6.5-8.5a390.98 390.98 0 0 0-21-8c-9.455-7.64-10.455-16.307-3-26a74.517 74.517 0 0 1 10-5.5z"/><path d="M174.5 20.5c11.961-1.737 21.961 1.763 30 10.5a60.715 60.715 0 0 1-9 9.5c-6.553-7.264-14.22-8.764-23-4.5-9.273 9.594-9.273 19.26 0 29 9.062 4.325 17.062 2.825 24-4.5a97.196 97.196 0 0 1 8 8.5c-7.129 8.938-16.462 12.605-28 11-12.144-2-20.31-8.833-24.5-20.5-3.318-19.376 4.182-32.376 22.5-39z"/><path d="M232.5 20.5c26.029-1.137 38.529 11.197 37.5 37-5.849 16.836-17.682 24.336-35.5 22.5-17.553-4.27-26.053-15.437-25.5-33.5 3.147-12.977 10.98-21.644 23.5-26zm2 13c10.686-1.41 17.853 2.924 21.5 13 1.147 14.853-5.686 21.686-20.5 20.5-10.668-4.986-14.168-13.153-10.5-24.5 2.406-3.908 5.572-6.908 9.5-9z"/><path d="M355.5 20.5c24.261-1.072 35.928 10.595 35 35h-41c3.227 11.35 10.56 15.184 22 11.5a22.2 22.2 0 0 0 8-5.5c3.342 1.827 6.008 4.327 8 7.5-5.696 7.515-13.363 11.348-23 11.5-15.758-.787-25.591-8.787-29.5-24-2.175-17.333 4.658-29.333 20.5-36zm20 24h-26c3.303-11.087 10.303-14.254 21-9.5 2.859 2.553 4.526 5.72 5 9.5z"/><path d="M428.5 20.5h7a57.15 57.15 0 0 1-1 15c-12.603.768-18.77 7.435-18.5 20-.5 7.993-.666 15.993-.5 24h-14v-58h14c-.165 3.35.002 6.683.5 10 3.148-4.99 7.314-8.657 12.5-11z"/><path d="M74.5 21.5h14v58c-4.93.302-9.763-.03-14.5-1a549.151 549.151 0 0 1 .5-57z"/><path d="M272.5 22.5c5.14-.988 10.474-1.321 16-1a433.117 433.117 0 0 0 14 38 2412.82 2412.82 0 0 0 14.5-37c5.114-1.304 10.281-1.304 15.5 0a702.37 702.37 0 0 0-23 57h-14a712.478 712.478 0 0 0-23-57z"/><path d="M464.5 96.5h-12a48.484 48.484 0 0 1-8-4.5 33.074 33.074 0 0 0 4-8.5c4.243-.153 8.576-.32 13-.5 1.51-1.351 2.51-3.018 3-5a2115.172 2115.172 0 0 0-24-56 43.226 43.226 0 0 1 16 .5 914.989 914.989 0 0 1 15.5 39 897.086 897.086 0 0 1 13.5-39 57.124 57.124 0 0 1 15-1 2394.646 2394.646 0 0 1-23.5 62l-5 8c-2.426 1.952-4.926 3.619-7.5 5z"/></svg>',
      "friendlyName": "Discovery+",
      "className": "discoveryPlusButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.discovery.discoveryplus.firetv",
          "androidName": "com.discovery.discoveryplus.firetv",
          "adbLaunchCommand": "adb shell am start -n com.discovery.discoveryplus.firetv/com.discovery.plus.presentation.activities.DeepLinkActivity",
      },
      "apple-tv": {
          "appName": "discovery+",
      },
      "chromecast": {
          "appName": "com.discovery.discoveryplus.androidtv",
          "androidName": "com.discovery.discoveryplus.androidtv",
          "adbLaunchCommand": "adb shell am start -n com.discovery.discoveryplus.androidtv/com.discovery.plus.presentation.activities.DeepLinkActivity",
      },
      "nvidia-shield": {
          "appName": "com.discovery.discoveryplus.androidtv",
          "androidName": "com.discovery.discoveryplus.androidtv",
          "adbLaunchCommand": "adb shell am start -n com.discovery.discoveryplus.androidtv/com.discovery.plus.presentation.activities.DeepLinkActivity",
      },
      "xiaomi": {
          "appName": "com.discovery.discoveryplus.androidtv",
          "androidName": "com.discovery.discoveryplus.androidtv",
          "adbLaunchCommand": "adb shell am start -n com.discovery.discoveryplus.androidtv/com.discovery.plus.presentation.activities.DeepLinkActivity",
      },
   },


  "dish-anywhere": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="373" height="197" viewBox="0 0 373 197" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><g fill="#ec1944"><path d="M208.3 67.7c0-4.2 6-7.2 15-7.2 10.3 0 20 3.7 26 8.8 1.2 1 3 .6 3.6-.6l7.4-14.7c.5-1 .3-2.2-.6-3A60 60 0 0 0 223 39.4c-25 0-38.8 14-38.8 29.8 0 37.2 56.3 24.3 56.3 40.6 0 4.5-5 8.3-16 8.3a54 54 0 0 1-30.8-10.1c-1-1-2.7-.6-3.4.6l-8.4 14c-.5 1-.4 2.2.5 3a65 65 0 0 0 41 13.4c26.4 0 41-13 41-30.4 0-37.4-56.2-25.8-56.2-40.8zM94.7 4.4h-22c-1 0-1.6.7-1.6 1.6v46.3c-7.4-8-17.2-13-28.3-13C19.2 39.4 0 61.7 0 89c0 27.6 19.2 50 43 50 11 0 21-5 28.3-13v9c0 1 .7 1.6 1.6 1.6h22c1 0 1.6-.7 1.6-1.6V6c0-1-.7-1.6-1.6-1.6zM48 118c-12.7 0-23-13-23-29s10.3-29 23-29 23 13 23 28.7v.4c-.1 16-10.4 28.7-23 28.7zm281.2-78.6c-11.6 0-20.5 4.8-26.4 12.8V6c0-1-.7-1.6-1.6-1.6h-22c-1 0-1.6.7-1.6 1.6v129c0 .8.7 1.6 1.6 1.6h22c1 0 1.6-.8 1.6-1.6V79.8c0-12.5 9-19.4 19.7-19.4 10.8 0 19.3 6.6 19.3 23V135c0 .8.7 1.6 1.6 1.6h22c1 0 1.6-.8 1.6-1.6V81.7c0-29.2-16.8-42.3-37.7-42.3z"/><path d="M124.8 15A15 15 0 0 1 139.7 0c8.2 0 14.8 6.6 14.8 15 0 8.2-6.6 14.8-14.8 14.8-8 0-15-6.6-15-14.8zm43.3 97.5a58 58 0 0 1-28.2 7.4c-7.4 0-18.2-1.6-28.2-7.4-1.7-1-2.6.7-2.2 2 3.4 14 15.6 24.4 30.3 24.5h.2c14.6-.1 27-10.5 30.3-24.5.3-1.4-.6-3-2.2-2zM162 77c-8 4.7-16.4 6-22.2 6-6 0-14.4-1.2-22.3-6-1.3-.7-2 .6-1.7 1.7 2.7 11 12.3 19.3 24 19.3h.1a25 25 0 0 0 24-19.3c.2-1-.5-2.4-1.8-1.7zm-6.3-30C150 50.2 144 51 140 51s-10.3-1-16-4.2c-1-.5-1.4.4-1.2 1.2 2 8 8.8 13.8 17 13.8h.1c8.3 0 15.2-6 17.2-13.8.1-.8-.4-1.7-1.3-1.2z" fill-rule="nonzero"/></g><path d="M266.5 184h7.4v-18.5l1-1c2.8-2.6 7.4-3 9.2-.6 1 1 1 1.7 1 11.3v8.7h7.2c0-23-.1-23.6-2.2-25.7-3.3-3.4-11-3-15 .8l-1 1v-13.7h-7.4m-119.3 9.8c-4.2.7-6.5 1.7-9 3.7l-.7.5 2.8 4.8 1-.7c4.6-3.6 11.6-3 12.7 1 .1.3.2 1.5.2 2.6v2l-.6-.6c-3.4-3-10.3-3.4-14-.8-5 3.3-4.6 11 .5 14.4 3.7 2.4 9.8 2 13.2-1l1-.7v1.3 1.4h3.6 3.6l-.1-20.6-.5-1.2c-1.5-4-5-6-10.8-6.2l-2.8.1m33.7.1c-2.5.6-4.4 1.5-6.2 3.2l-.7.6v-1.7-1.7h-3.6-3.7V184h3.7 3.6v-18.5l1-1c3-2.8 8-3 9.5-.1.6 1.3.7 2.2.7 11v8.5h3.6 3.6v-10.4l-1-13.6c-1.7-3.2-6-4.8-10.5-3.8m126.6-.1c-15 2.7-15.8 24.4-1 28 4.6 1 11.7-.2 14.5-2.8l.7-.7-1.6-2.3-1.6-2.3-.6.5c-5 4-13 2.2-14.3-3.3l-.2-.7h20.3l-.1-2c-.4-9.8-7.4-16-16-14.5m34.4 0c-2.6.4-5 1.5-6.7 3.3l-.8.7v-3.5H327V184h7.4V166l.6-.6c1.4-1.4 4.3-2.3 6.7-2.2l1.3.1v-3.5c-.1-4 0-3.7-1-3.5m14 0c-10 1.8-15 11.7-10.6 21 4 8 16.5 10.3 24 4.2l.5-.4-3-4.5c-.1-.1-.4 0-.8.3-3.4 2.7-9 3-12 .4-1-1-2.4-3-2.4-4 0-.2 2-.3 10-.3h10v-1.5c0-7.4-3.7-13-9.8-14.6a20 20 0 0 0-5.9-.4m-162 .6l11 27.6-.6 1.3c-1 2.7-2.2 3-6 2.7-.4-.1-.4-.1-1 3l-.5 3.2.6.1c.3.1 1.6.2 3 .2 4.2 0 6.8-1 8.7-3.7l13.2-31.4 7.3 24h7.8l5.8-18 5.6 18h7.7l8.3-27.4h-7.5l-5 18-6-18H240l-6 18.3-5-18.2h-6.6-6.6l-7 18.8-7-18.8c-6-.1-7.7 0-7.7 0m119 5.7c1.8.8 3.3 2.7 3.6 4.5l.1.7h-13.3l.1-.6c.7-4 5.6-6.4 9.5-4.6m47.3-.3a6 6 0 0 1 4.4 4.9l.1.6H358c-3.6 0-6.6 0-6.6-.1 0-.3.7-2 1-2.8 1.4-2.4 4.8-3.5 7.8-2.6m-209 10c2.4.7 3 1.4 3 3.7v1.6l-.6.5c-3.2 3-9 2-10-1.2-1-3.5 3-6 7.6-4.6" fill="#000010"/></svg>',
      "friendlyName": "Dish Anywhere",
      "className": "dishAnywhereButton",
      "appName": "com.sm.SlingGuide.Dish",
      "androidName": "com.sm.SlingGuide.Dish",
      "adbLaunchCommand": "adb shell am start -n com.sm.SlingGuide.Dish/com.sm.SlingGuide.Dish.MainActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "disney-plus": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 436 151" width="436" height="151" xml:space="preserve"><g><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#fff;fill-rule:nonzero;opacity:1" transform="matrix(.42 0 0 .42 0 -87.004)" d="M735.8 365.7c-14.4 3.3-52.3 5.2-52.3 5.2l-4.8 15s18.9-1.6 32.7-.2c0 0 4.5-.5 5 5.1.2 5.2-.4 10.8-.4 10.8s-.3 3.4-5.1 4.2c-5.2.9-40.8 2.2-40.8 2.2l-5.8 19.5s-2.1 4.5 2.7 3.2c4.5-1.2 41.8-8.2 46.7-7.2 5.2 1.3 11 8.2 9.3 14.6-2 7.8-39.2 31.6-61.9 29.9 0 0-11.9.8-22-15.3-9.4-15.3 3.6-44.4 3.6-44.4s-5.9-13.6-1.6-18.1c0 0 2.6-2.3 10-2.9l9.1-18.9s-10.4.7-16.6-6.9c-5.8-7.3-6.2-10.6-1.8-12.6 4.7-2.3 48-10.2 77.8-9.2 0 0 10.4-1 19.3 17-.1 0 4.3 7.3-3.1 9zm-112.1 72.6c-3.8 9-13.9 18.6-26.4 12.6-12.4-6-32.1-46.3-32.1-46.3s-7.5-15-8.9-14.7c0 0-1.6-2.9-2.6 13.5s.2 48.3-6.3 53.3c-6.2 5-13.7 3-17.6-2.9-3.5-5.8-5-19.6-3.1-43.8 2.3-24.2 7.9-50 15.1-58.1 7.2-8 13-2.2 15.2-.1 0 0 9.6 8.7 25.5 34.3l2.8 4.7s14.4 24.2 15.9 24.1c0 0 1.2 1.1 2.2.3 1.5-.4.9-8.2.9-8.2s-3-26.3-16.1-70.9c0 0-2-5.6-.6-10.8 1.3-5.3 6.6-2.8 6.6-2.8s20.4 10.2 30.2 43.4c9.7 33.5 3.1 63.4-.7 72.4zM523.5 353c-1.7 3.4-2.7 8.3-11.3 9.6 0 0-82.3 5.6-86.2 11.4 0 0-2.9 3.4 1.6 4.4 4.5.9 23.1 3.4 32.1 3.9 9.6.1 42 .4 53.6 14.9 0 0 6.9 6.9 6.6 22.5-.3 16-3.1 21.6-9.3 27.4-6.5 5.4-62.3 30.4-98.3-8 0 0-16.6-18.5 5.7-32.5 0 0 16.1-9.7 57 1.7 0 0 12.4 4.5 11.8 9-.7 4.8-10.2 9.9-24 9.6-13.4-.4-23.2-6.8-21.3-5.8 1.8.7-14.4-7.8-19.4-2-5 5.3-3.8 8.6 1.1 11.9 12.5 7.1 60.8 4.6 75.2-11.4 0 0 5.7-6.5-3-11.8-8.7-5-33.6-8-43.3-8.5-9.3-.5-43.9.1-48.9-9.1 0 0-5-6.2.5-23.8 5.8-18.4 46.1-25.5 63.5-27.1 0 0 47.9-1.7 56.7 8.1-.1 0 1.1 2.3-.4 5.6zm-136 107.9c-5.8 4.3-18.1 2.4-21.6-2.4-3.5-4.3-4.7-21.4-4-48.2.7-27.1 1.3-60.7 7.1-66 6.2-5.4 10-.7 12.4 3 2.6 3.6 5.7 7.6 6.4 16.1.6 8.5 2.6 53.1 2.6 53.1s2.6 40.2-2.9 44.4zM400 317.1c-16.9 5.6-28.5 3.7-38.3-.5-4.3 7.5-6.8 9.8-10.1 10.3-4.8.5-9.1-7.2-9.9-9.7-.8-1.9-3.1-5.1-.3-12.7-9.6-8.6-10.3-20.2-8.7-28 2.4-9 18.6-43.2 67.9-47.2 0 0 24.1-1.8 28.2 11.1h.7s23.4.1 22.9 20.9c-.3 20.9-26 46.9-52.4 55.8zm-46-46.3c-5 8-5.2 12.8-2.9 16.1 5.7-8.7 16.1-22.4 31.4-32.8-11.8 1-21.7 6.1-28.5 16.7zm68.1-13.4c-15.5 2.3-39.5 23.1-50.9 40.1 17.5 3.2 48.4 2 62.1-25.9-.1 0 6.5-17.3-11.2-14.2zm420.8 161.1c-9.3 16.2-35.4 50-70.2 42.1-11.5 27.9-21.1 56-26.6 98.2 0 0-1.2 8.2-8 5.3-6.7-2.4-17.9-13.6-20.1-29.1-2.4-20.4 6.7-54.9 25.2-94.4-5.4-8.8-9.1-21.4-5.9-39.3 0 0 4.7-33.2 38-63.2 0 0 4-3.5 6.3-2.4 2.6 1.1 1.4 11.9-.7 17.1-2.1 5.2-17 31-17 31s-9.3 17.4-6.7 31.1c17.5-26.9 57.3-81.2 82-64.1 8.3 5.9 12.1 18.8 12.1 32.7-.1 12.3-3 25.3-8.4 35zm-7.2-42.6s-1.4-10.7-11.8 1.1c-9 9.9-25.2 28.6-38.3 53.9 13.7-1.5 26.9-9 30.9-12.8 6.5-5.8 21.6-21.4 19.2-42.2zm-485.5 13.6c-1.9 24.2-11.2 64.9-77.1 85-43.5 13.1-84.6 6.8-107 1.1-.5 8.9-1.5 12.7-2.9 14.2-1.9 1.9-16.1 10.1-23.9-1.5-3.5-5.5-5.3-15.5-6.3-24.4-50.4-23.2-73.6-56.6-74.5-58.1-1.1-1.1-12.6-13.1-1.1-27.8 10.8-13.3 46.1-26.6 77.9-32 1.1-27.2 4.3-47.7 8.1-57.1 4.6-10.9 10.4-1.1 15.4 6.3 4.2 5.5 6.7 29.2 6.9 48.1 20.8-1 33.1.5 56.3 4.7 30.2 5.5 50.4 20.9 48.6 38.4-1.3 17.2-17.1 24.3-23.1 24.8-6.3.5-16.1-4-16.1-4-6.7-3.2-.5-6 7.6-9.5 8.8-4.3 6.8-8.7 6.8-8.7-3.3-9.6-42.5-16.3-81.5-16.3-.2 21.5.9 57.2 1.4 78 27.3 5.2 47.7 4.2 47.7 4.2s99.6-2.8 102.6-66.4c3.1-63.7-99.3-124.8-175-144.2-75.6-19.8-118.4-6-122.1-4.1-4 2-.3 2.6-.3 2.6s4.1.6 11.2 3c7.5 2.4 1.7 6.3 1.7 6.3-12.9 4.1-27.4 1.5-30.2-4.4-2.8-5.9 1.9-11.2 7.3-18.8 5.4-8 11.3-7.7 11.3-7.7 93.5-32.4 207.4 26.2 207.4 26.2C334 301.5 352.2 364.9 350.2 389.5zM68 386.2c-10.6 5.2-3.3 12.7-3.3 12.7 19.9 21.4 44.4 34.8 67.7 43.1 2.7-36.9 2.3-49.9 2.6-68.5-36.4 2.5-57.4 8.3-67 12.7z"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#fff;fill-rule:nonzero;opacity:1" transform="matrix(.42 0 0 .42 0 -87)" d="M1040.9 378.6v13.2c0 2.9-2.3 5.2-5.2 5.2h-62.9c0 3.3.1 6.2.1 8.9 0 19.5-.8 35.4-2.7 53.3-.3 2.7-2.5 4.7-5.1 4.7h-13.6c-1.4 0-2.7-.6-3.6-1.6-.9-1-1.4-2.4-1.2-3.8 1.9-17.8 2.8-33.5 2.8-52.6 0-2.8 0-5.7-.1-8.9h-62.2c-2.9 0-5.2-2.3-5.2-5.2v-13.2c0-2.9 2.3-5.2 5.2-5.2h61.3c-1.3-21.5-3.9-42.2-8.1-63.2-.2-1.3.1-2.6.9-3.6s2-1.6 3.3-1.6h14.7c2.3 0 4.2 1.6 4.7 3.9 4.1 21.7 6.7 42.8 8 64.5h63.7c2.8 0 5.2 2.4 5.2 5.2z"/></g></svg>',
      "friendlyName": "Disney +",
      "className": "disneyPlusButton",
      "appName": "Disney+",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "androidName": "com.disney.disneyplus",
          "adbLaunchCommand": "adb shell am start -n com.disney.disneyplus/com.bamtechmedia.dominguez.main.MainActivity",
      },
      "chromecast": {
          "androidName": "com.disney.disneyplus",
          "adbLaunchCommand": "adb shell am start -n com.disney.disneyplus/com.bamtechmedia.dominguez.main.MainActivity",
      },
      "nvidia-shield": {
          "androidName": "com.disney.disneyplus",
          "adbLaunchCommand": "adb shell am start -n com.disney.disneyplus/com.bamtechmedia.dominguez.main.MainActivity",
      },
      "xiaomi": {
          "androidName": "com.disney.disneyplus",
          "adbLaunchCommand": "adb shell am start -n com.disney.disneyplus/com.bamtechmedia.dominguez.main.MainActivity",
      },
  },


  "ds-video": {
      "button": 'DS Video',
      "friendlyName": "DS Video",
      "className": "dsVideoButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.synology.dsvideo",
          "androidName": "com.synology.dsvideo",
          "adbLaunchCommand": "adb shell am start -n com.synology.dsvideo/.ui.WelcomeActivity",
      },
      "apple-tv": {
          "appName": "DS video",
      },
      "chromecast": {
          "appName": "com.synology.dsvideo",
          "androidName": "com.synology.dsvideo",
          "adbLaunchCommand": "adb shell am start -n com.synology.dsvideo/.ui.WelcomeActivity",
      },
      "nvidia-shield": {
          "appName": "com.synology.dsvideo",
          "androidName": "com.synology.dsvideo",
          "adbLaunchCommand": "adb shell am start -n com.synology.dsvideo/.ui.WelcomeActivity",
      },
      "xiaomi": {
          "appName": "com.synology.dsvideo",
          "androidName": "com.synology.dsvideo",
          "adbLaunchCommand": "adb shell am start -n com.synology.dsvideo/.ui.WelcomeActivity",
      },
   },


  "emby": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="691" height="211" viewBox="0 0 691 211" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M63.42 161.97l-6.98 8.98-56.94-58.3 48.86-48.74-9.3-7.12L96.46-.5l49.4 49.47 7.63-9.64 56.58 58.42-48.8 48.7 8.91 6.61-58.59 57.31M96.71 74.64l-15.97-8.95v79.32l69.21-39.72" fill="#53b54c"/><path d="M385.63 86.19c-6.41-5.73-13.48-6.65-20.7-3.27-8.46 3.96-11.65 11.61-11.87 20.46l.01 50.77h-23.26V61.09h21.26l1.8 9.98c7.29-9.36 16.81-12.46 27.78-11.74 11.2.74 19.55 5.97 24.97 16.63 5.15-7.51 11.31-13.04 19.84-15.39 26.05-7.17 48.25 7.07 50.33 34.06 1.53 19.67.3 39.55.3 59.62h-22.86v-8.83c-.21-15.97.11-31.98-.84-47.91-.59-10.05-6.28-15.39-14.54-16.41-8.69-1.07-16.73 3.58-20.11 12.35a34.8 34.8 0 0 0-2.17 11.66c-.25 14.66-.1 29.32-.1 43.99v5.15h-23.24l-.01-9.85c-.19-15.14-.01-30.31-.87-45.42-.24-4.26-3.55-8.35-5.72-12.79z" fill="#494949"/><path d="M515.49 68.62c14.96-11.79 31.13-12.72 47.83-5.9 16.26 6.64 24.3 19.89 25.82 36.84.69 7.66.46 15.81-1.4 23.23-7.65 30.61-38.07 38.36-58.66 32.01-6.48-2-12.02-7.02-17.83-10.56l-1.33 9.9h-21.35V21.98h22.59v49.67l1.57 1.2c.83-1.33 1.67-2.65 2.76-4.23m42.19 18.02c-9.87-7.63-20.55-8.56-31.29-2.59-10.62 5.9-14.28 15.75-13.13 27.52a25.8 25.8 0 0 0 18.56 22.47c11.94 3.57 24.26-.87 30.56-11 6.89-11.08 5.16-25.98-4.7-36.4zm-279.54 69.87c-6.6-.31-12.86.03-18.85-1.09-20.37-3.81-33.57-16.99-37.08-37.45-3.54-20.7.7-39.4 19.3-51.43 18.23-11.8 37.95-11.66 56.98-1.56 12.41 6.59 17.87 18.52 19.56 32 .73 5.88.12 11.93.12 18.54h-73c1.67 9.66 7.03 15.34 15.37 18.04 13.43 4.35 25.93 1.89 37.38-6.07l14.19 14.97c-8.99 8.59-20.59 12.78-33.97 14.05m-7.28-60.06h24.79c-1.5-11.63-10.49-17.93-24.28-17.87-11.71.04-24.23 7.15-24.95 17.87h24.44z" fill="#484848"/><path d="M631.38 193.4c-7.37.06-14.74.12-22.65-.09-.7-.51-.92-.68-1.18-.78l14.51-33.91a12.4 12.4 0 0 0 .22-10.78l-33.55-82.23c-.55-1.35-.98-2.74-1.72-4.85 8.77 0 17.01-.15 25.23.17 1.07.05 2.48 2.33 3.01 3.83l20.84 59.83 1 2.72 2.29-5.67 23.17-57.35c.61-1.47 2.54-3.33 3.93-3.39 7.46-.34 14.94-.16 23.23-.16L632.65 192.4c-.76.53-1.01.77-1.27 1z" fill="#494949"/><path d="M97.02 74.82l52.93 30.47-69.21 39.73V65.69l16.28 9.13z" fill="#fdfefd"/></svg>',
      "friendlyName": "Emby",
      "className": "embyButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "tv.emby.embyatv",
          "androidName": "tv.emby.embyatv",
          "adbLaunchCommand": "adb shell am start -a android.intent.category.LEANBACK_LAUNCHER -d -n tv.emby.embyatv/.startup.StartupActivity",
      },
      "apple-tv": {
          "appName": "Emby",
      },
      "chromecast": {
          "appName": "tv.emby.embyatv",
          "androidName": "tv.emby.embyatv",
          "adbLaunchCommand": "adb shell am start -a android.intent.category.LEANBACK_LAUNCHER -d -n tv.emby.embyatv/.startup.StartupActivity",
      },
      "nvidia-shield": {
          "appName": "tv.emby.embyatv",
          "androidName": "tv.emby.embyatv",
          "adbLaunchCommand": "adb shell am start -a android.intent.category.LEANBACK_LAUNCHER -d -n tv.emby.embyatv/.startup.StartupActivity",
      },
      "xiaomi": {
          "appName": "tv.emby.embyatv",
          "androidName": "tv.emby.embyatv",
          "adbLaunchCommand": "adb shell am start -a android.intent.category.LEANBACK_LAUNCHER -d -n tv.emby.embyatv/.startup.StartupActivity",
      },
   },


  "eon-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 636 208"><defs><clipPath id="eoncp"><path class="cls-1" d="M0 12.78h636v182.44H0z"/></clipPath><clipPath id="eoncp-1"><path class="cls-1" d="M0 12.78h636v182.44H0z"/></clipPath><clipPath id="eoncp-2"><path class="cls-1" d="M0 12.78h636v182.44H0z"/></clipPath><clipPath id="eoncp-3"><path class="cls-1" d="M0 97.56v12.72h636V97.56H0z"/></clipPath><linearGradient id="eonlinear-gradient" x1="0" y1="-.3" x2=".98" y2="-.3" gradientTransform="matrix(650 0 0 -650 0 -93.31)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset=".17" stop-color="#fff"/><stop offset=".33" stop-color="#fff"/><stop offset=".5" stop-color="#fff"/><stop offset=".66" stop-color="#fff"/><stop offset=".83" stop-color="#fff"/><stop offset="1"/></linearGradient><linearGradient id="eonlinear-gradient-2" x1="0" y1="-.3" x2=".98" y2="-.3" gradientTransform="matrix(650 0 0 -650 0 -93.31)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff9a91"/><stop offset=".17" stop-color="#ff42ff"/><stop offset=".33" stop-color="#301dff"/><stop offset=".5" stop-color="#00fdfb"/><stop offset=".66" stop-color="#0f0"/><stop offset=".83" stop-color="#ffe90a"/><stop offset="1" stop-color="#ff9a91"/></linearGradient><style>.cls-1{fill:none}</style><mask id="mask" x="0" y="97.56" width="636" height="12.72" maskUnits="userSpaceOnUse"><path style="fill:url(#eonlinear-gradient)" d="M0 97.56h636v12.72H0z"/></mask></defs><g style="clip-path:url(#eoncp)"><g style="clip-path:url(#eoncp-1)"><path d="M81.92 56.61h87.42v10.84H92.76v20.6H81.92V56.62zm10.84 63.34H81.92v31.44h87.42v-10.84H92.76v-20.61zm277.15-85.83c-16.13-13.76-36.66-21.34-57.83-21.34s-41.71 7.58-57.83 21.34c-15.94 13.6-26.64 32.39-30.12 52.9l-.18 1.03h10.99l.14-.72c7.02-36.92 39.4-63.71 77-63.71s69.99 26.79 77.01 63.71l.14.72h10.99l-.18-1.03c-3.48-20.51-14.18-39.29-30.13-52.9m19.17 86.56c-7.02 36.91-39.4 63.71-77.01 63.71s-69.98-26.79-77-63.71l-.14-.72h-10.99l.18 1.03c3.48 20.51 14.18 39.3 30.12 52.9 16.12 13.76 36.66 21.33 57.83 21.33s41.71-7.58 57.84-21.33c15.94-13.6 26.64-32.39 30.12-52.9l.18-1.03h-10.99l-.14.72zm68.5-56.29 25.36 23.66h15.87l-41.23-38.48v14.82zm0 87.02h10.83v-31.44h-10.83v31.44zm85.66-63.36h10.83V56.62h-10.83v31.43zm0 43.96c0 .51.05 1.16.13 1.86-.39-.51-.78-.98-1.15-1.31l-13.5-12.6h-15.87l41.23 38.49v-38.49h-10.83V132z" style="clip-path:url(#eoncp-2)"/><g style="clip-path:url(#eoncp-3)"><g style="mask:url(#mask)"><path style="fill:url(#eonlinear-gradient-2)" d="M0 97.56h636v12.72H0z"/></g></g></g></g></svg>',
      "friendlyName": "EON TV",
      "className": "eonTVButton",
      "appName": "com.ug.eon.android.tv",
      "androidName": "com.ug.eon.android.tv",
      "adbLaunchCommand": "adb shell am start -n com.ug.eon.android.tv/com.ug.eon.android.tv.TvActivity",
      "deviceFamily": [ "chromecast", "nvidia-shield", "xiaomi"], },


  "ertflix": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="180.02" height="39.998" viewBox="0 0 180.02 39.998"><g transform="translate(18.061 2.811)"><g transform="translate(-18.06 -2.81)"><path d="M236.324,284.081H222.192a.594.594,0,0,0-.594.594V312.8a.594.594,0,0,0,.594.594h14.132a.594.594,0,0,0,.594-.594v-2.2a.594.594,0,0,0-.594-.594H226.3a.594.594,0,0,1-.594-.594v-7a.594.594,0,0,1,.594-.594h8.216a.594.594,0,0,0,.594-.594v-2.222a.594.594,0,0,0-.594-.594H226.3a.594.594,0,0,1-.594-.594v-9.719a.594.594,0,0,1,.594-.594h10.027a.594.594,0,0,0,.594-.594v-2.222A.594.594,0,0,0,236.324,284.081Z" transform="translate(-221.598 -284.03)" fill="#37a1da"/><path d="M697.842,284.081H681.086a.515.515,0,0,0-.516.516v2.38a.516.516,0,0,0,.516.516h5.81a.516.516,0,0,1,.516.516v24.869a.516.516,0,0,0,.516.515h3.093a.515.515,0,0,0,.516-.515V288.007a.515.515,0,0,1,.515-.516h5.791a.516.516,0,0,0,.516-.516V284.6A.516.516,0,0,0,697.842,284.081Z" transform="translate(-624.652 -284.03)" fill="#37a1da"/><path d="M471.28,301.256a.758.758,0,0,1,.394-.95,7.1,7.1,0,0,0,1.2-.712,5.705,5.705,0,0,0,1.368-1.436,6.557,6.557,0,0,0,.857-1.946,9.761,9.761,0,0,0,.3-2.534V292a9.783,9.783,0,0,0-.53-3.324,6.6,6.6,0,0,0-1.561-2.5,6.8,6.8,0,0,0-2.553-1.561,10.421,10.421,0,0,0-3.488-.539h-8.126a.758.758,0,0,0-.758.758v27.8a.758.758,0,0,0,.758.758h2.59a.758.758,0,0,0,.758-.758v-9.99a.758.758,0,0,1,.758-.758h3.466a.758.758,0,0,1,.715.506l3.691,10.492a.758.758,0,0,0,.715.506h2.882a.757.757,0,0,0,.71-1.022Zm-.215-5.728a3.956,3.956,0,0,1-.771,1.58,3.521,3.521,0,0,1-1.4,1.012,5.562,5.562,0,0,1-2.129.357h-3.5a.758.758,0,0,1-.758-.758V288.23a.758.758,0,0,1,.758-.758h3.444a5.412,5.412,0,0,1,2.062.356,3.774,3.774,0,0,1,1.426.993,4.071,4.071,0,0,1,.829,1.522,6.676,6.676,0,0,1,.27,1.946v1.195A8.433,8.433,0,0,1,471.065,295.528Z" transform="translate(-429.536 -284.03)" fill="#37a1da"/><path d="M1208.439,309.267h-9.994a.264.264,0,0,1-.264-.264V284.345a.264.264,0,0,0-.264-.264h-3.6a.264.264,0,0,0-.264.264v28.783a.264.264,0,0,0,.264.264h14.118a.264.264,0,0,0,.264-.264v-3.6A.264.264,0,0,0,1208.439,309.267Z" transform="translate(-1075.578 -284.03)" fill="#ea1d57"/><rect width="4.124" height="29.297" rx="1.856" transform="translate(144.521 0.065)" fill="#ea1d57"/><path d="M1555.638,312.961l-7.179-14.469a.3.3,0,0,1,0-.262l6.61-13.72a.3.3,0,0,0-.269-.428h-3.9a.3.3,0,0,0-.272.175l-4.676,10.32a.3.3,0,0,1-.545,0l-4.6-10.317a.3.3,0,0,0-.273-.177h-3.917a.3.3,0,0,0-.269.428l6.591,13.663a.3.3,0,0,1,0,.262l-7.144,14.528a.3.3,0,0,0,.268.43h3.917a.3.3,0,0,0,.271-.173l5.2-11.192a.3.3,0,0,1,.542,0l5.2,11.192a.3.3,0,0,0,.271.173h3.915A.3.3,0,0,0,1555.638,312.961Z" transform="translate(-1375.65 -284.03)" fill="#ea1d57"/><path d="M981.406,283.666H968.248a.729.729,0,0,0-.729.729v25.47a.729.729,0,0,0,.729.729h2.665a.729.729,0,0,0,.729-.729V287.806a.729.729,0,0,1,.729-.729h9.033a.729.729,0,0,0,.729-.729V284.4A.729.729,0,0,0,981.406,283.666Z" transform="translate(-876.64 -283.666)" fill="#ea1d57"/><circle cx="2.964" cy="2.964" r="2.964" transform="translate(80.806 12.125)" fill="#ea1d57"/><circle cx="2.964" cy="2.964" r="2.964" transform="translate(98.61 12.125)" fill="#ea1d57"/><g transform="translate(79.337 28.815)"><path d="M898.913,520.353a1.87,1.87,0,0,0-2.483.893,11.094,11.094,0,0,1-20.094,0,1.864,1.864,0,0,0-3.372,1.589,14.823,14.823,0,0,0,26.84,0,1.862,1.862,0,0,0-.891-2.479Z" transform="translate(-872.787 -520.175)" fill="#ea1d57"/></g></g></g></svg>',
      "friendlyName": "ERTFLIX",
      "className": "ertflixButton",
      "appName": "t.yi.erthybrid",
      "androidName": "t.yi.erthybrid",
      "adbLaunchCommand": "adb shell am start -n t.yi.erthybrid/com.arxnet.soeasytv.MainActivity",
      "deviceFamily": [ "chromecast", "nvidia-shield", "xiaomi"], },


  "espn": {
      "button": '<svg viewbox="0 0 554 137" width="554" height="137" xmlns="http://www.w3.org/2000/svg"><path d="M181.064.348c-20.608-.027-34.256 10.836-36.176 27.079a1600.065 1600.065 0 0 1-1.384 11.257H411.64s.504-3.957.896-7.133C414.552 15.188 407.6.35 382.312.35v.002S191.928.36 181.064.348zM17.424.353l-4.706 38.331h121.6l4.688-38.33H17.422h.002zm408.184 0l-4.696 38.331h131.824s.16-1.386.744-5.898C556.688 7.626 540.456.353 524.784.353h-99.176zm-6.512 52.926l-10.272 83.656 45.48-.016 10.28-83.624-45.488-.018v.002zm86.4 0l-10.288 83.656 45.48-.016 10.28-83.624-45.472-.018v.002zm-494.552.012L.654 136.939h121.592l4.48-36.288-76.138-.008 1.926-15.648h76.108l3.896-31.702H10.95l-.006-.002zm130.776 0c-3.336 21.832 7.592 31.701 23.08 31.701 8.424 0 61.52-.024 61.52-.024l-1.92 15.672-88.488.008-4.456 36.288s96.336.032 100.24 0c3.224-.232 25.76-.848 33.432-19.28 2.488-5.984 4.688-27.44 5.304-31.944 3.544-26.16-14.568-32.397-28.832-32.397-7.864 0-84.352-.024-99.88-.024zm141.552 0L273 136.939h45.456l6.4-51.944h57.096c16.192 0 24.896-8.706 26.512-20.397a430.97 430.97 0 0 0 1.4-11.305H283.272v-.002z" fill="#E52534"/></svg>',
      "friendlyName": "ESPN",
      "className": "espnButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.espn.gtv",
          "androidName": "com.espn.gtv",
          "adbLaunchCommand": "adb shell am start -n com.espn.gtv/com.espn.startup.presentation.StartupActivity",
      },
      "apple-tv": {
          "appName": "ESPN",
      },
      "chromecast": {
          "appName": "com.espn.score_center",
          "androidName": "com.espn.score_center",
          "adbLaunchCommand": "adb shell am start -n com.espn.score_center/com.espn.startup.presentation.StartupActivity",
      },
      "nvidia-shield": {
          "appName": "com.espn.score_center",
          "androidName": "com.espn.score_center",
          "adbLaunchCommand": "adb shell am start -n com.espn.score_center/com.espn.startup.presentation.StartupActivity",
      },
      "xiaomi": {
          "appName": "com.espn.score_center",
          "androidName": "com.espn.score_center",
          "adbLaunchCommand": "adb shell am start -n com.espn.score_center/com.espn.startup.presentation.StartupActivity",
      },
   },


  "f-droid": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 400 119.362" width="400" height="119.362"><g fill-rule="evenodd"><path d="M16.524 13.679c-3.242.638-6.082 3.796-6.531 7.265-.261 2.011-.042 18.394.26 19.476.633 2.267 2.857 4.178 5.62 4.829 1.597.377 87.847.371 89.445-.006 2.336-.55 4.298-2.062 5.23-4.03l.535-1.13V19.75l-.705-1.437c-1.178-2.397-3.585-4.258-6.025-4.658-1.194-.195-86.831-.172-87.829.024m20.294 7.578c8.209 1.935 10.017 15.278 2.599 19.187-5.083 2.678-11.225.257-12.939-5.099-.364-1.138-.629-5.357-.304-4.835.097.155.116.03.054-.356-.265-1.65 1.096-4.676 2.924-6.501 2.269-2.266 4.827-3.065 7.666-2.396m51.939-.002c4.346 1.117 6.878 4.757 7.032 10.109.128 4.493-1.315 7.381-4.539 9.08-7.607 4.008-15.344-3.084-13.03-11.944 1.352-5.174 6.043-8.399 10.537-7.245m-60.182 4.953-.658.709.708-.659c.39-.363.708-.681.708-.708 0-.127-.145 0-.758.658m51.831 0-.489.542.541-.49c.505-.456.619-.593.49-.593-.029 0-.273.243-.542.541" fill="#b5ec16"/><path d="M343 40.583V44.5h10.333v-7.833H343v3.916m37.205-.715.045 3.201 2.667.541 2.708.549c.023.004.042 2.989.043 6.633l.001 6.625-1.398-1.344c-5.665-5.448-15.195-3.834-19.366 3.281-4.502 7.679-4.397 20.453.226 27.26 4.763 7.013 16.137 7.691 20.613 1.228.585-.844.535-.941 1.015 1.95l.311 1.875H400.007l-.045-3.292-.045-3.291-1.875-.405-1.875-.404V36.667h-16.008l.046 3.201m-234.247.413c-.312.082-.464 6.092-.158 6.281.115.072 3.701.85 4.867 1.056l.416.074-.039 18.191c-.037 17.206-.055 18.197-.333 18.297-.162.058-1.194.275-2.294.481-3.084.579-2.766.144-2.712 3.712l.045 3.044 10.629.043 10.628.042-.045-3.201-.045-3.201-2.625-.504-2.625-.504V70.333h8.827c8.557 0 8.833-.01 9-.322.308-.574.226-7.434-.092-7.752-.237-.236-1.202-.26-9-.22l-8.735.044v-13.75h16.288l.106.774c.058.425.106 1.254.106 1.842 0 .589.086 1.591.191 2.227l.191 1.157h7.936l.099-.541c.15-.818.02-13.244-.14-13.403-.142-.142-39.957-.248-40.486-.108m72.819.125c-.156.408-.133 5.801.027 6.052.073.115 1.309.45 2.747.744l2.616.536v36.375l-.959.207c-.527.114-1.258.27-1.625.347-3.257.682-2.911.232-2.914 3.785-.002 2.668.02 2.882.32 3.042.527.282 22.53.22 25.428-.072 9.408-.948 16.246-6.887 18.443-16.021.551-2.29.665-14.897.161-17.845-1.549-9.066-7.792-15.206-17.271-16.987-2.21-.415-26.819-.564-26.973-.163M12.25 46c.358.367.688.667.734.667.046 0-.209-.3-.567-.667-.358-.367-.689-.667-.735-.667-.045 0 .21.3.568.667m96.49.042-.49.541.542-.489c.298-.269.541-.513.541-.542 0-.129-.137-.015-.593.49m136.177 2.93c2.311.792 3.685 1.697 5.028 3.311.848 1.019 1.985 3.136 2.249 4.187.713 2.836.693 2.562.695 9.447.002 6.885.02 6.646-.69 9.416-.261 1.019-1.641 3.551-2.446 4.486-2.451 2.849-4.992 3.676-11.295 3.679l-3.791.002V48.457l4.625.086c4.092.076 4.74.126 5.625.429m45.833 3.834c-2.202.554-4.371 2.234-5.699 4.416-.756 1.242-.818 1.147-1.004-1.527-.112-1.611-.22-2.264-.393-2.373-.295-.187-14.489-.202-14.783-.016-.162.103-.201.875-.166 3.28l.045 3.145 2.25.44c1.237.242 2.419.495 2.625.563l.375.122V72.5c0 10.947-.017 11.649-.292 11.727-.16.046-.854.205-1.541.355-.688.149-1.625.361-2.084.471l-.833.2v6.33h20.167l.045-3.117.045-3.118-.628-.166c-.548-.145-2.254-.53-3.546-.8-.848-.178-.833-.017-.833-9.226 0-10.092-.075-9.443 1.236-10.748 1.58-1.571 2.42-1.825 6.041-1.825 3.341 0 3.015.162 3.214-1.596.222-1.97.839-7.716.841-7.84.002-.131-1.605-.432-2.915-.547-.667-.058-1.389.011-2.167.206m22.667-.036c-4.103.619-7.158 2.046-9.721 4.543-8.034 7.828-7.421 24.64 1.147 31.414 4.532 3.584 12.829 4.718 18.157 2.481 4.537-1.905 7.1-4.314 9.159-8.611 2.82-5.885 2.728-14.92-.211-20.725-2.366-4.673-5.93-7.413-11.448-8.8-1.062-.267-5.937-.475-7.083-.302m24.288 3.764.045 3.201 2.667.541 2.708.549c.023.005.042 5.252.042 11.662V84.14l-1.125.251c-.619.138-1.744.382-2.5.542l-1.375.29V91.5h20.166v-6.32l-.625-.163a88.256 88.256 0 0 0-2.416-.545l-1.792-.384V53.333H337.659l.046 3.201m-19.309 4.638c6.325 1.954 7.308 18.457 1.321 22.18-3.275 2.037-7.907.746-9.632-2.683-1.985-3.949-1.972-12.249.027-16.224 1.544-3.07 4.789-4.352 8.284-3.273m63.455.148c1.343.507 2.63 1.467 3.354 2.504l.628.9V80.539l-.615.838c-2.465 3.357-8.592 3.722-10.931.651-3.103-4.074-2.766-15.479.569-19.278 1.554-1.77 4.497-2.372 6.995-1.43m-189.184 8.347v4h20v-8h-20v4" fill="#4c4c4c"/><path d="M16.116 51.016c-2.517.592-4.847 2.791-5.811 5.484l-.388 1.083-.048 27c-.031 17.624.011 27.488.122 28.403.287 2.368 1.559 4.518 3.393 5.735l.922.612h92.551l.713-.49c1.623-1.117 3.012-3.091 3.42-4.862.232-1.007.232-55.955 0-56.962-.626-2.717-3.09-5.21-5.885-5.954-1.01-.269-87.85-.317-88.989-.049" fill="#1d76d1"/><path d="M2.417 1.192C.554 2.206-.089 3.475.371 5.225c.187.71 9.773 13.585 10.129 13.603.046.002.227-.345.402-.771.442-1.075 2.175-2.859 3.373-3.474l1.035-.531c.032-.018-.513-.768-1.213-1.667a1982.124 1982.124 0 0 1-7.195-9.333C5.554 1.288 3.672.508 2.417 1.192m113.984.029c-.914.347-1.438.948-6.05 6.941l-4.538 5.897.885.426c1.186.57 3.145 2.525 3.564 3.556.177.435.365.791.418.792.223.001 9.889-12.75 10.088-13.308.984-2.755-1.638-5.34-4.367-4.304M33.167 21.265c-3.823 1.015-6.542 4.47-7.071 8.985-.097.822-.093.817.299-.367 2.766-8.359 14.39-8.505 17.226-.216.488 1.426.521.61.05-1.232-1.305-5.105-6.059-8.35-10.504-7.17m51.891-.028c-3.794.92-6.654 4.567-7.132 9.096l-.097.917.396-1.302c2.539-8.343 14.055-8.599 17.227-.383l.393 1.018-.089-.949c-.515-5.443-5.794-9.587-10.698-8.397M9.907 34.167c0 2.612.023 3.681.051 2.375.028-1.307.028-3.444 0-4.75-.028-1.307-.051-.238-.051 2.375m.025 6.155c.273 3.986 2.63 6.901 6.273 7.76 1.348.318 86.982.383 88.495.067 3.626-.756 6.489-4.149 6.454-7.649l-.01-.917-.211.667c-.793 2.5-2.869 4.346-5.615 4.993-1.598.377-87.848.383-89.445.006-2.972-.701-5.103-2.678-5.793-5.376l-.244-.956.096 1.405" fill="#96c117"/><path d="M1.893 1.32c-.288.176-.582.419-.653.541-.077.132 0 .112.19-.048.176-.149.545-.39.82-.535.275-.146.425-.267.333-.271-.091-.003-.402.138-.69.313m3.81.441c.25.259.492.432.54.385.047-.047-.157-.26-.453-.471l-.54-.385.453.471M111.245 30.5c0 5.454.021 7.685.047 4.958.025-2.727.025-7.189 0-9.916-.026-2.727-.047-.496-.047 4.958m-77.618-6.828c-7.274 1.225-10.109 10.066-4.891 15.251C34.43 44.579 44 40.605 44 32.583c0-5.57-4.952-9.824-10.373-8.911m51.763.011c-5.444.909-8.812 6.62-6.986 11.847 2.182 6.244 10.167 8.066 14.846 3.387 6.129-6.13.695-16.663-7.86-15.234" fill="#fafbf8"/></g></svg>',
      "friendlyName": "F-Droid",
      "className": "fDroidutton",
      "appName": "org.fdroid.fdroid",
      "androidName": "org.fdroid.fdroid",
      "adbLaunchCommand": "adb shell am start -n org.fdroid.fdroid/org.fdroid.fdroid.views.main.MainActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "f1-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141 23" width="141" height="23" ><defs><clipPath id="f1_logo_svg__a"><path d="M0 0h140.941v23H0zm0 0"></path></clipPath></defs><g clip-path="url(#f1_logo_svg__a)"><path d="M102.871 22.695V4.992H94.43V0h22.812v4.992h-8.445V22.7h-5.926zM123.671 0l5.036 16.676c.078.222.156.398.234.531.079.129.211.195.387.195.195 0 .34-.062.43-.183.09-.121.172-.313.25-.574L135.074 0h5.867l-5.511 17.703c-.512 1.633-1.223 2.926-2.133 3.875-.91.945-2.192 1.422-3.852 1.422-1.797 0-3.144-.445-4.043-1.332-.898-.887-1.625-2.207-2.18-3.965L117.54 0zM22.427 12.93l-9.856 9.765H0L15.637 6.844C21.453.964 24.254 0 34.168 0h39.156l-8.5 8.5H35.29c-7.406 0-8.984.582-12.867 4.43zm41.133-3.075H35.465c-7.457 0-8.625.586-12.008 4.04l-8.617 8.8h11.656l2.774-2.832c1.832-1.87 2.648-2.047 6.343-2.047h20.153zm3.039 12.84L88.875 0h-13.84L52.816 22.695zm9.355.004c-.7 0-1.285-.242-1.746-.719-.465-.48-.7-1.07-.7-1.77 0-.698.235-1.288.696-1.765.457-.472 1.04-.71 1.742-.71.7 0 1.278.238 1.739.718.457.477.687 1.067.687 1.766 0 .699-.226 1.289-.683 1.765-.458.473-1.032.715-1.735.715zm-.016-4.578c-.57 0-1.054.203-1.44.61-.388.41-.583.898-.583 1.48 0 .578.195 1.07.582 1.477.387.406.867.609 1.442.609.578 0 1.058-.2 1.445-.606.387-.402.582-.894.582-1.476s-.195-1.074-.582-1.485a1.912 1.912 0 00-1.445-.609zm-.472 2.504v.973h-.535v-2.754h1.015c.348 0 .614.066.79.199.175.133.261.336.261.602 0 .27-.035.464-.105.597a.747.747 0 01-.364.313l.508 1.047h-.562l-.461-.977zm-.008-1.355v.925H76c.168 0 .285-.035.36-.11.074-.07.109-.19.109-.35 0-.313-.188-.465-.57-.465zm0 0" fill="#fff"></path></g></svg>',
      "friendlyName": "F1 TV",
      "className": "f1TVButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.formulaone.production",
          "androidName": "com.formulaone.production",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.MAIN -n com.formulaone.production/com.avs.f1.ui.splash.SplashActivity",
      },
      "apple-tv": {
          "appName": "F1 TV",
      },
      "chromecast": {
          "appName": "com.formulaone.production",
          "androidName": "com.formulaone.production",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.MAIN -n com.formulaone.production/com.avs.f1.ui.splash.SplashActivity",
      },
      "nvidia-shield": {
          "appName": "com.formulaone.production",
          "androidName": "com.formulaone.production",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.MAIN -n com.formulaone.production/com.avs.f1.ui.splash.SplashActivity",
      },
      "xiaomi": {
          "appName": "com.formulaone.production",
          "androidName": "com.formulaone.production",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.MAIN -n com.formulaone.production/com.avs.f1.ui.splash.SplashActivity",
      },
   },


  "firetv-store": {
      "button": 'appstore',
      "friendlyName": "Fire TV Store",
      "className": "fireTVStoreButton",
      "appName": "FireTV Store",
      "androidName": "com.amazon.venezia",
      "adbLaunchCommand": "adb shell am start -a com.amazon.venezia.ade.FIND_LAUNCH -n com.amazon.venezia/.ade.ADEHomeActivity",
      "deviceFamily": ["amazon-fire"], },


  "flash": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="965" height="266" viewBox="0 0 965 266" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M0 265h897L963.6 0H67.2"/><path d="M642 48.4c-37.3 4-62.4 27.2-61.2 56.3 1 20.4 11.5 31.3 41.7 43.2 26.3 10.4 30.7 13.6 29 21-3.8 15.7-38 12.5-62-5.7-6.5-5-6.7-5-7.8-5a228 228 0 0 0-28.6 28.7c0 1.4 4 5.3 9.8 9.7 38 28.2 101.4 26.5 125.5-3.4 19-23.6 15-52.6-9.3-67.8a149 149 0 0 0-28.2-12.8c-17.7-7-22.7-10.8-21.6-16.4 3-15.6 33.7-13.7 57 3.7 4.2 3 5 3.2 7.6.5 12-12.6 24.5-26.8 24.5-28 0-2.7-13.6-12-24-16.3a127 127 0 0 0-52.3-7.7m-170.2 3.3L358.2 211.4c-1 2.7-2 2.6 23.8 2.6h23l1.3-1a107 107 0 0 0 13.3-18.5c0-1.4-.5-2-5-4.5-4.6-2.7-6-4-5-4.7a1596 1596 0 0 1 79-.2c1.6.4 2.2 2 3 7.5l3.6 20.3 1 1h22.2c26.3 0 24.2.4 23.8-4.6l-25.8-158-1-1h-21.2H473l-1.3 1.2m-360 0c-.8.8-2 4-3.6 10L69 204.5c-3 10.4-5 9.5 20.8 9.5 25.8 0 22.8 1 25.4-8.5l2.2-8 6-21.6c3-11 3.2-10.2-3-14.4-9-6-12.5-5.4 40.7-5.7l45.5-.5c1-.7 1.7-2.4 5-15.3l4.3-15.4c1-3 1-5 .2-5.6l-75.5-1.2c-.8-.7-.8-2.5 0-5.3l1.5-5.8 2-7.7c1.6-6 2.4-7.7 4-8.2a836 836 0 0 1 42.7-.4c47.5 0 42.6.5 44-4.2l2-6.6 6.3-28c-1-1-130.2-1-131.3.1m150.5 0c-.8.8-1.7 3.4-4 12l-39.4 149.8 116.4.2 1-1c1.3-1.3 24.2-34.3 24.8-35.8 1-2.5 3.6-2.4-42.4-2.5L276 174c-1-.8-.8-2.4.8-8.3l29.7-108.8c.8-2.6.7-4.4 0-5.2a298 298 0 0 0-44.3.1m486.3-.3c-1.3.6-1 .2-7 21.6l-36.4 132.5c-1.4 5-1.6 7-.7 7.8a310 310 0 0 0 45.2-.1c1.2-1 1.8-3 6.2-19.7l5.8-22.2c1.7-5.6 1.6-5.7-5.6-10.4-7.4-5-8.8-4.7 31.5-4.7 40-.1 36.8-.7 34.6 7L810 213.5a209 209 0 0 0 21.8.5h21l1-1c1-1 1.7-2.7 4.6-13.8l38.5-140c2.6-9.2 4.6-8.5-21.3-8.5h-21.4l-1 1c-.8.7-1.5 2.5-2.7 7-15.4 55.5-16 57.5-17 58.2-1.3 1-5 1.2-31 1l-24.2-.1-.8-1c-.8-1-.8-1.7.3-5.2l15.2-60.3c-1-.7-43-1-44.6-.3M481 106.7c.2.3.5 1.5.6 2.5 5 38 5 38.3 3.7 39.5l-1 1c-32.7 0-33.3-.1-32.8-2.3a1180 1180 0 0 1 26.9-40.5c1-1 2-1.2 2.6-.2" fill="#0049ff"/></svg>',
      "friendlyName": "Flash",
      "className": "flashButton",
      "appName": "Flash",
      "deviceFamily": ["apple-tv"], },


  "fox-sports": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 42" fill-rule="evenodd"><path d="M.66 28.347V0h17.207l.53 7.753H8.761v3.695h7.851v7.737H8.705v9.162H.66m66.275-.084l-8.61-14.707L66.147 0H57.53l-3.573 6.102L50.444 0H41.53l7.97 13.65-8.442 14.63 8.66-.004 4.133-7.164 4.177 7.151h8.908" fill="#fff"/><path d="M34.24 19.87V8.544c0-1.289-1.132-2.448-2.41-2.448-1.272 0-2.304 1.16-2.304 2.448l-.005 11.29c0 1.293 1.037 2.34 2.31 2.34s2.41-1.011 2.41-2.306zm-16.062-5.662c0-7.606 6.094-13.78 13.612-13.78 7.525 0 13.621 6.174 13.621 13.78 0 7.617-6.096 13.786-13.621 13.786-7.518 0-13.612-6.169-13.612-13.786zM0 40.651v-1.465l.755-.725H6.86l.23-.228V36.68l-.166-.168H1.257L0 35.267v-3.57l1.45-1.437h8.215v1.58l-.59.6H3.114l-.23.228v1.516l.166.163h5.655l1.256 1.25v3.618L8.514 40.65H0m18.579-5.359l.423-.418v-1.99l-.423-.419h-3.933v2.827h3.933zm-6.82-5.03h8.526l1.615 1.6v3.851l-1.615 1.603h-5.639v3.336h-2.887v-10.39zm18.469 7.957l.596-.58v-4.536l-.596-.587h-3.356l-.588.587v4.535l.588.581h3.356zm-6.815.835v-7.191l1.6-1.602h7.077l1.615 1.602v7.191l-1.615 1.598h-7.076l-1.601-1.598zm18.944-4.335l.41-.407v-1.515l-.41-.407h-3.885v2.329h3.885zM35.59 30.26h8.614l1.45 1.436v3.317l-1.384 1.373 1.821 4.265h-3.208l-1.356-3.769h-3.054v3.77H35.59V30.26zm14.37 2.408h-3.334V30.26h9.553v2.408h-3.333v7.983h-2.885v-7.983m7.775 8.269V39.47l.757-.725h6.104l.23-.227v-1.554l-.166-.167h-5.665l-1.26-1.246v-3.57l1.45-1.437h8.217v1.58l-.59.6h-5.958l-.231.228v1.516l.165.164h5.657l1.255 1.25V39.5l-1.45 1.437h-8.515" fill="#fff"/></svg>',
      "friendlyName": "FOX Sports",
      "className": "foxSportsButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.foxsports.videogo",
          "androidName": "com.foxsports.videogo",
          "adbLaunchCommand": "adb shell am start -n com.foxsports.videogo/com.fox.app.MainActivity",
      },
      "apple-tv": {
          "appName": "FOX Sports",
      },
      "chromecast": {
          "appName": "com.foxsports.android",
          "androidName": "com.foxsports.android",
          "adbLaunchCommand": "adb shell am start -n com.foxsports.android/com.fox.app.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.foxsports.android",
          "androidName": "com.foxsports.android",
          "adbLaunchCommand": "adb shell am start -n com.foxsports.android/com.fox.app.MainActivity",
      },
      "xiaomi": {
          "appName": "com.foxsports.android",
          "androidName": "com.foxsports.android",
          "adbLaunchCommand": "adb shell am start -n com.foxsports.android/com.fox.app.MainActivity",
      },
   },


  "france-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="532" height="93" viewBox="0 0 532 93" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><defs><radialGradient id="PcGc" cx="-19%" cy="60%" r="146%" fx="-19%" fy="60%"><stop stop-color="#64c8d7" offset="0%"/><stop offset="28.000000000000004%" stop-color="#60c4d6"/><stop offset="56.99999999999999%" stop-color="#53b9d2"/><stop offset="86%" stop-color="#3fa7cc"/><stop offset="100%" stop-color="#329bc8"/></radialGradient><radialGradient id="gnG9" cx="50%" cy="50%" r="143%" fx="50%" fy="50%"><stop stop-color="#ff503c" offset="0%"/><stop offset="46%" stop-color="#ff5447"/><stop offset="100%" stop-color="#ff5a5a"/></radialGradient><radialGradient id="S1Dt" cx="-26%" cy="60%" r="127%" fx="-26%" fy="60%"><stop offset="60%" stop-color="#ffaa46"/><stop offset="75%" stop-color="#fdab48"/><stop offset="81%" stop-color="#f6b04f"/><stop offset="86%" stop-color="#e9b85b"/><stop offset="90%" stop-color="#d8c36c"/><stop offset="93%" stop-color="#c1d182"/><stop offset="96%" stop-color="#a4e39d"/><stop offset="99%" stop-color="#83f8bd"/><stop offset="100%" stop-color="#78ffc8"/></radialGradient><radialGradient id="YG5P" cx="46325%" cy="12595%" r="5848%" fx="46325%" fy="12595%"><stop stop-color="#ff503c" offset="0%"/><stop offset="46%" stop-color="#ff5447"/><stop offset="100%" stop-color="#ff5a5a"/></radialGradient></defs><g stroke="none"><path d="M43.3 14.4c1.6 0 3.2.2 4.8.6l2.5-14c-3-.8-6.4-1-9.6-1-8.2 0-14.6 3-19 7-4.2 4.2-6.5 10-6.5 19.8v2.5H0V43h15.6v47H32V43h18.7V29.4H32v-2c0-5.6 1-8 2.2-9.6 2-2.4 5.2-3.5 9.2-3.5h0zM160.7 90H145v-5c-4.7 4-10.7 6.2-16.8 6.2-4.4 0-8.6-1-12.6-2.7a31 31 0 0 1-10.3-7.6c-5-6-7.8-13.5-7.8-21.2 0-18 13.3-31.7 29.8-31.7 6.4-.1 12.7 2 17.7 6v-4.8h15.7V90zm-16.3-39.4c-1.7-2.3-4-4.2-6.6-5.5s-5.5-2-8.4-2c-9.5 0-15.6 8-15.6 16.7 0 9.5 7 16.5 16 16.5a18 18 0 0 0 8.2-2c2.6-1.3 4.7-3.2 6.4-5.5V50.6h0zM174 29.4V90H190V50.6c1.8-2.2 4-4 6.6-5.4 2.5-1.3 5.3-2 8.2-2 3.3-.1 6.6 1 9 3.4 2.3 2.3 3.6 5.4 3.6 11.4v32H234V59c0-10.3-2.3-16.5-6.3-21.2-2.5-3-5.8-5.5-9.4-7.2s-7.6-2.6-11.6-2.6c-6.2 0-12.3 2.2-17 6.2v-5H174h0zm164.8 62a33 33 0 0 0 24.9-10.9l-9.2-9.3c-3 3.2-8.4 7-15.3 7-8.6 0-15.5-5.8-16.4-14.3h42c.3-1.6.4-3 .4-4.7 0-16.8-12-31-28.7-31-18 0-29.5 14.8-29.5 31.7 0 19 13.7 31.5 31.8 31.5h0zm5.8-47a12 12 0 0 1 3.9 7.6h-25c.8-5.5 6.3-10.6 13-10.6a12 12 0 0 1 8.1 3zm-68.8 47a32 32 0 0 0 27.5-13.7l-12.5-9.3a17 17 0 0 1-6.2 5.7c-2.6 1.4-5.4 2.2-8.3 2.3-10 0-16.7-7-16.7-16.5-.1-3.3.8-6.5 2.6-9.3 1.8-2.7 4.4-5 7.4-6 2-1 4.2-1.3 6.3-1.3 2.8.1 5.5.7 8 2s4.5 3 6 5.3l11.6-10a32 32 0 0 0-11.4-9 33 33 0 0 0-14.2-3.2c-18.5 0-32.6 14.2-32.6 31.7s13.8 31.5 32.5 31.5h0zM95 43.8c-2-.5-4-.7-6-.7-7 0-12.7 5.2-14.7 8.8v38H58V29.4h15.7v6C77.4 31 84 28 91.4 28a34 34 0 0 1 5.5.5l-2 15.2h0z" fill="#fff"/><g fill-rule="nonzero"><path d="M530.4 29.4h-17l-16.6 37-16.7-37h-30.5v-17h-16.3v17h-15.6V43h15.6v21.3c0 8.6 1.4 14 4.5 18 4.2 5.5 11.3 8.8 21 8.8 3.4 0 6.8-.4 10.2-1.3l-2.5-13.7a38 38 0 0 1-6.7.6c-4 0-6.6-1-8.2-3-1.4-1.6-2-4-2-7.6V43h20l21.5 47h11.3l28-60.6h0z" fill="url(#PcGc)"/><path d="M397 76.2c9 0 16.5-7.4 16.5-16.5 0-9.2-7.4-16.6-16.5-16.6-9.2 0-16.6 7.4-16.6 16.6 0 9 7.4 16.5 16.6 16.5z" fill="url(#gnG9)"/><path d="M480.2 29.4h-30.5v-17h-16.3v17h-15.6V43h15.6v21.3c0 8.6 1.4 14 4.5 18 4.2 5.5 11.3 8.8 21 8.8 3.4 0 6.8-.4 10.2-1.3l-2.5-13.7a38 38 0 0 1-6.7.6c-4 0-6.6-1-8.2-3-1.4-1.6-2-4-2-7.6V43h20l21.5 47h1.2c2.4-7.7 4-15.6 4.4-23.6l-16.6-37h0z" fill="url(#S1Dt)"/><path d="M433.4 29.4h-15.6v13.8h15.6v21.2c0 8.6 1.4 14 4.5 18l.4.5c4.7-8.4 6.8-18 6-27.6-1-9.5-4.6-18.6-10.8-26h0z" fill="url(#YG5P)"/></g></g></svg>',
      "friendlyName": "france.tv",
      "className": "franceTVButton",
      "appName": "France TV",
      "androidName": "fr.francetv.pluzz",
      "adbLaunchCommand": "adb shell am start -n fr.francetv.pluzz/fr.francetv.androidtv.cmp.CmpActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "freevee": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1280 398.207" width="1280" height="398.207" xml:space="preserve"><path vector-effect="non-scaling-stroke" d="M196.031 0C129.873 0 84.961 50.97 84.398 110.86v11.61H24.28S-.92 185.293.026 185.037h84.372v108.838c0 14.17-4.506 32.14-25.944 40.64l24.869 63.692c38.704-15.193 69.025-52.313 69.076-104.332V185.037h47.69v150.361h68.027V199.449c7.577-8.78 21.234-16.076 45.001-18.777-6.757 14.758-10.354 31.027-10.354 47.641 0 34.24 12.453 64.615 37.617 85.875 18.968 16.026 45.142 26.1 78.637 26.19 21.554.05 38.756-3.226 55.996-9.588l-19.352-51.213c-8.447 3.11-21.093 5.811-30.782 5.799-11.877-.026-25.687-3.559-34.583-9.946-8.127-5.837-13.938-14.042-17.125-24.128h124.945c4.428 24.768 16.255 46.54 35.62 62.9 18.968 16.025 45.142 26.098 78.637 26.188 21.554.051 38.756-3.226 55.996-9.587l-19.352-51.213c-8.447 3.11-21.093 5.811-30.782 5.798-11.877-.025-25.687-3.558-34.583-9.945-8.127-5.837-13.938-14.042-17.125-24.128H722.83l32.996 84.096H828l38.026-96.922c2.24 30.08 14.59 56.589 37.232 75.725 18.969 16.026 45.143 26.1 78.638 26.189 21.554.05 38.756-3.226 55.996-9.587l-19.352-51.213c-8.447 3.11-21.093 5.811-30.782 5.798-11.877-.025-25.688-3.558-34.583-9.945-8.127-5.837-13.938-14.042-17.125-24.128h125.06c4.428 24.768 16.255 46.54 35.62 62.899 18.968 16.025 45.142 26.099 78.637 26.189 21.554.05 38.756-3.226 55.996-9.588l-19.352-51.212c-8.447 3.11-21.093 5.81-30.782 5.798-11.877-.026-25.7-3.558-34.596-9.946-8.127-5.836-13.938-14.041-17.125-24.128H1280v-22.77c0-50.92-33.828-111.45-108.575-111.45-45.82 0-80.237 23.552-98.233 56.23-16.14-31.309-47.254-56.23-95.212-56.23-30.539 0-56.01 10.47-74.939 27.123l8.524-21.734h-71.982l-47.587 133.644-48.022-133.644h-71.65l7.974 20.339c-17.38-15.54-41.162-25.728-71.828-25.728-45.77 0-80.16 23.513-98.17 56.128-16.152-31.258-47.254-56.128-95.16-56.128-33.713 0-61.244 12.749-80.622 32.499v-32.934c-16.818 0-35.94 5.824-53.09 18.713-4.724 3.546-9.318 7.68-13.248 12.416v-25.318H152.464v-11.943c0-27.225 19.403-44.697 45.385-44.697 4.288 0 8.563.896 11.801 1.677L233.354 7.45C222.846 3.008 211.263.026 196.096.026zm219.927 172.173c20.338 0 38.948 8.742 43.095 32.345H372.48c3.775-18.393 16.715-32.345 43.478-32.345zm193.33 0c20.338 0 38.948 8.742 43.095 32.345H565.81c3.776-18.393 16.716-32.345 43.479-32.345zm369.498 0c20.337 0 38.947 8.742 43.094 32.345h-86.573c3.776-18.393 16.716-32.345 43.479-32.345zm193.445 0c20.338 0 38.948 8.742 43.095 32.345h-86.573c3.775-18.393 16.715-32.345 43.478-32.345z" fill="#6b00ff"/></svg>',
      "friendlyName": "freevee",
      "className": "freeveeButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "IMDb TV",
          "androidName": "com.amazon.imdb.tv.android.app",
          "adbLaunchCommand": "adb shell am start -n com.amazon.imdb.tv.android.app/com.amazon.imdb.tv.android.app.MainActivity",
      },
      "apple-tv": {
          "appName": "Freevee",
      },
      "chromecast": {
          "appName": "Freevee",
          "androidName": "com.imdbtv.livingroom",
          "adbLaunchCommand": "adb shell am start -n com.imdbtv.livingroom/com.amazon.ignition.MainActivity",
      },
      "nvidia-shield": {
          "appName": "Freevee",
          "androidName": "com.imdbtv.livingroom",
          "adbLaunchCommand": "adb shell am start -n com.imdbtv.livingroom/com.amazon.ignition.MainActivity",
      },
      "xiaomi": {
          "appName": "Freevee",
          "androidName": "com.imdbtv.livingroom",
          "adbLaunchCommand": "adb shell am start -n com.imdbtv.livingroom/com.amazon.ignition.MainActivity",
      },
   },


  "fubo": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="887" height="386" viewBox="0 0 887 386" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M404.5 351.6H344v-9.8c-9 6.7-22.4 14.2-45 14.2-73.3 0-101.7-39.6-101.7-116.5v-122h60.5v122c-.2 20.8 0 60.3 43.5 60.3 42 0 42.4-37.3 42.4-60V117.5h60.8v234zM173.7 29.2C107.2 22 92 37 80 52.8c-10.8 14-12 33.6-12 47.6v17H34.5v56h34v178H129v-178h45.7v-56h-44.5v-15.8c0-16 13-18 19.4-17.7l13.3.6 10.8-55.4zm675.8 205.4c0-67.3-54-122-121-122a119 119 0 0 0-75 26.4 140 140 0 0 1 28.8 52.5c11-14 27.2-22.7 45.3-22.7 33 0 60 29.2 60 65.2s-27 65.2-60 65.2c-33 0-59.6-29-60-64.7a123 123 0 0 0-29.9-80.9c-21.7-25.2-53.4-41-88.8-41a114 114 0 0 0-60.5 17.1v-99l-60.6 12v309h60.6v-9.8c17.8 10.8 38.5 14.7 60.5 14.7 27 0 53-9.4 73.8-26.6a145 145 0 0 1-29.8-52.1 57 57 0 0 1-45.3 23.8c-32.8 0-59.3-30-59.3-67.2 0-37 26.5-67 59.3-67s59.3 30 59.3 67c0 67.3 54.3 122 121 122 67 0 121.3-54.4 121.3-121.7h0z" stroke="none" fill-rule="nonzero"/></svg>',
      "friendlyName": "fubo",
      "className": "fuboButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.fubo.firetv.screen",
          "androidName": "com.fubo.firetv.screen",
          "adbLaunchCommand": "adb shell am start -n com.fubo.firetv.screen/tv.fubo.mobile.presentation.onboarding.dispatch.controller.DispatchActivity",
      },
      "apple-tv": {
          "appName": "Fubo",
      },
      "chromecast": {
          "appName": "com.fubo.firetv.screen",
          "androidName": "com.fubo.firetv.screen",
          "adbLaunchCommand": "adb shell am start -n com.fubo.firetv.screen/tv.fubo.mobile.presentation.onboarding.dispatch.controller.DispatchActivity",
      },
      "nvidia-shield": {
          "appName": "com.fubo.firetv.screen",
          "androidName": "com.fubo.firetv.screen",
          "adbLaunchCommand": "adb shell am start -n com.fubo.firetv.screen/tv.fubo.mobile.presentation.onboarding.dispatch.controller.DispatchActivity",
      },
      "xiaomi": {
          "appName": "com.fubo.firetv.screen",
          "androidName": "com.fubo.firetv.screen",
          "adbLaunchCommand": "adb shell am start -n com.fubo.firetv.screen/tv.fubo.mobile.presentation.onboarding.dispatch.controller.DispatchActivity",
      },
   },


  "gcn-plus": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 400 94.158" width="400" height="94.158"><path d="M34.877 11.055c-14.406 3.396-18.698 10.26-23.514 37.61-4.025 22.858-3.911 25.413 1.41 31.629 5.295 6.186 3.748 5.96 40.835 5.96h32.646l4.124-2.008c2.473-1.205 5.802-3.71 8.317-6.259l4.193-4.25.87 2.405c1.268 3.506 6.063 7.981 9.985 9.318 2.927.997 7.432 1.138 36.412 1.138h33.072l1.219-7.388c.671-4.064 1.373-7.93 1.56-8.591.321-1.134-1.523-1.203-31.901-1.203-39.631 0-35.615 1.749-32.875-14.316 3.809-22.34 3.933-22.862 5.97-25.143l1.896-2.122 32.258-.191 32.257-.191 1.199-7.026c.659-3.864 1.361-7.734 1.558-8.602l.36-1.576-34.275.202-34.274.202-4.591 2.175c-8.472 4.013-13.959 10.966-15.642 19.818a386.12 386.12 0 0 1-1.113 5.67l-.33 1.547H85.21c-11.711 0-21.292.102-21.292.227s-.614 3.604-1.365 7.732c-.75 4.127-1.368 7.891-1.374 8.364-.008.659 3.278.859 14.167.859h14.178l-.47 3.544c-1.202 9.062-.312 8.827-33.367 8.827-30.167 0-29.57.084-29.57-4.195 0-3.921 5.531-33.018 6.582-34.621 1.774-2.707 2.322-2.754 36.343-3.109l32.959-.343 1.198-6.529c.66-3.592 1.215-7.38 1.234-8.42l.034-1.89-33.505.069c-18.428.038-34.666.343-36.085.677m184.318.15c-7.198 2.041-14.325 7.969-17.403 14.476-1.515 3.201-11.416 54.999-11.414 59.714 0 1.081.861 1.203 8.466 1.203h8.466l2.607-14.949c7.607-43.617 7.345-42.651 11.87-43.787 3.231-.811 4.484 1.085 17.667 26.715 10.669 20.742 13.446 25.611 15.715 27.554 8.339 7.138 22.161 5.568 31.289-3.554 5.879-5.874 6.466-7.781 11.844-38.464 2.641-15.069 4.925-27.939 5.076-28.601.249-1.097-.494-1.203-8.425-1.202l-8.699.001-4.774 27.319c-5.252 30.052-5.847 31.786-10.915 31.786-2.664 0-2.872-.34-16.288-26.497-6.918-13.489-13.276-25.354-14.127-26.366-4.128-4.906-13.804-7.375-20.955-5.348m127.986 7.867c-.836 4.82-2.006 11.469-2.601 14.777l-1.08 6.014h-14.705c-8.088 0-14.706.102-14.706.227s-.614 3.604-1.364 7.732c-.75 4.127-1.369 7.736-1.374 8.02-.006.283 6.581.515 14.637.515h14.648l-2.588 14.262c-1.424 7.843-2.603 14.647-2.621 15.12-.024.643 2.118.859 8.511.859h8.542l.707-3.608c.39-1.985 1.497-8.093 2.462-13.574.965-5.481 1.912-10.662 2.104-11.512.348-1.545.364-1.547 15.112-1.547 8.12 0 14.764-.102 14.764-.227s.614-3.604 1.364-7.732c.75-4.127 1.369-7.736 1.375-8.02.005-.283-6.645-.515-14.78-.515h-14.789l.35-1.547c.743-3.277 4.487-25.628 4.487-26.786 0-1.103-.814-1.221-8.468-1.221h-8.467l-1.52 8.763" fill="#fff" fill-rule="evenodd"/></svg>',
      "friendlyName": "GCN+",
      "className": "gcnPlusButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.playsportsnetwork.tourmalet.tv",
          "androidName": "com.playsportsnetwork.tourmalet.tv",
          "adbLaunchCommand": "adb shell am start -n com.playsportsnetwork.tourmalet.tv/com.playsportsnetwork.tourmalet.tv.MainActivity",
      },
      "apple-tv": {
          "appName": "gcn",
      },
      "chromecast": {
          "appName": "com.playsportsnetwork.tourmalet.tv",
          "androidName": "com.playsportsnetwork.tourmalet.tv",
          "adbLaunchCommand": "adb shell am start -n com.playsportsnetwork.tourmalet.tv/com.playsportsnetwork.tourmalet.tv.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.playsportsnetwork.tourmalet.tv",
          "androidName": "com.playsportsnetwork.tourmalet.tv",
          "adbLaunchCommand": "adb shell am start -n com.playsportsnetwork.tourmalet.tv/com.playsportsnetwork.tourmalet.tv.MainActivity",
      },
      "xiaomi": {
          "appName": "com.playsportsnetwork.tourmalet.tv",
          "androidName": "com.playsportsnetwork.tourmalet.tv",
          "adbLaunchCommand": "adb shell am start -n com.playsportsnetwork.tourmalet.tv/com.playsportsnetwork.tourmalet.tv.MainActivity",
      },
   },


  "go-play": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 800 162" width="800" height="162" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd"><path d="M42.5-.5h15c28.503 6.674 42.67 24.674 42.5 54-3.86 6.09-8.193 6.423-13 1 .103-21.314-10.064-34.814-30.5-40.5-21.114-1.7-34.948 7.467-41.5 27.5a1560.42 1560.42 0 0 0 0 79c5.297 17.159 16.964 26.159 35 27 17.894-1.561 29.56-10.895 35-28a338.42 338.42 0 0 0 .5-26c-11.671.166-23.338 0-35-.5-.964-4.112-1.298-8.445-1-13a552.47 552.47 0 0 1 47 0c1.833.5 3 1.667 3.5 3.5a324.09 324.09 0 0 1 0 36c-5.661 23.83-20.494 37.83-44.5 42h-11c-24.021-4.355-39.021-18.355-45-42v-78c5.769-22.769 20.103-36.769 43-42zm131 0h14c23.105 4.318 37.271 17.985 42.5 41a1599.45 1599.45 0 0 1 0 80c-5.973 22.809-20.473 36.475-43.5 41h-12c-24.452-4.284-39.285-18.617-44.5-43a1443.53 1443.53 0 0 1 0-76c5.119-23.953 19.619-38.286 43.5-43zm1 14c23.037-1.118 36.87 9.549 41.5 32a1224.64 1224.64 0 0 1 0 70c-3.755 19.586-15.588 30.253-35.5 32-18.437-1.117-30.27-10.451-35.5-28a1559.72 1559.72 0 0 1 0-79c4.642-14.814 14.476-23.814 29.5-27z" fill="#fff"/><path d="M259.5-.5h111c28.75 5.421 44.75 22.755 48 52-4.309 33.305-23.309 50.638-57 52 1.492 21.51-6.508 38.343-24 50.5-7.078 3.636-14.411 6.136-22 7.5h-10c-26.801-4.302-41.967-19.969-45.5-47l-.5-115zm29 28l81 .5c16.793 5.418 22.626 16.585 17.5 33.5-4.157 7.145-10.324 11.645-18.5 13.5-11.995.5-23.995.666-36 .5a799.78 799.78 0 0 1-.5 40c-5.974 16.735-17.14 21.569-33.5 14.5-5.601-3.706-8.767-8.872-9.5-15.5l-.5-87zm158-28h8c5.986 1.155 9.486 4.822 10.5 11l.5 124a1151.63 1151.63 0 0 1 48 .5c9.112 3.056 12.279 9.223 9.5 18.5-2.476 4.807-6.31 7.473-11.5 8h-75l.5-154c2.161-4.005 5.328-6.671 9.5-8zm164 0h8c5.229 2.06 9.063 5.726 11.5 11l56 133c1.448 9.447-2.385 15.447-11.5 18h-7c-3.45-1.489-6.283-3.823-8.5-7l-10.5-25c-23.333-1.333-46.667-1.333-70 0a271.86 271.86 0 0 1-11.5 27c-2.17 2.323-4.67 3.99-7.5 5h-7c-10.162-3.665-13.329-10.665-9.5-21l58-135c2.551-3.181 5.718-5.181 9.5-6zm3 45a763.34 763.34 0 0 1 24 59 576.95 576.95 0 0 1-48-1l24-58zm64-45h7c2.886 1.379 5.386 3.379 7.5 6l41 68 40-68c2.114-2.621 4.614-4.621 7.5-6h7c5.725 1.85 9.725 5.517 12 11v6l-51.5 87-1 49c-1.884 5.061-5.384 8.061-10.5 9h-7c-4.919-1.75-8.419-5.084-10.5-10l-1-49a2823.29 2823.29 0 0 1-52-86c-.355-8.482 3.478-14.148 11.5-17z" fill="#00f0c7"/></svg>',
      "friendlyName": "GO PLAY (BE)",
      "className": "goPlayButton",
      "appName": "be.goplay.app.tv",
      "androidName": "be.goplay.app.tv",
      "adbLaunchCommand": "adb shell am start -n be.goplay.app.tv/be.goplay.app.ui.consent.ConsentActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "go-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="599" height="301" viewBox="0 0 599 301" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M134.2 300.3c-7.2-1-26.6-5.6-33.4-8-19.7-7-41.2-20.8-56-36a152 152 0 0 1-40.1-71.9C2 174 0 173.8 0 151.2c.2-27 2.6-30.5 8.7-48.8A151 151 0 0 1 128.2 1.5c13.8-2.2 36.3-2 49.4.4a151 151 0 0 1 96 60.1l4.6 7.6c0 .6-3 3-6.7 5L213.8 110c-.6.5 17.7 1 43.5 1h44.5l2.4-7.3c3-10 11.8-27.6 18-37A153 153 0 0 1 423.7 1.5c12-2 36.8-2 48.2 0 55.2 9.5 100 47.3 118.3 99.8a124 124 0 0 1 8.1 49.2 114 114 0 0 1-2.8 29.7c-7 31-20.2 55.3-42 77a144 144 0 0 1-38.8 27.6c-24 12-39.8 15.6-68.5 15.5-16.6 0-19.7-.3-30.5-2.8-29-6.8-52.6-19.6-72.7-39.3-21-20.5-35.5-45.7-41.7-72-1.2-5-3-6.3-3-2.2 0 3.7-6.2 21.6-11 31.5-7.6 16-16 27.6-29.4 41a147 147 0 0 1-76.8 41.5c-9 2-38.4 3.3-46.8 2.2zm40-81.2c8.7-3 20.5-9.5 26-14.5a83 83 0 0 0 12.1-14.7 573 573 0 0 0-48-.9h-48v-78h96.2l-2-3c-3.6-6.4-17-17.6-26.2-22.3a65 65 0 0 0-35.9-7.4 66 66 0 0 0-37.6 12.2 73 73 0 0 0-6.6 114.9 69 69 0 0 0 50 17.3 54 54 0 0 0 19.9-3.5zm287.8 2.4a73 73 0 0 0 54.9-49.1c4-11.4 4.5-26.8 1.6-38.4a69 69 0 0 0-19.6-34.6C484 84.6 468.3 78 447.7 78c-34.6 0-63.7 23.6-71.4 58a91 91 0 0 0 .9 32c7 27 29 48 56 53.5a77 77 0 0 0 28.7 0z" stroke="none" fill="#f07c31" fill-rule="nonzero"/></svg>',
      "friendlyName": "GO TV",
      "className": "goTVButton",
      "appName": "mt.com.go.iptv.android.devices",
      "androidName": "mt.com.go.iptv.android.devices",
      "adbLaunchCommand": "adb shell am start -n mt.com.go.iptv.android.devices/com.minervanetworks.itvfusion.tv.yourtv.SingleActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "google-play-store": {
      "button": '<svg viewBox="0 0 162.28 32" xmlns="http://www.w3.org/2000/svg"><g data-name="Capa 2"><g data-name="Capa 1"><path d="m159.36 13.46-3 7.64h-.09l-3.13-7.64h-2.83L155 24.14l-2.68 5.94h2.75l7.23-16.62zm-21.2-6.34h-2.62v17.62h2.62zm-9.86 0H122v17.62h2.64v-6.67h3.67a5.59 5.59 0 0 0 5.78-5.47 5.6 5.6 0 0 0-5.79-5.48Zm.07 8.49h-3.73v-6h3.74a3 3 0 0 1 0 6Zm16.25-2.53a4.94 4.94 0 0 0-4.69 2.7l2.34 1a2.48 2.48 0 0 1 2.4-1.28 2.52 2.52 0 0 1 2.76 2.27v.18a5.73 5.73 0 0 0-2.73-.69c-2.51 0-5.07 1.38-5.07 4 0 2.36 2.05 3.88 4.37 3.88a3.66 3.66 0 0 0 3.34-1.72h.1v1.36H150V18c0-3.13-2.34-4.87-5.36-4.87Zm-.31 9.66c-.86 0-2.06-.44-2.06-1.5 0-1.36 1.49-1.88 2.79-1.88a4.67 4.67 0 0 1 2.4.59 3.19 3.19 0 0 1-3.13 2.79Zm-94.82 2.38A9.46 9.46 0 0 1 40 15.81a9.46 9.46 0 0 1 9.49-9.31 8.91 8.91 0 0 1 6.41 2.57l-1.81 1.79A6.51 6.51 0 0 0 49.49 9a6.77 6.77 0 0 0 0 13.54 6.25 6.25 0 0 0 4.72-1.87 5.26 5.26 0 0 0 1.39-3.2h-6.11V15h8.6a8.38 8.38 0 0 1 .13 1.59 8.37 8.37 0 0 1-2.21 6 8.57 8.57 0 0 1-6.52 2.53Zm22.03-6a5.94 5.94 0 1 1-11.87 0 5.94 5.94 0 1 1 11.87 0zm-2.6 0a3.35 3.35 0 1 0-6.67 0 3.35 3.35 0 1 0 6.67 0zm15.9 0a5.93 5.93 0 1 1-11.86 0 5.93 5.93 0 1 1 11.86 0zm-2.59 0a3.35 3.35 0 1 0-6.67 0 3.35 3.35 0 1 0 6.67 0zm15.57-5.63v10.77c0 4.42-2.63 6.24-5.73 6.24a5.75 5.75 0 0 1-5.34-3.5L89 26a3.33 3.33 0 0 0 3 2.13c2 0 3.22-1.23 3.22-3.52v-.86h-.1A4.12 4.12 0 0 1 92 25.12a6 6 0 0 1 0-12 4.18 4.18 0 0 1 3.16 1.34h.1v-1h2.54Zm-2.33 5.66a3.39 3.39 0 0 0-3.21-3.66 3.48 3.48 0 0 0-3.36 3.66 3.45 3.45 0 0 0 3.36 3.61 3.35 3.35 0 0 0 3.21-3.61Zm6.96-12.01v17.61h-2.64V7.14Zm10.4 13.96 2.06 1.36a6 6 0 0 1-5 2.66 5.81 5.81 0 0 1-5.89-6 5.52 5.52 0 0 1 10.75-2.18l.27.69-8 3.31a3.07 3.07 0 0 0 2.92 1.82 3.44 3.44 0 0 0 2.89-1.66zm-6.31-2.16 5.38-2.22a2.34 2.34 0 0 0-2.24-1.27 3.29 3.29 0 0 0-3.14 3.49z" style="fill:#5f6368"/><path d="M13.54 15.28.12 29.34a3.64 3.64 0 0 0 5.33 2.16l15.1-8.6z" style="fill:#ea4335"/><path d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.55 3.55 0 0 0 0-6.29z" style="fill:#fbbc04"/><path d="M.12 2.66a3.46 3.46 0 0 0-.12.92v24.84a3.66 3.66 0 0 0 .12.92L14 15.64Z" style="fill:#4285f4"/><path d="m13.64 16 6.94-6.85L5.5.51A3.72 3.72 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z" style="fill:#34a853"/></g></g></svg>',
      "button-round": '<svg xmlns="http://www.w3.org/2000/svg" width="700" height="700" viewBox="0 0 700 700" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M369.5 326.5L142 564.8a62 62 0 0 0 90.3 36.6l256-145.8z" fill="#ea4335"/><path d="M599.5 286L489 222.6 364.3 332l125 123.4 109.8-62.7a60 60 0 0 0 29.6-35.3c4.7-15.3 3.2-31.8-4.2-46a61 61 0 0 0-25.4-25.4z" fill="#fbbc04"/><path d="M142 112.6a63 63 0 0 0-2 15.6v421c0 5.2.7 10.5 2 15.6l235.3-232.2z" fill="#4285f4"/><path d="M371.2 338.7l117.6-116L233.3 76a63 63 0 0 0-31.7-8.6c-27.7-.1-52 18.3-59.5 45z" fill="#34a853"/></svg>',
      "friendlyName": "Google Play Store",
      "appName": "Play Store",
      "className": "googlePlayStoreButton",
      "androidName": "com.android.vending",
      "deviceFamily": ["nvidia-shield", "chromecast", "xiaomi"], },


  "hbo-max": {
      "button": '<svg viewBox="0 0 111 31" width="111" height="31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#maxapp)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.832 29.74H0V1.26h7.358v3.56C11.25 1.83 14.288.5 17.278.5c2.516 0 5.317 1.092 6.598 4.272C27.864 1.734 30.902.5 33.892.5c3.513 0 7.168 2.136 7.168 8.544V29.74h-7.832V11.798c0-2.374-.997-3.323-2.516-3.323-1.33 0-2.848.854-6.266 3.512v17.754h-7.832V11.798c0-2.374-.997-3.323-2.516-3.323-1.281 0-2.848.854-6.266 3.56V29.74zm49.13.76c3.844 0 7.167-1.424 9.73-4.51v3.75h7.453V1.26h-7.452v3.75C64.129 1.924 60.806.5 56.962.5c-7.785 0-14.24 6.693-14.24 15s6.455 15 14.24 15zm-7.215-15a8.387 8.387 0 0 1 8.401-8.402A8.387 8.387 0 0 1 66.55 15.5a8.387 8.387 0 0 1-8.402 8.402 8.387 8.387 0 0 1-8.401-8.402zm1.946 0c0 3.607 2.895 6.503 6.455 6.503s6.456-2.895 6.456-6.503c0-3.607-2.895-6.503-6.456-6.503-3.56 0-6.455 2.896-6.455 6.503zm23.829 14.24h9.446a62.37 62.37 0 0 1 7.642-9.968c2.849 3.086 5.222 6.361 7.453 9.969h9.541c-3.275-4.984-6.836-9.731-11.108-14.43 4.225-4.51 7.833-9.162 11.108-14.051h-9.351c-2.326 3.607-4.842 6.645-7.642 9.636-2.849-2.99-5.365-6.029-7.643-9.636h-9.446C78.75 6.29 82.405 10.8 86.677 15.31c-4.272 4.7-7.927 9.59-11.155 14.43z" fill="#fff"/></g><defs><clipPath id="maxapp"><path fill="#fff" transform="translate(0 .5)" d="M0 0h109.604v30H0z"/></clipPath></defs></svg>',
      "friendlyName": "Max",
      "className": "hboMaxButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.hbo.hbonow",
          "androidName": "com.hbo.hbonow",
          "adbLaunchCommand": "adb shell am start -n com.hbo.hbonow/com.hbo.max.HboMaxActivity",
      },
      "apple-tv": {
          "appName": "Max",
      },
      "chromecast": {
          "appName": "com.hbo.hbonow",
          "androidName": "com.hbo.hbonow",
          "adbLaunchCommand": "adb shell am start -n com.hbo.hbonow/com.hbo.max.HboMaxActivity",
      },
      "nvidia-shield": {
          "appName": "com.hbo.hbonow",
          "androidName": "com.hbo.hbonow",
          "adbLaunchCommand": "adb shell am start -n com.hbo.hbonow/com.hbo.max.HboMaxActivity",
      },
      "xiaomi": {
          "appName": "com.hbo.hbonow",
          "androidName": "com.hbo.hbonow",
          "adbLaunchCommand": "adb shell am start -n com.hbo.hbonow/com.hbo.max.HboMaxActivity",
      },
  },


  "hdhomerun": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1459" height="413" viewBox="0 0 1459 413" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><defs><linearGradient id="sQyr" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="16%" stop-color="#7efe00"/><stop offset="100%" stop-color="#1a9000"/></linearGradient></defs><g stroke="none"><path d="M20 0C6 0 0 2 0 17l1 374c-1 12 8 19 22 19h369c16 0 20-7 20-24V24c0-14 1-24-20-24" fill="url(#sQyr)" transform="translate(0 2)"/><path d="M470 130c-3 1-3 0-3 74l1 72c2 2 39 2 41 0s2-2 2-31v-29h39v29c0 29 0 30 1 31s2 1 21 1c18 0 19 0 20-1 2-2 2-143 0-145l-1-2h-19-20l-1 2c-1 1-1 3-1 27v26h-39v-26c0-27 0-27-3-28-2-1-36-1-38 0m604 0c-3 1-2 0-2 74l1 72c1 1 38 2 40 1 2-2 2-4 2-30v-26h5c14 0 17 4 27 37 3 9 6 17 6 18 2 2 41 2 43 0 2-1 1-3-6-23-13-36-16-43-20-46-2-2-2-2 3-5 11-6 17-18 17-33 0-20-11-33-33-38-5-2-80-3-83-1m61 33c9 2 12 5 12 12 0 10-7 13-24 13h-8v-26c13 0 17 0 20 1m-470 0c-44 3-70 38-56 78 16 48 97 53 120 7 15-30 2-66-29-79-8-4-26-7-31-6h-4m149 0c-10 1-21 6-27 12l-2 3v-5c0-4-1-5-2-6l-1-2h-17-17l-1 2-2 1v53c0 53 0 54 2 55 1 1 37 2 39 1 1-2 2-4 2-29 0-29 0-33 3-40 5-10 18-12 24-4 2 4 3 7 3 39 0 30 0 32 2 34 1 1 37 0 39-1 1-1 1-3 1-29 0-30 1-32 4-39 6-12 22-12 25 1 0 2 1 15 1 34 0 30 0 32 2 34 2 1 38 0 39-1 1-2 2-70 0-79-2-21-13-32-33-34-15-1-29 3-39 13-5 5-4 5-8 0-6-8-21-14-31-13h-6m181 0c-33 4-52 26-53 58 0 42 37 66 87 57 20-4 20-4 20-20 0-17 0-18-9-14-21 9-47 6-53-6l-1-3h35c42-1 37 1 37-11 0-41-25-65-63-61m413 0c-10 1-19 5-26 12l-4 3v-5c0-4 0-8-4-8h-33-2c-2 0 0 5 0 56 0 53 0 54 2 56 2 1 37 0 39-1 1-1 1-3 1-29 0-30 1-32 4-38 6-12 22-13 28-3 2 5 2 8 2 38 0 29 0 30 2 32l1 1h19 19l1-1 1-2c0-79 2-74-5-89-7-14-24-23-40-22h-5m-202 4l-1 1c0 86 1 88 12 100 15 16 51 15 65-1 2-3 2-3 2 3 0 8 0 7 20 7 17 0 17 0 18-1 2-2 2-107 1-109l-2-2c-35 0-40 0-40 3v5 22c0 30 0 32-3 39-5 8-16 12-24 8-6-4-7-8-7-44 0-28 0-30-1-31l-1-2h-19-18l-2 2m-197 26c6 2 10 6 11 12v3h-35v-2c2-9 9-14 18-14 2 0 5 0 6 1m-330 3c12 5 17 27 9 42-8 17-34 13-38-7-5-25 10-43 29-35" fill="#23241b"/><path d="M71 107c-11 2-20 10-23 20-1 3-1 151-1 157 2 13 11 23 23 26 5 1 278 1 281-1 10-3 17-11 20-21 1-4 1-154 0-159-2-11-10-19-21-22-3-1-274-1-279 0m32 29c2 0 2 0 2 30 0 21 0 28 1 28h55l1-1c-1-54 0-56 1-57l1-1c29 0 29 0 29 3 1 3 0 144-1 145s-28 1-29 0-1-3-1-32c0-27 0-31-1-31-1-1-55-1-55 0-1 61-1 62-2 63l-29-1h-1l1-146c2-1 26-1 28 0m169 0c52 2 77 26 77 73s-24 71-75 74c-9 1-48 1-49 0-3-1-3 2-3-74s0-72 2-73 36-1 48 0m-17 25h-1l1 97c1 1 14 1 19 0 22-2 38-17 42-39 5-28-12-53-38-58-4 0-22-1-23 0" fill="#040404"/></g></svg>',
      "friendlyName": "HDHomeRun",
      "className": "hdhomerunButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.silicondust.view",
          "androidName": "com.silicondust.view",
          "adbLaunchCommand": "adb shell am start -n com.silicondust.view/com.silicondust.view.App",
      },
      "apple-tv": {
          "appName": "HDHomeRun",
      },
      "chromecast": {
          "appName": "com.silicondust.view",
          "androidName": "com.silicondust.view",
          "adbLaunchCommand": "adb shell am start -n com.silicondust.view/com.silicondust.view.App",
      },
      "nvidia-shield": {
          "appName": "com.silicondust.view",
          "androidName": "com.silicondust.view",
          "adbLaunchCommand": "adb shell am start -n com.silicondust.view/com.silicondust.view.App",
      },
      "xiaomi": {
          "appName": "com.silicondust.view",
          "androidName": "com.silicondust.view",
          "adbLaunchCommand": "adb shell am start -n com.silicondust.view/com.silicondust.view.App",
      },
  },


  "home-assistant": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1706" height="235" viewBox="0 0 1706 235" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M240 219c0 8-7 15-15 15H15c-8 0-15-7-15-15v-90c0-8 5-20 11-26l98-99c6-5 16-5 22 0l98 99c6 6 11 18 11 26v90h0z" fill="#f2f4f9"/><path d="M229 103L131 4c-6-5-16-5-22 0l-98 99c-6 6-11 18-11 26v90c0 8 7 15 15 15h92l-40-41c-2 1-5 1-7 1-11 0-20-9-20-20 0-12 9-21 20-21s21 9 21 21c0 2-1 4-2 6l32 32V96c-7-3-11-10-11-18 0-12 9-21 20-21s21 9 21 21c0 8-5 15-12 18v81l31-31v-6c0-12 9-21 20-21s21 9 21 21c0 11-10 20-21 20-2 0-5 0-7-1l-44 44v31h96c8 0 15-7 15-15v-90c0-8-5-20-11-26h0z" fill="#18bcf2"/><path d="M320 41h25v61h64V41h25v146h-25v-63h-64v63h-25V41zm186 44c15 0 28 5 37 15 10 9 15 22 15 37s-5 28-15 37c-9 10-22 15-37 15s-27-5-37-15c-9-9-14-22-14-37s5-28 14-37c10-10 22-15 37-15zm0 83c8 0 15-3 20-9s8-13 8-22-3-17-8-22c-5-6-12-9-20-9s-15 3-20 9c-5 5-7 13-7 22s2 16 7 22 12 9 20 9zm220-44v63h-23v-59c0-7-1-13-5-16-3-4-8-6-14-6-7 0-12 2-16 6s-5 10-5 18v57h-24v-59c0-7-1-13-5-16-3-4-8-6-14-6s-12 2-16 6c-3 4-5 10-5 18v57h-24V88h22l1 10c6-9 15-13 28-13 7 0 14 2 19 5 6 3 10 8 13 13 2-5 7-10 12-13 6-3 12-5 20-5 11 0 20 3 27 10 6 7 9 17 9 29zm115 22h-76c1 7 4 13 9 17s11 6 18 6c12 0 21-5 25-15l20 8c-3 8-10 15-17 20-8 5-18 7-28 7-14 0-26-5-35-14-9-10-14-22-14-38 0-15 5-28 14-37 9-10 21-15 36-15 14 0 26 5 35 14 9 10 13 23 13 38v9zm-75-17h51c-1-8-3-14-7-18-5-4-11-6-18-6s-13 2-18 6-7 10-8 18zm227 24h-55l-12 34h-26l53-146h25l53 146h-26l-12-34zm-7-21l-20-58-21 58h41zm92 38c5 0 9-1 12-3l3-3c1-2 1-4 1-5 0-6-3-9-11-11l-13-3c-19-6-28-15-28-29 0-9 3-17 10-22 6-6 15-9 26-9 10 0 19 2 25 7a30.44 30.44 0 0 1 8 8c3 3 4 7 5 11l-22 5c0-2 0-4-1-5-1-2-2-3-4-4-3-2-6-3-10-3s-8 1-10 3c-2 1-3 2-3 4-1 1-1 3-1 4 0 2 0 3 1 4 0 1 1 2 2 3 2 2 5 4 9 5l13 3c9 2 16 6 21 11 2 2 4 5 5 8s2 7 2 10c0 9-4 17-11 22s-16 8-29 8c-11 0-20-2-27-7-3-3-6-6-8-9-2-4-3-7-4-11l22-4c0 2 0 3 1 5s2 3 4 4c3 2 7 3 12 3zm89 0c5 0 9-1 12-3l3-3c1-2 1-4 1-5 0-6-4-9-11-11l-13-3c-19-6-28-15-28-29 0-9 3-17 10-22 6-6 15-9 26-9 10 0 19 2 25 7a30.44 30.44 0 0 1 8 8c3 3 4 7 5 11l-22 5c0-2 0-4-1-5-1-2-2-3-4-4-3-2-6-3-10-3s-8 1-10 3c-2 1-3 2-3 4-1 1-1 3-1 4 0 2 0 3 1 4 0 1 1 2 2 3 2 2 5 4 9 5l13 3c9 2 16 6 21 11 2 2 4 5 5 8s2 7 2 10c0 9-4 17-11 22s-16 8-29 8c-11 0-20-2-27-7-3-3-6-6-8-9-2-4-3-7-4-11l22-4c0 2 0 3 1 5s2 3 4 4c3 2 7 3 12 3zm55-116c0-2 0-4 1-6s2-3 3-5c2-1 3-2 5-3s4-1 6-1 4 0 6 1c1 1 3 2 4 3 3 3 5 7 5 11s-2 8-5 11c-1 1-3 2-4 3-2 1-4 1-6 1s-4 0-6-1-3-2-5-3c-1-2-2-3-3-5s-1-4-1-6zm27 34v99h-24V88h24zm57 82c5 0 9-1 12-3l3-3c1-2 1-4 1-5 0-6-4-9-11-11l-13-3c-19-6-28-15-28-29 0-9 3-17 10-22 6-6 15-9 26-9 10 0 19 2 25 7a30.44 30.44 0 0 1 8 8c2 3 4 7 5 11l-22 5c0-2 0-4-1-5-1-2-2-3-4-4-3-2-6-3-10-3s-8 1-10 3c-2 1-3 2-3 4-1 1-1 3-1 4 0 2 0 3 1 4 0 1 1 2 2 3 2 2 5 4 9 5l13 3c9 2 16 6 21 11 2 2 4 5 5 8s2 7 2 10c0 9-4 17-11 22s-16 8-29 8c-11 0-20-2-27-7-3-3-6-6-8-9-2-4-3-7-4-11l22-4c0 2 0 3 1 5s2 3 4 4c3 2 7 3 12 3zm110 16c-6 2-11 3-17 3-10 0-18-3-24-9-5-5-8-13-8-24v-48h-15V88h15V57h24v31h22v20h-22v44c0 10 4 16 12 16 3 0 7-1 10-2l3 20zm79 1c-1-4-2-8-2-12-3 5-7 8-12 10-6 3-12 4-18 4-11 0-20-3-26-8-7-6-10-14-10-24 0-9 3-17 10-22 6-6 15-9 26-9h30v-3c0-7-2-11-6-14-3-3-9-5-15-5-12 0-20 5-25 15l-17-10c8-16 23-24 43-24 13 0 23 3 31 10 8 6 12 16 12 31v39c0 11 0 18 2 22h-23zm-2-44h-25c-5 0-9 1-12 4-2 1-3 2-4 4s-1 4-1 6c0 5 2 8 5 11 3 2 7 3 13 3 7 0 13-2 17-6 5-5 7-11 7-20v-2zm137-17v61h-24v-56c0-10-2-16-7-19-4-4-9-6-14-6-4 0-7 1-10 2s-5 3-8 5c-4 4-6 10-6 19v55h-24V88h22l1 11c3-5 7-8 12-10 6-3 12-4 18-4 12 0 22 4 29 11s11 17 11 30zm75 60c-6 2-11 2-17 3-10 0-18-3-24-9-5-5-8-13-8-24v-48h-15V88h15V57h24v31h22v20h-22v44c0 10 4 16 12 16 3 0 7-1 10-2l3 20z" fill="#1d2126"/></svg>',
      "friendlyName": "Home Assistant",
      "className": "homeAssistantButton",
      "appName": "io.homeassistant.companion.android",
      "androidName": "io.homeassistant.companion.android",
      "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n io.homeassistant.companion.android/.launch.LaunchActivity",
      "deviceFamily": ["amazon-fire"], },


  "hulu": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 329.813" width="1000" height="329.813"><path class="huluButtonSVG" d="M-241.012 192.768c16.556 13.46 24.846 34.472 24.846 63.043V399.29h-78.882V266.37c0-5.794-2.174-10.869-6.52-15.217-4.35-4.349-9.426-6.52-15.219-6.52h-45.963c-5.803 0-10.772 2.172-14.906 6.52-4.144 4.348-6.212 9.423-6.212 15.217v132.92h-79.504V69.475h79.503V176.93c1.243-.408 4.134-1.242 8.697-2.485 4.551-1.24 10.557-1.862 18.012-1.862h50.931c26.912 0 48.652 6.734 65.217 20.186zM9.3 172.581h79.503v139.13c0 26.087-7.144 47.205-21.428 63.354C53.088 391.215 33.726 399.29 9.3 399.29h-78.26c-27.33 0-49.176-7.55-65.528-22.67-16.364-15.11-24.536-36.743-24.536-64.907v-139.13h79.503v132.92c0 5.803 2.07 10.771 6.212 14.906 4.134 4.144 9.104 6.211 14.907 6.211h45.964c5.793 0 10.868-2.067 15.217-6.21 4.35-4.136 6.521-9.105 6.521-14.908zM149.05 69.476h79.503V399.29H149.05zm387.578 103.105v139.13c0 26.087-7.144 47.205-21.429 63.354-14.285 16.15-33.646 24.224-58.074 24.224h-77.64c-27.746 0-49.797-7.55-66.149-22.67-16.363-15.11-24.534-36.743-24.534-64.907v-139.13h79.503v132.92c0 5.803 2.066 10.771 6.211 14.906 4.135 4.144 9.104 6.211 14.906 6.211h46.584c5.795 0 10.764-2.067 14.907-6.21 4.134-4.136 6.212-9.105 6.212-14.908v-132.92z" style="fill:#000;fill-opacity:1" transform="translate(463.372 -69.476)"/></svg>',
      "friendlyName": "Hulu",
      "className": "huluButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield"],
      "amazon-fire": {
          "appName": "Hulu",
          "androidName": "com.hulu.plus",
      },
      "apple-tv": {
          "appName": "Hulu",
      },
      "chromecast": {
          "appName": "com.hulu.livingroomplus",
          "androidName": "com.hulu.livingroomplus",
          "adbLaunchCommand": "adb shell am start -n com.hulu.livingroomplus/.WKFactivity",
      },
      "nvidia-shield": {
          "appName": "com.hulu.livingroomplus",
          "androidName": "com.hulu.livingroomplus",
          "adbLaunchCommand": "adb shell am start -n com.hulu.livingroomplus/.WKFactivity",
      },
   },


  "ignite-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="624" height="149" viewBox="0 0 624 149" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#d50f00" fill-rule="evenodd"><path d="M7 .5C2.7 1.7.6 4 0 9v108.7c1 5.8 5 9 11.6 9 4 0 5 1.8 3 5.7-3.2 7-2 13.4 2.4 13.4 2.5 0 4-1.8 5-6.2 1.5-7.2 6-11.5 13.7-12.7l60.5-.3 59.8-.5c2.5-1.3 3-6 .6-7.5l-145-.8-1-.7c-2.2-1.5-2 3.3-2-54L9 11.3c1-1.8 1.8-2.3 4-2.5a9223 9223 0 0 1 182.6.3c1.6 1 2 1.8 2.2 7.2.1 6.2 1 7 4.5 7 4 0 4.6-1 4.6-9.3V7.7l-1-2c-1.2-2.3-3.2-4.2-5.5-5A8334 8334 0 0 0 7 .4m167 31.8c-3 1-6 4-6.8 6.7l.1 101c.7 3.6 3.8 6 8 6.8a840 840 0 0 0 52.7-.2c4-1 6-2.5 7-6l.6-2V89.2 40l-.6-1.7c-1-3-2.4-4.2-5.8-6l-55.3-.1m51 9c2.2 1.2 2-2.7 2 47.4l-1.7 48.8c-1.5 1.4-1.2 1.3-24.4 1.3-24.4 0-23.2.1-24.4-2-.4-1-.4-3.6-.4-47.4V42.8l.5-1c1.2-1.5 1-1.5 25-1.4l23.3.5m-25.3 20.6c-2.2 1.2-2.7 3-2.7 10.7 0 7.2-.7 8-5 5.6-3.4-2-6-1.8-7 1-1.3 2.6-.4 4.2 7 11.6 9.6 9.5 9 9.5 19.6-.7 6.5-6.5 7.3-7.5 7-9.7-.4-3.6-4-4.5-8.2-1.8-3.7 2.7-4.6 1.6-4.6-7-.3-7.5-.5-8.3-2.7-9.4-1.6-1-2.2-1-3.7-.2m-11 39.3c-4.4.8-5.5 6-1.6 8a213 213 0 0 0 28 .4c4.6-1 5.5-6 1.3-8-1.5-.7-24-1.2-27.6-.6m9.6 25c-2.3 2.3-.6 6.6 2.8 6.6 3 0 4.7-3.2 3.3-5.8-1-2-4.2-2.4-6-1M398 47v-3.4a4 4 0 0 0-.3-1.5c-.3-1.3-1.3-2-2.5-2.3-.4 0-.8-.1-1.2-.1h-5.7c-.6 0-1.2.1-1.8.3-1 .4-1.7 1-2 2.3-.1.4-.1 1-.1 1.3V108c0 .6 0 1 .2 1.6.4 1.6 1.7 2.4 3.7 2.4h5.7c.6 0 1-.1 1.6-.2 1.4-.4 2-1.3 2.4-2.7.1-.3.1-.7.1-1V64.8C398 59 401.6 54 407 52c2-1 4.5-1.6 7.2-2h3.7a38 38 0 0 1 5.8.5c9 1.8 11.6 7.8 12 13.8.1.4.1 1 .1 1.4V108c0 .5 0 1 .1 1.5.4 1.7 1.4 2.5 3.5 2.5h6c.5 0 1-.1 1.6-.3 1.3-.3 2-1.2 2.3-2.4.1-.4.2-.8.2-1.3V64.6a37 37 0 0 0-1.4-9.9c-3.5-11.3-13-16-24.3-16.6-.6 0-1.3-.1-2-.1-7.7 0-14.4 2.3-19.3 5.5-1.5 1-3 2.2-4.2 3.5zm-47 61.3v4.2c0 12.4-8.6 16-17.2 17-1.5.2-3 .2-4.7.2-1.5 0-3 0-4.6-.2-5-.6-8.8-1.8-11-2h-.4c-.2-.1-.3-.1-.5-.1-2.6-.1-4 1.4-4 3.8v3.7c0 .5.1 1 .2 1.6.4 1.4 1.3 2.3 3.2 3 .1 0 .3.1.4.1a48 48 0 0 0 10.8 2.1c2 .1 3.7.2 5.6.2 4.6 0 9.2-.5 13.7-1.6a27 27 0 0 0 21.7-24.4 36 36 0 0 0 .3-4.7V49.4c0-2.6-1.2-4-3-5l-1-.5-6.3-2.7a59 59 0 0 0-19.1-3.1h-.1a48 48 0 0 0-17.6 3.2 35 35 0 0 0-22.2 32.6c-.1.8-.1 1.6-.1 2.3 0 22.8 15 35.6 36.8 35.6l3.6-.1a52 52 0 0 0 15.1-3.3zm266-3v-4-.3c0-1.8-1.3-3.3-4.8-2.2l-2 .6a59 59 0 0 1-16.7 2.3 33 33 0 0 1-10.3-1.4C575 97.7 569.8 91.5 568 83l-.5-4.2 49.4-.2c.5 0 1 0 1.5-.1 2-.5 3-2 3.2-3.6 0-.1.1-.2.1-.3l.3-3.6v-.3a48 48 0 0 0-2-13.6c-4.4-13-15.4-19.6-30.8-19.6a40 40 0 0 0-15.6 2.9c-10.3 4.3-16.8 13-19 25-.6 3.2-1 6.4-1 9.7a49 49 0 0 0 2.6 16.1c5.4 14.5 18.6 22.3 37 22.3 8 0 15.3-1.3 20.6-3 2.7-1 3.5-2.5 3.5-5zm-95.3-17v-37h18c2.3 0 3.7-1 4-3 .1-.3.1-.6.1-1v-4c0-.6-.1-1-.2-1.6-.4-1-1.2-1.8-2.4-2-.5-.1-1-.1-1.5-.1h-18V23c0-.5-.1-1-.2-1.5-.5-1.6-1.8-2.4-4-2.4h-5.7c-.6 0-1 .1-1.7.2-1.2.4-2 1.2-2.3 2.5-.1.4-.1.8-.1 1.2v16.7h-6l-1.5.1c-1.3.4-2 1.2-2.3 2.5-.1.4-.1.8-.1 1.2v4c0 .5.1 1 .2 1.5.5 1.5 1.8 2.3 3.7 2.3h6v38a43 43 0 0 0 .9 8.8 17 17 0 0 0 14 14.2c2.6.5 5.2.8 8 .8 3.5 0 7.7-.4 11.2-1.3l1.7-.5c.4-.2.8-.3 1.2-.5 1.3-.6 1.8-1.5 1.8-3.4v-.1-4c0-2-.4-3.5-3.8-3.2h-.1c-1.5.1-5.6 1-9 1-.4.1-1 .1-1.3.1-1.7 0-3.3-.3-5-1-3.6-1.7-5.6-5.6-5.6-12zM279 108V18c0-2.2-1-3.5-3-3.8-.3-.1-.6-.1-1-.1h-6.6c-2 0-3.5 1-3.8 2.8-.1.4-.1.7-.1 1v90c0 2.2 1 3.5 3 4 .3 0 .7.1 1 .1h6.6c2.5 0 4-1.3 4-4zm204.3 0V43.5c0-2.5-1.3-4-4-4H473c-.5 0-1 0-1.5.2-1.6.4-2.4 1.7-2.4 3.7V108c0 2.6 1.2 4 4 4h6.2c2.5 0 4-1.3 4-4zM351 52.5v44.3c-.2.2-.4.3-.6.4a44 44 0 0 1-16.6 3.1c-5.3.2-10.5-1.2-15-4-5.2-3.6-8.7-9.8-9-19v-1.5c0-17 10.6-26.2 25.6-26.2a36 36 0 0 1 15.5 3v.1zM608.2 68h-40.5c1-9.2 5.8-16.4 14.8-18.7 2-.5 4.2-.8 6.4-.8a24 24 0 0 1 8 1.4c6.7 2.5 10.5 8.3 11.2 15.6a21 21 0 0 1 .1 2.5zM483.6 21.8v-6c0-2.5-1.3-4-4-4h-7c-.5 0-1 .1-1.5.2-1.7.5-2.4 1.7-2.4 3.7v6c0 2.5 1.2 4 4 4h7c2.5 0 4-1.2 4-4z"/></svg>',
      "friendlyName": "Ignite TV (Shaw)",
      "className": "igniteTVShawButton",
      "appName": "ca.shaw.freerangetv.tenfoot",
      "androidName": "ca.shaw.freerangetv.tenfoot",
      "deviceFamily": ["amazon-fire"], },


  "infuse": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1056" height="816" viewBox="0 0 1056 816" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><defs><linearGradient id="n4oM" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="47%" stop-color="#ff6701"/><stop offset="94%" stop-color="#e80900"/></linearGradient><linearGradient id="qN8r" x1="0%" y1="44%" x2="100%" y2="56%"><stop offset="67%" stop-color="#ff6701"/><stop offset="85%" stop-color="#e80900"/></linearGradient><linearGradient id="BAD9" x1="0%" y1="44%" x2="100%" y2="56%"><stop offset="59%" stop-color="#fe9900"/><stop offset="99%" stop-color="#ff6701"/></linearGradient></defs><g stroke="none"><path d="M265 248.4c-.5 0-.1 249.7 1.3 255.8 16.7 73.4 122 73.7 140.7.7l1.5-322c-20-15-97-39-139 43" fill="url(#n4oM)"/><path d="M394.2 45c-65.4 6.8-117.6 56.2-128 121.2-1 5.8-1.2 15.3-1.3 43 0 48.6-.1 46 1.6 36.7 10.7-55.5 68.8-88 121.7-68 78.8 31.8 304.4 215.6 305.3 215.8 1.2.3 3.5 4 3 3 113-104.5-17.8-189.7-18-190l-218.2-152a157 157 0 0 0-66.1-9.6m316.2 188" fill="url(#qN8r)"/><path d="M708.5 233a109 109 0 0 1 .6 150.9L350.3 648.2A72 72 0 0 0 406 764.4c19 0 29.3-4 50.5-19.4l261-188.2 37.8-27.2c42.2-27.8 63-52 75-87.4a151 151 0 0 0-.5-92.3c-10.6-30.4-27-51.3-57.5-73.5L702 225.8c-.3 0 2.6 3.2 6.4 7" fill="url(#BAD9)"/></g></svg>',
      "friendlyName": "Infuse",
      "className": "infuseButton",
      "appName": "Infuse",
      "androidName": "com.",
      "deviceFamily": ["apple-tv"], },


  "internet-silk-browser": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="331" height="151" viewBox="0 0 331 151" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M4.7.6C.5 2-1.2 6.8 1 11c2.8 5.8 12.7 4.7 14.4-1.6C17 3.3 11-1.7 4.7.6M307 9.3c-1.2.5-1.6 1.8-2.4 7-.8 5.6-.7 5.5-2.7 6-5.4 1.5-6 2.3-5.8 6.7.3 3 1 3.5 4.3 3.7l2.6.2.3 13.6c.2 15 .4 16 3 19.7 2.6 4 7.2 5.5 14.6 5.2 8.6-.4 9.7-1 9.8-6.6.1-5 0-5-5-4.8-8 .2-8 .2-8-15 0-13.5-.6-12.3 6-12.3s6.7 0 6.7-5.3c0-5.5.1-5.5-6.5-5.5s-6.3.4-6.3-6.2c0-5.5 0-5.8-1.4-6.5-1-.6-8-.6-9.2 0M84.7 10c-.5.5-1 2.6-1.6 6.3-1 6.2-1 6.2-4.6 7-3.3.6-4 1.4-4 5 0 3.7.4 4.2 3.3 4.2 4 0 3.7-1 3.7 13 0 21.8 2 25.4 15 25.8 10 .2 11.7-.7 11.7-6.2 0-4.8 0-4.8-5.2-4.6-7.5.2-7.6.1-7.6-15.4 0-14-.6-12.6 6.6-12.6 6.2 0 6.2-.1 6.2-5 0-5-.1-5-7-5.4l-5.6-.2-.2-5.7c-.2-7 0-7-6-7-3.7 0-4.3.1-5 .8m142.7 10.7c-5 .6-8.8 1.8-12.5 4-2.5 1.6-3.2 1.5-4-.2-1-2.2-1.8-2.6-6.4-2.6-6.4 0-5.8-2.7-5.8 24.3 0 19 .1 23 .6 23.5.7 1 11.8 1.2 12.7.3a90 90 0 0 0 .7-17.7l.1-17 1-.8c3-2.4 9.8-3.5 12.4-2 2.8 1.6 2.7 1.4 3 20 .2 13 .4 17 .8 17.4a25 25 0 0 0 12.4-.1c1.2-1.2 1.3-36.8.1-40.7-2-6-8-9.5-15-8.6m42 .3c-12.2 2.4-18.3 11-18.2 25.8 0 20.8 15.2 30.3 37.4 23.5 3.7-1 4.2-2 4.2-6 0-5-.1-5.2-7-4-11.7 2.3-19-.1-21-7-1-3.4-1.6-3.3 13.8-3.5 16-.2 14.5.3 15.2-5.8C295.4 27.7 285 18 269.4 21M51.8 21c-2.6.4-6.7 2-9.6 3.6-3.8 2-4 2-5-.2-1-2.2-3-2.8-7.8-2.3-4 .4-3.8-1.7-3.8 24.2 0 27-.8 24 6.8 24 7.4 0 6.6 2.2 6.8-18.2.3-19.8-.1-17.8 4-19.4 5-2 10-1.3 12 1.7.7 1.2.8 2.3 1 18.2.2 14.5.3 17 .8 17.3a30 30 0 0 0 12.4-.4 333 333 0 0 0-.2-39.9c-2-6.7-8.5-10-17.2-8.6m77.7.3C118.8 24 113 32.8 113 46.6c0 21 14.5 30.2 37.3 23.6 3.4-1 4-2 4-6 0-5-.2-5.2-6.2-4-12.6 2.8-22-.7-22-8.4l-.1-1.8L140 50l14-.3c1.3-1 2-11 1-15.3-2.6-10.6-13-16-25.4-13m56.8.6c-2.2.6-5 2-7.4 4.2-2.6 2.2-3 2.2-3.6-.6-1-3-1.8-3.6-6.5-3.6-3.7 0-4 .1-5 1l-1 1v22.4V69l1 1c1.3 1.3 11.4 1.3 12.4-.1a81 81 0 0 0 .5-16.6c0-14.6.1-16 .7-16.5 1.3-1 5.7-2 10.4-2 6-.1 5.7.1 5.7-6.5 0-6.8-1-7.6-7.3-6.2M1.6 23c-.8 1-1 44.6-.2 46C2 70.5 13 71 14 69.7a515 515 0 0 0 .1-46.5C13.4 22 2.5 22 1.6 23m138.8 9c1.7 1.2 2.8 3.7 2.8 6.3 0 2.8-.1 3-8.6 3-7.7 0-8.6-.2-8.6-2 0-6.3 9.2-11 14.4-7.2m137-.4c2.7 1.2 5 6.4 4 8.3a44 44 0 0 1-16.9 0c-1-5.6 7.2-11 13-8.3m-10.3 60.7c-13.7 1.7-26.8 8.2-23 11.3.5.5 1.8.4 7.3-.1 17-1.7 25.5-1 27.3 2.2 1.7 3-1.4 16.7-6.8 29.2-2.6 6 1 6.6 6 1.2 11.2-12 18.3-38 11.3-41.6a58 58 0 0 0-22.2-2.2M33 97.6c-2.2 1.4-.4 4 7.5 10.3C92 149.3 160 161.3 223.3 140c22-7.4 44.7-20.3 44.7-25.4 0-4-3.4-4.2-12-.8-70.7 27.6-149 22.6-215.2-13.6-5.5-3-6.4-3.3-7.7-2.6" stroke="none" fill="#fff"/></svg>',
      "friendlyName": "internet (Silk Browser)",
      "className": "internetSilkBrowserButton",
      "appName": "com.amazon.cloud9",
      "androidName": "com.amazon.cloud9",
      "adbLaunchcommand": "adb shell am start -n com.amazon.cloud9/com.amazon.slate.fire_tv.FireTvSlateActivity",
      "deviceFamily": ["amazon-fire"],},


  "i-play-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1022" height="497" viewBox="0 0 1022 497" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M203.4 51.2a38 38 0 0 0-25.3 26 9697 9697 0 0 0 .3 319.1c4.2 13.6 13.8 22.7 27.3 26 5.4 1.3 6 .2 2.2-3.8-1.6-1.8-4-5.6-5.5-8.5L235 57c0-1-8.3-4.7-13-6-5.5-1.4-13.3-1.3-18.6.2m407 35.7c-12.3 3.5-19.4 10.4-22.3 21.7-1.7 6.5-1.7 185.6 0 194.5 7 36.5 36.7 64.8 75.4 71.6 49 8.5 68.8-1.2 68.8-33.7 0-24.3-10.2-34.8-35.6-36.4-23-1.5-31.8-7.8-36-26.3-1.6-7-1-34 .7-37.4 4.2-8 5.8-8.5 26.7-9 22.4-.6 27.5-2 35-8.8 13-12.2 13-43.4-.1-55.6-7.6-7-12-8.2-34-8.8-27.5-.7-29-2.2-29-28 0-27.2-5-37.3-20.8-42.6-5.6-2-23-2.5-28.5-1m-539 3c-15 4.8-21.5 15.3-21.5 34.6 0 19.4 6.4 29.5 21.6 34.7 5 1.7 5.3 2.3 1.6 3C63 164.3 54 173.5 51 185c-1.5 6.5-1.5 164 0 170.6 3.8 16 15.8 24.3 35 24.4 20.6 0 33-9.2 36-26.8a4219 4219 0 0 0 .7-159.7c-1.8-17.8-10.3-29-23.7-31.2-3.7-.6-3.3-1.3 2-3 15.4-5 21.2-14.3 21.3-34.3.1-20.4-6.2-30.6-21.7-35.2-5.5-1.7-24-1.5-29 .2m708 69c-27 5-35 26-22.3 60 13.5 37 63.5 135.4 75.4 148.5a46 46 0 0 0 53.6 2.5c11.5-9.2 67.4-119 79.8-156.5 11-34-1-54.7-32.2-54.7-23.2 0-31.5 7-43 37l-5.2 14c-8.7 22.7-29.5 28.7-43 12.3-4-5-7-11.2-11.3-23.2-10.7-30.6-20-39.5-41.6-40-4.8-.1-9.5-.1-10.4.1m-255.7 68L227 430.2c-6-1.5-6.2-1.4-4.7 1 3.5 5.5 13.4 11.7 21 13 12 2.3 18.2.5 37.4-10.6l59-34.3L512 299c21.4-12.5 25.8-17 30-31.5 3.4-11.7-.5-25.6-10-35.5-5-5.3-9.6-8-8.4-5"/><path d="M229 58.6c-11.7 2.3-21 9.6-26.3 20.3l-2.8 6v160 159.8l3 6a36 36 0 0 0 50.2 16.2l20-11.5 118-68.7 44.7-26 46.3-27c34.7-20 35.8-21 40.7-30.4 6-11.3 6.7-19.2 3-30-4.8-14-7.7-16.6-37-33.6l-85.4-49.7-44-25.5L293 85.7 246.6 60c-6.8-2.2-11.7-2.6-17.6-1.4" fill="#e74c3c"/></svg>',
      "friendlyName": "iPlayTV",
      "className": "iPlayTVButton",
      "appName": "iPlayTV",
      "deviceFamily": ["apple-tv"], 
  },


  "iptv-extreme-pro": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="519" height="113" viewBox="0 0 519 113" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><g stroke="none" fill-rule="nonzero"><path d="M52 26.5l1-1c-3.6-6.8-11-14-18.4-16.5V0C19 2.7 46 23.3 52 26.5z" fill="#464648"/><path d="M34.7 0v9l18 16-3 4h16v-1h-9v-6l-22-22z" fill="#737577"/><path d="M80.6 0l-20 24c4.4 4.5 23-14.7 20-24z" fill="#68696b"/><path d="M80.6 0c-.1 11.5-11.8 14.5-17 24l-7-2v6h9c4.8-9.6 14.3-12.7 20-20.5C89 3.2 84.3.6 80.6 0z" fill="#404042"/><path d="M.6 54l8 2c.6-24.3 29.3-19.3 47-20.5 6.7.5 14-.8 20 2.8 6.6 3.8 11.6 15.4 12 22.7 6.7-2.2 30 34 26-24-.4-11.5-1-8-36.8-9-66 0-65.6-1.5-71.6 2C-.6 35.7.6 46.7.6 54z" fill="#909295"/><path d="M7.7 29l1 1-1-1m99 0l1 1-1-1z"/><path d="M20.6 39.5V61l11 2.5v-27l-11 3z" fill="#f28c70"/><path d="M31.6 37.5l.1 24.5h10V36l-10 1.5z" fill="#f8ec87"/><path d="M51.6 36L51 62.5c17.4 1.5 11.5 0 12-26L51.6 36z" fill="#c1d74c"/><path d="M62.6 36.5l.1 24.5 10 3 1-24.5-11-3z" fill="#94d3f3"/><path d="M69.4 38.3l.7.3-.7-.3z" fill="#678594"/><path d="M72.6 38v24L87 57.5C85 47.5 80 41.3 72.6 38z" fill="#a477b4"/><path d="M20.6 73l.2-32c-11.2-3-19.2 19-.2 32z" fill="#f7f7f7"/><path d="M9.6 57l2 42 9 5V60l-11-3z" fill="#e4e5e6"/><path d="M11 55.6L8 54 .6 51.8 3 65l5 19 2.5-.5.5-28z" fill="#555557"/><path d="M20.6 60v28 14l11 6 .5-46-11.5-2z" fill="#ce3729"/><path d="M86.6 57c-.1 26-.8 36.3-8 42.7-4.5 4-8 4.3-16 5.2-13.6 1.4-37.3 2.4-48-8-6.8-6.5 5 11.7-14-45.2-1 5-2 55.2 9 59.3a287 287 0 0 0 28 .9h62c14.2-.4 15-12.8 15-24l-1-39s-21.3 8-27 8z" fill="#403f41"/><path d="M72.6 60v46l14-11.5V57l-14 3z" fill="#754c98"/><path d="M62.6 61l-11 1v44h12l-1-45z" fill="#77ab36"/><path d="M41.6 36v26h10V35.5l-10 .5z" fill="#f1d700"/><path d="M31.7 62l-.1 42 10 1 .1-43h-10z" fill="#f1ad31"/><path d="M87 70l-2 25.5-7.5 6.5c4-3.5 13 2.5 10-43.5L87 70z" fill="#68676d"/><path d="M62.6 61v45h10V60l-10 1z" fill="#4598c1"/><path d="M41.6 62v42l10 1V62h-10z" fill="#dec000"/><path d="M99.4 84.3l.7.3-.7-.3z" fill="#7e7f81"/><path d="M10.6 74c-3 36 10 33 51 34 17-1 26-5 26-23-6 18-9 22-61 18 0 0-17-1-16-29z" fill="#7d7f81"/><path d="M96.7 89h6c-1.4-4.3-4.6-4.3-6 0z" fill="#aaacaf"/><path d="M102.7 87l-6 2c2.6 3 6.2 2.3 6-2z" fill="#898b8e"/><path d="M99.4 95.3l.7.3-.7-.3z" fill="#848486"/><path d="M96.7 96c.8 11 10.7 1.4 0 0z" fill="#a1a3a6"/><path d="M95.7 97v4h1l-1-4z" fill="#68686a"/><path d="M8.6 55.5l1 19.5c1-22 1.5-36.5 24.5-37.5 7.4 0 34-1.5 40.5 2.5 12 9.4 10 13 13 20 1-7-6-22-15-23.5-6.7-2-2-.5-21-1.5-16 0-42.8-2.2-43 20.5z" fill="#3e3e3f"/></g><path d="M429.6 94V55.6h7.3v7q1.5-4 4.4-6 3-2 6.6-2 4.4 0 7 2c1.6 1 2.7 3 3.3 5 .8-1.8 2-3.3 3.4-4.4.4-.3.7-.6 1-.8q3-2 6.3-2 5 0 7.4 2.3c1.4 1.2 2.4 3 3 5 .1.5.3 1 .4 1.6l.4 3q.4 3.5.4 8.4V94h-7.4V74.7q0-5.3-.7-8.2L472 65c-.5-1.4-1.6-2.5-2.8-2.8-.5-.1-1-.2-1.5-.1-1-.1-1.8.1-2.7.4-1.5.5-3 1.6-3.8 3-1 1.4-1.5 3-1.8 4.7q-.4 1.8-.4 4v.8 19h-7.4V73.4q0-4.5-.2-6.6c-.1-.6-.2-1.2-.5-1.8-.2-.6-.6-1.2-1-1.7-.4-.3-.7-.6-1-.7q-1.2-.5-3-.5c-1.5 0-3 .5-4.3 1.6l-.1.1c-1.3 1-2.3 2.4-3 4-.1.3-.3.5-.4.8q-1.2 3-1.2 6.4v19h-7.4zM236 94l-23-61.7h8.6l15 42.4 15-42.4h8.6L237 94h-1zm45 0V32.4h22v8.2h-14.4v17H300V66h-11.6v19.7H305V94h-24zm-89.4 0V40.6h-12.8v-8.2H212v8.2h-13V94h-7.5zm116.7 0L320 74l-11-18.5h8.7l6.4 12 6-12h9l-11 18L340 94h-8.4l-7.4-13.6-7 13.6h-8.8zM146 94V32.4h11a27 27 0 0 1 4.9.4q2.5.4 4.4 1.3c1.6.7 3 1.8 4.4 3.2 2 2.5 3.5 5.7 4 9.3.2 1.4.3 2.8.3 4.2 0 2-.2 4-.5 6q-.8 4.2-2.8 7.3c-.4.7-1 1.3-1.4 2q-3.8 4.2-10.4 5l-3.6.2h-2.6V94H146zm275.7-16h-22.5l.6 3q1 3 2.4 4.5 2 2 5 2.2c.4.1.8.1 1.2.1q2.2 0 4-.4c.4 0 1-.2 1.3-.3q2-.7 4-1.8l2.2 6.4Q418 93 415.2 94q-3 1-7 1c-1.3 0-2.7-.1-4-.4q-3-.7-5.3-2.3c-1.6-1.2-3-2.7-4-4.5-.5-1-1-1.8-1.4-3a28 28 0 0 1-1.7-8.8V75a22 22 0 0 1 .5-5.7c.3-1.7.8-3.5 1.5-5q2-4.7 5.8-7c2-1.4 4.3-2.2 6.6-2.4.5-.1 1-.1 1.7-.1 1.3 0 2.7.1 4 .4q4.2 1 6.7 4.5 3 4.2 3.4 11.5a17 17 0 0 1 .1 2.3l-.2 3.8v1zm96.6 0H496c.1 1 .3 2 .6 3q.8 3 2.3 4.5 2 2 5 2.2c.4.1.8.1 1.2.1q2.3 0 4-.4c.5 0 1-.2 1.4-.3q2-.7 3.8-1.8l2.3 6.4q-1.7 1.4-4.7 2.4-3 1-7 1c-1.4 0-2.8-.1-4-.4q-3-.7-5.2-2.3c-1.6-1.2-3-2.7-4-4.5-.6-1-1-1.8-1.4-3-1-2.7-1.7-5.7-1.8-8.8V75c0-2 .1-3.8.5-5.7.3-1.7.8-3.5 1.6-5q2-4.7 5.7-7c2-1.4 4.3-2.2 6.6-2.4.6-.1 1-.1 1.7-.1 1.4 0 2.7.1 4 .4q4.3 1 6.7 4.5 3 4.2 3.4 11.5a17 17 0 0 1 .1 2.3l-.1 3.8c0 .3-.1.6-.1 1zm-170 16V63H343v-7.4h5.5V40l7.4-2v17.7h7.2V63h-7.2v31h-7.4zM127 94V32.4h7.6V94H127zm242 0V55.6h7.3V63a14 14 0 0 1 2-4.3c.4-.7 1-1.3 1.6-2q2.4-2.3 5.5-2.3 2.2 0 3 .5l-1 9q-.6-.5-2.6-.5-3.2 0-6 2.6c-1 1-1.7 2.3-2 4q-.4 1.3-.5 3v1V94h-7.3zm-215-31h2.8c1 0 2-.1 3-.3q3.7-.6 5.4-3 2.4-3.3 2.4-8c0-1.2-.1-2.4-.4-3.6-.3-1.7-1-3.2-2-4.5-.7-1-1.6-1.6-2.5-2q-1-.6-2.5-.8c-1-.2-2-.3-2.8-.3h-3.5V63zm245.5 8.7h15.5v-.3q0-3-.6-4.8c-.2-.8-.6-1.6-1.2-2.2-.7-.8-1.5-1.4-2.4-1.7q-1-.3-2-.4c-.3-.1-.7-.1-1-.1a8 8 0 0 0-3.4.7q-3 1.3-4 5a22 22 0 0 0-.8 3.7zm96.7 0h15.5v-.3q0-3-.6-4.8c-.3-.8-.7-1.6-1.3-2.2-.7-.8-1.5-1.4-2.4-1.7q-1-.3-2-.4c-.3-.1-.7-.1-1-.1-1 0-2.3.2-3.4.7q-2.8 1.3-4 5l-.7 3.7z" stroke-linejoin="miter" fill="#000" stroke-width=".7"/></svg>',
      "friendlyName": "IPTV Extreme Pro",
      "className": "ipTVExtremeProButton",
      "appName": "com.pecana.iptvextremepro",
      "androidName": "com.pecana.iptvextremepro",
      "adbLaunchcommand": "adb shell am start -n com.pecana.iptvextremepro/com.pecana.iptvextremepro.MainActivityTv",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"],},


  "iptvx": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="459" height="561" viewBox="0 0 459 561" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><defs><linearGradient id="iA6a" x1="0%" y1="83%" x2="100%" y2="17%"><stop offset="4%" stop-color="#fe2201"/><stop offset="30%" stop-color="#a70000"/><stop offset="70%" stop-color="#a70000"/><stop offset="90%" stop-color="#fe2201"/></linearGradient><linearGradient id="Zunv" x1="0%" y1="44%" x2="100%" y2="56%"><stop offset="71%" stop-color="#ff2500"/><stop offset="100%" stop-color="#ff551b"/></linearGradient></defs><g stroke="none"><path d="M347.2 34.5c-34 1-58 38.4-61.4 42.8-42.6 79-64 96-63.6 96.2l88 107L419 135c8.8-17.2 8-23.5 8.3-26.2a70 70 0 0 0-.3-15.6 68 68 0 0 0-5.3-18.1c-5.4-11.5-11-17-18.3-22.5a104 104 0 0 0-20.6-12.1 86 86 0 0 0-35.5-5.9M175.2 243a839 839 0 0 1-41.3 59.1C50.2 400.4 41.5 413 32.2 436.4c-14.5 71.5 48 91.5 65.2 90.4 22.8-.4 32.8-7.4 49-19.5 8.4-5.6 30-31.6 33.7-37l75-130" fill="url(#iA6a)"/><path d="M91 31.2a64 64 0 0 0-16.9 7.3c-14.5 10.5-22 20-22 20-4.5 6.5-5.3 8-6.3 9.8a77 77 0 0 0-8.5 21c-2.7 25.7 2.3 39.2 2.3 38.7l13.2 31.2 93 144.3c32 49.4 34.6 131.5 33.5 155 0 9 .8 11.7 1 12 0 0-.1.1.3-.4l46-69.8C257.6 444.5 290 494.5 315 517c22.5 17.5 51.5 12.5 73 1 14.5-8.5 24-15.6 32-32.6 8-22 7-32 6.6-40.5 0-17-22-44.3-22-44.6-85.7-129.8-88.7-137.8-90-141.8-31.6-87-29.6-106.5-31.5-122a285 285 0 0 1 2.6-60.3c-.7 1.2-5.2 7-14 19.7l-39.2 57.8-73-102.8c-9-10.5-21-16.5-36.3-19.3-3-.7-16.2-3.2-32.3-.5" fill="url(#Zunv)"/></g></svg>',
      "friendlyName": "IPTVX",
      "className": "iptvXButton",
      "appName": "IPTVX",
      "deviceFamily": ["apple-tv"], },


  "ipvanish": {
      "button": '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 119.3 29.4" xml:space="preserve"><path style="fill:#64bc44" d="M31.5 23.4 25.9 6.1h5.3l1.8 7.5c.4 1.8 1 4 1.3 6h.1c.3-2 .7-4.2 1.2-6.1l1.7-7.4h5.3l-5.8 17.3h-5.3zM48.2 19.5l-1.1 4h-4.7l5.5-17.3h5.9l4.9 17.3H54l-1.1-4h-4.7zm4.1-2.7-.9-3.6c-.2-1.1-.6-2.8-.9-4h-.1c-.2 1.2-.6 3-.9 4l-1 3.6h3.8zM61.3 23.4V6.1h4.5l3.9 6.8c.7 1.4 1.9 3.5 2.7 5h.1c-.1-1.8-.5-4.8-.5-8V6.1h4.3v17.3h-4.5l-3.9-6.6c-.9-1.5-1.9-3.6-2.6-5.2h-.1c.1 1.7.3 4.4.3 7.9v3.9h-4.2zM85.4 6.1v17.3h-4.9V6.1h4.9zM89.2 20c1 .4 2.7.6 4.2.6 2.4 0 3.4-.9 3.4-1.9 0-1.3-1.1-1.9-3.2-2.8-3.4-1.4-4.7-3.3-4.7-4.8 0-2.8 2.7-5.1 7.9-5.1 1.6 0 3.2.3 4 .6l-.8 2.9c-.7-.3-1.8-.6-3.2-.6-2 0-3.1.9-3.1 1.8 0 1.1.7 1.6 3.4 2.7 3.3 1.4 4.5 3.1 4.5 4.9 0 3.2-3.4 5.2-8.3 5.2-2 0-4-.3-4.8-.7l.7-2.8zM109.2 6.1v7h5.1v-7h4.9v17.3h-4.9v-7.3h-5.1v7.3h-4.9V6.1h4.9z"/><g><path d="M4.9 6.1v17.5H0V6.1h4.9zM9 6.3c1.4-.2 3.2-.3 5.1-.3 2.9 0 5.2.3 6.9 1.4 1.5.9 2.2 2.4 2.2 3.9 0 1.9-.9 3.2-2.2 4.2-1.6 1.2-4.1 1.6-6.1 1.6h-1v6.5H9V6.3zm4.8 8h.8c2.5 0 3.6-1.2 3.6-2.8 0-1.5-.9-2.7-3.2-2.7-.4 0-.9 0-1.2.1v5.4z"/></g></svg>',
      "friendlyName": "IPVanish VPN",
      "className": "ipVanishButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.ixolit.ipvanish",
          "androidName": "com.ixolit.ipvanish",
      },
      "apple-tv": {
          "appName": "IPVanish",
      },
      "chromecast": {
          "appName": "com.ixolit.ipvanish",
          "androidName": "com.ixolit.ipvanish",
      },
      "nvidia-shield": {
          "appName": "com.ixolit.ipvanish",
          "androidName": "com.ixolit.ipvanish",
      },
      "xiaomi": {
          "appName": "com.ixolit.ipvanish",
          "androidName": "com.ixolit.ipvanish",
      },
  },
  

  "iqiyi": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="513" height="164" viewBox="0 0 513 164" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M254.3 159.5c0 .7.7 1.3 1.5 1.3h34c.8 0 1.4-.6 1.4-1.3V5.7c0-.7-.6-1.3-1.4-1.3h-34c-.8 0-1.5.6-1.5 1.3v153.8zm-251 0c0 .7.6 1.3 1.4 1.3h34.2c.8 0 1.4-.6 1.4-1.3V62.7c0-.7-.6-1.3-1.4-1.3H4.6c-.8 0-1.4.5-1.4 1.3v96.8zm149-32.4a46 46 0 0 1-53.1-37.8C94.6 64 111 39.6 135.8 35A46 46 0 0 1 188.9 73c4.6 25.3-11.8 49.6-36.6 54zm79.5 7.3l-17-13.6-.7-1 .2-1.3c8-15.2 11.3-33.2 8-51.5-7.8-43.4-49.2-72.2-92.5-64.3a80 80 0 0 0-64.2 92.8c7.8 43.3 49.2 72 92.5 64.2a78 78 0 0 0 32.2-13.6c.7-.5 1.6-.5 2.3 0l18 14.6c.6.5 1.5.4 2-.2l19-24c.5-.6.4-1.5-.2-2zm278.8-130h-34.2c-.8 0-1.4.6-1.4 1.3v153.8c0 .7.6 1.3 1.4 1.3h34.2c.8 0 1.4-.6 1.4-1.3V5.7c0-.7-.6-1.3-1.4-1.3zm-489-3C9.7 1.3 0 11 0 23 0 35.2 9.7 45 21.7 45S43.4 35.2 43.4 23c0-12-9.7-21.8-21.7-21.8zm435.2 3h-36.4c-.6 0-1.2.3-1.5.8l-33.8 60.4-.5.5h-.1l-.5-.4v-.1L350.2 5.2c-.3-.5-1-.8-1.5-.8h-36.4c-1 0-2 1-1.3 2.5l54 91.5c.5.8.8 2 .8 3v58c0 1 .7 1.6 1.6 1.6h34.2c1 0 1.6-.7 1.6-1.6v-58c0-1 .3-2 .8-3l54-91.5c.8-1.5-.3-2.5-1.3-2.5z" stroke="none" fill="#00dc5a"/></svg>',
      "friendlyName": "iQIYI",
      "className": "iqiyiButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.iqiyi.i18n.tv",
          "androidName": "com.iqiyi.i18n.tv",
          "adbLaunchcommand": "adb shell am start -a android.intent.action.MAIN -n com.iqiyi.i18n.tv/.launch.LaunchActivity",
      },
      "apple-tv": {
          "appName": "iQIYI",
      },
      "chromecast": {
          "appName": "com.iqiyi.i18n.tv",
          "androidName": "com.iqiyi.i18n.tv",
          "adbLaunchcommand": "adb shell am start -a android.intent.action.MAIN -n com.iqiyi.i18n.tv/.launch.LaunchActivity",
      },
      "nvidia-shield": {
          "appName": "com.iqiyi.i18n.tv",
          "androidName": "com.iqiyi.i18n.tv",
          "adbLaunchcommand": "adb shell am start -a android.intent.action.MAIN -n com.iqiyi.i18n.tv/.launch.LaunchActivity",
      },
      "xiaomi": {
          "appName": "com.iqiyi.i18n.tv",
          "androidName": "com.iqiyi.i18n.tv",
          "adbLaunchcommand": "adb shell am start -a android.intent.action.MAIN -n com.iqiyi.i18n.tv/.launch.LaunchActivity",
      },
  },


  "israel-station": {
      "button": 'Israel <span style="color: #127592">Station</span>',
      "friendlyName": "Israel Station",
      "className": "israelStationButton",
      "appName": "israelstation.androidtv",
      "androidName": "israelstation.androidtv",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "iVysílání-České-televize": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1038" height="218" viewBox="0 0 1038 218" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M319.7 108l-3.8 49c-7 42-18 51.7-76.8 56.4l-63 2.8v-27.8a394 394 0 0 0 28.1-1.9c32.7-3.5 38.8-10.6 42.8-42 1.6-13 2-27 2-36.4l-2-36.5c-4-31.4-10-38.5-42.8-42a394 394 0 0 0-28.1-1.9V0l63 2.8C297.8 7.5 308.7 17 316 59.2a317 317 0 0 1 3.8 48.9" fill="#ff0019"/><path d="M80.6 2.8C102 1 125 .3 143.7 0v27.7l-28 2c-32.7 3.3-39 10.5-43 42-1.7 13-2 27-2 36.5 0 9.4.5 23.3 2 36.4 4 31.4 10 38.5 42.8 42l28 2v27.8l-63-2.8C22 208.7 11 199.2 3.8 157A306 306 0 0 1 0 108a317 317 0 0 1 3.8-48.9C11 17 22 7.5 80.6 2.8M403.3 54c0 8.4-3.7 13-15.3 13-11.8 0-15.4-4.4-15.4-13s3.7-13 15.4-13c11.7-.1 15.3 4.4 15.3 13zM401 158.8h-26V74.6h26v84.2zm67.2-26.3h.6l27.2-79h28l-39.7 105.2h-32l-39.7-105h28.6l27 79zm99 0h.6l20-57.8h27.3L571.8 189h-27.3l11.4-30h-4.6l-32-84.2H547l20 57.8zM617.8 99c0-20 17.2-26.7 37-26.7a88 88 0 0 1 33 6.4l-2 17.8c-13-3.7-23-5-29.7-5-10 0-12.2 2.4-12.2 6.7 0 11.8 48 1.7 48 36.5 0 18.7-17.2 26.5-37 26.5a98 98 0 0 1-36.2-6.4L621 137a114 114 0 0 0 32.7 4.9c9 0 12.4-2 12.4-6.5 0-11.7-48-1.8-48-36.5zm107.7-31.5h-20.8L718 42h29l-21.6 25.6zm5.2 91.3h-26V74.6h26v84.2zm48.3-114v114h-26v-114h26zm67.3 62.8v-3.2c0-7.8-6.2-11-16-11-7.8 0-19.2 1.4-30.3 5.7l-2-18.4c9.7-5.2 23.7-8.4 36.7-8.4 19.7 0 37.7 7.6 37.7 29.4v57.2H848l-1.6-7.3a38 38 0 0 1-26.7 9.7c-15.3 0-27.3-10.5-27.3-26-.1-25 25.3-33.8 54-27.6zm-16 34.8c5.6 0 12.4-3.3 16-7.5v-10.5c-18.3-4.3-27.3.5-27.3 9 0 6 5.2 9 11.4 9zM841 67.5h-20.8L833.7 42h29L841 67.6zm50.6 7H916l1.6 7a49 49 0 0 1 28.6-9.4c16 0 29 10.3 29 36.4v50.2h-26v-50.2c0-11.3-6.2-15-14-15a38 38 0 0 0-17.6 4.9V159h-26V74.6zm122.8-7h-20.8L1007 42h29l-21.6 25.6zm5.2 91.3h-26V74.6h26v84.2z" fill="#001641"/></svg>',
      "friendlyName": "iVysílání",
      "className": "iVysilaniButton",
      "deviceFamily": ["apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "apple-tv": {
          "appName": "iVysílání",
      },
      "chromecast": {
          "appName": "cz.ceskatelevize.ivysilani.tvapp",
          "androidName": "cz.ceskatelevize.ivysilani.tvapp",
          "adbLaunchcommand": "cz.ceskatelevize.ivysilani.tvapp/cz.ceskatelevize.ivysilani.tvapp.MainActivity",
      },
      "nvidia-shield": {
          "appName": "cz.ceskatelevize.ivysilani.tvapp",
          "androidName": "cz.ceskatelevize.ivysilani.tvapp",
          "adbLaunchcommand": "cz.ceskatelevize.ivysilani.tvapp/cz.ceskatelevize.ivysilani.tvapp.MainActivity",
      },
      "xiaomi": {
          "appName": "cz.ceskatelevize.ivysilani.tvapp",
          "androidName": "cz.ceskatelevize.ivysilani.tvapp",
          "adbLaunchcommand": "cz.ceskatelevize.ivysilani.tvapp/cz.ceskatelevize.ivysilani.tvapp.MainActivity",
      },
  },


  "jellyfin": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 512"><defs><linearGradient id="jfgrada" x1="110.25" y1="213.3" x2="496.14" y2="436.09" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#aa5cc3"/><stop offset="1" stop-color="#00a4dc"/></linearGradient></defs><g fill="url(#jfgrada)"><path d="M261.42 201.62c-20.44 0-86.24 119.29-76.2 139.43s142.48 19.92 152.4 0-55.76-139.42-76.2-139.43z"/><path d="M261.42 23.3C199.83 23.3 1.57 382.73 31.8 443.43s429.34 60 459.24 0S323 23.3 261.42 23.3zM411.9 390.76c-19.59 39.33-281.08 39.77-300.9 0s110.1-275.28 150.45-275.28S431.49 351.42 411.9 390.76z"/></g><g style="isolation:isolate" fill="#fff"><path d="M600.44 350.75a67 67 0 0 1-22.87-27.47 8.91 8.91 0 0 1-1.49-4.75 7.42 7.42 0 0 1 2.83-5.94 9.25 9.25 0 0 1 6.09-2.38c3.16 0 5.94 1.69 8.31 5.05a48.09 48.09 0 0 0 16.34 20.34 40.59 40.59 0 0 0 24 7.58q20.51 0 33.27-12.62t12.77-33.12V159a8.44 8.44 0 0 1 2.67-6.39 9.56 9.56 0 0 1 6.83-2.52 9 9 0 0 1 6.68 2.52 8.7 8.7 0 0 1 2.53 6.39v138.4a64.7 64.7 0 0 1-8.32 32.67 59 59 0 0 1-23 22.72Q652.42 361 633.7 361a57.21 57.21 0 0 1-33.26-10.25zM875.46 279.47a8.77 8.77 0 0 1-6.24 2.53H756.96q0 17.82 7.27 31.92a54.91 54.91 0 0 0 20.79 22.28q13.51 8.18 31.93 8.17a54 54 0 0 0 25.54-5.94 52.7 52.7 0 0 0 18.12-15.15 10 10 0 0 1 6.24-2.67 8.14 8.14 0 0 1 7.72 7.72 8.81 8.81 0 0 1-3 6.24 74.7 74.7 0 0 1-23.91 19 65.56 65.56 0 0 1-30.41 7.43q-22.87 0-40.4-9.8a69.51 69.51 0 0 1-27.32-27.48q-9.79-17.66-9.8-40.83 0-24.36 9.65-42.62t25.69-27.92a65.2 65.2 0 0 1 34.16-9.65 70 70 0 0 1 33.41 8.3 65.78 65.78 0 0 1 25.39 24.36q9.81 16 10.1 38a8.07 8.07 0 0 1-2.67 6.11zM777.3 231.8q-14.7 11.88-18.86 34.2h101.28v-2.38a46.91 46.91 0 0 0-8.92-23.35 48.47 48.47 0 0 0-18.56-15.15 54 54 0 0 0-23-5.2q-17.24 0-31.94 11.88zM932.04 355.5a8.92 8.92 0 0 1-15.3-6.38v-202a8.91 8.91 0 1 1 17.82 0v202a8.65 8.65 0 0 1-2.52 6.38zM1000.35 355.5a8.92 8.92 0 0 1-15.3-6.38v-202a8.91 8.91 0 1 1 17.82 0v202a8.65 8.65 0 0 1-2.52 6.38zM1166.66 206.11a8.7 8.7 0 0 1 2.53 6.39v131q0 23.44-9.21 40.09a61.58 61.58 0 0 1-25.54 25.25q-16.34 8.61-36.83 8.61a96.73 96.73 0 0 1-23.31-2.68 61.72 61.72 0 0 1-18-7.12q-6.24-3.87-6.24-8.62a17.94 17.94 0 0 1 .6-3 8.06 8.06 0 0 1 3-4.45 7.49 7.49 0 0 1 4.45-1.49 7.91 7.91 0 0 1 3.56.89q19 10.39 36.24 10.4 24.65 0 39.06-15.44t14.4-42.18v-10.38a54.37 54.37 0 0 1-21.38 20 62.55 62.55 0 0 1-30.3 7.58q-25.83 0-39.2-15.45t-13.37-41.87V212.5a8.91 8.91 0 1 1 17.82 0V301q0 21.39 9.36 32.38t29.25 11a48 48 0 0 0 23.32-6.09 49.88 49.88 0 0 0 17.82-16 37.44 37.44 0 0 0 6.68-21.24V212.5a9 9 0 0 1 15.29-6.39zM1253.98 161.41q-5.21 6.24-5.2 17.23v30.59h33.27a8.19 8.19 0 0 1 5.79 2.38 8.26 8.26 0 0 1 0 11.88 8.22 8.22 0 0 1-5.79 2.37h-33.25v123.26a8.91 8.91 0 1 1-17.82 0V225.86h-21.68a7.83 7.83 0 0 1-5.94-2.52 8.21 8.21 0 0 1-2.37-5.79 8 8 0 0 1 2.37-6.09 8.33 8.33 0 0 1 5.94-2.23h21.68v-30.59q0-18.7 10.84-29t29-10.24a46.1 46.1 0 0 1 15.45 2.52q7.13 2.53 7.12 8.17a8.07 8.07 0 0 1-2.37 5.94 7.37 7.37 0 0 1-5.35 2.37 18.81 18.81 0 0 1-6.53-1.48 42 42 0 0 0-10.4-1.78q-9.57.04-14.76 6.27zm65.82 19.46c-2.19-1.88-3.27-4.61-3.27-8.17v-3q0-5.34 3.41-8.17t9.36-2.82q11.88 0 11.88 11v3c0 3.56-1 6.29-3.12 8.17s-5.1 2.82-9.06 2.82-7.06-.95-9.2-2.83zm15.59 174.63a8.92 8.92 0 0 1-15.3-6.38V212.5a8.91 8.91 0 1 1 17.82 0v136.62a8.65 8.65 0 0 1-2.55 6.38zM1496.33 218.88q12.92 16.2 12.92 42.92v87.32a8.4 8.4 0 0 1-2.67 6.38 8.8 8.8 0 0 1-6.24 2.53 8.64 8.64 0 0 1-8.91-8.91v-86.43q0-19.31-9.65-31.33t-29.85-12a53.28 53.28 0 0 0-42.77 21.83 36.24 36.24 0 0 0-7.13 21.53v86.43a8.91 8.91 0 1 1-17.82 0V216.06a8.91 8.91 0 1 1 17.82 0v16.34q8-12.77 23-21.24a61.84 61.84 0 0 1 30.77-8.46q27.61 0 40.53 16.18z"/></g></svg>',
      "friendlyName": "Jellyfin",
      "appName": "Jellyfin",
      "androidName": "org.jellyfin.androidtv",
      "className": "jellyfinButton",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"],
      "chromecast": {
          "adbLaunchCommand": "adb shell am start -n org.jellyfin.androidtv/org.jellyfin.androidtv.ui.startup.StartupActivity",
      },
      "nvidia-shield": {
          "adbLaunchCommand": "adb shell am start -n org.jellyfin.androidtv/org.jellyfin.androidtv.ui.startup.StartupActivity",
      },
      "xiaomi": {
          "adbLaunchCommand": "adb shell am start -n org.jellyfin.androidtv/org.jellyfin.androidtv.ui.startup.StartupActivity",
      },
   },


  "justwatch-streaming-guide": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="841" height="127" viewBox="0 0 841 127"><g stroke="none" fill="#e6b919" fill-rule="nonzero"><path d="M90 54v23s0 4 3 2l19-9c8-5 0-9 0-9l-19-9c-3-2-3 2-3 2zM64 94l22-11c4-2 0-4 0-4L64 67s-4-2-4 3c1 4 0 22 0 22s0 4 4 2zm-30 16l22-12c5-2 0-4 0-4L34 83s-4-2-4 2v22s0 5 4 3zM4 94c7-4 15-8 22-11 4-3 0-5 0-5L4 67s-4-2-4 2c1 4 0 22 0 22s0 5 4 3zm30-15l22-12c5-2 0-4 0-4L34 52s-4-2-4 2v22s0 5 4 3zm30-16l22-11c4-3 0-5 0-5L64 36s-4-2-4 2c1 4 0 22 0 22s0 5 4 3zM4 63c7-3 15-7 22-11 4-2 0-4 0-4L4 36s-4-2-4 3v22s0 4 4 2zm30-15l22-12c4-2 0-4 0-4L34 21s-4-2-4 2v22s0 5 4 3zM0 98v20s1 9 9 4l18-9s3-2 0-3c-2-1-25-13-25-13s-2-1-2 1zm0-66V13s1-9 10-5l18 9s2 2 0 3C25 22 3 33 3 33s-3 1-3-1zm143 65c0 4 2 8 5 11 3 2 7 4 11 4s7-1 9-2c2-2 4-4 5-6s2-5 3-8c0-3 1-6 1-9V8h16v80c0 4-1 8-2 12-1 5-2 9-5 13-2 4-6 7-10 9-4 3-9 4-16 4-9 0-16-2-22-7-5-4-9-11-11-17l15-5zm121 26c-1-2-1-4-1-7v-6h0c-2 4-6 8-10 11-5 3-10 4-16 4-5 0-9-1-13-2-3-2-6-4-9-7-2-3-4-6-5-10s-2-8-2-12V46h16v42 9c1 3 2 6 3 8s3 4 5 5c3 2 6 2 9 2 7 0 11-2 15-7 4-4 6-11 6-18V45h15v61c0 2 0 5 1 8v9h-14zm74-58c-2-2-5-5-8-7-3-1-6-2-10-2h-6c-1 1-3 1-4 2s-3 2-3 3c-1 1-2 3-2 5 0 3 2 5 5 7 4 2 8 3 13 4 4 1 7 2 10 3s6 3 9 5c2 2 4 4 5 6 1 3 2 6 2 9 0 4-1 8-3 12-1 3-4 5-7 7s-6 4-10 5c-3 1-7 1-11 1-6 0-12-1-17-3-6-3-11-6-14-11l11-9a30.44 30.44 0 0 0 8 8c4 2 8 3 12 3 2 0 4-1 6-1s3-1 5-2c1-1 3-2 4-4 0-1 1-3 1-5 0-3-2-6-5-8-5-2-10-4-15-5l-8-2c-3-1-5-2-8-4-2-2-4-4-5-6-1-3-2-6-2-9 0-4 1-8 3-11 1-3 4-5 6-7 3-2 6-4 10-4 3-1 7-2 10-2 6 0 11 1 16 4 5 1 9 5 12 9l-10 9z"/><use xlink:href="#H62t"/><path d="M447 100h0l27-92h18l27 92h0l26-92h17l-34 116h-17l-28-93h0l-28 93h-17L404 8h18zm160-13h-12c-4 0-8 1-11 2-4 1-6 3-9 4-2 2-3 5-3 8s1 5 2 6c1 2 2 3 3 4 2 1 3 2 5 2s4 1 6 1c7 0 13-2 17-7 3-4 5-10 5-16v-4h-3zm3-14c0-5-1-10-5-13-3-2-8-4-14-4-4 0-8 1-12 3-3 1-7 3-9 6l-9-10c4-3 9-6 14-8 6-2 12-3 18-3s10 1 15 2c3 2 7 4 10 7 2 3 4 6 5 9 2 4 2 8 2 12v34c0 3 1 5 1 8s0 6 1 7h-14c-1-3-2-7-2-11h0c-3 4-7 8-11 10-5 2-10 3-15 3-3 0-7 0-10-1s-6-2-9-4c-2-2-5-4-6-7-2-4-3-7-3-12 0-6 1-10 5-14 3-3 7-6 12-8s11-3 17-3c7-1 13-1 20-1v-2z"/><use xlink:href="#H62t" x="280"/><path d="M749 66c-2-3-5-5-8-7-3-1-6-2-10-2s-8 1-11 2c-3 2-6 4-8 6-2 3-4 6-5 9-1 4-2 7-2 11s1 7 2 11c1 3 3 6 5 9 2 2 5 4 8 6 3 1 7 2 11 2s7-1 10-2c4-2 6-4 8-6l11 9c-4 4-8 7-13 9-4 2-10 3-16 3s-12-1-17-3-9-5-13-8c-4-4-7-8-9-13s-3-11-3-17 1-11 3-16 5-10 9-13c3-4 8-7 13-9s11-3 16-3c6 0 11 1 16 4 5 2 10 5 13 9l-11 9zm38-8c2-4 6-8 10-10 4-3 9-4 15-4 4 0 8 1 13 3 3 1 6 4 9 6 2 3 4 7 5 10 1 4 1 8 2 13v48h-16V81l-1-9c0-3-1-6-2-8-2-2-3-4-6-5-2-1-5-2-8-2-6 0-11 2-15 7s-6 12-6 18v41h-15V0h15v58h0z"/></g><defs ><path id="H62t" d="M404 59h-21v40c0 5 1 8 3 10s4 3 8 3h5c1-1 3-1 4-2l1 13c-2 0-5 1-7 1-2 1-4 1-7 1-7 0-12-2-16-6s-6-10-6-18V59h-15V46h15V24h15v22h21v13z"/></defs></svg>',
      "friendlyName": "JustWatch - Streaming Guide",
      "className": "justWatchStreamingGuideButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.justwatch.justwatch",
          "androidName": "com.justwatch.justwatch",
          "adbLaunchCommand": "adb shell am start -n com.justwatch.justwatch/com.justwatch.justwatch.MainActivity",
      },
      "apple-tv": {
          "appName": "JustWatchTV",
      },
      "chromecast": {
          "appName": "com.justwatch.justwatch",
          "androidName": "com.justwatch.justwatch",
          "adbLaunchCommand": "adb shell am start -n com.justwatch.justwatch/com.justwatch.justwatch.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.justwatch.justwatch",
          "androidName": "com.justwatch.justwatch",
          "adbLaunchCommand": "adb shell am start -n com.justwatch.justwatch/com.justwatch.justwatch.MainActivity",
      },
      "xiaomi": {
          "appName": "com.justwatch.justwatch",
          "androidName": "com.justwatch.justwatch",
          "adbLaunchCommand": "adb shell am start -n com.justwatch.justwatch/com.justwatch.justwatch.MainActivity",
      },
  },


  "kayo": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 264.6" xml:space="preserve"><path d="M273.788 264.623H0l7.498-61.339h273.788l-7.498 61.339z"/><path d="M1323.2 57h-63.9l-77.7 557.8c-9 76.6-44.2 167-165 156.1l-8.6 63c179.6 11 224-119.6 231.7-181L1323.2 57zm-157.1 570.7L1245.5 57h-63.8l-81.6 586.1c-4.7 30.7-41.1 57.9-72.9 50l-8.8 63.6c102.2 9.1 138-63.9 147.7-129zm400-584.9c-151.9 0-205.7 121.6-213.4 182.5l-23.9 175.3c-7.4 54.3 17.8 173.9 167.7 173.9 112.2 0 197.6-73.3 212.4-182.5l23-165.7c10.1-67.6-17.6-183.5-165.8-183.5zM534.5 394l23.8-171.7c15-89.5 106.9-128.2 174.2-106.8l8.2-58.2c-168.2-24.4-234.6 89.2-242.2 165l-23.7 169.5c-7.1 52.4 15 188.7 195.9 167.5l8.6-62.4c-69.1 22.6-154.4-19.1-144.8-102.9zM950 57.3l-47.1 334.2c-7.1 52.4 15 188.7 196 167.5l8.7-62.4c-69.3 23.1-154.7-18.6-145-102.5l47.3-336.9-59.9.1zm-633 500h68.9L267.2 300.7l-44.4 54.7L317 557.3zm-39.9-268.4 125.4 268.4h69.2L321.8 234.5l-44.7 54.4zM114.9 557.3h63.6l28.8-205.1L563.5-81.6h-83l-334 409.1-31.6 229.8zm11.8-638.9L37.8 557.3h63.5l89.4-638.9h-64zM895.8 57.1h-64.2l-69.2 500.1h63.1c.1 0 70.3-500.1 70.3-500.1zm-77.3 0h-64.1l-69.2 500.1h63.1l70.2-500.1zm826 347c-1.5 10-22.7 113.9-142.9 113.9-95.8 0-114.8-84.5-110.7-122.1 1.6-14.6 24.2-179.2 27-192.9 4.1-19.6 37.8-102.4 133.8-102.4 125 0 120 110.8 117.9 128.6-1.4 11.7-23.6 165.3-25.1 174.9zM1552 114.6c-87.4 0-117 76.9-120.7 92.1-3.2 13.2-25.6 178.8-26.6 193.4-2.2 31 13.1 103.8 99.3 103.8 85 0 122.4-65 127.9-102.6 1.3-9.3 23.4-161 24.7-172.9s8.1-113.8-104.6-113.8zm-527.8-57.3-47.8 336.5c-4.6 44.7 23 90.4 86.6 95 15.9 1 31.8-1.6 46.5-7.7l8.8-63.8c-16.2 12.1-38.2 21.8-57.8 12-11-5.7-19.1-15.8-22.2-27.8-1.5-8.6-1.3-17.5.7-26 1.6-11.4 3.3-22.8 5-34.1l15-104.6 15.7-110.5 9.3-65.9.5-3.5-60.3.4zM609.7 389.2c.3-5.8 1-11.5 2-17.2l4.6-33.5 10.8-76.2 3.4-24.5c12.6-56.2 72.6-66.2 91.1-41.7l9.1-65.6c-14.1-4.2-28.8-6.1-43.5-5.8-47.9 0-106.7 40.5-114.4 96.4l-23.9 172.3c-4.6 44.7 22.9 90.4 86.5 95 15.9 1 31.8-1.6 46.5-7.7l8.6-63.5c-13.3 10-30 18.2-47.2 15.3-11.5-2-21.5-8.9-27.7-18.8a40.5 40.5 0 0 1-5.9-24.5zm900.9 53.1c-32.6 0-45.7-28.9-42.9-51.2l22.3-160.6c5-29.4 33.8-55.3 62.1-55.3h.8c23.6 0 42.9 19.4 42.9 42.9 0 2.7-.3 5.4-.8 8l-22.4 161.2c-3.8 28.6-33.4 55-62 55zM462.8-81.6h-82.1L245 84l23.1-165.6H204l-53.2 380.5 312-380.5z" style="fill:#15e36d" transform="translate(0 23.537) scale(.28838)"/><path d="M141.2 696.5c-7.6-8.7-18.4-14-30-14.6-9.7 0-19.3 4.2-19.3 14.6 0 19.3 55.9 14.6 55.9 53.7 0 39-35.4 53.2-60.6 53.2-18.3 0-35.6-8.2-47.3-22.2l19.7-24.8c8 10.7 20.2 17.4 33.6 18.5 12.2 0 21-6.3 21-16.8 0-20-55.8-14.2-55.8-52.4 0-34.3 25.6-51.5 57.8-51.5 16.2-.5 31.7 6.2 42.5 18.2l-17.5 24.1zm772.8 0c-7.6-8.7-18.4-14-30-14.6-9.6 0-19.3 4.2-19.3 14.6 0 19.3 55.9 14.6 55.9 53.7 0 39-35.4 53.2-60.5 53.2-18.3 0-35.6-8.2-47.3-22.2l19.7-24.7c8 10.7 20.2 17.4 33.5 18.5 12.1 0 21-6.3 21-16.8 0-20-55.7-14.2-55.7-52.4 0-34.3 25.5-51.5 57.9-51.5 16.2-.5 31.7 6.2 42.5 18.2l-17.7 24zM403.3 803.3c-36.7 0-63.1-22.4-63.1-60 0-50.5 35.8-89.3 86.7-89.3 36.9 0 63.1 22.5 63.1 60.3.1 50.3-35.8 89-86.7 89zm392.6-147-4.2 27.2h-35.8L737 800.8h-32.9l18.6-117.4H687l4.4-27.2h104.5v.1zm-548.9 91h-17l-8 53.6h-32.9L212 656.3h50c23.6 0 44.4 9.4 44.4 36.2-.4 36.2-24.7 55.1-59.4 54.8zm365.2-6.2 26 59.7h-38.3l-20.5-55h-10l-8.6 55h-32.9l22.8-144.5h50c23.7 0 46.1 8.6 46.1 35.8.3 22.1-13.7 41.8-34.6 49zm-189.8-57.8c-29.1 0-48.2 26.6-48.2 54 0 21 12.8 35.6 34 35.6 29.4 0 48.4-26.6 48.4-54 0-21.2-12.8-35.8-34.1-35.8l-.1.2zm-169.7-.8h-12.6l-6 38.3h12.5c14.7 0 25.6-7.3 25.6-23 .1-12.1-9.1-15.2-19.3-15.2l-.2-.1zm339.3.1h-12.8l-5.6 36.7h12.8c14.2 0 26.6-5.9 26.6-22-.1-12.3-11-14.7-21-14.7z" style="fill:#fff" transform="translate(0 23.537) scale(.28838)"/></svg>',
      "friendlyName": "Kayo (AU)",
      "className": "kayoButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "au.com.kayosports.tv",
          "androidName": "au.com.kayosports.tv",
          "adbLaunchCommand": "adb shell am start -n au.com.kayosports.tv/au.com.foxsports.martian.tv.main.MainActivity",
      },
      "apple-tv": {
          "appName": "Kayo",
      },
      "nvidia-shield": {
          "appName": "au.com.kayosports.tv",
          "androidName": "au.com.kayosports.tv",
          "adbLaunchCommand": "adb shell am start -n au.com.kayosports.tv/au.com.foxsports.martian.tv.main.MainActivity",
      },
      "xiaomi": {
          "appName": "au.com.kayosports.tv",
          "androidName": "au.com.kayosports.tv",
          "adbLaunchCommand": "adb shell am start -n au.com.kayosports.tv/au.com.foxsports.martian.tv.main.MainActivity",
      },
  },


  "КиноПоиск": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="439" height="61" viewBox="0 0 439 61" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><defs><radialGradient id="CQK2" cx="0%" cy="0%" r="927%" fx="0%" fy="0%"><stop offset="50%" stop-color="#f50"/><stop offset="100%" stop-color="#bdf700"/></radialGradient><radialGradient id="ItjC" cx="-158%" cy="0%" r="1068%" fx="-158%" fy="0%"><stop offset="50%" stop-color="#f50"/><stop offset="100%" stop-color="#bdf700"/></radialGradient><radialGradient id="WAJR" cx="-285%" cy="0%" r="1078%" fx="-285%" fy="0%"><stop offset="50%" stop-color="#f50"/><stop offset="100%" stop-color="#bdf700"/></radialGradient><radialGradient id="vV41" cx="-340%" cy="2%" r="984%" fx="-340%" fy="2%"><stop offset="50%" stop-color="#f50"/><stop offset="100%" stop-color="#bdf700"/></radialGradient><radialGradient id="od4I" cx="-530%" cy="0%" r="1073%" fx="-530%" fy="0%"><stop offset="50%" stop-color="#f50"/><stop offset="100%" stop-color="#bdf700"/></radialGradient><radialGradient id="oSOI" cx="-554%" cy="2%" r="984%" fx="-554%" fy="2%"><stop offset="50%" stop-color="#f50"/><stop offset="100%" stop-color="#bdf700"/></radialGradient><radialGradient id="ZaHI" cx="-770%" cy="0%" r="1068%" fx="-770%" fy="0%"><stop offset="50%" stop-color="#f50"/><stop offset="100%" stop-color="#bdf700"/></radialGradient><radialGradient id="NE8u" cx="-818%" cy="2%" r="1010%" fx="-818%" fy="2%"><stop offset="50%" stop-color="#f50"/><stop offset="100%" stop-color="#bdf700"/></radialGradient><radialGradient id="oV2T" cx="-1019%" cy="0%" r="1073%" fx="-1019%" fy="0%"><stop offset="50%" stop-color="#f50"/><stop offset="100%" stop-color="#bdf700"/></radialGradient></defs><g stroke="none" fill-rule="nonzero"><path d="M11.6 1.2V19l12-17.7h14L17.3 22 54.5 1.2v13.2L21 27l33.4-3v12.6L21 33.2l33.4 12.6V59L17.3 38.2 37.6 59h-14l-12-17.8V59H0V1.2h11.6z" fill="url(#CQK2)"/><path d="M62.7 1.2h13.6l-2 37.4 17-37.4h11V59H88.7l2-37.4-17 37.4h-11V1.2z" fill="url(#ItjC)"/><path d="M110.6 1.2h13.6v22.3h11.6V1.2h13.6V59h-13.6V32.6h-11.6V59h-13.6V1.2z" fill="url(#WAJR)"/><path d="M155.6 30c0-16.5 7.6-30 23-30 15.2 0 22.8 13.5 22.8 30s-7.6 30-22.8 30c-15.3 0-23-13.6-23-30zm23 21.5c5.3 0 8.5-9.5 8.5-21.5 0-12-3.2-21.4-8.5-21.4C173 8.6 170 18 170 30c0 12 3 21.5 8.5 21.5z" fill="url(#vV41)"/><path d="M207.6 1.2h39.2V59h-13.6V10.3h-12V59h-13.6V1.2h0z" fill="url(#od4I)"/><path d="M253 30c0-16.5 7.6-30 23-30 15.2 0 22.8 13.5 22.8 30S291 60 276 60c-15.3 0-23-13.6-23-30zm23 21.5c5.3 0 8.5-9.5 8.5-21.5 0-12-3.2-21.4-8.5-21.4-5.4 0-8.5 9.5-8.5 21.4 0 12 3 21.5 8.5 21.5z" fill="url(#oSOI)"/><path d="M305 1.2h13.6l-2 37.4 17-37.4h11V59H331l2-37.4L316 59h-11V1.2z" fill="url(#ZaHI)"/><path d="M381 38.5l13 2-.4 2c-2.2 10.7-9 17.6-20 17.6C358 60 351 46.5 351 30s7-30 22.4-30c10.7 0 17.5 7 20 17l.4 1.7-13.2 3c-1-8-3.4-13-7-13-5.4 0-8 9.5-8 21.4 0 12 2.6 21.5 8 21.5 4 0 6.6-5.4 7.6-13z" fill="url(#NE8u)"/><path d="M399.4 1.2H413v26l11.2-26h14l-16 28L438.6 59h-15.3L413 33v26h-13.6V1.2h0z" fill="url(#oV2T)"/></g></svg>',
      "friendlyName": "КиноПоиск",
      "className": "kinopoiskButton",
      "appName": "ru.kinopoisk.tv",
      "androidName": "ru.kinopoisk.tv",
      "adbLaunchCommand": "adb shell am start -n ru.kinopoisk.tv/.presentation.splash.SplashActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "kodi": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="369" height="113" viewBox="0 0 369 113" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M112.8 57.2c-.4 1.2-1.2 2-2 3l-17 17.2c-2 2-4.3 2-6.4-.1L69.7 59.5c-2-2-2-4.2 0-6.2l17.7-17.8c2-2 4.2-2 6.2 0l17.2 17.2c1 1 1.6 1.8 2 3v1.6zM56 112.5c-1.2-.3-2-1.2-3-2L36 93.3c-2-2-2-4.2 0-6.3l17.7-17.7c2-2 4.2-2 6.2 0L77.6 87c2 2 2 4.3 0 6.3C72 99 66 104.8 60.4 110.6c-1 1-1.7 1.6-2.8 2H56zM35.3 42.2l-.1-19.7c0-2 .5-3.4 2-4.7L53.4 1.5c2-2 4.2-2 6.3 0l17.7 17.7c2 2 2 4.3 0 6.3L38 65c-1.2 1-2.2 1-2.6-.7-.1-.5-.1-1-.1-1.5zm-14 14.3v18c0 .6-.1 1.2-.3 1.7-.4 1-1.2 1.2-2 .4l-18-18c-1.3-1.4-1.3-3.2 0-4.5l17.7-18c.4-.3.7-1 1.4-.6.6.2 1 .8 1 1.4 0 .4.1.8.1 1.2" fill="#17b2e7"/><path d="M178.2 50l3.5 4.6 26.3 35c.3.3.4.7.2 1-.2.4-.5.5-1 .5h-.5-8.6a1 1 0 0 1-1-.6l-25.6-34-.1-.1-1 1-12 11.4v21 .2c0 .7-.3 1-1 1H150c-.7 0-1-.3-1-1v-.2V23c0-1 .3-1.2 1-1.2h6.8.4c.7 0 1 .4 1 1v.3 33l1.6-1.4a581 581 0 0 1 35.3-32.7h10.3c.6 0 1 .2 1 .6s0 .7-.3 1l-3 3-25 23.7zm64.6-29c.6 0 1.2.1 2 .1a35 35 0 0 1 13.8 3.8c3 1.6 6 3.7 8.3 6.2 2.7 2.7 5 5.7 6.5 9a32 32 0 0 1 2.7 7.9c.7 3.3 1 6.7.8 10-.2 5.5-1.4 10.7-4 15.5-1.8 3.4-4 6.4-7 9a32 32 0 0 1-15.7 8.3c-2.2.5-4.5.7-6.7.8-.1 0-.3.1-.4.1h-2.6l-1.8-.2a33 33 0 0 1-18.8-7c-4.3-3.5-7.7-7.7-10-12.7a33 33 0 0 1-2.5-8.1c-.6-3-.8-6.3-.6-9.5.3-6.7 2-13 6-18.5 4.6-6.5 10.6-11.2 18.2-13.4 2.4-.7 4.8-1 7.2-1.3.8-.1 1.5-.1 2.3-.1.1-.1.3-.1.4-.1h2zm-1 61.8c2.5-.1 5-.3 7.2-.8 5-1.3 9.4-4 12.8-8s5.2-9 5.7-14.3c.2-1.8.2-3.6.1-5.4a29 29 0 0 0-.9-5.9c-1.7-6-5-10.8-10.2-14.2-4-2.6-8.2-3.8-12.8-4-2.5-.1-5 0-7.5.4-4.3.8-8.2 2.6-11.5 5.5-3.2 2.8-5.6 6.3-7 10.3-1 3-1.5 6.2-1.6 9.5 0 2.5.2 5 .7 7.4 1 4.5 3 8.4 6 11.7a23 23 0 0 0 9.8 6.4c3 1 6 1.3 9 1.4zm45.7-26.4V23v-.3c0-.6.4-1 1-1h.1H317a32 32 0 0 1 12.5 2.8c3.5 1.6 6.5 3.8 9.2 6.5a33 33 0 0 1 8.6 15.7 47 47 0 0 1 1.1 10.6 39 39 0 0 1-2.8 13.9 34 34 0 0 1-6.4 10 30 30 0 0 1-15.2 8.9 30 30 0 0 1-7.9.9h-27.6-.5c-.3-.1-.6-.3-.6-.6 0-.2-.1-.4-.1-.5zm9.3 25.7h.5 18.5 3.4a19 19 0 0 0 6.6-1.8 20 20 0 0 0 7-5.3c1.8-2 3.3-4.5 4.4-7 1-2.7 1.7-5.6 2-8.6.2-2.7.1-5.4-.3-8-.5-3-1.5-6-3-9-1.8-3-4-5.8-7-7.8-3.5-2.5-7.5-3.6-11.7-3.6h-20-.4v51zm71.8 8.2c-.2.6-.4.7-1.2.7h-7c-.8 0-1-.3-1-1V23c0-1 .3-1.2 1.2-1.2h7c.3 0 .6.2.8.3s.2.4.3.6v67.6z"/></svg>',
      "friendlyName": "Kodi",
      "appName": "Kodi",
      "className": "kodiButton",
      "androidName": "org.xbmc.kodi",
      "adbLaunchCommand": "adb shell am start -n org.xbmc.kodi/org.xbmc.kodi.Main",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "lazymedia-deluxe": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="308" height="277" viewBox="0 0 308 277" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M104.3 162.4h42.3l.7-.2.3-104.8c.3-.5 1.2 1.5 2 4.5L184 162.4c.6 2.2-.3 2 21.7 2 21.5 0 21.3 0 21.5-1.2.1-.5.2-1 .4-1.4l36.4-103v217h.7 42.7V-.5h-63.6L205.3 109 168-.3l-63.8-.2M-.5 106v105.6l148 .1v-37L43 174.5l-.2-173h-43L-.1 273h12.3c13.4-.1 14-.2 17.7-2 3.8-2 7-6.3 8-10.8l.7-3.2c.5-2.2.4-11.4-.2-14.8-1.3-8.2-4-11.7-10.8-14-1.8-.7-2.6-.7-14.8-1H-.1m46.6.3l-.2 45.8h35.3v-7.8c-24 0-25.4.3-25.6-.2.5.3 0-13 .3-12l22.4-.2v-8l-22.7-.1V235l24.5-.4V227a1287 1287 0 0 0-34 .1m43.2 0l-.2 45.8H122v-4c0-3-.1-4-.4-4-17 0-22-.1-22.4-.3l.2-38-9.8.2m36.4 16.2c0 22.8.7 25.6 7.2 28.7 5.6 2.7 18.8 2.5 23.7-.2 5.6-3.3 6-5.5 6-27.5V227h-4.6-4.7v11.6c0 19.3-.4 23.6-2.4 25.6a12 12 0 0 1-13.3.1c-2.3-2-2.3-2.4-2.5-21l-.1-16.2h-4.7-4.7v16.4m43.7-16.2l13.7 22.4-14.2 22.2-.8 1.2 11.5-.5 9.4-14.8c.2 0 .4.3.6.7l8.6 14.6H210l-.5-.7a58 58 0 0 0-2.2-3.5l-11.5-18-1-1.5 1-1.6 12.8-20.4c0-.1-2.4-.2-5.3-.2H198l-8 13.6c-.7 1.4-.5 1.6-6.6-9-3-5-2-4.5-8.3-4.5l-5.4.2m46 0l-.2 45.8h34v-8h-24.3c.3 2.6-.1-11.8.4-12h23v-8.5h-23l-.1-9.7 24.3-.2V227c-26.2-.1-33.8-.1-34 .1m-192.4 8.2c4.3 1.5 5.2 3 5.6 10.5 1 16.3-1.3 19.5-14.2 19.2H9.5v-14.7-15c.3-.6 12.2-.4 14 .2" stroke="none" fill="#fff"/></svg>',
      "friendlyName": "LAZYMEDIA DELUXE",
      "className": "lazymediaDeluxeButton",
      "appName": "com.lazycatsoftware.lmd",
      "androidName": "com.lazycatsoftware.lmd",
      "adbLaunchCommand": "adb shell am start -n com.lazycatsoftware.lmd/com.lazycatsoftware.lazymediadeluxe.ui.tv.activities.ActivityTvMain",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "live-channels": {
      "button": 'Live Channels',
      "friendlyName": "Live Channels",
      "className": "liveChannelsButton",
      "appName": "Live Channels",
      "androidName": "com.google.android.tv",
      "adbLaunchCommand": "adb shell am start -n com.google.android.tv/com.android.tv.MainActivity",
      "deviceFamily": ["chromecast", "nvidia-shield", "xiaomi"], },


  "magenta-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 643.262 79.536" overflow="visible" xml:space="preserve"><path fill="#E20074" d="M272.893 4.834c-18.561 0-28.992 13.544-28.992 35.014 0 21.468 9.83 35.012 29.292 35.012 16.955 0 26.883-10.935 26.883-33.108v-3.708h-26.079v11.638h12.238c-1.105 8.931-5.921 12.238-13.044 12.238-10.132 0-15.248-7.625-15.248-22.071 0-14.45 5.421-22.07 14.949-22.07 5.916 0 10.235 3.209 11.738 8.225h14.447c-1.907-12.541-11.74-21.17-26.184-21.17M643.262 6.34h-14.043l-14.345 46.952h-.605L599.926 6.34h-13.944l21.769 67.017h13.646L643.262 6.34zm-62.027 0h-47.853v12.54h17.157v54.478h13.543V18.879h17.152V6.34zm-82.06 0h-13.54l-22.876 67.017h13.744l4.215-12.941h23.271l4.318 12.941h13.742L499.175 6.34zm-14.248 41.434 7.128-21.772h.6l7.224 21.772h-14.952zM467.595 6.34H419.74v12.54h17.162v54.478h13.541V18.879h17.151V6.34zm-55.224 0h-13.443v42.136h-.6L374.251 6.34h-13.74v67.017h13.538V31.419h.604l23.977 41.938h13.742V6.34zm-63.088 0H309.86v67.017h39.423V60.818h-25.885V45.575h24.882V33.023h-24.882V18.879h25.881l.004-12.539zm-129.668 0h-13.543l-22.876 67.017h13.745l4.21-12.941h23.278l4.312 12.941h13.745L219.615 6.34zm-14.248 41.434 7.122-21.772h.603l7.225 21.772h-14.95zM176.268 6.34h-12.44l-19.866 37.117h-.602L123.397 6.34h-12.439v67.017H124.5V35.533h.603l16.352 29.499h4.315l16.452-29.499h.601v37.823h13.444V6.34z"/><defs><path id="magtva" d="M26.343 79.536c-1.86 0-4.145-1.316-5.075-2.929L1.691 42.699c-.93-1.612-.93-4.248 0-5.86L21.269 2.93C22.198 1.32 24.483 0 26.343 0h39.154c1.86 0 4.145 1.32 5.074 2.93l19.578 33.909c.93 1.612.93 4.248 0 5.86L70.571 76.607c-.93 1.612-3.214 2.929-5.074 2.929H26.343z"/></defs><clipPath id="magtvclipb"><use xlink:href="#magtva"/></clipPath><path clip-path="url(#magtvclipb)" fill="#E10073" d="m31.305 14.46 43.876 25.329-43.876 25.335z"/><path clip-path="url(#magtvclipb)" fill="#FDF3F8" d="M31.305 14.46 68.879 0l6.302 39.789z"/><path clip-path="url(#magtvclipb)" fill="#F29DC9" d="m75.181 39.789-6.302 39.747-37.574-14.412z"/><path clip-path="url(#magtvclipb)" fill="#FDF3F8" d="M31.305 65.124 0 39.77l31.305-25.31z"/><path clip-path="url(#magtvclipb)" fill="#EB56A1" d="M31.305 14.46 22.96 0h45.919z"/><path clip-path="url(#magtvclipb)" fill="#F29DC9" d="M0 39.77 22.96 0l8.345 14.46zM75.181 39.789 68.879 0 91.84 39.77z"/><path clip-path="url(#magtvclipb)" fill="#EB56A1" d="m68.879 79.536 6.302-39.747 16.659-.019zM22.96 79.536l8.345-14.412 37.574 14.412z"/><path clip-path="url(#magtvclipb)" fill="#F29DC9" d="M22.96 79.536 0 39.77l31.305 25.354z"/></svg>',
      "friendlyName": 'Magenta TV',
      "className": "magentaTVButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "tv.accedo.xdk.dtag.production",
          "androidName": "tv.accedo.xdk.dtag.production",
          "adbLaunchCommand": "adb shell am start -n tv.accedo.xdk.dtag.production/tv.accedo.xdk.dtag.MainActivity",
      },
      "apple-tv": {
          "appName": "Magenta TV",
      },
      "nvidia-shield": {
          "appName": "Magenta TV",
          "androidName": "de.telekom.magentatv.atv",
          "adbLaunchCommand": "adb shell am start -n de.telekom.magentatv.atv/tv.accedo.xdk.dtag.MainActivity",
      },
      "xiaomi": {
          "appName": "Magenta TV",
          "androidName": "de.telekom.magentatv.atv",
          "adbLaunchCommand": "adb shell am start -n de.telekom.magentatv.atv/tv.accedo.xdk.dtag.MainActivity",
      },
   },


  "max-player": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1011" height="194" viewBox="0 0 1011 194" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M19.2.5C9 2.8 3.2 8.3.2 18.3c-1.5 5.3-1 7.6 5 23.5l4.3 11 5.7 15 4.3 11.4C22 86 22.2 86 23 82c5.5-25 40.4-46.8 76.3-47.7l6.4-.2 1.5-1.7c3.6-4.6 9.2-9 13.7-10.5l2.4-1a42 42 0 0 1 7.4-1.7c3-.4 2-1-2.6-1.8L118 15.8 83 10 60.2 6.3A703 703 0 0 0 36.7 2l-7-1A36 36 0 0 0 19.2.5m135 21.8c0 .1.7.6 1.6 1 3 1.5 5.8 4 10.7 9.2l8.2 8.5 6 6L196 62.7c1 0 2.5-3.8 3.4-8.2a23 23 0 0 0-19.7-28.7l-3.4-.5c-.8-.2-4.6-.8-8.4-1.4l-9-1.5c-2.5-.5-4.5-.5-4.5-.1m-16.2 11c-8 2-10.3 8-5 13.6l7.5 8 8 8.5 4 4.4 4.2 4.4 13.2 14c4 4.2 4 4.2 5.8 2l8.2-10c2.7-3.2 3-2.6-3-8.6l-7-7.5-7-7.5-7.5-8C151.3 38 148.3 35 147 34.3c-2.2-1.3-6-1.7-9-1M97.3 54.5C83.3 56 72 66 75.3 73.7c.4 1 7.2 8.6 23.7 26.7l14.5 15.8 11.2 12.2 4.7 5.2 4.8 4.6a675 675 0 0 0 22.3-26.5c.8-1 .7-1.3-2.6-5l-8-8.7-8.3-9-10-11-8.7-9.4-6-6.5c-6.6-7-9.2-8.4-15.4-7.8m-68 49.4a44 44 0 0 0 1.7 4.7l2.8 7.5 3 7.5 3 7.6 3.3 8.7 2 5 3 7.5 8.7 23c2.5 6.7 4.7 10 8.6 12.8 9 6.6 22.8 6 29.7-1.2 4-4.2 4.5-5.3 3-7L81 161.2l-4.3-5-5-5.7-4.2-4.8c-.2-.1-3.8-4.2-14.7-16.5l-9.5-10.8L34 108c-4.4-5-5-5.5-4.8-4.2" fill="#ffa200"/><path d="M669.4.6c-1.6 1.6-1.6 123.4 0 125 .7.6 3.6 1 6.7 1s6-.5 6.7-1A1187 1187 0 0 0 682.1.4c-2.4-1.3-11.3-1.2-12.7.2M264.2 38.8a30 30 0 0 0-9.7 5.5c-5.5 4.8-7 4.6-7-1 0-4-14-6.5-21.3-3.7l-2.2.8.4 42c.3 26.2.8 42.4 1.3 43a78 78 0 0 0 24.2.5c.8-.6 1.2-8.3 1.4-28.7l.3-28 2.3-3.3c4.6-7 12.5-8.6 17.6-3.8 5 4.6 5.3 6.6 5.3 35 0 32.2-1.2 29.6 13 29.6 14.7 0 13.4 2.6 13.4-28 .1-29.2.5-31.5 6.7-36.5 6.3-5 13.6-3.3 17.6 4.5 1.6 3.3 1.8 5.7 2 30.6.2 17 .6 27.4 1.2 28a82 82 0 0 0 24 .6c2.4-1 2.2-58-.2-66.3-7-24.5-32.4-30.4-52-12.2-3.2 3-4 2.8-7.5-1.4-6.3-8-19.6-11-31-7.4m132 0c-17.5 4-18.7 5.2-15 16 2.5 7.4 2.5 7.4 11.3 4 12.7-4.7 26-3 29.4 3.8 2.2 4.4 1.4 5-7.3 5.8-27.5 2.3-42 13.7-42 33-.1 24 27 35.7 48.4 21 4.4-3 4.4-3 6 .6l1.3 3 10.5.3 11.6-.5c2.4-1.6.1-63-2.6-69-7.8-17-27-23.7-51.5-18.2m208.2.1c-6.2 1-11.7 3.8-17.5 8.8-5.4 4.6-6.3 4.4-6.3-1 0-5-1.7-7-7-7-7.5 0-6.8-6-6.8 60.8 0 66.6-.6 62 7 62 8.8 0 8.4 1 8.4-21.8 0-23 .2-23.6 6-19 8 6.7 22.3 9 33 5.4 38.4-13 35.8-81.8-3.4-88-6.6-1-6.7-1-13.6 0m125 0c-7.7 1-17.6 5-18.3 7.3-1.7 5.4 3 10.2 7.5 7.8 14.3-7.3 30-4.5 35 6.3 4 8.4 2 11.5-7 11.5-12.3 0-29.5 6.3-35.6 13-12.6 14-8.2 35.6 8.6 42.2 9.3 3.6 30.6-.5 32.8-6.3 1-2.6 5-1.6 5.5 1.4.8 4 2.3 4.7 8.3 4.4l5.3-.3-.3-30.6c-.3-33.6-.8-37.2-5.8-45-6.2-9.8-19.7-14.2-36-11.7M904 39c-23.5 4-38 30.2-32 57.7 5.7 25.7 28.8 37.4 59.2 30.2 9.5-2.3 11.2-4 9.7-9.2-1.5-5-2.4-5.2-9.4-3.3-22.4 6.4-40.4-1.8-44.7-20.6-1.7-7.5-2.5-7.3 30.5-7.3 32.4 0 29.7 1 29.4-10-.6-26-18.3-41.5-42.8-37.4m94.5.3c-5 1.3-9.7 4.7-13 9.3-1.4 1.7-3 3-3.7 3-1.5 0-1.5 0-1.7-5.3-.2-6-6.6-8.8-12.4-5.6a616 616 0 0 0 .2 84.8c1.2 1.5 12 1.6 13.3.1.8-.8 1-7.8 1-25.5 0-36.2 5-46.6 21.6-46.6 4.2 0 6-2 6-7.2 0-7.3-3.2-9.3-11.2-7m-532.6.3c-3 .7-1.8 2.8 11 21.6l13 20.5c.3 1.5-3.2 7.5-13 22.3-7.6 11.3-13.3 20.8-13 21.5.7 1.8 26.4 2 28.2 0 .7-.7 4-6.5 7.2-12.8 7.2-14.3 7.4-14.4 13.7-2.6l7.2 12.6 2.4 3.6 14 .3c14.6.2 16.7-.4 14.3-4-.5-.6-4.3-6.7-8.6-13.3l-12-19c-5.5-8.6-5.5-9.6.4-18.2l20.8-31c0-1.7-4-2.2-16-1.8-13.4.3-12-.7-19.4 14-7 14-7 14-12.6 3.7-6-11-9.5-16-12-17-2.3-1-22.2-1-25.3-.2m319.8.8c-1.8.8-1.4 3 2 11l6 15 4.2 10.5 6.8 17 6.8 17c2.3 5.6 4.2 11.4 4.2 13 0 7.3-10.8 21-21 26.4-5.5 3-6.3 5.7-3.7 12.2 1.8 4.2 3.8 4.3 11.2.4 16.3-8.6 24-20.8 41.4-66.5l4.6-11.8 6.5-17.2 6.2-16c1-2.5 2-6 2-7.8l.1-3.2-6.6-.3c-6.2-.2-6.6-.1-8.2 2.2-1.5 2.4-12 32.6-18 51.6-3.3 10.5-5.6 12.7-7.3 7L800 41.3c-2-1.5-11.3-2.2-14.3-1M919 51.7c6.5 3 10 7.8 12 16 1.6 7 2 7-22.3 6.6l-21.2-.2-.3-2c-.3-2.6 3.3-10.7 6.7-14.7a22 22 0 0 1 25.1-5.6m-299 3.5a40 40 0 0 1 3.3 54c-11.7 11.8-30.5 8.2-39-7.4-3-5.4-2.4-30 .8-36 7.3-13.8 23.2-18.7 35-10.6m133.7 28c3 1 2 18.3-1.2 23.5-7 11-23.3 13.4-30 4.5-3.6-4.7-3.6-14 0-18.7 5-6.4 24-12 31.3-9.3m-331 3.3c4 4-.1 17.3-6.2 20.7-13 7.4-24.3-8-12.6-17.2 4-3.2 16.8-5.5 18.8-3.5"/></svg>',
      "button-round": '<svg xmlns="http://www.w3.org/2000/svg" width="1056" height="816" viewBox="0 0 1056 816" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M346.2 52.6c-24.2 5.5-38 18.5-45 42.2-3.6 12.5-2.4 18 11.8 55.6l10.2 26 13.5 35.5 10.2 27c6 16 6.4 16 8.3 6.6 13-59 95.6-110.7 180.6-113l15-.4 3.6-4c8.5-11 21.7-21.3 32.4-24.8l5.7-2.4c5.7-2 11.5-3.2 17.5-4 7-1 4.7-2.4-6.2-4.3l-24-3.8L497.2 75l-54-8.8c-18.5-3.7-37-7-55.6-10L371 53.8a86 86 0 0 0-24.8-1.2m319.5 51.6c0 .3 1.7 1.4 3.8 2.4 7 3.5 13.7 9.5 25.3 21.8l19.4 20 14.2 14.2 36.3 37c2.3 0 6-9 8-19.4a54 54 0 0 0-7.8-44.6c-9-13-23-21.5-38.8-23.3l-8-1.2c-2-.5-11-2-19.8-3.3l-21.4-3.5c-6-1.2-10.6-1.2-10.6-.3m-38.4 26c-19 4.7-24.3 19-11.8 32l17.8 19 19 20 9.5 10.4 10 10.4 31.3 33.2c9.4 10 9.4 10 13.7 4.7l19.4-23.7c6.4-7.5 7-6-7-20.3l-16.6-17.8-16.5-17.7-17.8-19c-19.6-20.3-26.7-27.4-29.8-29-5.2-3-14.2-4-21.3-2.3m-96.4 50c-33 3.6-60 27.3-52 45.5 1 2.4 17 20.3 56 63.2l34.3 37.4 26.5 29 11 12.3 11.4 11a1669 1669 0 0 0 52.8-62.8c2-2.3 1.6-3-6.2-11.8l-19-20.6-19.7-21.3-23.6-26-20.6-22.3-14.2-15.4c-15.7-16.5-21.8-20-36.5-18.4m-161 117a105 105 0 0 0 4.1 11.1l6.6 17.8 7 17.7 7 18 7.8 20.6L408 394l7 17.8 20.6 54.4c6 16 11.2 23.7 20.4 30.3 21.3 15.7 54 14.2 70.3-2.8 9.5-10 10.7-12.5 7-16.6l-41-44-10.2-11.8-12-13.5-10-11.4c-.5-.2-9-10-34.8-39l-22.5-25.6-22-24.6c-10.4-12-11.8-13-11.4-10" fill="#ffa200"/><path d="M588.5 564c-1.7 1.8-1.7 134.5 0 136.3.8.6 4 1 7.3 1s6.6-.6 7.3-1c2.2-45.5 2-91-.7-136.5-2.7-1.4-12.4-1.3-14 .2m-441.7 41.7a33 33 0 0 0-10.6 6c-6 5.2-7.6 5-7.6-1 0-4.4-15.2-7-23.2-4l-2.4 1 .4 45.8c.4 28.5 1 46.2 1.5 47a86 86 0 0 0 26.3.5c1-.7 1.3-9 1.6-31.3l.3-30.5 2.5-3.6c5-7.6 13.6-9.4 19.2-4 5.4 5 5.8 7 5.8 38 0 35-1.4 32.3 14 32.3 16 0 14.6 2.8 14.6-30.5.1-32 .6-34.4 7.3-39.8 7-5.5 15-3.6 19.2 5 1.8 3.6 2 6.2 2.2 33.3.2 18.6.7 30 1.3 30.5 8.7 1.5 17.5 1.8 26.2.7 2.6-1 2.4-63.2-.2-72.3-7.7-26.7-35.4-33-56.7-13.3-3.5 3.3-4.4 3-8.2-1.5-7-8.7-21.4-12-33.8-8m144 0c-19 4.4-20.4 5.7-16.4 17.5 2.8 8 2.8 8 12.4 4.3 13.8-5 28.3-3.2 32 4.2 2.4 4.8 1.5 5.4-8 6.3-30 2.5-45.7 15-45.7 36-.1 26 29.4 39 52.7 23 4.8-3.3 4.8-3.3 6.6.6l1.4 3.3 11.4.3 12.7-.5c2.6-1.8.1-68.7-3-75.2-8.5-18.6-29.4-26-56-20m227 .1c-6.7 1-12.7 4.2-19 9.6-6 5-7 4.8-7-1 0-5.4-1.8-7.6-7.6-7.6-8.2 0-7.4-6.5-7.4 66.3 0 72.6-.7 67.6 7.6 67.6 9.6 0 9.2 1 9.2-23.8 0-25 .2-25.7 6.5-20.7 8.7 7.3 24.3 9.8 36 6 41.8-14.2 39-89.2-3.7-96-7.2-1-7.3-1-15 0m136.3 0c-8.4 1-19.2 5.5-20 8-1.8 6 3.3 11 8.2 8.5 15.6-8 32.7-5 38.2 7 4.3 9 2 12.5-7.7 12.5-13.4 0-32 7-38.8 14.2-13.7 15.2-9 38.8 9.4 46 10 4 33.4-.6 35.8-7 1-2.8 5.4-1.7 6 1.5.8 4.4 2.5 5.2 9 4.8l5.8-.3-.3-33.3c-.4-36.7-1-40.6-6.4-49-6.7-10.7-21.4-15.5-39.2-12.8m190.6.4c-25.6 4.3-41.4 33-34.8 63 6.2 28 31.4 40.7 64.5 33 10.3-2.5 12.2-4.4 10.6-10-1.7-5.5-2.7-5.7-10.3-3.6-24.4 7-44-2-48.7-22.5-2-8.2-2.7-8 33.2-8 35.4 0 32.4 1 32-11-.7-28.4-20-45.3-46.7-40.8m103 .3a26 26 0 0 0-14.1 10.1c-1.6 2-3.3 3.3-4 3.3-1.6 0-1.6 0-1.8-5.8-.2-6.5-7.2-9.6-13.5-6l.2 92.5c1.3 1.6 13 1.7 14.5.1 1-1 1-8.5 1-27.8 0-39.5 5.4-50.8 23.5-50.8 4.6 0 6.6-2.2 6.6-8 0-8-3.5-10-12.2-7.6m-580.6.3c-3.3.8-2 3 12 23.6l14 22.3c.4 1.7-3.4 8.2-14 24.3-8.3 12.4-14.5 22.7-14.2 23.5.8 2 28.8 2.2 30.7 0 .8-.8 4.4-7 8-14 7.8-15.6 8-15.7 15-2.8l8 13.7 2.6 4 15.3.4c16 .2 18.2-.5 15.5-4.4-.5-.6-4.6-7.3-9.3-14.5L437 662c-6-9.4-6-10.5.4-19.8l22.7-33.8c0-2-4.4-2.4-17.4-2-14.7.3-13-.8-21.2 15.3-7.6 15.2-7.6 15.2-13.7 4-6.6-12-10.4-17.4-13-18.5a127 127 0 0 0-27.6-.2m348.6.8c-2 1-1.5 3.3 2.2 12l6.5 16.4 4.6 11.4 7.4 18.5 7.4 18.6a68 68 0 0 1 4.6 14.1c0 8-11.8 23-23 28.8-6 3.3-6.8 6.2-4 13.3 2 4.6 4 4.7 12.2.5 17.8-9.4 26.2-22.7 45-72.5l5-13 7-18.7 6.8-17.5c1-2.7 2.2-6.5 2.2-8.5l.1-3.5-7.2-.3c-6.8-.2-7.2-.1-9 2.4a900 900 0 0 0-19.6 56.2c-3.6 11.5-6 14-8 7.7L731 608.5c-2.2-1.7-12.3-2.4-15.6-1m145.3 12.4c7 3.3 11 8.5 13 17.5 1.7 7.6 2.2 7.6-24.3 7.2l-23-.3-.4-2c-.3-3 3.6-11.7 7.3-16 7-7.7 18-10 27.4-6m-326 3.8c16.3 15.8 17.8 41.3 3.6 59-12.8 13-33.3 9-42.6-8a78 78 0 0 1 .9-39.2c8-15 25.3-20.4 38.2-11.6m145.7 30.6c3.3 1 2.2 20-1.3 25.6-7.6 12-25.4 14.6-32.7 5-4-5-4-15.3 0-20.4 5.5-7 26.2-13 34-10M319.8 658c4.4 4.3-.1 18.8-6.7 22.5-14.2 8-26.5-8.7-13.8-18.7 4.4-3.5 18.3-6 20.5-3.8"/></svg>',
      "friendlyName": 'MaxPlayer',
      "className": "maxPlayerButton",
      "appName": "tv.maxplayer.android",
      "androidName": "tv.maxplayer.android",
      "adbLaunchCommand": "adb shell am start -n tv.maxplayer.android/tv.maxplayer.android.MainActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"],  },


  "mediaset-infinity": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 517.3 250"><linearGradient id="msiA" gradientUnits="userSpaceOnUse" x1="-680.192" y1="636.184" x2="-675.161" y2="636.998" gradientTransform="matrix(66.9903 0 0 -19.267 45654.871 12444.532)"><stop offset="0" stop-color="#8520da"/><stop offset=".292" stop-color="#8123db"/><stop offset=".389" stop-color="#742ddf"/><stop offset=".486" stop-color="#603de4"/><stop offset=".585" stop-color="#4254ed"/><stop offset=".683" stop-color="#1d70f7"/><stop offset=".75" stop-color="#0087ff"/><stop offset="1" stop-color="#00e474"/></linearGradient><g fill-rule="evenodd"><path fill="url(#msiA)" d="M148.8 137.8v91.6h18.3v-91.6c0-10.1 8.2-18.3 18.3-18.3s18.3 8.2 18.3 18.3H222c0-20.2-16.4-36.6-36.6-36.6s-36.6 16.4-36.6 36.6zm240.3-18.3V195c0 20.2 16.4 36.6 36.6 36.6v-18.3c-10.1 0-18.3-8.2-18.3-18.3v-57.2h54.9v-18.3h-73.2zm-36.6 18.3h18.3v-18.3h-18.3v18.3zM0 137.8h18.3v-18.3H0v18.3zm240.3 52.7v38.9h18.3v-38.9c0-10.1 8.2-18.3 18.3-18.3 4 0 17.4 1.6 19.5 21.6 1.9 17.2 9.8 26.3 16.2 30.9 8.7 6.3 18 7 21.5 7 20.2 0 36.6-16.4 36.6-36.6v-38.9h-18.3v38.9c0 10.1-8.2 18.3-18.3 18.3-4 0-17.4-1.6-19.5-21.6-1.9-17.2-9.8-26.3-16.2-30.9-8.7-6.3-18-7-21.5-7-20.1 0-36.6 16.4-36.6 36.6zm-168-29.6c-6.4 4.6-14.3 13.7-16.2 30.9-2.2 20-15.5 21.6-19.5 21.6-10.1 0-18.3-8.2-18.3-18.3v-38.9H0v38.9c0 20.2 16.4 36.6 36.6 36.6 3.6 0 12.8-.7 21.5-7 6.4-4.6 14.3-13.7 16.2-30.9 2.2-20 15.5-21.6 19.5-21.6 10.1 0 18.3 8.2 18.3 18.3v38.9h18.3v-38.9c0-20.2-16.4-36.6-36.6-36.6-3.5 0-12.7.7-21.5 7zm426.7-4.7v38.9c0 10.1-8.2 18.3-18.3 18.3s-18.3-8.2-18.3-18.3v-38.9h-18.3v38.9c0 17.1 11.7 31.4 27.5 35.5V250h18.3v-19.5c15.8-4.1 27.5-18.4 27.5-35.5v-38.9H499zm-313.6 0v18.3h18.3v54.9H222v-73.2h-36.6z"/><path fill="#fff" d="M424.4 18.6h-19.2l-6.9 57.7h-12.5l6.9-57.7H374L375.4 7h50.3l-1.3 11.6zm-57.4 0h-24.3l-2 16.3H362l-1.4 11.6h-21.3l-2.2 18.2h30.6l-1.4 11.6h-43.1L331.6 7h36.8L367 18.6zm-49.7 5.1c-3.8-3.2-10.1-6.1-14.6-6.1-4.6 0-8.3 3-8.3 7.6 0 10 21.7 11.3 21.7 30.7 0 11.2-6.7 21.2-19.9 21.2-8.5 0-14.8-2.5-20-6.6l1.9-12.1c4.7 4.1 11.7 7.1 16.7 7.1 5.1 0 8.5-3 8.5-7.6 0-11.5-21.7-12.8-21.7-31 0-12 8.8-20.9 20.7-20.9 5.7 0 11.7 1.9 16.8 5.5l-1.8 12.2zM242 51.3h13.6l-3.1-30.7h-.2L242 51.3zm29.4 24.9h-12.9l-1.8-15.1h-18.3l-5.7 15.1h-13.8L247.7 6H261l10.4 70.2zm-58.8 0h-12.5L208.4 7h12.5l-8.3 69.2zm-62.5-11.5h11.7c13.9 0 19.6-12.2 19.6-24.2 0-12.2-6.9-21.9-19.9-21.9h-6l-5.4 46.1zM164 7c23.5 0 30.4 18.7 30.4 33.7 0 20.6-12.1 35.5-27.8 35.5h-30.4L144.4 7H164zm-33.8 11.6h-24.3l-2 16.3h21.3l-1.4 11.6h-21.3l-2.2 18.2H131l-1.4 11.6H86.5L94.8 7h36.8l-1.4 11.6zM78.3 76.2H66.2l-1.8-46.8h-.2L42.4 76.2h-6L26.1 28.1h-.2L12.6 76.2H0L19.2 7h13.7l9.5 43.6L62.2 7h13.3l2.8 69.2z"/></g><linearGradient id="msiB" gradientUnits="userSpaceOnUse" x1="-576.13" y1="594.971" x2="-574.262" y2="592.907" gradientTransform="matrix(9.4857 0 0 -6.0494 5928.254 3619.71)"><stop offset="0" stop-color="#b26eff"/><stop offset=".484" stop-color="#c576ff"/><stop offset="1" stop-color="#cf7aff"/></linearGradient><path fill-rule="evenodd" fill="url(#msiB)" d="M450.6 0c-3.4 0-6.5 2.8-6.5 6.6v.1c0-3.9 3.3-5.7 5.1-2.6l19.4 33.6c.7 1.1 1 2.4 1 3.6 0 1.3-.3 2.5-1 3.6.7-1.1 1.6-2 2.7-2.7 1.1-.6 2.3-1 3.6-1h38.9c3.4 0 3.6 3.4.7 5.4 1.9-1.3 2.9-3.4 2.9-5.4 0-2.2-1.1-4.4-3.3-5.7L453.9.9c-1-.6-2.1-.9-3.2-.9h-.1z"/><linearGradient id="msiC" gradientUnits="userSpaceOnUse" x1="-574" y1="579.073" x2="-570.304" y2="580.29" gradientTransform="matrix(9.3754 0 0 -5.3466 5851.989 3156.514)"><stop offset="0" stop-color="#8520da"/><stop offset=".681" stop-color="#9136dd"/><stop offset="1" stop-color="#9d4de1"/></linearGradient><path fill-rule="evenodd" fill="url(#msiC)" d="M474.9 41.3c-1.3 0-2.6.3-3.6 1-1.1.6-2 1.5-2.7 2.7l-5.4 9.4-14 24.2c-1.8 3.1-5.1 1.2-5.1-2.6 0 5 5.5 8.2 9.8 5.7h.1L514 47s.1 0 .1-.1c0 0 .1 0 .1-.1h.1l.1-.1c2.9-2 2.7-5.4-.7-5.4h-38.8z"/><linearGradient id="D" gradientUnits="userSpaceOnUse" x1="444.073" y1="41.294" x2="456.811" y2="41.294"><stop offset="0" stop-color="#b3b3b3"/><stop offset=".067" stop-color="#c9c9c9"/><stop offset=".16" stop-color="#e1e1e1"/><stop offset=".258" stop-color="#f2f2f2"/><stop offset=".366" stop-color="#fcfcfc"/><stop offset="1" stop-color="#fff"/></linearGradient><path fill-rule="evenodd" fill="url(#D)" d="M444.1 6.6v69.3c0 3.9 3.3 5.7 5.1 2.6l14-24.2 5.4-9.4c.7-1.1 1-2.4 1-3.6 0-1.3-.3-2.5-1-3.6L449.1 4c-.6-1.1-1.4-1.6-2.2-1.6-1.5 0-2.8 1.7-2.8 4.2"/></svg>',
      "friendlyName": "Mediaset Infinity",
      "className": "mediasetInfinityButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "it.mediaset.infinitytv",
          "androidName": "it.mediaset.infinitytv",
          "adbLaunchCommand": "adb shell am start -n it.mediaset.infinitytv/it.mediaset.mediasetplay.ctv.MainActivity",
      },
      "apple-tv": {
          "appName": "Mediaset Infinity",
      },
      "chromecast": {
          "appName": "it.mediaset.infinitytv",
          "androidName": "it.mediaset.infinitytv",
          "adbLaunchCommand": "adb shell am start -n it.mediaset.infinitytv/it.mediaset.mediasetplay.ctv.MainActivity",
      },
      "nvidia-shield": {
          "appName": "it.mediaset.infinitytv",
          "androidName": "it.mediaset.infinitytv",
          "adbLaunchCommand": "adb shell am start -n it.mediaset.infinitytv/it.mediaset.mediasetplay.ctv.MainActivity",
      },
      "xiaomi": {
          "appName": "it.mediaset.infinitytv",
          "androidName": "it.mediaset.infinitytv",
          "adbLaunchCommand": "adb shell am start -n it.mediaset.infinitytv/it.mediaset.mediasetplay.ctv.MainActivity",
      },
   },




  "mediaset-infinity-alt": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 517.3 250" xml:space="preserve"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-680.192" y1="636.184" x2="-675.161" y2="636.998" gradientTransform="matrix(66.9903 0 0 -19.267 45654.871 12444.532)"><stop offset="0" style="stop-color:#8520da"/><stop offset=".292" style="stop-color:#8123db"/><stop offset=".389" style="stop-color:#742ddf"/><stop offset=".486" style="stop-color:#603de4"/><stop offset=".585" style="stop-color:#4254ed"/><stop offset=".683" style="stop-color:#1d70f7"/><stop offset=".75" style="stop-color:#0087ff"/><stop offset="1" style="stop-color:#00e474"/></linearGradient><path fill-rule="evenodd" clip-rule="evenodd" fill="url(#a)" d="M148.8 137.8v91.6h18.3v-91.6c0-10.1 8.2-18.3 18.3-18.3 10.1 0 18.3 8.2 18.3 18.3H222c0-20.2-16.4-36.6-36.6-36.6-20.2 0-36.6 16.4-36.6 36.6zm240.3-18.3V195c0 20.2 16.4 36.6 36.6 36.6v-18.3c-10.1 0-18.3-8.2-18.3-18.3v-57.2h54.9v-18.3h-73.2zm-36.6 18.3h18.3v-18.3h-18.3v18.3zM0 137.8h18.3v-18.3H0v18.3zm240.3 52.7v38.9h18.3v-38.9c0-10.1 8.2-18.3 18.3-18.3 4 0 17.4 1.6 19.5 21.6 1.9 17.2 9.8 26.3 16.2 30.9 8.7 6.3 18 7 21.5 7 20.2 0 36.6-16.4 36.6-36.6v-38.9h-18.3v38.9c0 10.1-8.2 18.3-18.3 18.3-4 0-17.4-1.6-19.5-21.6-1.9-17.2-9.8-26.3-16.2-30.9-8.7-6.3-18-7-21.5-7-20.1 0-36.6 16.4-36.6 36.6zm-168-29.6c-6.4 4.6-14.3 13.7-16.2 30.9-2.2 20-15.5 21.6-19.5 21.6-10.1 0-18.3-8.2-18.3-18.3v-38.9H0v38.9c0 20.2 16.4 36.6 36.6 36.6 3.6 0 12.8-.7 21.5-7 6.4-4.6 14.3-13.7 16.2-30.9 2.2-20 15.5-21.6 19.5-21.6 10.1 0 18.3 8.2 18.3 18.3v38.9h18.3v-38.9c0-20.2-16.4-36.6-36.6-36.6-3.5 0-12.7.7-21.5 7zm426.7-4.7v38.9c0 10.1-8.2 18.3-18.3 18.3-10.1 0-18.3-8.2-18.3-18.3v-38.9h-18.3v38.9c0 17.1 11.7 31.4 27.5 35.5V250h18.3v-19.5c15.8-4.1 27.5-18.4 27.5-35.5v-38.9H499zm-313.6 0v18.3h18.3v54.9H222v-73.2h-36.6z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M424.4 18.6h-19.2l-6.9 57.7h-12.5l6.9-57.7H374L375.4 7h50.3l-1.3 11.6zm-57.4 0h-24.3l-2 16.3H362l-1.4 11.6h-21.3l-2.2 18.2h30.6l-1.4 11.6h-43.1L331.6 7h36.8L367 18.6zm-49.7 5.1c-3.8-3.2-10.1-6.1-14.6-6.1-4.6 0-8.3 3-8.3 7.6 0 10 21.7 11.3 21.7 30.7 0 11.2-6.7 21.2-19.9 21.2-8.5 0-14.8-2.5-20-6.6l1.9-12.1c4.7 4.1 11.7 7.1 16.7 7.1 5.1 0 8.5-3 8.5-7.6 0-11.5-21.7-12.8-21.7-31 0-12 8.8-20.9 20.7-20.9 5.7 0 11.7 1.9 16.8 5.5l-1.8 12.2zM242 51.3h13.6l-3.1-30.7h-.2L242 51.3zm29.4 24.9h-12.9l-1.8-15.1h-18.3l-5.7 15.1h-13.8L247.7 6H261l10.4 70.2zm-58.8 0h-12.5L208.4 7h12.5l-8.3 69.2zm-62.5-11.5h11.7c13.9 0 19.6-12.2 19.6-24.2 0-12.2-6.9-21.9-19.9-21.9h-6l-5.4 46.1zM164 7c23.5 0 30.4 18.7 30.4 33.7 0 20.6-12.1 35.5-27.8 35.5h-30.4L144.4 7H164zm-33.8 11.6h-24.3l-2 16.3h21.3l-1.4 11.6h-21.3l-2.2 18.2H131l-1.4 11.6H86.5L94.8 7h36.8l-1.4 11.6zM78.3 76.2H66.2l-1.8-46.8h-.2L42.4 76.2h-6L26.1 28.1h-.2L12.6 76.2H0L19.2 7h13.7l9.5 43.6L62.2 7h13.3l2.8 69.2z"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-576.13" y1="594.971" x2="-574.262" y2="592.907" gradientTransform="matrix(9.4857 0 0 -6.0494 5928.254 3619.71)"><stop offset="0" style="stop-color:#b26eff"/><stop offset=".484" style="stop-color:#c576ff"/><stop offset="1" style="stop-color:#cf7aff"/></linearGradient><path fill-rule="evenodd" clip-rule="evenodd" fill="url(#b)" d="M450.6 0c-3.4 0-6.5 2.8-6.5 6.6v.1c0-3.9 3.3-5.7 5.1-2.6l19.4 33.6c.7 1.1 1 2.4 1 3.6 0 1.3-.3 2.5-1 3.6.7-1.1 1.6-2 2.7-2.7 1.1-.6 2.3-1 3.6-1h38.9c3.4 0 3.6 3.4.7 5.4 1.9-1.3 2.9-3.4 2.9-5.4 0-2.2-1.1-4.4-3.3-5.7L453.9.9c-1-.6-2.1-.9-3.2-.9h-.1z"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="-574" y1="579.073" x2="-570.304" y2="580.29" gradientTransform="matrix(9.3754 0 0 -5.3466 5851.989 3156.514)"><stop offset="0" style="stop-color:#8520da"/><stop offset=".681" style="stop-color:#9136dd"/><stop offset="1" style="stop-color:#9d4de1"/></linearGradient><path fill-rule="evenodd" clip-rule="evenodd" fill="url(#c)" d="M474.9 41.3c-1.3 0-2.6.3-3.6 1-1.1.6-2 1.5-2.7 2.7l-5.4 9.4-14 24.2c-1.8 3.1-5.1 1.2-5.1-2.6 0 5 5.5 8.2 9.8 5.7h.1L514 47s.1 0 .1-.1c0 0 .1 0 .1-.1h.1l.1-.1c2.9-2 2.7-5.4-.7-5.4h-38.8z"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="-364.962" y1="621.534" x2="-361.101" y2="621.534" gradientTransform="matrix(3.299 0 0 -10.0634 1648.083 6296.039)"><stop offset="0" style="stop-color:#b3b3b3"/><stop offset=".067" style="stop-color:#c9c9c9"/><stop offset=".16" style="stop-color:#e1e1e1"/><stop offset=".258" style="stop-color:#f2f2f2"/><stop offset=".366" style="stop-color:#fcfcfc"/><stop offset="1" style="stop-color:#fff"/></linearGradient><path fill-rule="evenodd" clip-rule="evenodd" fill="url(#d)" d="M444.1 6.6v69.3c0 3.9 3.3 5.7 5.1 2.6l14-24.2 5.4-9.4c.7-1.1 1-2.4 1-3.6 0-1.3-.3-2.5-1-3.6L449.1 4c-.6-1.1-1.4-1.6-2.2-1.6-1.5 0-2.8 1.7-2.8 4.2"/></svg>',
      "friendlyName": "Mediaset Infinity (alt)",
      "className": "mediasetInfinityButton",
      "appName": "it.mediaset.infinitytv1",
      "androidName": "it.mediaset.infinitytv1",
      "adbLaunchCommand": "adb shell am start -n it.mediaset.infinitytv1/it.mediaset.mediasetplay.ctv.MainActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "mlb": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="512.001" height="103.68" viewBox="0 0 13547 2743" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="nonzero"><path d="M5366 310c0-83-32-160-91-218S5139 1 5056 1H308C225 1 148 33 90 92 31 150-1 228-1 311v2123c0 83 32 160 91 219 58 58 136 90 218 90h4748c170 0 309-139 309-309V311z" fill="#fff"/><path d="M5366 2433V310c0-83-32-160-91-218S5139 1 5056 1H3729l763 1274 70 9 41 59v55l50 9 44 61v52l49 9 50 55v119s107 99 204 136c67 26 76 133 114 192 53 81 121 116 108 163-36 125-162 347-282 347h-471v200h589c170 0 309-139 309-309h0z" fill="#bf0c3d"/><path d="M309 1C226 1 149 33 91 92 32 150 0 228 0 311v2123c0 83 32 160 91 219 58 58 136 90 218 90h1928l-119-200h-230c0-570 194-889 425-948 31-8 17-163-24-209 0 0-111 3-134-3-29-8-9-37-9-37l108-233-14-64h-399c-6 0 329-230 329-230 17-605 637-652 1012-402 222 148 239 439 222 643-3 12-59 3-59 3s-37 221 61 221h436c178 0 349 113 349 113l44-151L3278 3H309zm329 1879h0c117 0 213 95 213 212 0 118-95 213-212 213s-212-95-212-212 95-212 212-213zm10327 307H9709V1h-562v2741h1818v-555zm-5163 555h0 563V1106l728 1218h307l729-1218v1636h562V1h-554l-890 1487L6356 1h-554v2741zm7629-1984h0c0-417-354-755-857-755h-1249v2739h1275c507 0 946-268 946-815 0-284-136-549-393-668 168-113 278-303 278-501zm-1545 315h0V518h721c185 0 278 139 278 278s-93 278-278 278h-721zm0 1148h0v-646h754c181 0 328 147 328 328s-147 318-328 318h-754z" fill="#031d42"/></svg>',
      "friendlyName": "MLB",
      "className": "mlbButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.bamnetworks.mobile.android.gameday.atbat",
          "androidName": "com.bamnetworks.mobile.android.gameday.atbat",
          "adbLaunchCommand": "adb shell am start -n com.bamnetworks.mobile.android.gameday.atbat/mlb.atbat.activity.MainActivity",
      },
      "apple-tv": {
          "appName": "MLB",
      },
      "chromecast": {
          "appName": "com.bamnetworks.mobile.android.gameday.atbat",
          "androidName": "com.bamnetworks.mobile.android.gameday.atbat",
          "adbLaunchCommand": "adb shell am start -n com.bamnetworks.mobile.android.gameday.atbat/mlb.atbat.activity.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.bamnetworks.mobile.android.gameday.atbat",
          "androidName": "com.bamnetworks.mobile.android.gameday.atbat",
          "adbLaunchCommand": "adb shell am start -n com.bamnetworks.mobile.android.gameday.atbat/mlb.atbat.activity.MainActivity",
      },
      "xiaomi": {
          "appName": "com.bamnetworks.mobile.android.gameday.atbat",
          "androidName": "com.bamnetworks.mobile.android.gameday.atbat",
          "adbLaunchCommand": "adb shell am start -n com.bamnetworks.mobile.android.gameday.atbat/mlb.atbat.activity.MainActivity",
      },
   },


  "movistar-plus": {
      "button": '<svg viewBox="0 0 298.88 134.78" xmlns="http://www.w3.org/2000/svg"><g><path fill="#fff" d="M144 .68a22.24 22.24 0 0 1 20 4.74c7.76 6.69 11.12 16.8 13.9 26.33a148.4 148.4 0 0 1 2.47 61.73c-.74 4.84-2.29 10-6.31 13.14-3.56 3-9.51 3.06-12.67-.55-2.86-3.39-3.17-8.12-2.79-12.36.86-9.7 2.27-19.4 1.86-29.17-.2-3.62-.64-7.48-2.81-10.51a8.57 8.57 0 0 0-10.41-2.79c-5.71 2.64-9.28 8.22-12.18 13.57-6.54 13-10.21 27.2-14.76 41-2.4 6.92-6.3 13.63-12.4 17.9-7.22 5.06-16.38 6.4-25 6-10.69-.64-20.16-7.5-25.66-16.45-6.33-10.44-12.2-21.16-18.35-31.71-1.85-3-3.76-6.15-6.77-8.1-3.2-2.18-8-.27-9.24 3.28-1.46 3.82-1.11 8.06-.5 12 1.8 10.58 6 20.54 8.46 30.94.89 3.86 1.37 8.34-1 11.77-3.36 4.82-11.26 4.19-14.72-.19S9.88 121.54 8 116.39C1.76 97.91-2.08 78 1.19 58.55 3.26 46.3 6.6 33.43 15.31 24.12c7.24-8 19.66-11 29.53-6.4 5.59 2.77 10 7.46 13.78 12.32 5.32 7.08 10 14.6 14.67 22.13 3.12 5 7.2 9.7 12.73 12a15.18 15.18 0 0 0 16.32-3.07c3.09-2.94 4.78-7 6.36-10.84 4.16-10.31 8.13-20.71 13-30.73C126.07 10.58 134.11 3 144 .68zM241.26 20.87H267v31.87h31.87V78.5H267v31.87h-25.75V78.5h-31.88V52.75h31.88c.01-10.63-.01-21.25.01-31.88z"/></g></svg>',
      "friendlyName": "Movistar Plus+",
      "className": "movistarPlusButton",
      "appName": "com.movistarplus.androidtv",
      "androidName": "com.movistarplus.androidtv",
      "adbLaunchCommand": "adb shell am start -n com.movistarplus.androidtv/com.movistarplus.androidtv.MainActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "myCanal": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="88" viewBox="0 0 400 88" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M117.8 43.2l-.3 44.3H400V0H117.8v43.2M88 10.7c-1.6.8-2.5 3.8-2.7 10.3l-.2 5.3-1.2 2c-6.3 10.8-11.3 8-14-7.7-.5-3-1-3.7-3.3-3.7-2.5 0-3 .7-3.4 4.3-.7 7.6-2.4 12.7-5.2 15.6-1.7 1.7-3 2.4-3 1.7a46 46 0 0 0-3.8-14.6c-3.7-3.5-7.6 2.6-10.3 16.4l-.6 3-1-3.6c-3.5-13.5-6-18-10.2-18C27.2 21.8 25 25 23 32l-1.3 3.6c-.1.3-.7-1-1.4-3C16.4 22 10.6 16 7.3 19 3.8 22.7 0 43 0 59c0 9.3.5 10.4 4.3 9.3 2-.6 2-1 2-8.6a100 100 0 0 1 3-27.3l1.4-5.6L12 29c2.4 5 4 10 4.8 16.7.5 3.5 1.5 14.4 1.5 16 0 1.4 1.3 2 3.3 2 2.8-.3 3-.5 3-7.3a73 73 0 0 1 2.2-16.3 43 43 0 0 1 3.5-9.7 99 99 0 0 1 3.4 11.8c3.4 13 4.3 15 7.3 15 3 0 4-2.6 6.3-15.2 1-6.4 1-6.4 2.2.1C52 56 53 58.7 56 58.5c3.4-.3 3.7-1.2 2-6.2l-2-8.3c0-.2.3-.3.7-.3 3 0 7-3.3 9.2-7.6l1.3-2.8 1 1.3c4 6.4 11.4 7 17 1.8 1-1 1.8-1.5 2-1.2 0 .2.3 1.5.6 2.8a31 31 0 0 0 .7 2.9c.1.2-1.3 1.5-3 3C68.2 58 64 70.5 74.6 75.6c13.8 6.5 25-10.8 21-32.4a78 78 0 0 1 5.7-4.7l9.2-8.2c.3-1-1.2-2.2-3.2-2.4l-1.6-.2-4.4 3.6-7 5.4a145 145 0 0 1-2-8.2c-.1-1 0-2 .8-4.4 1.6-5 1.7-9 .2-12-.8-1.6-3-2.3-5-1.5m84 2.5c4.3 1.2 10.2 4.2 10 5l-1 6-1.2 6c-.2.7-.2.7-1.8-.5-10.3-7.4-25-4.2-28.4 6.4-4.8 14.2 8.4 24.3 23.6 18 1.2-.5 2.3-1 2.4-.8a101 101 0 0 1-2.6 14c-3.3 3-18.7 3-25.3-.2-17-8-19.8-33.4-5.2-47.4a33 33 0 0 1 29.7-6.6M368 34V55h17.5v13.6H352V41c0-26 .1-27.5.6-27.6.3-.1 4-.2 8-.2l7.4-.1v21M220.6 15.8c.2.3.5 1.3.7 2.2l2 9.5L232 68c0 .1-3 .1-7 .1h-7l-1-4.6-1.2-4.5h-18.3l-2.2 4.6-2.2 4.7h-8a68 68 0 0 1-8.1-.3c.1-.1 6-12 13.2-26.5l13-26.2h8.7c8 0 8.7.1 9 .6m108 .8l10 26.4 9.3 25.2c-.2.2-3.5.3-7.5.2l-7.2-.1-1.7-4.4-1.7-4.5-9.5-.1-9.4-.1-1.8 4.5-1.8 4.4-7 .1H293A2204 2204 0 0 1 313 16c.3-.8.3-.8 7.7-.8h7.5l.5 1.4m-61.4 13.7l8.7 14.4c.1-.1 1-6.3 2-13.8l2-14.4.2-1h15l-.2.7c-.1.4-1.7 11.8-3.7 25.2L287.6 67l-.3 1h-7l-7 .1-1.4-2.6-17-29c-.1.3-1.2 7-2.3 15l-2 15.5-.2 1h-7c-6.3 0-7-.1-7-.6 0-.6 7-49.8 7-51l.2-1 7.8.1 7.8.1 8.5 14.6m-61 9l-3.5 8h5.6c5.2 0 5.6 0 5.4-.6-.1-.3-.8-3.7-1.7-7.7l-2-7.6c-.1 0-1.8 3.6-3.7 8m113-4l-4.4 13c.1.1 2.6.1 5.6.1l5.4-.1-2.7-8.3-2.7-8.2-1.2 3.4M90 54c-.7 13.6-9.3 23.5-13.7 15.7-2.2-3.8.1-8.2 8.8-17l4.5-4.6.3 1a33 33 0 0 1 .1 4.9" stroke="none" fill="#000"/></svg>',
      "friendlyName": 'my CANAL',
      "className": "myCanalButton",
      "appName": "com.canal.android.canal",
      "androidName": "com.canal.android.canal",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "my-family-cinema": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 400 79.219" width="400" height="79.219"><path d="M67.782 10.338c-6.905 4.16-13.779 9.792-28.167 23.08-11.692 10.799-16.956 13.957-22.005 13.2-3.839-.576-3.524-1.225 1.095-2.252 8.192-1.823 7.798-8.183-.508-8.183-10.055 0-13.571 10.889-4.344 13.452 8.942 2.483 15.243-.462 29.609-13.838 12.654-11.782 12.904-11.982 8.477-6.799-9.596 11.237-11.241 16.833-5.962 20.292 3.962 2.595 5.815 1.445 17.828-11.065 9.464-9.856 13.464-13.285 8.014-6.871-8.962 10.547-8.234 18.855 1.651 18.855 4.556 0 8.081-1.687 23.742-11.358 8.179-5.051 8.066-5.087 4.798 1.502-3.588 7.234-.491 11.7 5.426 7.823 1.501-.983 1.51-.981.889.18-.346.646-1.763 1.839-3.15 2.652-8.336 4.885-11.553 11.639-6.221 13.059 4.627 1.232 8.893-2.93 12.581-12.275.946-2.396 1.645-3.323 2.898-3.842 1.695-.703 8.858-9.121 8.858-10.411 0-1.362-.844-.681-3.459 2.791-6.241 8.285-7.757 8.129-3.235-.335 3.221-6.028 3.31-6.589 1.3-8.17-2.084-1.64-2.419-1.359-4.378 3.655-2.49 6.378-6.839 12.498-8.88 12.498-.928 0-.009-2.799 2.474-7.532 3.201-6.1 3.341-7.016 1.319-8.606-2.889-2.273-4.257-1.746-20.833 8.042-5.569 3.288-10.247 5.857-10.395 5.708-.927-.926 8.689-16.866 19.063-31.599 3.118-4.428 3.057-5.354-.35-5.316-4.857.053-16.649 8.63-30.732 22.353-8.609 8.389-8.612 8.397 3.277-9.173 7.723-11.413 8.293-13.065 4.62-13.37-1.444-.12-2.824.362-5.3 1.853m118.599 4.944c-1.337 1.612-7.335 2.113-22.982 1.921-19.859-.244-24.676 1.382-26.725 9.017-1.081 4.028 2.351 7.937 4.81 5.478.801-.801.75-.855-.57-.603-1.947.372-3.118-.72-3.118-2.908 0-5.565 8.58-9.923 17.697-8.989 4.798.492 4.743.004.688 6.136l-3.507 5.303-1.594-.942c-2.841-1.678-4.689.841-3.22 4.389.715 1.727 1.652 2.171 1.652.784 0-.461.251-.837.558-.837.768 0 .741.127-.844 4.03-4.078 10.034-2.537 16.294 3.56 14.468 3.301-.989 4.288-2.472 1.331-1.999-3.623.579-3.725-2.998-.323-11.339 1.407-3.449 1.446-3.487 3.628-3.487 3.655 0 6.939-3.784 4.981-5.741-.452-.453-.618-.432-.618.076 0 .984-2.569 3.434-3.601 3.434-1.833 0 1.687-5.826 6.04-9.995l1.989-1.906 6.339.73c9.164 1.056 12.724-.113 14.693-4.824 1.185-2.836.697-4.076-.864-2.196m100.002 1.928c-11.498 3.973-21.571 18.872-19.188 28.383 2.052 8.191 10.773 9.241 21.277 2.562 1.374-.874 1.503-.858 2.693.333.701.7 1.619 1.108 2.09.928.461-.178 1.176-.323 1.588-.323.411 0 1.898-.877 3.303-1.95l2.555-1.95-.141 1.81c-.26 3.33 1.862 2.755 4.992-1.351 3.164-4.151 8.053-9.5 8.382-9.17.127.127-.547 1.728-1.499 3.557-4.537 8.718-.686 13.339 5.514 6.616 1.487-1.613 2.274-1.864 2.274-.727 0 1.066 2.263 3.021 3.995 3.451 2.017.5 5.638-1.195 9.086-4.253 1.707-1.514 2.572-2.022 2.267-1.332-2.528 5.719.52 7.094 4.326 1.952 7.072-9.553 9.67-11.654 6.424-5.195-4.734 9.421-1.764 11.488 4.586 3.191 6.619-8.649 8.436-9.672 4.985-2.807-4.146 8.251-.001 12.017 6.193 5.626l1.893-1.953.856 1.809c1.659 3.505 5.712 3.786 9.081.629 1.11-1.04 1.77-1.343 1.935-.889 1.505 4.163 5.434 4.338 8.952.398 2.605-2.918 6.272-8.033 6.272-8.751 0-1.2-1.572-.146-2.902 1.946-4.835 7.6-7.943 9.03-5.467 2.515 2.181-5.736 1.192-9.148-3.131-10.799-4.68-1.787-8.416.394-13.787 8.048-6.633 9.452-8.696 9.858-3.968.781 4.714-9.051 2.606-11.474-4.879-5.608l-2.055 1.611-.176-1.775c-.365-3.673-3.075-3.558-7.62.322-3.578 3.054-3.396 3.033-3.036.35.531-3.962-3.826-5.282-4.558-1.381-1.3 6.931-14.815 17.949-14.807 12.072.004-2.908 1.84-4.985 5.005-5.664 6.717-1.44 10.206-5.484 7.267-8.423-3.401-3.401-11.45.863-15.759 8.348-1.887 3.279-5.238 7.273-6.101 7.273-.806 0-.108-1.701 2.963-7.219 4.574-8.221 2.17-11.193-4.77-5.895l-2.554 1.949v-1.657c0-3.298-3.948-4.395-4.709-1.31-.704 2.857-4.089 8.225-6.954 11.03-4.68 4.58-4.427 3.106.99-5.774 3.318-5.437 3.281-5.262 1.494-7.049-2.143-2.142-2.835-1.729-5.34 3.187-4.321 8.482-5.636 9.962-11.422 12.862-14.833 7.432-18.607-7.524-5.274-20.897 9.144-9.17 19.64-7.241 14.422 2.65-4.401 8.341-18.254 12.333-17.05 4.912.268-1.652.194-1.842-.494-1.271-2.898 2.405 1.084 6.978 5.663 6.505 8.623-.89 14.929-7.707 14.982-16.196.041-6.409-3.61-8.475-10.664-6.037m-56.008 4.099c-1.51 5.609-7.561 16.201-11.968 20.95-6.489 6.993-6.891 6.427-1.671-2.349 4.158-6.99 4.058-6.615 2.257-8.415-2.106-2.107-2.917-1.735-4.675 2.144-2.833 6.246-8.92 14.623-9.908 13.635-.317-.317 1.027-3.158 4.559-9.638 3.185-5.843.237-7.705-5.592-3.531-2.653 1.9-3.155 2.1-2.849 1.137 1.464-4.615-5.061-3.965-9.401.936-1.515 1.71-2.047 1.484-1.332-.567.56-1.606.479-1.886-.897-3.068-2.175-1.872-2.99-1.64-3.717 1.06-.94 3.49-2.896 7.067-5.846 10.688-3.34 4.101-4.115 3.5-2.229-1.729 3.721-10.315-3.95-15.918-11.947-8.728-9.596 8.628-6.392 21.491 3.289 13.204 1.933-1.654 2.263-1.78 2.263-.864 0 3.444 5.016 4.121 8.229 1.111l1.255-1.175v1.432c0 1.464 1.122 2.306 2.371 1.781.384-.162 2.44-2.681 4.569-5.599s4.58-5.809 5.445-6.425l1.574-1.121-2.056 4.087c-4.453 8.85-2.03 11.893 3.612 4.537 1.838-2.396 4.51-5.485 5.939-6.866l2.599-2.511-2.237 4.463c-3.012 6.01-3.24 7.139-1.744 8.636 1.319 1.318 3.935 1.165 5.635-.329.978-.861 2.187-1.03 2.187-.307 0 2.793 5.299 1.44 9.405-2.401l2.735-2.558-.284 2.52c-.586 5.197 3.28 5.788 8.088 1.237 1.229-1.163 1.814-1.446 1.814-.876 0 2.81 4.965 4.321 7.76 2.363 1.012-.709 1.256-.741 1.059-.14-.141.43-1.863 1.907-3.827 3.282-9.757 6.831-11.449 12.841-3.614 12.841 3.368 0 6.734-3.808 9.837-11.127 1.129-2.664 2.078-3.972 3.656-5.044 3.263-2.216 10.185-11.165 8.637-11.165-.28 0-1.976 1.82-3.767 4.045-6.182 7.676-7.302 7.516-3.053-.436 3.628-6.789 3.668-8.37.238-9.42-1.025-.314-1.306-.054-1.882 1.745-1.916 5.986-7.869 15.224-9.809 15.224-1.293 0-.9-1.349 2.284-7.837 3.263-6.648 3.354-7.85.673-8.867-1.519-.576-2.435.117-2.89 2.185-.754 3.434-8.408 13.961-10.151 13.961-1.786 0-.345-3.81 5.646-14.926 5.048-9.367 5.571-11.236 3.541-12.658-2.121-1.485-3.117-1.1-3.81 1.473m-12.61 4.756c-1.006 2.408-.582 3.465 1.693 4.224 3.127 1.042 5.187-3.518 2.454-5.432-2.024-1.418-3.192-1.078-4.147 1.208m82.363.198c-.707 2.625-.239 3.539 2.115 4.129 2.93.736 4.752-3.772 2.235-5.535-2.267-1.588-3.666-1.136-4.35 1.406m-125.512 7.712c0 2.76-11.273 14.872-11.613 12.478-.278-1.956 3.092-7.653 6.35-10.734 3.087-2.92 5.263-3.641 5.263-1.744m205.3-.006c0 2.474-11.181 14.877-11.584 12.851-.097-.483.303-1.989.887-3.347 2.638-6.132 10.697-13.292 10.697-9.504m-44.63 1.946c0 .826-4.852 3.148-6.519 3.119-1.856-.032 3.828-3.615 6.101-3.845.23-.023.418.303.418.726M107.067 52.841c-1.249 3.285-6.865 8.526-9.137 8.526-2.224 0 2.197-5.584 6.816-8.609 2.697-1.766 3.02-1.755 2.321.083m130.59-1.067c0 1.911-5.335 7.882-8.216 9.194-3.842 1.75-1.154-3.222 3.721-6.884 3.632-2.729 4.495-3.172 4.495-2.31M44.184 56.457c-2.38 2.381-.972 3.26 14.066 8.786 13.015 4.783 14.465 5.105 15.369 3.417 1.303-2.436 1.204-2.494-13.629-7.909-5.84-2.132-11.194-4.121-11.899-4.42-1.72-.729-3.096-.684-3.907.126" fill-rule="evenodd" fill="#f26522"/></svg>',
      "friendlyName": 'My Family Cinema',
      "className": "myFamilyCinemaButton",
      "appName": "com.valor.mfc.droid.tvapp.generic",
      "androidName": "com.valor.mfc.droid.tvapp.generic",
      "adbLaunchCommand": "adb shell am start -n com.valor.mfc.droid.tvapp.generic/com.cv.media.app.ui.SplashStub",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "nba-on-fire-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1054" height="615" viewBox="0 0 1054 615" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><g fill-rule="nonzero"><path d="M62.7-.5H207a63 63 0 0 1 63.2 63.2v488a63 63 0 0 1-63.2 63.2H62.7A63 63 0 0 1-.5 550.6v-488A63 63 0 0 1 62.7-.5z"/><path d="M171.2 112l.2 2c4.4 2.6 6.6 4.7 11 7.6 11.7 7.4 26 20.5 24.2 65.8 3.4 9.8 5 29 7.8 35.3 6 12 10.2 20 12 31.4 0 0 1.8 17.8 4 19 12 2.8 8.6 4 10.3 6.2 1.8 2.3 9 2.2 9 8.8 2.4 3.2 4.3 6.5 5.6 10v-235c0-27-21.8-48.7-48.6-48.7h-46.4c7.4 2.7 11.7 5.8 14.2 10.8 6 .5 13 13.8 2 33.7 5 3.4 1 8.3-2.3 14-1 1.8-2.2 5-5.5 4.8-4.3 9-9.4 17.5-13.2 18-1 1.4-2 5.3-.2 7a71 71 0 0 1 16 9.2zm43.3 486h-.5c21.3-13 8-37.5 4-52l.8-2.4c1-2-1.2-6.7-1.2-6.7-2.7-2-3.3-14.2-4.7-19.8-2.2-9 4-24.7 4-30 0-5.4-4-12.7-11.4-22-1.8-2-7-47.7-12-59.3-6.6-16-8.6-13.3-16.5-32.4-6-13.4-1.3-33-15-78.8l3-2.8-14.4-50.7c-3.5-11-10-11.6-10-11.6l.4-5.6a725 725 0 0 1 14.3-35.9c.1-.7 18.4-13.3 18.7-11.4l11.7 56 18.5 39.4c-19 4.6-33 21.7-33 42 0 24 19.4 43.5 43.3 43.5a44 44 0 0 0 40.5-27.4v220c0 24.3-17.5 44.4-41 48z" fill="#c80f2e"/><path d="M145 14.5c-15.8 6-18 13-18.6 35-2.7.3-8.2-2.2-6.3 11 0 0 1 9 4.5 7.4-2.8 19.4-.5 24.3-13.4 25.7-2.8.3-6.2.4-10.3.6L99.7 96c-17.6 1.7-26.3.6-37.7 15.6-4.4 5.7-9 13.8-14.8 25.4 0 0-5.2 13-6.8 18.3l-21 49c-1 5-3.4 6.7-.2 14 5 10.7-3 13.5 24.4 12.7v6.3s-7.3 6.3-9 10c-1.5 4-5.8 22.8-5.6 31.8.5 23.4 19.6 43 25.3 66.4l12.7 1.7a405 405 0 0 0 44.3 65.8l.3.3c1.5 4 9.4 9 14 14.2 2.8 2.7 15.5 16.5 32.6 29.7 6.2 4.8 13 9.6 20 13.6-.1-.1 4.2 8.6 6.4 15.7-8.7 7 8.2 20 13.3 41.2.3 3-5 5.7 3 12.8-.5 32-10.3 49 6 58H62a49 49 0 0 1-47.6-48.6v-487c0-26.6 21.3-48 47.6-48.7h83z" fill="#1d4289"/></g><path d="M343 14.3V598h63l-5.7-450L473 598h90.5V14.3H501A5937 5937 0 0 0 516 472.7L440.3 14.3zm547-.3l-62 584h77l10-118h50.5l10 118h76.8l-60-584H890zm50.5 165L960 411.5h-39l19.5-232.7z" fill="#fff"/><path d="M612.3 14.3v583.4H725c18.5 0 81.5-16 81.5-97V384c0-12.2.1-50.7-33.5-73.3 21 0 33.5-40.8 33.5-78v-125c0-48.7-30.3-93.6-91.2-93.5h-103zM682 89H716c15.7 0 21 17.3 21 30.6v136c0 23.3-7.6 25-23.4 25H682V89zm0 255.2H716c15.7 0 21 17.3 21 30.7V496c0 15.8-7.8 27.8-23.4 27.8l-31.7.5V344z" fill="#fff" fill-rule="nonzero"/></svg>',
      "friendlyName": 'NBA on Fire TV',
      "className": "nbaOnFireTvButton",
      "appName": "com.nbaimd.gametime.nba2011.amazon",
      "androidName": "com.nbaimd.gametime.nba2011.amazon",
      "adbLaunchCommand": "adb shell am start -n com.nbaimd.gametime.nba2011.amazon/com.nba.tv.ui.splash.SplashActivity",
      "deviceFamily": ["amazon-fire"], },


  "nbc-sports": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="569" viewBox="0 0 800 569" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M189 198c-31 0-55 27-55 55h0c0 11 3 20 7 27 2 0 4-1 6-1 11-1 21-2 30-2h0s11 0 24 3c12 3 28 9 35 25 1 1 1 2 2 3h132L216 205c-8-4-18-7-27-7zm-12 96h0c-7 0-15 0-23 1 7 6 15 10 22 11h8 0c11 1 18 1 24 2h11c-5-6-14-10-22-12-11-2-20-2-20-2z" fill="#fccc12"/><path d="M231 78c-17 0-35 9-44 23-23 35 0 66 15 76l155 104-76-172c-4-9-11-17-19-22-9-6-20-9-31-9z" fill="#ff7112"/><path d="M611 198c30 0 54 27 54 55h0c0 42-36 55-54 55H429l155-103c8-4 17-7 27-7z" fill="#05ac3f"/><path d="M335 0c-6 0-13 1-20 4-38 18-35 56-27 72l75 175 28-190c1-10 0-20-4-28-10-21-31-33-52-33z" fill="#ef1541"/><path d="M464 0c-21 0-41 9-52 33-3 8-4 16-4 25h26c7 0 10 3 11 5 2 2 2 2 0 3-10 3-31 15-31 32l2 13h0l21 140 76-175c7-16 9-54-29-72-7-3-13-4-20-4z" fill="#6e55dc"/><path d="M568 78c18 0 35 9 44 23 23 35 0 66-15 76L442 281l76-172c5-9 11-17 19-22 9-6 20-9 31-9z" fill="#069de0"/><path d="M177 286c-9 0-18 1-29 2-5 1-11 1-16 2-34 7-73 21-109 47-27 20-23 34-23 34s0 28 21 35c8 2 15 4 29 5 27 3 47 3 74 5 17 1 28 3 36 5-23 9-46 18-67 29-18 9-45 24-54 36-11 14-2 25-2 23 2 4 9 16 39 12 15-2 33-9 46-16 20-11 34-23 43-31 17-17 22-30 22-41 0-5-1-8-2-11 21-7 39-13 52-16-35 41-92 119-67 156 0 0 2 2 4 5 0 0 5 4 6 1 2-2-3-4-3-4-1-2-2-5-2-10 1-5 2-12 7-23l7-16h0c8-15 23-36 41-54 45-45 86-63 94-66 6-2 8-1 9 0 6 5-8 28-8 28l-1 1c-10 14-18 24-25 32-5 5-9 9-13 12-6 5-11 7-16 9-4 1-7 2-9 1-3 0-5 0-6-1-1 0-2-1-2-1-3-3-5-8-5-10 1-4-1-4-1-4-3 1-4 3-4 6v2h0c0 3 1 6 1 6 5 21 35 27 63 6 19-14 30-27 37-38 2-2 3-5 5-7 4-8 6-14 8-19 5-14-5-24-14-31s-22-2-22-2c-22 7-45 23-65 39-2 3-5 5-8 7 10-11 21-23 34-36 0 0 8-4 2-11-7-7-15-13-15-13s-4-3-5-2c-2 1-1 4 0 5l-4 6h-1c-7 7-20 13-27 16l-52 18c-1-1-2-2-4-3-23-15-93-16-120-18-29-2-36-4-37-9-1-6 8-15 21-24 39-29 89-40 120-43 10-1 18-2 24-2 24 1 31 4 32 6 0 1-1 3-1 3h-1c-4 5-9 7-14 11-23 15-48 26-48 26-5 5 5 6 5 6 15 0 28-4 41-9 27-10 34-20 35-25v-9c-1-6-3-10-3-10 0-2-1-4-1-5-12-24-52-23-52-23zm503 33c-1 0-3 0-6 2-3 3-21 22-47 54-29 4-62 7-71 8 0 0-4 0-6-3h-2l-1 1v1 2s1 17 17 14c9-2 28-4 51-7-4 5-10 12-16 21-11 12-25 26-38 39-9 9-18 17-26 24-11 9-21 15-25 12 0 0-2-2-1-7 3-8 12-23 31-45 0 0 8-10 8-14-1-7-4-7-4-7s-25-7-33-15c3-5 9-17 1-23 0 0-1-1-3-1h-6c-3 2-6 4-9 10s-3 12 1 18c-5 6-21 21-36 26-1-6-4-9-7-11 0 0-9-4-13 1-5 6-1 11 4 15-2 4-6 10-11 18-7 11-16 22-29 30-4 3-21 13-26-1-2-7 2-22 12-38 14-22 31-34 44-39 3-1 5-2 8-2 4-1 8-1 10 0 0 0 4 4 1 9 0 0-1 2 3 2 3 1 4-2 5-5 1-7-5-16-13-21-2-2-5-4-8-5 0 0-13-5-31 4-5 3-29 16-46 46-5 10-8 20-8 30 0 7 1 13 5 19 1 3 8 12 18 17 19 10 41-9 50-17 2-2 4-4 6-5 2-2 3-4 5-6 10-12 17-24 19-30 20-5 40-26 47-33 1 1 2 2 4 3l12 6c-7 8-7 8-15 19s-27 37-14 53c2 4 5 8 11 10 16 7 35-10 64-40 5-5 9-10 13-14-2 3-3 7-5 10-3 10-4 20-1 28 0 0 1 1 1 2s1 2 1 3c3 4 6 7 11 10 8 6 19 3 31-5 25-16 61-53 84-77 0 3-1 7-2 11-5 31-24 70-31 60 0 1-1-7-4-10-4-3-7-4-11-2-2 2-3 4-3 8 1 1 1 2 1 3 2 5 7 10 15 14 4 2 7 3 10 3 9 2 27 2 48-14 28-21 59-52 59-52s6-5 0-8c0 0-3-2-6 0l-2 4c0-1-38 36-64 52-2 1-3 2-5 2 4-5 7-12 9-21 2-7 5-27 8-41 2-8 4-14 5-16 3-7 8-6 9-9 0-1 0-2-2-5-1-2-3-4-5-5-2-2-6-5-9-5-1-1-3 0-5 1-1 1-3 3-6 8-16 17-67 71-98 90 2-1-25 17-20-7 3-11 14-35 44-73l16-18c13-1 27-4 40-6 0 0 119-14 87 11 0 0 2 4 7 0 10-8 14-15 14-19-2-12-21-15-54-13-13 1-34 4-57 8l-22 3 29-32s6-4-1-9c-6-5-13-8-13-8s-1-1-2-1zM170 427c1 2 1 4 0 8-10 16-41 35-52 41-6 4-20 12-36 18-19 6-35 9-37 5 0-2-2-3 4-9 7-7 29-21 49-32 23-11 49-22 72-31z" fill="#fdb913"/></svg>',
      "friendlyName": 'NBC Sports',
      "className": "nbcSportsButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.nbcuni.com.nbcsports.liveextra.firetv",
          "androidName": "com.nbcuni.com.nbcsports.liveextra.firetv",
          "adbLaunchCommand": "adb shell am start -n com.nbcuni.com.nbcsports.liveextra.firetv/com.nbc.nbctvapp.ui.main.view.MainActivity",
      },
      "apple-tv": {
          "appName": "NBC Sports",
      },
      "chromecast": {
          "appName": "com.nbcsports.apps.tv",
          "androidName": "com.nbcsports.apps.tv",
          "adbLaunchCommand": "adb shell am start -n com.nbcsports.apps.tv/com.nbc.nbctvapp.ui.main.view.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.nbcsports.apps.tv",
          "androidName": "com.nbcsports.apps.tv",
          "adbLaunchCommand": "adb shell am start -n com.nbcsports.apps.tv/com.nbc.nbctvapp.ui.main.view.MainActivity",
      },
      "xiaomi": {
          "appName": "com.nbcsports.apps.tv",
          "androidName": "com.nbcsports.apps.tv",
          "adbLaunchCommand": "adb shell am start -n com.nbcsports.apps.tv/com.nbc.nbctvapp.ui.main.view.MainActivity",
      },
   },


  "nebula": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="384" height="49" viewBox="0 0 384 49" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><defs><radialGradient id="bGb5" cx="50%" cy="50%" r="52%" fx="50%" fy="50%"><stop offset="21%" stop-color="#0af" stop-opacity=".9"/><stop offset="100%" stop-color="#6c0080"/></radialGradient></defs><g stroke="none"><path d="M100 5.1c-.2.1-.6.2-.7.3a700 700 0 0 0 0 32.4c.2.4 3.7.5 4.2.1l.4-.2V26.1l.2-11.3a153 153 0 0 0 2.5 3.4l3.3 4.4c.5.8 2.2 3 3.6 4.9l5 6.6c3 4.4 2.8 4.1 4.5 4.1 1 0 1.5-.1 1.7-.3a443 443 0 0 0 0-32.6c-.2-.1-.8-.2-2-.2-2.6 0-2.3-1.5-2.3 12v11.6l-1.5-2-2.6-3.4c-.5-.8-2.3-3.2-4-5.5l-4-5.3-3-4.2-2.3-3.1-.8-.1c-1-.1-1.2-.1-2 0m57.2 0c-1 .2-1-.8-1 16.5v16.1l.3.2a122 122 0 0 0 17.1 0c.3-.3.4-3.5 0-3.9a41 41 0 0 0-6.4-.2h-6.2v-4.9-5l5.4-.1c6.4 0 6 .1 6-2.2s.6-2.1-5.8-2.1h-5.5v-5.1-5.1h6l6-.2c.3-.3.2-3.5-.1-3.8-.3-.2-14.5-.4-15.8-.2m47.4 0c-1 .2-.8-.7-.8 16.5v16.1l.3.2a62 62 0 0 0 12.2 0c4.8-1.2 7.5-4.8 7.5-9.7.1-3.1-1.6-6.3-4-7.5-.3-.1-.6-.3-.6-.3s.3-.5.8-.9c2.5-2.7 3-7.2 1.2-10.4-1-1.7-2.7-2.9-5-3.7a112 112 0 0 0-11.7-.3m50.6.1l-.5.1v11.9l.1 12.5c.2.9.5 1.9.7 2.4.2.3.3.7.4 1 1.5 3.9 5.5 5.9 11 5.7 6.7-.3 10.2-3.6 11-10.8.4-2.4.4-22.4.1-22.7-.4-.3-4-.3-4.3 0-.2.2-.2 2.6-.3 11.7l-1 13.9c-2 4.4-9.2 4.7-12 .6-1.4-2.1-1.5-3.5-1.5-15.9L259 5.3c-.2-.2-3-.3-3.7-.1m55.2-.1c-1 .2-1-.7-1 16.5 0 15.7 0 15.9.4 16.2a100 100 0 0 0 16.4.2c.2-.1.2-.8.2-2 0-2.4.7-2.2-6.2-2.2h-6v-14l-.2-14.4c-.3-.3-2.6-.5-3.7-.3m57 0c-.5.1-.6.1-1.6 2.7a12 12 0 0 1-.6 1.8c-.5 1.3-1.2 3-1.2 3.1s-.1.5-.3.9c-.2.3-.5 1.1-.7 1.7-.2.5-.4 1.1-.5 1.3l-2 5.6-2.4 6.4c-.1.2-.3.9-.6 1.7-.7 1.6-2 4.9-2 5.3-1 2.5-1 2.6 1.8 2.6 2.4 0 2.3 0 2.8-1.4l.6-1.5c.1-.2.3-.8.5-1.4l.5-1.3c.1-.2.4-1 .7-1.8l.7-1.7.1-.4h5.7 5.8l.1.4c.1.2.3.6.4.9l.4.9c0 .2.3 1 .6 1.8l1 2.8.6 1.8c.2.9 4 1.4 5 .6l.4-.3-1-2.6-1.6-4.3-2-5.7-.7-1.8c-.3-.8-.8-1.9-1.7-4.6l-3.8-10.2c-.1-.2-.3-.8-.5-1.3-.7-2.1-1.3-2.3-4-2M213 9.5c3.5.5 4.5 1.5 4.5 4.3 0 1.4 0 1.5-.6 2.5-1.2 1.7-2.6 2.3-6.7 2.5l-1.8.1v-4.8-4.8h1.7c1 0 2.2.1 3 .2m156.3 4.8l.6 1.8.7 1.8 1.2 3.2c.1.2.3.8.5 1.3l.5 1.4c.1.2.1.4.1.5h-4c-3.8 0-4 0-4-.2.1-.4 1-2.5 1.3-3.7.2-.4.6-1.6 1-2.6l1.4-3.9c.1-.2.2-.5.3-.6.1-.3.1-.3.2-.1 0 .1.2.6.4 1.1m-153.8 9.4c2.6.9 3.4 2 3.4 4.7 0 4-2.2 5.4-8.5 5.4h-2v-5.3-5.4l3 .1c2.5.1 3.2.2 4 .5" fill="#000"/><path d="M.5 32l18-.5 7 16.5 7-15.5L51 32 35.5 20.5l8-19.5-18 12.5L7 0l8.5 19.5L0 32" fill="url(#bGb5)" fill-opacity=".9"/></g></svg>',
      "friendlyName": "Nebula",
      "className": "nebulaButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "tv.standard.nebula",
          "androidName": "tv.standard.nebula",
          "adbLaunchCommand": "adb shell am start -n tv.standard.nebula/.tv.features.splash.view.activities.SplashActivity",
      },
      "apple-tv": {
          "appName": "Nebula",
      },
      "chromecast": {
          "appName": "tv.standard.nebula",
          "androidName": "tv.standard.nebula",
          "adbLaunchCommand": "adb shell am start -n tv.standard.nebula/.tv.features.splash.view.activities.SplashActivity",
      },
      "nvidia-shield": {
          "appName": "tv.standard.nebula",
          "androidName": "tv.standard.nebula",
          "adbLaunchCommand": "adb shell am start -n tv.standard.nebula/.tv.features.splash.view.activities.SplashActivity",
      },
      "xiaomi": {
          "appName": "tv.standard.nebula",
          "androidName": "tv.standard.nebula",
          "adbLaunchCommand": "adb shell am start -n tv.standard.nebula/.tv.features.splash.view.activities.SplashActivity",
      },
   },


  "netflix": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 82" width="300" height="81.387"><path d="M-203.1 771.414c1.643.159 3.283.33 4.92.508l3.615-8.927 3.437 9.75c1.763.22 3.525.452 5.282.694l-6.024-17.096 6.027-14.88h-5.104l-.053.072-3.255 8.04-2.857-8.112h-5.039l5.203 14.762-6.152 15.19zM-206.911 771.065v-29.601h-5.038v29.186c1.681.129 3.361.269 5.038.415M-244.749 769.409c1.36 0 2.718.01 4.074.021v-10.875h6.051v-4.631h-6.05v-7.825h6.968v-4.636h-12.026v27.95c.327 0 .655-.004.983-.004M-260.388 769.692c1.677-.06 3.357-.11 5.04-.151v-23.442h4.707v-4.636h-14.456v4.636h4.709v23.593zM-298.91 772.814v-17.636l5.963 16.923c1.834-.206 3.671-.4 5.513-.582v-30.055h-4.833v18.267l-6.436-18.267h-5.04v31.984h.03c1.597-.222 3.199-.432 4.802-.634M-269.953 746.099v-4.636h-12.027v29.554c3.99-.345 7.996-.634 12.017-.869v-4.64c-2.325.135-4.645.291-6.96.464v-7.415h6.051v-4.634h-6.051v-7.824h6.97zM-223.723 765.286v-23.823h-5.058v28.246c4.023.147 8.032.354 12.027.612V765.68c-2.319-.15-4.641-.28-6.969-.392" style="fill:#b81d24;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="matrix(2.54454 0 0 2.54454 772.886 -1886.68)"/></svg>',
      "friendlyName": "Netflix",
      "className": "netflixButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "Netflix",
          "androidName": "com.netflix.ninja",
          "adbLaunchCommand": "adb shell am start -n com.netflix.ninja/.MainActivity",
      },
      "apple-tv": {
          "appName": "Netflix",
      },
      "chromecast": {
          "appName": "Netflix",
          "androidName": "com.netflix.ninja",
          "adbLaunchCommand": "adb shell am start -n com.netflix.ninja/.MainActivity",
      },
      "nvidia-shield": {
          "appName": "Netflix",
          "androidName": "com.netflix.ninja",
          "adbLaunchCommand": "adb shell am start -n com.netflix.ninja/.MainActivity",
      },
      "xiaomi": {
          "appName": "Netflix",
          "androidName": "com.netflix.ninja",
          "adbLaunchCommand": "adb shell am start -n com.netflix.ninja/.MainActivity",
      },
   },


  "news": {
      "button": "news",
      "friendlyName": "News by Fire TV",
      "className": "newsButton",
      "appName": "com.amazon.hedwig",
      "androidName": "com.amazon.hedwig",
      "deviceFamily": ["amazon-fire"],},


  "nfl": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="275" viewBox="0 0 200 275" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M193 31.3c-8.3 6.2-25 14.5-45.8 9.3C110.5 31.6 100 0 100 0S89.5 31.6 52.8 40.6a56 56 0 0 1-46.2-9.3H0v170.2A34 34 0 0 0 8 223c8.7 10.4 23.3 17.2 43.4 20 16.4 2.3 28.2 7.4 36.5 15.5 6.3 6 12.2 16.2 12.2 16.2s6-10.5 12-16.2c8.4-8 20.3-13.2 36.5-15.5 20.2-3 34.7-9.8 43.4-20.2 7-8.5 8-17 8-21.3l-6.6-170.2"/><path d="M193.8 37.8s-20 15.6-48.3 8.6c-33-8.3-45.8-33-45.8-33s-12.8 24.7-46 33c-27.8 7-48-8.7-48-8.7v163.6c0 5.5 2.3 29.2 46.5 35.4 17.4 2.5 30.4 8 39.6 17 3.4 3.2 6 6.5 8 9.5 2-3 4.5-6.3 7.8-9.5 9.4-9 22.4-14.6 39.6-17 44.2-6.4 46.2-30 46.6-35.4V37.7" fill="#013369"/><path d="M100 247s12.8-15.8 46-21c38.2-5.8 36.8-23.7 36.8-24.6v-85.8H17v85.8c0 1-1 18.8 36.8 24.6 33.2 5.2 46 21 46 21"/><path d="M61.2 178.6V138l-5-2.8v-10.6h23.3V135l-5 2.8v83L62 217.2l-18-53v35l5.7 4.4v10.8l-25-6.4v-9.2l5.8-2.2V138l-6-3v-10.6h19l17.6 54.2m43 37l5 6v10.6L84.5 223v-9l5.4-2.3v-74l-5.4-2.8v-10.7h43V146H118l-2.8-8.8h-11v25h8.2l3.3-4.8h6.6v22.2h-6.6l-3-4.5h-8.4v41m27.4 3.7V209l6-5v-66l-5.2-2.8v-10.7h24.8v10.7l-5 2.8v62l10.7-2.8 2-16.3h10.2v27.2l-43.8 11.6" fill="#d50a0a"/><path d="M21.4 98.3L14 92.7H23l3-8.7 3 8.7h9.2l-7.5 5.7 2.7 8.8L26 102l-7.5 5.3 2.8-8.8m32.5-.1l-7.5-5.6h9l3-8.7 3 8.7h9.2l-7.5 5.7 2.7 8.8-7.4-5.3-7.5 5.3 2.7-8.8M21.4 69.2L14 63.5H23l3-8.7 3 8.7h9.2l-7.5 5.7 2.7 8.8-7.4-5.2-7.5 5.2 2.8-8.8m32.5 0l-7.5-5.7h9l3-8.7 3 8.7h9.2l-7.5 5.7L66 78l-7.4-5.2L51 78l2.7-8.8M181.4 107l-7.5-5.2-7.5 5.2 2.8-8.8-7.5-5.7h9l3-8.7 3 8.7h9.2l-7.5 5.7 2.7 8.8m-32.6 0l-7.5-5.2-7.4 5.2 2.7-8.8-7.5-5.7h9.2l3-8.7 3 8.7h9.2l-7.5 5.7 2.8 8.8m32.7-29.2l-7.5-5.2-7.5 5.2 2.8-8.8-7.5-5.6h9l3-8.7 3 8.7h9.2l-7.5 5.6 2.7 8.8m-32.6 0l-7.5-5.2-7.4 5.2 2.7-8.8-7.5-5.6h9.2l3-8.7 3 8.7h9.2L146 69l2.8 8.8M107 62.6c-3.3-2.8-7-4.6-11-5.4a30 30 0 0 1 2.8-2.4c5 1.2 8.3 3.4 10.6 5.3l-2.4 2.4v.1zm-4.8 5.8a26 26 0 0 0-11.4-5.6c.6-1 1.4-1.8 2.2-2.6a26 26 0 0 1 11.4 5.4c-.8 1-1.5 2-2.2 2.7v.1zm-4.3 6c-3.5-2.8-7.5-4.6-11.4-5.3l2-3c4.8 1 8.7 3.2 11.4 5.5l-2 2.8h0zm22.6-29s-4 2-9.3 7.4a25 25 0 0 1 3.4 2.3l-2.4 2.2a26 26 0 0 0-10.1-5.1c1-.6 2-1.3 3-2 1.5.3 3 1 3 1 6-4.6 11.4-6.6 11.4-6.6s-.6-.3-2.2-.3c-24 .3-46.2 18.3-42 49 .5 3.2 1.8 9.2 3.4 11.8.5-5 2.4-16.4 8-28.6-2-.7-3.6-1-3.6-1l1.4-2.8c4.2.8 8 2.6 11.2 5.2a46 46 0 0 0-1.7 2.7l-3.5-2.4C84 89.4 81 100 80 105.5c0 .4.7.6 1.3.5 26.4-3.4 38.6-17 42.4-31.4a45 45 0 0 0-1.7-27.8c-.2-.5-.6-1.5-1.4-1.4"/></svg>',
      "friendlyName": "NFL",
      "className": "nflButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.gotv.nflgamecenter.us.lite",
          "androidName": "com.gotv.nflgamecenter.us.lite",
          "adbLaunchCommand": "adb shell am start -n com.gotv.nflgamecenter.us.lite/com.nfl.connected.SplashActivity",
      },
      "apple-tv": {
          "appName": "NFL",
      },
      "chromecast": {
          "appName": "com.gotv.nflgamecenter.us.lite",
          "androidName": "com.gotv.nflgamecenter.us.lite",
          "adbLaunchCommand": "adb shell am start -n com.gotv.nflgamecenter.us.lite/com.nfl.connected.SplashActivity",
      },
      "nvidia-shield": {
          "appName": "com.gotv.nflgamecenter.us.lite",
          "androidName": "com.gotv.nflgamecenter.us.lite",
          "adbLaunchCommand": "adb shell am start -n com.gotv.nflgamecenter.us.lite/com.nfl.connected.SplashActivity",
      },
      "xiaomi": {
          "appName": "com.gotv.nflgamecenter.us.lite",
          "androidName": "com.gotv.nflgamecenter.us.lite",
          "adbLaunchCommand": "adb shell am start -n com.gotv.nflgamecenter.us.lite/com.nfl.connected.SplashActivity",
      },
   },


  "nine-now": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="2596" height="553" viewBox="0 0 2596 553" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#3697e9" fill-rule="nonzero"><path d="M56 551c-4-1-11-4-16-6-7-4-10-6-18-14s-10-11-14-19c-6-12-8-21-8-34 0-11 3-24 7-32 14-27 42-44 71-42 12 1 19 3 30 8 19 9 33 27 39 48 3 10 2 29-1 39-7 25-26 44-51 51-9 3-29 3-39 1zm216-1c-31-7-53-32-56-63-4-31 13-63 41-76 11-5 18-7 33-7 14 0 21 2 32 7 29 14 46 46 42 77-5 29-24 52-52 61-10 4-30 4-40 1zm215 1c-20-4-40-20-50-40-5-12-7-19-7-33 0-12 0-13 3-22 13-37 49-58 86-50 16 3 28 10 40 22 13 14 20 31 20 51 0 29-16 54-42 66-5 3-12 5-16 6-9 2-25 2-34 0zm199 1c-9-3-16-7-24-15-6-6-10-11-12-16-17-33-5-72 28-88 13-6 0-6 203-6l186-1c2-2 2-84 0-86-1-1-44-1-186-1-204 0-192 0-206-7-13-6-23-18-29-34l-2-8V170 50l2-7c6-16 16-28 29-34 15-8-5-7 245-7h226l5 3c19 7 30 17 37 32 6 14 6-1 6 244v223l-3 7c-7 21-19 32-37 39l-8 2-227 1c-180 0-229 0-233-1zm382-379v-45H919 770l-1 44c0 24 0 44 1 45 0 1 30 1 149 1l149-1v-44zm713 233c-78-6-145-56-175-129-4-12-9-29-11-43-3-14-3-48 0-62 6-36 19-66 40-93 53-68 142-96 224-69 44 15 81 44 107 83 13 20 24 46 29 71 3 15 4 46 3 62-6 47-26 87-59 120-17 17-33 29-53 39-31 16-70 23-105 21zm25-101c25-3 46-13 63-31 19-19 29-43 29-70 0-13-2-21-5-33-17-51-71-80-123-67-39 10-68 42-75 82-3 18 0 42 7 59 8 16 23 34 37 43 13 9 30 15 45 17 10 1 13 1 22 0zm302 96c-23-5-42-23-58-55-7-16-11-26-22-63l-10-32 1-7c5-23 5-55 1-77-8-47-26-84-60-121l-7-7-5-18c-3-10-6-18-6-19s12-1 60-1c57 0 61 0 61 2l70 260c0-1 73-234 80-257l1-5h55 55l2 6c1 4 19 62 40 130l38 125c1 1 1 1 2 0 0-1 16-60 35-131l34-130h61c57 0 60 0 59 2-13 47-96 315-99 322-14 37-32 61-53 71-13 7-37 8-53 3-22-8-41-30-57-66-6-14-9-22-40-121l-24-73-28 87-32 98c-17 42-37 67-62 75-10 3-28 4-39 2zm-853-200V1h35c34 1 36 1 42 3 9 3 18 8 24 14 4 4 29 37 76 101l71 97V108 1h49 49v42 41l-5 9c-21 36-31 83-28 125 3 34 10 61 26 91l7 14v39 39h-32c-31 0-31 0-39-3-10-4-17-8-24-15-4-4-37-48-79-105l-74-99c-1-1-1 49-1 111v111h-48-49V201z"/><path d="M56 350c-4-1-11-4-16-6-7-4-10-6-18-14s-10-11-14-19c-6-13-8-21-8-34 0-31 18-57 47-69 41-16 88 7 100 51 3 10 2 29-1 39-7 25-26 44-51 51-9 3-29 3-39 1zm221 1c-15-4-25-8-35-16-27-22-35-61-19-92 10-18 26-31 45-38 11-3 32-3 42 0 29 9 50 34 54 64 4 35-18 69-53 80-6 2-29 3-34 2zm211-1c-27-6-49-27-56-55-3-8-3-28 0-36 5-21 20-39 38-48 12-6 20-8 34-8 13 0 15 0 22 3 20 6 35 19 44 37 6 11 9 21 9 34 0 18-6 34-17 48-10 12-26 22-41 25-9 2-25 2-33 0zM58 149c-25-5-47-25-55-50-3-11-4-28-1-40 3-14 9-24 19-35C36 9 50 3 71 2c18-1 34 4 49 15 12 9 22 25 27 41 2 9 2 28 0 37-7 25-26 45-52 53-9 3-28 3-37 1zm217 1c-20-4-38-16-49-34-8-13-11-24-11-40 0-33 21-61 53-71 4-2 11-3 17-3 34-2 63 18 75 50 15 42-11 88-55 97-8 2-23 2-30 1zm211-1c-27-7-47-28-54-54-3-9-3-28 0-37 6-22 20-39 40-49 13-6 22-8 36-7 28 1 50 16 63 41 8 15 10 36 6 52-7 25-26 45-50 53-11 3-30 4-41 1z"/></svg>',
      "friendlyName": "9now",
      "className": "nineNowButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "au.com.ninenow.ctv",
          "androidName": "au.com.ninenow.ctv",
          "adbLaunchCommand": "adb shell am start -n au.com.ninenow.ctv/au.com.ninenow.ctv.TvActivity",
      },
      "apple-tv": {
          "appName": "9Now",
      },
      "chromecast": {
          "appName": "au.com.ninenow.ctv",
          "androidName": "au.com.ninenow.ctv",
          "adbLaunchCommand": "adb shell am start -n au.com.ninenow.ctv/au.com.ninenow.ctv.TvActivity",
      },
      "nvidia-shield": {
          "appName": "au.com.ninenow.ctv",
          "androidName": "au.com.ninenow.ctv",
          "adbLaunchCommand": "adb shell am start -n au.com.ninenow.ctv/au.com.ninenow.ctv.TvActivity",
      },
      "xiaomi": {
          "appName": "au.com.ninenow.ctv",
          "androidName": "au.com.ninenow.ctv",
          "adbLaunchCommand": "adb shell am start -n au.com.ninenow.ctv/au.com.ninenow.ctv.TvActivity",
      },
   },


  "nlziet": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="144.348" height="52.126" viewBox="0 0 144.348 52.126"><path d="M53.818,0V9.433h12.3l-13,35.257v7.436h24.6V42.691H64.079L77.393,7.755V0H53.816ZM118.5,0V9.433h7.755V52.126h10.341V9.433h7.753V0ZM9.477,24.385l8.067,27.741h9.242V0H16.921V20.63a72.406,72.406,0,0,0,.547,7.833h-.156L9.242,0H0V52.126H9.87V32.057a69.413,69.413,0,0,0-.549-7.673h.156ZM30.387,52.126V0H40.726V42.691H50.2v9.435ZM91.686,0V16.087L81.347,8.7V0H91.686ZM81.345,42.417v9.709H91.684v-17.1ZM115.385,0V9.433h-9.95V20.626h8.773V29.9h-8.851V42.691h10.024v9.435H95.172V32.539l7.486-5.349a2,2,0,0,0,0-3.262l-7.484-5.347V0h20.209Z" fill="#ff427c"/><path d="M40.547,10.726A2,2,0,0,1,43.7,9.086l8.587,6.023a2,2,0,0,1,0,3.284L43.7,24.415a2,2,0,0,1-3.156-1.64V10.726Z" transform="translate(40.743 8.765)" fill="#fff"/></svg>',
      "friendlyName": "NLZIET",
      "className": "nlzietButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "nl.nlziet",
          "androidName": "nl.nlziet",
          "adbLaunchCommand": "adb shell am start -n nl.nlziet/.tv.app.di.tv.InjectActivity",
      },
      "apple-tv": {
          "appName": "NLZIET",
      },
      "chromecast": {
          "appName": "nl.nlziet",
          "androidName": "nl.nlziet",
          "adbLaunchCommand": "adb shell am start -n nl.nlziet/.tv.app.di.tv.InjectActivity",
      },
      "nvidia-shield": {
          "appName": "nl.nlziet",
          "androidName": "nl.nlziet",
          "adbLaunchCommand": "adb shell am start -n nl.nlziet/.tv.app.di.tv.InjectActivity",
      },
      "xiaomi": {
          "appName": "nl.nlziet",
          "androidName": "nl.nlziet",
          "adbLaunchCommand": "adb shell am start -n nl.nlziet/.tv.app.di.tv.InjectActivity",
      },
   },


  "nordvpn": {
      "button": '<svg viewbox="0 0 512 111.16" width="512" height="111.16" xmlns="http://www.w3.org/2000/svg"><path d="M499.86 37.684c0-3.322 2.692-6.07 6.07-6.07s6.071 2.748 6.071 6.07c0 3.379-2.691 6.07-6.07 6.07s-6.071-2.748-6.071-6.07zm1.145 0c0 2.749 2.177 4.983 4.926 4.983 2.691 0 4.925-2.234 4.925-4.983 0-2.749-2.234-4.983-4.925-4.983-2.75 0-4.926 2.234-4.926 4.983zm4.01 3.436h-1.432v-6.93h2.749c1.374 0 2.462.688 2.462 2.177 0 1.03-.573 1.66-1.317 2.004l1.432 2.75h-1.546l-1.26-2.52h-1.089zm1.202-5.555h-1.203v1.718h1.203c.516 0 1.088-.23 1.088-.86 0-.686-.572-.858-1.088-.858zm-290.53 49.94-24.74-37.17v37.17h-11.054V31.613h12.771l23.366 35.164V31.613h11.053v53.892zm36.653-37.57c-11.168 0-20.159 8.304-20.159 19.3 0 11.11 8.877 19.128 20.045 19.128 11.111 0 20.102-8.247 20.102-19.358-.057-10.996-8.934-19.071-19.987-19.071zm-.114 28.52c-5.04 0-9.106-3.836-9.106-9.449 0-5.498 4.009-9.335 8.991-9.335 5.04 0 9.106 3.837 9.106 9.335.057 5.613-3.952 9.45-8.991 9.45zm47.878-27.718v10.538c-1.432-.286-2.979-.286-3.437-.286-5.154 0-8.762 3.608-8.762 10.423v16.093h-10.538V48.737h10.194v5.383h.114c2.005-4.18 5.728-5.784 9.507-5.784.86 0 2.177.171 2.921.4zm30.754-17.124v21.362h-.115c-3.78-4.467-8.877-4.868-10.996-4.868-10.538 0-17.639 9.679-17.639 19.014 0 9.908 6.815 19.128 17.468 19.128 2.463 0 7.96-.344 11.454-5.384h.115v4.697h10.423v-53.95zm-8.82 44.843c-5.04 0-9.106-3.837-9.106-9.45 0-5.498 4.066-9.278 9.106-9.278s9.106 3.78 9.106 9.278c-.057 5.613-4.066 9.45-9.106 9.45zm42.323 9.049-19.53-53.892h12.085l13.974 40.949 14.03-40.95h11.856l-19.587 53.893zm57.042-53.892h-20.045v53.892h11.168V66.49h8.419c11.282 0 19.7-5.727 19.7-17.64 0-11.396-8.475-17.237-19.242-17.237zm-.916 24.512h-7.961V42.15h7.903c4.64 0 8.992 1.775 8.992 7.044 0 4.983-4.525 6.93-8.934 6.93zm61.566 29.38-24.798-37.17v37.17h-10.996V31.613h12.77l23.367 35.164V31.613h11.053v53.892z" fill="#2c3038"/><path d="M13.287 111.11C4.926 99.599 0 85.395 0 69.99 0 31.332 31.27.005 69.87.005c38.6 0 69.87 31.327 69.87 70.042 0 15.349-4.925 29.552-13.287 41.12L92.892 56.531l-3.264 5.498 3.264 15.234-23.08-39.517-14.203 24.111 3.322 15.406-12.084-20.675z" fill="#4580ff"/></svg>',
      "friendlyName": "Nord VPN",
      "appName": "com.nordvpn.android",
      "className": "nordVPNButton",
      "androidName": "com.nordvpn.android",
      "adbLaunchCommand": "adb shell am start -n com.nordvpn.android/.MainActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "nostv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="774" height="415" viewBox="0 0 774 415" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#231f20" fill-rule="nonzero"><path d="M74 225.4l-34.8-48-.6.2.6 53.6v69H0V114.6h38.5l55.7 75 35 48 .5-.3-.5-53.6v-69h39.2v185.7H130zM647.5 249c20 13 43.6 18.5 58.2 18.5 15 0 26-6 26-19.7 0-17.2-17.5-18.8-41.4-26.5-25.6-8.4-48.7-21-48.7-53.3 0-34.6 26.2-56.2 65.2-56.2 18.2 0 40.5 4.6 56.7 13.3v40.3c-19.8-12.3-42.6-18-57-18-14 0-24 5-24 17.4 0 16.4 17.2 17.7 39.5 25.2 28 9.2 50.6 22.3 50.6 55 0 36.2-27.5 58-67.5 58a137 137 0 0 1-57.7-13.1zM404 86.7l6-.1 6 .1L418.5 0h-17zm0 240.3l6 .2 6-.2 2.5 86.8h-17zM289.7 213l-.1-6 .1-6-86.7-2.5v17zm240.3 0c.1-2 .1-4 .1-6v-6l86.7-2.5v17zM383 89.7a56 56 0 0 1 5.9-1.2l6-1-12.6-86-17 3zm41.8 236.6a60 60 0 0 0 5.9-.9 60 60 0 0 0 6.1-1.2l17.5 85-17 3zm-132-92.5l-1.2-6a64 64 0 0 1-.9-6.1l-86 12.6 3 16.8zM529.3 192l-1-6a60 60 0 0 0-1.2-6.1l85-17.5 3 16.8zM363 96l5.6-2.2 5.8-2-27.2-82.3-16 5.8zm82.3 226l5.7-2 5.7-2.2 32 80.7-16 5.8zM299 253.7c-.7-1.8-1.5-3.7-2.2-5.6l-2-5.8-82.4 27.3 5.8 16zm226-82.2l-2-5.7c-.8-2-1.5-3.8-2.3-5.7l80.7-32 5.8 16zm-180.4-65.7l5-3 5.4-3-41-76.4-15 8.6zM464.8 314l5.3-3a146 146 0 0 0 5.2-3.2l45.6 74-15 8.5zM309 272.3l-3-5-3-5.4-76.4 41.2L235 318zm208-120l-3-5.3-3.2-5.3L585 96l8.5 14.8zm-189-33.4a58 58 0 0 1 4.5-4l4.8-3.8-54-68-13 11zM482.5 303a152 152 0 0 0 4.7-3.7l4.6-4 57.7 65-13 11zm-160.7-14.2l-4-4.5c-1.3-1.6-2.6-3.2-3.8-4.8l-68 54 11 13zM506 134.4l-3.7-4.7-4-4.6L563 67.4l11 13zm-192 0l3.7-4.7c1.3-1.6 2.7-3 4-4.6l-65-57.7-11 13zm184 154.4c1.3-1.5 2.7-3 4-4.5l3.8-4.8 68 54-11 13zM337.4 303l-4.7-3.7c-1.6-1.3-3-2.7-4.6-4l-57.7 65 13 11zM492 118.8l-4.5-4-4.8-3.8 53.8-68 13.2 11zm-189 33.4l2.8-5.3a93 93 0 0 1 3.2-5.3L235 96l-8.5 14.8zm208 120l3-5a73 73 0 0 0 3-5.4l76.3 41.2-8.5 14.8zM355.2 314l-5.3-3-5.3-3.2-45.5 74 14.8 8.5zm120-208l-5-3.2-5.4-3 41-76.4 14.8 8.6zM295 171.5c.5-2 1.2-3.8 2-5.7l2.2-5.7-80.7-32-5.8 16zm225.8 82.2l2.2-5.6c.7-2 1.3-4 2-5.8l82.4 27.3-5.8 16zM374.5 322l-5.7-2-5.7-2.2-32 80.6 16 6zm82.3-226l-5.6-2.2-5.8-2 27.3-82.4 16 5.8zm-166.2 96a123 123 0 0 1 .8-6l1.3-6-85-17.5-3 16.8zm236.7 41.8l1.2-6 1-6 86 12.6-3 17zM395 326.3l-6-1a60 60 0 0 1-6.1-1.2l-17.5 85 16.8 3zm41.8-236.7l-5.8-1.2-6-1 12.6-86 16.8 3z"/></svg>',
      "friendlyName": "NOSTV",
      "className": "nostvButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "pt.nostv.tv",
          "androidName": "pt.nostv.tv",
          "adbLaunchCommand": "adb shell am start -n pt.nostv.tv/pt.nos.iris.online.tv.MainTvActivity",
      },
      "apple-tv": {
          "appName": "NOS TV",
      },
      "chromecast": {
          "appName": "pt.nostv.tv",
          "androidName": "pt.nostv.tv",
          "adbLaunchCommand": "adb shell am start -n pt.nostv.tv/pt.nos.iris.online.tv.MainTvActivity",
      },
      "nvidia-shield": {
          "appName": "pt.nostv.tv",
          "androidName": "pt.nostv.tv",
          "adbLaunchCommand": "adb shell am start -n pt.nostv.tv/pt.nos.iris.online.tv.MainTvActivity",
      },
      "xiaomi": {
          "appName": "pt.nostv.tv",
          "androidName": "pt.nostv.tv",
          "adbLaunchCommand": "adb shell am start -n pt.nostv.tv/pt.nos.iris.online.tv.MainTvActivity",
      },
   },


  "now-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="78" height="24" viewBox="0 0 78 24" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M34.295 17.698c-3.156 0-5.714-2.564-5.714-5.727s2.558-5.726 5.714-5.726 5.714 2.564 5.714 5.726-2.558 5.727-5.714 5.727M75.883.879c-1.834-.925-4.078-.17-4.995 1.688l-3.951 7.964L64.379 3h-.005C63.866 1.537 62.483.487 60.858.487c-1.296 0-2.438.667-3.105 1.679l-.006-.001-5.104 7.84-.905-6.352c-.312-2.044-2.21-3.438-4.237-3.125s-3.422 2.201-3.111 4.235l.159 1.065C42.461 2.337 38.65 0 34.295 0c-4.394 0-8.234 2.379-10.308 5.921l.227-1.116c.398-1.951-.858-3.855-2.805-4.254a3.6 3.6 0 0 0-4.245 2.812l-1.547 7.593-5.689-8.825C9.284 1.143 8.174.49 6.913.49c-1.727 0-3.17 1.222-3.521 2.854L.074 19.62c-.397 1.951.835 3.848 2.785 4.262a3.87 3.87 0 0 0 .744.078c1.669.011 3.171-1.163 3.522-2.897l1.547-7.594 5.583 8.686.194.291a3.6 3.6 0 0 0 2.928 1.514c1.774 0 3.249-1.293 3.545-2.994l1.523-7.476c.744 5.894 5.766 10.453 11.85 10.453 5.604 0 10.306-3.868 11.595-9.084l.848 5.712c.239 1.88 1.778 3.368 3.706 3.368 1.387 0 2.519-.794 3.238-1.897l6.12-9.399 2.939 8.653c.527 1.543 1.886 2.643 3.56 2.643 1.554 0 2.776-.935 3.445-2.323l7.8-15.734c.921-1.845.172-4.077-1.663-5.003" stroke="none" fill-rule="nonzero"/></svg>',
      "friendlyName": "Now TV",
      "className": "nowTVButton",
      "appName": "NOW",
      "androidName": "com.bskyb.nowtv.beta",
      "adbLaunchCommand": "adb shell am start -n com.bskyb.nowtv.beta/sky.wrapper.tv.AmazonMainActivity",
      "deviceFamily": ["amazon-fire"], },


  "npo": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="265" height="178" viewBox="0 0 265 178" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M172 100.2l-72 72c-7.2 7.2-15.6 7.2-22.8 0l-72-72c-7.2-7.2-7.2-15.5 0-22.8l72-72c7.2-7.3 15.5-7.3 22.8 0l72 72" fill="#e5e5e5"/><path d="M69.6 57.2L64.3 52c-2.2-2.2-4.2-2-6.7.3L53 56.8c-2.4 2.4-2.5 4.5-.3 6.7l5.3 5.3c2.2 2.2 4.2 2 6.7-.3l4.6-4.6c2.4-2.5 2.4-4.6.3-6.7m5.7-5.6c5.4 5.4 5.5 12-.6 18L70 74.2c-1.6 1.6-3 2.4-4 2.7l4 4c2 2 1.8 4.3.2 5.8-1.6 1.6-3.8 1.8-6-.2L47 69c-5.4-5.4-5.5-12 .6-18l4.3-4.3c6-6 12.6-6 18-.6l5.4 5.4zM97 29.8l-5.3-5.3c-2.2-2.2-4.2-2-6.7.3l-4.6 4.6C78 31.8 77.8 34 80 36l5.2 5.3c2.2 2.2 4.2 2 6.7-.3l4.6-4.6C99 34 99 32 97 29.8m5.8-5.5c5.4 5.4 5.5 12-.6 18l-4.3 4.3c-6 6-12.6 6-18 .5l-5.5-5.4c-5.4-5.4-5.5-12 .6-18l4.3-4.3c6-6 12.6-6 18-.6l5.5 5.5zm-49 61.3c2 2 1.7 4.3.2 6-1.6 1.6-3.8 1.8-5.8-.2L36.5 79.8c-2.2-2.2-4.2-2-6.7.3l-4.6 4.6c-2.4 2.4-2.5 4.5-.3 6.7L36.4 103c2 2 1.8 4.3.2 5.8s-3.8 1.8-6-.2L19 97c-5.4-5.4-5.5-12 .6-18l4.3-4.3c6-6 12.6-6 18-.6l11.6 11.6z" fill="#fc6c00"/><path d="M92.8 77.4c-7.2 7.2-7.2 15.5 0 22.8l72 72c7.2 7.2 15.5 7.2 22.8 0l72-72c7.2-7.2 7.2-15.5 0-22.8l-72-72c-7.2-7.2-15.6-7.2-22.8 0l-72 72z" fill="#fd6b00"/><path d="M117 101.8l.3-.8c.5-1 1-1.7 2-1.7.3 0 .7.1 1.3.3 2.4.8 4.6 1.3 6.7 1.3 3.7 0 5.6-1 5.6-3 0-.4-.1-.8-.3-1l-.6-.8c-.2-.2-.6-.4-1-.6s-1-.3-1.3-.4-1-.2-1.7-.4l-3.4-.8c-.8-.2-1.8-.6-2.8-1-1-.5-2-1-2.4-1.5a7 7 0 0 1-1.4-2.1c-.4-1-.6-2-.6-3 0-2.7 1-5 3-6.4 2-1.5 5-2.3 8.8-2.3 2.8 0 5.4.4 7.6 1.3 1 .4 1.6 1 1.6 2 0 .3-.1.7-.3 1.2l-.3.7c-.5 1-1 1.7-2 1.7-.3 0-.7-.1-1.3-.3-2-.7-3.8-1-5.6-1-3.5 0-5.2 1-5.2 2.8 0 1 .3 1.5 1 2s2 .8 4 1.3l3.4 1c.8.2 1.7.6 2.8 1 1 .5 2 1 2.4 1.5a7 7 0 0 1 1.4 2.1c.4 1 .6 2 .6 3 0 2.8-1 5-3 6.4-2 1.5-5 2.3-9 2.3-3.6 0-6.5-.5-8.8-1.4-1-.4-1.6-1-1.6-2l.3-1.2zm30-6.2v-12h-2c-.8 0-1.4-.2-1.8-.6s-.6-1-.6-1.8v-.7c0-.8.2-1.4.6-1.8s1-.6 1.8-.6h2v-4.5c0-.8.2-1.4.6-1.8s1-.6 1.8-.6h1.7c.8 0 1.4.2 1.8.6s.6 1 .6 1.8v4.5h6.8c.8 0 1.4.2 1.8.6s.6 1 .6 1.8v.8c0 .8-.2 1.4-.6 1.8s-1 .6-1.8.6h-6.8V95c0 2.2.4 3.7 1.2 4.5s2 1.2 3.8 1.2c.4 0 1 0 1.5-.1.4-.1.8-.1 1-.1 1 0 1.4.5 1.6 1.4l.2 1 .2 1c0 1-.6 1.7-1.8 2-1.4.3-2.6.4-3.7.4-7 0-10.5-3.6-10.5-10.7zm42.4-5.2L171 79c-1.2-.8-2.8.1-2.8 1.6v22.8c0 1.4 1.6 2.3 2.8 1.6l18.3-11.4c1.2-.8 1.2-2.5 0-3.2zm4.7 13V82c0-1.6.8-2.6 2.3-3 2.8-.8 5.7-1.2 8.6-1.2a42 42 0 0 1 3.9.2c1.4.2 2 1 2 2 0 .3 0 .7-.1 1l-.1.5c-.2.8-.4 1.4-.7 1.7s-.7.5-1.4.5c-.2 0-.7 0-1.5-.1s-1.5-.1-2-.1c-1.8 0-3.3.2-4.4.5v19.4c0 .8-.2 1.4-.6 1.8s-1 .6-1.8.6h-1.7c-.8 0-1.4-.2-1.8-.6-.5-.4-.7-1-.7-1.8zm25.3-7.8v-12h-2c-.8 0-1.4-.2-1.8-.6s-.6-1-.6-1.8v-.7c0-.8.2-1.4.6-1.8s1-.6 1.8-.6h2v-4.5c0-.8.2-1.4.6-1.8s1-.6 1.8-.6h1.7c.8 0 1.4.2 1.8.6s.6 1 .6 1.8v4.5h6.8c.8 0 1.4.2 1.8.6s.6 1 .6 1.8v.8c0 .8-.2 1.4-.6 1.8s-1 .6-1.8.6H226V95c0 2.2.4 3.7 1.2 4.5s2 1.2 3.8 1.2c.4 0 1 0 1.5-.1.4-.1.8-.1 1-.1 1 0 1.4.5 1.6 1.4l.2 1 .2 1c0 1-.6 1.7-1.8 2-1.4.3-2.6.4-3.7.4-7 0-10.6-3.6-10.6-10.7z"/></svg>',
      "friendlyName": "NPO (NL)",
      "appName": "NPO",
      "className": "npoButton",
      "androidName": "nl.uitzendinggemist",
      "deviceFamily": ["chromecast", "apple-tv", "nvidia-shield", "xiaomi"], },


  "optus-sport": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="67" viewBox="0 0 400 67" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M397.3 2v62.5H2.3V2z" fill="#37003c"/><path d="M-.5 32.8v33.4h400V32.8-.5h-200-200v33.3m4-28.3c.3.2 0 0 200.5 0V63H3.5M34 16.3C24 18 18.3 24 18.3 33.2c0 10.8 8.5 17.6 20.6 16.5 17-1.5 21-24.2 6-31.6C41 16 36.6 16 34 16.3m137 0c-7.5 1.5-11 4-12 8.5-1.3 6.3 3 10.7 11.7 11.8 4.7.6 6.8 1.6 6.8 3.2 0 3.2-6.4 3.6-13 1-3.7-1.5-4.8-1.2-6.2 1.7-1.5 3 0 4.6 6.3 6.4 9 2.6 18.6.3 21.3-5.2 3.8-7.5-.6-13-11.5-14.5-4.3-.6-6.3-2-5.8-3.5.7-2.3 5-2.7 10.3-1 3.8 1 4.8.8 6-2 1.5-3 .2-4.3-6-5.6-2.7-.6-3.8-1-8-.6m133.4 0c10.7 1 17.6 11.2 14.8 22-3 12-20 16.3-29.8 7.8-7.3-6.2-7.6-18.4-.6-25 4-4 8.7-5.3 15.6-4.8m-178.5.2c-2.2.4-3 1.6-3 3.8V30l.2 8.7.4 1.5c2.2 7.2 7.8 10.3 17.3 9.4 5.7-.5 10-2 11.8-9v-.5l.2-11-.6-11.8c-2-1.5-5.4-1.5-7.3.5v.5l-.4 9.4-1 11.5c-2 3.5-8.3 3.8-10.7.5-1-1.5-1-1.4-1.2-11.8-.1-11 0-10.3-1.6-11-1-.6-3-.8-4-.5m117.2 1.3c4.7 1.5 3.2 2 2 4.2-1 2-2 2.5-4.3 1.6-6.5-2.5-12-2-13.6 1.3-1.5 2.8 1.4 5 7.3 5.6 8.5 1 13 5 12 10.8-1.2 8.4-13.6 12-24 7-3.4-1.6-4-3-2-5.3 1-1.3 2-1.4 4.2-.4 6.3 3 13 2.6 14.7-.8 1.4-3-1.4-5-8-5.6-9-1-13.6-6.8-10.4-13.6 2-4.5 6.3-6.2 13.5-6.3l2.8.1 3.3.5m30.2 0c5 1.5 7.2 5.3 7 10.8-.2 4-2 7-5.4 8.7-2 1-3 1.2-7.5 1.4-6.7.2-6.2-.2-6.3 6.6-.1 5.3-.2 5.6-1.4 6.2-.8.4-3.2.4-4 0-1.3-.6-1.2.3-1.3-16.5 0-15.7 0-16.3.7-17s1-.7 8.6-.7l7.5.1m76.5.4c4.5 1.5 7 4.3 7.2 9 .2 4.3-2 7.5-6.7 9.5-3.5 1.5-3.5 1.5 1.7 8.4 4.8 6.4 5 7 .6 7-3.4 0-3 .2-8.5-7-4.5-6-5-6.6-6-6.5-1.3.1-1.3.2-1.4 6.4l-.3 5.7c-.8 2-4.7 2-5.7.3-.3-.6-.5-29.5-.2-31.2.4-2 .5-2 9.2-1.8h7.2l1.6.2m40.4.1c.8.6 1 1.2 1 2.8 0 2.8-.3 3-5.2 3-6.4.2-5.8-1.3-6 14.4L374 50c-1 1.4-4.7 1.2-5.4-.2-.2-.4-.3-2.6-.3-12.6-.1-15.6.5-14-6-14.3-3.3 0-4-.1-4.2-.3-1.6-1-1.4-5 .3-5.8.8-.4 25.6-.1 26 .2m-323.6.3c-1 .1-1.5.6-1.7 1.2a299 299 0 0 0 .2 30c.6 1 1.3 1.2 3.2 1.2 4 .2 4.5-.4 4.7-5 .1-4.7.1-4.7 4.8-5 8.3-.3 11.7-2 13.8-7.2l.7-3V29c0-6.7-4-11.3-11-11.8-2.3-.2-14-.2-14.8 0m31.7 0c-2.8.5-3.4 4.7-1 5.8.7.3 1.3.4 4.6.5 5.8.1 5.2-1.3 5.3 13 .1 14-.2 13.2 4 13.2s4 1 4-13c.1-14.3-.5-13 5.5-13 3.6-.1 4-.2 4.6-.5 2.3-1 1.7-5-.6-5.7l-26.5-.1m207 5a11 11 0 0 0-8.8 13c1.5 12 19 13 22.2 1.2 2.2-8.4-5-16-13.4-14.2m34.7.5c-1.8.3-2 1-2 4.6 0 4.6 0 4.6 5.6 4.5 4.3-.1 4.7-.2 6.2-1.3 2.8-2 2-6.4-1.3-7.4a27 27 0 0 0-8.5-.4m-73.6.3c-1.7.3-2 1-2 4.4 0 4.3.2 4.4 5 4.4 3.5 0 4.5-.2 6-1 3-2 2-6.5-1.5-7.5a46 46 0 0 0-7.4-.2m-222 1.3c10.3 3 8.3 18-2.4 18-6-.1-10-4.8-9-11 1-5 6.2-8.3 11.3-7m36.3.3c3.7 1.2 3.8 6.4.1 7.7-2.4.8-6.8.3-7.5-1-.7-1.3-.3-6 .6-6.7s5.2-.7 6.8-.1" fill="#05f0ff"/></svg>',
      "friendlyName": "Optus Sport (AU)",
      "className": "optusSportButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "au.com.optus.sport.androidtv",
          "androidName": "au.com.optus.sport.androidtv",
          "adbLaunchCommand": "adb shell am start -n au.com.optus.sport.androidtv/.MainActivity",
      },
      "apple-tv": {
          "appName": "Optus Sport",
      },
      "chromecast": {
          "appName": "au.com.optus.sport.androidtv",
          "androidName": "au.com.optus.sport.androidtv",
          "adbLaunchCommand": "adb shell am start -n au.com.optus.sport.androidtv/.MainActivity",
      },
      "nvidia-shield": {
          "appName": "au.com.optus.sport.androidtv",
          "androidName": "au.com.optus.sport.androidtv",
          "adbLaunchCommand": "adb shell am start -n au.com.optus.sport.androidtv/.MainActivity",
      },
      "xiaomi": {
          "appName": "au.com.optus.sport.androidtv",
          "androidName": "au.com.optus.sport.androidtv",
          "adbLaunchCommand": "adb shell am start -n au.com.optus.sport.androidtv/.MainActivity",
      },
   },



  "ott-navigator": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201 201" width="201" height="201" xml:space="preserve"><g><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#fff;fill-rule:evenodd;opacity:1" transform="translate(-26 -26)" d="M39.5 26.5c58.334-.167 116.668 0 175 .5 5.865 1.51 10.032 5.01 12.5 10.5.667 47 .667 94 0 141-2.193 6.517-6.693 10.35-13.5 11.5-10.328.5-20.661.666-31 .5.167 10.672 0 21.339-.5 32a6.978 6.978 0 0 1-2.5 3.5 700.819 700.819 0 0 1-52.5 1.5 700.819 700.819 0 0 1-52.5-1.5 6.977 6.977 0 0 1-2.5-3.5 512.462 512.462 0 0 1-.5-32c-10.672.167-21.339 0-32-.5-6.14-2.141-10.307-6.307-12.5-12.5a4692.265 4692.265 0 0 1 0-137c1.917-6.747 6.084-11.414 12.5-14z"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#2a3841;fill-rule:evenodd;opacity:1" transform="translate(-26 -26)" d="M42.5 37.5c56.001-.167 112.001 0 168 .5 2.671 1.25 4.837 3.083 6.5 5.5l.5 64c.151 22.395-.349 44.728-1.5 67-1.78 2.803-4.28 4.469-7.5 5l-62-16a1076.482 1076.482 0 0 0-19.5-55 1076.482 1076.482 0 0 0-19.5 55 2864.094 2864.094 0 0 0-62.5 16c-2.5-.583-4.5-1.916-6-4a2195.553 2195.553 0 0 1-1-132 40.775 40.775 0 0 1 4.5-6z"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#fff;fill-rule:evenodd;opacity:1" transform="translate(-26 -26)" d="M104.5 49.5a1682.092 1682.092 0 0 1 41 55c.06.543.393.876 1 1 1-18.655 1.333-37.321 1-56h34v113h-4c-2.015-1.424-4.348-2.09-7-2a69.08 69.08 0 0 1-18.5-5 2186.873 2186.873 0 0 0-25-57c-8.149 18.97-16.316 37.97-24.5 57a248.55 248.55 0 0 1-30 8v-114h32z"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#2d3b45;fill-rule:evenodd;opacity:1" transform="translate(-26 -26)" d="M125.5 122.5a784.68 784.68 0 0 1 1 56c-21 1.333-42 1.333-63 0a1739.259 1739.259 0 0 1 44.5-8l4.5.5c4.354 2.671 8.687 5.004 13 7a64.882 64.882 0 0 1-10-13.5 958.928 958.928 0 0 0 10-42z"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#2b3942;fill-rule:evenodd;opacity:1" transform="translate(-26 -26)" d="M190.5 178.5a481.12 481.12 0 0 1-62 0 54.172 54.172 0 0 1 15-8 723.413 723.413 0 0 0 47 8z"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#2c3b44;fill-rule:evenodd;opacity:1" transform="translate(-26 -26)" d="M89.5 190.5c19.173-1.015 25.34 7.318 18.5 25-5.269 4.745-11.436 6.245-18.5 4.5-9.055-5.94-11.222-13.773-6.5-23.5a53.871 53.871 0 0 1 6.5-6z"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#2a3841;fill-rule:evenodd;opacity:1" transform="translate(-26 -26)" d="M142.5 190.5a32.128 32.128 0 0 1-3 7 246.697 246.697 0 0 0-7 2c-.991 6.813-1.325 13.813-1 21h-9v-22h-7a32.508 32.508 0 0 1-3-7c9.819-.994 19.819-1.327 30-1zm6 0h25v8c-3.542-.313-6.875.021-10 1-.991 6.813-1.325 13.813-1 21h-9v-22h-9l4-8z"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#fff;fill-rule:evenodd;opacity:1" transform="translate(-26 -26)" d="M92.5 198.5c5.84-.921 9.507 1.413 11 7-.797 4.464-3.464 6.797-8 7-7.933-3.072-8.933-7.739-3-14z"/></g></svg>',
      "friendlyName": "OTT Navigator",
      "className": "ottNavigatorButton",
      "appName": "studio.scillarium.ottnavigator",
      "androidName": "studio.scillarium.ottnavigator",
      "adbLaunchCommand": "adb shell am start -n studio.scillarium.ottnavigator/.MainActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "oqee-by-free": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="80" viewBox="0 0 150 80" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><defs><linearGradient id="oqeeone" x1="-2.04%" y1="50.00%" x2="102.26%" y2="50.00%"><stop stop-color="#f70300" stop-opacity="0" offset="0%"/><stop offset="32%" stop-color="#7e0100" stop-opacity=".6"/><stop offset="50%" stop-color="#310000"/><stop offset="100%" stop-color="#f70300" stop-opacity="0"/></linearGradient><linearGradient id="oqeetwo" x1="8.99%" y1="50.00%" x2="194.96%" y2="50.00%"><stop stop-color="#f70300" stop-opacity="0" offset="0%"/><stop offset="32%" stop-color="#7e0100" stop-opacity=".6"/><stop offset="50%" stop-color="#310000"/><stop offset="100%" stop-color="#f70300" stop-opacity="0"/></linearGradient></defs><g transform="translate(-.5 -.5)" stroke="none" fill-rule="nonzero"><path d="M93.6 50.7c-2 0-4.5.7-6 1.4-2.6 1.2-4.3 2.4-5.5 3.7s-2 2.7-3 4.2h-4.6c-.1 0-.3 0-.3.2l-.6 1c-.1.1-.1.3 0 .4 0 .1.2.2.3.2h4.4L70 79.3c0 .1 0 .3.1.4l.2.2c0 .1.2.1.3.1l3.4-.5c.1 0 .2-.1.2-.2l9-17.4h5.8c.1 0 .3-.1.3-.2l.7-1.2c.1-.1 0-.3 0-.4-.1-.1-.2-.1-.3-.1h-5.5l1.6-3.5h.1c.3-.8.8-1.6 1.5-2.3l1.3-.8c.6-.2 1.3-.3 2-.3.6 0 1 .2 1.7.3.6.2 1.2.3 1.8.3.2 0 .5 0 .8-.2.4-.2.8-.6 1-1 0-.1.1-.3.1-.4s-.1-.3-.1-.4c-.1-.2-.3-.4-.5-.5-.3-.1-.6-.3-1-.3-.4-.1-.8-.1-1.2-.1zm29.6 7.4a22 22 0 0 0-11.2 3.2c-1.5 1-2.8 2-3.7 3-1 1.2-1.4 2.4-1.4 3.6 0 .6.1 1 .4 1.6.4.7 1 1.4 2.2 2 1 .4 2.6.7 4.6.7 5 0 9-1.6 12.7-3.7.1-.1.2-.3.1-.5 0-.1-.1-.1-.1-.1l-.8-.5c-.1-.1-.2-.1-.3 0a23 23 0 0 1-9.5 2.6c-1.3 0-2.4-.2-3-.6-.3-.1-.6-.3-.8-.5s-.3-.5-.3-.8c0-.6.1-1.2.4-1.8l10.2-1.4a15 15 0 0 0 4.4-1.7c.6-.3 1-.7 1.4-1.2.3-.4.5-1 .5-1.5 0-.3 0-.5-.2-.7-.1-.4-.5-.7-1-1-.6-.3-1.3-.5-2-.6-1-.1-1.7-.2-2.5-.2zm21 0a22 22 0 0 0-11.2 3.2c-1.5 1-2.8 2-3.7 3-1 1.2-1.4 2.4-1.4 3.6 0 .6.1 1 .4 1.6.4.7 1 1.4 2.2 2 1 .4 2.6.7 4.5.7 5 0 9-1.6 12.7-3.7.2-.1.3-.3.2-.5 0-.1-.1-.1-.1-.1l-.8-.5c-.1-.1-.2-.1-.4 0-3 1.5-6.3 2.6-9.4 2.6-1.3 0-2.4-.2-3-.6-.3-.1-.6-.3-.8-.5s-.3-.5-.3-.8c0-.6.1-1.2.3-1.8l10.3-1.4a15 15 0 0 0 4.4-1.7c.6-.3 1-.7 1.4-1.2.3-.4.5-1 .5-1.5 0-.3 0-.5-.2-.7-.2-.4-.5-.7-1-1-.6-.3-1.3-.5-2-.6-1-.1-1.7-.2-2.5-.2zm-45.3.4c-.7 0-1.5.2-2.4.4L93 60.6l-2.6 1.7c0 .1-.1.2-.1.3s0 .1.1.2l.1.1.7.5c.1.1.3.1.4 0 .6-.4 1.3-.8 2-1 .4-.2 1-.4 1.3-.5.4-.2.7-.2 1-.2.3 0 .5 0 .6.1s.1.1.1.2v.3c-.2.4-.3.8-.6 1.2h0l-4.3 7.8c-.1.1-.1.1-.1.2-.1.1-.1.2-.1.3v.2c.1.1.2.1.2.2.1.1.3.2.4.2.2.1.5.1.7.2h.8H95c.2 0 .3-.1.5-.1.1 0 .1 0 .2-.1.1 0 .2-.1.2-.2h0l1-1.8c1-1.4 2.3-3.5 4-5.2.8-.8 1.7-1.6 2.6-2 1-.6 1.8-1 2.7-1 .6 0 1.3.1 2 .1 1 .1 2-.5 2.4-1.3.1-.2.2-.4.2-.6.1-.2.1-.3.1-.5 0-.4-.2-.7-.5-1-.2-.2-.4-.3-.7-.3-.3-.1-.6-.1-1-.1-1 0-2 .3-3 .8-1.5.8-3 2-4.4 3l-1.6 1.4 1.2-2.2.4-.8c0-.2.1-.3.1-.4.1-.4.1-.8-.1-1-.2-.1-.3-.3-.5-.3-.3-.2-.6-.3-1-.3-.4-.1-.7-.1-1-.1zm23 1.2c.7 0 1.2.2 1.5.3l.3.3c.1.1.1.2.1.3 0 .3-.1.6-.2 1-.3.5-1 1-1.6 1.4-1.2.6-2.7 1-4.4 1.4a23 23 0 0 1-4.5.5c.2-.4.5-.7.8-1 1-1 2.2-2 3.5-2.8 1.4-.7 3-1.3 4.5-1.3zm21 0c.7 0 1.2.2 1.5.3l.3.3c.1.1.1.2.1.3 0 .3-.1.6-.2 1-.3.5-1 1-1.6 1.4-1.2.6-2.7 1-4.4 1.4-1.5.3-3 .5-4.6.5.3-.4.6-.7 1-1 1-1 2.2-2 3.5-2.8 1.4-.7 3-1.3 4.5-1.3z" fill="#c00"/><path d="M142 4.4c-3.7-2.5-8-4-12.7-4.3-1 0-10.8-.4-17.8 6.2l-.3.3-.3-.3c-2.2-2-5-3.6-7.7-4.6-6-2-12.7-2-18.8 0-3 1-5.5 2.6-7.7 4.6a21 21 0 0 0-5.1 7.1 23 23 0 0 0-1.9 9.3c0 3.5.6 6.5 2 9.3 1.2 2.7 3 5 5 7.2a22 22 0 0 0 7.7 4.5c6 2 12.7 2 18.8 0 1.8-.6 3.5-1.5 5-2.5a30 30 0 0 1-3.8-4.2c-1-1.6-2-3.3-2.8-5l-.4-1c-1.8 1.8-4.3 2.7-7.5 2.7-1 0-5 0-8-3-1-1-1.7-2.2-2-3.5h21l1.6 5c1.4 3 3.4 5.6 6 7.7 2 1.6 4.4 3 7 3.8 6 2 12.7 2 18.8 0 2-.7 4-1.6 5.6-3-.6-.4-1.3-1-2-1.5s-3.3-3-5-7c-.1-.3-.3-.6-.3-.6 0-.2-.1-.4-.2-.5-1.8 1.7-4.3 2.6-7.5 2.6-1 0-5 0-8-3-1-1-1.7-2.2-2-3.5h30.7c2-8.7-.8-17.6-7.3-22.7zM83.8 18.2a12 12 0 0 1 2.1-3.4c2-2 4.5-3 8-3 1 0 5 0 8 3 1 1 1.7 2.2 2 3.4h-20zm34.8 0a12 12 0 0 1 2.1-3.4c3-3 7-3 8-3s5 0 8 3c1 1 1.7 2.2 2 3.4h-20z"/><g fill="#c00"><path d="M70.4 38.5c2.7 4 6.6 7 11 8.6L74 55c-5.7-2.7-11-6.4-15-11l11.6-5.4z"/><path d="M81 13.3c-1.2-2.7-3-5-5-7.2-2-1.8-4.5-3.3-7-4.3 2.6 1 5 2.5 7 4.3.5.6 1 1 1.6 1.8 1.5 1.6 2.6 3.4 3.5 5.4 1.3 2.8 2 5.8 2 9.3a23 23 0 0 1-.6 5.2l-4.2-2c-3 .8-6 1.2-9.2 1.2.1-.3.1-.5.2-.8-.4 1.6-1.2 3-2.4 4.4-1.8 2-4.5 3-8 3s-6-1-8-3-2.8-4.6-2.8-8v-.1c0-.4 0-1 .1-1.3-.2 1-.2 2-.2 3v.1c-.2 1.8-1.3 9.2-6.6 14.3l.3.3c2.2 2 5 3.6 7.7 4.6 6 2 12.7 2 18.8 0 3-1 5.5-2.6 7.7-4.6a21 21 0 0 0 5.1-7.1c1.3-2.8 2-6 2-9.3 0-3.2-.6-6.4-2-9.3z"/></g><path d="M81 13.3c-1.2-2.7-3-5-5.2-7C74 4.3 71.6 3 69 2c-.4-.2-.8-.3-1.2-.5A31 31 0 0 0 58.8 0c-3.2 0-6.4.5-9.4 1.6-3 1-5.5 2.5-7.7 4.6-.1 0-.2.1-.3.2-.6-.5-1.2-1-2-1.5-1.8-1.4-3.8-2.5-6-3.3-.2-.1-.5-.2-.7-.2-4.4-1.5-9.4-1.8-14-1l-4 1c-3 1-5.5 2.5-7.7 4.6a21 21 0 0 0-5.1 7.1A22 22 0 0 0 0 22.7c0 .6 0 1.2.1 1.7v.3.4C.3 27.5 1 29.8 2 32c.2.5.4 1 .7 1.4C3.2 34.6 4 36 5 37c.2.3.5.6.7 1 .1.1.3.2.4.3v.1l.3.3.2.1v.1c.1.1.2.1.3.2 2.2 2 4.8 3.6 7.7 4.6a36 36 0 0 0 4.7 1.2 11 11 0 0 0 1.8.2c2.8.3 5.6.2 8.3-.3 1-.2 2.3-.5 3.4-1h.1v-.1c.2 0 .3-.1.4-.1 2.8-1 5.4-2.5 7.6-4.6.2-.1.3-.2.4-.2.1.1.2.2.3.2 2.2 2 4.8 3.6 7.7 4.6 6 2 12.7 2 18.8 0 2.8-1 5.4-2.5 7.6-4.6 2.2-2 4-4.4 5.2-7a23 23 0 0 0 1.9-9.3c0-3.2-.6-6.4-2-9.3zM28 33c-.1.1-.3.1-.4.1-1 .3-2.3.5-3.7.5-2.7 0-5-.7-6.8-2-.4-.3-.7-.6-1-1a10 10 0 0 1-2.3-4v-.1c0-.1-.1-.2-.1-.2-1-4-.2-9 2.4-11.5a10 10 0 0 1 6.8-3h1 1c2.2.2 4.2 1 5.8 2l.3.3c.2.2.5.4.7.6s.3.4.5.6c.7 1 1.3 2 1.7 3 .2.7.3 1.3.4 2 .1.3.1.5.1.8.1.1.1.2.1.4-.1.4-.1.8-.1 1v.1c0 3.3-1 6-2.8 8L30 32l-2 .8zm38.7-2.4c-2 2-4.5 3-8 3s-6-1-8-3-2.8-4.6-2.8-8v-.1V21c.1-.4.2-.8.2-1.2.1-.4.2-.7.2-1a11 11 0 0 1 2.4-4.2c.1-.1.2-.2.2-.3 1-1 2.2-1.6 3.5-2 .1 0 .2 0 .3-.1a16 16 0 0 1 3.9-.5c1.3 0 5 .1 7.8 3a11 11 0 0 1 2.8 7.9c0 1-.1 2-.3 3.2-.4 1.8-1.2 3.4-2.4 4.7z" fill="url(#oqeeone)" opacity=".3"/><g fill="#c00"><path d="M81 13.3c-1-2-2-3.8-3.5-5.4L76 6c-2.3-2-5-3.6-8-4.7-3-1-6-1.4-9-1.4-3.3 0-6.5.5-9.5 1.6-3 1-5.5 2.5-7.7 4.6a21 21 0 0 0-5.1 7.1c-1.2 3-1.8 6-2 9.2v.1c0 3.2-1 5.8-2.8 8L30 32l-.2.1c-1.5 1-3.5 1.3-5.7 1.3-3.4 0-6-1-8-3-.4-.4-.7-1-1-1.3l-13 3.5c1 1.8 2 3.4 3.3 5 .2.2.7.8 1.4 1.4 2.3 2 5 3.5 7.7 4.6 2 .7 4.3 1.2 6.6 1.4 2.7.3 5.5.2 8.2-.3a30 30 0 0 0 5.8-1.8l2-1c1.5-1 3-2 4.2-3 5.4-5 6.6-12.5 6.7-14.4v-.1c0-1.5.1-3 .4-4.4.3-1.7 1-3.2 2-4.5 1-1.4 2.6-2.5 4.4-3 1.3-.4 2.7-.7 4-.6 1.2 0 5 .1 8 3 2.7 2.8 2.7 6.3 2.8 8 0 1.5-.2 3-.6 4.4 3 .1 6.2-.3 9.2-1.2l4.2 2.2a25 25 0 0 0 .6-5.5c0-3-.6-6.3-2-9.2z"/><path d="M41.4 6.4c-4.2 4-6.3 9.4-6.6 15-.2-1-.2-2-.6-3-.4-1-1-2-1.5-3-3.3-4.8-12.8-5-16.5-.8-3.4 3.4-3.7 10.5-1 14.5L2.3 32.7C-2 24.4-.3 12.6 7 6.2 16.3-2 32.3-2 41.4 6.4z"/></g><path d="M41.4 6.4c-4.2 4-6.3 9.4-6.6 15-.2-1-.2-2-.6-3-.4-1.2-1-2.2-1.7-3.2-3.3-4.5-12.7-4.7-16.3-.5-3.3 3.3-3.8 10.6-1 14.5L2.3 32.7C-2 24.4-.3 12.6 7 6.2 16.3-2 32.3-2 41.4 6.4z" fill="url(#oqeetwo" opacity=".3"/><path d="M52.6 62.3v-10h2V56h0c.1-.2.3-.4.5-.6.1-.2.4-.4.6-.5.3-.2.7-.2 1-.2.5 0 1 .1 1.5.4s.8.7 1 1.3c.3.5.4 1.2.4 2 0 .8-.1 1.5-.4 2s-.6 1-1 1.3c-.4.3-1 .4-1.5.4-.4 0-.8-.1-1-.2-.2-.1-.5-.3-.6-.5-.2-.2-.4-.4-.5-.6h-.1v1.2h-2zm2-3.7a5 5 0 0 0 .2 1.2c.1.3.3.5.5.7.3.2.6.3 1 .3s.6-.1 1-.3c.2-.2.4-.4.5-.7.1-.4.2-.8.2-1.2s-.1-.8-.2-1-.3-.6-.5-.8c-.3-.2-.6-.3-1-.3s-.6.1-1 .3c-.2.2-.4.4-.5.8-.1.3-.2.7-.2 1zm7.7 6.5c-.2 0-.5 0-.7-.1-.2 0-.4-.1-.6-.1l.5-1.6c.3.1.7.2 1 .1.3 0 .5-.2.6-.6v-.3L60.5 55h2l1.6 5.4h.1l1.5-5.4H68L65 63c-.1.4-.3.7-.5 1-.3.3-.6.5-1 .6-.5.2-1 .3-1.4.3z"/></g></svg>',
      "friendlyName": "OQEE by Free (FR)",
      "className": "oqeeButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "net.oqee.androidtv.store",
          "androidName": "net.oqee.androidtv.store",
          "adbLaunchCommand": "adb shell am start -n net.oqee.androidtv.store/net.oqee.androidtv.MainActivity",
      },
      "apple-tv": {
          "appName": "OQEE by Free",
      },
      "chromecast": {
          "appName": "net.oqee.androidtv.store",
          "androidName": "net.oqee.androidtv.store",
          "adbLaunchCommand": "adb shell am start -n net.oqee.androidtv.store/net.oqee.androidtv.MainActivity",
      },
      "nvidia-shield": {
          "appName": "net.oqee.androidtv.store",
          "androidName": "net.oqee.androidtv.store",
          "adbLaunchCommand": "adb shell am start -n net.oqee.androidtv.store/net.oqee.androidtv.MainActivity",
      },
      "xiaomi": {
          "appName": "net.oqee.androidtv.store",
          "androidName": "net.oqee.androidtv.store",
          "adbLaunchCommand": "adb shell am start -n net.oqee.androidtv.store/net.oqee.androidtv.MainActivity",
      },
   },


  "pandora": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 277.2 57"><path d="M186.4 17.4c6.1 0 11.1 5 11.1 11.1s-5 11.1-11.1 11.1-11.1-5-11.1-11.1c0-6.2 5-11.1 11.1-11.1m0-7.4c-10.2 0-18.5 8.3-18.5 18.5S176.2 47 186.4 47s18.5-8.3 18.5-18.5c0-10.3-8.3-18.5-18.5-18.5M71.6 11.1v3c-3.2-2.6-7.3-4.2-11.7-4.2-10.2 0-18.5 8.3-18.5 18.5s8.3 18.5 18.5 18.5c4.4 0 8.5-1.6 11.7-4.2v3h6.8V11.1h-6.8zM60.3 40c-6.4 0-11.5-5.2-11.5-11.5C48.8 22.1 54 17 60.3 17c6.4 0 11.5 5.2 11.5 11.5S66.6 40 60.3 40M260.1 11.1v3c-3.2-2.6-7.3-4.2-11.7-4.2-10.2 0-18.5 8.3-18.5 18.5s8.3 18.5 18.5 18.5c4.4 0 8.5-1.6 11.7-4.2v3h6.8V11.1h-6.8zM248.9 40c-6.4 0-11.5-5.2-11.5-11.5 0-6.4 5.2-11.5 11.5-11.5 6.4 0 11.5 5.2 11.5 11.5S255.2 40 248.9 40M217.1 13.3c-4 2.5-7.4 7-7.4 15v17.5h7.4V28.3c0-11.5 11.9-10.9 11.9-10.9V10c-.1 0-6.5-.2-11.9 3.3M113.6 13.7c-3.1-2.3-6.9-3.7-11.1-3.7-4.2 0-8 1.4-11.1 3.7-4.5 3.4-7.4 8.8-7.4 14.8v17.4h7.4V28.5c0-6.1 5-11.1 11.1-11.1s11.1 5 11.1 11.1V45.9h7.4V28.5c0-6.1-2.9-11.5-7.4-14.8M159.5 0c-1.9 0-3.4 1.5-3.4 3.4v10.7c-3.2-2.6-7.3-4.2-11.7-4.2-10.2 0-18.5 8.3-18.5 18.5s8.3 18.5 18.5 18.5c4.4 0 8.5-1.6 11.7-4.2v3h6.8V0h-3.4zm-14.7 40c-6.4 0-11.5-5.2-11.5-11.5 0-6.4 5.2-11.5 11.5-11.5 6.4 0 11.5 5.2 11.5 11.5.1 6.3-5.1 11.5-11.5 11.5M18.5 10c-4.4 0-8.5 1.6-11.7 4.2v-3H0V57h3.4c1.9 0 3.4-1.5 3.4-3.4V42.8C10 45.4 14.1 47 18.5 47 28.8 47 37 38.7 37 28.5 37 18.2 28.8 10 18.5 10m-.4 30c-6.4 0-11.5-5.2-11.5-11.5 0-6.4 5.2-11.5 11.5-11.5s11.5 5.2 11.5 11.5S24.5 40 18.1 40M273.8 11.1c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4m0-6.4c-1.7 0-3 1.3-3 3 0 1.6 1.3 3 3 3s3-1.4 3-3c0-1.7-1.4-3-3-3m.9 5-1-1.5h-.7v1.5h-.5V5.8h1.6c.7 0 1.2.5 1.2 1.2 0 .9-.8 1.2-1 1.2l1 1.6h-.6zm-.6-3.5H273v1.5h1.1c.3 0 .7-.3.7-.7 0-.5-.4-.8-.7-.8" style="fill:#fff;"/></svg>',
      "friendlyName": "Pandora",
      "className": "pandoraButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.pandora.android.gtv",
          "androidName": "com.pandora.android.gtv",
      },
      "apple-tv": {
          "appName": "Pandora",
      },
      "chromecast": {
          "appName": "com.pandora.android.atv",
          "androidName": "com.pandora.android.atv",
          "adbLaunchCommand": "adb shell am start -n com.pandora.android.atv/com.pandora.android.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.pandora.android.atv",
          "androidName": "com.pandora.android.atv",
          "adbLaunchCommand": "adb shell am start -n com.pandora.android.atv/com.pandora.android.MainActivity",
      },
      "xiaomi": {
          "appName": "com.pandora.android.atv",
          "androidName": "com.pandora.android.atv",
          "adbLaunchCommand": "adb shell am start -n com.pandora.android.atv/com.pandora.android.MainActivity",
      },
   },


  "paramount-plus": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 117.4 27"><path d="M30 6.9C30 2.2 25.1 0 19.2 0 13 0 7.2 2.8 5.1 7.1c-.6 1.1-.9 2.4-.9 3.7 0 1.1.3 2.2.9 3.1.9 1.3 2.5 2.2 4.9 2.2 2.9 0 5.2-1.6 5.2-4.4 0 0 0-.8-.9-.8-.7 0-.9.5-.9.8.1 2.2-1.2 3.9-3.5 3.9-2.6 0-3.7-2.2-3.7-4.5 0-4.8 3.6-8 7.4-9.4 1.8-.7 3.6-1 5.5-1 4.3 0 7.8 1.6 7.8 6 0 3.7-3.1 6.8-6.8 7.1l.2-.5c.8-2.7 1.7-5.6 3.2-7.8.1-.1.2-.3.4-.6l-.2-.3-.9.6c-7.1 5.5-7.3 21-16.7 21-.3 0-.6 0-1-.1-2-.3-3-1.6-3-3.5 0-.4.1-.9.1-1.1 0-.5-.4-1-.9-1h-.1c-.8 0-1.2.7-1.2 1.6-.1 2.7 2 4.3 5.1 4.6h1.1c7.3 0 11.8-5.5 13.8-12.3 1-.1 1.9-.3 2.9-.6 3.3-.6 7.1-2.9 7.1-6.9z" style="fill:#fff"/><path d="M100 8.5h-2.6l-.6 1.4-1 2.3h-1.2l-.4.8h1.2L94 16.2c-1.1 2.3-2.8 4.6-3.7 4.6-.2 0-.3-.1-.3-.3 0-.2.1-.4.3-1 .3-.7.8-1.7 1.2-2.5.5-1.1 1.4-2.8 1.4-3.6 0-.8-.5-1.5-1.6-1.5-1.2 0-2.3.7-3.3 1.7l.6-1.5h-2.4l-2 4.5c-.8 1.6-2.4 4.2-3.4 4.2-.2 0-.3-.1-.3-.3 0-.2.1-.4.2-.6.1-.2 1.3-3 1.3-3l2.2-4.9h-2.6l-2.1 4.8c-.6 1.5-2.3 4-3.3 4-.2 0-.3-.1-.4-.3v-.1c0-.3.2-.7.3-1.1L77 17l2.3-4.9h-2.6l-.5 1.1c-.4.8-1 1.6-2.1 1.6-.5 0-.7-.2-.8-.4-.2-1.7-1.2-2.5-2.8-2.5-2.2 0-3.7 1.3-4.7 2.8-.7 1.1-1.2 2.2-1.6 3.4-.9 1.5-1.9 2.7-2.7 2.7-.2 0-.3-.1-.3-.4 0-.3.3-.8.3-1.1l1.7-3.6c.5-1.1.8-1.8.8-2.6s-.5-1.3-1.4-1.3c-1.2 0-2.6.7-3.6 1.9v-.6c0-.9-.4-1.3-1.3-1.3-1.1 0-2.3.7-3.3 1.9l.7-1.7h-2.4l-2 4.5c-.9 2.1-2.5 4.2-3.3 4.2-.2 0-.3-.1-.3-.4 0-.4.5-1.4.6-1.8l2.7-6c.2-.5-1.1-.7-2.7-.7-1.7 0-3.4.8-4.6 1.9-.9.7-1.5 1.1-1.9 1.1-.2 0-.2-.1-.2-.2 0-.4.9-1.4.9-2.2 0-.4-.2-.6-.7-.6-.9 0-2.1.9-2.9 1.8l.7-1.7h-2.3l-2 4.5c-.9 2.1-2.5 4.3-3.4 4.3-.2 0-.3-.1-.3-.4 0-.4.4-1.4.7-1.9l2.7-6c.2-.5-1.1-.7-2.7-.7-2.4 0-4.7 1.6-5.9 3.3-1.4 1.8-2.3 3.7-2.3 5.2 0 1.2.6 2 1.9 2 1.4 0 2.6-1.1 3.3-2 0 .2-.1.3-.1.5 0 .9.3 1.5 1.4 1.5.9 0 2.2-.8 3.1-2l-.8 1.8h2.5l2.5-5.6c.8-1.8 1.7-2.8 2-2.8.1 0 .1 0 .1.1 0 .2-.4.7-.4 1.2s.3.8.9.8c.5 0 1.1-.3 1.7-.6-1.3 1.7-2.1 3.5-2.1 5 0 1.2.6 2 1.9 2 1.4 0 2.6-1.3 3.3-2.1v.6c0 .8.5 1.5 1.4 1.5 1.1 0 1.9-.7 3-2l-.8 1.8h2.6l2.4-5.4c1-2.3 2.4-3.6 3.1-3.6.2 0 .3.1.3.3v.1c0 .3-.1.5-.2.8l-3.4 7.8h2.6l2.4-5.5c1-2.3 2.2-3.5 3-3.5.3 0 .4.1.4.4 0 .3-.1.6-.2.9L59 19.6c-.2.5-.3 1-.4 1.5 0 .8.4 1.4 1.6 1.4 1.5 0 2.6-1.1 3.9-2.8v.3c.1 1.4.9 2.5 2.9 2.5 2.4 0 4.3-1.6 5.4-4.2.4-.9.7-1.9.8-2.9.3.1.6.2.8.2.4 0 .8-.1 1.1-.3l-.4.9c-.5 1-1 2.1-1.4 3-.3.5-.4 1.1-.5 1.7 0 .9.5 1.6 1.6 1.6s2.5-1 3.5-2.4c.1.3.1.6.1.9 0 .8.2 1.5 1.3 1.5 1.2 0 2.2-.9 3.2-2l-.8 1.8h2.6l2.1-4.7c1.2-2.7 2.4-4.3 3.5-4.3.2 0 .3.1.4.3v.1c0 .5-.6 1.7-1.2 2.9-.5 1.1-.9 2-1.2 2.6-.3.6-.4 1.2-.5 1.8 0 .8.5 1.4 1.5 1.4 1.5 0 3-1.5 3.9-2.6-.2.5-.3 1.1-.3 1.6 0 1.5.9 2.3 2.2 2.3.8 0 1.7-.3 2.3-.8 1-.7 1.8-1.7 2.5-2.7l-.5-.4c-.6.9-1.3 1.7-2 2.2-.4.3-.8.5-1.3.5s-.9-.3-.9-1 .3-1.6.8-2.9c0 0 .7-1.6 1.4-3.1.6-1.3 1.1-2.5 1.2-2.8h1.7l.3-.8h-1.7l1.5-3.4zM26.5 20.9c-.4 0-.6-.1-.6-.6 0-1.3 1.1-3.5 2.4-5.3.9-1.2 2.1-2.2 3.4-2.2l-1.6 3.7c-1.3 2.7-2.6 4.4-3.6 4.4zm16.1 0c-.4 0-.6-.1-.6-.6 0-1.3 1.1-3.5 2.4-5.3.9-1.2 2.1-2.2 3.4-2.2l-1.6 3.7c-1.3 2.8-2.6 4.4-3.6 4.4zm28.6-7.1c-.1 1.4-1.3 4.8-2.7 6.8-.6.8-1.1 1.1-1.5 1.1-.6 0-.8-.5-.7-1.2.1-1.3 1.2-4.2 2.6-6.3.7-.9 1.1-1.3 1.6-1.3.6-.1.7.3.7.9z" style="fill:#fff" /><path d="m111.4 12.1 2.4-5.5H111l-2.4 5.5h-6l-1 2.3h6l-2.4 5.5h2.8l2.4-5.5h6l1-2.3h-6z" style="fill:#fff"/></svg>',
      "friendlyName": 'Paramount+',
      "className": "paramountPlusButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.cbs.ott",
          "androidName": "com.cbs.ott",
      },
      "apple-tv": {
          "appName": "Paramount+",
      },
      "chromecast": {
          "appName": "com.cbs.ott",
          "androidName": "com.cbs.ott",
      },
      "nvidia-shield": {
          "appName": "com.cbs.ott",
          "androidName": "com.cbs.ott",
      },
      "xiaomi": {
          "appName": "com.cbs.ott",
          "androidName": "com.cbs.ott",
      },
   },


  "paramount-plus-de": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 117.4 27"><path d="M30 6.9C30 2.2 25.1 0 19.2 0 13 0 7.2 2.8 5.1 7.1c-.6 1.1-.9 2.4-.9 3.7 0 1.1.3 2.2.9 3.1.9 1.3 2.5 2.2 4.9 2.2 2.9 0 5.2-1.6 5.2-4.4 0 0 0-.8-.9-.8-.7 0-.9.5-.9.8.1 2.2-1.2 3.9-3.5 3.9-2.6 0-3.7-2.2-3.7-4.5 0-4.8 3.6-8 7.4-9.4 1.8-.7 3.6-1 5.5-1 4.3 0 7.8 1.6 7.8 6 0 3.7-3.1 6.8-6.8 7.1l.2-.5c.8-2.7 1.7-5.6 3.2-7.8.1-.1.2-.3.4-.6l-.2-.3-.9.6c-7.1 5.5-7.3 21-16.7 21-.3 0-.6 0-1-.1-2-.3-3-1.6-3-3.5 0-.4.1-.9.1-1.1 0-.5-.4-1-.9-1h-.1c-.8 0-1.2.7-1.2 1.6-.1 2.7 2 4.3 5.1 4.6h1.1c7.3 0 11.8-5.5 13.8-12.3 1-.1 1.9-.3 2.9-.6 3.3-.6 7.1-2.9 7.1-6.9z" style="fill:#fff"/><path d="M100 8.5h-2.6l-.6 1.4-1 2.3h-1.2l-.4.8h1.2L94 16.2c-1.1 2.3-2.8 4.6-3.7 4.6-.2 0-.3-.1-.3-.3 0-.2.1-.4.3-1 .3-.7.8-1.7 1.2-2.5.5-1.1 1.4-2.8 1.4-3.6 0-.8-.5-1.5-1.6-1.5-1.2 0-2.3.7-3.3 1.7l.6-1.5h-2.4l-2 4.5c-.8 1.6-2.4 4.2-3.4 4.2-.2 0-.3-.1-.3-.3 0-.2.1-.4.2-.6.1-.2 1.3-3 1.3-3l2.2-4.9h-2.6l-2.1 4.8c-.6 1.5-2.3 4-3.3 4-.2 0-.3-.1-.4-.3v-.1c0-.3.2-.7.3-1.1L77 17l2.3-4.9h-2.6l-.5 1.1c-.4.8-1 1.6-2.1 1.6-.5 0-.7-.2-.8-.4-.2-1.7-1.2-2.5-2.8-2.5-2.2 0-3.7 1.3-4.7 2.8-.7 1.1-1.2 2.2-1.6 3.4-.9 1.5-1.9 2.7-2.7 2.7-.2 0-.3-.1-.3-.4 0-.3.3-.8.3-1.1l1.7-3.6c.5-1.1.8-1.8.8-2.6s-.5-1.3-1.4-1.3c-1.2 0-2.6.7-3.6 1.9v-.6c0-.9-.4-1.3-1.3-1.3-1.1 0-2.3.7-3.3 1.9l.7-1.7h-2.4l-2 4.5c-.9 2.1-2.5 4.2-3.3 4.2-.2 0-.3-.1-.3-.4 0-.4.5-1.4.6-1.8l2.7-6c.2-.5-1.1-.7-2.7-.7-1.7 0-3.4.8-4.6 1.9-.9.7-1.5 1.1-1.9 1.1-.2 0-.2-.1-.2-.2 0-.4.9-1.4.9-2.2 0-.4-.2-.6-.7-.6-.9 0-2.1.9-2.9 1.8l.7-1.7h-2.3l-2 4.5c-.9 2.1-2.5 4.3-3.4 4.3-.2 0-.3-.1-.3-.4 0-.4.4-1.4.7-1.9l2.7-6c.2-.5-1.1-.7-2.7-.7-2.4 0-4.7 1.6-5.9 3.3-1.4 1.8-2.3 3.7-2.3 5.2 0 1.2.6 2 1.9 2 1.4 0 2.6-1.1 3.3-2 0 .2-.1.3-.1.5 0 .9.3 1.5 1.4 1.5.9 0 2.2-.8 3.1-2l-.8 1.8h2.5l2.5-5.6c.8-1.8 1.7-2.8 2-2.8.1 0 .1 0 .1.1 0 .2-.4.7-.4 1.2s.3.8.9.8c.5 0 1.1-.3 1.7-.6-1.3 1.7-2.1 3.5-2.1 5 0 1.2.6 2 1.9 2 1.4 0 2.6-1.3 3.3-2.1v.6c0 .8.5 1.5 1.4 1.5 1.1 0 1.9-.7 3-2l-.8 1.8h2.6l2.4-5.4c1-2.3 2.4-3.6 3.1-3.6.2 0 .3.1.3.3v.1c0 .3-.1.5-.2.8l-3.4 7.8h2.6l2.4-5.5c1-2.3 2.2-3.5 3-3.5.3 0 .4.1.4.4 0 .3-.1.6-.2.9L59 19.6c-.2.5-.3 1-.4 1.5 0 .8.4 1.4 1.6 1.4 1.5 0 2.6-1.1 3.9-2.8v.3c.1 1.4.9 2.5 2.9 2.5 2.4 0 4.3-1.6 5.4-4.2.4-.9.7-1.9.8-2.9.3.1.6.2.8.2.4 0 .8-.1 1.1-.3l-.4.9c-.5 1-1 2.1-1.4 3-.3.5-.4 1.1-.5 1.7 0 .9.5 1.6 1.6 1.6s2.5-1 3.5-2.4c.1.3.1.6.1.9 0 .8.2 1.5 1.3 1.5 1.2 0 2.2-.9 3.2-2l-.8 1.8h2.6l2.1-4.7c1.2-2.7 2.4-4.3 3.5-4.3.2 0 .3.1.4.3v.1c0 .5-.6 1.7-1.2 2.9-.5 1.1-.9 2-1.2 2.6-.3.6-.4 1.2-.5 1.8 0 .8.5 1.4 1.5 1.4 1.5 0 3-1.5 3.9-2.6-.2.5-.3 1.1-.3 1.6 0 1.5.9 2.3 2.2 2.3.8 0 1.7-.3 2.3-.8 1-.7 1.8-1.7 2.5-2.7l-.5-.4c-.6.9-1.3 1.7-2 2.2-.4.3-.8.5-1.3.5s-.9-.3-.9-1 .3-1.6.8-2.9c0 0 .7-1.6 1.4-3.1.6-1.3 1.1-2.5 1.2-2.8h1.7l.3-.8h-1.7l1.5-3.4zM26.5 20.9c-.4 0-.6-.1-.6-.6 0-1.3 1.1-3.5 2.4-5.3.9-1.2 2.1-2.2 3.4-2.2l-1.6 3.7c-1.3 2.7-2.6 4.4-3.6 4.4zm16.1 0c-.4 0-.6-.1-.6-.6 0-1.3 1.1-3.5 2.4-5.3.9-1.2 2.1-2.2 3.4-2.2l-1.6 3.7c-1.3 2.8-2.6 4.4-3.6 4.4zm28.6-7.1c-.1 1.4-1.3 4.8-2.7 6.8-.6.8-1.1 1.1-1.5 1.1-.6 0-.8-.5-.7-1.2.1-1.3 1.2-4.2 2.6-6.3.7-.9 1.1-1.3 1.6-1.3.6-.1.7.3.7.9z" style="fill:#fff" /><path d="m111.4 12.1 2.4-5.5H111l-2.4 5.5h-6l-1 2.3h6l-2.4 5.5h2.8l2.4-5.5h6l1-2.3h-6z" style="fill:#fff"/></svg>',
      "friendlyName": 'Paramount+ (alt)',
      "appName": "com.cbs.ca",
      "className": "paramountPlusButton",
      "androidName": "com.cbs.ca",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "pbs": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="242" height="101" viewBox="0 0 242 101" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#2638c4" fill-rule="evenodd"><g fill="#fff" fill-rule="nonzero"><path d="M100 50A50 50 0 1 1 50 0c13.3 0 26 5.3 35.4 14.6C94.7 24 100 36.7 100 50m125.3-5.6c-5.5-2.8-10-5.2-10-9.5 0-3 2.6-5 7-5 4.8.1 9.5 1.4 13.6 4V22.4c-4.3-2-9-3-13.6-3-13.2 0-19 8-19 16.4 0 10 6.7 14.7 14 18.6 7.3 4 10 5.6 10 9.8 0 3.5-3 5.5-8.2 5.5a24 24 0 0 1-15.4-6v12a31 31 0 0 0 15.3 4.7c13 0 21-6.7 21-17.4 0-11-9.5-16-15-18.7z"/><path d="M127.6 20h-15.8v60h11.8V61h2.4c14.8 0 24-7.8 24-20.5 0-12.8-8.3-20.4-22.3-20.4zm-4 10h3.5c7 0 11.4 4 11.4 10.2 0 6.7-4 10.6-11.3 10.6h-3.6zm64 17.7c4-2.8 6-7 6-12.3 0-9.5-7-15.4-18.2-15.4H157v60h19c14.7 0 21.4-9.4 21.4-18.2a14 14 0 0 0-10-14.1zm-13-17.6c4.6 0 7.6 3 7.6 7.3 0 4.5-3.3 7.5-8.3 7.5h-5V30zM169 70V54.3h7.5c6 0 9.5 3 9.5 7.8 0 5.2-3.6 8-10.6 8z"/></g><path d="M86.4 50.5l-5.5 1V62c-.1 1.7-.8 3.3-2 4.4-1.2 1.2-2.8 1.8-4.5 1.8h-3v12h-9V68h2.8c1.7 0 3.4-.6 4.6-1.8 1.2-1 2-2.7 2-4.4V51.6l5.6-1c.6-.1 1-.5 1.3-1 .2-.5.2-1.2 0-1.7L64 20h9l14.6 27.8c.3.5.3 1.2 0 1.7-.2.5-.7 1-1.3 1zm-18.7-2.7L53.2 20H38c-13.7 0-25.3 11.2-25 25a22 22 0 0 0 16 20.8V80h22.5V68h2.8c1.7 0 3.3-.6 4.6-1.8 1.2-1 2-2.7 2-4.4V51.6l5.6-1c.5-.1 1-.5 1.3-1 .2-.5.2-1.2-.1-1.7zm-19-1.6c-3.2 0-5.7-2.5-5.7-5.7 0-3 2.5-5.7 5.7-5.7 3 0 5.7 2.6 5.7 5.7 0 1.5-.6 3-1.7 4-1 1-2.5 1.6-4 1.6z" fill-rule="nonzero"/></svg>',
      "friendlyName": 'PBS',
      "className": "pbsButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.pbs.video",
          "androidName": "com.pbs.video",
          "adbLaunchCommand": "adb shell am start com.pbs.video/com.pbs.video.tv.ui.home.TvMainActivity",
      },
      "apple-tv": {
          "appName": "PBS",
      },
      "chromecast": {
          "appName": "com.pbs.video",
          "androidName": "com.pbs.video",
          "adbLaunchCommand": "adb shell am start com.pbs.video/com.pbs.video.tv.ui.home.TvMainActivity",
      },
      "nvidia-shield": {
          "appName": "com.pbs.video",
          "androidName": "com.pbs.video",
          "adbLaunchCommand": "adb shell am start com.pbs.video/com.pbs.video.tv.ui.home.TvMainActivity",
      },
      "xiaomi": {
          "appName": "com.pbs.video",
          "androidName": "com.pbs.video",
          "adbLaunchCommand": "adb shell am start com.pbs.video/com.pbs.video.tv.ui.home.TvMainActivity",
      },
   },


  "peacock": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="308.042" viewBox="110.667 172.481 1000 308.042" xml:space="preserve"><path d="M174.926 267.63c-35.446 0-64.259 28.813-64.259 64.26v148.633h30.47v-82.5l11.194 11.81 44.776-17.614c25.5-9.951 42.084-32.966 42.084-60.324 0-35.446-28.813-64.265-64.265-64.265zm11.407 97.64-45.19 17.62v-50.995c0-20.524 15.341-35.239 33.789-35.239s33.789 14.922 33.789 35.239c0 12.85-6.218 26.95-22.388 33.375zm526.325-97.64c-35.445 0-64.259 28.813-64.259 64.26 0 35.445 28.814 64.259 64.26 64.259 35.445 0 64.259-28.814 64.259-64.26 0-35.446-28.814-64.259-64.26-64.259zm0 99.504c-19.483 0-33.789-15.543-33.789-35.24 0-19.695 14.72-35.238 33.79-35.238 19.483 0 33.789 15.543 33.789 35.239 0 19.696-14.306 35.239-33.79 35.239zm139.097-70.478c13.26 0 24.04 7.254 29.642 18.034l23.838-18.24c-11.609-17.206-31.092-28.607-53.48-28.607-35.451 0-64.265 28.813-64.265 64.259s28.814 64.26 64.265 64.26c22.181 0 41.866-11.402 53.48-28.607l-23.838-18.246c-5.603 10.785-16.383 18.039-29.642 18.039-19.489 0-33.789-15.543-33.789-35.239 0-19.696 14.715-35.653 33.79-35.653zm-259.953 0c13.27 0 24.05 7.254 29.648 18.034l23.837-18.24c-11.608-17.206-31.097-28.607-53.485-28.607-35.446 0-64.259 28.813-64.259 64.259s28.813 64.26 64.26 64.26c22.18 0 41.876-11.402 53.484-28.607l-23.837-18.246c-5.597 10.785-16.377 18.039-29.648 18.039-19.483 0-33.789-15.543-33.789-35.239 0-19.696 14.513-35.653 33.79-35.653zm-106.55-13.685c-10.366-10.78-24.045-15.335-38.35-15.335-29.855 0-60.112 27.156-60.112 64.259 0 37.102 30.257 64.26 60.111 64.26 14.306 0 27.985-4.557 38.351-15.337v11.608h30.476V271.565h-30.476zm-33.789 84.163c-19.478 0-34.203-15.543-34.203-35.24 0-19.695 15.134-35.238 34.203-35.238 19.489 0 33.79 15.543 33.79 35.239 0 19.696-14.301 35.239-33.79 35.239zm538.555-39.594h-13.68l52.859-56.177h-39.179l-42.705 46.024v-111.94h-30.47v186.985h30.47v-34.41l16.79-17.832 35.86 52.242h36.902zm-676.616-59.91c-35.446 0-64.26 28.813-64.26 64.26 0 35.445 28.814 64.259 64.26 64.259 21.145 0 41.043-10.153 52.45-25.909l-24.465-16.998c-2.905 4.769-12.23 13.88-27.985 13.88-14.508 0-26.329-8.703-31.299-21.347h92.664c1.041-4.556 1.455-9.117 1.455-13.886.196-35.44-27.369-64.259-62.82-64.259zm-31.092 50.373c4.976-12.65 16.791-21.347 31.092-21.347 14.513 0 25.5 8.703 30.061 21.347z" style="stroke-width:5.59700441;fill:#fff"/><path d="M1092.22 374.186c-10.16 0-18.454 8.289-18.454 18.453 0 10.153 8.29 18.442 18.453 18.442 10.153 0 18.448-8.283 18.448-18.442 0-10.164-8.29-18.453-18.448-18.453z" style="fill:#069de0;stroke-width:5.59700441"/><path d="M1092.22 323.813c-10.16 0-18.454 8.289-18.454 18.453 0 10.153 8.29 18.442 18.453 18.442 10.153 0 18.448-8.283 18.448-18.442-.207-10.371-8.29-18.453-18.448-18.453z" style="fill:#6e55dc;stroke-width:5.59700441"/><path d="M1092.22 424.559c-10.16 0-18.454 8.29-18.454 18.453 0 10.153 8.29 18.442 18.453 18.442 10.153 0 18.448-8.283 18.448-18.442 0-10.164-8.29-18.453-18.448-18.453z" style="fill:#05ac3f;stroke-width:5.59700441"/><path d="M1092.22 273.227c-10.16 0-18.454 8.29-18.454 18.453 0 10.153 8.29 18.448 18.453 18.448 10.153 0 18.448-8.289 18.448-18.448-.207-10.158-8.29-18.453-18.448-18.453z" style="fill:#ef1541;stroke-width:5.59700441"/><path d="M1092.22 222.854c-10.16 0-18.454 8.29-18.454 18.453 0 10.153 8.29 18.448 18.453 18.448 10.153 0 18.448-8.29 18.448-18.448-.207-10.158-8.29-18.453-18.448-18.453z" style="fill:#ff7112;stroke-width:5.59700441"/><path d="M1092.22 172.481c-10.16 0-18.454 8.29-18.454 18.453 0 10.153 8.29 18.448 18.453 18.448 10.153 0 18.448-8.29 18.448-18.448-.207-10.158-8.29-18.453-18.448-18.453z" style="fill:#fccc12;stroke-width:5.59700441"/></svg>',
      "friendlyName": 'Peacock',
      "className": "peacockButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.peacock.peacockfiretv",
          "androidName": "com.peacock.peacockfiretv",
          "adbLaunchCommand": "adb shell am start com.peacock.peacockfiretv/com.peacock.peacocktv.AmazonMainActivity",
      },
      "apple-tv": {
          "appName": "Peacock",
      },
      "chromecast": {
          "appName": "com.peacocktv.peacockandroid",
          "androidName": "com.peacocktv.peacockandroid",
          "adbLaunchCommand": "adb shell am start com.peacocktv.peacockandroid/com.peacock.peacocktv.GoogleMainActivity",
      },
      "nvidia-shield": {
          "appName": "com.peacocktv.peacockandroid",
          "androidName": "com.peacocktv.peacockandroid",
          "adbLaunchCommand": "adb shell am start com.peacocktv.peacockandroid/com.peacock.peacocktv.GoogleMainActivity",
      },
      "xiaomi": {
          "appName": "com.peacocktv.peacockandroid",
          "androidName": "com.peacocktv.peacockandroid",
          "adbLaunchCommand": "adb shell am start com.peacocktv.peacockandroid/com.peacock.peacocktv.GoogleMainActivity",
      },
  },


  "plex": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="plex-logo" x="0" y="0" xml:space="preserve" viewbox="0 0 1000 460.897" width="1000" height="460.897"><style type="text/css" id="style2">.st0{fill:#fff}</style><path class="st0" d="M164.19 82.432c-39.866 0-65.541 11.487-87.163 38.514v-29.73H0v366.216s1.351.676 5.405 1.352c5.406 1.351 33.784 7.432 54.73-10.135 18.243-15.54 22.297-33.784 22.297-54.054v-52.703c22.298 23.649 47.298 33.784 82.433 33.784 75.676 0 133.784-61.487 133.784-143.244 0-88.513-56.081-150-134.46-150zm-14.866 223.65c-42.567 0-76.351-35.136-76.351-77.704 0-41.892 39.865-75.675 76.351-75.675 43.244 0 76.352 33.108 76.352 76.351s-33.784 77.027-76.352 77.027z" id="path4" style="fill:#fff;stroke-width:6.75675678"/><path class="st0" d="M408.108 223.649c0 31.756 3.378 70.27 34.46 112.162.675.675 2.027 2.702 2.027 2.702C431.757 360.135 416.216 375 395.27 375c-16.216 0-32.432-8.784-45.946-23.649-14.189-16.216-20.946-37.162-20.946-59.46V0h79.054z" id="path6" style="fill:#fff;stroke-width:6.75675678"/><path id="polygon8" style="fill:#ebaf00" transform="scale(6.75676)" d="m117.9 33.9-13.8-20.4h14.2L132 33.9l-13.7 20.3h-14.2z"/><path class="st0" id="polygon10" style="fill:#fff" transform="scale(6.75676)" d="M135.7 31.6 148 13.5h-14.2l-5.1 7.5z"/><path class="st0" d="m869.595 316.216 16.216 22.298C901.35 362.838 921.62 375 945.27 375c25-.676 42.567-22.297 49.324-30.405 0 0-12.163-10.811-27.703-29.054-20.946-24.325-48.649-68.92-49.324-70.946z" id="path12" style="fill:#fff;stroke-width:6.75675678"/><path style="fill:#fff;stroke-width:6.75675678" id="path16" d="M632.432 287.162c-16.216 14.865-27.027 22.973-49.324 22.973-39.865 0-62.838-28.378-66.216-59.46h211.486c1.352-4.053 2.027-9.459 2.027-18.243 0-85.81-62.837-150-145.27-150-78.378 0-142.567 65.541-142.567 147.298 0 81.08 64.189 145.27 144.594 145.27 56.081 0 104.73-31.757 131.081-87.838zm-46.621-139.865c35.135 0 61.486 22.973 67.567 53.379H519.595c6.756-31.757 31.756-53.379 66.216-53.379z" class="st0"/></svg>',
      "friendlyName": "plex",
      "className": "plexButton",
      "appName": "Plex",
      "androidName": "com.plexapp.android",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
  },


  "pluto-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1001" height="247" viewBox="0 0 1001 247" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M638.2 39.2a84 84 0 0 0-83.9 83.8 84 84 0 0 0 83.9 83.9A84 84 0 0 0 722 123a84 84 0 0 0-83.8-83.8h0zm0 122.3c-21.3 0-38.5-17.2-38.5-38.5 0-21.2 17.2-38.5 38.5-38.5 21.2 0 38.5 17.3 38.5 38.5a39 39 0 0 1-11.3 27.3c-7.2 7.2-17 11.2-27.2 11.2h0zm-134.4-76v52c0 16 7 23 23 23h16v43.2h-23.3c-19.4 0-35.4-5.7-46.2-16.5-11-10.7-16.6-26.6-16.6-46V85.5h-29V42.3h29V19l47-19v42.3h39v43.2h-39zm-94.4-43v88.2c.1 27.3-14.4 52.6-38 66.3a76 76 0 0 1-76.4 0 76 76 0 0 1-38.1-66.3V63l46.7-19v88c0 16.3 13.3 29.5 29.6 29.5s29.5-13.2 29.5-29.5V61.2l46.7-18.8zM236.7 0v203.7h-47V19l47-19zM93.2 39.2a66 66 0 0 0-48.7 19.3L38 42.8 0 58v188h47v-55.4a67 67 0 0 0 46.2 16.3 75 75 0 0 0 55.8-24.6 87 87 0 0 0 22.2-59.1c0-47-34.3-84-78-84zM86 161.5c-21.6 0-39-17.2-39-38.5A39 39 0 0 1 86 84.5a39 39 0 0 1 39.1 38.5c0 21.3-17.5 38.5-39 38.5z" fill="#fff"/><path d="M842.8 123c0-66 6.2-82.5 6.2-82.5l-19.5.4c-46.4 1-84 35.8-84 82s37.5 81 84 82l19.5.4s-6.2-16.6-6.2-82.5" fill="#ff2cd2"/><path d="M842.8 123c0-52.7 28.5-83 28.5-83l-22.3.5c-46.4 1-84 36-84 82.4 0 46.4 37.5 81.6 84 82.5l22.3.5s-28.5-30.2-28.5-83" fill="#5e00ff"/><path d="M842.8 123c0-59.5 51-83.4 51-83.4l-22.3.5c-46.4 1-84 36.6-84 83s37.5 82 84 83l22.3.5s-51-24-51-83.4" fill="#ffde2b"/><path d="M842.8 123c0-38.8 25.2-79 70.2-83.8l-19.2.4a84 84 0 0 0-83.9 83.4c0 46.3 37.5 82.4 84 83.4l19.2.4c-45-4.7-70.2-45-70.2-83.8" fill="#ff6700"/><path d="M916.2 39.2a84 84 0 0 0-83.9 83.9 84 84 0 0 0 83.9 83.8 84 84 0 0 0 83.8-83.8 84 84 0 0 0-83.8-83.9h0zm33 124.8h-15.7l-22.3-54h-22.5v28c0 6 3 9.8 9.8 9.8h10V164h-12.2c-16.6 0-25.4-9.3-25.4-25v-29h-12.4V94H871V83l18-7.3V94H924l17.4 45.3L959 93.7h19.4l-29 70.3z" fill="#fff"/></svg>',
      "friendlyName": "Pluto TV",
      "className": "plutoTvButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "tv.pluto.android",
          "androidName": "tv.pluto.android",
          "adbLaunchCommand": "adb shell am start tv.pluto.android/.EntryPoint",
      },
      "apple-tv": {
          "appName": "Pluto TV",
      },
      "chromecast": {
          "appName": "tv.pluto.android",
          "androidName": "tv.pluto.android",
          "adbLaunchCommand": "adb shell am start tv.pluto.android/.EntryPoint",
      },
      "nvidia-shield": {
          "appName": "tv.pluto.android",
          "androidName": "tv.pluto.android",
          "adbLaunchCommand": "adb shell am start tv.pluto.android/.EntryPoint",
      },
      "xiaomi": {
          "appName": "tv.pluto.android",
          "androidName": "tv.pluto.android",
          "adbLaunchCommand": "adb shell am start tv.pluto.android/.EntryPoint",
      },
  },


  "poda-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="333" height="387" viewBox="0 0 333 387" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M241.7 15.6c-13.6 1.8-24 6-31.6 12.7-18.5 16.4-21.2 28-19.6 84.7.5 18.3 2 25.4 7 35.5C204 161 222 174 236 175.3a131 131 0 0 0 28 0c27-3.4 42.5-20.8 46.4-48.5l1-7.8-.1-24c-.1-34.4-1.6-43.2-9.5-55.7-11-17-36-27-60.2-23.7m19.8 28.2c5.5 1.8 10.5 4.8 11.2 6.7.6 1.7-51 53.5-52.3 52.4-1-1-.1-34.3 1-39 4.5-17.5 21.7-26.2 40-20.2m19.8 73.4c-.2 4-.6 8.4-1 9.6l-.7 3c-1.2 7.7-9.6 15.3-20 18-11 3-28.2-1.2-31.6-7.5l53.4-54" fill="#f48b6b"/><path d="M31.2 19.3c-.1 0-.1 152-.1 152h29v-55h0l46-1c9-3 10.4-3.7 11.6-4.3 8.5-4 15.5-10.8 19.5-18.8 7.8-15.6 6.8-41.3-2-53.3-.1-.1-9-17-26-19.6h-78m65.2 27.5c20 3.2 21.4 34.4 2.2 42 0 0-38 0-38.3-.2-.2.2.3-42.3.2-42 .1-.3 33.6-.2 36 .2M15 217.8v26h19.2c.1-.1.2 98.7.2 98.7l-19.4.3v27.5h0 70c11 0 21-2 30.5-6.5 17.6-8 25.5-17.5 26.5-46v-24.4l-.3-24.8-1.2-6c-3.3-16.6-9-25.8-19.7-34.5-8.7-6.8-13.7-9.3-24.7-9.8m129.5-1v.1c0-.1-40.5 152.4-40.5 152.4h30.5l9-33 51.8.2c.2.3 9.7 32.8 9.7 32.8h30c0-.5-39.5-152.5-39.5-152.5M90 244.3c16.4-.1 21.5 12.5 21.5 24L111 318c.1 15.7-6.3 24-22 24.2l-22.6.2-.4-98.2h0m188 1l15.5 63.3h-37.2c-.1 0 13.7-63.3 13.7-63.3" fill="#212080"/></svg>',
      "friendlyName": "PODA.tv",
      "className": "podaTVButton",
      "appName": "tv.poda.tv",
      "androidName": "tv.poda.tv",
      "adbLaunchCommand": "adb shell am start tv.poda.tv/cz.sledovanitv.androidtv.entry.EntryActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "prime-video" : {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 800.3 246.3" width="800.3" height="246.3" style="enable-background:new 0 0 800.3 246.3" xml:space="preserve"><style type="text/css">.pv0{fill:#fff} .pv1{fill:#fff}</style><path class="pv0" d="M408.5 245.9c-4-.1-8-.1-12 0-5.5-.3-11-.5-16.5-.9-14.6-1.1-29.1-3.3-43.3-6.6-49.1-11.4-92.2-34.3-129.8-67.6-3.5-3.1-6.8-6.3-10.2-9.5-.8-.7-1.5-1.7-1.9-2.7-.6-1.4-.3-2.9.7-4s2.6-1.5 4-.9c.9.4 1.8.8 2.6 1.3 35.9 22.2 75.1 38.4 116.2 48 13.8 3.2 27.7 5.7 41.7 7.5 20.1 2.5 40.4 3.4 60.6 2.7 10.9-.3 21.7-1.3 32.5-2.7 25.2-3.2 50.1-8.9 74.2-16.9 12.7-4.2 25.1-9 37.2-14.6 1.8-1 4-1.3 6-.8 3.3.8 5.3 4.2 4.5 7.5-.1.4-.3.9-.5 1.3-.8 1.5-1.9 2.8-3.3 3.8-11.5 9-23.9 16.9-37 23.5-24.7 12.5-51.1 21.4-78.3 26.5-15.7 2.8-31.5 4.5-47.4 5.1zM260.4 43.2c2.5-1.5 5.1-3.1 7.8-4.5 7-3.6 14.8-5.4 22.7-5 5.7.3 10.9 1.9 14.9 6.1 3.8 3.9 5.2 8.7 5.6 13.9.1 1.1.1 2.2.1 3.4v51.8c0 4.5-.6 5.1-5.1 5.1h-12.2c-.8 0-1.6 0-2.4-.1-1.2-.1-2.2-1.1-2.4-2.3-.2-1.1-.2-2.2-.2-3.3V62c.1-1.9-.1-3.7-.6-5.5-.8-3.1-3.6-5.3-6.8-5.5-5.9-.4-11.8.8-17.2 3.3-.8.2-1.3 1-1.2 1.8v52.6c0 1 0 1.9-.2 2.9 0 1.4-1.1 2.4-2.5 2.4-1.5.1-3 .1-4.6.1h-10.6c-3.7 0-4.5-.9-4.5-4.6V62.2c0-1.7-.1-3.5-.5-5.2-.7-3.4-3.6-5.8-7-6-6-.4-12.1.8-17.5 3.4-.8.2-1.3 1.1-1.1 1.9v53.3c0 3.7-.8 4.5-4.5 4.5H197c-3.5 0-4.4-1-4.4-4.4V40.3c0-.8.1-1.6.3-2.4.4-1.2 1.6-1.9 2.8-1.9h12.5c1.8 0 2.9 1.1 3.5 2.8.5 1.4.8 2.7 1.3 4.2 1 0 1.6-.7 2.3-1.1 5.5-3.4 11.3-6.3 17.8-7.5 5-1 10-1 15 0 4.7 1 8.9 3.8 11.6 7.8.2.3.4.5.6.7-.1.1 0 .1.1.3z"/><path class="pv1" d="M467.7 93c.6-2 1.2-3.9 1.8-5.9 4.6-15.5 9.2-30.9 13.8-46.4l.6-1.8c.5-1.8 2.2-2.9 4-2.9h15.2c3.8 0 4.6 1.1 3.3 4.7l-6 15.9c-6.7 17.4-13.4 34.9-20.1 52.3-.2.6-.5 1.2-.7 1.8-.7 2.1-2.8 3.5-5 3.3-4.4-.1-8.8-.1-13.2 0-3.1.1-4.9-1.3-6-4.1-2.5-6.6-5.1-13.3-7.6-19.9-6-15.7-12.1-31.4-18.1-47.2-.6-1.2-1-2.6-1.3-3.9-.3-2 .4-3 2.4-3 5.7-.1 11.4 0 17 0 2.4 0 3.5 1.6 4.1 3.7 1.1 3.8 2.2 7.7 3.4 11.5 4.1 13.9 8.1 27.9 12.2 41.8-.1.1 0 .1.2.1z"/><path class="pv0" d="M112.6 47c.7-.2 1.3-.6 1.7-1.2 1.8-1.8 3.7-3.5 5.7-5.1 5.2-4 11.7-6 18.2-5.5 2.6.1 3.5.9 3.7 3.4.2 3.4.1 6.9.1 10.3.1 1.4 0 2.7-.2 4.1-.4 1.8-1.1 2.5-2.9 2.7-1.4.1-2.7 0-4.1-.1-6.7-.6-13.2.7-19.5 2.8-1.4.5-1.4 1.5-1.4 2.6v48c0 .9 0 1.7-.1 2.6-.1 1.3-1.1 2.3-2.4 2.3-.7.1-1.5.1-2.2.1h-13c-.7 0-1.5 0-2.2-.1-1.3-.1-2.3-1.2-2.4-2.5-.1-.8-.1-1.6-.1-2.4V41c0-4.6.5-5.1 5.1-5.1h9.6c2.6 0 3.8.9 4.5 3.4s1.3 5 1.9 7.7zM580.4 148.4c6.6.2 13.1.6 19.5 2.3 1.8.5 3.5 1.1 5.2 1.9 2.3.9 3.8 3.1 4.1 5.5.4 2.8.5 5.7.3 8.6-1.3 17.1-6.6 33.6-15.4 48.3-3.2 5.3-7.1 10.1-11.6 14.3-.9.9-2 1.6-3.2 2-1.9.5-3.1-.5-3.2-2.4.1-1 .3-2 .7-3 3.5-9.4 6.9-18.7 9.6-28.4 1.6-5.3 2.7-10.7 3.4-16.2.2-2 .3-4 .1-6-.1-3.4-2.3-6.3-5.6-7.3-3.1-1-6.3-1.6-9.6-1.8-9.2-.4-18.4 0-27.5 1.2l-12.1 1.5c-1.3.1-2.5 0-3.2-1.2s-.4-2.4.3-3.6c.8-1.1 1.8-2.1 3-2.8 7.4-5.3 15.7-8.5 24.5-10.6 6.8-1.4 13.7-2.1 20.7-2.3z"/><path class="pv1" d="M538.5 75v36c-.2 2-1.1 2.9-3.1 3-5.4.1-10.7.1-16.1 0-2 0-2.9-1-3.1-2.9-.1-.6-.1-1.3-.1-1.9V40c.1-3.1.9-4 4-4h14.4c3.1 0 4 .9 4 4v35z"/><path class="pv0" d="M151.6 74.8V39.3c.1-2.4 1-3.3 3.4-3.4 5.2-.1 10.4-.1 15.6 0 2.3 0 3 .7 3.2 3 .1.9.1 1.7.1 2.6v66.6c0 1.1-.1 2.2-.2 3.3-.1 1.3-1.1 2.2-2.4 2.3-.6.1-1.1.1-1.7.1h-13.9c-.5 0-.9 0-1.4-.1-1.4-.1-2.6-1.2-2.7-2.6-.1-.8-.1-1.6-.1-2.4.1-11.1.1-22.5.1-33.9zM163.2.1c1.6-.1 3.2.2 4.7.7 5.4 1.8 8.2 6.5 7.7 12.6-.4 5.2-4.3 9.4-9.5 10.2-2.2.4-4.5.4-6.7 0-5.7-1.1-9.9-5.3-9.5-12.5.6-7.1 5.3-11 13.3-11z"/><path class="pv1" d="M527.4.1c2-.2 4 .2 5.9 1 3.9 1.5 6.6 5.1 6.8 9.3.8 9.1-5.3 13.7-13.4 13.5-1.1 0-2.2-.2-3.3-.4-6.2-1.5-9.4-6.3-8.8-13.2.5-5.5 4.8-9.6 10.7-10.1.7-.1 1.4-.2 2.1-.1z"/><path class="pv0" d="M76.7 66.6c-.4-5.2-1.8-10.3-3.9-15-4.1-8.6-10.4-14.9-20-17.1-11-2.4-20.9 0-29.9 6.7-.6.6-1.3 1.1-2.1 1.5-.2-.1-.4-.2-.4-.3-.3-1-.5-2-.8-3-.8-2.5-1.8-3.4-4.5-3.4-3 0-6.1.1-9.1 0-2.3-.1-4.4.2-6 2 0 35 0 70.1.1 105 1.3 2.1 3.3 2.5 5.6 2.4 3.6-.1 7.2 0 10.8 0 6.3 0 6.3 0 6.3-6.2v-28.5c0-.7-.3-1.5.4-2.1 5 3.9 11.1 6.3 17.4 6.9 8.8.9 16.8-1.3 23.5-7.3 4.9-4.5 8.5-10.3 10.4-16.7 2.7-8.2 2.9-16.5 2.2-24.9zM52.8 87.3c-.7 3.1-2.3 5.9-4.6 8-2.6 2.2-5.8 3.5-9.2 3.5-5.1.3-10.1-.8-14.6-3.2-1.1-.5-1.8-1.6-1.7-2.8V74.7c0-6 .1-12 0-18-.1-1.4.7-2.6 2-3.1 5.5-2.6 11.2-3.8 17.2-2.6 4.2.6 7.8 3.3 9.5 7.2 1.5 3.2 2.4 6.7 2.6 10.2.6 6.4.6 12.8-1.2 18.9z"/><path class="pv1" d="M800.1 82.2s0-.1 0 0c0-.1 0-.1 0 0zM800.2 68.8v.4c-.4-.4-.6-1-.4-1.5v-.8s0-.1.1-.1h-.1v-1h.2c0-.1-.1-.1-.1-.2-.2-1.9-.6-3.8-1.1-5.6-3.7-13.2-12-21.9-25.5-25.3-6.3-1.5-12.7-1.7-19.1-.7-13.5 2-23.2 9.2-27.9 22-4.6 12.2-4.5 25.6.1 37.8 4 11.1 12 18.1 23.5 21 6.1 1.5 12.5 1.9 18.8 1 21-2.5 29.7-18.4 31.1-32.2h-.1v-1.4c-.1-.6-.2-1.1.4-1.5v.2c0-.1.1-.3.2-.4V69c0-.1-.1-.1-.1-.2zm-24 19c-.6 2.1-1.5 4-2.8 5.8-2.2 3.1-5.7 5.1-9.5 5.4-1.9.2-3.8.2-5.7-.2-4.2-.8-7.7-3.6-9.4-7.5-1.5-3.1-2.4-6.5-2.7-9.9-.5-5.9-.6-11.8.8-17.6.5-2.3 1.5-4.6 2.7-6.6 2.2-3.6 6-5.9 10.2-6.2 1.9-.2 3.8-.2 5.7.2 4 .8 7.3 3.4 9.1 7.1 1.7 3.5 2.7 7.4 2.9 11.3.1 1.8.2 3.6.1 5.4.3 4.4-.2 8.7-1.4 12.8zM624.9.8H611c-3.8 0-4.5.7-4.5 4.5v32.4c0 .7.3 1.4-.2 2.1-.9-.1-1.4-.7-2.1-1.1-10.4-6.1-21.3-7.2-32.3-2.1-7.7 3.6-12.5 10.1-15.6 17.8-3 7.4-3.7 15.2-3.5 23.1 0 7.4 1.7 14.7 5 21.3 3.8 7.3 9.3 12.9 17.3 15.3 10.9 3.4 21.1 1.7 30.4-5.2.7-.4 1.1-1.1 2-1.3.5 1.1.9 2.3 1.1 3.5.4 1.6 1.8 2.7 3.5 2.7h2.4c3.6 0 7.1.1 10.6 0 2.8 0 3.6-.9 3.7-3.8V4.6c-.1-3.1-.9-3.8-3.9-3.8zm-18.3 73.6v18.2c.2 1.2-.5 2.3-1.6 2.8-4.8 2.7-10.3 3.8-15.7 3-4.6-.5-8.6-3.3-10.7-7.4-1.6-3.2-2.5-6.6-2.8-10.1-.8-6.3-.3-12.7 1.2-18.8.5-1.7 1.1-3.3 2-4.9 2.1-3.9 6.1-6.4 10.5-6.7 5.3-.5 10.6.5 15.4 2.7 1.2.4 1.9 1.6 1.8 2.9-.2 6.2-.1 12.2-.1 18.3z"/><path class="pv0" d="M348 81.3c7.5 1.4 15.2 1.5 22.7.3 4.4-.6 8.6-1.9 12.5-4 4.5-2.6 7.8-6.2 9.2-11.2 3.5-12.6-1.9-25.3-15-30-6.4-2.1-13.2-2.8-19.9-1.9-15.8 1.8-26.1 10.5-30.8 25.6-3.3 10.3-2.9 20.8-.2 31.2 3.5 13.3 12.3 21.2 25.6 24 7.6 1.7 15.3 1.4 22.9.2 4-.7 8-1.7 11.8-3.2 2.3-.9 3.5-2.3 3.4-4.9-.1-2.4 0-4.9 0-7.4 0-3-1.2-3.9-4.1-3.2s-5.7 1.3-8.6 1.9c-6.2 1.3-12.6 1.3-18.8.2-8.5-1.7-14-9-13.5-18 .9.1 1.9.2 2.8.4zM345.5 66c.3-2.4 1-4.7 1.9-6.9 3-7.3 9.3-9.8 15.7-9.4 1.8.1 3.6.5 5.3 1.2 2.6 1.1 4.3 3.5 4.6 6.3.3 1.7.2 3.5-.3 5.2-1.2 3.6-4.1 5.1-7.6 5.8-2.1.5-4.3.7-6.5.5-3.9 0-7.9-.3-11.8-.9-1.5-.2-1.5-.2-1.3-1.8z"/><path class="pv1" d="M685.3 82.3c5.8-.4 11.6-1.5 16.8-4.3 5.3-2.6 9-7.5 10.1-13.3.7-3.6.7-7.4-.1-11-2.1-9-7.8-14.6-16.4-17.5-4.8-1.5-9.9-2.1-14.9-1.9-16.8.4-29.6 8.9-34.8 25.7-3.5 11.1-3 22.4.4 33.5 3.5 11.4 11.5 18.3 22.9 21.4 4.9 1.2 10 1.7 15 1.5 7.3-.1 14.6-1.5 21.5-4.1 2.9-1.1 3.6-2.1 3.6-5.2v-7.2c-.1-2.9-1.3-3.9-4.2-3.2-2.2.6-4.3 1.1-6.5 1.6-6.7 1.6-13.7 1.9-20.5.7-6.8-1.3-11.4-5.2-13.2-12-.5-2-.9-4-1.1-6.1.5 0 1 0 1.4.2 6.6 1.2 13.3 1.7 20 1.2zm-20.9-16c.7-3.9 1.6-7.7 4-10.9 3.7-4.9 8.8-6.3 14.6-5.7.5 0 .9.2 1.4.2 7 1.1 8.7 6.7 7.4 12.1-1 4-4.3 5.5-8 6.2-2 .4-4.1.6-6.2.5-4.1-.1-8.1-.4-12.1-1-.9-.1-1.3-.5-1.1-1.4z"/></svg>',
      "friendlyName": "Prime Video",
      "className": "primeButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "Prime Video (FireTV)",
          "androidName": "com.amazon.avod",
          "androidName2": "com.amazon.firebat",
          "adbLaunchCommand": "adb shell am start com.amazon.firebat/.deeplink.DeepLinkRoutingActivity",
      },
      "apple-tv": {
          "appName": "Prime Video",
      },
      "chromecast": {
          "appName": "Prime Video",
          "androidName": "com.amazon.amazonvideo.livingroom",
          "adbLaunchCommand": "adb shell am start com.amazon.amazonvideo.livingroom/com.amazon.ignition.IgnitionActivity",
      },
      "nvidia-shield": {
          "appName": "Prime Video",
          "androidName": "com.amazon.amazonvideo.livingroom",
          "adbLaunchCommand": "adb shell am start com.amazon.amazonvideo.livingroom/com.amazon.ignition.IgnitionActivity",
      },
      "xiaomi": {
          "appName": "Prime Video",
          "androidName": "com.amazon.amazonvideo.livingroom",
          "adbLaunchCommand": "adb shell am start com.amazon.amazonvideo.livingroom/com.amazon.ignition.IgnitionActivity",
      },
   },


  "private-internet-access": {
      "button": "PIA",
      "friendlyName": "Private Internet Access",
      "className": "privateInternetAccessButton",
      "appName": "com.privateinternetaccess.android",
      "androidName": "com.privateinternetaccess.android",
      "deviceFamily": ["chromecast", "nvidia-shield", "xiaomi"], },


  "proximus-pickx": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="2704" height="1024" viewBox="0 0 2704 1024" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M1460.6 386.2a191 191 0 0 1 36.3 119.8c0 54.5-12.7 96.2-38 125.3s-63.5 45.4-103.5 43.6a118 118 0 0 1-92.6-36.3v158H1150V350h112.6v31c25.4-25.4 60-40 96.2-38 38.2-1.8 76.3 14.5 101.7 43.5h0zM1368 566a86 86 0 0 0 16.3-58.1 83 83 0 0 0-14.5-54.5c-11-12.7-29-20-45.4-18.2-14.5 0-27.2 1.8-40 9-7.3 5.4-14.5 12.7-18.2 20-1.8 5.4-3.6 9-3.6 14.5v72.7c0 21.8 18.2 32.7 54.5 32.7 20 3.6 38-3.7 50.8-18.2h0zm265-363.2a60.3 60.3 0 1 1-85.3 85.3 60 60 0 0 1 0-85.3c11-11 27.2-18.2 41.8-18.2 18 0 32.6 5.5 43.5 18.2zm-98 466.6V349.8h112.6v321.4H1535v-1.8zm370.4-325c14.5 1.8 25.4 3.6 32.7 5.4s12.7 3.6 16.3 3.6l-12.7 87c-3.6 0-11-1.8-23.6-3.6s-27.2-3.6-40-3.6c-21.8-1.8-43.6 3.6-60 18.2a77 77 0 0 0-18.2 58 75 75 0 0 0 21.8 59.9c16.3 12.7 38 20 58 18.2a183 183 0 0 0 63.5-11l14.5 85.3c-12.7 5.4-27.2 9-41.8 11-16.3 1.8-32.7 3.6-47.2 3.6-60 0-105.3-14.5-134.4-41.8S1689 564 1689 509.4s14.5-96.2 45.4-123.5S1807 344 1865 344c11-1.6 25.6.2 40 .2h0zm441.2 325l-130.7-176L2330.3 350H2205l-100 125.3V195.5h-110.8v474H2105v-158l118 158h123.5zm121.7 0H2352l118-161.6-114.4-158H2472l56.3 80 56.3-80h116.2l-116.2 158 118 161.6h-116.2l-60-83.5-58 83.5h0zM928.2 338c12.7-11 87-69 94.4-154.3 3.6-49-16.3-98-52.7-130.7C937.3 16.7 888.2-3.2 839.2.4 754 7.7 695.8 80.3 685 94.8 634 162 601.4 242 587 323.6l-74.4 3.6c-25.4 0-50.8-1.8-76.3-3.6-14.5-83.5-49-161.6-98-228.8-11-12.7-69-87-154.4-94.4C135-3.2 86 16.7 53.2 53 16.8 85.7-3.2 134.8.4 183.8 7.7 269 80.3 327.2 94.8 338c67.2 50.8 147 83.5 228.8 98l3.6 76.3-3.6 74.4c-83.5 14.5-161.6 49-228.8 98-12.7 11-87 69-94.4 154.3-3.6 49 16.3 98 52.7 130.7 32.7 36.3 81.7 56.3 130.7 52.7 85.3-7.3 143.4-80 154.3-94.4 50.8-67.2 83.5-147 98-228.8 25.4-1.8 49-3.6 74.4-3.6l76.3 3.6c14.5 83.5 49 161.6 98 228.8 11 12.7 69 87 154.3 94.4a179 179 0 0 0 183.4-176.1V839c-7.3-85.3-80-143.4-94.4-154.3-67.2-50.8-147-83.5-228.8-98l-3.6-76.3c0-25.4 1.8-50.8 3.6-74.4 83.6-14.5 161.7-47.2 229-98h0zM784.8 174.7l1.8-1.8c12.7-16.3 40-41.8 61.7-43.6 3.6 0 14.5-1.8 31 16.3h0c16.3 16.3 16.3 27.2 16.3 31-1.8 21.8-27.2 49-43.6 61.7l-2 1.7a390 390 0 0 1-123.5 59.9h0 0a332 332 0 0 1 58.2-125.2h0zM296.4 298.2a373 373 0 0 1-123.5-59.9l-1.8-1.8c-16.3-12.7-41.8-40-43.6-61.7 0-3.6-1.8-14.5 16.3-31h0c16.3-16.3 27.2-16.3 31-16.3 21.8 1.8 49 27.2 61.7 43.6l1.8 1.8a437 437 0 0 1 58.2 125.2h0 0 0zm-60 552l-1.8 3.6c-12.7 16.3-40 41.8-61.7 43.6-3.6 0-14.5 1.8-31-16.3h0c-16.3-16.3-16.3-27.2-16.3-31 1.8-21.8 27.2-49 43.6-61.7l1.8-1.8a390 390 0 0 1 123.5-59.9h0 0a340 340 0 0 1-58.2 123.4h0 0zm332.3-279.6l-58-1.8-58 1.8 1.8-58-1.8-58c20 1.8 38 1.8 58 1.8l58-1.8c-1.8 20-1.8 38-1.8 58s1.8 40 1.8 58zm156 156a373 373 0 0 1 123.5 59.9l1.8 1.8c16.3 12.7 41.8 40 43.6 61.7 0 3.6 1.8 14.5-16.3 31h0c-16.3 16.3-27.2 16.3-31 16.3-21.8-1.8-49-27.2-61.7-43.6l-1.8-1.8a437 437 0 0 1-58.2-125.2h0 0 0z"/></svg>',
      "friendlyName": "Proximus Pickx",
      "appName": "Proximus Pickx",
      "className": "proximusPickxButton",
      "androidName": "",
      "deviceFamily": ["apple-tv"], },


  "purple-cheetah": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="405" height="405" viewBox="0 0 405 405" fill="#fff" fill-rule="evenodd"><g><path d="M82.2 7c-5.7 9.8-7 24-3 30.7 2.5 4.3 2.3 4.8-4.2 8.4-25.6 14-42 36.4-30.4 41.3 3.6 1.5 3.5 2.3-1.3 8-6 7.2-5 9.7 5.8 16.3 1.7 1 3 2 3 2 0 .6-30.7 28.8-39 35.8C1 160 .1 163 6 175c3 6.2 5 8.6 11 14.6 4.3 3.7 8 8.3 10.4 13.5 4.4 9.4 19 23 25 23 .2 0-.7-2.4-2-5.4s-2.5-7-2.8-8.7l-.5-3.2 3-.1c1.5-.1 3.7.2 4.7.6s2.4.4 3.4-.2c8.4-5 18.7 4.3 22.2 11.3-.3 5.3-7 7.8-7.7 1-1-6.6-1.2-7-3-4a29 29 0 0 0-2.5 28.8C73 261 78 267.8 86.8 272.5c7.6 4 16.8 11.4 24.3 19.3 7.5 8 7.3 8 8.2-1.5l.5-6.5 4.7 2.4c7.5 3.8 30.3 8.5 30.3 6.2l-6-6.4c-16.2-16.7-14.8-31.5 3.8-39.8 10.6-4.8 10.3-5.4 8 15.7-3.3 31-11.2 54-24 69.3-2.6 3.2-2.2 3.3 3.8 1a313 313 0 0 0 62-34.5c11.4-8.6 11-8.5 9.5-1.7-6.8 29.5-30.5 59.8-63 80.7l-16.7 10-10.4 5.8-3.6 2 4.8.7a364 364 0 0 0 66.8-3.5c51.3-8.4 88.2-25.4 119-54.7 8.7-8.4 9-8.3 6.5 1.7-3 13.7-8.7 26.8-16.5 38.8-14.6 22.8 40.8-30.3 59.5-57 29.8-42.4 39-86 27.5-130.4-2.8-11-2.8-10.7 2.2-6 5.2 5 8.6 10.2 12 18.7l2.7 7-.4-9a151 151 0 0 0-46-101.3l-7.3-7 2.5-3C364 75 384 45.5 382.4 43.8l-8.2 1.4c-30.4 6.2-63 2.6-85.8-9.5L234 13.2c-35-8.7-64.5-8-89.5 2.4-17.5 7-51.3.7-59.8-11.3-.3-.4-1.4.8-2.5 2.7M131 185c.5 1.5-9.3 9-30.2 23.2-20.3 14.8-22.3 18.3-19.5 10 2-4.4 3.2-8.6 4-14.6.7-6 1.8-6.7 16.3-11.5 25.3-8.4 28.7-9.2 29.4-7m-98.2 14" fill="#000"/><path d="M82.6 16.5c-4 13 0 14 2 20 3 6 6 2 12-1s9-3 15-6c14.2-9 16-3-9-9C90.6 16.5 84 9 85 11m115.3 12.5c-28 2.3-36.2 3.8-44.2 6.3-9 2.5-11.6 3-15.8 2.8-2.3-.1-3-.1-2.2.1 1.7.4 1 .7-2 1l-13.8 2-7.4 1.6-3.8 1c-17 4.6-30.2 12-41.5 23.5-9 9-14.3 10-10 12.7C68.6 80 74 81 73.7 81.2c1 .2 1 2 0 5.8-.4 2-.4 2.3 0 2 .7-.3.8-.3-.6 3.6-5 14.2-10.6 22.3-27.2 40-11.4 12-12.2 13.3-9.5 16.2.8 1 2 1.7 3.7 2.2 3.5 1.2.8 1 .3 1.4l9-.2c5.7-.4 34-6.2 46.3-8.7h0c7-1.7 7.4.4.6 3.2l-6.6 2.8L120 147c8.5 2 30.5-2.8 30.6-.6 0 .4.2-.1.4-1 1.6-8 12.3-7.7 17.6.4 8 12.5-6.6 19.5-15.5 7.5a18 18 0 0 1-2.3-4.8c-.4-.8-.1-1.6-.5-1-.1.2.2 1.3-1.5 1.5l-19 2c-4 .7 2.4 2.2 9.3 4.5 23 7.7 38 25.4 44.8 52.3l2.2 9.7c.2 1.2.5.2.5 2.7-.8 2.2-1.7 1.8-8.8-.4-13-4-22.3-3.8-32.5 1.2a63 63 0 0 0-24.6 24.8c-2.5 4.8-3 5-7.7 5.8l-7.3 1.2-8 1c-5.8.3-5.8 0 .7 8a62 62 0 0 1 8.4 13.7c1.6 3.6 2.4 4.5 2.3 2.5l-.3-5c-.4-5-.3-5 5.7-1.5 5.2 3 8 4.4 9.6 4.4s1.7-.3.7-2.6c-5.4-12-2-22.2 10.6-31 13.3-9 25.7-14 31.6-15.2 7.3-1.8 14.8-2 22.2-.7 17.3 2.4 28-1.2 36-32l3-10 1-4c1.2-5.7-.6-4 5.5 7.5 1.8 3.5 9 8 9 8 .8 0 1.2-13.4 2.4-19l2.5-11.5 1.5-17c4.5 1.5 8.6 0 9 0 1.5 0 2.4-6.5 1.5-12-.6-3.6-3.7-14.3-3.2-14-.7-1.7-1.2-2.7-2.5-3.7-3.2-2.3-3.5-3-1.2-3.3 8 0 18 0 27.5-2.5l11-3.5c17.7-5 33.3-19 40.6-30.6 3.4-5.4 7-11.7 3-8-7.5 12.5-47.5 34-72.5 33.5-10 .1-10 0-11.5-4-1.5-4.2-3.2-8.3-5.2-12.3-4-7.8-9-15-13.6-19-6.4-5.7-7.3-7.2-3-5.6 18.5 7 37.3 13 47.3 15a138 138 0 0 0 61-8.6C309.2 64.8 297 55 276 48.5c-11.5-3-29-4.7-36.5-3 .2-.2-5.3 1-6.3 1-1.3.2-1.4.1-1.3-.8.6-3.5 25.6-12 26.6-11.8 0 0-.4-.3-1-.4a60 60 0 0 0-10.7-4.1l-6.5-1.6m-52 14.8c4 2 3.8 6-1 10.8-7 6.8-19 9.5-22.5 5-5.3-6.8 14.2-20 23.4-16m-37.6 4c2 2.2 1.5 4.2-2.6 8-8 7.5-20.7 7-17-.4 3-6.3 16-11.2 19.6-7.5m49 18.7c2.6 2.2 2 5-2.2 9-7 6.8-19.7 8.8-20.8 3.4-1.3-7.2 17.3-17.2 23-12.4M161 66c5 2.3 3 8.3-4.4 13.6-12.6 9-27.6 6.2-20.2-4 5-7 19-12.4 24.6-9.7m-33 1.8c3.7 3-2.3 9.6-10.2 11.2-4.3.8-7-1-6-4.2 1.6-4.8 13-9.7 16.2-7M183 87c6 2.2 3 1 10 3.5 6.6 2 12.2 8 13.7 11.4-3-1.5-1-.6-5.2-1.6-3.8-1-10.6-2.4-14.5-2.5-12-.4-10.7 5.4-7 12.8l1.4 3c1.3 1.7 2 4.5-.1 5l-4.6 2.2c-11.5 5.8-25.2 5.2-46.5-.5-13.4-3.5-31-.2-45.8 9.3-1.8 1-3 1.2-3 .1 0-1 9.8-10.5 13.5-13a92 92 0 0 1 14.6-8.4c4-1.8 4.2-2.2 2-4.2-3-3-1-9.3-3.4-11.8.8-1 3 0 4 2 .4.6-.5 0 1.2 1 5.2 2 10.2 2 19.2.1l3.8-.8 3.4-.8 7-1.6c1-.2 3-.8 5-1.2 11.8-3 17-4.6 26-3.7m151 18.5l-.5.5c-6.6 4-16.6 14-60.6 17 9 7 30.5 27.2 34 44.2.5.5.8.6 1.7 1.8 8 10.7 8.3 24.7 7.3 34.5-1.4 2.8-4 6-7.7 6.4h-4.2l-1 4.5c-1.7 8.7-3.3 14.8-5 16.5.8-3.7-1.3 9-2 .5-.4-7-2.3-14.6-5-21-1.6-3.6-4-3.4-4 .5.5 33-23.7 86.8-62.2 128a258 258 0 0 1-25.2 25c-3.3 2.5-2.2 4 .3 3l5.7-1.5c54.5-14.2 99-42.6 126.8-81 4.7-6.5 5-6.8 5.8-3.6 1.5 6.2 1.7 15 .7 32.5-.3 5.4-.2 5.5 2.3 2.8a117 117 0 0 0 26.4-49.5c1.6-7 2-8.8 2.7-14a137 137 0 0 0 1.4-24l-1.4-24.4a266 266 0 0 0-16.6-63.1c-3.4-6-.8-7.2 1.4-5.4 17.8 15.2 20.8 15.2 9.8.2C352 126 333 104 331 104M206 116.4c8.6 4.3 9 16 .7 16-5.8-.1-10.6-4.6-11-10.5-.4-5.7 4.5-8.3 10.2-5.5m105.8 8.6c12.8 6.5 21 33 11.7 38.3-10 5.6-24.7-18-21.3-34 1-4.3 5.5-6.3 9.6-4.3m-111.2 21c6.2 2.8 10.4 10.7 8.5 15.7-3 7.6-15.4 5.2-20-3.8s2.3-16.2 11.5-12m27 9.5c2 1 4.7 4.2 5.2 6.4 1.7 7-6.4 9.3-11.5 3.5-5.5-6.3-1-13.4 6.3-10m-39.8 15c11 4.8 13 20.5 3 22-10.4 1.4-21-13.5-14.6-20.5 2.5-2.6 7.4-3.2 11.6-1.4m152 6.7c7.2 7 6 25.8-1.5 25.8-7.6 0-11.2-20.7-4.6-26.5 2-1.7 4-1.4 6 .7M318 219c10 4.6 13 33 4 39.8-10.4 8-21-20.4-13.2-35.7 2-4 5.6-5.8 9.2-4m34.8 20c3.8 1.4 6.3 7.4 6.3 15 0 15-11.3 15-13.4 0-1.4-9.5 2.3-17 7-15m-60.7 15.2c6 6 1.6 25.8-5.8 25.8-5 0-7.5-8-5.2-17.8 2-8 7.2-12 11-8" fill="#a229e9"/><path d="M133 33c-4.4.2-8.7.7-13 1.4l-4.2.8a122 122 0 0 0-62.7 35.2c-5.3 6-5.2 6.6 2 9.2 5.8 2 9.7 3.7 12.8 5.7 2.8 1.8 3 1.7 4-1.4.5-1.7 1-2.7 1.3-3 .5-1 1-2 .4-4.3-.7-1.8-1.3-2-1.7-.1-.7 2.8-2 2.6-7.8-1C60 72.8 60.6 71 69.7 62a88 88 0 0 1 41.5-23.4l3.8-1c1.3-.4 3-.8 7.4-1.6l14.3-2.2 7.8-1c.2-.4-4-1-11.5.4m111.5 11l-8 1.5c-8 1.5-4.5 1.5 2 1C256 45 273 48.5 294 56l28 11c10 2.5 13.5 4 13 5v.5c-6 11.3-31.6 33.4-50 38.5h0c-9.5 3-27.3 4-30.5 4.3-1.5 0-3 1.2-1.5 1.2l22.7-.5c30.4-3.7 56-22.8 72-53.4l1-2-1.7-.1c-19 .5-23 1.5-41-6.5-23-10.5-26.6-10.3-34-11.5-5.5-1-14.5-1-20.5 0m-63.2 46l-1.8-1c-4.3-2.3-22-2-44 5l-10 2.3c-8.4 1-12.4 1-20-2-6-2.5-5.5-1-4 1.5 4 4.3 20.5 6.2 37.3 1.7l5-1.3 5.6-1.4 14.6-4c6.8-1.3 10-1.5 13.6-1l4.7.8M73.3 81c1.2 1.2.7 5.5 0 8L72 94c-2.7 6.6-7.4 12-28.5 33.8l-19.8 21c0 1 11.6 4 15.8 4 3.3 0 5.5 0 4-1l-1.5-.5c-1.6-.5-4.5-1.8-5.2-2.7-2.7-2.8-1.8-4.3 9.5-16.2 16.6-17.5 22.2-25.6 27.2-40C75 88.6 76 80.8 73.3 81m101.5 15c-3.5 2-2.4 8.8 4.2 16 4 5 4.5 6 2.4 1.4-3-6.3-3.4-8-2-9.8 2.7-3.5 16-3.5 27-1.5.8-.2-2.2-1.5-5.2-2.5-12.6-4.2-23.5-5.5-26.4-3.5m82.3 25.5l2.3 10c0 14-3 20-5 15-.2 0-1-11-3-12-2 2-3 24-9 56-2-1-5.3-9.8-7-12-6-11.6-5-7-7 1l-2 9c-14 35-19.6 40-37 37.6a55 55 0 0 0-12.8-.7c-7 .6-14 2.3-20.6 5-8 4.5-10.5 5-1.2 1.7l8.2-2.7c17-4 32.3 1.3 32.3 1.3h0c16.5 3.3 21.4-2.6 33.7-27.8 4.8-10 5-10.3 6.4-6.5 1 3 2.2 9 2.6 16.3l.5 5c1 0 8.8-17 11.3-25 3.2-9.7 5.4-21 6-30 .4-5.5.8-5.5 6.8.1l5 4.5c.4-5.6.3-11.2-.5-16.8-2-9-4.4-17.4-6.3-21.5l-3.4-7.3M151.2 145c-3.5-.5-19.7-4-50.7 2l-10 2C80 153 59 162 52 167.2c-6.6 5-7.2 12-1.4 18.4 4 4.5 10.4 6 20 4.5l10.5-1.6L89 187l5.6-1.4c14.3-3.5 30.8-10.8 30.8-13.5 0-.7-2.5-2.7-5-4-3-1.6-3-2 0-2.3a61 61 0 0 1 33.5 10.2 106 106 0 0 1 31 40.4c2.2 6.8 1.8 3.8 1.7 1.4-.2-1.3-.7-3.7-2.3-10-6.7-27-22-44.6-44.8-52.3-7-2.3-7.2-2.6-3.3-3.3l9-2c5.8-1 5.5-1.2 5.6-2.4l.2-2m-142.3 18c-1.7 1-2 2-1 5 4.6 13.3 14.3 24 22 24 5.7 0 6.3-3.2 2-11.6-6-12.6-17.3-21-23-17.4" fill="#c373f3"/><path d="M52.3 92.5c-1.7 2-3.2 5-2.7 5.5.2.2 1.7.6 3.4.8l5.3.8c7.5 1 8.4 1 9.6-1.4 1.2-2.2-1-3.8-8.8-6-4.6-1.4-5.2-1.3-6.8.3M160 103.8a89 89 0 0 1-22.3 4.2l-5.4.8 4 1.5c16 5.4 27.4 3 27.4-5.8 0-2-.3-2.2-3.6-.7M28.6 199c0 2.4 7 10.5 11 14.5 5 6 11 13 4 0-2-4 1.2-9.2 4-8 1.2.6 1 .2 2.7 0 1-.2 2.7-.1 3.6.1 1.4.4 1.7.4 3-.5s1.8-1 7-1.2c7-.3 6.8-.4 11 5.2l5.7 7.4c2-9 2.2-12 1-16 0-3-1.4-1.6-6-1-11.3 3-15.8 3.2-23.6 2a59 59 0 0 0-8-.7 59 59 0 0 1-13.3-1.8c-2-.7-2.3-.7-2.3-.1m74.2 29.3c-.8 5-1 6.3-2.2 9-2 4.8-2.6 5.3-4.7 3.5-1.6-1.2-2-1.2-2.7.2-.8 1.5-2 1.6-3.4.2-1-1.2-2.2-1.2-3.6-.2-1.5 1.2-2.4 1-4-.6l-1.4-1.5-1.3 1c-2 1.7-5-1-8.4-8l-2-4-.8 1.7c-1.4 3.3-1.8 9.7-.7 11.8 1.6 3 18 6 30 5.4 18-.8 17.7-.8 17.4-4-.5-5-5.5-11-10.2-14.3-2-1.4-1-3-2-.2" fill="#f1f0f2"/><path d="M266.3 123.4c.4 1 1 2 1.6 2.8 11.4 18.8 13 44 4 61.3-2.3 4.3-2.4 4.3-3.5-1-.6-2.6-2.7-6.4-3.7-6.6-.7-.1-1 .8-2 5-5.2 24.8-20.4 50.8-36 61-4.7 3.2-5.3 3-3.5-1 4-9 6.6-18.8 6-22.8-.4-2.6-1-2.2-3.6 2-6.5 10.7-14 17.3-22 19-4.3 1-5.4 1-14.3-1.6a113 113 0 0 0-6.4-1.2c-9-1.2-11.2-.5-11.2 3.6l-2.8 17.6-.8 4-4 17.2c-.2.7-1.3 4.5-2.4 8.4l-2.4 8.3c-1.2 3-2 6.6-5 17.6a419 419 0 0 0 63.7-53.8c4-4.2 4-4.2 5 2 4 25.4-5.4 60.4-24.2 89.6l-4 6.6c-6 8 .1 6-2 6.3 3.5-2.5 11.8-12.7 26-27.7 38.6-41 63-90.7 63.2-128 0-9.6 5.6 6.7 6.8 19.7.8 8.5.8 8.6 1.4 8 4-8.6 7-19.2 8.6-28.5v-.2c7.3 1 9.8-3 10.8-5 .8-2.6 2.8-7 1-19.5a42 42 0 0 0-7-16.5c-1-1.6-1.6-2.3-2-4-3.5-17-14.5-34.4-26-42-3-1-2.3-1-9-.7m32 43.5c9.2 3 16 31.2 9.5 40.2-1.5 2.5-7 4.3-9.5 2.6-9.3-6.5-14.7-29.4-9.3-39.6 2-3.8 4.8-4.7 9.2-3.2m-25 44.5c4 3 6.6 14.2 5 22.5-4 20.7-17.4 21.2-19 .7-1-15 7-28.5 14-23.3m-88 10.5c-18-9-39.7-11-60.4 9.4-7.3 7.3-8 8.2-8.3 12.2-.4 3.4-1 4.2-3.6 4.2l-5.8.4c-13.2 1.3-13.6 1-21.3.7-11.6-2-11.3-2-9.6 2.8a27 27 0 0 0 14.4 16.7 72 72 0 0 1 14.4 10.4c7 2 6 1 4.4-2.5a63 63 0 0 0-8.4-13.8c-6.5-7.8-6.4-7.6-.7-8 2.4-.1 6-.5 8-1l7.4-1.2c4.8-.7 5-1 7.6-5.7 5.2-10 15.7-20.6 24.6-25 10.2-5 23.6-3.3 36.6.7M82 130.5c1.5 1 4.5-.8 5.5-1.5 14.8-9.3 25.4-11 38.8-7.4 21.3 5.5 40.2 5.4 51.6-.3l4-2.4c.3-1 .4-1.2-.1-.8l-3.4 1.2a64 64 0 0 1-45.8-2c-1.4-.8-5.4-.8-13-.8-7.3 0-24.7 5-36 13M185.5 17c-18.4 1.2-36.6 6.4-53 14.8-5 2.8 5.8 2.3 55.8-5.2 30-5 73 8.7 70 7.2-4.5-2.5-11-6.8-21.6-10.3a124 124 0 0 0-51.2-6.5" fill="#741cab"/></g></svg>',
      "friendlyName": "Purple Cheetah",
      "className": "purpleCheetahButton",
      "appName": "com.purple.cheetah.player",
      "androidName": "com.purple.cheetah.player",
      "adbLaunchCommand": "adb shell am start com.purple.cheetah.player/com.purpleplayer.iptv.android.activities.SplashActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "qmusic-be": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="314" height="375" viewBox="0 0 314 375" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M295.7 360.5c-6.6 9.2-15 13.2-25.6 13.2-17.4 0-30.2-13.6-30.2-30.6a30 30 0 0 1 30.4-30.6c9.7 0 18.5 4.7 23.7 11.8l-10.7 9.8a16 16 0 0 0-13-7.1c-8.8 0-15.3 7.2-15.3 16 0 9.3 6.4 16 15.6 16 6.2 0 11-3.8 13.5-7.7l11.6 9M219 372.6h15v-58.8h-15zm-42.4-18a23 23 0 0 0 15.5 5.8c4 0 7.2-2 7.2-5 0-9-27.3-5.7-27.3-24.6 0-11.3 10.4-18.3 21.6-18.3 7.3 0 15.4 3 19 6l-7 11.4c-3-2.2-6.7-4-10.8-4-4.2 0-7.7 1.7-7.7 4.7 0 7.7 27.3 4.7 27.3 25 0 11.3-10.5 18.2-22.4 18.2a38 38 0 0 1-22.7-7.9l7.3-11.3m-64-7v-33h15V345c0 5.3 1 8 2.8 10 2.3 2.7 5.6 3.6 8.5 3.6 5 0 12-2.6 12-14v-30h15v32.7c0 16-10.8 26-27.7 26a25 25 0 0 1-26-25.7M81 312c-9.4 0-15 5.6-19.3 10.5-4.3-5-10-10.5-19.3-10.5-14.6 0-26.2 10-26.2 25.8V372h15v-31.4c0-11.4 7-14 12-14a11 11 0 0 1 8.4 3.7c1.7 2 2.7 4.7 2.7 10V372h15v-31.8c0-5.3 1-8 2.8-10 2.3-2.7 5.5-3.7 8.4-3.7 5 0 12 2.7 12 14V372h15v-34c-.5-16-12-26-26.5-26" fill="#313533"/><path d="M161.6 183.8c.4-8.2 5.7-14 12.7-14s12.7 6.3 12.7 14c0 1.3-.2 2.5-.4 3.7-.5 3.5-3.5 11.6-12.4 21.8L170 204c-4.2-5.3-8.6-12-8.3-20.3zm148.6-97.4c0-.2 0-.5-.1-.7-.1-.6-.2-1-.3-1.7a106 106 0 0 0-16.5-39.3 99 99 0 0 0-36.1-31.5A121 121 0 0 0 208.4.3a151 151 0 0 0-25.1.6c-30 3-60.5 14.6-90.7 34C33.5 73.2-2 134.5.1 187a94 94 0 0 0 10.7 41.3c13.7 26 36.8 44.3 65 52a114 114 0 0 0 42.1 3.2l2-.2c15.6-2 31.2-6.8 46.4-14.6 4-2 7.8-4.5 11.8-7.3 11 8.8 21 16 28.3 21 3.3 1.7 7 2.4 11 2h0c5.5-.5 10.5-3.4 13.7-8 3-4.2 4.2-9.2 3.3-14.3s-3.7-9.5-8-12.5l-20.7-15.5-.1-.1.1-.1c.2-.2.3-.5.5-.7 7-9.7 19-28.8 18.7-48.3a56 56 0 0 0-13.3-35.1c-9.3-11-22.2-17.3-36.2-17.7l-6.3.3c-19.6 2-37 15.5-43 33.5-2.4 7-3.4 14-3 21a68 68 0 0 0 21.1 44.2l3.6 3.6h.1l-.1.1c-11.3 5.6-22.7 9-34 10.3-9.6 1-19 .3-27.8-2-17.8-5-32.4-16.5-41-32.8a57 57 0 0 1-6.3-25.1c-.5-13.5 2.7-28.7 9.5-44.2 12.8-28.8 36-55 65.4-74 25-16.2 49.8-25.6 73.7-28 6.4-.7 12.7-1 18.7-.5 24.4 1.5 44 11.3 55.5 27.8a70 70 0 0 1 10.7 26.5v.4a5 5 0 0 1 .2 1.2l.3 1.3v.1c1.4 9 1.3 18.8-.2 29-3.3 21.8-13.5 43.4-29 61.8-5.2 8-3.7 19 4 25.2 4 3.3 9 5 14.3 4h0c5 0 9.6-3 13-6.8 20.8-25.4 33.6-54.8 36.8-85.2 1.4-13 1-25.6-1.3-37.5h0z" fill="#db342a"/></svg>',
      "friendlyName": "Qmusic-BE",
      "className": "qmusicButton",
      "appName": "Qmusic-BE",
      "deviceFamily": ["apple-tv"],
  },


  "raiplay": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 450.1 191.8"><path d="M0 0h191.8v191.8H0z" style="fill:#009ff9"/><path class="st1" d="M160.4 52.8c-5.6 0-10.2 4.6-10.2 10.2s4.6 10.2 10.2 10.2 10.2-4.6 10.2-10.2-4.7-10.2-10.2-10.2M151.3 82.6h18.1v51.1h-18.1zM60.8 102.9C71.5 101 77.3 92 77.3 81.7c0-16-11.3-23.1-26.1-23.1H22v75.1h19.5v-28.9h.2l18.4 28.9h24.3l-23.6-30.8zM43.4 92.2h-1.9V73.5h1.9c6.4 0 13.6 1.2 13.6 9.4 0 8.1-7.2 9.3-13.6 9.3" style="fill:#fff"/><path d="M122.8 82.6v5c-3.8-4.5-10-6.7-15.8-6.7-15.1 0-25.6 12.6-25.6 27.2s10.7 27.3 25.8 27.3c6 0 12.3-2.3 15.4-7.4h.2v5.7h18.1V82.6h-18.1zm-11.1 37c-7.4 0-11.7-5-11.7-11.5 0-6.3 4.3-11.6 11.7-11.6 7.4 0 11.7 5.3 11.7 11.6-.1 6.6-4.3 11.5-11.7 11.5" style="fill:#fff"/><path class="st0" d="M246.2 118.7v15.7h-33.1v-15.7h7.4V74h-7.4V58.4h32.7c8 0 14.1.5 19.3 4.2 6.7 4.7 10.3 11.9 10.3 21.4 0 8-2.8 14.7-8.5 19.9-5.6 5.1-12.6 6.1-22.4 6.1h-5.3v8.8h7zm-3.4-25.2c9.2 0 13.7-2.4 13.7-9.2 0-6.4-4-8.8-12.2-8.8h-4.9v18h3.4zM287 73.8h-7.1V58.4h23.7V119h7.4v15.5h-31.3V119h7.3zM343.1 135.3c-16.5 0-28.8-12.6-28.8-30.3 0-17.7 12.3-30.3 28.8-30.3 7.9 0 13.6 2.5 18 8.2v-7.3h22.5V91h-6.4v28h6.4v15.5h-23.3V128c-4 5-9.6 7.3-17.2 7.3m3.1-15.6c8.1 0 14.1-6.1 14.1-14.7s-6-14.7-14.1-14.7-14.1 6.1-14.1 14.7 6 14.7 14.1 14.7M423.3 91.1V75.7h26.8v15.4H445l-17.8 46.5h5.2v15.5H405v-15.5h5.5l1.1-2.8-16.4-43.7h-5.1V75.7h27.2v15.4h-4.6l7.5 23 7.7-23z" style="fill:#009ff9"/></svg>',
      "friendlyName": "RaiPlay (IT)",
      "className": "raiPlayButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "it.rainet.androidtv",
          "androidName": "it.rainet.androidtv",
          "adbLaunchCommand": "adb shell am start -n it.rainet.androidtv/.ui.MainLeanbackActivity",
      },
      "apple-tv": {
          "appName": "RaiPlay",
      },
      "chromecast": {
          "appName": "it.rainet.androidtv",
          "androidName": "it.rainet.androidtv",
          "adbLaunchCommand": "adb shell am start -n it.rainet.androidtv/.ui.MainLeanbackActivity",
      },
      "nvidia-shield": {
          "appName": "it.rainet.androidtv",
          "androidName": "it.rainet.androidtv",
          "adbLaunchCommand": "adb shell am start -n it.rainet.androidtv/.ui.MainLeanbackActivity",
      },
      "xiaomi": {
          "appName": "it.rainet.androidtv",
          "androidName": "it.rainet.androidtv",
          "adbLaunchCommand": "adb shell am start -n it.rainet.androidtv/.ui.MainLeanbackActivity",
      },
   },


  "redplay": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 400 153" width="400" height="153"><g fill-rule="evenodd"><path d="M35 5.668c-2.591.122-2.99.171-5.642.689C17.373 8.7 8.751 17.116 5.684 29.463l-.485 1.954-.09 44.57-.089 44.571.564 2.179c1.606 6.2 3.652 10.335 6.995 14.141 4.797 5.46 12.633 9.522 19.221 9.964 8.49.569 88.401.332 91.2-.27a30.816 30.816 0 0 0 22.516-19.759c1.453-4.064 1.475-4.894 1.48-56.333L147 30.877l-.508-1.73c-3.758-12.807-10.9-19.699-23.823-22.99l-2.581-.657-41.335.027c-22.735.015-42.424.078-43.753.141m25.481 22.323c1.725.585 3.537 1.904 6.602 4.805.734.694 1.899 1.792 2.59 2.441.968.909 5.66 5.362 7.653 7.263 7.442 7.1 7.898 7.485 10.507 8.878a38.28 38.28 0 0 1 1.667.95c.412.253 2.138 1.247 3.833 2.209a4948.988 4948.988 0 0 1 16.5 9.426c12.793 7.337 15.222 10.613 13.85 18.675-.472 2.774-.447 3.608.17 5.695 2.161 7.312-1.153 11.918-10.514 14.61-2.312.665-13.991 3.9-15.256 4.226-2.626.677-12.343 3.422-13.565 3.832-3.029 1.018-6.635 2.913-15.851 8.329-13.7 8.051-14.681 8.503-18.437 8.503-3.695 0-5.895-.69-8.563-2.684-1.855-1.387-1.862-1.39-3.87-1.739-5.443-.944-8.891-4.041-9.735-8.743-.442-2.465-.284-3.608 1.407-10.167.555-2.154 2.289-9.023 3.854-15.263l2.844-11.346-.001-5.987c0-3.293.082-11.234.183-17.647l.185-11.659.502-1.424c1.656-4.697 4.282-7.249 9.342-9.081 1.986-.719 2.544-1.021 4.039-2.186 2.807-2.187 6.941-2.974 10.064-1.916m-13.879 8.691c-2.054.833-3.694 2.384-4.734 4.474l-.616 1.24-.104 3.01c-.058 1.656-.096 18.504-.085 37.44l.02 34.429.7 1.412c1.093 2.205 2.822 3.686 5.343 4.576 1.229.434 2.636.534 2.75.195.054-.162.167-.156.514.029.365.194.598.201 1.299.039 1.694-.391 2.093-.606 17.978-9.728 4.079-2.342 7.684-4.408 8.01-4.591.327-.183 1.565-.895 2.75-1.582 1.186-.686 4.706-2.711 7.823-4.499 3.117-1.788 7.392-4.249 9.5-5.469 2.108-1.22 4.321-2.49 4.917-2.823 8.4-4.693 13.473-7.807 14.675-9.009 2.845-2.845 2.828-8.437-.037-11.859-.673-.804-2.351-2.026-4.158-3.029-.31-.172-1.426-.819-2.48-1.439-1.793-1.055-16.908-9.701-19.667-11.251a287.218 287.218 0 0 1-4-2.329 382.102 382.102 0 0 0-9.917-5.704 372.31 372.31 0 0 1-6.666-3.827 439.338 439.338 0 0 0-6.584-3.796c-1.604-.9-3.966-2.258-5.25-3.018-5.354-3.173-9.074-4.07-11.981-2.891m16.873 20.851c.627.191 1.398.615 4.865 2.673a1874.746 1874.746 0 0 0 14.577 8.543c11.057 6.377 12 7.254 12 11.168 0 3.515-.696 4.285-7.524 8.328-1.82 1.078-4.435 2.635-5.81 3.46a522.163 522.163 0 0 1-5 2.953c-8.146 4.735-9.891 5.754-10.416 6.086-3.752 2.365-6.764 2.349-9.151-.05-2.052-2.062-2.007-1.558-2.012-22.536L55 62.065l.424-.851c1.478-2.965 5.05-4.598 8.051-3.681M60 60.287c-1.979.744-2.003.947-2.005 17.213-.002 17.634.078 20.271.637 20.872 1.949 2.092 2.942 1.887 9.451-1.952 1.284-.756 2.645-1.533 3.024-1.726.38-.192 1.394-.792 2.252-1.333.859-.541 3.136-1.903 5.06-3.027 13.228-7.73 13.902-8.261 13.716-10.824-.147-2.03-2.402-3.686-14.218-10.438a375.677 375.677 0 0 1-5.75-3.367c-9.091-5.451-10.459-6.06-12.167-5.418" fill="#dc041c"/><path d="M265.069 34.48c-1.263.327-1.253.231-1.334 12.77-.06 9.246-.143 12.75-.301 12.75-.022 0-.86-.366-1.862-.814-10.26-4.585-20.437 1.437-22.501 13.314-2.5 14.387 12.07 25.489 24.085 18.351 4.805-2.854 7.194-7.29 7.541-14.002.374-7.226.281-41.456-.114-41.747-.757-.56-4.239-.952-5.514-.622m54.081.384c-.374.7-.458 5.842-.512 31.423l-.055 25.704.38.379c.468.469 5.139.583 6.163.151l.543-.229-.026-25.938c-.024-24.616-.097-30.376-.393-31.075-.329-.778-5.71-1.144-6.1-.415M174 43.671a44.59 44.59 0 0 1-1.667.24c-.504.063-1.198.232-1.541.377l-.625.263.02 16.433c.029 23.217.158 31.817.48 32.02.523.33 6.082.199 6.398-.151.438-.483.573-2.002.67-7.538.103-5.892.103-5.891 1.191-6.041 1.201-.164 7.498-.128 7.956.046.48.183 1.438 1.967 2.925 5.448 1.653 3.871 3.319 7.28 3.849 7.876l.499.561 2.797-.076c4.924-.135 4.886.016 1.771-7.015-2.417-5.459-4.056-9.312-4.056-9.537 0-.095.437-.666.973-1.269 5.175-5.83 6.853-11.878 5.172-18.641-1.224-4.923-5.58-10.372-8.993-11.25l-2.174-.557c-3.139-.803-13.339-1.578-15.645-1.189m110.631.454c-.908 1.041-.944 2.057-.955 27.426l-.009 20.801.791.354c1.304.582 5.522.635 6.266.079.233-.174.281-.822.353-4.785.046-2.521.132-5.499.19-6.618l.106-2.034.688-.084c.379-.046 2.564-.163 4.856-.26 6.02-.253 8.216-.933 11.532-3.57 11.07-8.805 6.88-28.646-6.551-31.019-3.243-.573-16.822-.801-17.267-.29m13.619 7.287c6.022.978 8.302 3.901 8.324 10.671.011 3.199-.09 3.565-1.587 5.77-2.083 3.067-3.38 3.563-9.82 3.756l-3.637.11-.14-.985c-.159-1.116-.134-15.596.031-17.684.107-1.354.112-1.368.635-1.532 1.282-.403 4.073-.451 6.194-.106m-113.917.251c3.09.17 3.837.361 5.079 1.301 4.834 3.656 5.374 12.09 1.034 16.15-3.173 2.969-12.174 3.772-12.643 1.128-.37-2.084-.065-17.027.375-18.36l.181-.549 1.612.09 4.362.24m34 5.753c-.321.127-.813.236-1.094.241-.731.014-2.16.466-3.322 1.051-12.534 6.309-13.017 26.672-.778 32.798 7.676 3.842 17.608.471 20.963-7.115.96-2.17.6-2.457-3.177-2.529-3.393-.065-3.773.015-5.53 1.166-3.308 2.167-5.843 2.565-8.477 1.329-2.355-1.104-5.196-4.737-4.516-5.775l.264-.402 11.042-.048c13.707-.06 12.411.339 12.246-3.775-.18-4.469-1.723-8.568-4.395-11.677-2.796-3.253-10.538-6.334-13.226-5.264m150.584-.082c-.367.071-1.475.14-2.462.153-4.026.053-4.006.305 1.043 13.013 1.365 3.438 3.134 7.938 3.929 10 .795 2.063 1.784 4.612 2.196 5.667.901 2.301 1.06 3.529.626 4.837-.3.902-.446 1.24-3.415 7.913a585.007 585.007 0 0 0-2.667 6.083c-.529 1.237-1.427 3.3-1.997 4.583-4.474 10.079-4.057 10.915 3.077 6.156 4.281-2.856 4.134-2.66 6.85-9.156.882-2.108 1.85-4.395 2.151-5.083 3.33-7.595 6.99-16.043 8.088-18.667a122.076 122.076 0 0 1 1.434-3.295c.31-.667.563-1.247.563-1.291 0-.043 1.546-3.698 3.434-8.121 5.195-12.166 5.153-12.022 3.616-12.448-1.118-.311-4.859-.219-5.645.137-1.33.605-2.574 2.8-5.485 9.685-5.385 12.732-4.925 11.803-5.388 10.894-.18-.354-1.465-3.682-2.857-7.394-3.959-10.562-5.512-13.957-6.317-13.814a83.6 83.6 0 0 0-.774.148m-25.084.27c-4.228.827-8.233 3.148-10.68 6.19-6.261 7.782-4.214 21.89 3.93 27.086 5.321 3.394 9.563 3.629 15.554.861 1.559-.72 1.645-.717 1.858.073.277 1.031.418 1.081 3.271 1.157 4.12.111 3.817.948 3.817-10.554 0-10.752-.188-12.14-2.176-16.101-2.854-5.688-10.154-9.771-15.574-8.712M222.141 65.94c1.889.49 5.026 2.882 5.026 3.832 0 .396-13.376.241-13.777-.159-.148-.149 1.261-1.607 2.287-2.366 2.221-1.643 3.878-1.978 6.464-1.307m34.435-.185c9.132 2.379 9.206 16.44.102 19.143-6.917 2.053-12.774-7.286-9.055-14.44 1.667-3.207 5.987-5.476 8.953-4.703m92.18.482c7.17 3.543 7.148 14.894-.035 18.502-5.19 2.605-11.888-2.553-11.888-9.156 0-6.799 6.603-11.975 11.923-9.346M49.833 123.5c0 .092.155.167.344.167.188 0 .296-.075.24-.167-.057-.092-.211-.167-.344-.167-.132 0-.24.075-.24.167" fill="#040404"/></g></svg>',
      "friendlyName": "RedPlay",
      "className": "redPlayButton",
      "appName": "com.mm.droid.livetv.redplaybox",
      "androidName": "com.mm.droid.livetv.redplaybox",
      "adbLaunchCommand": "adb shell am start -n com.mm.droid.livetv.redplaybox/com.mm.droid.livetv.load.LiveLoadActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "rumble": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1071" height="276" viewBox="0 0 1071 276" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M312 197.3v-57c0-37.8 27-56 59-56h15.4v29.3l-13.6.1c-9 0-16 2.6-21 7.8-5 5-7.4 13-7.4 23.3v52.5zm88-113h32.6v59a52 52 0 0 0 1.5 13.6c1 3.7 2.6 6.6 4.6 9a18 18 0 0 0 7.3 4.7 32 32 0 0 0 9.7 1.4c3.2 0 6.5-.5 9.6-1.5a16 16 0 0 0 7.2-4.6c2-2.3 3.6-5.2 4.7-9a51 51 0 0 0 1.6-13.6v-59h32.5v60c.2 9-1.2 18-4.2 26.3-2.5 6.6-6.5 12.6-11.6 17.4a46 46 0 0 1-17.8 9.7 77 77 0 0 1-22 3 78 78 0 0 1-22.2-3c-6.5-2-12.6-5.2-17.7-9.7-5-4.8-9-10.8-11.6-17.4-2.8-7.2-4.2-16-4.2-26.3zm199.6 52.2v60.8h32.7v-60.8c.4-14.4 7.2-26.8 22-26.8 14 0 19.3 15.2 19.3 27.6v60h32.6v-57c0-35.3-17.8-59.6-51-59.6-18.3 0-31 6.6-39.5 15.5-10.3-10.5-24.7-16-39.4-15.5-33.2 0-51 24.3-51 59.6v57h32.6v-60c0-12.3 5.3-27.5 19.3-27.5 15 0 21.6 12.3 22 26.8zm120 .6c0 40.7 24 64 63 64a60 60 0 0 0 24-4.7 55 55 0 0 0 18.4-12.9 57 57 0 0 0 11.7-19.1c2.8-7.6 4.2-15.5 4.2-23.5a69 69 0 0 0-4-23.3 55 55 0 0 0-11.5-19.1 53 53 0 0 0-18.1-13c-7.7-3.3-16-5-24.2-4.8-6.5 0-12.5 1-17.6 3a50 50 0 0 0-13.5 7.2V44h-32.5zm86.6-9c1.5 3.8 2.3 8 2.3 12.6s-.7 9-2.3 12.8c-1.4 3.7-3.6 7-6.3 10-2.6 2.7-5.7 5-9.3 6.4-7.2 3-15.3 3-22.5 0a28 28 0 0 1-9.2-6.3 32 32 0 0 1-6.3-9.9 36 36 0 0 1-2.1-13c-.1-8.3 3-16.3 8.4-22.5 2.7-2.7 5.8-4.8 9.3-6.2a28 28 0 0 1 11.4-2.3 28 28 0 0 1 26.6 18.4zm47-84.3H886v153.5h-32.5zm49.3 73.8a64 64 0 0 0-4.4 23.3c-.1 8 1.4 16 4.4 23.3a59 59 0 0 0 12.6 19c5.4 5.6 11.8 10 19 13a63 63 0 0 0 24.5 4.7 62 62 0 0 0 20.9-3.4 63 63 0 0 0 16.8-8.9 58 58 0 0 0 12.1-12.6c3.2-4.5 5.7-9.4 7.4-14.6h-35c-2 3.4-4.8 6.3-8.6 8.6a27 27 0 0 1-22.5 1.7c-3-1-5.8-2.6-8.3-4.6-5.4-4.3-9.2-10.2-11-16.8h88.2c.5-3 .8-6.3.8-9.4.1-8-1.4-16-4.5-23.3a57 57 0 0 0-31.7-32 61 61 0 0 0-24.6-4.8 61 61 0 0 0-24.5 4.8 58 58 0 0 0-19.2 12.9c-5.3 5.4-9.6 12-12.4 19zm39-4.8c5-3.7 11-5.6 17.2-5.4 6.6 0 12 1.8 16.5 5.5 4.3 3.6 7.6 8.2 9.6 14h-53.6a31 31 0 0 1 10.2-14z" fill="#012"/><path d="M175.2 152c8.7-7 8.7-20.3 0-27.4-12.4-10.2-26-19-40.4-26-10-4.7-21 2-22.7 13.3-2.5 17.4-3 35-1.3 51.5 1 11.5 12 18.4 22.2 14 15.2-6.5 29.3-15 42.2-25.3zm65-50.6a55 55 0 0 1 .2 73.8 245 245 0 0 1-122.8 73.3 48 48 0 0 1-57.7-33.5C45.5 166.2 47.6 111 61.3 62c7.3-25.7 31.5-41.8 56.4-36 46 11 89.4 39.3 122.4 75z" fill="#85c742"/></svg>',
      "button-round": '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="276" viewBox="0 0 256 276" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M155.2 149.4c8.7-7 8.7-20.3 0-27.4-12.4-10.2-26-19-40.4-26-10-4.7-21 2-22.7 13.3-2.5 17.4-3 35-1.3 51.5 1 11.5 12 18.4 22.2 14 15.2-6.5 29.3-15 42.2-25.3zm65-50.6a55 55 0 0 1 .2 73.8 245 245 0 0 1-122.8 73.3 48 48 0 0 1-57.7-33.5c-14.3-48.7-12.2-103.8 1.5-152.8 7.3-25.7 31.5-41.8 56.4-36 46 11 89.4 39.3 122.4 75z" fill="#85c742" fill-rule="nonzero" stroke="none"/></svg>',
      "friendlyName": "rumble",
      "className": "rumbleButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.rumble.firetv",
          "androidName": "com.rumble.firetv",
          "adbLaunchCommand": "adb shell am start com.rumble.firetv/com.rumble.firetv.LauncherActivity",
      },
      "apple-tv": {
          "appName": "Rumble",
      },
      "chromecast": {
          "appName": "com.rumble.battles",
          "androidName": "com.rumble.battles",
          "adbLaunchCommand": "adb shell am start com.rumble.battles/com.rumble.battles.LauncherActivity",
      },
      "nvidia-shield": {
          "appName": "com.rumble.battles",
          "androidName": "com.rumble.battles",
          "adbLaunchCommand": "adb shell am start com.rumble.battles/com.rumble.battles.LauncherActivity",
      },
      "xiaomi": {
          "appName": "com.rumble.battles",
          "androidName": "com.rumble.battles",
          "adbLaunchCommand": "adb shell am start com.rumble.battles/com.rumble.battles.LauncherActivity",
      },
  },


  "s0und-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 400 81.443" width="400" height="81.443"><path d="M0 22.917c0 20.259.029 22.916.25 22.916.167 0 .25.167.25.5v.5H49V68.5H19V56.167H0v25.166h83V36.5H19V9.833h30v21.5h33v-.5c0-.444.056-.5.5-.5h.5V0H0v22.917m89.167 18v40.416h81.5V.5h-81.5v40.417m277.333-25.5v7.75h-35.961l-.101.375c-.055.206-.101 13.293-.102 29.083l-.003 28.708H400V7.667h-33.5v7.75m-229.833 24.25V68.5h-29V10.833h29v28.834M181 52.75v28.583h69V24.167h-34V67.5h-16.583l.043-21.667.042-21.666H181V52.75m74.167 0v28.583h18.5V34.5h17.5v46.833h34.166V53.014c0-15.576-.045-28.439-.101-28.584-.092-.239-3.338-.263-35.083-.263h-34.982V52.75M366.5 51.5v17H349v-34h17.5v17" fill="#fff" fill-rule="evenodd"/></svg>',
      "friendlyName": "S0undTV",
      "className": "s0undTVButton",
      "appName": "com.s0und.s0undtv",
      "androidName": "com.s0und.s0undtv",
      "adbLaunchCommand": "adb shell am start -n com.s0und.s0undtv/com.s0und.s0undtv.activities.MainActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "sbs-on-demand": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="632" height="94" viewBox="0 0 632 94" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M-.5 50.8C4 46.3 8.2 40.4 11.2 33.4c3-7 4.6-14 4.6-20.6-5 5-9 11-11.7 17.4-3 7-4.6 14-4.6 20.6"/><path d="M4.3 60.6c6-6 11.7-14 16-23.3 4-9.4 6-19 6.3-27.6-6 6-11.6 14-15.7 23.3-4.3 9.7-6.3 19-6.5 27.6"/><path d="M11 74.5a100 100 0 0 0 21.5-31.7C38 30 41 17 41.2 5.4H41a100 100 0 0 0-21.5 31.7A100 100 0 0 0 11 74.5"/><path d="M20.2 92.6a128 128 0 0 0 28.9-42.7A132 132 0 0 0 60.6-.5l-.2.2a132 132 0 0 0-28.9 42.8c-7.4 17-11 34.6-11.3 50m72.3-53.7h9.5c-.2-10.4-8-17.5-21-17.5-11 0-19.7 6.5-19.7 16C61.4 58.3 94 48 94 62c0 5.5-5.5 8.3-11.3 8.3-8 0-13.5-3.8-14-11.6h-9.4C59.4 73 71 78 81.8 78c12.5 0 21.7-6 21.7-16.7 0-21.7-32.8-12-32.8-25.3 0-4.5 4.2-7 10-7 8.8.1 11.4 4.6 11.8 9.7zM107 22.6v54h26.4c10.4 0 18.4-5 18.4-15 0-7-2.4-11.6-10-14 4.3-1.8 7.6-4.7 7.6-11.7 0-9-6-13.3-15.8-13.3H107zm9.4 7.6H132c6 0 8.2 3.4 8.2 7.6 0 4.7-3 7.6-7.7 7.6h-16V30.2h0zm0 22H133c6.6 0 9.5 3.6 9.5 8.5 0 5.4-4.4 8.5-9.3 8.5h-16.8v-17zm71.2-13.4h9.5c-.2-10.4-8-17.5-21-17.5-11 0-19.7 6.5-19.7 16 0 21 32.6 10.8 32.6 25 0 5.5-5.5 8.3-11.3 8.3-8 0-13.5-3.8-14-11.6h-9.4c.2 14 11.7 19 22.7 19 12.5 0 21.7-6 21.7-16.7 0-21.7-32.8-12-32.8-25.3 0-4.5 4.2-7 10-7 8.7.1 11.4 4.6 11.8 9.7z"/><path d="M208 34.7v30l21.2-15zm46.2-13.4c-12.2 0-22.5 7.7-26.5 18.5l14 9.8-14 9.8c4 10.8 14.4 18.4 26.5 18.4 15.6 0 28.3-12.6 28.3-28.2 0-15.7-12.7-28.3-28.3-28.3zm0 40.8c-7 0-12.6-5.6-12.6-12.5 0-7 5.7-12.6 12.6-12.6 7 0 12.6 5.6 12.6 12.6S261.2 62 254.2 62zm82 14.4h-15.8l-16.5-29v29h-16.3v-54h15.7l16.6 29v-29h16.3zm25.6-54c8.3.2 14.4 2.5 18.6 7 4 4.4 6.2 11 6.2 20s-2 15.6-6.2 20-10.3 6.7-18.6 7h-18.6v-54h18.6zM359.3 72a36 36 0 0 0 10-1.2c2.8-.8 5-2.2 7-4s3-4 4-7a39 39 0 0 0 1.3-10.3c0-4-.5-7.5-1.3-10.4a17 17 0 0 0-4-7 17 17 0 0 0-7-4 36 36 0 0 0-10-1.2h-11v45h11zm69-49.5V27h-32v19.5h30v4.3h-30V72h32.4v4.4H391v-54h37.3zm13.4 0l18 47.3 18.6-47.3h7.5v54h-5V30h-.2L462 76.5h-4.8L439.5 30h-.1v46.6h-5v-54h7.5zm73.8 0l21.2 54h-5.5l-6.6-16.8H500l-6.5 16.8H488l21.7-54h5.7zm7.4 32.8l-10.5-27.7-10.8 27.7H523zm23.3-32.8L577.6 68h.2V22.6h5v54H577L545.8 31h-.1v45.6h-5v-54h5.7zm59.6 0c8.2.2 14.4 2.5 18.6 7 4 4.4 6.2 11 6.2 20s-2 15.6-6.2 20-10.4 6.7-18.6 7h-18.6v-54H606zM603.4 72a37 37 0 0 0 10-1.2c2.8-.8 5-2.2 7-4s3-4 4-7a39 39 0 0 0 1.3-10.3c0-4-.5-7.5-1.3-10.4a17 17 0 0 0-4-7 17 17 0 0 0-7-4 37 37 0 0 0-10-1.2h-11v45h11z" fill="#fdb715"/></svg>',
      "button-round": '<svg xmlns="http://www.w3.org/2000/svg" width="471" height="284" viewBox="0 0 471 284" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#2e2e2e" fill-rule="nonzero"><path d="M47.5 146a94 94 0 0 0 22.7-34.4 94 94 0 0 0 9.3-40.4h0a104 104 0 0 0-22.7 34.5C50 119 47.5 133.3 47.5 146"/><path d="M56.7 165.2c11.8-11.7 22.7-27 31-45.4A130 130 0 0 0 99.6 66h0a139 139 0 0 0-30.3 45.4 146 146 0 0 0-12.6 53.8"/><path d="M70.2 192.2c16-16 31-37 42-62.2 11-25.3 17-51.3 17-73.2h-1c-16 16-31 37-42 62.2a185 185 0 0 0-16 73.2"/><path d="M88.7 227.5c22-21 42-49.6 57.2-84a267 267 0 0 0 22.7-98.4l-1 .8a264 264 0 0 0-57 84 251 251 0 0 0-21.9 97.6m80.6-120.8v73l51.4-36.3zm248 88.6H387l-32.2-56v56h-31.4V90.8h30.4l32.2 56v-56h31.4zM260 88.3a54 54 0 0 0-48.8 30l25.3 18c2.8-10.2 12.3-17.6 23.5-17.6 13.3 0 24.5 10.7 24.5 24.5 0 13.3-11 24.6-24.5 24.6-11 0-20.2-7.2-23.2-17l-25.3 17.8C220.7 186 238.8 198 260 198c30.2 0 54.7-24.5 54.7-54.7a55 55 0 0 0-54.7-55z"/></svg>',
      "friendlyName": "SBS On Demand (AU)",
      "className": "sbsOnDemandButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.sbs.ondemand.tv",
          "androidName": "com.sbs.ondemand.tv",
          "adbLaunchCommand": "adb shell am start com.sbs.ondemand.tv/.MainActivity",
      },
      "apple-tv": {
          "appName": "SBS On Demand",
      },
      "chromecast": {
          "appName": "com.sbs.ondemand.tv",
          "androidName": "com.sbs.ondemand.tv",
          "adbLaunchCommand": "adb shell am start com.sbs.ondemand.tv/.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.sbs.ondemand.tv",
          "androidName": "com.sbs.ondemand.tv",
          "adbLaunchCommand": "adb shell am start com.sbs.ondemand.tv/.MainActivity",
      },
      "xiaomi": {
          "appName": "com.sbs.ondemand.tv",
          "androidName": "com.sbs.ondemand.tv",
          "adbLaunchCommand": "adb shell am start com.sbs.ondemand.tv/.MainActivity",
      },
  },


  "seven-plus": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" height="192.45" viewBox="0 0 21.345 7.869" width="519.615" fill="#ed1c24" fill-rule="evenodd"><path d="M7.393 2.828L5.777.132 1.335 7.737h3.252zM5.56.132H.133l1.584 2.696H3.99zm7.965 5.265h-.195c-.293 0-.423-.135-.423-.439V.364c0-.128-.099-.232-.22-.232h-.304c-.124 0-.228.106-.228.232v4.662c0 .677.367 1.05 1.032 1.05h.321c.119 0 .245-.084.245-.241v-.206c0-.13-.1-.232-.228-.232M17.292 1.8h-.304c-.124 0-.228.106-.228.232v2.125c0 .794-.406 1.231-1.142 1.231s-1.142-.437-1.142-1.231V2.032c0-.126-.105-.232-.228-.232h-.305c-.117 0-.22.108-.22.232v2.229c0 1.103.635 1.816 1.895 1.816s1.895-.713 1.895-1.816V2.032c0-.124-.103-.232-.22-.232m2.676 1.748l-.735-.146c-.522-.106-.592-.308-.592-.492 0-.329.334-.559.812-.559a1.66 1.66 0 0 1 1.038.36c.117.095.248.093.354-.003l.146-.148c.047-.043.073-.102.073-.167s-.031-.137-.082-.182c-.341-.327-.897-.523-1.487-.523-.941 0-1.624.525-1.624 1.248 0 .777.627 1.055 1.152 1.152l.685.129c.515.1.735.278.735.595 0 .299-.308.602-.897.602a1.58 1.58 0 0 1-.73-.179c-.156-.083-.294-.183-.424-.307-.067-.06-.131-.089-.196-.089a.22.22 0 0 0-.151.062l-.159.136a.25.25 0 0 0-.094.187c-.003.09.04.183.123.261.229.221.743.592 1.606.592.526 0 .967-.145 1.275-.419.265-.236.417-.56.417-.889 0-.665-.395-1.053-1.244-1.22M9.347 4.71l1.07-.653c.156-.095.156-.251 0-.346l-1.07-.653c-.156-.095-.284-.022-.284.164v1.325c0 .185.128.259.284.164"/><path d="M7.476 3.885v3.62c0 .126.105.232.228.232H8c.124 0 .228-.106.228-.232v-3.62c0-.79.629-1.43 1.405-1.43s1.405.64 1.405 1.43-.629 1.426-1.405 1.426c-.451 0-.852-.216-1.109-.551v1.006a2.12 2.12 0 0 0 1.109.312c1.192 0 2.158-.979 2.158-2.192s-.966-2.196-2.158-2.196-2.158.983-2.158 2.196z"/></svg>',
      "friendlyName": "7plus",
      "className": "sevenPlusButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.swm.live",
          "androidName": "com.swm.live",
          "adbLaunchCommand": "adb shell am start -c android.intent.category.LEANBACK_LAUNCHER -n com.swm.live/au.com.seven.inferno.ui.tv.setup.SetupTvActivity",
      },
      "apple-tv": {
          "appName": "7plus",
      },
      "chromecast": {
          "appName": "com.swm.live",
          "androidName": "com.swm.live",
          "adbLaunchCommand": "adb shell am start -c android.intent.category.LEANBACK_LAUNCHER -n com.swm.live/au.com.seven.inferno.ui.tv.setup.SetupTvActivity",
      },
      "nvidia-shield": {
          "appName": "com.swm.live",
          "androidName": "com.swm.live",
          "adbLaunchCommand": "adb shell am start -c android.intent.category.LEANBACK_LAUNCHER -n com.swm.live/au.com.seven.inferno.ui.tv.setup.SetupTvActivity",
      },
      "xiaomi": {
          "appName": "com.swm.live",
          "androidName": "com.swm.live",
          "adbLaunchCommand": "adb shell am start -c android.intent.category.LEANBACK_LAUNCHER -n com.swm.live/au.com.seven.inferno.ui.tv.setup.SetupTvActivity",
      },
   },


  "seznam": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="850" height="207" viewBox="0 0 850 207" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M320 133h0" fill="none"/><g stroke="none"><path d="M92 33l-14 3c-3 0-6 1-9 2-3 0-6 1-9 2-2 1-5 2-8 3-5 2-9 4-14 8-2 2-5 4-6 7-2 2-3 4-4 6s-2 4-2 6c0 7 4 13 9 17 2 1 3 2 5 4 5 3 11 6 17 9 5 3 11 5 17 8l18 6c1 1 3 1 5 2 5 2 10 3 16 5 3 1 6 2 10 4 3 1 7 3 10 5l5 5c1 3 2 5 2 7 0 3-1 5-2 7-3 5-9 9-15 11l-25 9c-5 1-10 3-15 4s-10 3-15 4l-15 3c-2 1-5 1-8 2-2 0-4 1-5 1-4 1-7 2-11 2l-12 3c-1 0-3 1-4 1s-5 1-2 1c4 0 15-1 38-4 9-2 17-3 26-4 10-2 21-4 31-7 3 0 6-1 9-2 2 0 4-1 6-1 8-3 21-7 24-9 12-5 20-9 24-18 1-3 1-7 1-11 0-3-1-6-3-9s-4-5-6-7c-5-4-9-7-15-10-1 0-3-1-4-2-2-1-4-2-6-2-2-1-5-2-8-3-7-3-14-5-21-7-4-2-8-3-12-5-2 0-4-1-5-2l-6-3c-2-1-6-3-5-7 1-2 3-3 5-4 2 0 4-1 6-1 6-2 12-3 18-4 2-1 4-1 5-1 5-1 10-2 14-4 4-1 9-4 10-8 2-6 0-13-3-18-1-1-3-3-4-5-2-3-4-5-6-7 0-1-1-1-2-1-1 1-5 4-30 9" fill="#c00"/><path d="M483 86l1-1h0l1-1h0v-1h0l1-1h0v-1l1-1h0l1-2 1-1v-1h0 1 0 0l1 1v1l1 1v1l1 2 1 2v1h0l1 1v1h0v1h0l1 1h0 0v1h0 0-1v1h0-1-1 0-1l-5 1h-1 0-1-1 0-1-1v-1h-1 0 0v-1h0v-1h1v-1h0l1-1h0 0v-1h0zm-31 23l1 1c3 0 4 2 2 4-1 1-1 2-2 3h0c-1 1-1 2-1 3h0c0 1 1 3 2 4 1 2 2 4 4 5 0 1 3-4 3-5l4-4c1-2 3-4 5-5s4-2 7-2h7c5-1 9-1 14-2 2 0 5 0 7 1 1 1 2 2 4 3 1 2 3 4 4 5 2 2 3 4 5 6 1 1 3 2 4 3l1 1c2 1 4-1 4-3 1-4-1-7-3-10-1-2-1-3-2-5s-2-4 0-5c1-1 2-1 4-1 1-1 3-1 4-2 3 0 6-1 9-1 2-1 4-2 6 0s0 5-1 7c-1 4-2 7-3 11 0 3 1 6 3 9 2 2 4 3 7 2 1-1 3-3 4-5 1-4 2-8 4-12 1-3 2-7 3-10s2-5 3-8c1-1 2-3 3-4 0-2 0-4 2-4 1-1 3 1 4 3 2 1 3 3 4 5 2 3 3 5 6 7 4 2 8-3 10-6 2-2 3-4 5-5 2-2 4-4 5-6 2-2 3-4 5-4s2 2 2 3c1 6 1 12 2 19 1 2 1 4 1 6l1 4c0 1 1 3 1 4 1 3 1 7 2 10 1 2 2 5 5 7 2 2 7 1 9-2v-2c1-1 0-3 0-4 0-6-2-11-2-17 0-2 0-4 1-6 0-6 1-11 1-16 0-7 1-13-1-20-1-1-1-3-2-5-1-1-2-3-3-4-2-1-3-2-4-3-2-1-4-1-5-2-4 0-9 2-12 5-2 2-5 4-7 6-4 5-8 9-12 14-1 1-2 3-4 3-3 0-4-4-5-6s-1-3-2-5-3-5-4-7c0-2-1-4-3-6-1-1-3-2-6-3-1-1-4-1-5 0-2 1-2 4-2 6v6c-1 4-1 8-2 13-1 2-1 4-3 5-1 1-3 1-4 1h-4-8-7-7c-2 1-5 1-7 0s-3-3-4-4c-1-3-2-5-4-7l-3-6-6-9c-1-2-2-4-4-6-1-1-2-3-4-4-1 0-3 1-3 2-1 1 0 2-1 4 0 1 0 2-1 3l-3 6c-4 6-8 14-11 20-1 2-2 3-3 4-1 2-1 3-3 4-2 0-4 0-6 1-3 0-3 2-4 4v6c-1 1-1 3-1 4zm-259 38c-2 1-4 1-6 1s-3-2-4-4-2-5-2-7c-1-3-1-5-1-7s0-3 2-3c1-2 4-1 5-2 2-1 3-3 3-4 0-3 0-6-1-9 0-8 1-15 0-22-1-2-1-4-3-4-4-1-4-5-4-8 0-2 0-4 1-6 1-3 4-4 6-5 3-1 5-1 7-2 3-1 6-1 8-1 3-1 5-1 8-2 3 0 5 0 8-1h7c3-1 6-1 9-1h8 7c3 0 6 1 8 1 4 0 8 1 11 3s6 7 2 10c-3 4-9 3-13 3h-11c-3 0-7 1-10 1s-6 0-10 1c-3 0-6 0-10 1h-8c-2 1-4 1-6 3-1 1-1 3-1 5 1 3 6 2 8 2 6 0 11-1 16-2h8 9c3 0 5 0 8 1 3 0 6 2 9 3 4 1 3 6 3 9-1 2-1 3-3 4-3 2-8 1-11 1-4 1-8 1-11 1-6 1-11 1-17 2-4 0-7 1-11 1-2 1-5 0-7 2h0 0l-1 1h0c0 2-2 6 0 8h0 1 5c3-1 6-1 9-1 6 0 11-1 17-1 3-1 7-1 11-1 5-1 11-1 16-1 3 0 7 0 10-2 3-1 6-4 10-6s9-4 14-6c5-3 10-6 16-8 4-2 9-4 13-6l6-3c2-1 5-2 5-5-1-1-2-1-3-1-5-1-15 0-21 1-11 2-12 3-15 1-2-3-2-6-1-9 0-3 1-7 2-8 3-4 13-5 18-5h7 10 9c3 1 7 1 10 2 1 0 2 0 3 1 3 1 6 3 8 6 2 2 3 4 3 6v3c0 1 0 2-1 3h0c0 1-1 2-2 3-4 3-9 4-14 6-3 1-5 2-7 3-7 3-13 6-20 9-5 2-10 4-16 7-1 1-3 2-4 3-1 2 1 2 2 2h4c4-1 8-1 12-1 4-1 8-1 13-2 3 0 7-1 11-1 4-1 8-1 13-1 4 0 8 0 12 1h1 1c2 0 3 0 4-2 2-3 3-6 4-9 1-4 2-8 4-12v-1c2-5 4-9 5-13 1-2 2-4 2-6 1-1 1-2 2-4s3-3 5-1c1 1 3 3 4 5s2 4 2 6c1 2 0 4-1 6 0 2-1 4-2 6-1 5 4 9 7 11s7 3 10 4 6 3 8 3 4 1 5 0c3-2 4-5 4-8 1-3 2-6 3-10 0-2 1-5 1-8 0-2 0-4 1-6 0-3-1-6-1-8s1-5 2-6c2-2 5-1 6 1v1c1 1 2 2 2 4 1 3 2 6 2 9v7c1 8 0 16-1 25-1 4-2 8-3 13 0 2 0 5-2 7 0 1-1 3-2 4l-2 2c-2 1-5 1-8 1-4-1-7-2-10-3s-5-1-7-2l-6-3c-2-2-4-3-6-4s-3-3-5-4c-1-2-2-4-4-5-1-2-2-2-3 0-1 1-1 3-1 4-1 3-2 5-2 8-1 2-4 9-8 6-1-1-2-2-4-2s-3 0-5 1c-2 0-4 0-6 1-3 0-7 1-10 2-2 0-5 1-7 1s-5 1-7 1-5 1-7 1c-4 1-7 1-11 1-3 1-6 1-9 1-2 1-4 1-7 1-4 1-8 1-12 1-6 0-13 1-19-1-1 0-3 0-4-1s0-2-1-3h0 0 0 0-1 0 0-1 0l-1 1h0v1c-1 4-6 5-10 6l-65 7m606-32c-9 1-17 2-25 1-3 0-8 0-10-2-7-4 17-12 20-13 8-3 25-8 25-8s16-4 17-13c0-10-10-14-19-17-3-1-6-1-10-2h-7c-4 0-9 0-13 1-4 0-14 1-15 6-1 3-4 9-2 11 3 3 8 2 12 2 4-1 9-2 14-2 4-1 8-1 11 1 4 3-6 7-8 7-7 3-14 6-22 9-7 2-13 5-20 8-3 2-6 4-9 5l-1-1-9 1-8 1c-6 0-12 1-17 1-3 0-7 0-10-2-5-5-2-11 1-15 4-5 9-9 14-12 3-2 7-4 11-5 3 0 5-1 8-1 0 0 1 1 1 2 0 0 7-2 7-3 2-1 5-3 5-5 0-3-2-6-5-7-2-2-5-3-8-3-4 0-7 0-10 1-3 0-5 1-7 1-4 1-7 3-11 5s-8 5-12 9c-2 2-3 4-5 6l-3 9c-3 8-2 18 2 26 2 5 6 9 11 13 7 3 15 5 22 3 3 0 6-1 9-2s6-2 8-4c1 0 7-3 7-3 1 1 2 3 3 4l3 3c3 2 5 2 8 3 8 1 16 1 23 1 6 0 12 0 18-1 4 0 8-1 12-1 10-1 18-3 29-8 4-2 7-4 10-8-1 0-2-1-4-1-8-4-16-4-25-3-4 1-7 1-11 2h-5m-132 9c0-2 0-3-1-4-1-3-4-6-7-7-3 0-6 0-8 2-2 1-3 3-4 4-1 3-1 8 1 11 4 4 11 4 15 1 2-2 4-5 4-7" fill="#1a1919"/></g></svg>',
      "friendlyName": "Seznam.cz",
      "className": "seznamButton",
      "deviceFamily": ["chromecast", "nvidia-shield", "xiaomi"],
      "chromecast": {
          "appName": "cz.seznam.seznam",
          "androidName": "cz.seznam.seznam",
          "adbLaunchCommand": "adb shell am start -n cz.seznam.seznam/cz.seznam.seznam.MainActivity",
      },
      "nvidia-shield": {
          "appName": "cz.seznam.seznam",
          "androidName": "cz.seznam.seznam",
          "adbLaunchCommand": "adb shell am start -n cz.seznam.seznam/cz.seznam.seznam.MainActivity",
      },
      "xiaomi": {
          "appName": "cz.seznam.seznam",
          "androidName": "cz.seznam.seznam",
          "adbLaunchCommand": "adb shell am start -n cz.seznam.seznam/cz.seznam.seznam.MainActivity",
      },
   },


  "shophq": {
      "button": "ShopHQ",
      "friendlyName": "ShopHQ",
      "className": "shopHQButton",
      "deviceFamily": ["amazon-fire", "apple-tv"],
      "amazon-fire": {
          "appName": "com.amazon.rialto.cordova.webapp.webappb656e5788fd9475ea16e928d2c034d68",
          "androidName": "com.amazon.rialto.cordova.webapp.webappb656e5788fd9475ea16e928d2c034d68",
          "adbLaunchCommand": "adb shell am start -n com.amazon.rialto.cordova.webapp.webappb656e5788fd9475ea16e928d2c034d68/.MainActivity",
      },
      "apple-tv": {
          "appName": "ShopHQ",
      },
   },


  "showtime": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 500.201 179.174" width="500.201" height="179.174" xml:space="preserve"><g fill="#FF0101"><path d="M126.833 90.834c0-35.896 13.283-58.527 29.142-60.92C140.117 10.423 113.63 0 89.58 0 63.093 0 39.305 11.5 22.92 29.751c15.635 3.103 20.948 16.226 20.948 36.524H24.743c0-11.986-2.494-18.19-9.592-18.19-3.186 0-5.659 1.622-7.119 4.38-.203.446-.427.913-.628 1.38-.549 1.542-.853 3.325-.853 5.292 0 24.823 40.763 23.586 40.763 61.752 0 14.887-11.417 28.777-24.274 28.777 16.893 18.455 39.972 29.508 66.539 29.508 25.836 0 49.098-10.932 65.442-28.433-15.067-3.793-28.188-25.474-28.188-59.907m-8.519 59.137H97.811V98.988H75.665v50.983H55.122V32.307h20.503v47.394h22.186V32.307h20.503v117.664z"/><path d="M17.708 131.243c5.72 0 9.774-5.029 9.774-12.35 0-15.19-13.264-18.11-27.479-30.947-.203 25.98 7.848 43.297 17.705 43.297M147.208 88.935c0-19.813 5.76-39.627 16.285-39.627 12.513 0 15.677 30.623 15.677 40.295 0 21.233-6.692 40.377-15.677 40.377-10.79.002-16.285-20.175-16.285-41.045M351.967 33.94H265.534l-8.193 67.208h-.324L247.85 33.94h-18.801l-9.958 67.21h-.323l-7.402-67.21h-18.962L207.675 148.4h18.313l10.302-72.5h.305l9.979 72.5h18.961l12.654-96.776h17.725V148.4h20.909V51.624h19.124V148.4h20.909V33.94h-4.889zM367.113 33.94h27.823l9.309 58.67h.324l9.815-58.67h27.154V148.4H422.9V64.482h-.324L408.422 148.4h-11.56L382.87 64.482h-.305V148.4h-15.452l.001-114.46zM451.813 33.94h47.272v17.684h-26.364v29.244h19.429v18.658h-19.429v31.188H500.2V148.4h-48.388V33.94z"/></g></svg>',
      "friendlyName": "Showtime",
      "className": "showtimeButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.showtime.standalone",
          "androidName": "com.showtime.standalone",
          "adbLaunchCommand": "adb shell am start -n com.showtime.standalone/com.showtime.showtimeanytime.activities.IntroActivity",
      },
      "apple-tv": {
          "appName": "Showtime",
      },
      "chromecast": {
          "appName": "com.showtime.standalone",
          "androidName": "com.showtime.standalone",
          "adbLaunchCommand": "adb shell am start -n com.showtime.standalone/com.showtime.showtimeanytime.activities.IntroActivity",
      },
      "nvidia-shield": {
          "appName": "com.showtime.standalone",
          "androidName": "com.showtime.standalone",
          "adbLaunchCommand": "adb shell am start -n com.showtime.standalone/com.showtime.showtimeanytime.activities.IntroActivity",
      },
      "xiaomi": {
          "appName": "com.showtime.standalone",
          "androidName": "com.showtime.standalone",
          "adbLaunchCommand": "adb shell am start -n com.showtime.standalone/com.showtime.showtimeanytime.activities.IntroActivity",
      },
   },


  "siriusxm": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="580" height="111" viewBox="0 0 580 111" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><g fill="#00adee" fill-rule="nonzero"><path d="M555 8.3c9.4 13.8 14.4 30 14.4 46.6s-5 33-14.5 46.8c-.8 1.2-1 2.6-.8 4 .2 1.3 1 2.6 2.2 3.4 2.4 1.6 5.7 1 7.4-1.4C574.3 92 580 74 580 55a92 92 0 0 0-16.3-52.6c-.8-1.2-2-2-3.4-2.2-1.3-.3-2.8 0-4 .8-2.4 1.7-3 5-1.4 7.4m-16.7 86.2c2.3 1.7 5.7 1.2 7.4-1a63 63 0 0 0 12.8-38.4c0-14-4.5-27.4-13-38.6-1.8-2.3-5-2.8-7.4-1s-2.8 5-1 7.4c7 9.3 10.8 20.5 10.8 32.2a53 53 0 0 1-10.6 32 5 5 0 0 0-1.1 3.9c.2 1.4 1 2.6 2 3.5m-18.7-13c2.3 1.8 5.6 1.4 7.4-.8a42 42 0 0 0 9.2-26 41 41 0 0 0-8.8-25.6c-1.3-1.6-3.6-2.4-5.6-1.8s-3.6 2.3-4 4.5a7 7 0 0 0 1 4c4.3 5.4 6.6 12 6.6 19s-2.4 14-6.8 19.3c-2 2.3-1.5 5.6.8 7.5M25 101.7a82 82 0 0 1-14.5-46.8c0-16.7 5-32.8 14.4-46.6.8-1.2 1-2.6.8-4s-1-2.6-2.2-3.4c-2.4-1.6-5.7-1-7.3 1.4C5.6 17.8 0 36.2 0 55a93 93 0 0 0 16.4 52.8c1 1.6 2.8 2.4 4.7 2.3 2-.2 3.6-1.3 4.4-3s.7-3.7-.4-5.3 1.6 2.4 0 0c0 0 1.6 2.4 0 0"/><path d="M43 23c1.8-2.3 1.3-5.7-1-7.4-2.3-1.8-5.6-1.3-7.4 1C26 27.7 21.6 41 21.6 55a63 63 0 0 0 12.8 38.4c1.7 2.3 5 2.8 7.4 1 1-1 2-2 2-3.5a5 5 0 0 0-1.1-3.9c-7-9.3-10.6-20.5-10.6-32 0-11.8 3.8-23 10.8-32.3m1 32c0 9.5 3.2 18.6 9 26 1.8 2.3 5.2 2.6 7.4.8 2.3-1.8 2.7-5.2.8-7.4-4.4-5.5-6.8-12.3-6.7-19.4-.1-7 2.2-13.6 6.5-19 1.8-2.3 1.4-5.6-1-7.4s-5.6-1.4-7.4 1C47 36.6 44 45.5 44 54.8c0 0 0-9.3 0 0 0 0 0-9.3 0 0"/></g><path d="M95 66.6c0 2.5 1 4.3 2.6 5.6 1.5 1.2 3.6 2 6 2 3.8 0 7.7-1.2 7.7-5.5 0-9.8-37.4-2-37.4-25.7 0-15.6 16.2-20.2 29-20.2 13.3 0 29 3 30.4 19.3h-22c-.2-2-1-3.4-2.3-4.5-1.3-1-3-1.5-5-1.5-4.2 0-7 1.3-7 4.3C97 49 135.6 43 135.6 66c0 12.7-10.5 21.4-33 21.4-14 0-29.4-4.3-30.7-20.8h23zm44.6-43.8h19.7v9.4h-19.7zm0 13.5h19.7V86h-19.7zm25 0h18v10h.2c2.7-7.8 7.6-11.5 15.2-11.5 1 0 1.8.2 2.6.3V55c-1.3-.2-2.7-.6-4-.6-8 0-12 3.8-12 14.5V86h-19.7zm40-13.5h19.7v9.4h-19.7zm0 13.5h19.7V86h-19.7zM283.4 86H265v-7.3c-5 6.8-9.8 8.7-18 8.7-10.8 0-17.8-6.6-17.8-21V36.3H249V63c0 6.8 2.4 9 7 9 5.7 0 7.5-4.3 7.5-12v-24h19.7V86zm21-15.5c0 2 .8 3.5 2 4.6 1.2 1 3 1.5 4.8 1.5 3 0 6.3-1 6.3-4.5 0-8-30.5-1.6-30.5-20.8 0-12.7 13.2-16.4 23.6-16.4 10.8 0 23.5 2.4 24.6 15.6h-18c-.2-1.6-.8-2.7-2-3.6-1-.8-2.4-1.2-4-1.2-3.5 0-5.6 1-5.6 3.5 0 7 31.4 2.3 31.4 21 0 10.3-8.6 17.3-26.8 17.3-11.4 0-24-3.5-25-17h18.8zm80.5-17l21 32.2h-27L370.2 68l-9 17.6h-27l22-32-20.2-29.2h27l7.7 15.3 8-15.3h26.7zm22.6-29h22.3v9c3-4.7 8.6-11 17.3-11 10.2 0 16.3 4.7 19.2 11.2 5.3-7.3 10-11.2 18.7-11.2 15.4 0 23 10 23 26.8v36.2h-24.3V54.4c0-9-.6-12.6-7-12.6-6.8.1-6.8 6.2-6.8 13.6v30.2h-24.2V54.4c0-9-.6-12.4-7-12.6-6.7-.1-7 6.2-7 13.6v30.2h-24.3z" fill="#005480" fill-rule="nonzero"/></svg>',
      "friendlyName": "SiriusXM",
      "className": "siriusXMButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.amazon.rialto.cordova.webapp.webapp7b743ed0e02e48178fb2bf55dbb38517",
          "androidName": "com.amazon.rialto.cordova.webapp.webapp7b743ed0e02e48178fb2bf55dbb38517",
          "adbLaunchCommand": "adb shell am start -n com.amazon.rialto.cordova.webapp.webapp7b743ed0e02e48178fb2bf55dbb38517/com.siriusxm.tvmodule.ui.splash.SplashActivity",
      },
      "apple-tv": {
          "appName": "SiriusXM Radio for TV",
      },
      "chromecast": {
          "appName": "tv.accedo.siriusxm.app",
          "androidName": "tv.accedo.siriusxm.app",
          "adbLaunchCommand": "adb shell am start -n tv.accedo.siriusxm.app/com.siriusxm.tvmodule.ui.splash.SplashActivity",
      },
      "nvidia-shield": {
          "appName": "tv.accedo.siriusxm.app",
          "androidName": "tv.accedo.siriusxm.app",
          "adbLaunchCommand": "adb shell am start -n tv.accedo.siriusxm.app/com.siriusxm.tvmodule.ui.splash.SplashActivity",
      },
      "xiaomi": {
          "appName": "tv.accedo.siriusxm.app",
          "androidName": "tv.accedo.siriusxm.app",
          "adbLaunchCommand": "adb shell am start -n tv.accedo.siriusxm.app/com.siriusxm.tvmodule.ui.splash.SplashActivity",
      },
   },


  "sky-news" : {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 1060.4 250" xml:space="preserve"><path d="M1043.7 0H416.1v250h627.6c9.2 0 16.7-7.5 16.7-16.6V16.7c0-9.2-7.6-16.7-16.7-16.7" style="fill:#ab0000"/><path d="M281.3 222.4c2.7 1.4 8.2 3 15.1 3.2 11.8.2 18.3-4.3 23.1-14.9l63.7-142.1c-2.6-1.4-8.4-3-13.2-3.1-8.2-.2-19.2 1.5-26.2 18.3l-20.6 48.7-40.5-65.9c-2.6-.8-9-1.9-13.6-1.9-14.3 0-22.2 5.3-30.5 14.3l-39.3 43 31.6 49.8c5.8 9.1 13.5 13.7 26.1 13.7 8.2 0 15-1.9 18.2-3.3L237 124.6 264 96l44.3 69.5-27 56.9m-83.6-53.8c0 10.5-4.1 16.5-24.6 16.5l-7.3-.5v-139c0-10.5 3.6-21.6 24.2-21.6l7.6.8v143.8m-42.1-20.9c0 19.5-12.8 33.8-38.7 36.6-18.8 2-46-.4-58.9-1.9l-.9-6.8c0-17.1 9.2-21 17.9-21 9 0 23.2 1.5 33.7 1.5 11.6 0 15.1-3.9 15.1-7.7 0-4.9-4.7-6.9-13.7-8.7L85.4 135C64.9 131.1 54 116.9 54 101.9c0-18.2 12.9-33.6 38.4-36.4 19.2-2.1 42.6.2 55.5 1.9l.7 6.6c0 17-9 20.7-17.6 20.7-6.6 0-17-1.2-28.8-1.2-12 0-17 3.3-17 7.4 0 4.2 4.8 6 12.3 7.3l23.5 4.4c24.2 4.5 34.5 18.2 34.5 35.1"/><path d="M1043.7 0H416.1v129.7l644.3-26.2V16.8c0-9.4-7.5-16.8-16.7-16.8" style="fill:#cb0002"/><path style="fill:#fff;" d="M910 177.8c-1.2-9.7 1.9-14.8 7.1-14.8 5.4 0 19 6.3 38.2 6.3 20.4 0 28.2-7.5 28.2-17.3 0-6.6-2.9-12.2-21.4-17.3l-20.9-5.8c-22.4-6.1-31.4-17.3-31.4-31.4 0-17 13.6-32.8 44.8-32.8 14.1 0 31.6 3.4 42.1 7.5 1 9.5-1.9 14.6-6.8 14.6s-17.8-5.8-35-5.8c-19 0-26 6.8-26 15.8 0 5.8 2.7 11.2 19.7 16.1l21.2 5.8c23.4 6.8 33.1 17.8 33.1 32.8 0 18-14.3 34.1-47.9 34.1-15.4 0-34.1-3.4-45-7.8M894.4 69.1l-31.1 106.7c-1.9 6.6-6.8 8.3-13.6 8.3-3.9 0-7.8-.7-11.2-1.7l-29.9-94.9-28.2 88.3c-2.2 6.8-7.3 8.3-13.6 8.3-3.9 0-8-.7-11.4-1.7L722.3 69.1c2.7-1.5 7.5-2.9 11.9-2.9 5.1 0 8 1.7 9.5 6.8l23.8 89.5h.2l29.4-93.4c3.2-1.7 7.5-2.9 11.9-2.9 7.3 0 11.2 1.9 13.4 8.8l27.2 87.5h.3L873 73c1.5-5.1 4.1-6.8 9.5-6.8 4.4 0 9.3 1.4 11.9 2.9M710.2 132.8h-90.5c2.9 22.6 18.7 35.5 42.1 35.5 10 0 17.8-2.2 25.1-4.6 4.9-1.7 7.5-2.7 9.5-2.7 4.9 0 8.5 4.6 7.3 15.1-10.2 4.6-26 9.5-42.5 9.5-36.2 0-61.1-24.6-61.1-60.8 0-34.8 26-60.1 57.9-60.1 35.8 0 53.3 28.4 53.3 56.2-.1 3.6-.4 7.5-1.1 11.9M619.8 117h72.7c-.7-19.9-13.6-35.8-34.5-35.8-18.5 0-35.1 12.4-38.2 35.8M578 114.3v62.5c0 4.6-2.4 7.3-10 7.3-3.2 0-6.8-.5-8.8-1v-66.4c0-23.8-11.9-35.3-29.2-35.3-13.9 0-28.7 9.7-34.8 20.9v74.4c0 4.6-2.4 7.3-10 7.3-3.4 0-7.1-.5-8.8-1V67.4c1.7-.5 5.4-1.2 8.8-1.2 7.5 0 10 2.9 10 7.3v10c8.5-10.2 21.4-18.7 38.9-18.7 24-.1 43.9 15.2 43.9 49.5"/><g><path style="fill:#fff;" d="M110.1 139.9c3.1.6 5.6 1.2 7.7 2h.1c-2.1-.8-4.7-1.4-7.8-2m18.9-25.3c.1 0 .1 0 .2.1 0-.1-.1-.1-.2-.1m-.4-.2c.1 0 .2.1.2.1-.1 0-.2 0-.2-.1m-.6-.1c.1 0 .2.1.3.1 0 0-.2-.1-.3-.1m-.5-.2c.1 0 .3.1.4.1-.1 0-.3 0-.4-.1m-1.1-.2c.3.1.7.2 1 .2-.3-.1-.6-.2-1-.2m-.5-.2c.2.1.3.1.4.1-.1 0-.2 0-.4-.1m-.5-.1c.2 0 .3.1.4.1-.1-.1-.2-.1-.4-.1m-2.2-.5c.7.2 1.4.3 2.1.5-.6-.2-1.3-.4-2.1-.5m-.5-.1c.2 0 .3.1.5.1-.2-.1-.3-.1-.5-.1m-.5-.1c.1 0 .3.1.4.1-.1-.1-.3-.1-.4-.1m-.5-.2c.1 0 .3.1.4.1-.2 0-.3 0-.4-.1m-20-19.1c-11.6.1-16.4 3.4-16.4 7.4 0 4.3 4.8 6 12.3 7.3l23.5 4.4c.2 0 .3.1.5.1-.2-.1-.4-.1-.5-.1l-23.5-4.4c-7.5-1.3-12.2-3.1-12.2-7.3-.1-4.1 4.7-7.3 16.3-7.4m45.7-26.1c.2 0 .3 0 .5.1l.7 6.6-.7-6.6c-.2-.1-.3-.1-.5-.1m-55-1.8C67 68.5 54.1 83.8 54.1 102c0-18.2 12.9-33.5 38.3-36.3m16.9-.8c-5.2 0-10.4.2-15.3.7 4.9-.5 10.1-.7 15.3-.7m.1 0h.3-.3"/><path style="fill:#3c3a38;" d="M109.4 64.9c-5.3 0-10.5.2-15.4.7-.5.1-1 .1-1.5.2-25.5 2.7-38.4 18-38.4 36.3 0 15 10.9 29.2 31.4 33.1l24.6 4.7c3.1.6 5.7 1.2 7.8 2l37-1.5c-2.3-11.5-10.4-20.9-25.6-25.7-.1 0-.1 0-.2-.1-.1 0-.2-.1-.2-.1-.1 0-.2-.1-.2-.1s-.2 0-.2-.1c-.1 0-.2-.1-.3-.1h-.1c-.2 0-.3-.1-.4-.1h-.1c-.3-.1-.6-.2-1-.2h-.1c-.1 0-.3-.1-.4-.1h-.1c-.1-.1-.3-.1-.4-.1h-.1c-.7-.2-1.4-.3-2.1-.5h-.1c-.2 0-.3-.1-.5-.1h-.1c-.1 0-.3-.1-.4-.1h-.2c-.1 0-.3-.1-.4-.1h-.1c-.2-.1-.3-.1-.5-.1l-23.5-4.4c-7.5-1.3-12.3-3.1-12.3-7.3 0-4 4.9-7.2 16.4-7.4h.6c11.8 0 22.1 1.3 28.8 1.3 8.7 0 17.6-3.7 17.6-20.7l-.7-6.6c-.2 0-.3 0-.5-.1-9.2-1.1-23.4-2.6-37.7-2.6h-.4"/><path style="fill:#fff;" d="m237 124.6 8 12.1-8-12.1m32.1-60c-14.3 0-22.2 5.3-30.5 14.3l-39.3 43 39.3-43c8.2-9 16.2-14.3 30.5-14.3 4.7 0 11 1.1 13.7 1.9l40.5 65.9 20.6-48.7c6.8-16.1 17.2-18.3 25.3-18.3h.9c4.8.1 10.6 1.7 13.2 3.1l-28.5 63.6 28.5-63.6c-2.6-1.4-8.4-3-13.2-3.1h-.9c-8.1 0-18.5 2.1-25.3 18.3l-20.6 48.7-40.5-65.9c-2.7-.7-9.1-1.9-13.7-1.9"/><path style="fill:#3c3a38;" d="M269.1 64.6c-14.3 0-22.2 5.3-30.5 14.3l-39.3 43 10.3 16.2 35.5-1.5-8-12.1L264 96l24.8 39 65.9-2.7 28.5-63.6c-2.6-1.4-8.4-3-13.2-3.1h-.9c-8.1 0-18.5 2.1-25.3 18.3l-20.6 48.7-40.5-65.9c-2.6-.9-9-2.1-13.6-2.1M190 24.1c-20.7 0-24.2 11-24.2 21.6V140l31.9-1.3V24.9l-7.7-.8"/></g></svg>',
      "friendlyName": "Sky News",
      "className": "skyNewsButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.onemainstream.skynews.android",
          "androidName": "com.onemainstream.skynews.android",
      },
      "apple-tv": {
          "appName": "Sky News",
      },
      "chromecast": {
          "appName": "com.sky.news.androidtv",
          "androidName": "com.sky.news.androidtv",
      },
      "nvidia-shield": {
          "appName": "com.sky.news.androidtv",
          "androidName": "com.sky.news.androidtv",
      },
      "xiaomi": {
          "appName": "com.sky.news.androidtv",
          "androidName": "com.sky.news.androidtv",
      },
   },


  "sky-showtime": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="2667" height="617" viewBox="0 0 2667 617" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M1216.6 1c-63.3 8-120.5 33-167 73l-26 26.3c0 .6 2.4 1.6 5.5 2a95 95 0 0 1 32.4 16.8c19.6 17.3 29.7 46 32.2 91.5l1 16.4h-33-32.8v-9a119 119 0 0 0-4.6-32c-2.4-8-9.8-17.2-16.3-20a41 41 0 0 0-23.5.2c-12.6 5.2-21.8 28-18.5 46 4.8 25.6 17.2 40 61.6 72.3 36.8 26.5 53.5 44 65.3 68.4 9.5 19.3 12.2 30.6 13 54.6.6 17.5.4 21.5-2.2 31.4-9.6 38.6-41 71-71.8 74.2-4 .4-7.4 1.2-7.6 2-1 1.3 21.4 23 34.6 33.6 58.7 46.8 128.3 69.7 204 67.2 66.4-2.3 130.2-25.7 181.4-66.8l34-31.5c0-.5-3.5-2.2-7.8-3.8a106 106 0 0 1-48-40.4c-25.4-37.6-38-85.8-39.8-150-2.4-90 18-162.7 56.2-200 10.6-10.3 26.8-19.7 36.4-21.3 3-.6 5.6-1.2 5.6-1.8a107 107 0 0 0-10.2-11.6c-43.6-45.2-104.4-75.6-173-86.5a400 400 0 0 0-81.1-1.3zm-13 190.6v82h38.7 38.6v-82-82h35.4 35.3v202.7V515h-35.3-35.4v-88-88l-38.2.2-38.4.4-.4 87.6-.3 87.8H1169h-34.6V312.3 109.6h34.6 34.7v82zM354 32.3c-19 3.4-30.7 9.8-38.5 21.4-9.6 14-9 1-9 220.7V472l11.2 1c14.3 1.2 37.3-1 49.3-4.6 6.8-2.2 10.8-4.4 15.6-9 12.3-11.4 11.2 9 11.6-221.8L392 33a169 169 0 0 0-38-.6zm1252.3 86.2c0 3 49.2 373.8 51.5 387.4l.8 5h31.8l32-.4c0-1.3 34.8-244 35.5-247.6l1-4.7 1 4.7a8156 8156 0 0 1 17.2 124.7l16.6 121.6c.4 1.3 8.3 1.7 33 1.7h32.5l.7-4.4 21-166.5 20.5-162.4h30.4 30.3v166.6V511h36 36V344.3 177.7h32.7 32.6v166.6V511h37.4 37.3V313 115l-157.6.3-157.7.4-12.3 96-17.2 130.6c-.3-.8-7-50-15.2-109.3l-15.5-113-.8-5h-32.5l-33.2 1.6a9168 9168 0 0 0-16.7 113.1l-17 114.6-.8 3.4-1-4c-.6-2.3-6.2-52-12.5-110.7L1672 120.6l-.8-5.6h-32.4-32.5v3.5zM2207.7 313v198h26.7 26.6V366l1-144c.5.4 11.7 65.5 25 144.5l24.2 143.6 20 .4c18.3.3 20 .2 20.7-2 .4-1.3 11-64.6 23.8-140.8l23.2-138.5.4 140.8.3 140.8 33-.3 33-.4V313 115.7l-47.6-.4-47.5-.3-.8 3.6c-.4 2-7.7 45.7-16 97l-16.4 95.7c-.5 1.3-7.6-40.4-16-95.3l-16-99.5c-.4-1.2-11.5-1.6-49-1.6h-48.5v198zm292 0v198h83.3 83.4v-31.3-31.4H2619h-47.3V395v-53.3h34 34l-.3-33-.4-33-33.6-.4-33.7-.3v-48.7-48.6h45.3 45.4v-31.4V115H2581h-81.3v198zm-1926-170a98 98 0 0 0-53.8 24 2764 2764 0 0 0-121.3 133.4c.3 1 20.3 33.2 44.4 71.2 49 77.4 54.8 85 71.3 93.2 14.4 7.2 26.3 9.4 47.8 8.4a121 121 0 0 0 39.8-7c1.6-.5 3-1.6 3-2.3a2999 2999 0 0 0-51.5-78.6c-28.3-42.7-51-78.2-50.8-79 .4-1 16.7-18.5 36.3-39.3l37.3-36c2.8 3 119.3 186.6 119.3 188a3526 3526 0 0 1-36 77.4L623.2 574c-.4 2.6 17.4 7.8 31.5 9.4 30.3 3.4 51.5-5 65.3-26.2 2.6-3.8 44.7-96.2 93.6-205.4C882 199 902.2 153 900.8 152.2c-1-.6-6.6-2.4-12.5-4-12.8-3.6-35-4.3-45.3-1.4-17.2 4.8-34 18.8-43 35.5l-32.2 74.5-29.2 68.4c-1.5 2.4 5.4 13-57.5-89.6l-54-87c-4-4.2-36.3-7.5-53.3-5.5zm-462 1.4C51 150.2 12 178.3 1.8 224-9 271.4 18.5 315.5 68.3 331.5c6 2 29.5 7 52.6 11.5l47.2 9.4c24 6.6 30 25 11.3 35.2-10.8 6-24 6.7-66.5 4.2-47.2-2.8-66-2.8-74.2 0a43 43 0 0 0-28 30.5c-2.8 9.5-3.4 39.5-1 42 1 1 6.3 2 12 2.8 49.5 5.6 124 7.2 152.7 3.3 64-8.6 99.3-40.4 103.3-93a89 89 0 0 0-52-89.7c-16.5-8.2-29-11.5-79-20.8-23.6-4.4-45.5-9-48.7-10.6-20.7-9-15-27 10-32.2 10.4-2.2 36-2.2 76 0 29.2 1.7 32.8 1.6 40.6-.4 20-5.2 30-18 33.6-43.2 1.3-9.8.6-26.2-1.2-29.2-1-1.5-30.2-4.8-62.3-7-21.6-1.5-67-1.5-83.3.1zm1381.6 27.4c-9 4.4-15 11.7-22.4 26.5-12.2 25-17.8 54-18.8 97.3-1.4 52.6 5.3 93.5 19.7 122.8 11.2 23 28.5 33.4 44.5 26.7 10.6-4.5 22.3-20.8 30-42 18.2-49.8 20-118 4.7-176.8-12-46.8-33.3-66.8-57.7-54.6zM943.7 310c.1 42.2 10 87.6 24.3 112.8a73 73 0 0 0 24.4 25.4c28.8 13.6 55.2-20 45.3-57.8-5-19-15.5-30.8-50.5-56.2l-33-25-9.8-7.6c-.4 0-.7 3.7-.7 8.3z"/></svg>',
      "friendlyName": "skySHOWTIME",
      "className": "skyShowtimeButton",
      "appName": "com.skyshowtime.skyshowtime.google",
      "androidName": "com.skyshowtime.skyshowtime.google",
      "adbLaunchCommand": "adb shell am start -n com.skyshowtime.skyshowtime.google/com.peacock.peacocktv.GoogleMainActivity",
      "deviceFamily": ["amazon-fire"], },


  "sky-sport-now": {
      "button": '<svg version="1.1" id="ssnid" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 940 141" style="enable-background:new 0 0 940 141" xml:space="preserve"><style>.ssn0{fill:#f32836}.ssn1{fill:#000139}.ssn2{fill:#fff}</style><path class="ssn0" d="m287.5 67.5-15-4c-5.5-1.5-8-4-8-7.5 0-2.5 1-4.5 3.5-6s5-2 8.5-2c5.5 0 11 2 16.5 6.5 2.5 2 4.5 2 6.5 0L305 49c2-2 1.5-4-.5-6-2.5-2.5-6.5-5-11.5-6.5-5-2-10-2.5-16-2.5-9 0-16.5 2.5-22 7-6 4.5-8.5 10.5-8.5 17.5 0 5.5 1.5 10.5 5 14 3.5 4 8 6.5 14.5 8l13.5 3.5c4 1 6.5 2 8.5 3.5s3 3.5 3 5.5c0 2.5-1 4-3.5 6s-5.5 2.5-9.5 2.5c-7 0-13.5-2.5-19-8-2-2-4-2.5-6-1l-7 5.5c-1 1-1.5 2-1.5 3.5s1 2.5 2 3.5c3 3 7 6 12.5 8s11.5 3.5 18.5 3.5c10 0 18-2.5 23.5-7.5s8.5-11 8.5-17.5c0-12.5-7.5-20-22-24zM372.5 42.5c-5-5-12-7.5-20.5-7.5h-31c-.5 0-1.5 0-2 .5s-.5 1-.5 2v74c0 .5 0 1.5.5 2s1 1 2 .5h12c.5 0 1.5-.5 2-.5.5-.5 1-1 .5-2v-24H352c8.5 0 15.5-2.5 20.5-7.5s7.5-11.5 7.5-19c-.5-7-3-13.5-7.5-18.5zm-14 27c-2.5 2-5 3-8.5 3.5h-14.5V50H350c3.5 0 6.5 1 8.5 3 2.5 2 3.5 5 3.5 8.5 0 3-1 6-3.5 8zM456 45c-8-8-18-12-30-12s-21.5 4-30 12c-8 8-12 17.5-12 29.5s4 21.5 12 29.5 18 12 30 12 21.5-4 30-12c8-8 12-17.5 12-29.5S464 53 456 45zm-12.5 47.5c-4.5 5-10.5 7.5-17.5 7.5s-13-2.5-17.5-7.5-7-11-7-18 2.5-13 7-18S419 49 426 49s13 2.5 17.5 7.5 7 11 7 18-2.5 13-7 18zM544.5 111l-18-29c3.5-1 7-3.5 9.5-6 2.5-3 4-5.5 5-8.5 1-2.5 1.5-5.5 1.5-8.5 0-7-2.5-12.5-7.5-17.5-5-4.5-11.5-7-20-7h-35.5c-1 0-1.5.5-2 1s-.5 1-.5 1.5v74c0 .5 0 1.5.5 2s1 1 2 .5h12c.5 0 1.5 0 2-.5s1-1 .5-2V84.5h15l16.5 27c1 1.5 2.5 2.5 4.5 2.5h13c1 0 1.5-.5 2-1 0-.5 0-1.5-.5-2zM521 68c-2 2-5 3-8.5 3h-19V50h19c3 0 6 1 8.5 3 2 2 3.5 4.5 3.5 7.5S523 66 521 68zM613 35.5c-.5-.5-1-1-2-.5h-62.5c-.5 0-1.5.5-2 .5-.5.5-1 1-.5 2V48c0 .5 0 1.5.5 2s1 .5 2 .5H571v61c0 .5 0 1.5.5 2s1 1 2 .5H586c.5 0 1.5 0 2-.5s1-1 .5-2v-61H611c.5 0 1.5-.5 2-.5.5-.5 1-1 .5-2V37.5c0-.5 0-1.5-.5-2z"/><g><path class="ssn1" d="m58 70-18.5-7.5c-5.5-2.5-7.5-4-7-6s1.5-3.5 7-3.5h38c1 0 2-.5 2-1.5l3-14c.5-1-.5-2-1.5-2.5H40.5C21.5 35 14 45 12 55.5 9 69 19.5 75 27.5 78L48 86.5c5 2 6 4 5 6-.5 2-2.5 3.5-8.5 3.5H5c-1 0-2 .5-2 1.5L0 112c0 1 .5 2 1.5 2.5h43c19.5 0 26-10 28.5-21C76 79 67.5 74 58 70zM236 35h-18c-.5 0-1 .5-1.5.5l-29 33L168 36c-.5-.5-1-1-2-1h-25c-.5 0-1 .5-1.5.5L105 74l23.5 39.5c.5.5 1 1 2 1H149c1 0 2-1 2-2 0-.5 0-.5-.5-1l-22.5-37L151.5 48l23 39-11 51.5c0 1 .5 2 1.5 2.5h16c1 0 2-.5 2-1.5l12-53 42.5-48c1-1 .5-2 0-3-.5-.5-1-.5-1.5-.5z"/><path class="ssn1" d="M118.5 0h-16c-1 0-2 .5-2 1.5L77 112c0 1 .5 2 1.5 2.5H95c1 0 2-.5 2-1.5L120.5 2.5c0-1.5-.5-2.5-2-2.5z"/></g><g><path class="ssn1" d="M934 17H637.5c-3.5 0-6 3-6 6v102c0 3.5 3 6 6 6H934c3.5 0 6-3 6-6V23.5c0-3.5-3-6.5-6-6.5z"/><path class="ssn2" d="M717.5 111.5c0 1-.5 1.5-1 2s-1 .5-2 .5h-13c-2.5 0-4.5-1-5.5-2.5l-31-50V112c0 .5 0 1.5-.5 2s-1 .5-2 .5h-12c-1.5 0-2.5-1-2.5-2V37c0-.5 0-1.5.5-2s1.5-.5 2-.5H666c1.5 0 3 .5 3.5 2l30.5 49V37c0-1.5 1-2.5 2-2.5h12.5c.5 0 1.5.5 2 .5.5.5 1 1 1 2v74.5zM925 38.5 907 112c0 1-1 1.5-1.5 2s-1 .5-1.5.5h-18c-1.5 0-3-1-3-2.5l-13-51-12.5 51c-.5 1.5-1.5 2.5-3 2.5H835c-1.5 0-3-1-3-2.5l-18.5-73.5c-.5-1 0-2 .5-3s1-1 2-1h13.5c1.5 0 2.5 1 2.5 2v.5l13 57 14-57c.5-1.5 1.5-2.5 2.5-2.5H877c1.5 0 2.5 1 2.5 2v.5l14 56.5 13-56.5c.5-1.5 1-2.5 2.5-2.5h13c3 0 3.5 1 3 4zM799.5 45c-8-8-18-12-30-12s-22 4-30 12C731 53 727 63 727 74.5s4.5 21.5 12.5 29.5 18 12 30 12 22-4 30-12 12-18 12.5-29.5C811.5 63 807.5 53 799.5 45zM787 92c-4.5 5-10.5 7.5-17.5 7.5s-13-3-17.5-7.5-7-11-7-18 2.5-13 7-18 10.5-7.5 17.5-7.5 13 3 17.5 7.5 7 11 7 18-2.5 13-7 18z"/></g></svg>',
      "friendlyName": "Sky Sport Now (NZ)",
      "className": "skySportNowButton",
      "appName": "nz.co.skytv.fanpass.ced",
      "androidName": "nz.co.skytv.fanpass.ced",
      "adbLaunchCommand": "adb shell am start -n nz.co.skytv.fanpass.ced/com.dicetv.MainActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "sling": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1025" height="555" viewBox="0 0 1025 555" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M257 90.3v350c0 2.4 2 4.3 4.3 4.3h59c2.4 0 4.3-2 4.3-4.3v-350c0-2.4-2-4.3-4.3-4.3h-59c-2.4 0-4.3 2-4.3 4.3zM72.2 258c0-11.4 16-19.6 40.5-19.6 28 0 54.2 10 70.5 24 3 2.6 7.7 1.8 9.7-1.7l20-39.7c1.5-2.7.8-6-1.6-8-24.6-18.5-57.8-31.8-99-31.8C44.6 181 6.7 219 6.7 262c0 100.7 153 66 153 110.2 0 12-13.8 22.4-43 22.4a147 147 0 0 1-83.5-27.4c-3-2.4-7.4-1.6-9.4 1.7L1 406.7c-1.6 2.6-1 6 1.2 8 27.3 23 68.5 36.5 111 36.5 71.4 0 111.3-35.2 111.3-82.5C224.6 267 72.2 298.4 72.2 258zm299.5-72.6v255c0 2.4 2 4.3 4.3 4.3h59c2.4 0 4.3-2 4.3-4.3v-255c0-2.4-2-4.3-4.3-4.3h-59c-2.3.1-4.3 2-4.3 4.3zm288 255c0 2.4 2 4.3 4.3 4.3h59c2.4 0 4.3-2 4.3-4.3v-167c0-50-36.6-92.8-93-92.8-42 0-70.5 21.2-80.7 40v-35.3c0-2.4-2-4.3-4.3-4.3h-59c-2.4 0-4.3 2-4.3 4.3v255c0 2.4 2 4.3 4.3 4.3h59c2.4 0 4.3-2 4.3-4.3v-140c0-31.2 23-59.3 55.3-59.3 27.6 0 50.7 14.3 50.7 50v149.2zM775.3 512c-1 1.8-.8 4 .8 5.5 31.2 26.4 65 36 108 36 63.4 0 139-28.5 139-126.6V191.3c0-2.4-2-4.3-4.3-4.3H959c-2.4 0-4.3 2-4.3 4.3V220c-16.7-27.2-45.5-39.4-76.4-39.4-65 0-116.6 55-116.6 139.3 0 70 49 131 116.6 131 32 0 56-15 76.4-40.5v18c0 50.6-38.4 69.6-71 69.6-30.6 0-56.5-8-76.8-28-2-2-5.2-1.5-6.6.8l-25.4 41zM897 382.7c-38.4 0-65-26-65-70s26.7-71.7 65-71.7c35 0 58 33.2 58 71.7s-23 70-58 70zm97.7 170.8h3.5v-13.3h4.7v-3h-13v3h4.8v13.3zm23-6.5l2-5.2v11.7h3.5v-16.3h-5l-4 10.2-4-10.2h-5v16.3h3.5v-11.7l4.6 11.7h1.5l2.7-6.5M365.3 79.3a41.1 41.1 0 1 1 82.1.9c-.2 22-18.8 40.8-41.5 40.6s-40.8-19.3-40.6-41.5z"/><path d="M492.7 123.5a46 46 0 0 0 36.2-44v-.3c.1-21.4-15-39.5-35.3-44.7-2-.5-4.4.7-3 3.2C499 52.5 501 68.2 501 79a83 83 0 0 1-11.2 41c-1.3 2.4 1 3.7 3 3.2zm77 17.5c28.7-6.6 50-31.4 50.6-61.3v-.4c.1-30-20.8-55-49.3-62.4-3-.7-6.2 1-4.3 4.4A116 116 0 0 1 581.2 79a118 118 0 0 1-15.7 57.4c-1.8 3.5 1.4 5.3 4.3 4.6zM652.3 5.8a148 148 0 0 1 18.3 73c-.2 19.2-4.5 47-20 72.7-2.4 4.2 1.7 7.7 5.3 7A83 83 0 0 0 720 79.7v-.5c.2-37.8-26.3-69.8-62.4-79-3.5-1-7.7 1.3-5.4 5.6z"/></svg>',
      "friendlyName": "Sling",
      "className": "slingButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.sling",
          "androidName": "com.sling",
          "adbLaunchCommand": "adb shell am start -n com.sling/com.sling.MainActivity",
      },
      "apple-tv": {
          "appName": "Sling TV",
      },
      "chromecast": {
          "appName": "com.sling",
          "androidName": "com.sling",
          "adbLaunchCommand": "adb shell am start -n com.sling/com.sling.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.sling",
          "androidName": "com.sling",
          "adbLaunchCommand": "adb shell am start -n com.sling/com.sling.MainActivity",
      },
      "xiaomi": {
          "appName": "com.sling",
          "androidName": "com.sling",
          "adbLaunchCommand": "adb shell am start -n com.sling/com.sling.MainActivity",
      },
   },


  "smart-tube-next": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 340 117" width="340" height="117" xml:space="preserve"><g><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#fff;fill-rule:evenodd;opacity:1" transform="translate(-38 -22)" d="M282.583 31.656a4.06 4.06 0 0 0-2.69 2.143c-.457.926-.595 16.708-.505 57.591l.074 33.806.48.938c.853 1.667 2.273 2.197 5.891 2.197 4.771 0 5.637-.384 7.234-3.207.943-1.668 1.552-1.606 3.955.398 3.225 2.691 6.341 3.67 10.84 3.407 7.169-.42 10.401-3.444 12.959-12.128 1.566-5.314 2.4-24.798 1.517-35.446-.088-1.066-.244-2.988-.345-4.272-.983-12.414-5.407-18.27-13.826-18.302-3.99-.015-6.384.926-9.667 3.8-1.705 1.493-2.836 1.935-3.355 1.31-.188-.226-.246-2.818-.329-14.625-.118-16.921-.036-16.276-2.182-17.172-1.164-.486-8.534-.807-10.051-.438m-91.04 3.013c-3.036.443-3.985 2.178-3.828 6.998.165 5.063.708 5.446 8.035 5.664 5.807.172 5.971.239 6.154 2.502.056.688.136 17.638.178 37.667.079 37.221.093 37.995.719 39.064 1.415 2.414 13.009 2.52 14.669.134.81-1.163.765.825.879-38.865.113-39.269.095-38.489.917-39.354.934-.982 1.122-1.021 5.734-1.171 7.897-.258 8.458-.701 8.545-6.737.049-3.427-.483-4.875-2.033-5.531-1.056-.448-37.149-.782-39.969-.371m-75.724 11.725c-.038.034-.796.106-1.685.16-9.301.568-16.326 10.37-13.732 19.158 1.209 4.094 7.12 9.967 12.994 12.911 3.787 1.898 6.758 5.516 6.904 8.407.318 6.313-5.162 8.676-14.55 6.275-3.358-.858-4.963-.199-5.423 2.228-.466 2.458.569 3.953 3.526 5.092 10.693 4.12 21.489.097 23.807-8.87 1.491-5.771.453-11.677-2.611-14.85-2.802-2.902-3.551-3.485-5.986-4.656-8.155-3.921-11.488-8.467-9.417-12.844 1.502-3.174 4.617-4.72 8.559-4.248 4.133.496 5.034.38 6.25-.799 3.414-3.313.139-7.314-6.432-7.859-2.287-.189-2.117-.181-2.204-.105M347.417 58.78c-11.458 1.463-15.589 6.263-17.664 20.525-.704 4.844-.594 25.331.169 31.445 1.001 8.02 3.594 12.956 8.453 16.098 4.643 3 18.191 2.949 23.374-.089 4.69-2.748 7.584-8.095 7.584-14.008 0-4.35-1.345-5.328-7.333-5.332l-3.417-.002-.997.5c-1.214.608-1.663 1.37-1.916 3.25-.672 5-2.372 7.091-5.753 7.078-4.095-.016-5.725-3.913-5.551-13.266.111-5.988-1.049-5.474 12.717-5.633 10.49-.12 10.208-.09 11.364-1.21 2.307-2.232 1.797-21.696-.758-28.945-2.646-7.51-10.68-11.635-20.272-10.411m-115.334 1.382c-3.726.803-3.6-.348-3.641 33.338l-.025 21.583.466 2.084c1.911 8.548 5.212 11.552 12.95 11.786 5.63.17 8.092-.751 11.917-4.457 2.48-2.404 3.026-2.397 3.929.05.989 2.683 2.232 3.601 5.072 3.75 3.093.162 5.758-.502 6.625-1.651.886-1.173.844.308.915-32.438l.066-30.542-.438-.957c-1.086-2.371-2.599-2.831-8.752-2.662-4.019.111-5.057.569-6.072 2.68l-.412.857-.072 24.084c-.078 26.195-.032 25.023-1.063 27.07-2.059 4.089-6.705 4.398-8.642.576l-.401-.792-.109-25.386c-.107-24.868-.116-25.404-.444-26.302-.408-1.118-1.449-2.216-2.369-2.501-.802-.247-8.5-.386-9.5-.17m119.441 9.951c2.757 1.5 3.834 5.269 3.875 13.554.03 5.996-.213 6.235-6.223 6.137-4.953-.081-4.724.292-4.697-7.637.027-7.929.242-8.964 2.302-11.068 1.669-1.704 2.94-1.968 4.743-.986m-49.711.146c2.083.619 3.427 3.166 4.643 8.796.391 1.812.446 24.468.067 27.945-.449 4.13-1.887 8.288-3.345 9.675-2.315 2.202-6.78 1.023-7.925-2.093-.549-1.493-.47-35.024.091-38.592.339-2.161 1.872-4.58 3.399-5.365 1.257-.646 1.876-.72 3.07-.366"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#0a96a7;fill-rule:evenodd;opacity:1" transform="translate(-38 -22)" d="M55.452 33.922c-3.86.77-4.962 2.488-5.464 8.52-.245 2.948-.415 63.49-.185 65.928.254 2.689.892 3.704 3.069 4.883.483.261 1.644 1.057 2.579 1.769.936.711 1.986 1.376 2.334 1.477 1.238.359 112.081.144 113.274-.221 3.348-1.022 5.304-2.694 6.731-5.757.859-1.844.866-2.126.872-36.722l.005-31.451-.768-2.466c-1.338-4.3-1.648-4.822-3.399-5.739l-.75-.393-58.583-.027c-48.666-.022-58.775.012-59.715.199m62.571 12.577c3.655.303 6.338 1.533 7.429 3.404.597 1.023.058 3.431-.997 4.455-1.216 1.179-2.117 1.295-6.25.799-3.942-.472-7.057 1.074-8.559 4.248-2.071 4.377 1.262 8.923 9.417 12.844 4.275 2.056 7.702 5.769 8.603 9.322 2.439 9.617-1.746 17.706-10.353 20.009-6.915 1.851-16.247-.445-16.958-4.172-.684-3.589 1.351-5.137 5.395-4.103 9.388 2.401 14.868.038 14.55-6.275-.146-2.891-3.117-6.509-6.904-8.407-4.59-2.3-9.583-6.729-12.124-10.755-1.882-2.981-1.894-8.27-.028-12.045 2.784-5.634 7.37-8.932 12.89-9.269.889-.054 1.647-.126 1.685-.16.087-.076-.083-.084 2.204.105m-41.728 74.177c-.8.071-1.725.218-2.056.327-3.042 1.005-3.419 5.878-.567 7.333 1.266.646 2.641.669 41.328.709l37.583.038.699-.373c3.32-1.775 3.07-6.987-.385-8.007-.786-.233-73.999-.259-76.602-.027"/></g></svg>',
      "friendlyName": "SmartTubeNext",
      "className": "smartTubeNextButton",
      "appName": "com.teamsmart.videomanager.tv",
      "androidName": "com.teamsmart.videomanager.tv",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "smart-tube-next-beta": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 340 117" width="340" height="117" xml:space="preserve"><g><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#fff;fill-rule:evenodd;opacity:1" transform="translate(-38 -22)" d="M282.583 31.656a4.06 4.06 0 0 0-2.69 2.143c-.457.926-.595 16.708-.505 57.591l.074 33.806.48.938c.853 1.667 2.273 2.197 5.891 2.197 4.771 0 5.637-.384 7.234-3.207.943-1.668 1.552-1.606 3.955.398 3.225 2.691 6.341 3.67 10.84 3.407 7.169-.42 10.401-3.444 12.959-12.128 1.566-5.314 2.4-24.798 1.517-35.446-.088-1.066-.244-2.988-.345-4.272-.983-12.414-5.407-18.27-13.826-18.302-3.99-.015-6.384.926-9.667 3.8-1.705 1.493-2.836 1.935-3.355 1.31-.188-.226-.246-2.818-.329-14.625-.118-16.921-.036-16.276-2.182-17.172-1.164-.486-8.534-.807-10.051-.438m-91.04 3.013c-3.036.443-3.985 2.178-3.828 6.998.165 5.063.708 5.446 8.035 5.664 5.807.172 5.971.239 6.154 2.502.056.688.136 17.638.178 37.667.079 37.221.093 37.995.719 39.064 1.415 2.414 13.009 2.52 14.669.134.81-1.163.765.825.879-38.865.113-39.269.095-38.489.917-39.354.934-.982 1.122-1.021 5.734-1.171 7.897-.258 8.458-.701 8.545-6.737.049-3.427-.483-4.875-2.033-5.531-1.056-.448-37.149-.782-39.969-.371m-75.724 11.725c-.038.034-.796.106-1.685.16-9.301.568-16.326 10.37-13.732 19.158 1.209 4.094 7.12 9.967 12.994 12.911 3.787 1.898 6.758 5.516 6.904 8.407.318 6.313-5.162 8.676-14.55 6.275-3.358-.858-4.963-.199-5.423 2.228-.466 2.458.569 3.953 3.526 5.092 10.693 4.12 21.489.097 23.807-8.87 1.491-5.771.453-11.677-2.611-14.85-2.802-2.902-3.551-3.485-5.986-4.656-8.155-3.921-11.488-8.467-9.417-12.844 1.502-3.174 4.617-4.72 8.559-4.248 4.133.496 5.034.38 6.25-.799 3.414-3.313.139-7.314-6.432-7.859-2.287-.189-2.117-.181-2.204-.105M347.417 58.78c-11.458 1.463-15.589 6.263-17.664 20.525-.704 4.844-.594 25.331.169 31.445 1.001 8.02 3.594 12.956 8.453 16.098 4.643 3 18.191 2.949 23.374-.089 4.69-2.748 7.584-8.095 7.584-14.008 0-4.35-1.345-5.328-7.333-5.332l-3.417-.002-.997.5c-1.214.608-1.663 1.37-1.916 3.25-.672 5-2.372 7.091-5.753 7.078-4.095-.016-5.725-3.913-5.551-13.266.111-5.988-1.049-5.474 12.717-5.633 10.49-.12 10.208-.09 11.364-1.21 2.307-2.232 1.797-21.696-.758-28.945-2.646-7.51-10.68-11.635-20.272-10.411m-115.334 1.382c-3.726.803-3.6-.348-3.641 33.338l-.025 21.583.466 2.084c1.911 8.548 5.212 11.552 12.95 11.786 5.63.17 8.092-.751 11.917-4.457 2.48-2.404 3.026-2.397 3.929.05.989 2.683 2.232 3.601 5.072 3.75 3.093.162 5.758-.502 6.625-1.651.886-1.173.844.308.915-32.438l.066-30.542-.438-.957c-1.086-2.371-2.599-2.831-8.752-2.662-4.019.111-5.057.569-6.072 2.68l-.412.857-.072 24.084c-.078 26.195-.032 25.023-1.063 27.07-2.059 4.089-6.705 4.398-8.642.576l-.401-.792-.109-25.386c-.107-24.868-.116-25.404-.444-26.302-.408-1.118-1.449-2.216-2.369-2.501-.802-.247-8.5-.386-9.5-.17m119.441 9.951c2.757 1.5 3.834 5.269 3.875 13.554.03 5.996-.213 6.235-6.223 6.137-4.953-.081-4.724.292-4.697-7.637.027-7.929.242-8.964 2.302-11.068 1.669-1.704 2.94-1.968 4.743-.986m-49.711.146c2.083.619 3.427 3.166 4.643 8.796.391 1.812.446 24.468.067 27.945-.449 4.13-1.887 8.288-3.345 9.675-2.315 2.202-6.78 1.023-7.925-2.093-.549-1.493-.47-35.024.091-38.592.339-2.161 1.872-4.58 3.399-5.365 1.257-.646 1.876-.72 3.07-.366"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#0a96a7;fill-rule:evenodd;opacity:1" transform="translate(-38 -22)" d="M55.452 33.922c-3.86.77-4.962 2.488-5.464 8.52-.245 2.948-.415 63.49-.185 65.928.254 2.689.892 3.704 3.069 4.883.483.261 1.644 1.057 2.579 1.769.936.711 1.986 1.376 2.334 1.477 1.238.359 112.081.144 113.274-.221 3.348-1.022 5.304-2.694 6.731-5.757.859-1.844.866-2.126.872-36.722l.005-31.451-.768-2.466c-1.338-4.3-1.648-4.822-3.399-5.739l-.75-.393-58.583-.027c-48.666-.022-58.775.012-59.715.199m62.571 12.577c3.655.303 6.338 1.533 7.429 3.404.597 1.023.058 3.431-.997 4.455-1.216 1.179-2.117 1.295-6.25.799-3.942-.472-7.057 1.074-8.559 4.248-2.071 4.377 1.262 8.923 9.417 12.844 4.275 2.056 7.702 5.769 8.603 9.322 2.439 9.617-1.746 17.706-10.353 20.009-6.915 1.851-16.247-.445-16.958-4.172-.684-3.589 1.351-5.137 5.395-4.103 9.388 2.401 14.868.038 14.55-6.275-.146-2.891-3.117-6.509-6.904-8.407-4.59-2.3-9.583-6.729-12.124-10.755-1.882-2.981-1.894-8.27-.028-12.045 2.784-5.634 7.37-8.932 12.89-9.269.889-.054 1.647-.126 1.685-.16.087-.076-.083-.084 2.204.105m-41.728 74.177c-.8.071-1.725.218-2.056.327-3.042 1.005-3.419 5.878-.567 7.333 1.266.646 2.641.669 41.328.709l37.583.038.699-.373c3.32-1.775 3.07-6.987-.385-8.007-.786-.233-73.999-.259-76.602-.027"/></g></svg>',
      "friendlyName": "SmartTubeNext Beta",
      "className": "smartTubeNextButton",
      "appName": "com.liskovsoft.smarttubetv.beta",
      "androidName": "com.liskovsoft.smarttubetv.beta",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "smart-tv-client-for-twitch": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="688" height="305" viewBox="0 0 688 305" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><g fill-rule="nonzero"><path d="M7 147l150-42c9-3 18-1 26 6l73 73c5 5 7 14 4 26l-10 34-152 59c-11 4-21 1-32-9l-54-86-12-45c0-8 2-13 7-16z" fill="#000"/><path d="M0 162c0-5 1-9 3-12l62 93-1 47-52-82-12-46zm53 4c0-24 36-43 80-43 45 0 81 19 81 43s-36 43-81 43c-44 0-80-19-80-43z"/><path d="M53 171c0-24 36-43 80-43 45 0 81 19 81 43s-36 43-81 43c-44 0-80-19-80-43z" fill="#000"/><path d="M67 216c0-7 9-13 20-13s20 6 20 13c0 8-9 13-20 13s-20-5-20-13z" fill="red"/><path d="M107 216v1c0 7-9 13-20 13s-20-6-20-13v10c12 12 33 12 42-1l-2-10zm-40-50c0-20 31-36 68-36 38 0 68 16 68 36 0 19-30 35-68 35-37 0-68-16-68-35z"/><path d="M68 169c0-19 30-34 67-34s67 15 67 34c0 18-30 33-67 33s-67-15-67-33z" fill="#000"/><path d="M72 173c0-18 28-32 62-32s61 14 61 32c0 17-27 31-61 31s-62-14-62-31z"/><path d="M78 168c0-15 25-28 56-28s57 13 57 28c0 16-26 29-57 29s-56-13-56-29z" fill="#000"/><path d="M78 163c0-16 25-28 56-28 30 0 55 12 55 28 0 15-25 28-55 28-31 0-56-13-56-28z"/><path d="M83 162c0-15 23-27 52-27s52 12 52 27c0 14-23 26-52 26s-52-12-52-26z" fill="#000"/><path d="M87 155c0-16 22-29 48-29 27 0 48 13 48 29s-21 29-48 29c-26 0-48-13-48-29z"/><path d="M89 155c0-11 20-21 45-21s45 10 45 21c0 12-20 22-45 22s-45-10-45-22z" fill="#000"/><path d="M97 152c0-10 17-19 37-19 21 0 38 9 38 19 0 11-17 20-38 20-20 0-37-9-37-20z"/><path d="M102 151c0-8 15-15 33-15s32 7 32 15c0 9-14 15-32 15s-33-6-33-15z" fill="#000"/><path d="M109 146c0-6 12-11 26-11 15 0 26 5 26 11 0 7-11 12-26 12-14 0-26-5-26-12z"/><path d="M113 144c0-5 9-8 20-8 12 0 21 3 21 8 0 4-9 7-21 7-11 0-20-3-20-7zm-46 75v-1c1 7 10 12 20 12s19-5 20-12v1c0 8-9 14-20 14s-20-6-20-14z" fill="#000"/><path d="M257 186c4 5 5 11 4 20L88 260c-16 3-28-1-36-13L0 162c0-5 1-8 3-11l61 92c5 4 15 5 30 3l154-49c5-3 8-7 9-11z"/><path d="M119 9c1-1 2-2 4-3v138c-2-1-3-2-4-3V9z" fill="#000"/><path d="M130 4c1-1 2-1 4-1v144c-2 0-3 0-4-1-3 0-5-1-7-2V6c2-1 4-2 7-2z"/><g fill="#000"><path d="M143 147h-9V3c3 0 6 0 9 1 5 0 9 2 12 5v132c-3 3-7 5-12 6z"/><path d="M119 9c6-8 28-8 35 0v6c-6 1-13 2-21 2-5 0-10 0-14-1V9z"/></g><path d="M133 15h10v2c-3 1-6 1-10 1-5 0-10 0-14-1v-5c4 1 9 3 14 3z"/></g><path d="M628 0c-2 0-2 1-2 4 0 1 1 3 1 3v2l1 1v2c0 1 1 1 1 1v2c0 1 1 2 1 2v1c0 1 1 2 1 2s0 2 1 6c1 1 1 1 1 2v1c0 1 1 2 1 2v1c0 1 1 2 1 2v2c0 1 1 1 1 1v2c0 1 1 2 1 2v1c0 1 1 2 1 3s1 2 1 2v2s0 1 1 1v2c0 1 0 1 1 1v2c0 1 0 2 1 2v1 2c1 0 1 1 1 1 0 1 0 3 1 4v2s0 1 1 1v1c0 1 0 2 1 2v2s0 1 1 1v2c0 1 0 2 1 2v1 2c1 0 1 0 1 1v2c1 0 1 1 1 1v1h7 7v-1s1-1 1-2v-1s0-1 1-2v-2s1-4 2-6v-1s1-1 1-2v-2s1-1 1-2v-1s0-1 1-2v-1c0-1 0-1 1-2v-2-1c1-1 1-2 1-2v-2c1 0 1-1 1-1v-2c1-1 1-2 1-2v-1c0-1 1-2 1-2v-2c0-1 1-1 1-1v-2c0-1 1-2 1-2s0-2 1-5c1-2 1-3 1-3s0-1 1-2v-1-2c1-1 1-2 1-2v-1c1-1 1-2 1-2v-2l1-1v-2c0-1 1-1 1-2v-1c0-1 1-2 1-2V8c0-1 1-2 1-2V4c0-4 0-4-7-4h-5v1 1l-1 1v2s0 1-1 1v2 1c-1 1-1 2-1 2v1s-1 4-2 5v2c-1 1-1 2-1 2v1c0 1-1 1-1 2v2c-1 1-1 2-1 2s0 1-1 2v1 2l-1 1v2l-1 1v2c0 1-1 1-1 1v2c0 1-1 2-1 2v1c0 1-1 2-1 2v1c0 1-1 2-1 2v2l-1 1v2s0 1-1 1v2s0 1-1 1v2c0 1-1 1-1-1v-1c-1 0-1-1-1-2 0 0 0-2-1-3v-2c0-1-1-1-1-1v-2l-1-1v-2c0-1-1-1-1-1v-2c0-1 0-1-1-1v-2c0-1 0-2-1-2v-1c0-1 0-1-1-2v-1-2c-1 0-1 0-1-1v-2c-1 0-1-1-1-1v-2c-1 0-1 0-1-1v-2s-1-1-1-2v-1l-1-1c0-1-1-6-1-7-1 0-1-1-1-1V9c-1 0-1-1-1-2V6c-1 0-1-1-1-2V3c0-1-1-1-1-2V0h-4-6M319 0c0 1 0 1-1 1-3 1-8 5-8 9 0 1-1 1-1 2v25l1 1c0 1 1 4 1 4s1 0 1 1l2 2c1 2 2 2 2 2s1 0 1 1h1s1 0 1 1h12c15 0 14-1 14 13 0 10 0 12-2 12 0 1-18 1-20 1-1-1-2-2-2-3v-1h-7-6v1 1s1 1 1 2v3s1 0 1 1l1 1c0 1 2 4 4 4 0 1 1 1 1 1h1l1 1h15 14c1 0 1-1 2-1h1c1 0 1-1 1-1 1 0 1-1 1-1 1 0 2-1 2-2 0 0 1 0 1-1l1-1v-1c1 0 1-1 1-2v-1c1 0 1-26 0-27v-1c0-1 0-2-1-2 0-2-4-5-5-6h-1s-1-1-2-1h-1c-1 0-6-1-12-1-15 0-13 1-13-12 0-14-1-13 12-13 9 0 10 0 10 2h1v1h6 6v-2c0-2 0-3-1-3V8s0-1-1-1V6c-1-1-5-5-7-5h-1c0-1-5-1-14-1h-14m251 1c-2 0-2 1-2 6v5h9 10v37 37h7 6V49 12h10 10V7c0-5-1-6-2-6 0-1-8-1-24-1s-24 0-24 1m-35 9v7 5h-3-2v6 5h2 3v21c0 20 0 24 1 25v1s0 1 1 1v1l3 3c1 0 1 0 1 1h2l1 1h2c1 0 2 1 2 1h6s0-1 1-1 3-1 5-2l2-1v-7-6h-2-2v2c-1 2-2 3-5 3h-3c-2 0-2 0-2-22V33h4 5v-5-6h-5-4v-6-6h-7-6m-43 10v3c0 3 0 4 2 4h1v30 29h6 6V64c0-23 0-25 1-28 1-2 4-4 5-4h1s2 0 6-1h6v-5-6h-7-6s-1 1-2 1h-1s0 1-1 1c0 0-2 1-2 2-1 0-1 0-1-2v-2h-14M364 53v33h6 6V61c0-24 0-27 1-27v-1l1-1c1-1 14-1 14 0 2 0 2 0 2 28v26h7 6V61 35l1-1c0-2 1-2 8-2h6l1 1c2 2 2 1 2 28v25h6 6V58 31s-1-1-1-2v-1c-1 0-1-1-1-1v-1h-1s0-1-1-2c-1 0-2-1-2-1s0-1-1-1h-1c-1 0-1-1-1-1h-22s0 1-1 1h-1l-1 1-1 1h-1c-3-3-3-3-13-3-9 0-12 0-12 1v1c-1 0-1 0-1-1v-1h-6-5v32m90-32h-1l-1 1h-1-1l-3 4s0 1-1 1c0 0-1 2-1 3-1 1-1 2-1 3v3h6c6 0 6 0 7-2 0-2 1-2 9-3h8l1 2c1 1 2 1 2 2v1 5 5h-1-2c0-1-16-1-16 0h-2c-1 0-3 1-3 1h-1c-1 0-1 0-1 1-1 0-1 0-2 1l-1 1c-1 0-3 3-3 4h-1v1 2c-1 0-1 4-1 9s0 9 1 9v2 1c1 0 1 0 1 1 1 0 1 1 1 1s2 3 3 3c0 0 4 2 5 2l1 1c0 1 18 0 20 0 0-1 1-1 1-1 1-1 1-1 1 0v1h6 6V59 31l-1-1v-2s-1 0-1-1c0 0 0-1-1-1v-1s-1-1-2-1c0-1-1-2-1-2-2-1-2-1-16-1h-13m19 36h1s2 1 2 2v7 7l-1 1-1 1-7 1c-8 0-10-1-10-2h-1V59h1c0-1 1-2 2-2 0-1 3-1 7-1 5 0 7 0 7 1m74 70h-1c-1 0-2 1-2 1h-1c-1 1-4 3-4 4v1s-1 2-1 3v3h0-1v3 3h1 0v14 14h4 4v-14-14h3 3v-3-3h-3-3v-1c0-2 0-3 1-4 0-1 3-1 4 0h1v1c1 0 1 1 1 1 0 1 2 1 2 0 1-1 1-6 0-7s-2-2-3-2h-2-1-2m-149 0c-1 0-1 1-1 1h-1c-1 1-2 2-3 4-1 1-1 36 0 36v1c0 1 2 3 3 3 0 0 1 0 1 1h1 15c1 0 1-1 1-1h1s2-1 2-2v-1c1 0 1-1 1-4v-3h-4-3v2c0 1-1 2-1 2 0 1-9 1-10 1v-17-15l1-1c0-1 1-1 4-1 5 0 5 1 6 4v1h3 4v-3c0-3-1-5-3-7l-2-1h-7-8m38 1c-1 2-2 2-2 4 0 1 0 2 1 2 0 2 6 3 6 2l1-1s0-1 1-1 0-4-1-6c-1-1-5-1-6 0m-15 4v37 1c0 1 2 3 3 3h5 4v-3-2h-1c-1 0-2-1-3-1h-1v-18-17c-1 0-7-1-7 0m78 4v3h-1-1v3 3h1 1v11c0 7 0 12 1 12v1c0 1 2 4 4 5h1 3 3 1s0-1 1-1l1-1v-4l1-3h-2c-1 0-1 0-1 1-1 1-1 2-3 2s-2 0-2-12v-11h2 3v-3-3h-3-2v-3-4h-4-4v4m-48 2h-2c-1 0-3 3-3 3 0 1 0 1-1 1v27l1 1c1 1 1 2 2 2 1 1 1 1 2 1h7 7s1 0 1-1c1 0 2-1 2-2 1 0 1-1 1-1s0-1 1-2v-2h-4-3v1c-1 1-1 1-5 1-5 0-5 0-5-5v-3h6c4 0 6 0 7-1 1 0 2-2 3-3v-1c1 0 1-11 0-11v-1c0-1 0-1-1-1v-1c-1-1-3-2-4-2 0-1-3-1-6-1-4 0-6 0-6 1m116 0h-2c-1 0-2 0-2 1h-1s-1 0-1 1h-1s-1 2-2 3v25c1 1 3 4 4 4 0 0 1 0 1 1h1 10 1l1-1h1l2-3s1 0 1-1c1 0 0-24 0-26l-2-2h-1c0-1 0-1-1-1-1-1-1-1-2-1h-2c-1-1-5-1-5 0m15 0c-1 0-1 3 0 3s1 1 1 16v16h3 4v-13-13l1-2 2-1h3 4v-3-3l-4-1c-1 0-3 0-3 1h-2l-1 1c-1 0-1 0-1-1v-1h-4c-2 0-3 0-3 1m-147 18v17h4 3v-17-18h-3-4v18m36 0v17h3 4v-13-14-1c0-1 1-1 5-1 5 0 4-1 4 15l1 14h3 4v-15c0-10 0-15-1-15v-1-1h-1c0-1-1-2-1-2h-1c-1-1-13-1-14 0 0-1-1-1-3-1h-3v18m-10-11c1 0 1 1 1 3 0 4-1 5-6 5h-4v-4c0-5 0-5 5-5 3 0 3 0 4 1m111 0h1v1 9c0 12 0 12-4 12-2 0-4 0-4-1v-1-9c0-12 0-12 4-12 2 0 3 0 3 1m-230 48c-1 0-2 0-3 1l-1 1v6 5h12 11v43 42h7 7v-42-43h12 11v-5c0-7 0-8-3-8-3-1-51-1-53 0m265 0v98h7 7l1-29v-29-1s2-2 4-3c1-1 14-1 15 0h1s1 1 1 2l1 1v30 29h7 7v-32-32c-1 0-1 0-1-1 0 0 0-1-1-1v-1h-1v-1c0-1-5-5-7-6h-2s-1-1-3-1h-2-14-2c-1 0-1 1-2 1h-1l-1 1v-13-12h-7-7m-113 1h-2c-2 0-5 4-5 6v1c-1 0-1 3 0 3v2c0 1 1 2 1 2s2 3 3 3h1s2 1 4 1 3-1 4-1h1c1 0 3-3 3-4v-1c1 0 1-1 1-3s0-4-1-4v-1s0-1-1-1v-1c-1-1-2-2-3-2h-2c0-1-4-1-4 0m20 17v7h-2c-4 0-4-1-4 6v7h3 3v24 25c0 1 1 2 1 2v1 1l1 1s0 1 1 1v1c0 1 4 4 5 4 0 2 14 3 16 1h1c1 0 1 0 1-1h1c1 0 1 0 1-1 1 0 1 0 2-1v-1-7-7h-1c-2-1-3 0-3 2 0 1-2 3-2 3-1 0-1 0-1 1h-3c-3 0-5-1-5-3v-24-22h5 5v-7c0-7 1-6-6-6h-4v-7-7h-8-7v7m-108 37v32c0 1 1 1 1 2l1 1c0 1 2 4 3 4h1c0 1 0 1 1 2 1 0 2 0 2 1h1c1 0 2 0 2 1h18c1-1 1-1 2-1s1 0 1-1c1 0 3-1 3-2h1c1-1 2 0 3 1h1c0 1 0 1 1 1h1c0 1 0 1 1 1s1 0 1 1h19c0-1 1-1 2-1 0 0 1 0 1-1h1l1-1c1 0 1-1 1-1 1 0 2-1 3-2 0-1 1-2 1-2v-1h1v-2l1-1v-32-31h-7-7v28 29 1c-1 2-3 4-4 4v1h-5-4s0-1-1-1c0 0-1-1-2-1l-1-1v-30-30h-7-7v29 30h-1c0 1-2 3-3 3l-1 1h-4-4l-1-1c-1 0-2-1-3-2v-1s0-8-1-30v-29h-6-7v32m83 5v38h7 7v-38-37h-7-8l1 37m75-37h-1c-1 0-2 1-2 1h-1l-1 1h-1c-1 0-3 3-3 4h-1v1 1c-1 0-1 0-1 1s-1 1-1 1v3c0 1 0 2-1 2v44c1 0 1 1 1 3 0 1 0 2 1 3v1l1 1c0 1 1 2 3 4l2 2h1v1h1c2 1 28 1 30 0h2c0-1 2-2 3-3 3-3 3-3 3-4v-1c1 0 1-1 1-1v-2c1 0 1-2 1-3v-3h-7-7v2c-1 2-2 3-3 3v1h-15l-1-1c-3-1-3 0-2-25v-23h1c0-1 2-2 9-2h8l1 1c1 1 1 1 1 2l1 1v1h7 7v-2c0-1 0-3-1-3 0-1-1-4-2-4v-1c0-1-4-5-6-6h-1s-1-1-2-1h-25"/></svg>',
      "className": "smartTvClientForTwitchButton",
      "friendlyName": "SmartTV Client for Twitch",
      "appName": "com.fgl27.twitch",
      "androidName": "com.fgl27.twitch",
      "adbLaunchCommand": "adb shell am start -n com.fgl27.twitch/com.fgl27.twitch.PlayerActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield","xiaomi"], },


  "spotify": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1134 340"><path fill="#1ED760" d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"/></svg>',
      "friendlyName": "Spotify",
      "className": "spotifyButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.spotify.tv.android",
          "androidName": "com.spotify.tv.android",
          "adbLaunchCommand": "adb shell am start -n com.spotify.tv.android/com.spotify.tv.android.SpotifyTVActivity",
      },
      "apple-tv": {
          "appName": "Spotify",
      },
      "chromecast": {
          "appName": "com.spotify.tv.android",
          "androidName": "com.spotify.tv.android",
          "adbLaunchCommand": "adb shell am start -n com.spotify.tv.android/com.spotify.tv.android.SpotifyTVActivity",
      },
      "nvidia-shield": {
          "appName": "com.spotify.tv.android",
          "androidName": "com.spotify.tv.android",
          "adbLaunchCommand": "adb shell am start -n com.spotify.tv.android/com.spotify.tv.android.SpotifyTVActivity",
      },
      "xiaomi": {
          "appName": "com.spotify.tv.android",
          "androidName": "com.spotify.tv.android",
          "adbLaunchCommand": "adb shell am start -n com.spotify.tv.android/com.spotify.tv.android.SpotifyTVActivity",
      },
   },


  "stan": {
      "button": '<svg viewBox="-2.4 -12.3 904.1 290.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2500" height="835"><linearGradient id="stana"><stop offset="0" stop-color="#0072ff"/><stop offset="1" stop-color="#09f"/></linearGradient><linearGradient id="stanb" gradientUnits="userSpaceOnUse" x1="408.639" x2="408.639" xlink:href="#stana" y1="267.317" y2="69.193"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="864.6" x2="864.6" xlink:href="#stana" y1="268.7" y2="-.701"/><path d="M744.2 60.3c-37.3 0-54.3 19-54.3 19v-15h-86.5v132.5s-9.8 4.3-16.5 2.5-6.7-11.3-6.7-11.3V64.3H494v17.8s-14.8-15.8-32.3-19.2c-26.4-5-60.5-1.7-88.5 32.8s-19.8 86.5-19.8 86.5-23.3 14.2-41.7 14.2c-18.3 0-17.3-16.2-17.3-16.2V130h57V64.3h-58V15h-85.7v140.2s-4.6-28.4-70.5-48.8c-32.4-10-54.7-12.8-50.8-27 3.2-11.7 22.5-10.7 22.5-10.7 39.3 0 78.8 26.4 78.8 26.4V15.7s-5.5-2.5-14.8-5.7C145.3.9 82.2-12.3 28.7 24.2 3.1 46.1-2.4 76.8.8 101.4 2.7 114 7.1 124.9 13 132c19.2 22.7 62.5 32.3 82.7 36.7 20.2 4.3 30.8 9.3 30.8 19.8S113.4 206 83 201.2C52.7 196.3 23.7 176 23.7 176l-21 72.7s49.8 29.5 122.7 21.3c72.8-8.2 83.8-63 83.8-63 .3-5.3-3.5 58.3 65.3 64.5 61.2 5.5 104.3-28.7 104.3-28.7s18.7 28.5 63.3 28.5c44.7 0 58.7-27.8 58.7-27.8s6 27.8 52.3 27.8c42.5 0 50.3-7 50.3-7v3h86.3V146s13.4-10.6 29.8-4.8c13.1 4.7 12.8 21.9 12.8 21.9v104.2h85V136.7s-1.7-24.5-11.2-41.8-24.6-34.6-61.9-34.6zm-249.9 129s-8.5 8-26.5 8-28.5-13.3-28.5-30.7c0-17.3 10.5-31.8 28.5-31.8s26.5 8 26.5 8z" fill="url(#stanb)"/><path d="M863.3 197.7c-31.7 0-35.8 25.4-35.8 37.8 0 12 5.8 33.2 36.6 33.2s37.6-20.4 37.6-34.9c-.1-14.6-6.8-36.1-38.4-36.1z" fill="url(#c)"/><g fill="#0088e6"><path d="M388 252.6c-1.4-1.7-2.1-2.8-2.1-2.8s-.2.1-.5.4c.8.8 1.6 1.6 2.6 2.4zM696.9 86.3s17-19 54.3-19c21.9 0 36.3 5.9 46.3 14.3-10.1-11.9-25.7-21.3-53.3-21.3-23.7 0-37.4 6.3-47.3 13.2-4.2 2.9-7 5.8-7 5.8zM300.4 71.3h51v-7h-58zM494.3 189.3s-8.5 8-26.5 8c-6.4 0-14.3-3-21.3-9.2 4.8 7.1 17.9 16.2 28.3 16.2 18 0 26.5-8 26.5-8v-46.5s-2.9-4-7-6.9zM594.9 205.3c6.7 1.8 15.5-1.5 15.5-1.5V71.3h79.5v-7h-86.5v132.5s-11.6 3-18.2 1.8c2.6 2.7 6.1 5.8 9.7 6.7zM358.4 123.7c3.2-9.6 7.9-19.3 14.8-27.8 28-34.5 62.1-37.8 88.5-32.8 17.6 3.3 32.3 19.2 32.3 19.2v-18h86.2v7H501v17.8s-14.8-15.8-32.3-19.2c-26.4-5-60.5-1.7-88.5 32.8s-19.8 86.5-19.8 86.5-23.3 14.2-41.7 14.2c-9.6 0-13.9-4.5-15.8-8.7 2.3 1 5.2 1.7 8.8 1.7 18.3 0 41.7-14.2 41.7-14.2s-3.3-23.7 1.5-45.2c1.7-8.5 3.5-13.3 3.5-13.3zM732.5 267.3h7v-97.2s0-18.2-14.9-26.1c8.1 6.3 7.9 19.1 7.9 19.1zM19.7 138.6c-5.8-7.1-10.1-17.9-11.9-30.2C4.6 83.8 10.1 53 35.6 31.1 89.2-5.3 152.3 7.9 179.9 17c3 1 5.6 2 7.8 2.8v-4.1s-5.5-2.5-14.8-5.7C145.3.9 82.2-12.3 28.7 24.2 3.1 46.1-2.4 76.8.8 101.4 2.7 114 7.1 124.9 13 132c2 2.3 4.3 4.5 6.7 6.6zM30.7 183s29 20.3 59.3 25.2c30.3 4.8 43.5-2.2 43.5-12.7 0-5.3-4.9-11-9.1-14.4.8 1.6 2.1 5.4 2.1 7.4 0 10.5-13.2 17.5-43.5 12.7-30.3-4.9-59.3-25.2-59.3-25.2l-21 72.7s2.7 1.6 7.9 4zM214.7 169.2V22h78.7v-7h-85.7v139.4c4.7 7.4 7 14.8 7 14.8zM834.4 242.5c0-12.4 4.2-37.8 35.8-37.8 11.1 0 19.1 2.7 24.9 6.7-5.5-7.8-15.2-13.7-31.9-13.7-31.7 0-35.8 25.4-35.8 37.8 0 7.9 2.5 19.7 12.9 26.9-4.6-6.6-5.9-14.3-5.9-19.9z"/></g></svg>',
      "friendlyName": "Stan (AU)",
      "className": "stanButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield","xiaomi"],
      "amazon-fire": {
          "appName": "au.com.stan.and",
          "androidName": "au.com.stan.and",
      },
      "apple-tv": {
          "appName": "Stan",
      },
      "chromecast": {
          "appName": "au.com.stan.and",
          "androidName": "au.com.stan.and",
      },
      "nvidia-shield": {
          "appName": "au.com.stan.and",
          "androidName": "au.com.stan.and",
      },
      "xiaomi": {
          "appName": "au.com.stan.and",
          "androidName": "au.com.stan.and",
      },
   },


  "startup-show": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="981" height="436" viewBox="0 0 981 436" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><defs><linearGradient id="jaVv" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1385e1"/><stop offset="100%" stop-color="#0f61a5"/></linearGradient></defs><g stroke="none"><path d="M274.7 1L39 103c-7.3 9-10.3 17.6-9.6 22L147 273.8C42.3 316.6 25.3 334.6 18.7 368.6c-2 9.8-1.8 63.6.1 65.7 1.8 2 6.4.3 33-11.4l215-95.4c45-65-166.3-142-132.5-155C277 120 273.8 101.3 279.2 66.2c1-6.2 1-55.8.1-62.5l-.5-3.7h-2c-1.5 0-2 .2-2.2 1" fill="#0f63ab"/><path d="M39 103c-62 42-42 119.5 5.5 134.5C237 310 272 300 264.4 329.5c14.5-7.5 23-73.6 8-102.8-9.3-18-22.4-27.2-49-34.5C51.8 137.5 22 135 38 105" fill="#1a91e1"/><g fill="url(#jaVv)"><path d="M355.5 46.2c-22.8 3-34.2 16.6-34.2 40.8 0 20.6 6.4 31.2 31.5 52.5 18.2 15.4 23.4 23.6 22.8 35.8-.5 9.6-5.5 14.2-14.8 13.8-9.3-.5-12.6-4.7-13-16.8-.4-10.5-.1-10.2-13.6-10.2s-13.3-.1-13.2 10.2c.4 22.6 11 36.2 31 39.7 32.4 5.7 53.6-11.5 52.2-42.4-.8-18.3-7.7-29.3-30-48.7-16.6-14.3-21.8-21.3-23-31.4-1.4-11.4 3.5-18.5 13-18.5 7.8 0 12 4.7 12.6 14.2.5 7.6 1.4 8 12.6 8.4 14.7.3 16.5-1 15.2-12.2-3-25.5-21.5-38.8-48.7-35.2m59 2c-3.5 1.2-4 2.7-3.8 13.4.3 11 .5 11.2 15 11.2 15.6 0 14-3 14.3 28.2.8 119.4.4 108 3.7 109.5a91 91 0 0 0 22.1 0c3-1.2 2.7 3 3.2-68l.6-66c.6-3.3 1.2-3.4 13.7-3.7 15.6-.3 15 .2 15-13.3-.2-10-.4-10.6-4.2-11.5a1235 1235 0 0 0-79.4.2m109.7-.3c-4 .8-4.6 2.4-7.4 19l-21.8 130c-2.4 14.7-2.6 14.5 11.4 14.5 9.3 0 10-.2 11.7-3 .8-1.3 1-2 3-14 2-12.7 1.2-12 19.3-12 17.7 0 16.3-1 19 14.7 2.7 15.4 2.2 15 18.5 14.6 12.6-.3 12 1 8.4-21.4-23.4-140-24-141-28-142a431 431 0 0 0-34.1 0m82.2 0c-5 1-4.8-4.6-4.3 81.8.6 82.4.4 79 3 80.5a61 61 0 0 0 22.9 0c2.4-1.7 2.3-1 2.7-31.7.3-35.8-.4-33 9.4-32.8 8.4.3 12.5 2.4 15.2 7.6 2 4 2.3 5.7 2.6 27.7.6 31.6-.2 30.2 16.3 30.2 13.4 0 13.8-.2 12.6-7.6a222 222 0 0 1-.5-22c.1-29.7-1.2-36-9.6-44.4-5.8-5.8-5.7-5.4-.4-10.7 8.5-8.6 9.8-13.2 9.8-34.6.1-28.6-6.2-38.3-28-43.2a530 530 0 0 0-51.9-.8m93.6 0c-4.4 1-4.8 2.2-4.7 12.4.1 12.6-.4 12.2 15.2 12.5 12.3.3 13 .4 13.5 3.7 1.2 135.2 1 132 3.5 133.7a45 45 0 0 0 24.1-.8c1.5-1.7 1.4-.4 2-69 .5-70.4.3-66 3.2-67 .8-.3 5.3-.5 11.2-.5 15-.1 15 .1 15-12.6 0-10-.3-11.2-4-12-2.2-.6-76.4-.8-78.8-.2m96.3 0c-1.8.5-3.2 1.6-3.8 3-1.2 3.3 0 127 1.4 133 4.3 19.6 19 29.7 42.4 29 24.5-.7 37.7-13.2 39.3-37a3315 3315 0 0 0 .4-125.1c-1.3-3-2-3.3-12-3.4-10.2-.2-12.7.2-14.2 2.3l-1 1.2v128.5l-1 2.4c-4.5 10-20.8 10-25.4 0l-1-2.4-2.3-131a99 99 0 0 0-22.7-.6M898 48c-1.5.4-2.3 1-3 2l-1 1.5V80l1.4 128.2c1 2.6 2.3 3 13.5 3 15 0 13.5 3.2 13.8-30s-.6-30.6 11-30.6c23.6 0 36.6-8 42.4-26 1-3 2-6 2.4-6.8a182 182 0 0 0 0-37.6c-.5-1-1.4-3.4-2-5.6-4.3-14.3-13-22.2-28.5-25.7-5-1-46.2-1.6-50-.6M650 74c6 2.7 7 5.5 7 22.7 0 14.7-.2 16-3 19.5-4.5 5.2-19 7-21.7 2.7-1-1.6-1-40.4-.2-43 1.2-3.4 12-4.5 18-1.8m292 .1c5.7 2.7 6.4 5.2 6.4 26 0 23.8-1 25.6-15 26-11 .3-10.2 2.5-10-26.8.1-28.8-.7-26.5 10-26.3 5.6.1 6.4.3 8.7 1.3M541.3 93.8c1 2 10 54 10.6 60.3.4 4.6-1.2 5.3-12 5.3-13 0-13 0-10.3-15L534 118c4-25 5.2-28.4 7.3-24"/><path d="M467 224.7c-18.6 3.7-29 19-28 41.5.7 17 8 27.4 30 42.4l22 16.2c9 8.6 12 15.3 12 26 .1 18.8-9 28.8-26.3 29-16.7 0-25.3-9.2-26-28-.5-9.7-1-11-6-11-5.3 0-6.4 2.6-5.5 12.7 1.8 21.2 11.7 33 30.2 35.7 28.5 4.4 47.7-13 46-42-1-17.6-8.3-27.2-34-44.7-21.6-14.6-28-23-28.8-37-1-21.2 12-33.5 31-29.7 11.8 2.3 17.6 9.6 19.3 24.5.8 7.3 2 9 6.7 9 6.5 0 8-7.3 4.2-20.8-5.2-18.7-24-28.5-46.5-24m194-.3c-14.7 2.7-24.2 11.7-28.5 27l-1.2 4.2v49c.1 54.2 0 52.8 3 61.5 4 12 13.6 20.4 25.6 22.7 27.2 5.2 46.8-8.3 49.4-34a2421 2421 0 0 0 .5-96.8c-3.2-25-22.6-38.3-48.7-33.6m-125.5 1.4c-3 1.6-2.8-.5-2.6 41.3l1.4 118.6c2 4 9.5 3.6 10.6-.6 1-71.7 1-70.7 3.8-71.8a429 429 0 0 1 48.1-.1c3 1.6 3-.8 3.2 37 .3 36.7.3 35.8 2.8 37.4 4 2.6 9 .1 9.4-5 .6-6.8 1-151.7.5-153.6-1.4-5-10.6-5.7-12.6-1l-2 73a433 433 0 0 1-48.4.3c-3.8-1.2-3.5 1.5-3.4-37l-2-38c-1.4-1-6.8-1.4-8.6-.4m193.5-.3c-3.7 1.6-3.8 1.3 5.7 52.7l18 97.6c2.2 12 2.4 12.4 9.7 12.7 9.4.3 8 3.2 15.6-35.5l13.3-69.3c3.6-20.2 5.3-20 9 1.4 19 102.2 20 103.5 26.6 103.5 7.8 0 8-.2 11.6-21L857.3 263c6.6-36.4 6.5-35.5 3.3-37-5-2.6-9 .5-10.4 7.8l-22.4 127.2c-2.4 2.2-2.5 2-9.3-41l-3.8-23.7-3.6-22-3-18.7-2.7-16.5c-1.8-11.2-3-13-8.5-13.3-7-.5-8 1.3-10.4 15.4l-14 82.8c-4.4 26.7-6 34.7-7 36.7-1.3 2.6-2.6 2.2-3.5-1a2703 2703 0 0 1-11.8-66.8l-2.6-15.3-3.2-18.2c-5.3-31.2-5.6-32-8.3-33.4-1.6-.8-5.6-1-7.2-.4M676.7 236c14 2.8 19.4 11.3 20 31.8.6 16.7.7 87.2.1 90-3 14.6-12 22-26.7 22a24 24 0 0 1-25.5-19.2l-1-3.5.2-46.6c.1-53 .3-55.8 3.7-62.5 5-10 16.4-14.6 29-12"/></g></g></svg>',
      "friendlyName": "StartupShow",
      "className": "startupShowButton",
      "appName": "Startup Show",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield","xiaomi"],
      "amazon-fire": {
          "androidName": "tv.startupshow.androidtv",
          "adbLaunchCommand": "adb shell am start -n tv.startupshow.androidtv/io.nitrix.tvstartupshow.ui.activity.TvSplashActivity",
      },
      "chromecast": {
          "androidName": "tv.startupshow.android",
          "adbLaunchCommand": "adb shell am start -n tv.startupshow.android/io.nitrix.tvstartupshow.ui.activity.TvSplashActivity",
      },
      "nvidia-shield": {
          "androidName": "tv.startupshow.android",
          "adbLaunchCommand": "adb shell am start -n tv.startupshow.android/io.nitrix.tvstartupshow.ui.activity.TvSplashActivity",
      },
      "xiaomi": {
          "androidName": "tv.startupshow.android",
          "adbLaunchCommand": "adb shell am start -n tv.startupshow.android/io.nitrix.tvstartupshow.ui.activity.TvSplashActivity",
      },
   },


  "starz": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 247.504" width="1000" height="247.504"><path style="fill:#d2ff00;fill-opacity:1;stroke:none" d="m440.275 782.697 20.686-41.438s-31.747-30.308-87.457-30.308c-50.445 0-83.028 29.748-83.028 71.933 0 90.84 130.291 57.973 130.291 104.945 0 18.932-19.131 26.643-37.837 26.643-46.078 0-78.292-36.266-78.292-36.266l-20.365 43.22s35.122 36.029 96.882 36.029c50.369 0 87.3-24.615 87.3-74.079 0-89.038-130.163-57.08-130.163-104.797 0-14.248 13.834-24.44 34.392-24.44 35.786 0 67.59 28.558 67.59 28.558zM547.117 953.483v-194.22h-70.625v-44.73h190.1v44.73h-70.626v194.22zM744.28 713.235 623.627 953.47h50.284l18.575-37.189h102.996l18.833 37.189h50.799L744.279 713.235zm-.148 101.23 29.243 57.787h-58.67l29.427-57.788zM876.113 714.522v238.949h48.85v-87.105h34.135l49.879 87.105h56.059l-56.61-98.692c24.37-11.751 40.866-33.35 40.866-66.983 0-36.78-25.577-73.274-85.486-73.274h-87.693zm48.85 44.73h40.02c21.983 0 35.202 12.44 35.202 29.794 0 19.028-15.429 30.237-35.202 30.237h-40.02V759.25zM1085.635 759.263v-44.73h197.638L1160.38 909.93h120.063v43.553h-204.814l122.232-194.22z" transform="translate(-283.773 -710.45)"/></svg>',
      "friendlyName": "Starz",
      "className": "starzButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.starz.starzplay.firetv",
          "androidName": "com.starz.starzplay.firetv",
      },
      "apple-tv": {
          "appName": "STARZ",
      },
      "chromecast": {
          "appName": "com.bydeluxe.d3.android.program.starz",
          "androidName": "com.bydeluxe.d3.android.program.starz",
      },
      "nvidia-shield": {
          "appName": "com.bydeluxe.d3.android.program.starz",
          "androidName": "com.bydeluxe.d3.android.program.starz",
      },
      "xiaomi": {
          "appName": "com.bydeluxe.d3.android.program.starz",
          "androidName": "com.bydeluxe.d3.android.program.starz",
      },
   },


  "steam-link": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427.1 92.82"><defs><style>.cls-1{fill:#ffffff;}</style></defs><path class="cls-1" d="M45.45,1.61A45.6,45.6,0,0,0,0,43.56L24.44,53.67a12.82,12.82,0,0,1,7.27-2.25l.72,0L43.3,35.69v-.23a17.2,17.2,0,1,1,17.2,17.2h-.39L44.6,63.72c0,.2,0,.41,0,.61a12.91,12.91,0,0,1-25.57,2.54L1.57,59.65a45.6,45.6,0,1,0,43.88-58Z"/><path class="cls-1" d="M28.58,70.81,23,68.5a9.69,9.69,0,1,0,5.3-13.25l5.79,2.39a7.13,7.13,0,1,1-5.49,13.17Z"/><path class="cls-1" d="M72,35.46A11.47,11.47,0,1,0,60.5,46.92,11.48,11.48,0,0,0,72,35.46Zm-20,0a8.61,8.61,0,1,1,8.6,8.61A8.61,8.61,0,0,1,51.91,35.44Z"/><path class="cls-1" d="M322,60.75v3.12H302.21V30.54h3.51V60.75Z"/><path class="cls-1" d="M331,63.87V30.54h3.52V63.87Z"/><path class="cls-1" d="M371.44,63.87,351.51,36.73V63.87H348V30.54h3.11l19.82,27.14V30.54h3.53V63.87Z"/><path class="cls-1" d="M392.86,48.76l-2.57,2.72V63.87h-3.55V30.54h3.55V47.21L405.6,30.54h4.45L395.32,46.16l15.84,17.71h-4.69Z"/><path class="cls-1" d="M139,33.24l-3,5.21a14.78,14.78,0,0,0-8.08-2.56c-3.08,0-5,1.28-5,3.57,0,2.78,3.39,3.43,8.43,5.24,5.42,1.91,8.54,4.17,8.54,9.13,0,6.8-5.34,10.61-13,10.61a23.53,23.53,0,0,1-11.73-3.08l2.17-5.77A20.46,20.46,0,0,0,126.49,58c4,0,6-1.5,6-3.71,0-2.52-2.94-3.29-7.68-4.85-5.4-1.81-9.14-4.17-9.14-9.67,0-6.2,5-9.76,12.1-9.76A19,19,0,0,1,139,33.24Z"/><path class="cls-1" d="M162.62,36.53V63.87h-7V36.53H145.51v-6h27.21v6Z"/><path class="cls-1" d="M186.93,36.51V44h13.35v6H186.93v7.82h15.49v6H180V30.54h22.47v6Z"/><path class="cls-1" d="M218,57.4l-2.21,6.47h-7.31L221,30.54h7l12.85,33.33h-7.57L231,57.4Zm6.45-18.91L219.9,51.84h9.19Z"/><path class="cls-1" d="M276.16,43.43,267,62.9H263.1l-9-19.3V63.87h-6.68V30.54h6.66L265.32,54.6l10.8-24.06h6.72V63.87h-6.68Z"/><path class="cls-1" d="M417.34,31.29V37h-.85V31.29h-2.1v-.74h5.05v.74Z"/><path class="cls-1" d="M427.1,37h-.83V32.22l-2.18,4.66h-.47l-2.17-4.66V37h-.83v-6.4h.85l2.42,5.24,2.35-5.24h.86Z"/></svg>',
      "friendlyName": "Steam Link",
      "className": "steamLinkButton",
      "appName": "Steam Link",
      "androidName": "com.valvesoftware.steamlink",
      "deviceFamily": ["apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "chromecast": {
          "adbLaunchCommand": "adb shell am start -n com.valvesoftware.steamlink/com.valvesoftware.steamlink.SteamShellActivity",
      },
      "nvidia-shield": {
          "adbLaunchCommand": "adb shell am start -n com.valvesoftware.steamlink/com.valvesoftware.steamlink.SteamShellActivity",
      },
      "xiaomi": {
          "adbLaunchCommand": "adb shell am start -n com.valvesoftware.steamlink/com.valvesoftware.steamlink.SteamShellActivity",
      },
  },

  "stream-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 738 157" width="738" height="157" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd"><path style="opacity:1" fill="#00b9f2" d="M238.5-.5h20c15.835 2.416 29.835 8.916 42 19.5 6.767 5.649 6.434 10.982-1 16-1.789.52-3.456.187-5-1-20.175-19.271-43.509-24.271-70-15a72.828 72.828 0 0 0-14 8 157.586 157.586 0 0 1-12 9.5c-3.754-2.084-6.421-5.084-8-9 7.423-10.24 17.09-17.74 29-22.5 6.289-2.507 12.623-4.34 19-5.5z"/><path style="opacity:1" fill="#00296c" d="M49.5 156.5h-19c-12.32-2.102-22.653-7.768-31-17v-3a207.956 207.956 0 0 1 13.5-10A54.972 54.972 0 0 0 31.5 138c13.127 3.068 23.96-.432 32.5-10.5 3.718-7.027 3.218-13.694-1.5-20a50.155 50.155 0 0 0-14-8.5c-12.753-2.545-24.42-7.545-35-15C1.553 70.255-.614 55.089 7 38.5 19.117 22.542 35.284 16.042 55.5 19c7.666.333 14.666 2.667 21 7 3.063 2.06 5.396 4.727 7 8-3.65 6.014-8.65 10.014-15 12-8.087-8.803-18.087-11.803-30-9C24.28 41.273 19.448 50.44 24 64.5a20.24 20.24 0 0 0 7.5 7.5 984.532 984.532 0 0 1 39 15c13.222 8.655 18.055 20.822 14.5 36.5-2.079 11.649-8.246 20.482-18.5 26.5-5.407 3.209-11.074 5.376-17 6.5z"/><path style="opacity:1" fill="#00b9f2" d="M503.5 21.5c31.002-.167 62.002 0 93 .5 1.759 1.008 2.926 2.508 3.5 4.5a486.28 486.28 0 0 1 7.5 19.5 3.944 3.944 0 0 1-1 2 720.565 720.565 0 0 0-37.5 1.5c-.5 34.665-.667 69.332-.5 104a207.49 207.49 0 0 1-28.5-1c-.5-34.665-.667-69.332-.5-104-12.005.166-24.005 0-36-.5a89.163 89.163 0 0 1 0-26.5zM737.5 23.5v1a7150.775 7150.775 0 0 0-53 128c-8 1.333-16 1.333-24 0a3558.296 3558.296 0 0 1-51-130.5 240.488 240.488 0 0 1 31 0 4.451 4.451 0 0 1 2 1.5 419671.42 419671.42 0 0 0 31 82c1.299-.59 2.132-1.59 2.5-3A1689.296 1689.296 0 0 1 707.5 22c10.255-1.1 20.255-.6 30 1.5zM236.5 30.5c20.218-2.593 37.885 2.74 53 16 .985 1.598 1.151 3.265.5 5-2.094 2.603-4.594 4.603-7.5 6-7.705-6.018-16.372-10.185-26-12.5-16.176-2.46-30.176 1.874-42 13-1 .667-2 .667-3 0a81.307 81.307 0 0 1-6.5-6.5c-.667-1-.667-2 0-3 9.026-8.758 19.526-14.758 31.5-18z"/><path style="opacity:1" fill="#00296c" d="M97.5 40.5a70.918 70.918 0 0 1 16.5 1c.5 7.66.666 15.326.5 23 7.587-.314 15.087.02 22.5 1 .799 4.587.632 9.087-.5 13.5-7.247.185-14.413.685-21.5 1.5a624.938 624.938 0 0 0 0 50c1.27 4.27 4.104 6.77 8.5 7.5 4.283.627 8.449.127 12.5-1.5a3.943 3.943 0 0 1 2 1 42.479 42.479 0 0 1 0 13c-1.701 1.91-3.867 3.077-6.5 3.5a72.464 72.464 0 0 1-17 0c-10.8-2.474-16.633-9.308-17.5-20.5l-1-53a79.54 79.54 0 0 0-17.5-1 130.995 130.995 0 0 1 0-15 79.54 79.54 0 0 0 17.5-1c.2-7.745.7-15.412 1.5-23zM245.5 61.5c32.489 2.58 47.489 20.247 45 53h-70c.504 9.833 5.171 17 14 21.5 15.337 6.3 28.337 3.134 39-9.5a216.167 216.167 0 0 1 11.5 8c.667 1.333.667 2.667 0 4-17.118 16.87-36.952 20.703-59.5 11.5-17.794-10.756-25.628-26.59-23.5-47.5 4.076-24.913 18.576-38.58 43.5-41zm-5 15c18.396-2.594 28.896 5.073 31.5 23a670.389 670.389 0 0 1-51.5 1c1.605-12.268 8.272-20.268 20-24zM331.5 61.5c10.087-.112 19.421 2.388 28 7.5 5.595 4.59 9.095 10.424 10.5 17.5.5 21.997.667 43.997.5 66a98.432 98.432 0 0 1-14-.5 51.727 51.727 0 0 1-1.5-9.5 3.647 3.647 0 0 0-1.5-1c-9.871 11.013-22.204 15.18-37 12.5-19.136-5.105-26.303-17.272-21.5-36.5 2.055-5.388 5.555-9.554 10.5-12.5a60.648 60.648 0 0 1 17-6c10.541-.986 21.041-1.82 31.5-2.5.727-8.598-2.773-14.765-10.5-18.5-13.088-3.876-24.755-1.376-35 7.5-4.225-3.036-7.392-6.703-9.5-11 9.357-8.098 20.191-12.431 32.5-13zm-1 49c7.674-.166 15.341 0 23 .5 2.059 14.216-3.607 23.883-17 29-5 .667-10 .667-15 0-12.494-5.808-14.161-13.808-5-24a126.836 126.836 0 0 1 14-5.5zM191.5 62.5a18.07 18.07 0 0 1 8 2 48.73 48.73 0 0 1 .5 17c-6.11-.408-12.277.092-18.5 1.5-8.896 3.903-13.396 10.736-13.5 20.5l-1 49a70.907 70.907 0 0 1-16.5 1c-.167-29.335 0-58.669.5-88 4.748-1.135 9.581-1.302 14.5-.5l1.5 1.5 1 9c6.368-7.098 14.201-11.431 23.5-13zM424.5 62.5c12.303-.016 21.969 4.984 29 15 11.324-13.034 25.324-17.2 42-12.5 7.77 2.77 13.27 7.937 16.5 15.5a52.48 52.48 0 0 1 3 15c.667 19 .667 38 0 57a70.907 70.907 0 0 1-16.5 1c.167-17.337 0-34.67-.5-52 .456-13.122-5.71-20.789-18.5-23a68.567 68.567 0 0 0-14 4.5 26.597 26.597 0 0 0-6.5 10.5 2059.48 2059.48 0 0 0-2.5 59l-8 1c-3.113-.062-5.946-.729-8.5-2-.06-20.376-.727-40.709-2-61-2.907-7.131-8.241-11.131-16-12-10.612 1.285-17.612 6.951-21 17a2039.874 2039.874 0 0 0-2.5 57c-5.333 1.333-10.667 1.333-16 0a1214.62 1214.62 0 0 1-.5-85 9.457 9.457 0 0 1 1.5-2.5c5.058-1.01 9.891-.51 14.5 1.5a42.758 42.758 0 0 0 1.5 9c6.873-7.269 15.206-11.602 25-13z"/></svg>',
      "friendlyName": "StreamTV",
      "className": "streamTVButton",
      "appName": "com.buckeye.tv.platform",
      "androidName": "com.buckeye.tv.platform",
      "adbLaunchCommand": "adb shell am start -n com.buckeye.tv.platform/com.mobitv.client.connect.mobile.MainShellActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "streamz": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 139 24" width="139" height="24" xml:space="preserve"><g><path d="M18.417 10.288a5.336 5.336 0 0 1 .398-2.059H0v3.918h18.74a5.087 5.087 0 0 1-.323-1.86" fill="#FED71F"/><path d="M18.739 12.143H0v4.007h25.479c-2.433-.727-5.713-1.356-6.74-4.008" fill="#FF0A5A"/><path d="M25.479 16.152H0v3.929h17.868a7.926 7.926 0 0 1-.187-.385l3.185-1.849c.619 1.571 2.059 2.51 4.024 2.51H25.177c1.763 0 3.123-.588 3.123-2.057 0-1.15-1.23-1.671-2.821-2.155" fill="#CC0243"/><path d="M17.868 20.08H0V24h25.124c-3.464-.016-6.005-1.506-7.253-3.914" fill="#F20D3A"/><path d="M18.815 8.229c.894-2.146 3.199-3.45 5.978-3.556H0V8.23h18.815z" fill="#E64400"/><path fill-rule="evenodd" clip-rule="evenodd" d="m37.891 0-3.968 1.176v16.922c0 4.777 2.426 6.467 8.525 5.732v-3.566c-3.018.143-4.557.183-4.557-2.17V8.23h4.557V4.661h-4.557V0zM22.314 10.215c0-1.322 1.249-1.947 2.683-1.947 1.506 0 2.793.662 3.45 2.095l3.343-1.868c-1.293-2.426-3.785-3.823-6.797-3.823-3.748 0-6.724 2.169-6.724 5.624 0 3.857 3.4 4.82 6.212 5.618 1.982.562 3.672 1.04 3.672 2.392 0 1.469-1.36 2.057-3.124 2.057-2.02 0-3.491-.992-4.079-2.646l-3.417 1.979c1.175 2.646 3.821 4.3 7.496 4.3 3.97 0 7.165-1.985 7.165-5.66 0-3.995-3.414-4.944-6.23-5.726-1.974-.55-3.654-1.016-3.654-2.395h.004zM48.715 8.23c1.103-2.497 3.345-3.57 5.66-3.57l.003 4.3c-2.609-.183-5.66 1.182-5.66 5.298V24h-3.97V4.66h3.968v3.57zm15.358-3.564c-5.767.002-9.698 4.228-9.698 9.665 0 5.511 3.932 9.665 9.994 9.665 3.601 0 6.358-1.508 8.047-4.006l-3.27-1.911c-.881 1.293-2.535 2.278-4.743 2.278-2.939 0-5.254-1.469-5.88-4.336H73.15c.085-.547.133-1.1.143-1.653 0-5.29-3.747-9.7-9.22-9.702zM58.49 12.79c.55-2.756 2.57-4.52 5.547-4.52 2.389 0 4.704 1.36 5.256 4.52H58.49zm25.818-8.128c5.405 0 9.696 4.066 9.696 9.544V24h-3.97v-2.367c-1.6 1.394-3.57 2.367-5.726 2.367-5.368 0-9.705-4.228-9.705-9.669 0-5.478 4.337-9.669 9.705-9.669zm-5.734 9.669c0 3.346 2.499 5.809 5.734 5.809 3.236 0 5.735-2.463 5.735-5.809s-2.5-5.809-5.735-5.809c-3.235 0-5.734 2.463-5.734 5.809zm36.024-9.67c-2.209 0-4.168 1.093-5.517 2.299-1.351-1.204-3.295-2.3-5.493-2.3-4.515 0-7.549 2.65-7.549 6.596V24h4.106V11.978c0-1.373.598-3.441 3.449-3.441s3.449 2.067 3.449 3.441V24h4.122V11.978c0-1.373.598-3.441 3.449-3.441s3.449 2.067 3.449 3.441V24h4.077V11.256c0-3.945-3.018-6.595-7.522-6.595h-.02zm23.665 2.647-8.562 12.773h8.929v3.915h-14.33V21.35l8.598-13.121h-8.598V4.662h13.963v2.646z" fill="#fff"/></g></svg>',
      "friendlyName": "streamz (BE)",
      "className": "streamzButton",
      "deviceFamily": ["apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "apple-tv": {
          "appName": "Streamz",
      },
      "chromecast": {
          "appName": "be.dpgmedia.streamz",
          "androidName": "be.dpgmedia.streamz",
      },
      "nvidia-shield": {
          "appName": "be.dpgmedia.streamz",
          "androidName": "be.dpgmedia.streamz",
      },
      "xiaomi": {
          "appName": "be.dpgmedia.streamz",
          "androidName": "be.dpgmedia.streamz",
      },
  },


  "stremio": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="217" height="66" viewBox="0 0 217 66" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M32.2-.5L65 32.2 32.2 64.8-.5 32.2 32.2-.5z" fill="#8a5aab"/><path d="M32.2 64.7L-.5 32H65L32.2 64.7z" fill="#3a497d"/><path d="M92.8 26c-.3-.1-.7-.3-1-.5-.5-.2-1-.3-1.4-.4-.6-.2-1.2-.3-1.8-.4-.8-.1-1.6-.2-2.3-.1-1-.1-1.8 0-2.7.1-.7.1-1.4.3-2 .6-.5.2-1 .5-1.2 1s-.5 1-.5 1.3.2 1 .4 1.2a7 7 0 0 0 1 .8c.5.3 1 .5 1.6.7l2 .6 2.2.5 2 .6 2 .7 1.7 1 1 1.2c.2.5.4 1 .4 1.6s-.2 1-.4 1.7c-.3.4-.6 1-1 1.2-.4.4-1 .7-1.5 1-.5.2-1 .4-1.7.5l-2 .3h-2c-1.3 0-2.6-.1-4-.4a42 42 0 0 1-3.4-.8v-2c1 .6 2.3 1 3.6 1.3s2.6.4 4 .4c1 0 1.8 0 2.7-.2a8 8 0 0 0 2.1-.5c.6-.2 1-.6 1.4-1s.6-1 .5-1.5c.1-.5-.1-1-.4-1.3s-.6-.7-1-1c-.5-.3-1-.5-1.6-.7s-1.2-.4-2-.6l-2-.5-2.2-.6c-.7-.2-1.3-.4-2-.6-.6-.3-1-.6-1.6-1-.4-.3-.8-.7-1-1.2s-.4-1-.4-1.5c0-.6.1-1 .3-1.6.3-.4.6-.8 1-1 .3-.3.8-.6 1.3-.8s1-.4 1.6-.5c.6-.2 1.2-.3 1.8-.3.6-.1 1.2-.1 1.8-.1l2 .1a11 11 0 0 1 1.8.2l1.6.3 1.6.4zm13.2-1v15.7h-1.5V25h-7.8v-1.4h17V25zm23-.2l-1.7-.2c-1 0-1.7.1-2.6.4-.8.2-1.6.5-2.3 1s-1.3.8-2 1.4l-1.6 1.6v12h-1.6V24h1.6v3.5c.5-.6 1-1.2 1.8-1.7.6-.4 1.3-1 2-1.2.8-.3 1.5-.6 2.3-.8s1.6-.3 2.5-.3h.7l.7.1h.6l.5.1V25c-.3 0-.7-.1-1-.1zm21 15l-2 .6-1.7.3-1.8.3h-2c-1.6 0-3-.2-4.6-.6-1.2-.3-2.4-1-3.4-1.7s-1.5-1.7-2-2.7-.8-2.4-.8-3.6c0-1.3.2-2.5.7-3.6s1.2-2 2-2.8c1-.8 2-1.5 3.2-1.8 1.3-.5 2.7-.7 4-.7s2.8.2 4.2.6c1 .4 2 1 3 1.8s1.5 1.7 2 2.8c.5 1.2.7 2.5.7 3.7v.4H133c.1 1 .4 2 .8 3 .5 1 1 1.6 2 2.2s2 1 3 1.4a14 14 0 0 0 4.1.4l2-.1c.7-.1 1.4-.2 2-.4.6-.1 1.2-.3 1.8-.5.4-.2 1-.4 1.3-.6zm-.1-8.4c-.1-1-.3-1.7-.6-2.5-.4-.8-1-1.6-1.5-2-.8-.7-1.6-1.2-2.5-1.5-1.2-.4-2.5-.5-3.7-.5s-2.4.1-3.5.5c-1 .3-1.8.8-2.6 1.5-.7.5-1.2 1.3-1.6 2s-.7 1.6-.8 2.5zm7.7-7.8v2.6c.3-.3.8-.6 1.2-1 .5-.3 1-.7 1.5-1s1-.5 1.7-.7 1.4-.3 2-.3c1 0 2.2.2 3 .8s1.7 1.4 2.2 2.4c.5-.5 1-1 1.6-1.3s1-.8 1.7-1a7 7 0 0 1 1.9-.6c.7-.2 1.3-.3 2-.2.8-.1 1.6.1 2.4.4.6.3 1.2.7 1.7 1.2s1 1 1.2 1.8c.2.7.4 1.4.4 2.2v11.8h-1.6V29.2c0-.6-.1-1.3-.2-2-.2-.5-.5-1-.8-1.4-.4-.4-1-.7-1.4-1-.7-.2-1.3-.3-2-.3-.6 0-1.3.1-2 .3-.6.1-1.2.4-1.7.7-.6.2-1 .6-1.6 1-.4.3-1 .7-1.2 1v.6.6 11.7H168V29.2c0-.7-.1-1.4-.4-2-.4-1-1.3-2-2.4-2.2l-1.8-.2c-.6 0-1.2.1-1.8.3s-1 .5-1.7.8c-.5.3-1 .7-1.5 1-.4.4-.8.8-1 1.2v12.6H156v-17zm30.2 17v-17h1.6v17zm27.8-8.4c.1 1.3-.2 2.7-.8 4-.5 1-1.3 2-2.3 2.7-1 .8-2.2 1.3-3.4 1.6a16 16 0 0 1-4.3.6 16 16 0 0 1-4.3-.6A10 10 0 0 1 197 39a10 10 0 0 1-2.3-2.7c-.5-1.3-.8-2.7-.8-4 0-1 .1-2 .4-2.8.2-.8.6-1.6 1-2.3.4-.6 1-1.2 1.7-1.7.6-.5 1.4-1 2.2-1.2s1.7-.5 2.6-.7l3-.2a21 21 0 0 1 4.3.5c1.2.3 2.4 1 3.4 1.6 1 .8 1.8 1.7 2.3 2.8.6 1.2 1 2.6.8 4zm-1.6 0c.1-1.2-.1-2.2-.5-3.3-.4-1-1-1.7-1.8-2.3a8 8 0 0 0-2.9-1.5c-1.3-.3-2.6-.5-4-.4a11 11 0 0 0-4 .5c-1 .2-2 .7-3 1.4-.8.6-1.4 1.4-1.8 2.4-.8 2-.8 4.3 0 6.4.4 1 1 1.7 1.8 2.3 1 .7 2 1.2 3 1.5a18 18 0 0 0 8 0 8 8 0 0 0 2.9-1.5c.8-.6 1.4-1.4 1.8-2.3.4-1 .6-2.2.5-3.2z" fill="#633f7e"/><path d="M43.7 32.2L27 44.4V20l16.6 12.3z"/></svg>',
      "friendlyName": "Stremio",
      "className": "stremioButton",
      "appName": "com.stremio.one",
      "androidName": "com.stremio.one",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "adbLaunchCommand": "adb shell am start -n com.stremio.one/com.stremio.MainActivity",
      },
      "chromecast": {
          "adbLaunchCommand": "adb shell am start -n com.stremio.one/com.stremio.tv.MainActivity",
      },
      "nvidia-shield": {
          "adbLaunchCommand": "adb shell am start -n com.stremio.one/com.stremio.tv.MainActivity",
      },
      "xiaomi": {
          "adbLaunchCommand": "adb shell am start -n com.stremio.one/com.stremio.tv.MainActivity",
      },
  },


  "surfshark-vpn": {
      "button": '<svg viewbox="0 0 138 32" width="138" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M131.601 9.895a3.197 3.197 0 0 0 3.191 3.196A3.211 3.211 0 0 0 138 9.895a3.213 3.213 0 0 0-3.208-3.204 3.198 3.198 0 0 0-3.191 3.204zm.737 0c0-1.416 1.075-2.522 2.454-2.522 1.378 0 2.454 1.106 2.454 2.522 0 1.408-1.076 2.514-2.454 2.514-1.379 0-2.454-1.106-2.454-2.514zm2.974 1.702h.91l-.693-1.33c.399-.173.667-.544.667-1.002 0-.622-.52-1.123-1.187-1.123h-1.371v3.455h.824v-1.2h.252l.598 1.2zm-.85-1.874v-.907h.399c.312 0 .503.172.503.457 0 .277-.191.45-.503.45h-.399zM129.761 13.425h-4.103l-4.01 4.312V6.691h-3.136v18.327h3.136v-3.063l1.298-1.367 3.065 4.43h3.845l-4.741-6.715 4.646-4.878zM117.348 13.392c-.233-.023-.458 0-.714 0-.978 0-2.567.236-3.265 1.765v-1.765h-3.002v11.626h3.095v-5.295c0-2.495 1.302-3.421 2.884-3.421h1.002v-2.91zM98.442 21.632c0 1.762 1.498 3.386 3.955 3.386 1.708 0 2.808-.495 3.393-1.387l.106 1.387h2.726V17.66c0-2.265-1.357-4.278-5.008-4.278-3.089 0-4.751 1.944-4.938 3.706l2.761.572c.094-.984.843-1.83 2.2-1.83 1.311 0 1.943.663 1.943 1.464 0 .389-.211.427-.866.518l-2.832.412c-1.92.274-3.44 1.395-3.44 3.408zm4.61 1.121c-1.006 0-1.498-.64-1.498-1.304 0-.869.632-1.304 1.428-1.418l2.598-.389v.786c0 1.99-1.217 2.325-2.528 2.325zM89.909 18.208c.07-1.272.84-2.262 2.145-2.262 1.493 0 2.123 1.013 2.123 2.31v6.762h3.101v-7.305c0-2.544-1.352-4.304-4.268-4.304-1.096 0-2.355.087-3.101.982v-7.7h-3.102v18.327h3.102v-6.81zM76.335 21.672c.142 1.255 1.317 3.346 4.795 3.346 3.032 0 4.513-1.778 4.513-3.57 0-1.613-1.151-2.935-3.431-3.383l-1.646-.336c-.634-.113-1.057-.449-1.057-.986 0-.628.658-1.098 1.48-1.098 1.317 0 1.81.829 1.904 1.479l2.61-.56c-.142-1.188-1.246-3.182-4.537-3.182-2.492 0-4.325 1.636-4.325 3.607 0 1.546 1.01 2.823 3.244 3.294l1.527.336c.894.18 1.246.582 1.246 1.075 0 .583-.493 1.098-1.528 1.098-1.363 0-2.044-.806-2.115-1.68l-2.68.56z" fill="#222E3A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M73.187 11.324v-.047a1.89 1.89 0 0 1 1.89-1.891h.677V6.69h-1.527c-2.36 0-4.14 1.775-4.14 4.306v2.396h-1.896v2.91h1.897v8.715h3.099v-8.715h2.567v-2.91h-2.567V11.325z" fill="#222E3A"/><path d="M67.028 13.392c-.233-.023-.459 0-.715 0-.977 0-2.567.236-3.265 1.765v-1.765h-3.001v11.626h3.095v-5.295c0-2.495 1.302-3.421 2.884-3.421h1.002v-2.91zM55.468 25.018h2.833V13.382h-3.088v6.784c0 1.342-.835 1.978-2.205 1.978-1.44 0-2.09-1.036-2.09-2.331v-6.431H47.83v7.066c0 2.52 1.58 4.57 4.342 4.57 1.208 0 2.577-.165 3.204-1.248l.092 1.248zM46.418 11.182c-.398-1.953-2.04-4.491-6.317-4.491-3.333 0-6.143 2.343-6.143 5.418 0 2.612 1.816 4.393 4.626 4.955l2.462.488c1.368.268 2.139 1.34 2.139 2.34 0 1.221-1.02 2.124-2.86 2.124-2.487 0-3.706-1.537-3.855-3.246l-3.183.83c.273 2.465 2.337 5.418 7.013 5.418 4.104 0 6.367-2.684 6.367-5.345 0-2.44-1.716-4.781-4.925-5.392l-2.462-.463c-1.293-.245-1.915-1.001-1.915-1.953 0-1.147 1.095-2.197 2.76-2.197 2.24 0 3.035 1.49 3.21 2.441l3.083-.927z" fill="#222E3A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.266.003 20.156 0h-7.345c-4.808.26-6.829 3.053-7.37 4.54-2.108 6.316-3.419 14.496-4.365 20.4l-.055.343-.308 2.807a4.85 4.85 0 0 0 .143 1.389c.59 1.712 2.371 3.154 6.294 1.717v.003a279.306 279.306 0 0 0 12.61-5.878c2.577-1.49 6.352-4.916 6.546-9.244-.035-3.21-.143-6.574-.36-9.85l-.002.003v-.023c-.018-.269-.037-.58-.056-.904-.037-.622-.078-1.292-.12-1.799a6.261 6.261 0 0 0-.248-.957c-.629-1.403-1.86-2.08-3.16-2.403-.592-.103-1.32-.122-2.094-.141zm-.28 6.532a.657.657 0 0 0-.658-.658 7.559 7.559 0 0 0-7.558 7.56v2.53a4.063 4.063 0 0 1-4.063 4.062.677.677 0 0 0-.678.677v2.069c0 .363.295.657.658.657a7.559 7.559 0 0 0 7.559-7.56v-2.53a4.063 4.063 0 0 1 4.062-4.062.677.677 0 0 0 .678-.677V6.535z" fill="#178A9E"/><path d="M19.328 5.877c.363 0 .658.294.658.657v2.069a.677.677 0 0 1-.678.677 4.063 4.063 0 0 0-4.063 4.063v2.684a7.559 7.559 0 0 1-7.558 7.56.657.657 0 0 1-.658-.658v-2.068c0-.374.303-.677.677-.677a4.063 4.063 0 0 0 4.063-4.063v-2.685a7.559 7.559 0 0 1 7.56-7.559z" fill="#fff"/></svg>',
      "friendlyName": "Surfshark VPN",
      "className": "surfsharkButton",
      "appName": "com.surfshark.vpnclient.android",
      "androidName": "com.surfshark.vpnclient.android",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "svt-play": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 722.63 292.2"><g><polyline fill="#00c800" points="563.77 63.83 563.77 288.56 722.63 176.19 563.77 63.83"></polyline><g fill="#ffffff"><path d="M478.89,292.35c-26.7,0-57.73-14.37-70.87-50.75-4.48-12.39-4.33-21.94-4.36-32V.15h45v64.5h69L501.3,108.58H448.63V209.65c0,7,.36,15.5,3.46,22,5.14,10.71,15.64,17.8,26.8,17.8,7.95,0,16.65-3.31,23.53-8.9l28.11,32.12A77.8,77.8,0,0,1,478.89,292.35Z" transform="translate(-3.69 -0.15)"></path><polygon points="328.99 64.5 269.92 222.88 210.85 64.5 162.65 64.5 245.82 287.5 294.02 287.5 377.19 64.5 328.99 64.5"></polygon><path d="M84.69,292.16c-34.79,0-64-18.24-81-42.54l35.2-25.5c13.66,16.8,29.43,26,44.5,26,18.06,0,33.25-9.21,33.25-24.88,0-16.4-18.6-23.89-29.17-28.4-9.1-3.9-13.61-5.78-23.86-10.18-31.74-13.6-47.94-34.88-47.94-62.86,0-40.55,33.31-63.35,68.9-63.35,27.35,0,52.89,12.87,67,33.67L118.13,118.4c-10.06-10.75-20.57-16-32.11-16-13.56,0-25.65,7.63-25.65,21.62,0,10.47,8.69,19.24,26.59,26.8,3.58,1.51,22.22,9.79,26.74,11.86,32.32,14.82,48,35.07,48,61.9C161.73,265.47,127.93,292.16,84.69,292.16Z" transform="translate(-3.69 -0.15)"></path></g></g></svg>',
      "friendlyName": "SVT Play",
      "className": "svtPlayButton",
      "deviceFamily": ["apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "apple-tv": {
          "appName": "SVT Play",
      },
      "chromecast": {
          "appName": "se.svt.android.svtplay",
          "androidName": "se.svt.android.svtplay",
          "adbLaunchCommand": "adb shell am start -n se.svt.android.svtplay/se.svt.svtplay.ui.tv.MainActivity",
      },
      "nvidia-shield": {
          "appName": "se.svt.android.svtplay",
          "androidName": "se.svt.android.svtplay",
          "adbLaunchCommand": "adb shell am start -n se.svt.android.svtplay/se.svt.svtplay.ui.tv.MainActivity",
      },
      "xiaomi": {
          "appName": "se.svt.android.svtplay",
          "androidName": "se.svt.android.svtplay",
          "adbLaunchCommand": "adb shell am start -n se.svt.android.svtplay/se.svt.svtplay.ui.tv.MainActivity",
      },
  },


  "swiftfin": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="567" height="567" viewBox="0 0 567 567" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><defs><linearGradient id="f4On" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="16%" stop-color="#0057b1"/><stop offset="100%" stop-color="#00d8ea"/></linearGradient></defs><g transform="translate(50 30)" fill="url(#f4On)" stroke="none" fill-rule="nonzero"><path d="M232.7 178.3c-20.4 0-86.2 119.3-76.2 139.4 10 20.2 142.5 20 152.4 0 10-20-55.7-139.4-76.2-139.4z"/><path d="M232.7 0C171 0-27 359.4 3 420s429.4 60 459.3 0S294.3 0 232.7 0zm150.5 367.5c-19.6 39.3-281 39.7-301 0-19.8-39.8 110-275.3 150.5-275.3 40.3 0 170 236 150.4 275.3z"/></g></svg>',
      "friendlyName": "Swiftfin",
      "className": "swiftfinButton",
      "deviceFamily": ["apple-tv"],
      "apple-tv": {
          "appName": "Jellyfin",
      },
  },


  "syncnext": {
      "button": 'Syncnext',
      "friendlyName": "Syncnext",
      "className": "syncnextButton",
      "deviceFamily": ["apple-tv"],
      "apple-tv": {
          "appName": "Syncnext",
      },
  },


  "syncler": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="813" height="138" viewBox="0 0 813 138" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><defs><filter x="-1%" y="-5.9%" id="LJyI" width="102%" height="111.8%"><feGaussianBlur in="SourceAlpha" stdDeviation="3"/><feOffset result="elQj"/><feFlood flood-color="#000" flood-opacity=".5"/><feComposite in2="elQj" operator="in" result="Hd6A"/><feMerge><feMergeNode in="Hd6A"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient id="b8wo" x1="0%" y1="44%" x2="100%" y2="56%"><stop offset="32%" stop-color="#d1213f"/><stop offset="85%" stop-color="#3e2bd6"/></linearGradient><filter id="JWwR" x="-6.7%" y="-5.9%" width="113.4%" height="111.7%"><feGaussianBlur in="SourceAlpha" stdDeviation="3"/><feOffset result="elQj"/><feFlood flood-color="#000" flood-opacity=".5"/><feComposite in2="elQj" operator="in" result="Hd6A"/><feMerge><feMergeNode in="Hd6A"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path d="M41.4.3c-.1.1-1.4.3-3 .5-1.4.1-2.8.4-3 .6-.3.3-1.2.5-4.4 1-.7.2-1.4.4-1.5.5-.1.2-.5.4-1 .4-.4 0-1 .1-1 .3s-.5.3-1 .3-1 .3-1.3.5a24 24 0 0 1-3.5 2C16.4 9 9 15.7 9 17.8c0 .2-.2.5-.5.8-.7.6-3.6 6.6-3.6 7.6 0 .4-.2 1-.3 1-1 1.2-1 17.7 0 19 .1.1.3.6.3 1 0 2 6.7 11 8 11 .2 0 1 .6 1.5 1.2 1 1 7 4.3 7.7 4.3 3 2 4.4 2.8 5.4 3.3 6.5 2.5 5.7 1.8 6 1.8s1 .2 1.3.4c.3.1 1.3.5 2 .7 1 .2 2.2.7 3 1 1.5.7 2.7 1 4.7 1.3.8.1 1.4.3 1.5.5.1.1.7.3 1.4.3.6 0 1.2.1 1.3.3.2.2.8.3 1.4.3.7 0 1.3.2 1.4.4.1.1.7.3 1.4.4l4.4 1c.4.2 1.3.5 2 .7.7.2 1.7.6 2 .8.6.2 2 .8 6.8 2.5 3 1 6.3 3.2 7.8 4.8.4.5 1 1 1.2 1 .5 0 2.6 2 2.6 2.6 0 .2.3.6.7 1 .3.3.7 1 .7 1.4 0 .4.1.8.3 1 .2.1.3.7.3 1.3 0 .7.2 1.3.4 1.4s.3 1 .3 2-.1 1.8-.3 2-.4 1-.4 1.7-.1 1.6-.3 1.7-.3.5-.3.8a13 13 0 0 1-2.5 4.8c-1.5 2-4.8 5.6-5.3 5.6-.2 0-.7.3-1.2.8-1 1-4.5 2.8-7.7 4l-5 1.8a46 46 0 0 1-19.2-.4 24 24 0 0 0-2.6-1c-.8-.2-2.2-.7-3-1l-1.7-.6c-.2 0-1-.3-1.7-.7-.8-.4-1.7-.7-2-.7s-1.2-.6-2.2-1.4c-1-.7-2.5-1.6-3.3-2-.8-.4-1.5-.8-1.6-1-.1-.2-.6-.5-1-.7a38 38 0 0 1-5.9-4.9l-2.8-2.7H10c-2.7 0-4 .7-6.4 3-.5.6-1.2 1-1.4 1-.3 0-1 .7-1.3 1.5-1.6 2.8-1 5.8 1.8 8.3.4.3.7.8.7 1a38 38 0 0 0 6 6c.2 0 1 .7 2 1.6.8.8 2 2 3 2.2a14 14 0 0 1 2 1.3c.8.7 7.8 4.2 8.5 4.2.3 0 .7.1.8.3.2.1 1 .5 2 .7 1 .2 2 .6 2.3.7.5.2 1.3.4 1.8.4.6 0 1 .1 1.2.3s1 .3 1.7.3c1 0 1.6.2 1.8.4.1.2 1 .3 2 .3 1 0 2.2.2 2.3.3a41 41 0 0 0 12.7.8c.4-.2 1.5-.4 2.4-.6l4-.5c1.3-.2 3-.4 3.8-.5 1-.1 1.7-.4 2-.5.2-.2.8-.3 1.3-.3 1 0 3-.6 4-1 .3-.2 1-.3 1.2-.3s1.7-.6 3-1.4l4.8-2.6c1.3-.7 2.6-1.5 3-2 .3-.3.8-.6 1-.6.5 0 6.4-5.8 7.2-7.2.4-.7 1-1.5 1.4-2s1.2-2 2-3.4l2-3.8c1-2 1-2.2 1-3 0-.3.1-.7.3-1 1-1.2 1-20.2 0-21-.2-.1-.3-.5-.3-.8 0-.8-1.6-4-2.3-4.5-.3-.3-.5-.6-.5-.8 0-1-7.4-8.4-10-9.8l-3-1.8a16 16 0 0 0-2.2-1c-.8 0-2.6-1-3-1.5-.2-.3-.6-.6-1-.6-.4 0-4-1.4-5.3-2-.4-.2-1-.4-1.5-.4s-1-.1-1.5-.3c-1-.5-3-1-3.7-1-.4 0-1-.2-1-.4s-.7-.3-1.4-.3c-.6 0-1.2-.1-1.3-.3-.2-.3-3.6-1.4-6.2-2L48 55.6c-.5-.2-1.2-.3-1.6-.3-.5 0-1-.2-1-.4s-.7-.3-1.4-.3c-.6 0-1.2-.2-1.3-.4-.1-.1-.6-.3-1-.3-.4 0-1-.2-1-.3-.1-.2-.5-.4-.8-.4-.4 0-1.8-.5-3.2-1L32 50c-3.3-1.5-9-6-9-7.2-.1-.2-.4-.8-.7-1.2-.4-.5-.7-1.2-.7-1.6 0-.5-.2-1-.4-1-.4-.3-.4-5 0-5.2.2-.1.4-.6.4-1.2 0-.5.1-1 .3-1.2.2-.1.4-.5.4-1 0-.8.3-1.2 2-4 2.3-3.3 9-8 11.5-8 .4 0 .8-.2 1-.4.2-.1.6-.3 1-.3.4 0 1-.1 1-.3.2-.4 1.6-.7 5.5-1 7-.8 9.7-.3 19.4 3.3 2.5 1 5.7 2.5 6 3 .3.3.7.5 1 .5s.7.3 1 .7c.4.3.8.7 1 .7.3 0 1 .4 1.4 1 .6.6 1.2 1 1.4 1s1.3 1 2.4 2c2.7 2.6 3.8 3.2 6 3.2H86l3.7-3.8 3.7-3.7v-2-2.2l-3.5-3.6-4-3.5c-.3 0-.7-.3-1-.7a49 49 0 0 0-12.3-7.2l-3-1.3c-.8-.4-1.7-.7-2-.7-.3 0-.7-.2-.8-.4s-.8-.3-1.4-.3S64 2.3 64 2c-.1-.2-.6-.3-1.2-.3s-1.4-.2-1.8-.4C59.3.5 42-.5 41.4.3m73 1.8c-.3.2-1 .4-1.4.4-2.5 0-1.8 5.4 1 8 .5.4 1 1.2 1.4 2l37 60.3c.3.3 1 1.3 1.4 2.2l.8 1.8V131l1 1c1.7 2 13 1.4 16.2 0l.2-56.2 42.4-68.4c2.7-4.8 1.4-5.7-8-5.5-8.6.2-9 .3-10.2 2.6-.3.7-.8 1.6-1 2L164 58c0 1.2-1.2-.1-3-3L128.2 2.3c-1.7-.4-13-.6-13.7-.2M239 2c-.1.1-.7.3-1.3.4-2.5.5-2.3-5-2.4 66V132l.8.6c1.6 1.4 2.2 1.5 7.2 1.5s6.2-.2 7.5-1.3c.6-.5.6-3.4.6-52.3V28.7l1.6 1.7 1.5 1.7c0 .6 2.8 4.3 5 7 .4.4 1 1 1.2 1.7l66.3 87c.5.4 1 1 3 4s14 3.6 17 1l.8-.6V68.3 4.7l-1-1c-2-1.7-2.5-2-7.3-1.7-5.2.1-6.3.4-7 1.4-.6.7-.6 4-.6 51v50.4l-1.6-1.5c-.8-1-1.5-1.7-1.5-2s-.3-.7-.7-1c-.4-.4-.7-.8-.7-1s-.7-1.2-1.6-2.2L255 6c-.4-.4-.7-.8-.7-1 0-.7-2.2-2.6-3-2.6-.4 0-.8-.2-1-.4-.3-.3-11.3-.5-11.6-.1m262.8.3c-.4.2-1.3 1-1.8 1.4l-1 1V68c0 70-.2 64.4 2 65.5 1 .5 5.3.5 39.8.5l41.2-1.7 1-.8v-5.8-5.8l-1.4-1.3-1.4-1.4h-32.6H515V60.6l-2.2-58.3a41 41 0 0 0-11.1 0m100.7 0c-2.5 1-2.3-5-2.3 66V132l.8.6c1.7 1.6 1.2 1.6 47 1.4l44.6-.3c3-.8 3.3-14.2.3-16a1542 1542 0 0 0-38.1-.3 551 551 0 0 1-38.1-.4 531 531 0 0 1 0-43.7c.3-.3 7.4-.4 30-.4h29.7l1-1.2c1.7-1.7 1.8-2.2 1.8-7.2 0-4.6-.1-5.3-1.3-6.8-1.3-1.7-.7-1.6-32-1.7l-29.5-.1-.1-18.2V19.4l.8-.4c.7-.3 10.5-.4 38-.4h37l.7-.8c1.4-1.6 1.5-2.2 1.5-7.7 0-6.5-.3-7.4-2.3-7.8a2658 2658 0 0 0-89.3 0m114-.2c-.3.2-1 .4-1.3.4-2 0-1.8-3.6-1.8 65.8l.4 64.2c1.2 1.4 12.7 2.6 13.5 1.3.1-.2.6-.3 1-.3.7 0 1-.3 1-1 .1-.5.3-1.2.5-1.5a385 385 0 0 0 .3-22.7V86l20 .1h20.2l24.3 47.5c1.5.7 12.8.6 14.2-.1 1.2-.6 2-2 1.4-3-.2-.3-.3-1-.3-1.3s-.3-1.3-.7-2c-.4-.7-.7-1.5-.7-1.7l-20-44.2 2.4-1.4a7 7 0 0 1 1.8-.9c.1 0 .6-.4 1-1 .4-.5 1-.8 1-.8 1.2 0 9.8-10 11.5-13.4.4-.8.7-1.7.7-2 0-.3.4-1 .7-1.7.4-.7.7-1.6.7-2 0-.4.2-1 .4-1 .1-.1.3-.7.3-1.4 0-.6.1-1.2.3-1.3.3-.2.7-2 1-5.2.1-1 .3-2.2.4-2.4a13 13 0 0 0 0-6.2c-.1-.2-.3-1-.5-2.2l-1-5c-.2-.1-.3-.6-.3-1 0-1-.5-2.8-1-4-.1-.3-.3-.8-.3-1 0-.7-3-6.3-4-7.6-.5-.7-1.4-1.8-2-2.5-.6-.7-1-1.5-1-1.6 0-.4-1.8-2.2-2.2-2.2-.2 0-1.4-1-2.6-2.2-1.2-1.3-2.4-2.3-2.6-2.3s-.6-.2-.8-.5c-.6-.7-9.2-4.8-10.6-5l-2.5-.4c-.7-.1-1.4-.4-1.5-.5-.1-.2-1.3-.3-2.7-.3s-2.6-.2-2.8-.4a1307 1307 0 0 0-56 0M773 19c.1.2.8.4 1.4.4s1.3.1 1.4.3.5.4.8.4c2.2 0 12.4 7 12.4 8.7 0 .2.2.7.6 1 .3.3 1 1.4 1.4 2.3l1.5 2.7c.3.5.6 1.2.6 1.6 0 .3.1.8.3 1s.4 1 .4 1.7.1 1.6.3 1.7.4 1.7.4 3.6-.2 3.5-.4 3.6-.3.7-.3 1.4c0 .6-.2 1.2-.4 1.3-.2.2-.3.5-.3 1 0 .3-.6 1.7-1.4 3l-2 4c-1 1.7-3 4-4.5 5-.7.4-1.6 1-2 1.6-.5.5-1 1-1.3 1-.2 0-.6.3-1 .7-.3.4-1 .7-1.2.7s-1 .2-1.7.5c-2.4 1.2-4 1.3-26 1.4l-22 .1V44 18.6h21.4l21.6.3M421.7 46.3c-2 2.2-2 1.4-2 21.6s-.1 19.2 2 21.5c2 2 4.5 1.7 8.4-1.2C456.6 72 458 70 458 68.2s-.2-2.7-1.6-3.7l-29-18.5c-1.4-1-4.5-1-5.6.3" filter="url(#LJyI)" fill="#e3e3e3" stroke="none" transform="translate(.3)"/><path d="M98.7.3c-1.6.5-3.4 2-4.3 3.7-1 2.3-1 2.2-4.4 1C74.6-1 54.7-.1 39.2 7a74 74 0 0 0-24.4 18.7c-.6.8-1.7 2-2.4 3-2.2 2.8-6.2 10.2-8 15l-3 8.7c-.4 1.4-.7 4.7-1 5-1 12 .2 23.3.4 25.3.6 3.7 1.6 6 1.8 6.7.6 2 2 5.4 3 7.4.4 1 1 2 1 2.4.8 2.2 5.2 9 7.8 12.3 22 26.6 62 32.8 90.4 14 4-2.8 4.4-3 5.2-4.5 1.5-3 .6-5.6-4-12.2-3.3-4.8-5.7-5-11.5-.7-4.3 3-14 7.4-18.2 8l-3.8.6c-13 2.3-30.7-4.2-40.2-14.7-2.8-3-7.3-9.4-7.3-10.2 0-.2-.1-.3-.2-.3-.2 0-.3-.1-.3-.2s-.4-1-.8-2l-1-2.3c-.4-1-1.6-4.3-1.8-5-.1-.3-.2-1-.4-1.4-.1-.5-.3-1.6-.4-2.4-.2-1-.4-2.2-.5-3a63 63 0 0 1 0-12.3c.1-1 .3-2.3.5-3 .6-4 3-10.5 5.4-14.7 11-19.2 35.2-28.8 55.6-22 1.7.5 1.8.7 1 2-.8 1.2-2 3.6-2 4.2 0 .2-.1.4-.2.5-.2.1-.3.6-.3 1s.1 1 .3 1c.1.1.2.4.2.6 0 1 1.3 2.4 2.4 3 1.2.7 4.2.8 22.2 1 10.3.1 10.7.1 12.4-1a8 8 0 0 0 2.4-4.5c0-1.2-1.7-5.4-2.6-6.6L106.5 5c-2.2-4-4.7-5.6-7.8-4.6" stroke="none" fill="url(#b8wo)" filter="url(#JWwR)" transform="translate(369.6 .3)"/></svg>',
      "friendlyName": "SYNCLER",
      "className": "synclerButton",
      "appName": "com.syncler",
      "androidName": "com.syncler",
      "adbLaunchCommand": "adb shell am start -n com.syncler/urbanMedia.android.touchDevice.ui.activities.StartUpSplashActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "t2-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 495 305" width="495" height="305" xml:space="preserve"><g><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#ef7d01;fill-rule:nonzero;opacity:1" transform="translate(-8 -103)" d="M152 103.45c-35.947 3.487-69.257 15.523-95.999 40.68C-8.745 205.038-7.879 314.563 61 372.312c38.983 32.683 93.947 45.502 143 30.31 12.224-3.786 23.976-8.735 35-15.268 4.785-2.835 11.209-9.441 17-9.441 4.698 0 9.262 4.583 13 6.977a149.638 149.638 0 0 0 24 12.465c24.754 10.111 51.529 13.309 78 10.173 17.853-2.116 35.013-7.628 51-15.796 93.911-47.978 110.16-182.472 30-251.198-38.931-33.378-94.607-46.453-144-31.156-12.224 3.786-23.976 8.735-35 15.268-4.785 2.835-11.209 9.441-17 9.441-4.393 0-8.531-4.066-12-6.33-6.668-4.352-13.752-8.097-21-11.388-21.454-9.742-47.413-15.206-71-12.919z"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#fffcf9;fill-rule:nonzero;opacity:1" transform="translate(-8 -103)" d="M85 226h53v72c.004 11.644.98 24.385 12.086 31.116C160.781 335.598 179.89 332 192 332V226h53v-31H141c-13.022 0-33.139-3.746-44.984 2.276C84.51 203.126 85 214.869 85 226m182-31v31h106v22H267v46c0 9.395-.588 18.918 5.338 26.862C282.816 334.907 300.582 332 316 332h111v-31H321v-22h106v-52c0-7.966 1.135-17.039-4.063-23.752C413.691 191.307 394.214 195 381 195H267z"/></g></svg>',
      "friendlyName": "T2 TV",
      "className": "tTwoTVButton",
      "appName": "T-2 TV",
      "androidName": "tv.perception.clients.tv.android",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "tailscale": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="985" height="200" viewBox="0 0 985 200" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><g stroke="none" fill-rule="nonzero"><use xlink:href="#PbBt"/><use xlink:href="#PbBt" x="59"/><g fill="#54514d"><use xlink:href="#PbBt" y="60"/><use xlink:href="#PbBt" x="119" y="60"/></g><use xlink:href="#PbBt" x="59" y="60"/><use xlink:href="#PbBt" x="119"/><g fill="#54514d"><use xlink:href="#PbBt" y="-59"/><use xlink:href="#PbBt" x="59" y="-59"/><use xlink:href="#PbBt" x="119" y="-59"/></g><path d="M330 168c5 0 11-1 16-2v-20c-4 1-7 1-11 1-8 0-11-4-11-12V94h22V74h-22V44h-25v30h-16v20h16v43c-1 9 2 17 8 23s15 9 23 8zm56 0c13 0 22-5 26-12 0 3 1 7 3 10h22c-2-5-3-10-3-15v-48c0-20-14-31-38-31-18 0-32 6-40 16l14 14c7-7 15-10 25-10 12 0 17 4 17 10 0 5-4 8-23 8-18 0-36 8-36 29 0 19 14 29 33 29zm5-19c-10 0-14-4-14-11 0-6 5-10 14-10 14 0 18-1 21-4v7c0 10-9 18-21 18zm60-87h25V39h-25v23zm0 104h25V74h-25v92zm42 0h25V42h-25v124zm76 2c27 0 40-14 40-29 0-14-6-24-29-28-15-3-25-6-25-11s5-8 15-8c8 0 15 2 20 9l16-13c-8-10-21-16-36-16-24 0-39 13-39 28 0 17 16 24 32 27 14 3 22 5 22 11 0 5-5 10-16 10-10 0-18-5-21-12l-21 10c5 12 22 22 42 22zm95 0c18 0 30-7 40-23l-20-10c-4 7-10 12-20 12-15 0-24-12-24-27 0-16 9-28 24-28 9 0 16 5 19 13l20-11c-6-14-19-22-39-22-13-1-25 4-35 13-9 9-14 22-13 35-1 13 5 25 14 34s21 14 34 14zm79 0c13 0 22-5 26-11 0 3 1 7 3 9h22c-2-5-2-10-2-15v-48c0-20-15-31-38-31-19 0-33 7-41 17l14 13c7-7 15-10 24-10 12 0 17 4 17 10 0 5-3 8-22 8-18 0-37 8-37 29 0 19 14 29 33 29zm5-19c-10 0-14-4-14-11 0-6 5-10 14-10 14 0 18-1 21-4v7c0 10-9 18-21 18zm58 17h25V42h-25v124zm83 2c18 0 32-7 41-20l-19-12c-5 8-11 12-22 12-12 0-21-7-23-20h70v-8c0-25-15-48-47-48-30 0-47 24-47 48-1 13 4 25 13 34s21 14 34 14zm-22-59c4-12 12-17 22-17 12 0 20 7 22 17h-44z"/></g><defs ><path id="PbBt" d="M52 101c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z"/></defs></svg>',
      "button-round": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="259" height="259" viewBox="0 0 259 259" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><g fill-rule="nonzero" stroke="none"><use xlink:href="#IsyX"/><use xlink:href="#IsyX" x="59"/><g fill="#54514d"><use xlink:href="#IsyX" y="60"/><use xlink:href="#IsyX" x="119" y="60"/></g><use xlink:href="#IsyX" x="59" y="60"/><use xlink:href="#IsyX" x="119"/><g fill="#54514d"><use xlink:href="#IsyX" y="-59"/><use xlink:href="#IsyX" x="59" y="-59"/><use xlink:href="#IsyX" x="119" y="-59"/></g></g><defs ><path id="IsyX" d="M50 129c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z"/></defs></svg>',
      "friendlyName": "Tailscale",
      "className": "tailscaleButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.tailscale.ipn",
          "androidName": "com.tailscale.ipn",
          "adbLaunchCommand": "adb shell am start -n com.tailscale.ipn/com.tailscale.ipn.IPNActivity",
      },
      "apple-tv": {
          "appName": "Tailscale",
      },
      "chromecast": {
          "appName": "com.tailscale.ipn",
          "androidName": "com.tailscale.ipn",
          "adbLaunchCommand": "adb shell am start -n com.tailscale.ipn/com.tailscale.ipn.IPNActivity",
      },
      "nvidia-shield": {
          "appName": "com.tailscale.ipn",
          "androidName": "com.tailscale.ipn",
          "adbLaunchCommand": "adb shell am start -n com.tailscale.ipn/com.tailscale.ipn.IPNActivity",
      },
      "xiaomi": {
          "appName": "com.tailscale.ipn",
          "androidName": "com.tailscale.ipn",
          "adbLaunchCommand": "adb shell am start -n com.tailscale.ipn/com.tailscale.ipn.IPNActivity",
      }
  },


  "tbs": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1002" height="600" viewBox="0 0 1002 600" stroke="none" fill="#fff" fill-rule="evenodd"><defs><linearGradient id="WlnH" x1="0%" y1="72%" x2="100%" y2="28%"><stop offset="0%" stop-color="#2e153c"/><stop offset="38%" stop-color="#df6b93"/><stop offset="74%" stop-color="#facb95"/></linearGradient></defs><path d="M45 33.7l10 355 165 115 730 10v-380l-160-100z" fill="url(#WlnH)"/><path d="M942.5 107.7L912.7 78l-48-48H0v390.5L54.5 475l54.3 54.4 39.5 39.4h852.2v-403l-58-58zM769 379.8c-66.2-13.5-124.3-32.5-124.3-95v-.8c0-56 43.8-99.5 125-99.5h56l77.3 78H778.7c-14.8 0-21.5 5-21.5 12.3v.8c0 8 8 13 39.2 19 75.4 14 126 36 126 95.3v.8c0 62-51 100-130.3 100h-73.4l-78-78h144c17.7 0 25.3-4.6 25.3-12.6v-.8c0-8.5-9.3-13-41-19.4M480.2 189c86 0 155.5 69.7 155.5 155.6S566 500.2 480.2 500.2c-34 0-65.5-11-91-29.5v20h-89.6V107.2h101.7v103.5a155 155 0 0 1 79-21.6M90 107.2h105.8V204H273v105.7h-77.4v181L90 385V107.2zm390.3 291.5a54 54 0 1 0 0-108 54 54 0 1 0 0 108" fill-rule="nonzero" stroke="none"/></svg>',
      "friendlyName": "tbs",
      "className": "tbsButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.turner.tbs.android.networkapp",
          "androidName": "com.turner.tbs.android.networkapp",
          "adbLaunchCommand": "adb shell am start -n com.turner.tbs.android.networkapp/com.wme.app.MainActivityTv",
      },
      "apple-tv": {
          "appName": "TBS",
      },
      "chromecast": {
          "appName": "com.turner.tbs.android.networkapp",
          "androidName": "com.turner.tbs.android.networkapp",
          "adbLaunchCommand": "adb shell am start -n com.turner.tbs.android.networkapp/com.wme.app.MainActivityTv",
      },
      "nvidia-shield": {
          "appName": "com.turner.tbs.android.networkapp",
          "androidName": "com.turner.tbs.android.networkapp",
          "adbLaunchCommand": "adb shell am start -n com.turner.tbs.android.networkapp/com.wme.app.MainActivityTv",
      },
      "xiaomi": {
          "appName": "com.turner.tbs.android.networkapp",
          "androidName": "com.turner.tbs.android.networkapp",
          "adbLaunchCommand": "adb shell am start -n com.turner.tbs.android.networkapp/com.wme.app.MainActivityTv",
      },
  },


  "telenet-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="828" height="212" viewBox="0 0 828 212" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><g fill="#ffc421" fill-rule="nonzero"><path d="M175.8 154.6c-1.5 12.6-11.2 22.6-23.5 24s-19.7 3-48.8 3c-29 0-48.7-3-48.7-3-12.3-1.5-22-11.5-23.6-24-1.5-12.7-3-22.6-3-49.4s3-49.3 3-49.3c1.5-12.7 11.3-22.6 23.6-24 12.2-1.4 19.7-3 48.7-3a347 347 0 0 1 48.8 3.1c12.3 1.5 22 11.4 23.5 24 0 0 3 22.5 3 49.3l-3 49.4M203.4 37C201.3 19.6 188 5.8 171 3.8S143.6-.5 103.5-.5L36 3.8C19.2 5.8 5.7 19.6 3.7 37c-2 17.5-4.2 31-4.2 68s4.2 68.2 4.2 68.2c2 17.5 15.5 31.3 32.4 33.3 17 2 27.3 4.3 67.4 4.3s67.4-4.3 67.4-4.3c17-2 30.4-15.8 32.5-33.3 0 0 4.2-31.2 4.2-68.2l-4.2-68m-88.8 48.5a91 91 0 0 1 14.3-1c5 .1 10.5.6 15.3 1.5 0 0 1.5.4 1.5-1.3v-11c0-1-1.2-1.3-1.2-1.3-5-1.4-10.3-2.2-15.6-2.3a58 58 0 0 0-14.5 1.5c-4.8 1-1.2.4-1.2 1.4v11c0 2 1.4 1.5 1.4 1.5m-37.8 6.7s16.3 0 16.3-14c0-13.8-16.3-13.8-16.3-13.8s-16.2 0-16.2 13.8c0 14 16.2 14 16.2 14"/><path d="M147 120a84 84 0 0 1-43.5 12.8c-21.3 0-37.8-9.2-43.4-12.8 0 0-2-1.5-2 1.3v5.6c0 1.7 1.8 3.5 1.8 3.5 5.6 4.4 23 16.8 43.7 16.8s38-12.4 43.7-16.8c0 0 2-1.8 2-3.5v-5.6c0-2.8-2-1.3-2-1.3"/></g><path d="M232 86.8V85q0-9 10.8-9h4.4V65q0-12 11.7-12h2q11.6 0 11.6 12v11H288q10.5 0 10.5 8.8v1.4q0 9-10.6 9.2h-16v36.8q0 12.7 10 12.7 6.8 0 11.5-5.8.2-.4 1.7.6 1.6 1 3 3.4 1.5 2.4 1.5 5.6 0 6.8-6.6 11.3-6.4 4.5-17 4.5-29 0-29-29.5V95.4h-4.4q-10.8 0-10.8-8.6zm74.2 33q0-19.7 13-32.7 13.3-13 33.6-13 19.8 0 32 12 12.4 12 12.4 31v1.7q-.2 3.5-1.6 5.2-1.2 1.7-4.6 1.7h-61.8q1.3 9.6 8.3 15 7 5.4 17.7 5.4 17.6 0 25.3-12.7.2-.4 3.2.4 3 .7 6 3.5 3.2 2.8 3.2 7.2 0 7.6-10.6 13.7-10.5 6-28 6-22 0-35.2-12-13-12.3-13-32.7zm23.2-8.4h44q-.4-9-6-14.4-5.5-5.5-15-5.5-9 0-15.3 5.6-6.3 5.5-7.8 14.3zm83 39.8v-109q0-.6 1.3-1.2 1.3-.6 3.7-1 2.4-.5 4.7-.5 16 0 16.2 20V151q0 11.8-11.4 11.8h-2.7q-11.8 0-11.8-11.8zm41.3-31.4q0-19.7 13.2-32.7 13.2-13 33.6-13 19.7 0 32 12 12.3 12 12.3 31v1.7q-.2 3.5-1.5 5.2-1.3 1.7-4.7 1.7H477q1.2 9.6 8.3 15 7 5.4 17.7 5.4 17.6 0 25.3-12.7.2-.4 3 .4 3 .7 6.2 3.5 3 2.8 3 7.2 0 7.6-10.5 13.7-10.5 6-28 6-22 0-35.2-12-13.2-12.3-13.2-32.7zm23.3-8.4h44q-.4-9-6-14.4-5.6-5.5-15-5.5-9 0-15.2 5.6-6.4 5.5-7.8 14.3zm82.4 39.8V78q0-.4 1.2-1 1.3-.7 3.6-1.3 2.4-.6 4.8-.6 13.2 0 15.6 14.2Q595.2 74 614 74q16.6 0 24.8 10 8.3 10 8.3 25.8V151q0 11.8-11.3 11.8H633q-11.7 0-11.7-11.8v-37.7q0-8.6-4.3-13.5-4.3-5-12.2-5-13.6 0-19.8 11.3v45q0 11.8-11.3 11.8H571q-11.7 0-11.7-11.8zm101.3-31.4q0-19.7 13.2-32.7 13.2-13 33.6-13 19.7 0 32 12 12.3 12 12.3 31v1.7q-.2 3.5-1.5 5.2-1.3 1.7-4.7 1.7H684q1.2 9.6 8.3 15 7 5.4 17.7 5.4 17.6 0 25.3-12.7.2-.4 3 .4 3 .7 6.2 3.5 3 2.8 3 7.2 0 7.6-10.5 13.7-10.5 6-28 6-22 0-35.2-12-13.2-12.3-13.2-32.7zm23.3-8.4h44q-.4-9-6-14.4-5.6-5.5-15-5.5-9 0-15.2 5.6-6.4 5.5-7.8 14.3zm75-24.5V85q0-9 10.8-9h4.4V65q0-12 11.7-12h2q11.6 0 11.6 12v11H815q10.5 0 10.5 8.8v1.4q0 9-10.7 9.2h-16v36.8q0 12.7 10 12.7 6.8 0 11.6-5.8.2-.4 1.7.6 1.6 1 3 3.4 1.4 2.4 1.4 5.6 0 6.8-6.5 11.3-6.4 4.5-17 4.5-29 0-28.8-29.5V95.4h-4.4q-10.8 0-10.8-8.6z" fill-rule="nonzero"/></svg>',
      "friendlyName": "Telenet TV (BE)",
      "className": "telenetTvButton",
      "appName": "be.telenet.tv",
      "androidName": "be.telenet.tv",
      "adbLaunchCommand": "adb shell am start -n be.telenet.tv/com.libertyglobal.horizonx.MainActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "ten-play": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1001" height="400" viewBox="0 0 1001 400" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><defs><linearGradient id="Glrk" x1="166.75" y1="2003.95" x2="759.06" y2="2444.16" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#06b0fe"/><stop offset=".25" stop-color="#0283fa"/><stop offset=".5" stop-color="#0164f6"/><stop offset=".75" stop-color="#0052f4"/><stop offset="1" stop-color="#0047f3"/></linearGradient><radialGradient id="qtB1" gradientTransform="matrix(-3.0820956,29.204525,-18.116408,-1.9118328,3736.0222,-3237.6302)" cx="90.61" cy="147.49" fx="90.61" fy="147.49" r="31.77" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset=".88" stop-color="#999"/><stop offset="1" stop-color="#fff"/></radialGradient></defs><g transform="translate(.5 .5)"><svg width="1000" height="398.19" viewBox="0 0 1000 398.19"><g transform="translate(-657 -1058.11)" stroke="none"><path d="M820.85 2234.37c0 204.43-165.72 370.16-370.16 370.16-204.43 0-370.16-165.72-370.16-370.16 0-204.43 165.72-370.16 370.16-370.16 204.43 0 370.16 165.72 370.16 370.16z" transform="matrix(.5379 0 0 .5379 613.6825 55.4159)" fill="url(#Glrk)"/><path d="M897.64 1163.3c-39.04 0-69.01 23.46-82.09 49.33l-36.83 3.22-22.06 55v76.92h58.89v-45.55c10.97 22.05 39.63 49.37 81.85 49.37 54.15 0 93.84-43.9 93.84-93.15 0-58.63-46.81-95.14-93.6-95.14zm.31 58.9c18.82 0 34.68 15.56 34.68 35.14 0 17.97-14.04 35.31-34.65 35.31-20.49 0-35.22-16.81-35.22-35.25 0-17.45 13.44-35.2 35.19-35.2z" fill="#fff"/><path d="M787.45-22.17v141.45L1245.41-8.5l-1.09-679.27z" fill="url(#qtB1)" transform="matrix(.1289 0 0 .1289 655.1563 1255.4802)"/><path d="M721.93 1261.45v-59.03c13.32 0 34.73-9.85 34.73-35.6h58.89c0 53.42-42.13 94.63-93.62 94.63z" fill="#fff"/><path d="M1137.34 1371.15c2.89 0 5.02-2.37 5.02-5.06v-49.32c6.28 3.92 12.99 7.43 25.33 7.43 30.14 0 53.83-24.43 53.83-67.86 0-42.31-25.31-66.87-54.38-66.87-11.93 0-18.51 3.07-24.94 7.19 0-3.09-.96-5.1-3.95-5.1h-33.99c-1.66 0-3.64 1.29-3.64 3.79v170.73c0 2.89 1.57 5.06 4.74 5.06h31.97zm19.17-81.29c-10.71 0-14.15-6.26-14.15-16.08v-34.15c0-10.67 5.66-15.61 14.07-15.61 13.24 0 23.28 12.1 23.28 31.97 0 23.2-11.22 33.87-23.2 33.87zm188.67-99.76c-33.34 0-60.91 24.43-60.91 67.86 0 42.31 25.31 66.87 54.38 66.87 11.93 0 18.51-3.07 24.94-7.19 0 3.09.96 5.1 3.95 5.1h33.99c1.66 0 3.64-1.29 3.64-3.79v-79.31c0-25.78-17.35-49.07-59.99-49.53zm4.1 34.34c10.71 0 14.15 6.26 14.15 16.09v34.15c0 10.67-5.66 15.61-14.07 15.61-13.24 0-23.28-12.1-23.28-31.97 0-23.2 11.22-33.87 23.2-33.87zm-111.95-81.29c-2.89 0-5.02 2.37-5.02 5.06v169.43c0 3.09 1.12 5.1 4.11 5.1h33.99c1.66 0 3.64-1.29 3.64-3.79v-170.73c0-2.89-1.57-5.06-4.74-5.06zm232.28 125.46l17.78-71.77c.52-2.24 1.71-4.36 5.45-4.36h35.41c4.37 0 4.07 3.41 2.53 7.59l-40.05 126.96c-10.96 29.78-26.41 44.64-65.52 44.64h-9.24c-3.44 0-4.73-1.84-4.73-4.73v-24.62c0-3.3 1.91-5.18 5.18-5.18h4.9c20.59 0 22.71-4.22 25.71-13.6l-3.52-10.92-35.89-113.87c-1.19-4-1.49-6.27 1.74-6.27h36.68c3.04 0 4.22 2.37 5.29 6.25z" fill="#262626"/><path d="M1553.84 1192c2.43-.33 5.79 1.02 9.21 3.19l88.11 54.57c7.35 3.9 8.19 10.27 0 15.12l-88.58 54.8c-7.76 4.62-12.76 4.04-12.76-4.61v-116.34c0-4.49 1.58-6.41 4.02-6.73z" fill="#06b4ff"/></g></svg></g></svg>',
      "friendlyName": "10play",
      "className": "tenPlayButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "au.com.tenplay",
          "androidName": "au.com.tenplay",
          "adbLaunchCommand": "adb shell am start -n au.com.tenplay/tv.youi.networktentv.MainActivity",
      },
      "apple-tv": {
          "appName": "10 play",
      },
      "chromecast": {
          "appName": "au.com.tenplay",
          "androidName": "au.com.tenplay",
          "adbLaunchCommand": "adb shell am start -n au.com.tenplay/tv.youi.networktentv.MainActivity",
      },
      "nvidia-shield": {
          "appName": "au.com.tenplay",
          "androidName": "au.com.tenplay",
          "adbLaunchCommand": "adb shell am start -n au.com.tenplay/tv.youi.networktentv.MainActivity",
      },
      "xiaomi": {
          "appName": "au.com.tenplay",
          "androidName": "au.com.tenplay",
          "adbLaunchCommand": "adb shell am start -n au.com.tenplay/tv.youi.networktentv.MainActivity",
      },
  },


  "tennis-channel": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="2930" height="850" viewBox="0 0 2930 850" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M378 845h456V358l-307-41z" fill="#231f20"/><path d="M0 248v596h195l156-550z" fill="#37b04a"/><path d="M834 10H0v61l834 110z" fill="#231f20"/><path d="M0 71v177l351 46-156 550h183l149-527 307 41V181z"/><path d="M1267 90h-108v414h-100V90H951V9h316zm320 0h-177v118h166v81h-166v134h183v81h-283V9h277zm293 258h1V9h91v495h-113l-121-347h-2v347h-91V9h115zm398 0h1V9h91v495h-113l-121-347h-2v347h-91V9h115zM2446 9h100v495h-100zm254 355c0 11 1 22 3 32 1 8 5 16 10 23 6 7 13 12 21 16 10 4 21 6 32 5 15 0 29-4 41-15 12-9 18-25 18-46 0-11-1-20-4-28-3-9-9-16-15-22-9-7-18-13-28-18-14-6-28-12-42-16-20-7-39-15-57-24-15-8-29-19-41-31-11-12-19-26-24-41-5-17-8-35-8-54 0-48 14-85 41-109 28-24 65-36 113-36 22 0 42 3 61 7 18 5 34 13 49 24 14 11 25 25 32 42 8 19 12 39 11 60v14h-96c2-19-3-38-12-55-8-12-22-19-42-19-9 0-19 2-28 5-13 6-23 18-26 32-2 7-2 14-2 21-1 14 3 27 9 39 11 13 26 23 42 28l77 33c19 9 35 17 47 26 11 8 21 18 29 30 7 10 12 21 14 34 3 13 5 27 5 41 0 52-16 90-46 114s-72 36-127 36c-56 0-96-13-120-37-25-25-37-60-37-106v-19h100zM1110 639c-4-9-12-12-24-12-6 0-11 1-16 5-4 4-8 10-9 16-3 10-5 20-5 30-2 30-2 61 0 91 1 9 3 19 7 27 2 6 5 10 10 13 4 3 9 4 14 4 4 0 9-1 13-3s7-5 9-9c4-6 6-12 8-19 1-8 2-19 2-33h51c0 14-2 26-4 39-2 11-5 22-11 32-6 9-15 17-25 21-13 6-26 8-40 8-16 1-32-2-46-9-11-6-20-15-26-27s-10-26-11-40c-2-18-3-35-3-53 0-19 1-37 3-53 1-16 5-30 11-41 6-12 15-21 26-27 14-7 30-11 46-10 14-1 29 2 42 9 10 5 18 13 24 22 5 9 8 19 9 30 1 10 2 20 2 29h-50c0-19-3-31-7-40m243-45v97h59v-97h50v251h-50V734h-59v111h-51V594zm354 157l-24-113h0l-25 113zm7-157l66 251h-52l-12-52h-66l-12 52h-53l67-251zm308 172h0V594h46v251h-57l-62-176h-1v176h-46V594h59zm306 0h0V594h46v251h-57l-62-176h-1v176h-46V594h58zm327-130h-89v59h84v41h-84v68h93v41h-144V594h140zm133-42h51v210h89v41h-140z" fill="#231f20"/></svg>',
      "friendlyName": "Tennis Channel",
      "className": "tennisChannelButton",
      "deviceFamily": ["amazon-fire", "apple-tv"],
      "amazon-fire": {
          "appName": "com.tennischannel.tceverywhere.amazon",
          "androidName": "com.tennischannel.tceverywhere.amazon",
      },
      "apple-tv": {
          "appName": "Tennis Channel",
      },
  },


  "testflight": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1025" height="1025" viewBox="0 0 1025 1025" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M117 512a394 394 0 0 1 395-395 394 394 0 0 1 395 395 394 394 0 0 1-395 395 394 394 0 0 1-395-395z" stroke="#fff" stroke-linejoin="miter" stroke-opacity=".3" fill="none" stroke-width="30"/><g stroke="none"><path d="M529.7 109c26.7 0 30 33 30 53.4v.6L543 429.6A88 88 0 0 1 600 512l-.5 9.2c70.6 28.6 147.7 67 231.2 115l3.3 2c17.5 10 45.3 29.6 31.8 53l-18 31c-13.4 23.2-43.6 9.4-61.2-.7l-.6-.3-216.3-142.8A88 88 0 0 1 512 600c-22.2 0-42.5-8.2-58-21.8a1920 1920 0 0 1-213.3 141.2l-3.4 2c-17.4 10-48.2 24.4-61.7 1l-18-31c-13.4-23.2 13.7-42.5 31.2-52.7l.6-.3 235-117.3a87 87 0 0 1-.5-8.9 88 88 0 0 1 56.4-82.1c-11-76.8-16.6-164.4-16.7-263v-4c0-20.2 3-54 30-54h36zM430 544l-2 1-169 81-55 31.8 24 41.5 53.7-31c39.7-23 92-58.7 157-107.4a91 91 0 0 1-8.6-16.7zm164 .3l-.3.8a93 93 0 0 1-8.4 15.9l155.2 106.3 55 31.8 24-41.5-53.7-31c-39.7-23-97-50.4-171.8-82.3zM512 452l-6.3.3c-.2.1-.5.1-.7.1l.7-.1c-.5.1-1 .1-1.5.2l.8-.1c-.3 0-.6.1-1 .1h.1c-.3 0-.6.1-.8.1l.7-.1c-.4.1-.8.1-1.2.2l.5-.1c-.3.1-.6.1-1 .2l.4-.1c-.3 0-.6.1-1 .1h.5c-.3 0-.6 0-1 .1l.4-.1c-.3.1-.6.1-1 .2h.5c-.2 0-.5.1-.7.1h.2c-.3 0-.5.1-.8.1h.6c-.3.1-.7.2-1 .2l.4-.1-1 .3c-.2 0-.4.1-.6.1l.6-.1c-.3 0-.6.1-.8.2l.2-.1c-.3.1-.6.1-.8.2l.6-.1c-.4 0-.7.1-1 .2l.5-.1c-.3.1-.6.1-.8.2l.3-.1c-.3.1-.5.1-.8.2h.5c-.3.1-.6.2-1 .2h.4c-.3.1-.6.2-.8.2l.4-.1c-.4.1-.8.3-1.2.4l.8-.3c-.3.1-.6.2-1 .3h.2c-.3.1-.6.2-1 .2l.7-.2c-.3.1-.6.2-1 .3l.3-.1c-.2.1-.5.2-.8.3l.5-.2c-.2.1-.5.2-.8.3h.3l-1 .3.6-.2-.8.3.2-.1-.8.3.6-.2-1 .3.3-.1c-.4.1-.7.3-1 .4l.8-.3c-.3.1-.7.2-1 .4h.2l-.8.3.6-.2-.8.3.2-.1c-.3.1-.6.2-.8.4l.6-.3c-.3.1-.6.2-1 .4l.3-.1-.8.3.5-.2c-.3.1-.6.2-1 .4l.4-.2c-.2.1-.5.2-.7.3l.3-.1c-.2.1-.5.2-.7.3l.4-.2-1.2.6.8-.4a3 3 0 0 0-.8.4h0c-.2.1-.5.2-.7.3l.7-.3c-.3.1-.7.3-1 .4l.3-.1A60 60 0 0 0 452 512v1h0v.8-.8 1h0c0 .3 0 .5.1.8v-.6c0 .3.1.7.1 1v-.4c0 .7 0 1.4.1 2v.4-.4c0 .3 0 .6.1 1l-.1-.5c0 .3.1.6.1.8v-.3c0 .3 0 .6.1 1l-.1-.6c0 .3.1.6.1 1v-.3c0 .7.1 1.4.2 2 0 .2.1.3.1.5l-.1-.5c.1.3.1.6.2 1l-.1-.4c0 .2.1.5.1.8v-.4c0 .3 0 .6.1 1l-.1-.5c.1.3.1.6.2 1v-.4c0 .3.1.5.1.8v-.4c0 .3.1.6.1 1 .1.3.1.5.2.7l-.2-.7.3 1-.1-.4c.1.3.1.7.2 1l-.1-.6c0 .2.1.5.1.7v-.1c.1.3.1.6.2 1l-.2-.8c.1.3.2.6.3 1l-.1-.2c.2.6.3 1.2.5 2 0 0 0 .1.1.2l-.1-.2.3 1-.2-.7c0 .3.1.5.2.8v-.1c.1.3.2.6.3 1l.2.8c.1.1.1.1.1.2.1.2.2.5.2.7l-.2-.7.3 1-.1-.2c.1.2.2.5.3.7l-.2-.5.3.8-.1-.3c1.5 4 3.4 8 5.7 11.6l-.3-.5c.2.4.4.7.7 1 .1.1.1.2.2.4l-.2-.4c.1.2.2.4.4.6v-.2c.2.2.4.5.5.7l-.3-.5.5.8-.2-.3c.2.2.3.5.5.7l-.3-.4c.2.2.3.4.5.7v-.3c.2.3.4.5.5.7l-.3-.4c.2.2.4.5.5.7l-.2-.3c.2.2.3.4.5.6l-.3-.3 1.2 1.5h-.1c.1.2.3.4.5.6l-.4-.5c.2.3.4.6.6.8l-.2-.3c.2.3.4.5.5.7l-.3-.4c.2.3.4.5.6.7l-.3-.3c.2.2.4.5.6.7l-.3-.4c.1.2.3.4.5.6h-.2l.6.6-.4-.4c.2.3.4.5.6.7v-.3c.4.6 1 1 1.4 1.6v.1-.1l1.2 1.2c.1.1.1.2.2.2l-.2-.2c.2.3.4.5.7.7l-.5-.5.6.6h-.1c.2.2.3.4.5.6l-.4-.5c.2.2.4.4.6.7l-.2-.2 1.5 1.3h.1-.1c.3.2.5.4.7.6l-.6-.5c.3.2.5.4.8.6v-.1c.2.2.4.4.7.6l-.5-.5c.2.3.4.5.7.7l-.2-.2c.2.1.4.3.6.5l-.4-.3c.2.2.5.4.7.6l-.3-.3c.2.2.4.3.6.5h-.3c.2.1.5.3.7.5l-.4-.3c.2.2.5.4.7.5l-.3-.2c.3.2.6.5 1 .7 10 7.5 22.5 12 36 12 13 0 25.3-4.2 35.2-11.4 1.7-1.2 3.3-2.5 4.8-4 .1-.1.1-.1.2-.1l-.2.1.6-.6-.4.5.6-.6h-.2c.2-.1.4-.3.6-.5l-.4.4.7-.7-.3.3 1.5-1.4c.1-.2.2-.3.3-.4l-.3.4c.2-.2.4-.5.6-.7l-.3.3.6-.6-.3.3c.2-.2.4-.4.6-.5l-.3.2c.2-.2.4-.4.6-.7l-.3.5c.1-.3.3-.5.5-.7l-.2.2.6-.6-.4.4.6-.6-.2.2c.2-.2.4-.5.6-.7l-.4.5c.2-.3.4-.5.6-.7l-.2.2 1.3-1.5c.1-.1.2-.2.3-.4l-.3.4c.1-.2.3-.4.5-.7l-.2.3c.1-.2.3-.4.5-.6l-.3.3c.2-.2.4-.5.6-.7l-.3.4c.2-.2.3-.5.5-.7l-.2.3c.1-.2.3-.4.5-.6l-.3.3c.2-.2.3-.5.5-.7l-.2.4 1.7-2.5c.1-.1.2-.3.2-.4l-.2.4c.1-.2.3-.5.4-.7l-.2.3c.2-.2.3-.4.4-.6l-.2.3c2.6-4 4.7-8.2 6.2-12.6l.3-.8c0-.1.1-.3.1-.4.1-.2.1-.4.2-.5l-.2.5.3-.8-.1.3.3-.8-.2.5c.1-.3.2-.6.2-1v.4c0-.3.1-.6.2-1l-.2.5c.2-.4.3-1 .4-1.3.1-.1.1-.2.1-.3v.3c.1-.2.1-.4.2-.6v.3c.1-.3.2-.6.2-.8l-.1.5c.1-.3.1-.6.2-1l-.1.4c.1-.3.2-.6.2-1l-.1.5c.1-.3.1-.5.2-.8l-.1.3c.1-.3.2-.6.2-1l-.1.6c.1-.3.1-.6.2-1h0c.1-.4.2-.8.2-1.2.1-.1.1-.3.1-.5v.5c.1-.3.1-.6.2-1v.4c.1-.3.1-.6.2-1l-.1.5c0-.2.1-.5.1-.8v.3c0-.2.1-.5.1-.8l-.1.5c.1-.4.1-.7.2-1 .1-.6.1-1 .2-1.6 0-.2 0-.3.1-.5l-.1.5c0-.3.1-.6.1-.8v.3-.8.5c0-.3 0-.6.1-1l-.1.4c.1-.3.1-.6.1-1v.5c0-.8.1-1.5.1-2.2v-.4.4c.1-.6.1-1.3.1-2h0 0v-.7.5-1-.3-.7h0a60 60 0 0 0-33.3-52.6l-.1-.1h0c-.3-.2-.7-.4-1-.5-.1-.1-.2-.1-.3-.2l.3.2c-.3-.2-.6-.3-1-.4l.6.2c-.2-.1-.5-.2-.7-.3l.1.1-.6-.3.5.2c-.3-.1-.6-.2-1-.4l.4.2-.8-.3.4.1-.8-.3.4.2c-.2-.2-.5-.3-.8-.4l.4.2-.8-.3.4.1c-.4-.1-.8-.3-1.2-.4-.1-.1-.2-.1-.3-.2l.3.2c-.2-.1-.5-.2-.7-.3l.4.1-.8-.3.4.2-.8-.3.4.1c-.3-.1-.6-.2-1-.2l.5.1-1-.3.4.2a3 3 0 0 0-1-.4l.6.2c-.2-.1-.5-.2-.8-.2h.2c-.3-.1-.6-.2-1-.3l.8.3c-.3-.2-.7-.3-1-.4l.3.1c-.2-.1-.5-.1-.8-.2l.5.1-1-.3.4.2-.8-.3h.4c-.3 0-.6-.1-1-.2h.5c-.3 0-.6-.1-1-.2l.4.1c-.2 0-.5-.1-.8-.2l.4.1-2-.5h-.3.3c-.3 0-.5-.1-.8-.1l.5.1c-.3-.1-.6-.2-1-.2l.4.1c-.3-.1-.6-.2-1-.2h.5c-.3-.1-.6-.1-1-.2h.4c-.3-.1-.6-.1-1-.2l.5.1c-.3 0-.6-.1-.8-.1h.3c-.4 0-.7-.1-1-.1l.8.1c-.4-.1-.7-.1-1-.2-.3 0-.6-.1-.8-.1l.8.1c-.4 0-.7-.1-1-.1h.3c-.3 0-.6-.1-.8-.1l.5.1c-.3-.1-.7-.1-1-.1h.5c-.3 0-.6-.1-1-.1l.4.1c-.3-.1-.6-.1-1-.1h.5c-.4 0-.7-.1-1-.1l.5.1c-.3-.1-.6-.1-1-.1h.4l-5.2-.2zm23.7-286h-48v62c0 47 5 112.6 15.4 196.4 3-.2 6-.4 9-.4l8.3.4c10-83 15.3-147.8 15.4-194.8V166z"/><path d="M536 489l-.3 7c0 1-.4 2-1 2.7L521.2 512l13.4 13.4c.7.7 1 1.7 1 2.7l.3 7a1 1 0 0 1-1 1l-7-.3c-1 0-2-.4-2.7-1L512 521.2l-13.4 13.4c-.7.7-1.7 1-2.7 1l-7 .3a1 1 0 0 1-1-1h0 0l.3-7c0-1 .4-2 1-2.7l13.4-13.4-13.4-13.4c-.7-.7-1-1.7-1-2.7l-.3-7a1 1 0 0 1 1-1l7 .3c1 0 2 .4 2.7 1l13.4 13.4 13.4-13.4c.7-.7 1.7-1 2.7-1l7-.3a1 1 0 0 1 1 1z" opacity=".3"/></g></svg>',
      "className": "testflightButton",
      "friendlyName": "TestFlight",
      "appName": "TestFlight",
      "deviceFamily": ["apple-tv"], },


  "threenow": {
      "button": '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 598.39 288.14" xml:space="preserve"><path id="Path" style="fill:#ff004f" d="M238.99 0v23.56h-20.41V0h-22.32v66.76h22.32V42.82h20.41v23.94h22.32V0z"/><path style="fill:#ff004f" d="M341.36 46.5v-.19c0-6.9-2.1-11.83-6.11-15.83-4.67-4.67-12.21-7.64-24.03-7.64h-32.6v66.77h22.31V70.54h4.76l12.6 19.07h25.47L328.21 66.9c8.11-3.9 13.17-10.66 13.17-20.4m-22.22 1.62c0 4.1-3.25 6.49-8.59 6.49h-9.64V41.53h9.72c5.15 0 8.5 2.1 8.5 6.39l.01.2z"/><path style="fill:#ff004f" d="M133.74 22.56v21.96H111.4v22.09h22.34V89.6h24V66.61h22.34V44.52h-22.34V22.56z"/><path style="fill:#ff004f" d="M451.51 71.29v-7.24h32.62V47.92h-32.62v-6.77h35v-18.3h-56.94V89.6h57.42V71.29z"/><path style="fill:#ff004f" d="M412.85 45.48h-57.41V66.76h57.41V48.45z"/><path style="fill:#ff004f" d="M355.44 0V21.28h57.41V0z"/><path style="fill:#ff004f" d="m531.93 113.04-19.75 94.33-24.52-94.33h-47.68l-24.51 94.33-19.75-94.33h-66.4l15.47 53.22c-12.85-34.51-46.19-57.99-85.93-57.99-43.25 0-78.92 27.84-88.85 67.38-2.95-46.33-28.04-67.38-61.36-67.38-19.75 0-35.42 7.5-45.64 21.42v-16.66H0V283.3h62.99v-87.5c0-16.66 7.84-26.9 23.17-26.9 12.93 0 21.11 7.48 21.11 22.81v91.62h63v-61.6c10.39 39.03 46.23 66.42 88.55 66.42 51.08 0 91.62-38.82 91.62-89.9 0-6.5-.69-12.99-2.05-19.35l30.35 104.42h64.03l21.12-80.03L485 283.32h64.03l49.38-170.27h-66.48zm-273.12 115.1c-16.66 0-28.56-12.26-28.56-29.96s11.9-29.97 28.56-29.97 28.56 12.27 28.56 29.97-11.9 29.96-28.56 29.96"/></svg>',
      "friendlyName": "Three Now (NZ)",
      "className": "threenowButton",
      "appName": "com.mediaworks.android.tv",
      "androidName": "com.mediaworks.android.tv",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "tidal": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="192.575" height="27.224" viewBox="0 0 50.952 7.203"><defs><clipPath id="tidalA"><path d="M0 0h612v792H0Z"/></clipPath></defs><path d="M18.612 6.802h-1.294v-4.59h-1.674v-1.11h4.642v1.109h-1.674zm6.848 0h-1.302v-5.7h1.302zm22.976-1.125h2.252v1.125h-3.554v-5.7h1.302z" fill="#fff"/><g clip-path="url(#tidalA)" transform="matrix(.35278 0 0 -.35278 -35.676027 179.85533)"><path d="M185.586 506.702h5.979c4.411 0 8.8-2.336 8.8-8.035 0-5.372-4.302-8.123-8.582-8.123h-6.197zm3.581-12.991h2.289c3.079 0 5.131 1.921 5.131 4.978 0 2.904-2.074 4.868-5.044 4.868h-2.376z" fill="#fff"/></g><g fill="#fff"><path d="M42.234 6.802h1.431l-2.348-5.7h-1.344l-2.371 5.7h1.392l.42-1.125h2.403zm-2.471-2.137l.859-2.229.851 2.229zM6.938 1.933L5.27 3.601 3.601 1.933 5.27.265z"/><path d="M6.938 5.27L5.27 6.938 3.601 5.27 5.27 3.601zM3.602 1.933L1.933 3.602.265 1.933 1.933.265zm6.673 0L8.607 3.602 6.938 1.933 8.607.265z"/></g></svg>',
      "friendlyName": "TIDAL",
      "className": "tidalButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.aspiro.tidal",
          "androidName": "com.aspiro.tidal",
          "adbLaunchCommand": "adb shell am start -n com.aspiro.tidal/com.aspiro.wamp.tv.TvLauncherActivity",
      },
      "apple-tv": {
          "appName": "TIDAL",
      },
      "chromecast": {
          "appName": "com.aspiro.tidal",
          "androidName": "com.aspiro.tidal",
          "adbLaunchCommand": "adb shell am start -n com.aspiro.tidal/com.aspiro.wamp.tv.TvLauncherActivity",
      },
      "nvidia-shield": {
          "appName": "com.aspiro.tidal",
          "androidName": "com.aspiro.tidal",
          "adbLaunchCommand": "adb shell am start -n com.aspiro.tidal/com.aspiro.wamp.tv.TvLauncherActivity",
      },
      "xiaomi": {
          "appName": "com.aspiro.tidal",
          "androidName": "com.aspiro.tidal",
          "adbLaunchCommand": "adb shell am start -n com.aspiro.tidal/com.aspiro.wamp.tv.TvLauncherActivity",
      },
  },


  "tivimate": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="76" viewBox="0 0 400 76" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M51 0c-6 2-8 8-4 13 3 5 12 3 14-2 2-6-5-12-10-11m85 0c-6 2-9 8-6 12 3 5 8 5 13 1 2-2 2-2 2-5V7l-1-2c-2-3-5-5-8-5M7 14v8H0v10h7v10c0 15 0 19 1 22 3 9 13 14 23 10 2-1 5-2 7-4 0-1 0-1-3-6l-1-3h-1c-5 4-11 3-12-1V32h14V22H22V6H7m100 16c-2 6-12 30-13 32L68 34l19 41h13l21-53M46 48v27h14V22H46m84 26v27h14l1-53h-15" fill="#0188c8"/><path d="M320 11v14h-8v5h8v2 15c0 16 1 17 1 20 3 7 12 10 20 6 3-1 3-2 2-4 0-2 0-2-4-1-7 2-11 0-12-5V30h17v-5h-17c0-15 0-14-1-14M159 49v26h7V60c0-16 0-18 5-25 3-3 5-5 15-5 6 0 9 2 13 9v36h7V60c0-17 0-18 3-23 5-5 7-7 15-7 6 0 9 1 12 4s3 2 3 31c0 3 1 8 1 10h5V64 34c-3-7-13-11-20-11-9 0-14 2-18 7-4 4-3 8-5 4-4-8-10-10-16-10-8 0-13 1-17 7-3 4-3 1-3-3v-5h-7m119 0c-6 1-11 2-15 5-2 1-2 1-1 3 2 3 1 3 5 1 14-7 27-4 28 6v6l-6 1c-19 0-22 1-26 4s-5 5-5 10c0 11 7 16 20 15 6 0 11-2 15-6 2-2 2-2 2 3v4h1 4 2v-6-15c-1-19-1-21-3-24-5-5-12-8-20-7m90 1c-12 2-18 10-18 26 0 3 2 13 6 17 5 5 10 7 20 7 8 0 14-3 19-7 1-1-3-4-3-3-8 5-17 6-24 4-7-3-11-8-12-15v-1h43v-1c0-13-6-24-15-27-5-1-8-1-12-1m8 6c7 1 12 7 13 15v1h-37v-1c0-4 2-9 6-12 3-2 6-3 10-3 2-1 6-1 8 0m-86 24c0 6-1 8-4 11-5 5-16 6-22 3-7-3-7-13 0-16 2-1 3-1 16-1h10v3" fill="#043c55"/><path d="M129 8c0-4 4-8 8-8s8 4 8 8-4 8-8 8-8-4-8-8zM45 8c0-4 4-8 8-8s8 4 8 8-4 8-8 8-8-4-8-8z" fill="#0188c8"/></svg>',
      "friendlyName": "TiviMate IPTV Player",
      "className": "tiviMateButton",
      "appName": "ar.tvplayer.tv",
      "androidName": "ar.tvplayer.tv",
      "adbLaunchCommand": "adb shell am start -n ar.tvplayer.tv/ar.tvplayer.tv.ui.MainActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "tnt": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" height="999.84" width="1000" viewBox="0 0 1000 999.839"><path d="M1000 499.85c0 276.09-223.89 499.99-500.01 499.99C223.84 999.84 0 775.95 0 499.85c0-26.081 1.984-51.683 5.858-76.659h106.77v295.43h101.29v-295.43h113.47v295.43h96.763v-220.24h2.077l128.85 192.9c12.82 20.344 24.63 27.346 49.26 27.346h66.515v-295.44h113.84v295.43h99.625v-295.43h109.78c3.88 24.98 5.9 50.58 5.9 76.66zM323.88 350.64h98.016c24.677 0 36.992 6.941 49.308 27.306l101.22 157.65h3.504v-184.96h401.19c-63.47-203.18-253.13-350.64-477.27-350.64-224.12 0-413.83 147.46-477.3 350.64h301.33" fill="#fff"/></svg>',
      "friendlyName": "TNT",
      "className": "tntButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "Watch TNT",
          "androidName": "com.turner.tnt.android.networkapp",
          "adbLaunchCommand": "adb shell am start -n com.turner.tnt.android.networkapp/com.wme.app.MainActivityTv",
      },
      "apple-tv": {
          "appName": "TNT",
      },
      "chromecast": {
          "appName": "Watch TNT",
          "androidName": "com.turner.tnt.android.networkapp",
          "adbLaunchCommand": "adb shell am start -n com.turner.tnt.android.networkapp/com.wme.app.MainActivityTv",
      },
      "nvidia-shield": {
          "appName": "Watch TNT",
          "androidName": "com.turner.tnt.android.networkapp",
          "adbLaunchCommand": "adb shell am start -n com.turner.tnt.android.networkapp/com.wme.app.MainActivityTv",
      },
      "xiaomi": {
          "appName": "Watch TNT",
          "androidName": "com.turner.tnt.android.networkapp",
          "adbLaunchCommand": "adb shell am start -n com.turner.tnt.android.networkapp/com.wme.app.MainActivityTv",
      },
  },


  "tubi": {
      "button": '<svg height="211.891" viewBox="0 0 13.051 5.723" width="471.94" xmlns="http://www.w3.org/2000/svg"><path d="M12.795 1.62h-.86v3.846c0 .069.055.124.123.124h.737a.123.123 0 0 0 .123-.124V1.745a.123.123 0 0 0-.123-.124M9.476 4.598c-.543 0-.984-.444-.984-.992s.44-.993.984-.993c.543 0 .984.445.984.993s-.44.992-.984.992m0-2.977c-.289 0-.563.063-.81.176a.123.123 0 0 1-.174-.113V.255A.123.123 0 0 0 8.37.132h-.86v3.474c0 1.096.88 1.984 1.967 1.984 1.086 0 1.967-.888 1.967-1.984s-.88-1.985-1.967-1.985M3.02 5.214l-.37-.647a.122.122 0 0 0-.156-.052.973.973 0 0 1-.395.083.988.988 0 0 1-.983-.992v-.869c0-.068.055-.124.123-.124h1.23a.123.123 0 0 0 .122-.124v-.744a.124.124 0 0 0-.123-.124h-1.23a.123.123 0 0 1-.122-.124V.257A.124.124 0 0 0 .993.131h-.86v3.474c0 1.096.88 1.984 1.966 1.984.312 0 .607-.073.868-.203a.124.124 0 0 0 .056-.166l-.004-.007m3.875-3.593h-.86v1.985c0 .548-.441.992-.984.992s-.984-.444-.984-.992v-1.86a.123.123 0 0 0-.123-.125h-.86v1.985c0 1.096.88 1.985 1.967 1.985s1.967-.889 1.967-1.985v-1.86a.123.123 0 0 0-.123-.125M12.426.132a.494.494 0 0 0-.491.497c0 .274.22.496.491.496a.494.494 0 0 0 .492-.496.494.494 0 0 0-.492-.497" style="fill:#fff;"/></svg>',
      "friendlyName": "tubi",
      "className": "tubiButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.tubitv.ott",
          "androidName": "com.tubitv.ott",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n com.tubitv.ott/com.tubitv.activities.FireTVMainActivity",
      },
      "apple-tv": {
          "appName": "Tubi",
      },
      "chromecast": {
          "appName": "com.tubitv",
          "androidName": "com.tubitv",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n com.tubitv/com.tubitv.activities.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.tubitv",
          "androidName": "com.tubitv",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n com.tubitv/com.tubitv.activities.MainActivity",
      },
      "xiaomi": {
          "appName": "com.tubitv",
          "androidName": "com.tubitv",
          "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n com.tubitv/com.tubitv.activities.MainActivity",
      },
   },


  "tv4-play": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="902" height="668" viewBox="0 0 902 668" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M443.5 459.5h-47.8V52.3c0-3.3-2-6-5.2-7-3-1-6.3.2-8 3L51.2 538c-1.5 2.2-1.6 5-.3 7.5 1.2 2.4 3.7 4 6.4 4h244.4v55.2c0 3.8 3.4 7.2 7.3 7.2h79.4c4 0 7.3-3.4 7.3-7.2v-55.2h47.8c4.2 0 7.3-3.2 7.3-7.4v-75c0-4-3-7.4-7.3-7.4m-142 .3h-92l92-136zm543.8-109L607 488.7c-1.2.6-2.6.5-3.6-.4s-1.3-2.3-.8-3.5l2.3-5.4a354 354 0 0 0 0-272.5l-2.5-6c-.5-1.2-.1-2.5.8-3.4 1-.8 2.4-1 3.5-.3L845.3 335c6.2 3.6 6.2 12.5 0 16z"/></svg>',
      "friendlyName": "TV4 Play",
      "className": "tv4PlayButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "se.tv4.tv4playtab",
          "androidName": "se.tv4.tv4playtab",
          "adbLaunchCommand": "adb shell am start -c android.intent.category.LEANBACK_LAUNCHER -n se.tv4.tv4playtab/se.tv4.tv4play.startup.SplashActivity",
      },
      "apple-tv": {
          "appName": "TV4 Play",
      },
      "chromecast": {
          "appName": "se.tv4.tv4playtab",
          "androidName": "se.tv4.tv4playtab",
          "adbLaunchCommand": "adb shell am start -c android.intent.category.LEANBACK_LAUNCHER -n se.tv4.tv4playtab/se.tv4.tv4play.startup.SplashActivity",
      },
      "nvidia-shield": {
          "appName": "se.tv4.tv4playtab",
          "androidName": "se.tv4.tv4playtab",
          "adbLaunchCommand": "adb shell am start -c android.intent.category.LEANBACK_LAUNCHER -n se.tv4.tv4playtab/se.tv4.tv4play.startup.SplashActivity",
      },
      "xiaomi": {
          "appName": "se.tv4.tv4playtab",
          "androidName": "se.tv4.tv4playtab",
          "adbLaunchCommand": "adb shell am start -c android.intent.category.LEANBACK_LAUNCHER -n se.tv4.tv4playtab/se.tv4.tv4play.startup.SplashActivity",
      },
   },


  "tver": {
      "button": '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100" height="52.9" viewBox="0 0 100 52.9" xml:space="preserve"><style>.st2{fill:#3c3c3c}</style><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="3.737" y1="-6.042" x2="39.833" y2="49.542"><stop offset="0" style="stop-color:#0ff"/><stop offset=".43" style="stop-color:#00b4dc"/><stop offset=".512" style="stop-color:#009fd3"/><stop offset=".68" style="stop-color:#007ac2"/><stop offset=".815" style="stop-color:#0062b8"/><stop offset=".9" style="stop-color:#005ab4"/></linearGradient><path d="M35.5.3v10.1H22.9v40.3h-10V10.3H.3V.3h35.2z" style="fill:url(#SVGID_1_)"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="42.409" y1="-7.448" x2="78.506" y2="48.136"><stop offset="0" style="stop-color:#0ff"/><stop offset=".43" style="stop-color:#00b4dc"/><stop offset=".512" style="stop-color:#009fd3"/><stop offset=".68" style="stop-color:#007ac2"/><stop offset=".815" style="stop-color:#0062b8"/><stop offset=".9" style="stop-color:#005ab4"/></linearGradient><path style="fill:url(#SVGID_2_)" d="M52.4 50.6 29.8.3h10.7l11.9 26.5L64.3.3h10.8z"/><path class="st2" d="M74.2 46.9c-5 3.4-8.1-.3-7.7-3.5 5.5 2.6 12.7-.9 12.7-7 0-4.8-3.5-9.2-9.9-8.3-5.7.9-8.4 7.6-8.4 14.8 0 5.2 3.2 9.7 8.9 9.9 5.3.2 10.5-2.9 9.9-5.8-.2-1.6-2.3-2.2-5.5-.1zm-4.6-7.2c-1.2 0-2.5-1-2.5-2.5 0-2 1.1-4.5 3.6-4.5 1.7 0 2.7 1.6 2.7 3.8.1 2-1.2 3.2-3.8 3.2zM91.9 30c-2.1.1-3.9 1.1-4.6 2.5.1-1.7.3-5-2.2-4.8-2.1.1-3.4 1.1-3.3 3.2.2 4.5.5 8.8.6 15.4 0 1.5-.2 3-.3 3.5-.1 1.8 1.1 2.8 3.2 2.8 1.9 0 3.2-1 2.9-2.8-.6-3.2-.9-6.1-.4-9.6s1.7-5 3.2-5.3c1.9-.4 3.7.5 4.6 1.8.7 1 2.1 1.6 3.3.4 1.1-1.2.6-2.5 0-3.4-1.3-2.2-3.7-3.9-7-3.7z"/></svg>',
      "friendlyName": "TVer",
      "className": "tverButton",
      "appName": "jp.co.tver.tvapp",
      "androidName": "jp.co.tver.tvapp",
      "adbLaunchCommand": "adb shell am start -n jp.co.tver.tvapp/.tver.ui.splash.TVerSplashActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"],},


  "tvexpress-br": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="391" height="67" viewBox="0 0 391 67" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M33 0L0 34s-2-2 22 22c12 12 11 11 13 10l1-1 3-3c1 0 1-1 1-1l10-10c13-13 12-12 11-13v-1h-7-7c-1 0-2 2-7 6l-6 6c-1 0-16-14-16-15s0-2 7-9l8-7h1l1 1c2 2 3 1-4 8l-5 5c-1 1 0 1 4 5 3 4 4 4 4 4 1 0 20-20 20-20 1-1 0-2-9-11C34 0 34 0 33 0m56 5c-2 1-2 1-2 4 0 1-1 2-1 2 0 4-1 6 0 6h6 7c1 1 1 0 1 18 0 11 0 17 1 17h14c1 0 1 0 1-16 0-19 0-18 2-18 1-1 12-1 13-1 0 0 1 1 1 4 1 0 1 1 1 2 1 1 1 2 2 6 1 2 1 4 2 5 0 1 0 2 1 3 0 1 1 3 1 4 0 2 1 3 1 4 0 0 0 1 1 1v2c0 1 1 2 1 2v1c0 1 0 1 10 1h9s0-1 1-3v-1l1-1v-1c0-1 1-2 1-2v-1l1-3c0-1 0-2 1-3v-1c0-1 1-1 1-2v-2l1-1v-1c0-1 0-1 1-2v-2-1s1-1 1-2c0 0 0-1 1-1v-2s0-1 1-2c0-1 1-3 1-5 1-2 1-4 2-5V6c1-2 1-1-7-1-9 0-9-1-9 2v1s-1 2-1 3v1 1c-1 1-1 3-2 5v1 1 1l-1 1v3c-1 2-1 2-1 3-1 2-1 3-1 5-1 0-1 1-1 1v1-1c0-1-1-1-1-1v-3c-1-2-1-3-1-3s0-1-1-2v-2c0-1-1-2-1-3v-2c-1-1-1-3-1-3 0-1 0-1-1-1v-3c0-1-1-2-1-2V8c-1-2-1-3-2-3h0-27-27 0m91 0c-1 0-1 0-1 24 0 14 0 23 1 23h35v-1c0-1 0-2 1-2v-3c0-2 1-4 1-4v-1-1h-12-11 0v-3-3h9c9 0 9 0 9-1v-1-3c1-1 1-3 1-3 1-2 1-3 0-3 0-1-2-1-9-1h-10v-1-2c0-3-1-2 9-3h9c2 0 3-2 3-3v-2c1-1 1-5 1-5 0-1 1-1-18-1h-18m86 17c-2 0-3 0-4 1s-1 1-1 0-1-1-5-1c-3 0-5 0-5 1v19 20h0c1 1 9 1 9 0 1 0 1 0 1-6 0-7-1-7 1-6 0 1 2 1 3 2h6c9-3 14-14 9-23-2-3-5-6-8-7h-6m50 0c-5 1-10 5-11 9v1c-1 1-1 3-1 5 0 4 0 5 2 8 1 2 5 5 8 6 2 1 7 1 9 1 5-1 8-4 10-7 1-2 1-2-4-3 0 0-1-1-2-1h-2l-1 1c-2 2-6 2-8 0-1 0-2-1-2-2h10 9c2 0 1-7 0-9v-1c0-1-2-3-2-3l-1-1v-1h-1c0-1-3-2-4-2-2-1-6-2-9-1m30 0c-2 0-3 1-4 1l-1 1c-5 2-6 8-3 12 1 1 3 2 3 2h1s3 2 6 2c4 1 5 2 4 3-2 2-7 0-8-2 0-1-1-1-4 0h-2c-3 1-3 2-2 4 3 5 11 8 18 7 10-3 12-14 3-18h-1c-1 0-2-1-3-1h-2c0-1-1-1-2-1-3 0-3-1-2-2 2-1 4 0 5 1s1 1 2 1c0 0 2-1 3-1h2l1-1c2 0 2-1 0-3-1-2-5-4-7-5h-1-6m28 0c-8 1-12 7-9 12 1 3 4 5 11 6 5 2 6 3 3 4-3 0-6-1-7-3 0-1 0-1-1-1s-6 1-6 2h-1c-3 0 1 6 5 8 5 2 11 3 16 0 2-1 4-3 4-4 0 0 0-1 1-1v-6h-1c0-1-2-3-3-4h-1c0-1-1-1-4-2h-2c-1-1-1-1-2-1-3-1-4-1-2-2 1-1 4 0 4 0 0 1 1 1 1 1 0 1 1 1 2 1s2-1 3-1h2s0-1 1-1c2 0 2-1 0-3-2-4-9-6-14-5m-74 0h-1l-3 2c-1 1-1 1-1 0 0-2 0-2-5-2-2 0-4 0-4 1-1 0-1 0-1 14v14h1 9 0v-7c0-4 0-7 1-8 1-4 1-5 5-5h3v-9h-4m-82 0v2c1 1 1 2 2 2v1c1 0 1 1 1 1 1 1 2 3 2 3 1 1 1 2 2 2 1 1 1 2 1 2v1c1 0 1 1 0 2v1l-1 1c-1 1-2 3-4 5 0 1-1 2-2 3l-1 1v1c-1 1-1 1 5 1h5 0l1-1s0-1 1-2 2-2 2-3h1l2 2 1 1s1 1 1 2c1 1 1 1 6 1 6 0 7 0 5-1 0-1-1-2-1-2l-1-1c0-1-1-2-2-3 0-1-1-2-2-3l-1-1s0-1-1-2-1-2-1-2l2-2c2-3 3-4 5-7 3-5 3-5-3-5s-5 0-7 2c-2 4-3 5-3 5l-1-1c0-1-1-2-1-2-1-1-1-2-1-2-1 0-1-1-1-1l-1-1h-5-5m103 8c0 1 0 1 1 1 0 0 1 1 2 1 1 2 1 2-5 2-4 0-5-1-5-1s1-2 2-2 1 0 1-1h4m-52 1c5 3 4 12-2 12-5 0-8-5-6-9 1-3 5-4 8-3" stroke="none"/></svg>',
      "friendlyName": "TVExpress (BR)",
      "className": "tvExpressBRButton",
      "appName": "com.mm.droid.livetv.tve",
      "androidName": "com.mm.droid.livetv.tve",
      "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -n com.mm.droid.livetv.tve/com.mm.droid.livetv.load.LiveLoadActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "tving": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="425.675" height="104.438" viewBox="0 0 425.675 104.438"><path d="M278.894 58.887l20.731 41.837h32.214V2.577H301v40.856a2.733 2.733 0 0 1-5.185 1.214l-20.838-42.07h-32.214v98.142h30.932V60.096a2.733 2.733 0 0 1 5.185-1.209m-83.824-56.31h33.826v98.142h-33.826zM341.836 42.36v18.09c0 17.595 6.637 30.316 19.722 37.802 20.877 11.949 50.94 4.574 64.117-5.171V47.409h-30.549v28.723l-.583.228a17.435 17.435 0 0 1-14.998-1.141 16.299 16.299 0 0 1-5.972-14.429V40.549a10.919 10.919 0 0 1 8.171-11.842 11.327 11.327 0 0 1 13.458 7.618l29.592-15.871A40.812 40.812 0 0 0 387.179.062c-1.995 0-3.938.097-5.787.262a46.726 46.726 0 0 0-27.228 10.832 40.526 40.526 0 0 0-12.303 31.204M83.931 2.577H0V31.31h25.247v69.429h33.389V31.31h25.271zm69.298 0l-21.149 65.714a2.733 2.733 0 0 1-5.341-.835V2.572H94.666v98.147h60.646l33.195-98.142z" fill="#fe133c"/></svg>',
      "friendlyName": "TVING",
      "className": "tvingButton",
      "appName": "net.cj.em.tving",
      "androidName": "net.cj.em.tving",
      "deviceFamily": ["chromecast", "nvidia-shield", "xiaomi"], },


  "tvnz-plus": {
      "button": '<svg viewbox="0 0 99 27" width="99" height="27" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#tvnza)"><path d="M70.269 20.974a.508.508 0 0 0-.43-.236h-8.613l7.843-8.76a3.711 3.711 0 0 0 .638-3.967 3.666 3.666 0 0 0-1.348-1.595 3.61 3.61 0 0 0-1.99-.591H52.335a.143.143 0 0 0-.102.042.146.146 0 0 0-.042.103v2.52l-.18-.202a8.08 8.08 0 0 0-1.006-.942 10.097 10.097 0 0 0-3.256-1.664 14.233 14.233 0 0 0-7.982 0c-1.176.351-2.279.915-3.256 1.664a7.696 7.696 0 0 0-1.005.942l-.181.203V5.965a.148.148 0 0 0-.042-.103.143.143 0 0 0-.102-.043h-2.94c-.093 0-2.132-.054-3.124 2.389-1.02 2.52-4.883 10.931-4.922 11.017l-.102.22-.087-.226c-.034-.091-3.65-9.164-4.31-11.017a3.789 3.789 0 0 0-1.204-1.62 3.731 3.731 0 0 0-1.858-.763h-6.603v-4.73a.528.528 0 0 0-.154-.367.517.517 0 0 0-.365-.152H4.236a.52.52 0 0 0-.367.155.53.53 0 0 0-.153.37V5.82H.52a.515.515 0 0 0-.437.242.529.529 0 0 0-.034.503l2.132 4.652a.74.74 0 0 0 .67.431h.847v7.992c0 2.229.711 4.033 2.118 5.36 1.406 1.327 3.389 1.998 5.9 1.998.854.003 1.706-.085 2.541-.263.741-.159 1.47-.37 2.18-.634.348-.13.676-.27.97-.41a.63.63 0 0 0 .324-.366.66.66 0 0 0-.025-.494l-1.833-3.856a.315.315 0 0 0-.39-.162c-.725.262-1.489.4-2.26.408a6.25 6.25 0 0 1-1.129-.106 2.363 2.363 0 0 1-1.02-.45 2.686 2.686 0 0 1-.74-.917 3.404 3.404 0 0 1-.282-1.547v-6.564h4.1c.071 0 .071 0 .348.588.161.336.39.819.664 1.407.494 1.067 1.189 2.551 2.064 4.43 1.497 3.219 3.107 6.698 3.74 8.045a.517.517 0 0 0 .466.285h5.188a.518.518 0 0 0 .471-.302l6.598-14.13-.082.65c-.05.403-.074.81-.074 1.216v12.053c0 .14.055.274.153.373a.52.52 0 0 0 .37.155h5.083a.52.52 0 0 0 .37-.155.531.531 0 0 0 .153-.373V15.343c0-2.9 1.319-4.372 3.92-4.372 1.243 0 2.211.362 2.878 1.079.666.716.985 1.823.985 3.293v10.535c0 .14.056.274.154.373a.52.52 0 0 0 .369.155h19.603a.722.722 0 0 0 .663-.434l2.068-4.512a.522.522 0 0 0-.034-.494v.008zM53.572 11.65h8.49l-8.49 8.848V11.65z" fill="#fff"/><path d="M98.04 10.14H89.41V.97a.978.978 0 0 0-.283-.686.958.958 0 0 0-.68-.284h-4.645c-.255 0-.5.102-.68.284a.978.978 0 0 0-.284.686v9.17h-7.19a.701.701 0 0 0-.644.42l-2.14 4.904a.828.828 0 0 0 .359 1.043c.117.064.25.098.383.098h9.244v9.236c0 .258.102.505.283.687.18.181.425.284.68.284h4.646c.255 0 .5-.103.68-.284a.978.978 0 0 0 .283-.687V16.62h8.628c.255-.001.499-.104.679-.287a.979.979 0 0 0 .281-.687v-4.535a.979.979 0 0 0-.285-.69.96.96 0 0 0-.686-.28z" fill="url(#tvnzb)"/></g><defs><linearGradient id="tvnzb" x1="92.126" y1="6.162" x2="77.478" y2="26.003" gradientUnits="userSpaceOnUse"><stop offset=".2" stop-color="#00F3FF"/><stop offset=".26" stop-color="#00E8FF"/><stop offset="1" stop-color="#016AFF"/></linearGradient><clipPath id="tvnza"><path fill="#fff" d="M0 0h99v27H0z"/></clipPath></defs></svg>',
      "friendlyName": "TVNZ+ (NZ)",
      "className": "tvnzPlusButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "nz.co.tvnz.ondemand.tv",
          "androidName": "nz.co.tvnz.ondemand.tv",
          "adbLaunchCommand": "adb shell am start -n nz.co.tvnz.ondemand.tv/nz.co.tvnz.ondemand.MainTVActivity",
      },
      "apple-tv": {
          "appName": "TVNZ+",
      },
      "chromecast": {
          "appName": "nz.co.tvnz.ondemand.tv",
          "androidName": "nz.co.tvnz.ondemand.tv",
          "adbLaunchCommand": "adb shell am start -n nz.co.tvnz.ondemand.tv/nz.co.tvnz.ondemand.MainTVActivity",
      },
      "nvidia-shield": {
          "appName": "nz.co.tvnz.ondemand.tv",
          "androidName": "nz.co.tvnz.ondemand.tv",
          "adbLaunchCommand": "adb shell am start -n nz.co.tvnz.ondemand.tv/nz.co.tvnz.ondemand.MainTVActivity",
      },
      "xiaomi": {
          "appName": "nz.co.tvnz.ondemand.tv",
          "androidName": "nz.co.tvnz.ondemand.tv",
          "adbLaunchCommand": "adb shell am start -n nz.co.tvnz.ondemand.tv/nz.co.tvnz.ondemand.MainTVActivity",
      },
   },


  "twire": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 400 129.427" width="400" height="129.427"><path d="M57.917 2.943C28.191 5.351 4.35 28.145.401 57.935.109 60.139-.114 68.393.077 69.924l.12.96 17.777-17.755c19.839-19.816 20.369-20.297 25.443-23.084 25.586-14.05 58.06 3.187 60.285 31.999l.048.628 9.249-9.252 9.249-9.252-.404-1.126C112.8 17.811 85.53.706 57.917 2.943M291.5 22.314c-3.794 1.237-5.038 6.733-2.14 9.46 1.531 1.44 5.137 1.883 7.063.866 3.8-2.006 3.805-7.966.009-9.935-.901-.467-3.956-.709-4.932-.391m-149.167 5.019V31.5h24.334V99h10V31.5H201v-8.333h-58.667v4.166m191.75 14.344c-4.036.542-7.864 2.93-10.389 6.481l-.527.741V42.5H313.5V99h9.833V58.99l.524-1.036c1.922-3.809 4.981-5.987 9.548-6.798 1.136-.202 5.9-.124 6.97.114l.458.102V42.18l-.875-.272c-1.056-.327-4.225-.452-5.875-.231m34.334-.006c-11.332 1.22-19.927 10.364-21.85 23.246-3.325 22.273 9.6 37.27 29.933 34.731 3.649-.456 7.472-1.876 10.417-3.87 2.375-1.608 6.698-6.404 6.208-6.888-.114-.114-1.443-1.176-2.952-2.361l-2.743-2.155-1.563 1.644c-9.733 10.237-25.151 6.885-28.973-6.297-.452-1.558-.892-4.233-.893-5.429L356 73.5h38.043l-.089-4.708c-.353-18.641-9.921-28.802-25.537-27.121m-165.668 1.604c.128.426 3.818 13.139 8.2 28.251l7.968 27.477 3.988-.043 3.989-.043 6.59-21.117c3.624-11.615 6.635-21.043 6.691-20.953.056.091 3.134 9.613 6.839 21.16l6.736 20.995 3.985-.043 3.985-.042 8.197-28.167 8.196-28.167-4.837-.044c-2.661-.024-4.886.013-4.946.083-.06.071-2.501 9.666-5.426 21.324-2.925 11.657-5.353 21.161-5.395 21.119-.042-.043-3.049-9.618-6.682-21.279l-6.605-21.203-3.915-.044-3.915-.045-6.488 20.836c-3.568 11.459-6.525 20.835-6.571 20.834-.046 0-2.514-9.281-5.485-20.624-2.972-11.343-5.436-20.717-5.477-20.832-.056-.16-1.202-.208-4.964-.208h-4.891l.233.775M288.5 70.75V99h9.833V42.5H288.5v28.25M60.305 49.826c-13.242 2.418-18.04 18.466-8.294 27.741 11.294 10.747 30.004.286 26.84-15.006-1.749-8.454-10.202-14.258-18.546-12.735m313.765.091c5.809 1.23 9.386 6.31 10.18 14.458l.11 1.125h-28.07l.112-.844c1.385-10.439 8.793-16.619 17.668-14.739M108.91 78.04c-9.346 9.326-17.056 16.95-17.133 16.941-.077-.008-.635.424-1.241.961-19.148 16.945-47.718 13.27-61.751-7.942-3.139-4.745-6.285-13.546-6.285-17.582 0-.402-.084-.783-.186-.847-.11-.068-3.913 3.612-9.321 9.019l-9.134 9.133.263.68c11.992 30.926 45.828 47.372 77.461 37.649 27.18-8.354 45.967-34.828 44.448-62.635l-.128-2.334L108.91 78.04" fill="#fff" fill-rule="evenodd"/></svg>',
      "friendlyName": "Twire",
      "className": "twireButton",
      "appName": "com.perflyst.twire",
      "androidName": "com.perflyst.twire",
      "adbLaunchCommand": "adb shell am start -a android.intent.action.MAIN -n com.perflyst.twire/.activities.StartUpActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"], },


  "twitch": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1140 380"><g><path style="fill:#fff;" d="M170 170.01h-70V190h70v80.01H60l-40-40V20h80v70h70v80.01zM470 270.01H230l-40-40V90h80v100h20V90h80v100h20V90h80v180.01zM490 90h80v180h-80zM490 20h80v50h-80zM740 170.01h-70V190h70v80.01H630l-40-40V20h80v70h70v80.01zM920 170.01h-80V190h80v80.01H800l-40-40v-100L800 90h120v80.01zM1120 270.01h-80v-100h-20v100h-80V20h80v70h60l40 40.01v140z"/><path d="M1090 70h-50V0H930.21l-50.49 70H790l-30 30V70h-70V0H470v70H160.5L110 0H0v240l140 140h140v-40l40 40h270v-40l40 40h130v-40l40 40h250l90-90V120zM170 170h-70v20h70v80H60l-40-40V20h80v70h70zm300 100H230l-40-40V90h80v100h20V90h80v100h20V90h80zm100 0h-80V90h80zm0-200h-80V20h80zm170 100h-70v20h70v80H630l-40-40V20h80v70h70zm180 0h-80v20h80v80H800l-40-40V130l40-40h120zm200 100h-80V170h-20v100h-80V20h80v70h60l40 40z"/></g></svg>',
      "friendlyName": 'Twitch',
      "className": "twitchButton",
      "adbLaunchCommand": "adb shell am start -n tv.twitch.android.viewer/tv.twitch.starshot64.app.StarshotActivity",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "Twitch (FireTV)",
          "androidName": "tv.twitch.android.viewer",
      },
      "apple-tv": {
          "appName": "Twitch",
      },
      "chromecast": {
          "appName": "Twitch",
          "androidName": "tv.twitch.android.app",
      },
      "nvidia-shield": {
          "appName": "Twitch",
          "androidName": "tv.twitch.android.app",
      },
      "xiaomi": {
          "appName": "Twitch",
          "androidName": "tv.twitch.android.app",
      },
   },


  "u-next": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="889" height="161" viewBox="0 0 889 161" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M121.3 92.6a54 54 0 0 1-53.9 53.9 54 54 0 0 1-53.9-53.9V28.8c0-2.8 2-5 4.8-5.4l97-9.7h.6c3 0 5.4 2.4 5.4 5.4zM118.6 0l-1.6.1L14.6 10.3C6.4 11 0 18 0 26.4v66.2C0 129.8 30.2 160 67.4 160s67.3-30.2 67.3-67.4V16.2c0-9-7.2-16.2-16-16.2m-23 34H95l-56.6 5.7c-2.7.3-4.8 2.6-4.8 5.4v47.6c0 18.6 15 33.7 33.7 33.7s33.7-15 33.7-33.7V39.3c0-3-2.5-5.4-5.4-5.4m422-26.6h-20.7c-2 0-3.5 1.5-3.5 3.5v89L452 11.3c-1-2.4-3.5-4-6.2-4H424c-3.8 0-7 3-7 7v135c0 2 1.6 3.5 3.5 3.5h20.7c2 0 3.5-1.6 3.5-3.5v-89L486 149c1.2 2.4 3.6 4 6.3 4H514a7 7 0 0 0 6.9-7V11c0-2-1.6-3.5-3.5-3.5m120.3-.1H558c-3 0-5.2 2.3-5.2 5.2v135c0 2.8 2.3 5.2 5.2 5.2h79.7c2 0 3.4-1.6 3.4-3.5v-19c0-2-1.5-3.4-3.4-3.4H584V33.3h53.7c2 0 3.4-1.6 3.4-3.5v-19c0-2-1.5-3.5-3.4-3.5M383 66h-36.3c-2 0-3.5 1.5-3.5 3.5v19c0 2 1.6 3.5 3.5 3.5H383c2 0 3.5-1.6 3.5-3.5v-19c0-2-1.6-3.5-3.5-3.5"/><path d="M309 7.3h-24c-2 0-3.5 1.5-3.5 3.5v93.5c0 15-7 22.5-20.8 22.5-13.7 0-20.7-7.6-20.7-22.5V10.8c0-2-1.6-3.5-3.5-3.5h-24.2c-2 0-3.5 1.5-3.5 3.5v93.5c0 34.4 17.5 52 52 52s52-17.5 52-52V10.8c0-2-1.6-3.5-3.5-3.5m574.7 0h-90c-2 0-3.5 1.6-3.5 3.5v19c0 2 1.5 3.5 3.5 3.5h29.4v116c0 2 1.6 3.5 3.5 3.5H851c2 0 3.5-1.6 3.5-3.5v-116H884c2 0 3.5-1.6 3.5-3.5v-19c0-2-1.6-3.5-3.5-3.5M596 66c-2 0-3.5 1.6-3.5 3.5v19c0 2 1.5 3.5 3.5 3.5h36.3c2 0 3.5-1.6 3.5-3.5v-19c0-2-1.6-3.5-3.5-3.5zM772 7.3h-25.6c-2 0-3.8 1.2-4.7 3l-20.2 43.4-20.3-43.4c-.8-1.8-2.7-3-4.7-3H671c-2.7 0-4.3 2.8-3 5L704 80l-36 67.7c-1.2 2.3.4 5 3 5h25.5c2 0 4-1.2 4.7-3l20.3-43.4 20.2 43.4c1 1.8 2.7 3 4.7 3H772c2.6 0 4.3-2.8 3-5L739 80l36-67.6c1.3-2.3-.4-5-3-5"/></svg>',
      "button-round": '<svg xmlns="http://www.w3.org/2000/svg" width="819" height="660" viewBox="0 0 819 660" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M542.7 235.3a134 134 0 1 1-268 0V76.6c0-7 5.3-12.7 12-13.4L528 39c.5 0 1-.1 1.4-.1 7.4 0 13.4 6 13.4 13.4zM536 5l-4 .2-254.6 25.5a40 40 0 0 0-36.2 40v164.6c0 92.5 75 167.5 167.5 167.5s167.5-75 167.5-167.5v-190C576.2 23 558.2 5 536 5m-57 84.3l-1.3.1-140.7 14c-6.8.7-12 6.4-12 13.4v118.5a84 84 0 0 0 83.8 83.7 84 84 0 0 0 83.8-83.7V102.7c0-7.4-6-13.4-13.5-13.4M373.6 453h-23.8a4 4 0 0 0-4 4v102l-47.3-101.4c-1.3-2.8-4-4.6-7.2-4.6h-24.8a8 8 0 0 0-8 8v154.6a4 4 0 0 0 4 4h23.7a4 4 0 0 0 4-4v-102L337.6 615c1.3 2.8 4 4.6 7.2 4.6h24.8a8 8 0 0 0 8-8V457a4 4 0 0 0-3.9-4m137.3 0h-91.2a6 6 0 0 0-5.9 5.9v154.6a6 6 0 0 0 5.9 6H511a4 4 0 0 0 4-4v-21.8a4 4 0 0 0-4-4h-61.4v-107H511c2.2 0 4-1.7 4-4V457a4 4 0 0 0-4-4m-291.4 67.4H178a4 4 0 0 0-4 4v21.8a4 4 0 0 0 4 4h41.6c2.2 0 4-1.7 4-4v-21.8c0-2.2-1.7-4-4-4M135 453h-27.8a4 4 0 0 0-4 4v107c0 17-8 25.8-23.7 25.8-15.8 0-23.8-8.7-23.8-25.8V457a4 4 0 0 0-4-4H24a4 4 0 0 0-4 4v107c0 39.4 20 59.4 59.5 59.4s59.4-20 59.4-59.4V457a4 4 0 0 0-3.9-4m658 0H690a4 4 0 0 0-4 4v21.8a4 4 0 0 0 4 4h33.7v132.8c0 2.2 1.7 4 4 4h27.8a4 4 0 0 0 4-4v-133H793c2.2 0 4-1.7 4-4V457a4 4 0 0 0-4-4m-329.6 67.4a4 4 0 0 0-4 4v21.8a4 4 0 0 0 4 4H505c2.2 0 4-1.7 4-4v-21.8c0-2.2-1.7-4-4-4zM665 453h-29.3c-2.3 0-4.4 1.3-5.4 3.4L607 506l-23-49.6a6 6 0 0 0-5.4-3.4h-29.2c-3 0-5 3.2-3.5 5.8l41.3 77.4-41.3 77.5c-1.4 2.6.5 5.8 3.5 5.8h29.2c2.3 0 4.4-1.3 5.4-3.4l23.2-49.7 23 49.7a6 6 0 0 0 5.4 3.4H665c3 0 5-3.2 3.5-5.8L627 536.2l41.3-77.4c1.4-2.6-.5-5.8-3.5-5.8"/></svg>',
      "friendlyName": "U-NEXT",
      "className": "uNextButton",
      "appName": "U-NEXT",
      "androidName": "com.",
      "deviceFamily": ["apple-tv"], },


  "viaplay": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="264" height="66" viewBox="0 0 264 66" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><defs><linearGradient id="JDLJ" x1="0.07%" y1="50.08%" x2="100.10%" y2="50.08%"><stop offset="0%" stop-color="#ebf5f5"/><stop offset="1.6%" stop-color="#ebf5f5"/><stop offset="17.2%" stop-color="#f0f8f8"/><stop offset="34.4%" stop-color="#f5fafa"/><stop offset="53.1%" stop-color="#fafdfd"/><stop offset="68.8%" stop-color="#fdfdfd"/><stop offset="75%" stop-color="#fdfdfd"/><stop offset="87.5%" stop-color="#fdffff"/><stop offset="100%" stop-color="#fff"/></linearGradient><linearGradient id="n09n" x1="2.66%" y1="163.28%" x2="105.26%" y2="-107.21%"><stop offset="0%" stop-color="#c52790"/><stop offset="12.5%" stop-color="#c52790"/><stop offset="25%" stop-color="#c5268c"/><stop offset="27.3%" stop-color="#c7268a"/><stop offset="30.5%" stop-color="#c72385"/><stop offset="33.6%" stop-color="#ca2382"/><stop offset="37.1%" stop-color="#cc237d"/><stop offset="40.2%" stop-color="#cc2378"/><stop offset="43.4%" stop-color="#cf2373"/><stop offset="50%" stop-color="#d42366"/><stop offset="56.3%" stop-color="#d7235c"/><stop offset="59.8%" stop-color="#d92151"/><stop offset="63.3%" stop-color="#de214c"/><stop offset="66.8%" stop-color="#e12145"/><stop offset="70.3%" stop-color="#e3213a"/><stop offset="73.8%" stop-color="#e61e33"/><stop offset="77.7%" stop-color="#e81e28"/><stop offset="81.3%" stop-color="#eb1e23"/></linearGradient><linearGradient id="dn2o" x1="11.16%" y1="111.43%" x2="73.43%" y2="-9.40%"><stop offset="0%" stop-color="#c52790"/><stop offset="12.5%" stop-color="#c52790"/><stop offset="25%" stop-color="#c5268c"/><stop offset="27.3%" stop-color="#c7268a"/><stop offset="30.5%" stop-color="#c72385"/><stop offset="33.6%" stop-color="#ca2382"/><stop offset="37.1%" stop-color="#cc237d"/><stop offset="40.2%" stop-color="#cc2378"/><stop offset="43.4%" stop-color="#cf2373"/><stop offset="50%" stop-color="#d42366"/><stop offset="56.3%" stop-color="#d7235c"/><stop offset="59.8%" stop-color="#d92151"/><stop offset="63.3%" stop-color="#de214c"/><stop offset="66.8%" stop-color="#e12145"/><stop offset="70.3%" stop-color="#e3213a"/><stop offset="73.8%" stop-color="#e61e33"/><stop offset="77.7%" stop-color="#e81e28"/><stop offset="81.3%" stop-color="#eb1e23"/></linearGradient></defs><g stroke="none" fill-rule="nonzero"><path d="M3.3 18.5L32 33 3.3 47.3c2 4.2 5 8 8.5 10.8l34.6-18.6V26.2L12 7.6c-3.6 3-6.5 6.6-8.6 11z" fill="url(#JDLJ)"/><path d="M3.5 18.2C1.3 22.6 0 27.6 0 33s1.3 10.3 3.5 14.7L33 33 3.5 18.2z" fill="url(#n09n)"/><path d="M33 0a33 33 0 0 0-21.3 7.8L46 26.3v13.2L11.6 58c5.7 5 13.2 7.8 21.3 7.8a33 33 0 0 0 32.9-32.9A33 33 0 0 0 32.9 0z" fill="url(#dn2o)"/><path d="M92 52.7h-6.8L72.5 19.4h6L83.3 32l5.4 15 5.5-15 4.6-12.4h6L92 52.7m16 0V19.4h5.7v33.3H108zm6.8-40.4c0 2-1.7 3.8-4 3.8s-4-1.7-4-3.8 1.7-3.8 4-3.8c2.3-.1 4 1.7 4 3.8m26.6 26.2v-3l-4.8 1c-8.5 2-12.3 3.2-12.3 7.3 0 3 2.5 4.7 7 4.7 5.5.1 10.2-2.8 10.2-10zm5.6-8.2v22.4h-5.5v-4.4c-2 3.4-6.2 5.2-11.3 5.2-6.7 0-11.8-3-11.8-9.5 0-8.6 8.6-10 17.6-12l5.3-1.2v-.2c0-5-3.4-7-8-7-5 0-8.8 2.4-11 4.2l-2-4.8c2.5-2 7-4.4 13-4.4 8.7 0 13.6 4.5 13.6 11.7m32.7 5.7c0-7.5-4.2-12.3-10.4-12.3s-10.8 4.8-10.8 12.4c0 7.4 4.4 12.3 10.7 12.3s10.5-4.8 10.5-12.4zm5.8 0c0 10.6-6.3 17.5-15.5 17.5-4.8 0-8.7-1.8-11.3-5.3v14.3H153v-43h5.5v5.2c2.6-4 6.6-6 11.8-6 9 .1 15.2 7 15.2 17.5m5 16.7h5.7v-43h-5.7v43zm33.4-14.2v-3l-4.8 1c-8.5 2-12.3 3.2-12.3 7.3 0 3 2.5 4.7 7 4.7 5.5.1 10.2-2.8 10.2-10zm5.6-8.2v22.4H224v-4.4c-2 3.4-6.2 5.2-11.3 5.2-6.7 0-11.8-3-11.8-9.5 0-8.6 8.6-10 17.6-12l5.3-1.2v-.2c0-5-3.4-7-8-7-5 0-8.8 2.4-11 4.2l-2-4.8c2.5-2 7-4.4 13-4.4 8.7 0 13.6 4.5 13.6 11.7m22 20.2c-3 8-7 11-14 12.8l-1.8-4.6c3.4-1.2 6.5-2.3 8.8-5.5l-13-33.7h6l4.5 12 5.5 15 5.5-15 4.4-12h6l-12 31"/></g></svg>',
      "friendlyName": "Viaplay",
      "className": "viaplayButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.viaplay.android",
          "androidName": "com.viaplay.android",
          "adbLaunchCommand": "adb shell am start -n com.viaplay.android/.features.home.HomeActivity",
      },
      "apple-tv": {
          "appName": "Viaplay",
      },
      "chromecast": {
          "appName": "com.viaplay.android",
          "androidName": "com.viaplay.android",
          "adbLaunchCommand": "adb shell am start -n com.viaplay.android/.features.home.HomeActivity",
      },
      "nvidia-shield": {
          "appName": "com.viaplay.android",
          "androidName": "com.viaplay.android",
          "adbLaunchCommand": "adb shell am start -n com.viaplay.android/.features.home.HomeActivity",
      },
      "xiaomi": {
          "appName": "com.viaplay.android",
          "androidName": "com.viaplay.android",
          "adbLaunchCommand": "adb shell am start -n com.viaplay.android/.features.home.HomeActivity",
      },
   },


  "videoland": {
      "button": '<svg viewbox="0 0 800.01 113.6" width="800.01" height="113.6" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m0 26.07 50.238 87.534 50.24-87.534H72.05L50.238 67.22l-21.81-41.15zM107.085 26.07h24.301v86.657h-24.301zM284.833 23.39c-12.066 0-23.204 4.878-31.363 13.735-7.727 8.388-12.158 19.801-12.158 31.316 0 11.398 4.42 22.739 12.128 31.115 8.27 8.986 19.69 13.935 32.158 13.935 28.399 0 38.019-21.643 40.061-27.361h-25.036c-2.717 4.38-8.176 6.886-15.025 6.886-7.964 0-17.35-4.605-19.808-17.53l-.193-1.016h62.348c.284-2.667.41-4.742.41-6.686 0-24.479-19.523-44.394-43.521-44.394zm-18.905 36.725.21-1.028c1.505-7.375 7.305-15.987 18.695-15.987 11.238 0 17.074 8.608 18.657 15.979l.223 1.036h-37.785zM381.714 23.39c-24.84 0-45.05 20.21-45.05 45.05s20.21 45.051 45.05 45.051c24.842 0 45.051-20.21 45.051-45.05s-20.21-45.051-45.05-45.051zm0 67.328c-11.829 0-20.75-9.578-20.75-22.279 0-12.702 8.92-22.28 20.75-22.28s20.75 9.579 20.75 22.28c0 12.702-8.92 22.28-20.75 22.28zM786.472 86.275h-1.394c-7.466 0-13.54 6.075-13.54 13.54 0 7.467 6.074 13.542 13.54 13.542h1.394c7.466 0 13.54-6.075 13.54-13.541s-6.074-13.54-13.54-13.54zM714.375 23.39c-24.362 0-42.733 19.367-42.733 45.05 0 16.716 7.314 27.236 13.45 33.118 7.911 7.584 18.672 11.933 29.522 11.933 11.828 0 19.333-4.229 23.366-6.987l2.24 6.222h21.491V.002h-24.268v33.48c-5.288-6.188-13.974-10.092-23.068-10.092zm2.326 67.328c-5.505 0-10.592-2.042-14.32-5.75-4.2-4.177-6.42-10.198-6.42-17.41 0-10.508 7.758-21.377 20.74-21.377 6.24 0 11.564 2.4 15.397 6.943 3.446 4.085 5.345 9.524 5.345 15.315 0 12.702-8.918 22.28-20.742 22.28zM512.678 23.39c-24.362 0-42.733 19.367-42.733 45.05 0 16.716 7.313 27.236 13.449 33.118 7.912 7.584 18.672 11.933 29.523 11.933 11.827 0 19.332-4.229 23.366-6.987l2.24 6.222h21.49V26.05h-23.41l-.857 7.434c-5.289-6.188-13.975-10.092-23.068-10.092zm2.326 67.328c-5.505 0-10.592-2.042-14.32-5.75-4.201-4.177-6.42-10.198-6.42-17.41 0-10.508 7.757-21.377 20.74-21.377 6.24 0 11.564 2.4 15.396 6.943 3.446 4.085 5.345 9.524 5.345 15.315 0 12.702-8.917 22.28-20.74 22.28zM184.82 23.39c-24.362 0-42.734 19.367-42.734 45.05 0 16.716 7.314 27.236 13.45 33.118 7.912 7.584 18.672 11.933 29.522 11.933 11.828 0 19.333-4.229 23.367-6.987l2.24 6.222h21.49V.002h-24.268v33.48C202.6 27.295 193.913 23.39 184.82 23.39zm2.326 67.328c-5.506 0-10.592-2.042-14.321-5.75-4.2-4.177-6.42-10.198-6.42-17.41 0-10.508 7.758-21.377 20.74-21.377 6.24 0 11.565 2.4 15.397 6.943 3.446 4.085 5.345 9.524 5.345 15.315 0 12.702-8.917 22.28-20.741 22.28zM436.194.003h24.302v112.724h-24.302zM596.174 71.466c0-15.952 7.532-25.284 20.74-25.284 12.984 0 20.375 7.261 20.375 21.4l.05 45.143h24.668V63.967c0-27.815-13.309-40.578-38.484-40.578-10.187 0-22.061 4.76-27.348 10.948l-.857-8.29h-23.412v86.677h24.269v-41.26z" fill="#fff"></svg>',
      "friendlyName": "Videoland (NL)",
      "className": "videolandButton",
      "deviceFamily": ["chromecast", "apple-tv", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "nl.rtl.videoland.v2.firetv",
          "androidName": "nl.rtl.videoland.v2.firetv",
          "adbLaunchCommand": "adb shell am start -n nl.rtl.videoland.v2.firetv/fr.m6.m6replay.tv.feature.home.HomeActivity",
      },
      "apple-tv": {
          "appName": "Videoland",
      },
      "chromecast": {
          "appName": "nl.rtl.videoland.v2",
          "androidName": "nl.rtl.videoland.v2",
      },
      "nvidia-shield": {
          "appName": "nl.rtl.videoland.v2",
          "androidName": "nl.rtl.videoland.v2",
      },
      "xiaomi": {
          "appName": "nl.rtl.videoland.v2",
          "androidName": "nl.rtl.videoland.v2",
      },
   },


  "vlc": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 589 205" width="589" height="205" xml:space="preserve"><g><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill: #ec7100;fill-rule:nonzero;opacity:1" transform="matrix(.51 0 0 .51 -36.06 -19.06)" d="m437 400-36-94c-3-10-13-16-23-16H134c-10 0-20 6-23 16l-36 94c-2 3-2 7-2 11 0 16 13 29 29 29h308a29 29 0 0 0 27-40zM299 109l-15-51c-3-11-13-18-24-18h-8c-11 0-21 7-24 18l-15 51a307 307 0 0 0 86 0zm-43 74c-24 0-46-2-64-6l-19 65c20 8 49 13 83 13s63-5 83-13l-20-65c-17 4-39 6-63 6z"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#f2f2f2;fill-rule:nonzero;opacity:1" transform="matrix(.51 0 0 .51 -36.06 -19.06)" d="m319 177-20-68a307 307 0 0 1-86 0l-21 68c18 4 40 6 64 6s46-2 63-6zM173 242l-18 62c19 14 55 23 101 23s82-9 101-23l-18-62c-20 8-49 13-83 13s-63-5-83-13z"/></g><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#ec7100;fill-rule:nonzero;opacity:1" transform="matrix(5.95 0 0 5.95 -80.243 -74.163)" d="m56.08 41.837-8.5-23.755h5.2l6.012 17.58 5.817-17.58h5.088L61.2 41.837zm16.236 0v-23.56h4.796v19.558h11.926v4.002zm35.357-8.734 4.65 1.475q-1.07 3.9-3.565 5.785-2.48 1.88-6.303 1.88-4.73 0-7.778-3.225-3.046-3.24-3.046-8.847 0-5.93 3.063-9.204 3.063-3.3 8.053-3.3 4.36 0 7.08 2.576 1.62 1.523 2.43 4.375l-4.748 1.134q-.42-1.847-1.766-2.917-1.33-1.07-3.24-1.07-2.64 0-4.294 1.896-1.637 1.896-1.637 6.14 0 4.505 1.62 6.417t4.213 1.912q1.912 0 3.3-1.215 1.377-1.215 1.977-3.824z"/></svg>',
      "friendlyName": "VLC",
      "className": "vlcButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "org.videolan.vlc",
          "androidName": "org.videolan.vlc",
      },
      "apple-tv": {
          "appName": "VLC",
      },
      "chromecast": {
          "appName": "org.videolan.vlc",
          "androidName": "org.videolan.vlc",
      },
      "nvidia-shield": {
          "appName": "org.videolan.vlc",
          "androidName": "org.videolan.vlc",
      },
      "xiaomi": {
          "appName": "org.videolan.vlc",
          "androidName": "org.videolan.vlc",
      },
   },


  "volleyball-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="270" height="253" viewBox="0 0 270 253" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M103.8.3l-5.2.7L91 2c-10.8 1.2-10.8 1-6 18 7 25.8 22 60.4 26 60.4 1.7 0 6-6.3 14-20 6.5-11.3 6.4-10.7 2.8-18.8-4-9.2-8.6-22.6-11.8-34.7-1.8-7.3-1.8-7.3-12.2-6.6m53 .6c-1 .8-1.4 2-2.5 6.5-8.2 32-23 61.7-43.6 87.8-5 6.3-14.2 16.6-19 21.3-4.8 4.7-5 5-1.8 9.4 5.8 8.5 14.5 19.7 16 20.5 2 1 3 .4 11-7.7 34.3-34.5 57.7-75.8 70-123.5 3-11.8 2.7-12.3-8.6-13.4-12.8-2-20-2-21.3-1M66.2 6.6a114 114 0 0 0-23.1 7.1c-1.3 1.2-1.2 2.8 1 11.6 7.3 29 18 55.3 34.2 82.7 2.5 4.4 3.6 5.5 5 5 2-.5 20.7-21 21.3-23.3.4-1.4.1-2.3-3.3-8.4a278 278 0 0 1-25.9-67.7c-2.2-8.7-2.3-8.8-9.4-7m131.3-.3c-.6.6-1.3 2.4-2.3 6.7-12.6 52-39 98.6-76.2 134.3-5.8 5.6-6.4 6.5-5.5 8a138 138 0 0 0 21.2 21.3c1.7.4 3-.7 11.3-9a291 291 0 0 0 30.7-36C199.2 101.8 220 55.8 228 18.8c1-5.2.6-5.5-10-8.5-14.6-4.2-19.4-5-20.7-4M1 191.8c-2 1-1.6 2 4.7 15l17.8 37.5c4.2 9 3.7 8.5 11.8 8.4 7.5-.2 6.8.3 11.2-9l17.3-36.4c8-17 8-16-.1-16-8.2-.1-7.2-1-14 14-14.2 31-14 30.8-16 28.7-.6-.6-5.5-11-12.3-26-5.8-12.6-7.2-15.3-8.8-16-1.7-.8-10-1-11.6-.1m77.8-.2c-2 1-2-.4-2 30.7v29l1 .8c1.6 1.3 37.7 1 41.8-.4 16-5.2 19.3-21 6.4-30-3-2-3-2.5-.1-5.7 7.8-8.3 4-19-8.3-23-5.2-1.6-35.6-2.8-38.8-1.5m58 0c-1.8.7-2 1.5-2 6.6 0 7.6-.2 7.4 11.6 7.4 9.7 0 10.4.2 11 2.4a342 342 0 0 1 .4 22.3c0 25.2-.8 22.5 6.8 22.5 4.4 0 5.2-.1 6-.7l1-.8.2-22 .2-22 1-.8c1-.7 1.7-.8 11.3-.8 13.3 0 13.5-.1 10.7-6.6-2.4-5.6-3-6.6-4.5-7.2-1.6-.6-52-.8-53.6-.2m65 .1c-2 1-1.6 2 4 14l19.3 40.5c3.2 6.8 3 6.5 10.5 6.5h6l1.2-1c30-61.6 30-60.5 21-60.5-7.3.1-7-.3-12 11-14 31.4-15.2 33.3-17 32l-20.7-42c-1-1-10.7-1.4-12.4-.5m-94.5 11.8c8 1.6 10.5 6.8 5.3 10.6-2.8 2-19.7 2.7-21.2.8-.8-1-1.2-8.6-.5-10.3.7-1.8 10-2.5 16.4-1m7.4 24c7 3.4 6 10.5-2 12.7-3.4 1-20 1.3-21.2.4-1.3-1-1.4-12-.2-13.6l1-1h10l9.8.1 2.7 1.4" stroke="none" fill="#c7f300"/></svg>',
      "friendlyName": "Volleyball TV",
      "className": "volleyballTVButton",
      "deviceFamily": ["chromecast", "apple-tv", "nvidia-shield", "xiaomi"],
      "apple-tv": {
          "appName": "VBTV",
      },
      "chromecast": {
          "appName": "dce.fivb.volleyballtv",
          "androidName": "dce.fivb.volleyballtv",
          "adbLaunchCommand": "adb shell am start -n dce.fivb.volleyballtv/com.dicetv.MainActivity",
      },
      "nvidia-shield": {
          "appName": "dce.fivb.volleyballtv",
          "androidName": "dce.fivb.volleyballtv",
          "adbLaunchCommand": "adb shell am start -n dce.fivb.volleyballtv/com.dicetv.MainActivity",
      },
      "xiaomi": {
          "appName": "dce.fivb.volleyballtv",
          "androidName": "dce.fivb.volleyballtv",
          "adbLaunchCommand": "adb shell am start -n dce.fivb.volleyballtv/com.dicetv.MainActivity",
      },
   },


  "vtm-go": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 279 63" width="279" height="63" xml:space="preserve"><g><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#fff;fill-rule:nonzero;opacity:1" transform="translate(0 -31)" d="M276.218 51.25c-7.821-13.54-25.405-18.25-38.952-10.432l6.662 11.533a15.113 15.113 0 0 1 7.485-2.042c8.394-.062 15.249 6.69 15.31 15.08.061 8.39-6.693 15.24-15.088 15.302-8.394.062-15.249-6.69-15.31-15.08 0-.037.004-.073.004-.11h-.004v-6.184h-25.687v12.366h12.843v6.064a15.106 15.106 0 0 1-8.855 2.944c-8.395.062-15.25-6.69-15.31-15.08-.062-8.39 6.693-15.24 15.087-15.302 2.81-.021 5.437.735 7.704 2.046l6.665-11.537A28.541 28.541 0 0 0 214.514 37C198.872 37 186 49.865 186 65.5S198.872 94 214.514 94c7.024 0 13.483-2.599 18.475-6.872 8.937 7.59 22.116 9.215 32.792 3.054 13.547-7.818 18.259-25.392 10.437-38.932"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#f0f;fill-rule:evenodd;opacity:1" transform="translate(0 -31)" d="M168.11 59.112c-4.263-19.578-28.316-18.588-36.623-6.38-6.688-11.152-22.57-10.975-31.424-3.636v-5.47H82.44V76.7h-5.838c-5.248 0-8.685-3.117-8.685-9.546v-6.192h9.041V43.628l-9.033-.003L67.917 30l-7.844 13.625-21.867-.02-8.31 14.427c-.36.625-.99.938-1.621.938-.63 0-1.261-.313-1.622-.938l-8.31-14.427H4.852c-3.73 0-6.06 4.045-4.196 7.283L24.08 91.552a4.802 4.802 0 0 0 4.196 2.428c1.631 0 3.262-.81 4.194-2.428l17.62-30.589v8.065C50.09 83.518 58.684 94 74.298 94l25.736-.032V69.235c0-8.771 15.687-11.608 15.687-1.736V93.95h19.291V69.235c0-8.58 14.186-11.47 14.819-2.37v27.1H169V67.767c0-2.052.04-4.368-.89-8.656"/></g></svg>',
      "friendlyName": "VTM GO (BE)",
      "className": "vtmGoButton",
      "deviceFamily": ["apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "apple-tv": {
          "appName": "VTM GO",
      },
      "chromecast": {
          "appName": "be.vmma.vtm.zenderapp",
          "androidName": "be.vmma.vtm.zenderapp",
      },
      "nvidia-shield": {
          "appName": "be.vmma.vtm.zenderapp",
          "androidName": "be.vmma.vtm.zenderapp",
      },
      "xiaomi": {
          "appName": "be.vmma.vtm.zenderapp",
          "androidName": "be.vmma.vtm.zenderapp",
      },
   },


  "vrt-max": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 40 10" width="40" height="10" fill="none" xmlns:v="https://vecta.io/nano"><path d="M13.465 2.824a2.99 2.99 0 0 0 1.402.698 3.48 3.48 0 0 0 .711.072h.542v-1.7l-.538.002c-.396 0-.736-.114-.985-.336-.282-.252-.444-.633-.475-1.099h-1.699a3.77 3.77 0 0 0 .171.996c.172.539.472 1.011.871 1.368zM7.299 8.729h1.827l-.127-2.047c0-1.787.471-2.825 2.288-2.751l.372.014V2.282a4.24 4.24 0 0 0-.346-.02c-2.059 0-4.688.454-4.014 6.467zM5.306 2.282l-.902 2.947-.724 2.033h-.082l-.723-2.033-.916-2.947H0l1.133 3.244 1.293 3.203H4.79l1.29-3.203 1.137-3.244h-1.91zM16.12 6.841c-.332.165-.742.281-1.025.281-.532 0-.831-.19-.939-.834-.08-.479-.11-1.458-.019-2.343h-1.745c-.085 1.054-.091 1.703.046 2.624.216 1.453 1.091 2.25 2.561 2.24.534-.004.995-.111 1.643-.451l-.523-1.517z" fill="#fff"/><path d="M30.846 3.633c-.724 0-1.206.545-1.206 1.375s.482 1.375 1.206 1.375 1.224-.545 1.224-1.375-.482-1.375-1.224-1.375zm7.37-3.155H20.511c-.986 0-1.784.799-1.784 1.784v5.493c0 .986.799 1.784 1.784 1.784h17.704c.986 0 1.784-.799 1.784-1.784V2.262c0-.986-.799-1.784-1.784-1.784zm-3.259 2.28l.678.973c.108.155.339.155.447-.001l.671-.973h1.206l-1.033 1.477a1.3 1.3 0 0 1-2.133 0L33.76 2.758h1.197zM27.902 7.26h-1.09V4.678c0-.634-.33-1.054-.858-1.054-.589 0-.956.42-.956 1.054v2.581h-1.09V4.678c0-.634-.33-1.054-.858-1.054-.581 0-.947.42-.947 1.054v2.581h-1.099V2.758h1.099v.706c.223-.456.67-.777 1.304-.777.714 0 1.206.304 1.403.858.205-.464.777-.858 1.492-.858.973 0 1.599.706 1.599 1.662V7.26zm5.185 0h-1.099v-.527c-.215.357-.732.599-1.295.599-1.358 0-2.143-.947-2.143-2.322s.786-2.322 2.126-2.322c.563 0 1.054.233 1.313.581V2.76h1.099v4.502l-.001-.002zm3.787 0l-.831-1.184c-.108-.154-.336-.154-.445 0l-.831 1.184h-1.17l1.082-1.56a1.39 1.39 0 0 1 2.282.002l1.076 1.557h-1.161z" fill="#ff484c"/><path d="M21.005 2.758h1.099v.706c.223-.456.67-.777 1.304-.777.714 0 1.206.304 1.403.858.205-.464.777-.858 1.492-.858.973 0 1.599.706 1.599 1.662V7.26h-1.09V4.678c0-.634-.33-1.054-.858-1.054-.589 0-.956.42-.956 1.054v2.581h-1.09V4.678c0-.634-.33-1.054-.858-1.054-.581 0-.947.42-.947 1.054v2.581h-1.099V2.758zm7.546 2.251c0-1.375.786-2.322 2.126-2.322.563 0 1.054.233 1.313.581v-.509h1.099v4.502H31.99v-.527c-.215.357-.732.599-1.295.599-1.357 0-2.143-.947-2.143-2.322v-.002zm3.52-.001c0-.831-.482-1.375-1.224-1.375s-1.206.545-1.206 1.375.482 1.375 1.206 1.375 1.224-.545 1.224-1.375zm4.89.694l1.076 1.557h-1.161l-.831-1.184c-.108-.154-.336-.154-.445 0l-.831 1.184h-1.17L34.68 5.7a1.39 1.39 0 0 1 2.282.002zm-2.168-1.467L33.76 2.758h1.197l.678.973c.108.155.339.155.447-.001l.671-.973h1.206l-1.033 1.477a1.3 1.3 0 0 1-2.133 0z" fill="#fff"/></svg>',
      "friendlyName": "VRT MAX (BE)",
      "className": "vrtMaxButton",
      "deviceFamily": ["chromecast", "apple-tv", "nvidia-shield", "xiaomi"],
      "apple-tv": {
          "appName": "VRT MAX",
      },
      "chromecast": {
          "appName": "be.vrt.vrtnu",
          "androidName": "be.vrt.vrtnu",
      },
      "nvidia-shield": {
          "appName": "be.vrt.vrtnu",
          "androidName": "be.vrt.vrtnu",
      },
      "xiaomi": {
          "appName": "be.vrt.vrtnu",
          "androidName": "be.vrt.vrtnu",
      },
   },


  "waipuTV": {
      "button": '<svg viewbox="0 0 280 54" width="280" height="54" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="49.976%" y1=".05%" x2="49.976%" y2="99.609%" id="wptvc"><stop stop-color="#A0509A" offset="0%"/><stop stop-color="#2A91FF" offset="100%"/></linearGradient><linearGradient x1="49.888%" y1=".05%" x2="49.888%" y2="100.069%" id="wptvd"><stop stop-color="#009652" offset="0%"/><stop stop-color="#0FF" offset="100%"/></linearGradient><path id="wptva" d="M.373 40h29.95V.376H.373V40z"/></defs><g fill="none" fill-rule="evenodd"><path d="M39.464 17.97a3.547 3.547 0 0 0-3.546-3.547 3.535 3.535 0 0 0-3.397 2.587l-.026.033-4.533 16.31-4.816-15.54-.024-.024a3.505 3.505 0 0 0-3.026-2.454v-.032h-.59v.026a3.51 3.51 0 0 0-3.144 2.634l-.018.022-4.77 15.368-4.69-16.5-.025-.026a3.514 3.514 0 0 0-3.332-2.423A3.526 3.526 0 0 0 0 17.93c0 .261.033.514.087.758l-.003.007.155.483c.016.043.024.09.042.13l7.016 21.907.06.065a4.051 4.051 0 0 0 3.468 2.71v.036h.585v-.022a4.053 4.053 0 0 0 3.667-2.887l.029-.029 4.542-14.646L24.31 41.04l.024.025a4.052 4.052 0 0 0 3.536 2.925v.037h.586v-.022a4.054 4.054 0 0 0 3.616-2.722l.022-.016 7.236-22.33-.01-.026c.084-.3.143-.613.143-.94m42.347-3.469v-.039h-.59v.019a3.314 3.314 0 0 0-3.122 3.303v23.136h.017a3.314 3.314 0 0 0 3.305 3.151 3.313 3.313 0 0 0 3.305-3.151h.022V17.753h-.008a3.309 3.309 0 0 0-2.928-3.251m-.388-5.082a3.455 3.455 0 1 0-.002-6.91 3.455 3.455 0 0 0 .002 6.91m68.037 5.94-.021-.05h-.04a3.295 3.295 0 0 0-1.895-.813v-.03h-.59v.03a3.312 3.312 0 0 0-3.03 3.294l-.001.001V30.69c0 3.96-1.623 7.108-6.396 7.108-4.72.05-6.09-3.2-6.09-7.31v-12.78l-.01-.017a3.31 3.31 0 0 0-3.022-3.215v-.03h-.588v.03a3.313 3.313 0 0 0-3.031 3.295c0 .02.006.038.006.058l-.006.01V32.16c0 4.874 1.727 11.828 10.864 11.88 5.025.05 7.51-2.387 8.679-4.57v1.397c0 .031-.01.06-.01.091a3.127 3.127 0 0 0 6.254 0V17.792c0-.965-.417-1.826-1.072-2.433M64.09 33.38c-1.27 2.538-3.706 4.468-7.41 4.468-5.991 0-8.48-5.027-8.48-8.478v-.051c0-4.315 3.048-8.68 8.428-8.68 4.01 0 6.6 2.284 7.766 4.925a8.655 8.655 0 0 1 .762 3.908c-.102 1.369-.406 2.69-1.066 3.909m7.665 7.293V17.656l-.02-.033a3.315 3.315 0 0 0-3.304-3.158 3.32 3.32 0 0 0-3.32 3.32c0 .024.006.046.008.069l-.014.022v1.495c-1.218-2.235-4.314-4.926-9.39-4.926-7.818 0-14.163 5.99-14.163 14.772 0 7.869 5.229 14.824 14.163 14.824 3.908 0 7.613-1.625 9.39-4.875v1.482c-.001.035-.01.067-.01.102 0 1.74 1.339 3.153 3.04 3.305v.029h.587v-.03a3.322 3.322 0 0 0 3.04-3.304c0-.025-.006-.05-.007-.076" fill="#FEFEFE"/><g transform="translate(91 14.07)"><mask id="wptvb" fill="#fff"><use xlink:href="#wptva"/></mask><path d="M23.672 15.2c0 4.568-3.4 8.578-8.477 8.578a8.513 8.513 0 0 1-6.04-2.488c-1.523-1.522-2.436-3.654-2.436-6.04 0-2.437.912-4.62 2.385-6.143 1.524-1.573 3.605-2.538 6.042-2.538 5.633 0 8.526 4.57 8.526 8.58v.05zM4 39.996a3.307 3.307 0 0 0 3.013-3.289l.011-.014V25.402c1.115 1.776 4.06 4.57 9.491 4.57 8.174 0 13.808-6.65 13.808-14.57C30.323 8.65 26.212.376 16.465.376c-4.62 0-7.868 2.132-9.85 4.925v-1.73c0-.02.007-.039.007-.059A3.124 3.124 0 0 0 3.5.388 3.117 3.117 0 0 0 .39 3.361l-.016.025v33.407l.01.02A3.305 3.305 0 0 0 3.415 40L4 39.997z" fill="#FEFEFE" mask="url(#wptvb)"/></g><path d="M224.814 44.026a3.455 3.455 0 1 0-.002-6.91 3.455 3.455 0 0 0 .002 6.91m20.208-23.422v.002h-3.388v14.493c0 .963.232 1.65.696 2.06.463.41 1.265.615 2.406.615h.509v.002a3.156 3.156 0 0 1 0 6.308h-.022l-.06.002-.058-.001h-.736c-3.031 0-5.367-.696-7.006-2.086-1.641-1.391-2.461-3.691-2.461-6.9V20.606h-3.384v-.002a3.075 3.075 0 0 1 0-6.15h3.384v-4.01h.02a3.357 3.357 0 0 1 6.715.033c0 .036-.002.07-.003.105v3.873h3.388a3.074 3.074 0 1 1 0 6.149m34.071-1.334-9.402 22.3h-.002a4.078 4.078 0 0 1-7.546-.029h-.002l-9.431-22.216a3.487 3.487 0 0 1 6.431-2.695l.04.104.005.01 6.727 17.481 6.719-17.585h.002a3.486 3.486 0 1 1 6.459 2.63" fill="#FEFEFE"/><path d="M197.818 4.94c-1.235-2.133-3.147-3.596-5.367-4.329-.062 0-.062 0-.124-.06h-.062a9.716 9.716 0 0 0-2.964-.49c-1.668 0-3.336.428-4.88 1.284l-17.047 9.72c-1.73.978-3.027 2.384-3.83 3.974v.06c0 .062-.062.062-.062.123a9.91 9.91 0 0 0-.988 4.28v19.745c0 1.651.432 3.302 1.297 4.83 1.236 2.14 3.15 3.607 5.374 4.34.062 0 .062 0 .123.062h.062a9.741 9.741 0 0 0 2.965.489c1.668 0 3.335-.428 4.88-1.284l6.306-3.596c1.236 2.134 3.148 3.597 5.367 4.33.062 0 .062 0 .124.06h.062a9.7 9.7 0 0 0 2.964.49c1.668 0 3.336-.428 4.88-1.284l17.047-9.72c1.73-.978 3.027-2.385 3.83-3.974 0-.061 0-.122.062-.183a9.91 9.91 0 0 0 .988-4.28V9.781c0-1.65-.432-3.3-1.297-4.83-1.235-2.139-3.15-3.606-5.374-4.34-.062 0-.062 0-.123-.06h-.062a9.716 9.716 0 0 0-2.965-.49c-1.668 0-3.335.428-4.88 1.284l-6.306 3.596z" fill="#FFF"/><path d="M36.133 33.807a9.91 9.91 0 0 0 .989-4.28V9.781c0-1.65-.433-3.3-1.298-4.83-1.235-2.139-3.15-3.606-5.373-4.34-.062 0-.062 0-.124-.06h-.062a9.716 9.716 0 0 0-2.964-.49c-1.668 0-3.336.428-4.88 1.284l-17.047 9.72c-1.73.978-3.027 2.384-3.83 3.974v.06c0 .062-.062.062-.062.123a9.91 9.91 0 0 0-.988 4.28v19.745c0 1.651.432 3.302 1.297 4.83 1.236 2.14 3.15 3.607 5.374 4.34.062 0 .062 0 .123.062h.062a9.741 9.741 0 0 0 2.965.489c1.668 0 3.335-.428 4.88-1.284l17.047-9.72c1.73-.978 3.027-2.385 3.83-3.974 0-.061.061-.122.061-.183z" fill="url(#wptvc)" style="mix-blend-mode:multiply" transform="translate(162)"/><path d="M56.825 29.527V9.781c0-1.65-.432-3.3-1.297-4.83-1.235-2.139-3.15-3.606-5.374-4.34-.062 0-.062 0-.123-.06-.989-.306-2.039-.49-3.027-.49-1.668 0-3.335.428-4.88 1.284l-17.047 9.72c-1.73.978-3.026 2.384-3.83 3.974 0 .122-.061.122-.061.183a9.91 9.91 0 0 0-.988 4.28v19.745c0 1.651.432 3.302 1.297 4.83 1.235 2.14 3.15 3.607 5.373 4.34.062 0 .062 0 .124.062.988.305 2.038.489 3.026.489 1.668 0 3.336-.428 4.88-1.284l17.047-9.72c1.73-.978 3.027-2.385 3.83-3.974 0-.061 0-.122.062-.183a9.91 9.91 0 0 0 .988-4.28z" fill="url(#wptvd)" style="mix-blend-mode:multiply" transform="translate(162)"/></g></svg>',
      "friendlyName": "Waipu TV (DE)",
      "className": "waipuTVButton",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "Waipu TV",
          "androidName": "de.exaring.waipu.firetv.live",
      },
      "chromecast": {
          "appName": "de.exaring.waipu",
          "androidName": "de.exaring.waipu",
      },
      "nvidia-shield": {
          "appName": "de.exaring.waipu",
          "androidName": "de.exaring.waipu",
      },
      "xiaomi": {
          "appName": "de.exaring.waipu",
          "androidName": "de.exaring.waipu",
      },
},


  "watched": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="744" height="76" viewBox="0 0 744 76" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M0 .6L30.5 71c3.2 3.2 6.4 4 19 4h9.7L77 29.5l17 41c4 4 6.6 4.4 20 4.5h9.3l.3-1L153.8.7c0-1-23.5-1-23.7-.1L107.5 53l-20-53H66.3l-20 53L23.6.2C.7.1 0 .1 0 .6m180.7 1l-37.4 73c0 .3 23 .3 23.4 0 .2-.1.6-.8 1-1.4.2-.7.7-1.6 1-2C194 25 194.8 24 195 25.4L222.5 75H234l11.7-.3c.1-.2-.4-1.5-1.2-3L207.6.1h-26m58.6.2l-.2 18.4h85V.1l-85 .2M357 .4c-2.6.4-6 1.5-7.5 2.3-.7.5-1.5.8-1.8.8-.6 0-5.4 4.8-5.4 5.4 0 .3-.3 1-.6 1.5s-1 2-1.3 3.3l-.7 2.3v21.5V59c1 3.6 1.7 5 2 5.6.6 2 5.5 7 6 7 .3 0 1 .2 1.4.6 1.6 1 5.5 2 8.6 2.5a814 814 0 0 0 56.9-.5c9-2.5 13.5-7.5 14.7-16.2l.2-1.6-60-.2c-4.2-1.6-5-2.4-6-4.3l-.8-1.5V24.7l.8-1.6c.8-1.8 2-3 4.3-3.7 1.5-.6 3.2-.6 31.5-.7l30-.1-.2-2.2a18 18 0 0 0-1.2-5.6c-.3-.5-.6-1.4-.8-2-1.2-3.2-6.2-6.4-12.4-8a1010 1010 0 0 0-58-.4m87 37V75h23.5V.1H444m69 14v14l-43.6.5 7.3 17.6c.1.5 1.3.5 18.2.5h18v14 14l23.3-.2V.2L513 .1m47.7.6c-3.8 1-7.2 3.7-8.7 7-1 2.4-1.3 5.6-1.3 29.8 0 29.7 0 29.4 4 33.3C559 75 557 75 597 75h33.3V56.4h-56v-19-18.8h56V.1l-69.5.6m84 36.8V75h23.5V46.8v-28h21.4c31.6 0 29-1.7 29 19.5l-.1 13.5-1 1.2c-2.2 3.4-3 3.5-27 3.5h-20.2l.2 1 7.3 17c.3.7 45 .7 48.3.1 5-1 12.6-5.2 12.6-7 0-.1.4-.8 1-1.6 2.7-4.3 2.8-6 2.8-28.3 0-22-.1-23.7-2.8-28-.5-.7-1-1.5-1-1.6 0-.5-4-3.8-5.5-4.6-6.2-3-4.5-3-49.6-3h-39M271 21v54l23.3.2V25.6L271 21M576 28.6l7.8 18.2 41.4-.5-7.6-18c-35-.1-41.6-.1-41.6.2" stroke="none" fill="#fff"/></svg>',
      "friendlyName": "WATCHED",
      "className": "watchedButton",
      "appName": "com.watched.play",
      "androidName": "com.watched.play",
      "adbLaunchCommand": "adb shell am start -n com.watched.play/com.watched.play.MainActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"],},


  "weyd": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="311" height="113" viewBox="0 0 311 113" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M302.4.2c-2.5.4-2.4-.5-2.4 19.5v17.5c-.3.8-1 .3-3-1.7-6-6.2-14.7-8-24-5-25.3 8.5-24.3 51.4 1.4 58.2 9.3 2.4 16.6.8 23-5.4 2.5-2.3 2.7-2.2 2.8 1.5.1 3.2.7 3.6 5 3.6 3 .1 4-.2 4.5-1.3.4-1 .3-85.2-.1-85.8-.8-1-4.3-1.7-7-1.2m-134.7 29c-27 3-33.4 42.4-9.4 56.8 11 6.6 23.2 4.8 34.3-5 3.3-3 3.3-3.3.1-6.7-3-3.2-3.2-3.2-6-.5-10.7 10-25.4 8-31.3-4.2-1.6-3.4-2.4-3 13.5-5.6l17.8-2.8c9-1.4 10.7-2.3 10.7-6a28 28 0 0 0-8.3-18.3c-6-6-13.5-8.7-21.4-7.8m-112.3 1c-2 .6-1.7 1.2 3.7 14.5l11 26.8c7.6 18.4 7 17.4 12 17 2.8-.3 2.2.7 9-16 5-12.3 5.6-13.5 6.3-13.5.5 0 .8.7 6.5 14.4 6.7 16.2 6 15.5 11 15 2.7-.3 2.3.4 9-15.7l16-42.2c-.8-.5-6-.8-7.5-.3-1.5.4-2 1.2-4.4 7.3C114 73 114.5 72 113.7 72c-.6 0-3.8-7.5-9-21-2.3-6-2.3-5.6-.8-9 5-11.6 5-11.8-1-11.8-5 0-4.4-.8-9.2 11.5-10.7 27.5-12 30.6-13 30.2-.7-.4-4-8.4-13.3-32.5-3-7.8-3.4-8.4-5-9-1-.3-5.7-.3-6.8 0m144-.1c-1 .2-1.5 1.2-1.4 2.3L220 88c-.1.4-2 5.3-4.2 10.8-5.6 13.5-5.6 12.8.3 12.8 4 0 4.7-.2 5.4-1.6l28-68c5-12 5-11.8-1-11.8-3.7 0-4.5.2-5.2 1.3a1398 1398 0 0 0-12.3 30.9c-5.2 13.4-5 13.2-6 11.7a1472 1472 0 0 1-14.9-37c-2.7-7.3-2.4-7-7-7l-3.6.1m-25.4 9c5 1.2 9.7 5.3 12.3 10.3 1.7 3.4 2.4 3-11 5.2-21.8 3.5-21.7 3.5-21.5 1 .5-7.6 6.7-15.4 13.2-16.7.7-.2 1.4-.3 1.7-.4a18 18 0 0 1 5.4.5m114 .3c18.7 6 17 37.3-2.2 40.7-14 2.4-24-10.3-20.7-26.2 1.7-8 6.6-13.4 14-15 1.8-.4 7-.2 9 .4" fill="#fafafa"/><path d="M3.6 30.2a6 6 0 0 0-3 2.9L0 34.3c-.1 53.2-.2 52.3 3 54 2.8 1.6 2.2 2 26.6-12C53 62.6 52.8 62.7 52.8 59.4s.3-3-23.6-17c-23-13-23-13.2-25.6-12.3" fill="#249cac"/></svg>',
      "friendlyName": "weyd",
      "className": "weydButton",
      "appName": "app.weyd.player",
      "androidName": "app.weyd.player",
      "adbLaunchCommand": "adb shell am start -n app.weyd.player/.ui.SplashScreenActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"],},


  "wow": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="629" height="181" viewBox="0 0 629 181" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><defs><linearGradient id="RFBb" x1="0.00%" y1="50.05%" x2="99.98%" y2="50.05%"><stop offset="0%" stop-color="#0c2426"/><stop offset="18%" stop-color="#0b2d2f"/><stop offset="48%" stop-color="#084447"/><stop offset="86%" stop-color="#02696f"/><stop offset="100%" stop-color="#00797f"/></linearGradient></defs><path d="M53.8 175.3c17 0 24.8-9.5 31.4-22.8l30-60 15.2 54.7c6 21.2 13.8 28 28.8 28 15 0 24.5-5 33-25.3l22.6-55.5c1.2 52 38.5 85.5 89.3 85.5 51 0 85.5-33.2 92.6-75.4l8 44.2c3.4 18.4 12 26.5 26.7 26.5 14.8 0 23.4-6 30.7-19.4l34.4-63.3 13.5 56.7c4.2 17.2 11.8 26 27 26 15.3 0 22.6-6 29.3-19l58-113c2.5-4.6 3.7-9.7 3.7-15 0-13.2-10.3-23.5-25.5-23.5-15.3 0-22.6 7.3-28.5 20.3l-27.5 59-14.8-58c-3.2-13-10.5-21.3-25-21.3-9.3 0-18.7 2.7-27.3 19l-31.4 60.6L437 26.5c-2.5-15.2-13.3-21.8-26-21.8-7-.3-14 2.3-18.8 7.3-5 5-7.7 11.7-7.5 18.7a49 49 0 0 0 .7 8.6l1 5C373.3 19.6 346.5 0 310 0c-25 0-53.5 9.6-71.2 33l.3-6c-.3-12.8-8.6-22.3-24-22.3-15.2 0-22 6.6-27.5 20.3l-24 63.2-16-61.7c-3.4-12.7-10-21.8-24.5-21.8-14.5 0-21.7 4.6-29 20.8l-27.5 63-13.8-62C49.4 11.3 38.6 4.7 25.6 4.7S-.7 15.2 0 30.7c0 2.2.4 4.5 1 6.6l24.3 108c3.7 15.7 9.6 30 28.5 30zm212.4-83.7c0-23.6 17.7-42.2 39.8-42.2s39.8 16.7 39.8 41-16.5 40.2-39.8 40.2-39.8-17-39.8-39z" stroke="none" fill="url(#RFBb)" fill-rule="nonzero"/></svg>',
      "friendlyName": "WOW",
      "className": "wowButton",
      "appName": "de.sky.online",
      "androidName": "de.sky.online",
      "adbLaunchCommand": "adb shell am start -n de.sky.online/sky.wrapper.tv.GoogleMainActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"],},


  "xciptv-player": {
      "button": 'XCIPTV',
      "friendlyName": "XCIPTV Player",
      "className": "xciptvButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.nathnetwork.xctvplayerofficial",
          "androidName": "com.nathnetwork.xctvplayerofficial",
      },
      "apple-tv": {
          "appName": "XCIPTV",
      },
      "chromecast": {
          "appName": "com.nathnetwork.xciptv",
          "androidName": "com.nathnetwork.xciptv",
      },
      "nvidia-shield": {
          "appName": "com.nathnetwork.xciptv",
          "androidName": "com.nathnetwork.xciptv",
      },
      "xiaomi": {
          "appName": "com.nathnetwork.xciptv",
          "androidName": "com.nathnetwork.xciptv",
      },
   },


  "xfinityStream": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="290" height="45" viewBox="0 0 290 45" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M35.8.1c-4 1.3-6.3 4.8-6.3 9.5v1.8h-1.3H27l-1.5 2.1-1.4 2.1h2.8l2.7.1v19.2h5V15.7h6v-4.3h-6V9.7c0-3.5 2.2-5.7 5.3-5.1 1 .1 1 .1 1-.6.1-.4.3-1.4.5-2.2s.3-1.5.2-1.6c-.2-.2-5-.3-5.8-.1M97 2.9l-2 1-.1 3.8-.1 3.7h-5v4.3h5v6c0 10.9 1.7 13.6 8.8 13.6 3.7 0 3.7 0 3-2.6l-.5-2h-1.8c-4 .1-4.6-1-4.6-9.1v-5.9h3.2c1.8 0 3.3-.1 3.3-.2l-1-2.1-1-2h-4.6V6.7c0-3.7-.1-4.8-.4-4.8-.1.1-1.2.5-2.4 1m70-.4l-1.3.5v8.4h-5.5v3h5.4l.1 7.7c.1 8.1.2 8.5 1.4 10.4 1.3 2 4 3.1 7.4 2.9 2.3-.2 2.3-.1 2-1.9l-.1-1.4-1.6.2c-5 .6-6-.8-6-10.7v-7.2h7.8v-3H169V6.7c0-5.3.1-5-2-4.2M64.8 11c-1.6.1-4.3 1.2-4.8 1.8s-.7.4-.7-.5v-.9h-5v23.5h5V18.8l1-1.1c2.8-2.7 7.3-2.8 9.3-.2 1.2 1.6 1.4 2.7 1.4 9.5 0 8 0 7.9 3.3 7.9H76v-7.4l-.3-8.8c-1-5.5-5.2-8.4-11-7.7m83.4 0c-4 .5-6.7 3.6-6.4 7.4.2 2.8 2 4.2 7 5.6 5.2 1.6 6.5 2.6 6.2 4.9-.5 3.7-6.2 4.6-10.7 1.6-1.6-1-1.5-1-2.4.3l-1 1.2.6.6c2.5 2.7 9.2 3.6 13 1.9 4.6-2.3 5.3-8.5 1.2-11.1a28 28 0 0 0-6.7-2.5c-3.3-1-4.4-2.2-4-4 .8-2.9 5.3-3.9 9-2l1.8.7c.3-.4 1.4-2.2 1.4-2.4 0-1.2-6-2.6-9-2.2m42.5 0a10 10 0 0 0-4.8 2.2l-1 .8v-2.6h-3v23.5h3V27c0-7.4 0-7.9.5-8.8 1.3-2.5 4-4.3 6.7-4.3h1.5l.3-1.4.2-1.5a10 10 0 0 0-3.5 0m14 0c-9.3 1.1-13 14.6-5.7 21.3 4.5 4.4 12.3 4.2 16.8-.4l1.2-1.3-.7-.6c-1-.8-2-.8-3.2.2-5.7 4.7-14.7.9-14.7-6.1v-.7h19l-.2-1.9c-.3-4.4-2.7-8.1-6.2-9.7-1.2-.5-1.8-.7-4.2-1l-2.2.2m26-.1c-14.7 2.1-13.2 24.6 1.6 24.5 3 0 5.5-.9 7.3-2.7l1-.9v3.1h3V11.4h-3v2.8l-1-.7c-2.3-2-6-3-9-2.6m28.5 0c-2 .3-3.3.9-4.8 2l-1.3 1v-2.5h-3v23.5h3v-8c0-9.1-.1-8.7 2-10.7 4-3.7 9.7-2.8 12 1.9.5 1.1.6 1.5.7 8.6.1 8.4.1 8.2 2 8.2h1.3l-.1-8.1c0-7.8 0-8.1.5-8.8 3.7-5.2 10.7-5.5 13.3-.4.8 1.6 1 3.5 1 10.2 0 7.2 0 7.1 2 7.1h1v-8.3l-.6-9.7c-2.6-6.6-12-8.1-17.2-2.9l-1.4 1.4-.5-.5c-.2-.3-.4-.7-.4-.8-.1-1.6-6.2-3.7-9.4-3.2M.8 11.6a449 449 0 0 0 7.8 10.8c.1.2-1 2.1-4.2 6.2L0 34.8c0 .1 1 .1 2.4.1 3.2 0 3.3-.1 6.6-4.5l3-3.7 6.3 8.7c7.3 10.1 6.7 9.6 10.4 9.5l2.6-.1-8-11.1-8-11 4-5.6 4.2-5.5-2.5-.1c-3.3-.1-3.6 0-6.2 3.6L12 18.4c-.2.2-.7-.4-2.5-2.9-2.8-4-3-4.1-6.3-4.1l-2.5.2M44 23.2v11.7h5V11.4h-5v11.8m37.3 0v11.7h5V11.4h-5v11.8m31.2-2.2l4.5 9.6-4 7.1-3.8 7.1 2 .1c3.7.1 2.6 1.7 12.8-17.4l8.6-15.9-2-.1c-3.3-.1-3-.3-7 7.1L120 25a55 55 0 0 1-3-6c-3.5-7.7-3.3-7.4-6.5-7.5l-2.5-.1 4.5 9.6m97.5-6.3c2 1.2 3.4 3 4 5l.2 1h-7.7c-6 0-7.7-.1-7.7-.3 0-1.7 3-5.3 5-6.1 1.7-.6 4.8-.4 6.2.4m26.4.1c.8.4 2 1.4 3 2.2l1.5 1.4-.1 4.4v4.5l-.8 1.2c-5.6 7.5-16.6 3.3-16-6.1.4-6.5 7-10.4 12.6-7.6" stroke="none"/></svg>',
      "friendlyName": "Xfinity Stream",
      "className": "xfinityStreamButton",
      "appName": "com.xfinity.cloudtvr.tenfoot",
      "androidName": "com.xfinity.cloudtvr.tenfoot",
      "deviceFamily": ["amazon-fire", "apple-tv", "nvidia-shield"],
      "amazon-fire": {
          "appName": "com.xfinity.cloudtvr.tenfoot",
          "androidName": "com.xfinity.cloudtvr.tenfoot",
      },
      "apple-tv": {
          "appName": "Stream",
      },
      "nvidia-shield": {
          "appName": "com.xfinity.cloudtvr.tenfoot",
          "androidName": "com.xfinity.cloudtvr.tenfoot",
      },
   },


  "youtube": {
      "button": '<svg viewBox="409.289 277.787 512 114.301" width="512" height="114.301" xmlns="http://www.w3.org/2000/svg"><g class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M569.154 295.637a20.447 20.447 0 0 0-14.436-14.436c-12.728-3.414-63.79-3.414-63.79-3.414s-51.061 0-63.79 3.414a20.447 20.447 0 0 0-14.435 14.436c-3.414 12.728-3.414 39.3-3.414 39.3s0 26.573 3.414 39.302a20.446 20.446 0 0 0 14.435 14.435c12.729 3.414 63.79 3.414 63.79 3.414s51.062 0 63.79-3.414a20.446 20.446 0 0 0 14.436-14.435c3.414-12.729 3.414-39.301 3.414-39.301s-.014-26.573-3.414-39.301z" class="style-scope yt-icon" fill="red"/><path d="m474.585 359.429 42.42-24.49-42.42-24.488v48.978z" class="style-scope yt-icon" fill="#fff"/></g><g class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M34.602 13.004 31.395 1.418h2.798l1.124 5.252c.287 1.294.497 2.397.633 3.31h.082c.094-.655.306-1.75.633-3.291l1.164-5.27h2.799L37.38 13.003v5.557H34.6v-5.557h.002zM41.47 18.194c-.565-.381-.967-.974-1.207-1.778-.237-.805-.357-1.872-.357-3.208V11.39c0-1.348.136-2.432.409-3.248.273-.816.699-1.413 1.277-1.787.579-.374 1.338-.563 2.279-.563.927 0 1.667.191 2.227.572.558.381.967.978 1.225 1.787.26.812.389 1.891.389 3.239v1.818c0 1.336-.128 2.408-.38 3.217-.25.811-.66 1.404-1.224 1.778-.565.374-1.332.562-2.298.562-.997.002-1.776-.19-2.34-.571zm3.165-1.962c.156-.409.236-1.074.236-2.001v-3.902c0-.898-.078-1.557-.236-1.97-.157-.417-.432-.624-.828-.624-.38 0-.651.207-.806.623-.158.417-.235 1.073-.235 1.971v3.902c0 .927.075 1.594.225 2.001.15.41.421.614.816.614.396 0 .67-.204.828-.614zM56.815 18.563H54.61l-.244-1.533h-.061c-.6 1.157-1.498 1.736-2.698 1.736-.83 0-1.444-.273-1.839-.816-.395-.546-.593-1.397-.593-2.554V6.037h2.82v9.193c0 .56.061.957.184 1.195.122.237.327.357.613.357.245 0 .48-.075.706-.226.226-.15.39-.34.5-.571v-9.95h2.818v12.527z" class="style-scope yt-icon" style="fill:#282828" transform="matrix(5.71504 0 0 5.71504 409.289 277.787)"/><path d="M64.475 3.688h-2.798v14.875h-2.759V3.688H56.12V1.42h8.356v2.268z" class="style-scope yt-icon" style="fill:#282828" transform="matrix(5.71504 0 0 5.71504 409.289 277.787)"/><path d="M71.277 18.563H69.07l-.245-1.533h-.06c-.6 1.157-1.499 1.736-2.699 1.736-.83 0-1.443-.273-1.839-.816-.395-.546-.592-1.397-.592-2.554V6.037h2.82v9.193c0 .56.06.957.183 1.195.122.237.327.357.614.357.244 0 .48-.075.705-.226.226-.15.39-.34.501-.571v-9.95h2.818v12.527zM80.609 8.039c-.172-.79-.447-1.362-.828-1.717-.38-.355-.905-.532-1.573-.532-.518 0-1.002.146-1.451.44-.45.294-.798.677-1.042 1.155h-.021v-6.6h-2.717v17.776h2.329l.287-1.186h.06c.22.424.546.755.981 1.002.436.245.92.367 1.451.367.953 0 1.656-.44 2.105-1.317.45-.88.675-2.25.675-4.118v-1.982c0-1.4-.087-2.498-.256-3.288zm-2.585 5.11c0 .913-.037 1.628-.113 2.145-.075.518-.2.887-.378 1.103a.871.871 0 0 1-.715.327c-.233 0-.447-.054-.645-.165a1.232 1.232 0 0 1-.48-.489V8.96c.095-.34.26-.618.492-.837.23-.218.485-.327.755-.327a.76.76 0 0 1 .663.337c.158.226.266.602.327 1.133.061.532.092 1.287.092 2.268v1.615h.002zM84.866 13.871c0 .804.023 1.407.07 1.809.047.402.146.694.297.88.15.183.38.274.693.274.421 0 .713-.164.868-.491.158-.327.243-.873.257-1.634l2.431.143c.014.108.022.259.022.45 0 1.156-.318 2.022-.95 2.593-.633.572-1.53.859-2.686.859-1.39 0-2.364-.436-2.921-1.308-.56-.873-.838-2.22-.838-4.045v-2.187c0-1.88.29-3.253.868-4.118.579-.866 1.569-1.299 2.973-1.299.966 0 1.71.177 2.227.532.517.355.882.905 1.094 1.656.211.75.317 1.785.317 3.106v2.145h-4.722v.635zm.357-5.903c-.143.176-.237.466-.287.868-.047.402-.07 1.011-.07 1.83v.898h2.062v-.898c0-.805-.028-1.414-.082-1.83-.054-.416-.153-.708-.296-.88-.144-.169-.365-.256-.664-.256-.3.002-.522.092-.663.268z" class="style-scope yt-icon" style="fill:#282828" transform="matrix(5.71504 0 0 5.71504 409.289 277.787)"/></g></g></g></svg>',
      "friendlyName": "YouTube",
      "className": "youtubeButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "YouTube (FireTV)",
          "androidName": "com.amazon.firetv.youtube",
          "adbLaunchCommand": "adb shell am start -n com.amazon.firetv.youtube/dev.cobalt.app.MainActivity",
      },
      "apple-tv": {
          "appName": "YouTube",
      },
      "chromecast": {
          "appName": "YouTube",
          "androidName": "com.google.android.youtube.tv",
      },
      "nvidia-shield": {
          "appName": "YouTube",
          "androidName": "com.google.android.youtube.tv",
      },
      "xiaomi": {
          "appName": "YouTube",
          "androidName": "com.google.android.youtube.tv",
      },
  },


  "youtubekids": {
      "button": '<svg viewbox="0 0 136 24" width="136" height="24" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><g fill="#282828"><path d="M113.941 2.299c-1.16 0-1.706.44-1.706 1.968 0 1.576.545 1.968 1.706 1.968 1.185 0 1.706-.395 1.706-1.968.003-1.459-.521-1.968-1.706-1.968zM107.686 10.547l3.37-7.875h-3.186l-1.913 4.75-1.777 4.66v-9.41h-3.003v19.435h3.003V16.5l1.436-3.453 2.298 9.059h3.234l-2.618-8.942zM112.421 7.907h3.006v14.2h-3.006zM131.975 13.512c-1.025-.765-1.661-1.275-1.661-2.387 0-.786.364-1.226 1.229-1.226.888 0 1.184.626 1.205 2.757l2.641-.115c.205-3.45-.909-4.888-3.802-4.888-2.686 0-4.006 1.227-4.006 3.752 0 2.294 1.092 3.336 2.866 4.702 1.525 1.205 2.414 1.877 2.414 2.848 0 .741-.456 1.25-1.253 1.25-.933 0-1.48-.904-1.341-2.477l-2.663.045c-.409 2.942.752 4.656 3.847 4.656 2.71 0 4.12-1.274 4.12-3.821 0-2.315-1.138-3.243-3.596-5.096zM123.097 1.955V9.12c-.53-.925-1.54-1.467-2.662-1.467-2.118 0-3.095 1.923-3.095 6.163v2.248c0 4.68.752 6.277 2.958 6.277 1.345 0 2.527-.949 2.959-2.248h.044l.388 2.016h2.435V1.955h-3.027zm0 16.746c-.228.835-.797 1.368-1.389 1.296-.933 0-1.205-.925-1.205-4.17v-1.83c0-3.08.34-4.053 1.341-4.053.501 0 .978.232 1.253.741v8.016zM43.43 21.693c-.628-.432-1.076-1.104-1.343-2.016-.265-.912-.399-2.122-.399-3.637v-2.061c0-1.528.152-2.758.456-3.683.304-.925.779-1.603 1.423-2.027.645-.424 1.491-.637 2.54-.637 1.032 0 1.857.216 2.48.648.622.432 1.078 1.11 1.366 2.027.288.92.433 2.144.433 3.672v2.061c0 1.515-.142 2.73-.422 3.648-.28.92-.737 1.592-1.366 2.016-.629.424-1.483.637-2.56.637-1.108.003-1.978-.216-2.607-.648zm3.528-2.224c.176-.464.262-1.218.262-2.269v-4.424c0-1.019-.086-1.765-.262-2.235-.176-.472-.482-.706-.922-.706-.425 0-.726.234-.9.706-.175.472-.261 1.216-.261 2.235V17.2c0 1.05.084 1.808.251 2.27.168.463.47.695.91.695.44 0 .749-.232.922-.696zM91.783 16.075v.717c0 .912.026 1.595.079 2.05.052.457.162.787.33.998.167.208.424.312.773.312.469 0 .794-.187.967-.557.175-.371.27-.99.285-1.854l2.71.163c.016.123.023.293.023.51 0 1.311-.353 2.293-1.058 2.94-.705.649-1.703.974-2.993.974-1.548 0-2.633-.493-3.254-1.483-.624-.989-.933-2.517-.933-4.586v-2.48c0-2.131.322-3.688.967-4.67.644-.981 1.748-1.472 3.312-1.472 1.077 0 1.905.2 2.482.603.576.403.982 1.027 1.218 1.877.236.851.354 2.024.354 3.523v2.432h-5.262v.003zm.398-5.976c-.16.2-.264.528-.32.984-.052.456-.078 1.146-.078 2.074v1.019h2.298v-1.019c0-.912-.031-1.602-.092-2.074-.06-.472-.17-.803-.33-.998-.16-.192-.406-.29-.739-.29-.333.002-.579.104-.739.304zM35.78 15.808 32.204 2.672h3.118l1.253 5.955c.32 1.466.553 2.717.705 3.752h.091c.105-.742.341-1.984.705-3.731l1.297-5.976h3.119l-3.619 13.136v6.301h-3.097v-6.301h.002zM60.53 7.91v14.202H58.07l-.272-1.739h-.068c-.669 1.312-1.67 1.968-3.006 1.968-.925 0-1.609-.309-2.05-.925-.44-.619-.66-1.584-.66-2.896V7.91h3.142v10.423c0 .635.068 1.086.205 1.355.136.27.364.405.684.405.272 0 .534-.085.786-.256.251-.17.435-.386.558-.648V7.907h3.14v.002zM76.645 7.91v14.202h-2.458l-.273-1.739h-.068c-.668 1.312-1.669 1.968-3.005 1.968-.925 0-1.61-.309-2.05-.925-.44-.619-.66-1.584-.66-2.896V7.91h3.142v10.423c0 .635.068 1.086.204 1.355.137.27.365.405.684.405.273 0 .535-.085.786-.256.252-.17.435-.386.559-.648V7.907h3.139v.002z"/><path d="M69.067 5.245h-3.119v16.867h-3.074V5.245h-3.118v-2.57h9.31zM87.04 10.179c-.191-.896-.498-1.544-.922-1.947-.425-.403-1.01-.603-1.753-.603-.577 0-1.117.166-1.617.499-.5.333-.889.768-1.161 1.31h-.024V1.954h-3.026v20.154h2.594l.32-1.344h.068c.243.48.608.856 1.092 1.136a3.2 3.2 0 0 0 1.617.416c1.062 0 1.845-.498 2.346-1.493.5-.997.752-2.552.752-4.67v-2.247c0-1.587-.095-2.832-.286-3.728zm-2.88 5.794c0 1.035-.042 1.846-.126 2.432-.083.587-.222 1.006-.422 1.251a.964.964 0 0 1-.796.37 1.386 1.386 0 0 1-1.253-.741v-8.061c.105-.387.289-.701.548-.95.257-.247.54-.37.841-.37.32 0 .566.128.74.381.175.256.295.683.363 1.286.068.602.103 1.458.103 2.57v1.832h.002z"/></g><path d="M28.909 13.576c-.019-1.413-.82-8.107-1.206-9.147-.249-.672-.776-1.896-1.753-2.642C24.7.832 23.68.659 22.381.632 21.474.613 6.886 2.496 5.121 3.157c-1.319.494-2.354 1.128-3.166 1.944C.635 6.43.38 7.72.59 9.99c.19 2.056 1.137 8.88 1.609 10.291.521 1.56 1.48 2.757 3.063 2.928 4.83.528 5.97-2.17 17.198-2.147 3.401.008 5.091-1.504 5.796-2.821.823-1.55.666-3.587.653-4.664z" fill="red"/><path d="M22.017 1.15h.013c1.242.023 2.214.191 3.406 1.1.933.713 1.436 1.88 1.672 2.523.367.992 1.132 7.379 1.15 8.728.014 1.027.166 2.974-.623 4.451-.668 1.253-2.277 2.69-5.506 2.69H21.96c-9.63 0-11.401 2.113-15.104 2.113-.364 0-.747-.022-1.156-.064-1.509-.166-2.423-1.307-2.921-2.795-.451-1.347-1.352-7.856-1.536-9.819-.202-2.165.042-3.397 1.302-4.664.773-.778 1.761-1.384 3.022-1.853 1.672-.63 15.468-2.41 16.45-2.41zm0-1.134c-.624 0-4.701.507-8.116.979-3.417.472-7.701 1.117-8.723 1.498-1.41.528-2.529 1.219-3.417 2.112C.126 6.248-.073 7.957.13 10.184c.16 1.725 1.07 8.523 1.59 10.077.703 2.099 2.07 3.36 3.855 3.555.44.048.86.072 1.276.072 1.565 0 2.804-.339 4.24-.73 2.26-.617 5.068-1.382 10.867-1.382H22.13c1.42 0 4.898-.32 6.48-3.283.847-1.584.797-3.506.769-4.656a86.591 86.591 0 0 0-.008-.352c-.019-1.37-.789-7.936-1.221-9.112-.5-1.357-1.19-2.376-2.047-3.029C24.705.277 23.518.045 22.053.016h-.036z" fill="#282828"/><path d="m19.095 11.741-.107.067c-.283.192-.564.387-.844.581l-4.434 3.07c-.322.248-.928.637-1.158.514-.23-.125-.312-.97-.367-1.381l-.013-.09c-.068-.494-.613-5.193-.676-5.71-.019-.147-.108-.683.057-.805.176-.131.621.018.77.066.873.28 5.244 1.83 6.604 2.526.04.021.084.04.129.058.194.083.46.198.466.528.003.315-.236.459-.427.576z" fill="#FFF"/><path d="M12.106 8.68c1.518.52 5.029 1.787 6.682 2.533-.199.136-.398.275-.597.414l-5.249 3.634-.023.016-.021.016s-.003 0-.003.003c-.005-.037-.008-.07-.013-.099l-.024-.181-.015-.112c-.058-.416-.42-3.504-.634-5.35-.04-.335-.074-.637-.103-.874zm-.849-1.395a.406.406 0 0 0-.243.062c-.197.144-.09.781-.068.954.073.611.72 6.179.799 6.763l.013.107c.065.488.16 1.49.435 1.637.037.019.081.03.13.03.328 0 .913-.382 1.243-.638l5.251-3.635c.333-.232.666-.461 1.001-.688l.129-.08c.228-.138.508-.312.503-.682-.008-.39-.323-.526-.553-.624a1.955 1.955 0 0 1-.15-.07c-1.608-.824-6.786-2.658-7.819-2.992-.13-.042-.432-.144-.67-.144z" fill="#282828"/></g></svg>',
      "friendlyName": "YouTube Kids",
      "className": "youtubekidsButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.google.android.youtube.tvkids",
          "androidName": "com.amazon.firetv.youtube.kids",
          "adbLaunchCommand": "adb shell am start -n com.amazon.firetv.youtube.kids/dev.cobalt.app.MainActivity",
      },
      "apple-tv": {
          "appName" : "YouTube Kids",
      },
      "chromecast": {
          "appName" : "YouTube Kids",
          "androidName": "com.google.android.youtube.tvkids",
          "adbLaunchCommand": "adb shell am start -n com.google.android.youtube.tvkids/com.google.android.apps.youtube.tvkids.activity.MainActivity",
      },
      "nvidia-shield": {
          "appName" : "YouTube Kids",
          "androidName": "com.google.android.youtube.tvkids",
          "adbLaunchCommand": "adb shell am start -n com.google.android.youtube.tvkids/com.google.android.apps.youtube.tvkids.activity.MainActivity",
      },
      "xiaomi": {
          "appName" : "YouTube Kids",
          "androidName": "com.google.android.youtube.tvkids",
          "adbLaunchCommand": "adb shell am start -n com.google.android.youtube.tvkids/com.google.android.apps.youtube.tvkids.activity.MainActivity",
      },
  },


  "youtubeTV": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="464.4" height="87" viewBox="0 0 122.872 23.019"><path style="stroke-width:.26458332" d="M-120.918 331.487h-3.149v16.748h-3.096v-16.748h-3.148v-2.567h9.393zm.688-2.567h3.307l1.032 8.678c.29 2.488.555 4.63.873 7.568h.132c.291-2.937.582-5.028.873-7.568l1.059-8.678h3.28l-3.175 19.288h-4.18z" class="wordmark" transform="translate(232.281 -327.068)"/><path d="M-200.558 330.852c-.37-1.403-1.455-2.461-2.831-2.858-2.514-.661-12.568-.661-12.568-.661s-10.054 0-12.567.661a4.014 4.014 0 0 0-2.831 2.858c-.662 2.513-.662 7.725-.662 7.725s0 5.24.662 7.726c.396 1.403 1.455 2.487 2.857 2.858 2.487.661 12.541.661 12.541.661s10.054 0 12.568-.661a4.107 4.107 0 0 0 2.858-2.831c.661-2.514.661-7.726.661-7.726s-.026-5.239-.688-7.752z" style="fill:red;stroke-width:.26458332" transform="translate(232.281 -327.068)"/><path d="m-219.158 343.393 8.36-4.816-8.36-4.815z" style="fill:#fff;stroke-width:.26458332" transform="translate(232.281 -327.068)"/><path style="stroke-width:.26458332" d="M-185.37 347.811a3.323 3.323 0 0 1-1.35-2.01 13.776 13.776 0 0 1-.397-3.599v-2.037c-.027-1.244.132-2.46.476-3.651a3.69 3.69 0 0 1 1.429-2.011 4.808 4.808 0 0 1 2.566-.635c1.032 0 1.879.211 2.514.635.661.503 1.164 1.19 1.376 2.01a12.11 12.11 0 0 1 .423 3.652v2.037a12.942 12.942 0 0 1-.423 3.625 3.565 3.565 0 0 1-1.376 2.01c-.635.424-1.508.636-2.593.636-1.111-.027-2.01-.238-2.646-.662zm3.571-2.222c.185-.45.265-1.217.265-2.25v-4.365a7.013 7.013 0 0 0-.265-2.222.96.96 0 0 0-.926-.715.93.93 0 0 0-.9.715 7.014 7.014 0 0 0-.264 2.222v4.392c0 1.032.08 1.8.264 2.25a.89.89 0 0 0 .926.687.93.93 0 0 0 .9-.714zm45.27-3.36v.714c0 .688.027 1.35.08 2.037.026.344.132.688.344.98.211.21.502.343.793.317.397.026.794-.185.98-.556.184-.37.264-.979.29-1.852l2.726.185c.026.159.026.344.026.503 0 1.296-.344 2.275-1.058 2.91-.715.635-1.72.953-3.017.953-1.56 0-2.645-.503-3.28-1.482-.635-.979-.953-2.487-.953-4.55v-2.461c0-2.117.318-3.651.98-4.63.66-.98 1.772-1.456 3.333-1.456 1.085 0 1.931.212 2.513.609a3.326 3.326 0 0 1 1.244 1.852c.265 1.138.397 2.328.344 3.492v2.408zm.397-5.927c-.185.291-.317.635-.317.979-.053.688-.08 1.376-.08 2.064v1.005h2.329v-1.005c0-.688-.027-1.376-.106-2.064a1.903 1.903 0 0 0-.344-.979.89.89 0 0 0-.741-.291.86.86 0 0 0-.74.291zm-56.965 5.662-3.598-13.044h3.149l1.27 5.9c.317 1.456.555 2.699.714 3.73h.106c.106-.74.344-1.957.714-3.703l1.323-5.927h3.149l-3.652 13.044v6.27h-3.148v-6.27zm25.003-7.832v14.103h-2.487l-.264-1.72h-.08c-.661 1.296-1.693 1.958-3.042 1.958-.926 0-1.614-.318-2.064-.926-.45-.609-.662-1.561-.662-2.884v-10.53h3.175v10.345c-.026.45.053.926.212 1.349a.696.696 0 0 0 .688.397c.291 0 .556-.106.794-.265.238-.158.45-.37.555-.635v-11.192zm16.272 0v14.103h-2.487l-.264-1.72h-.08c-.661 1.296-1.693 1.958-3.042 1.958-.927 0-1.614-.318-2.064-.926-.45-.609-.662-1.561-.662-2.884v-10.53h3.175v10.345c-.026.45.053.926.212 1.349a.696.696 0 0 0 .688.397c.29 0 .556-.106.794-.265.238-.158.45-.37.555-.635v-11.192z" class="wordmark" transform="translate(232.281 -327.068)"/><path style="stroke-width:.26458332" d="M-159.468 331.487h-3.149v16.748h-3.095v-16.748h-3.149v-2.567h9.393zm18.15 4.894c-.185-.873-.502-1.534-.926-1.931a2.588 2.588 0 0 0-1.772-.609c-.583 0-1.138.16-1.64.503-.504.318-.9.767-1.165 1.297h-.027v-7.435h-3.042v20.029h2.62l.317-1.323h.079c.238.476.635.873 1.111 1.137a3.518 3.518 0 0 0 1.64.424 2.558 2.558 0 0 0 2.382-1.482c.503-.979.767-2.54.767-4.63v-2.223a24.78 24.78 0 0 0-.344-3.757zm-2.91 5.742c0 .794-.027 1.614-.132 2.408-.027.45-.186.873-.424 1.243a.992.992 0 0 1-.794.37 1.31 1.31 0 0 1-.714-.185 1.528 1.528 0 0 1-.53-.555v-7.99c.107-.371.292-.689.557-.953.211-.238.529-.37.846-.37.291 0 .582.132.741.37.212.397.344.82.37 1.27.08.846.106 1.693.106 2.54z" class="wordmark" transform="translate(232.281 -327.068)"/></svg>',
      "friendlyName": "YouTubeTV",
      "className": "youtubeTVButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.amazon.firetv.youtube.tv",
          "androidName": "com.amazon.firetv.youtube.tv",
          "adbLaunchCommand": "adb shell am start -n com.amazon.firetv.youtube.tv/dev.cobalt.app.MainActivity",
      },
      "apple-tv": {
          "appName" : "YouTube TV",
      },
      "chromecast": {
          "appName" : "YouTube TV",
          "androidName": "com.google.android.youtube.tvunplugged",
          "adbLaunchCommand": "adb shell am start -n com.google.android.youtube.tvunplugged/com.google.android.apps.youtube.tvunplugged.activity.MainActivity",
      },
      "nvidia-shield": {
          "appName" : "YouTube TV",
          "androidName": "com.google.android.youtube.tvunplugged",
          "adbLaunchCommand": "adb shell am start -n com.google.android.youtube.tvunplugged/com.google.android.apps.youtube.tvunplugged.activity.MainActivity",
      },
      "xiaomi": {
          "appName" : "YouTube TV",
          "androidName": "com.google.android.youtube.tvunplugged",
          "adbLaunchCommand": "adb shell am start -n com.google.android.youtube.tvunplugged/com.google.android.apps.youtube.tvunplugged.activity.MainActivity",
      },
  },


  "zattoo": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1070.471 297.842" version="1.0" width="1070.471" height="297.842" xml:space="preserve"><path d="M952.434 107.047a725.25 725.25 0 0 0-45.482 1.376c-14.764 1.32-27.735 7.473-36.223 16.548 9.135 16.696 14.295 35.66 14.295 55.898 0 20.706-5.401 40.3-14.92 57.587 8.462 9.459 21.688 15.91 36.848 17.267a729.658 729.658 0 0 0 90.963-.094c24.225-2.207 43.406-17.464 46.201-37.161a370.551 370.551 0 0 0 0-72.79c-2.795-19.699-21.976-34.952-46.2-37.16a729.926 729.926 0 0 0-45.482-1.471zm-914.17 2.408v39.226h81.892l-86.615 66.47-1.032.752c-4.826 4.009-7.946 10.128-7.946 16.922 0 11.884 9.457 21.565 21.209 21.865H176.21l.5-39.225h-75.198l86.553-66.534c5.377-3.973 8.884-10.372 8.884-17.61 0-12.065-9.724-21.866-21.74-21.866H38.264zm215.053 0L179.464 254.69h51.331l11.761-24.649h77.951l12.481 24.65h51.144l-75.01-145.236h-55.805zm103.382 0v40.383h47.483V254.69h48.14V149.838h47.484v-40.383H356.7zm154.368 0v40.383h47.484V254.69h48.14V149.838h17.643c4.08-14.763 11.024-28.38 20.207-40.383H511.067zm441.273 35.347c9.263 0 18.528.31 27.777.97 8.788.887 15.521 6.556 16.578 13.482a219.14 219.14 0 0 1 0 45.575c-1.031 6.95-7.79 12.668-16.578 13.545a386.729 386.729 0 0 1-55.554 0c-8.776-.877-15.504-6.556-16.548-13.482a215.684 215.684 0 0 1 0-45.576c1.02-6.95 7.748-12.657 16.548-13.544 9.249-.66 18.513-.97 27.777-.97zm-671.152 6.35 21.427 43.105h-42.291l20.864-43.105z" style="fill:#000;fill-opacity:1;fill-rule:nonzero;stroke:none"/><path d="M708.686 233.534c-7.766-1.236-15.053-3.072-21.294-4.91-8.392-2.64-14.501-9.17-16.025-18.509-3.326-19.53-3.314-40.896-.445-60.98 1.765-9.446 7.299-16.3 15.881-19.169 19.075-7.046 68.146-16.638 106.125-13.324 10.456 1.056 18.906 8.57 20.73 19.554.841 4.85 1.838 10.384 1.934 15.989-1.08-6.722-5.714-8.727-11.513-9.412-36.322-3.156-82.476 6.135-100.22 12.93-3.852 1.692-7.116 4.26-8.089 9.854-2.437 14.248-2.088 43.754.985 55.554 3.288 10.154 10.419 12.004 11.93 12.423" style="fill:#fecc8a;fill-opacity:1;fill-rule:nonzero;stroke:none"/><path d="M632.955 180.789c0-60.883 53.416-110.23 119.316-110.23 65.889 0 119.318 49.347 119.318 110.23 0 60.872-53.43 110.219-119.318 110.219-65.9 0-119.316-49.347-119.316-110.22m156.168 58.676c-24.811 1.933-60.043-1.705-80.437-5.93-7.862-1.584-12.375-2.76-18.618-4.61-8.343-2.471-14.98-7.393-17.706-19.337-3.084-15.317-4.069-40.524-1.211-60.619 1.704-8.86 7.058-15.94 15.64-18.822 19.075-7.046 68.097-16.577 106.089-13.312 9.7.84 18.906 8.378 20.706 19.35.841 4.85 1.514 10.264 2.006 16 1.885 22.111 1.284 47.523-2.472 66.766-3.038 14.153-9.027 19.303-23.997 20.514" style="fill:#ff7f00;fill-opacity:1;fill-rule:evenodd;stroke:none"/><path d="m804.98 6.834 7.275 5.619-62.84 81.721-3.553 4.598-3.66-4.514-48.719-59.719 7.13-5.797 45.045 55.216" style="fill:#ff7f00;fill-opacity:1;fill-rule:nonzero;stroke:none"/></svg>',
      "friendlyName": "Zattoo",
      "appName": "com.zattoo.player.firetv",
      "className": "zattooButton",
      "androidName": "com.zattoo.player.firetv",
      "deviceFamily": ["amazon-fire"],},


  "zdf-mediathek": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="439" height="257" viewBox="0 0 439 257" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M266.7 165.2h28.6c22 0 27-15 27-37v-.3c0-21.8-5-37-26.8-37h-29v74.5zM127.7 0a128 128 0 0 1 112.6 67.2c.3.4.6.7.7 1l1.2 2.3 70 2a43 43 0 0 1 23.1 13.3 43 43 0 0 1 6.8 11.1c1 2.2 4 13.3 4.4 14 0-27.6 13.3-40.3 41-40.3h49.5v20h-45.5c-18.5 0-21 11-21 29.4h57.6V140h-57.6v45h-24.2v-37.4c-1.4 2-3.4 11.2-5.8 15.5a43 43 0 0 1-9.8 11.8c-8.2 6.5-18.2 10.4-32.8 10.4h-56.4a128 128 0 0 1-114.1 70.2A128 128 0 0 1 0 127.7 128 128 0 0 1 127.7 0h0 0z" fill="#ff8300"/><path d="M145 185.4v-29.7c0-62 74.7-21.5 74.7-49v-3c0-9.4-8.7-13-18-13H146v-20h66.3c22.7 0 32.2 15.2 32.2 35 0 20-13 31.2-31.2 33.7-21.5 3-43.5-7.2-43.5 19.6v6.6h71.8l.1 19.8H145h0 0z"/></svg>',
      "friendlyName": "ZDF Mediathek",
      "className": "zdfMediathekButton",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "appName": "com.zdf.android.mediathek",
          "androidName": "com.zdf.android.mediathek",
          "adbLaunchCommand": "adb shell am start -n com.zdf.android.mediathek/com.zdf.android.mediathek.ui.common.MainActivity",
      },
      "apple-tv": {
          "appName" : "ZDFmediathek",
      },
      "chromecast": {
          "appName": "com.zdf.android.mediathek",
          "androidName": "com.zdf.android.mediathek",
          "adbLaunchCommand": "adb shell am start -n com.zdf.android.mediathek/com.zdf.android.mediathek.ui.common.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.zdf.android.mediathek",
          "androidName": "com.zdf.android.mediathek",
          "adbLaunchCommand": "adb shell am start -n com.zdf.android.mediathek/com.zdf.android.mediathek.ui.common.MainActivity",
      },
      "xiaomi": {
          "appName": "com.zdf.android.mediathek",
          "androidName": "com.zdf.android.mediathek",
          "adbLaunchCommand": "adb shell am start -n com.zdf.android.mediathek/com.zdf.android.mediathek.ui.common.MainActivity",
      },
  },


  "ziggo-go": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="2500" height="870" viewBox="0 0 2500 870" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M804 731c10 10 15 23 15 36 0 16-7 29-15 37-15 15-36 31-63 42-23 10-48 15-74 15H194c-54 0-102-22-137-57S0 721 0 667V194C0 140 22 92 57 57S140 0 194 0h473c26 0 51 5 74 15 31 13 52 29 71 50 8 8 15 20 15 36 0 13-5 26-15 36s-23 15-36 15c-14 0-27-5-37-15-13-14-21-21-36-27-12-5-24-8-36-8H194c-25 0-48 11-65 27-16 17-26 39-26 65v473c0 25 10 48 26 65 17 16 40 26 65 26h473c13 0 25-2 36-7s20-11 29-20c10-9 23-15 36-15 14 0 27 6 36 15zm-138-61c-2-37-28-95-91-102H349l260-249c11-11 36-46 18-85-14-30-37-43-79-43H224c2 43 23 94 80 103h185L216 551c-11 11-30 44-15 77 13 30 35 42 75 42h390zm741-234v190c0 71-22 132-71 181-44 44-99 63-160 63-120 0-182-93-182-93 32-32 77-52 121-26 7 5 30 17 61 17 111 0 129-99 129-129-38 24-82 35-130 35h0c-63 0-117-20-163-59h-1c-45-43-68-96-68-158v-63c0-60 23-113 68-156 46-44 101-66 164-66h0c84 0 146 41 174 76 8 9 12 20 12 33 0 14-6 27-15 36-10 10-23 15-37 15s-27-6-36-15c-32-33-62-43-98-43-35 0-65 11-90 36-26 24-38 51-38 85v61c0 36 12 63 37 87 27 24 56 36 91 36s65-12 91-36c14-13 24-28 30-44 5-13 15-40 49-53 29-12 62-10 62-10zm484 10c-34 13-44 40-49 53-6 16-16 31-30 44-26 24-56 36-91 36-34 0-64-12-90-36s-37-51-38-87v-61c1-34 13-61 38-85 25-25 55-37 90-37 36 1 66 11 98 44 9 9 22 15 37 15 14 0 27-6 36-15 10-10 15-23 15-36s-4-24-11-33c-29-35-91-76-175-76h0c-63 0-118 22-164 66-45 43-68 96-68 156v63c1 62 24 115 68 158h1c46 39 101 59 163 59h0c49 0 92-11 130-35 0 30-18 129-129 129-31 0-53-12-61-17-44-26-88-6-121 26 0 0 62 93 182 93 61 0 117-19 161-63 49-49 70-110 70-181V436s-33-2-62 10zm609-51c0-61-23-114-68-157-46-44-101-66-164-66h0c-64 0-119 22-164 66-45 43-68 96-68 156-1 10-1 50 0 63 0 62 23 115 68 158h0c46 39 101 59 164 59h0c62 0 117-20 163-59h1c44-43 67-96 68-158v-62m-232 184c-35 0-65-12-91-36-25-24-37-51-37-87-1-14-1-46 0-61 0-34 12-61 37-85 25-25 55-36 91-36 35 0 65 11 90 36 25 24 37 51 38 85v62c-1 35-12 62-37 86-27 24-57 36-91 36M861 191c-54 0-103 45-103 93v386c54 0 103-45 103-93V191z" stroke="none" fill="#f48c00" fill-rule="nonzero"/></svg>',
      "friendlyName": "Ziggo Go",
      "className": "ziggoGoButton",
      "appName": "com.ziggo.tv",
      "androidName": "com.ziggo.tv",
      "adbLaunchCommand": "adb shell am start -n com.ziggo.tv/com.libertyglobal.horizonx.MainActivity",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"],},


  "function-app-switch": {
      "button": "<ha-icon icon=\"mdi:swap-horizontal\"></ha-icon>Switch Apps",
      "friendlyName": "Function: Switch Apps",
      "className": "functionAppSwitchButton",
      "adbLaunchCommand": "adb shell input keyevent KEYCODE_APP_SWITCH",
      "deviceFamily": ["amazon-fire", "apple-tv", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "adbLaunchCommand": "am start -n com.amazon.venezia/com.amazon.venezia.grid.AppsGridLauncherActivity",
      },
      "apple-tv": {
          "remoteCommand": '{"command": "home", "num_repeats": 2, "delay_secs": 0.2, "hold_secs": 0}',
      },
      "chromecast": {
          "adbLaunchCommand": "adb shell input keyevent 284",
      },
      "nvidia-shield": {
          "adbLaunchCommand": "adb shell input keyevent KEYCODE_APP_SWITCH",
      },
      "xiaomi": {
          "adbLaunchCommand": "adb shell input keyevent KEYCODE_APP_SWITCH",
      },
  },


  "function-check-for-os-update": {
      "button": 'System Update',
      "friendlyName": "Function: System Update",
      "className": "systemUpdateButton",
      "deviceFamily": [],
      "chromecast": {
          "adbLaunchCommand": "adb shell am start -n com.google.android.gms/com.google.android.gms.update.SystemUpdatePanoActivity",
      },
  },


  "function-control-center": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="700" height="900" viewBox="0 0 700 900" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#000" fill-rule="evenodd"><path d="M467.2 410.4H237.7A169 169 0 0 1 70 242.7 169 169 0 0 1 237.7 75h229.5A169 169 0 0 1 635 242.7a169 169 0 0 1-167.8 167.7h0zm0-300H237.7c-72.4 0-132.4 60-132.4 132.4S165.3 375 237.7 375h229.5c72.4 0 132.5-60 132.5-132.4s-60-132.4-132.5-132.4zm0 370.8H237.7A169 169 0 0 0 70 648.8a169 169 0 0 0 167.7 167.7h229.5A169 169 0 0 0 635 648.8a169 169 0 0 0-167.8-167.7zm0 282.5c-63.5 0-114.7-51.2-114.7-114.8S403.7 534 467.2 534c63.6 0 114.8 51.2 114.8 114.8s-51.2 114.8-114.8 114.8zM237.7 339.8a97 97 0 1 0 0-194.2 97 97 0 1 0 0 194.2z" stroke="none" fill="#000" fill-rule="nonzero"/></svg>',
      "friendlyName": "Function: Control Center",
      "className": "functionControlCenterButton",
      "remoteCommand": '{"command": "home_hold", "num_repeats": 1, "hold_secs": 0}',
      "deviceFamily": ["apple-tv"],
  },


  "function-find-my-remote": {
      "button": "<ha-icon icon=\"mdi:shield-search\"></ha-icon>&nbsp;Find Remote",
      "friendlyName": "Function: Find My Remote",
      "className": "functionFindRemoteButton",
      "appName": "com.nvidia.remotelocator",
      "androidName": "com.nvidia.remotelocator",
      "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -d -n com.nvidia.remotelocator/.ShieldRemoteLocatorActivity",
      "deviceFamily": ["nvidia-shield"],},


  "function-mute": {
      "button": "<ha-icon icon=\"mdi:volume-mute\"></ha-icon> Mute",
      "friendlyName": "Function: Mute",
      "className": "functionMuteButton",
      "adbLaunchCommand": "adb shell input keyevent 164",
      "deviceFamily": ["amazon-fire", "nvidia-shield", "xiaomi"], },


  "function-next": {
      "button": '<ha-icon icon=\"mdi:skip-next\"></ha-icon>',
      "friendlyName": "Function: Next",
      "className": "functionNextButton",
      "remoteCommand": '{"command": "next", "num_repeats": 1, "hold_secs": 0}',
      "deviceFamily": ["apple-tv"],
  },


  "function-previous": {
      "button": '<ha-icon icon=\"mdi:skip-previous\"></ha-icon>',
      "friendlyName": "Function: Previous",
      "className": "functionPreviousButton",
      "remoteCommand": '{"command": "previous", "num_repeats": 1, "hold_secs": 0}',
      "deviceFamily": ["apple-tv"],
  },

  "function-reboot": {
      "button": "<ha-icon icon=\"mdi:restart\"></ha-icon>Reboot",
      "friendlyName": "Function: Reboot",
      "className": "functionRebootButton",
      "adbLaunchCommand": "adb shell reboot",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"],},


  "function-search": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="1011" height="1011" viewBox="0 0 1011 1011" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><path d="M753.8 709.2L617 572.5c57.5-79 50.8-189.8-20.3-261-78.7-78.8-206.4-78.8-285.2 0-78.7 78.7-78.7 206.3 0 285 71.2 71 182 77.8 261 20.3l136.8 136.8c5 5 13 5 17.8 0l26.7-26.7c5-5 5-13 0-18M356 552c-54-54-54-142 0-196s142-54 196 0c54.2 54 54.2 142 0 196-54 54.2-142 54.2-196 0" stroke="none" fill-rule="nonzero"/><path fill="none" d="M-315.5 694.5h-5"/></svg>',
      "friendlyName": 'Function: Search',
      "className": "appleTvSearchButton",
      "appName": "Search",
      "deviceFamily": ["apple-tv"],
  },


  "function-settings": {
      "button": "<ha-icon icon=\"mdi:cog\"></ha-icon>Settings",
      "friendlyName": "Function: Settings",
      "className": "functionSettingsButton",
      "deviceFamily": ["amazon-fire", "chromecast", "nvidia-shield", "xiaomi"],
      "amazon-fire": {
          "adbLaunchCommand": "adb shell input keyevent SETTINGS",
      },
      "chromecast": {
          "appName": "com.android.tv.settings",
          "androidName": "com.android.tv.settings",
      },
      "nvidia-shield": {
          "appName": "com.android.tv.settings",
          "androidName": "com.android.tv.settings",
      },
      "xiaomi": {
          "appName": "com.android.tv.settings",
          "androidName": "com.android.tv.settings",
          "adbLaunchCommand": "adb shell am start -a android.settings.SETTINGS -d -n com.android.tv.settings/.MainSettings",
      },
  },


  "function-apple-settings": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" width="121" height="121" viewBox="0 0 121 121" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"><defs><linearGradient id="Jrk8" x1="-704.75%" x2="-704.75%" y1="-1192.22%" y2="-1195.33%"><stop offset="0%" stop-color="#b4b4b9"/></linearGradient><linearGradient id="ZgKC" x1="-455.40%" x2="-455.40%" y1="-768.24%" y2="-770.32%"><stop offset="0%" stop-color="#dcdce1"/><stop offset="100%" stop-color="#98989d"/></linearGradient></defs><g stroke="none"><path d="M8 60A52 52 0 0 1 60 8a52 52 0 0 1 52 52 52 52 0 0 1-52 52A52 52 0 0 1 8 60z" fill="#2e2e2f" fill-rule="nonzero"/><path d="M59 32h1.7l.8-4h.7l.3 4c.5 0 1 .1 1.5.2l1.2-4 .7.1-.2 4c.5.1 1 .2 1.5.4l1.6-3.7.6.2-.7 4c.5.2 1 .3 1.5.5l2-3.5.6.3-1 4c.5.2 1 .5 1.4.7l2.4-3.3.6.3-1.6 3.8 1.3 1 2.8-3 .5.4-2 3.6c.4.3.8.7 1.2 1l3-2.6.5.5-2.4 3.3 1 1 3.4-2.2.4.5-2.7 3 1 1.2 3.6-1.8.4.6-3 2.7c.3.4.5 1 .8 1.3l3.8-1.4.3.6-3.4 2.3.6 1.5 4-1 .2.6-3.5 1.8c.2.5.3 1 .5 1.5l4-.5.2.7-3.8 1.4.3 1.6h4l.1.7-4 1c0 .5.1 1 .1 1.6l4 .5v.7l-4 .5-.1 1.5 4 1-.1.7h-4l-.3 1.5L91 67v.6l-4-.4c-.1.5-.3 1-.4 1.5l3.6 1.8v.6l-4-1-.6 1.5 3.4 2.3-.3.6-4-1.3c-.2.4-.5 1-.7 1.3l3 2.6-.4.6L83 76c-.3.5-.6 1-1 1.3l2.8 3-.4.5-3.4-2.2c-.3.4-.7.8-1 1l2.4 3.3-.5.5-3.2-2.6-1.2 1 2 3.5-.5.4-2.8-3c-.4.3-1 .6-1.3 1l1.6 3.8-.6.3-2.5-3.2c-.4.3-1 .5-1.4.7l1.2 4-.6.3-2-3.5-1.5.5.7 4-.6.2-1.7-3.7-1.5.4.2 4-.7.1-1.2-4c-.5.1-1 .1-1.6.2l-.2 4h-.7l-.8-4H59l-.7 4H58l-.3-4c-.5 0-1-.1-1.6-.2l-1.2 4-.7-.1.2-4-1.5-.4-1.6 3.7-.6-.2.7-4c-.5-.2-1-.3-1.5-.5l-2 3.5-.6-.3 1-4c-.5-.2-1-.5-1.4-.7L44.4 88l-.6-.3 1.6-3.8c-.4-.3-1-.6-1.3-1l-2.8 3-.5-.4 2-3.6c-.4-.3-.8-.7-1.2-1l-3 2.6-.5-.5 2.4-3.3c-.3-.4-.7-.8-1-1L36 81l-.4-.5 2.8-3c-.4-.4-.7-.8-1-1.3L33.7 78l-.4-.6 3-2.6c-.3-.4-.5-1-.8-1.4l-3.8 1.4-.3-.6 3.4-2.3-.6-1.5-4 1-.2-.6 3.6-2c-.2-.5-.3-1-.5-1.5l-4 .5-.2-.7 3.8-1.4-.3-1.6h-4l-.1-.7 4-1c0-.5-.1-1-.1-1.6l-4-.5v-.7l4-.5c0-.5 0-1 .1-1.6l-4-1 .1-.7 4-.1.3-1.5-3.8-1.4.2-.6 4 .4c.1-.5.3-1 .4-1.5L30 49.3l.2-.6 4 1 .6-1.5-3.4-2.2.3-.6 3.8 1.3c.3-.5.5-1 .8-1.4l-3-2.6.4-.6 3.6 1.8c.3-.4.6-1 1-1.3l-2.8-3 .4-.5 3.4 2.2c.3-.4.7-.8 1-1.2l-2.4-3.3.5-.5 3 2.6c.4-.4.8-.7 1.2-1l-2-3.5.5-.4 2.8 3 1.3-1-1.6-3.7.6-.3 2.5 3.2c.4-.3 1-.5 1.4-.7l-1-4 .6-.3 2 3.5c.5-.2 1-.4 1.5-.5l-.7-4 .6-.2 1.7 3.7c.5-.1 1-.3 1.5-.4l-.2-4 .7-.1 1.2 4c.5-.1 1-.1 1.6-.2l.2-4h.7zm1 5.4c-12.4 0-22.5 10-22.5 22.5s10 22.5 22.5 22.5 22.5-10 22.5-22.5-10-22.5-22.5-22.5z" fill="url(#Jrk8)"/><path d="M58.5 18H61l1-6h1l.4 6 2.3.3 1.8-6 1 .2-.3 6.2 2.2.5 2.5-5.7 1 .3-1 6.2a18 18 0 0 1 2.1.8l3.2-5.5 1 .4-1.7 6c.7.3 1.4.7 2 1l3.8-5 1 .5-2.5 6c.7.4 1.3.8 2 1.3L88 21l.8.6-3.2 5.6 1.7 1.5 5-4 .7.7-3.8 5.2 1.5 1.6 5.4-3.5.6.8L92 34l1.3 1.8 5.8-3 .6.8-5 4.3 1 2 6.2-2.2.5 1-5.4 3.7c.3.7.6 1.3 1 2l6.4-1.5.3 1-5.8 3 .6 2 6.5-.7.2 1-6 2.3.4 2h6.6l.1 1-6.4 1.6c.1.8.1 1.5.1 2.3l6.5.8v1l-6.5.8v2l6.4 1.5-.1 1-6.6.1c-.1.7-.2 1.5-.4 2.2l6 2.3-.2 1-6.5-.7-.6 2 5.8 3-.3 1-6.3-1.4q-.4 1-1 2l5.4 3.6-.4 1-6-2c-.3.7-.7 1.3-1 2l5 4.2-.5.8-5.8-2.8-1.3 1.8 4.4 4.7-.6.8-5.4-3.5-1.5 1.7 3.8 5-.7.7-5-4-1.7 1.5 3 5.5-.8.6-4.4-4.5c-.6.4-1.2 1-2 1.3l2.5 5.7-1 .5-3.8-5c-.7.4-1.4.7-2 1l1.8 6-1 .4-3.2-5.3c-.7.3-1.4.6-2 .8l1 6-1 .3-2.5-5.6-2.3.6.3 6-1 .2-1.8-5.7-2.4.3-.4 6h-1l-1-6h-2.6l-1 6h-1l-.4-6c-.8-.1-1.6-.1-2.4-.2l-1.7 5.7-1-.2.3-6c-.8-.2-1.6-.3-2.4-.5l-2.4 5.4-1-.3 1-5.8c-.8-.2-1.5-.5-2.3-.8l-3 5-1-.4 1.6-5.6a15 15 0 0 1-2.2-1.1l-3.5 4.6-1-.5 2.2-5.3-2-1.3-4 4.2-.8-.6 2.8-5-2-1.6-4.4 3.6-.7-.7 3.3-4.6-1.8-1.8-4.7 3-.7-.8 3.8-4.2-1.5-2-5 2.5-.6-.8 4.2-3.7c-.5-.7-1-1.4-1.3-2.2l-5.3 2-.4-1 4.6-3-1-2.4-5.4 1.2-.3-1 5-2.5-.8-2.5-5.5.6-.2-1 5.2-2c-.2-.8-.3-1.7-.5-2.5h-5.6l-.1-1 5.4-1.4c-.1-.8-.1-1.7-.2-2.5l-5.5-.7v-1l5.5-.7c0-1 .1-1.7.1-2.6L11.5 55l.1-1 5.6-.1.4-2.5-5.2-2 .2-1 5.5.6.7-2.5-5-2.5.4-1 5.4 1.2 1-2.3-4.7-3 .4-1 5.3 2c.4-.8.8-1.5 1.3-2.2L18.6 34l.5-.8 5 2.5c.5-.7 1-1.4 1.5-2l-4-4.2.6-.8 4.8 3L29 30l-3.4-4.6.7-.7 4.5 3.6 2-1.6-3-5 .8-.6 4 4.2 2-1.4-2.3-5.4 1-.5 3.6 4.6c.7-.4 1.5-.7 2.2-1L39.3 16l1-.4 3 5c.8-.3 1.5-.6 2.3-.8l-1-6 1-.3L48 19c.8-.2 1.5-.4 2.3-.5l-.3-6 1-.2 1.8 5.7 2.4-.3.4-6 1-.1zM34 86.8c2.7 2.6 7 1.5 9-1.8L54 66a12 12 0 0 0-.2-12l-11-18.8c-2-3.2-6.3-4.3-9-1.6-7.2 7-11.2 16.7-11 26.7a37 37 0 0 0 11.6 26.5zm23-35c2.2 3.7 6.3 6 10.6 6h21.8c3.8 0 7-3.2 6-7a37 37 0 0 0-17.6-23.2c-8.8-5-19.3-6.2-29-3.3-3.6 1-5 5.4-3 8.7zm10.7 10c-4.3 0-8.3 2.3-10.5 6L46.5 87c-1 1.5-1.2 3.4-.5 5 .6 1.7 2 3 3.7 3.5a37 37 0 0 0 28.6-3.7 37 37 0 0 0 17.3-23.1c1-3.6-2.2-7-6-7zm-8.3-4a2 2 0 1 0 0 4 2 2 0 1 0 0-4z" fill="url(#ZgKC)"/></g></svg>',
      "friendlyName": "Function: Settings",
      "className": "functionAppleSettingsButton",
      "appName": "Settings",
      "deviceFamily": ["apple-tv"],
  },


  "function-skip-backward": {
      "button": '<ha-icon icon=\"mdi:skip-backward\"></ha-icon>',
      "friendlyName": "Function: Skip Backward",
      "className": "functionSkipBackwardButton",
      "remoteCommand": '{"command": "skip_backward", "num_repeats": 1, "hold_secs": 0}',
      "deviceFamily": ["apple-tv"],
  },

  "function-skip-forward": {
      "button": '<ha-icon icon=\"mdi:skip-forward\"></ha-icon>',
      "friendlyName": "Function: Skip Forward",
      "className": "functionSkipBForwardButton",
      "remoteCommand": '{"command": "skip_forward", "num_repeats": 1, "hold_secs": 0}',
      "deviceFamily": ["apple-tv"],
  },


};
const appmap = new Map(Object.entries(fastappchoices));

const appButtonMax = { "AF4": 6, "AF5": 6, "AF6": 6, "AR1": 10, "AR2": 8, "AR3": 8, "CC1": 6, "NS2": 6, "XM1": 10, "XM2": 10, "AL1": appmap.size, "AL2": appmap.size,};



// App name translations languageCode{ englishWord:translation }
const rosettaStone = {
  "da": {
      "App Launch Button": "App-knap",
      "Apple Computers": "Apple Computere",
      "Apple Music": "Apple Musik",
      "Apple Photos": "Apple Fotos",
      "Associated": "Tilhørende",
      "bottom": "bund",
      "Compatibility Mode": "Kompatibilitetstilstand",
      "Computers": "Computere",
      "Device Family": "Enhedsfamilie",
      "Device Model": "Enhedsmodel",
      "Device Name Text Color": "Tekstfarve på enhedsnavn",
      "Function: Control Center": "Funktion: Kontrolcenter",
      "Function: Find My Remote": "Funktion: Find min fjernbetjening",
      "Function: Mute": "Funktion: Slå lyden fra",
      "Function: Next": "Funktion: Næste",
      "Function: Previous": "Funktion: Tidligere",
      "Function: Reboot": "Funktion: Genstart",
      "Function: Search": "Funktion: Søg",
      "Function: Settings": "Funktion: Indstillinger",
      "Function: Skip Backward": "Funktion: Spring tilbage",
      "Function: Skip Forward": "Funktion: Spring fremad",
      "Function: Switch Apps": "Funktion: Skift apps",
      "hidden": "skjult",
      "Music": "Musik",
      "Name Position": "Position på navn",
      "Photos": "Fotos",
      "Remote Style": "Fjernbetjeningsstil",
      "Scale": "Størrelse",
      "Settings": "Indstillinger",
      "Search": "Søg",
      "Visible Device Name": "Synligt enhedsnavn",
  },
  "nl": {
      "App Launch Button": "Knop Voor Het Starten van apps",
      "Apple Music": "Apple Muziek",
      "Apple Photos": "Apple Foto's",
      "Associated": "Aangesloten",
      "bottom": "onderkant",
      "Compatibility Mode": "Compatibiliteitsmodus",
      "Device Family": "Apparaatfamilie",
      "Device Model": "Apparaat Model",
      "Device Name Text Color": "Apparaatnaam Tekstkleur",
      "Function: Control Center": "Functie: Controlecentrum",
      "Function: Find My Remote": "Functie: Vind Mijn afstandsbediening",
      "Function: Mute": "Functie: Dempen",
      "Function: Next": "Functie: Volgende",
      "Function: Previous": "Functie: Vorige",
      "Function: Reboot": "Functie: opnieuw opstarten",
      "Function: Search": "Functie: Zoeken",
      "Function: Settings": "Functie: Instellingen",
      "Function: Skip Backward": "Functie: Achterwaarts springen",
      "Function: Skip Forward": "Functie: Vooruitspringen",
      "Function: Switch Apps": "Functie: Schakel Apps",
      "hidden": "verborgen",
      "Music": "Muziek",
      "Name Position": "Positie van Naam",
      "Photos": "Foto's",
      "Remote Style": "Afstandsbedieningstijl",
      "Scale": "Meten",
      "Settings": "Instellingen",
      "Search": "Zoek",
      "top": "bovenkant",
      "Visible Device Name": "Zichtbare apparaatnaam",
  },
  "pt": {
      "App Launch Button": "Botão de Inicialização Da Aplicação",
      "Associated": "Associada",
      "bottom": "fundo",
      "Compatibility Mode": "Modo de compatibilidade",
      "Device Family": "Família de Dispositivos",
      "Device Model": "Modelo do Dispositivo",
      "Device Name Text Color": "Cor do Texto do Nome do dispositivo",
      "Function: Control Center": "Função: Centro de Controlo",
      "Function: Find My Remote": "Função: Encontrar Controlo Remoto",
      "Function: Mute": "Função: Mudo",
      "Function: Next": "Função: Próximo",
      "Function: Previous": "Função: Anterior",
      "Function: Reboot": "Função: Reiniciar",
      "Function: Search": "Função: Pesquisa",
      "Function: Settings": "Função: Configurações",
      "Function: Skip Backward": "Função: Saltar Para trás",
      "Function: Skip Forward": "Função: Saltar par aa Frente",
      "Function: Switch Apps": "Função: Alternar Aplicativos",
      "hidden": "escondido",
      "Name Position": "Posição do Nome",
      "Remote Style": "Estilo Controlo Remoto",
      "Scale": "Escala",
      "top": "topo",
      "Visible Device Name": "Nome do Dispositivo Visível",
  },
  "pt-BR": {
      "App Launch Button": "Botão de Inicialização Do Aplicativo",
      "Associated": "Associada",
      "bottom": "fundo",
      "Compatibility Mode": "Modo de compatibilidade",
      "Device Family": "Família de Dispositivos",
      "Device Model": "Modelo do Dispositivo",
      "Device Name Text Color": "Cor do Texto do Nome do dispositivo",
      "Function: Control Center": "Função: Centro de Controle",
      "Function: Find My Remote": "Função: Encontre Meu Controle Remoto",
      "Function: Mute": "Função: Mudo",
      "Function: Next": "Função: Próximo",
      "Function: Previous": "Função: Anterior",
      "Function: Reboot": "Função: Reiniciar",
      "Function: Search": "Função: Pesquisa",
      "Function: Settings": "Função: Configurações",
      "Function: Skip Backward": "Função: Pular Para trás",
      "Function: Skip Forward": "Função: Pular Adiante",
      "Function: Switch Apps": "Função: Alternar Aplicativos",
      "hidden": "escondido",
      "Name Position": "Posição do Nome",
      "Remote Style": "Estilo Remoto",
      "Scale": "Escala",
      "top": "topo",
      "Visible Device Name": "Nome do Dispositivo Visível",
  },
};
const translationmap = new Map(Object.entries(rosettaStone));


function deviceAttributeQuery(deviceAttribute, configvar){
  var deviceTypeRef = configvar.device_type;
  if(configvar[deviceAttribute+'_override']) {
    if(configvar[deviceAttribute+'_override'] != 'none') {
        return configvar[deviceAttribute+'_override'];
    }
  }
  var attributeValue = '';
  var deviceSearch = function(deviceName, jsonData) {
    for (var key in jsonData) {
      if(typeof(jsonData[key]) === 'object') {
        if(key == deviceName) {
          attributeValue = String(jsonData[key][deviceAttribute]);
        }
        else {
          deviceSearch(deviceName, jsonData[key]);
        }
      } 
    }
    return attributeValue;
  }
  return String(deviceSearch(deviceTypeRef, devices));
}


function truncate(str, length) {
  return str.length > length ? str.substr(0, length) : str;
}

function handlehdmi(config, inputs = 0) {
  appmap.delete('hdmi_1');
  appmap.delete('hdmi_2');
  appmap.delete('hdmi_3');
  appmap.delete('hdmi_4');
  if( inputs == 1) {
    if( config.hdmi_1 ) {
      const inputname = truncate(config.hdmi_1, 8);
      appmap.set("hdmi_1", {"button": truncate(inputname, 8), "friendlyName": "HDMI - "+inputname, "androidName": "", "adbLaunchCommand": "adb shell am start -n com.amazon.tv.inputpreference.service/com.amazon.tv.inputpreference.player.InputChooserActivity"});
    }
  }
  if( inputs == 4 ) {
    if( config.hdmi_1 ) {
      const inputname = truncate(config.hdmi_1, 8);
      appmap.set("hdmi_1", {"button": truncate(inputname, 8), "friendlyName": "HDMI 1 - "+inputname, "androidName": "", "adbLaunchCommand": "HDMI1"});
    }
    if( config.hdmi_2 ) {
      const inputname = config.hdmi_2;
      appmap.set("hdmi_2", {"button": truncate(inputname, 8), "friendlyName": "HDMI 2 - "+inputname, "androidName": "", "adbLaunchCommand": "HDMI2"});
    }
    if( config.hdmi_3 ) {
      const inputname = config.hdmi_3;
      appmap.set("hdmi_3", {"button": truncate(inputname, 8), "friendlyName": "HDMI 3 - "+inputname, "androidName": "", "adbLaunchCommand": "HDMI3"});
    }
    if( config.hdmi_4 ) {
      const inputname = config.hdmi_4;
      appmap.set("hdmi_4", {"button": truncate(inputname, 8), "friendlyName": "HDMI 4 - "+inputname, "androidName": "", "adbLaunchCommand": "HDMI4"});
    }
  }
}



class FiremoteCard extends LitElement {

  static getConfigElement() {
    // Create and return an editor element
    return document.createElement("firemote-card-editor");
  }


  static get properties() {
    return {
      hass: {},
      _config: {},
    };
  }

  static getStubConfig(e) {
    // Returns a minimal configuration that will result in a working card
    var androidTVEntities = Object.keys(e.entities).filter(
        (eid) => e.entities[eid].platform === 'androidtv'
    );
    var appleTVEntities = Object.keys(e.entities).filter(
        (eid) => e.entities[eid].platform === 'apple_tv'
    );
    if (androidTVEntities.length > 0) {
        return { 'entity': androidTVEntities[0],
                 'device_family': 'amazon-fire',
                 'device_type': 'fire_tv_4_series',
                 'compatibility_mode': 'default',
               };
    }
    else if (appleTVEntities.length > 0) {
        return { 'entity': appleTVEntities[0],
                 'device_family': 'apple-tv',
                 'device_type': 'appletv-4k-gen2',
                 'compatibility_mode': 'default',
               };
    }
    else {
        return { 'entity': '',
                 'device_family': 'amazon-fire',
                 'device_type': 'fire_tv_4_series',
                 'compatibility_mode': 'default',
               };
    }
  }

  setConfig(config) {
    if (!config.entity) {
     throw new Error('You need to define an Apple TV, Fire TV, NVIDIA Shield, Xiaomi Mi, or other Android Debug Bridge entity');
    }
    this._config = config;
  }

  static styles = css`

          ha-card {
            background: rgba(30,30,30,0);
            display: grid;
            justify-content: center;
            padding: 0;
            margin: auto;
            box-shadow: none;
            border: 0;
            outline: 0;
            isolation: isolate;
          }

          .hidden {
            display: none !important;
          }

          .shield-remote-body {
            background: linear-gradient(90deg, rgba(22,21,21,1) 0%, rgba(37,37,37,1) 10%, rgba(37,37,37,1) 90%, rgba(22,21,21,1) 100%); 
            border: solid #252525 calc(var(--sz) * 0.14rem);
            padding: calc(var(--sz) * 1.428rem) calc(var(--sz) * 0.714rem) calc(var(--sz) * 2.143rem) calc(var(--sz) * 0.714rem);
            display: grid;
            justify-items: center;
            align-content: flex-start;
            grid-column-gap: calc(var(--sz) * 1.2rem);
            grid-row-gap: calc(var(--sz) * 0.5rem);
            grid-template-columns: 1fr 1fr;
            width: calc(var(--sz) * 8.286rem);
            min-height: calc(var(--sz) * 45rem);
          }

          .shield-remote-body.ns1-body {
            background: linear-gradient(90deg, rgb(28 28 28) 0%, rgb(37, 37, 37) 8%, rgb(40 40 40) 50%, rgb(37, 37, 37) 92%, rgb(28, 28, 28) 100%);
            border: solid #1c1c1c calc(var(--sz) * 0.14rem);
            border-radius: calc(var(--sz) * 1.2rem);
          }

          .chromecast-remote-body {
            background: #ebebea;
            border-radius: calc(var(--sz) * 6rem);
            border: solid #cfcfcf calc(var(--sz) * 0.1rem);
            width: calc(var(--sz) * 11.287rem);
            padding: calc(var(--sz) * 0.35rem);
            padding-bottom: calc(var(--sz) * 4rem);
            display: grid;
            justify-items: center;
            align-content: flex-start;
            grid-column-gap: calc(var(--sz) * 1.2rem);
            grid-row-gap: calc(var(--sz) * 0.6rem);
            grid-template-columns: 1fr 1fr;
            min-height: calc(var(--sz) * 37rem);
          }

          .apple-remote-body {
            background: #b5b5b5;
            background: linear-gradient(0deg, rgba(147,148,150,1) 0%, rgba(207,211,213,1) 100%);
            border: solid #d1d1d1 calc(var(--sz) * 0.05rem);
            border-radius: calc(var(--sz) * 1.75rem);
            display: grid;
            justify-items: center;
            align-content: flex-start;
            grid-column-gap: calc(var(--sz) * 1rem);
            grid-row-gap: calc(var(--sz) * 0.5rem);
            grid-template-columns: 1fr 1fr;
            width: calc(var(--sz) * 13rem);
            min-height: calc(var(--sz) * 51rem);
            padding-bottom: calc(var(--sz) * 1.5rem);
          }

          .apple-remote-body.AR1 {
            padding-top: calc(var(--sz) * 4.75rem);
            min-height: calc(var(--sz) * 47rem);
            grid-column-gap: calc(var(--sz) * 0.25rem);
            grid-row-gap: calc(var(--sz) * 0.75rem);
            font-size: calc(var(--sz) * 1rem);
          }

          .apple-remote-body.AR2 {
            background: linear-gradient(30deg, rgb(0, 0, 0) 0%, rgb(41, 41, 41) 70%);
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
            grid-row-gap: 0;
            border: solid #2d2d2d calc(var(--sz) * 0.01rem);
            min-height: calc(var(--sz) * 41rem);
            overflow: hidden;
          }

          .AR2TopSection, .AR2BottomSection {
            display: grid;
            justify-items: center;
            align-content: flex-start;
            grid-column-gap: calc(var(--sz) * 1.5rem);
            grid-row-gap: calc(var(--sz) * 0.5rem);
            grid-template-columns: 1fr 1fr;
            box-sizing: border-box;
          }

          .AR2TopSection {
            background: linear-gradient(0deg, rgba(46,46,46,1) 0%, rgba(59,59,59,1) 100%);
            height: 100%;
            width: 100%;
            padding-bottom: calc(var(--sz) * 0.25rem);
          }

          .AR2BottomSection {
            padding-top: calc(var(--sz) * 0.5rem);
          }

          .apple-remote-body.AR2 > div > button:nth-of-type(odd), .apple-remote-body.AR3 > button:nth-of-type(odd) {
            justify-self: self-end;
          }

          .apple-remote-body.AR2 > div > button:nth-of-type(even), .apple-remote-body.AR3 > button:nth-of-type(even) {
            justify-self: self-start;
          }

          .remote-body {
            background: linear-gradient(90deg, rgba(27,27,27,1) 0%, rgba(37,37,37,1) 8%, rgba(55,55,55,1) 50%,
                                               rgba(37,37,37,1) 92%, rgba(27,27,27,1) 100%);
            border: solid #252525 calc(var(--sz) * 0.14rem);
            border-radius: calc(var(--sz) * 8rem) calc(var(--sz) * 8rem) calc(var(--sz) * 8rem) calc(var(--sz) * 8rem) / calc(var(--sz) * 2.5rem) calc(var(--sz) * 2.5rem) calc(var(--sz) * 2.5rem) calc(var(--sz) * 2.5rem);
            padding: calc(var(--sz) * 1.428rem) calc(var(--sz) * 0.714rem) calc(var(--sz) * 2.143rem) calc(var(--sz) * 0.714rem);
            display: grid;
            justify-items: center;
            grid-column-gap: calc(var(--sz) * 0.14rem);
            grid-row-gap: calc(var(--sz) * 0.5rem);
            grid-template-columns: 1fr 1fr 1fr;
            width: calc(var(--sz) * 12.286rem);
          }

          .remote-body.AF6 {
            border-radius: calc(var(--sz) * 2.8rem);
          }

          .XM2 {
            min-height: calc(var(--sz) * 53rem);
            grid-template-rows: repeat(7, auto) 1fr;
            border-radius: calc(var(--sz) * 2rem);
          }

          .AL1, .AL2 {
            display: block;
            width: unset;
            border-radius: calc(var(--sz) * 0.5rem);
            padding: calc(var(--sz) * 1.4rem) calc(var(--sz) * 0.714rem);
          }

          .two-col-span {
            grid-column-start: 1;
            grid-column-end: 3;
            width: 100%;
            display: grid;
            justify-content: center;
            grid-row-gap: calc(var(--sz) * 0.143rem);
            align-content: center;
          }

          .three-col-span {
            grid-column-start: 1;
            grid-column-end: 4;
            width: 100%;
            display: grid;
            grid-column-gap: calc(var(--sz) * 0.143rem);
            grid-template-columns: 50% 50%;
            align-content: center;
          }

          .apple-tv-top {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            width: calc(var(--sz) * 11.286rem);
            justify-items: center;
            align-items: center;
            justify-content: center;
            align-content: center;
            padding-top: calc(var(--sz) * 0.85rem);
          }

          .remote-body #channel-up-button, .remote-body #channel-down-button {
            --mdc-icon-size: 38px;
          }

          .nsappsgrid {
            display: grid;
            grid-row-gap: calc(var(--sz) * 0.6rem);
          }

          .afappsgrid {
            display: grid;
            margin-top: calc(var(--sz) * 0.57rem);
            row-gap: calc(var(--sz) * 0.9rem);
            justify-items: center;
            justify-content: space-evenly;
          }

          .XM2 .afappsgrid {
            margin-bottom: calc(var(--sz) * 0.57rem);
          }

          .appLauncherAppsContainer {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            align-content: center;
            align-items: center;
            justify-content: center;
            gap: calc(var(--sz) * 0.9rem);
          }

          .ns1-wings {
            grid-column-start: 1;
            grid-column-end: 3;
            width: 100%;
            height: calc(var(--sz) * 25rem);
            margin-top: calc(var(--sz) * -1rem);
            display: grid;
            grid-template-columns: 1fr 27% 1fr;
          }

          #ns1spine {
            display: grid;
            padding: calc(var(--sz) * 4rem) 0;
          }

          #ns1spine button {
            all: unset;
            background: transparent;
          }

          #ns1spine button:active {
            background: #363636;
          }

          #wingL {
            background: rgb(28 28 28);
            -webkit-clip-path: polygon(100% 15%, 100% 85%, 0 100%, 0 0);
            clip-path: polygon(100% 15%, 100% 85%, 0 100%, 0 0);
            margin-left: calc(var(--sz) *-.714rem);
            border-right: solid #121212 calc(var(--sz) * .15rem);
          }

          #wingR {
            background: rgb(28 28 28);
            -webkit-clip-path: polygon(100% 0, 100% 100%, 0 85%, 0 15%);
            clip-path: polygon(100% 0, 100% 100%, 0 85%, 0 15%);
            margin-right: calc(var(--sz) *-.714rem);
            border-left: solid #121212 calc(var(--sz) * .15rem);
          }

          .ALControlsContainer {
            display: flex;
            gap: calc(var(--sz) * .25rem);
            place-items: center;
            padding-top: calc(var(--sz) * 2rem);
            margin-top: calc(var(--sz) * 2rem);
            border-top: groove rgb(0 0 0 / 42%) calc(var(--sz) * 0.2rem);
            justify-content: space-evenly;
            flex-wrap: wrap;
            flex-direction: row;
            width: 100%;
          }

          .ALControlsContainer > div {
            display: grid;
            justify-items: center;
            justify-content: center;
          }

          .left-pocket-controls {
            display: flex;
            column-gap: calc(var(--sz) * 2rem);
            row-gap: calc(var(--sz) * 0.5rem);
            flex-wrap: wrap;
            justify-content: center;
          }

          .ALControlsContainer .row {
            display: flex;
            align-items: center;
            gap: calc(var(--sz) * 0.5rem);
            padding: calc(var(--sz) * 0.75rem);
            background: rgb(255 255 255 / 6%);
            border: inset #000 calc(var(--sz) * 0.2rem);
          }

          .right-pocket-controls > .row {
            column-gap: calc(var(--sz) * 0.5rem);
            line-height: calc(var(--sz) * .4rem);
          }

          .remote-button {
            height: calc(var(--sz) * 3.572rem);
            width: calc(var(--sz) * 3.572rem);
            border: solid black calc(var(--sz) * 0.0714rem);
            border-radius: 100%;
            display: grid;
            justify-content: center;
            align-content: center;
            color: rgb(198 198 198);
            background: rgb(33 33 33);
            box-shadow: rgb(0 0 0 / 13%) 0 calc(var(--sz) * 0.214rem) calc(var(--sz) * 0.143rem 0);
            cursor: pointer;
            line-height: normal;
            user-select: none;
            padding: calc(var(--sz) * 0.2857rem);
          }

          #power-button {
            height: calc(var(--sz) * 2.8rem);
            width: calc(var(--sz) * 2.8rem);
            margin-bottom: calc(var(--sz) * -0.643rem);
          }

          .shield-remote-body .remote-button {
            height: calc(var(--sz) * 3rem);
            width: calc(var(--sz) * 3rem);
          }

          .apple-remote-body .remote-button {
            height: calc(var(--sz) * 4.75rem);
            width: calc(var(--sz) * 4.75rem);
          }

          .apple-remote-body.AR2 .remote-button {
            height: calc(var(--sz) * 4.5rem);
            width: calc(var(--sz) * 4.5rem);
          }

          .apple-remote-body.AR1 #back-button.remote-button, .apple-remote-body.AR2 #back-button.remote-button {
            font-size: calc(var(--sz) * 1rem);
            font-weight: 600;
          }

          .apple-remote-body.AR2 #search-button.remote-button, .apple-remote-body.AR3 #back-button.remote-button {
            background: linear-gradient(rgb(0, 0, 0) 0%, rgb(48, 48, 48) 100%);
            outline: solid #2b2b2b calc(var(--sz) * 0.01rem);
          }


          .chromecast-remote-body .remote-button, .chromecast-remote-body #keyboard-button {
            background: #fff;
            border: solid #bfbfbf calc(var(--sz) * 0.02em);
            height: calc(var(--sz) * 4.2rem);
            width: calc(var(--sz) * 4.2rem);
            box-shadow: rgb(0 0 0 / 5%) 0 calc(var(--sz) * 0.214rem) calc(var(--sz) * 0.1428rem) 0;
          }

          .chromecast-remote-body .srcButton {
            border: solid #bfbfbf calc(var(--sz) * 0.02em);
            height: calc(var(--sz) * 4.2rem);
            width: calc(var(--sz) * 4.2rem);
            border-radius: 100%;
          }

          .chromecast-remote-body #keyboard-button {
            background: #484848;
          }

          .chromecast-remote-body #keyboard-button > ha-icon {
            color: rgb(235, 235, 234);
          }

          .apple-remote-body .srcButton {
            border: solid #bfbfbf calc(var(--sz) * 0.02em);
            height: calc(var(--sz) * 4.75rem);
            width: calc(var(--sz) * 4.75rem);
            border-radius: 100%;
          }

          .shield-remote-body #power-button, .XM2 #power-button{
            height: calc(var(--sz) * 3rem);
            width: calc(var(--sz) * 3rem);
            margin-bottom: unset;
          }

          .XM2 #power-button, .XM2 #keyboard-button, .AL2 #power-button, .AL2 #keyboard-button {
            height: calc(var(--sz) * 3.572rem);
            width: calc(var(--sz) * 3.572rem);
          }

          .AL2 #power-button {
            margin-bottom: unset;
          }

          .right {
            display: flex;
            width: 100%;
            justify-content: flex-end;
          }

          .apple-remote-body #power-button {
            background: none;
            border: gray 0.01rem solid;
            transform: scale(0.75);
            margin: 0;
          }

          .shield-remote-body #power-button > ha-icon {
            color: #851313;
          }

          .apple-remote-body #power-button > ha-icon {
            color: rgb(33, 33, 33);
          }

          .XM2 #power-button > ha-icon {
            color: #835437;
          }

          #headset-button {
            height: calc(var(--sz) * 2.8rem);
            width: calc(var(--sz) * 2.8rem);
            margin-bottom: calc(var(--sz) * -0.643rem);
          }

          .shield-remote-body #home-button {
            --mdc-icon-size: 17px;
          }

          .shield-remote-body.ns1-body #home-button {
            --mdc-icon-size: 23px;
          }

          .apple-remote-body #back-button {
            --mdc-icon-size: 36px;
          }

          .shield-remote-body #back-button {
            --mdc-icon-size: 41px;
          }

          .notch {
            background: #181818;
            height: calc(var(--sz) * 1rem);
            width: calc(var(--sz) * 0.4rem);
            margin-top: calc(var(--sz) * -0.5rem);
            border-radius: calc(var(--sz) * 0.2rem);
          }

          .apple-remote-body .notch {
            margin: 0;
            width: calc(var(--sz) * 1rem);
            height: calc(var(--sz) * 0.4rem);
          }

          .chromecast-remote-body .notch {
            height: calc(var(--sz) * 0.8rem);
            width: calc(var(--sz) * 0.3rem);
            rotate: 90deg;
            margin: 0;
          }

          .shieldNotch {
            grid-column: 1 / 3;
            background: rgb(24, 24, 24);
            height: calc(var(--sz) * 0.3rem);
            width: calc(var(--sz) * 0.75rem);
            margin-top: calc(var(--sz) * -0.5rem);
            border-radius: calc(var(--sz) * 0.2rem);
          }

          .notchtall {
            margin-bottom: calc(var(--sz) * 1.65rem);
          }

          .ns1-body .shieldNotch {
            height: calc(var(--sz) * 0.75rem);
            width: calc(var(--sz) * 2.2rem);
            border: solid #282828 calc(var(--sz) * 0.12rem);
            border-radius: calc(var(--sz) * 0.5rem);
          }

          #keyboard-button {
            height: calc(var(--sz) * 3rem);
            width: calc(var(--sz) * 3rem);
          }

          .teal {
            background: #09727e;
          }

          .dpadContainer{
            grid-column: 1 / 4;
            display: grid;
            margin-bottom: calc(var(--sz) * 0.65rem);
            width: calc(var(--sz) * 11.286rem);
            height: calc(var(--sz) * 11.286rem);
            position: relative;
          }

          .chromecast-remote-body .dpadContainer, 
          .apple-remote-body .dpadContainer {
            grid-column: 1 / 3;
            margin-bottom: 0;
          }

          .apple-remote-body.AR2 .dpadContainer {
            overflow: hidden;
          }

          .XM2 .dpadContainer {
            align-items: center;
            justify-items: center;
            position: relative;
          }

          .shieldDpad {
            grid-column: 1 / 3;
            width: calc(var(--sz) * 8.2rem);
            height: calc(var(--sz) * 8.2rem);
            position: relative;
          }

          .ALControlsContainer .dpadContainer {
            grid-column: unset;
          }

          .centerbutton{
            all: unset;
            cursor: pointer;
            border: solid black calc(var(--sz) * 0.0714rem);
            margin-left: calc(var(--sz) * 2.357rem);
            margin-top: calc(var(--sz) * 2.357rem);
            width: calc(var(--sz) * 6.428rem);
            height: calc(var(--sz) * 6.428rem);
            border-radius: 100%;
            position: absolute;
            background: rgba(55,55,55,1);
            box-shadow: inset 0 0.calc(var(--sz) * 2857rem) calc(var(--sz) * 0.1428rem) calc(var(--sz) * -0.1428rem) #000000d9;
            z-index: 5;
          }

          .directionButtonContainer{
            transform: rotate(45deg);
            border: calc(var(--sz) * 0.0714rem) solid black;
            display: grid;
            grid-template-columns: auto auto;
            border-radius: 100%;
            overflow: hidden;
            box-shadow: rgb(20 20 20) calc(var(--sz) * 0.1428rem) calc(var(--sz) * 0.1428rem) calc(var(--sz) * 0.4285rem);
            position: relative;
          }

          .AR2 .directionButtonContainer {
            margin-top: calc(var(--sz) * -1.4rem);
            margin-left: calc(var(--sz) * -1.35rem);
            border-radius: 0;
            border: 0;
            overflow: unset;
            box-shadow: none;
          }

          .chromecast-remote-body .directionButtonContainer {
            border: calc(var(--sz) * 0.0714rem) solid #9d9d9d;
            box-shadow: #b1b1b1 0 0 calc(var(--sz) * 0.4rem)  calc(var(--sz) * 0.02rem);
          }

          .dpadbutton{
            all: unset;
            cursor: pointer;
            width: calc(var(--sz) * 5.5714rem);
            height: calc(var(--sz) * 5.5714rem);
            background: #141414;
            color: white;
            outline: solid #2e2e2e calc(var(--sz) * 0.0714rem);
          }

          .AR2 .dpadbutton {
            width: calc(var(--sz) * 7rem);
            height: calc(var(--sz) * 7rem);
            outline: none;
          }

          .XM2 .dpadbutton {
            background: rgb(28 28 28);
            outline: solid #000 calc(var(--sz) * 0.0714rem);
          }

          .chromecast-remote-body .dpadbutton {
            background: #fff;
            outline: solid #c5c5c5 calc(var(--sz) * 0.0714rem);
          }

          .apple-remote-body:not(.AR2) .dpadbutton:nth-child(1)::after {
            content: "•";
            text-align: center;
            display: block;
            font-weight: 600;
            color: rgb(198, 198, 198);
            padding-right: calc(var(--sz) * 1.2rem);
            padding-bottom: calc(var(--sz) * 1.2rem);
          }

          .apple-remote-body:not(.AR2) .dpadbutton:nth-child(2)::after {
            content: "•";
            text-align: center;
            display: block;
            font-weight: 600;
            color: rgb(198, 198, 198);
            padding-left: calc(var(--sz) * 1.2rem);
            padding-bottom: calc(var(--sz) * 1.2rem);
          }

          .apple-remote-body:not(.AR2) .dpadbutton:nth-child(3)::after {
            content: "•";
            text-align: center;
            display: block;
            font-weight: 600;
            color: rgb(198, 198, 198);
            padding-right: calc(var(--sz) * 1.2rem);
            padding-top: calc(var(--sz) * 1.2rem);
          }

          .apple-remote-body:not(.AR2) .dpadbutton:nth-child(4)::after {
            content: "•";
            text-align: center;
            display: block;
            font-weight: 600;
            color: rgb(198, 198, 198);
            padding-left: calc(var(--sz) * 1.2rem);
            padding-top: calc(var(--sz) * 1.2rem);
          }

          .dpadbutton:active {
            background: #282828;
          }

          .chromecast-remote-body .dpadbutton:active {
            background: #efefef;
          }

          .dpadbuttonShield {
            width: calc(var(--sz) * 4.101rem);
            height: calc(var(--sz) * 4.101rem);
          }

          .centerbuttonShield {
            width: calc(var(--sz) * 5rem);
            height: calc(var(--sz) * 5rem);
            margin: 0px;
            padding: 0px;
            place-self: center;
            position: absolute;
            background: rgba(37,37,37,1);
            background: radial-gradient(circle, rgba(28,28,28,1) 0%, rgba(37,37,37,1) 100%);
          }

          .XM2 .centerbutton {
            background: rgb(28, 28, 28);
            border: solid black calc(var(--sz) * 0.25rem);
            width: calc(var(--sz) * 4.7rem);
            height: calc(var(--sz) * 4.7rem);
            margin: 0px;
            position: absolute;
          }

          .chromecast-remote-body .centerbutton {
            background: radial-gradient(circle, rgb(231 231 231) 0%, rgb(255, 255, 255) 80%);
            box-shadow: inset rgb(0 0 0 / 10%) 0 calc(var(--sz) * 0.15rem) calc(var(--sz) * 0.4rem);
            border: solid #dddddd calc(var(--sz) * 0.0714rem);
            width: calc(var(--sz) * 4rem);
            height: calc(var(--sz) * 4rem);
            place-self: center;
            position: absolute;
            margin: 0;
            padding: 0;
          }

          .apple-remote-body .centerbutton {
            background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(48,48,48,1) 100%);
            width: calc(var(--sz) * 6rem);
            height: calc(var(--sz) * 6rem);
            margin-left: calc(var(--sz) * 2.65rem);
            margin-top: calc(var(--sz) * 2.65rem);
            box-sizing: border-box;
            transform-origin: center bottom;
            outline: solid #2e2e2e calc(var(--sz) * 0.0714rem);
          }

          .apple-remote-body.AR1 .centerbutton {
            background: linear-gradient(180deg, rgb(147, 148, 150) 0%, rgb(207, 211, 213) 100%);
          }

          .apple-remote-body.AR2 .centerbutton {
            border-radius: 0;
            border: 0;
            outline: 0;
            transform: scale(.75);
            transform-origin: center;
            text-align: center;
          }

          .apple-remote-body.AR2 .dpadContainer button {
            background: none;
            color: transparent;
          }
          .apple-remote-body.AR2 .dpadContainer button:hover,
          .apple-remote-body.AR2 .dpadContainer button:active {
            color: #636363;
            text-align: center;
          }


          .centerbutton:active {
            transform: scale(95%);
          }

          .chromecast-remote-body .centerbutton:active {
            transform: none;
            box-shadow: inset rgb(0 0 0 / 19%) 0 calc(var(--sz) * 0.25rem) calc(var(--sz) * 0.4375rem) calc(var(--sz) * 0.125rem);
          }

          .apple-remote-body .centerbutton:active {
            transform: none;
            border: calc(var(--sz) * 0.2rem) solid black;
          }

          .remote-button:active {
            box-shadow: inset rgb(0 0 0 / 13%) 0 calc(var(--sz) * 0.2857rem) calc(var(--sz) * 0.1428rem) 0;
          }

          .remote-button > ha-icon {
            color: #c6c6c6;
          }

          .remote-button:active > ha-icon {
            color: #bcbcbc;
            transform: scale(calc(var(--sz) * 0.85));
          }

          .chromecast-remote-body ha-icon {
            color: #686868;
          }

          .chromecast-remote-body .remote-button:active {
            box-shadow: rgb(0 0 0 / 5%) 0px calc(var(--sz) * 0.125rem) calc(var(--sz) * 0.125rem) calc(var(--sz) * 0.1875rem) inset;
          }

          .chromecast-remote-body .remote-button:active > ha-icon {
            color: #000;
          }

          .square {
            border-radius: 0;
            border: 0;
            padding: 0;
          }

          .round-top {
            border-radius: 100% 100% 0 0;
            border-bottom: 0;
            box-shadow: none;
            height: calc(var(--sz) * 3.92857rem);
            margin-bottom: calc(var(--sz) * -0.5rem);
          }

          .round-bottom {
            border-radius: 0 0 100% 100%;
            border-top: 0;
            height: calc(var(--sz) * 3.92857rem);
            margin-top: calc(var(--sz) * -0.5rem);
          }

          .apple-remote-body .round-bottom, .apple-remote-body.AR2 .round-bottom {
            height: calc(var(--sz) * 5.25rem);
          }

          .square:active, .round-bottom:active {
              box-shadow: none;
          }

          .remote-body #volume-up-button, .remote-body #volume-down-button {
              font-size: calc(var(--sz) * 2.5rem);
          }
          .apple-remote-body #volume-up-button, .apple-remote-body #volume-down-button {
              font-size: calc(var(--sz) * 2.25rem);
          }
          .remote-body #programmable-one-button, .remote-body #programmable-two-button {
              font-size: calc(var(--sz) * 1.75rem);
          }

          .remote-body #volume-up-button:active, .remote-body #volume-down-button:active {
              font-size: calc(var(--sz) * 2rem);
          }
          .apple-remote-body #volume-up-button:active, .apple-remote-body #volume-down-button:active {
              font-size: calc(var(--sz) * 1.75rem);
          }
          .remote-body #programmable-one-button:active, .remote-body #programmable-two-button:active {
              font-size: calc(var(--sz) * 1.45rem);
          }

          .srcButton {
            height: calc(var(--sz) * 2rem);
            width: calc(var(--sz) * 5.714rem);
            border: solid #090909 calc(var(--sz) * 0.0714rem);
            border-radius: calc(var(--sz) * 2rem);
            display: grid;
            justify-items: center;
            align-content: center;
            color: rgb(198 198 198);
            background: rgb(33 33 33);
            box-shadow: rgb(0 0 0 / 25%) 0 calc(var(--sz) * 0.214rem) calc(var(--sz) * 0.1428rem) 0;
            cursor: pointer;
            line-height: normal;
            user-select: none;
            font-size: calc(var(--sz) * 1.14rem);
            padding: calc(var(--sz) * 0.285rem);
            white-space: nowrap;
            overflow: hidden;
            filter: var(--appButtonFilter);
            transition: filter 250ms;
          }

          .apple-remote-body .srcButton {
            filter: none;
            border: none;
            box-shadow: rgb(0 0 0 / 13%) 0 calc(var(--sz) * 0.214rem) calc(var(--sz) * 0.143rem 0);
            transition: none;
          }

          .chromecast-remote-body .srcButton {
            filter: grayscale(40%);
            box-shadow: rgb(0 0 0 / 5%) 0 calc(var(--sz) * 0.214rem) calc(var(--sz) * 0.1428rem) 0;
          }

          .srcButton:active, .srcButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            transition: filter 0s;
          }

          .shield-remote-body .srcButton {
            height: calc(var(--sz) * 3rem);
            width: calc(var(--sz) * 8rem);
          }

          .srcButton:active {
            filter: brightness(90%);
            transform: scale(.95);
            box-shadow: none;
          }

          .chromecast-remote-body .srcButton:active {
            filter: none;
          }

          .srcButton svg {
            pointer-events: none;
            max-width: calc(var(--sz) * 4.5rem);
            max-height: calc(var(--sz) * 1.6rem);
          }

          .shield-remote-body .srcButton svg {
            max-height: calc(var(--sz) * 2.1rem);
            max-width: calc(var(--sz) * 6.8rem);
          }

          .chromecast-remote-body .srcButton svg, .apple-remote-body .srcButton svg {
            max-width: calc(var(--sz) * 3.25rem);
            max-height: calc(var(--sz) * 3.25rem);
          }

          .apple-remote-body .srcButton svg {
            max-width: calc(var(--sz) * 3.55rem);
            max-height: calc(var(--sz) * 3.55rem);
          }

          .chromecastBottomIndentedRow {
            display: grid;
            width: calc(100% - (var(--sz) * 1.2rem) - (var(--sz) * 0.4rem * 2));
            padding: calc(var(--sz) * 0.4rem);
            box-sizing: border-box;
            grid-template-columns: auto 1fr auto;
            box-shadow: rgb(0 0 0 / 28%) 0 calc(var(--sz) * 0.12rem) calc(var(--sz) * 0.4rem) inset;
            border-radius: calc(var(--sz) * 5rem);
            grid-column: 1 / 3;
            place-items: center;
            margin-top: calc(var(--sz) * 1rem);
          }

          .chromecastBottomIndentedRow .remote-button, .chromecastBottomIndentedRow .input-button {
            height: calc(var(--sz) * 2.3rem) !important;
            width: calc(var(--sz) * 2.3rem) !important;
            margin: 0 !important;
          }

          .chromecastVolumeRocker {
            grid-column: 1 / 3;
            place-items: center;
            width: calc(100% - (var(--sz) * 1.2rem) - (var(--sz) * 0.4rem * 2));
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .chromecastVolumeRocker > button {
            height: calc(var(--sz) * 2rem) !important;
            width: 100% !important;
            box-shadow: rgb(0 0 0 / 5%) 0 calc(var(--sz) * 0.214rem) calc(var(--sz) * 0.1428rem) 0;
          }

          .chromecastVolumeRocker #volume-down-button {
            border-radius: calc(var(--sz) * 2rem) 0 0 calc(var(--sz) * 2rem);
            border-right: calc(var(--sz) * 0.05rem) solid #ebebeb;
          }

          .chromecastVolumeRocker #volume-up-button {
            border-radius: 0% calc(var(--sz) * 2rem) calc(var(--sz) * 2rem) 0;
            border-left: 0;
          }

          .deviceNameTop {
            white-space: nowrap;
            font-size: calc(var(--sz) * 1rem);
            overflow: hidden;
            color: var(--devicenamecolor);
            margin-left: -1rem;
            text-align: center;
            display: grid;
            height: calc(var(--sz) * 2rem);
            align-items: center;
            align-content: center;
            justify-items: center;
          }

          .AF6 .deviceNameTop {
            grid-column: 1 / 4;
            display: block;
            text-align: center;
            margin: 0;
            padding: 0;
          }

          .AL1 .deviceNameTop, .AL2 .deviceNameTop {
            margin: 0rem 0px calc(var(--sz) * 1.25rem);
            display: block;
            height: unset;
            overflow: unset;
            font-size: calc(var(--sz) * 1.25rem);
          }

          .shield-remote-body .deviceNameTop {
            display: unset;
            align-items: unset;
            align-content: unset;
            justify-items: unset;
            margin-left: 0;
            margin-top: -1rem;
          }

          .shield-remote-body.ns1-body .deviceNameTop {
            margin-top: 0rem;
            margin-bottom: -0.75rem;
          }

          .XM2 .deviceNameTop {
            grid-column: 1 / 4;
            margin: calc(var(--sz) * -1rem) 0 0;
          }

          .chromecast-remote-body .deviceNameTop {
            grid-column: 1 / 3;
            margin: unset;
            margin-top: calc(var(--sz) * 1rem);
            height: unset;
            display: block;
          }

          .apple-remote-body .deviceNameTop {
            grid-column: 1 / 3;
            margin: 0 0 calc(var(--sz) * -1.8rem) 0;
          }

          .apple-remote-body.AR1 .deviceNameTop {
            margin: calc(var(--sz) * -4rem) 0 calc(var(--sz) * -2.5rem) 0;
          }

          .deviceNameBottom {
            grid-column: 1/4;
            color: var(--devicenamecolor);
            font-size: calc(var(--sz) * 1.25rem);
            margin-bottom: calc(var(--sz) * -2.5rem);
            margin-top: calc(var(--sz) * .5rem);
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
            text-align: center;
            align-self: flex-end;
          }

          .AF6 .deviceNameBottom {
            margin-bottom: calc(var(--sz) * -1rem);
          }

          .AL1 .deviceNameBottom, .AL2 .deviceNameBottom {
            margin-bottom: unset;
            margin-top: calc(var(--sz) * 1.8rem);
            overflow: unset;
          }

          .apple-remote-body .deviceNameBottom {
            grid-column: 1 / 3;
            margin-bottom: calc(var(--sz) * -1.25rem);
          }

          .shield-remote-body .deviceNameBottom {
            grid-column: 1 / 3;
            font-size: calc(var(--sz) * 1rem);
            margin-top: 0px;
            margin-bottom: 0px;
            position: absolute;
            bottom: calc(var(--sz) * 0.3rem);
          }

          .chromecast-remote-body .deviceNameBottom {
            grid-column: 1 / 3;
            margin-right: unset;
            margin-bottom: calc(var(--sz) * 1rem);
            margin-left: unset;
            margin-top: calc(var(--sz) * 0.5rem);
            height: unset;
            display: block;
          }

          .firemoteVersionNumber {
            text-shadow: 0px 1px 0px #1e1e1e, 0px -1px 0px #000;
            color: #4e4e4e;
            align-self: right;
            text-align: right;
            width: 100%;
            justify-self: right;
            display: block !important;
            font-size: calc(var(--sz) * .9rem);
            position: absolute;
            bottom: calc(var(--sz) * .35rem);
            right: calc(var(--sz) * .4rem);
          }

          .abciviewButton{
            background: #fff;
          }

          .aceStreamMediaButton {
            background: rgb(33, 33, 33);
          }

          .allFourButton {
            background: #1e2226;
          }

          .amcPlusButton {
            background: #192f54;
          }
          
          .amcPlusButton svg {
            width: calc(var(--sz) * 2.7rem);
          }
          .shield-remote-body .amcPlusButton svg {
            width: calc(var(--sz) * 3.75rem);
          }

          .appleArcadeButton {
            background: linear-gradient(0deg, rgba(255,45,80,1) 0%, rgba(255,115,85,1) 100%);
          }

          .appleComputersButton {
            background: linear-gradient(0deg, rgba(255,114,49,1) 0%, rgba(255,175,63,1) 100%);
          }

          .appleFacetimeButton {
            background: linear-gradient(0deg, rgba(11,188,41,1) 0%, rgba(93,247,119,1) 100%);
          }

          .appleFitnessButton {
            background: #000;
          }

          .appleTvMusicButton {
            background: linear-gradient(0deg, rgba(250,35,59,1) 0%, rgba(251,92,116,1) 100%);
          }

          .appleTvMoviesButton {
            color: #fff;
            background: linear-gradient(135deg, rgba(44,240,255,1) 0%, rgba(38,174,255,1) 100%);
            font-size: calc(var(--sz) * 1rem);
            font-weight: bold;
          }

          .appleTvPhotosButton {
            background: #fff;
          }

          .appleTvPodcastsButton {
            background: linear-gradient(0deg, rgba(123,107,255,1) 0%, rgba(252,97,255,1) 100%);
          }

          .appleTvSearchButton {
            background: linear-gradient(0deg, rgba(138,138,138,1) 0%, rgba(200,200,200,1) 100%);
            border: solid #838383 calc(var(--sz) * 0.05rem) !important;
          }

          .appleTvshowsButton {
            color: #fff;
            background: linear-gradient(228deg, rgba(237,115,225,1) 0%, rgba(162,120,190,1) 100%);
            font-size: calc(var(--sz) * 1rem);
            text-wrap: wrap;
            font-weight: bold;
          }

          .appOpenerButton {
            font-size: calc(var(--sz) * .75rem);
            color: #fff;
            background: #400080;
          }

          .appleAppStoreButton {
            background: linear-gradient(0deg, rgba(12,88,239,1) 0%, rgba(14,212,252,1) 100%);
          }

          .appleTvButton {
            background: rgb(46, 46, 46);
          }
          .appleTvButton svg {
            width: calc(var(--sz) * 2.4rem);
            margin-top: calc(var(--sz) * -0.2rem);
          }
          .shield-remote-body .appleTvButton svg {
            width: calc(var(--sz) * 3rem);
          }

          .ardMediathekButton {
            background: #003480;
          }

          .arteButton {
            background: #141414;
          }

          .bbciplayerButton {
            background: #fff;
          }

          .bellFibeTVButton {
            background: #fff;
          }
          .bellFibeTVButton svg {
            width: calc(var(--sz) * 2.5rem);
          }

          .bgtimeTvButton {
            background: linear-gradient(90deg, #12365c, #171f42);
          }

          .bingeAuButton {
            background: #fff;
          }

          .bookmarker1Button {
            background: rgb(109 109 109);
          }

          .channelsDVRButton {
            background: linear-gradient(42deg, rgba(49,42,171,1) 0%, rgba(76,24,133,1) 87%);
          }

          .cheersDanmuPlayerButton {
            background: linear-gradient(0deg, rgba(103,219,237,1) 0%, rgba(105,200,248,1) 100%);
          }

          .cnnButton {
            background: linear-gradient(0deg, rgba(110,0,0,1) 0%, rgba(227,0,0,1) 100%);
          }

          .cosmoteTVButton {
            background: #091016;
          }
          .cosmoteTVButton svg {
            height: calc(var(--sz) * 1.15rem);
          }
          .shield-remote-body .cosmoteTVButton svg {
            height: calc(var(--sz) * 1.6rem);
          }
          .chromecast-remote-body .cosmoteTVButton svg {
            height: calc(var(--sz) * .75rem);
          }

          .craveTVButton {
            background: #030839;
          }
          .craveTVButton svg {
            width: calc(var(--sz) * 4rem);
          }

          .crunchyrollButton {
            background: #23252b;
          }

          .curiosityStreamButton {
            background: #04070d;
          }

          .cyberghostButton {
            background: #242538;
          }

          .dailyWireButton {
            background: radial-gradient(circle, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 100%);
          }

          .daznButton {
            background: #1b3848;
          }
          .daznButton svg {
            width: calc(var(--sz) * 4.5rem);
            height: calc(var(--sz) * 1.6rem);
          }
          .shield-remote-body .daznButton svg {
            height: calc(var(--sz) * 2.1rem);
          }
          .apple-remote-body .daznButton svg {
            height: calc(var(--sz) * 2.25rem);
          }

          .direcTVStreamButton {
            background: #fff;
          }
          .direcTVStreamButton svg {
            width: calc(var(--sz) * 3.4rem);
          }
          .shield-remote-body .direcTVStreamButton svg {
            width: calc(var(--sz) * 4.6rem);
          }

          .discoveryPlusButton {
            background: #042482;
          }

          .dishAnywhereButton {
            background: #fff;
          }

          .disneyPlusButton {
            background: #07183f;
          }
          .AF6 .disneyPlusButton {
            background: rgb(37, 37, 37);
          }
          .disneyPlusButton svg {
            margin-top: calc(var(--sz) * 0.2rem);
            width: calc(var(--sz) * 3.6rem);
          }
          .shield-remote-body .disneyPlusButton svg {
            width: calc(var(--sz) * 4.8rem);
          }

          .dsVideoButton {
            color: #fff;
            background: #cd4242;
            font-weight: bold;
            font-size: calc(var(--sz) * 1rem);
          }
          .chromecast-remote-body .dsVideoButton {
            font-size: calc(var(--sz) * .8rem);
          }

          .embyButton {
            background: #fff;
          }

          .eonTVButton{
            background: #fff
          }

          .ertflixButton {
            background: #07141c;
          }
          .shield-remote-body .ertflixButton svg {
            width: calc(var(--sz) * 4.8rem);
          }

          .espnButton {
            background: #fff;
          }
          .espnButton svg {
            width: calc(var(--sz) * 3.6rem);
          }
          .shield-remote-body .espnButton svg {
            width: calc(var(--sz) * 4.8rem);
          }

          .fDroidutton {
            background: #fff;
          }

          .f1TVButton {
            background: #e10600;
          }

          .fireTVStoreButton {
            background: linear-gradient(0deg, rgba(255,159,82,1) 0%, rgba(193,87,0,1) 40%, rgba(193,87,0,1) 60%, rgba(255,159,82,1) 100%);
            font-weight: bold;
            color: #fff;
            font-size: calc(var(--sz) * 0.9rem);
          }

          .flashButton {
            background: #0049ff;
          }

          .foxSportsButton {
            background: #000;
          }

          .franceTVButton {
            background: #172128;
          }

          .freeveeButton {
            background: #D8FF03;
          }
          .freeveeButton svg {
            width: calc(var(--sz) * 3.6rem);
          }
          .shield-remote-body .freeveeButton svg {
            width: calc(var(--sz) * 4.8rem);
          }

          .fuboButton {
            background: linear-gradient(0deg, rgba(227,0,27,1) 0%, rgba(255,58,11,1) 100%);
          }

          .gcnPlusButton {
            background: #ba0f15;
          }

          .goPlayButton {
            background: #001e23;
          }

          .goTVButton {
            background: #fff;
          }

          .googlePlayStoreButton {
            background: rgb(255, 255, 255);
          }

          .hboMaxButton {
            background: linear-gradient(90deg, #8d28e8 0%, #440cc3 50%, #4076d6 100%);
          }
          .hboMaxButton svg {
            width: calc(var(--sz) * 4rem);
          }
          .shield-remote-body .hboMaxButton svg {
            width: calc(var(--sz) * 5.25rem);
          }

          .hdhomerunButton {
            background: #fff;
          }

          .homeAssistantButton {
            background: #fff;
          }

          .huluButton {
            background: #1ce783;
          }
          .AF6 .huluButton {
            background: rgb(37, 37, 37);
          }
          .AF6 .huluButtonSVG {
            fill: rgb(28, 231, 131)!important;
          }
          .huluButton svg {
            width: calc(var(--sz) * 2.8rem);
          }

          .igniteTVShawButton {
            background: #fff;
          }

          .infuseButton {
            background: #fff;
          }

          .internetSilkBrowserButton {
            background: linear-gradient(218deg, rgba(0,179,188,1) 36%, rgba(5,111,107,1) 100%);
          }

          .iPlayTVButton {
            background: linear-gradient(0deg, rgba(92,92,92,1) 0%, rgba(127,127,127,1) 100%);
          }

          .ipTVExtremeProButton {
            background: #fff;
          }

          .iptvXButton {
            background: #000;
          }

          .ipVanishButton {
            background: #fff;
          }
          .ipVanishButton svg {
            width: calc(var(--sz) * 4rem);
          }
          .shield-remote-body .ipVanishButton svg {
            width: calc(var(--sz) * 5.25rem);
          }

          .iqiyiButton {
            background: #fff;
          }

          .israelStationButton {
            font-size: calc(var(--sz) * .8rem);
            display: flow-root;
            color: #fff;
            background: #2f2f2f;
          }
          .shield-remote-body .israelStationButton {
            font-size: calc(var(--sz) * 1rem);
          }
          .chromecast-remote-body .israelStationButton {
            font-size: calc(var(--sz) * .55rem);
          }

          .iVysilaniButton {
            background: #fff;
          }

          .jellyfinButton {
            background: #000b25;
          }
          .jellyfinButton svg {
            margin-top: calc(var(--sz) * -0.1rem);
          }

          .justWatchStreamingGuideButton {
            background: #000;
          }

          .kayoButton {
            background: #fff;
          }
          .kayoButton svg {
            height: calc(var(--sz) * 1.55rem);
          }
          .shield-remote-body .kayoButton svg {
            height: calc(var(--sz) * 2.1rem);
          }

          .kinopoiskButton {
            background: #000;
          }

          .kodiButton {
            background: rgba(27,67,82,1);
          }
          .kodiButton svg {
            width: calc(var(--sz) * 3.8rem);
          }
          .shield-remote-body .kodiButton svg {
            width: calc(var(--sz) * 5.25rem);
          }

          .lazymediaDeluxeButton {
            background: #1d821d;
          }

          .liveChannelsButton {
            color: #fff;
            background: #17b0f5;
            font-size: calc(var(--sz) * .75rem);
          }
          .shield-remote-body .liveChannelsButton {
            font-size: calc(var(--sz) * 1rem);
          }
          .chromecast-remote-body .liveChannelsButton {
            font-size: calc(var(--sz) * .55rem);
          }

          .magentaTVButton {
            background: #fff;
          }

          .maxPlayerButton {
            background: rgb(1, 23, 60);
          }

          .mediasetInfinityButton {
            background: #0c0c0c;
          }

          .mlbButton {
            background: #fff;
          }

          .movistarPlusButton {
            background: #2b2b2b;
          }
          .movistarPlusButton svg {
            height: calc(var(--sz) * 1.2rem);
          }
          .shield-remote-body .movistarPlusButton svg {
            height: calc(var(--sz) * 2rem);
          }

          .myCanalButton {
            background: #fff;
          }

          .myFamilyCinemaButton {
            background: #fff;
          }

          .nbaOnFireTvButton {
            background: #11212f;
          }

          .nbcSportsButton {
            background: #fff;
          }

          .nebulaButton {
            background: #fff;
          }

          .netflixButton {
            background: #fff;
          }
          .shield-remote-body .netflixButton {
            background: #252525;
          }
          .AF6 .netflixButton {
            background: rgb(37, 37, 37);
          }
          .netflixButton > svg {
            width: calc(var(--sz) * 3.8rem);
          }
          .shield-remote-body .netflixButton > svg {
            width: calc(var(--sz) * 4rem);
          }
          .shield-remote-body .netflixButton:active, .shield-remote-body .netflixButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 87 87 / 15%);
            border: solid #480a0a calc(var(--sz) * 0.0714rem);
          }

          .newsButton {
            font-weight: bold;
            font-size: calc(var(--sz) * 1.4rem);
            text-shadow: 0 0 calc(var(--sz) * 0.5rem) black;
            color: #ffffff;
            background: linear-gradient(45deg, rgba(255,184,81,1) 31%, rgba(202,21,205,1) 100%);
          }
          .newsButton:active, .newsButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 15%);
          }

          .nflButton {
            background: #013369;
          }

          .nineNowButton {
            background: #000;
          }

          .nlzietButton {
            background: #1a191c;
          }

          .nordVPNButton {
            background: #F3F7FC;
          }

          .nostvButton {
            background: #fff;
          }

          .nowTVButton {
            background: linear-gradient(220deg, rgba(4,121,129,1) 57%, rgba(6,30,31,1) 100%);
          }
          .nowTVButton svg {
            width: calc(var(--sz) * 3rem);
          }
          .shield-remote-body .nowTVButton svg {
            width: calc(var(--sz) * 4.5rem);
          }

          .npoButton {
            background: #fff;
          }

          .optusSportButton {
            background: #1b3246;
          }

          .ottNavigatorButton {
            background: #22518f;
          }
          .chromecast-remote-body .ottNavigatorButton svg{
            width: calc(var(--sz) * 2.25rem);
          }

          .oqeeButton {
            background: #161616;
          }

          .pandoraButton {
            background: #3668ff;
          }
          .pandoraButton > svg {
            width: calc(var(--sz) * 4rem);
          }
          .shield-remote-body .pandoraButton > svg {
            width: calc(var(--sz) * 5.5rem);
          }

          .paramountPlusButton {
            background: #0667fc;
          }

          .pbsButton {
            background: #2638c4;
          }

          .peacockButton {
            background: linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(59,59,59,1) 100%);
          }
          .peacockButton svg {
            width: calc(var(--sz) * 4rem);
          }
          .shield-remote-body .peacockButton svg {
            width: calc(var(--sz) * 5.5rem);
          }

          .plexButton {
            background: #000;
          }
          .plexButton svg {
            width: calc(var(--sz) * 2.5rem);
          }
          .shield-remote-body .plexButton svg {
            width: calc(var(--sz) * 3.5rem);
          }

          .plutoTvButton {
            background: #000;
          }

          .podaTVButton {
            background: #fff;
          }

          .primeButton {
            background: rgb(58 94 114);
          }
          .XM2 .primeButton {
            background: #fff;
          }
          .AF6 .primeButton {
            background: rgb(37, 37, 37);
          }
          .primeButton svg {
            width: calc(var(--sz) * 3.8rem);
          }
          .shield-remote-body .primeButton > svg {
            width: calc(var(--sz) * 5rem);
          }
          .XM2 .primeButton .pv0 {
            fill: #00a8e1;
          }
          .XM2 .primeButton .pv1 {
            fill: #232f3e;
          }
          .AF6 .primeButton .pv0, .AF6 .primeButton .pv1 {
            fill: #99dcff;
          }

          .privateInternetAccessButton {
            font-size: calc(var(--sz) * 1.2rem);
            color: #fff;
            font-weight: bold;
            background: #56b14d;
          }

          .proximusPickxButton {
            background: #000;
          }

          .purpleCheetahButton {
            background: #fff;
          }

          .qmusicButton {
            background: #fff;
          }

          .raiPlayButton {
            background: #fff;
          }
          .raiPlayButton svg {
            height: calc(var(--sz) * 1.5rem);
          }
          .shield-remote-body .raiPlayButton svg {
            height: calc(var(--sz) * 3rem);
          }

          .redPlayButton {
            background: #fff;
          }

          .rumbleButton {
            background: #fff;
          }

          .s0undTVButton {
            background: #a30f2c;
          }

          .sbsOnDemandButton {
            background: #000;
          }
          .chromecast-remote-body .sbsOnDemandButton,
          .apple-remote-body .sbsOnDemandButton {
            background: #FDB715;
          }

          .sevenPlusButton {
            background: #000;
          }

          .seznamButton {
            background: #fff;
          }

          .shopHQButton {
            color: yellow;
            background: #2e2e2e;
            font-weight: bold;
            font-size: calc(var(--sz) * 0.857rem);
          }

          .showtimeButton {
            background: black;
          }
          .showtimeButton svg {
            width: calc(var(--sz) * 3.3rem);
          }
          .shield-remote-body .showtimeButton svg {
            width: calc(var(--sz) * 5rem);
          }

          .siriusXMButton {
            background: #fff;
          }

          .skyNewsButton {
            background: #fff;
          }

          .skyShowtimeButton {
            background: linear-gradient(180deg, rgba(113,1,181,1) 0%, rgba(0,0,0,1) 35%, rgba(142,12,0,1) 100%);
          }

          .skySportNowButton {
            background: #fff;
            font-size: calc(var(--sz) * 1rem);
          }

          .slingButton {
            background: linear-gradient(90deg, rgba(0,16,65,1) 0%, rgba(0,51,179,1) 75%);
          }

          .smartTubeNextButton {
            background: #000;
          }

          .smartTvClientForTwitchButton {
            background: #444;
          }

          .spotifyButton {
            background: #fff;
          }

          .stanButton {
            background: #fff;
          }
          .stanButton svg {
            width: calc(var(--sz) * 3.25rem);
          }
          .shield-remote-body .stanButton svg {
            width: calc(var(--sz) * 5rem);
          }

          .startupShowButton {
            background: #fff;
          }

          .steamLinkButton {
            background: linear-gradient(0deg, rgba(9,37,70,1) 0%, rgba(15,105,149,1) 50%);
          }

          .streamTVButton {
            background: #fff;
          }

          .starzButton {
            background: linear-gradient(99deg, rgba(16,65,69,1) 0%, rgba(8,31,33,1) 40%, rgba(13,71,75,1) 80%, rgba(16,60,64,1) 100%);
          }
          .starzButton svg {
            width: calc(var(--sz) * 3.3rem);
          }
          .shield-remote-body .starzButton svg {
            width: calc(var(--sz) * 4.5rem);
          }

          .streamzButton {
            background: #020012;
          }
          .streamzButton svg {
            width: calc(var(--sz) * 5.5rem);
          }

          .stremioButton {
            background: #fff;
          }

          .surfsharkButton {
            background: #fff;
          }

          .svtPlayButton {
            background: #000;
          }
          .svtPlayButton svg {
            height: calc(var(--sz) * 1.2rem);
          }
          .shield-remote-body .svtPlayButton svg {
            height: calc(var(--sz) * 1.6rem);
          }

          .swiftfinButton {
            background: #000b25;
          }

          .syncnextButton {
            font-size: 0.75rem;
          }

          .synclerButton {
            background: #000);
          }

          .tTwoTVButton {
            background: #fff;
          }

          .tailscaleButton {
            background: #232323;
          }

          .tbsButton {
            background: linear-gradient(67deg, rgba(250,203,149,1) 0%, rgba(223,107,147,1) 44%, rgba(46,21,60,1) 100%);
          }

          .telenetTvButton {
            background: #332822;
          }

          .tenPlayButton {
            background: #fff;
          }

          .tennisChannelButton {
            background: #fff;
          }

          .testflightButton {
            background: linear-gradient(0deg, rgba(29,133,243,1) 0%, rgba(0,212,255,1) 100%);
          }

          .threenowButton {
            background: #fff;
          }
          .threenowButton svg {
            height: calc(var(--sz) * 2rem);
          }

          .tidalButton {
            background: #000;
          }

          .tiviMateButton {
            font-size: calc(var(--sz) * 1rem);
            color: #33a8ff;
            font-weight: bold;
            background: #fff;
          }
          .chromecast-remote-body .tiviMateButton {
            font-size: calc(var(--sz) * 0.85rem);
          }

          .tntButton {
            background: #000;
          }

          .tubiButton {
            background: linear-gradient(180deg, rgba(229,78,25,1) 10%, rgba(127,0,195,1) 100%);
          }
          .tubiButton svg {
            width: calc(var(--sz) * 2.75rem);
          }
          .shield-remote-body .tubiButton svg {
            width: calc(var(--sz) * 3.5rem);
          }

          .tv4PlayButton {
            background: #e0001c;
          }

          .tverButton {
            background: #fff;
          }

          .tvExpressBRButton {
            background: #7b5f9e;
          }

          .tvingButton {
            background: #fff;
          }

          .tvnzPlusButton {
            background: #000;
          }
          .tvnzPlusButton svg {
            height: calc(var(--sz) * 1rem);
          }
          .shield-remote-body .tvnzPlusButton svg {
            height: calc(var(--sz) * 1.25rem);
          }

          .twireButton {
            background: #2195f1;
          }

          .twitchButton {
            background: #6441a5;
          }
          .twitchButton svg {
            width: calc(var(--sz) * 3.75rem);
            margin-bottom: calc(var(--sz) * -0.3rem);
          }
          .shield-remote-body .twitchButton svg {
            width: calc(var(--sz) * 5.5rem);
          }

          .uNextButton {
            background: linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(26,34,46,1) 50%, rgba(26,34,46,1) 75%, rgba(51,59,69,1) 75%);
          }

          .viaplayButton {
            background: #1d1d27;
          }

          .videolandButton {
            background: #ff3746;
          }
          .chromecast-remote-body .videolandButton {
            font-size: calc(var(--sz) * 0.75rem);
            font-weight: bold;
            color: #fff;
          }

          .vlcButton {
            background: #fff;
          }

          .volleyballTVButton {
            background: #0f201f;
          }

          .vrtMaxButton {
            background: #020b26;
          }
          .vrtMaxButton svg {
            width: calc(var(--sz) * 5.5rem) !important;
            height: calc(var(--sz) * 0.95rem) !important;
          }
          .shield-remote-body .vrtMaxButton svg {
            width: calc(var(--sz) * 5.5rem) !important;
            height: calc(var(--sz) * 1.5rem) !important;
          }

          .vtmGoButton {
            background: linear-gradient(180deg, rgba(15,15,15,1) 0%, rgba(78,32,116,1) 100%);;
          }

          .waipuTVButton {
            font-size: calc(var(--sz) * 0.85rem);
            line-height: 0.75rem;
            color: #fff;
            font-weight: bold;
            background: linear-gradient(to right,#30182d 0,#0f2c4c 100%);
          }

          .watchedButton {
            background: #000;
          }

          .weydButton {
            background: #2d2e2e;
          }

          .wowButton {
            background: #fff;
          }

          .xciptvButton {
            background: #00cafd;
            color: #084192;
            font-weight: bold;
          }
          .chromecast-remote-body .xciptvButton {
            font-size: calc(var(--sz) * .9rem);
          }

          .xfinityStreamButton {
            font-size: calc(var(--sz) * 0.7rem);
            color: #fff;
            font-weight: bold;
            background: linear-gradient(150deg, rgba(59,48,173,1) 0%, rgba(101,168,250,1) 100%);
          }

          .youtubeButton {
            background: #fff;
          }
          .shield-remote-body .youtubeButton svg {
            width: calc(var(--sz) * 5.75rem);
          }

          .youtubekidsButton {
            background: #fff;
          }
          .youtubekidsButton svg {
            width: calc(var(--sz) * 4.5rem);
            height: calc(var(--sz) * 1.6rem);
          }

          .youtubeTVButton {
            background: #fff;
          }

          .zattooButton {
            background: #fff;
          }
          .zattooButton svg {
            margin-top: calc(var(--sz) * -0.2rem);
          }

          .zdfMediathekButton {
            background: #34393f;
          }

          .ziggoGoButton {
            background: #1a1a1a;
          }

          .functionAppSwitchButton, .functionFindRemoteButton, .functionMuteButton, .functionRebootButton, .functionKeyboardButton, .functionMenuButton, .functionSettingsButton {
            color: #ff0000;
            font-weight: bold;
            background: #000;
            border: solid calc(var(--sz) * 0.1rem) #850000;
            display: block;
          }

          .functionAppleSettingsButton {
            background: linear-gradient(0deg, rgba(143,143,148,1) 0%, rgba(228,228,233,1) 100%);
            border: solid #838383 calc(var(--sz) * 0.05rem) !important;
          }

          .functionKeyboardButton {
            display: inherit;
          }

          .functionAppSwitchButton > ha-icon, .functionFindRemoteButton > ha-icon, .functionMuteButton > ha-icon, .functionRebootButton > ha-icon, .functionSettingsButton > ha-icon {
            display: none;
          }

          .functionAppSwitchButton:active, .functionFindRemoteButton:active, .functionMuteButton:active, .functionRebootButton:active, .functionSettingsButton:active {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%) !important;
          }

          .shield-remote-body .functionAppSwitchButton, .shield-remote-body .functionFindRemoteButton, .shield-remote-body .functionMuteButton, 
          .shield-remote-body .functionMuteButton, .shield-remote-body .functionRebootButton, .shield-remote-body .functionSettingsButton {
            color: rgb(153, 231, 0);
            border: solid calc(var(--sz) * 0.1rem) #456800;
          }

          .functionFindRemoteButton {
            font-size: calc(var(--sz) * .75rem);
          }
          .shield-remote-body .functionFindRemoteButton {
            font-size: calc(var(--sz) * .75rem);
            --mdc-icon-size: calc(var(--sz) * 1.4rem);
          }

          .functionMuteButton {
            font-size: calc(var(--sz) * 1rem);
          }
          .shield-remote-body .functionMuteButton {
            font-size: calc(var(--sz) * 1.2rem);
            --mdc-icon-size: calc(var(--sz) * 1.6rem);
          }

          .functionRebootButton {
            font-size: calc(var(--sz) * 1rem);
          }
          .shield-remote-body .functionRebootButton {
            font-size: calc(var(--sz) * 1rem);
            --mdc-icon-size: calc(var(--sz) * 1.6rem);
          }
          .chromecast-remote-body .functionRebootButton {
            font-size: calc(var(--sz) * 0.95rem);
            background: #fff;
          }

          .functionAppSwitchButton {
            font-size: calc(var(--sz) * .75rem);
          }
          .apple-remote-body .functionAppSwitchButton {
            background: rgb(33, 33, 33);
            color: rgb(198, 198, 198);
            font-size: calc(var(--sz) * .9rem);
            text-wrap: wrap;
          }
          .shield-remote-body .functionAppSwitchButton {
            font-size: calc(var(--sz) * 0.86rem);
            --mdc-icon-size: calc(var(--sz) * 1.5rem);
          }
          .chromecast-remote-body .functionAppSwitchButton {
            font-size: calc(var(--sz) * 0.55rem);
            background: #fff;
          }

          .functionSettingsButton {
            font-size: calc(var(--sz) * .75rem);
          }
          .shield-remote-body .functionSettingsButton {
            font-size: calc(var(--sz) * 0.86rem);
            --mdc-icon-size: calc(var(--sz) * 1.5rem);
          }
          .chromecast-remote-body .functionSettingsButton {
            font-size: calc(var(--sz) * 0.7rem);
            background: #fff;
          }

          .functionControlCenterButton {
            background: rgb(215 215 215);
            border: solid #838383 calc(var(--sz) * 0.05rem) !important;
          }

          .remote-logo {
            grid-column-start: 1;
            grid-column-end: 4;
            padding: calc(var(--sz) * 2.5rem) calc(var(--sz) * 2.357rem) 0 calc(var(--sz) * 2.357rem);
            width: calc(var(--sz) * 7.5714rem);
          }

          .AF6 .remote-logo {
            padding: calc(var(--sz) * .75rem) calc(var(--sz) * 2.357rem) 0 calc(var(--sz) * 2.357rem);
          }

          .miLogo {
            align-self: flex-end;
            width: calc(var(--sz) * 2.75rem);
            padding-bottom: calc(var(--sz) * 1.3rem)
          }

          .ns1-body #keyboard-button {
            margin-top: calc(var(--sz) * 1rem);
            height: calc(var(--sz) * 5rem);
            width: calc(var(--sz) * 5rem);
            --mdc-icon-size: 34px;
          }

          .ns1-body .remote-button:active {
            border: solid #395600 0.0714rem;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.0714rem) rgb(153 231 0 / 20%);
          }

          .ns1-body .remote-button:active > ha-icon {
            color: #99e700 !important;
          }

          .litbutton {
              border: solid #4b4c3c 0.0714rem;
              box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.0714rem) rgb(255 255 25 / 15%);
          }
          .litbutton > ha-icon {
            color: yellow !important;
          }

          .shield-remote-body .litbutton {
              border: solid #500101 0.0714rem;
              box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.0714rem) rgb(255 25 25 / 15%);
          }

          .shield-remote-body .litbutton > ha-icon {
            color: red !important;
          }

          .XM2 .litbutton {
              border: solid #5c2b00 0.0714rem;
              box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.0714rem) rgb(229 124 58 / 31%);
          }

          .XM2 .litbutton > ha-icon {
            color: #ff7700 !important;
          }


          .chromecast-remote-body .litbutton, .chromecast-remote-body .appActive {
              position: relative;
              z-index: 2;
          }

          .chromecast-remote-body .appActive {
            border: transparent;
          }

          .chromecast-remote-body .litbutton::before, .chromecast-remote-body .appActive::before {
            content: "";
            position: absolute;
            z-index: -1;
            inset: 0.25rem;
            background: conic-gradient(from 0deg, rgba(66,133,244,1) 0%, rgba(219,68,55,1) 25%, rgba(244,180,0,1) 50%, rgba(15,157,88,1) 75%, rgba(66,133,244,1) 100%);
            filter: blur(0.3rem) contrast(3);
            transition: opacity 0.3s ease 0s;
            border-radius: inherit;
            animation: spin 7s linear infinite;
          }

          .chromecast-remote-body .appActive::before {
            inset: -0.25rem;
            filter: contrast(3);
          }

          @keyframes spin {
            0 {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .chromecast-remote-body .litbutton::after, .chromecast-remote-body .appActive::after {
              content: "";
              z-index: -1;
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background: inherit;
              border-radius: inherit;
              inset: 0.15rem;
          }

          .chromecast-remote-body .litbutton > ha-icon {
            color: #d70000 !important;
          }

          .apple-remote-body .litbutton {
              background: rgb(255 255 255 / 25%) !important;
              border: 0.01rem solid gray !important;
              box-shadow: none;
          }

          .apple-remote-body .litbutton > ha-icon {
              color: rgb(33, 33, 33) !important;
          }

          .shield-remote-body.ns1-body .litbutton {
              border: solid #395600 0.0714rem;
              box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.0714rem) rgb(153 231 0 / 20%);
          }

          .shield-remote-body.ns1-body .litbutton > ha-icon {
            color: #99e700 !important;
          }

          .dimlitbutton {
              border: solid #34342b calc(var(--sz) * 0.0714rem);
              box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.0714rem) rgb(255 255 116 / 15%);
          }
          .dimlitbutton > ha-icon {
            color: #e5e59a !important;
          }

          .apple-remote-body .dimlitbutton {
              border: 0.01rem solid gray !important;
              background: none !important;
              box-shadow: none;
          }

          .apple-remote-body .dimlitbutton > ha-icon {
              color: rgb(33, 33, 33) !important;
          }

          .shield-remote-body .dimlitbutton {
              border: solid #3c1818 0.0714rem;
              box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.0714rem) rgb(255 25 25 / 11%);
          }

          .shield-remote-body .dimlitbutton > ha-icon {
            color: #ff7575 !important;
          }

          .XM2 .dimlitbutton {
              border: solid #463327 0.0714rem;
              box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.0714rem) rgb(255 143 36 / 21%);
          }

          .XM2 .dimlitbutton > ha-icon {
            color: #b36d41 !important;
          }

          ha-icon {
            pointer-events: none;
            transform: scale(var(--sz));
          }
 
          .eightygap {
            height: calc(var(--sz) * 5.7143rem);
          }
  `;

    getState() {
      if(this._config.android_tv_remote_entity == '' || typeof this._config.android_tv_remote_entity == 'undefined' || this._config.device_family == 'amazon-fire' ) {
        return this.hass.states[this._config.entity];
      }
      else {
        return this.hass.states[this._config.android_tv_remote_entity];
      }
    }

    getOpenAppID() {
      if(this._config.android_tv_remote_entity == '' || typeof this._config.android_tv_remote_entity == 'undefined' || this._config.device_family == 'amazon-fire' ) {
        return this.hass.states[this._config.entity].attributes.app_id;
      }
      else {
        if(this.getState().state == 'on') {
          return this.hass.states[this._config.android_tv_remote_entity].attributes.current_activity;
        }
      }
    }


   render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      return html` <ha-card>Unknown entity: ${this._config.entity}</ha-card> `;
    }
    const entityId = this._config.entity;
    const state = this.getState();
    const stateStr = state ? state.state : 'off';
    const appId = this.getOpenAppID();
    const deviceType = this._config.device_type;
    const scale = (parseInt(this._config.scale) || 100)/100;
    var launcherscaleoffset = 0;
    if (this._config.app_launcher_relative_size) { launcherscaleoffset = (parseInt(this._config.app_launcher_relative_size) || 100)/100 };
    const launcherscale = scale + launcherscaleoffset;
    const overrides = this._config.button_overrides;
    var buttonHidingCss = '';
    if(overrides && typeof overrides === 'object') {
      for (let [key, value] of Object.entries(overrides)) {
        if(value && typeof value === 'object') {
          for (let [action, actionvalue] of Object.entries(value)) {
            if(action == 'hidden' && actionvalue == true) {
              buttonHidingCss += '#'+key+' { opacity: 0; pointer-events: none; } ';
            }
          }
        }
      }
    }
    var AppLaunchButtonFilterCssValue = 'grayscale(25%) brightness(58%)';
    if(this._config.device_family == 'apple-tv') {
      AppLaunchButtonFilterCssValue = 'none !important';
    }
    const devicenamecolor = this._config.visible_name_text_color || '#000000';
    var backgroundInherit = '';
    //if (this._config.use_theme_background == true) { backgroundInherit = 'background: inherit !important; border: inherit !important; border-radius: inherit !important;';}
    if (this._config.use_theme_background == true) { backgroundInherit = 'background: var(--ha-card-background,var(--card-background-color,#fff))!important; border: inherit !important; border-radius: inherit !important;';}
    const cssVars = html `<style>
                            :host {
                              --sz: ${scale};
                              --devicenamecolor: ${devicenamecolor};
                              --appButtonFilter: ${AppLaunchButtonFilterCssValue};
                            }
                            ${buttonHidingCss}
                            .AL1, .AL2 {
                              --sz: calc(${scale} * 2);
                              ${backgroundInherit}
                            }
                            .AL2 .appLauncherAppsContainer {
                              --sz: calc(${launcherscale} * 2);
                            }
                            .CC1 {
                              --sz: calc(${scale} * 1.2);
                            }
                            .ALControlsContainer{
                              --sz: calc(${scale} * 1.5);
                            }
                          </style>`;

    // Handle standard button highlight/lit states
    var powerStatusClass = ''
    var homeStatusClass = '';
    var playingStatusClass = '';
    if ((this._config.hide_button_highlights != true)) {

        // Determine Power On/Off Status
        if(stateStr != 'off' && stateStr != 'unavailable') {
          powerStatusClass = ' litbutton';
        }
        if(stateStr == 'standby') {
          powerStatusClass = ' dimlitbutton';
        }
    
        // Determine Home Status
        if(appId == 'com.amazon.tv.launcher' || appId == 'com.google.android.tvlauncher' || appId == 'com.google.android.apps.tv.launcherx') {
          homeStatusClass = ' litbutton';
        }
    
        // Determine Play/Pause
        var alwaysRegisterdAsPlaying = ['com.amazon.firebat', 'com.android.systemui', 'com.android.vending', 'com.android.tv.settings',
                                        'com.nvidia.shieldtech.accessoryui', 'com.esaba.downloader', 'com.amazon.venezia'];
        if(stateStr == 'playing' && !(alwaysRegisterdAsPlaying.includes(appId))) {
          playingStatusClass = ' litbutton';
        }
    }

    // Get current device's Attributes AND use any applicable overrides from user conf
    var confRef = this._config;
    function getDeviceAttribute(deviceAttribute){
      return deviceAttributeQuery(deviceAttribute, confRef);
    }

    // allow hdmi inputs where appropriate
    handlehdmi(this._config, getDeviceAttribute('hdmiInputs'))

    // get app button details from appmap json
    function getAppButtonData(config, configvalue, want) {
      if(appmap.has(configvalue)) {
        var deviceFamily = config["device_family"];
        var familySpecificAppData = appmap.get(configvalue)[deviceFamily];
        if(want=="active") {
          if (typeof appId != 'string') { return };
          if(familySpecificAppData && !(appmap.get(configvalue).androidName) && !(appmap.get(configvalue).androidName2)) {
            return (appId == familySpecificAppData["androidName"] || appId == familySpecificAppData["androidName2"]) ? "appActive" : "";
          }
          else {
            return (appId == appmap.get(configvalue).androidName || appId == appmap.get(configvalue).androidName2) ? "appActive" : "";
          }
        }
        else {
          if (appmap.get(configvalue)[want]) {
            return appmap.get(configvalue)[want];
          }
          else if(familySpecificAppData) {
            return familySpecificAppData[want];
          }
        }
      }
      else {
        return ' ';
      }
    }


    function drawAppLaunchButtons(e, config, cols=3, max=6) {
        var spanclass = "three-col-span afappsgrid";
        if(cols == 2) {
          spanclass = "two-col-span nsappsgrid";
        }
        if(cols == 'fill') {
          spanclass = "appLauncherAppsContainer";
        }
        function showHide(buttonKey) {
          if (buttonKey === '') {
            return 'hidden';
          }
        }
        var buttonStyle = 'button';
        const appLaunchButtons = new Map();
        for(let i=1; i<=max; i++) {
          var appid = config["app_launch_"+i] || '';
          appLaunchButtons.set("confBtn"+i, appid);
        }
        if(config.defaultRemoteStyle_override == 'NS1' || config.defaultRemoteStyle_override == 'NS2' ||
           config.device_type == 'shield-tv-pro-2019' || config.device_type == 'shield-tv-2019') {
             appLaunchButtons.set("confBtn1", config.app_launch_1 || 'netflix');
        }
        else if(config.defaultRemoteStyle_override == 'XM2' || config.device_type == 'mi-box-s') {
          appLaunchButtons.set("confBtn1", config.app_launch_1 || 'netflix');
          appLaunchButtons.set("confBtn2", config.app_launch_2 || 'prime-video');
        }
        else if (config.defaultRemoteStyle_override == 'CC1' || ((config.device_type == 'chromecast-4k' || config.device_type == 'chromecast-hd') && !(config.defaultRemoteStyle_override))) {
          appLaunchButtons.set("confBtn1", config.app_launch_1 || 'youtube');
          appLaunchButtons.set("confBtn2", config.app_launch_2 || 'netflix');
          buttonStyle = 'button-round';
        }
        else if (config.defaultRemoteStyle_override == 'AR1' || config.defaultRemoteStyle_override == 'AR2' || config.defaultRemoteStyle_override == 'AR3' || 
                (((config.device_type == 'appletv-4k-gen2' || config.device_type == 'appletv-gen4')) && !(config.defaultRemoteStyle_override))) {
          // no default app launch buttons
          buttonStyle = 'button-round';
        }
        else {
          appLaunchButtons.set("confBtn1", config.app_launch_1 || 'prime-video');
          appLaunchButtons.set("confBtn2", config.app_launch_2 || 'netflix');
          appLaunchButtons.set("confBtn3", config.app_launch_3 || 'disney-plus');
          appLaunchButtons.set("confBtn4", config.app_launch_4 || 'hulu');
        }
        if(config.defaultRemoteStyle_override == 'CC1' || config.defaultRemoteStyle_override == 'AR1'|| config.defaultRemoteStyle_override == 'AR2' || config.defaultRemoteStyle_override == 'AR3' || ((config.device_type == 'chromecast-4k' || config.device_type == 'chromecast-hd' || config.device_type == 'appletv-gen4' || config.device_type == 'appletv-4k-gen2') && !(config.defaultRemoteStyle_override))) {
          return html `
            ${ Array.from(appLaunchButtons.keys()).map(key => {
              var val = appLaunchButtons.get(key);
              if(val) {
                  return html `<button class="srcButton ${getAppButtonData(config, val, 'className')} ${getAppButtonData(config, val, 'active')} ${showHide(val)}" id="${val}-button" @click=${e.buttonClicked}>
                                 ${unsafeHTML(getAppButtonData(config, val, buttonStyle) || getAppButtonData(config, val, 'button'))}
                               </button>`;
              }
            })}
          `;
        }
        else {
          return html `
            <div class="${spanclass}">
            ${ Array.from(appLaunchButtons.keys()).map(key => {
              var val = appLaunchButtons.get(key);
              return html `<button class="srcButton ${getAppButtonData(config, val, 'className')} ${getAppButtonData(config, val, 'active')} ${showHide(val)}" id="${val}-button" @click=${e.buttonClicked}>
                             ${unsafeHTML(getAppButtonData(config, val, 'button'))}
                           </button>`;
  
            })}
            </div>
          `;
        }
    }

    // Draw optional device name
    function drawDeviceName(e, config, section){
      if(!config.visible_name_text) { return };
      if(config.name_position=='bottom' && section=='bottom') {
        return html`<div class="deviceNameBottom">${config.visible_name_text}</div>`;
      }
      else if(config.name_position=='top' && section=='top') {
        return html`<div class="deviceNameTop">${config.visible_name_text}</div>`;
      }
      return;
    }

    // Draw optional Firemote Version number
    function drawFiremoteVersionNumber(e, config){
      if(config.show_version_number === true) {
        return html ` <div class="firemoteVersionNumber">${HAFiremoteVersion}</div>`;
      }
    }


    // Reused SVG Logos
    function renderfiretvlogo() {
      return html`
          <!-- <div class="three-col-span">Remote name</div> -->
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          	 viewBox="0 0 1276 712" style="enable-background:new 0 0 1276 712;" xml:space="preserve" class="remote-logo">
            <style type="text/css">
            	.st0{fill:#0f0f0f;}
            </style>
           <g id="Layer_7">
          	<path class="st0" d="M168.6,30.3c0.3,0.6,0.8,0.5,1.3,0.5c10,0.7,19.9,2.4,29.6,5c1.2,0.3,2.3,0.7,3.4,1.2c3.5,1.5,5.8,4,6.2,7.9
          		c0.2,1.7,0.5,3.4,0.5,5.1c0.1,4.7,0.1,9.5,0,14.2c0,1.4-0.2,2.8-0.6,4.2c-0.5,2.9-3.1,5-6,4.9c-2,0.1-4,0-6-0.2
          		c-4-0.5-7.9-1.3-11.9-1.8c-7.1-1-14.2-1.2-21.3-0.6c-4.3,0.3-8.6,1-12.8,2.1c-2.4,0.7-4.8,1.6-7,2.7c-5.8,2.9-9.4,7.7-11.6,13.7
          		c-1.4,4-2.2,8.1-2.5,12.3c-0.4,4.8-0.3,9.6-0.3,14.5c0,11.3,0,22.5,0,33.8v3.2c0.7,0.2,1.4,0.3,2.1,0.3c4.1,0,8.2,0,12.4,0h51.3
          		c1.2,0,2.4,0,3.6,0.1c4.7,0.4,7.2,3.6,7.6,7.9c0,0.6,0,1.2,0,1.8c0,6.3,0,12.7,0,19c0.1,0.9,0,1.8-0.1,2.7c-1,4.9-3.6,6.5-7.8,7.2
          		c-1.1,0.1-2.2,0.2-3.3,0.1h-62.2h-3.3c-0.1,0.5-0.3,1.1-0.3,1.6c0,0.9,0,1.8,0,2.7c0,65.7,0,131.3,0,197c0,1.3,0,2.6-0.1,3.9
          		c-0.4,4.4-3.1,7.2-7.5,7.7c-0.6,0.1-1.2,0.1-1.8,0.1c-10.2,0-20.3,0-30.5,0c-1.3,0-2.6-0.2-3.8-0.6c-3.3-1.1-5-3.6-5.4-6.9
          		c-0.1-1.3-0.1-2.6-0.1-3.9c0-65.9,0-131.8,0-197.7v-3.8c-1-0.1-1.9-0.2-2.8-0.2c-11.2,0-22.3,0-33.5,0c-1.4,0-2.8-0.2-4.2-0.5
          		c-3.2-0.6-5.6-3.2-6-6.4c-0.1-0.3-0.1-0.6-0.2-0.9c0.1-0.4,0.1-0.8,0.2-1.2c0-4.1,0-8.2-0.1-12.3c0-1.2-0.1-2.4-0.1-3.6
          		c0.5-4.5,3.1-7,7.5-7.9c1.8-0.4,3.5-0.8,5.3-1c4-0.5,8-0.9,12-1.4c6.3-0.8,12.5-1.6,18.8-2.4c1-0.1,1.9-0.4,3.1-0.6v-3.1
          		c0-12.4,0-24.7,0-37.1c-0.1-8,0.5-16.1,1.9-24c1.2-7.6,3.5-15.1,6.7-22.1c3.9-8.5,9.7-16,17-21.8c9.6-7.6,20.7-11.7,32.7-13.7
          		c3.7-0.7,7.5-1.2,11.3-1.4c0.4-0.1,0.7-0.2,1-0.5H168.6z"/>
          	<path class="st0" d="M573.7,678c0-0.2,0-0.4-0.1-0.5c1.5,0,3-0.1,4.5-0.1h97.7c1.4,0,2.8,0.1,4.2,0.1c0,0.2-0.1,0.3-0.1,0.5
          		L573.7,678z"/>
          	<path class="st0" d="M32.7,167.3l0.9-0.1c0,1.2,0.1,2.4,0.1,3.6c0,4.1,0,8.2,0.1,12.3c0,0.4-0.1,0.8-0.2,1.2l-0.9-0.1V167.3z"/>
          	<path class="st0" d="M680,677.4c-1.4,0-2.8-0.1-4.2-0.1h-97.7c-1.5,0-3,0-4.5,0.1c-4.5-0.3-9-0.7-13.5-1.1
          		c-2.4-0.2-4.8-0.5-7.2-0.7c-8.1-0.8-16.2-1.9-24.2-3c-12.6-1.7-25.2-3.8-37.7-6.3c-9.3-1.8-18.7-3.9-27.9-6.1
          		c-17-4-33.8-8.7-50.4-14.1c-15.3-4.9-30.4-10.4-45.3-16.3c-14.9-6-29.6-12.4-44.1-19.5c-32.2-15.6-63.2-33.6-92.6-54
          		c-14-9.7-27.6-19.9-40.8-30.6c-9.3-7.5-18.4-15.3-27.3-23.3c-1.2-1.1-2.3-2.2-3.4-3.4c-1.4-1.7-2.2-3.9-2.2-6.1
          		c0-3.9,2.9-7.2,6.8-7.6c2.4-0.3,4.9,0.1,7,1.3c2.7,1.4,5.2,3,7.9,4.4c8.6,4.7,17.2,9.6,25.9,14.1s17.3,8.9,26.1,13.2
          		c14.4,7,28.9,13.5,43.7,19.7c15,6.3,30.2,12.2,45.5,17.7c17,6.1,34.2,11.7,51.5,16.8c16.8,5,33.8,9.5,50.9,13.5
          		c14.8,3.5,29.6,6.7,44.5,9.3c9.5,1.7,19,3.3,28.5,4.8c7.7,1.2,15.5,2.4,23.2,3.4c6,0.8,12,1.4,18,2c4.8,0.5,9.6,1.1,14.4,1.6
          		c2.8,0.3,5.6,0.5,8.4,0.7c4.3,0.4,8.6,0.8,12.9,1.1c4.6,0.3,9.2,0.6,13.8,0.8c6.6,0.4,13.2,0.7,19.9,1c3.1,0.1,6.2,0.1,9.3,0.2
          		c3.5,0,7,0.1,10.6,0.1c6,0.1,12.1,0.3,18.1,0.3c9.1-0.1,18.3-0.3,27.4-0.6c4.1-0.1,8.2-0.3,12.3-0.6c7.5-0.5,15-1,22.5-1.6
          		c3.6-0.3,7.2-0.5,10.8-0.8c5.1-0.5,10.2-1.1,15.3-1.6c2.2-0.2,4.4-0.4,6.6-0.7c4.6-0.5,9.2-1.1,13.7-1.7c3.8-0.5,7.6-0.9,11.4-1.4
          		c3.2-0.4,6.4-0.9,9.5-1.4c5.6-0.9,11.1-1.8,16.6-2.7c5.1-0.9,10.3-1.7,15.4-2.7c8.5-1.6,16.9-3.4,25.4-5.2
          		c7.2-1.5,14.3-3.2,21.4-4.8c16.6-3.9,33.1-8.4,49.4-13.3c28.7-8.5,56.9-18.5,84.6-29.8c3.3-1.4,6.7-2.8,10-4.2
          		c2.8-1.2,5.8-1.8,8.8-1.6c4.7,0.3,8.8,2.1,11.6,6.1c3.2,4.5,3,9.2,0.4,13.9c-1.5,2.4-3.4,4.5-5.8,6.1c-9.7,7.2-19.7,13.9-29.9,20.3
          		c-12.5,7.8-25.4,15.1-38.6,21.8c-18.5,9.5-37.5,18-56.8,25.6c-12.1,4.8-24.4,9.2-36.8,13.2c-16.4,5.3-33,10.1-49.7,14.3
          		c-11.3,2.8-22.6,5.4-34.1,7.7c-8.3,1.7-16.6,3-24.9,4.4c-5.9,1-11.9,2-17.8,2.8c-5.5,0.8-11,1.4-16.4,2c-4.6,0.6-9.2,1.1-13.8,1.6
          		C688.3,676.9,684.2,677.2,680,677.4z"/>
          	<path class="st0" d="M564.2,290c0.2,3.7,0.2,7.2,0.5,10.7c0.4,4.1,1,8.2,1.7,12.2c2,11.2,5.5,21.8,11.8,31.3
          		c6.1,9.2,14.7,16.5,24.8,20.9c6.8,3,14,5.1,21.3,6.3c9.2,1.5,18.6,2.1,27.9,1.8c4.7-0.1,9.4-0.3,14.1-0.8
          		c8.7-0.7,17.3-2.2,25.8-4.4c7.8-2.1,15.7-4.4,23.5-6.6c1.9-0.6,3.9-0.9,5.9-1c2.5,0,4.7,1.6,5.4,4c0.4,1,0.6,2.1,0.6,3.2
          		c0.1,6.2,0.1,12.5,0,18.7c0.1,3.9-2,7.6-5.5,9.4c-3.6,2-7.3,3.8-11.2,5.1c-9.6,3.4-19.5,6.1-29.6,8c-6.3,1.2-12.7,2.1-19,2.8
          		c-3.7,0.4-7.4,0.6-11.1,0.8c-3,0.2-6,0.4-9,0.4c-8.5,0-17.1-0.4-25.5-1.5c-10.6-1.2-21-3.7-31-7.3c-15.4-5.5-29.1-14.9-39.9-27.2
          		c-7.9-9.2-14.1-19.6-18.4-30.9c-3.7-9.5-6.4-19.5-8-29.6c-1.2-7.3-2-14.7-2.5-22.1c-0.5-8.8-0.6-17.7-0.2-26.5
          		c0.2-6.2,0.8-12.4,1.7-18.6c2.4-16.8,6.9-33,15.1-48c9.4-17.2,22.4-31,39.6-40.8c9.1-5.1,18.9-8.8,29.2-11.1
          		c7.2-1.6,14.6-2.6,22-3.1c6.1-0.4,12.2-0.5,18.4-0.2c8.9,0.3,17.8,1.7,26.4,4c13.3,3.6,25.2,9.7,35.4,19.1
          		c6.2,5.7,11.4,12.4,15.6,19.8c5.2,9.4,8.8,19.6,10.7,30.2c2.1,11.1,2.9,22.3,2.4,33.6c-0.2,4.7-0.3,9.4-0.7,14.1
          		c-0.3,5.4-1.1,10.8-2.2,16.1c-1.3,5.3-3.4,6.9-8.9,7.2c-1.1,0-2.2,0-3.3,0H567.6C566.5,289.9,565.4,290,564.2,290z M687.7,256.8
          		c0.2-2.4,0.5-4.5,0.5-6.6c0.3-7.1-0.1-14.3-1-21.3c-0.9-6.5-2.7-12.8-5.4-18.7c-5.2-11.4-15-20.1-26.9-23.8
          		c-6.5-2-13.3-3.1-20.1-3.3c-3.4-0.1-6.8,0-10.2,0.4c-5,0.4-9.9,1.3-14.8,2.6c-13.1,3.6-24.5,12-31.9,23.4c-4.4,7-7.7,14.6-9.8,22.5
          		c-1.5,6-2.7,12.1-3.4,18.3c-0.1,1-0.2,2-0.2,3c0,1.1-0.4,2.2,0.1,3.2c0.3,0.1,0.6,0.2,0.9,0.2L687.7,256.8z"/>
          	<path class="st0" d="M847.4,192.2c-1.3,0-2.3-0.1-3.3-0.1c-10.6,0-21.1,0-31.7,0c-1.5,0-3-0.2-4.5-0.5c-3.5-0.8-5.4-3.3-6-6.8
          		c-0.1-0.9-0.2-1.8-0.2-2.7c0-4.2,0-8.4,0-12.7c0-0.7,0-1.4,0.1-2.1c0.4-3.6,2.1-6.3,5.7-7.3c2-0.6,4.1-1.1,6.1-1.5
          		c4-0.6,8-0.9,12-1.4c4.2-0.5,8.4-1.1,12.5-1.6c2.2-0.3,4.4-0.5,6.6-0.8c1.3-0.2,2.6-0.4,4-0.6c0.2-1.5,0.5-2.8,0.7-4.2
          		c0.5-4.8,0.9-9.6,1.4-14.4s1.1-9.4,1.6-14.1c0.3-2.7,0.5-5.4,0.8-8.1c0.5-4.9,1.1-9.8,1.6-14.7c0.3-2.4,0.5-4.8,0.7-7.2
          		c0.2-1.5,0.6-3,1.4-4.3c1.2-2.4,3.5-4,6.2-4.3c1.8-0.3,3.6-0.4,5.4-0.4c4.6-0.1,9.3-0.1,13.9,0c2.2,0,4.4,0.1,6.6,0.3
          		c4.5,0.4,7.3,3.3,7.7,7.8c0.1,1,0.1,2,0.1,3v55.8c0,1.1,0.1,2.2,0.1,3.3c1.1,0.3,2.2,0.4,3.4,0.3c19.7,0,39.4,0,59.2,0
          		c1.6,0,3.2,0.1,4.8,0.3c3.5,0.4,6.3,3.1,6.8,6.6c0.2,1.1,0.3,2.2,0.4,3.3c0,6.2,0,12.5,0,18.7c0,1.4-0.2,2.8-0.6,4.2
          		c-0.6,2.8-2.9,5-5.8,5.5c-1.6,0.3-3.2,0.4-4.8,0.5c-19.9,0-39.9,0-59.8,0H897c-0.1,0.7-0.2,1.2-0.3,1.8s0,1.2,0,1.8
          		c0,46.6,0,93.2,0,139.7c-0.1,4.9,0.5,9.8,1.8,14.6c1.3,4.5,3.3,8.6,7,11.8c3,2.5,6.6,4.3,10.4,5.2c6.7,1.7,13.7,2.3,20.6,1.9
          		c7.8-0.5,15.6-1.5,23.3-3.1c1.7-0.3,3.4-0.6,5.1-0.8c1.4-0.2,2.8-0.1,4.2,0.3c1.7,0.4,3.1,1.7,3.5,3.4c0.4,1.3,0.7,2.7,0.7,4.1
          		c0.1,5.7,0.1,11.5,0,17.2c-0.1,1.7-0.3,3.4-0.8,5c-0.5,2.2-1.9,4.1-3.8,5.2c-1.6,1-3.4,1.8-5.2,2.4c-4.9,1.6-9.8,2.8-14.9,3.6
          		c-5.7,1-11.5,1.6-17.3,2c-6.2,0.5-12.5,0.6-18.7,0.3c-11-0.5-21.8-2.2-31.9-6.8c-12.1-5.3-21.7-15.1-26.8-27.3
          		c-3-7-4.9-14.5-5.7-22.1c-0.7-6.2-1-12.4-0.9-18.6c0-45.9,0-91.7,0-137.6L847.4,192.2z"/>
          	<path class="st0" d="M1120.6,359.9c1.1-3.1,2-5.5,2.9-7.9c6.3-18,12.6-36,18.9-54c7.9-22.4,15.7-44.9,23.6-67.3
          		c5.2-14.7,10.3-29.3,15.5-44c2.4-6.8,4.8-13.6,7.2-20.4c1-2.6,2.1-5.2,3.4-7.7c1.5-2.9,4.4-4.8,7.7-5c2.3-0.2,4.6-0.4,6.9-0.4
          		c8.2-0.1,16.3-0.1,24.4,0c1.5,0,3,0.1,4.5,0.4c2.8,0.5,4.3,2.3,4.4,5.2c0.1,2.4-0.3,4.8-1.2,7c-9.1,22.8-18.1,45.5-27,68.3
          		c-9.2,23.3-18.4,46.7-27.7,70c-6.4,16.1-12.7,32.1-19.1,48.1c-5.6,14.1-11.2,28.2-16.8,42.3c-0.5,1.3-1.2,2.5-1.8,3.8
          		c-1.9,4.4-5.5,6.5-10.2,6.8c-0.8,0.1-1.6,0.1-2.4,0.1c-9.9,0-19.7,0-29.6-0.1c-1.4-0.1-2.8-0.3-4.2-0.6c-2.8-0.4-5.3-2.2-6.6-4.8
          		c-1-1.9-2-3.7-2.8-5.7c-14.7-36.6-29.3-73.3-43.8-109.9c-8.6-21.6-17.2-43.3-25.8-64.9c-6.2-15.7-12.5-31.3-18.7-47
          		c-1-2.6-2-5.2-3-7.9c-0.7-1.7-1-3.5-0.9-5.3c0.2-3.2,1.7-5.1,4.8-5.7c1.2-0.2,2.4-0.4,3.6-0.4c9.5,0,18.9,0,28.4,0c2,0,4,0.2,6,0.5
          		c3.1,0.2,5.8,2,7.3,4.7c1.1,2,2.1,4.1,3,6.2c2.5,6.9,4.9,13.8,7.4,20.7l19.9,56.9l23.6,67l17.1,48.5
          		C1119.9,358.1,1120.1,358.6,1120.6,359.9z"/>
          	<path class="st0" d="M412.5,219.5v3.8c0,56.7,0,113.4,0,170.2c0.1,1.9-0.1,3.8-0.5,5.7c-1,3.5-3.4,5.3-6.8,6c-1,0.2-2,0.2-3,0.2
          		h-29c-1.6,0-3.2-0.2-4.7-0.7c-2.3-0.8-4.1-2.6-4.8-5c-0.4-1.4-0.6-2.7-0.6-4.2c-0.1-2.1,0-4.2,0-6.3c0-74.9,0-149.9,0-224.8
          		c-0.1-1.7,0.1-3.4,0.5-5.1c0.5-2.5,2.4-4.5,4.9-5.2c1.6-0.5,3.3-0.8,5-0.8c7-0.1,14.1-0.1,21.1,0c1.5,0,3,0.2,4.5,0.5
          		c3.3,0.6,5.9,3.1,6.6,6.3c0.5,2.1,0.9,4.3,1.2,6.5c0.6,4.4,1.1,8.8,1.7,13.1c0.3,2.4,0.5,4.8,0.8,7.2c0.1,1,0.3,1.9,0.5,3.2
          		c1.4-1.1,2.7-2.4,3.9-3.7c8.8-8.9,18-17.2,28.9-23.5c8.3-4.8,17.3-8.2,26.7-9.9c8-1.4,16.2-1.9,24.3-1.5c1.7,0.1,3.4,0.2,5.1,0.4
          		c1.2,0.2,2.4,0.4,3.5,0.9c2.8,1,4.8,3.6,4.9,6.7c0.1,0.8,0.1,1.6,0.1,2.4c0,8.3,0,16.7,0,25c0.1,1.7-0.1,3.4-0.6,5.1
          		c-0.7,2.2-2.4,3.8-4.6,4.3c-1.6,0.4-3.3,0.6-5,0.5c-7.3-0.3-14.6-1.2-22-0.9c-12.9,0.5-25.5,3.2-37.4,8.2
          		c-8.5,3.6-16.5,8.4-23.6,14.2C413.5,218.5,413.1,218.9,412.5,219.5z"/>
          	<path class="st0" d="M298.4,279.2c0,38.4,0,76.8,0,115.2c0,1.5-0.1,3-0.4,4.5c-0.9,4-3.8,5.7-7.2,6.2c-0.8,0.1-1.6,0.1-2.4,0.1
          		c-9.7,0-19.3,0-29,0c-1.5,0-3-0.2-4.5-0.6c-2.7-0.6-4.8-2.8-5.3-5.6c-0.3-1.5-0.5-3-0.6-4.5c0-0.5,0-1,0-1.5
          		c0-75.9,0-151.9,0-227.8c-0.1-1.9,0.1-3.8,0.5-5.7c0.6-3.2,3.2-5.6,6.3-6.1c1.5-0.3,3-0.4,4.5-0.4c9.1,0,18.1,0,27.2,0
          		c1.3,0,2.6,0.1,3.9,0.4c4.9,0.9,6.5,3.9,7,7.5c0.1,1.1,0.1,2.2,0.1,3.3L298.4,279.2z"/>
          	<path class="st0" d="M1036.1,466.5c6.1,0.3,12.3,0.4,18.4,0.9c10.4,0.8,20.8,2.3,30.8,5.4c2.8,0.9,5.4,2.1,8.1,3.2
          		c4.8,2,7.1,5.9,7.9,10.9c0.9,5.3,0.8,10.6,0.7,15.9c-0.3,6.9-1,13.8-2.3,20.6c-2,11.5-4.9,22.8-8.6,33.8
          		c-5.3,15.9-12.4,31.2-21.2,45.5c-5.2,8.4-11.1,16.3-17.8,23.5c-3.7,4.1-7.7,7.9-12,11.4c-1.4,1.3-3.1,2.3-4.9,2.9
          		c-1.1,0.4-2.3,0.6-3.5,0.6c-3.7,0.1-6-2.6-5.5-6.2c0.3-1.6,0.7-3.1,1.4-4.6c1.9-5.1,4-10.1,6-15.1c5.4-13.8,10.5-27.8,15-41.9
          		c3.1-9.6,5.6-19.3,7.6-29.1c0.8-3.9,1.2-7.9,1.6-11.9c0.3-3.4,0.2-6.8-0.2-10.2c-0.1-0.6-0.1-1.2-0.2-1.8c-0.8-5-4.1-9.2-8.7-11.2
          		c-4.1-1.8-8.5-3.1-13-3.8c-4.7-0.8-9.4-1.1-14.1-1.4c-6.6-0.4-13.3-0.4-19.9-0.3c-5.3,0.1-10.6,0.5-15.9,0.9
          		c-3.6,0.2-7.2,0.4-10.8,0.8c-6,0.5-12,1.1-18,1.7c-4.5,0.4-9,0.9-13.5,1.4c-2.4,0.3-4.8,0.7-7.2,0.9c-1.6,0.2-3.2,0.2-4.8,0.3
          		c-0.4,0-0.8,0-1.2-0.1c-4.3-0.7-6.2-3.5-4.6-7.8c0.5-1.2,1.2-2.3,2.1-3.3c1.2-1.3,2.6-2.5,4.1-3.5c11.2-7.7,23.5-13.7,36.4-17.8
          		c10.1-3.3,20.5-5.8,31-7.4c7.4-1.2,14.9-2,22.4-2.4C1026.3,467,1031.2,466.8,1036.1,466.5z"/>
          	<path class="st0" d="M274.1,49c4.6-0.3,9.3,0.5,13.6,2.2c7.4,2.9,13.2,9,15.5,16.6c2.3,7,2.3,14.6,0,21.6c-2.9,9.1-9,15-18.2,17.7
          		c-7.5,2.3-15.4,2.2-22.8-0.2c-9.2-2.9-15.2-9.1-17.9-18.4c-2-6.6-1.9-13.6,0.2-20.2c3.2-10.2,10.3-16.2,20.6-18.7
          		C268.1,49.1,271.1,48.8,274.1,49z"/>
              </g>
         </svg>
      `;
    }

    function renderAmazonArrowlogo() {
      return html`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" x="0px" y="0px" viewBox="0 0 733 200" style="enable-background:new 0 0 1276 712;" xml:space="preserve" class="remote-logo"><g><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#0f0f0f;fill-rule:nonzero;opacity:1" transform="matrix(.75 0 0 .75 -112.16 -331.09)" d="M680 677.4c-1.4 0-2.8-.1-4.2-.1h-97.7c-1.5 0-3 0-4.5.1-4.5-.3-9-.7-13.5-1.1-2.4-.2-4.8-.5-7.2-.7-8.1-.8-16.2-1.9-24.2-3-12.6-1.7-25.2-3.8-37.7-6.3-9.3-1.8-18.7-3.9-27.9-6.1-17-4-33.8-8.7-50.4-14.1-15.3-4.9-30.4-10.4-45.3-16.3-14.9-6-29.6-12.4-44.1-19.5-32.2-15.6-63.2-33.6-92.6-54-14-9.7-27.6-19.9-40.8-30.6-9.3-7.5-18.4-15.3-27.3-23.3-1.2-1.1-2.3-2.2-3.4-3.4-1.4-1.7-2.2-3.9-2.2-6.1 0-3.9 2.9-7.2 6.8-7.6 2.4-.3 4.9.1 7 1.3 2.7 1.4 5.2 3 7.9 4.4 8.6 4.7 17.2 9.6 25.9 14.1s17.3 8.9 26.1 13.2c14.4 7 28.9 13.5 43.7 19.7 15 6.3 30.2 12.2 45.5 17.7 17 6.1 34.2 11.7 51.5 16.8 16.8 5 33.8 9.5 50.9 13.5 14.8 3.5 29.6 6.7 44.5 9.3 9.5 1.7 19 3.3 28.5 4.8 7.7 1.2 15.5 2.4 23.2 3.4 6 .8 12 1.4 18 2 4.8.5 9.6 1.1 14.4 1.6 2.8.3 5.6.5 8.4.7 4.3.4 8.6.8 12.9 1.1 4.6.3 9.2.6 13.8.8 6.6.4 13.2.7 19.9 1 3.1.1 6.2.1 9.3.2 3.5 0 7 .1 10.6.1 6 .1 12.1.3 18.1.3 9.1-.1 18.3-.3 27.4-.6 4.1-.1 8.2-.3 12.3-.6 7.5-.5 15-1 22.5-1.6 3.6-.3 7.2-.5 10.8-.8 5.1-.5 10.2-1.1 15.3-1.6 2.2-.2 4.4-.4 6.6-.7 4.6-.5 9.2-1.1 13.7-1.7 3.8-.5 7.6-.9 11.4-1.4 3.2-.4 6.4-.9 9.5-1.4 5.6-.9 11.1-1.8 16.6-2.7 5.1-.9 10.3-1.7 15.4-2.7 8.5-1.6 16.9-3.4 25.4-5.2 7.2-1.5 14.3-3.2 21.4-4.8 16.6-3.9 33.1-8.4 49.4-13.3 28.7-8.5 56.9-18.5 84.6-29.8 3.3-1.4 6.7-2.8 10-4.2 2.8-1.2 5.8-1.8 8.8-1.6 4.7.3 8.8 2.1 11.6 6.1 3.2 4.5 3 9.2.4 13.9-1.5 2.4-3.4 4.5-5.8 6.1-9.7 7.2-19.7 13.9-29.9 20.3-12.5 7.8-25.4 15.1-38.6 21.8-18.5 9.5-37.5 18-56.8 25.6-12.1 4.8-24.4 9.2-36.8 13.2-16.4 5.3-33 10.1-49.7 14.3-11.3 2.8-22.6 5.4-34.1 7.7-8.3 1.7-16.6 3-24.9 4.4-5.9 1-11.9 2-17.8 2.8-5.5.8-11 1.4-16.4 2-4.6.6-9.2 1.1-13.8 1.6-4.1.5-8.2.8-12.4 1z"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#0f0f0f;fill-rule:nonzero;opacity:1" transform="matrix(.75 0 0 .75 -112.16 -331.09)" d="M1036.1 466.5c6.1.3 12.3.4 18.4.9 10.4.8 20.8 2.3 30.8 5.4 2.8.9 5.4 2.1 8.1 3.2 4.8 2 7.1 5.9 7.9 10.9.9 5.3.8 10.6.7 15.9-.3 6.9-1 13.8-2.3 20.6-2 11.5-4.9 22.8-8.6 33.8-5.3 15.9-12.4 31.2-21.2 45.5-5.2 8.4-11.1 16.3-17.8 23.5-3.7 4.1-7.7 7.9-12 11.4-1.4 1.3-3.1 2.3-4.9 2.9-1.1.4-2.3.6-3.5.6-3.7.1-6-2.6-5.5-6.2.3-1.6.7-3.1 1.4-4.6 1.9-5.1 4-10.1 6-15.1 5.4-13.8 10.5-27.8 15-41.9 3.1-9.6 5.6-19.3 7.6-29.1.8-3.9 1.2-7.9 1.6-11.9.3-3.4.2-6.8-.2-10.2-.1-.6-.1-1.2-.2-1.8-.8-5-4.1-9.2-8.7-11.2-4.1-1.8-8.5-3.1-13-3.8-4.7-.8-9.4-1.1-14.1-1.4-6.6-.4-13.3-.4-19.9-.3-5.3.1-10.6.5-15.9.9-3.6.2-7.2.4-10.8.8-6 .5-12 1.1-18 1.7-4.5.4-9 .9-13.5 1.4-2.4.3-4.8.7-7.2.9-1.6.2-3.2.2-4.8.3-.4 0-.8 0-1.2-.1-4.3-.7-6.2-3.5-4.6-7.8.5-1.2 1.2-2.3 2.1-3.3 1.2-1.3 2.6-2.5 4.1-3.5 11.2-7.7 23.5-13.7 36.4-17.8 10.1-3.3 20.5-5.8 31-7.4 7.4-1.2 14.9-2 22.4-2.4 4.6-.3 9.5-.5 14.4-.8z"/></g></svg>
      `;
    }

    function renderAmazonNameWithArrowLogo() {
      return html`<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0, 0, 400,140.46511627906978" xml:space="preserve" x="0px" y="0px" class="remote-logo" style="margin-top: 90px;"><g id="svgg"><path id="path0" d="M36.047 13.922 C 25.440 15.663,18.409 21.339,16.256 29.898 C 15.386 33.355,15.944 33.716,23.234 34.417 C 30.107 35.077,29.928 35.133,31.381 31.849 C 35.652 22.191,47.907 24.668,47.907 35.188 L 47.907 38.454 43.140 39.025 C 24.310 41.281,17.443 45.404,14.649 56.130 C 9.599 75.517,31.970 87.543,47.354 73.711 C 50.201 71.152,50.324 71.150,52.031 73.631 C 56.460 80.068,57.623 80.160,64.096 74.585 C 70.037 69.467,69.989 69.602,67.234 65.658 C 64.385 61.578,64.186 60.199,64.186 44.481 C 64.186 26.725,63.554 23.541,59.226 19.494 C 54.323 14.909,44.469 12.540,36.047 13.922 M186.744 13.922 C 176.330 15.631,169.990 20.534,167.390 28.888 C 165.975 33.434,166.192 33.603,174.534 34.465 C 180.636 35.095,181.475 34.834,182.015 32.134 C 182.650 28.960,186.790 26.067,190.698 26.067 C 195.996 26.067,198.575 29.032,198.594 35.144 L 198.605 38.427 190.985 39.444 C 173.765 41.743,166.724 46.806,165.131 58.037 C 162.420 77.148,182.807 86.721,198.346 73.634 L 201.111 71.305 203.071 73.969 C 207.640 80.175,208.370 80.214,214.845 74.602 C 220.532 69.673,220.651 69.411,218.542 66.499 C 215.103 61.751,215.144 62.006,214.858 43.721 C 214.565 24.975,214.487 24.520,210.880 20.508 C 206.094 15.184,195.940 12.413,186.744 13.922 M103.899 14.583 C 99.212 15.774,95.610 18.697,93.516 23.008 L 92.605 24.884 92.581 20.847 C 92.549 15.291,92.629 15.349,84.923 15.349 C 76.242 15.349,77.209 11.371,77.209 47.058 C 77.209 82.676,76.169 78.605,85.269 78.605 C 94.395 78.605,93.488 80.962,93.488 57.232 C 93.488 45.213,93.678 36.835,93.983 35.415 C 95.655 27.619,105.435 26.650,107.490 34.077 C 107.875 35.469,108.008 42.004,107.942 56.367 C 107.830 81.094,106.905 78.605,116.207 78.605 C 125.083 78.605,124.186 80.942,124.186 57.818 C 124.186 38.303,124.445 34.648,125.977 32.558 C 129.093 28.308,135.775 28.118,138.015 32.217 C 138.762 33.584,138.849 35.710,138.967 55.581 C 139.121 81.421,138.135 78.605,147.032 78.605 C 155.910 78.605,154.946 81.978,154.786 51.460 L 154.651 25.814 153.433 23.216 C 147.911 11.442,127.228 11.472,123.487 23.259 C 123.044 24.655,122.683 24.419,121.030 21.656 C 117.442 15.657,110.671 12.862,103.899 14.583 M298.774 14.615 C 285.440 17.133,277.963 28.760,277.963 46.977 C 277.963 67.645,287.466 79.560,303.922 79.525 C 321.679 79.488,332.781 61.905,329.312 39.314 C 326.649 21.981,313.990 11.742,298.774 14.615 M365.706 14.444 C 361.132 15.347,357.594 18.136,355.118 22.791 L 353.510 25.814 353.499 21.063 C 353.490 16.848,353.387 16.257,352.589 15.830 C 351.292 15.136,339.868 15.202,339.163 15.907 C 338.059 17.010,338.392 77.528,339.504 78.123 C 341.175 79.017,352.760 78.736,353.625 77.780 C 354.279 77.057,354.391 74.526,354.535 57.199 C 354.706 36.517,354.794 35.590,356.865 32.546 C 360.199 27.648,366.045 27.784,368.605 32.821 C 369.488 34.558,369.542 35.722,369.674 55.802 C 369.840 81.258,368.901 78.605,377.747 78.605 C 387.145 78.605,386.185 81.574,385.918 53.326 C 385.653 25.244,385.460 23.888,381.050 19.006 C 377.570 15.154,371.401 13.320,365.706 14.444 M229.395 15.907 C 228.463 16.840,228.641 26.700,229.605 27.501 C 230.182 27.981,232.851 28.197,240.345 28.372 L 250.317 28.605 246.877 33.488 C 225.578 63.731,226.518 62.053,226.514 69.846 C 226.510 77.165,227.179 78.065,231.128 76.064 C 240.755 71.186,254.759 70.813,265.639 75.147 C 270.087 76.918,271.392 77.100,271.811 76.008 C 272.287 74.767,272.123 64.647,271.611 63.690 C 270.386 61.400,262.537 58.786,254.613 58.027 L 248.986 57.488 255.726 47.930 C 259.433 42.673,264.371 35.651,266.698 32.326 L 270.930 26.279 271.089 21.495 C 271.198 18.214,271.071 16.496,270.684 16.029 C 269.925 15.115,230.304 14.998,229.395 15.907 M307.428 27.202 C 313.604 30.396,314.956 57.591,309.296 64.786 C 306.278 68.623,300.348 68.160,297.847 63.893 C 293.908 57.172,293.838 34.517,297.741 29.556 C 300.024 26.654,304.340 25.605,307.428 27.202 M47.816 53.140 C 47.451 62.310,43.833 67.442,37.733 67.442 C 29.210 67.442,28.768 53.144,37.183 49.647 C 38.778 48.984,43.987 48.007,46.221 47.952 L 48.024 47.907 47.816 53.140 M198.505 53.140 C 198.109 62.691,194.321 67.858,188.093 67.341 C 183.971 66.999,181.860 64.277,181.860 59.302 C 181.860 52.235,187.225 48.191,196.919 47.952 L 198.722 47.907 198.505 53.140 M243.256 81.389 C 228.857 83.572,219.241 91.284,232.867 89.721 C 239.505 88.959,250.067 88.951,250.823 89.707 C 251.112 89.996,251.700 90.233,252.129 90.233 C 255.453 90.233,254.387 98.588,249.481 110.993 C 246.496 118.538,247.584 119.927,252.619 115.000 C 259.876 107.900,266.457 88.534,263.140 84.042 C 261.471 81.783,250.399 80.306,243.256 81.389 M66.777 85.382 C 65.908 86.252,65.914 86.189,66.554 87.536 C 66.995 88.465,68.278 89.636,73.844 94.186 C 74.469 94.698,75.378 95.483,75.863 95.930 C 76.348 96.378,76.871 96.744,77.026 96.744 C 77.182 96.744,78.314 97.529,79.543 98.488 C 80.771 99.448,83.151 101.070,84.832 102.093 C 86.512 103.116,87.891 104.227,87.897 104.562 C 87.902 104.897,88.107 105.048,88.351 104.897 C 88.595 104.746,90.741 105.739,93.119 107.103 C 95.496 108.468,98.119 109.859,98.948 110.195 C 99.776 110.531,100.319 111.023,100.155 111.289 C 99.985 111.563,100.081 111.633,100.377 111.450 C 100.664 111.273,101.690 111.529,102.658 112.020 C 105.733 113.580,113.579 116.674,118.146 118.128 C 120.573 118.901,122.977 119.723,123.488 119.956 C 124.000 120.188,126.721 120.842,129.535 121.409 C 132.349 121.976,134.965 122.547,135.349 122.680 C 136.342 123.022,136.653 123.073,144.651 124.221 C 158.125 126.156,179.965 125.596,191.395 123.024 C 192.930 122.678,195.442 122.251,196.977 122.074 C 198.512 121.897,199.872 121.608,200.000 121.432 C 200.260 121.075,204.016 120.062,206.512 119.676 C 207.407 119.538,208.380 119.232,208.673 118.997 C 208.967 118.762,209.681 118.478,210.259 118.367 C 214.875 117.478,232.958 109.228,238.456 105.503 C 239.525 104.779,240.624 104.186,240.898 104.186 C 241.171 104.186,241.395 103.991,241.395 103.752 C 241.395 103.514,241.784 103.195,242.258 103.045 C 243.660 102.600,246.512 99.463,246.512 98.367 C 246.512 96.103,242.980 94.880,240.285 96.210 C 238.420 97.131,232.318 99.484,229.767 100.266 C 228.360 100.697,225.463 101.652,223.328 102.388 C 221.193 103.124,217.635 104.150,215.421 104.668 C 213.207 105.187,210.663 105.808,209.767 106.048 C 207.561 106.641,199.114 108.222,195.116 108.790 C 193.326 109.045,190.500 109.469,188.836 109.733 C 184.407 110.436,166.615 111.237,161.689 110.955 C 159.353 110.821,155.244 110.594,152.558 110.450 C 147.383 110.173,144.247 109.792,134.884 108.299 C 128.517 107.284,125.738 106.752,123.256 106.072 C 122.360 105.827,120.058 105.276,118.140 104.847 C 111.693 103.407,99.606 99.408,92.326 96.306 C 91.814 96.088,90.244 95.449,88.837 94.886 C 86.674 94.020,74.114 87.849,69.535 85.402 C 67.808 84.480,67.681 84.479,66.777 85.382 " stroke="none" fill="#0f0f0f" fill-rule="evenodd"></path></g></svg>`;
    }

    function renderMiLogo() {
      return html`<svg xmlns="http://www.w3.org/2000/svg" width="55" height="50" xml:space="preserve" viewBox="0 70 300 55" class="remote-logo miLogo"><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#000;fill-rule:nonzero;opacity:1" transform="translate(99.01 41.62)" d="M204.546-41.122c1.759 0 3.223 1.417 3.223 3.161v189.386c0 1.715-1.464 3.139-3.223 3.139H163.05c-1.781 0-3.228-1.424-3.228-3.139V-37.961c0-1.743 1.446-3.161 3.228-3.161h41.496zm-180.078 0c31.303 0 64.033 1.435 80.176 17.589 15.871 15.897 17.59 47.549 17.656 78.286v96.671c0 1.715-1.446 3.139-3.219 3.139h-41.49c-1.777 0-3.229-1.424-3.229-3.139V53.09c-.044-17.167-1.031-34.81-9.884-43.692C56.858 1.757 42.639.007 27.853-.356h-75.21c-1.764 0-3.208 1.419-3.208 3.136v148.645c0 1.715-1.462 3.139-3.237 3.139h-41.516c-1.774 0-3.201-1.424-3.201-3.139V-37.961c0-1.743 1.426-3.161 3.201-3.161H24.468zm9.287 75.427c1.766 0 3.201 1.413 3.201 3.143v113.977c0 1.715-1.436 3.139-3.201 3.139H-9.829c-1.792 0-3.228-1.424-3.228-3.139V37.448c0-1.73 1.436-3.143 3.228-3.143h43.584z"></path></svg>`;
    }

    function renderXiaomiLogo() {
      return html`<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 281 46" width="281" height="46" xml:space="preserve" class="remote-logo"><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#000;fill-rule:nonzero;opacity:1" transform="translate(.5 .5)" d="M158.12.7c-6.42 0-12.86.81-16.92 4.81s-5.64 10-5.64 17.38S137 36.16 141 40.16s10.66 5 17.08 5 12.86-.86 16.92-4.86 5.67-10 5.67-17.41-1.43-13.24-5.49-17.23S164.55.7 158.12.7zm9.75 32.82c-2.27 2.58-6.37 3-9.75 3s-7.47-.45-9.74-3S146 27.38 146 22.9s.15-7.95 2.41-10.54 5.9-3 9.74-3 7.48.45 9.74 3 2.41 6.05 2.41 10.54-.17 8.03-2.43 10.62zM69.1 1.49H60a.69.69 0 0 0-.7.69v41.49a.69.69 0 0 0 .7.69h9.1a.7.7 0 0 0 .7-.69V2.18a.7.7 0 0 0-.7-.69zM30.87 22.57 47 2.57a.66.66 0 0 0-.52-1.08H34.87a.9.9 0 0 0-.71.35L23.48 16 13.07 1.85a.9.9 0 0 0-.71-.36H.68a.66.66 0 0 0-.52 1.08l16.35 20.37L.14 43.29a.66.66 0 0 0 .52 1.07h11.68a.9.9 0 0 0 .72-.37L24 29.89 34.29 44a.91.91 0 0 0 .72.36h11.53a.66.66 0 0 0 .52-1.07zM252.33 4.64c-3.7-3.44-9.65-3.86-14.46-3.86-6.22 0-10.18 1.32-12.58 2.56h-1.67c-2.35-1.3-6.49-2.56-13-2.56-4.82 0-10.72.35-14.36 3.41-3 2.52-3.71 5.89-3.71 12.79v26.67a.7.7 0 0 0 .71.69h9.09a.7.7 0 0 0 .71-.69V21.7c0-4-.15-8.08.7-9.62.67-1.2 1.71-2.53 6.65-2.53 5.89 0 7.28.41 8.21 3a9.37 9.37 0 0 1 .38 2.56v28.54a.69.69 0 0 0 .7.69h9.09a.7.7 0 0 0 .71-.69V15.13a9.37 9.37 0 0 1 .38-2.56c.93-2.61 2.31-3 8.2-3 4.94 0 6 1.33 6.65 2.53.86 1.54.7 5.66.7 9.62v22a.7.7 0 0 0 .71.69h9.09a.7.7 0 0 0 .7-.69v-25c0-7.28-.23-10.95-3.6-14.08zM121.82 7.18C117.62 1.39 110-.36 102.14.06a56 56 0 0 0-15 2.66c-.88.33-.77 1.09-.78 1.55 0 1.53-.15 5.49-.14 7.1 0 .71.87 1 1.6.78a56.6 56.6 0 0 1 12.62-3c4.67-.38 11 0 12.76 2.65.83 1.26.87 3.19 1 5.16a78.77 78.77 0 0 0-11.51-.4c-3.35.15-9.69.44-13.5 2.44-3.06 1.63-4.86 3.11-5.82 5.87a17 17 0 0 0-.73 7.06c.56 5 2.28 7.43 4.61 9.15 3.67 2.72 8.31 4.15 17.89 3.94 12.75-.28 16.1-4.4 17.79-7.33 2.88-5 2.38-12.85 2.29-17.68-.03-2.01-.33-8.59-3.4-12.83zm-8.31 26.17c-1.2 2.53-5.49 2.92-8 3-4.7.21-8.16 0-10.4-1.08A5.12 5.12 0 0 1 92.4 31c-.08-1.63-.05-2.46.68-3.43 1.66-2.15 6-2.61 10.41-2.78a78.94 78.94 0 0 1 10.94.63c-.03 3.24-.24 6.5-.92 7.93zM280.17 1.49h-9.09a.7.7 0 0 0-.71.69v41.49a.7.7 0 0 0 .71.69h9.09a.7.7 0 0 0 .71-.69V2.18a.7.7 0 0 0-.71-.69z"/></svg>`;
    }

    // Render Amazon Fire Remote Style AF1
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AF1' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="remote-body">

          <div> </div>
          <div class="notch notchtall"> </div>
          <div style="display: inherit;"> ${drawDeviceName(this, this._config, 'top')} </div>

          <div> </div>
          <button class="remote-button keyboard-button" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>
          <div> </div>

          <div class="dpadContainer">
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}> </button>
          </div>

          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:arrow-u-left-top"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:home-outline"></ha-icon>
          </button>
          <button class="remote-button" id="hamburger-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu"></ha-icon>
          </button>

          <button class="remote-button" id="rewind-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:rewind"></ha-icon>
          </button>
          <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>
          <button class="remote-button" id="fastforward-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:fast-forward"></ha-icon>
          </button>

          ${drawDeviceName(this, this._config, 'bottom')}
          ${renderAmazonNameWithArrowLogo()}
          ${drawFiremoteVersionNumber(this, this._config)}

      </div>

      </ha-card>
    `;
    }


    // Render Amazon Fire Remote Style AF2
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AF2' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="remote-body">

          <div> </div>
          <div class="notch notchtall"> </div>
          <div style="display: inherit;"> ${drawDeviceName(this, this._config, 'top')} </div>

          <div> </div>
          <button class="remote-button keyboard-button" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>
          <div> </div>

          <div class="dpadContainer">
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}> </button>
          </div>

          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:arrow-u-left-top"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:home-outline"></ha-icon>
          </button>
          <button class="remote-button" id="hamburger-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu"></ha-icon>
          </button>

          <button class="remote-button" id="rewind-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:rewind"></ha-icon>
          </button>
          <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>
          <button class="remote-button" id="fastforward-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:fast-forward"></ha-icon>
          </button>

          <div> </div>
          <button class="remote-button" id="tv-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:television-classic"></ha-icon>
          </button>
          <div> </div>

          <div class="eightygap"> </div>
          <div> </div>
          <div> </div>

          ${drawDeviceName(this, this._config, 'bottom')}
          ${renderAmazonArrowlogo()}
          ${drawFiremoteVersionNumber(this, this._config)}

      </div>

      </ha-card>
    `;
    }


    // Render Amazon Fire Remote Style AF3
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AF3' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="remote-body">

          <button class="remote-button${powerStatusClass}" id="power-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div class="notch"> </div>
          <div style="display: inherit;"> ${drawDeviceName(this, this._config, 'top')} </div>

          <div> </div>
          <button class="remote-button keyboard-button" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>
          <div> </div>

          <div class="dpadContainer">
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}> </button>
          </div>

          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:arrow-u-left-top"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:home-outline"></ha-icon>
          </button>
          <button class="remote-button" id="hamburger-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu"></ha-icon>
          </button>

          <button class="remote-button" id="rewind-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:rewind"></ha-icon>
          </button>
          <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>
          <button class="remote-button" id="fastforward-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:fast-forward"></ha-icon>
          </button>

          <div> </div>
          <button class="remote-button round-top" id="volume-up-button" @click=${this.buttonClicked}>
            +
          </button>
          <div> </div>

          <div> </div>
          <button class="remote-button round-bottom" id="volume-down-button" @click=${this.buttonClicked}>
            &#x2013;
          </button>
          <div> </div>

          <div> </div>
          <button class="remote-button" id="mute-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-mute"></ha-icon>
          </button>
          <div> </div>

          ${drawDeviceName(this, this._config, 'bottom')}
          ${renderAmazonArrowlogo()}
          ${drawFiremoteVersionNumber(this, this._config)}

      </div>

      </ha-card>
    `;
    }


    // Render Amazon Fire Remote Style AF4
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AF4' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="remote-body">

          <button class="remote-button${powerStatusClass}" id="power-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div class="notch"> </div>
          <div style="display: inherit;"> ${drawDeviceName(this, this._config, 'top')} </div>

          <div> </div>
          <button class="remote-button keyboard-button teal" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>
          <div> </div>

          <div class="dpadContainer">
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}> </button>
          </div>

          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:arrow-u-left-top"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:home-outline"></ha-icon>
          </button>
          <button class="remote-button" id="hamburger-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu"></ha-icon>
          </button>

          <button class="remote-button" id="rewind-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:rewind"></ha-icon>
          </button>
          <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>
          <button class="remote-button" id="fastforward-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:fast-forward"></ha-icon>
          </button>

          <button class="remote-button" id="mute-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-mute"></ha-icon>
          </button>
          <button class="remote-button round-top" id="volume-up-button" @click=${this.buttonClicked}>
            +
          </button>
          <button class="remote-button" id="tv-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:television-classic"></ha-icon>
          </button>


          <div> </div>
          <button class="remote-button round-bottom" id="volume-down-button" @click=${this.buttonClicked}>
            &#x2013;
          </button>
          <div></div>

          ${drawAppLaunchButtons(this, this._config, 3, appButtonMax["AF4"])}
          ${drawDeviceName(this, this._config, 'bottom')}
          ${renderfiretvlogo()}
          ${drawFiremoteVersionNumber(this, this._config)}

        </div>

      </ha-card>
    `;
    }


    // Render Amazon Fire Remote Style AF5
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AF5' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="remote-body">

          <button class="remote-button${powerStatusClass}" id="power-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div class="notch"> </div>
          <div style="display: inherit;"> ${drawDeviceName(this, this._config, 'top')} </div>

          <div> </div>
          <button class="remote-button keyboard-button teal" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>
          <div> </div>

          <div class="dpadContainer">
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}> </button>
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
          </div>

          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:arrow-u-left-top"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:home-outline"></ha-icon>
          </button>
          <button class="remote-button" id="hamburger-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu"></ha-icon>
          </button>

          <button class="remote-button" id="rewind-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:rewind"></ha-icon>
          </button>
          <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>
          <button class="remote-button" id="fastforward-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:fast-forward"></ha-icon>
          </button>

          <button class="remote-button round-top" id="volume-up-button" @click=${this.buttonClicked}>
            +
          </button>
          <div> </div>
          <button class="remote-button round-top" id="channel-up-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu-up"></ha-icon>
          </button>

          <button class="remote-button round-bottom" id="volume-down-button" @click=${this.buttonClicked}>
            &#x2013;
          </button>
          <button class="remote-button" id="tv-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:television-classic"></ha-icon>
          </button>
          <button class="remote-button round-bottom" id="channel-down-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu-down"></ha-icon>
          </button>

          <button class="remote-button" id="mute-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-mute"></ha-icon>
          </button>
          <button class="remote-button" id="settings-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:cog"></ha-icon>
          </button>
          <button class="remote-button" id="app-switch-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:file-multiple-outline"></ha-icon>
          </button>

          ${drawAppLaunchButtons(this, this._config, 3, appButtonMax["AF5"])}
          ${drawDeviceName(this, this._config, 'bottom')}
          ${renderfiretvlogo()}
          ${drawFiremoteVersionNumber(this, this._config)}

      </div>

      </ha-card>
    `;
    }


    // Render Amazon Fire Remote Style AF6
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AF6' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="remote-body AF6">

          ${drawDeviceName(this, this._config, 'top')}

          <button class="remote-button${powerStatusClass}" id="power-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div class="notch"> </div>
          <button class="remote-button" id="headset-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:headphones"></ha-icon>
          </button>

          <div> </div>
          <button class="remote-button keyboard-button teal" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>
          <div> </div>

          <div class="dpadContainer">
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}> </button>
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
          </div>

          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:arrow-u-left-top"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:home-outline"></ha-icon>
          </button>
          <button class="remote-button" id="hamburger-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu"></ha-icon>
          </button>

          <button class="remote-button" id="rewind-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:rewind"></ha-icon>
          </button>
          <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>
          <button class="remote-button" id="fastforward-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:fast-forward"></ha-icon>
          </button>

          <button class="remote-button round-top" id="volume-up-button" @click=${this.buttonClicked}>
            +
          </button>
          <button class="remote-button" id="tv-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:television-classic"></ha-icon>
          </button>
          <button class="remote-button round-top" id="channel-up-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu-up"></ha-icon>
          </button>

          <button class="remote-button round-bottom" id="volume-down-button" @click=${this.buttonClicked}>
            &#x2013;
          </button>
          <button class="remote-button" id="settings-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:cog"></ha-icon>
          </button>
          <button class="remote-button round-bottom" id="channel-down-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu-down"></ha-icon>
          </button>

          <button class="remote-button" id="mute-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-mute"></ha-icon>
          </button>
          <button class="remote-button" id="programmable-one-button" @click=${this.buttonClicked}>
            1
          </button>
          <button class="remote-button" id="programmable-two-button" @click=${this.buttonClicked}>
            2
          </button>

          ${drawAppLaunchButtons(this, this._config, 3, appButtonMax["AF6"])}
          ${drawDeviceName(this, this._config, 'bottom')}
          ${renderfiretvlogo()}
          ${drawFiremoteVersionNumber(this, this._config)}

      </div>

      </ha-card>
    `;
    }



    // Render NVIDIA Shield Remote Style NS1
    if ( getDeviceAttribute('defaultRemoteStyle') == 'NS1' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="shield-remote-body ns1-body">

          <div class="shieldNotch"> </div>

          <div class="two-col-span"> ${drawDeviceName(this, this._config, 'top')} </div>

          <div class="dpadContainer shieldDpad">
            <button class="centerbutton centerbuttonShield" id="center-button" @click=${this.buttonClicked}> </button>
            <div class="directionButtonContainer">
              <button class="dpadbutton dpadbuttonShield" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton dpadbuttonShield" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton dpadbuttonShield" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton dpadbuttonShield" id="down-button" @click=${this.buttonClicked}></button>
            </div>
          </div>


          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu-left-outline"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:circle-outline"></ha-icon>
          </button>

          <div class="two-col-span">
            <button class="remote-button keyboard-button" id="keyboard-button" @click=${this.buttonClicked}>
              <ha-icon icon="mdi:keyboard-outline"></ha-icon>
            </button>
          </div>

          <div class="ns1-wings">
            <div id="wingL"> </div>
            <div id="ns1spine">
              <button class="ns1volume" id="volume-up-button" @click=${this.buttonClicked}></button>
              <button class="ns1volume" id="volume-down-button" @click=${this.buttonClicked}></button>
            </div>
            <div id="wingR"> </div>
          </div>

          ${drawDeviceName(this, this._config, 'bottom')}
          ${drawFiremoteVersionNumber(this, this._config)}

      </div>

      </ha-card>
    `;
    }


    // Render NVIDIA Shield Remote Style NS2
    if ( getDeviceAttribute('defaultRemoteStyle') == 'NS2' ) {
    return html`
      <ha-card>

      ${cssVars}

        <div class="shield-remote-body">

          <div class="shieldNotch notchtall"> </div>

          <div class="two-col-span"> ${drawDeviceName(this, this._config, 'top')} </div>

          <button class="remote-button${powerStatusClass}" id="power-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <button class="remote-button" id="hamburger-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu"></ha-icon>
          </button>


          <div class="dpadContainer shieldDpad">
            <button class="centerbutton centerbuttonShield" id="center-button" @click=${this.buttonClicked}> </button>
            <div class="directionButtonContainer">
              <button class="dpadbutton dpadbuttonShield" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton dpadbuttonShield" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton dpadbuttonShield" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton dpadbuttonShield" id="down-button" @click=${this.buttonClicked}></button>
            </div>
          </div>


          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu-left"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:circle"></ha-icon>
          </button>

          <button class="remote-button" id="fastforward-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:fast-forward"></ha-icon>
          </button>
          <button class="remote-button keyboard-button" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>

          <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>
          <button class="remote-button" id="volume-up-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-high"></ha-icon>
          </button>

          <button class="remote-button" id="rewind-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:rewind"></ha-icon>
          </button>
          <button class="remote-button" id="volume-down-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-medium"></ha-icon>
          </button>

          ${drawAppLaunchButtons(this, this._config, 2, appButtonMax["NS2"])}
          ${drawDeviceName(this, this._config, 'bottom')}
          ${drawFiremoteVersionNumber(this, this._config)}

        </div>

      </ha-card>
    `;
    }

    // Render Xiaomi Remote 1
    if ( getDeviceAttribute('defaultRemoteStyle') == 'XM1' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="remote-body XM2">
          ${drawDeviceName(this, this._config, 'top')}

          <div> </div>
          <button class="remote-button${powerStatusClass}" id="power-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div> </div>

          <div> </div>
          <button class="remote-button keyboard-button" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>
          <div> </div>

          <div class="dpadContainer">
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}> </button>
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
          </div>

          <button class="remote-button" id="apps-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:apps"></ha-icon>
          </button>
          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:checkbox-blank-circle-outline"></ha-icon>
          </button>

          ${drawAppLaunchButtons(this, this._config, 3, appButtonMax["XM2"])}

          <div> </div>
          <button class="remote-button round-top" id="volume-up-button" @click=${this.buttonClicked}>
            +
          </button>
          <div> </div>

          <div> </div>
          <button class="remote-button round-bottom" id="volume-down-button" @click=${this.buttonClicked}>
            &#x2013;
          </button>
          <div> </div>

          ${drawDeviceName(this, this._config, 'bottom')}
          ${renderXiaomiLogo()}
          ${drawFiremoteVersionNumber(this, this._config)}

      </div>

      </ha-card>
    `;
    }


    // Render Xiaomi Mi Remote
    if ( getDeviceAttribute('defaultRemoteStyle') == 'XM2' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="remote-body XM2">
          ${drawDeviceName(this, this._config, 'top')}

          <div> </div>
          <button class="remote-button${powerStatusClass}" id="power-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div> </div>

          <div> </div>
          <button class="remote-button keyboard-button" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>
          <div> </div>

          <div class="dpadContainer">
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}> </button>
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
          </div>

          <button class="remote-button" id="apps-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:apps"></ha-icon>
          </button>
          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:checkbox-blank-circle-outline"></ha-icon>
          </button>

          ${drawAppLaunchButtons(this, this._config, 3, appButtonMax["XM2"])}

          <div> </div>
          <button class="remote-button round-top" id="volume-up-button" @click=${this.buttonClicked}>
            +
          </button>
          <div> </div>

          <div> </div>
          <button class="remote-button round-bottom" id="volume-down-button" @click=${this.buttonClicked}>
            &#x2013;
          </button>
          <div> </div>

          ${drawDeviceName(this, this._config, 'bottom')}
          ${renderMiLogo()}
          ${drawFiremoteVersionNumber(this, this._config)}

      </div>

      </ha-card>
    `;
    }


    // Render Chromecast 1
    if ( getDeviceAttribute('defaultRemoteStyle') == 'CC1' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="chromecast-remote-body CC1">
          ${drawDeviceName(this, this._config, 'top')}

          <div class="dpadContainer">
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}> </button>
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
          </div>

          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </button>
          <button class="remote-button keyboard-button" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>


          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:home"></ha-icon>
          </button>
          <button class="remote-button" id="mute-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-mute"></ha-icon>
          </button>

          ${drawAppLaunchButtons(this, this._config, 2, appButtonMax["CC1"])}

          <div class="chromecastBottomIndentedRow">
            <button class="remote-button${powerStatusClass}" id="power-button" @click=${this.buttonClicked}>
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
            <div class="notch"> </div>
            <button class="remote-button" id="input-button" @click=${this.buttonClicked}>
              <ha-icon icon="mdi:import"></ha-icon>
            </button>
          </div>

          <div class="chromecastVolumeRocker">
            <button class="remote-button" id="volume-down-button" @click=${this.buttonClicked}>
              <ha-icon icon="mdi:volume-minus"></ha-icon>
            </button>
            <button class="remote-button" id="volume-up-button" @click=${this.buttonClicked}>
              <ha-icon icon="mdi:volume-plus"></ha-icon>
            </button>
          </div>

          ${drawDeviceName(this, this._config, 'bottom')}
          ${drawFiremoteVersionNumber(this, this._config)}

      </div>

      </ha-card>
    `;
    }


    // Render Apple TV Remote - Style 1
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AR1' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="apple-remote-body AR1">
          ${drawDeviceName(this, this._config, 'top')}

          <div class="dpadContainer">
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}></button>
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
          </div>


          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            MENU
          </button>
          <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>

          ${drawAppLaunchButtons(this, this._config, 2, appButtonMax["AR1"])}

          ${drawDeviceName(this, this._config, 'bottom')}
          ${drawFiremoteVersionNumber(this, this._config)}

      </div>

      </ha-card>
    `;
    }


    // Render Apple TV Remote - Style 2
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AR2' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="apple-remote-body AR2">
        <div class="AR2TopSection">
          ${drawDeviceName(this, this._config, 'top')}

          <div class="two-col-span apple-tv-top">
            <div></div>
            <div class="notch"></div>
            <div></div>
          </div>

          <div class="dpadContainer">
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}>
              <ha-icon icon="mdi:checkbox-blank-circle"></ha-icon>
            </button>
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}>
                <ha-icon icon="mdi:arrow-top-left"></ha-icon>
              </button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}>
                <ha-icon icon="mdi:arrow-top-right"></ha-icon>
              </button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}>
                <ha-icon icon="mdi:arrow-bottom-left"></ha-icon>
              </button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}>
                <ha-icon icon="mdi:arrow-bottom-right"></ha-icon>
              </button>
            </div>
          </div>

          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            MENU
          </button>
          <button class="remote-button" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:monitor"></ha-icon>
          </button>

        </div>
        <div class="AR2BottomSection">

          <button class="remote-button" id="search-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:magnify"></ha-icon>
          </button>
          <button class="remote-button round-top" id="volume-up-button" @click=${this.buttonClicked}>
            +
          </button>


          <button class="remote-button" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>
          <button class="remote-button round-bottom" id="volume-down-button" @click=${this.buttonClicked}>
            &#x2013;
          </button>

          ${drawAppLaunchButtons(this, this._config, 2, appButtonMax["AR2"])}

          ${drawDeviceName(this, this._config, 'bottom')}
          ${drawFiremoteVersionNumber(this, this._config)}
        </div>

      </div>

      </ha-card>
    `;
    }


    // Render Apple TV Remote - Style 3
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AR3' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="apple-remote-body AR3">
          ${drawDeviceName(this, this._config, 'top')}

          <div class="two-col-span apple-tv-top">
            <div></div>
            <div class="notch"></div>
            <div class="right">
              <button class="remote-button${powerStatusClass}" id="power-button" @click=${this.buttonClicked}>
                <ha-icon icon="mdi:power"></ha-icon>
              </button>
            </div>            
          </div>

          <div class="dpadContainer">
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}></button>
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
          </div>

          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:chevron-left"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:monitor"></ha-icon>
          </button>


          <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>
          <button class="remote-button round-top" id="volume-up-button" @click=${this.buttonClicked}>
            +
          </button>


          <button class="remote-button" id="mute-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-off"></ha-icon>
          </button>
          <button class="remote-button round-bottom" id="volume-down-button" @click=${this.buttonClicked}>
            &#x2013;
          </button>

          ${drawAppLaunchButtons(this, this._config, 2, appButtonMax["AR3"])}

          ${drawDeviceName(this, this._config, 'bottom')}
          ${drawFiremoteVersionNumber(this, this._config)}

      </div>

      </ha-card>
    `;
    }


    // Render App Launcher 1
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AL1' ) {
    return html`
      <ha-card>
        ${cssVars}
        <div class="remote-body AL1">
          ${drawDeviceName(this, this._config, 'top')}
          ${drawAppLaunchButtons(this, this._config, 'fill', appButtonMax["AL1"])}
          ${drawDeviceName(this, this._config, 'bottom')}
          ${drawFiremoteVersionNumber(this, this._config)}
        </div>
      </ha-card>
    `;
    }


    // Render App Launcher 2
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AL2' ) {
      var lpb4icon = 'mdi:rewind';
      var lpb6icon = 'mdi:fast-forward';
      var rpb2icon = 'mdi:restart';
      var rpb2id = 'reboot-button';
      var hiddenclass = '';
      if(this._config.device_family == 'apple-tv') {
        var lpb4icon = 'mdi:skip-backward';
        var lpb6icon = 'mdi:skip-forward';
        var rpb2icon = 'mdi:magnify';
        var rpb2id = 'search-button';
        var hiddenclass = 'hidden';
      }
    
      return html`
      <ha-card>
        ${cssVars}
        <div class="remote-body AL2">
          ${drawDeviceName(this, this._config, 'top')}
          ${drawAppLaunchButtons(this, this._config, 'fill', appButtonMax["AL2"])}

          <div class="ALControlsContainer">

            <div class="left-pocket-controls">
              <div class="row">
                <button class="remote-button${powerStatusClass}" id="power-button" @click=${this.buttonClicked}>
                  <ha-icon icon="mdi:power"></ha-icon>
                </button>
                <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
                  <ha-icon icon="mdi:arrow-left"></ha-icon>
                </button>
                <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
                  <ha-icon icon="mdi:home-outline"></ha-icon>
                </button>
              </div>
              <div class="row">
                <button class="remote-button" id="rewind-button" @click=${this.buttonClicked}>
                  <ha-icon icon="${lpb4icon}"></ha-icon>
                </button>
                <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
                  <ha-icon icon="mdi:play-pause"></ha-icon>
                </button>
                <button class="remote-button" id="fastforward-button" @click=${this.buttonClicked}>
                  <ha-icon icon="${lpb6icon}"></ha-icon>
                </button>
              </div>
            </div>

            <div class="center-pocket-controls">
              <div class="dpadContainer">
                <button class="centerbutton" id="center-button" @click=${this.buttonClicked}> </button>
                <div class="directionButtonContainer">
                  <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
                  <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
                  <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
                  <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
                </div>
              </div>
            </div>

            <div class="right-pocket-controls">
              <div class="row">
                <div class="volumeContainer">
                  <button class="remote-button round-top" id="volume-up-button" @click=${this.buttonClicked}>
                    +
                  </button>
                  <button class="remote-button round-bottom" id="volume-down-button" @click=${this.buttonClicked}>
                    &#x2013;
                  </button>
                </div>
                <div>
                  <button class="remote-button" id="${rpb2id}" @click=${this.buttonClicked}>
                    <ha-icon icon="${rpb2icon}"></ha-icon>
                  </button>
                  <br>
                  <button class="remote-button" id="mute-button" @click=${this.buttonClicked}>
                    <ha-icon icon="mdi:volume-mute"></ha-icon>
                  </button>
                </div>
                <div>
                  <button class="remote-button keyboard-button ${hiddenclass}" id="keyboard-button" @click=${this.buttonClicked}>
                    <ha-icon icon="mdi:keyboard-outline"></ha-icon>
                  </button>
                  <br>
                  <button class="remote-button ${hiddenclass}" id="hamburger-button" @click=${this.buttonClicked}>
                    <ha-icon icon="mdi:menu"></ha-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
          ${drawDeviceName(this, this._config, 'bottom')}
          ${drawFiremoteVersionNumber(this, this._config)}
        </div>
      </ha-card>
    `;
    }


  }



  // Remote Button Click Handler
  buttonClicked(clicked) {

    // Refresh the appmap with any configured HDMI inputs (max 4)
    handlehdmi(this._config, 4)

    // Inspect user prefs
    const deviceType = this._config.device_type;
    const deviceFamily = this._config.device_family;
    const compatibility_mode = this._config.compatibility_mode || 'default';
    const overrides = this._config.button_overrides;
    const atvRemoteEntity = this._config.android_tv_remote_entity;

    // Function to handle translations from English to the user's language
    const ha_language = this.hass.config.language;
    function translateToUsrLang(englishString) {
        //console.log(ha_language);
        var translatedString = englishString;
        if (typeof translationmap.get(ha_language) !== 'undefined'){
            if (typeof translationmap.get(ha_language)[sourceName] !== 'undefined'){
                translatedString = translationmap.get(ha_language)[englishString];
            }
        }
        return translatedString;
    }

    // Check for button override before proceeding
    if(typeof overrides !== 'undefined' && overrides !== null) {
        if(typeof overrides[clicked.target.id] !== 'undefined') {
            const overrideDef = overrides[clicked.target.id];
            if(overrideDef !== null) {
              if(typeof overrideDef.script !== 'undefined') {
                // handle overrides via external script
                try{ this.hass.callService("script", overrideDef.script) }
                catch { return; }
                fireEvent(this, 'haptic', 'light'); // haptic feedback on success
                return;
              }
              else if(typeof overrideDef.service !== 'undefined' && typeof overrideDef.target !== 'undefined') {
                // handle overrides via yaml instructions
                const svcarray = overrideDef.service.split(".");
                var data = Object;
                if(typeof overrideDef.data !== 'undefined') {
                  var extraData = JSON.parse(JSON.stringify(overrideDef.data));
                  var target = JSON.parse(JSON.stringify(overrideDef.target));
                  data = Object.assign(target, extraData);
                }
                else {
                  data = Object.assign(overrideDef.target);
                }
                try{ this.hass.callService(svcarray[0], svcarray[1], data) }
                catch { return; }
                fireEvent(this, 'haptic', 'light'); // haptic feedback on success
                return;
              }
            }
        }
    }

    // provide haptic feedback for button press
    fireEvent(this, 'haptic', 'light')

    // Check for user set Associated Android TV Remote Integration entity
    var hasATVAssociation = true;
    if(atvRemoteEntity == '' || typeof atvRemoteEntity == 'undefined' || deviceFamily == 'amazon-fire' ) {
        hasATVAssociation = false;
    }

    // Choose event listener path for client android device
    var eventListenerBinPath = '';
    if(compatibility_mode == 'default' || compatibility_mode == 'strong' || compatibility_mode == '') {
        eventListenerBinPath = deviceAttributeQuery("defaultEventListenerBinPath", this._config);
    }
    else {
        var eventListenerBinPath = '/dev/input/'+compatibility_mode;
    }

    // Power Button
    if(clicked.target.id == 'power-button') {
      const state = this.hass.states[this._config.entity];
      const stateStr = state ? state.state : 'off';
      if(this._config.device_family == 'apple-tv') {
        if(stateStr != 'off' && stateStr != 'unavailable' && stateStr != 'standby') {
          this.hass.callService("media_player", "turn_off", { entity_id: this._config.entity});
        }
        else {
          this.hass.callService("media_player", "turn_on", { entity_id: this._config.entity});
        }
          return;
      }
      if(hasATVAssociation) {
        this.hass.callService("remote", "send_command", { entity_id: this._config.android_tv_remote_entity, command: 'KEYCODE_POWER' });
      }
      else if (compatibility_mode == 'strong' && eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'POWER' });
      }
      else if(compatibility_mode == 'strong') {
        this.hass.callService("media_player", "toggle", { entity_id: this._config.entity});
      }
      else if(deviceType == 'fire_stick_4k'   || deviceType == 'fire_tv_stick_4k_max' || 
              deviceType == 'fire_tv_3rd_gen' || deviceType =='fire_stick_second_gen') {
        if(stateStr != 'off' && stateStr != 'unavailable') {
          this.hass.callService("media_player", "turn_off", { entity_id: this._config.entity});
        }
        else {
          this.hass.callService("media_player", "turn_on", { entity_id: this._config.entity});
        }
      }
      else if (deviceType == 'fire_tv_cube_third_gen') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 116 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 116 0 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent /dev/input/event2 1 9 1 && sendevent /dev/input/event2 0 0 0 && sendevent /dev/input/event2 1 9 0 && sendevent /dev/input/event2 0 0 0' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'POWER' });
      }
      return;
    }


    // Keyboard button
    if(clicked.target.id == 'keyboard-button') {
      var text = prompt("Enter text to send");
      if (text && text != '') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'input text "'+text+'"' });
      }
      return;
    };

    // Up Button
    if(clicked.target.id == 'up-button') {
      if(this._config.device_family == 'apple-tv') {
          this.hass.callService("remote", "send_command", { entity_id: this._config.apple_tv_remote_entity, command: 'up', num_repeats: 1, delay_secs: 0, hold_secs: 0});
          return;
      }
      if(hasATVAssociation) {
        this.hass.callService("remote", "send_command", { entity_id: this._config.android_tv_remote_entity, command: 'KEYCODE_DPAD_UP' });
      }
      else if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'UP' });
      }
      else {
          this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 103 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 103 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Left Button
    if(clicked.target.id == 'left-button') {
      if(this._config.device_family == 'apple-tv') {
          this.hass.callService("remote", "send_command", { entity_id: this._config.apple_tv_remote_entity, command: 'left', num_repeats: 1, delay_secs: 0, hold_secs: 0});
          return;
      }
      if(hasATVAssociation) {
        this.hass.callService("remote", "send_command", { entity_id: this._config.android_tv_remote_entity, command: 'KEYCODE_DPAD_LEFT' });
      }
      else if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'LEFT' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 105 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 105 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Center Button
    if(clicked.target.id == 'center-button') {
      if(this._config.device_family == 'apple-tv') {
        this.hass.callService("remote", "send_command", { entity_id: this._config.apple_tv_remote_entity, command: 'select', num_repeats: 1, delay_secs: 0, hold_secs: 0});
        return;
      }
      if(hasATVAssociation) {
        this.hass.callService("remote", "send_command", { entity_id: this._config.android_tv_remote_entity, command: 'KEYCODE_DPAD_CENTER' });
      }
      else if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'CENTER' });
      }
      else {
        if(deviceType == 'fire_tv_4_series' || deviceType == 'fire_tv_toshiba_v35') {
          this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 28 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 28 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
        }
        else if(deviceType == 'mi-box-s') {
          this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 353 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 353 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
        }
        else {
          this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 96 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 96 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
        }
      }
      return;
    }

    // Right Button
    if(clicked.target.id == 'right-button') {
      if(this._config.device_family == 'apple-tv') {
        this.hass.callService("remote", "send_command", { entity_id: this._config.apple_tv_remote_entity, command: 'right', num_repeats: 1, delay_secs: 0, hold_secs: 0});
        return;
      }
      if(hasATVAssociation) {
        this.hass.callService("remote", "send_command", { entity_id: this._config.android_tv_remote_entity, command: 'KEYCODE_DPAD_RIGHT' });
      }
      else if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'RIGHT' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 106 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 106 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Down Button
    if(clicked.target.id == 'down-button') {
      if(this._config.device_family == 'apple-tv') {
          this.hass.callService("remote", "send_command", { entity_id: this._config.apple_tv_remote_entity, command: 'down', num_repeats: 1, delay_secs: 0, hold_secs: 0});
          return;
      }
      if(hasATVAssociation) {
        this.hass.callService("remote", "send_command", { entity_id: this._config.android_tv_remote_entity, command: 'KEYCODE_DPAD_DOWN' });
      }
      else if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'DOWN' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 108 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 108 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Apps Button
    if(clicked.target.id == 'apps-button') {
      if (deviceType == 'mi-box-s') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell am start -n com.google.android.tvlauncher/.appsview.AppsViewActivity' });
      }
      else if (deviceFamily == 'nvidia-shield') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell input keyevent KEYCODE_APP_SWITCH' });
      }
      else if (deviceFamily == 'amazon-fire') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'am start -n com.amazon.venezia/com.amazon.venezia.grid.AppsGridLauncherActivity' });
      }
      else if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'RECENTS' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 757 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 757 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Back Button
    if(clicked.target.id == 'back-button') {
      if(this._config.device_family == 'apple-tv') {
        this.hass.callService("remote", "send_command", { entity_id: this._config.apple_tv_remote_entity, command: 'menu', num_repeats: 1, delay_secs: 0, hold_secs: 0});
        return;
      }
      if(hasATVAssociation) {
        this.hass.callService("remote", "send_command", { entity_id: this._config.android_tv_remote_entity, command: 'KEYCODE_BACK' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'BACK' });
      }
      return;
    }

    // Home Button
    if(clicked.target.id == 'home-button') {
      if(this._config.device_family == 'apple-tv') {
        this.hass.callService("remote", "send_command", { entity_id: this._config.apple_tv_remote_entity, command: 'top_menu', num_repeats: 1, delay_secs: 0, hold_secs: 0});
        return;
      }
      if(hasATVAssociation) {
        this.hass.callService("remote", "send_command", { entity_id: this._config.android_tv_remote_entity, command: 'KEYCODE_HOME' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'HOME' });
      }
      return;
    }

    // Hamburger Button
    if(clicked.target.id == 'hamburger-button') {
      if(deviceType == 'shield-tv-pro-2019' || deviceType == 'shield-tv-2019') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'am start -a android.settings.SETTINGS' });
      }
      else if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'MENU' });
      }
      else if(deviceType == 'mi-box-s') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell am start -n com.android.tv.settings/com.android.tv.settings.MainSettings' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 139 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 139 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Rewind Button
    if(clicked.target.id == 'rewind-button') {
      if(this._config.device_family == 'apple-tv') {
        this.hass.callService("remote", "send_command", { entity_id: this._config.apple_tv_remote_entity, command: 'skip_backward', num_repeats: 1, delay_secs: 0, hold_secs: 0});
        return;
      }
      if(hasATVAssociation) {
        this.hass.callService("remote", "send_command", { entity_id: this._config.android_tv_remote_entity, command: 'KEYCODE_MEDIA_REWIND' });
      }
      else if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined' || deviceType == 'mi-box-s') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'REWIND' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 168 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 168 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Play/Pause Button
    if(clicked.target.id == 'playpause-button') {
      if(this._config.device_family == 'apple-tv') {
        var playpausecommand = 'pause';
        if(this.hass.states[this._config.entity].state=='paused'){ playpausecommand = 'play'; };
        this.hass.callService("remote", "send_command", { entity_id: this._config.apple_tv_remote_entity, command: playpausecommand, num_repeats: 1, delay_secs: 0, hold_secs: 0});
        return;
      }
      if(hasATVAssociation) {
        this.hass.callService("remote", "send_command", { entity_id: this._config.android_tv_remote_entity, command: 'KEYCODE_MEDIA_PLAY_PAUSE' });
      }
      else if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined' || deviceType == 'mi-box-s') {
        this.hass.callService("media_player", "media_play_pause", { entity_id: this._config.entity});
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 164 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 164 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Fast Forward Button
    if(clicked.target.id == 'fastforward-button') {
      if(this._config.device_family == 'apple-tv') {
        this.hass.callService("remote", "send_command", { entity_id: this._config.apple_tv_remote_entity, command: 'skip_forward', num_repeats: 1, delay_secs: 0, hold_secs: 0});
        return;
      }
      if(hasATVAssociation) {
        this.hass.callService("remote", "send_command", { entity_id: this._config.android_tv_remote_entity, command: 'KEYCODE_MEDIA_FAST_FORWARD' });
      }
      else if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined' || deviceType == 'mi-box-s') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'FAST_FORWARD' });
      }
      else {
        if(deviceType == 'fire_tv_4_series' || deviceType == 'fire_tv_toshiba_v35') {
          this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 159 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 159 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
        }
        else {
          this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 208 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 208 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
        }
      }
      return;
    }

    // Volume Up Button
    if(clicked.target.id == 'volume-up-button') {
      if(this._config.device_family == 'apple-tv') {
        this.hass.callService("remote", "send_command", { entity_id: this._config.apple_tv_remote_entity, command: 'volume_up', num_repeats: 1, delay_secs: 0, hold_secs: 0});
        return;
      }
      if(hasATVAssociation) {
        this.hass.callService("remote", "send_command", { entity_id: this._config.android_tv_remote_entity, command: 'KEYCODE_VOLUME_UP' });
      }
      else if(deviceFamily == 'nvidia-shield') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell cmd media_session volume --show --adj raise' });
      }
      else if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'VOLUME_UP' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 115 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 115 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Channel Up Button
    if(clicked.target.id == 'channel-up-button') {
      this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 402 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 402 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      return;
    }

    // Volume Down Button
    if(clicked.target.id == 'volume-down-button') {
      if(this._config.device_family == 'apple-tv') {
        this.hass.callService("remote", "send_command", { entity_id: this._config.apple_tv_remote_entity, command: 'volume_down', num_repeats: 1, delay_secs: 0, hold_secs: 0});
        return;
      }
      if(hasATVAssociation) {
        this.hass.callService("remote", "send_command", { entity_id: this._config.android_tv_remote_entity, command: 'KEYCODE_VOLUME_DOWN' });
      }
      else if(deviceFamily == 'nvidia-shield') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell cmd media_session volume --show --adj lower' });
      }
      else if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'VOLUME_DOWN' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 114 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 114 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // TV Button
    if(clicked.target.id == 'tv-button') {
      if (deviceType == 'fire_tv_cube_third_gen') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell input keyevent 297'});
      }
      else if (deviceType == 'mi-box-s') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell am start -n com.google.android.tv/com.android.tv.MainActivity' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 362 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 362 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
    }

    // Channel Down Button
    if(clicked.target.id == 'channel-down-button') {
      this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 403 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 403 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      return;
    }

    // Mute Button
    if(clicked.target.id == 'mute-button') {
      if(this._config.device_family == 'apple-tv') {
        //this.hass.callService("remote", "send_command", { entity_id: this._config.apple_tv_remote_entity, command: 'mute', num_repeats: 1, delay_secs: 0, hold_secs: 0});
        return;
      }
      if(hasATVAssociation) {
        this.hass.callService("remote", "send_command", { entity_id: this._config.android_tv_remote_entity, command: 'KEYCODE_VOLUME_MUTE' });
      }
      else if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'MUTE' });
      }
      else if (deviceType == 'mi-box-s') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell input keyevent 164'});
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 113 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 113 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Settings Button
    if(clicked.target.id == 'settings-button') {
      if(compatibility_mode == 'strong'  || eventListenerBinPath == 'undefined' || deviceType == 'fire_tv_cube_third_gen') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'SETTINGS' });
      }
      else if(deviceType == 'mi-box-s') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell am start -n com.android.tv.settings/com.android.tv.settings.MainSettings' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 249 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 249 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // App Switch (recents) Button
    if(clicked.target.id == 'app-switch-button') {
      if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'RECENTS' });
      }
      else if (deviceType == 'fire_tv_cube_third_gen') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell input keyevent 304'});
      }
      else if (deviceType == 'mi-box-s') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell input keyevent KEYCODE_APP_SWITCH' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 757 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 757 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Headset Button
    if(clicked.target.id == 'headset-button') {
      this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell input keyevent BUTTON_3'});
      return;
    }

    // 1 Button
    if(clicked.target.id == 'programmable-one-button') {
      this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell input keyevent BUTTON_1'});
      return;
    }

    // 2 Button
    if(clicked.target.id == 'programmable-two-button') {
      this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell input keyevent BUTTON_2'});
      return;
    }

    // Input Button
    if(clicked.target.id == 'input-button') {
      this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell input keyevent 178'});
      return;
    }

    // Reboot Button
    if(clicked.target.id == 'reboot-button') {
      if(confirm('Are you sure you want to reboot '+this.hass.states[this._config.entity].attributes.friendly_name) == false) {
        return;
      }
      this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell reboot' });
    }

    // Search Button (Apple TV Remote style 2)
    if(clicked.target.id == 'search-button') {
      this.hass.callService("media_player", "select_source", { entity_id: this._config.entity, source: "Search"});
    }


    // App launch button (existing in JSON map)
    const clickedAppButtonID = clicked.target.id;
    const appkey = clickedAppButtonID.substr(0, clickedAppButtonID.indexOf("-button"));
    if(appmap.has(appkey)) {
      var familySpecificAppData = appmap.get(appkey)[deviceFamily];
      if(familySpecificAppData && (familySpecificAppData.adbLaunchCommand || familySpecificAppData.appName || familySpecificAppData.remoteCommand)) {
        var adbcommand = familySpecificAppData.adbLaunchCommand;
        var sourceName = familySpecificAppData.appName;
        var remoteCommand = familySpecificAppData.remoteCommand;
      }
      else {
        var adbcommand = appmap.get(appkey).adbLaunchCommand;
        var sourceName = appmap.get(appkey).appName;
        var remoteCommand = appmap.get(appkey).remoteCommand
      }
      sourceName = translateToUsrLang(sourceName);
      if (typeof remoteCommand != 'undefined' && this._config.device_family == 'apple-tv') {
        var data = JSON.parse(remoteCommand);
        data['entity_id'] = this._config.apple_tv_remote_entity;
        this.hass.callService("remote", "send_command", data);
        return;
      }
      if (typeof adbcommand == 'undefined') {
        this.hass.callService("media_player", "select_source", { entity_id: this._config.entity, source: sourceName});
      }
      else {
        if(adbcommand == 'adb shell reboot') {
          if(confirm('Are you sure you want to reboot '+this.hass.states[this._config.entity].attributes.friendly_name) == false) {
            return;
          }
        }
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: adbcommand });
      }
      return;
    }


  }
}
customElements.define('firemote-card', FiremoteCard);


// Allow this card to appear in the card chooser menu
window.customCards = window.customCards || [];
window.customCards.push({
  type: "firemote-card",
  name: "Firemote Card",
  preview: true,
  description: "Remote control card for Amazon FireTV, NVIDIA Shield, and Xiaomi devices"
});



// Ceate and register the card editor
class FiremoteCardEditor extends LitElement {

  static get properties() {
    return {
      hass: {},
      _config: {},
    };
  }

  // setConfig works the same way as for the card itself
  setConfig(config) {
    this._config = config;
  }

  // This function is called when the input element of the editor loses focus or is changed
  configChanged(ev) {

    const _config = Object.assign({}, this._config);
    _config[ev.target.name.toString()] = ev.target.value;
    this._config = _config;

    // A config-changed event will tell lovelace we have made changed to the configuration
    // this make sure the changes are saved correctly later and will update the preview
    const event = new CustomEvent("config-changed", {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }


  translateToUsrLang(englishString) {
    const ha_language = this.hass.config.language;
    //console.log('English string in = '+englishString)
    //const ha_language = 'pt';
    //console.log(ha_language);
    var translatedString = englishString;
    if (typeof translationmap.get(ha_language) !== 'undefined'){
        if (typeof translationmap.get(ha_language)[englishString] !== 'undefined'){
            translatedString = translationmap.get(ha_language)[englishString];
        }
    }
    //console.log('Translated string out = '+translatedString)
    return translatedString;
  }


  getEntitiesByType(type) {
    return Object.keys(this.hass.states).filter(
      (eid) => eid.substr(0, eid.indexOf('.')) === type
    );
  }

  getEntitiesByPlatform(platformName) {
    return Object.keys(this.hass.entities).filter(
      (eid) => this.hass.entities[eid].platform === platformName
    );
  }

  getMediaPlayerEntitiesByPlatform(platformName) {
    var entities = Object.keys(this.hass.entities).filter(
      (eid) => this.hass.entities[eid].platform === platformName
    );
    const re = /media_player/;
    return entities.filter(a => re.exec(a));
  }

  getRemoteEntitiesByPlatform(platformName) {
    var entities = Object.keys(this.hass.entities).filter(
      (eid) => this.hass.entities[eid].platform === platformName
    );
    const re = /remote/;
    return entities.filter(a => re.exec(a));
  }

  getDeviceFamiliesDropdown(optionvalue){
    var familykeys = [];
    for(var [key, value] of devicemap.entries()) {
      familykeys.push(key)
    }
    return html `
      <select name="device_family" id="device_family" style="padding: .6em; font-size: 1em;"
          .value=${optionvalue}
          @focusout=${this.configChanged}
          @change=${this.configChanged}
      >
        ${familykeys.map((family) => {
          if(devicemap.get(family).meta.supported) {
            if (family == optionvalue) {
              return html`<option value="${family}" selected>${devicemap.get(family).meta.friendlyName}</option> `
            }
            else {
              return html`<option value="${family}">${devicemap.get(family).meta.friendlyName}</option> `
            }
          }
          else {
            return html`<option value="${family}" disabled>${devicemap.get(family).meta.friendlyName}</option>`
          }
        })}
      </select>
      <br>
    `;
  }



  getMediaPlayerEntityDropdown(optionValue){
    var mediaPlayerEntities = [];
    var heading = '';
    this.getMediaPlayerEntitiesByPlatform('apple_tv');
    if(this._config.device_family == 'apple-tv') {
      mediaPlayerEntities = this.getMediaPlayerEntitiesByPlatform('apple_tv');
      heading = 'Apple TV Media Player Entity';
    }
    else {
      mediaPlayerEntities = this.getEntitiesByPlatform('androidtv');
      heading = 'Android Debug Bridge Entity';
    }
    var blankEntity = '';
    if(this._config.entity == '' || !(mediaPlayerEntities).includes(optionValue)) {
      blankEntity = html `<option value="" selected> - - - - </option> `;
    }
    return html`
        ${heading}:<br>
        <select name="entity" id="entity" style="padding: .6em; font-size: 1em;" .value="${optionValue}"
            @focusout=${this.configChanged}
            @change=${this.configChanged} >
            ${blankEntity}
            ${mediaPlayerEntities.map((eid) => {
              if (eid != this._config.entity) {
                return html`<option value="${eid}">${this.hass.states[eid].attributes.friendly_name || eid}</option> `;
              }
              else {
                return html`<option value="${eid}" selected>${this.hass.states[eid].attributes.friendly_name || eid}</option> `;
              }
            })}
        </select>
        <br>
        <br>`
  }


  getAssociatedRemoteEntityDropdown(optionValue){
    if(this._config.device_family == 'amazon-fire') { return; }
    var blankRemoteEntity = '';
    var remoteEntities = [];
    var appleTVRemoteEntities = this.getRemoteEntitiesByPlatform('apple_tv');
    if(this._config.device_family == 'apple-tv') {
        if(this._config.apple_tv_remote_entity == '' || typeof this._config.apple_tv_remote_entity == 'undefined') {
            blankRemoteEntity = html `<option value="" selected> - - - - </option> `;
        }
        remoteEntities = this.getRemoteEntitiesByPlatform('apple_tv');
        return html`
              ${this.translateToUsrLang('Associated')} Apple TV Remote Entity:<br>
              <select name="apple_tv_remote_entity" id="apple_tv_remote_entity" style="padding: .6em; font-size: 1em;" .value=${optionValue}
                @focusout=${this.configChanged}
                @change=${this.configChanged} >
                ${blankRemoteEntity}
                ${remoteEntities.map((eid) => {
                  if (eid != this._config.apple_tv_remote_entity) {
                    return html`<option value="${eid}">${this.hass.states[eid].attributes.friendly_name || eid}</option> `;
                  }
                  else {
                    return html`<option value="${eid}" selected>${this.hass.states[eid].attributes.friendly_name || eid}</option> `;
                  }
                })}
              </select>
            <br>
            <br>`
    }
    else {
        if(this._config.androidTVRemoteEntity == '' || typeof this._config.androidTVRemoteEntity == 'undefined') {
            blankRemoteEntity = html `<option value="" selected> - - - - </option> `;
        }
        remoteEntities = this.getEntitiesByPlatform('androidtv_remote');
        return html`
              ${this.translateToUsrLang('Associated')} Android TV Remote Entity: (optional)<br>
              <select name="android_tv_remote_entity" id="android_tv_remote_entity" style="padding: .6em; font-size: 1em;" .value=${optionValue}
                @focusout=${this.configChanged}
                @change=${this.configChanged} >
                ${blankRemoteEntity}
                ${remoteEntities.map((eid) => {
                  if (eid != this._config.android_tv_remote_entity) {
                    return html`<option value="${eid}">${this.hass.states[eid].attributes.friendly_name || eid}</option> `;
                  }
                  else {
                    return html`<option value="${eid}" selected>${this.hass.states[eid].attributes.friendly_name || eid}</option> `;
                  }
                })}
              </select>
            <br>
            <br>`
    }
  }


  getDeviceTypeDropdown(optionValue){
    var family = this._config.device_family;
    var optionMenu = String();
    Object.entries(devices).forEach(deviceFamily => {
      const [familyKey,familyValue] = deviceFamily;
      if(familyKey == family) {
        var blankWasDisplayed = false;
        Object.entries(familyValue).forEach(deviceCategory => {
          const [categorykey,categoryvalue] = deviceCategory;
          if(categorykey == 'meta') {return}
          if(optionValue in categoryvalue) {blankWasDisplayed = true}
          if(!(optionValue in categoryvalue) && !(blankWasDisplayed)){
            optionMenu += '<option value="" selected disabled> - - - choose one - - - </option>';
            blankWasDisplayed = true;
          }
          if(categorykey != 'noCategory'){optionMenu += '<optgroup label="'+ categorykey + '">'}
          Object.entries(categoryvalue).forEach(deviceEntry => {
            const [devicekey,deviceproperties] = deviceEntry;
            if(deviceproperties.supported) {
              if(devicekey == this._config.device_type) {
                optionMenu += '<option value="'+ devicekey +'" selected>'+ deviceproperties.friendlyName +'</option>';
              }
              else {
                optionMenu += '<option value="'+ devicekey +'">'+ deviceproperties.friendlyName +'</option>';
              }
            }
            else {
              optionMenu += '<option value="'+ devicekey +'" disabled>'+ deviceproperties.friendlyName +'</option>';
            }
          })
          if(categorykey != 'noCategory'){optionMenu += '</optgroup>'}
        })
      }
    })
    return html `
      <select name="device_type" id="device_type" style="padding: .6em; font-size: 1em;"
        .value=${this._config.device_type} 
        @focusout=${this.configChanged}
        @change=${this.configChanged}
      >
        ${unsafeHTML(optionMenu)}
      </select>
      <br>
    `;
  }


  getCompatibilityModeDropdown(optionValue, deviceFriendlyName){
    if(this._config.device_family == 'apple-tv') { return; }
    var heading = this.translateToUsrLang('Compatibility Mode');
    return html`
        ${heading}:<br>
        <select name="compatibility_mode" id="compatibility_mode" style="padding: .6em; font-size: 1em;"
          .value=${optionValue}
          @focusout=${this.configChanged}
          @change=${this.configChanged}
        >
          <option value="default">Default for ${deviceFriendlyName}</option>
          <option value="strong">Strong (Slower)</option>
          <option value="event0">event0</option>
          <option value="event1">event1</option>
          <option value="event2">event2</option>
          <option value="event3">event3</option>
          <option value="event4">event4</option>
          <option value="event5">event5</option>
          <option value="event6">event6</option>
          <option value="event7">event7</option>
          <option value="event8">event8</option>
          <option value="event9">event9</option>
          <option value="event10">event10</option>
          <option value="event11">event11</option>
          <option value="event12">event12</option>
          <option value="event13">event13</option>
        </select>
        <br>
        <br>
    `;
  }


  getAppChoiceOptionMenus(remoteStyle) {
    var family = this._config.device_family;
    if(appButtonMax[remoteStyle]) {
      var appkeys = [];
      for (var [key, value] of appmap.entries()) {
        appkeys.push(key)
      }
      const optionsmap = new Map();
      for(let i=1; i<=appButtonMax[remoteStyle]; i++) {
        optionsmap.set(i, "app_launch_"+i);
      }
      var optionkeys = [];
      for (var [key, value] of optionsmap.entries()) {
        optionkeys.push(key)
      }

      return html `
        ${optionkeys.map((optionnumber) => {
          var blankOption = html `<option value=""> - - - - </option>`;
          if(!(appmap.has(optionvalue))){
            blankOption = html `<option value="" selected> - - - - </option>`;
          }
          var heading = this.translateToUsrLang('App Launch Button');
          var optionvalue = this._config[optionsmap.get(optionnumber)];
          return html `
            ${heading} ${optionnumber}:
            <select name="app_launch_${optionnumber}" id="app_launch_${optionnumber}" style="padding: .6em; font-size: 1em;"
              .value=${optionvalue}
              @focusout=${this.configChanged}
              @change=${this.configChanged}
            >
              ${blankOption}
              ${appkeys.map((app) => {
               var userLanguageAppName = this.translateToUsrLang(appmap.get(app).friendlyName);
               if ((appmap.get(app).deviceFamily && appmap.get(app).deviceFamily.includes(family)) || !(appmap.get(app).deviceFamily)) {
                if (app != optionvalue) {
                  return html`<option value="${app}">${userLanguageAppName}</option> `
                }
                else {
                  return html`<option value="${app}" selected>${userLanguageAppName}</option> `
                }
               }
              })}
            </select>
            <br>
          `;
        })}
      `;
    }
  }


  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    if(!this._config.device_family) {
        this._config.device_family = devicemap.keys().next().value;
    }

    var appLauncherRelativeScaleSlide = '';
    if(this._config.defaultRemoteStyle_override == 'AL2') {
      if(!(this._config.app_launcher_relative_size)) {
        this._config.app_launcher_relative_size = 0;
      }
      appLauncherRelativeScaleSlide = html `
        <br>
        <label for="relativefader">App Launcher Relative Scale:&nbsp;
          <input type="range" min="-25" max="75" .value=${this._config.app_launcher_relative_size} id="app_launcher_relative_size" name="app_launcher_relative_size" @change=${this.configChanged} style="width: 40ch;">
        </label>
        <br>`;
    }

    // Get current device's Attributes AND use any applicable overrides from user conf
    var confRef = this._config;
    function getDeviceAttribute(deviceAttribute){
      return deviceAttributeQuery(deviceAttribute, confRef);
    }

    // Show and hide HDMI inputs if the device has them
    handlehdmi(this._config, getDeviceAttribute('hdmiInputs'));

    return html`
        ${this.translateToUsrLang('Device Family')}: <br>
        ${this.getDeviceFamiliesDropdown(this._config.device_family)}
        <br>

        ${devicemap.get(this._config.device_family).meta.friendlyName} ${this.translateToUsrLang('Device Model')}:<br>
        ${this.getDeviceTypeDropdown(this._config.device_type)}
        <br>


        ${this.getMediaPlayerEntityDropdown(this._config.entity)}

        ${this.getAssociatedRemoteEntityDropdown(this._config.android_tv_remote_entity)}

        <hr>

        <br>
        <label for="fader">${this.translateToUsrLang('Scale')}:&nbsp;
          <input type="range" min="20" max="120" .value=${this._config.scale} id="scale" name="scale" @change=${this.configChanged} style="width: 40ch;">
        </label>
        <br>
        ${appLauncherRelativeScaleSlide}

        <br>
        ${this.translateToUsrLang('Remote Style')}:<br>
        <select name="defaultRemoteStyle_override" id="defaultRemoteStyle_override" style="padding: .6em; font-size: 1em;"
          .value=${this._config.defaultRemoteStyle_override || ''} 
          @focusout=${this.configChanged}
          @change=${this.configChanged}
        >
          <option value="">Default for ${getDeviceAttribute('friendlyName')}</option>
          <option value="AF1">Amazon Fire Style 1</option>
          <option value="AF2">Amazon Fire Style 2</option>
          <option value="AF3">Amazon Fire Style 3</option>
          <option value="AF4">Amazon Fire Style 4</option>
          <option value="AF5">Amazon Fire Style 5</option>
          <option value="AF6">Amazon Fire Style 6</option>
          <option value="AR1">Apple TV Remote Style 1</option>
          <option value="AR2">Apple TV Remote Style 2</option>
          <option value="AR3">Apple TV Remote Style 3</option>
          <option value="CC1">Chromecast</option>
          <option value="NS1">NVIDIA Shield Style 1</option>
          <option value="NS2">NVIDIA Shield Style 2</option>
          <option value="XM1" disabled>Xiomi Mi Style 1</option>
          <option value="XM2">Xiomi Mi Style 2</option>
          <option value="AL1">App Launcher 1</option>
          <option value="AL2">App Launcher 2</option>
        </select>
        <br>

        <br>

        ${this.getCompatibilityModeDropdown(this._config.compatibility_mode, getDeviceAttribute('friendlyName'))}
        <br>

        ${this.getAppChoiceOptionMenus(getDeviceAttribute("defaultRemoteStyle"))}
        <br>

        <hr>

        <br>
        <label for="visible_name_text">${this.translateToUsrLang('Visible Device Name')}:<br>
          <input type="text" maxlength="15" .value=${ this._config.visible_name_text || ''} id="visible_name_text" name="visible_name_text" @change=${this.configChanged} @focusout=${this.configChanged} @keyup=${this.configChanged} style="padding: .6em; font-size: 1em; width: 10rem;">
        </label>
        <br>
        <br>
        ${this.translateToUsrLang('Name Position')}:<br>
        <select name="name_position" id="name_position" .value=${this._config.name_position || 'hidden'} @focusout=${this.configChanged} @change=${this.configChanged}  style="padding: .6em; font-size: 1em;">
          <option value="hidden" selected>${this.translateToUsrLang('hidden')}</option>
          <option value="top">${this.translateToUsrLang('top')}</option>
          <option value="bottom">${this.translateToUsrLang('bottom')}</option>
        </select><br>
        <br>
        <label for="visible_name_text_color">${this.translateToUsrLang('Device Name Text Color')}:<br><input type="color" name="visible_name_text_color" id="visible_name_text_color" .value=${this._config.visible_name_text_color || '#000000'} @change=${this.configChanged}></label>
    `;
  }
}

customElements.define("firemote-card-editor", FiremoteCardEditor);
