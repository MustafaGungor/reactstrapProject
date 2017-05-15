"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
var _reactstrap = require("reactstrap");
var _moment = require("moment");var _moment2 = _interopRequireDefault(_moment);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

NotificationItem = function (_ShallowComponent) {_inherits(NotificationItem, _ShallowComponent);function NotificationItem() {var _ref;var _temp, _this, _ret;_classCallCheck(this, NotificationItem);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotificationItem.__proto__ || Object.getPrototypeOf(NotificationItem)).call.apply(_ref, [this].concat(args))), _this), _this.





















        __onRead = function () {
            if (_this.props.onRead) {
                _this.props.onRead(_this.props.item.oid);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(NotificationItem, [{ key: "render", value: function render() {var item = this.props.item;return _react2.default.createElement("span", null, _react2.default.createElement("a", { style: { padding: "0!important" }, onClick: this.__onRead }, _react2.default.createElement(_reactstrap.Col, { className: "notification-item" }, _react2.default.createElement(_reactstrap.Col, { componentClass: "h4", className: "item-title", style: { marginBottom: 0 } }, _react2.default.createElement(_reactstrap.Col, { componentClass: "p", style: { wordWrap: "break-word" } }, item.description)), _react2.default.createElement(_reactstrap.Col, { componentClass: "p", style: { fontSize: 12 }, className: "item-title" }, (0, _moment2.default)(item.notificationDate).format("DD/MM/YYYY HH:mm"))), _react2.default.createElement("li", { id: "notify", className: "divider" })));} }]);return NotificationItem;}(_robeReactCommons.ShallowComponent);NotificationItem.propTypes = { item: _react2.default.PropTypes.object.isRequired };exports.default = NotificationItem;