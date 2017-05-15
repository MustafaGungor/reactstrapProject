"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _Maps = require("robe-react-commons/lib/utils/Maps");var _Maps2 = _interopRequireDefault(_Maps);
var _reactstrap = require("reactstrap");








var _FaIcon = require("../../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

ActionButtons = function (_ShallowComponent) {_inherits(ActionButtons, _ShallowComponent);











    function ActionButtons(props) {_classCallCheck(this, ActionButtons);var _this = _possibleConstructorReturn(this, (ActionButtons.__proto__ || Object.getPrototypeOf(ActionButtons)).call(this,
        props));
        _this.state = {
            disabled: true,
            dropdownOpen: false };return _this;

    }_createClass(ActionButtons, [{ key: "toggle", value: function toggle()

        {
            this.setState({ dropdownOpen: !this.state.dropdownOpen });
        } }, { key: "render", value: function render()


        {var _this2 = this;
            if (this.props.visible) {
                var actions = [];
                _Maps2.default.forEach(this.props.items, function (item) {
                    if (item.visible) {
                        var disabled = item.disabled;
                        if (item.name === "edit" || item.name == "delete") {
                            disabled = _this2.state.disabled;
                        }
                        var action = _react2.default.createElement(_reactstrap.Button, { key: item.text, disabled: disabled, onClick: item.onClick, size: "sm" }, _react2.default.createElement(_FaIcon2.default, { code: item.icon }), _react2.default.createElement("span", { className: "hidden-xs" }, " ", item.text));
                        if (item.name == "export") {
                            action =
                            _react2.default.createElement(_reactstrap.ButtonDropdown, { isOpen: _this2.state.dropdownOpen, toggle: _this2.toggle },
                                _react2.default.createElement(_reactstrap.DropdownToggle, { caret: true, size: "sm" }, "Export"),
                                _react2.default.createElement(_reactstrap.DropdownMenu, { size: "sm" },
                                    _react2.default.createElement(_reactstrap.DropdownItem, { size: "sm", eventKey: "1" }, _react2.default.createElement(_FaIcon2.default, { code: "fa fa-file-pdf-o" }), _react2.default.createElement("span", { className: "hidden-xs" }, " PDF")),
                                    _react2.default.createElement(_reactstrap.DropdownItem, { size: "sm", eventKey: "2" }, _react2.default.createElement(_FaIcon2.default, { code: "fa fa-file-excel-o" }), _react2.default.createElement("span", { className: "hidden-xs" }, " EXCEL")),
                                    _react2.default.createElement(_reactstrap.DropdownItem, { size: "sm", eventKey: "3" }, _react2.default.createElement(_FaIcon2.default, { code: "fa fa-file-word-o" }), _react2.default.createElement("span", { className: "hidden-xs" }, "WORD")),
                                    _react2.default.createElement(_reactstrap.DropdownItem, { size: "sm", eventKey: "4" }, _react2.default.createElement(_FaIcon2.default, { code: "fa fa-file-text-o" }), _react2.default.createElement("span", { className: "hidden-xs" }, " CSV"))));



                        }
                        actions.push(action);
                    }
                });

                return (
                    _react2.default.createElement(_reactstrap.ButtonGroup, { className: "pull-right", size: "sm" },
                        actions));


            }
            return _react2.default.createElement("span", null);
        } }]);return ActionButtons;}(_ShallowComponent3.default);ActionButtons.propTypes = { /**
                                                                                              * Fields Configurations to show style on view.
                                                                                              */visible: _react2.default.PropTypes.bool };ActionButtons.defaultProps = { visible: true };exports.default = ActionButtons;