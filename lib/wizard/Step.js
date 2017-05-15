"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

Step = function (_ShallowComponent) {_inherits(Step, _ShallowComponent);























    function Step(props) {_classCallCheck(this, Step);var _this = _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this,
        props));_this.__refs = {};return _this;
    }_createClass(Step, [{ key: "render", value: function render()

        {var _this2 = this;
            var components = _react2.default.Children.map(this.props.children,
            function (child, idx) {
                return _react2.default.cloneElement(child, {
                    ref: _this2.__setRef(idx, child.ref) });

            });

            return _react2.default.createElement("div", null, components);
        } }, { key: "__getRef", value: function __getRef(

        idx) {
            return this.refs[idx];
        } }, { key: "__setRef", value: function __setRef(

        idx, ref) {var _this3 = this;
            if (!ref) {
                this.__refs[idx] = idx;
                return idx;
            } else
            if (_robeReactCommons.Assertions.isString(ref)) {
                this.__refs[idx] = ref;
                return ref;
            } else if (_robeReactCommons.Assertions.isFunction(ref)) {
                return function (el) {
                    if (el) {
                        ref(el);
                        _this3.__refs[idx] = el;
                    }
                };
            }
        } }, { key: "__getStateOfStep", value: function __getStateOfStep()


        {
            var stateOfStep = {};
            for (var i in this.__refs) {
                var ref = this.__getRef(this.__refs[i]);
                if (!ref || !ref.state) {
                    continue;
                }
                stateOfStep = _robeReactCommons.Maps.mergeDeep(stateOfStep, ref.state || {});
            }
            return stateOfStep;
        } }, { key: "__stateOfSteps", value: function __stateOfSteps(

        stateOfSteps) {
            for (var i in this.__refs) {
                var ref = this.__getRef(this.__refs[i]);
                if (ref && ref.stateOfSteps) {
                    ref.stateOfSteps(stateOfSteps);
                }
            }
        } }, { key: "isValid", value: function isValid()

        {
            var result = { message: undefined, status: true, type: "error" };
            for (var i in this.__refs) {
                var ref = this.__getRef(this.__refs[i]);
                if (ref && ref.isValid) {
                    var componentResult = ref.isValid();
                    if (componentResult === undefined) {
                        continue;
                    } else
                    if (typeof componentResult === "boolean") {
                        result.status = componentResult;
                    } else {
                        result.message = componentResult.message || undefined;
                        result.type = componentResult.type || "error";
                        if (typeof componentResult.status === "boolean") {
                            result.status = componentResult.status;
                        } else
                        {
                            result.status = true;
                        }
                    }
                }
            }
            return result;
        } }]);return Step;}(_robeReactCommons.ShallowComponent);Step.propTypes = { /**
                                                                                    *
                                                                                    */title: _react2.default.PropTypes.string, /**
                                                                                                                                *
                                                                                                                                */currentKey: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]), /**
                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                          */index: _react2.default.PropTypes.number };Step.defaultProps = { title: undefined, stepKey: undefined, index: 0 };exports.default = Step;