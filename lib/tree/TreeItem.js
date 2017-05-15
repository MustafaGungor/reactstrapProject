"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _Arrays = require("robe-react-commons/lib/utils/Arrays");var _Arrays2 = _interopRequireDefault(_Arrays);
var _reactstrap = require("reactstrap");
var _Tree = require("./Tree");var _Tree2 = _interopRequireDefault(_Tree);

require("./Tree.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Tree is a recursive component which generates a tree of Component's from the given item and template.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @export
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @class Tree
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @extends {ShallowComponent}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */var
TreeItem = function (_ShallowComponent) {_inherits(TreeItem, _ShallowComponent);function TreeItem() {_classCallCheck(this, TreeItem);return _possibleConstructorReturn(this, (TreeItem.__proto__ || Object.getPrototypeOf(TreeItem)).apply(this, arguments));}_createClass(TreeItem, [{ key: "render",

        /**
                                                                                                                                                                                                                                                                                                        * PropTypes of the component.
                                                                                                                                                                                                                                                                                                        *
                                                                                                                                                                                                                                                                                                        * @static
                                                                                                                                                                                                                                                                                                        */value: function render()
































        {
            var item = this.props.item;
            return (
                _react2.default.createElement("li", null,
                    this.__getItemRenderer(this.props),
                    item[this.props.childrenField] ?
                    _react2.default.createElement(_Tree2.default, _extends({},
                    this.props, {
                        items: item[this.props.childrenField],
                        onChange: this.onChange })) :

                    undefined));



        } }, { key: "__getItemRenderer", value: function __getItemRenderer(

        props) {
            return this.props.itemRenderer ?
            this.props.itemRenderer(props) :
            _react2.default.createElement(_reactstrap.ControlLabel, null, this.props.item[this.props.textField]);
        } }, { key: "onChange", value: function onChange(

        e) {
            if (this.props.onChange) {
                this.props.onChange(e);
            }
            return true;
        } }, { key: "shouldComponentUpdate", value: function shouldComponentUpdate()

        {
            return true;
        } }]);return TreeItem;}(_ShallowComponent3.default);TreeItem.propTypes = { /**
                                                                                    * Data for the tree to view
                                                                                    */item: _react2.default.PropTypes.object.isRequired, /**
                                                                                                                                          * Text field of the data
                                                                                                                                          */textField: _react2.default.PropTypes.string, /**
                                                                                                                                                                                          * Value field of the data.
                                                                                                                                                                                          */valueField: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                           * Children field of the data.
                                                                                                                                                                                                                                           */childrenField: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                               * Checked items array.
                                                                                                                                                                                                                                                                                               */value: _react2.default.PropTypes.array };TreeItem.defaultProps = { textField: "text", valueField: "code", childrenField: "children", value: [], root: false };exports.default = TreeItem;