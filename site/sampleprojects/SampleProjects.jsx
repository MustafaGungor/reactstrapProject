import React from "react";
import {Application} from "robe-react-commons";
import {Container, Thumbnail, Row, Col, Label} from "reactstrap";
import Renderer from "./Renderer";
import ProjectList from "./ProjectList";

export default class SampleProjects extends React.Component {

    render(): Object {
        return (
            <Container>
                <br/>
                <h2>{Application.i18n(SampleProjects, "sampleprojects.SampleProjects", "title")}</h2>
                    <h5>{Application.i18n(SampleProjects, "sampleprojects.SampleProjects", "header")}</h5>
                <br/>
                <Row>
                    {this.renderProjects()}
                </Row>
            </Container>
        );
    }

    renderProjects() {
        let projects = [];
        for (let i = 0; i < ProjectList.length; i++) {
            projects.push(
                <Renderer
                    key={ProjectList[i].header}
                    header={ProjectList[i].header}
                    desc={ProjectList[i].desc}
                    image={ProjectList[i].image}
                    link={ProjectList[i].link}
                    features={ProjectList[i].features}
                />);
        }
        return projects;
    }
}
