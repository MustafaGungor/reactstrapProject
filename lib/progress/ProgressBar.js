"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
var _ClassName = require("../util/css/ClassName");var _ClassName2 = _interopRequireDefault(_ClassName);
require("./ProgressBar.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

ProgressBar = function (_ShallowComponent) {_inherits(ProgressBar, _ShallowComponent);
    /**
                                                                                        * Properties of the component
                                                                                        * @static
                                                                                        */























    function ProgressBar(props) {_classCallCheck(this, ProgressBar);return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this,
        props));
    } /**
       * Default properties of the component
       * @static
       */_createClass(ProgressBar, [{ key: "render", value: function render() {
            var progress = { className: "rb-progress" };
            var bar = { className: "rb-progress-bar" };

            if (this.props.loading) {
                _ClassName2.default.add(bar, "rb-progress-bar-start");
            } else
            {
                _ClassName2.default.add(bar, "rb-progress-bar-finish");
                _ClassName2.default.add(progress, "rb-progress-finish");
            }

            return (
                _react2.default.createElement("div", { className: this.props.className, style: this.props.style },
                    _react2.default.createElement("div", { className: progress.className },
                        _react2.default.createElement("div", { className: "rb-progress-content" },
                            _react2.default.createElement("div", { className: bar.className })))));




        } }]);return ProgressBar;}(_robeReactCommons.ShallowComponent);ProgressBar.propTypes = { /**
                                                                                                  *  Classname for use progress.
                                                                                                  */className: _react2.default.PropTypes.string, /**
                                                                                                                                                  * Custom style to the progress.
                                                                                                                                                  */style: _react2.default.PropTypes.object, /**
                                                                                                                                                                                              * Specifies status for progress.
                                                                                                                                                                                              */loading: _react2.default.PropTypes.bool };ProgressBar.defaultProps = { loading: true };exports.default = ProgressBar;