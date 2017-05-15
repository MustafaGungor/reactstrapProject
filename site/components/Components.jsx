import React from "react";
import ShallowComponent from "robe-react-commons/lib/components/ShallowComponent";
import {Application} from "robe-react-commons";
import Renderer from "./Renderer";
import {Container, Col, Collapse,ListGroup, ListGroupItem, InputGroup, Nav, NavItem, Row} from "reactstrap";
import ComponentList from "./ComponentList";
import Progress from "progress/Progress";
import FaIcon from "faicon/FaIcon";
import "./style.css";


export default class Components extends ShallowComponent {

    constructor(props: Object) {
        super(props);
        this.state = {
            componentSelection: window.location.hash.substring(1) === "Components" ? "Components/functional/Button" : window.location.hash.substring(1),
            filter: "",
            selectedGroup: window.location.hash.substring(1) === "Components" ? "functional" : window.location.hash.split("/")[1]
        };
    }

    render(): Object {
        let componentDetail = [];
        let componentMenu = [];
        let selectedGroup = window.location.hash.split("/")[1] || this.state.selectedGroup;
        let components = ComponentList.getList()[selectedGroup];
        for (let i = 0; i < components.length; i++) {
            let item = components[i];
            let active = this.state.componentSelection === `Components/${selectedGroup}/${item.header}`;
            if (item.header.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1) {
                componentMenu.push(
                    <ListGroupItem
                        href={`#Components/${selectedGroup}/${item.header}`}
                        key={`#${item.header}`}
                        onClick={this.__onComponenListClick.bind(undefined, item.header)}
                        active={active}
                    >
                        {item.header}
                    </ListGroupItem>);
                if (active) {
                    componentDetail = (
                        <Renderer
                            ref="renderer"
                            header={item.header}
                            desc={item.desc}
                            alternatives={item.alternatives}
                            json={item.json}
                            sample={item.sample}
                            code={item.code}
                        />);
                }
            }
        }
        return (
            <Container>
                <Row>
                <Col xs={12} sm={3} style={{paddingLeft: 0, marginTop: 25}}>
                    <ListGroup className="side-menu">
                        <ListGroupItem
                            active={selectedGroup === "functional"}
                            onClick={this.__onGroupChange.bind(undefined, "functional")}>
                            <FaIcon code="fa-cubes" fixed={true}/>&nbsp;&nbsp;
                            {Application.i18n(Components, "components.Components", "functional")}
                        </ListGroupItem>
                        <Collapse isOpen={selectedGroup === "functional"}>
                            <div className="componentMenu">
                                    {componentMenu}
                            </div>
                        </Collapse>
                        <ListGroupItem
                            active={selectedGroup === "layout"}
                            onClick={this.__onGroupChange.bind(undefined, "layout")}>
                            <FaIcon code="fa-sliders" fixed={true}/>&nbsp;&nbsp;
                            {Application.i18n(Components, "components.Components", "layout")}
                        </ListGroupItem>
                        <Collapse isOpen={selectedGroup === "layout"}>
                            <div className="componentMenu">
                                {componentMenu}
                            </div>
                        </Collapse>
                        <ListGroupItem
                            active={selectedGroup === "inputs"}
                            onClick={this.__onGroupChange.bind(undefined, "inputs")}>
                            <FaIcon code="fa-terminal" fixed={true}/>&nbsp;&nbsp;
                            {Application.i18n(Components, "components.Components", "inputs")}
                        </ListGroupItem>
                        <Collapse isOpen={selectedGroup === "inputs"}>
                            <div className="componentMenu">
                                {componentMenu}
                            </div>
                        </Collapse>
                        <ListGroupItem
                            active={selectedGroup === "charts"}
                            onClick={this.__onGroupChange.bind(undefined, "charts")}>
                            <FaIcon code="fa-pie-chart" fixed={true}/>&nbsp;&nbsp;
                            {Application.i18n(Components, "components.Components", "charts")}
                        </ListGroupItem>
                        <Collapse isOpen={selectedGroup === "charts"}>
                            <div className="componentMenu">
                                {componentMenu}
                            </div>
                        </Collapse>
                        <ListGroupItem
                            active={selectedGroup === "extras"}
                            onClick={this.__onGroupChange.bind(undefined, "extras")}>
                            <FaIcon code="fa-ambulance" fixed={true}/>&nbsp;&nbsp;
                            {Application.i18n(Components, "components.Components", "extras")}
                        </ListGroupItem>
                        <Collapse isOpen={selectedGroup === "extras"}>
                            <div className="componentMenu">
                                {componentMenu}
                            </div>
                        </Collapse>
                    </ListGroup>

                </Col>
                <Col xs={12} sm={9} style={{padding: 0, marginTop: 25}}>
                    {componentDetail}
                </Col>
                </Row>
            </Container>
        );
    }

    __onGroupChange = (selectedKey: string) => {
        let selectedComponent;
        switch (selectedKey) {
            case "functional": {
                selectedComponent = "Button";
            }
                break;
            case "layout": {
                selectedComponent = "DragDropLayout";
            }
                break;
            case "inputs": {
                selectedComponent = "CheckInput";
            }
                break;
            case "charts": {
                selectedComponent = "AreaChart";
            }
                break;
            case "extras": {
                selectedComponent = "Countdown";
            }
                break;
            default:
        }
        window.location.hash = `Components/${selectedKey}/${selectedComponent}`;
        this.setState({
            selectedGroup: selectedKey,
            componentSelection: `Components/${selectedKey}/${selectedComponent}`
        });
    };

    __onFilterChange = (e: Object) => {
        this.setState({
            filter: e.target.value
        });
    };

    __onComponenListClick = (key:String) => {
        this.setState({
            componentSelection: `Components/${this.state.selectedGroup}/${key}`
        });
        Progress.start();
    };

}
