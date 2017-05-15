"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");



var _TextInput = require("../inputs/TextInput");var _TextInput2 = _interopRequireDefault(_TextInput);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

SearchBox = function (_ShallowComponent) {_inherits(SearchBox, _ShallowComponent);










    function SearchBox(props) {_classCallCheck(this, SearchBox);var _this = _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this,
        props));
        _this.state = {
            searchedValue: "" };return _this;

    }_createClass(SearchBox, [{ key: "render", value: function render()

        {
            return _react2.default.createElement("span", null,
                _react2.default.createElement(_TextInput2.default, {
                    id: "searchBoxInput",
                    name: "searchedValue",
                    type: "text",
                    placeholder: this.props.placeholder,
                    value: this.state.searchedValue,
                    onChange: this.__handleChange }));

        } }, { key: "onPlacesChanged", value: function onPlacesChanged()

        {
            if (this.props.onPlacesChanged)
            this.props.onPlacesChanged(this.searchBox.getPlaces());
        } }, { key: "__handleChange", value: function __handleChange(

        e) {
            var state = {};
            var value = e.target.parsedValue !== undefined ? e.target.parsedValue : e.target.value;
            state[e.target.name] = value;
            this.setState(state);

            if (this.props.onChange)
            this.props.onChange(state);
        } }, { key: "componentDidMount", value: function componentDidMount()

        {
            if (this.props.apiParams) {
                var input = document.getElementById("searchBoxInput");
                this.searchBox = new this.props.apiParams.maps.places.SearchBox(input);
                this.searchBox.addListener("places_changed", this.onPlacesChanged);
            } else

            console.warn("Please be sure that apiParams prop is a not undefined");
        } }, { key: "componentWillUnmount", value: function componentWillUnmount()

        {
            this.props.apiParams.maps.event.clearInstanceListeners(this.searchBox);
        } }]);return SearchBox;}(_robeReactCommons.ShallowComponent);SearchBox.propTypes = { placeholder: _react2.default.PropTypes.string, apiParams: _react2.default.PropTypes.object.isRequired };SearchBox.defaultProps = { placeholder: _robeReactCommons.Application.i18n(SearchBox, "googlemap.SearchBox", "placeholder") };exports.default = SearchBox;