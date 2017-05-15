"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
var _isJs = require("is-js");var _isJs2 = _interopRequireDefault(_isJs);
var _ComponentManager = require("../form/ComponentManager");var _ComponentManager2 = _interopRequireDefault(_ComponentManager);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

DataTableBodyRow = function (_ShallowComponent) {_inherits(DataTableBodyRow, _ShallowComponent);























    function DataTableBodyRow(props) {_classCallCheck(this, DataTableBodyRow);var _this = _possibleConstructorReturn(this, (DataTableBodyRow.__proto__ || Object.getPrototypeOf(DataTableBodyRow)).call(this,
        props));
        _this.state = {
            selected: false };return _this;

    } /**
       * @type {func}
       */_createClass(DataTableBodyRow, [{ key: "render", value: function render() {
            if (this.props.rowRenderer !== undefined) {
                return this.props.rowRenderer(this.props.fields, this.props.data);
            }
            return this.__generateRow(this.props.fields, this.props.data);
        } }, { key: "__generateRow", value: function __generateRow(

        fields, row) {
            if (!row) {
                return null;
            }

            if (!_isJs2.default.object(row)) {
                throw Error("Undefined data row at: " + row);
            }
            var cells = [];
            for (var j = 0; j < fields.length; j++) {
                var cell = void 0;
                if (this.props.cellRenderer !== undefined) {
                    cell = this.props.cellRenderer(j, fields, row);
                } else {
                    cell = this.__cellRenderer(j, fields, row);
                }
                if (cell !== undefined) {
                    cells.push(cell);
                }
            }
            var rowClassName = "datagrid-body-row";
            if (this.state.selected) {
                rowClassName = rowClassName + "-selected";
            }
            return (
                _react2.default.createElement("tr", { className: rowClassName, onClick: this.__onClick, key: row[this.props.idField] },
                    cells));


        } }, { key: "__cellRenderer", value: function __cellRenderer(

        idx, fields, row) {
            var column = fields[idx];
            if (column.visible !== false) {
                var value = row[column.name];
                if (column.mapping != undefined) {
                    try {
                        value = eval("row." + column.mapping);
                    } catch (e) {
                        value = row[column.name];
                    }
                }

                var result = void 0;
                if (column.renderer != undefined) {
                    result = column.renderer(this.props.data);
                } else {
                    result = column.displayAsText ? column.displayAsText(column.type, column, value, row) : _ComponentManager2.default.getDisplayAsText(column.type, column, value, row);
                }

                return _react2.default.createElement("td", { key: column.name }, result);
            }
            return undefined;
        } }, { key: "__onClick", value: function __onClick()

        {
            if (this.props.onSelection) {
                this.props.onSelection(this);
            }

            if (this.props.onClick) {
                this.props.onClick(this.props.data);
            }
        } }, { key: "shouldComponentUpdate", value: function shouldComponentUpdate()

        {
            return true;
        } }]);return DataTableBodyRow;}(_robeReactCommons.ShallowComponent);DataTableBodyRow.propTypes = { onClick: _react2.default.PropTypes.func, resources: _react2.default.PropTypes.object, fields: _react2.default.PropTypes.array, data: _react2.default.PropTypes.object, onSelection: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                * Render method for the row. Use for custom row templates
                                                                                                                                                                                                                                                                                                                                */rowRenderer: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                * Render method for the cell. Use for custom cell templates.
                                                                                                                                                                                                                                                                                                                                                                                * Default row template will call for every cell render event.
                                                                                                                                                                                                                                                                                                                                                                                */cellRenderer: _react2.default.PropTypes.func };exports.default = DataTableBodyRow;