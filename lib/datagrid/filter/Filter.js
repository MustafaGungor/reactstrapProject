"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
var _inputs = require("../../inputs");var Input = _interopRequireWildcard(_inputs);
var _ComponentManager = require("../../form/ComponentManager");var _ComponentManager2 = _interopRequireDefault(_ComponentManager);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

Filter = function (_ShallowComponent) {_inherits(Filter, _ShallowComponent);


















    function Filter(props) {_classCallCheck(this, Filter);var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this,
        props));_this.__refMap = {};
        _this.state = {
            value: _this.props.value };return _this;

    }_createClass(Filter, [{ key: "render", value: function render()

        {
            var field = _robeReactCommons.Objects.deepCopy(this.props.field);
            delete field.validations;
            delete field.sort;
            var name = field.name;
            var Component = _ComponentManager2.default.getComponent(field.type);
            var style = {};
            if (field.type === "select") {
                style = { width: "176px" };
            }
            if (field.range !== true ||
            field.type !== "number" &&
            field.type !== "decimal" &&
            field.type !== "money" &&
            field.type !== "date") {
                delete field.range;

                return (
                    _react2.default.createElement(Component, _extends({},
                    field, {
                        style: style,
                        value: this.state.value,
                        onChange: this.__handleChange })));

            }
            var fieldMin = _robeReactCommons.Objects.deepCopy(field);
            delete fieldMin.range;
            fieldMin.name += "-min";
            var fieldMax = _robeReactCommons.Objects.deepCopy(field);
            delete fieldMax.range;
            fieldMax.name += "-max";
            var minOnChange = this.__handleRangeChange.bind(undefined, fieldMin.name);
            var maxOnChange = this.__handleRangeChange.bind(undefined, fieldMax.name);
            var value = this.state.value === undefined ? [] : this.state.value;
            return (
                _react2.default.createElement("div", null,
                    _react2.default.createElement(Component, _extends({},
                    fieldMin, {
                        style: style,
                        key: name + "_key-min",
                        value: value[0],
                        onChange: minOnChange })),

                    _react2.default.createElement(Component, _extends({},
                    fieldMax, {
                        style: style,
                        key: name + "_key-max",
                        value: value[1],
                        onChange: maxOnChange }))));



        } }, { key: "__handleChange", value: function __handleChange(

        e) {
            var field = this.props.field;
            var name = field.name;
            var value = e.target.parsedValue !== undefined ? e.target.parsedValue : e.target.value;
            var filter = [];
            if (value !== "" && value !== undefined && value !== null) {
                switch (field.type) {
                    case "string":
                        filter = [name, "~=", value];
                        break;
                    case "text":
                        filter = [name, "~=", value];
                        break;
                    case "number":
                        filter = [name, "=", value];
                        break;
                    case "decimal":
                        filter = [name, "=", value];
                        break;
                    case "date":
                        filter = [name, ">=", value];
                        break;
                    case "password":
                        filter = [name, "=", value];
                        break;
                    case "money":
                        filter = [name, "=", value];
                        break;
                    case "radio":
                        filter = [name, "=", value];
                        break;
                    case "select":
                        filter = [name, "=", value];
                        break;
                    case "check":
                        filter = [name, "=", value];
                        break;
                    default:
                        return true;}

            }
            this.__propsOnChange(name, value, filter);
            return true;
        } }, { key: "__handleRangeChange", value: function __handleRangeChange(

        name, e) {

            var field = this.props.field;
            var value = e.target.parsedValue !== undefined ? e.target.parsedValue : e.target.value;
            var valueArr = _robeReactCommons.Objects.deepCopy(this.props.value === undefined ? [] : this.props.value);
            var isMin = name.substr(name.length - 4) === "-min";
            var oldValues = [];
            if (this.props.value !== undefined) {
                oldValues = this.props.value;
            }
            if (isMin) {
                valueArr[0] = value;
                valueArr[1] = oldValues[1];
            } else {
                valueArr[0] = oldValues[0];
                valueArr[1] = value;
            }
            var filter = [];
            switch (field.type) {
                case "number":
                case "decimal":
                case "date":
                case "money":
                    if (valueArr[0] !== undefined && valueArr[0] !== "") {
                        filter.push([field.name, ">=", valueArr[0]]);
                    }
                    if (valueArr[1] !== undefined && valueArr[1] !== "") {
                        filter.push([field.name, "<=", valueArr[1]]);
                    }
                    break;
                default:
                    return true;}

            this.__propsOnChange(field.name, valueArr, filter);
            return true;
        } }, { key: "__propsOnChange", value: function __propsOnChange(

        name, value, filter) {
            clearTimeout(this.searchOnChange);
            this.setState({
                value: value });

            this.searchOnChange = setTimeout(function () {
                this.props.onChange(name, value, filter);
            }.bind(this), this.props.delay);
        } }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

        nextProps) {
            this.setState({
                value: nextProps.value });

        } }]);return Filter;}(_robeReactCommons.ShallowComponent);Filter.propTypes = { /**
                                                                                        * Field properties to filter
                                                                                        */field: _react2.default.PropTypes.object.isRequired, /**
                                                                                                                                               *Value of the filter
                                                                                                                                               */value: _react2.default.PropTypes.any, /**
                                                                                                                                                                                       *Delay between last keystroke and filter request.
                                                                                                                                                                                       */delay: _react2.default.PropTypes.number };exports.default = Filter;