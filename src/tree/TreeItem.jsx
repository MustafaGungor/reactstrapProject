import React from "react";
import ShallowComponent from "robe-react-commons/lib/components/ShallowComponent";
import Arrays from "robe-react-commons/lib/utils/Arrays";
import {ControlLabel} from "reactstrap";
import Tree from "./Tree";

import "./Tree.css";

/**
 * Tree is a recursive component which generates a tree of Component's from the given item and template.
 *
 * @export
 * @class Tree
 * @extends {ShallowComponent}
 */
export default class TreeItem extends ShallowComponent {

    /**
     * PropTypes of the component.
     *
     * @static
     */
    static propTypes = {
        /**
         * Data for the tree to view
         */
        item: React.PropTypes.object.isRequired,
        /**
         * Text field of the data
         */
        textField: React.PropTypes.string,
        /**
         * Value field of the data.
         */
        valueField: React.PropTypes.string,
        /**
         * Children field of the data.
         */
        childrenField: React.PropTypes.string,
        /**
         * Checked items array.
         */
        value: React.PropTypes.array

    };

    static defaultProps = {
        textField: "text",
        valueField: "code",
        childrenField: "children",
        value: [],
        root: false
    };

    render():string {
        let item = this.props.item;
        return (
            <li>
                {this.__getItemRenderer(this.props)}
                {item[this.props.childrenField] ?
                    (<Tree
                        {...this.props}
                        items={item[this.props.childrenField]}
                        onChange={this.onChange}
                    />) :
                    undefined
                }
            </li>
        );
    }

    __getItemRenderer(props:Object):Object {
        return this.props.itemRenderer ?
            this.props.itemRenderer(props) :
            <ControlLabel>{this.props.item[this.props.textField]}</ControlLabel>;
    }

    onChange(e:Object):boolean {
        if (this.props.onChange) {
            this.props.onChange(e);
        }
        return true;
    }

    shouldComponentUpdate():boolean {
        return true;
    }
}
