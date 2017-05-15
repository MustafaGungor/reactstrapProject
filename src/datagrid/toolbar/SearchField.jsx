import React from "react";
import ShallowComponent from "robe-react-commons/lib/components/ShallowComponent";
import {InputGroup, Input, InputGroupAddon} from "reactstrap";
import FaIcon from "../../faicon/FaIcon";

export default class SearchField extends ShallowComponent {


    static propTypes: Map = {
        /**
         *Value for the search
         */
        value: React.PropTypes.string,

        /**
         * placeholder text 
         */
        placeholder: React.PropTypes.string,

        /**
         *Delay between last keystroke and search request.
         */
        delay: React.PropTypes.number

    };
    static defaultProps = {
        value: ""
    };

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            loading: false
        }
    }

    render(): Object {
        if (this.props.visible) {
            let icon = this.state.loading ? "fa-circle-o-notch fa-spin" : "fa-search";
            return (
                <InputGroup size="sm">
                    <Input
                        onChange={this.onChange}
                        value={this.state.value}
                        placeholder={this.props.placeholder}
                    />
                    <InputGroupAddon><FaIcon code={icon} size="fa-sm" /></InputGroupAddon>
                </InputGroup>
            );
        }
        return <span />;
    }

    onChange(e) {
        clearTimeout(this.searchOnChange);
        this.setState({
            value: e.target.value,
            loading: true
        });
        let event = { target: { value: e.target.value } };
        this.searchOnChange = setTimeout(function () {
            this.props.onChange(event);
            this.setState({
                loading: false
            });
        }.bind(this), this.props.delay);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        });
    }
}
