"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _robeReactCommons = require("robe-react-commons");



var _reactstrap = require("reactstrap");






var _Button = require("../buttons/Button");var _Button2 = _interopRequireDefault(_Button);
var _DataForm = require("./DataForm");var _DataForm2 = _interopRequireDefault(_DataForm);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var


ModalDataForm = function (_ShallowComponent) {_inherits(ModalDataForm, _ShallowComponent);

    /**
                                                                                            * propTypes
                                                                                            * @static
                                                                                            */























































    function ModalDataForm(props) {_classCallCheck(this, ModalDataForm);var _this = _possibleConstructorReturn(this, (ModalDataForm.__proto__ || Object.getPrototypeOf(ModalDataForm)).call(this,
        props));_this.























        __renderFooterButtons = function () {
            var showCancelButton = _this.props.showCancelButton ?
            _react2.default.createElement(_Button2.default, { onClick: _this.props.onCancel }, _this.props.cancel) : null;
            var showSaveButton = _this.props.showSaveButton ?
            _react2.default.createElement(_Button2.default, { color: "primary", ref: function ref(component) {_this.__submitButtonComponent = component;}, onClickAsync: _this.__submitForm }, _this.props.ok) : null;

            return (
                _react2.default.createElement(_reactstrap.ModalFooter, null,
                    showCancelButton,
                    showSaveButton));


        };_this.

        __renderWarning = function () {
            if (_this.state.valid) {
                return null;
            }

            var errors = [];

            if (Array.isArray(_this.state.invalidField)) {
                for (var i = 0; i < _this.state.invalidField.length; i++) {
                    var error = _this.state.invalidField[i];
                    errors.push(_react2.default.createElement("p", { key: i }, error));
                }
            } else
            errors.push(_react2.default.createElement("p", { key: "invalidField" }, _this.state.invalidField));

            return _react2.default.createElement(_reactstrap.Alert, { color: "danger", className: "input-alert" }, errors);
        };_this.componentWillReceiveProps(props);return _this;} /**
                                                                 * defaultProps
                                                                 * @static
                                                                 */_createClass(ModalDataForm, [{ key: "render", value: function render() {var _this2 = this;return _react2.default.createElement(_reactstrap.Modal, { isOpen: this.state.show, className: this.props.className, toggle: this.props.onCancel }, _react2.default.createElement(_reactstrap.ModalHeader, { toggle: this.props.onCancel }, this.props.header), _react2.default.createElement(_reactstrap.ModalBody, null, _react2.default.createElement(_DataForm2.default, { ref: function ref(component) {_this2.__dataFormComponent = component;}, fields: this.props.fields, propsOfFields: this.props.propsOfFields, defaultValues: this.props.defaultValues, onSubmit: this.__submitForm, validationDisplay: this.props.validationDisplay }), this.__renderWarning()), this.__renderFooterButtons());} }, { key: "__submitForm", value: function __submitForm() {var item = this.__dataFormComponent.submit();
            if (item && this.props.onSubmit) {
                this.props.onSubmit(item, this.__onComplete);
            } else {
                this.setState({
                    valid: false,
                    invalidField: this.props.invalidField });

                this.__done();
            }
        } }, { key: "__onComplete", value: function __onComplete(
        message) {
            if (message === true) {// that me no error that is ok
                this.setState({
                    show: false });

            } else {
                if (!Array.isArray(message)) {
                    message = [message];
                }
                this.setState({
                    valid: false,
                    invalidField: message });

            }
            this.__done();
        } }, { key: "__done", value: function __done()

        {
            if (this.__submitButtonComponent) {
                this.__submitButtonComponent.done();
            }
        }

        /**
           *
           * @param nextProps
           */ }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(
        nextProps) {
            this.state = {
                valid: true,
                show: nextProps.show,
                invalidField: nextProps.invalidField };

        } }]);return ModalDataForm;}(_robeReactCommons.ShallowComponent);ModalDataForm.propTypes = { /**
                                                                                                      * Style map for the component.
                                                                                                      */style: _react2.default.PropTypes.object, /**
                                                                                                                                                  * Header for the form control.
                                                                                                                                                  */header: _react2.default.PropTypes.string, /**
                                                                                                                                                                                               * Hold data in a map
                                                                                                                                                                                               */defaulValues: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                  * Holds field properties like `name`, `label`, `type`, `visible`, `editable`, `readable`, `label`
                                                                                                                                                                                                                                                  */fields: _react2.default.PropTypes.array.isRequired, /**
                                                                                                                                                                                                                                                                                                         * Holds extra props of components if need.
                                                                                                                                                                                                                                                                                                         */propsOfFields: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                                                                                                                             * Holds Component props and component if need.
                                                                                                                                                                                                                                                                                                                                                             */show: _react2.default.PropTypes.bool, onSubmit: _react2.default.PropTypes.func.isRequired, onCancel: _react2.default.PropTypes.func, cancel: _react2.default.PropTypes.string, ok: _react2.default.PropTypes.string, showCancelButton: _react2.default.PropTypes.bool, showSaveButton: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *Defines the display style of the Validation message.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */validationDisplay: _react2.default.PropTypes.oneOf(["overlay", "block"]) };ModalDataForm.defaultProps = { show: false, header: _robeReactCommons.Application.i18n(ModalDataForm, "form.ModalDataForm", "header"), invalidField: _robeReactCommons.Application.i18n(ModalDataForm, "form.ModalDataForm", "invalidField"), cancel: _robeReactCommons.Application.i18n(ModalDataForm, "form.ModalDataForm", "cancel"), ok: _robeReactCommons.Application.i18n(ModalDataForm, "form.ModalDataForm", "ok"), showCancelButton: true, showSaveButton: true, validationDisplay: "block" };exports.default = ModalDataForm;