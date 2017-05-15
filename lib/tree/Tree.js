"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _TreeItem = require("./TreeItem");var _TreeItem2 = _interopRequireDefault(_TreeItem);
require("./Tree.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Tree is a recursive component which generates a tree of Component's from the given item and template.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @export
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @class Tree
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @extends {ShallowComponent}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */var
Tree = function (_ShallowComponent) {_inherits(Tree, _ShallowComponent);function Tree() {_classCallCheck(this, Tree);return _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).apply(this, arguments));}_createClass(Tree, [{ key: "render",

        /**
                                                                                                                                                                                                                                                                            * PropTypes of the component.
                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                            * @static
                                                                                                                                                                                                                                                                            */value: function render()





































        {
            if (this.props.items) {
                return (
                    _react2.default.createElement("ul", { className: "tree",
                            style: { paddingLeft: this.props.root ? 0 : 35 } },
                        this.__renderChildren(this.props.items)));


            }
            return _react2.default.createElement("span", null);
        } }, { key: "__renderChildren", value: function __renderChildren(


        items) {
            var children = [];
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                children.push(_react2.default.createElement(_TreeItem2.default, {
                    key: item[this.props.valueField],
                    value: this.props.value,
                    item: item,
                    textField: this.props.textField,
                    valueField: this.props.valueField,
                    childrenField: this.props.childrenField,
                    itemRenderer: this.props.itemRenderer,
                    onChange: this.onChange }));

            }
            return children;
        } }, { key: "onChange", value: function onChange(

        e) {
            if (this.props.onChange) {
                this.props.onChange(e);
            }
            return true;
        } }, { key: "shouldComponentUpdate", value: function shouldComponentUpdate()

        {
            return true;
        } }]);return Tree;}(_ShallowComponent3.default);Tree.propTypes = { /**
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
                                                                                                                                                                                                                                                                                                                                  * Parent component of the tree item
                                                                                                                                                                                                                                                                                                                                  */parent: _react2.default.PropTypes.object };Tree.defaultProps = { parent: undefined, textField: "text", valueField: "code", childrenField: "children", value: [], root: true };exports.default = Tree;