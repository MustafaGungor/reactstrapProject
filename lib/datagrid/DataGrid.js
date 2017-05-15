"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _get = function get(object, property, receiver) {if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {var parent = Object.getPrototypeOf(object);if (parent === null) {return undefined;} else {return get(parent, property, receiver);}} else if ("value" in desc) {return desc.value;} else {var getter = desc.get;if (getter === undefined) {return undefined;}return getter.call(receiver);}};var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _isJs = require("is-js");var _isJs2 = _interopRequireDefault(_isJs);
var _robeReactCommons = require("robe-react-commons");
var _reactstrap = require("reactstrap");
var _DataGridBodyRow = require("./DataGridBodyRow");var _DataGridBodyRow2 = _interopRequireDefault(_DataGridBodyRow);
var _ModalConfirm = require("../form/ModalConfirm");var _ModalConfirm2 = _interopRequireDefault(_ModalConfirm);
var _Filters = require("./filter/Filters");var _Filters2 = _interopRequireDefault(_Filters);
var _SearchField = require("./toolbar/SearchField");var _SearchField2 = _interopRequireDefault(_SearchField);
var _DataFilter = require("../datafilter/DataFilter");var _DataFilter2 = _interopRequireDefault(_DataFilter);
var _ActionButtons = require("./toolbar/ActionButtons");var _ActionButtons2 = _interopRequireDefault(_ActionButtons);
var _Pagination = require("./Pagination");var _Pagination2 = _interopRequireDefault(_Pagination);
var _Header = require("./Header");var _Header2 = _interopRequireDefault(_Header);
var _Toast = require("../toast/Toast");var _Toast2 = _interopRequireDefault(_Toast);
var _ColumnMenu = require("./column/ColumnMenu");var _ColumnMenu2 = _interopRequireDefault(_ColumnMenu);
require("./DataGrid.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

DataGrid = function (_StoreComponent) {_inherits(DataGrid, _StoreComponent);











































































































    /**
                                                                              * static props
                                                                              * @type {object}
                                                                              */













































    function DataGrid(props) {_classCallCheck(this, DataGrid);var _this = _possibleConstructorReturn(this, (DataGrid.__proto__ || Object.getPrototypeOf(DataGrid)).call(this,
        props));_this.activePage = 1;_this.selection = undefined;_this.__q = undefined;_this.__filters = undefined;_this.pageSize = 20;_this.__fields = [];_this.__sorts = {};_this.




























































































































































































































































































        __onSearchChanged = function (event) {
            _this.state.qfilter = event.target.value;
            _this.activePage = 1;
            _this.__readData();
        };_this.state = { rows: [], totalCount: 0, hasSelection: false, modalDeleteConfirm: false, visiblePopups: {}, counter: 0 };_this.activePage = 1;if (props.propsOfFields) {_this.__init(props.fields, props.propsOfFields);} else {_this.__fields = props.fields;}return _this;} // noinspection JSAnnotator
    /**
     * Properties of the component
     *
     * @static
     */_createClass(DataGrid, [{ key: "__init", value: function __init(fields, propsOfFields) {for (var i = 0; i < fields.length; i++) {var field = fields[i];if (!field.name) {throw new Error("'name' field must be defined");}var props = propsOfFields[field.name];this.__fields[i] = props ? _robeReactCommons.Maps.mergeDeep(field, props) : fields[i];}} }, { key: "render", value: function render() {var _this2 = this;return _react2.default.createElement(_reactstrap.Col, { className: "datagrid" }, _react2.default.createElement(_reactstrap.Row, null, _react2.default.createElement(_reactstrap.Col, { xs: 12, sm: 12, lg: 12 }, _react2.default.createElement(_DataFilter2.default, { onChange: this.__onDataFilterChanged, visible: this.props.datafilter, fields: this.__fields }))), _react2.default.createElement(_reactstrap.Row, null, _react2.default.createElement(_reactstrap.Col, { xs: 5, sm: 5, lg: 4 }, _react2.default.createElement(_SearchField2.default, { onChange: this.__onSearchChanged, value: this.state.qfilter, visible: this.props.searchable, delay: this.props.delay, placeholder: _robeReactCommons.Application.i18n(DataGrid, "datagrid.DataGrid", "search") })), _react2.default.createElement(_reactstrap.Col, { xs: 7, sm: 7, lg: 8, style: { marginBottom: 15 } }, this.props.columnMenu ? _react2.default.createElement(_ColumnMenu2.default, { columns: this.__fields, onChange: this.__onColumnMenuChanged }) : null, _react2.default.createElement(_ActionButtons2.default, { ref: function ref(componet) {_this2.__actionButtonsComponent = componet;}, visible: this.props.editable, items: this.__getToolbarConfig() }))), _react2.default.createElement(_Filters2.default, { ref: function ref(component) {_this2.__filterComponent = component;}, fields: this.__fields, delay: this.props.delay, visiblePopups: this.state.visiblePopups, onChange: this.__onFilterChanged, idCount: this.getObjectId(), clearButtonText: this.props.filter.clear, clearAllButtonText: this.props.filter.clearAll }), _react2.default.createElement(_reactstrap.Table, { responsive: true, bordered: true, condensed: true, className: "datagrid-table" }, _react2.default.createElement("thead", null, _react2.default.createElement("tr", null, this.__generateHeader(this.props.fields))), _react2.default.createElement("tbody", null, this.__generateRows(this.__fields, this.state.rows))), this.props.pagination === undefined ? undefined : _react2.default.createElement(_Pagination2.default, _extends({}, this.props.pagination, { activePage: this.activePage, pageSizeButtons: this.props.pageSizeButtons, pageSize: this.pageSize, onChange: this.__handlePaginationSelect, onPageSizeChange: this.__pageSizeChange, refreshable: this.props.refreshable, onRefresh: this.__readData, totalCount: this.state.totalCount, emptyText: _robeReactCommons.Application.i18n(DataGrid, "datagrid.DataGrid", "pagination", "empty"), displayText: _robeReactCommons.Application.i18n(DataGrid, "datagrid.DataGrid", "pagination", "display") })), this.__renderModalConfirm());} }, { key: "__onColumnMenuChanged", value: function __onColumnMenuChanged(checked, i) {this.__fields[i].visible = !checked;this.forceUpdate();} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Selected rows
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @returns {Array}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */ }, { key: "getSelectedRows", value: function getSelectedRows() {var selections = [];if (this.selection) {selections.push(this.selection.props.data);}return selections;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @private
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */ }, { key: "__onDeleteConfirm", value: function __onDeleteConfirm() {this.props.onDeleteClick();this.__hideDeleteConfirm();this.__clearSelection();} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @private
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */ }, { key: "__showDeleteConfirm", value: function __showDeleteConfirm() {var show = !!this.selection;show == false ? _Toast2.default.warning(_robeReactCommons.Application.i18n(DataGrid, "datagrid.DataGrid", "deleteClick", "hasSelected")) : null;this.setState({ modalDeleteConfirm: show });} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @private
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */ }, { key: "__hideDeleteConfirm", value: function __hideDeleteConfirm() {this.setState({ modalDeleteConfirm: false });} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @private
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */ }, { key: "__renderModalConfirm", value: function __renderModalConfirm() {var config = this.__getModalConfirmConfig();return _react2.default.createElement(_ModalConfirm2.default, _extends({}, config, { onOkClick: this.__onDeleteConfirm, onCancelClick: this.__hideDeleteConfirm, show: this.state.modalDeleteConfirm }));} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @private
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */ }, { key: "__pageSizeChange", value: function __pageSizeChange(e) {this.pageSize = parseInt(e.target.value, 10);this.__readData();} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @private
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */ }, { key: "__handlePaginationSelect", value: function __handlePaginationSelect(event) {this.activePage = event;this.__readData();} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @param {Array<Object>} fields
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @returns {Array<Object>}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @private
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */ }, { key: "__generateHeader", value: function __generateHeader(fields) {var headers = [];for (var i = 0; i < fields.length; i++) {var column = fields[i];if (column.visible !== false && column.type !== "file") {headers.push(_react2.default.createElement(_Header2.default, { name: "tableColumn" + this.getObjectId() + "-" + column.name, key: "tableColumn" + this.getObjectId() + "-" + column.name, field: column, onFilterClick: this.__openFilterPopup, onSortClick: this.__onSortClick, filter: this.__filterComponent !== undefined ? this.__filterComponent.state.filters[column.name] : undefined, sort: this.__sorts[column.name] !== undefined ? this.__sorts[column.name] : column.sort, filterable: !this.props.datafilter }));}}return headers;} }, { key: "__onSortClick", value: function __onSortClick(name) {var value = void 0;switch (this.__sorts[name]) {case "DESC":value = "ASC";break;case "ASC":value = "";break;default:value = "DESC";}this.__sorts[name] = value;this.__readData();} }, { key: "__openFilterPopup", value: function __openFilterPopup(name) {var visiblePopups = this.__filterComponent.state.visiblePopups;var isVisible = visiblePopups[name];var popupState = {};popupState[name] = !isVisible;this.__filterComponent.setState({ visiblePopups: popupState });} }, { key: "__onFilterChanged", value: function __onFilterChanged(deleteAll) {var filterArr = [];if (!deleteAll) {_robeReactCommons.Maps.forEach(this.__filterComponent.state.filters, function (a) {if (a !== undefined) {if (_robeReactCommons.Assertions.isArray(a[0])) {for (var i = 0; i < a.length; i++) {filterArr.push(a[i]);}} else {filterArr.push(a);}}});}this.__filters = filterArr;this.__readData();} }, { key: "__generateRows", value: function __generateRows(fields, rows) {if (!rows) {return null;}var rowsArr = [];var size = rows.length !== undefined ? rows.length : rows.size();for (var i = 0; i < size; i++) {var row = rows[i];if (!_isJs2.default.object(row)) {console.warn("Undefined data row at:", i, row);} else {rowsArr.push(_react2.default.createElement(_DataGridBodyRow2.default, { key: i, resources: this.props.resources, fields: fields, idField: this.props.store.__props.idField, data: row, onSelection: this.__onSelection, onClick: this.props.onClick, rowRenderer: this.props.rowRenderer, cellRenderer: this.props.cellRenderer }));}}return rowsArr;} }, { key: "__onDataFilterChanged", value: function __onDataFilterChanged(filter) {this.__filters = filter;this.__readData();} }, { key: "__clearSelection", value: function __clearSelection() {if (this.__actionButtonsComponent) {this.__actionButtonsComponent.setState({ disabled: true });}if (this.selection !== undefined) {this.selection.setState({ selected: false });}this.selection = undefined;this.setState({ hasSelection: true });if (this.props.onSelection) {this.props.onSelection(undefined);}} }, { key: "__onSelection", value: function __onSelection(

        selection) {
            if (this.__actionButtonsComponent) {
                this.__actionButtonsComponent.setState({ disabled: false });
            }

            if (this.selection !== undefined) {
                if (this.selection.props === selection.props) {
                    if (this.props.editButton && this.props.onEditClick) {
                        this.props.onEditClick();
                    }
                    this.__triggerSelection();
                    return;
                }
                this.selection.setState({
                    selected: false });

            }
            this.selection = selection;
            this.selection.setState({
                selected: true });


            this.setState({
                hasSelection: true });


            this.__triggerSelection();
        } }, { key: "__triggerSelection", value: function __triggerSelection()

        {
            if (this.props.onSelection) {
                this.props.onSelection(this.selection.props.data);
            }
        } }, { key: "__map2Array", value: function __map2Array(

        map) {
            var array = [];
            _robeReactCommons.Maps.forEach(map, function (value, key) {
                if (value !== "") {
                    array.push([key, value]);
                }
            });
            return array.length === 0 ? undefined : array;
        } }, { key: "__readData", value: function __readData()

        {var _this3 = this;
            this.__clearSelection();
            var queryParams = {
                q: this.state.qfilter,
                filters: this.__filters,
                sort: this.__map2Array(this.__sorts) };

            if (this.props.pagination) {
                queryParams.offset = this.pageSize * (this.activePage - 1);
                queryParams.limit = this.pageSize;
            }
            this.props.store.read(
            function (response) {
                _this3.setState({
                    rows: response.data,
                    totalCount: response.totalCount });

            }, undefined, queryParams);
        } }, { key: "__getModalConfirmConfig", value: function __getModalConfirmConfig()

        {
            var config = _robeReactCommons.Maps.merge(this.props.modalConfirm, DataGrid.defaultProps.modalConfirm);
            return config;
        } }, { key: "__getToolbarConfig", value: function __getToolbarConfig()

        {
            var config = {
                create: {
                    visible: false,
                    text: _robeReactCommons.Application.i18n(DataGrid, "datagrid.DataGrid", "toolbar", "create"),
                    icon: "fa-plus",
                    onClick: this.props.onNewClick },

                edit: {
                    visible: false,
                    text: _robeReactCommons.Application.i18n(DataGrid, "datagrid.DataGrid", "toolbar", "edit"),
                    icon: "fa-pencil",
                    onClick: this.props.onEditClick,
                    disabled: !this.state.hasSelection },

                delete: {
                    visible: false,
                    text: _robeReactCommons.Application.i18n(DataGrid, "datagrid.DataGrid", "toolbar", "delete"),
                    icon: "fa-trash",
                    onClick: this.__showDeleteConfirm,
                    disabled: !this.state.hasSelection } };



            _robeReactCommons.Maps.forEach(this.props.toolbar, function (item) {
                if (_isJs2.default.string(item)) {
                    if (!(config[item] === undefined)) {
                        config[item].visible = true;
                    } else {
                        console.warn("command not found please use create,edit,delete or use your custom command"); //eslint-disable-line
                    }
                } else if (_isJs2.default.hash(item)) {
                    if (config[item.name] === undefined) {
                        config[item.name] = {};
                    }
                    config[item.name].visible = true;
                    _robeReactCommons.Maps.merge(item, config[item.name]);
                }
            });

            return config;
        } }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

        nextProps) {
            this.__readData();
        } }, { key: "componentWillMount", value: function componentWillMount()

        {
            if (this.props.pagination !== undefined && this.props.pagination.pageSize !== undefined) {
                this.pageSize = this.props.pagination.pageSize;
            }
        } }, { key: "componentDidMount", value: function componentDidMount()

        {
            _get(DataGrid.prototype.__proto__ || Object.getPrototypeOf(DataGrid.prototype), "componentDidMount", this).call(this);
            this.__readData();
        }

        /**
           * Do not implement
           * @param store
           */ }, { key: "triggerChange", value: function triggerChange(
        store) {
            this.setState({
                rows: store.getResult().data,
                totalCount: store.getResult().totalCount });

            this.forceUpdate();
        } }]);return DataGrid;}(_robeReactCommons.StoreComponent);DataGrid.propTypes = { /**
                                                                                          * Fields Configurations to show style on view.
                                                                                          */fields: _react2.default.PropTypes.array.isRequired, /**
                                                                                                                                                 * Holds extra props of components if need.
                                                                                                                                                 */propsOfFields: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                     * set one store
                                                                                                                                                                                                     */store: _react2.default.PropTypes.object.isRequired, /**
                                                                                                                                                                                                                                                            * toolbar for create,edit,delete and custom buttons
                                                                                                                                                                                                                                                            */toolbar: _react2.default.PropTypes.array, /**
                                                                                                                                                                                                                                                                                                         * Callback for new button click
                                                                                                                                                                                                                                                                                                         */onNewClick: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                        * Callback for edit button click
                                                                                                                                                                                                                                                                                                                                                        */onEditClick: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                        * Callback for delete button click
                                                                                                                                                                                                                                                                                                                                                                                                        */onDeleteClick: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                          * show export data flag
                                                                                                                                                                                                                                                                                                                                                                                                                                                          */exportButton: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * Make DataGrid as readonly
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */editable: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * ModalConfirm configuration
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */modalConfirm: _react2.default.PropTypes.shape({ header: _react2.default.PropTypes.string, message: _react2.default.PropTypes.string, okButtonText: _react2.default.PropTypes.string, cancelButtonText: _react2.default.PropTypes.string }), /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Callback for row selection
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */onSelection: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Enable pageable for DataGrid
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */pageable: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * enable/disable searchable
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */searchable: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * enable/disable DataFilter
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */datafilter: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * show/hide refresh button
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */refreshable: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * show/hide Page size buttons
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */pageSizeButtons: _react2.default.PropTypes.array, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Render method for the row. Use for custom row templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */rowRenderer: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Render method for the cell. Use for custom cell templates.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Default row template will call for every cell render event.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */cellRenderer: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * Filter properties of the grid.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */filter: _react2.default.PropTypes.shape({ clearButtonText: _react2.default.PropTypes.string, clearAllButtonText: _react2.default.PropTypes.string }), /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *Delay between last keystroke and requests.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */delay: _react2.default.PropTypes.number, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * show/hide columns menu button
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */columnMenu: _react2.default.PropTypes.bool };DataGrid.defaultProps = { editable: true, searchable: true, datafilter: false, refreshable: false, toolbar: [{ name: "create", visible: false, icon: "fa-plus" }, { name: "edit", visible: false, icon: "fa-pencil" }, { name: "delete", visible: false, icon: "fa-trash" }], modalConfirm: { header: _robeReactCommons.Application.i18n(DataGrid, "datagrid.DataGrid", "modalConfirm", "header"), message: _robeReactCommons.Application.i18n(DataGrid, "datagrid.DataGrid", "modalConfirm", "message"), ok: _robeReactCommons.Application.i18n(DataGrid, "datagrid.DataGrid", "modalConfirm", "ok"), cancel: _robeReactCommons.Application.i18n(DataGrid, "datagrid.DataGrid", "modalConfirm", "cancel") }, filter: { clear: _robeReactCommons.Application.i18n(DataGrid, "datagrid.DataGrid", "filter", "clear"), clearAll: _robeReactCommons.Application.i18n(DataGrid, "datagrid.DataGrid", "filter", "clearAll") }, delay: 1000, columnMenu: true };exports.default = DataGrid;