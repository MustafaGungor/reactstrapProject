"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactstrap = require("reactstrap");
var _ThumbnailItem = require("./ThumbnailItem");var _ThumbnailItem2 = _interopRequireDefault(_ThumbnailItem);
var _robeReactCommons = require("robe-react-commons");
require("./ThumbnailGroup.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

ThumbnailGroup = function (_ShallowComponent) {_inherits(ThumbnailGroup, _ShallowComponent);












    function ThumbnailGroup(props) {_classCallCheck(this, ThumbnailGroup);return _possibleConstructorReturn(this, (ThumbnailGroup.__proto__ || Object.getPrototypeOf(ThumbnailGroup)).call(this,
        props));
    } /**
       * Properties of the component
       *
       * @static
       */_createClass(ThumbnailGroup, [{ key: "render", value: function render() {return _react2.default.createElement("div", this.props,
                _react2.default.createElement("div", { placeholder: this.props.placeholder, id: this.props.id ? this.props.id + "_box" : null,
                        className: "rb-thumbnail-box", style: this.props.style },
                    this.renderItems()));



        } }, { key: "renderItems", value: function renderItems()

        {
            return _react2.default.Children.map(this.props.children, function (child) {
                if (child.type === _ThumbnailItem2.default) {
                    return child;
                }
            });
        } }]);return ThumbnailGroup;}(_robeReactCommons.ShallowComponent);ThumbnailGroup.propTypes = { id: _react2.default.PropTypes.string, style: _react2.default.PropTypes.object, className: _react2.default.PropTypes.string, placeholder: _react2.default.PropTypes.string };exports.default = ThumbnailGroup;