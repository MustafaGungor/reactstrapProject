"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _reactstrap = require("reactstrap");








var _FaIcon = require("../../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

ColumnMenu = function (_ShallowComponent) {_inherits(ColumnMenu, _ShallowComponent);









    function ColumnMenu(props) {_classCallCheck(this, ColumnMenu);var _this = _possibleConstructorReturn(this, (ColumnMenu.__proto__ || Object.getPrototypeOf(ColumnMenu)).call(this,
        props));
        _this.state = {
            open: false,
            columns: _this.props.columns };return _this;

    }_createClass(ColumnMenu, [{ key: "render", value: function render()

        {
            return (
                _react2.default.createElement(_reactstrap.Dropdown, { group: true, isOpen: this.state.open, size: "sm", className: "pull-right", toggle: this.__toggle },
                    _react2.default.createElement(_reactstrap.DropdownToggle, { caret: true }, _react2.default.createElement(_FaIcon2.default, { code: "fa fa-bars" })),
                    _react2.default.createElement(_reactstrap.DropdownMenu, null,
                        this.__renderColumns())));



        } }, { key: "__renderColumns", value: function __renderColumns()

        {
            var showColumnButtons = [];
            var columns = this.state.columns;
            var activeCount = 0;
            for (var i = 0; i < columns.length; i++) {
                var column = columns[i];
                var checked = column.visible !== false;
                if (checked) {activeCount++;}
            }


            for (var _i = 0; _i < columns.length; _i++) {
                var _column = columns[_i];
                var _checked = _column.visible !== false;
                var disabled = false;
                if (_checked && activeCount === 1) {
                    disabled = true;
                }
                showColumnButtons.push(_react2.default.createElement(_reactstrap.DropdownItem, { toggle: false, disabled: disabled }, _react2.default.createElement(_reactstrap.Label, { check: true }, _react2.default.createElement(_reactstrap.Input, { type: "checkbox", disabled: disabled, checked: _checked, onChange: disabled ? null : this.handleChange.bind(undefined, _checked, _i) }), _column.label)));
            }

            return showColumnButtons;
        } }, { key: "handleChange", value: function handleChange(

        checked, i) {
            if (this.props.onChange) {
                this.props.onChange(checked, i);
            }
        } }, { key: "__toggle", value: function __toggle()

        {
            this.setState({ open: !this.state.open });
        } }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

        nextProps) {
            this.setState({ columns: nextProps.columns });
            this.forceUpdate();
        } }]);return ColumnMenu;}(_ShallowComponent3.default);ColumnMenu.propTypes = { /**
                                                                                        * Fields Configurations to show style on view.
                                                                                        */onChange: _react2.default.PropTypes.func };exports.default = ColumnMenu;