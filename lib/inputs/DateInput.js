"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
var _moment = require("moment");var _moment2 = _interopRequireDefault(_moment);
var _isJs = require("is-js");var _isJs2 = _interopRequireDefault(_isJs);
var _reactstrap = require("reactstrap");
var _BaseInput = require("./BaseInput");var _BaseInput2 = _interopRequireDefault(_BaseInput);
var _DatePicker = require("./datepicker/DatePicker");var _DatePicker2 = _interopRequireDefault(_DatePicker);
var _FaIcon = require("../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);
require("./DateInput.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}


/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DateInput is a component for default one lined text inputs.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @export
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @class DateInput
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @extends {ShallowComponent}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */var
DateInput = function (_ShallowComponent) {_inherits(DateInput, _ShallowComponent);

































































    /**
                                                                                    * defaultProps
                                                                                    * @static
                                                                                    */


















    function DateInput(props) {_classCallCheck(this, DateInput);var _this = _possibleConstructorReturn(this, (DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call(this,
        props));
        _this.id = "DatePicker-" + DateInput.idCounter;
        DateInput.idCounter++;
        _this.state = {
            open: false,
            value: _this.props.value };

        _this.separator = _this.__findSeparator();
        _this.validChars = new RegExp("^([" + _this.separator + "]|[0-9])*$");return _this;
    }

    /**
       * Renders the component.
       *
       * @returns
       */ /**
           * Properties of the component
           *
           * @static
           */_createClass(DateInput, [{ key: "render", value: function render() {var _this2 = this;var value = this.state.value;var parsedValue = undefined;var overlayValue = (0, _moment2.default)(new Date(), this.props.format).valueOf();

            if (!value || value == "") {
                parsedValue = "";
            } else
            if (_isJs2.default.number(value)) {
                if ((0, _moment2.default)(value).isValid()) {
                    parsedValue = (0, _moment2.default)(value).format(this.props.format);
                    overlayValue = (0, _moment2.default)(parsedValue, this.props.format).valueOf();
                }
            } else
            if (value.length < this.props.format.length) {
                parsedValue = value;
            } else
            if (_isJs2.default.string(value) && this.__checkPartialRegex(value)) {
                parsedValue = (0, _moment2.default)(value, this.props.format).format(this.props.format);
                overlayValue = (0, _moment2.default)(value, this.props.format).valueOf();
            } else
            if ((0, _moment2.default)(value).isValid()) {
                parsedValue = (0, _moment2.default)(value).format(this.props.format);
                overlayValue = (0, _moment2.default)(value).valueOf();
            }var _props =

            this.props,format = _props.format,locale = _props.locale,minDate = _props.minDate,maxDate = _props.maxDate,newProps = _objectWithoutProperties(_props, ["format", "locale", "minDate", "maxDate"]);
            return (
                _react2.default.createElement("div", null,















                    _react2.default.createElement(_reactstrap.Popover, { id: "popover", isOpen: this.state.open, target: this.id },
                        _react2.default.createElement(_reactstrap.PopoverContent, null,
                            _react2.default.createElement(_DatePicker2.default, {
                                onChange: this.__onChangeDatePicker,
                                onSelect: this.__onClick,
                                locale: locale,
                                value: overlayValue,
                                minDate: minDate,
                                maxDate: maxDate }))),



                    _react2.default.createElement(_BaseInput2.default, _extends({
                        id: this.id },
                    newProps, {
                        onChange: this.__onChange,
                        type: "text",
                        ref: function ref(component) {_this2.innerComponent = component;},
                        placeholder: format,
                        value: parsedValue,
                        onKeyDown: this.__onKeyDown,
                        onClick: this.__onClick,
                        style: { color: this.state.color },
                        inputGroupRight: _react2.default.createElement(_reactstrap.InputGroupAddon, { onClick: this.__onClick }, _react2.default.createElement(_FaIcon2.default, { code: "fa-calendar" })) }))));



        } }, { key: "__onKeyDown", value: function __onKeyDown(

        e) {
            if (!(e.key === "ArrowUp" || e.key === "ArrowDown")) {
                return;
            }
            e.preventDefault();

            var value = this.state.value;

            if (!value)
            return;
            if (_isJs2.default.number(value)) {
                value = (0, _moment2.default)(value).format(this.props.format);
            } else {
                value = (0, _moment2.default)(value, this.props.format).format(this.props.format);
            }
            if (!isNaN(value) || !this.__checkPartialRegex(value.toString())) {
                return;
            }

            var selectionStart = e.target.selectionStart;
            var selectionEnd = void 0;

            var formatParts = this.props.format.split(this.separator);
            var valueParts = value.split(this.separator);

            var temp = "";
            var oldTemp = "";
            var partIndex = 0;
            for (var i = 0; i < formatParts.length; i++) {
                var item = formatParts[i];
                oldTemp = temp;
                temp += "/" + item;
                if (selectionStart < temp.length) {
                    partIndex = i;
                    selectionStart = oldTemp.length;
                    selectionEnd = temp.length - 1;
                    break;
                }
            }

            var tempValue = void 0;
            if (e.key === "ArrowUp") {
                tempValue = parseInt(valueParts[partIndex]) + 1;
            } else
            if (e.key === "ArrowDown") {
                tempValue = parseInt(valueParts[partIndex]) - 1;
            }
            valueParts[partIndex] = tempValue < 10 ? '0' + tempValue : tempValue.toString();

            value = valueParts.join(this.separator);
            var valid = (0, _moment2.default)(value, this.props.format).format(this.props.format);

            if (!this.__checkPartialRegex(value.toString()) || valid === "Invalid date") {
                return;
            }
            this.setState({
                value: value,
                open: false });

            e.target.parsedValue = (0, _moment2.default)(value, this.props.format).toDate().getTime();
            e.target.value = value;
            if (this.props.onChange)
            this.props.onChange(e);

            e.target.selectionStart = selectionStart;
            e.target.selectionEnd = selectionEnd;
        }

        /**
           * Returns the validity of the value.
           * @return true - value is valid, false - invalid
           */ }, { key: "isValid", value: function isValid()
        {
            return this.innerComponent.isValid();
        }

        /**
           * checks validation by current value
           * isValid then return empty Array else return Array<String>
           * isValid = Array.length != 0
           * @param value
           */ }, { key: "validate", value: function validate(
        value) {
            return this.innerComponent.validate(value);
        }

        /**
           * Internal onchange handler for filtering numerics.
           */ }, { key: "__onChange", value: function __onChange(
        e) {
            var result = true;
            var value = this.__formatString(e.target.value);
            e.target.value = value;
            e.target.name = this.props.name;
            e.target.parsedValue = this.__checkPartialRegex(value) ? (0, _moment2.default)(value, this.props.format, true).toDate().getTime() : undefined;

            var state = { open: false, color: undefined };

            if (!this.validChars.test(value) || !this.__checkPartialRegex(value)) {
                state["color"] = "#a94442";
            } else
            if (isNaN(e.target.parsedValue)) {
                e.target.parsedValue = undefined;
                state["value"] = value;
                if (value == "" && this.props.onChange) {
                    e.target.value = "";
                    this.props.onChange(e);
                }
            } else
            if (this.props.onChange) {
                this.props.onChange(e);
            }
            this.setState(state);

            e.preventDefault();
            e.stopPropagation();

            return true;
        } }, { key: "__formatString", value: function __formatString(

        value) {
            var format = this.props.format;
            var dayAtLeft = format.indexOf("DD") === 0;
            value = value.split(this.separator).join("");
            var newValue = [];
            var sPosition = dayAtLeft ? 2 : 4;
            var sCount = 0;
            for (var i = 0; i < value.length; i++) {
                var ch = value.charAt(i);
                if (i % sPosition === 0 && i !== 0) {
                    newValue.push(this.separator);
                    sCount++;
                    if (sCount === (dayAtLeft ? 2 : 1)) {
                        sPosition = dayAtLeft ? 4 : 2;
                    }
                }
                newValue.push(ch);
            }
            return newValue.join("");
        } }, { key: "__checkPartialRegex", value: function __checkPartialRegex(

        value) {
            var formatParts = this.props.format.split(this.separator);
            var valueParts = value.split(this.separator);
            var minDate = (0, _moment2.default)(this.props.minDate).format(this.props.format);
            var maxDate = (0, _moment2.default)(this.props.maxDate).format(this.props.format);
            var minParts = minDate.split(this.separator);
            var maxParts = maxDate.split(this.separator);

            for (var i = 0; i < 3; i++) {
                switch (formatParts[i]) {
                    case "DD":
                        {
                            var day = valueParts[i];
                            if (parseInt(day, 10) > 31 || parseInt(day, 10) < 1) {
                                if (day.length >= 2)
                                return false;
                            }
                            break;
                        }
                    case "MM":
                        {
                            var month = valueParts[i];
                            if (parseInt(month, 10) > 12 || parseInt(month, 10) < 1) {
                                if (month.length >= 2)
                                return false;
                            }
                            break;
                        }
                    case "YYYY":
                        {
                            var year = valueParts[i];
                            var minYear = minParts[i];
                            var maxYear = maxParts[i];
                            if (parseInt(year, 10) > parseInt(maxYear, 10) || parseInt(year, 10) < parseInt(minYear, 10)) {
                                if (year.length >= minYear.length)
                                return false;
                            }
                            break;
                        }
                    default:}

            }
            return true;
        } }, { key: "__onClick", value: function __onClick(

        e) {
            this.setState({
                open: !this.state.open });

        } }, { key: "__onChangeDatePicker", value: function __onChangeDatePicker(

        e) {
            this.innerComponent.focus();
            this.setState({
                color: undefined });

            if (this.props.onChange) {
                var element = {
                    target: {
                        value: (0, _moment2.default)(this.state.value).format(this.props.format),
                        parsedValue: e.target.parsedValue,
                        name: this.props.name } };


                this.props.onChange(element);
            }
        } }, { key: "__hidePicker", value: function __hidePicker(

        e) {
            var target = e.target;
            if (this.state.open) {
                try {
                    if (target.id === this.id ||
                    target.parentNode.parentNode.parentNode.parentNode.parentNode.id === "popover" ||
                    target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id === "popover" ||
                    target.className === "fa fa-fw fa-calendar fa-sm " ||
                    target.children[0].className === "fa fa-fw fa-calendar fa-sm ") {
                        return;
                    } else
                    if (target.id === "month-select" || target.id === "year-select") {
                        return;
                    }
                } catch (exeption) {
                    // no problem
                }
                this.setState({
                    open: false });

            }
        } }, { key: "__findSeparator", value: function __findSeparator()

        {
            var format = this.props.format;
            for (var i = 0; i < format.length; i++) {
                var ch = format.charAt(i);
                if (ch !== "D" && ch !== "M" && ch !== "Y") {
                    return ch;
                }
            }
            throw String("Format is invalid.");
        } }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

        nextProps) {
            this.setState({
                value: nextProps.value });

        } }, { key: "componentDidMount", value: function componentDidMount()


        {
            document.addEventListener("click", this.__hidePicker, false);
        } }, { key: "componentWillUnmount", value: function componentWillUnmount()

        {
            document.removeEventListener("click", this.__hidePicker, false);
        } }]);return DateInput;}(_robeReactCommons.ShallowComponent);DateInput.propTypes = { /**
                                                                                              * Label for the form control.
                                                                                              */label: _react2.default.PropTypes.string, /**
                                                                                                                                          * name use as input field name
                                                                                                                                          */name: _react2.default.PropTypes.string, /**
                                                                                                                                                                                     * Value of the component
                                                                                                                                                                                     */value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]), /**
                                                                                                                                                                                                                                                                                                          * onChangeEvent event for the component
                                                                                                                                                                                                                                                                                                          */onChange: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                       * Disable input
                                                                                                                                                                                                                                                                                                                                                       */disabled: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                    * it specifies that an input field is read-only
                                                                                                                                                                                                                                                                                                                                                                                                    */readOnly: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                 * it specifies that an input field is hidden or visible
                                                                                                                                                                                                                                                                                                                                                                                                                                                 */hidden: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Date formatting of the component.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */format: _react2.default.PropTypes.oneOf(["DD/MM/YYYY", "MM/DD/YYYY", "YYYY/MM/DD", "DD-MM-YYYY", "MM-DD-YYYY", "YYYY-MM-DD", "DD.MM.YYYY", "MM.DD.YYYY", "YYYY.MM.DD", "DD MM YYYY", "MM DD YYYY", "YYYY MM DD"]), /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  *Minimum date to show at the picker.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */minDate: _react2.default.PropTypes.number, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *Maximum date to show at the picker.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */maxDate: _react2.default.PropTypes.number, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              *Defines the display style of the Validation message.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */validationDisplay: _react2.default.PropTypes.oneOf(["overlay", "block"]), /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * Left Input Addon
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */inputGroupLeft: _react2.default.PropTypes.object };DateInput.defaultProps = { disabled: false, readOnly: false, hidden: false, format: "DD/MM/YYYY", locale: _robeReactCommons.Application.i18n(DateInput, "inputs.DateInput", "locale"), value: undefined, minDate: (0, _moment2.default)("01/01/1900", "DD/MM/YYYY").toDate().getTime(), maxDate: (0, _moment2.default)("31/12/2100", "DD/MM/YYYY").toDate().getTime(), validationDisplay: "block" };DateInput.idCounter = 1;exports.default = DateInput;