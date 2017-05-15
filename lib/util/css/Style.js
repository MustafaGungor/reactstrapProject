"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _robeReactCommons = require("robe-react-commons");function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var

Style = function () {function Style() {_classCallCheck(this, Style);}_createClass(Style, null, [{ key: "add",
        /**
                                                                                                               * add new styles to the dom element
                                                                                                               * @param domNode
                                                                                                               * @param style
                                                                                                               */value: function add(
        domNode, style) {
            if (!domNode) return false;
            if (style) {
                if (!domNode.style) {
                    domNode.style = {};
                }
                _robeReactCommons.Maps.forEach(style, function (value, key) {
                    domNode.style[key] = value;
                });
                return domNode.style;
            }
            return false;
        }

        /**
           * remove new style to the dom element
           * @param domNode
           * @param style
           * @return { Object | false }
           */ }, { key: "remove", value: function remove(
        domNode, style) {
            if (style) {
                if (!domNode.style) {
                    return;
                }
                _robeReactCommons.Maps.forEach(style, function (value, key) {
                    delete domNode.style[key];
                });
            }
            if (domNode) {
                return domNode.style;
            }
        } }]);return Style;}();exports.default = Style;