import React from "react";
import { findDOMNode } from "react-dom";
import { Generator, Application, Objects, Maps, Arrays } from "robe-react-commons";
import { FormGroup, Input, Label, Glyphicon, OverlayTrigger, Tooltip } from "reactstrap";
import ValidationComponent from "../../validation/ValidationComponent";
import Files from "../../util/Files";
import FileManager from "../../util/FileManager";
import DragDropLayout from "../../layouts/DragDropLayout";
import ThumbnailGroup from "../../layouts/ThumbnailGroup";
import ThumbnailItem from "../../layouts/ThumbnailItem";
import FaIcon from "../../faicon/FaIcon";
import "./FileUploadInput.css";

const supportMultiple = (typeof document !== "undefined" && document && document.createElement) ? "multiple" in document.createElement("input") : true;

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
 */
export default class FileUploadInput extends ValidationComponent {
    /**
     * Properties of the component
     *
     * @static
     */
    static propTypes = {
        /**
         * Style map for the component.
         */
        style: React.PropTypes.object,
        /**
         * name use as input field name
         */
        name: React.PropTypes.string.isRequired,
        /**
         * Label for the form control.
         */
        label: React.PropTypes.string,
        /**
         * File Id List or File Name
         */
        value: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.arrayOf(React.PropTypes.string)
        ]),
        /**
         * onChangeEvent event for the component
         */
        onChange: React.PropTypes.func,
        /**
         * describe Selection File Multi or Single
         */
        multiple: React.PropTypes.bool,
        /**
         * Style map for the component.
         */
        itemStyle: React.PropTypes.object,
        /**
         * Item show renderer
         */
        itemRenderer: React.PropTypes.func,
        /**
         * File Input Form Control Place Holder
         */
        placeholder: React.PropTypes.string,
        /**
         * it specifies that an input field is hidden or visible
         */
        hidden: React.PropTypes.bool,
        /**
         * auto upload is false then file will upload when clicking the upload button.
         */
        autoUpload: React.PropTypes.bool,
        /**
         *
         */
        remote: React.PropTypes.object,
        /**
         *
         */
        toolbarPosition: React.PropTypes.string,
        /**
         * Max Uploaded file
         */
        maxFileSize: React.PropTypes.number,
        /**
         *Defines the display style of the Validation message.
         */
        validationDisplay: React.PropTypes.oneOf(["overlay", "block"]),
        /**
         * Define file input accept extensions
         */
        accept: React.PropTypes.string
    };

    static defaultProps = {
        multiple: true,
        itemStyle: {},
        placeholder: Application.i18n(FileUploadInput, "inputs.upload.FileUploadInput", "placeholder"),
        maxFileSize: 1000,
        toolbarPosition: "top",
        autoUpload: false,
        validationDisplay: "block",
        accept: null
    };

    __maxSizeOfWillUploaded;
    __fileInputEl;
    __style;
    __itemRenderer;
    __fileManager;
    __dragDropLayoutDom;
    __value;
    __initialValue;

    constructor(props) {
        super(props);
        this.__componentId = Generator.guid();
        this.componentWillReceiveProps(props);
    }

    componentWillReceiveProps(nextProps) {
        this.__fileManager = new FileManager(nextProps.remote);
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
            upload: false
        };
        if (this.__value && this.__value.length > 0) {
            this.__fileManager.info(this.__value, this.onLoad, this.onError);
        }
        this.__initialValue = this.__value.slice(0);
    }

    onLoad(fileArray) {
        let files = {};
        for (let i = 0; i < fileArray.length; i++) {
            let file = fileArray[i];
            file.key = file.id;
            file.isUploaded = true;
            files[file.key] = file;
        }
        this.setState({
            files: files,
            upload: false
        });
    }

    render() {
        let attributes = {
            type: "file",
            accept: this.props.accept,
            name: this.props.name,
            style: { display: "none" },
            multiple: this.props.multiple,
            ref: el => this.__fileInputEl = findDOMNode(el),
            onChange: this.onFileSelect
        };

        let label = (this.props.label === undefined) ? undefined : (
            <Label> {this.props.label} </Label>
        );
        return super.wrapComponent(
            (
                <FormGroup hidden={this.props.hidden}>
                    {label}
                    <Input
                        {...attributes}
                    />
                    <DragDropLayout
                        ref={(el) => { this.__dragDropLayoutDom = findDOMNode(el) }}
                        onDrop={this.onDrop}
                        onClick={this.browse}
                    >
                        {this.createToolbar("top")}
                        <ThumbnailGroup
                            placeholder={this.props.placeholder}
                            id={this.__componentId}
                        >
                            {this.renderItems(this.state.files)}
                        </ThumbnailGroup>
                    </DragDropLayout>
                    {this.createToolbar("bottom")}
                </FormGroup>
            ));
    }

    createToolbar(position) {
        if (this.props.toolbarPosition !== position) {
            return null;
        }
        let files = [];

        Maps.forEach(this.state.files, (file, key) => {
            files.push(file);
        });
        let selectAllChecked = this.state.selectedFiles.length === files.length;
        selectAllChecked = this.state.selectedFiles.length > 0 ? selectAllChecked : false;


        return (
            <div className={`rb-upload-toolbar rb-radius-${this.props.toolbarPosition}`}>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" className="pull-left toolbar-chekbox"
                               checked={selectAllChecked}
                               onClick={this.selectAll}>
                        </Input>
                        Select All
                    </Label>
                </FormGroup>
                <FaIcon code="fa-download pull-right " size="fa-sm" onClick={this.downloadSelectAll} />
                <FaIcon code="fa-upload pull-right " size="fa-sm" onClick={this.uploadSelectAll} />
                <FaIcon code="fa-trash pull-right " size="fa-sm" onClick={this.deleteSelectAll} />
            </div>
        );
    }

    onFileSelect(e) {
        let target = e.dataTransfer ? e.dataTransfer : e.target;
        target.name = this.props.name;
        this.onDrop({
            action: "browse",
            target
        });
    }

    onDrop(e) {
        if (!e.target) return;
        const files = e.target.files;
        if (!files || files.length === 0) return;
        // Files dropped.
        let droppedFiles = Files.getDroppedFiles(files);

        if (this.props.onChange) {
            this.props.onChange(e);
        }

        if (this.props.autoUpload) { // if autoUpload true then call upload and break method.
            for (let i = 0; i < droppedFiles.length; i++) {
                droppedFiles[i].loading = true;
            }
            this.setState({
                files: this.mergeFiles(droppedFiles)
            }, () => {
                this.upload(droppedFiles);
            });
            return;
        }
        // if autoUpload is false then add files and change state.
        this.setState({
            files: this.mergeFiles(droppedFiles)
        });
    }

    mergeFiles(newFileArray) {
        let newFiles = {};
        for (let i = 0; i < newFileArray.length; i++) {
            let file = newFileArray[i];
            newFiles[file.key] = file;
        }
        return Objects.mergeClone(this.state.files, newFiles);
    }

    uploadSelectAll() {
        Maps.forEach(this.state.selectedFiles, (file, key) => {
            if (!file.isUploaded) {
                this.upload([file]);
            }
        });
    }

    uploadFile(file) {
        this.upload([file]);
    }

    upload(droppedFiles) {
        let onUpload = this.onUpload.bind(undefined, droppedFiles);
        this.__fileManager.upload(this.props.name, droppedFiles, onUpload, this.onError.bind("upload"));
    }

    onUpload(droppedFiles, uploadedFiles) {
        for (let i = 0; i < uploadedFiles.length; i++) {
            let previousKey = droppedFiles[i].key;
            let previousFile = this.state.files[previousKey];
            delete this.state.files[previousFile.key];
            let file = uploadedFiles[i];
            file = Objects.mergeClone(file, previousFile);
            file.key = file.id;
            file.isUploaded = true;
            file.loading = false;
            this.state.files[file.key] = file;
            this.__value[this.__value.length] = file.id
        }
        this.state.upload = false;
        this.setState({
            files: this.state.files,
            selectedFiles: [],
            upload: true
        });
    }

    deleteSelectAll() {
        Maps.forEach(this.state.selectedFiles, (file, key) => {
            this.deleteFile(file);
        });
        this.setState({
            selectedFiles: []
        });
    }

    deleteFile(file) {
        if (file.isUploaded && this.__initialValue.indexOf(file.id) === -1) { // if file uploaded then delete it on server.
            this.__fileManager.delete(file, this.onDelete, this.onError.bind("delete"))
        } else {
            this.onDelete(file);
        }
    }

    onDelete(file) {
        delete this.state.files[file.key];
        let index = this.__value.indexOf(file.id);
        if (index !== -1) { // if value is exist then this file deleted on server side.
            delete this.__value[file.key];
        }
        this.state.isDeleted = false;
        this.state.deletedFile = null;
        this.setState({
            isDeleted: true,
            deletedFile: file
        });
        if (this.props.onChange) {
            let e = { target: {} };
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
     */
    browse(e) {
        let id = e.target.id;
        let isClickLayout = id && (id.indexOf(this.__componentId) !== -1 || id === this.__dragDropLayoutDom.id);
        if (isClickLayout) {
            if (!this.props.disabledBrowse) {
                this.open();
            }
        }
    }

    /**
     * @desc Opens File Expoler to select file or files
     * @access private
     */
    open() {
        this.__fileInputEl.value = null;
        this.__fileInputEl.click();
    }

    renderItems(files) {
        let elements = [];
        Maps.forEach(files, (file, key) => {
            let selected = Arrays.isExistByKey(this.state.selectedFiles, "key", file);

            let downloadIcon = file.isUploaded ?
                <FaIcon code="fa-download" size="fa-sm"
                    onClick={this.downloadFile.bind(undefined, file)} /> : null;
            let uploadIcon = !file.isUploaded ?
                <FaIcon code="fa-upload" size="fa-sm"
                    onClick={this.uploadFile.bind(undefined, file)} /> : null;

            file.uploading = file.uploading !== undefined ? file.uploading : this.props.autoUpload;

            let loading = file.isUploaded ? !file.isUploaded : file.uploading;

            elements.push(
                <ThumbnailItem
                    focused={!file.isUploaded}
                    selected={selected}
                    loading={loading}
                    key={file.key}>
                    <div className={"rb-thumbnail-toolbar"}>
                        <div className="rb-thumbnail-toolbar-item select">
                            <FaIcon code={selected ? "fa-check-square-o" : "fa-square-o"} size="fa-sm"
                                onClick={this.selectFile.bind(undefined, file)} />
                        </div>
                        <div className="rb-thumbnail-toolbar-item remove">
                            <FaIcon code="fa-trash" size="fa-sm"
                                onClick={this.deleteFile.bind(undefined, file)} />
                        </div>
                        <div className="rb-thumbnail-toolbar-item upload">
                            {uploadIcon}
                        </div>
                        <div className="rb-thumbnail-toolbar-item download">
                            {downloadIcon}
                        </div>
                    </div>
                    <div className="rb-upload-input" style={{ ...this.__style, ...this.props.itemStyle }}>
                        {this.__itemRenderer(file)}
                    </div>
                </ThumbnailItem>
            );
        });
        return elements;
    }

    toolTip(file) {
        let sizeText = ` - ( ${Files.presentSize(file.size)} )`;
        return (
            <Tooltip className="rb-upload-item-tooltip" id={this.__componentId + file.name}>
                <label>
                    {`${file.name}${sizeText}`}
                </label>
            </Tooltip>
        );
    }

    itemRenderer(file) {
        let extension = Files.getExtensionByMime(file.type);
        if (!extension) {
            extension = Files.getExtensionByPath(file.name);
            if (extension === "") extension = null;
        }
        extension = extension ? extension.toUpperCase() : "FILE";
        return [
            <div key={file.key + "rb_upload_image"} className="rb-upload-image">
                <div className="rb-upload-extension">{extension}</div>
                <div className="rb-upload-icon">
                    <FaIcon code="fa-file-o" />
                </div>
            </div>,
            <OverlayTrigger key={file.key + "_overlay_trigger"} placement="bottom" overlay={this.toolTip(file)}>
                <div className="rb-upload-name">
                    <div>
                        {file.name}
                    </div>
                </div>
            </OverlayTrigger>
        ]
    }

    onError(action, error) {

    }

    downloadSelectAll() {
        Maps.forEach(this.state.selectedFiles, (file, key) => {
            if (file.isUploaded) {
                this.downloadFile(file);
            }
        });
        this.setState({
            selectedFiles: []
        });
    }

    downloadFile(file) {
        window.open(this.props.remote.url + "/" + file.key);
    }

    selectFile(file) {
        let selectedFiles = this.state.selectedFiles;
        let isExist = Arrays.isExistByKey(selectedFiles, "key", file);
        if (isExist) {
            Arrays.removeByKey(selectedFiles, "key", file)
        } else {
            selectedFiles.push(file);
        }
        this.state.upload = false;
        this.setState({
            upload: true,
            selectedFiles: selectedFiles
        });
    }

    selectAll() {
        let state = { selectedFiles: [] };

        Maps.forEach(this.state.files, (file, key) => {
            state.selectedFiles.push(file);
        });

        if (this.state.selectedFiles.length === state.selectedFiles.length) {
            state.selectedFiles = [];
        }

        this.setState(state);
    }
}

