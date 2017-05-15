"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _ShallowComponent2 = require("robe-react-commons/lib/components/ShallowComponent");var _ShallowComponent3 = _interopRequireDefault(_ShallowComponent2);
var _Arrays = require("robe-react-commons/lib/utils/Arrays");var _Arrays2 = _interopRequireDefault(_Arrays);
var _FaIcon = require("../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);
var _reactstrap = require("reactstrap");
require("./SideMenu.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var


SideMenu = function (_ShallowComponent) {_inherits(SideMenu, _ShallowComponent);


    /**
                                                                                  * Properties of the component
                                                                                  *
                                                                                  * @static
                                                                                  */






























    function SideMenu(props) {_classCallCheck(this, SideMenu);var _this = _possibleConstructorReturn(this, (SideMenu.__proto__ || Object.getPrototypeOf(SideMenu)).call(this,
        props));_this.









        __selectModule = [];_this.componentWillReceiveProps(props);return _this;}_createClass(SideMenu, [{ key: "componentWillReceiveProps", value: function componentWillReceiveProps(nextProps) {this.state = { selectedItem: nextProps.selectedItem };} }, { key: "render", value: function render()

        {
            this.__selectModule = this.__findModule(this.props.items, this.state.selectedItem);
            return (
                _react2.default.createElement(_reactstrap.ListGroup, { className: "side-menu" },
                    this.renderItems(this.props.items, true)));

        } }, { key: "renderItems", value: function renderItems(


        menu, isRoot) {
            var itemArr = [];
            if (!menu || menu.length <= 0) {
                return itemArr;
            }
            var children = [];

            for (var i = 0; i < menu.length; i++) {
                var item = menu[i];
                if (item.items) {
                    children = this.renderItems(item.items, false);
                }
                var isActive = this.__isActiveModule(item[this.props.valueField]);
                itemArr.push(
                _react2.default.createElement("div", { style: { marginLeft: isRoot ? 0 : 20 }, key: item[this.props.textField] },
                    _react2.default.createElement(_reactstrap.ListGroupItem, {
                            active: isActive,
                            onClick: this.__onChange.bind(undefined, item) },
                        _react2.default.createElement(_FaIcon2.default, { code: item.icon, fixed: true }), "\xA0\xA0",
                        item[this.props.textField]),

                    _react2.default.createElement(_reactstrap.Collapse, { isOpen: isActive },
                        _react2.default.createElement("div", null,
                            children))));



            }
            return itemArr;
        } }, { key: "__onChange", value: function __onChange(

        item) {
            if (this.props.onChange) {
                var result = this.props.onChange(item);
                if (result !== false) {
                    this.setState({ selectedItem: item[this.props.valueField] });
                }
            } else
            {
                this.setState({ selectedItem: item[this.props.valueField] });
            }
        } }, { key: "__findModule", value: function __findModule(

        items, value) {
            var arr = [];
            if (!items || items.length <= 0) {
                return arr;
            }
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item[this.props.valueField] === value) {
                    arr.push(value);
                    return arr;
                }
                if (item.items) {
                    arr = this.__findModule(item.items, value);
                    if (arr.length > 0) {
                        arr.push(item[this.props.valueField]);
                        return arr;
                    }
                }
            }
            return arr;
        } }, { key: "__isActiveModule", value: function __isActiveModule(

        value) {
            var index = _Arrays2.default.indexOf(this.__selectModule, value);
            return index !== -1;
        } }]);return SideMenu;}(_ShallowComponent3.default);SideMenu.propTypes = { /**
                                                                                    * Path of the selected item
                                                                                    */selectedItem: _react2.default.PropTypes.string, /**
                                                                                                                                       * Items of the menu. Must be a valid json map with a root element.
                                                                                                                                       */items: _react2.default.PropTypes.array.isRequired, /**
                                                                                                                                                                                             * Change event of the sidemenu.
                                                                                                                                                                                             * It is triggered if the selected sub-item changes, not collapsed menu.
                                                                                                                                                                                             */onChange: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                          * key of given map array `items`
                                                                                                                                                                                                                                          */valueField: _react2.default.PropTypes.any, /**
                                                                                                                                                                                                                                                                                        * presented text of give map array `items`
                                                                                                                                                                                                                                                                                        */textField: _react2.default.PropTypes.string };SideMenu.defaultProps = { selectedItem: "", textField: "text", valueField: "path" };exports.default = SideMenu;