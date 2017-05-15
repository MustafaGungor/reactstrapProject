"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}
// import FaIcon from "../faicon/FaIcon";
var
Header = function (_ShallowComponent) {_inherits(Header, _ShallowComponent);



























    function Header(props) {_classCallCheck(this, Header);var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.onFilterClick = props.onFilterClick.bind(undefined, props.field.name);
        _this.onSortClick = props.onSortClick.bind(undefined, props.field.name);return _this;
    }_createClass(Header, [{ key: "render", value: function render()

        {
            var field = this.props.field;
            var filterStyle = Header.filterStyle;
            var sortStyle = Header.sortStyle;
            var sortIcon = "fa-sort";

            if (this.props.filter !== undefined && this.props.filter !== "") {
                filterStyle = Header.filterStyleSelected;
            }
            if (this.props.sort !== undefined && this.props.sort !== "") {
                switch (this.props.sort) {
                    case "ASC":
                        sortIcon = "fa-sort-asc";
                        sortStyle = Header.sortStyleSelected;
                        break;
                    case "DESC":
                        sortIcon = "fa-sort-desc";
                        sortStyle = Header.sortStyleSelected;
                        break;
                    default:
                        sortIcon = "fa-sort";}

            }
            var sortBtn = field.sort !== undefined ?
            _react2.default.createElement("i", {
                id: this.props.name,
                className: "fa  " + sortIcon + " pull-right",
                "aria-hidden": "true",
                onClick: this.onSortClick,
                style: sortStyle }) :

            null;
            var filterBtn = field.filter === true && this.props.filterable === true ?
            _react2.default.createElement("i", {
                id: this.props.name,
                className: "fa fa-filter pull-right",
                "aria-hidden": "true",
                onClick: this.onFilterClick,
                style: filterStyle }) :

            null;

            var style = { fontWeight: "bold" };

            if (field.width != undefined) {
                style.width = field.width;
            }

            return (
                _react2.default.createElement("th", { style: style, key: field.name },
                    field.label,
                    filterBtn,
                    sortBtn));

        } }]);return Header;}(_ShallowComponent3.default);Header.filterStyle = { marginTop: "2px", color: "#bbbbbb" };Header.filterStyleSelected = { marginTop: "2px", color: "#85b1e0" };Header.sortStyle = { marginTop: "2px", color: "#bbbbbb" };Header.sortStyleSelected = { marginTop: "2px", color: "#85b1e0" };Header.propTypes = { /**
                                                                                                                                                                                                                                                                                                                                            * Name of the column. Must be unique.
                                                                                                                                                                                                                                                                                                                                            */name: _react2.default.PropTypes.string.isRequired, /**
                                                                                                                                                                                                                                                                                                                                                                                                 * Field Configuration of the column.
                                                                                                                                                                                                                                                                                                                                                                                                 */field: _react2.default.PropTypes.object.isRequired, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                        * OnClick event for the filter button.
                                                                                                                                                                                                                                                                                                                                                                                                                                                        * */onFilterClick: _react2.default.PropTypes.func.isRequired, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Filterable or not
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * */filterable: _react2.default.PropTypes.bool };exports.default = Header;