"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _nprogress = require("nprogress");var _nprogress2 = _interopRequireDefault(_nprogress);
require("nprogress/nprogress.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}
/**
                                                                                                                                                                                                                                                                                       * A singleton process indicator wrapper component.
                                                                                                                                                                                                                                                                                       * @see https://github.com/rstacruz/nprogress
                                                                                                                                                                                                                                                                                       * @class Progress
                                                                                                                                                                                                                                                                                       */var
Progress = function () {
    /**
                         * Creates an instance of Progress.
                         */
    function Progress() {_classCallCheck(this, Progress);
        this.configure({ showSpinner: false });
    }

    /**
       * Give a new configuration to the indicator.
       */_createClass(Progress, [{ key: "configure", value: function configure(
        configuration) {
            _nprogress2.default.configure(configuration);
        }


        /**
           * Starts a progress indicator with an animation.
           */ }, { key: "start", value: function start()
        {
            _nprogress2.default.start();
        }

        /**
           * Completes the progress indicator.
           */ }, { key: "done", value: function done()
        {
            _nprogress2.default.done();
        }

        /**
           * current instance of NProgress
           * @returns NProgress
           */ }, { key: "instance", value: function instance()

        {
            return _nprogress2.default;
        } }]);return Progress;}();exports.default =


new Progress();