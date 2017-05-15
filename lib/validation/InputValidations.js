"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _robeReactCommons = require("robe-react-commons");
var _es6TemplateStrings = require("es6-template-strings");var _es6TemplateStrings2 = _interopRequireDefault(_es6TemplateStrings);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var
InputValidations =
function InputValidations() {_classCallCheck(this, InputValidations);this.

    required = function (value, code) {
        var message = _robeReactCommons.Application.i18n(undefined, "validation.InputValidations", "required");
        /* eslint-disable no-eval */
        return value === undefined || value === null || value === "" || value.length === 0 ?
        (0, _es6TemplateStrings2.default)(message, {
            value: value,
            code: code }) :
        undefined;
    };this.
    htmlRequired = function (value, code) {
        var message = _robeReactCommons.Application.i18n(undefined, "validation.InputValidations", "required");
        /* eslint-disable no-eval */
        return value === undefined || value === null || value === "" || String(value) === "<div><br></div>" ?
        (0, _es6TemplateStrings2.default)(message, {
            value: value,
            code: code }) :
        undefined;
    };this.
    minValue = function (minValue, value, code) {
        var message = _robeReactCommons.Application.i18n(undefined, "validation.InputValidations", "minValue");
        /* eslint-disable no-eval */
        return value === undefined || value === null || value < minValue ?
        (0, _es6TemplateStrings2.default)(message, {
            minValue: minValue,
            value: value,
            code: code }) :
        undefined;
    };this.
    maxValue = function (maxValue, value, code) {
        var message = _robeReactCommons.Application.i18n(undefined, "validation.InputValidations", "maxValue");

        /* eslint-disable no-eval */
        return value === undefined || value === null || value > maxValue ?
        (0, _es6TemplateStrings2.default)(message, {
            maxValue: maxValue,
            value: value,
            code: code }) :
        undefined;
    };this.
    minLength = function (min, value, code) {
        var message = _robeReactCommons.Application.i18n(undefined, "validation.InputValidations", "minLength");
        var valueLength = value === undefined || value === null ? 0 : value.length;
        /* eslint-disable no-eval */
        return valueLength < min ?
        (0, _es6TemplateStrings2.default)(message, {
            min: min,
            value: value,
            code: code }) :
        undefined;
    };this.
    maxLength = function (max, value, code) {
        var message = _robeReactCommons.Application.i18n(undefined, "validation.InputValidations", "maxLength");
        var valueLength = value === undefined || value === null ? 0 : value.length;
        /* eslint-disable no-eval */
        var result = valueLength > max ?
        (0, _es6TemplateStrings2.default)(message, {
            max: max,
            value: value,
            code: code }) :
        undefined;
        return result;
    };this.
    regex = function (regex, value, code) {
        var message = _robeReactCommons.Application.i18n(undefined, "validation.InputValidations", "regex");
        /* eslint-disable no-eval */
        return !new RegExp(regex).test(value) ?
        (0, _es6TemplateStrings2.default)(message, {
            value: value,
            code: code,
            regex: regex }) :
        undefined;
    };};exports.default =



new InputValidations();