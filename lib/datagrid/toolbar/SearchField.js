"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _reactstrap = require("reactstrap");
var _FaIcon = require("../../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

SearchField = function (_ShallowComponent) {_inherits(SearchField, _ShallowComponent);























    function SearchField(props) {_classCallCheck(this, SearchField);var _this = _possibleConstructorReturn(this, (SearchField.__proto__ || Object.getPrototypeOf(SearchField)).call(this,
        props));
        _this.state = {
            value: props.value,
            loading: false };return _this;

    }_createClass(SearchField, [{ key: "render", value: function render()

        {
            if (this.props.visible) {
                var icon = this.state.loading ? "fa-circle-o-notch fa-spin" : "fa-search";
                return (
                    _react2.default.createElement(_reactstrap.InputGroup, { size: "sm" },
                        _react2.default.createElement(_reactstrap.Input, {
                            onChange: this.onChange,
                            value: this.state.value,
                            placeholder: this.props.placeholder }),

                        _react2.default.createElement(_reactstrap.InputGroupAddon, null, _react2.default.createElement(_FaIcon2.default, { code: icon, size: "fa-sm" }))));


            }
            return _react2.default.createElement("span", null);
        } }, { key: "onChange", value: function onChange(

        e) {
            clearTimeout(this.searchOnChange);
            this.setState({
                value: e.target.value,
                loading: true });

            var event = { target: { value: e.target.value } };
            this.searchOnChange = setTimeout(function () {
                this.props.onChange(event);
                this.setState({
                    loading: false });

            }.bind(this), this.props.delay);
        } }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

        nextProps) {
            this.setState({
                value: nextProps.value });

        } }]);return SearchField;}(_ShallowComponent3.default);SearchField.propTypes = { /**
                                                                                          *Value for the search
                                                                                          */value: _react2.default.PropTypes.string, /**
                                                                                                                                      * placeholder text 
                                                                                                                                      */placeholder: _react2.default.PropTypes.string, /**
                                                                                                                                                                                        *Delay between last keystroke and search request.
                                                                                                                                                                                        */delay: _react2.default.PropTypes.number };SearchField.defaultProps = { value: "" };exports.default = SearchField;