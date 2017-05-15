"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
var _reactstrap = require("reactstrap");
var _Filter = require("./Filter");var _Filter2 = _interopRequireDefault(_Filter);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

Filters = function (_ShallowComponent) {_inherits(Filters, _ShallowComponent);




























    function Filters() {_classCallCheck(this, Filters);var _this = _possibleConstructorReturn(this, (Filters.__proto__ || Object.getPrototypeOf(Filters)).call(this));

        _this.state = {
            filters: {},
            visiblePopups: {} };return _this;

    }_createClass(Filters, [{ key: "render", value: function render()

        {
            var filterFields = this.__renderFilters(this.props.fields, this.state.visiblePopups);
            if (filterFields === undefined) {
                return _react2.default.createElement("span", null);
            }
            return _react2.default.createElement("span", null, filterFields);
        } }, { key: "__renderFilters", value: function __renderFilters(

        fields, visiblePopups) {
            var filterFields = [];
            var hasAtLeast1Filter = false;
            for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                if (field.visible === false) {
                    /* eslint-disable no-continue */
                    continue;
                }
                var filterField = _react2.default.createElement("span", null);

                if (field.filter === true) {
                    var colId = "tableColumn" + this.props.idCount + "-" + field.name;
                    var show = visiblePopups[field.name] === true;
                    var getColID = document.getElementById(colId);
                    var onClear = this.__onClear.bind(undefined, field.name);
                    // filterField = (
                    //     <Overlay show={show} placement="top" target={getColID} >
                    //         <Popover id="popover" placement="top" >
                    //             <Filter field={field} value={this.state[field.name]} onChange={this.__onChange} delay={this.props.delay} />
                    //             <ButtonGroup bsSize="xsmall" className="pull-right" style={{ marginBottom: "15px" }}>
                    //                 <Button bsStyle="danger" onClick={onClear}>{this.props.clearButtonText}</Button>
                    //                 <Button bsStyle="danger" onClick={this.__onClearAll}>{this.props.clearAllButtonText}</Button>
                    //             </ButtonGroup>
                    //         </Popover>
                    //     </Overlay>);
                    filterField =
                    _react2.default.createElement(_reactstrap.Popover, { placement: "bottom", isOpen: show, target: colId, id: "popover" },
                        _react2.default.createElement(_reactstrap.PopoverContent, null,
                            _react2.default.createElement(_Filter2.default, { field: field, value: this.state[field.name], onChange: this.__onChange, delay: this.props.delay }),
                            _react2.default.createElement(_reactstrap.ButtonGroup, { size: "sm", className: "pull-right", style: { marginBottom: "15px" } },
                                _react2.default.createElement(_reactstrap.Button, { color: "danger", onClick: onClear }, this.props.clearButtonText),
                                _react2.default.createElement(_reactstrap.Button, { color: "danger", onClick: this.__onClearAll }, this.props.clearAllButtonText))));



                    hasAtLeast1Filter = true;
                }
                filterFields.push(
                _react2.default.createElement("span", {
                        key: field.name,
                        style: { verticalAlign: "bottom", border: "0px" } },

                    filterField));


            }
            if (!hasAtLeast1Filter) {
                return undefined;
            }
            return filterFields;
        } }, { key: "__onChange", value: function __onChange(

        name, value, filter) {
            var state = this.state;
            state[name] = value;
            state.filters[name] = filter;
            this.setState(state);
            this.forceUpdate();
            this.props.onChange();
        } }, { key: "__onClear", value: function __onClear(

        name) {
            this.__onChange(name, undefined);
        } }, { key: "__onClearAll", value: function __onClearAll()

        {
            var state = this.state;
            for (var key in state) {
                if (state.hasOwnProperty(key)) {// eslint-disable-line
                    state[key] = undefined;
                }
            }
            state.filters = {};
            state.visiblePopups = {};
            this.setState(undefined);
            this.__hideFilters();
            this.props.onChange(true);
            this.forceUpdate();
        } }, { key: "__handleClick", value: function __handleClick(

        e) {
            var data = e.path;
            for (var i in data) {// eslint-disable-line
                var item = data[i];
                if (item.id && item.id === "popover") {
                    return;
                }
            }
            var target = e.target;
            if (target.id === "popover" ||
            target.id.indexOf("tableColumn") === 0 ||
            target.className.indexOf("react-datepicker") === 0) {
                return;
            }

            this.__hideFilters();
        } }, { key: "__hasOpenPopup", value: function __hasOpenPopup(

        obj) {
            for (var prop in obj) {
                if (obj[prop] !== false) {
                    return true;
                }
            }
            return false;
        } }, { key: "__hideFilters", value: function __hideFilters()

        {
            if (this.__hasOpenPopup(this.state.visiblePopups)) {
                this.setState({
                    visiblePopups: {} });

            }
        } }, { key: "componentDidMount", value: function componentDidMount()

        {
            document.addEventListener("click", this.__handleClick, false);
        } }, { key: "componentWillUnmount", value: function componentWillUnmount()

        {
            document.removeEventListener("click", this.__handleClick, false);
        } }]);return Filters;}(_robeReactCommons.ShallowComponent);Filters.propTypes = { /**
                                                                                          * Fields Configurations to show style on view.
                                                                                          */fields: _react2.default.PropTypes.array.isRequired, /**
                                                                                                                                                 * A map which contains names of the visible popups.
                                                                                                                                                 */visiblePopups: _react2.default.PropTypes.object.isRequired, /**
                                                                                                                                                                                                                * Unique Id for the table.
                                                                                                                                                                                                                * It helps to open popups at the correct position in case of multiple table at one screen
                                                                                                                                                                                                                */idCount: _react2.default.PropTypes.number.isRequired, /**
                                                                                                                                                                                                                                                                         *The event to trigger on every filter value update.
                                                                                                                                                                                                                                                                         */onChange: _react2.default.PropTypes.func.isRequired, /**
                                                                                                                                                                                                                                                                                                                                 *Delay between last keystroke and filter request.
                                                                                                                                                                                                                                                                                                                                 */delay: _react2.default.PropTypes.number };exports.default = Filters;