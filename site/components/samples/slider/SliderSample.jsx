import React from "react";
import Slider from "robe-react-ui/lib/slider/Slider";
import {Application, ShallowComponent} from "robe-react-commons";
import {Label, Col, Row} from "reactstrap";

export default class SliderSample extends ShallowComponent {
    constructor(props:Object) {
        super(props);
        this.state = {};
    }

    render():Object {
        return (<span>
                <Row>
                    <Col sm={6}>
                                           <Col style={{paddingBottom:50}}>
                       <Label style={{marginBottom: 12}}>
                           {Application.i18n(SliderSample, "slider.SliderSample", "sliderOne")}
                       </Label>
                       <Slider defaultValue={30}
                               minLabel="0 °C"
                               maxLabel="100 °C"
                               unit="°C"
                               onAfterChange={this.handleAfterChange}
                               onChange={this.handleChange}/>
                   </Col>
                   <Col style={{paddingBottom:50}}>
                       <Label style={{marginBottom: 12}}>
                           {Application.i18n(SliderSample, "slider.SliderSample", "sliderTwo")}
                       </Label>
                       <Slider minValue={25000}
                               maxValue={50000}
                               step={5000}
                               minLabel="25000 €"
                               maxLabel="50000 €"
                               unit="€"
                               onChange={this.handleChange}/>
                   </Col>
                   <Col style={{paddingBottom:50}}>
                       <Label style={{marginBottom: 12}}>
                           {Application.i18n(SliderSample, "slider.SliderSample", "sliderThree")}
                       </Label>
                       <Slider step={0.05}
                               minValue={0}
                               maxValue={1}
                               onChange={this.handleChange}/>
                   </Col>
                   <Col style={{paddingBottom:50}}>
                       <Label style={{marginBottom: 12}}>
                           {Application.i18n(SliderSample, "slider.SliderSample", "sliderFour")}
                       </Label>
                       <Slider defaultValue={50}
                               disabled/>
                   </Col>
                </Col>
                    <Col sm={6}>
                   <Col style={{paddingBottom:50}}>
                       <Label style={{marginBottom: 12}}>
                           {Application.i18n(SliderSample, "slider.SliderSample", "sliderFive")}
                       </Label>
                       <Slider range
                               defaultValue={[40,90]}
                               minValue={20}
                               maxValue={120}
                               onChange={this.handleChange}/>
                   </Col>
                   <Col style={{paddingBottom:50}}>
                       <Label style={{marginBottom: 12}}>
                           {Application.i18n(SliderSample, "slider.SliderSample", "sliderSix")}
                       </Label>
                       <Slider range
                               defaultValue={[0,100]}
                               step={10}
                               onAfterChange={this.handleAfterChange}
                               onChange={this.handleChange}/>
                   </Col>
                    <Col style={{paddingBottom:50}}>
                       <Label style={{marginBottom: 12}}>
                           {Application.i18n(SliderSample, "slider.SliderSample", "sliderSeven")}
                       </Label>
                       <Slider range
                               defaultValue={[0,1]}
                               step={0.01}
                               minValue={0}
                               maxValue={1}
                               onChange={this.handleChange}/>
                   </Col>
                   <Col style={{paddingBottom:50}}>
                       <Label style={{marginBottom: 12}}>
                           {Application.i18n(SliderSample, "slider.SliderSample", "sliderEight")}
                       </Label>
                       <Slider range
                               defaultValue={[40,90]}
                               disabled/>
                   </Col>
                </Col>
                </Row>
            </span>
        );
    }

    handleChange(e: Object) {
        console.log("onChange:", e.target.value);
    };

    handleAfterChange(e: Object) {
        console.log("onAfterChange:", e.target.value);
    }

}
