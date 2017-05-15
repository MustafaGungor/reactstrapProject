"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactstrap = require("reactstrap");
var _robeReactCommons = require("robe-react-commons");
var _ProgressBar = require("../progress/ProgressBar");var _ProgressBar2 = _interopRequireDefault(_ProgressBar);
var _ClassName = require("../util/css/ClassName");var _ClassName2 = _interopRequireDefault(_ClassName);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

ThumbnailItem = function (_ShallowComponent) {_inherits(ThumbnailItem, _ShallowComponent);
    /**
                                                                                            * Properties of the component
                                                                                            *
                                                                                            * @static
                                                                                            */



















    function ThumbnailItem(props) {_classCallCheck(this, ThumbnailItem);return _possibleConstructorReturn(this, (ThumbnailItem.__proto__ || Object.getPrototypeOf(ThumbnailItem)).call(this,
        props));
    } /**
       * Default properties of the component
       *
       * @static
       */_createClass(ThumbnailItem, [{ key: "render", value: function render() {var progressBar = { className: "center-block " };
            if (this.props.className) {
                _ClassName2.default.add(progressBar, this.props.className);
            }
            if (this.props.focused) {
                _ClassName2.default.add(progressBar, "rb-focused");
            }
            if (this.props.selected) {
                _ClassName2.default.add(progressBar, "rb-selected");
            }

            var progress = this.props.loading !== undefined ? _react2.default.createElement(_ProgressBar2.default, { loading: this.props.loading }) : null;
            return (
                _react2.default.createElement("div", { className: progressBar.className, style: this.props.style },
                    progress,
                    this.props.children));


        } }]);return ThumbnailItem;}(_robeReactCommons.ShallowComponent);ThumbnailItem.propTypes = { className: _react2.default.PropTypes.string, style: _react2.default.PropTypes.object, focused: _react2.default.PropTypes.bool, selected: _react2.default.PropTypes.bool, loading: _react2.default.PropTypes.bool };ThumbnailItem.defaultProps = { focused: false, selected: false, loading: undefined };exports.default = ThumbnailItem;