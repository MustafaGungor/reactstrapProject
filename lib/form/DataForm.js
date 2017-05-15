"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");





var _reactstrap = require("reactstrap");


var _ComponentManager = require("./ComponentManager");var _ComponentManager2 = _interopRequireDefault(_ComponentManager);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

DataForm = function (_ShallowComponent) {_inherits(DataForm, _ShallowComponent);





















































    /**
                                                                                  *
                                                                                  * @type {{}}
                                                                                  * @private
                                                                                  */ /**
                                                                                      * propTypes
                                                                                      * @static
                                                                                      */









    function DataForm(props) {_classCallCheck(this, DataForm);var _this = _possibleConstructorReturn(this, (DataForm.__proto__ || Object.getPrototypeOf(DataForm)).call(this,
        props));_initialiseProps.call(_this);
        _this.state = {};
        _this.__init(props, props.defaultValues);return _this;
    } /**
       *
       * @type {{}}
       * @private
       */ /**
           * defaultProps
           * @static
           */_createClass(DataForm, [{ key: "componentWillReceiveProps", value: function componentWillReceiveProps(nextProps) {this.__init(nextProps);} }, { key: "__init", value: function __init(nextProps, defaultValues) {this.__columnSize = 12 / nextProps.columnsSize;
            var fields = nextProps.fields;
            var props = nextProps.propsOfFields;
            for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                var name = field.name;
                if (!name) {
                    throw new Error("Field name must be defined ! ");
                }

                var prop = _robeReactCommons.Objects.clone(field, [Array]);
                var config = _robeReactCommons.Objects.mergeClone(props[name], prop, [Array]);
                if (defaultValues) {
                    config.value = defaultValues[name];
                }
                this.__setPropsOfField(name, config, this.state);
            }
        } }, { key: "render", value: function render()
        {
            var form =
            _react2.default.createElement(_reactstrap.Form, { onKeyPress: this.noenter },
                _react2.default.createElement(_reactstrap.Row, null,
                    this.__createForm(this.props.fields)));



            return form;
        } }, { key: "noenter", value: function noenter(

        e) {
            if (e.key == "Enter" && this.visibleFields === 1) {
                e.preventDefault();
                e.stopPropagation();
            }
            return false;
        }

        /**
           * Creates components which will render in Form Data by own fields and field props
           * @param {Array<Map>} fields
           * @param {Object} components
           * @returns {Array}
           * @private
           */













        /**
               * Creates component which will render in Form Data by fields and field props
               * @param {Map} field
               * @param {Object} config
               * @returns {Object}
               * @private
               */






















        /**
                   * Checks validations of all components in form data
                   * @returns {boolean}
                   */ }, { key: "__setPropsOfFields",










        /**
                                                       * @param name
                                                       * @param props
                                                       * @param state
                                                       * @private
                                                       */value: function __setPropsOfFields(
        propsOfFields, state) {
            if (_robeReactCommons.Assertions.isObject(propsOfFields)) {
                for (var targetName in propsOfFields) {
                    if (_robeReactCommons.Objects.hasProperty(propsOfFields, targetName)) {
                        this.__setPropsOfField(targetName, propsOfFields[targetName], state);
                    }
                }
            }
        }

        /**
           * @param name
           * @param props
           * @param state
           * @private
           */ }, { key: "__setPropsOfField", value: function __setPropsOfField(
        name, props, state) {
            if (!this.__props[name]) this.__props[name] = {};
            if (props) {
                for (var targetName in props) {
                    if (_robeReactCommons.Objects.hasProperty(props, targetName)) {
                        switch (targetName) {
                            case "value":
                                state[name] = props[targetName];
                                this.__props[name][targetName] = props[targetName];
                                break;
                            case "onChange":
                                this.__onChanges[name] = props[targetName];
                                break;
                            default:
                                this.__props[name][targetName] = props[targetName];}

                    }
                }
            }
        }

        /**
           * Called when any component changed.
           * @param name
           * @param e
           * @returns {boolean}
           */ }, { key: "onChange", value: function onChange(
        e) {
            var me = this;
            var name = e.target.name;
            var value = e.target.parsedValue !== undefined ? e.target.parsedValue : e.target.value;
            var state = {};
            state[name] = value;

            if (this.props.onChange) {
                if (this.props.onChange(e) === false) {
                    return false;
                }
            }

            if (this.__onChanges[name]) {
                var result = this.__onChanges[name](e, function (result2) {
                    me.__setPropsOfFields(result2, state);
                    me.setState(state);
                    return false;
                });
                if (result) {
                    this.__setPropsOfFields(result, state);
                }
                if (result !== false) {
                    this.setState(state);
                }
            } else {
                this.setState(state);
            }
            return true;
        }

        /**
           * Checks validation of data and return valid data. If data is not valid then return false
           * @returns {boolean}
           */ }, { key: "submit", value: function submit()
        {
            var valid = this.isValid();
            return valid ? this.state : false;
        } }]);return DataForm;}(_robeReactCommons.ShallowComponent);DataForm.propTypes = { /**
                                                                                            * Style map for the component.
                                                                                            */style: _react2.default.PropTypes.object, /**
                                                                                                                                        * Holds field properties like `name`, `label`, `type`, `visible`, `editable`, `readable`, `label`
                                                                                                                                        */fields: _react2.default.PropTypes.array.isRequired, /**
                                                                                                                                                                                               * Holds extra props of components if need.
                                                                                                                                                                                               */propsOfFields: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                   * Form is collapsible or not
                                                                                                                                                                                                                                                   */collapsible: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                   * Form is defaultExpanded or not
                                                                                                                                                                                                                                                                                                   */defaultExpanded: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                       * Form side by side input columns size
                                                                                                                                                                                                                                                                                                                                                      */columnsSize: _react2.default.PropTypes.oneOf([1, 2, 3, 4, 6, 12]), /**
                                                                                                                                                                                                                                                                                                                                                                                                                            * Map of the default values for the component.
                                                                                                                                                                                                                                                                                                                                                                                                                            */defaultValues: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *Defines the display style of the Validation message.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */validationDisplay: _react2.default.PropTypes.oneOf(["overlay", "block"]) };DataForm.defaultProps = { label: null, collapsible: false, defaultExpanded: true, columnsSize: 1, propsOfFields: {}, validationDisplay: "block" };var _initialiseProps = function _initialiseProps() {var _this2 = this;this.__props = {};this.__onChanges = {};this.__refMap = {};this.__createForm = function (fields) {var items = [];_this2.visibleFields = 0;for (var i = 0; i < fields.length; i++) {var field = fields[i];if (!field.name) {throw new Error("Field name must define !");}items.push(_this2.__createElement(field));}return items;};this.__createElement = function (field) {if (field.visible === false) {return null;}_this2.visibleFields++;var name = field.name;var props = _this2.__props[name];var Component = _ComponentManager2.default.getComponent(field.type);return _react2.default.createElement(_reactstrap.Col, { key: name + "_key", md: _this2.__columnSize }, _react2.default.createElement(Component, _extends({ ref: function ref(component) {_this2.__refMap[name + "Ref"] = component;} }, props, { onChange: _this2.onChange, value: _this2.state[name], validationDisplay: _this2.props.validationDisplay })));};this.isValid = function () {var hasIsValidObjects = _robeReactCommons.Maps.getObjectsWhichHasKeyInMap(_this2.__refMap, "isValid", "function");for (var i = 0; i < hasIsValidObjects.length; i++) {if (hasIsValidObjects[i].isValid() !== true) {return false;}}return true;};};exports.default = DataForm;