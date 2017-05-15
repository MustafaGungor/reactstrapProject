"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactDom = require("react-dom");var _reactDom2 = _interopRequireDefault(_reactDom);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _reactstrap = require("reactstrap");
require("./Slider.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

Slider = function (_ShallowComponent) {_inherits(Slider, _ShallowComponent);
















































































    function Slider(props) {_classCallCheck(this, Slider);var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this,
        props));_this.downEvent = "mousedown";_this.upEvent = "mouseup";_this.moveEvent = "mousemove";_this.click = false;
        _this.selectedDivRef = "SliderSelectedDiv-" + Slider.counter;
        _this.layerDivRef = "SliderLayerDiv-" + Slider.counter;
        _this.circleDivMaxRef = "SliderCircleDivMax-" + Slider.counter;
        _this.circleDivMinRef = "SliderCircleDivMin-" + Slider.counter;
        Slider.counter++;
        _this.state = {
            valueMax: _this.props.range ? _this.props.defaultValue ? _this.props.defaultValue[1] : _this.props.minValue : _this.props.defaultValue || _this.props.minValue,
            valueMin: _this.props.range ? _this.props.defaultValue ? _this.props.defaultValue[0] : _this.props.minValue : _this.props.defaultValue || _this.props.minValue,
            defaultMaxPx: 0,
            defaultMinPx: 0,
            openMaxDesc: false,
            openMinDesc: false,
            disabled: _this.props.disabled,
            unit: _this.props.unit };return _this;

    } /**
       * defaultProps
       * @static
       */_createClass(Slider, [{ key: "toggleMax", value: function toggleMax() {this.setState({
                openMaxDesc: !this.state.openMaxDesc });

        } }, { key: "toggleMin", value: function toggleMin()

        {
            this.setState({
                openMinDesc: !this.state.openMinDesc });

        } }, { key: "render", value: function render()

        {

            var classNameSelected = !this.state.disabled ? "sliderSelectedArea" : "sliderSelectedAreaDisabled";
            var classNameCircle = !this.state.disabled ? "sliderButtonMax" : "sliderButtonMaxDisabled";
            var classNameCircleMin = !this.state.disabled ? "sliderButtonMin" : "sliderButtonMinDisabled";
            var classNameLayer = !this.state.disabled ? "sliderLayer" : "sliderLayerDisabled";

            var styleLeft = this.props.range ? parseFloat(this.state.defaultMinPx) : 0;
            var styleWidth = this.props.range ? parseFloat(this.state.defaultMaxPx) - parseFloat(this.state.defaultMinPx) : parseFloat(this.state.defaultMaxPx);
            var sliderTooltip = [];
            if (!this.props.closeTooltip && this.circleMaxDOM != undefined && this.circleMinDOM != undefined) {
                var _sliderTooltip =
                _react2.default.createElement("span", null,
                    _react2.default.createElement(_reactstrap.Tooltip, { isOpen: this.state.openMaxDesc, placement: "top", target: this.circleMaxDOM.id, toggle: this.toggleMax }, this.state.valueMax + " " + this.state.unit),
                    _react2.default.createElement(_reactstrap.Tooltip, { isOpen: this.state.openMinDesc, placement: "top", target: this.circleMinDOM.id, toggle: this.toggleMin }, this.state.valueMin + " " + this.state.unit));


            }

            return _react2.default.createElement("span", null,
                sliderTooltip,
                _react2.default.createElement("div", { className: "sliderContainer" },
                    _react2.default.createElement("span", { ref: this.selectedDivRef, id: this.selectedDivRef, className: classNameSelected,
                        style: { left: styleLeft, width: styleWidth },
                        onClick: !this.state.disabled ? this.__layerClick : null }),
                    _react2.default.createElement("span", { ref: this.layerDivRef, id: this.layerDivRef, className: classNameLayer,
                        onClick: !this.state.disabled ? this.__layerClick : null }),
                    _react2.default.createElement("span", { ref: this.circleDivMaxRef, id: this.circleDivMaxRef, className: classNameCircle,
                        style: { left: parseFloat(this.state.defaultMaxPx) } }),

                    this.props.range ?
                    _react2.default.createElement("span", { ref: this.circleDivMinRef, id: this.circleDivMinRef, className: classNameCircleMin,
                        style: { left: this.state.defaultMinPx } }) :
                    null,
                    !this.props.closeLabel ?
                    _react2.default.createElement("span", null,
                        _react2.default.createElement("span", {
                                className: "pull-left sliderLabel" }, this.props.minLabel ? this.props.minLabel : this.props.minValue),
                        _react2.default.createElement("span", {
                                className: "pull-right sliderLabel" }, this.props.maxLabel ? this.props.maxLabel : this.props.maxValue)) :
                    null));


        } }, { key: "__calculateStyles", value: function __calculateStyles(

        e) {
            var selected = this.selectedDOM;
            var circle = this.circleMaxDOM;
            var layer = this.layerDOM;
            var pageX = this.moveEvent === "mousemove" ? e.clientX : this.click ? e.clientX : e.touches[0].pageX;
            var calculatedPosition = parseInt(pageX - selected.getBoundingClientRect().left);
            var afterChangeValue = void 0;

            if (!this.props.step) {
                if (calculatedPosition >= 0 && calculatedPosition <= layer.offsetWidth)
                afterChangeValue = this.__changeStylesWithoutRange(e, calculatedPosition, selected, circle, layer);
            } else
            {
                if (calculatedPosition >= 0 && calculatedPosition <= layer.offsetWidth) {
                    var steps = layer.offsetWidth / (this.props.maxValue - this.props.minValue) * this.props.step;
                    var halfOfSteps = steps / 2;
                    for (var i = 0; i <= parseInt(layer.offsetWidth); i += steps) {
                        var halfOfStep = i + halfOfSteps;
                        if (calculatedPosition >= i && calculatedPosition <= i + steps) {
                            if (calculatedPosition < halfOfStep)
                            afterChangeValue = this.__changeStylesWithoutRange(e, i, selected, circle, layer);else
                            if (calculatedPosition > halfOfStep)
                            afterChangeValue = this.__changeStylesWithoutRange(e, i + steps, selected, circle, layer);
                        }
                    }
                }
            }

            return afterChangeValue;
        } }, { key: "__calculateStylesWithRange", value: function __calculateStylesWithRange(

        e) {
            var selected = this.selectedDOM;
            var circleMax = this.circleMaxDOM;
            var circleMin = this.circleMinDOM;
            var layer = this.layerDOM;
            var pageX = this.moveEvent === "mousemove" ? e.clientX : this.click ? e.clientX : e.touches[0].pageX;
            var calculatedPosition = parseInt(pageX - layer.getBoundingClientRect().left);
            var onAfterChangeValue = void 0;

            if (!this.props.step) {
                if (calculatedPosition >= 0 && calculatedPosition <= layer.offsetWidth) {

                    if (this.currentClassName.startsWith("sliderButtonMin")) {
                        circleMin.style.left = calculatedPosition + 'px';
                        if (parseInt(circleMin.style.left) >= parseInt(circleMax.style.left)) {
                            selected.style.left = parseFloat(circleMax.style.left) + 'px';
                            selected.style.width = parseFloat(circleMin.style.left) - parseFloat(circleMax.style.left) + 'px';
                        } else
                        {
                            selected.style.left = parseFloat(circleMin.style.left) + 'px';
                            selected.style.width = parseFloat(circleMax.style.left) - calculatedPosition + 'px';
                        }
                        var calculateValue = layer.offsetWidth / (this.props.maxValue - this.props.minValue);
                        var newValue = calculatedPosition / calculateValue;
                        var lastValue = this.props.step && this.__isFloat(this.props.step) ? parseFloat(this.props.minValue + newValue).toFixed(this.props.step.toString().split(".")[1].length) : Math.round(this.props.minValue + newValue);

                        if (this.props.onChange && lastValue !== this.state.valueMin) {
                            if (lastValue > this.state.valueMax) {
                                e.target.value = [this.state.valueMax, lastValue];
                                e.target.parsedValue = [this.state.valueMax, lastValue];
                                onAfterChangeValue = [this.state.valueMax, lastValue];
                                this.props.onChange(e);
                            } else
                            {
                                e.target.value = [lastValue, this.state.valueMax];
                                e.target.parsedValue = [lastValue, this.state.valueMax];
                                onAfterChangeValue = [lastValue, this.state.valueMax];
                                this.props.onChange(e);
                            }
                        }

                        this.setState({ valueMin: lastValue });

                        return onAfterChangeValue;
                    }
                    if (this.currentClassName.startsWith("sliderButtonMax")) {
                        circleMax.style.left = calculatedPosition + 'px';
                        if (parseInt(circleMin.style.left) <= parseInt(circleMax.style.left)) {
                            selected.style.left = parseFloat(circleMin.style.left) + 'px';
                            selected.style.width = parseFloat(circleMax.style.left) - parseFloat(circleMin.style.left) + 'px';
                        } else
                        {
                            selected.style.left = parseFloat(circleMax.style.left) + 'px';
                            selected.style.width = parseFloat(circleMin.style.left) - calculatedPosition + 'px';
                        }
                        var _calculateValue = layer.offsetWidth / (this.props.maxValue - this.props.minValue);
                        var _newValue = calculatedPosition / _calculateValue;
                        var _lastValue = this.props.step && this.__isFloat(this.props.step) ? parseFloat(this.props.minValue + _newValue).toFixed(this.props.step.toString().split(".")[1].length) : Math.round(this.props.minValue + _newValue);

                        if (this.props.onChange && _lastValue !== this.state.valueMax) {
                            if (_lastValue < this.state.valueMin) {
                                e.target.value = [_lastValue, this.state.valueMin];
                                e.target.parsedValue = [_lastValue, this.state.valueMin];
                                onAfterChangeValue = [_lastValue, this.state.valueMin];
                                this.props.onChange(e);
                            } else
                            {
                                e.target.value = [this.state.valueMin, _lastValue];
                                e.target.parsedValue = [this.state.valueMin, _lastValue];
                                onAfterChangeValue = [this.state.valueMin, _lastValue];
                                this.props.onChange(e);
                            }
                        }

                        this.setState({ valueMax: _lastValue });

                        return onAfterChangeValue;
                    }
                }
            } else
            {
                if (calculatedPosition >= 0 && calculatedPosition <= layer.offsetWidth) {
                    var steps = layer.offsetWidth / (this.props.maxValue - this.props.minValue) * this.props.step;
                    var halfOfSteps = steps / 2;
                    for (var i = 0; i <= parseInt(layer.offsetWidth); i += steps) {
                        var halfOfStep = i + halfOfSteps;
                        if (this.currentClassName.startsWith("sliderButtonMin")) {
                            if (calculatedPosition >= i && calculatedPosition <= i + steps) {
                                if (calculatedPosition < halfOfStep)
                                onAfterChangeValue = this.__changeStylesWithRangeAndStep(e, selected, layer, circleMin, circleMax, i, "min");else
                                if (calculatedPosition > halfOfStep)
                                onAfterChangeValue = this.__changeStylesWithRangeAndStep(e, selected, layer, circleMin, circleMax, i + steps, "min");

                                if (parseInt(circleMin.style.left) >= parseInt(circleMax.style.left)) {
                                    selected.style.left = parseFloat(circleMax.style.left) + 'px';
                                    selected.style.width = parseFloat(circleMin.style.left) - parseFloat(circleMax.style.left) + 'px';
                                }
                            }
                        }
                        if (this.currentClassName.startsWith("sliderButtonMax")) {
                            if (calculatedPosition >= i && calculatedPosition <= i + steps) {
                                if (calculatedPosition < halfOfStep)
                                onAfterChangeValue = this.__changeStylesWithRangeAndStep(e, selected, layer, circleMin, circleMax, i, "max");else
                                if (calculatedPosition > halfOfStep)
                                onAfterChangeValue = this.__changeStylesWithRangeAndStep(e, selected, layer, circleMin, circleMax, i + steps, "max");

                                if (parseInt(circleMin.style.left) >= parseInt(circleMax.style.left)) {
                                    selected.style.left = parseFloat(circleMax.style.left) + 'px';
                                    selected.style.width = parseFloat(circleMin.style.left) - parseFloat(circleMax.style.left) + 'px';
                                }
                            }
                        }
                    }
                    return onAfterChangeValue;
                }
            }
        } }, { key: "__changeStylesWithRangeAndStep", value: function __changeStylesWithRangeAndStep(

        e, selected, layer, circleMin, circleMax, step, state) {
            var decideState = void 0;

            if (state === "min") {
                circleMin.style.left = step + 'px';
                decideState = "valueMin";
            } else
            {
                circleMax.style.left = step + 'px';
                decideState = "valueMax";
            }

            selected.style.width = parseFloat(circleMax.style.left) - parseFloat(circleMin.style.left) + 'px';
            selected.style.left = parseFloat(circleMin.style.left) + 'px';

            var calculateValue = layer.offsetWidth / (this.props.maxValue - this.props.minValue);
            var newValue = step / calculateValue;
            var lastValue = this.props.step && this.__isFloat(this.props.step) ? parseFloat(this.props.minValue + newValue).toFixed(this.props.step.toString().split(".")[1].length) : Math.round(this.props.minValue + newValue);

            var decideMin = decideState === "valueMin" ? lastValue : this.state.valueMin;
            var decideMax = decideState === "valueMax" ? lastValue : this.state.valueMax;
            if (this.props.onChange && decideMin !== this.state.valueMin || this.props.onChange && decideMax !== this.state.valueMax) {
                if (decideMin > decideMax) {
                    e.target.value = [decideMax, decideMin];
                    e.target.parsedValue = [decideMax, decideMin];
                    this.props.onChange(e);
                } else
                {
                    e.target.value = [decideMin, decideMax];
                    e.target.parsedValue = [decideMin, decideMax];
                    this.props.onChange(e);
                }
            }

            this.setState(_defineProperty({}, decideState, lastValue));

            return e.target.value;
        } }, { key: "__changeStylesWithoutRange", value: function __changeStylesWithoutRange(

        e, calculatedPosition, selected, circle, layer) {
            selected.style.width = calculatedPosition + 'px';
            circle.style.left = calculatedPosition + 'px';
            var calculateValue = layer.offsetWidth / (this.props.maxValue - this.props.minValue);
            var newValue = calculatedPosition / calculateValue;
            var lastValue = this.props.step && this.__isFloat(this.props.step) ? parseFloat(this.props.minValue + newValue).toFixed(this.props.step.toString().split(".")[1].length) : Math.round(this.props.minValue + newValue);

            if (this.props.onChange && this.state.valueMax != lastValue) {
                e.target.value = lastValue;
                e.target.parsedValue = lastValue;
                this.props.onChange(e);
            }

            this.setState({ valueMax: lastValue });

            return lastValue;
        } }, { key: "__calculateDefault", value: function __calculateDefault(

        type) {
            var range = type === "min" ? 0 : 1;
            var defaultValue = this.props.range ? this.props.defaultValue ? this.props.defaultValue[range] : this.props.minValue : this.props.defaultValue ? this.props.defaultValue : this.props.minValue || 0;
            var layer = this.layerDOM;
            if (layer !== undefined && layer !== null) {
                var calculatePosition = Math.round(parseFloat((layer.offsetWidth * defaultValue / (this.props.maxValue - this.props.minValue) - layer.offsetWidth / (this.props.maxValue - this.props.minValue) * this.props.minValue).toFixed(2)));
                return calculatePosition + "px";
            }
        } }, { key: "__layerClick", value: function __layerClick(

        e) {
            e.preventDefault();
            this.click = true;
            var onAfterChangeValue = void 0;
            if (!this.props.range) {
                onAfterChangeValue = this.__calculateStyles(e);

                if (this.props.onAfterChange) {
                    e.target.value = onAfterChangeValue;
                    e.target.parsedValue = onAfterChangeValue;
                    this.props.onAfterChange(e);
                }
            } else
            if (this.props.range) {
                onAfterChangeValue = this.__calculateStylesWithRange(e);

                if (this.props.onAfterChange) {
                    e.target.value = onAfterChangeValue;
                    e.target.parsedValue = onAfterChangeValue;
                    this.props.onAfterChange(e);
                }
            }

            if (!this.props.range)
            this.setState({ openMaxDesc: true });else

            this.setState({ openMinDesc: true, openMaxDesc: true });
        } }, { key: "__circleDivMove", value: function __circleDivMove(

        e) {
            this.click = false;
            if (!this.props.range)
            this.__calculateStyles(e);else
            if (this.props.range)
            this.__calculateStylesWithRange(e);
        } }, { key: "__closeLabelOnMouseLeave", value: function __closeLabelOnMouseLeave()

        {
            if (this.tempRefMax === null || this.tempRefMax === undefined || this.tempRefMin === null || this.tempRefMin === undefined)
            this.setState({ openMaxDesc: false, openMinDesc: false });else
            return null;
        } }, { key: "__isFloat", value: function __isFloat(

        n) {
            return Number(n) === n && n % 1 !== 0;
        } }, { key: "__mouseUp", value: function __mouseUp(

        e) {
            if (!this.props.range && this.refs[this.circleDivMaxRef]) {
                if (this.props.onAfterChange) {
                    if (this.tempRefMax == this.circleDivMaxRef) {
                        e.target.value = this.state.valueMax;
                        e.target.parsedValue = this.state.valueMax;
                        this.props.onAfterChange(e);
                    }
                }
                this.setState({ openMaxDesc: false });
            } else
            if (this.props.range && this.refs[this.circleDivMinRef]) {
                if (this.props.onAfterChange) {
                    if (this.tempRefMax == this.circleDivMaxRef && this.tempRefMin == this.circleDivMinRef) {
                        if (this.state.valueMin > this.state.valueMax) {
                            e.target.value = [this.state.valueMax, this.state.valueMin];
                            e.target.parsedValue = [this.state.valueMax, this.state.valueMin];
                            this.props.onAfterChange(e);
                        } else
                        {
                            e.target.value = [this.state.valueMin, this.state.valueMax];
                            e.target.parsedValue = [this.state.valueMin, this.state.valueMax];
                            this.props.onAfterChange(e);
                        }
                    }
                }
                this.setState({ openMinDesc: false, openMaxDesc: false });
            }

            this.tempRefMax = null;
            this.tempRefMin = null;
            document.removeEventListener(this.moveEvent, this.__circleDivMove, true);

        } }, { key: "__mouseDown", value: function __mouseDown(

        e) {
            e.preventDefault();
            this.currentClassName = e.target.className;

            if (!this.props.range && this.refs[this.circleDivMaxRef])
            this.setState({ openMaxDesc: true });else
            if (this.props.range && this.refs[this.circleDivMinRef]) {
                if (this.currentClassName.startsWith("sliderButtonMin"))
                this.setState({ openMinDesc: true, openMaxDesc: false });else

                this.setState({ openMinDesc: false, openMaxDesc: true });
            }

            this.tempRefMax = this.circleDivMaxRef;
            this.tempRefMin = this.circleDivMinRef;
            document.addEventListener(this.moveEvent, this.__circleDivMove, true);
        } }, { key: "__resize", value: function __resize()

        {
            if (!this.props.range && this.refs[this.circleDivMaxRef] && this.refs[this.selectedDivRef] && this.refs[this.layerDivRef])
            this.setState({
                defaultMaxPx: this.__calculateDefault("max") });else

            if (this.props.range && this.refs[this.circleDivMaxRef] && this.refs[this.circleDivMinRef] && this.refs[this.selectedDivRef] && this.refs[this.layerDivRef])
            this.setState({
                defaultMaxPx: this.__calculateDefault("max"),
                defaultMinPx: this.__calculateDefault("min") });

        } }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

        nextProps) {
            this.setState({
                disabled: nextProps.disabled,
                unit: nextProps.unit });

        } }, { key: "componentDidMount", value: function componentDidMount()

        {
            this.circleMaxDOM = _reactDom2.default.findDOMNode(this.refs[this.circleDivMaxRef]);
            this.circleMinDOM = _reactDom2.default.findDOMNode(this.refs[this.circleDivMinRef]);
            this.selectedDOM = _reactDom2.default.findDOMNode(this.refs[this.selectedDivRef]);
            this.layerDOM = _reactDom2.default.findDOMNode(this.refs[this.layerDivRef]);

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                this.downEvent = "touchstart";
                this.upEvent = "touchend";
                this.moveEvent = "touchmove";
            }

            if (!this.state.disabled) {
                this.circleMaxDOM.addEventListener(this.downEvent, this.__mouseDown, false);
                if (this.props.range) {
                    this.circleMinDOM.addEventListener(this.downEvent, this.__mouseDown, false);
                    this.currentClassName = this.circleMinDOM.className;
                }
                document.addEventListener(this.upEvent, this.__mouseUp, false);
            }

            window.addEventListener("resize", this.__resize, true);

            this.setState({
                defaultMaxPx: this.__calculateDefault("max"),
                defaultMinPx: this.__calculateDefault("min") });

        } }, { key: "componentWillUnmount", value: function componentWillUnmount()

        {
            window.removeEventListener("resize", this.__resize, true);
            document.removeEventListener(this.downEvent, this.__mouseDown, true);
            document.removeEventListener(this.upEvent, this.__mouseUp, true);
        } }]);return Slider;}(_ShallowComponent3.default);Slider.propTypes = { /**
                                                                                * Maximum value of Slider component.
                                                                                */maxValue: _react2.default.PropTypes.number, /**
                                                                                                                               * Minimum value of Slider component.
                                                                                                                               */minValue: _react2.default.PropTypes.number, /**
                                                                                                                                                                              * Default value of Slider component (If has range prop defaultValue must array like {[0,100]}).
                                                                                                                                                                              */defaultValue: _react2.default.PropTypes.number, /**
                                                                                                                                                                                                                                 * Increment or decrement of values.
                                                                                                                                                                                                                                 */step: _react2.default.PropTypes.number, /**
                                                                                                                                                                                                                                                                            * Disables component.
                                                                                                                                                                                                                                                                            */disabled: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                         * Range support for slider component.
                                                                                                                                                                                                                                                                                                                         */range: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                   * Change event for the component.
                                                                                                                                                                                                                                                                                                                                                                   */onChange: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                * After Change event for the component.
                                                                                                                                                                                                                                                                                                                                                                                                                */onAfterChange: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Close of min-max labels.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */closeLabel: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Label of maximum value.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */maxLabel: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Label of minimum value.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */minLabel: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Unit of popover content.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */unit: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Tooltip support for component.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */closeTooltip: _react2.default.PropTypes.bool };Slider.defaultProps = { maxValue: 100, minValue: 0, disabled: false, closeLabel: false, unit: "", closeTooltip: false };Slider.counter = 1;exports.default = Slider;