(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["KendoDatasourceVueWrapper"] = factory(require("vue"));
	else
		root["KendoDatasourceVueWrapper"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoDataSourceBaseMixin = __webpack_require__(14);

var _KendoDataSourceBaseMixin2 = _interopRequireDefault(_KendoDataSourceBaseMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-datasource',
    mixins: [_KendoDataSourceBaseMixin2.default]
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Columns = __webpack_require__(41);

var _Columns2 = _interopRequireDefault(_Columns);

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KendoPivotGridColumn = {
    name: 'kendo-pivot-column',
    render: function render() {
        return _vue2.default.prototype._e;
    },

    mixins: [_Columns2.default]
};

exports.default = KendoPivotGridColumn;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Measures = __webpack_require__(42);

var _Measures2 = _interopRequireDefault(_Measures);

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KendoPivotGridMeasure = {
    name: 'kendo-pivot-measure',
    render: function render() {
        return _vue2.default.prototype._e;
    },

    mixins: [_Measures2.default]
};

exports.default = KendoPivotGridMeasure;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Rows = __webpack_require__(43);

var _Rows2 = _interopRequireDefault(_Rows);

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KendoPivotGridRow = {
    name: 'kendo-pivot-row',
    render: function render() {
        return _vue2.default.prototype._e;
    },

    mixins: [_Rows2.default]
};

exports.default = KendoPivotGridRow;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoDataSourceMixin = __webpack_require__(13);

var _KendoDataSourceMixin2 = _interopRequireDefault(_KendoDataSourceMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-datasource',
    mixins: [_KendoDataSourceMixin2.default]
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoHierarchicalDataSourceMixin = __webpack_require__(26);

var _KendoHierarchicalDataSourceMixin2 = _interopRequireDefault(_KendoHierarchicalDataSourceMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-hierarchicaldatasource',
    mixins: [_KendoHierarchicalDataSourceMixin2.default]
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoSchedulerDataSourceMixin = __webpack_require__(28);

var _KendoSchedulerDataSourceMixin2 = _interopRequireDefault(_KendoSchedulerDataSourceMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-schedulerdatasource',
    mixins: [_KendoSchedulerDataSourceMixin2.default]
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoTreeListDataSourceMixin = __webpack_require__(30);

var _KendoTreeListDataSourceMixin2 = _interopRequireDefault(_KendoTreeListDataSourceMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-treelistdatasource',
    mixins: [_KendoTreeListDataSourceMixin2.default]
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoGanttDataSourceMixin = __webpack_require__(33);

var _KendoGanttDataSourceMixin2 = _interopRequireDefault(_KendoGanttDataSourceMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-ganttdatasource',
    mixins: [_KendoGanttDataSourceMixin2.default]
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoGanttDependencyDataSourceMixin = __webpack_require__(36);

var _KendoGanttDependencyDataSourceMixin2 = _interopRequireDefault(_KendoGanttDependencyDataSourceMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-ganttdependencydatasource',
    mixins: [_KendoGanttDependencyDataSourceMixin2.default]
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoPivotDataSourceMixin = __webpack_require__(39);

var _KendoPivotDataSourceMixin2 = _interopRequireDefault(_KendoPivotDataSourceMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-pivotdatasource',
    mixins: [_KendoPivotDataSourceMixin2.default]
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataSourceInstaller = exports.KendoDataSourceInstaller = exports.PivotRow = exports.KendoPivotRow = exports.PivotMeasure = exports.KendoPivotMeasure = exports.PivotColumn = exports.KendoPivotColumn = exports.PivotDataSource = exports.KendoPivotDataSource = exports.GanttDependencyDataSource = exports.KendoGanttDependencyDataSource = exports.GanttDataSource = exports.KendoGanttDataSource = exports.TreeListDataSource = exports.KendoTreeListDataSource = exports.SchedulerDataSource = exports.KendoSchedulerDataSource = exports.HierarchicalDataSource = exports.KendoHierarchicalDataSource = exports.DataSource = exports.KendoDataSource = undefined;

var _KendoDataSource = __webpack_require__(5);

var _KendoDataSource2 = _interopRequireDefault(_KendoDataSource);

var _KendoHierarchicalDataSource = __webpack_require__(6);

var _KendoHierarchicalDataSource2 = _interopRequireDefault(_KendoHierarchicalDataSource);

var _KendoSchedulerDataSource = __webpack_require__(7);

var _KendoSchedulerDataSource2 = _interopRequireDefault(_KendoSchedulerDataSource);

var _KendoTreeListDataSource = __webpack_require__(8);

var _KendoTreeListDataSource2 = _interopRequireDefault(_KendoTreeListDataSource);

var _KendoGanttDataSource = __webpack_require__(9);

var _KendoGanttDataSource2 = _interopRequireDefault(_KendoGanttDataSource);

var _KendoGanttDependencyDataSource = __webpack_require__(10);

var _KendoGanttDependencyDataSource2 = _interopRequireDefault(_KendoGanttDependencyDataSource);

var _KendoPivotDataSource = __webpack_require__(11);

var _KendoPivotDataSource2 = _interopRequireDefault(_KendoPivotDataSource);

var _KendoPivotColumn = __webpack_require__(2);

var _KendoPivotColumn2 = _interopRequireDefault(_KendoPivotColumn);

var _KendoPivotMeasure = __webpack_require__(3);

var _KendoPivotMeasure2 = _interopRequireDefault(_KendoPivotMeasure);

var _KendoPivotRow = __webpack_require__(4);

var _KendoPivotRow2 = _interopRequireDefault(_KendoPivotRow);

var _kendoDatasourceInstaller = __webpack_require__(46);

var _kendoDatasourceInstaller2 = _interopRequireDefault(_kendoDatasourceInstaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.KendoDataSource = _KendoDataSource2.default;
exports.DataSource = _KendoDataSource2.default;
exports.KendoHierarchicalDataSource = _KendoHierarchicalDataSource2.default;
exports.HierarchicalDataSource = _KendoHierarchicalDataSource2.default;
exports.KendoSchedulerDataSource = _KendoSchedulerDataSource2.default;
exports.SchedulerDataSource = _KendoSchedulerDataSource2.default;
exports.KendoTreeListDataSource = _KendoTreeListDataSource2.default;
exports.TreeListDataSource = _KendoTreeListDataSource2.default;
exports.KendoGanttDataSource = _KendoGanttDataSource2.default;
exports.GanttDataSource = _KendoGanttDataSource2.default;
exports.KendoGanttDependencyDataSource = _KendoGanttDependencyDataSource2.default;
exports.GanttDependencyDataSource = _KendoGanttDependencyDataSource2.default;
exports.KendoPivotDataSource = _KendoPivotDataSource2.default;
exports.PivotDataSource = _KendoPivotDataSource2.default;
exports.KendoPivotColumn = _KendoPivotColumn2.default;
exports.PivotColumn = _KendoPivotColumn2.default;
exports.KendoPivotMeasure = _KendoPivotMeasure2.default;
exports.PivotMeasure = _KendoPivotMeasure2.default;
exports.KendoPivotRow = _KendoPivotRow2.default;
exports.PivotRow = _KendoPivotRow2.default;
exports.KendoDataSourceInstaller = _kendoDatasourceInstaller2.default;
exports.DataSourceInstaller = _kendoDatasourceInstaller2.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoDataSourceBase = __webpack_require__(0);

var _KendoDataSourceBase2 = _interopRequireDefault(_KendoDataSourceBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_KendoDataSourceBase2.default],
    mounted: function mounted() {
        this.kendoDataSource = new kendo.data.DataSource(this.widgetOptions);
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return this.kendoDataSource || new kendo.data.DataSource(this.widgetOptions);
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

var _kendoBaseComponentsVueWrapper = __webpack_require__(15);

var _DataSourceProps = __webpack_require__(20);

var _DataSourceProps2 = _interopRequireDefault(_DataSourceProps);

var _Filter = __webpack_require__(21);

var _Filter2 = _interopRequireDefault(_Filter);

var _Group = __webpack_require__(22);

var _Group2 = _interopRequireDefault(_Group);

var _Schema = __webpack_require__(23);

var _Schema2 = _interopRequireDefault(_Schema);

var _Sort = __webpack_require__(24);

var _Sort2 = _interopRequireDefault(_Sort);

var _Transport = __webpack_require__(25);

var _Transport2 = _interopRequireDefault(_Transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _DataSourceProps2.default,
    render: function render(h) {
        return h('div');
    },

    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _Filter2.default, _Group2.default, _Schema2.default, _Sort2.default, _Transport2.default],
    mounted: function mounted() {
        var _this = this;

        this.$watch(function (vm) {
            return [vm.filter, vm.filterValue, vm.filterField, vm.filterFilters, vm.filterLogic, vm.filterOperator].join();
        }, function () {
            _this.kendoDataSource.filter(_this.widgetOptions.filter);
        }, { deep: true });

        this.$watch(function (vm) {
            return [vm.group, vm.groupField, vm.groupDir, vm.groupAggregates].join();
        }, function () {
            _this.kendoDataSource.group(_this.widgetOptions.group);
        }, { deep: true });

        this.$watch(function (vm) {
            return [vm.aggregate, vm.aggregateAggregate, vm.aggregateField].join();
        }, function () {
            _this.kendoDataSource.aggregate(_this.widgetOptions.aggregate);
        }, { deep: true });

        this.$watch(function (vm) {
            return [vm.sort, vm.sortDir, vm.sortField, vm.sortCompare].join();
        }, function () {
            _this.kendoDataSource.sort(_this.widgetOptions.sort);
        }, { deep: true });

        this.$watch(function (vm) {
            return [vm.page].join();
        }, function () {
            _this.kendoDataSource.page(_this.widgetOptions.page);
        }, { deep: true });

        this.$watch(function (vm) {
            return [vm.pageSize].join();
        }, function () {
            _this.kendoDataSource.pageSize(_this.widgetOptions.pageSize);
        }, { deep: true });

        this.$watch(function (vm) {
            return [vm.data].join();
        }, function () {
            _this.kendoDataSource.data(_this.widgetOptions.data);
        }, { deep: true });
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KendoSharedMethods = exports.KendoBaseInputComponent = exports.KendoBaseDatasourceComponent = exports.KendoBaseComponent = undefined;

var _kendoBaseComponent = __webpack_require__(16);

var _kendoBaseComponent2 = _interopRequireDefault(_kendoBaseComponent);

var _kendoBaseDatasourceComponent = __webpack_require__(17);

var _kendoBaseDatasourceComponent2 = _interopRequireDefault(_kendoBaseDatasourceComponent);

var _kendoBaseInputComponent = __webpack_require__(18);

var _kendoBaseInputComponent2 = _interopRequireDefault(_kendoBaseInputComponent);

var _kendoSharedMethods = __webpack_require__(19);

var _kendoSharedMethods2 = _interopRequireDefault(_kendoSharedMethods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.KendoBaseComponent = _kendoBaseComponent2.default;
exports.KendoBaseDatasourceComponent = _kendoBaseDatasourceComponent2.default;
exports.KendoBaseInputComponent = _kendoBaseInputComponent2.default;
exports.KendoSharedMethods = _kendoSharedMethods2.default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vue = __webpack_require__(1);

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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    aggregate: Array,
    autoSync: Boolean,
    batch: Boolean,
    data: Array | String,
    filter: Array | Object,
    group: Array | Object,
    inPlaceSort: Boolean,
    offlineStorage: String | Object,
    page: String | Number,
    pageSize: String | Number,
    schema: Object,
    serverAggregates: Boolean,
    serverFiltering: Boolean,
    serverGrouping: Boolean,
    serverPaging: Boolean,
    serverSorting: Boolean,
    sort: Array | Object,
    transport: Object,
    type: String,

    // Events
    change: Function,
    error: Function,
    push: Function,
    requestEnd: Function,
    requestStart: Function,
    sync: Function
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
        filterField: {
            type: String,
            kComposite: 'filter.field'
        },
        filterFilters: {
            type: Array,
            kComposite: 'filter.filters'
        },
        filterLogic: {
            type: String,
            kComposite: 'filter.logic'
        },
        filterOperator: {
            type: String | Function,
            kComposite: 'filter.operator'
        },
        filterValue: {
            type: String | Number | Date | Object,
            kComposite: 'filter.value'
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
        groupAggregates: {
            type: Array,
            kComposite: 'group.aggregates'
        },
        groupDir: {
            type: String,
            kComposite: 'group.dir'
        },
        groupField: {
            type: String,
            kComposite: 'group.field'
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
        schemaAggregates: {
            type: Function | String,
            kComposite: 'schema.aggregates'
        },
        schemaData: {
            type: Function | String,
            kComposite: 'schema.data'
        },
        schemaErrors: {
            type: Function | String,
            kComposite: 'schema.errors'
        },
        schemaGroups: {
            type: Function | String,
            kComposite: 'schema.groups'
        },
        schemaModel: {
            type: Object | kendo.data.Model,
            kComposite: 'schema.model'
        },
        schemaModelId: {
            type: String,
            kComposite: 'schema.model.id'
        },
        schemaModelFields: {
            type: Object,
            kComposite: 'schema.model.fields'
        },
        schemaParse: {
            type: Function,
            kComposite: 'schema.parse'
        },
        schemaTotal: {
            type: Function | String,
            kComposite: 'schema.total'
        },
        schemaType: {
            type: String,
            kComposite: 'schema.type'
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
        sortDir: {
            type: String,
            kComposite: 'sort.dir'
        },
        sortField: {
            type: String,
            kComposite: 'sort.field'
        },
        sortCompare: {
            type: Function,
            kComposite: 'sort.compare'
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
        transportCreate: {
            type: String | Function,
            kComposite: 'transport.create'
        },
        transportCreateCache: {
            type: Boolean,
            kComposite: 'transport.create.cache'
        },
        transportCreateContentType: {
            type: String,
            kComposite: 'transport.create.contentType'
        },
        transportCreateData: {
            type: Object | Function,
            kComposite: 'transport.create.data'
        },
        transportCreateDataType: {
            type: String,
            kComposite: 'transport.create.dataType'
        },
        transportCreateType: {
            type: String,
            kComposite: 'transport.create.type'
        },
        transportCreateUrl: {
            type: String | Function,
            kComposite: 'transport.create.url'
        },
        transportDestroy: {
            type: String | Function,
            kComposite: 'transport.destroy'
        },
        transportDestroyCache: {
            type: Boolean,
            kComposite: 'transport.destroy.cache'
        },
        transportDestroyContentType: {
            type: String,
            kComposite: 'transport.destroy.contentType'
        },
        transportDestroyData: {
            type: Object | Function,
            kComposite: 'transport.destroy.data'
        },
        transportDestroyDataType: {
            type: String,
            kComposite: 'transport.destroy.dataType'
        },
        transportDestroyType: {
            type: String,
            kComposite: 'transport.destroy.type'
        },
        transportDestroyUrl: {
            type: String | Function,
            kComposite: 'transport.destroy.url'
        },
        transportParameterMap: {
            type: Function,
            kComposite: 'transport.parameterMap'
        },
        transportPush: {
            type: Function,
            kComposite: 'transport.push'
        },
        transportRead: {
            type: String | Function,
            kComposite: 'transport.read'
        },
        transportReadCache: {
            type: Boolean,
            kComposite: 'transport.read.cache'
        },
        transportReadContentType: {
            type: String,
            kComposite: 'transport.read.contentType'
        },
        transportReadData: {
            type: Object | Function,
            kComposite: 'transport.read.data'
        },
        transportReadDataType: {
            type: String,
            kComposite: 'transport.read.dataType'
        },
        transportReadType: {
            type: String,
            kComposite: 'transport.read.type'
        },
        transportReadUrl: {
            type: String | Function,
            kComposite: 'transport.read.url'
        },
        transportSignalrClientCreate: {
            type: String,
            kComposite: 'transport.signalr.client.create'
        },
        transportSignalrClientDestroy: {
            type: String,
            kComposite: 'transport.signalr.client.destroy'
        },
        transportSignalrClientRead: {
            type: String,
            kComposite: 'transport.signalr.client.read'
        },
        transportSignalrClientUpdate: {
            type: String,
            kComposite: 'transport.signalr.client.update'
        },
        transportSignalrHub: {
            type: Object,
            kComposite: 'transport.signalr.hub'
        },
        transportSignalrPromise: {
            type: Object,
            kComposite: 'transport.signalr.promise'
        },
        transportSignalrServerCreate: {
            type: String,
            kComposite: 'transport.signalr.server.create'
        },
        transportSignalrServerDestroy: {
            type: String,
            kComposite: 'transport.signalr.server.destroy'
        },
        transportSignalrServerRead: {
            type: String,
            kComposite: 'transport.signalr.server.read'
        },
        transportSignalrServerUpdate: {
            type: String,
            kComposite: 'transport.signalr.server.update'
        },
        transportSubmit: {
            type: Function,
            kComposite: 'transport.submit'
        },
        transportUpdate: {
            type: String | Function,
            kComposite: 'transport.update'
        },
        transportUpdateCache: {
            type: Boolean,
            kComposite: 'transport.update.cache'
        },
        transportUpdateContentType: {
            type: String,
            kComposite: 'transport.update.contentType'
        },
        transportUpdateData: {
            type: Object | Function,
            kComposite: 'transport.update.data'
        },
        transportUpdateDataType: {
            type: String,
            kComposite: 'transport.update.dataType'
        },
        transportUpdateType: {
            type: String,
            kComposite: 'transport.update.type'
        },
        transportUpdateUrl: {
            type: String | Function,
            kComposite: 'transport.update.url'
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

var _KendoDataSourceBase = __webpack_require__(0);

var _KendoDataSourceBase2 = _interopRequireDefault(_KendoDataSourceBase);

var _Schema = __webpack_require__(27);

var _Schema2 = _interopRequireDefault(_Schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_KendoDataSourceBase2.default, _Schema2.default],
    mounted: function mounted() {
        this.kendoDataSource = new kendo.data.HierarchicalDataSource(this.widgetOptions);
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return this.kendoDataSource || new kendo.data.HierarchicalDataSource(this.widgetOptions);
        }
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        schemaModel: {
            type: kendo.data.Node,
            kComposite: 'schema.model'
        },
        schemaModelHasChildren: {
            type: Boolean | String | Function,
            kComposite: 'schema.model.hasChildren'
        },
        schemaModelChildren: {
            type: String | Object,
            kComposite: 'schema.model.children'
        }
    }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoDataSourceBase = __webpack_require__(0);

var _KendoDataSourceBase2 = _interopRequireDefault(_KendoDataSourceBase);

var _Schema = __webpack_require__(29);

var _Schema2 = _interopRequireDefault(_Schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_KendoDataSourceBase2.default, _Schema2.default],
    mounted: function mounted() {
        this.kendoDataSource = new kendo.data.SchedulerDataSource(this.widgetOptions);
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return this.kendoDataSource || new kendo.data.SchedulerDataSource(this.widgetOptions);
        }
    }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        schemaModel: {
            type: Object,
            kComposite: 'schema.model'
        },
        schemaTimezone: {
            type: String,
            kComposite: 'schema.timezone'
        }
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoDataSourceBase = __webpack_require__(0);

var _KendoDataSourceBase2 = _interopRequireDefault(_KendoDataSourceBase);

var _TreeListDataSourceProps = __webpack_require__(31);

var _TreeListDataSourceProps2 = _interopRequireDefault(_TreeListDataSourceProps);

var _Schema = __webpack_require__(32);

var _Schema2 = _interopRequireDefault(_Schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _TreeListDataSourceProps2.default,
    mixins: [_KendoDataSourceBase2.default, _Schema2.default],
    mounted: function mounted() {
        this.kendoDataSource = new kendo.data.TreeListDataSource(this.widgetOptions);
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return this.kendoDataSource || new kendo.dataTreeListDataSource(this.widgetOptions);
        }
    }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    schema: Object
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        schemaModel: {
            type: Object,
            kComposite: 'schema.model'
        }
    }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoDataSourceBase = __webpack_require__(0);

var _KendoDataSourceBase2 = _interopRequireDefault(_KendoDataSourceBase);

var _GanttDataSourceProps = __webpack_require__(34);

var _GanttDataSourceProps2 = _interopRequireDefault(_GanttDataSourceProps);

var _Schema = __webpack_require__(35);

var _Schema2 = _interopRequireDefault(_Schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _GanttDataSourceProps2.default,
    mixins: [_KendoDataSourceBase2.default, _Schema2.default],
    mounted: function mounted() {
        this.kendoDataSource = new kendo.data.GanttDataSource(this.widgetOptions);
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return this.kendoDataSource || new kendo.data.GanttDataSource(this.widgetOptions);
        }
    }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    schema: Object
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        schemaModel: {
            type: Object,
            kComposite: 'schema.model'
        }
    }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoDataSourceBase = __webpack_require__(0);

var _KendoDataSourceBase2 = _interopRequireDefault(_KendoDataSourceBase);

var _GanttDependencyDataSourceProps = __webpack_require__(37);

var _GanttDependencyDataSourceProps2 = _interopRequireDefault(_GanttDependencyDataSourceProps);

var _Schema = __webpack_require__(38);

var _Schema2 = _interopRequireDefault(_Schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _GanttDependencyDataSourceProps2.default,
    mixins: [_KendoDataSourceBase2.default, _Schema2.default],
    mounted: function mounted() {
        this.kendoDataSource = new kendo.data.GanttDependencyDataSource(this.widgetOptions);
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return this.kendoDataSource || new kendo.data.GanttDependencyDataSource(this.widgetOptions);
        }
    }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    schema: Object
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        schemaModel: {
            type: Object,
            kComposite: 'schema.model'
        }
    }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoDataSourceBase = __webpack_require__(0);

var _KendoDataSourceBase2 = _interopRequireDefault(_KendoDataSourceBase);

var _PivotDataSourceProps = __webpack_require__(40);

var _PivotDataSourceProps2 = _interopRequireDefault(_PivotDataSourceProps);

var _KendoPivotColumn = __webpack_require__(2);

var _KendoPivotColumn2 = _interopRequireDefault(_KendoPivotColumn);

var _KendoPivotMeasure = __webpack_require__(3);

var _KendoPivotMeasure2 = _interopRequireDefault(_KendoPivotMeasure);

var _KendoPivotRow = __webpack_require__(4);

var _KendoPivotRow2 = _interopRequireDefault(_KendoPivotRow);

var _Schema = __webpack_require__(44);

var _Schema2 = _interopRequireDefault(_Schema);

var _Transport = __webpack_require__(45);

var _Transport2 = _interopRequireDefault(_Transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _PivotDataSourceProps2.default,
    render: function render(h) {
        return h('div', this.$slots.default);
    },

    mixins: [_KendoDataSourceBase2.default, _Schema2.default, _Transport2.default],
    mounted: function mounted() {
        this._resolveChildren();

        this.kendoDataSource = new kendo.data.PivotDataSource(this.widgetOptions);
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return this.kendoDataSource || new kendo.data.PivotDataSource(this.widgetOptions);
        },
        _resolveChildren: function _resolveChildren() {
            this.resolveChildren('columns', _KendoPivotColumn2.default.name);
            this.resolveChildren('measures', _KendoPivotMeasure2.default.name);
            this.resolveChildren('rows', _KendoPivotRow2.default.name);
        }
    }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    columns: Array,
    measures: Array,
    rows: Array,
    transport: Object,
    schema: Object
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        expand: {
            type: Boolean,
            kComposite: 'expand'
        },
        name: {
            type: String,
            kComposite: 'name'
        }
    }
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        values: {
            type: Array,
            kComposite: 'values'
        },
        axis: {
            type: String,
            kComposite: 'axis'
        }
    }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        expand: {
            type: Boolean,
            kComposite: 'expand'
        },
        name: {
            type: String,
            kComposite: 'name'
        }
    }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        schemaAxes: {
            type: Function | String,
            kComposite: 'schema.axes'
        },
        schemaCatalogs: {
            type: Function | String,
            kComposite: 'schema.catalogs'
        },
        schemaCubes: {
            type: Function | String,
            kComposite: 'schema.cubes'
        },
        schemaCube: {
            type: Object,
            kComposite: 'schema.cube'
        },
        schemaData: {
            type: Function | String,
            kComposite: 'schema.data'
        },
        schemaDimensions: {
            type: Function | String,
            kComposite: 'schema.dimensions'
        },
        schemaHierarchies: {
            type: Function | String,
            kComposite: 'schema.hierarchies'
        },
        schemaLevels: {
            type: Function | String,
            kComposite: 'schema.levels'
        },
        schemaMeasures: {
            type: Function | String,
            kComposite: 'schema.measures'
        }
    }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        transportDiscover: {
            type: Object | String | Function,
            kComposite: 'transport.discover'
        },
        transportConnectionCatalog: {
            type: String,
            kComposite: 'transport.connection.catalog'
        },
        transportConnectionCube: {
            type: String,
            kComposite: 'transport.connection.cube'
        }
    }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KendoDataSource = __webpack_require__(5);

var _KendoDataSource2 = _interopRequireDefault(_KendoDataSource);

var _KendoHierarchicalDataSource = __webpack_require__(6);

var _KendoHierarchicalDataSource2 = _interopRequireDefault(_KendoHierarchicalDataSource);

var _KendoSchedulerDataSource = __webpack_require__(7);

var _KendoSchedulerDataSource2 = _interopRequireDefault(_KendoSchedulerDataSource);

var _KendoTreeListDataSource = __webpack_require__(8);

var _KendoTreeListDataSource2 = _interopRequireDefault(_KendoTreeListDataSource);

var _KendoGanttDataSource = __webpack_require__(9);

var _KendoGanttDataSource2 = _interopRequireDefault(_KendoGanttDataSource);

var _KendoGanttDependencyDataSource = __webpack_require__(10);

var _KendoGanttDependencyDataSource2 = _interopRequireDefault(_KendoGanttDependencyDataSource);

var _KendoPivotDataSource = __webpack_require__(11);

var _KendoPivotDataSource2 = _interopRequireDefault(_KendoPivotDataSource);

var _KendoPivotColumn = __webpack_require__(2);

var _KendoPivotColumn2 = _interopRequireDefault(_KendoPivotColumn);

var _KendoPivotMeasure = __webpack_require__(3);

var _KendoPivotMeasure2 = _interopRequireDefault(_KendoPivotMeasure);

var _KendoPivotRow = __webpack_require__(4);

var _KendoPivotRow2 = _interopRequireDefault(_KendoPivotRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KendoDataSourceInstaller = function () {
    function KendoDataSourceInstaller() {
        _classCallCheck(this, KendoDataSourceInstaller);
    }

    _createClass(KendoDataSourceInstaller, null, [{
        key: 'install',
        value: function install(Vue) {
            Vue.component(_KendoDataSource2.default.name, _KendoDataSource2.default);
            Vue.component(_KendoHierarchicalDataSource2.default.name, _KendoHierarchicalDataSource2.default);
            Vue.component(_KendoSchedulerDataSource2.default.name, _KendoSchedulerDataSource2.default);
            Vue.component(_KendoTreeListDataSource2.default.name, _KendoTreeListDataSource2.default);
            Vue.component(_KendoGanttDataSource2.default.name, _KendoGanttDataSource2.default);
            Vue.component(_KendoGanttDependencyDataSource2.default.name, _KendoGanttDependencyDataSource2.default);
            Vue.component(_KendoPivotDataSource2.default.name, _KendoPivotDataSource2.default);
            Vue.component(_KendoPivotColumn2.default.name, _KendoPivotColumn2.default);
            Vue.component(_KendoPivotMeasure2.default.name, _KendoPivotMeasure2.default);
            Vue.component(_KendoPivotRow2.default.name, _KendoPivotRow2.default);
        }
    }]);

    return KendoDataSourceInstaller;
}();

exports.default = KendoDataSourceInstaller;

// Automatic installation if Vue has been added to the global scope.

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(KendoDataSourceInstaller);
}

/***/ })
/******/ ]);
});
//