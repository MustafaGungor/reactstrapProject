"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
var _reactDom = require("react-dom");

var _css = require("../util/css");
var _EventLayout = require("./EventLayout");var _EventLayout2 = _interopRequireDefault(_EventLayout);
require("./DragDropLayout.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * <DragDropLayout> is a layout component which provides drag and drop files on events on layer.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Also provide when clicked layer.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */var
DragDropLayout = function (_ShallowComponent) {_inherits(DragDropLayout, _ShallowComponent);



























    function DragDropLayout(props) {_classCallCheck(this, DragDropLayout);var _this = _possibleConstructorReturn(this, (DragDropLayout.__proto__ || Object.getPrototypeOf(DragDropLayout)).call(this,
        props));
        _this.__componentId = _robeReactCommons.Generator.guid();return _this;
    } /**
       * Properties of the component
       *
       * @static
       */_createClass(DragDropLayout, [{ key: "render", value: function render() {var _this2 = this;this.isEntered = 0;return (
                _react2.default.createElement(_EventLayout2.default, {
                        ref: function ref(el) {_this2.layoutDomRef = (0, _reactDom.findDOMNode)(el);},
                        className: "rb-drag-drop-box vertical-center",
                        id: this.__componentId,
                        onDragEnter: this.onDragEnter,
                        onDragLeave: this.onDragLeave,
                        onDrop: this.onDrop,
                        onClick: this.props.onClick,
                        style: this.props.style },

                    this.props.children));


        }
        /**
           * triggered when a draggable element drag inside of the Layout.
           */ }, { key: "onDragEnter", value: function onDragEnter(
        e) {
            this.isEntered += 1;
            _css.ClassName.add(this.layoutDomRef, "rb-dragged");
            _css.Style.add(this.layoutDomRef, this.props.draggedStyle);
        }
        /**
           * triggered when a draggable element drag out of the Layout.
           */ }, { key: "onDragLeave", value: function onDragLeave(
        e) {
            this.isEntered -= 1;
            if (this.isEntered <= 0) {
                _css.ClassName.remove(this.layoutDomRef, "rb-dragged");
                _css.Style.remove(this.layoutDomRef, this.props.draggedStyle);
                _css.Style.add(this.layoutDomRef, this.props.style);
            }
        }
        /**
           * triggered when a draggable element is dropped in the layout.
           */ }, { key: "onDrop", value: function onDrop(
        e) {
            this.isEntered = 0;
            _css.ClassName.remove(this.layoutDomRef, "rb-dragged");
            _css.Style.remove(this.layoutDomRef, this.props.draggedStyle);
            _css.Style.add(this.layoutDomRef, this.props.style);
            if (e.dataTransfer) {
                this.props.onDrop({
                    target: e.dataTransfer });

            }
        } }]);return DragDropLayout;}(_robeReactCommons.ShallowComponent);DragDropLayout.propTypes = { /**
                                                                                                        * Used to change current styles of DragDropLayout.
                                                                                                        */style: _react2.default.PropTypes.object, /**
                                                                                                                                                    * if layout container clicked then triggered.
                                                                                                                                                    */onClick: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                * when a draggable element is dropped in the layout container element.
                                                                                                                                                                                                */onDrop: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                           * Used to change the styles of the DragDropLayout  when anything dragged  on.
                                                                                                                                                                                                                                           */draggedStyle: _react2.default.PropTypes.object };exports.default = DragDropLayout;