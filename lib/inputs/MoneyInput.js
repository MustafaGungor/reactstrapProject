"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactstrap = require("reactstrap");
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _BaseInput = require("./BaseInput");var _BaseInput2 = _interopRequireDefault(_BaseInput);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

MoneyInput = function (_ShallowComponent) {_inherits(MoneyInput, _ShallowComponent);function MoneyInput() {var _ref;var _temp, _this, _ret;_classCallCheck(this, MoneyInput);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MoneyInput.__proto__ || Object.getPrototypeOf(MoneyInput)).call.apply(_ref, [this].concat(args))), _this), _this.











































































        caretPosition = 0, _this.







































































        __isFloat = function (input) {
            if (input === null || input === undefined) {
                return false;
            }
            /* eslint-disable prefer-template */
            var found = input.match("(?=.)^(([1-9][0-9]{0,2}(" + _this.props.thousandSeparator + "[0-9]{3})*)|0)?(\\" + _this.props.decimalSeparator + "[0-9]{0,2})?$");
            return found !== undefined && found !== null;
        }, _temp), _possibleConstructorReturn(_this, _ret);} /**
                                                              * Properties of the component
                                                              *
                                                              * @static
                                                              */ /**
                                                                  * defaultProps
                                                                  * @static
                                                                  */_createClass(MoneyInput, [{ key: "render", value: function render() {var _this2 = this; /* eslint-disable no-unused-vars */var _props = this.props,thousandSeparator = _props.thousandSeparator,decimalSeparator = _props.decimalSeparator,unit = _props.unit,newProps = _objectWithoutProperties(_props, ["thousandSeparator", "decimalSeparator", "unit"]);return _react2.default.createElement(_BaseInput2.default, _extends({}, newProps, { type: "text", label: this.props.label, onChange: this.__onChange, onKeyPress: this.__focus2Fraction, value: this.props.value, ref: function ref(component) {_this2.innerComponent = component;}, inputGroupRight: _react2.default.createElement(_reactstrap.InputGroupAddon, null, this.props.unit) }));} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Returns the validity of the value.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @return true - value is valid, false - invalid
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */ }, { key: "isValid", value: function isValid() {return this.innerComponent.isValid();} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * checks validation by current value
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * isValid then return empty Array else return Array<String>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * isValid = Array.length != 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @param value
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */ }, { key: "validate", value: function validate(value) {return this.innerComponent.validate(value);} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Internal onchange handler for filtering numerics.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */ }, { key: "__onChange", value: function __onChange(e) {this.caretPosition = this.innerComponent.getCaretPosition();var value = e.target.value;if (value === undefined || value === null) {value = "";}var preThCount = value.substring(0, this.caretPosition).split(this.props.thousandSeparator).length;value = this.__addThousandSeparator(value);var postThCount = value.substring(0, this.caretPosition).split(this.props.thousandSeparator).length;this.caretPosition -= preThCount - postThCount;var result = this.__isFloat(value) || value === "";if (result) {e.target.parsedValue = value;if (this.props.onChange) {result = this.props.onChange(e);}}if (result === false) {e.preventDefault();e.stopPropagation();}if (this.props.value === value) {this.forceUpdate();}return result;} }, { key: "__addThousandSeparator", value: function __addThousandSeparator(input) {if (!input) {return "";}if (input.charAt(0) === this.props.thousandSeparator) {input = input.substring(1);}var indexDS = input.indexOf(this.props.decimalSeparator);if (indexDS === -1) {indexDS = input.length;}indexDS--;var output = [];var indexTH = 1; /* eslint-disable no-continue */for (var i = indexDS; i > -1; i--) {
                var char = input.charAt(i);
                if (char === this.props.thousandSeparator) {
                    continue;
                }
                output.push(char);
                if (indexTH % 3 === 0 && i !== 0) {
                    output.push(this.props.thousandSeparator);
                }
                indexTH++;
            }
            output = output.reverse().join("");
            var fraction = input.split(".")[1];
            if (fraction !== undefined) {
                output = output + this.props.decimalSeparator + fraction;
            }
            return output;
        } }, { key: "componentDidUpdate", value: function componentDidUpdate()

        {
            if (this.innerComponent.isFocused()) {
                this.innerComponent.setCaretPosition(this.caretPosition);
            }
        } }]);return MoneyInput;}(_ShallowComponent3.default);MoneyInput.propTypes = { /**
                                                                                        * Label for the form control.
                                                                                        */label: _react2.default.PropTypes.string, /**
                                                                                                                                    * name use as input field name
                                                                                                                                    */name: _react2.default.PropTypes.string, /**
                                                                                                                                                                               * Value of the component
                                                                                                                                                                               */value: _react2.default.PropTypes.any.isRequired, /**
                                                                                                                                                                                                                                   * onChange event for the component
                                                                                                                                                                                                                                   */onChange: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                * Unit for the currency. Will be displayed right side of the input.
                                                                                                                                                                                                                                                                                */unit: _react2.default.PropTypes.oneOf(["TL", "EUR", "USD"]), /**
                                                                                                                                                                                                                                                                                                                                                * Decimal Separator for integer and fraction.
                                                                                                                                                                                                                                                                                                                                                */decimalSeparator: _react2.default.PropTypes.oneOf([".", ","]), /**
                                                                                                                                                                                                                                                                                                                                                                                                                  * Thousand Separator for integer and fraction.
                                                                                                                                                                                                                                                                                                                                                                                                                  */thousandSeparator: _react2.default.PropTypes.oneOf([".", ","]), /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Disable input
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */disabled: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * it specifies that an input field is read-only
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */readOnly: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * it specifies that an input field is hidden or visible
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */hidden: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         *Defines the display style of the Validation message.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */validationDisplay: _react2.default.PropTypes.oneOf(["overlay", "block"]), /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Left Input Addon
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */inputGroupLeft: _react2.default.PropTypes.object };MoneyInput.defaultProps = { decimalSeparator: ".", thousandSeparator: ",", unit: "TL", value: "", disabled: false, readOnly: false, hidden: false, validationDisplay: "block" };exports.default = MoneyInput;