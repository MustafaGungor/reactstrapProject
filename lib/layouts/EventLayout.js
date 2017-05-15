"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

EventLayout = function (_ShallowComponent) {_inherits(EventLayout, _ShallowComponent);

































    function EventLayout(props) {_classCallCheck(this, EventLayout);return _possibleConstructorReturn(this, (EventLayout.__proto__ || Object.getPrototypeOf(EventLayout)).call(this,
        props));
    } /**
       * Properties of the component
       *
       * @static
       */_createClass(EventLayout, [{ key: "render", value: function render() {var _props = this.props,onDrop = _props.onDrop,props = _objectWithoutProperties(_props, ["onDrop"]);return (
                _react2.default.createElement("div", _extends({},
                    props, {
                        onDragStart: this.onDragStart,
                        onDragEnter: this.onDragEnter,
                        onDragOver: this.onDragOver,
                        onDragLeave: this.onDragLeave,
                        onDrop: onDrop ? this.onDrop : null }),

                    this.props.children));


        }

        /**
           * Called when the user starts to drag a <p> element
           * @param e
           * @returns {boolean}
           */ }, { key: "onDragStart", value: function onDragStart(
        e) {
            e.preventDefault();
            var result = false;
            if (this.props.onDragStart) {
                result = this.props.onDragStart(e);
            }
            return result;
        }
        /**
           * Called when a draggable element enters a drop target:
           * @param e
           * @returns {boolean}
           */ }, { key: "onDragEnter", value: function onDragEnter(
        e) {
            e.preventDefault();
            var result = false;
            if (this.props.onDragEnter) {
                result = this.props.onDragEnter(e);
            }
            return result;
        }
        /**
           * Called when an element is being dragged over a drop target
           * @param e
           * @returns {boolean}
           */ }, { key: "onDragOver", value: function onDragOver(
        e) {
            e.preventDefault();
            var result = false;
            if (this.props.onDragOver) {
                result = this.props.onDragOver(e);
            }
            return result;
        }

        /**
           * Called when a draggable element is moved out of a drop target
           * @param e
           * @returns {boolean}
           */ }, { key: "onDragLeave", value: function onDragLeave(
        e) {
            e.preventDefault();
            var result = false;
            if (this.props.onDragLeave) {
                result = this.props.onDragLeave(e);
            }
            return result;
        }
        /**
           * Called when a draggable element is dropped in a <div> element
           * @param e
           * @returns {boolean}
           */ }, { key: "onDrop", value: function onDrop(
        e) {
            e.preventDefault();
            var result = false;
            if (this.props.onDrop) {
                result = this.props.onDrop(e);
            }
            return result;
        } }]);return EventLayout;}(_robeReactCommons.ShallowComponent);EventLayout.propTypes = { /**
                                                                                                  * The onclick event occurs when the element clicked.
                                                                                                  */onClick: _react2.default.PropTypes.func, /**
                                                                                                                                              * The ondrop event occurs when a draggable element or text selection is dropped on a valid drop target.
                                                                                                                                              */onDrop: _react2.default.PropTypes.func, /**
                                                                                                                                                                                         * The onDragLeave event occurs when a draggable element or text selection leaves a valid drop target.
                                                                                                                                                                                         */onDragLeave: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                         * when an element is being dragged over the layout container element.
                                                                                                                                                                                                                                         */onDragOver: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                        * when a draggable element enters the layout container element.
                                                                                                                                                                                                                                                                                        */onDragEnter: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                        * when the user starts to drag the layout container element.
                                                                                                                                                                                                                                                                                                                                        */onDragStart: _react2.default.PropTypes.func };exports.default = EventLayout;