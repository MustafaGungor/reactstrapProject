import React from "react";
import {
    ShallowComponent,
    Application
} from "robe-react-commons";
import {Modal, Button, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

export default class ModalConfirm extends ShallowComponent {

    static propTypes = {
        onOkClick: React.PropTypes.func,
        onCancelClick: React.PropTypes.func,
        header: React.PropTypes.string,
        message: React.PropTypes.string,
        show: React.PropTypes.bool,
        ok: React.PropTypes.string,
        cancel: React.PropTypes.string,
    };


    static defaultProps = {
        ok: Application.i18n(ModalConfirm, "form.ModalConfirm", "ok"),
        cancel: Application.i18n(ModalConfirm, "form.ModalConfirm", "cancel"),
    };

    render(): Object {
        return (
            <Modal isOpen={this.props.show}>
                <ModalHeader toggle={this.props.onCancelClick}>{this.props.header}</ModalHeader>
                <ModalBody>
                    {this.props.message}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.props.onCancelClick}>{this.props.cancel}</Button>
                    <Button color="danger" onClick={this.props.onOkClick}>{this.props.ok}</Button>
                </ModalFooter>
            </Modal>
        );
    }
}
