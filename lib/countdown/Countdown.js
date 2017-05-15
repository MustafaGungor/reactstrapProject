"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactstrap = require("reactstrap");
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _Application = require("robe-react-commons/lib/application/Application");var _Application2 = _interopRequireDefault(_Application);
require("./Countdown.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @export
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @class Countdown
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @extends {ShallowComponent}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */var
Countdown = function (_ShallowComponent) {_inherits(Countdown, _ShallowComponent);

































































































    /**
                                                                                    * Creates an instance of Countdown.
                                                                                    * @param {Object} props
                                                                                    * @memberOf Countdown
                                                                                    */
    function Countdown(props) {_classCallCheck(this, Countdown);var _this = _possibleConstructorReturn(this, (Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call(this,
        props));_this.ticking = false;_this.









        pre = {
            days: -1,
            hours: -1,
            minutes: -1,
            seconds: -1 };_this.state = { value: _this.props.value };return _this;} /**
                                                                                     * Holds previous values.
                                                                                     * @memberOf Countdown
                                                                                     */ /**
                                                                                         * Holds the ticking status.
                                                                                         * @memberOf Countdown
                                                                                         */_createClass(Countdown, [{ key: "render", value: function render() {var _parseLong = this.__parseLong(this.state.value),days = _parseLong.days,hours = _parseLong.hours,minutes = _parseLong.minutes,seconds = _parseLong.seconds;var counter = _react2.default.createElement("div", { style: this.props.style },
                this.renderCell(this.props.days, days, this.pre.days),
                this.renderCell(this.props.hours, hours, this.pre.hours),
                this.renderCell(this.props.minutes, minutes, this.pre.minutes),
                this.renderCell(this.props.seconds, seconds, this.pre.seconds));


            this.pre = { days: days, hours: hours, minutes: minutes, seconds: seconds };
            return counter;
        } }, { key: "renderCell", value: function renderCell(

        props, value, preValue) {
            var className = value === preValue || !this.ticking ? "countdown" : "countdown countdown-animate";
            if (props.visible) {
                return (
                    _react2.default.createElement("div", { className: className },
                        _react2.default.createElement("label", { style: props.style }, props.label),
                        this.__addLeftZero(value)));


            }
            return undefined;
        }

        /**
           *
           * Adds 0 to the left side of the integer and converts to a string.
           * @param {number} value
           * @returns
           *
           * @memberOf Countdown
           */ }, { key: "__addLeftZero", value: function __addLeftZero(
        value) {
            return value.toString().length < 2 ? "0" + value.toString() : value.toString();
        } }, { key: "__parseLong", value: function __parseLong(

        value) {
            var days = this.props.days.visible ? Math.floor(value / Countdown.UNITS_IN_MS.DAY) : 0;
            var hours = this.props.hours.visible ? Math.floor(value % Countdown.UNITS_IN_MS.DAY / Countdown.UNITS_IN_MS.HOUR) : 0;
            var minutes = this.props.minutes.visible ? Math.floor(value % Countdown.UNITS_IN_MS.HOUR / Countdown.UNITS_IN_MS.MINUTE) : 0;
            var seconds = this.props.seconds.visible ? Math.floor(value % Countdown.UNITS_IN_MS.MINUTE / Countdown.UNITS_IN_MS.SECOND) : 0;
            return { days: days, hours: hours, minutes: minutes, seconds: seconds };
        }

        /**
           * Tick :)
           * @returns
           * @memberOf Countdown
           */ }, { key: "__tick", value: function __tick()
        {
            var value = this.state.value;
            value -= this.props.interval;
            if (value < 1) {
                this.stop();
                this.setState({
                    value: 0 });

                if (this.props.onComplete) {
                    this.props.onComplete();
                }
                return;
            }
            this.setState({
                value: value });

            if (this.props.onChange) {
                this.props.onChange(value);
            }
            clearTimeout(this.timer);
            this.timer = setTimeout(function () {
                this.__tick();
            }.bind(this), this.props.interval);
        }

        /**
           * Resets the values of the counter to the initial values.
           * @memberOf Countdown
           */ }, { key: "reset", value: function reset()
        {var _this2 = this;
            this.forceUpdate();
            this.setState({
                value: this.state.value },
            function () {
                _this2.setState({
                    value: _this2.props.value });

            });
            this.pre = {
                days: -1,
                hours: -1,
                minutes: -1,
                seconds: -1 };


        }

        /**
           * Starts counter.
           * @memberOf Countdown
           */ }, { key: "start", value: function start()
        {
            this.ticking = true;
            this.timer = setTimeout(function () {
                this.__tick();
            }.bind(this), this.props.interval);
        }

        /**
           * Stops counter.
           * @memberOf Countdown
           */ }, { key: "stop", value: function stop()
        {
            this.ticking = false;
            clearTimeout(this.timer);
        }

        /**
           *
           * Returns the current status of the component.
           * @returns {boolean} true - started / false stopped
           * @memberOf Countdown
           */ }, { key: "isTicking", value: function isTicking()
        {
            return this.ticking;
        } }, { key: "componentWillUnmount", value: function componentWillUnmount()

        {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
        } }]);return Countdown;}(_ShallowComponent3.default);Countdown.UNITS_IN_MS = { DAY: 86400000, HOUR: 3600000, MINUTE: 60000, SECOND: 1000 };Countdown.propTypes = { /**
                                                                                                                                                                            * Interval of the counter to tick.
                                                                                                                                                                            */interval: _react2.default.PropTypes.number, /**
                                                                                                                                                                                                                           *Starting value of the component in MS.
                                                                                                                                                                                                                           */value: _react2.default.PropTypes.number, /**
                                                                                                                                                                                                                                                                       * Will fire when the counter finishes countdown. ( 0 )
                                                                                                                                                                                                                                                                       * No parameters.
                                                                                                                                                                                                                                                                       */onComplete: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                      * Will fire on every change of the value (not onComplete)
                                                                                                                                                                                                                                                                                                                      * value as parameter.
                                                                                                                                                                                                                                                                                                                      */onChange: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                   * Style of the counter.
                                                                                                                                                                                                                                                                                                                                                                   */style: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                                                                                                                                                                               * Props for days cell.
                                                                                                                                                                                                                                                                                                                                                                                                               */days: _react2.default.PropTypes.shape({ visible: _react2.default.PropTypes.boolean, label: _react2.default.PropTypes.string, style: _react2.default.PropTypes.object }), /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * Props for hours cell.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */hours: _react2.default.PropTypes.shape({ visible: _react2.default.PropTypes.boolean, label: _react2.default.PropTypes.string, style: _react2.default.PropTypes.object }), /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * Props for minutes cell.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */minutes: _react2.default.PropTypes.shape({ visible: _react2.default.PropTypes.boolean, label: _react2.default.PropTypes.string, style: _react2.default.PropTypes.object }), /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Props for seconds cell.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */seconds: _react2.default.PropTypes.shape({ visible: _react2.default.PropTypes.boolean, label: _react2.default.PropTypes.string, style: _react2.default.PropTypes.object }) };Countdown.defaultProps = { interval: 1000, value: 10000, style: { fontSize: "30px" }, days: { visible: true, label: _Application2.default.i18n(Countdown, "countdown.Countdown", "days", "label"), style: { fontSize: "12px", display: "block" } }, hours: { visible: true, label: _Application2.default.i18n(Countdown, "countdown.Countdown", "hours", "label"), style: { fontSize: "12px", display: "block" } }, minutes: { visible: true, label: _Application2.default.i18n(Countdown, "countdown.Countdown", "minutes", "label"), style: { fontSize: "12px", display: "block" } }, seconds: { visible: true, label: _Application2.default.i18n(Countdown, "countdown.Countdown", "seconds", "label"), style: { fontSize: "12px", display: "block" } } };exports.default = Countdown;