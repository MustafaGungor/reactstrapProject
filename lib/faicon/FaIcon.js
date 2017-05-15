"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
require("font-awesome/css/font-awesome.min.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * This component wraps font-awesome elements. Also it loads font-awesome.min.css. No need to load it somewhere else.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Please look at https://fortawesome.github.io/Font-Awesome/examples/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */var
FaIcon = function (_ShallowComponent) {_inherits(FaIcon, _ShallowComponent);function FaIcon() {_classCallCheck(this, FaIcon);return _possibleConstructorReturn(this, (FaIcon.__proto__ || Object.getPrototypeOf(FaIcon)).apply(this, arguments));}_createClass(FaIcon, [{ key: "render", value: function render()




























        {
            var fixedStr = this.props.fixed ? "fa-fw" : "";
            var propsClassName = this.props.className === undefined ? "" : this.props.className;
            var className = "fa " + fixedStr + " " + this.props.code + " " + this.props.size + " " + propsClassName;var _props =

            this.props,fixed = _props.fixed,code = _props.code,size = _props.size,props = _objectWithoutProperties(_props, ["fixed", "code", "size"]); // eslint-disable-line no-unused-vars

            return (
                _react2.default.createElement("i", _extends({}, props, { className: className, style: this.props.style, "aria-hidden": "true" })));

        } }]);return FaIcon;}(_robeReactCommons.ShallowComponent);FaIcon.propTypes = { /**
                                                                                        * Classname for use icon.
                                                                                        * More information : http://fontawesome.io/icons/
                                                                                        */code: _react2.default.PropTypes.string.isRequired, /**
                                                                                                                                              * Size code of the icon. Use fa-sm, fa-lg (33% increase), fa-2x, fa-3x, fa-4x, or fa-5x classes.
                                                                                                                                              * More information : http://fontawesome.io/examples/#larger
                                                                                                                                              */size: _react2.default.PropTypes.oneOf(["fa-sm", "fa-lg", "fa-2x", "fa-3x", "fa-4x", "fa-5x"]), /**
                                                                                                                                                                                                                                                * applies custom style to the icon.
                                                                                                                                                                                                                                                */style: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                                                            * Specifies to use fa-fw class or not for fixed icon width and height.
                                                                                                                                                                                                                                                                                            * More information : http://fontawesome.io/examples/#fixed-width
                                                                                                                                                                                                                                                                                            */fixed: _react2.default.PropTypes.bool };FaIcon.defaultProps = { size: "fa-sm", fixed: true };exports.default = FaIcon;