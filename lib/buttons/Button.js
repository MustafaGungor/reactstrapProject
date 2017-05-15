"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _Button = require("reactstrap/lib/Button");var _Button2 = _interopRequireDefault(_Button);
var _robeReactCommons = require("robe-react-commons");
var _FaIcon = require("../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);
require("./Button.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Button is a base component which wraps React-Bootstraps input component.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Does necessary validations, rendering of validation messages.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * @export
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * @class Button
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */var
Button = function (_ShallowComponent) {_inherits(Button, _ShallowComponent);
    /**
                                                                              * PropTypes of the component
                                                                              * @static
                                                                              */








































    function Button(props) {_classCallCheck(this, Button);var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this,
        props));
        _this.state = {
            isLoading: false };return _this;

    }

    /**
       * Renders the component
       * @returns {Object}
       */ /**
           * defaultProps
           * @static
           */_createClass(Button, [{ key: "render", value: function render() {var onClick = this.props.onClickAsync !== undefined ? this.__onClickAsync : this.props.onClick;var _props = this.props,onClickAsync = _props.onClickAsync,loadingIndicator = _props.loadingIndicator,newProps = _objectWithoutProperties(_props, ["onClickAsync", "loadingIndicator"]); //eslint-disable-line

            return (
                _react2.default.createElement(_Button2.default, _extends({}, newProps, { onClick: onClick, className: "ajaxButton" }),
                    this.props.children,
                    this.state.isLoading ? _react2.default.createElement("span", null, " \xA0 ", _react2.default.createElement(_FaIcon2.default, { code: this.props.loadingIndicator + " fa-spin" }), " ") : undefined));


        } }, { key: "__onClickAsync", value: function __onClickAsync(



        e) {
            if (this.state.isLoading) {
                return;
            }
            this.setState({
                isLoading: true });

            this.props.onClickAsync(e, this.done);
        }

        /**
           * Finishes the loading state of the button.
           * Should be called after async call responses.
           */ }, { key: "done", value: function done()
        {
            this.setState({
                isLoading: false });

        } }]);return Button;}(_robeReactCommons.ShallowComponent);Button.propTypes = { /**
                                                                                        * Disable input
                                                                                        */disabled: _react2.default.PropTypes.bool, /**
                                                                                                                                     * it specifies that an input field is hidden or visible
                                                                                                                                     */hidden: _react2.default.PropTypes.bool, /**
                                                                                                                                                                               * Event for synced operations.
                                                                                                                                                                               * Any operation will NOT trigger loading indicator and will act as normal button.
                                                                                                                                                                               */onClick: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                          * Event for async operations (timeouts, AJAX calls).
                                                                                                                                                                                                                          * Operation will trigger loading indicator.
                                                                                                                                                                                                                          */onClickAsync: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                           * Loading indicator.
                                                                                                                                                                                                                                                                           */loadingIndicator: _react2.default.PropTypes.oneOf(["fa-spinner", "fa-circle-o-notch", "fa-refresh", "fa-cog"]) };Button.defaultProps = { disabled: false, hidden: false, loadingIndicator: "fa-circle-o-notch" };exports.default = Button;