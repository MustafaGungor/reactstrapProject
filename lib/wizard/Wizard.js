"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");
var _reactstrap = require("reactstrap");var _reactstrap2 = _interopRequireDefault(_reactstrap);
var _Toast = require("../toast/Toast");var _Toast2 = _interopRequireDefault(_Toast);
var _Step = require("./Step");var _Step2 = _interopRequireDefault(_Step);
var _FaIcon = require("../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);
require("./Wizard.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

Wizard = function (_ShallowComponent) {_inherits(Wizard, _ShallowComponent);
    /**
                                                                              * PropTypes of the component.
                                                                              *
                                                                              * @static
                                                                              */










































    function Wizard(props) {_classCallCheck(this, Wizard);var _this = _possibleConstructorReturn(this, (Wizard.__proto__ || Object.getPrototypeOf(Wizard)).call(this,
        props));_this.__steps = [];_this.__refs = {};
        _this.state = {
            currentKey: props.currentKey,
            stateOfSteps: {} };return _this;

    }_createClass(Wizard, [{ key: "render", value: function render()


        {var _this2 = this;
            this.__steps = [];
            var components = _react2.default.Children.map(this.props.children,
            function (child, idx) {
                if (child.type === _Step2.default) {
                    var step = {};
                    step.title = child.props.title || "";
                    step.stepKey = child.props.stepKey || "step" + (idx + 1);
                    step.index = idx;
                    if (_this2.state.currentKey === undefined) {
                        _this2.state.currentKey = step.stepKey;
                    }
                    _this2.__steps.push(step);
                    return _react2.default.cloneElement(child, {
                        title: step.title,
                        stepKey: step.stepKey,
                        index: step.index,
                        ref: function ref(step) {
                            if (step) {
                                _this2.__refs[step.props.stepKey] = step;
                            }
                        } });

                }
            });

            return (
                _react2.default.createElement("div", { id: "wizard" },
                    this.__renderStepLayout(this.__steps),
                    this.__renderSteps(components),
                    this.__renderPager()));


        } }, { key: "__renderStepLayout", value: function __renderStepLayout(

        steps) {var _this3 = this;
            var layouts = [];
            var currentStep = this.__getCurrentStep();
            if (currentStep === undefined) {
                return layouts;
            }
            steps.map(function (step) {
                var className = "step btn btn-default ";
                var isPrevious = currentStep.index >= step.index;
                className += isPrevious ? "btn-primary" : "";
                layouts.push(
                _react2.default.createElement("li", {
                        key: step.index,
                        className: isPrevious ? "step-active" : "step-passive" },
                    _react2.default.createElement("a", { className: className, onClick: function onClick() {return _this3.__onChange(step);} },
                        step.index + 1),

                    _react2.default.createElement("div", { className: "label" }, step.title)));

            });
            return (
                _react2.default.createElement("ul", { className: "wizard" },
                    layouts));

        } }, { key: "__renderSteps", value: function __renderSteps(

        components) {var _this4 = this;
            var componentArr = [];
            if (!components) {
                return componentArr;
            }
            components.map(function (child) {
                var display = _this4.state.currentKey === child.props.stepKey ? "inherit" : "none";
                componentArr.push(
                _react2.default.createElement("div", {
                        key: child.props.stepKey,
                        style: { display: display } },
                    child));

            });
            return componentArr;
        } }, { key: "__renderPager", value: function __renderPager()

        {
            var currentStep = this.__getCurrentStep();
            if (currentStep === undefined) {
                return [];
            }
            var isComplete = currentStep.index === this.__steps.length - 1;
            var rightOnClick = isComplete ? this.__onComplete : this.__handleNextButtonClick;
            var rightIcon = isComplete ? "fa-check-circle" : "fa-arrow-right";
            var rightText = isComplete ? this.props.complete : this.props.next;
            // let pagerItem = (<Pager>
            //     <Pager.Item
            //         id="previous"
            //         previous
            //         style={{display: currentStep.index == 0 ? "none" : "inherit"}}
            //         onClick={this.__handlePreviousButtonClick}
            //     >
            //         <FaIcon code="fa-arrow-left"/>{this.props.previous}
            //     </Pager.Item>
            //     <Pager.Item
            //         id={isComplete ? "complete" : "next"}
            //         next
            //         onClick={rightOnClick}
            //     >
            //         {rightText}<FaIcon code={rightIcon}/>
            //     </Pager.Item>
            // </Pager>)
            var pagerItem = _react2.default.createElement("span", null, "pager yaz\u0131lacak");
            return pagerItem;
        } }, { key: "__handleNextButtonClick", value: function __handleNextButtonClick()

        {
            var currentStep = this.__getCurrentStep();
            if (currentStep === undefined) {
                return;
            }
            var nextStep = this.__steps[currentStep.index + 1];
            if (nextStep === undefined) {
                return;
            }
            this.__onChange(nextStep);
        } }, { key: "__handlePreviousButtonClick", value: function __handlePreviousButtonClick()

        {
            var currentStep = this.__getCurrentStep();
            if (currentStep === undefined) {
                return;
            }
            var previousStep = this.__steps[currentStep.index - 1];
            if (previousStep === undefined) {
                return;
            }
            this.__onChange(previousStep);
        } }, { key: "__getCurrentStep", value: function __getCurrentStep()

        {
            return _robeReactCommons.Arrays.getValueByKey(this.__steps, "stepKey", this.state.currentKey);
        } }, { key: "__onComplete", value: function __onComplete()

        {
            if (this.props.onComplete) {
                var currentStep = this.__getCurrentStep();
                if (currentStep === undefined) {
                    return;
                }
                var currentStepRef = this.__refs[currentStep.stepKey];
                if (currentStepRef === undefined) {
                    return;
                }
                var result = currentStepRef.isValid();
                if (result.message) {
                    this.__showToast(result.type, result.message);
                }
                if (!result.status) {
                    return;
                }

                var stateOfSteps = this.state.stateOfSteps;
                stateOfSteps[currentStep.stepKey] = currentStepRef.__getStateOfStep();
                this.props.onComplete(stateOfSteps);
            }
        } }, { key: "__onChange", value: function __onChange(

        step) {
            var currentStep = this.__getCurrentStep();
            if (currentStep === undefined || currentStep.stepKey === step.stepKey) {
                return;
            }
            var nextStep = step.index > currentStep.index + 1 ? this.__steps[currentStep.index + 1] : step;

            var nextStepRef = this.__refs[nextStep.stepKey];
            var currentStepRef = this.__refs[currentStep.stepKey];

            if (currentStepRef === undefined || nextStepRef === undefined) {
                return;
            }

            if (step.index > currentStep.index) {
                var result = currentStepRef.isValid();
                if (result.message) {
                    this.__showToast(result.type, result.message);
                }
                if (!result.status) {
                    return;
                }
            }

            if (this.props.changeState) {
                var state = { currentKey: nextStep.stepKey };
                var stateOfSteps = this.state.stateOfSteps;
                stateOfSteps[currentStep.stepKey] = currentStepRef.__getStateOfStep();
                this.setState(state, function () {
                    nextStepRef.__stateOfSteps(stateOfSteps);
                });
            }

            if (this.props.onChange) {
                this.props.onChange({
                    target: nextStep });

            }
        } }, { key: "__showToast", value: function __showToast(

        type, message) {
            switch (type) {
                case "error":
                    _Toast2.default.error(message);
                    break;
                case "info":
                    _Toast2.default.info(message);
                    break;
                case "success":
                    _Toast2.default.success(message);
                    break;
                case "warning":
                    _Toast2.default.warning(message);
                    break;
                default:
                    _Toast2.default.error(message);
                    break;}

        } }]);return Wizard;}(_robeReactCommons.ShallowComponent);Wizard.propTypes = { /**
                                                                                        * Current page index to render.
                                                                                        */currentKey: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]), /**
                                                                                                                                                                                                                  * provides to wizard change own state.
                                                                                                                                                                                                                  */changeState: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                  * Text for the next button.
                                                                                                                                                                                                                                                                  */next: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                             * Text for the previous button.
                                                                                                                                                                                                                                                                                                             */previous: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                                                                            * Text for the complete button.
                                                                                                                                                                                                                                                                                                                                                            */complete: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                                                                                           */onComplete: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                          */onChange: _react2.default.PropTypes.func };Wizard.defaultProps = { currentKey: undefined, changeState: true, next: _robeReactCommons.Application.i18n(Wizard, "wizard.Wizard", "next"), previous: _robeReactCommons.Application.i18n(Wizard, "wizard.Wizard", "previous"), complete: _robeReactCommons.Application.i18n(Wizard, "wizard.Wizard", "complete") };exports.default = Wizard;