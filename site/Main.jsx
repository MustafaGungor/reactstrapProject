import React from "react";
import {render} from "react-dom";
import {Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarBrand, Container, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import {ShallowComponent, Application, Assertions} from "robe-react-commons";
import Progress from "progress/Progress";
import Components from "./components/Components";
import Docs from "./docs/Docs";
import Welcome from "./Welcome";
import SampleProjects from "./sampleprojects/SampleProjects";
import "./style.css";
import {NotFound} from "./error";


export default class Main extends ShallowComponent {
    constructor(props: Object) {
        super(props);
        let path = window.location.hash.substring(1).split("/")[0];
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeKey: path,
            isOpen: false,
            langDropdownOpen: false
        };
        this.__onSelect = this.__onSelect.bind(this);
    }

    narbar = null;

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    langToggle() {
        this.setState({
            langDropdownOpen: !this.state.langDropdownOpen
        });
    }

    render(): Object {
        let activePage = Main.getActivePage(this.state.activeKey);
        return (
            <span>

                <Navbar color="faded" light toggleable className="headerMenu" style={{paddingBottom:0, paddingTop:0}}>
                    <NavbarToggler right onClick={this.toggle} style={{padding:"3px 5px"}} />
                    <NavbarBrand className="navbar-header" href="#Welcome" onClick={this.__goWelcome}>
                                                <img className="hidden-xs" src="./avatar.png" alt="logo"/>Robe React UI
                    </NavbarBrand>

                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav
                        className="ml-auto" navbar
                    activeKey={this.state.activeKey}
                    onSelect={this.__onSelect}
                    >
                        <NavItem>
<NavLink onClick={this.__onSelect} eventKey="Components">{Application.i18n(Main, "site.main", "components")}</NavLink>
                        </NavItem>
                        <NavItem>
                                          <NavLink onClick={this.__onSelect} eventKey="Samples">{Application.i18n(Main, "site.main", "samples")}</NavLink>
                        </NavItem>
                        <NavItem>
                                             <NavLink onClick={this.__onSelect} eventKey="About">{Application.i18n(Main, "site.main", "about")}</NavLink>
                        </NavItem>
                        <NavItem>
                                            <NavLink onClick={this.__onSelect} eventKey="Reactstrap">
                                                                    <img
                                                                        src="https://reactstrap.github.io/assets/logo.png"
                                                                        alt="rblogo"
                                                                        width={18}
                                                                    /> Reactstrap
                    </NavLink>
                        </NavItem>


          <NavDropdown isOpen={this.state.langDropdownOpen} toggle={this.langToggle} id="nav-dropdown">
            <DropdownToggle nav caret>
              {Application.i18n(Main, "site.main", "languageTitle")}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.__onSelect} eventKey="en_US">English</DropdownItem>
                    <DropdownItem onClick={this.__onSelect} eventKey="tr_TR">Türkçe</DropdownItem>
                    <DropdownItem onClick={this.__onSelect} eventKey="ru_RU">Pусский</DropdownItem>
            </DropdownMenu>
          </NavDropdown>

                                          <NavItem>
                                          <NavLink onClick={this.__onSelect} eventKey="github">{"Github"}</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>

        </Navbar>
                <div
                    id="activePage"
                    style={{overflowY: "auto", overflowX: "hidden", height: window.innerHeight - 48}}
                >
                    {activePage}
                </div>
                <Button color="danger">Danger!</Button>
            </span>
        );
    }

    __goWelcome() {
        this.__onSelect("Welcome");
    }

    __onSelect(key: string) {
        if (Assertions.isObject(key)){
            key = key._targetInst._currentElement.props.eventKey;
        }
        Progress.start();
        if (key === "Reactstrap") {
            window.open("https://reactstrap.github.io/");
            return;
        }

        if (key === "github") {
            window.open("https://github.com/robeio/robe-react-ui");
            return;
        }

        if (key === "en_US" || key === "tr_TR" || key === "ru_RU") {
            if (this.props.changeLanguage) {
                this.props.changeLanguage(`${key}.json`);
            }
            return;
        }
        window.location.hash = `#${key}`;

        let element = document.getElementById("activePage");
        element.scrollTop = 0;

        this.setState({
            activeKey: key
        });
        this.forceUpdate();
    }

    static getActivePage(path: string): Object {
        switch (path) {
            case "Components":
                return <Components />;
            case "Docs":
                return <Docs />;

            case "About":
                return <NotFound />;

            case "Samples":
                return <SampleProjects />;
            default:
                return <Welcome />;
        }
    }

    componentDidMount() {
        Progress.done();
    }

}
