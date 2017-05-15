import React from "react";
import ReactDOM from "react-dom";
import { ShallowComponent } from "robe-react-commons";
import {Media} from "reactstrap";
import "./LazyImage.css";
/**
 * LazyImage is a component for loading images via ajax with a loading animation.
 * 
 * @export
 * @class LazyImage
 * @extends {ShallowComponent}
 */
export default class LazyImage extends ShallowComponent {

    static propTypes = {
        /**
         *Source of the image
         */
        src: React.PropTypes.string.isRequired,
        /**
         *Height of the image
         */
        height: React.PropTypes.string.isRequired,
        /**
         * Width of the image
         */
        width: React.PropTypes.string.isRequired,

        /**
         * Applies custom style to the image.
         */
        style: React.PropTypes.object,

        /**
         *Sets image shape as circle
        */
        circle: React.PropTypes.bool,

        /** Sets image as responsive image */
        responsive: React.PropTypes.bool,

        /** Sets image shape as rounded */
        rounded: React.PropTypes.bool,

        /** Sets image shape as thumbnail */
        thumbnail: React.PropTypes.bool,

    };

    /**
     * 
     * 
     * @static
     * 
     * @memberOf LazyImage
     */
    static defaultProps = {
        style: {},
        circle: false,
        responsive: false,
        rounded: false,
        thumbnail: false
    };

    /**
     * Actual image <img>
     * @memberOf LazyImage
     */
    innerComponent;

    /**
     * Creates an instance of LazyImage.
     * @param {any} props
     * @memberOf LazyImage
     */
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    /**
     * Renders the component
     * @returns {Object}
     * @memberOf LazyImage
     */
    render(): Object {
        let className = "lazyimage-placeholder";
        if (!this.state.loaded) {
            className += "-loading"
        }
        return (
            <div>
                <Media object  {...this.props} className={className} data-src={this.state.src} ref={this.__setInnerComponent} />
            </div>
        );

    }

    __setInnerComponent(component: Object) {
        this.innerComponent = component;
    }

    componentDidMount() {
        this.downloadingImage = new Image();
        this.downloadingImage.onload = (e) => {
            this.setState({ loaded: true, src: this.props.src });
        };
        this.downloadingImage.src = this.props.src;
    }
}
