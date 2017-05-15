"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactDom = require("react-dom");var _reactDom2 = _interopRequireDefault(_reactDom);
var _robeReactCommons = require("robe-react-commons");
var _reactstrap = require("reactstrap");
var _FaIcon = require("../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);
var _NotificationItem = require("./NotificationItem");var _NotificationItem2 = _interopRequireDefault(_NotificationItem);
require("./Notification.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Notification is a view component for representing all notifications via a clickable icon and count label.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Also a popup will show the details of the notifications.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @export
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @class Notification
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @extends {ShallowComponent}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */var
Notification = function (_ShallowComponent) {_inherits(Notification, _ShallowComponent);

    /**
                                                                                          * PropTypes of the component.
                                                                                          *
                                                                                          * @static
                                                                                          */






















    function Notification(props) {_classCallCheck(this, Notification);var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this,
        props));
        _this.state = {
            open: true,
            data: _this.props.data };return _this;

    }_createClass(Notification, [{ key: "render", value: function render()


        {
            var open = this.state.open ? "dropdown open" : "dropdown";
            var notificationButtonClass = this.state.open ? "fa-caret-down" : "fa-bell";
            open += this.props.className ? " " + this.props.className : "";
            return (
                _react2.default.createElement(_reactstrap.Col, { className: open, "aria-expanded": true },
                    _react2.default.createElement(_reactstrap.Button, { bsStyle: "primary", id: "notify", className: "btn-header-button btn-header", role: "button", onClick: this.__onNotificationOpenClick },
                        _react2.default.createElement(_FaIcon2.default, { code: notificationButtonClass, size: "fa-lg" }), " ", this.state.data.length),

                    _react2.default.createElement("ul", { id: "notify", className: "dropdown-menu notifications", role: "menu" },
                        _react2.default.createElement("span", { className: "menu-title" }, this.props.title),
                        _react2.default.createElement("li", { id: "notify", className: "divider" }),
                        this.__renderNotificationItems(),
                        this.__renderFooter())));


        } }, { key: "__renderFooter", value: function __renderFooter()

        {
            if (this.props.detailsClick === undefined) {
                return undefined;
            }
            return (
                _react2.default.createElement("div", null,
                    _react2.default.createElement("li", { id: "notify", className: "divider" }),
                    _react2.default.createElement("div", { className: "notification-footer" },
                        _react2.default.createElement("i", {
                                className: "menu-title pull-right",
                                onClick: this.__detailsClick },

                            this.props.detailsText,
                            _react2.default.createElement(_FaIcon2.default, { code: "fa-arrow-circle-right", size: "fa-lg" })))));




        } }, { key: "__renderNotificationItems", value: function __renderNotificationItems()

        {
            if (this.state.data.length > 0) {
                var notifications = [];
                var items = this.state.data;

                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    notifications.push(
                    _react2.default.createElement(_NotificationItem2.default, {
                        key: i,
                        item: item,
                        onRead: this.props.onRead }));


                }
                return _react2.default.createElement(_reactstrap.Col, { className: "notifications-wrapper" }, notifications);
            }
            return (
                _react2.default.createElement(_reactstrap.Col, null,
                    _react2.default.createElement("span", { style: { padding: "10px" } },
                        _robeReactCommons.Application.i18n(undefined, "notification.Notification", "noContent"))));


        } }, { key: "__onNotificationOpenClick", value: function __onNotificationOpenClick(


        e) {
            this.setState({
                open: !this.state.open });


            e.preventDefault();
        } }, { key: "__notificationDetailClick", value: function __notificationDetailClick(

        e) {
            this.__onNotificationOpenClick(e);
            e.preventDefault();
        } }, { key: "__handleClick", value: function __handleClick(


        e) {
            if (_reactDom2.default.findDOMNode(this).contains(e.target)) {// eslint-disable-line
                return;
            }

            if (this.state.open) {
                this.setState({
                    open: false });

            }
        } }, { key: "componentDidMount", value: function componentDidMount()

        {
            document.addEventListener("click", this.__handleClick, false);
        } }, { key: "componentWillUnmount", value: function componentWillUnmount()

        {
            document.removeEventListener("click", this.__handleClick, false);
        } }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

        nextProps) {
            this.setState({
                data: nextProps.data || [],
                open: nextProps.open });

        } }]);return Notification;}(_robeReactCommons.ShallowComponent);Notification.propTypes = { /**
                                                                                                    * Click event for the notification details.
                                                                                                    * Footer link will be rendered according to this property.
                                                                                                    */detailsClick: _react2.default.PropTypes.func, /**
                                                                                                                                                     * Text for the notification details link.
                                                                                                                                                     */detailsText: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                       * Title for the notification popup.
                                                                                                                                                                                                       */title: _react2.default.PropTypes.string };Notification.defaultProps = { title: _robeReactCommons.Application.i18n(Notification, "notification.Notification", "title"), detailsText: _robeReactCommons.Application.i18n(Notification, "notification.Notification", "detailsText") };exports.default = Notification;