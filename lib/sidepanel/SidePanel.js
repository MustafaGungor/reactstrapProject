"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
var _reactstrap = require("reactstrap");
require("./SidePanel.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

SidePanel = function (_ShallowComponent) {_inherits(SidePanel, _ShallowComponent);





























    function SidePanel(props) {_classCallCheck(this, SidePanel);var _this = _possibleConstructorReturn(this, (SidePanel.__proto__ || Object.getPrototypeOf(SidePanel)).call(this,
        props));
        _this.state = {};return _this;

    }_createClass(SidePanel, [{ key: "render", value: function render()

        {var _this2 = this;
            var components = _react2.default.Children.map(this.props.children, function (child) {return child;});
            return (
                _react2.default.createElement("div", { ref: function ref(component) {_this2.sidePanel = component;},
                        style: this.props.style,
                        className: this.props.position == "left" ? "side-panel-left" : "side-panel-right" },
                    components));


        } }, { key: "__calculatePosition", value: function __calculatePosition(

        props) {
            var width = parseInt(props.width) + 10;
            this.sidePanel.style.width = width - 10 + "px";
            if (props.position == "left") {
                this.sidePanel.style.left = props.visible ? "0" : "-" + width + "px";
            } else
            {
                this.sidePanel.style.right = props.visible ? "0" : "-" + width + "px";
            }
        } }, { key: "componentDidMount", value: function componentDidMount()

        {
            this.__calculatePosition(this.props);
        } }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

        nextProps) {
            this.__calculatePosition(nextProps);
        } }]);return SidePanel;}(_robeReactCommons.ShallowComponent);SidePanel.propTypes = { /**
                                                                                              * Is component visible or not
                                                                                              */visible: _react2.default.PropTypes.bool, /**
                                                                                                                                          * Position of the component
                                                                                                                                          */position: _react2.default.PropTypes.oneOf(["left", "right"]), /**
                                                                                                                                                                                                           * Styles that you want to change
                                                                                                                                                                                                           */style: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                       * Width in pixels
                                                                                                                                                                                                                                                       */width: _react2.default.PropTypes.number };SidePanel.defaultProps = { visible: false, position: "left", style: {}, width: 250 };exports.default = SidePanel;