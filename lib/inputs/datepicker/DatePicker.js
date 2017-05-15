"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _reactstrap = require("reactstrap");





var _moment = require("moment");var _moment2 = _interopRequireDefault(_moment);
require("./DatePicker.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

DatePicker = function (_ShallowComponent) {_inherits(DatePicker, _ShallowComponent);































































    function DatePicker(props) {_classCallCheck(this, DatePicker);var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this,
        props));
        _moment2.default.locale(_this.props.locale);
        var weekDays = _moment2.default.weekdaysMin(true);
        for (var i = 0; i < weekDays.length; i++) {
            weekDays[i] = _react2.default.createElement("th", { key: i }, weekDays[i]);
        }
        _this.weekDays = weekDays;

        var value = (0, _moment2.default)(_this.props.value).set("hour", 12);
        value = value.isBefore(_this.props.minDate) ? (0, _moment2.default)(_this.props.minDate) : value;
        value = value.isAfter(_this.props.maxDate) ? (0, _moment2.default)(_this.props.maxDate) : value;
        _this.state = { moment: value };
        _this.__renderMonthSelectBox();
        _this.__renderYearSelectBox();return _this;
    } /**
       * defaultProps
       * @static
       */_createClass(DatePicker, [{ key: "render", value: function render() {var grid = [];
            var className = "DatePicker-day";
            var moment = this.state.moment;
            var enabled = false;
            var currentMonth = (0, _moment2.default)(moment).startOf("month").startOf("week");
            var isoWeekday = currentMonth.startOf('week').isoWeekday() % 7;
            currentMonth = currentMonth.add(isoWeekday - currentMonth.day(), "day");

            for (var i = 0; i < 6; i++) {
                var row = [];
                var weekMoment = (0, _moment2.default)(currentMonth);
                if (weekMoment.get("month") === weekMoment.add(7, "day").get("month") && weekMoment.get("month") !== moment.get("month")) {
                    continue;
                }
                for (var j = 0; j < 7; j++) {
                    enabled = moment.get("month") === currentMonth.get("month");
                    className = enabled ?
                    moment.get("date") === currentMonth.get("date") ?
                    "DatePicker-day-selected" :
                    "DatePicker-day" :
                    "DatePicker-day-disabled";
                    row.push(
                    _react2.default.createElement("td", {
                            key: currentMonth.get("date"),
                            className: className,
                            onClick: enabled ? this.__onClickDay : undefined },

                        currentMonth.get("date")));

                    currentMonth.add(1, "day");
                }
                grid.push(_react2.default.createElement("tr", { key: i }, row));
            }
            var label = this.props.label != undefined ?
            _react2.default.createElement(_reactstrap.Label, null, this.props.label) :
            undefined;

            return (
                _react2.default.createElement("div", { className: this.props.className, style: { maxWidth: this.props.maxWidth } },
                    label,
                    _react2.default.createElement(_reactstrap.Table, { bordered: true, className: "DatePicker-table" },
                        _react2.default.createElement("thead", null,
                            _react2.default.createElement("tr", null,
                                _react2.default.createElement("th", { colSpan: 3 }, this.yearSelectBox),
                                _react2.default.createElement("th", { colSpan: 4 }, this.monthSelectBox)),

                            _react2.default.createElement("tr", null, this.weekDays)),

                        _react2.default.createElement("tbody", null, grid))));


        } }, { key: "__renderMonthSelectBox", value: function __renderMonthSelectBox()

        {
            var months = _moment2.default.months();
            for (var i = 0; i < months.length; i++) {
                months[i] = _react2.default.createElement("option", { key: i, value: i }, months[i]);
            }
            this.monthSelectBox =
            _react2.default.createElement(_reactstrap.Input, { id: "month-select", type: "select", placeholder: "Month", onChange: this.__onChangeMonth, defaultValue: this.state.moment.month() },
                months);


        } }, { key: "__renderYearSelectBox", value: function __renderYearSelectBox()

        {
            var years = [];
            var minYear = (0, _moment2.default)(this.props.minDate).year();
            var maxYear = (0, _moment2.default)(this.props.maxDate).year() + 1;
            for (var i = minYear; i < maxYear; i++) {
                years[i] = _react2.default.createElement("option", { key: i, value: i }, i);
            }
            this.yearSelectBox =
            _react2.default.createElement(_reactstrap.Input, { id: "year-select", type: "select", placeholder: "Year", onChange: this.__onChangeYear, defaultValue: this.state.moment.year() },
                years);


        } }, { key: "__onChangeYear", value: function __onChangeYear(

        e) {
            var year = parseInt(e.target.selectedOptions[0].value, 10);
            var newMoment = this.state.moment;
            newMoment.year(year);
            this.__onChange(newMoment);
        } }, { key: "__onChangeMonth", value: function __onChangeMonth(

        e) {
            var month = parseInt(e.target.selectedOptions[0].value, 10);
            var newMoment = this.state.moment;
            newMoment.month(month);
            this.__onChange(newMoment);
        } }, { key: "__onClickDay", value: function __onClickDay(

        e) {
            var day = parseInt(e.target.innerText, 10);
            var newMoment = this.state.moment;
            newMoment.date(day);
            this.__onChange(newMoment);
            if (this.props.onSelect) {
                this.props.onSelect(newMoment);
            }
        } }, { key: "__onChange", value: function __onChange(

        newMoment) {
            this.setState({
                moment: newMoment });

            if (this.props.onChange) {
                var e = {
                    target: {
                        value: new Date(newMoment.toDate().getTime()).toDateString(),
                        parsedValue: newMoment.toDate().getTime(),
                        name: this.props.name } };


                this.props.onChange(e);
            }
        } }, { key: "shouldComponentUpdate", value: function shouldComponentUpdate()

        {
            return true;
        } }]);return DatePicker;}(_ShallowComponent3.default);DatePicker.propTypes = { /**
                                                                                        * Value of the component
                                                                                        */value: _react2.default.PropTypes.number, /**
                                                                                                                                    * name use as input field name
                                                                                                                                    */name: _react2.default.PropTypes.string, /**
                                                                                                                                                                               * Label for the form control.
                                                                                                                                                                               */label: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                           * Change event for the component
                                                                                                                                                                                                                           */onChange: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                        * Select event for the component. Triggered at date select.
                                                                                                                                                                                                                                                                        */onSelect: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                     * Minimum date to show at the picker.
                                                                                                                                                                                                                                                                                                                     */minDate: _react2.default.PropTypes.number, /**
                                                                                                                                                                                                                                                                                                                                                                   * Maximum date to show at the picker.
                                                                                                                                                                                                                                                                                                                                                                   */maxDate: _react2.default.PropTypes.number, /**
                                                                                                                                                                                                                                                                                                                                                                                                                 *  Max width of component
                                                                                                                                                                                                                                                                                                                                                                                                                 */maxWidth: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]), /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         *  Base CSS class and prefix for the component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */className: _react2.default.PropTypes.string };DatePicker.defaultProps = { disabled: false, readOnly: false, hidden: false, locale: "en", value: new Date().getTime(), minDate: (0, _moment2.default)("01/01/1900", "DD/MM/YYYY").toDate().getTime(), maxDate: (0, _moment2.default)("31/12/2100", "DD/MM/YYYY").toDate().getTime(), maxWidth: "100%", className: "center-block" };exports.default = DatePicker;