"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _Assertions = require("robe-react-commons/lib/utils/Assertions");var _Assertions2 = _interopRequireDefault(_Assertions);
var _moment = require("moment");var _moment2 = _interopRequireDefault(_moment);
var _inputs = require("../inputs");var Input = _interopRequireWildcard(_inputs);
var _FaIcon = require("../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var

ComponentManager = function () {function ComponentManager() {var _this = this;_classCallCheck(this, ComponentManager);this.
        COMPONENTS =
        {
            string: {
                component: Input.TextInput,
                displayAsText: function displayAsText(field, value) {
                    return value;
                } },

            text: {
                component: Input.TextArea,
                displayAsText: function displayAsText(field, value) {
                    return value;
                } },

            number: {
                component: Input.NumericInput,
                displayAsText: function displayAsText(field, value) {
                    return value;
                } },

            decimal: {
                component: Input.DecimalInput,
                displayAsText: function displayAsText(field, value) {
                    return value;
                } },

            date: {
                component: Input.DateInput,
                displayAsText: function displayAsText(field, value) {

                    if (!value)
                    return "";
                    var format = field.format ? field.format : "DD/MM/YYYY";
                    /**
                                                                              * TODO check locale this again
                                                                              */
                    var locale = field.locale ? field.locale : "tr";
                    _moment2.default.locale(locale);
                    /**
                                                     * TODO check locale this again
                                                     */
                    var date = (0, _moment2.default)(value);
                    return date.isValid() ? date.format(format) : "";
                } },

            password: {
                component: Input.PasswordInput,
                displayAsText: function displayAsText() {
                    return "*****";
                } },

            money: {
                component: Input.MoneyInput,
                displayAsText: function displayAsText(field, value) {
                    return value;
                } },

            radio: {
                component: Input.RadioInput,
                displayAsText: function displayAsText(field, value) {
                    return _this.__getTextValue(field, value);
                } },

            select: {
                component: Input.SelectInput,
                displayAsText: function displayAsText(field, value) {
                    return _this.__getTextValue(field, value);
                } },

            check: {
                component: Input.CheckInput,
                displayAsText: function displayAsText(field, value) {
                    var result = _this.__getTextValue(field, value);
                    if (result === true) {
                        return _react2.default.createElement(_FaIcon2.default, { size: "fa-lg", code: "fa-check-square-o" }); // eslint-disable-line
                    }
                    return _react2.default.createElement(_FaIcon2.default, { size: "fa-lg", code: "fa-square-o" }); // eslint-disable-line
                } },

            html: {
                component: Input.HtmlEditor,
                displayAsText: function displayAsText(field, value) {
                    return value;
                } },

            file: {
                component: Input.FileUploadInput,
                displayAsText: function displayAsText(field, value) {
                    return value;
                } } };}_createClass(ComponentManager, [{ key: "addComponent", value: function addComponent(



        componentType, component, displayAsText) {
            _Assertions2.default.isString(componentType, true);
            _Assertions2.default.isFunction(displayAsText, true);
            this.COMPONENTS[componentType] = {
                component: component,
                displayAsText: displayAsText };

        }

        /**
           *
           * @param type
           * @returns {*}
           */ }, { key: "getComponent", value: function getComponent(
        type) {
            return this.COMPONENTS[type].component;
        }

        /**
           *
           * @param type
           * @param field
           * @param value
           * @returns {*|Object}
           */ }, { key: "getDisplayAsText", value: function getDisplayAsText(
        type, field, value) {
            var component = this.COMPONENTS[type];
            _Assertions2.default.isNotUndefined(component, true);
            _Assertions2.default.isNotUndefined(component.displayAsText, true);
            _Assertions2.default.isFunction(component.displayAsText, true);
            return component.displayAsText(field, value);
        }


        /**
           *
           * @param field
           * @param selectedValues
           * @returns {*}
           * @private
           */
        /* eslint-disable class-methods-use-this */ }, { key: "__getTextValue", value: function __getTextValue(
        field, selectedValues) {
            var isMultipleSelection = !!field.items;
            if (!isMultipleSelection) {
                return selectedValues;
            }
            selectedValues = [].concat(selectedValues);
            var textOfValues = [];
            var textField = field.textField || "text";
            var valueField = field.valueField || "value";
            for (var i = 0; i < field.items.length; i++) {
                var item = field.items[i];
                for (var k = 0; k < selectedValues.length; k++) {
                    var selectedValue = selectedValues[k];
                    if (String(item[valueField]) === selectedValue) {
                        textOfValues.push(item[textField]);
                    }
                }
            }
            return textOfValues.join(", ");
        } }]);return ComponentManager;}();exports.default =

new ComponentManager();