"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _reactstrap = require("reactstrap");
var _BaseInput = require("./BaseInput");var _BaseInput2 = _interopRequireDefault(_BaseInput);
var _FaIcon = require("../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * DecimalInput is a component decimal inputs.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * Has support for different decimal seperators (,/.)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * Supports 2 digits after seperator.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @export
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @class Decimal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @extends {ShallowComponent}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */var
DecimalInput = function (_ShallowComponent) {_inherits(DecimalInput, _ShallowComponent);function DecimalInput() {var _ref;var _temp, _this, _ret;_classCallCheck(this, DecimalInput);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DecimalInput.__proto__ || Object.getPrototypeOf(DecimalInput)).call.apply(_ref, [this].concat(args))), _this), _this.




















































































































































        __handleKeyPress = function (event) {
            if (event.key === "ArrowUp") {
                event.target.name = "increment";
                _this.__valueIncAndDec(event);
            } else if (event.key === "ArrowDown") {
                event.target.name = "decrement";
                _this.__valueIncAndDec(event);
            }
        }, _this.

        __isFloat = function (input) {
            if (input === null || input === undefined) {
                return false;
            }
            var found = input.match("^[0-9]{1,6}((\\" + _this.props.decimalSeparator + ")|(\\" + _this.props.decimalSeparator + "\\d{1,2}))?$");
            return found !== undefined && found !== null;
        }, _temp), _possibleConstructorReturn(_this, _ret);} /**
                                                              * Properties of the component
                                                              *
                                                              * @static
                                                              */ /**
                                                                  * defaultProps
                                                                  * @static
                                                                  */_createClass(DecimalInput, [{ key: "render", value: function render() {var _this2 = this; /* eslint-disable no-unused-vars */var _props = this.props,decimalSeparator = _props.decimalSeparator,newProps = _objectWithoutProperties(_props, ["decimalSeparator"]);return _react2.default.createElement(_BaseInput2.default, _extends({}, newProps, { type: "text", ref: function ref(component) {_this2.innerComponent = component;}, step: this.props.step, value: this.props.value, onChange: this.__onChange, onKeyDown: this.__handleKeyPress, inputGroupRight: _react2.default.createElement(_reactstrap.InputGroupAddon, { style: { padding: 0 } }, _react2.default.createElement("div", { style: { width: "42px" } }, _react2.default.createElement("div", null, _react2.default.createElement(_FaIcon2.default, { name: "increment", code: "fa-caret-up", style: { cursor: "pointer" }, onClick: this.__valueIncAndDec })), _react2.default.createElement("div", null, _react2.default.createElement(_FaIcon2.default, { name: "decrement", code: "fa-caret-down", style: { cursor: "pointer" }, onClick: this.__valueIncAndDec })))) }));} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * Returns the validity of the value.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * @return true - value is valid, false - invalid
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */ }, { key: "isValid", value: function isValid() {return this.innerComponent.isValid();} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * checks validation by current value
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * isValid then return empty Array else return Array<String>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * isValid = Array.length != 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @param value
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */ }, { key: "validate", value: function validate(value) {return this.innerComponent.validate(value);} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Internal onchange handler for filtering numerics.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */ }, { key: "__onChange", value: function __onChange(e) {var value = e.target.value;if (value !== null && value !== undefined) {this.__caretPosition = this.innerComponent.getCaretPosition();var indexOfDS = value.indexOf(this.props.decimalSeparator);if (indexOfDS === 0) {value = "0" + value;this.__caretPosition++;} else if (value.charAt(0) === "0" && indexOfDS !== 1 && indexOfDS !== -1) {value = value.substring(1);this.__caretPosition--;}}var result = this.__isFloat(value) || value === "";if (result && this.props.onChange) {e.target.parsedValue = value;result = this.props.onChange(e);}if (!result) {e.preventDefault();e.stopPropagation();}if (this.innerComponent.isFocused()) {this.innerComponent.setCaretPosition(this.__caretPosition);}return result;} }, { key: "__valueIncAndDec", value: function __valueIncAndDec(e) {var type = e.target.getAttribute("name");e.target.name = this.props.name;var currentValue = parseFloat(this.props.value, 10);if (type == "increment") {e.target.value = currentValue ? this.__fixedFloatOp(currentValue, true) : this.props.step;} else {e.target.value = currentValue ? this.__fixedFloatOp(currentValue, false) : "";}e.target.value += "";this.__onChange(e);} }, { key: "__fixedFloatOp", value: function __fixedFloatOp(cFloat, isSum) {var currentSt = cFloat.toString().split(this.props.decimalSeparator);
            var stepSt = this.props.step.toString().split(this.props.decimalSeparator);
            var c2p = currentSt.length === 2;
            var s2p = stepSt.length === 2;
            var cMul = c2p ? currentSt[1].length : 0;
            var sMul = s2p ? stepSt[1].length : 0;
            var maxMul = Math.max(cMul, sMul);

            var cInt = this.__fixedMul(cFloat, maxMul - cMul);
            var sInt = this.__fixedMul(this.props.step, maxMul - sMul);
            if (isSum)
            cInt += sInt;else

            cInt -= sInt;

            return this.__fixedDiv(cInt, maxMul);
        } }, { key: "__fixedMul", value: function __fixedMul(

        value, length) {
            var padArr = [];
            for (var i = length; i > 0; i--) {
                padArr.push("0");
            }
            return parseInt(value.toString().replace(this.props.decimalSeparator, "") + padArr.join(""));
        } }, { key: "__fixedDiv", value: function __fixedDiv(
        value, length) {
            var valS = value.toString();
            var decSPos = valS.length - length;
            if (length !== 0)
            valS = valS.slice(0, decSPos) + this.props.decimalSeparator + valS.slice(decSPos);
            return valS;
        } }, { key: "componentDidUpdate", value: function componentDidUpdate()

        {
            if (this.innerComponent.isFocused()) {
                this.innerComponent.setCaretPosition(this.__caretPosition);
            }
        } }]);return DecimalInput;}(_ShallowComponent3.default);DecimalInput.propTypes = { /**
                                                                                            * Label for the form control.
                                                                                            */label: _react2.default.PropTypes.string, /**
                                                                                                                                        * name use as input field name
                                                                                                                                        */name: _react2.default.PropTypes.string, /**
                                                                                                                                                                                   * Value of the component
                                                                                                                                                                                   */value: _react2.default.PropTypes.any, /**
                                                                                                                                                                                                                            * increment and decrement number
                                                                                                                                                                                                                            */step: _react2.default.PropTypes.number, /**
                                                                                                                                                                                                                                                                       * onChange event for the component
                                                                                                                                                                                                                                                                       */onChange: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                    * Decimal Seperator for integer and fraction.
                                                                                                                                                                                                                                                                                                                    */decimalSeparator: _react2.default.PropTypes.oneOf([".", ","]), /**
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */inputGroupRight: _react2.default.PropTypes.object };DecimalInput.defaultProps = { decimalSeparator: ".", value: "", step: 1, disabled: false, readOnly: false, hidden: false, validationDisplay: "block" };exports.default = DecimalInput;