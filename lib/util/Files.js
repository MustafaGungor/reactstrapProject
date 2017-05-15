"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _robeReactCommons = require("robe-react-commons");function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}
var MimeTypes = require("../assets/mime.json");

var SIZE_TYPES = ['Bytes', 'KB', 'MB', 'GB', 'TB'];var

Files = function () {function Files() {_classCallCheck(this, Files);}_createClass(Files, null, [{ key: "getExtensionByMime", value: function getExtensionByMime(
        mime) {
            if (!mime) return null;
            var mimes = mime.split("/");
            if (mimes.length !== 2) return null;
            var parentMime = MimeTypes[mimes[0]];
            return parentMime && parentMime[mimes[1]];
        } }, { key: "getExtensionByPath", value: function getExtensionByPath(

        path) {
            if (!path) return null;
            return path.slice((path.lastIndexOf(".") - 1 >>> 0) + 2);
        } }, { key: "getFileName", value: function getFileName(

        path) {
            if (path) {
                var startIndex = path.indexOf('\\') >= 0 ? path.lastIndexOf('\\') : path.lastIndexOf('/');
                var filename = path.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
                return filename;
            }
            return path;
        } }, { key: "presentSize", value: function presentSize(


        size) {
            var text = [];
            if (size <= 0) {
                text[0] = "0 Bytes";
            } else {
                for (var i = 0; i < SIZE_TYPES.length && size > 0; i++) {
                    var remaining = size % 1024; // remaning bytes
                    if (remaining > 0) {
                        text[text.length] = remaining + " " + SIZE_TYPES[i];
                    }
                    if (text.length > 2) {
                        text.shift();
                    }
                    size = (size - remaining) / 1024; // data to size type
                }
            }
            return text.reverse().join(" ");
        } }, { key: "getDroppedFiles", value: function getDroppedFiles(

        files) {
            if (!files) return files;
            var droppedFiles = [];
            for (var i = 0; i < files.length; i++) {
                droppedFiles[i] = Files.getDroppedFile(files[i]);
            }
            return droppedFiles;
        } }, { key: "getDroppedFile", value: function getDroppedFile(

        file) {var
            name = file.name,filename = file.filename,size = file.size,type = file.type;
            var id = _robeReactCommons.Generator.guid();
            var lastModified = file.lastModifiedDate ? file.lastModifiedDate.getTime() : file.lastModified;

            var uploadFile = {
                id: id,
                key: id,
                file: file,
                isUploaded: false,
                lastModified: lastModified,
                name: name ? name : filename,
                size: size,
                type: type };

            return uploadFile;
        } }]);return Files;}();exports.default = Files;