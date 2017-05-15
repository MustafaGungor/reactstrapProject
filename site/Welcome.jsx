import React from "react";
import ShallowComponent from "robe-react-commons/lib/components/ShallowComponent";
import {Application} from "robe-react-commons";
import {Container, Row, Col, Alert} from "reactstrap";
import FaIcon from "faicon/FaIcon";
import Card from "./Card";

export default class Welcome extends ShallowComponent {

    render(): Object {
        return (
            <div>
                <Container>
                        <Card style={{background: "#eee"}} className="text-center pagination-centered banner">
                            <img src="./avatar.png"/>
                            <h1>Robe React UI</h1>
                            <h4>{Application.i18n(Welcome, "site.Welcome", "headerText")} <a
                                href="https://reactstrap.github.io/"><code>Reactstrap</code></a></h4>
                        </Card>
                        <Card style={{background: "#fff"}}>
                            <Row>
                            <Col xs={12}>
                                <h2>{Application.i18n(Welcome, "site.Welcome", "welcome")}</h2>
                                <p>{Application.i18n(Welcome, "site.Welcome", "welcomeText")}</p>
                                <br/>
                            </Col>
                            <Col sm={4}>
                                <h4>{Application.i18n(Welcome, "site.Welcome", "dataGrid")}</h4>
                                {Application.i18n(Welcome, "site.Welcome", "dataGridText")}
                            </Col>
                            <Col sm={4}>
                                <h4>{Application.i18n(Welcome, "site.Welcome", "standartUsage")}</h4>
                                {Application.i18n(Welcome, "site.Welcome", "standartUsageText")}
                            </Col>
                            <Col sm={4}>
                                <h4>{Application.i18n(Welcome, "site.Welcome", "readyForComplexNeeds")}</h4>
                                {Application.i18n(Welcome, "site.Welcome", "readyForComplexNeedstext")}
                            </Col>
                            </Row>
                        </Card>
                        <Card style={{background: "#fff"}}>
                            <Col sm={6}>
                                <h4>{Application.i18n(Welcome, "site.Welcome", "bootstrapSupport")}</h4>
                                {Application.i18n(Welcome, "site.Welcome", "bootstrapSupportText")} <a
                                href="http://reactstrap.github.io/components/"><code>Reactstrap</code></a>.
                            </Col>
                        </Card>
                        <Card border={false} style={{padding: 0}}>
                            <Alert color="warning">
                                <FaIcon code="fa-exclamation"/> {Application.i18n(Welcome, "site.Welcome", "footer")}
                            </Alert>
                        </Card>

                </Container>

            </div>
        );
    }
}
