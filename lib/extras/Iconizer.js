"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
var _FaIcon = require("../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

Iconizer = function (_ShallowComponent) {_inherits(Iconizer, _ShallowComponent);function Iconizer() {_classCallCheck(this, Iconizer);return _possibleConstructorReturn(this, (Iconizer.__proto__ || Object.getPrototypeOf(Iconizer)).apply(this, arguments));}_createClass(Iconizer, [{ key: "render", value: function render()
















        {
            return _react2.default.createElement("span", null,
                this.__renderLinks());

        } }, { key: "__renderLinks", value: function __renderLinks()

        {
            var links = this.props.links;
            var linksFormatted = [];
            for (var i = 0; i < links.length; i++) {
                linksFormatted.push(
                _react2.default.createElement("a", { key: i + 1, href: links[i], target: "_blank" },
                    _react2.default.createElement(_FaIcon2.default, { code: this.__getIconOfLink(links[i]), size: this.props.size ? "fa-" + this.props.size : undefined })));


            }
            return linksFormatted;
        } }, { key: "__getIconOfLink", value: function __getIconOfLink(

        link) {
            if (link.toLowerCase().indexOf("facebook.com/") != -1) return "fa-facebook-official";
            if (link.toLowerCase().indexOf("twitter.com/") != -1) return "fa-twitter-square";
            if (link.toLowerCase().indexOf("linkedin.com/") != -1) return "fa-linkedin-square";
            if (link.toLowerCase().indexOf("plus.google.com/") != -1) return "fa-google-plus-official";
            if (link.toLowerCase().indexOf("youtube.com/") != -1) return "fa-youtube-square";
            if (link.toLowerCase().indexOf("instagram.com/") != -1) return "fa-instagram";
            if (link.toLowerCase().indexOf("tumblr.com/") != -1) return "fa-tumblr-square";
            if (link.toLowerCase().indexOf("snapchat.com/") != -1) return "fa-snapchat-square";
            if (link.toLowerCase().indexOf("flickr.com/") != -1) return "fa-flickr";
            if (link.toLowerCase().indexOf("git.com/") != -1) return "fa-git-square";
            if (link.toLowerCase().indexOf("github.com/") != -1) return "fa-github-square";
            if (link.toLowerCase().indexOf("hacker-news.com/") != -1) return "fa-hacker-news";
            if (link.toLowerCase().indexOf("jsfiddle.com/") != -1) return "fa-jsfiddle";
            if (link.toLowerCase().indexOf("paypal.com/") != -1) return "fa-paypal";
            if (link.toLowerCase().indexOf("pinterest.com/") != -1) return "fa-pinterest-square";
            if (link.toLowerCase().indexOf("quora.com/") != -1) return "fa-quora";
            if (link.toLowerCase().indexOf("reddit.com/") != -1) return "fa-reddit-square";
            if (link.toLowerCase().indexOf("skype.com/") != -1) return "fa-skype";
            if (link.toLowerCase().indexOf("slideshare.com/") != -1) return "fa-slideshare";
            if (link.toLowerCase().indexOf("soundcloud.com/") != -1) return "fa-soundcloud-square";
            if (link.toLowerCase().indexOf("stack-overflow.com/") != -1) return "fa-stack-overflow";
            if (link.toLowerCase().indexOf("stack-exchange.com/") != -1) return "fa-stack-exchange";
            if (link.toLowerCase().indexOf("stumbleupon.com/") != -1) return "fa-stumbleupon-circle";
            if (link.toLowerCase().indexOf("vimeo.com/") != -1) return "fa-vimeo-square";
            if (link.toLowerCase().indexOf("trello.com/") != -1) return "fa-trello";
            return "fa-question-circle-o";
        } }]);return Iconizer;}(_robeReactCommons.ShallowComponent);Iconizer.propTypes = { /**
                                                                                            * Links array
                                                                                            */links: _react2.default.PropTypes.array, /**
                                                                                                                                       * Icons size
                                                                                                                                       */size: _react2.default.PropTypes.oneOf(["sm", "lg", "2x", "3x", "4x", "5x"]) };Iconizer.defaultProps = { links: [] };exports.default = Iconizer;