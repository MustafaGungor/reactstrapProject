"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _get = function get(object, property, receiver) {if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {var parent = Object.getPrototypeOf(object);if (parent === null) {return undefined;} else {return get(parent, property, receiver);}} else if ("value" in desc) {return desc.value;} else {var getter = desc.get;if (getter === undefined) {return undefined;}return getter.call(receiver);}};var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactstrap = require("reactstrap");
var _reactDom = require("react-dom");var _reactDom2 = _interopRequireDefault(_reactDom);
var _ValidationComponent2 = require("../validation/ValidationComponent");var _ValidationComponent3 = _interopRequireDefault(_ValidationComponent2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * BaseInput is a base component which wraps React-Bootstraps input component.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * Does necessary validations, rendering of validation messages.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @export
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @class BaseInput
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @extends {ValidationComponent}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */var
BaseInput = function (_ValidationComponent) {_inherits(BaseInput, _ValidationComponent);













































































    /**
                                                                                          * Creates an instance of BaseInput.
                                                                                          * @param {any} props
                                                                                          */ /**
                                                                                              * PropTypes of the component
                                                                                              * @static
                                                                                              */function BaseInput(props) {_classCallCheck(this, BaseInput);var _this = _possibleConstructorReturn(this, (BaseInput.__proto__ || Object.getPrototypeOf(BaseInput)).call(this, props));_this.state = {
            bsStyle: props.bsStyle ? props.bsStyle : undefined };return _this;

    }
    /**
       * Renders the component
       * @returns {Object}
       */ /**
           * Max length.
           * @static
           */ /**
               * defaultProps
               * @static
               */_createClass(BaseInput, [{ key: "render", value: function render() {var _this2 = this;var label = this.props.label === undefined ? undefined : _react2.default.createElement(_reactstrap.Label, null, this.props.label);var _props = this.props,tooltip = _props.tooltip,inputGroupLeft = _props.inputGroupLeft,inputGroupRight = _props.inputGroupRight,validations = _props.validations,validationDisplay = _props.validationDisplay,sort = _props.sort,range = _props.range,newProps = _objectWithoutProperties(_props, ["tooltip", "inputGroupLeft", "inputGroupRight", "validations", "validationDisplay", "sort", "range"]); // eslint-disable-line no-unused-vars
            var component =
            _react2.default.createElement(_reactstrap.Input, _extends({}, newProps, { ref: function ref(component) {_this2.innerComponent = component;}, value: this.props.value }));


            if (inputGroupLeft !== undefined || inputGroupRight !== undefined) {
                component =
                _react2.default.createElement(_reactstrap.InputGroup, { onClick: this.props.onClick },
                    inputGroupLeft,
                    component,
                    inputGroupRight);


            }
            component =
            _react2.default.createElement(_reactstrap.FormGroup, { hidden: this.props.hidden, size: this.props.size },
                label,
                component);


            return _get(BaseInput.prototype.__proto__ || Object.getPrototypeOf(BaseInput.prototype), "wrapComponent", this).call(this, component);
        }

        /**
           * Focuses to the input field.
           */ }, { key: "focus", value: function focus()
        {
            var node = _reactDom2.default.findDOMNode(this.innerComponent); // eslint-disable-line
            node.focus();
        }

        /**
           * Returns true if the field is the focused field at the document
           * @returns {boolean}
                  * @memberOf BaseInput
           */ }, { key: "isFocused", value: function isFocused()
        {
            var node = _reactDom2.default.findDOMNode(this.innerComponent); // eslint-disable-line
            return document.activeElement === node;
        } }, { key: "setCaretPosition", value: function setCaretPosition(

        index) {
            var node = _reactDom2.default.findDOMNode(this.innerComponent); // eslint-disable-line
            node.selectionStart = node.selectionEnd = index;
        } }, { key: "getCaretPosition", value: function getCaretPosition()
        {
            var node = _reactDom2.default.findDOMNode(this.innerComponent); // eslint-disable-line
            return node.selectionStart;
        }

        /**
              * Fired after component mounts. Takes validations from props.
              */ }, { key: "componentDidMount", value: function componentDidMount()
        {
            if (this.props.focus) {
                this.focus();
            }
        } }]);return BaseInput;}(_ValidationComponent3.default);BaseInput.propTypes = { /**
                                                                                         * Style map for the component.
                                                                                         */style: _react2.default.PropTypes.object, /**
                                                                                                                                     * Label for the form control.
                                                                                                                                     */label: _react2.default.PropTypes.string, /**
                                                                                                                                                                                 * name use as input field name
                                                                                                                                                                                 */name: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                            * Value of the component
                                                                                                                                                                                                                            */value: _react2.default.PropTypes.any, /**
                                                                                                                                                                                                                                                                     * Validations for the component
                                                                                                                                                                                                                                                                     */validations: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                                                                                       * Type of the BaseInput. (text, email, password, file)
                                                                                                                                                                                                                                                                                                                       */type: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                                                                                  * Component class of the BaseInput. (select, textarea)
                                                                                                                                                                                                                                                                                                                                                                  */componentClass: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                                                                                                                                      * Left Input Addon
                                                                                                                                                                                                                                                                                                                                                                                                                      */inputGroupLeft: _react2.default.PropTypes.any, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Right Input Addon
                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */inputGroupRight: _react2.default.PropTypes.any, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Disable input
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */disabled: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * it specifies that an input field is read-only
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */readOnly: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * it specifies that an input field is hidden or visible
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */hidden: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Defines the display style of the Validation message.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */validationDisplay: _react2.default.PropTypes.oneOf(["overlay", "block"]) };BaseInput.defaultProps = { disabled: false, readOnly: false, hidden: false, validationDisplay: "block" };BaseInput.maxTextLength = 999;exports.default = BaseInput;