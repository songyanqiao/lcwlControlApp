(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/controlDetail/controlDetail"],{

/***/ 31:
/*!***********************************************************************************************************!*\
  !*** C:/Users/86150/Desktop/龙程网络/lcwlControlApp/main.js?{"page":"pages%2FcontrolDetail%2FcontrolDetail"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _controlDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/controlDetail/controlDetail.vue */ 32));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_controlDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 32:
/*!****************************************************************************************!*\
  !*** C:/Users/86150/Desktop/龙程网络/lcwlControlApp/pages/controlDetail/controlDetail.vue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controlDetail_vue_vue_type_template_id_7030a764___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controlDetail.vue?vue&type=template&id=7030a764& */ 33);
/* harmony import */ var _controlDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controlDetail.vue?vue&type=script&lang=js& */ 35);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _controlDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _controlDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _controlDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controlDetail.vue?vue&type=style&index=0&lang=css& */ 38);
/* harmony import */ var _HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _controlDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _controlDetail_vue_vue_type_template_id_7030a764___WEBPACK_IMPORTED_MODULE_0__["render"],
  _controlDetail_vue_vue_type_template_id_7030a764___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _controlDetail_vue_vue_type_template_id_7030a764___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/controlDetail/controlDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 33:
/*!***********************************************************************************************************************!*\
  !*** C:/Users/86150/Desktop/龙程网络/lcwlControlApp/pages/controlDetail/controlDetail.vue?vue&type=template&id=7030a764& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_template_id_7030a764___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./controlDetail.vue?vue&type=template&id=7030a764& */ 34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_template_id_7030a764___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_template_id_7030a764___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_template_id_7030a764___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_template_id_7030a764___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 34:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/86150/Desktop/龙程网络/lcwlControlApp/pages/controlDetail/controlDetail.vue?vue&type=template&id=7030a764& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.show = false
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 35:
/*!*****************************************************************************************************************!*\
  !*** C:/Users/86150/Desktop/龙程网络/lcwlControlApp/pages/controlDetail/controlDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./controlDetail.vue?vue&type=script&lang=js& */ 36);
/* harmony import */ var _HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 36:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/86150/Desktop/龙程网络/lcwlControlApp/pages/controlDetail/controlDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;























































































var _dialog = _interopRequireDefault(__webpack_require__(/*! ../../wxcomponents/@vant/weapp/dialog/dialog */ 37));
var _config = __webpack_require__(/*! ../../config/config.js */ 28);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =


{
  data: function data() {var _ref;
    return _ref = {
      show1: false,
      checkedCard: false,
      checkedDevice: false,
      date: '',
      checked: true,
      mark: '',
      deviceName: '大门摄像头',
      deviceId: '223233132',
      deviceLocation: '福州市/仓山区/阳光小区',
      deviceInstallTime: '2023/2/23',
      deviceExpirationTime: '2023/5/23',
      rechargeExpirationTime: '2023/5/23',
      timePickerType: 0,
      cardNumber: '3231321312312',
      snNumber: '3232h2j3h1',
      cardRealPerson: '朱小平',
      service: '星球',
      rechargedMonths: '9月',
      company: '东方',
      startRechargMonths: '2023/5/23',
      deviceState: 0,
      staffName: '宋烟桥',
      staffPhone: '19105936037',
      currentDate: new Date().getTime(),
      minDate: new Date("2022/2/2").getTime(),
      signPeriod: '',





      createTime: '',
      uudateTime: '',
      id: '',
      address: "",
      cardOverdueTime: "",
      corporation: '',
      createCardTime: '' }, _defineProperty(_ref, "createTime",
    ""), _defineProperty(_ref, "dandelionId",
    ""), _defineProperty(_ref, "deviceId",
    ''), _defineProperty(_ref, "deviceName",
    ""), _defineProperty(_ref, "id",
    ""), _defineProperty(_ref, "installName",
    ''), _defineProperty(_ref, "installOverdueTime",
    ""), _defineProperty(_ref, "installTime",
    ""), _defineProperty(_ref, "iotcardId",
    ""), _defineProperty(_ref, "iotcardName",
    ""), _defineProperty(_ref, "isAble",
    0), _defineProperty(_ref, "isCardOverdue",
    0), _defineProperty(_ref, "isDelete",
    0), _defineProperty(_ref, "isDeviceOverdue",
    0), _defineProperty(_ref, "mark",
    ''), _defineProperty(_ref, "month",
    ""), _defineProperty(_ref, "operator",
    ""), _defineProperty(_ref, "signPeriod",
    ""), _defineProperty(_ref, "updateTime",
    ""), _ref;




  },
  methods: {

    field: function field(e) {

      var id = e.currentTarget.id;
      var value = e.detail;
      if (id == 'address') {

        this.address = value;
      } else if (id == 'deviceName') {

        this.deviceName = value;
      } else if (id == 'installName') {

        this.installName = value;
      } else if (id == 'iotcardId') {

        this.iotcardId = value;
      } else if (id == 'dandelionId') {

        this.dandelionId = value;
      } else if (id == 'iotcardName') {

        this.iotcardName = value;
      } else if (id == 'operator') {

        this.operator = value;
      } else if (id == 'corporation') {

        this.corporation = value;
      } else if (id == 'month') {

        this.month = value;
      } else if (id == 'signPeriod') {

        this.signPeriod = value;
      } else if (id == 'mark') {

        this.mark = value;
      }

    },
    onConfirm1: function onConfirm1(date) {

      var date1 = new Date(date.detail);
      console.log(date1);

      if (this.timePickerType == 1) {
        this.installTime = this.formatDate(date1);

      } else if (this.timePickerType == 0) {
        this.installOverdueTime = this.formatDate(date1);
      } else if (this.timePickerType == 2) {
        console.log(date1);
        this.installTime = this.formatDate(date1);
      } else if (this.timePickerType == 3) {
        this.cardOverdueTime = this.formatDate(date1);
      }
      this.show1 = false;
    },
    InstallTime: function InstallTime() {
      if (!this.checked) {

        return 0;
      }
      this.timePickerType = 1;
      this.show1 = true;
    },
    overdueTime: function overdueTime() {
      if (!this.checked) {

        return 0;
      }
      this.show1 = true;
      this.timePickerType = 0;
    },

    StartRechargMonths: function StartRechargMonths() {

      if (!this.checked) {

        return 0;
      }
      this.timePickerType = 2;
      this.show1 = true;


    },
    RechargeExpirationTime: function RechargeExpirationTime() {
      if (!this.checked) {

        return 0;
      }
      this.timePickerType = 3;
      this.show1 = true;
    },



    onCheckdCard: function onCheckdCard(e) {

      this.checkedCard = e.detail;

    },
    onCheckdDevice: function onCheckdDevice(e) {

      this.checkedDevice = e.detail;

    },
    formatter: function formatter(type, value) {
      if (type === 'year') {
        return "".concat(value, "\u5E74");
      }
      if (type === 'month') {
        return "".concat(value, "\u6708");
      }
      if (type === 'date') {
        return "".concat(value, "r");
      }
      return value;
    },
    onClose: function onClose() {
      this.show = false;
      this.show1 = false;
    },
    onLoad: function onLoad(option) {var


      id =
      option.id;

      this.id = id;

      this.getDeviceDetail(id);



    },

    getDeviceDetail: function getDeviceDetail(id) {var _this = this;

      console.log(id);

      uni.request({
        url: 'https://song.lazion.cn/api/deviceInfo/get',
        method: 'get',
        data: {
          id: id },

        success: function success(res) {
          console.log(res.data);

          var data = res.data.data;

          _this.address = data.address;
          _this.cardOverdueTime = data.cardOverdueTime;
          _this.corporation = data.corporation;
          _this.createCardTime = data.createCardTime;
          _this.createTime = data.createTime;
          _this.dandelionId = data.dandelionId;
          _this.deviceId = data.deviceId;
          _this.deviceName = data.deviceName;
          _this.id = data.id;
          _this.installName = data.installName;
          _this.installOverdueTime = data.installOverdueTime;
          _this.installTime = data.installTime;
          _this.iotcardId = data.iotcardId;
          _this.iotcardName = data.iotcardName;
          _this.isAble = data.isAble;

          if (data.isCardNotify) {
            _this.checkedCard = false;
          } else {
            _this.checkedCard = true;
          }
          if (data.isDeviceNotify) {
            _this.checkedDevice = false;
          } else {
            _this.checkedDevice = true;
          }

          _this.isCardOverdue = data.isCardOverdue;
          _this.isDelete = data.isDelete;
          _this.isDeviceOverdue = data.isDeviceOverdue;
          _this.mark = data.mark;
          _this.month = data.month;
          _this.operator = data.operator;
          _this.signPeriod = data.signPeriod;
          _this.createTime = data.createTime;
          _this.updateTime = data.updateTime;
          // this.updateTimeupdateTime: 


          _this.recordList = res.data.data;

          uni.showToast({
            title: '查询成功',
            icon: 'none', //如果要纯文本，不要icon，将值设为'none'
            duration: 2000 //持续时间为 2秒
          });
        },
        fail: function fail() {
          uni.showToast({
            title: '网络错误',
            icon: 'none', //如果要纯文本，不要icon，将值设为'none'
            duration: 2000 //持续时间为 2秒
          });
        } });

    },
    formatDate: function formatDate(date) {

      return "".concat(date.getFullYear(), "/").concat(date.getMonth() + 1, "/").concat(date.getDate());
    },
    onConfirm: function onConfirm(date) {
      // date.detail.getFullYear()
      var date1 = new Date(date.detail);
      this.show = false;

      if (this.timePickerType) {
        this.deviceExpirationTime = this.formatDate(date1);
      } else {
        this.rechargeExpirationTime = this.formatDate(date1);
      }


    },

    editDeviceMsg: function editDeviceMsg() {var _this2 = this;


      _dialog.default.confirm({
        title: '确认修改设备信息吗',
        message: '请注意信息是否填写正确' }).

      then(function () {

        var data = {

          address: _this2.address,
          cardOverdueTime: _this2.cardOverdueTime,
          corporation: _this2.corporation,
          createCardTime: _this2.createCardTime,
          createTime: _this2.createTime,
          dandelionId: _this2.dandelionId,
          deviceId: _this2.deviceId,
          deviceName: _this2.deviceName,
          id: _this2.id,
          installName: _this2.installName,
          installOverdueTime: _this2.installOverdueTime,
          installTime: _this2.installTime,
          iotcardId: _this2.iotcardId,
          iotcardName: _this2.iotcardName,
          isAble: 0,
          isCardOverdue: _this2.isCardOverdue,
          isDelete: _this2.isDelete,
          isDeviceOverdue: _this2.isDeviceOverdue,
          mark: _this2.mark,
          month: _this2.month,
          operator: _this2.operator,
          signPeriod: _this2.signPeriod };



        if (_this2.checked) {
          data.isAble = 0;
        } else {
          data.isAble = 1;
        }
        if (_this2.checkedCard) {
          data.isCardNotify = 0;
        } else {
          data.isCardNotify = 1;
        }
        if (_this2.checkedDevice) {
          data.isDeviceNotify = 0;
        } else {
          data.isDeviceNotify = 1;
        }


        data.cardOverdueTime = data.cardOverdueTime.replaceAll('/', '-');

        data.installOverdueTime = data.installOverdueTime.replaceAll('/', '-');


        data.installTime = data.installTime.replaceAll('/', '-');

        uni.request({
          url: 'https://song.lazion.cn/api/deviceInfo/add|revise',
          method: 'post',
          data: data,
          headers: { //放body要时，Content-Tpye为application/json，默认值也是这个
            "Content-Type": "application/json",
            charset: "utf-8" },

          success: function success(res) {
            console.log(res.data, 1111);
            if (res.data.data == null) {
              uni.showToast({
                title: '修改成功',
                icon: 'none', //如果要纯文本，不要icon，将值设为'none'
                duration: 2000 //持续时间为 2秒
              });

              uni.navigateBack();
            } else
            {
              var IotCard;
              var Dandelion;



              for (var i = 0; i < res.data.data.length; i++) {

                if (res.data.data[i].sort == "IotCardId") {
                  IotCard = '物联网卡 地址:' + res.data.data[i].address;
                }
                if (res.data.data[i].sort == "DandelionId") {
                  Dandelion = '蒲公英码 地址:' + res.data.data[i].address;
                }
              }
              uni.showModal({
                title: '卡号冲突',
                content: IotCard + '    ' + Dandelion,
                icon: 'none', //如果要纯文本，不要icon，将值设为'none'
                duration: 2000 //持续时间为 2秒
              });
            }


          },
          fail: function fail() {
            uni.showToast({
              title: '网络错误',
              icon: 'none', //如果要纯文本，不要icon，将值设为'none'
              duration: 2000 //持续时间为 2秒
            });
          } });



        // on confirm
      }).
      catch(function () {
        // on cancel
      });
    },
    deleteDeviceMsg: function deleteDeviceMsg() {var _this3 = this;
      _dialog.default.confirm({
        title: '确认删除设备信息吗',
        message: '此操作不可逆转' }).
      then(function () {


        var data = {
          id: _this3.id };

        console.log(data);
        uni.request({
          url: 'https://song.lazion.cn/api/deviceInfo/delete',
          method: 'get',
          data: data,
          headers: { //放body要时，Content-Tpye为application/json，默认值也是这个
            "Content-Type": "application/json",
            charset: "utf-8" },

          success: function success(res) {
            console.log(res.data);
            uni.showToast({
              title: res.data.message,
              icon: 'none', //如果要纯文本，不要icon，将值设为'none'
              duration: 2000 //持续时间为 2秒
            });
            uni.navigateBack();

          },
          fail: function fail() {
            uni.showToast({
              title: '网络错误',
              icon: 'none', //如果要纯文本，不要icon，将值设为'none'
              duration: 2000 //持续时间为 2秒
            });
          } });



        // on confirm
      }).
      catch(function () {
        // on cancel
      });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 38:
/*!*************************************************************************************************************************!*\
  !*** C:/Users/86150/Desktop/龙程网络/lcwlControlApp/pages/controlDetail/controlDetail.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HB/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./controlDetail.vue?vue&type=style&index=0&lang=css& */ 39);
/* harmony import */ var _HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_controlDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 39:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/86150/Desktop/龙程网络/lcwlControlApp/pages/controlDetail/controlDetail.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[31,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/controlDetail/controlDetail.js.map