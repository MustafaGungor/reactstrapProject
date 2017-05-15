"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _Arrays = require("robe-react-commons/lib/utils/Arrays");var _Arrays2 = _interopRequireDefault(_Arrays);
var _Tree = require("../tree/Tree");var _Tree2 = _interopRequireDefault(_Tree);
var _CheckInput = require("../inputs/CheckInput");var _CheckInput2 = _interopRequireDefault(_CheckInput);
require("./CheckTree.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * CheckTree is a recursive component which generates a tree of CheckInput's from the given item.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @export
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @class CheckTree
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @extends {ShallowComponent}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */var
CheckTree = function (_ShallowComponent) {_inherits(CheckTree, _ShallowComponent);











































    function CheckTree(props) {_classCallCheck(this, CheckTree);var _this = _possibleConstructorReturn(this, (CheckTree.__proto__ || Object.getPrototypeOf(CheckTree)).call(this,
        props));_this.__value = [];_this.












































        __onChange = function (e) {
            var values = _this.state.value;
            var value = e.target.parsedValue[0];

            if (value) {
                values.push(value);
                var selected = _this.__getChildrenValues(value);
                values = values.concat(selected);
                values = CheckTree.filterDuplicates(values);
            } else {
                value = e.target.oldValue[0];
                _Arrays2.default.remove(values, value);
                var unselected = _this.__getChildrenValues(value);
                for (var i = 0; i < unselected.length; i++) {
                    _Arrays2.default.remove(values, unselected[i]);
                }
            }
            _this.setState({
                value: values });

            _this.__value = values;
            if (_this.props.onChange) {
                _this.props.onChange(values);
            }
        };_this.componentWillReceiveProps(props);return _this;} /**
                                                                 * PropTypes of the component.
                                                                 *
                                                                 * @static
                                                                 */_createClass(CheckTree, [{ key: "render", value: function render() {return _react2.default.createElement("div", null, _react2.default.createElement(_Tree2.default, { items: this.props.items, value: this.state.value, childrenField: this.props.childrenField, textField: this.props.textField, valueField: this.props.valueField, onChange: this.__onChange, itemRenderer: CheckTree.itemRenderer }));} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * A default CheckInput renderer implementation for the Tree component.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @static
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @param {Object} props properties to use at render
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @returns {Object} a CheckInput
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @memberOf CheckTree
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */ }, { key: "__getChildrenValues", value: function __getChildrenValues(





        selectedValue) {var _this2 = this;
            var selectedChildren = [];
            this.__traverseItems(this.props.items, function (item) {
                var value = item[_this2.props.valueField];
                if (value === selectedValue) {
                    _this2.__traverseItems(item[_this2.props.childrenField], function (item2) {
                        var value2 = item2[_this2.props.valueField];
                        selectedChildren.push(value2);
                    });
                }
            });
            return selectedChildren;
        }

        /**
           * Returns an array of the unselected values from the given items tree.
           * @returns {Array}
           * @memberOf CheckTree
           */ }, { key: "getUnselectedItems", value: function getUnselectedItems()
        {var _this3 = this;
            var unselected = [];
            var items = this.props.items;
            var values = this.__value;
            this.__traverseItems(items, function (item) {
                var value = item[_this3.props.valueField];
                if (_Arrays2.default.indexOf(values, value) === -1) {
                    unselected.push(value);
                }
            });
            return unselected;
        }

        /**
           * Returns an array of the selected values from the given items tree.
           * @returns {Array}
           * @memberOf CheckTree
           */ }, { key: "getSelectedItems", value: function getSelectedItems()
        {
            return this.__value;
        } }, { key: "__traverseItems", value: function __traverseItems(

        items, callback) {
            if (items === undefined) {
                return;
            }
            for (var i = 0; i < items.length; i++) {
                callback(items[i]);
                var children = items[i][this.props.childrenField];
                if (children) {
                    this.__traverseItems(children, callback);
                }
            }
        } }, { key: "shouldComponentUpdate", value: function shouldComponentUpdate()


        {
            return true;
        } }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

        nextProps) {
            this.state = {
                value: nextProps.value };

        } }], [{ key: "itemRenderer", value: function itemRenderer(props) {var checked = void 0;var value = props.item[props.valueField];if (_Arrays2.default.indexOf(props.value, value) !== -1) {checked = [value];}return _react2.default.createElement(_CheckInput2.default, { items: [props.item], value: checked, textField: props.textField, valueField: props.valueField, name: "" + props.item[props.valueField], formControl: false, onChange: props.onChange });} }, { key: "filterDuplicates", value: function filterDuplicates(src) {var sorted = src.slice().sort();var result = [];if (sorted[0] !== undefined) {result.push(sorted[0]);}for (var i = 1; i < sorted.length; i++) {if (sorted[i] !== sorted[i - 1]) {result.push(sorted[i]);}}return result;} }]);return CheckTree;}(_ShallowComponent3.default);CheckTree.propTypes = { /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * Data for the tree to view
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */items: _react2.default.PropTypes.array.isRequired, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * Text field of the data
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */textField: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * Value field of the data.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */valueField: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Children field of the data.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */childrenField: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Checked items array.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */value: _react2.default.PropTypes.array, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * Valuen type
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */valueType: _react2.default.PropTypes.oneOf(["number", "string"]) };CheckTree.defaultProps = { textField: "text", valueField: "code", childrenField: "children", value: [], valueType: "string" };exports.default = CheckTree;