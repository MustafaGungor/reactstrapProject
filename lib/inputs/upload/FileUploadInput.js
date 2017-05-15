"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _get = function get(object, property, receiver) {if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {var parent = Object.getPrototypeOf(object);if (parent === null) {return undefined;} else {return get(parent, property, receiver);}} else if ("value" in desc) {return desc.value;} else {var getter = desc.get;if (getter === undefined) {return undefined;}return getter.call(receiver);}};var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactDom = require("react-dom");
var _robeReactCommons = require("robe-react-commons");
var _reactstrap = require("reactstrap");
var _ValidationComponent2 = require("../../validation/ValidationComponent");var _ValidationComponent3 = _interopRequireDefault(_ValidationComponent2);
var _Files = require("../../util/Files");var _Files2 = _interopRequireDefault(_Files);
var _FileManager = require("../../util/FileManager");var _FileManager2 = _interopRequireDefault(_FileManager);
var _DragDropLayout = require("../../layouts/DragDropLayout");var _DragDropLayout2 = _interopRequireDefault(_DragDropLayout);
var _ThumbnailGroup = require("../../layouts/ThumbnailGroup");var _ThumbnailGroup2 = _interopRequireDefault(_ThumbnailGroup);
var _ThumbnailItem = require("../../layouts/ThumbnailItem");var _ThumbnailItem2 = _interopRequireDefault(_ThumbnailItem);
var _FaIcon = require("../../faicon/FaIcon");var _FaIcon2 = _interopRequireDefault(_FaIcon);
require("./FileUploadInput.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

var supportMultiple = typeof document !== "undefined" && document && document.createElement ? "multiple" in document.createElement("input") : true;

/**
                                                                                                                                                     *
                                                                                                                                                     *  File {
                                                                                                                                                     *      id: string
                                                                                                                                                     *      lastModified: long
                                                                                                                                                     *      name: "12923379_1598600950465914_2390381053412947001_n.jpg"
                                                                                                                                                     *      size: 120823
                                                                                                                                                     *      type: "image/jpeg"
                                                                                                                                                     *  }
                                                                                                                                                     *  FileUploadInput is a component which provides upload files.
                                                                                                                                                     *  Does necessary validations, rendering of validation messages.
                                                                                                                                                     *  @export
                                                                                                                                                     *  @class FileUploadInput
                                                                                                                                                     *  @extends {ValidationComponent}
                                                                                                                                                     */var
FileUploadInput = function (_ValidationComponent) {_inherits(FileUploadInput, _ValidationComponent);
    /**
                                                                                                      * Properties of the component
                                                                                                      *
                                                                                                      * @static
                                                                                                      */


























































































    function FileUploadInput(props) {_classCallCheck(this, FileUploadInput);var _this = _possibleConstructorReturn(this, (FileUploadInput.__proto__ || Object.getPrototypeOf(FileUploadInput)).call(this,
        props));
        _this.__componentId = _robeReactCommons.Generator.guid();
        _this.componentWillReceiveProps(props);return _this;
    }_createClass(FileUploadInput, [{ key: "componentWillReceiveProps", value: function componentWillReceiveProps(

        nextProps) {
            this.__fileManager = new _FileManager2.default(nextProps.remote);
            this.__itemRenderer = this.props.itemRenderer || this.itemRenderer;

            if (this.props.multiple) {
                this.__maxSizeOfWillUploaded = supportMultiple ? this.props.maxFileSize : 1;
                this.__value = this.props.value ? this.props.value : [];
            } else {
                this.props.maxFileSize = 1;
                if (this.props.value) {
                    this.__value = [this.props.value];
                }
            }
            this.state = {
                files: {},
                selectedFiles: [],
                upload: false };

            if (this.__value && this.__value.length > 0) {
                this.__fileManager.info(this.__value, this.onLoad, this.onError);
            }
            this.__initialValue = this.__value.slice(0);
        } }, { key: "onLoad", value: function onLoad(

        fileArray) {
            var files = {};
            for (var i = 0; i < fileArray.length; i++) {
                var file = fileArray[i];
                file.key = file.id;
                file.isUploaded = true;
                files[file.key] = file;
            }
            this.setState({
                files: files,
                upload: false });

        } }, { key: "render", value: function render()

        {var _this2 = this;
            var attributes = {
                type: "file",
                accept: this.props.accept,
                name: this.props.name,
                style: { display: "none" },
                multiple: this.props.multiple,
                ref: function ref(el) {return _this2.__fileInputEl = (0, _reactDom.findDOMNode)(el);},
                onChange: this.onFileSelect };


            var label = this.props.label === undefined ? undefined :
            _react2.default.createElement(_reactstrap.Label, null, " ", this.props.label, " ");

            return _get(FileUploadInput.prototype.__proto__ || Object.getPrototypeOf(FileUploadInput.prototype), "wrapComponent", this).call(this,

            _react2.default.createElement(_reactstrap.FormGroup, { hidden: this.props.hidden },
                label,
                _react2.default.createElement(_reactstrap.Input,
                attributes),

                _react2.default.createElement(_DragDropLayout2.default, {
                        ref: function ref(el) {_this2.__dragDropLayoutDom = (0, _reactDom.findDOMNode)(el);},
                        onDrop: this.onDrop,
                        onClick: this.browse },

                    this.createToolbar("top"),
                    _react2.default.createElement(_ThumbnailGroup2.default, {
                            placeholder: this.props.placeholder,
                            id: this.__componentId },

                        this.renderItems(this.state.files))),


                this.createToolbar("bottom")));


        } }, { key: "createToolbar", value: function createToolbar(

        position) {
            if (this.props.toolbarPosition !== position) {
                return null;
            }
            var files = [];

            _robeReactCommons.Maps.forEach(this.state.files, function (file, key) {
                files.push(file);
            });
            var selectAllChecked = this.state.selectedFiles.length === files.length;
            selectAllChecked = this.state.selectedFiles.length > 0 ? selectAllChecked : false;


            return (
                _react2.default.createElement("div", { className: "rb-upload-toolbar rb-radius-" + this.props.toolbarPosition },
                    _react2.default.createElement(_reactstrap.FormGroup, { check: true },
                        _react2.default.createElement(_reactstrap.Label, { check: true },
                            _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "pull-left toolbar-chekbox",
                                checked: selectAllChecked,
                                onClick: this.selectAll }), "Select All")),




                    _react2.default.createElement(_FaIcon2.default, { code: "fa-download pull-right ", size: "fa-sm", onClick: this.downloadSelectAll }),
                    _react2.default.createElement(_FaIcon2.default, { code: "fa-upload pull-right ", size: "fa-sm", onClick: this.uploadSelectAll }),
                    _react2.default.createElement(_FaIcon2.default, { code: "fa-trash pull-right ", size: "fa-sm", onClick: this.deleteSelectAll })));


        } }, { key: "onFileSelect", value: function onFileSelect(

        e) {
            var target = e.dataTransfer ? e.dataTransfer : e.target;
            target.name = this.props.name;
            this.onDrop({
                action: "browse",
                target: target });

        } }, { key: "onDrop", value: function onDrop(

        e) {var _this3 = this;
            if (!e.target) return;
            var files = e.target.files;
            if (!files || files.length === 0) return;
            // Files dropped.
            var droppedFiles = _Files2.default.getDroppedFiles(files);

            if (this.props.onChange) {
                this.props.onChange(e);
            }

            if (this.props.autoUpload) {// if autoUpload true then call upload and break method.
                for (var i = 0; i < droppedFiles.length; i++) {
                    droppedFiles[i].loading = true;
                }
                this.setState({
                    files: this.mergeFiles(droppedFiles) },
                function () {
                    _this3.upload(droppedFiles);
                });
                return;
            }
            // if autoUpload is false then add files and change state.
            this.setState({
                files: this.mergeFiles(droppedFiles) });

        } }, { key: "mergeFiles", value: function mergeFiles(

        newFileArray) {
            var newFiles = {};
            for (var i = 0; i < newFileArray.length; i++) {
                var file = newFileArray[i];
                newFiles[file.key] = file;
            }
            return _robeReactCommons.Objects.mergeClone(this.state.files, newFiles);
        } }, { key: "uploadSelectAll", value: function uploadSelectAll()

        {var _this4 = this;
            _robeReactCommons.Maps.forEach(this.state.selectedFiles, function (file, key) {
                if (!file.isUploaded) {
                    _this4.upload([file]);
                }
            });
        } }, { key: "uploadFile", value: function uploadFile(

        file) {
            this.upload([file]);
        } }, { key: "upload", value: function upload(

        droppedFiles) {
            var onUpload = this.onUpload.bind(undefined, droppedFiles);
            this.__fileManager.upload(this.props.name, droppedFiles, onUpload, this.onError.bind("upload"));
        } }, { key: "onUpload", value: function onUpload(

        droppedFiles, uploadedFiles) {
            for (var i = 0; i < uploadedFiles.length; i++) {
                var previousKey = droppedFiles[i].key;
                var previousFile = this.state.files[previousKey];
                delete this.state.files[previousFile.key];
                var file = uploadedFiles[i];
                file = _robeReactCommons.Objects.mergeClone(file, previousFile);
                file.key = file.id;
                file.isUploaded = true;
                file.loading = false;
                this.state.files[file.key] = file;
                this.__value[this.__value.length] = file.id;
            }
            this.state.upload = false;
            this.setState({
                files: this.state.files,
                selectedFiles: [],
                upload: true });

        } }, { key: "deleteSelectAll", value: function deleteSelectAll()

        {var _this5 = this;
            _robeReactCommons.Maps.forEach(this.state.selectedFiles, function (file, key) {
                _this5.deleteFile(file);
            });
            this.setState({
                selectedFiles: [] });

        } }, { key: "deleteFile", value: function deleteFile(

        file) {
            if (file.isUploaded && this.__initialValue.indexOf(file.id) === -1) {// if file uploaded then delete it on server.
                this.__fileManager.delete(file, this.onDelete, this.onError.bind("delete"));
            } else {
                this.onDelete(file);
            }
        } }, { key: "onDelete", value: function onDelete(

        file) {
            delete this.state.files[file.key];
            var index = this.__value.indexOf(file.id);
            if (index !== -1) {// if value is exist then this file deleted on server side.
                delete this.__value[file.key];
            }
            this.state.isDeleted = false;
            this.state.deletedFile = null;
            this.setState({
                isDeleted: true,
                deletedFile: file });

            if (this.props.onChange) {
                var e = { target: {} };
                e.target.name = this.props.name;
                if (this.props.multiple) {
                    e.target.value = this.__value;
                } else {
                    e.target.value = undefined;
                }
                this.props.onChange(e);
            }
        }

        /**
           * @desc Displays File Explorer to select file or files.
           * @access public
           */ }, { key: "browse", value: function browse(
        e) {
            var id = e.target.id;
            var isClickLayout = id && (id.indexOf(this.__componentId) !== -1 || id === this.__dragDropLayoutDom.id);
            if (isClickLayout) {
                if (!this.props.disabledBrowse) {
                    this.open();
                }
            }
        }

        /**
           * @desc Opens File Expoler to select file or files
           * @access private
           */ }, { key: "open", value: function open()
        {
            this.__fileInputEl.value = null;
            this.__fileInputEl.click();
        } }, { key: "renderItems", value: function renderItems(

        files) {var _this6 = this;
            var elements = [];
            _robeReactCommons.Maps.forEach(files, function (file, key) {
                var selected = _robeReactCommons.Arrays.isExistByKey(_this6.state.selectedFiles, "key", file);

                var downloadIcon = file.isUploaded ?
                _react2.default.createElement(_FaIcon2.default, { code: "fa-download", size: "fa-sm",
                    onClick: _this6.downloadFile.bind(undefined, file) }) : null;
                var uploadIcon = !file.isUploaded ?
                _react2.default.createElement(_FaIcon2.default, { code: "fa-upload", size: "fa-sm",
                    onClick: _this6.uploadFile.bind(undefined, file) }) : null;

                file.uploading = file.uploading !== undefined ? file.uploading : _this6.props.autoUpload;

                var loading = file.isUploaded ? !file.isUploaded : file.uploading;

                elements.push(
                _react2.default.createElement(_ThumbnailItem2.default, {
                        focused: !file.isUploaded,
                        selected: selected,
                        loading: loading,
                        key: file.key },
                    _react2.default.createElement("div", { className: "rb-thumbnail-toolbar" },
                        _react2.default.createElement("div", { className: "rb-thumbnail-toolbar-item select" },
                            _react2.default.createElement(_FaIcon2.default, { code: selected ? "fa-check-square-o" : "fa-square-o", size: "fa-sm",
                                onClick: _this6.selectFile.bind(undefined, file) })),

                        _react2.default.createElement("div", { className: "rb-thumbnail-toolbar-item remove" },
                            _react2.default.createElement(_FaIcon2.default, { code: "fa-trash", size: "fa-sm",
                                onClick: _this6.deleteFile.bind(undefined, file) })),

                        _react2.default.createElement("div", { className: "rb-thumbnail-toolbar-item upload" },
                            uploadIcon),

                        _react2.default.createElement("div", { className: "rb-thumbnail-toolbar-item download" },
                            downloadIcon)),


                    _react2.default.createElement("div", { className: "rb-upload-input", style: _extends({}, _this6.__style, _this6.props.itemStyle) },
                        _this6.__itemRenderer(file))));



            });
            return elements;
        } }, { key: "toolTip", value: function toolTip(

        file) {
            var sizeText = " - ( " + _Files2.default.presentSize(file.size) + " )";
            return (
                _react2.default.createElement(_reactstrap.Tooltip, { className: "rb-upload-item-tooltip", id: this.__componentId + file.name },
                    _react2.default.createElement("label", null, "" +
                        file.name + sizeText)));



        } }, { key: "itemRenderer", value: function itemRenderer(

        file) {
            var extension = _Files2.default.getExtensionByMime(file.type);
            if (!extension) {
                extension = _Files2.default.getExtensionByPath(file.name);
                if (extension === "") extension = null;
            }
            extension = extension ? extension.toUpperCase() : "FILE";
            return [
            _react2.default.createElement("div", { key: file.key + "rb_upload_image", className: "rb-upload-image" },
                _react2.default.createElement("div", { className: "rb-upload-extension" }, extension),
                _react2.default.createElement("div", { className: "rb-upload-icon" },
                    _react2.default.createElement(_FaIcon2.default, { code: "fa-file-o" }))),


            _react2.default.createElement(_reactstrap.OverlayTrigger, { key: file.key + "_overlay_trigger", placement: "bottom", overlay: this.toolTip(file) },
                _react2.default.createElement("div", { className: "rb-upload-name" },
                    _react2.default.createElement("div", null,
                        file.name)))];




        } }, { key: "onError", value: function onError(

        action, error) {

        } }, { key: "downloadSelectAll", value: function downloadSelectAll()

        {var _this7 = this;
            _robeReactCommons.Maps.forEach(this.state.selectedFiles, function (file, key) {
                if (file.isUploaded) {
                    _this7.downloadFile(file);
                }
            });
            this.setState({
                selectedFiles: [] });

        } }, { key: "downloadFile", value: function downloadFile(

        file) {
            window.open(this.props.remote.url + "/" + file.key);
        } }, { key: "selectFile", value: function selectFile(

        file) {
            var selectedFiles = this.state.selectedFiles;
            var isExist = _robeReactCommons.Arrays.isExistByKey(selectedFiles, "key", file);
            if (isExist) {
                _robeReactCommons.Arrays.removeByKey(selectedFiles, "key", file);
            } else {
                selectedFiles.push(file);
            }
            this.state.upload = false;
            this.setState({
                upload: true,
                selectedFiles: selectedFiles });

        } }, { key: "selectAll", value: function selectAll()

        {
            var state = { selectedFiles: [] };

            _robeReactCommons.Maps.forEach(this.state.files, function (file, key) {
                state.selectedFiles.push(file);
            });

            if (this.state.selectedFiles.length === state.selectedFiles.length) {
                state.selectedFiles = [];
            }

            this.setState(state);
        } }]);return FileUploadInput;}(_ValidationComponent3.default);FileUploadInput.propTypes = { /**
                                                                                                     * Style map for the component.
                                                                                                     */style: _react2.default.PropTypes.object, /**
                                                                                                                                                 * name use as input field name
                                                                                                                                                 */name: _react2.default.PropTypes.string.isRequired, /**
                                                                                                                                                                                                       * Label for the form control.
                                                                                                                                                                                                       */label: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                   * File Id List or File Name
                                                                                                                                                                                                                                                   */value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string)]), /**
                                                                                                                                                                                                                                                                                                                                                                                                           * onChangeEvent event for the component
                                                                                                                                                                                                                                                                                                                                                                                                           */onChange: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                        * describe Selection File Multi or Single
                                                                                                                                                                                                                                                                                                                                                                                                                                                        */multiple: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Style map for the component.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */itemStyle: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Item show renderer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */itemRenderer: _react2.default.PropTypes.func, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File Input Form Control Place Holder
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */placeholder: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * it specifies that an input field is hidden or visible
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */hidden: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * auto upload is false then file will upload when clicking the upload button.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */autoUpload: _react2.default.PropTypes.bool, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */remote: _react2.default.PropTypes.object, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */toolbarPosition: _react2.default.PropTypes.string, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Max Uploaded file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */maxFileSize: _react2.default.PropTypes.number, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *Defines the display style of the Validation message.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */validationDisplay: _react2.default.PropTypes.oneOf(["overlay", "block"]), /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * Define file input accept extensions
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */accept: _react2.default.PropTypes.string };FileUploadInput.defaultProps = { multiple: true, itemStyle: {}, placeholder: _robeReactCommons.Application.i18n(FileUploadInput, "inputs.upload.FileUploadInput", "placeholder"), maxFileSize: 1000, toolbarPosition: "top", autoUpload: false, validationDisplay: "block", accept: null };exports.default = FileUploadInput;