import React from "react";
import ShallowComponent from "robe-react-commons/lib/components/ShallowComponent";
import Maps from "robe-react-commons/lib/utils/Maps";
import {
    ButtonGroup,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem

} from "reactstrap";
import FaIcon from "../../faicon/FaIcon";

export default class ActionButtons extends ShallowComponent {

    static propTypes: Map = {
        /**
         * Fields Configurations to show style on view.
         */
        visible: React.PropTypes.bool
    };
    static defaultProps = {
        visible: true,
    };

    constructor(props: Object) {
        super(props);
        this.state = {
            disabled: true,
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }


    render(): Object {
        if (this.props.visible) {
            let actions = [];
            Maps.forEach(this.props.items, (item: Object) => {
                if (item.visible) {
                    let disabled = item.disabled;
                    if (item.name === "edit" || item.name == "delete") {
                        disabled = this.state.disabled;
                    }
                    let action = <Button key={item.text} disabled={disabled} onClick={item.onClick} size="sm"><FaIcon code={item.icon} /><span className="hidden-xs"> {item.text}</span></Button>;
                    if (item.name == "export"){
                        action = (
                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret size="sm">Export</DropdownToggle>
                                <DropdownMenu size="sm">
                                    <DropdownItem size="sm" eventKey="1"><FaIcon code="fa fa-file-pdf-o" /><span className="hidden-xs"> PDF</span></DropdownItem>
                                    <DropdownItem size="sm" eventKey="2"><FaIcon code="fa fa-file-excel-o" /><span className="hidden-xs"> EXCEL</span></DropdownItem>
                                    <DropdownItem size="sm" eventKey="3"><FaIcon code="fa fa-file-word-o" /><span className="hidden-xs">WORD</span></DropdownItem>
                                    <DropdownItem size="sm" eventKey="4"><FaIcon code="fa fa-file-text-o" /><span className="hidden-xs"> CSV</span></DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        )
                    }
                    actions.push(action);
                }
            });

            return (
                <ButtonGroup className="pull-right" size="sm">
                    {actions}
                </ButtonGroup>
            );
        }
        return <span />;
    }
}
