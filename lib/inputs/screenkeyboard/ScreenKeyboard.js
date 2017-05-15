"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _reactstrap = require("reactstrap");
var _QKeyboard_en_US = require("./QKeyboard_en_US.json");var _QKeyboard_en_US2 = _interopRequireDefault(_QKeyboard_en_US);
var _Keyboard_ru_RU = require("./Keyboard_ru_RU.json");var _Keyboard_ru_RU2 = _interopRequireDefault(_Keyboard_ru_RU);
var _QKeyboard_tr_TR = require("./QKeyboard_tr_TR.json");var _QKeyboard_tr_TR2 = _interopRequireDefault(_QKeyboard_tr_TR);
var _QKeyboardWithControl_tr_TR = require("./QKeyboardWithControl_tr_TR.json");var _QKeyboardWithControl_tr_TR2 = _interopRequireDefault(_QKeyboardWithControl_tr_TR);
var _KeyboardWithControl_ru_RU = require("./KeyboardWithControl_ru_RU.json");var _KeyboardWithControl_ru_RU2 = _interopRequireDefault(_KeyboardWithControl_ru_RU);
var _QKeyboardWithSpecial_tr_TR = require("./QKeyboardWithSpecial_tr_TR.json");var _QKeyboardWithSpecial_tr_TR2 = _interopRequireDefault(_QKeyboardWithSpecial_tr_TR);
var _QKeyboardWithSpecial_en_US = require("./QKeyboardWithSpecial_en_US.json");var _QKeyboardWithSpecial_en_US2 = _interopRequireDefault(_QKeyboardWithSpecial_en_US);
var _KeyboardWithSpecial_ru_RU = require("./KeyboardWithSpecial_ru_RU.json");var _KeyboardWithSpecial_ru_RU2 = _interopRequireDefault(_KeyboardWithSpecial_ru_RU);
var _NumericKeyboard = require("./NumericKeyboard.json");var _NumericKeyboard2 = _interopRequireDefault(_NumericKeyboard);
var _DecimalKeyboard = require("./DecimalKeyboard.json");var _DecimalKeyboard2 = _interopRequireDefault(_DecimalKeyboard);
var _FaIcon = require("../../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);
require("./ScreenKeyboard.css");
var _isJs = require("is-js");var _isJs2 = _interopRequireDefault(_isJs);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

ScreenKeyboard = function (_ShallowComponent) {_inherits(ScreenKeyboard, _ShallowComponent);












































    /**
                                                                                              * defaultProps
                                                                                              * @static
                                                                                              */














    function ScreenKeyboard(props) {_classCallCheck(this, ScreenKeyboard);var _this = _possibleConstructorReturn(this, (ScreenKeyboard.__proto__ || Object.getPrototypeOf(ScreenKeyboard)).call(this,
        props));_this.x_pos = 0;_this.y_pos = 0;
        _this.languageAreaId = "LanguageArea-" + ScreenKeyboard.idCounter;
        _this.keyboardAreaId = "KeyboardArea-" + ScreenKeyboard.idCounter;
        ScreenKeyboard.idCounter++;
        _this.state = {
            upperCase: false,
            keySet: _this.__decideLanguage(_this.props.language),
            capsLock: false,
            show: _this.props.defaultShow };return _this;

    }_createClass(ScreenKeyboard, [{ key: "render", value: function render()

        {var _this2 = this;

            if (!this.props.showOnMobile) {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
                return null;
            }

            var keyboardArea = this.props.language === "numeric" || this.props.language === "decimal" ? "keyboardAreaNumeric" : "keyboardArea";
            if (this.state.show || !this.props.inputId)
            return _react2.default.createElement("div", { id: this.keyboardAreaId, className: keyboardArea, style: this.props.style },
                _react2.default.createElement("div", { id: this.languageAreaId, className: "languageTextArea" },
                    _react2.default.createElement("div", null, this.__convertLanguageText(),
                        this.props.inputId ? _react2.default.createElement(_FaIcon2.default, {
                            style: { cursor: "pointer" },
                            className: "pull-right",
                            code: "fa-close", onClick: function onClick() {return _this2.setState({ show: false });} }) : null)),


                _react2.default.createElement("div", { id: "keySet" },
                    this.__decideKeyboardType(this.props.language)));else



            return null;
        } }, { key: "__renderQKeyboard", value: function __renderQKeyboard()

        {
            var buttonSetArray = [];
            var keySet = this.state.keySet;

            for (var i = 0; i < keySet.length; i++) {
                var key = keySet[i];
                var value = this.state.upperCase ? this.props.language === "tr_TR" ? key.value.split("i").join("İ").toUpperCase() : key.value.toUpperCase() : key.value;
                var className = value === "" ? "buttons letterButtons emptyButton" : "buttons letterButtons";
                if (key.key === "14")
                buttonSetArray.push(_react2.default.createElement(_reactstrap.Button, { key: i, size: "sm", className: "buttons backspaceButton",
                        onClick: this.__handleBackspaceClick }, _react2.default.createElement(_FaIcon2.default, {
                        code: "fa-long-arrow-left" })));else
                if (key.key === "15")
                buttonSetArray.push(_react2.default.createElement(_reactstrap.Button, { name: "q", data: value, key: i, size: "sm", className: "buttons qButton",
                        onClick: this.__handleButtonClick }, value));else
                if (key.key === "28")
                buttonSetArray.push(_react2.default.createElement(_reactstrap.Button, { key: i, size: "sm", className: "buttons capsLockButton",
                        onClick: this.__handleCapsLockClick }, _react2.default.createElement(_FaIcon2.default, {
                        code: "fa-chevron-up" })));else
                if (key.key === "40")
                buttonSetArray.push(_react2.default.createElement(_reactstrap.Button, { key: i, size: "sm", className: "buttons shiftButton",
                        onClick: this.__handleShiftClick }, value));else
                if (key.key === "51")
                buttonSetArray.push(_react2.default.createElement(_reactstrap.Button, { key: i, size: "sm", className: "rightShiftButton",
                        onClick: this.__handleShiftClick }, value));else
                if (key.key === "52" || key.key === "54")
                buttonSetArray.push(_react2.default.createElement(_reactstrap.Button, { key: i, size: "sm", className: "buttons",
                        onClick: this.__handleControlClick }, value));else
                if (key.key === "53")
                buttonSetArray.push(_react2.default.createElement(_reactstrap.Button, { name: "space", data: value, key: i, size: "sm",
                        className: "buttons spaceButton",
                        onClick: this.__handleButtonClick }, value));else

                buttonSetArray.push(_react2.default.createElement(_reactstrap.Button, { name: i + "key" + i, data: value, key: i, size: "sm", className: className,
                        onClick: this.__handleButtonClick }, value));
            }

            return buttonSetArray;
        } }, { key: "__renderDigitalKeyboard", value: function __renderDigitalKeyboard()

        {
            var buttonSetArray = [];
            var keySet = this.state.keySet;
            var className = this.props.language === "numeric" ? "numericKeyboardBackSpace" : "decimalKeyboardBackSpace";

            for (var i = 0; i < keySet.length; i++) {
                var key = keySet[i];

                if (key.key === "14")
                buttonSetArray.push(_react2.default.createElement(_reactstrap.Button, { key: "backspace", size: "sm", className: className,
                        onClick: this.__handleBackspaceClick }, _react2.default.createElement(_FaIcon2.default, {
                        code: "fa-long-arrow-left" })));else
                {
                    if (key.value !== this.props.decimalSeperator && key.key === "11")
                    continue;

                    buttonSetArray.push(_react2.default.createElement(_reactstrap.Button, { name: i + "decNum" + i, data: key.value, key: i, size: "sm",
                            className: "numericKeyboardNums",
                            onClick: this.__handleButtonClick }, key.value));
                }
            }

            return buttonSetArray;
        } }, { key: "__handleBackspaceClick", value: function __handleBackspaceClick(

        e) {
            if (this.props.inputId) {
                var element = document.getElementById(this.props.inputId);
                if (element === undefined || element === null) {
                    console.warn("Please use same or right ID field for your input.");
                    return;
                }
                var value = element.value;
                var selectionStart = element.selectionStart;
                var selectionEnd = element.selectionEnd;

                var nextValue = void 0;
                var nextPosition = void 0;
                if (selectionStart === selectionEnd) {
                    nextValue = value.substring(0, selectionStart - 1) + value.substring(selectionEnd);
                    nextPosition = selectionStart - 1;
                } else {
                    nextValue = value.substring(0, selectionStart) + value.substring(selectionEnd);
                    nextPosition = selectionStart;
                }
                nextPosition = nextPosition > 0 ? nextPosition : 0;

                if (this.props.changeValueAutomatically)
                element.value = nextValue;

                e.target.parsedValue = "BACKSPACE";
                e.target.value = "BACKSPACE";
                if (this.props.onChange)
                this.props.onChange(e, nextValue);

                setTimeout(function () {
                    element.focus();
                    element.setSelectionRange(nextPosition, nextPosition);
                }, 0);
            } else {
                e.target.parsedValue = "BACKSPACE";
                e.target.value = "BACKSPACE";
                if (this.props.onChange)
                this.props.onChange(e, undefined);
            }

            this.setState({
                upperCase: this.state.capsLock,
                keySet: this.state.keySet !== _NumericKeyboard2.default || this.state.keySet !== _DecimalKeyboard2.default ? this.__decideLanguage(this.props.language) : this.state.keySet === _NumericKeyboard2.default ? _NumericKeyboard2.default : _DecimalKeyboard2.default });

        } }, { key: "__handleButtonClick", value: function __handleButtonClick(

        e) {
            if (this.props.inputId) {
                var element = document.getElementById(this.props.inputId);
                if (element === undefined || element === null) {
                    console.warn("Please use same or right ID field for your input.");
                    return;
                }
                var value = element.value;
                var selectionStart = element.selectionStart;
                var selectionEnd = element.selectionEnd;

                var key = e.target.getAttribute("data");

                var nextValue = value.substring(0, selectionStart) + key + value.substring(selectionEnd);

                if (this.props.changeValueAutomatically)
                element.value = nextValue;

                e.target.value = key;
                e.target.parsedValue = _isJs2.default.numeric(key) ? parseInt(key) : key;
                if (this.props.onChange)
                this.props.onChange(e, nextValue);

                setTimeout(function () {
                    element.focus();
                    element.setSelectionRange(selectionStart + 1, selectionStart + 1);
                }, 0);
            } else
            {
                var _key = e.target.getAttribute("data");
                e.target.parsedValue = _isJs2.default.numeric(_key) ? parseInt(_key) : _key;
                e.target.value = _key;
                if (this.props.onChange)
                this.props.onChange(e, undefined);
            }

            this.setState({
                upperCase: this.state.capsLock,
                keySet: this.state.keySet !== _NumericKeyboard2.default || this.state.keySet !== _DecimalKeyboard2.default ? this.__decideLanguage(this.props.language) : this.state.keySet === _NumericKeyboard2.default ? _NumericKeyboard2.default : _DecimalKeyboard2.default });

        } }, { key: "__handleShiftClick", value: function __handleShiftClick()

        {
            this.setState({
                upperCase: this.state.capsLock ? true : !this.state.upperCase,
                keySet: this.state.keySet === this.__decideLanguage(this.props.language) ? this.__decideSpecialLanguage(this.props.language) : this.__decideLanguage(this.props.language) });

        } }, { key: "__handleCapsLockClick", value: function __handleCapsLockClick()

        {
            this.setState({ upperCase: !this.state.upperCase, capsLock: !this.state.capsLock });
        } }, { key: "__handleControlClick", value: function __handleControlClick()

        {
            if (this.props.language === "tr_TR" || this.props.language === "ru_RU") {
                this.setState({ keySet: this.state.keySet === this.__decideControlLanguage(this.props.language) ? this.__decideSpecialLanguage(this.props.language) : this.__decideControlLanguage(this.props.language) });
            }
        } }, { key: "__decideKeyboardType", value: function __decideKeyboardType(

        language) {
            if (language === "en_US" || language === "tr_TR" || language === "ru_RU")
            return this.__renderQKeyboard();else
            if (language === "numeric")
            return this.__renderDigitalKeyboard();else
            if (language === "decimal")
            return this.__renderDigitalKeyboard();else

            return this.__renderQKeyboard();
        } }, { key: "__decideLanguage", value: function __decideLanguage(

        language) {
            if (language === "en_US")
            return _QKeyboard_en_US2.default;else
            if (language === "tr_TR")
            return _QKeyboard_tr_TR2.default;else
            if (language === "ru_RU")
            return _Keyboard_ru_RU2.default;else
            if (language === "numeric")
            return _NumericKeyboard2.default;else
            if (language === "decimal")
            return _DecimalKeyboard2.default;else

            return _QKeyboard_en_US2.default;
        } }, { key: "__decideSpecialLanguage", value: function __decideSpecialLanguage(

        language) {
            if (language === "en_US")
            return _QKeyboardWithSpecial_en_US2.default;else
            if (language === "tr_TR")
            return _QKeyboardWithSpecial_tr_TR2.default;else
            if (language === "ru_RU")
            return _KeyboardWithSpecial_ru_RU2.default;else
            if (language === "numeric")
            return _NumericKeyboard2.default;else
            if (language === "decimal")
            return _DecimalKeyboard2.default;else

            return _QKeyboardWithSpecial_en_US2.default;
        } }, { key: "__decideControlLanguage", value: function __decideControlLanguage(

        language) {
            if (language === "tr_TR")
            return _QKeyboardWithControl_tr_TR2.default;else
            if (language === "ru_RU")
            return _KeyboardWithControl_ru_RU2.default;else

            return _QKeyboardWithControl_tr_TR2.default;
        } }, { key: "__convertLanguageText", value: function __convertLanguageText()

        {
            var language = this.props.language;
            if (language === "en_US")
            return this.props.languageText || "English";else
            if (language === "tr_TR")
            return this.props.languageText || "Türkçe";else
            if (language === "ru_RU")
            return this.props.languageText || "русский";else
            if (language === "numeric")
            return this.props.languageText || "Num";else
            if (language === "decimal")
            return this.props.languageText || "Dec";
        } }, { key: "__hideKeyboard", value: function __hideKeyboard(

        e) {
            var target = e.target;
            var element = void 0;
            if (this.props.inputId) {
                element = document.getElementById(this.props.inputId);
                if (element === undefined || element === null)
                return;

                if (this.state.show) {
                    try {
                        if (target.id === this.keyboardAreaId || target.id === "keySet" || target.id === element.id || target.parentNode.id === "keySet" ||
                        target.parentNode.parentNode.id === this.keyboardAreaId || target.parentNode.type === "button" || target.id === this.languageAreaId) {
                            return;
                        }
                    } catch (exeption) {
                        // no problem
                    }
                    this.setState({
                        show: false });

                } else
                if (target.id === element.id) {
                    this.setState({ show: true });
                    var _element = document.getElementById(this.languageAreaId);
                    if (_element === undefined || _element === null)
                    return;

                    _element.addEventListener('mousedown', this.__mouseDown, false);
                    document.addEventListener('mouseup', this.__mouseUp, false);
                }
            }
        } }, { key: "__keyboardMove", value: function __keyboardMove(

        e) {
            var div = document.getElementById(this.keyboardAreaId);
            div.style.position = "absolute";
            div.style.top = e.clientY - this.y_pos + 'px';
            div.style.left = e.clientX - this.x_pos + 'px';
        } }, { key: "__mouseUp", value: function __mouseUp()

        {
            document.removeEventListener('mousemove', this.__keyboardMove, true);
        } }, { key: "__mouseDown", value: function __mouseDown(

        e) {
            var div = document.getElementById(this.keyboardAreaId);
            this.x_pos = e.clientX - div.offsetLeft;
            this.y_pos = e.clientY - div.offsetTop;
            document.addEventListener('mousemove', this.__keyboardMove, true);
        } }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

        nextProps) {
            this.setState({ keySet: this.__decideLanguage(nextProps.language) });
        } }, { key: "componentDidMount", value: function componentDidMount()

        {
            if (this.props.inputId) {
                document.addEventListener("click", this.__hideKeyboard, false);
            }

            var element = document.getElementById(this.languageAreaId);
            if (element === undefined || element === null)
            return;

            element.addEventListener('mousedown', this.__mouseDown, false);
            document.addEventListener('mouseup', this.__mouseUp, false);
        } }, { key: "componentWillUnmount", value: function componentWillUnmount()

        {
            if (this.props.inputId) {
                document.removeEventListener("click", this.__hideKeyboard, false);
            }
        } }]);return ScreenKeyboard;}(_ShallowComponent3.default);ScreenKeyboard.propTypes = { /**
                                                                                                * Input component to be worked on (Needs input's ID field)
                                                                                                */inputId: _react2.default.PropTypes.string, /**
                                                                                                                                              * Keyboard buttons language.
                                                                                                                                              */language: _react2.default.PropTypes.oneOf(["en_US", "tr_TR", "ru_RU", "numeric", "decimal"]), /**
                                                                                                                                                                                                                                               * Change event for the component (Returns (e, currentValue))
                                                                                                                                                                                                                                               */onChange: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                            * Default display of ScreenKeyboard component (works only if has true inputID)
                                                                                                                                                                                                                                                                                            */defaultShow: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                            * Displays your text top of Keyboard component
                                                                                                                                                                                                                                                                                                                                            */languageText: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                                                                                                               * Decimal seperator for DecimalInput (Works only with decimal keyboard)
                                                                                                                                                                                                                                                                                                                                                                                               */decimalSeperator: _react2.default.PropTypes.oneOf([",", "."]), /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Changes inputs value automatically (But it does not reflect the situation)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */changeValueAutomatically: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * Style of Keyboard container
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */style: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Display configuration on mobile devices
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */showOnMobile: _react2.default.PropTypes.bool };ScreenKeyboard.defaultProps = { language: "en_US", defaultShow: true, changeValueAutomatically: false, decimalSeperator: ",", showOnMobile: false };ScreenKeyboard.idCounter = 1;exports.default = ScreenKeyboard;