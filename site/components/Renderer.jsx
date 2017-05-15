import React from "react";
import {Button, ButtonGroup, Panel, Table, Collapse, TabContent, TabPane, Modal, OverlayTrigger, Tooltip, Row, Col, Card, CardText, CardTitle, Nav, NavItem, NavLink} from "reactstrap";
import {Maps, Application} from "robe-react-commons";
import ShallowComponent from "robe-react-commons/lib/components/ShallowComponent";
import Highlight from "react-highlight";
import Progress from "progress/Progress";
import FaIcon from "faicon/FaIcon";
import Toast from "toast/Toast";


export default class Renderer extends ShallowComponent {

    /**
     * Properties of the component
     *
     * @static
     */
    static propTypes = {
        /**
         * Component name
         */
        header: React.PropTypes.string,
        /**
         * Component description
         */
        desc: React.PropTypes.string,
        /**
         *
         */
        alternatives: React.PropTypes.object,
        /**
         * Component Props Json
         */
        json: React.PropTypes.object,
        /**
         * Component Sample Code Object
         */
        sample: React.PropTypes.object,
        /**
         * Component Sample Code string
         */
        code: React.PropTypes.string
    };

    static defaultProps = {
        json: {}
    };

    static clipboardStyle = {
        position: "absolute",
        display: "inline-table",
        marginTop: 5,
        opacity: 0.6,
        right: 36
    };

    /* eslint no-useless-constructor: 0*/
    constructor(props) {
        super(props);
        this.state = {
            showCode: false,
            dialogs: {},
            activeTab:"sample"
        };
    }

    toggle(tab) {
        this.setState({
            activeTab: tab
        });
    }

    render(): Object {
        let highlight = (
            <Collapse isOpen={this.state.showCode}>
                <div>
                    <div className="pull-right">
                        <ButtonGroup
                            style={Renderer.clipboardStyle}>
                            <Button
                                bsSize="xsmall"
                                onClick={this.__copyToClipboard}>
                                <FaIcon code="fa-clipboard"/>
                            </Button>
                        </ButtonGroup>
                    </div>
                    <Highlight className="javascript">
                        {this.props.code}
                    </Highlight>
                </div>
            </Collapse>
        );

        let codeSection = this.props.code ?
            (<div>
                {highlight}
                <Button color="link" size="sm" className="pull-right"
                        onClick={this.__toogleCode}>{(this.state.showCode ? "Hide" : "Show") + " Code"}</Button>
            </div>) : undefined;
        return (
            <div>
                <h3 style={{marginTop: 0}}>{this.props.header}</h3>
                <p><code>{`<${this.props.header}>`}</code> {this.props.desc}</p>
                <br/>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={(this.state.activeTab === 'sample')?"active":""}
                            onClick={() => { this.toggle('sample'); }}
                        >
                            {Application.i18n(Renderer, "components.Renderer", "example")}
                        </NavLink>
                    </NavItem>
                    {this.__renderPropsTable(this.props.json.props, "title")}
                    {this.__renderMethodsTable(this.props.json.methods, "title")}
                    {/*<NavItem>*/}
                        {/*<NavLink*/}
                            {/*className={(this.state.activeTab === '2')?"active":""}*/}
                            {/*onClick={() => { this.toggle('2'); }}*/}
                        {/*>*/}
                            {/*Moar Tabs*/}
                        {/*</NavLink>*/}
                    {/*</NavItem>*/}
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="sample">
                        <br/>
                        <this.props.sample.default />
                        {codeSection}
                    </TabPane>
                    {this.__renderPropsTable(this.props.json.props)}
                    {this.__renderMethodsTable(this.props.json.methods)}
                </TabContent>
                <br/>
                <br/>
                <br/>
            </div>);
    }

    __toogleCode() {
        this.setState({
            showCode: !this.state.showCode
        });
    }

    __copyToClipboard() {
        let textField = document.createElement("textarea");
        textField.innerHTML = this.props.code;

        document.body.appendChild(textField);

        let range = document.createRange();
        range.selectNode(textField);
        textField.select();

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        try {
            document.execCommand("copy");
            Toast.success("Copy successful.");
        } catch (err) {
            console.log("Oops, unable to copy");
        }
        document.body.removeChild(textField);
    }

    __renderPropsTable(data: Object, title: String): Array {
        if (data === undefined) {
            return undefined;
        }

        let rows = [];

        Maps.forEach(data, (value: any, key: string) => {
            let type = value.type !== undefined ? value.type.name : "";
            let defaultVal = value.defaultValue !== undefined ? value.defaultValue.value : "";
            let desc = value.description;
            let enumVals = "";
            if (defaultVal !== "" && (type === "object" || type === "shape" || type === "array")) {
                defaultVal = (
                    <div>
                        <a name={key} onClick={this.__onDetailClick}>JSON</a>
                        <Modal show={this.state.dialogs[key]} keyboard backdrop onHide={this.__onDetailClick}>
                            <Modal.Header
                                closeButton={true}><Modal.Title>{`${key} - defaultValue`}</Modal.Title></Modal.Header>
                            <Modal.Body>
                                <Highlight> {defaultVal} </Highlight>
                            </Modal.Body>
                        </Modal>
                    </div >
                );
            } else if (type === "enum") {
                let enumValues = [];
                for (let i = 0; i < value.type.value.length; i++) {
                    enumValues.push(value.type.value[i].value);
                }
                enumVals += `Possible Values: ${enumValues.join()}.`;
            }
            let required = value.required ? (
                    <OverlayTrigger placement="right" overlay={<Tooltip
                        id="tooltip">{Application.i18n(Renderer, "components.Renderer", "required")}</Tooltip>}>
                        <FaIcon style={{color: "red"}} code={"fa-exclamation"}/>
                    </OverlayTrigger>
                ) : undefined;
            rows.push(<tr key={key}>
                <td>{key}{required}</td>
                <td>{type}</td>
                <td>{defaultVal}</td>
                <td>{desc}<br/>{enumVals}</td>
            </tr>);
        });


        if (rows.length <= 0) {
            return undefined;
        }

        if (title != undefined){
            return (<NavItem>
                <NavLink
                    className={(this.state.activeTab === 'properties')?"active":""}
                    onClick={() => { this.toggle('properties'); }}
                >
                    {Application.i18n(Renderer, "components.Renderer", "propsBlockHeader")}
                </NavLink>
            </NavItem>);
        } else {
            return (
                <TabPane tabId="properties">
                    <br/>
                    <Table responsive striped condensed bordered>
                        <thead>
                        <tr>
                            <th>{Application.i18n(Renderer, "components.Renderer", "propsTableFieldOne")}</th>
                            <th>{Application.i18n(Renderer, "components.Renderer", "propsTableFieldTwo")}</th>
                            <th>{Application.i18n(Renderer, "components.Renderer", "propsTableFieldThree")}</th>
                            <th>{Application.i18n(Renderer, "components.Renderer", "propsTableFieldFive")}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rows}
                        </tbody>
                    </Table>
                </TabPane>
            );
        }
    }

    __renderMethodsTable(data: Object, title: String): Array {
        if (data === undefined) {
            return undefined;
        }
        let rows = [];

        for (let i = 0; i < data.length; i++) {
            let value = data[i];
            if (value.name.indexOf("__") === 0) {
                continue;
            }
            rows.push(<tr key={value.name}>
                <td>{value.name}</td>
                <td>{value.returns ? value.returns.type.name : ""}</td>
                <td>{value.description}</td>
            </tr>);
        }

        if (rows.length <= 0) {
            return undefined;
        }

        if (title != undefined){
            return (<NavItem>
                <NavLink
                    className={(this.state.activeTab === 'methods')?"active":""}
                    onClick={() => { this.toggle('methods'); }}
                >
                    {Application.i18n(Renderer, "components.Renderer", "methodBlockHeader")}
                </NavLink>
            </NavItem>);
        }

        return (
            <TabPane tabId="methods">
                <br/>
                <Table responsive striped condensed bordered>
                    <thead>
                    <tr>
                        <th>{Application.i18n(Renderer, "components.Renderer", "methodsTableFieldOne")}</th>
                        <th>{Application.i18n(Renderer, "components.Renderer", "methodsTableFieldTwo")}</th>
                        <th>{Application.i18n(Renderer, "components.Renderer", "methodsTableFieldThree")}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </Table>
            </TabPane>
        );
    }

    __onDetailClick(e) {
        let dialogs = this.state.dialogs;
        if (e === undefined || e.target === undefined || e.target.name === undefined) {
            Maps.forEach(dialogs, (value: any, key: string) => {
                dialogs[key] = false;
            });
        } else {
            dialogs[e.target.name] = !dialogs[e.target.name];
        }
        this.setState({
            dialogs
        });
        this.forceUpdate();
    }

    __onTabSelect(activeKey) {
        this.setState({activeTab: activeKey});
    }

    componentDidUpdate() {
        Progress.done();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({showCode: false, activeTab: "sample"});
    }
}
