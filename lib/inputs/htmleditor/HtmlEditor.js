"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _get = function get(object, property, receiver) {if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {var parent = Object.getPrototypeOf(object);if (parent === null) {return undefined;} else {return get(parent, property, receiver);}} else if ("value" in desc) {return desc.value;} else {var getter = desc.get;if (getter === undefined) {return undefined;}return getter.call(receiver);}};var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactDom = require("react-dom");
var _reactQuill = require("react-quill");var _reactQuill2 = _interopRequireDefault(_reactQuill);
var _reactstrap = require("reactstrap");
var _ValidationComponent2 = require("../../validation/ValidationComponent");var _ValidationComponent3 = _interopRequireDefault(_ValidationComponent2);
require("./quill.snow.css");
require("./HtmlEditor.css");
var _HtmlEditorItems = require("./HtmlEditorItems.json");var _HtmlEditorItems2 = _interopRequireDefault(_HtmlEditorItems);
var _BaseInput = require("../BaseInput");var _BaseInput2 = _interopRequireDefault(_BaseInput);
var _FaIcon = require("../../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var


HtmlEditor = function (_ValidationComponent) {_inherits(HtmlEditor, _ValidationComponent);

    /**
                                                                                            * PropTypes of the component
                                                                                            * @static
                                                                                            */









































































    function HtmlEditor(props) {_classCallCheck(this, HtmlEditor);var _this = _possibleConstructorReturn(this, (HtmlEditor.__proto__ || Object.getPrototypeOf(HtmlEditor)).call(this,
        props));
        _this.state = {
            sourceView: _this.props.sourceView };return _this;

    } /**
       * defaultProps
       * @static
       */_createClass(HtmlEditor, [{ key: "render", value: function render() {var _this2 = this;var _props = this.props,tooltip = _props.tooltip,inputGroupLeft = _props.inputGroupLeft,inputGroupRight = _props.inputGroupRight,validations = _props.validations,validationDisplay = _props.validationDisplay,sourceView = _props.sourceView,autoResize = _props.autoResize,newProps = _objectWithoutProperties(_props, ["tooltip", "inputGroupLeft", "inputGroupRight", "validations", "validationDisplay", "sourceView", "autoResize"]); // eslint-disable-line no-unused-vars

            var editor = this.state.sourceView ?
            _react2.default.createElement("div", { className: "quill" },
                _react2.default.createElement("div", { style: { minHeight: "41px", color: "#0063CF" }, className: "quill-toolbar ql-toolbar ql-snow" },
                    _react2.default.createElement("span", { className: "ql-format-button ql-source pull-right" })),


                _react2.default.createElement(_reactstrap.FormControl, _extends({},
                newProps, {
                    ref: function ref(component) {_this2.innerComponent = component;},
                    className: "quill-transparent-editor",
                    label: undefined,
                    onChange: this.__onChange,
                    type: "textarea",
                    style: { height: this.props.height, minHeight: this.props.height },
                    onKeyUp: this.props.autoResize ? this.__resize : undefined,
                    componentClass: "textarea" }))) :


            _react2.default.createElement(_reactQuill2.default, _extends({}, this.props, { theme: "snow", onChange: this.__onChange, ref: function ref(component) {return _this2.quill = component;} }),
                _react2.default.createElement(_reactQuill2.default.Toolbar, {
                    key: "toolbar",
                    ref: HtmlEditor.toolbarRefName,
                    items: _HtmlEditorItems2.default }),

                _react2.default.createElement(_reactstrap.Col, {
                    key: "editor",
                    ref: HtmlEditor.refName,
                    onKeyUp: this.props.autoResize ? this.__resize : undefined,
                    style: { height: this.props.height, minHeight: this.props.height },
                    className: "quill-contents" }));


            return _get(HtmlEditor.prototype.__proto__ || Object.getPrototypeOf(HtmlEditor.prototype), "wrapComponent", this).call(this,
            _react2.default.createElement(_reactstrap.FormGroup, { hidden: this.props.hidden },
                _react2.default.createElement(_reactstrap.Label, null, _react2.default.createElement("span", null, this.props.label)),
                editor));


        } }, { key: "__resize", value: function __resize()

        {
            var element = (0, _reactDom.findDOMNode)(this).children[1].children[1];
            if (element) {
                var height = element.scrollHeight;
                var propHeight = this.props.height;

                if (height > propHeight) {
                    element.style.height = "auto";
                } else {
                    element.style.height = propHeight + "px";
                }
                element.style.overflow = "hidden";
                element.style.maxHeight = height + "px";
            }
        } }, { key: "__onChange", value: function __onChange(

        value) {
            if (this.state.sourceView) {
                var e = value;
                var result = true;
                if (this.props.onChange) {
                    result = this.props.onChange(e);
                }
                if (!result) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                return result;
            } else {
                var _e = {};
                _e.target = { name: this.props.name };
                _e.target.parsedValue = value;

                if (this.props.onChange) {
                    this.props.onChange(_e);
                }
            }
        } }, { key: "componentDidUpdate", value: function componentDidUpdate()

        {
            var parent = (0, _reactDom.findDOMNode)(this);
            var srcBtn = parent.getElementsByClassName("ql-source")[0];
            srcBtn.addEventListener("click", this.__onSourceClick);
        } }, { key: "__onSourceClick", value: function __onSourceClick(

        e) {
            this.setState({
                sourceView: !this.state.sourceView });

        } }]);return HtmlEditor;}(_ValidationComponent3.default);HtmlEditor.propTypes = { /**
                                                                                           * Style map for the component.
                                                                                           */style: _react2.default.PropTypes.object, /**
                                                                                                                                       * Label for the form control.
                                                                                                                                       */label: _react2.default.PropTypes.string, /**
                                                                                                                                                                                   * Value of the component
                                                                                                                                                                                   */value: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                               * handleChange event for the component
                                                                                                                                                                                                                               */handleChange: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                * Validations for the component
                                                                                                                                                                                                                                                                                */validations: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                                                                                                  * Height of the component.
                                                                                                                                                                                                                                                                                                                                  */height: _react2.default.PropTypes.number, /**
                                                                                                                                                                                                                                                                                                                                                                               * Disable input
                                                                                                                                                                                                                                                                                                                                                                               */disabled: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                            * it specifies that an input field is read-only
                                                                                                                                                                                                                                                                                                                                                                                                                            */readOnly: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * it specifies that an input field is hidden or visible
                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */hidden: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * it specifies that an input field height be auto resize
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */autoResize: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 *Defines the display style of the Validation message.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */validationDisplay: _react2.default.PropTypes.oneOf(["overlay", "block"]), /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              *Defines the view mode of the editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */sourceView: _react2.default.PropTypes.bool };HtmlEditor.defaultProps = { height: 100, disabled: false, readOnly: false, hidden: false, autoResize: false, validationDisplay: "block", sourceView: false };HtmlEditor.refName = "editor";HtmlEditor.toolbarRefName = "toolbar";exports.default = HtmlEditor;