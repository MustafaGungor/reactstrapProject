"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
var _reactstrap = require("reactstrap");
var _FaIcon = require("../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);
require("./StackLayout.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

StackLayout = function (_ShallowComponent) {_inherits(StackLayout, _ShallowComponent);_createClass(StackLayout, null, [{ key: "onItemRender",

        /**
                                                                                                                                               * Properties of the component
                                                                                                                                               *
                                                                                                                                               * @static
                                                                                                                                               */value: function onItemRender(









































































        item, displayType) {
            if (displayType === "list") {
                return _react2.default.createElement("span", null, " ", _react2.default.createElement("span", { style: { fontSize: "18px" } }, " ", item.key + " "), item.value);
            }
            return (
                _react2.default.createElement("span", null,
                    _react2.default.createElement("span", { style: { fontSize: "24px" } }, " ", item.key),
                    _react2.default.createElement("br", null),
                    item.value));

        } /**
           * defaultProps
           * @static
           */ }]);function StackLayout(props) {_classCallCheck(this, StackLayout);var _this = _possibleConstructorReturn(this, (StackLayout.__proto__ || Object.getPrototypeOf(StackLayout)).call(this,
        props));

        _this.onClickDisplayList = _this.onClickDisplay.bind(_this, "list");
        _this.onClickDisplayThumbnail = _this.onClickDisplay.bind(_this, "thumbnail");
        _this.state = {
            display: props.display,
            items: props.items };return _this;

    }_createClass(StackLayout, [{ key: "render", value: function render()

        {
            var component = this.__renderList(this.state.items);
            var panel =
            _react2.default.createElement("div", null,
                _react2.default.createElement("h3", null, this.panelToolbar()),
                _react2.default.createElement("div", {
                        className: "StackLayout-container",
                        onClick: this.onClick,
                        onDragStart: this.onDragStart,
                        onDragEnter: this.onDragEnter,
                        onDragOver: this.onDragOver,
                        onDragLeave: this.onDragLeave,
                        onDrop: this.onDrop,
                        style: this.props.style },

                    component));




            if (!this.props.toolbar) {
                return panel;
            }
            switch (this.props.toolbarPosition) {
                case "top":
                    return (
                        _react2.default.createElement("div", null,
                            this.props.toolbar,
                            panel));


                case "left":
                    return (
                        _react2.default.createElement("div", { className: "container-fluid" },
                            _react2.default.createElement("div", { className: "row" },
                                _react2.default.createElement("div", { className: "col" }, this.props.toolbar),
                                _react2.default.createElement("div", { className: "col" }, panel))));



                case "right":
                    return (
                        _react2.default.createElement("div", { className: "container-fluid" },
                            _react2.default.createElement("div", { className: "row" },
                                _react2.default.createElement("div", { className: "col" }, panel),
                                _react2.default.createElement("div", { className: "col" }, this.props.toolbar))));



                default:
                    return (
                        _react2.default.createElement("div", null,
                            panel,
                            this.props.toolbar));}



        } }, { key: "panelToolbar", value: function panelToolbar()

        {
            var listClassName = "btn btn-default " + (this.state.display === "list" ? "active" : "");
            var thumbnailClassName = "btn btn-default " + (this.state.display === "thumbnail" ? "active" : "");
            return [
            this.props.label,
            _react2.default.createElement("div", { key: "toolbar-btn-group-pull-right", className: "btn-group pull-right" },
                _react2.default.createElement("button", { type: "button", className: listClassName, onClick: this.onClickDisplayList },
                    _react2.default.createElement(_FaIcon2.default, { code: "fa-list" })),

                _react2.default.createElement("button", { type: "button", className: thumbnailClassName, onClick: this.onClickDisplayThumbnail },
                    _react2.default.createElement(_FaIcon2.default, { code: "fa-th-large" }))),


            _react2.default.createElement("div", { key: "toolbar-clearfix", className: "clearfix" })];

        } }, { key: "__renderList", value: function __renderList(
        items) {
            var components = [];
            for (var i = 0; i < items.length; i++) {
                components.push(this.__renderListItem(items[i]));
            }
            return (
                _react2.default.createElement(_reactstrap.Row, null,
                    components));


        } }, { key: "__renderListItem", value: function __renderListItem(

        item) {
            var className = null;
            var itemJson = JSON.stringify(item);
            switch (this.state.display) {
                case "thumbnail":
                    className = "Stacklayout-thumbnail";
                    return (
                        _react2.default.createElement(_reactstrap.Col, {
                                xs: 6,
                                md: 4,
                                className: className,
                                onClick: this.onItemClick,
                                data: itemJson,
                                key: itemJson },

                            this.props.onItemRender(item, this.state.display)));


                default:
                    className = "Stacklayout-list no-float";
                    return (
                        _react2.default.createElement(_reactstrap.Col, {
                                md: 12,
                                className: className,
                                onClick: this.onItemClick,
                                data: itemJson,
                                key: itemJson },

                            this.props.onItemRender(item, this.state.display)));}



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
                result = this.props.onDragStart.call(this, e);
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
                result = this.props.onDragEnter.call(this, e);
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
                result = this.props.onDragOver.call(this, e);
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
                result = this.props.onDragLeave.call(this, e);
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
                result = this.props.onDrop.call(this, e);
            }
            return result;
        }
        /* eslint-disable no-underscore-dangle */
        /**
                                                   * @param item
                                                   * @param e
                                                   * @returns {boolean}
                                                   */ }, { key: "onItemClick", value: function onItemClick(
        e) {
            var dataElement = e.target;
            while (dataElement.getAttribute("data") == null) {
                dataElement = dataElement.parentElement;
            }
            if (this.props.onItemClick) {
                this.props.onItemClick(JSON.parse(dataElement.getAttribute("data")));
            }
            return true;
        } }, { key: "onClickDisplay", value: function onClickDisplay(

        display) {
            this.setState({
                display: display });

        }
        /**
           * Called when a element is clicked
           * @param e
           * @returns {boolean}
           */ }, { key: "onClick", value: function onClick(
        e) {
            if (_robeReactCommons.Assertions.isArray(e._dispatchInstances)) {
                return false;
            }
            var result = false;
            if (this.props.onClick) {
                result = this.props.onClick.call(this, e);
            }
            return result;
        } }]);return StackLayout;}(_robeReactCommons.ShallowComponent);StackLayout.propTypes = { /**
                                                                                                  * Presentation mode list or thumbnail.
                                                                                                  */display: _react2.default.PropTypes.oneOf(["list", "thumbnail"]), /**
                                                                                                                                                                      * Header of Layout
                                                                                                                                                                      */label: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                  * Layout Container style
                                                                                                                                                                                                                  */style: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                              * will Shown given items which type is an array
                                                                                                                                                                                                                                                              */items: _react2.default.PropTypes.array, /**
                                                                                                                                                                                                                                                                                                         * Add Toolbar to layout . Default position is bottom
                                                                                                                                                                                                                                                                                                         */toolbar: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                                                                                                                       * toolbar position
                                                                                                                                                                                                                                                                                                                                                       */toolbarPosition: _react2.default.PropTypes.oneOf(["bottom", "top", "left", "right"]), /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                * render item by class which is using this layout.
                                                                                                                                                                                                                                                                                                                                                                                                                                                */onItemRender: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * if layout container clicked then triggered.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */onClick: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * if any item selection changed.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */onItemClick: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * when a draggable element is dropped in the layout container element.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */onDrop: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * when a draggable element is moved out of the layout container element.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */onDragLeave: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * when an element is being dragged over the layout container element.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */onDragOver: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * when a draggable element enters the layout container element.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */onDragEnter: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * when the user starts to drag the layout container element.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */onDragStart: _react2.default.PropTypes.func };StackLayout.defaultProps = { buttonToolbar: null, toolbarPosition: "bottom", display: "list", style: {}, items: [], onItemRender: StackLayout.onItemRender };exports.default = StackLayout;