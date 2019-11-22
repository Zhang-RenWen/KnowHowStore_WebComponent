(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["KendoDropdownsVueWrapper"] = factory(require("vue"));
	else
		root["KendoDropdownsVueWrapper"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KendoSharedMethods = exports.KendoBaseInputComponent = exports.KendoBaseDatasourceComponent = exports.KendoBaseComponent = undefined;

var _kendoBaseComponent = __webpack_require__(13);

var _kendoBaseComponent2 = _interopRequireDefault(_kendoBaseComponent);

var _kendoBaseDatasourceComponent = __webpack_require__(14);

var _kendoBaseDatasourceComponent2 = _interopRequireDefault(_kendoBaseDatasourceComponent);

var _kendoBaseInputComponent = __webpack_require__(15);

var _kendoBaseInputComponent2 = _interopRequireDefault(_kendoBaseInputComponent);

var _kendoSharedMethods = __webpack_require__(16);

var _kendoSharedMethods2 = _interopRequireDefault(_kendoSharedMethods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.KendoBaseComponent = _kendoBaseComponent2.default;
exports.KendoBaseDatasourceComponent = _kendoBaseDatasourceComponent2.default;
exports.KendoBaseInputComponent = _kendoBaseInputComponent2.default;
exports.KendoSharedMethods = _kendoSharedMethods2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        animationCloseEffects: {
            type: String,
            kComposite: 'animation.close.effects'
        },
        animationCloseDuration: {
            type: Number,
            kComposite: 'animation.close.duration'
        },
        animationOpenEffects: {
            type: String,
            kComposite: 'animation.open.effects'
        },
        animationOpenDuration: {
            type: Number,
            kComposite: 'animation.open.duration'
        }
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        virtualItemHeight: {
            type: Number,
            kComposite: 'virtual.itemHeight'
        },
        virtualMapValueTo: {
            type: String,
            kComposite: 'virtual.mapValueTo'
        },
        virtualValueMapper: {
            type: Function,
            kComposite: 'virtual.valueMapper'
        }
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        popupAppendTo: {
            type: String,
            kComposite: 'popup.appendTo'
        },
        popupOrigin: {
            type: String,
            kComposite: 'popup.origin'
        },
        popupPosition: {
            type: String,
            kComposite: 'popup.position'
        }
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Columns = __webpack_require__(24);

var _Columns2 = _interopRequireDefault(_Columns);

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KendoGridColumn = {
    name: 'kendo-multicolumncombobox-column',
    render: function render() {
        return _vue2.default.prototype._e;
    },

    mixins: [_Columns2.default]
};

exports.default = KendoGridColumn;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoAutoCompleteMixin = __webpack_require__(12);

var _KendoAutoCompleteMixin2 = _interopRequireDefault(_KendoAutoCompleteMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-autocomplete',
    mixins: [_KendoAutoCompleteMixin2.default]
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoDropDownListMixin = __webpack_require__(18);

var _KendoDropDownListMixin2 = _interopRequireDefault(_KendoDropDownListMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-dropdownlist',
    mixins: [_KendoDropDownListMixin2.default]
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoComboBoxMixin = __webpack_require__(20);

var _KendoComboBoxMixin2 = _interopRequireDefault(_KendoComboBoxMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-combobox',
    mixins: [_KendoComboBoxMixin2.default]
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoMultiColumnComboBoxMixin = __webpack_require__(22);

var _KendoMultiColumnComboBoxMixin2 = _interopRequireDefault(_KendoMultiColumnComboBoxMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-multicolumncombobox',
    mixins: [_KendoMultiColumnComboBoxMixin2.default]
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoMultiSelectMixin = __webpack_require__(25);

var _KendoMultiSelectMixin2 = _interopRequireDefault(_KendoMultiSelectMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-multiselect',
    mixins: [_KendoMultiSelectMixin2.default]
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiColumnComboBoxColumn = exports.KendoMultiColumnComboBoxColumn = exports.MultiColumnComboBox = exports.KendoMultiColumnComboBox = exports.DropdownsInstaller = exports.KendoDropdownsInstaller = exports.MultiSelect = exports.KendoMultiSelect = exports.ComboBox = exports.KendoComboBox = exports.DropDownList = exports.KendoDropDownList = exports.AutoComplete = exports.KendoAutoComplete = undefined;

var _KendoAutoComplete = __webpack_require__(5);

var _KendoAutoComplete2 = _interopRequireDefault(_KendoAutoComplete);

var _KendoDropDownList = __webpack_require__(7);

var _KendoDropDownList2 = _interopRequireDefault(_KendoDropDownList);

var _KendoComboBox = __webpack_require__(8);

var _KendoComboBox2 = _interopRequireDefault(_KendoComboBox);

var _KendoMultiColumnComboBox = __webpack_require__(9);

var _KendoMultiColumnComboBox2 = _interopRequireDefault(_KendoMultiColumnComboBox);

var _KendoMultiColumnComboBoxColumn = __webpack_require__(4);

var _KendoMultiColumnComboBoxColumn2 = _interopRequireDefault(_KendoMultiColumnComboBoxColumn);

var _KendoMultiSelect = __webpack_require__(10);

var _KendoMultiSelect2 = _interopRequireDefault(_KendoMultiSelect);

var _kendoDropdownsInstaller = __webpack_require__(27);

var _kendoDropdownsInstaller2 = _interopRequireDefault(_kendoDropdownsInstaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.KendoAutoComplete = _KendoAutoComplete2.default;
exports.AutoComplete = _KendoAutoComplete2.default;
exports.KendoDropDownList = _KendoDropDownList2.default;
exports.DropDownList = _KendoDropDownList2.default;
exports.KendoComboBox = _KendoComboBox2.default;
exports.ComboBox = _KendoComboBox2.default;
exports.KendoMultiSelect = _KendoMultiSelect2.default;
exports.MultiSelect = _KendoMultiSelect2.default;
exports.KendoDropdownsInstaller = _kendoDropdownsInstaller2.default;
exports.DropdownsInstaller = _kendoDropdownsInstaller2.default;
exports.KendoMultiColumnComboBox = _KendoMultiColumnComboBox2.default;
exports.MultiColumnComboBox = _KendoMultiColumnComboBox2.default;
exports.KendoMultiColumnComboBoxColumn = _KendoMultiColumnComboBoxColumn2.default;
exports.MultiColumnComboBoxColumn = _KendoMultiColumnComboBoxColumn2.default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(0);

var _AutoCompleteProps = __webpack_require__(17);

var _AutoCompleteProps2 = _interopRequireDefault(_AutoCompleteProps);

var _Animation = __webpack_require__(1);

var _Animation2 = _interopRequireDefault(_Animation);

var _Virtual = __webpack_require__(2);

var _Virtual2 = _interopRequireDefault(_Virtual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _AutoCompleteProps2.default,
    render: function render(createElement) {
        return createElement('input', [this.$slots['kendo-datasource']]);
    },

    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _Animation2.default, _Virtual2.default],
    model: {
        event: 'changemodel'
    },
    mounted: function mounted() {
        var that = this;
        var widgetElement = that.$el;
        kendo.jQuery(widgetElement).kendoAutoComplete(that.widgetOptions);
        that.$emit('kendowidgetready', that.kendoWidget());

        that.kendoWidget().bind('change', function () {
            that.$emit('changemodel', widgetElement.value);
        });
    },

    methods: {
        kendoWidget: function kendoWidget() {
            var widgetElement = this.$el;

            return kendo.jQuery(widgetElement).getKendoAutoComplete();
        }
    }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
    props: {
        disabled: Boolean,
        readonly: Boolean
    },
    render: function render(h) {
        return h('div');
    },
    created: function created() {
        this.resolveWidgetOptions();
        this.$_nativeTemplates = [];
        this.$on('kendowidgetready', this.ready);
    },
    beforeDestroy: function beforeDestroy() {
        if (this.kendoWidget() && this.kendoWidget().destroy) {
            this.kendoWidget().destroy();
            if (this.$_nativeTemplates.length) {
                for (var i = 0; i < this.$_nativeTemplates.length; i++) {
                    this.$_nativeTemplates[i].$destroy();
                }
            }
        }
    },
    mounted: function mounted() {
        if (this.$el.classList.length > 0) {
            this.nativeClasses = [].concat(_toConsumableArray(this.$el.classList));
        } else {
            this.nativeClasses = [];
        }

        for (var key in this.$options.propsData) {
            var that = this;

            if (key.toLowerCase().indexOf('template') !== -1) {
                var isFunction = this.widgetOptions[key] instanceof Function;

                if (isFunction) {
                    this.widgetOptions[key] = this.transformTemplate(key);
                }
            }

            if (key === 'value') {
                that.$watch(key, function (newValue) {
                    that.changeValue(newValue);
                });
            } else if (key === 'disabled') {
                that.$watch(key, function (newValue) {
                    that.makeDisabled(newValue);
                });
            } else if (key === 'readonly') {
                that.$watch(key, function (newValue) {
                    that.makeReadonly(newValue);
                });
            } else {
                that.$watch(key, function (newValue, oldValue) {
                    // Vue always dispatches a change when inline complex objects are bound
                    // https://github.com/telerik/kendo-ui-core/issues/3952
                    if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
                        that.updateWidget();
                    }
                });
            }
        }
    },

    watch: {
        $attrs: function $attrs() {
            this.toggleClasses();
        }
    },
    methods: {
        toggleClasses: function toggleClasses() {
            var that = this;
            var $element = kendo.jQuery(that.$el);
            var $wrapper = that.kendoWidget().wrapper;

            if ($wrapper && $wrapper[0] !== $element[0]) {
                that.nativeClasses.forEach(function (item) {
                    $wrapper.removeClass(item);
                });

                // Add to wrapper only the custom classes without the default Kendo ones
                if (that.kendoClasses) {
                    that.nativeClasses = [].concat(_toConsumableArray(that.$el.classList)).filter(function (item) {
                        return that.kendoClasses.indexOf(item) < 0;
                    });
                } else {
                    that.nativeClasses = [].concat(_toConsumableArray(that.$el.classList));
                }

                that.nativeClasses.forEach(function (item) {
                    $wrapper.addClass(item);
                });
            }

            if (that.kendoClasses) {
                that.kendoClasses.forEach(function (item) {
                    $element.addClass(item);
                });
            }
        },
        updateWidget: function updateWidget() {
            var that = this;

            that.resolveWidgetOptions();

            if (that._resolveChildren) {
                that._resolveChildren();
            }

            if (that.kendoWidget().setOptions) {
                that.kendoWidget().setOptions(that.widgetOptions);
            }
        },

        transformTemplate: function transformTemplate(key, val) {
            var that = this;
            var object;
            var templateDefinition = val || that.$options.propsData[key];
            try {
                object = templateDefinition.call(that, {});
            } catch (e) {
                return templateDefinition;
            }

            if (!object.template) {
                return templateDefinition;
            }

            return function () {
                object = templateDefinition.apply(this, arguments);
                var vueObject = new _vue2.default(object.template);
                vueObject.$data.templateArgs = object.templateArgs;

                var kendoguid = 'kendo' + kendo.guid();

                that.$nextTick(function () {
                    if (document.getElementById(kendoguid)) {
                        vueObject.$mount('#' + kendoguid);
                        that.$_nativeTemplates.push(vueObject);
                    }
                });

                return '<div id="' + kendoguid + '"></div>';
            };
        },
        resolveChildren: function resolveChildren(prop, name) {
            if (!this.widgetOptions[prop] && this.$slots.default) {
                var items = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.$slots.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var childSlot = _step.value;

                        if (childSlot.tag && childSlot.tag.indexOf(name) !== -1) {
                            var itemOptions = this.parseOptions(childSlot.componentInstance);

                            if (itemOptions.dataSourceRef) {
                                this.setInnerDataSource('dataSourceRef', 'dataSource', itemOptions);
                            }

                            items.push(itemOptions);
                            this.handleWatcher(childSlot.componentInstance);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                if (items.length) {
                    this.widgetOptions[prop] = items;
                }
            }
        },
        handleWatcher: function handleWatcher(childInstance) {
            var that = this;
            childInstance.stashedPropsData = JSON.stringify(childInstance.$options.propsData);

            if (!childInstance._isWatchAttached) {
                childInstance.$watch('$props', function () {
                    var propsAsJson = JSON.stringify(childInstance.$options.propsData);
                    var needsUpdate = childInstance.stashedPropsData !== propsAsJson;

                    if (that.updateWidget && needsUpdate) {
                        that.updateWidget();
                    } else if (that._resolveInnerChildren) {
                        that._resolveInnerChildren();
                    }

                    childInstance.stashedPropsData = propsAsJson;
                }, { deep: true });

                childInstance._isWatchAttached = true;
            }
        },
        makeDisabled: function makeDisabled(toDisable) {
            if (this.kendoWidget().enable) {
                this.kendoWidget().enable(!toDisable);
            }
        },
        makeReadonly: function makeReadonly(value) {
            if (this.kendoWidget().readonly) {
                this.kendoWidget().readonly(value);
            }
        },
        changeValue: function changeValue(newValue) {
            if (this.kendoWidget().value) {
                this.kendoWidget().value(newValue);
            }
        },
        resolveWidgetOptions: function resolveWidgetOptions() {
            this.widgetOptions = this.parseOptions();
        },
        parseOptions: function parseOptions(component) {
            var that = component || this;
            var options = {};
            for (var key in that.$options.propsData) {
                var propOptions = that.$options.props[key];
                var val = that.$options.propsData[key];

                var compositeProps = propOptions.kComposite;

                if (!compositeProps) {
                    if (key.toLowerCase().indexOf('template') !== -1 && val instanceof Function) {
                        options[key] = this.transformTemplate(key, val);
                    } else {
                        options[key] = val;
                    }
                } else {
                    this.addCompositeProperty(options, compositeProps.split('.'), that.$props[key]);
                }
            }

            Object.keys(that.$props).forEach(function (event) {
                if (that.$listeners && that.$listeners[event.toLowerCase()]) {
                    var kendoIndex = event.lastIndexOf('kendo');
                    var kendoEvent;
                    if (kendoIndex !== -1) {
                        kendoEvent = event.replace('kendo', '').toLowerCase();
                    }

                    options[kendoEvent || event] = that.$listeners[event.toLowerCase()];
                }
            });

            return options;
        },
        addCompositeProperty: function addCompositeProperty(obj, keys, val) {
            var lastKey = keys.pop();
            var lastObj = keys.reduce(function (obj, key) {
                obj[key] = _typeof(obj[key]) === 'object' ? obj[key] || {} : {};
                return obj[key];
            }, obj);

            if (lastKey.toLowerCase().indexOf('template') !== -1 && val instanceof Function) {
                lastObj[lastKey] = this.transformTemplate(lastKey, val);
            } else {
                lastObj[lastKey] = val;
            }
        },
        ready: function ready() {
            var that = this;

            if (this.$el.classList.length > 0) {
                that.kendoClasses = [].concat(_toConsumableArray(that.$el.classList)).filter(function (item) {
                    return that.nativeClasses.indexOf(item) < 0;
                });
            }

            if (that.$options.propsData && that.$options.propsData.disabled) {
                that.makeDisabled(true);
            }

            if (that.$options.propsData && that.$options.propsData.readonly) {
                that.makeReadonly(true);
            }
        }
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        dataSourceRef: String
    },
    render: function render(h) {
        return h('div');
    },

    methods: {
        findDataSource: function findDataSource() {
            var dataSource;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.$children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var a = _step.value;

                    if (this.$children.length && a.kendoDataSource) {
                        dataSource = a.kendoDataSource;
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return dataSource;
        },
        setInnerDataSource: function setInnerDataSource() {
            var dataSourceRefProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dataSourceRef';
            var rootProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dataSource';
            var subProp = arguments[2];

            var innerDataSource = this.findDataSource();

            if (innerDataSource) {
                if (!subProp) {
                    this.widgetOptions[rootProp] = innerDataSource;
                } else {
                    subProp[rootProp] = innerDataSource;
                }
            } else {
                var refString = subProp ? subProp[dataSourceRefProp] : this[dataSourceRefProp];
                var referredDataSource = this.getParentsRef(refString);

                if (referredDataSource) {
                    this.attachEvents(referredDataSource);
                    if (!subProp) {
                        this.widgetOptions[rootProp] = referredDataSource.kendoDataSource;
                    } else {
                        subProp[rootProp] = referredDataSource.kendoDataSource;
                    }
                }
            }
        },
        getParentsRef: function getParentsRef(anchor) {
            var parent = this.$parent;

            while (parent && !parent.$refs[anchor]) {
                parent = parent.$parent;
            }

            return parent ? parent.$refs[anchor] : undefined;
        },
        setDataSource: function setDataSource(newValue) {
            var newDataSourceRef = this.getParentsRef(newValue);
            var kendoWidget = this.kendoWidget();

            if (kendoWidget.setDataSource && newDataSourceRef) {
                kendoWidget.setDataSource(newDataSourceRef.kendoDataSource);
            } else if (kendoWidget.setDataSource) {
                kendoWidget.setDataSource(newValue);
            }
        },
        attachEvents: function attachEvents(referredDataSource) {
            if (referredDataSource.kendoDataSource) {
                referredDataSource.kendoDataSource.bind('change', function (ev) {
                    referredDataSource.$emit('change', ev);
                });

                referredDataSource.kendoDataSource.bind('error', function (ev) {
                    referredDataSource.$emit('error', ev);
                });

                referredDataSource.kendoDataSource.bind('push', function (ev) {
                    referredDataSource.$emit('push', ev);
                });

                referredDataSource.kendoDataSource.bind('requestEnd', function (ev) {
                    referredDataSource.$emit('requestend', ev);
                });

                referredDataSource.kendoDataSource.bind('requestStart', function (ev) {
                    referredDataSource.$emit('requeststart', ev);
                });

                referredDataSource.kendoDataSource.bind('sync', function (ev) {
                    referredDataSource.$emit('sync', ev);
                });
            }
        }
    },
    mounted: function mounted() {
        var that = this;

        that.$watch('dataSourceRef', function (newValue) {
            that.setDataSource(newValue);
        });
        that.$watch('dataSource', function (newValue) {
            that.setDataSource(newValue);
        });

        that.setInnerDataSource();
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    render: function render(h) {
        return h('input', {
            ref: 'valueInput',
            props: {
                value: this.value
            }
        });
    },

    model: {
        event: 'changemodel'
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        resolveInnerTags: function resolveInnerTags(tagName) {
            var items = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.$slots.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var childSlot = _step.value;

                    if (childSlot.tag && childSlot.tag.indexOf(tagName) !== -1) {
                        var childOptions = childSlot.componentOptions;
                        var item = childOptions.propsData;

                        if (!childOptions.propsData.items) {
                            item.items = childSlot.componentInstance.subitems;
                        }

                        items.push(item);
                        this.handleWatcher(childSlot.componentInstance);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return items;
        },
        handleWatcher: function handleWatcher(childInstance) {
            var that = this;

            if (!childInstance._isWatchAttached) {
                childInstance.$watch('$props', function () {
                    if (that.updateWidget) {
                        that.updateWidget();
                    } else if (that._resolveInnerChildren) {
                        that._resolveInnerChildren();
                    }
                }, { deep: true });

                childInstance._isWatchAttached = true;
            }
        }
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    animation: Boolean | Object,
    autoWidth: Boolean,
    dataSource: Object | Array,
    clearButton: Boolean,
    dataTextField: String,
    delay: Number,
    enable: Boolean,
    enforceMinLength: Boolean,
    filter: String,
    fixedGroupTemplate: String | Function,
    footerTemplate: String | Function,
    groupTemplate: String | Function,
    height: Number,
    highlightFirst: Boolean,
    ignoreCase: Boolean,
    minLength: Number,
    noDataTemplate: String | Function,
    placeholder: String,
    popup: Object,
    separator: String | Array,
    suggest: Boolean,
    headerTemplate: String | Function,
    template: String | Function,
    value: String | Number,
    valuePrimitive: Boolean,
    virtual: Boolean | Object,

    // Events
    change: Function,
    close: Function,
    dataBound: Function,
    filtering: Function,
    open: Function,
    select: Function
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(0);

var _DropDownListProps = __webpack_require__(19);

var _DropDownListProps2 = _interopRequireDefault(_DropDownListProps);

var _Animation = __webpack_require__(1);

var _Animation2 = _interopRequireDefault(_Animation);

var _Popup = __webpack_require__(3);

var _Popup2 = _interopRequireDefault(_Popup);

var _Virtual = __webpack_require__(2);

var _Virtual2 = _interopRequireDefault(_Virtual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _DropDownListProps2.default,
    render: function render(createElement) {
        return createElement('input', [this.$slots['kendo-datasource']]);
    },

    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _Animation2.default, _Popup2.default, _Virtual2.default],
    model: {
        event: 'changemodel'
    },
    mounted: function mounted() {
        var that = this;
        var widgetElement = that.$el;

        kendo.jQuery(widgetElement).kendoDropDownList(that.widgetOptions);

        that.$emit('kendowidgetready', that.kendoWidget());

        that.kendoWidget().bind('change', function () {
            that.$emit('changemodel', widgetElement.value);
        });
    },

    methods: {
        kendoWidget: function kendoWidget() {
            var widgetElement = this.$el;

            return kendo.jQuery(widgetElement).getKendoDropDownList();
        }
    }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    animation: Boolean | Object,
    autoBind: Boolean,
    autoWidth: Boolean,
    cascadeFrom: String,
    cascadeFromField: String,
    cascadeFromParentField: String,
    dataSource: Object | Array,
    dataTextField: String,
    dataValueField: String,
    delay: Number,
    enable: Boolean,
    enforceMinLength: Boolean,
    filter: String,
    fixedGroupTemplate: String | Function,
    footerTemplate: String | Function,
    groupTemplate: String | Function,
    height: Number,
    ignoreCase: Boolean,
    index: Number,
    minLength: Number,
    noDataTemplate: String | Function,
    popup: Object,
    optionLabel: String | Object,
    optionLabelTemplate: String | Function,
    headerTemplate: String | Function,
    template: String | Function,
    valueTemplate: String | Function,
    text: String,
    value: String | Number,
    valuePrimitive: Boolean,
    virtual: Boolean | Object,

    // Events
    change: Function,
    close: Function,
    dataBound: Function,
    filtering: Function,
    open: Function,
    select: Function,
    cascade: Function
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(0);

var _ComboBoxProps = __webpack_require__(21);

var _ComboBoxProps2 = _interopRequireDefault(_ComboBoxProps);

var _Animation = __webpack_require__(1);

var _Animation2 = _interopRequireDefault(_Animation);

var _Popup = __webpack_require__(3);

var _Popup2 = _interopRequireDefault(_Popup);

var _Virtual = __webpack_require__(2);

var _Virtual2 = _interopRequireDefault(_Virtual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    render: function render(createElement) {
        return createElement('input', [this.$slots['kendo-datasource']]);
    },

    props: _ComboBoxProps2.default,
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _Animation2.default, _Popup2.default, _Virtual2.default],
    model: {
        event: 'changemodel'
    },
    mounted: function mounted() {
        var that = this;
        var widgetElement = that.$el;

        kendo.jQuery(widgetElement).kendoComboBox(that.widgetOptions);

        that.$emit('kendowidgetready', that.kendoWidget());

        that.kendoWidget().bind('change', function () {
            that.$emit('changemodel', widgetElement.value);
        });
    },

    methods: {
        kendoWidget: function kendoWidget() {
            var widgetElement = this.$el;

            return kendo.jQuery(widgetElement).getKendoComboBox();
        }
    }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    animation: Object,
    autoBind: Boolean,
    autoWidth: Boolean,
    cascadeFrom: String,
    cascadeFromField: String,
    cascadeFromParentField: String,
    clearButton: Boolean,
    dataSource: Object | Array,
    dataTextField: String,
    dataValueField: String,
    delay: Number,
    enable: Boolean,
    enforceMinLength: Boolean,
    filter: String,
    fixedGroupTemplate: String | Function,
    footerTemplate: String | Function,
    groupTemplate: String | Function,
    height: Number,
    highlightFirst: Boolean,
    ignoreCase: Boolean,
    index: Number,
    minLength: Number,
    noDataTemplate: String | Function,
    placeholder: String,
    popup: Object,
    suggest: Boolean,
    syncValueAndText: Boolean,
    headerTemplate: String | Function,
    template: String | Function,
    text: String,
    value: String | Number,
    valuePrimitive: Boolean,
    virtual: Boolean | Object,

    // Events
    change: Function,
    close: Function,
    dataBound: Function,
    filtering: Function,
    open: Function,
    select: Function,
    cascade: Function
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(0);

var _MultiColumnComboBoxProps = __webpack_require__(23);

var _MultiColumnComboBoxProps2 = _interopRequireDefault(_MultiColumnComboBoxProps);

var _KendoMultiColumnComboBoxColumn = __webpack_require__(4);

var _KendoMultiColumnComboBoxColumn2 = _interopRequireDefault(_KendoMultiColumnComboBoxColumn);

var _Animation = __webpack_require__(1);

var _Animation2 = _interopRequireDefault(_Animation);

var _Popup = __webpack_require__(3);

var _Popup2 = _interopRequireDefault(_Popup);

var _Virtual = __webpack_require__(2);

var _Virtual2 = _interopRequireDefault(_Virtual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    render: function render(createElement) {
        return createElement('input', [this.$slots['kendo-datasource'], this.$slots['default']]);
    },

    props: _MultiColumnComboBoxProps2.default,
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _Animation2.default, _Popup2.default, _Virtual2.default],
    model: {
        event: 'changemodel'
    },
    mounted: function mounted() {
        var that = this;
        var widgetElement = that.$el;
        that._resolveChildren();
        kendo.jQuery(this.$el).kendoMultiColumnComboBox(this.widgetOptions);

        that.$emit('kendowidgetready', that.kendoWidget());

        that.kendoWidget().bind('change', function () {
            that.$emit('changemodel', widgetElement.value);
        });
    },

    methods: {
        kendoWidget: function kendoWidget() {
            var widgetElement = this.$el;
            return kendo.jQuery(widgetElement).getKendoMultiColumnComboBox();
        },
        _resolveChildren: function _resolveChildren() {
            this.resolveChildren('columns', _KendoMultiColumnComboBoxColumn2.default.name);
        }
    }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    animation: Object,
    autoBind: Boolean,
    cascadeFrom: String,
    cascadeFromField: String,
    cascadeFromParentField: String,
    columns: Array,
    clearButton: Boolean,
    dataSource: Object | Array,
    dataTextField: String,
    dataValueField: String,
    dropDownWidth: String | Number,
    delay: Number,
    enable: Boolean,
    enforceMinLength: Boolean,
    filter: String,
    filterFields: Array,
    fixedGroupTemplate: String | Function,
    footerTemplate: String | Function,
    groupTemplate: String | Function,
    height: Number,
    highlightFirst: Boolean,
    ignoreCase: Boolean,
    index: Number,
    minLength: Number,
    noDataTemplate: String | Function,
    placeholder: String,
    popup: Object,
    suggest: Boolean,
    syncValueAndText: Boolean,
    headerTemplate: String | Function,
    text: String,
    value: String,
    valuePrimitive: Boolean,
    virtual: Boolean | Object,

    // Events
    change: Function,
    close: Function,
    dataBound: Function,
    filtering: Function,
    open: Function,
    select: Function,
    cascade: Function
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        field: String,
        title: String,
        template: String | Function,
        headerTemplate: String | Function,
        width: String | Number
    }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(0);

var _MultiSelectProps = __webpack_require__(26);

var _MultiSelectProps2 = _interopRequireDefault(_MultiSelectProps);

var _Animation = __webpack_require__(1);

var _Animation2 = _interopRequireDefault(_Animation);

var _Popup = __webpack_require__(3);

var _Popup2 = _interopRequireDefault(_Popup);

var _Virtual = __webpack_require__(2);

var _Virtual2 = _interopRequireDefault(_Virtual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _MultiSelectProps2.default,
    render: function render(createElement) {
        return createElement('select', [this.$slots['kendo-datasource']]);
    },

    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _Animation2.default, _Popup2.default, _Virtual2.default],
    mounted: function mounted() {
        var that = this;
        var widgetElement = that.$el;

        kendo.jQuery(widgetElement).kendoMultiSelect(that.widgetOptions);

        that.$emit('kendowidgetready', that.kendoWidget());

        that.kendoWidget().bind('change', function () {
            that.$emit('changemodel', that.kendoWidget().value());
        });
    },

    methods: {
        kendoWidget: function kendoWidget() {
            var widgetElement = this.$el;

            return kendo.jQuery(widgetElement).getKendoMultiSelect();
        }
    },
    model: {
        event: 'changemodel'
    }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    animation: Boolean | Object,
    autoBind: Boolean,
    autoClose: Boolean,
    autoWidth: Boolean,
    clearButton: Boolean,
    dataSource: Object | Array,
    dataTextField: String,
    dataValueField: String,
    delay: Number,
    enable: Boolean,
    enforceMinLength: Boolean,
    filter: String,
    fixedGroupTemplate: String | Function,
    footerTemplate: String | Function,
    groupTemplate: String | Function,
    height: Number,
    highlightFirst: Boolean,
    ignoreCase: Boolean,
    minLength: Number,
    maxSelectedItems: Number,
    noDataTemplate: String | Function,
    placeholder: String,
    popup: Object,
    headerTemplate: String | Function,
    itemTemplate: String | Function,
    tagTemplate: String | Function,
    tagMode: String,
    value: Array | Number,
    valuePrimitive: Boolean,
    virtual: Boolean | Object,

    // Events
    change: Function,
    close: Function,
    dataBound: Function,
    filtering: Function,
    open: Function,
    select: Function,
    deselect: Function
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KendoAutoComplete = __webpack_require__(5);

var _KendoAutoComplete2 = _interopRequireDefault(_KendoAutoComplete);

var _KendoDropDownList = __webpack_require__(7);

var _KendoDropDownList2 = _interopRequireDefault(_KendoDropDownList);

var _KendoComboBox = __webpack_require__(8);

var _KendoComboBox2 = _interopRequireDefault(_KendoComboBox);

var _KendoMultiSelect = __webpack_require__(10);

var _KendoMultiSelect2 = _interopRequireDefault(_KendoMultiSelect);

var _KendoMultiColumnComboBox = __webpack_require__(9);

var _KendoMultiColumnComboBox2 = _interopRequireDefault(_KendoMultiColumnComboBox);

var _KendoMultiColumnComboBoxColumn = __webpack_require__(4);

var _KendoMultiColumnComboBoxColumn2 = _interopRequireDefault(_KendoMultiColumnComboBoxColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KendoDropdownsInstaller = function () {
    function KendoDropdownsInstaller() {
        _classCallCheck(this, KendoDropdownsInstaller);
    }

    _createClass(KendoDropdownsInstaller, null, [{
        key: 'install',
        value: function install(Vue) {
            Vue.component(_KendoAutoComplete2.default.name, _KendoAutoComplete2.default);
            Vue.component(_KendoDropDownList2.default.name, _KendoDropDownList2.default);
            Vue.component(_KendoComboBox2.default.name, _KendoComboBox2.default);
            Vue.component(_KendoMultiSelect2.default.name, _KendoMultiSelect2.default);
            Vue.component(_KendoMultiColumnComboBox2.default.name, _KendoMultiColumnComboBox2.default);
            Vue.component(_KendoMultiColumnComboBoxColumn2.default.name, _KendoMultiColumnComboBoxColumn2.default);
        }
    }]);

    return KendoDropdownsInstaller;
}();

exports.default = KendoDropdownsInstaller;

// Automatic installation if Vue has been added to the global scope.

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(KendoDropdownsInstaller);
}

/***/ })
/******/ ]);
});
//