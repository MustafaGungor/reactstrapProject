import React from "react";
import {Col, Label, Media, Card, CardBlock, Badge, Row, CardTitle, CardImg, CardText} from "reactstrap";
import ShallowComponent from "robe-react-commons/lib/components/ShallowComponent";
import FaIcon from "robe-react-ui/lib/faicon/FaIcon";
import Image from "robe-react-ui/lib/image/LazyImage";


export default class Renderer extends ShallowComponent {
    /**
     * Properties of the component
     *
     * @static
     */
    static propTypes = {

        header: React.PropTypes.string,

        desc: React.PropTypes.string,

        image: React.PropTypes.string,

        link: React.PropTypes.string,

        features: React.PropTypes.array
    };

    render(): Object {
        let image = require(`./${this.props.image}`);
        return (
            <Col xs={12} sm={6} md={4}>
                <Card>
                    <CardImg top width="100%" src={image} />
                    <CardBlock>
                        <CardTitle>
                            <a href={this.props.link} target="_blank">
                                <h4>{this.props.header} <FaIcon code="fa-external-link"/></h4>
                            </a>
                        </CardTitle>
                        <CardText>{this.props.desc}</CardText>
                        {this.renderFeatures()}
                    </CardBlock>
                </Card>
            </Col >);
    }

    renderFeatures(): Object {
        let labels = [];
        for (let i = 0; i < this.props.features.length; i++) {
            labels.push(<Badge key={i} style={{marginRight:10}}>{this.props.features[i]}</Badge>);
        }
        return labels;
    }

}
