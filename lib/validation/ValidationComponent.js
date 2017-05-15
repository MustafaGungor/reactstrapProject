"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
var _reactstrap = require("reactstrap");
var _InputValidations = require("./InputValidations");var _InputValidations2 = _interopRequireDefault(_InputValidations);
require("./Validation.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * BaseComponent for React Components which will use Validations
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */var
ValidationComponent = function (_ShallowComponent) {_inherits(ValidationComponent, _ShallowComponent);



























    /**
                                                                                                        * Creates an instance of BaseInput.
                                                                                                        * @param {any} props
                                                                                                        */ /**
                                                                                                            * Holds the valid property of input component.
                                                                                                            */function ValidationComponent(props) {_classCallCheck(this, ValidationComponent);var _this = _possibleConstructorReturn(this, (ValidationComponent.__proto__ || Object.getPrototypeOf(ValidationComponent)).call(this, props));_this.__valid = false;_this._validations = {};
        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            tooltipOpen: false };

        if (_this.props.validations !== undefined) {
            _this._validations = _this.props.validations;
        }return _this;
    } /**
       * Validation map for all functions and custom messages .
       * protected
       */ /**
           * Max length allowed message.
           * @static
           */_createClass(ValidationComponent, [{ key: "validationResult", value: function validationResult() {var alerts = void 0;var errors = this.validate(this.props.value);this.__valid = errors.length === 0;var messages = [];
            for (var i = 0; i < errors.length; i++) {
                messages.push(_react2.default.createElement("p", { key: i }, errors[i]));
            }
            if (!this.isValid()) {
                alerts = messages;
            }
            return alerts;
        } }, { key: "toggle", value: function toggle()

        {
            this.setState({
                tooltipOpen: !this.state.tooltipOpen });

        } }, { key: "wrapComponent", value: function wrapComponent(

        component, index) {
            // overlay validation eklenecek...
            var result = this.validationResult();
            var showMsg = result !== undefined;
            var newProps = showMsg ? { validationState: "error" } : {};
            // if (this.props.validationDisplay === "block") {
            //     let tooltip = <Alert className="input-alert" color="danger">{result}</Alert>;
            //     let newComponent = React.cloneElement(component,
            //         newProps,
            //         component.props.children,
            //         showMsg ? tooltip : <span></span>);
            //     return newComponent;
            // } else {
            //     let newComponent = React.cloneElement(component, newProps);
            //     let tooltip = <Tooltip id="tooltip" placement="bottom" isOpen={this.state.tooltipOpen} target="" toggle={this.toggle}>{result}</Tooltip>;
            //     return (
            //         <div>{newComponent}{tooltip}</div>
            //     );
            // }
            // // }
            // return component;
            var tooltip = _react2.default.createElement(_reactstrap.Alert, { className: "input-alert", color: "danger" }, result);
            var newComponent = _react2.default.cloneElement(component,
            newProps,
            component.props.children,
            showMsg ? tooltip : _react2.default.createElement("span", null));
            return newComponent;
        }

        /**
           * Returns validity of the component.
           * @return {boolean}
           */ }, { key: "isValid", value: function isValid()
        {
            return this.__valid;
        }

        /**
           * Fired after component mounts. Sets focus from props.
           */ }, { key: "componentWillMount", value: function componentWillMount()
        {
            if (this.props.validations !== undefined) {
                this._validations = this.props.validations;
            }
        }

        /**
           * Validates the input components and returns error messages.
           * @return { Array<string>} array of messages.
           */ }, { key: "validate", value: function validate(
        value) {var _this2 = this;
            var messages = [];
            _robeReactCommons.Maps.forEach(this._validations, function (validation, key) {
                // It must be a object
                if (!_robeReactCommons.Assertions.isObject(validation)) {
                    validation = {};
                }
                // If func is not given, take a function with the same key from InputValidations
                if (!validation.func) {
                    validation.func = _InputValidations2.default[key];
                    if (!validation.func) {
                        console.error("Validation function is not found in the properties or InputValidations key: \"" + key + "\""); // eslint-disable-line
                        return;
                    }
                }
                var message = null;
                if (validation.args) {
                    var inputValues = _robeReactCommons.Objects.deepCopy(validation.args);
                    inputValues.push(value);
                    message = validation.func.apply(_this2.props, inputValues);
                } else {
                    message = validation.func(value);
                }
                if (message !== undefined) {
                    if (validation.message !== undefined) {
                        message = validation.message;
                    }
                    messages = messages.concat(message);
                }
            });
            return messages;
        } }]);return ValidationComponent;}(_robeReactCommons.ShallowComponent);ValidationComponent.propTypes = { /**
                                                                                                                  * Value of the component
                                                                                                                  */value: _react2.default.PropTypes.any, /**
                                                                                                                                                           * Validations for the component
                                                                                                                                                           */validations: _react2.default.PropTypes.object, validationDisplay: _react2.default.PropTypes.oneOf(["overlay", "block"]) };ValidationComponent.maxTextLengthMessage = "Input cannot be more than 1000 characters.";exports.default = ValidationComponent;