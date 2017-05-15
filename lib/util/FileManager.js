"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _robeReactCommons = require("robe-react-commons");
var _HttpError = require("robe-react-commons/lib/connections/HttpError");var _HttpError2 = _interopRequireDefault(_HttpError);
var _robeAjax = require("robe-ajax");var _robeAjax2 = _interopRequireDefault(_robeAjax);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

FileManager = function (_Class) {_inherits(FileManager, _Class);





    function FileManager(props) {_classCallCheck(this, FileManager);var _this = _possibleConstructorReturn(this, (FileManager.__proto__ || Object.getPrototypeOf(FileManager)).call(this));

        _this.__uploadProps = FileManager.createUpload(props);
        _this.__infoRequest = new _robeReactCommons.AjaxRequest(FileManager.createInfo(props));
        _this.__deleteRequest = new _robeReactCommons.AjaxRequest(FileManager.createDelete(props));return _this;
    }

    /**
       * @param {any} keys
       * @param {Function} onSuccess
       * @param {Function} onError
       */_createClass(FileManager, [{ key: "info", value: function info(
        keys, onSuccess, onError) {
            this.__infoRequest.call(keys, undefined, onSuccess, FileManager.createOnError(onError));
        }
        /**
           * upload multiple file
           * @param {string} fieldName
           * @param {Array} files
           * @param {Function} onSuccess
           * @param {Function} onError
           */ }, { key: "upload", value: function upload(
        fieldName, files, onSuccess, onError) {
            var formData = new FormData();
            for (var i = 0; i < files.length; i++) {
                formData.append(fieldName, files[i].file);
            }
            this.__upload(formData, function (response) {
                for (var _i = 0; _i < response.length; _i++) {
                    files[_i].id = response[_i].id;
                }
                onSuccess(files);
            }, onError);
        }

        /**
           * upload file(s) formData.
           * @param formData
           * @param onSuccess
           * @param onError
           * @private
           */ }, { key: "__upload", value: function __upload(
        formData, onSuccess, onError) {
            var uploadProps = {
                data: formData,
                success: onSuccess,
                error: FileManager.createOnError(onError) };

            uploadProps = _robeReactCommons.Maps.mergeDeep(uploadProps, this.__uploadProps);
            _robeAjax2.default.ajax(uploadProps);
        }

        /**
           * @param {any} keys
           * @param {Function} onSuccess
           * @param {Function} onError
           */ }, { key: "delete", value: function _delete(
        keys, onSuccess, onError) {
            this.__deleteRequest.call(keys, undefined, onSuccess, FileManager.createOnError(onError));
        }

        /**
           * @param {Function} errorCallback
           * @returns {Function}
           */ }], [{ key: "createOnError", value: function createOnError(
        errorCallback) {
            return function (xhr, exception) {
                var error = _HttpError2.default.parse(xhr, exception);
                errorCallback(error);
            };
        }

        /**
           * @param {Object} props
           * @returns {Object}
           */ }, { key: "createUpload", value: function createUpload(
        props) {
            var uploadRequest = FileManager.createInstance("upload", props, "PUT");
            if (uploadRequest.contentType === undefined) {
                uploadRequest.contentType = false;
            }
            if (uploadRequest.processData === undefined) {
                uploadRequest.processData = false;
            }
            FileManager.setCorelationId(props, uploadRequest);
            return uploadRequest;
        }

        /**
           * @param {Object} props
           * @returns {Object}
           */ }, { key: "createInfo", value: function createInfo(
        props) {
            var infoRequest = FileManager.createInstance("info", props, "POST");
            FileManager.setCorelationId(props, infoRequest);
            return infoRequest;
        }

        /**
           * @param {Object} props
           * @returns {Object}
           */ }, { key: "createDelete", value: function createDelete(
        props) {
            var deleteRequest = FileManager.createInstance("delete", props, "DELETE");
            FileManager.setCorelationId(props, deleteRequest);
            return deleteRequest;
        } }, { key: "createInstance", value: function createInstance(

        key, props, type) {
            var instance = props[key];
            if (!instance) {
                instance = {};
            }
            if (!instance.url) {
                instance.url = props.url;
            }
            if (!instance.type) {
                instance.type = type;
            }
            return instance;
        }
        /**
           * @param {Object} props
           * @param {Object} destination
           * @returns {Object}
           */ }, { key: "setCorelationId", value: function setCorelationId(
        props, destination) {
            if (props.correlationId) {
                destination.beforeSend = function (req) {
                    req.setRequestHeader("X-Correlation-ID", props.correlationId);
                };
            }
        } }]);return FileManager;}(_robeReactCommons.Class);exports.default = FileManager;