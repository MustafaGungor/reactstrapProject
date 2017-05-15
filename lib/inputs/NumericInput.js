"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _isJs = require("is-js");var _isJs2 = _interopRequireDefault(_isJs);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _BaseInput = require("./BaseInput");var _BaseInput2 = _interopRequireDefault(_BaseInput);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * NumericInput is a wrapper element for BaseInput.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * Filters non-numeric characters, accepts only numeric characters.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @export
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @class NumericInput
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @extends {ShallowComponent}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */var
NumericInput = function (_ShallowComponent) {_inherits(NumericInput, _ShallowComponent);function NumericInput() {_classCallCheck(this, NumericInput);return _possibleConstructorReturn(this, (NumericInput.__proto__ || Object.getPrototypeOf(NumericInput)).apply(this, arguments));}_createClass(NumericInput, [{ key: "render",

















































        /**
                                                                                                                                                                                                                                                                                                                                    * defaultProps
                                                                                                                                                                                                                                                                                                                                    * @static
                                                                                                                                                                                                                                                                                                                                    */value: function render()










        {var _this2 = this;var _props =
            this.props,thousandSeparator = _props.thousandSeparator,decimalSeparator = _props.decimalSeparator,newProps = _objectWithoutProperties(_props, ["thousandSeparator", "decimalSeparator"]); //eslint-disable-line
            return (
                _react2.default.createElement(_BaseInput2.default, _extends({},
                newProps, {
                    value: this.props.value,
                    type: "text",
                    ref: function ref(component) {_this2.innerComponent = component;},
                    onChange: this.__onChange })));


        }

        /**
           * Returns validity of the component.
           * @return true if it is valid.
           */ /**
               * Properties of the component
               *
               * @static
               */ }, { key: "isValid", value: function isValid() {return this.innerComponent.isValid();}
        /**
                                                                                                          * checks validation by current value
                                                                                                          * isValid then return empty Array else return Array<String>
                                                                                                          * isValid = Array.length != 0
                                                                                                          * @param value
                                                                                                          */ }, { key: "validate", value: function validate(
        value) {
            return this.innerComponent.validate(value);
        }

        /**
           * Internal onchange handler for filtering numerics.
           */ }, { key: "__onChange", value: function __onChange(
        e) {
            var result = true;
            var value = e.target.value;
            if (value && !_isJs2.default.numeric(value)) {
                result = false;
            } else if (this.props.onChange) {
                var parsedVal = parseInt(value, 10);
                e.target.parsedValue = isNaN(parsedVal) ? undefined : parsedVal;
                result = this.props.onChange(e);
            }
            if (!result) {
                e.preventDefault();
                e.stopPropagation();
            }
            return result;
        } }]);return NumericInput;}(_ShallowComponent3.default);NumericInput.propTypes = { /**
                                                                                            * Label for the form control.
                                                                                            */label: _react2.default.PropTypes.string, /**
                                                                                                                                        * name use as input field name
                                                                                                                                        */name: _react2.default.PropTypes.string, /**
                                                                                                                                                                                   * Value of the component
                                                                                                                                                                                   */value: _react2.default.PropTypes.any, /**
                                                                                                                                                                                                                            * onChange event for the component
                                                                                                                                                                                                                            */onChange: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                         * Disable input
                                                                                                                                                                                                                                                                         */disabled: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                      * it specifies that an input field is read-only
                                                                                                                                                                                                                                                                                                                      */readOnly: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                   * it specifies that an input field is hidden or visible
                                                                                                                                                                                                                                                                                                                                                                   */hidden: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                             *Defines the display style of the Validation message.
                                                                                                                                                                                                                                                                                                                                                                                                             */validationDisplay: _react2.default.PropTypes.oneOf(["overlay", "block"]), /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * Left Input Addon
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */inputGroupLeft: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Right Input Addon
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */inputGroupRight: _react2.default.PropTypes.object };NumericInput.defaultProps = { value: "", disabled: false, readOnly: false, hidden: false, validationDisplay: "block" };exports.default = NumericInput;