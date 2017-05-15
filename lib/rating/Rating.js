"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _reactstrap = require("reactstrap");
require("./Rating.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

Rating = function (_ShallowComponent) {_inherits(Rating, _ShallowComponent);





























































    function Rating(props) {_classCallCheck(this, Rating);var _this = _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this,
        props));
        _this.id = "Rating-" + Rating.idCounter;
        Rating.idCounter++;
        _this.state = {
            selectedKey: _this.props.currentValue || "",
            hoveredKey: _this.props.currentValue || "" };return _this;

    } /**
       * defaultProps
       * @static
       */_createClass(Rating, [{ key: "render", value: function render() {return _react2.default.createElement("span", { id: this.id },
                this.props.label ? _react2.default.createElement("span", null, _react2.default.createElement(_reactstrap.ControlLabel, null, this.props.label), _react2.default.createElement("br", null)) : null,
                this.__renderIcons());

        } }, { key: "__renderIcons", value: function __renderIcons()

        {
            var starArr = [];
            var style = this.props.selectedIcon === "fa-star" ? " selectedStar" : "";
            var iconsInterval = this.props.disabled ? "iconsIntervalDisabled" : "iconsInterval";

            for (var i = 1; i < this.props.iconCount + 1; i++) {
                var className = this.__convertClickedIconToText(i);
                if (this.__checkFloatInterval() && parseInt(this.state.selectedKey) === i - 1) {
                    starArr.push(_react2.default.createElement("span", { key: i, className: iconsInterval + style, style: this.props.style },
                        _react2.default.createElement("i", { className: "fa fa-star-half-o " + this.__convertSizeToText(), "aria-hidden": "true", data: i })));

                } else
                {
                    starArr.push(_react2.default.createElement("span", { key: i, className: iconsInterval + style, style: this.props.style },
                        _react2.default.createElement("i", { className: "fa " + className,
                            onMouseOver: !this.props.disabled ? this.__onMouseOver : null,
                            onMouseLeave: !this.props.disabled ? this.__onMouseLeave : null,
                            "aria-hidden": "true", data: i,
                            onClick: !this.props.disabled ? this.__handleClick : null })));
                }
            }

            return starArr;
        } }, { key: "__onMouseOver", value: function __onMouseOver(

        e) {
            var key = e.target.getAttribute("data");
            e.target.value = key;
            e.target.parsedValue = parseInt(key);
            if (this.state.selectedKey === "")
            this.setState({ hoveredKey: key });

            if (this.props.onMouseOver)
            this.props.onMouseOver(e);
        } }, { key: "__onMouseLeave", value: function __onMouseLeave()

        {
            if (this.state.selectedKey === "")
            this.setState({ hoveredKey: "" });else

            this.setState({ hoveredKey: this.state.selectedKey });
        } }, { key: "__handleClick", value: function __handleClick(

        e) {
            var key = e.target.getAttribute("data");
            e.target.value = key;
            e.target.parsedValue = parseInt(key);
            this.setState({ selectedKey: key, hoveredKey: key });

            if (this.props.onChange)
            this.props.onChange(e);
        } }, { key: "__checkFloatInterval", value: function __checkFloatInterval()

        {
            var check = false;
            var value = this.state.selectedKey;
            var disabled = this.props.disabled;
            var icon = this.props.selectedIcon === "fa-star";
            if (this.__isFloat(value) && disabled && icon) {
                var splittedValue = value.toFixed(2).split(".")[1];
                if (parseInt(splittedValue) >= 25 && parseInt(splittedValue) <= 99)
                check = true;
            }

            return check;
        } }, { key: "__isFloat", value: function __isFloat(

        n) {
            return Number(n) === n && n % 1 !== 0;
        } }, { key: "__convertClickedIconToText", value: function __convertClickedIconToText(

        i) {
            var key = this.state.hoveredKey || "";
            var initialIcon = this.props.initialIcon;
            var selectedIcon = this.props.selectedIcon;
            var sizeText = this.__convertSizeToText();

            if (key === "")
            return initialIcon + sizeText;else
            {
                if (key < i)
                return initialIcon + sizeText;else

                return selectedIcon + sizeText;
            }
        } }, { key: "__convertSizeToText", value: function __convertSizeToText()

        {
            var size = this.props.size;
            switch (size) {
                case 0:
                    return " fa-lg";
                case 1:
                    return " fa-2x";
                case 2:
                    return " fa-3x";
                case 3:
                    return " fa-4x";
                case 4:
                    return " fa-5x";
                default:
                    return " fa-lg";}

        } }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

        nextProps) {
            if (nextProps.currentValue && nextProps.disabled)
            this.setState({
                selectedKey: nextProps.currentValue,
                hoveredKey: nextProps.currentValue });

        } }]);return Rating;}(_ShallowComponent3.default);Rating.propTypes = { /**
                                                                                * Size of Rating icons
                                                                                */size: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]), /**
                                                                                                                                           * Direct selected value
                                                                                                                                           */currentValue: _react2.default.PropTypes.number, /**
                                                                                                                                                                                              * Count of icons
                                                                                                                                                                                              */iconCount: _react2.default.PropTypes.number, /**
                                                                                                                                                                                                                                              * Initial icon type (Works with font-awesome icons like "fa-star-o")
                                                                                                                                                                                                                                              */initialIcon: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                * Selected icon type (Works with font-awesome icons like "fa-star")
                                                                                                                                                                                                                                                                                                */selectedIcon: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                                                                   * Disable icons
                                                                                                                                                                                                                                                                                                                                                   */disabled: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                * Change event for the component (Returns (clickedKey))
                                                                                                                                                                                                                                                                                                                                                                                                */onChange: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                             * MouseOver event for the component (Returns (hoveredKey))
                                                                                                                                                                                                                                                                                                                                                                                                                                             */onMouseOver: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Style of Rating icons
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */style: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * Label for Rating component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */label: _react2.default.PropTypes.string };Rating.defaultProps = { size: 0, iconCount: 10, initialIcon: "fa-star-o", selectedIcon: "fa-star", disabled: false };Rating.idCounter = 1;exports.default = Rating;