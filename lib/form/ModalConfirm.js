"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");



var _reactstrap = require("reactstrap");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

ModalConfirm = function (_ShallowComponent) {_inherits(ModalConfirm, _ShallowComponent);function ModalConfirm() {_classCallCheck(this, ModalConfirm);return _possibleConstructorReturn(this, (ModalConfirm.__proto__ || Object.getPrototypeOf(ModalConfirm)).apply(this, arguments));}_createClass(ModalConfirm, [{ key: "render", value: function render()

















        {
            return (
                _react2.default.createElement(_reactstrap.Modal, { isOpen: this.props.show },
                    _react2.default.createElement(_reactstrap.ModalHeader, { toggle: this.props.onCancelClick }, this.props.header),
                    _react2.default.createElement(_reactstrap.ModalBody, null,
                        this.props.message),

                    _react2.default.createElement(_reactstrap.ModalFooter, null,
                        _react2.default.createElement(_reactstrap.Button, { onClick: this.props.onCancelClick }, this.props.cancel),
                        _react2.default.createElement(_reactstrap.Button, { color: "danger", onClick: this.props.onOkClick }, this.props.ok))));



        } }]);return ModalConfirm;}(_robeReactCommons.ShallowComponent);ModalConfirm.propTypes = { onOkClick: _react2.default.PropTypes.func, onCancelClick: _react2.default.PropTypes.func, header: _react2.default.PropTypes.string, message: _react2.default.PropTypes.string, show: _react2.default.PropTypes.bool, ok: _react2.default.PropTypes.string, cancel: _react2.default.PropTypes.string };ModalConfirm.defaultProps = { ok: _robeReactCommons.Application.i18n(ModalConfirm, "form.ModalConfirm", "ok"), cancel: _robeReactCommons.Application.i18n(ModalConfirm, "form.ModalConfirm", "cancel") };exports.default = ModalConfirm;