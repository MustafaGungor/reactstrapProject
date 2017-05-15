import React from "react";
import ShallowComponent from "robe-react-commons/lib/components/ShallowComponent";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Label
} from "reactstrap";

import FaIcon from "../../faicon/FaIcon";

export default class ColumnMenu extends ShallowComponent {


    static propTypes: Map = {
        /**
         * Fields Configurations to show style on view.
         */
        onChange: React.PropTypes.func
    };

    constructor(props: Object) {
        super(props);
        this.state = {
            open: false,
            columns: this.props.columns
        };
    }

    render(): Object {
        return (
            <Dropdown group isOpen={this.state.open} size="sm" className="pull-right" toggle={this.__toggle}>
                <DropdownToggle caret><FaIcon code="fa fa-bars" /></DropdownToggle>
                <DropdownMenu>
                    {this.__renderColumns()}
                </DropdownMenu>
            </Dropdown>
        );
    }

    __renderColumns(): Object {
        let showColumnButtons = [];
        let columns = this.state.columns;
        let activeCount = 0;
        for (let i = 0; i < columns.length; i++) {
            let column = columns[i];
            let checked = column.visible !== false;
            if (checked) { activeCount++; }
        }


        for (let i = 0; i < columns.length; i++) {
            let column = columns[i];
            let checked = column.visible !== false;
            let disabled = false;
            if (checked && activeCount === 1) {
                disabled = true;
            }
            showColumnButtons.push(<DropdownItem toggle={false} disabled={disabled}><Label check><Input type="checkbox" disabled={disabled} checked={checked} onChange={disabled ? null : this.handleChange.bind(undefined, checked, i)} />{column.label}</Label></DropdownItem>);
        }

        return showColumnButtons;
    }

    handleChange(checked: Boolean, i: Number) {
        if (this.props.onChange) {
            this.props.onChange(checked, i);
        }
    }

    __toggle() {
        this.setState({ open: !this.state.open });
    }

    componentWillReceiveProps(nextProps: Object) {
        this.setState({ columns: nextProps.columns });
        this.forceUpdate();
    }
}
