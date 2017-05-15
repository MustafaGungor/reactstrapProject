"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _reactstrap = require("reactstrap");
require("./GoogleMap.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

BounceMarker = function (_ShallowComponent) {_inherits(BounceMarker, _ShallowComponent);




















    function BounceMarker(props) {_classCallCheck(this, BounceMarker);var _this = _possibleConstructorReturn(this, (BounceMarker.__proto__ || Object.getPrototypeOf(BounceMarker)).call(this,
        props));
        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            description: props.description || "",
            popoverOpen: false };return _this;

    }_createClass(BounceMarker, [{ key: "render", value: function render()

        {
            return _react2.default.createElement("span", null,
                this.__renderMarker());


        } }, { key: "toggle", value: function toggle()

        {
            this.setState({
                popoverOpen: !this.state.popoverOpen });

        } }, { key: "__renderMarker", value: function __renderMarker()

        {
            if (this.props.overlay) {
                // let overlayPopover = (<OverlayTrigger
                //     ref={(component: Object) => { this.trigger = component } }
                //     trigger="click" rootClose
                //     placement={this.props.overlayPlacement}
                //     overlay={<Popover id="popover-trigger-click-root-close" className="googleMapPopover"
                //                       style={this.props.overlayStyle}>
                //         {this.props.inputType == "textArea" ? <TextArea style={this.props.inputStyle}
                //                                                         name="description"
                //                                                         value={this.state.description}
                //                                                         onChange={this.__handleChange}
                //         /> : this.props.inputType == "textInput" ? <TextInput style={this.props.inputStyle}
                //                                                               name="description"
                //                                                               value={this.state.description}
                //                                                               onChange={this.__handleChange}
                //         /> : this.state.description}
                //
                //     </Popover>}>
                //     <div className="pin bounce"></div>
                // </OverlayTrigger>);
                var uniqueId = "popoverid-" + Math.floor(Math.random() * (99999999 - 10000000) + 10000000);
                var overlayPopover =
                _react2.default.createElement(_reactstrap.Popover, { placement: "top", isOpen: this.state.popoverOpen, target: uniqueId, toggle: this.toggle, id: "popover-trigger-click-root-close", className: "googleMapPopover",
                        style: this.props.overlayStyle },
                    _react2.default.createElement(_reactstrap.PopoverContent, null,
                        this.props.inputType == "textArea" ? _react2.default.createElement(_reactstrap.Input, { type: "textarea", style: this.props.inputStyle,
                            name: "description",
                            value: this.state.description,
                            onChange: this.__handleChange }) :
                        this.props.inputType == "textInput" ? _react2.default.createElement(_reactstrap.Input, { style: this.props.inputStyle,
                            name: "description",
                            value: this.state.description,
                            onChange: this.__handleChange }) :
                        this.state.description));



                return _react2.default.createElement("span", null,
                    overlayPopover,
                    _react2.default.createElement("div", { className: "pin bounce", id: uniqueId, onClick: this.toggle }),
                    _react2.default.createElement("div", { className: "pulse" }));
            } else

            return _react2.default.createElement("span", null,
                _react2.default.createElement("div", { className: "pin bounce" }),
                _react2.default.createElement("div", { className: "pulse" }));

        } }, { key: "__pinClick", value: function __pinClick(

        e) {
            debugger;
        } }, { key: "__handleChange", value: function __handleChange(

        e) {
            var state = {};
            var value = e.target.parsedValue !== undefined ? e.target.parsedValue : e.target.value;
            state[e.target.name] = value;
            this.setState(state);

            if (this.props.onChange)
            this.props.onChange(state);
        } }]);return BounceMarker;}(_ShallowComponent3.default);BounceMarker.propTypes = { lat: _react2.default.PropTypes.number.isRequired, lng: _react2.default.PropTypes.number.isRequired, description: _react2.default.PropTypes.string, inputType: _react2.default.PropTypes.oneOf(["textInput", "textArea", "none"]), inputStyle: _react2.default.PropTypes.object, overlay: _react2.default.PropTypes.bool, overlayPlacement: _react2.default.PropTypes.oneOf(["top", "right", "left", "bottom"]), overlayStyle: _react2.default.PropTypes.object };BounceMarker.defaultProps = { overlay: true, overlayPlacement: "top", inputType: "none" };exports.default = BounceMarker;