(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["KendoGridVueWrapper"] = factory(require("vue"));
	else
		root["KendoGridVueWrapper"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Columns = __webpack_require__(11);

var _Columns2 = _interopRequireDefault(_Columns);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KendoGridColumn = {
    name: 'kendo-grid-column',
    render: function render() {
        return _vue2.default.prototype._e;
    },

    mixins: [_Columns2.default]
};

exports.default = KendoGridColumn;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoGridMixin = __webpack_require__(5);

var _KendoGridMixin2 = _interopRequireDefault(_KendoGridMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-grid',
    mixins: [_KendoGridMixin2.default]
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Toolbar = __webpack_require__(12);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KendoGridToolbar = {
    name: 'kendo-grid-toolbar-item',
    render: function render() {
        return _vue2.default.prototype._e;
    },

    mixins: [_Toolbar2.default]
};

exports.default = KendoGridToolbar;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridInstaller = exports.KendoGridInstaller = exports.GridColumn = exports.KendoGridColumn = exports.Grid = exports.KendoGrid = undefined;

var _KendoGrid = __webpack_require__(2);

var _KendoGrid2 = _interopRequireDefault(_KendoGrid);

var _KendoGridColumn = __webpack_require__(1);

var _KendoGridColumn2 = _interopRequireDefault(_KendoGridColumn);

var _kendoGridInstaller = __webpack_require__(26);

var _kendoGridInstaller2 = _interopRequireDefault(_kendoGridInstaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.KendoGrid = _KendoGrid2.default;
exports.Grid = _KendoGrid2.default;
exports.KendoGridColumn = _KendoGridColumn2.default;
exports.GridColumn = _KendoGridColumn2.default;
exports.KendoGridInstaller = _kendoGridInstaller2.default;
exports.GridInstaller = _kendoGridInstaller2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(6);

var _KendoGridColumn = __webpack_require__(1);

var _KendoGridColumn2 = _interopRequireDefault(_KendoGridColumn);

var _KendoGridToolbar = __webpack_require__(3);

var _KendoGridToolbar2 = _interopRequireDefault(_KendoGridToolbar);

var _GridProps = __webpack_require__(13);

var _GridProps2 = _interopRequireDefault(_GridProps);

var _AllowCopy = __webpack_require__(14);

var _AllowCopy2 = _interopRequireDefault(_AllowCopy);

var _ColumnMenu = __webpack_require__(15);

var _ColumnMenu2 = _interopRequireDefault(_ColumnMenu);

var _Editable = __webpack_require__(16);

var _Editable2 = _interopRequireDefault(_Editable);

var _Excel = __webpack_require__(17);

var _Excel2 = _interopRequireDefault(_Excel);

var _Filterable = __webpack_require__(18);

var _Filterable2 = _interopRequireDefault(_Filterable);

var _Groupable = __webpack_require__(19);

var _Groupable2 = _interopRequireDefault(_Groupable);

var _Messages = __webpack_require__(20);

var _Messages2 = _interopRequireDefault(_Messages);

var _NoRecords = __webpack_require__(21);

var _NoRecords2 = _interopRequireDefault(_NoRecords);

var _Pageable = __webpack_require__(22);

var _Pageable2 = _interopRequireDefault(_Pageable);

var _Pdf = __webpack_require__(23);

var _Pdf2 = _interopRequireDefault(_Pdf);

var _Scrollable = __webpack_require__(24);

var _Scrollable2 = _interopRequireDefault(_Scrollable);

var _Sortable = __webpack_require__(25);

var _Sortable2 = _interopRequireDefault(_Sortable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _GridProps2.default,
    render: function render(h) {
        return h('div', [this.$slots['kendo-datasource'], this.$slots.default]);
    },

    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _AllowCopy2.default, _ColumnMenu2.default, _Editable2.default, _Excel2.default, _Filterable2.default, _Groupable2.default, _Messages2.default, _NoRecords2.default, _Pageable2.default, _Pdf2.default, _Scrollable2.default, _Sortable2.default],
    mounted: function mounted() {
        this._resolveChildren();
        kendo.jQuery(this.$el).kendoGrid(this.widgetOptions);

        this.$emit('kendowidgetready', this.kendoWidget());
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return kendo.jQuery(this.$el).getKendoGrid();
        },
        _resolveChildren: function _resolveChildren() {
            this.resolveChildren('columns', _KendoGridColumn2.default.name);
            this.resolveChildren('toolbar', _KendoGridToolbar2.default.name);
        }
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KendoSharedMethods = exports.KendoBaseInputComponent = exports.KendoBaseDatasourceComponent = exports.KendoBaseComponent = undefined;

var _kendoBaseComponent = __webpack_require__(7);

var _kendoBaseComponent2 = _interopRequireDefault(_kendoBaseComponent);

var _kendoBaseDatasourceComponent = __webpack_require__(8);

var _kendoBaseDatasourceComponent2 = _interopRequireDefault(_kendoBaseDatasourceComponent);

var _kendoBaseInputComponent = __webpack_require__(9);

var _kendoBaseInputComponent2 = _interopRequireDefault(_kendoBaseInputComponent);

var _kendoSharedMethods = __webpack_require__(10);

var _kendoSharedMethods2 = _interopRequireDefault(_kendoSharedMethods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.KendoBaseComponent = _kendoBaseComponent2.default;
exports.KendoBaseDatasourceComponent = _kendoBaseDatasourceComponent2.default;
exports.KendoBaseInputComponent = _kendoBaseInputComponent2.default;
exports.KendoSharedMethods = _kendoSharedMethods2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vue = __webpack_require__(0);

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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        aggregates: Array,
        attributes: Object,
        columns: Array,
        command: String | Array,
        editable: Function,
        editor: Function,
        encoded: Boolean,
        field: String,
        filterable: Boolean | Object,
        filterableCellDataSource: {
            type: Object,
            kComposite: 'filterable.cell.dataSource'
        },
        filterableCellDataTextField: {
            type: String,
            kComposite: 'filterable.cell.dataTextField'
        },
        filterableCellDelay: {
            type: Number,
            kComposite: 'filterable.cell.delay'
        },
        filterableCellInputWidth: {
            type: Number,
            kComposite: 'filterable.cell.inputWidth'
        },
        filterableCellSuggestionOperator: {
            type: String,
            kComposite: 'filterable.cell.suggestionOperator'
        },
        filterableCellMinLength: {
            type: Number,
            kComposite: 'filterable.cell.minLength'
        },
        filterableCellEnabled: {
            type: Boolean,
            kComposite: 'filterable.cell.enabled'
        },
        filterableCellOperator: {
            type: String,
            kComposite: 'filterable.cell.operator'
        },
        filterableCellShowOperators: {
            type: Boolean,
            kComposite: 'filterable.cell.showOperators'
        },
        filterableCellTemplate: {
            type: Function,
            kComposite: 'filterable.cell.template'
        },
        filterableMulti: {
            type: Boolean,
            kComposite: 'filterable.multi'
        },
        filterableDataSource: {
            type: Object | Array,
            kComposite: 'filterable.dataSource'
        },
        filterableCheckAll: {
            type: Boolean,
            kComposite: 'filterable.checkAll'
        },
        filterableItemTemplate: {
            type: Function,
            kComposite: 'filterable.itemTemplate'
        },
        filterableOperators: {
            type: Object,
            kComposite: 'filterable.operators'
        },
        filterableSearch: {
            type: Boolean,
            kComposite: 'filterable.search'
        },
        filterableIgnoreCase: {
            type: Boolean,
            kComposite: 'filterable.ignoreCase'
        },
        filterableUi: {
            type: String | Function,
            kComposite: 'filterable.ui'
        },
        footerAttributes: {
            type: Object,
            kComposite: 'footerAttributes'
        },
        footerTemplate: {
            type: String | Function,
            kComposite: 'footerTemplate'
        },
        format: String,
        groupable: Boolean | Object,
        groupableSortCompare: {
            type: Function,
            kComposite: 'groupable.sort.compare'
        },
        groupableSortDir: {
            type: String,
            kComposite: 'groupable.sort.dir'
        },
        groupHeaderTemplate: {
            type: String | Function,
            kComposite: 'groupHeaderTemplate'
        },
        groupHeaderColumnTemplate: {
            type: String | Function,
            kComposite: 'groupHeaderColumnTemplate'
        },
        groupFooterTemplate: {
            type: String | Function,
            kComposite: 'groupFooterTemplate'
        },
        headerAttributes: {
            type: Object,
            kComposite: 'headerAttributes'
        },
        headerTemplate: {
            type: String | Function,
            kComposite: 'headerTemplate'
        },
        hidden: {
            type: Boolean,
            kComposite: 'hidden'
        },
        locked: Boolean,
        lockable: Boolean,
        media: String,
        minResizableWidth: {
            type: Number,
            kComposite: 'minResizableWidth'
        },
        minScreenWidth: {
            type: Number,
            kComposite: 'minScreenWidth'
        },
        selectable: Boolean,
        sortable: Boolean,
        sortableCompare: {
            type: Function,
            kComposite: 'sortable.compare'
        },
        sortableInitialDirection: {
            type: String,
            kComposite: 'sortable.initialDirection'
        },
        template: String | Function,
        title: String,
        width: String | Number,
        values: Array,
        menu: Boolean
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        iconClass: {
            type: String,
            kComposite: 'iconClass'
        },
        name: {
            type: String,
            kComposite: 'name'
        },
        template: {
            type: String | Function,
            kComposite: 'template'
        },
        text: {
            type: String,
            kComposite: 'text'
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
exports.default = {
    allowCopy: Boolean | Object,
    altRowTemplate: String | Function,
    autoBind: Boolean,
    columnResizeHandleWidth: Number,
    columns: Array,
    columnMenu: Boolean | Object,
    dataSource: Object | Array,
    detailTemplate: String | Function,
    editable: Boolean | Object,
    excel: Object,
    filterable: Boolean | Object,
    groupable: Boolean | Object,
    height: Number | String,
    messages: Object,
    mobile: Boolean | String,
    navigatable: Boolean,
    noRecords: Boolean | Object,
    pageable: Boolean | Object,
    pdf: Object,
    persistSelection: Boolean,
    reorderable: Boolean,
    resizable: Boolean,
    rowTemplate: String | Function,
    scrollable: Boolean | Object,
    selectable: Boolean | String,
    sortable: Boolean | Object,
    toolbar: String | Function | Array,

    // Events
    beforeEdit: Function,
    cancel: Function,
    cellClose: Function,
    change: Function,
    columnHide: Function,
    columnMenuInit: Function,
    columnMenuOpen: Function,
    columnReorder: Function,
    columnResize: Function,
    columnShow: Function,
    dataBinding: Function,
    dataBound: Function,
    detailCollapse: Function,
    detailExpand: Function,
    detailInit: Function,
    edit: Function,
    excelExport: Function,
    filter: Function,
    group: Function,
    groupCollapse: Function,
    groupExpand: Function,
    page: Function,
    pdfExport: Function,
    filterMenuInit: Function,
    filterMenuOpen: Function,
    remove: Function,
    save: Function,
    saveChanges: Function,
    sort: Function,
    columnLock: Function,
    columnUnlock: Function,
    navigate: Function
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
        allowCopyDelimeter: {
            type: String | Object,
            kComposite: 'allowCopy.delimeter'
        }
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
    props: {
        columnMenuColumns: {
            type: Boolean,
            kComposite: 'columnMenu.columns'
        },
        columnMenuFilterable: {
            type: Boolean,
            kComposite: 'columnMenu.filterable'
        },
        columnMenuSortable: {
            type: Boolean,
            kComposite: 'columnMenu.sortable'
        },
        columnMenuMessagesColumns: {
            type: String,
            kComposite: 'columnMenu.messages.columns'
        },
        columnMenuMessagesFilter: {
            type: String,
            kComposite: 'columnMenu.messages.filter'
        },
        columnMenuMessagesSortAscending: {
            type: String,
            kComposite: 'columnMenu.messages.sortAscending'
        },
        columnMenuMessagesSortDescending: {
            type: String,
            kComposite: 'columnMenu.messages.sortDescending'
        },
        columnMenuMessagesSettings: {
            type: String,
            kComposite: 'columnMenu.messages.settings'
        },
        columnMenuMessagesDone: {
            type: String,
            kComposite: 'columnMenu.messages.done'
        },
        columnMenuMessagesLock: {
            type: String,
            kComposite: 'columnMenu.messages.lock'
        },
        columnMenuMessagesUnlock: {
            type: String,
            kComposite: 'columnMenu.messages.unlock'
        }
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
    props: {
        editableConfirmation: {
            type: Boolean | String | Function,
            kComposite: 'editable.confirmation'
        },
        editableCancelDelete: {
            type: String,
            kComposite: 'editable.cancelDelete'
        },
        editableConfirmDelete: {
            type: String,
            kComposite: 'editable.confirmDelete'
        },
        editableCreateAt: {
            type: String,
            kComposite: 'editable.createAt'
        },
        editableDestroy: {
            type: Boolean,
            kComposite: 'editable.destroy'
        },
        editableMode: {
            type: String,
            kComposite: 'editable.mode'
        },
        editableTemplate: {
            type: String | Function,
            kComposite: 'editable.template'
        },
        editableUpdate: {
            type: Boolean,
            kComposite: 'editable.update'
        },
        editableWindow: {
            type: Object,
            kComposite: 'editable.window'
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
    props: {
        excelAllPages: {
            type: Boolean,
            kComposite: 'excel.allPages'
        },
        excelFileName: {
            type: String,
            kComposite: 'excel.fileName'
        },
        excelFilterable: {
            type: Boolean,
            kComposite: 'excel.filterable'
        },
        excelForceProxy: {
            type: Boolean,
            kComposite: 'excel.forceProxy'
        },
        excelProxyURL: {
            type: String,
            kComposite: 'excel.proxyURL'
        }
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        filterableExtra: {
            type: Boolean,
            kComposite: 'filterable.extra'
        },
        filterableMessagesAnd: {
            type: String,
            kComposite: 'filterable.messages.and'
        },
        filterableMessagesClear: {
            type: String,
            kComposite: 'filterable.messages.clear'
        },
        filterableMessagesFilter: {
            type: String,
            kComposite: 'filterable.messages.filter'
        },
        filterableMessagesInfo: {
            type: String,
            kComposite: 'filterable.messages.info'
        },
        filterableMessagesIsFalse: {
            type: String,
            kComposite: 'filterable.messages.isFalse'
        },
        filterableMessagesIsTrue: {
            type: String,
            kComposite: 'filterable.messages.isTrue'
        },
        filterableMessagesOr: {
            type: String,
            kComposite: 'filterable.messages.or'
        },
        filterableMessagesSearch: {
            type: String,
            kComposite: 'filterable.messages.search'
        },
        filterableMessagesSelectValue: {
            type: String,
            kComposite: 'filterable.messages.selectValue'
        },
        filterableMessagesCancel: {
            type: String,
            kComposite: 'filterable.messages.cancel'
        },
        filterableMessagesSelectedItemsFormat: {
            type: String,
            kComposite: 'filterable.messages.selectedItemsFormat'
        },
        filterableMessagesOperator: {
            type: String,
            kComposite: 'filterable.messages.operator'
        },
        filterableMessagesValue: {
            type: String,
            kComposite: 'filterable.messages.value'
        },
        filterableMessagesCheckAll: {
            type: String,
            kComposite: 'filterable.messages.checkAll'
        },
        filterableMode: {
            type: String,
            kComposite: 'filterable.mode'
        },
        filterableOperatorsStringEq: {
            type: String,
            kComposite: 'filterable.operators.string.eq'
        },
        filterableOperatorsStringNeq: {
            type: String,
            kComposite: 'filterable.operators.string.neq'
        },
        filterableOperatorsStringIsnull: {
            type: String,
            kComposite: 'filterable.operators.string.isnull'
        },
        filterableOperatorsStringIsnotnull: {
            type: String,
            kComposite: 'filterable.operators.string.isnotnull'
        },
        filterableOperatorsStringIsempty: {
            type: String,
            kComposite: 'filterable.operators.string.isempty'
        },
        filterableOperatorsStringIsnotempty: {
            type: String,
            kComposite: 'filterable.operators.string.isnotempty'
        },
        filterableOperatorsStringStartswith: {
            type: String,
            kComposite: 'filterable.operators.string.startswith'
        },
        filterableOperatorsStringContains: {
            type: String,
            kComposite: 'filterable.operators.string.contains'
        },
        filterableOperatorsStringDoesnotcontain: {
            type: String,
            kComposite: 'filterable.operators.string.doesnotcontain'
        },
        filterableOperatorsStringEndswith: {
            type: String,
            kComposite: 'filterable.operators.string.endswith'
        },
        filterableOperatorsNumberEq: {
            type: String,
            kComposite: 'filterable.operators.number.eq'
        },
        filterableOperatorsNumberNeq: {
            type: String,
            kComposite: 'filterable.operators.number.neq'
        },
        filterableOperatorsNumberIsnull: {
            type: String,
            kComposite: 'filterable.operators.number.isnull'
        },
        filterableOperatorsNumberIsnotnull: {
            type: String,
            kComposite: 'filterable.operators.number.isnotnull'
        },
        filterableOperatorsNumberGte: {
            type: String,
            kComposite: 'filterable.operators.number.gte'
        },
        filterableOperatorsNumberGt: {
            type: String,
            kComposite: 'filterable.operators.number.gt'
        },
        filterableOperatorsNumberLte: {
            type: String,
            kComposite: 'filterable.operators.number.lte'
        },
        filterableOperatorsNumberLt: {
            type: String,
            kComposite: 'filterable.operators.number.lt'
        },
        filterableOperatorsDateEq: {
            type: String,
            kComposite: 'filterable.operators.date.eq'
        },
        filterableOperatorsDateNeq: {
            type: String,
            kComposite: 'filterable.operators.date.neq'
        },
        filterableOperatorsDateIsnull: {
            type: String,
            kComposite: 'filterable.operators.date.isnull'
        },
        filterableOperatorsDateIsnotnull: {
            type: String,
            kComposite: 'filterable.operators.date.isnotnull'
        },
        filterableOperatorsDateGte: {
            type: String,
            kComposite: 'filterable.operators.date.gte'
        },
        filterableOperatorsDateGt: {
            type: String,
            kComposite: 'filterable.operators.date.gt'
        },
        filterableOperatorsDateLte: {
            type: String,
            kComposite: 'filterable.operators.date.lte'
        },
        filterableOperatorsDateLt: {
            type: String,
            kComposite: 'filterable.operators.date.lt'
        },
        filterableOperatorsEnumsEq: {
            type: String,
            kComposite: 'filterable.operators.enums.eq'
        },
        filterableOperatorsEnumsNeq: {
            type: String,
            kComposite: 'filterable.operators.enums.neq'
        },
        filterableOperatorsEnumsIsnull: {
            type: String,
            kComposite: 'filterable.operators.enums.isnull'
        },
        filterableOperatorsEnumsIsnotnull: {
            type: String,
            kComposite: 'filterable.operators.enums.isnotnull'
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
    props: {
        groupableEnabled: {
            type: Boolean,
            kComposite: 'groupable.enabled'
        },
        groupableShowFooter: {
            type: Boolean,
            kComposite: 'groupable.showFooter'
        },
        groupableSortCompare: {
            type: Function,
            kComposite: 'groupable.sort.compare'
        },
        groupableSortDir: {
            type: String,
            kComposite: 'groupable.sort.dir'
        },
        groupableMessagesEmpty: {
            type: String,
            kComposite: 'groupable.messages.empty'
        }
    }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        messagesCommandsCancel: {
            type: String,
            kComposite: 'messages.commands.cancel'
        },
        messagesCommandsCanceledit: {
            type: String,
            kComposite: 'messages.commands.canceledit'
        },
        messagesCommandsCreate: {
            type: String,
            kComposite: 'messages.commands.create'
        },
        messagesCommandsDestroy: {
            type: String,
            kComposite: 'messages.commands.destroy'
        },
        messagesCommandsEdit: {
            type: String,
            kComposite: 'messages.commands.edit'
        },
        messagesCommandsExcel: {
            type: String,
            kComposite: 'messages.commands.excel'
        },
        messagesCommandsSave: {
            type: String,
            kComposite: 'messages.commands.save'
        },
        messagesCommandsUpdate: {
            type: String,
            kComposite: 'messages.commands.update'
        },
        messagesNoRecords: {
            type: String,
            kComposite: 'messages.noRecords'
        },
        messagesExpandCollapseColumnHeader: {
            type: String,
            kComposite: 'messages.expandCollapseColumnHeader'
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
    props: {
        noRecordsTemplate: {
            type: String | Function,
            kComposite: 'noRecords.template'
        }
    }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        pageableAlwaysVisible: {
            type: Boolean,
            kComposite: 'pageable.alwaysVisible'
        },
        pageablePageSize: {
            type: Number,
            kComposite: 'pageable.pageSize'
        },
        pageablePreviousNext: {
            type: Boolean,
            kComposite: 'pageable.previousNext'
        },
        pageableNumeric: {
            type: Boolean,
            kComposite: 'pageable.numeric'
        },
        pageableButtonCount: {
            type: Number,
            kComposite: 'pageable.buttonCount'
        },
        pageableInput: {
            type: Boolean,
            kComposite: 'pageable.input'
        },
        pageablePageSizes: {
            type: Boolean | Array,
            kComposite: 'pageable.pageSizes'
        },
        pageableRefresh: {
            type: Boolean,
            kComposite: 'pageable.refresh'
        },
        pageableResponsive: {
            type: Boolean,
            kComposite: 'pageable.responsive'
        },
        pageableInfo: {
            type: Boolean,
            kComposite: 'pageable.info'
        },
        pageableMessagesDisplay: {
            type: String,
            kComposite: 'pageable.messages.display'
        },
        pageableMessagesEmpty: {
            type: String,
            kComposite: 'pageable.messages.empty'
        },
        pageableMessagesPage: {
            type: String,
            kComposite: 'pageable.messages.page'
        },
        pageableMessagesOf: {
            type: String,
            kComposite: 'pageable.messages.of'
        },
        pageableMessagesItemsPerPage: {
            type: String,
            kComposite: 'pageable.messages.itemsPerPage'
        },
        pageableMessagesFirst: {
            type: String,
            kComposite: 'pageable.messages.first'
        },
        pageableMessagesLast: {
            type: String,
            kComposite: 'pageable.messages.last'
        },
        pageableMessagesNext: {
            type: String,
            kComposite: 'pageable.messages.next'
        },
        pageableMessagesPrevious: {
            type: String,
            kComposite: 'pageable.messages.previous'
        },
        pageableMessagesRefresh: {
            type: String,
            kComposite: 'pageable.messages.refresh'
        },
        pageableMessagesMorePages: {
            type: String,
            kComposite: 'pageable.messages.morePages'
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
    props: {
        pdfAllPages: {
            type: Boolean,
            kComposite: 'pdf.allPages'
        },
        pdfAuthor: {
            type: String,
            kComposite: 'pdf.author'
        },
        pdfAvoidLinks: {
            type: Boolean | String,
            kComposite: 'pdf.avoidLinks'
        },
        pdfCreator: {
            type: String,
            kComposite: 'pdf.creator'
        },
        pdfDate: {
            type: Date,
            kComposite: 'pdf.date'
        },
        pdfFileName: {
            type: String,
            kComposite: 'pdf.fileName'
        },
        pdfForceProxy: {
            type: Boolean,
            kComposite: 'pdf.forceProxy'
        },
        pdfKeywords: {
            type: String,
            kComposite: 'pdf.keywords'
        },
        pdfLandscape: {
            type: Boolean,
            kComposite: 'pdf.landscape'
        },
        pdfMarginBottom: {
            type: Number | String,
            kComposite: 'pdf.margin.bottom'
        },
        pdfMarginLeft: {
            type: Number | String,
            kComposite: 'pdf.margin.left'
        },
        pdfMarginRight: {
            type: Number | String,
            kComposite: 'pdf.margin.right'
        },
        pdfMarginTop: {
            type: Number | String,
            kComposite: 'pdf.margin.top'
        },
        pdfPaperSize: {
            type: String | Array,
            kComposite: 'pdf.paperSize'
        },
        pdfTemplate: {
            type: String,
            kComposite: 'pdf.template'
        },
        pdfRepeatHeaders: {
            type: Boolean,
            kComposite: 'pdf.repeatHeaders'
        },
        pdfScale: {
            type: Number,
            kComposite: 'pdf.scale'
        },
        pdfProxyURL: {
            type: String,
            kComposite: 'pdf.proxyURL'
        },
        pdfProxyTarget: {
            type: String,
            kComposite: 'pdf.proxyTarget'
        },
        pdfSubject: {
            type: String,
            kComposite: 'pdf.subject'
        },
        pdfTitle: {
            type: String,
            kComposite: 'pdf.title'
        }
    }
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
        scrollableVirtual: {
            type: Boolean,
            kComposite: 'scrollable.virtual'
        },
        scrollableEndless: {
            type: Boolean,
            kComposite: 'scrollable.endless'
        }
    }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        sortableAllowUnsort: {
            type: Boolean,
            kComposite: 'sortable.allowUnsort'
        },
        sortableShowIndexes: {
            type: Boolean,
            kComposite: 'sortable.showIndexes'
        },
        sortableInitialDirection: {
            type: String,
            kComposite: 'sortable.initialDirection'
        },
        sortableMode: {
            type: String,
            kComposite: 'sortable.mode'
        }
    }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KendoGrid = __webpack_require__(2);

var _KendoGrid2 = _interopRequireDefault(_KendoGrid);

var _KendoGridColumn = __webpack_require__(1);

var _KendoGridColumn2 = _interopRequireDefault(_KendoGridColumn);

var _KendoGridToolbar = __webpack_require__(3);

var _KendoGridToolbar2 = _interopRequireDefault(_KendoGridToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KendoGridInstaller = function () {
    function KendoGridInstaller() {
        _classCallCheck(this, KendoGridInstaller);
    }

    _createClass(KendoGridInstaller, null, [{
        key: 'install',
        value: function install(Vue) {
            Vue.component(_KendoGrid2.default.name, _KendoGrid2.default);
            Vue.component(_KendoGridColumn2.default.name, _KendoGridColumn2.default);
            Vue.component(_KendoGridToolbar2.default.name, _KendoGridToolbar2.default);
        }
    }]);

    return KendoGridInstaller;
}();

exports.default = KendoGridInstaller;

// Automatic installation if Vue has been added to the global scope.

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(KendoGridInstaller);
}

/***/ })
/******/ ]);
});
//