import React from "react";
import ShallowComponent from "robe-react-commons/lib/components/ShallowComponent";
import Input from "./BaseInput";

/**
 * TextInput is a component for default one lined text inputs.
 *
 * @export
 * @class TextInput
 * @extends {ShallowComponent}
 */
export default class TextInput extends ShallowComponent {
    /**
     * Properties of the component
     *
     * @static
     */
    static propTypes: Map = {
        /**
         * Label for the form control.
         */
        label: React.PropTypes.string,
        /**
         * name use as input field name
         */
        name: React.PropTypes.string,
        /**
         * Value of the component
         */
        value: React.PropTypes.string,
        /**
         * onChangeEvent event for the component
         */
        onChange: React.PropTypes.func,
        /**
         * Disable input
         */
        disabled: React.PropTypes.bool,
        /**
         * it specifies that an input field is read-only
         */
        readOnly: React.PropTypes.bool,
        /**
         * it specifies that an input field is hidden or visible
         */
        hidden: React.PropTypes.bool,
        /**
        *Defines the display style of the Validation message.
        */
        validationDisplay: React.PropTypes.oneOf(["overlay", "block"]),
        /**
        * Left Input Addon
        */
        inputGroupLeft: React.PropTypes.object,
        /**
        * Right Input Addon
        */
        inputGroupRight: React.PropTypes.object
    };

    /**
     * defaultProps
     * @static
     */
    static defaultProps = {
        disabled: false,
        readOnly: false,
        hidden: false,
        value: "",
        validationDisplay: "block"
    };

    innerComponent;
    /**
     * Renders the component.
     *
     * @returns
     */
    render(): Object {
        let { minWidth, ...props } = this.props;
        return (
            <Input
                {...props}
                onChange={this.__onChange}
                type="text"
                ref={(component: Object) => { this.innerComponent = component } }
                />);
    }

    /**
     * Returns the validity of the value.
     * @return true - value is valid, false - invalid
     */
    isValid(): boolean {
        return this.innerComponent.isValid();
    }

    /**
     * checks validation by current value
     * isValid then return empty Array else return Array<String>
     * isValid = Array.length != 0
     * @param value
     */
    validate(value: any): Array<string> {
        return this.innerComponent.validate(value);
    }

    /**
     * Internal onchange handler.
     */
    __onChange(e: Object): boolean {
        let result = true;
        if (this.props.onChange) {
            result = this.props.onChange(e);
        }
        if (!result) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.innerComponent.focus();
        return result;
    }
}
