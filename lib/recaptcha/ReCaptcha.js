"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
var _reactRecaptcha = require("react-recaptcha/dist/react-recaptcha");var _reactRecaptcha2 = _interopRequireDefault(_reactRecaptcha);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

ReCaptcha = function (_ShallowComponent) {_inherits(ReCaptcha, _ShallowComponent);function ReCaptcha() {_classCallCheck(this, ReCaptcha);return _possibleConstructorReturn(this, (ReCaptcha.__proto__ || Object.getPrototypeOf(ReCaptcha)).apply(this, arguments));}_createClass(ReCaptcha, [{ key: "render",



        /**
                                                                                                                                                                                                                                                                                                               * Properties of the component
                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                               * @static
                                                                                                                                                                                                                                                                                                               */value: function render()











        {var _props =
            this.props,language = _props.language,props = _objectWithoutProperties(_props, ["language"]); // eslint-disable-line no-unused-vars
            return _react2.default.createElement(_reactRecaptcha2.default, props);
        } /* make global load every language only once time */ }, { key: "componentWillMount", value: function componentWillMount()

        {
            /**
             * make this to static load only once time
             */

            var lang = this.props.language;
            var isLoaded = ReCaptcha.LANGUAGE_MAP[lang];

            if (!isLoaded) {
                ReCaptcha.LANGUAGE_MAP[lang] = true;
                var script = document.createElement("script");
                script.src = ReCaptcha.URL + "?hl=" + lang;
                script.async = true;
                /**
                                      * handle on error
                                      */
                /*
                                             script.onerror = () => {
                                                 let mapEntry = this.LANGUAGE_MAP.get(lang);
                                                 mapEntry.errored = true;
                                             };
                                             script.onload = () => {
                                                 let mapEntry = this.LANGUAGE_MAP.get(lang);
                                                 mapEntry.loaded = true;
                                             };
                                         */
                document.body.appendChild(script);
            }
        } }]);return ReCaptcha;}(_robeReactCommons.ShallowComponent);ReCaptcha.LANGUAGE_MAP = {};ReCaptcha.URL = "https://www.google.com/recaptcha/api.js";ReCaptcha.propTypes = _extends({}, _reactRecaptcha2.default.PropTypes, { language: _react.PropTypes.string });ReCaptcha.defaultProps = _extends({}, _reactRecaptcha2.default.defaultProps, { language: _robeReactCommons.Application.i18n(ReCaptcha, "recaptcha.ReCaptcha", "language") });exports.default = ReCaptcha;