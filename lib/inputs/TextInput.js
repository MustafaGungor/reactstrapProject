"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _BaseInput = require("./BaseInput");var _BaseInput2 = _interopRequireDefault(_BaseInput);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * TextInput is a component for default one lined text inputs.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @export
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @class TextInput
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @extends {ShallowComponent}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */var
TextInput = function (_ShallowComponent) {_inherits(TextInput, _ShallowComponent);function TextInput() {_classCallCheck(this, TextInput);return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));}_createClass(TextInput, [{ key: "render",





























































        /**
                                                                                                                                                                                                                                                                                                               * Renders the component.
                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                               * @returns
                                                                                                                                                                                                                                                                                                               */ /**
                                                                                                                                                                                                                                                                                                                   * defaultProps
                                                                                                                                                                                                                                                                                                                   * @static
                                                                                                                                                                                                                                                                                                                   */value: function render() {var _this2 = this;var _props = this.props,minWidth = _props.minWidth,props = _objectWithoutProperties(_props, ["minWidth"]);return (
                _react2.default.createElement(_BaseInput2.default, _extends({},
                props, {
                    onChange: this.__onChange,
                    type: "text",
                    ref: function ref(component) {_this2.innerComponent = component;} })));

        }

        /**
           * Returns the validity of the value.
           * @return true - value is valid, false - invalid
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
            this.innerComponent.focus();
            return result;
        } }]);return TextInput;}(_ShallowComponent3.default);TextInput.propTypes = { /**
                                                                                      * Label for the form control.
                                                                                      */label: _react2.default.PropTypes.string, /**
                                                                                                                                  * name use as input field name
                                                                                                                                  */name: _react2.default.PropTypes.string, /**
                                                                                                                                                                             * Value of the component
                                                                                                                                                                             */value: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                         * onChangeEvent event for the component
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */inputGroupRight: _react2.default.PropTypes.object };TextInput.defaultProps = { disabled: false, readOnly: false, hidden: false, value: "", validationDisplay: "block" };exports.default = TextInput;