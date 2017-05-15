"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require("react");var _react2 = _interopRequireDefault(_react);

var _robeReactCommons = require("robe-react-commons");





var _Application = require("robe-react-commons/lib/application/Application");var _Application2 = _interopRequireDefault(_Application);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

Application = function (_ShallowComponent) {_inherits(Application, _ShallowComponent);









    /**
                                                                                        * defaultProps
                                                                                        * @static
                                                                                        */





    function Application(props) {_classCallCheck(this, Application);var _this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this,
        props));_this.isLoaded = false;
        _this.componentWillReceiveProps(props);return _this;
    } /**
       * PropTypes of the component
       * @static
       */_createClass(Application, [{ key: "componentWillReceiveProps", value: function componentWillReceiveProps(props) {this.state = {
                upgrade: this.previousLang !== props.language };

        }

        //TODO: Commondaki methodların buradan ulaşılabilmesi.
    }, { key: "render", value: function render()
        {
            if (this.state.upgrade) {
                return _react2.default.createElement("span", null);
            }var _props =
            this.props,language = _props.language,newProps = _objectWithoutProperties(_props, ["language"]);
            return _react2.default.createElement("div", newProps,
                this.props.children);

        } }, { key: "componentDidUpdate", value: function componentDidUpdate()

        {
            this.upgradeIfNeeded();
        } }, { key: "componentDidMount", value: function componentDidMount()

        {
            this.upgradeIfNeeded();
        } }, { key: "upgradeIfNeeded", value: function upgradeIfNeeded(

        lang) {var _this2 = this;
            var language = lang || this.props.language;
            if (this.state.upgrade) {
                if (_robeReactCommons.Assertions.isString(language)) {
                    try {
                        System.import("./assets/" + language).then(function (langMap) {
                            _Application2.default.loadI18n(langMap);
                            _this2.isLoaded = true;
                            _this2.setState({
                                upgrade: false });

                            _robeReactCommons.Cookies.put("language", language);
                        }).
                        catch(function (err) {
                            if (lang) {
                                throw err;
                            }
                            _robeReactCommons.Cookies.remove("language");
                            _this2.upgradeIfNeeded(_robeReactCommons.Cookies.get("language", "en_US.json"));
                        });
                    } catch (error) {
                        _robeReactCommons.Cookies.remove("language");
                    }
                } else {
                    _Application2.default.loadI18n(this.props.language);
                    this.setState({
                        upgrade: false });

                }
            }
        } }]);return Application;}(_robeReactCommons.ShallowComponent);Application.propTypes = { language: _react2.default.PropTypes.string };Application.defaultProps = { language: _robeReactCommons.Cookies.get("language", "en_US.json") };exports.default = Application;