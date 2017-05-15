import React from "react";
import Rating from "robe-react-ui/lib/rating/Rating";
import {Label} from "reactstrap";
import {Application, ShallowComponent} from "robe-react-commons";

export default class RatingSample extends ShallowComponent {
    constructor(props:Object) {
        super(props);
        this.state = {};
    }

    render():Object {
        return (
            <span>
                <div style={{marginBottom: 10}}>
                    <Label>
                        {Application.i18n(RatingSample, "rating.RatingSample", "ratingOne")}
                    </Label><br/>
                    <Rating currentValue={8}
                            onChange={this.__handleChange}
                            onMouseOver={this.__handleMouseOver}
                    />
                 </div>
                <div style={{marginBottom: 10}}>
                    <Label>
                        {Application.i18n(RatingSample, "rating.RatingSample", "ratingTwo")}
                    </Label><br/>
                    <Rating size={2}
                            currentValue={4.5}
                            onChange={this.__handleChange}
                            disabled
                    />
                </div>
                <div style={{marginBottom: 10}}>
                    <Label>
                        {Application.i18n(RatingSample, "rating.RatingSample", "ratingThree")}
                    </Label><br/>
                    <Rating size={1}
                            iconCount={5}
                            initialIcon="fa-heart-o"
                            selectedIcon="fa-heart"
                            style={{color: "red"}}
                            onChange={this.__handleChange}
                    />
                </div>
                <div style={{marginBottom: 10}}>
                    <Label>
                        {Application.i18n(RatingSample, "rating.RatingSample", "ratingFour")}
                    </Label><br/>
                    <Rating/>
                </div>
            </span>
        );
    }

    __handleMouseOver(e) {
        console.log(e.target.value, e.target.parsedValue);
    }

    __handleChange(e) {
        console.log(e.target.value, e.target.parsedValue);
    };
}
