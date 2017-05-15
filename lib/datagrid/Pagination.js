"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactstrap = require("reactstrap");





var _robeReactCommons = require("robe-react-commons");



var _Pagination = require("reactstrap/lib/Pagination");var _Pagination2 = _interopRequireDefault(_Pagination);
var _es6TemplateStrings = require("es6-template-strings");var _es6TemplateStrings2 = _interopRequireDefault(_es6TemplateStrings);

var _FaIcon = require("../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

Pagination = function (_ShallowComponent) {_inherits(Pagination, _ShallowComponent);function Pagination() {_classCallCheck(this, Pagination);return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));}_createClass(Pagination, [{ key: "render",






















        /**
                                                                                                                                                                                                                                                                                                                     * @returns {Object}
                                                                                                                                                                                                                                                                                                                     */value: function render()
        {
            var items = Math.ceil(this.props.totalCount / this.props.pageSize);

            var start = this.props.pageSize * (this.props.activePage - 1);
            var end = start + this.props.pageSize;
            var total = this.props.totalCount;

            if (end > total) {
                end = total;
            }
            var paginationText = void 0;
            if (total !== 0) {
                var text = (0, _es6TemplateStrings2.default)(this.props.displayText, { start: start + 1, end: end, total: total });
                paginationText = _react2.default.createElement("p", null, text);
            } else {
                paginationText = _react2.default.createElement("p", null, this.props.emptyText);
            }

            var pageSizeButtons = [];
            for (var i = 0; i < this.props.pageSizeButtons.length; i++) {
                var value = this.props.pageSizeButtons[i];
                pageSizeButtons.push(
                _react2.default.createElement(_reactstrap.Button, { key: i, active: this.props.pageSize === parseInt(value, 10), onClick: this.props.onPageSizeChange, value: value },
                    value));

            }

            return (
                _react2.default.createElement(_reactstrap.Col, { className: "datagrid-pagination-row" },
                    _react2.default.createElement(_reactstrap.Row, null,
                        _react2.default.createElement(_reactstrap.Col, { sm: 4 },
                            _react2.default.createElement(_reactstrap.ButtonGroup, { className: "hidden-xs", size: "sm" },
                                this.props.refreshable ? _react2.default.createElement(_reactstrap.Button, { onClick: this.props.onRefresh }, _react2.default.createElement(_FaIcon2.default, { code: "fa-refresh" })) : undefined,
                                pageSizeButtons)),


                        _react2.default.createElement(_reactstrap.Col, { sm: 4, className: "text-center" },
                            _react2.default.createElement(_Pagination2.default, {
                                style: { margin: "0px" },
                                prev: true,
                                next: true,
                                first: true,
                                last: true,
                                boundaryLinks: true,
                                activePage: this.props.activePage,
                                onSelect: this.props.onChange,
                                items: items,
                                maxButtons: 5,
                                size: "sm" })),


                        _react2.default.createElement(_reactstrap.Col, { sm: 4, className: "text-center", style: { paddingTop: "5px" } },
                            paginationText))));



        } }]);return Pagination;}(_robeReactCommons.ShallowComponent);Pagination.propTypes = { /**
                                                                                                * Fields Configurations to show style on view.
                                                                                                */activePage: _react2.default.PropTypes.number, pageSize: _react2.default.PropTypes.number, totalCount: _react2.default.PropTypes.number, displayText: _react2.default.PropTypes.string, emptyText: _react2.default.PropTypes.string, onChange: _react2.default.PropTypes.func, onPageSizeChange: _react2.default.PropTypes.func, onRefresh: _react2.default.PropTypes.func, pageSizeButtons: _react2.default.PropTypes.array };Pagination.defaultProps = { pageSizeButtons: [], pageSize: 5, totalCount: 0, activePage: 0 };exports.default = Pagination;