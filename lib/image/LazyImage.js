"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactDom = require("react-dom");var _reactDom2 = _interopRequireDefault(_reactDom);
var _robeReactCommons = require("robe-react-commons");
var _reactstrap = require("reactstrap");
require("./LazyImage.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * LazyImage is a component for loading images via ajax with a loading animation.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @export
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @class LazyImage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @extends {ShallowComponent}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */var
LazyImage = function (_ShallowComponent) {_inherits(LazyImage, _ShallowComponent);

























































    /**
                                                                                    * Creates an instance of LazyImage.
                                                                                    * @param {any} props
                                                                                    * @memberOf LazyImage
                                                                                    */ /**
                                                                                        * 
                                                                                        * 
                                                                                        * @static
                                                                                        * 
                                                                                        * @memberOf LazyImage
                                                                                        */function LazyImage(props) {_classCallCheck(this, LazyImage);var _this = _possibleConstructorReturn(this, (LazyImage.__proto__ || Object.getPrototypeOf(LazyImage)).call(this, props));_this.state = { loaded: false };return _this;}

    /**
                                                                                                                                                                                                                                                                                                                                * Renders the component
                                                                                                                                                                                                                                                                                                                                * @returns {Object}
                                                                                                                                                                                                                                                                                                                                * @memberOf LazyImage
                                                                                                                                                                                                                                                                                                                                */ /**
                                                                                                                                                                                                                                                                                                                                    * Actual image <img>
                                                                                                                                                                                                                                                                                                                                    * @memberOf LazyImage
                                                                                                                                                                                                                                                                                                                                    */_createClass(LazyImage, [{ key: "render", value: function render() {var className = "lazyimage-placeholder";if (!this.state.loaded) {
                className += "-loading";
            }
            return (
                _react2.default.createElement("div", null,
                    _react2.default.createElement(_reactstrap.Media, _extends({ object: true }, this.props, { className: className, "data-src": this.state.src, ref: this.__setInnerComponent }))));



        } }, { key: "__setInnerComponent", value: function __setInnerComponent(

        component) {
            this.innerComponent = component;
        } }, { key: "componentDidMount", value: function componentDidMount()

        {var _this2 = this;
            this.downloadingImage = new Image();
            this.downloadingImage.onload = function (e) {
                _this2.setState({ loaded: true, src: _this2.props.src });
            };
            this.downloadingImage.src = this.props.src;
        } }]);return LazyImage;}(_robeReactCommons.ShallowComponent);LazyImage.propTypes = { /**
                                                                                              *Source of the image
                                                                                              */src: _react2.default.PropTypes.string.isRequired, /**
                                                                                                                                                   *Height of the image
                                                                                                                                                   */height: _react2.default.PropTypes.string.isRequired, /**
                                                                                                                                                                                                           * Width of the image
                                                                                                                                                                                                           */width: _react2.default.PropTypes.string.isRequired, /**
                                                                                                                                                                                                                                                                  * Applies custom style to the image.
                                                                                                                                                                                                                                                                  */style: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                                                                              *Sets image shape as circle
                                                                                                                                                                                                                                                                                                             */circle: _react2.default.PropTypes.bool, /** Sets image as responsive image */responsive: _react2.default.PropTypes.bool, /** Sets image shape as rounded */rounded: _react2.default.PropTypes.bool, /** Sets image shape as thumbnail */thumbnail: _react2.default.PropTypes.bool };LazyImage.defaultProps = { style: {}, circle: false, responsive: false, rounded: false, thumbnail: false };exports.default = LazyImage;