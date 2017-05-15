"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactDom = require("react-dom");var _reactDom2 = _interopRequireDefault(_reactDom);
var _robeReactCommons = require("robe-react-commons");
var _reactstrap = require("reactstrap");
var _DatePicker = require("../inputs/datepicker/DatePicker");var _DatePicker2 = _interopRequireDefault(_DatePicker);
var _FaIcon = require("../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);
var _moment = require("moment");var _moment2 = _interopRequireDefault(_moment);
require("./DataFilter.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

DataFilter = function (_ShallowComponent) {_inherits(DataFilter, _ShallowComponent);












































    function DataFilter(props) {_classCallCheck(this, DataFilter);var _this = _possibleConstructorReturn(this, (DataFilter.__proto__ || Object.getPrototypeOf(DataFilter)).call(this,
        props));_this.operators = ["= " + _robeReactCommons.Application.i18n(DataFilter, "datafilter.DataFilter", "operators", "="), "!= " + _robeReactCommons.Application.i18n(DataFilter, "datafilter.DataFilter", "operators", "!="), "< " + _robeReactCommons.Application.i18n(DataFilter, "datafilter.DataFilter", "operators", "<"), "<= " + _robeReactCommons.Application.i18n(DataFilter, "datafilter.DataFilter", "operators", "<="), "> " + _robeReactCommons.Application.i18n(DataFilter, "datafilter.DataFilter", "operators", ">"), ">= " + _robeReactCommons.Application.i18n(DataFilter, "datafilter.DataFilter", "operators", ">="), "~= " + _robeReactCommons.Application.i18n(DataFilter, "datafilter.DataFilter", "operators", "~="), "|= " + _robeReactCommons.Application.i18n(DataFilter, "datafilter.DataFilter", "operators", "|=")];_this.phase = 0;_this.filters = [];_this.filter = {};_this.keyReset = false;_this.






























































        __renderFilters = function () {
            var valueList = [];
            for (var i = 0; i < _this.filters.length; i++) {
                var filter = _this.filters[i];
                if (filter !== undefined) {
                    valueList.push(
                    _react2.default.createElement("div", { key: i, className: "data-filter-select-item" },
                        _react2.default.createElement("span", {
                                className: "data-filter-select-label" }, " ", filter.subject.label + " " + filter.operator + " " + filter.filter),
                        _react2.default.createElement("span", { className: "data-filter-select-icon",
                                onClick: _this.__removeFilter.bind(undefined, i) }, "x")));


                }
            }
            return valueList;
        };_this.





























        __onKeyDown = function (e) {
            var code = e.keyCode || e.which;
            //console.log(code)
            if (code == 8) {//backspace
                if (_this.phase == 0) {
                    if (_this.filters.length > 0 && _this.state.displayValue.replace(_this.__generateFilterValue(), "") == "") {
                        _this.filter = {};
                        _this.filter = _this.filters[_this.filters.length - 1];
                        _this.filters.pop();
                        _this.__filterChange();
                        _this.phase = 2;
                        _this.__makeSelect();
                        if (_this.filter.subject.items)
                        _this.__setValue(_this.__generateFilterValue());else

                        _this.__setValue(_this.__generateFilterValue() + _this.filter.filter);
                        e.preventDefault();
                    }
                } else
                if (_this.phase == 1) {
                    if (_this.state.displayValue.replace(_this.__generateFilterValue(), "") == "") {
                        _this.phase = 0;
                        _this.filter.subject = undefined;
                        _this.__makeSelect();
                        _this.__setValue(_this.__generateFilterValue());
                        e.preventDefault();
                    }
                } else
                if (_this.phase == 2) {
                    if (_this.state.displayValue.replace(_this.__generateFilterValue(), "") == "") {
                        _this.phase = 1;
                        _this.filter.operator = undefined;
                        _this.__makeSelect();
                        _this.__setValue(_this.__generateFilterValue());
                        e.preventDefault();
                    }
                }
            } else
            if (code == 38 || code == 40) {//up-down
                _this.refs.dataFilterSelect.handleTabKeyDown(_this.__onSelectKey, e);
            } else
            if (code == 13 || code == 222 || code == 32) {
                if (_this.phase == 0 || _this.phase == 1) {
                    if (_this.state.nav.length == 1) {
                        _this.state.nav[0].props.onClick();
                        e.preventDefault();
                    }
                } else
                if (_this.phase == 2 && (code != 32 || _this.filter.subject.type == "number" || _this.filter.subject.items)) {
                    if (_this.state.showSelect && _this.state.nav.length == 1) {
                        _this.state.nav[0].props.onClick();
                        e.preventDefault();
                    } else
                    if (!_this.state.showSelect) _this.__onDecideKey();
                }
            } else
            if (code == 9) _this.setState({ showSelect: false });
            return false;
        };_this.

        __removeFilter = function (e) {
            _this.filters.splice(e, 1);
            _this.__filterChange();
        };_this.

        __removeAllFilters = function () {
            _this.filters.length = 0;
            _this.filter = {};
            _this.phase = 0;
            _this.__setValue(_this.__generateFilterValue());
            _this.__makeSelect();
            _this.__filterChange();
        };_this.

        __setValue = function (value) {
            _this.setState({
                displayValue: value });

            _this.inputRef.focus();
            _this.__setMirror(value);
        };_this.

        __setMirror = function (value) {
            var mirror = _this.refs.dataFilterMirror;
            mirror.innerHTML = value.replace(/\s/g, "\xA0");
            _this.setState({
                selectOffset: mirror.offsetWidth + 10 });

        };_this.





        __makeSelect = function (filter) {
            if (_this.phase == 0) {
                var nav = [];
                var fields = _this.props.fields;
                var item = {};
                for (var i = 0; i < fields.length; i++) {
                    item = fields[i];
                    if (item.filter == false) continue;
                    if (item.type == "string" || item.type == "number" || item.type == "date" || item.type == "select" || item.type == "radio") {
                        if (!filter || filter == "" || item.label.toLowerCase().match("^" + filter.toLowerCase())) {
                            nav.push(_react2.default.createElement(_reactstrap.NavItem, null, _react2.default.createElement(_reactstrap.NavLink, { key: i + 1, eventKey: i + 1,
                                        onClick: _this.__onDecideKey.bind(undefined, i) }, item.label)));
                        }
                    }
                }
                _this.setState({
                    nav: nav,
                    showSelect: true,
                    showDatePicker: false });

            } else
            if (_this.phase == 1) {
                var _nav = [];
                for (var _i = 0; _i < _this.operators.length; _i++) {
                    if (!filter || filter == "" || _this.operators[_i].toLowerCase().match("^" + filter.toLowerCase())) {
                        _nav.push(_react2.default.createElement(_reactstrap.NavItem, null, _react2.default.createElement(_reactstrap.NavLink, { key: _i + 1, eventKey: _i + 1,
                                    onClick: _this.__onDecideKey.bind(undefined, _i) }, _this.operators[_i])));
                    }
                }
                _this.setState({
                    nav: _nav,
                    showSelect: true,
                    showDatePicker: false });

            } else
            {
                if (_this.filter.subject.type == "date") {
                    _this.setState({
                        showDatePicker: true,
                        showSelect: false });

                } else
                if (_this.filter.subject.items) {
                    var _nav2 = [];
                    var items = _this.filter.subject.items;
                    for (var _i2 = 0; _i2 < items.length; _i2++) {
                        if (!filter || filter == "" || items[_i2].text.toLowerCase().match("^" + filter.toLowerCase())) {
                            _nav2.push(_react2.default.createElement(_reactstrap.NavItem, null, _react2.default.createElement(_reactstrap.NavLink, { key: _i2 + 1, eventKey: _i2 + 1,
                                        onClick: _this.__onDecideKey.bind(undefined, _i2) }, items[_i2].text)));
                        }
                    }
                    _this.setState({
                        nav: _nav2,
                        showSelect: true });

                } else
                {
                    _this.setState({
                        showSelect: false });

                }
            }
        };_this.

        __onSelectKey = function (e) {
            if (_this.keyReset) {
                e = 0;
                _this.keyReset = false;
            }
            _this.setState({
                activeKey: e });

        };_this.

        __onDecideKey = function (e) {
            var key = e == undefined ? _this.state.activeKey - 1 : e;
            if (_this.phase == 0) {
                _this.filter["subject"] = _this.props.fields[key];
                _this.phase = 1;
                _this.keyReset = true;
            } else if (_this.phase == 1) {
                _this.filter["operator"] = _this.operators[key].split(" ")[0];
                _this.phase = 2;
                _this.keyReset = true;
            } else if (_this.phase == 2) {
                if (_this.filter.subject.items) {
                    _this.filter.filter = _this.filter.subject.items[key].text;
                    _this.filter.filterValue = _this.filter.subject.items[key].value;
                } else
                _this.filter.filter = _this.state.displayValue.replace(_this.__generateFilterValue(), "");
                _this.filters.push(_this.filter);
                _this.filter = {};
                _this.phase = 0;
                _this.__filterChange();
            }
            _this.__makeSelect();
            _this.__setValue(_this.__generateFilterValue());
        };_this.

        __filterChange = function () {
            var filters = [];
            for (var i = 0; i < _this.filters.length; i++) {
                var filter = [];
                filter.push(_this.filters[i].subject.name);
                filter.push(_this.filters[i].operator);
                filter.push(_this.filters[i].filterValue || _this.filters[i].filter);
                filters.push(filter);
            }
            if (_this.props.onChange !== undefined) _this.props.onChange(filters);
        };_this.








        __hideIfOut = function (e) {
            if (document.activeElement !== _reactDom2.default.findDOMNode(_this.inputRef) && (_this.state.showSelect || _this.state.showDatePicker)) {
                if (_this.state.showDatePicker) {
                    if (e != undefined && e.target.tagName.toLowerCase() == "select") return;
                    _this.setState({ showSelect: false, showDatePicker: false });
                    _this.__onDecideKey();
                    _this.inputRef.focus();
                } else {
                    _this.setState({ showSelect: false });
                }
            }
        };_this.state = { displayValue: "", showSelect: false, showDatePicker: false, selectOffset: 10, nav: [], activeKey: 1 };return _this;}_createClass(DataFilter, [{ key: "render", value: function render() {var _this2 = this;if (this.props.visible) {return _react2.default.createElement("div", { className: "data-filter-multiple-select", onClick: function onClick() {if (!_this2.state.showDatePicker) _this2.inputRef.focus();} }, _react2.default.createElement("span", { className: "data-filter-close-all", onClick: this.__removeAllFilters }, this.state.displayValue || this.filters.length > 0 ? _react2.default.createElement(_FaIcon2.default, { code: "fa-close", size: "fa-sm", className: "data-filter-close-all-fa" }) : ""), this.__renderFilters(), _react2.default.createElement("div", { className: "data-filter-input-container" }, _react2.default.createElement("input", { ref: function ref(component) {_this2.inputRef = component;}, onChange: this.__onChange, value: this.state.displayValue, placeholder: this.props.placeholder, onFocus: this.__onFocus, onKeyDown: this.__onKeyDown, className: "data-filter-input" }), _react2.default.createElement("div", { ref: "dataFilterMirror", id: "dataFilterMirror", style: { position: "absolute", display: "block", zIndex: "-5000", opacity: 0, fontSize: "12px" } }), _react2.default.createElement(_reactstrap.Nav, { ref: "dataFilterSelect", style: { marginLeft: this.state.selectOffset, display: this.state.showSelect ? "block" : "none" }, role: "tablist", onSelect: this.__onSelectKey, activeKey: this.state.activeKey, className: "data-filter-nav" }, this.state.nav), _react2.default.createElement("div", { className: "data-filter-datepicker", style: { marginLeft: this.state.selectOffset - 20, display: this.state.showDatePicker ? "block" : "none" } }, _react2.default.createElement(_DatePicker2.default, { onChange: this.__dateChange, name: "DatePicker", maxWidth: "200px" }))));}return _react2.default.createElement("span", null);} }, { key: "__dateChange", value: function __dateChange(e) {this.filter.filter = (0, _moment2.default)(e.target.parsedValue).format("YYYY-MM-DD");this.setState({ displayValue: this.__generateFilterValue() + this.filter.filter });} }, { key: "__onChange", value: function __onChange(e) {if (!e.target.value.match("^" + this.__generateFilterValue())) return false;if (this.phase == 0) {this.setState({ displayValue: e.target.value });this.__makeSelect(e.target.value);} else if (this.phase == 1) {this.setState({ displayValue: e.target.value });this.__makeSelect(e.target.value.replace(this.__generateFilterValue(), ""));} else if (this.phase == 2) {this.setState({ displayValue: e.target.value });this.__makeSelect(e.target.value.replace(this.__generateFilterValue(), ""));}return false;} }, { key: "__onFocus", value: function __onFocus() {this.__makeSelect();} }, { key: "__generateFilterValue", value: function __generateFilterValue() {var displayValue = "";if (this.filter.subject) displayValue += this.filter.subject.label + " ";if (this.filter.operator) displayValue += this.filter.operator + " " + (this.filter.subject.items || this.filter.subject.type == "number" ? "" : "\"");return displayValue;} }, { key: "componentDidMount", value: function componentDidMount()

        {
            document.addEventListener("click", this.__hideIfOut);
        } }, { key: "componentWillUnmount", value: function componentWillUnmount()

        {
            document.removeEventListener("click", this.__hideIfOut);
        } }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

        nextProps) {
            this.setState({
                value: nextProps.value });

        } }]);return DataFilter;}(_robeReactCommons.ShallowComponent);DataFilter.propTypes = { /**
                                                                                                * placeholder text
                                                                                                */placeholder: _react2.default.PropTypes.string, /**
                                                                                                                                                  * Is component visible or not
                                                                                                                                                  */visible: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                              * Fired when filter is changed
                                                                                                                                                                                              */onChange: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                           * Fields to populate selection list
                                                                                                                                                                                                                                           */fields: _react2.default.PropTypes.array };DataFilter.defaultProps = { placeholder: "Filter", visible: true };exports.default = DataFilter;