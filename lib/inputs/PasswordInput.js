"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
var _reactstrap = require("reactstrap");
var _zxcvbn = require("zxcvbn");var _zxcvbn2 = _interopRequireDefault(_zxcvbn);
var _BaseInput = require("./BaseInput");var _BaseInput2 = _interopRequireDefault(_BaseInput);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * An input element for passwords.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * Password wrapper for BaseInput
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @export
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @class PasswordInput
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @extends {ShallowComponent}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */var
PasswordInput = function (_ShallowComponent) {_inherits(PasswordInput, _ShallowComponent);























































    function PasswordInput(props) {_classCallCheck(this, PasswordInput);var _this = _possibleConstructorReturn(this, (PasswordInput.__proto__ || Object.getPrototypeOf(PasswordInput)).call(this,
        props));
        _this.strengthMessages = _robeReactCommons.Application.i18n(PasswordInput, "inputs.PasswordInput", "strength");return _this;
    }
    /**
       * defaultProps
       * @static
       */ /**
           * Properties of the component
           *
           * @static
           */_createClass(PasswordInput, [{ key: "render",






        /**
                                                            * render
                                                            * @returns
                                                            */value: function render()
        {var _this2 = this;var _props =

            this.props,strength = _props.strength,inputGroupRight = _props.inputGroupRight,autoFocus = _props.autoFocus,newProps = _objectWithoutProperties(_props, ["strength", "inputGroupRight", "autoFocus"]);

            if (strength) {
                var value = this.props.value;
                var result = (0, _zxcvbn2.default)(value);
                var resultScore = this.strengthMessages[result.score];
                var inputGroupRightStrength = _react2.default.createElement(_reactstrap.InputGroupAddon, { key: "password-strength-addon" }, resultScore);

                if (inputGroupRight) {
                    inputGroupRight = [inputGroupRightStrength, inputGroupRight];
                } else {
                    inputGroupRight = inputGroupRightStrength;
                }

                autoFocus = true;
            }

            return (
                _react2.default.createElement(_BaseInput2.default, _extends({},
                newProps, {
                    autoFocus: autoFocus,
                    onChange: this.__onChange,
                    type: "password",
                    ref: function ref(component) {_this2.innerComponent = component;},
                    inputGroupRight: inputGroupRight })));


        }

        /**
           * Returns validity of the component.
           * @return true if it is valid.
           */ }, { key: "isValid", value: function isValid()
        {
            return this.innerComponent.isValid();
        }

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
           * Internal onchange handler.
           */ }, { key: "__onChange", value: function __onChange(
        e) {
            var result = true;
            if (this.props.onChange) {
                result = this.props.onChange(e);
            }
            if (!result) {
                e.preventDefault();
                e.stopPropagation();
            }
            return result;
        } }]);return PasswordInput;}(_robeReactCommons.ShallowComponent);PasswordInput.propTypes = { /**
                                                                                                      * Label for the form control.
                                                                                                      */label: _react2.default.PropTypes.string, /**
                                                                                                                                                  * name use as input field name
                                                                                                                                                  */name: _react2.default.PropTypes.string, /**
                                                                                                                                                                                             * Value of the component
                                                                                                                                                                                             */value: _react2.default.PropTypes.any.isRequired, /**
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */inputGroupLeft: _react2.default.PropTypes.any, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Right Input Addon
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */inputGroupRight: _react2.default.PropTypes.any, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * it specifies that a password strength is hidden or visible
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */strength: _react2.default.PropTypes.bool };PasswordInput.defaultProps = { disabled: false, readOnly: false, hidden: false, strength: false, autoFocus: false, value: "", validationDisplay: "block" };exports.default = PasswordInput;