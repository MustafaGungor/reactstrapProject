"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
var _googleMapReact = require("google-map-react");var _googleMapReact2 = _interopRequireDefault(_googleMapReact);
var _SearchBox = require("./SearchBox");var _SearchBox2 = _interopRequireDefault(_SearchBox);
var _reactstrap = require("reactstrap");
require("./GoogleMap.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

GoogleMap = function (_ShallowComponent) {_inherits(GoogleMap, _ShallowComponent);function GoogleMap() {_classCallCheck(this, GoogleMap);return _possibleConstructorReturn(this, (GoogleMap.__proto__ || Object.getPrototypeOf(GoogleMap)).apply(this, arguments));}_createClass(GoogleMap, [{ key: "render", value: function render()











        {
            var newProps = _extends({}, this.props);
            if (!newProps.bootstrapURLKeys.language) {
                newProps.bootstrapURLKeys.language = this.props.language;
            }
            return _react2.default.createElement("span", null,
                this.__renderSearchBox(),
                _react2.default.createElement(_googleMapReact2.default, newProps));

        } }, { key: "__renderSearchBox", value: function __renderSearchBox()

        {
            if (this.props.searchBox && this.props.searchBox.apiParams && this.props.bootstrapURLKeys.libraries) {
                return _react2.default.createElement(_reactstrap.Col, { id: "searchBoxContainer",
                        className: "searchbox-container" },
                    _react2.default.createElement(_SearchBox2.default, {
                        apiParams: this.props.searchBox.apiParams,
                        onPlacesChanged: this.props.searchBox.onPlacesChanged,
                        placeholder: this.props.searchBox.placeholder,
                        onChange: this.props.searchBox.onInputChange }));


            } else
            if (this.props.searchBox && !this.props.bootstrapURLKeys.libraries) {
                console.warn("Please add 'libraries=places' parameter in bootstrapURLKeys to use SearchBox");
                return;
            } else

            return;
        } }]);return GoogleMap;}(_robeReactCommons.ShallowComponent);GoogleMap.propTypes = _extends({}, _googleMapReact2.default.PropTypes, { searchBox: _react2.default.PropTypes.object });GoogleMap.defaultProps = _extends({}, _googleMapReact2.default.defaultProps, { language: _robeReactCommons.Application.i18n(GoogleMap, "googlemap.GoogleMap", "language") });exports.default = GoogleMap;