import React from "react";
import FaIcon from "faicon/FaIcon";
import { Application,ShallowComponent } from "robe-react-commons";
import { Image } from "reactstrap";

export default class NotFound extends ShallowComponent {
    static style = {
        verticalAlign: "middle",
        textAlign: "center",
        paddingTop: 150
    };

    render() {
        return (<div style={NotFound.style}>
            <img src="./notfound.gif" rounded />
            <h2>{Application.i18n(NotFound,"error.NotFound","message")}</h2>
        </div>);
    }

}
