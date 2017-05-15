import React from "react";
import { Application,ShallowComponent } from "robe-react-commons";
import Button from "robe-react-ui/lib/buttons/Button";
import Toast from "robe-react-ui/lib/toast/Toast";
import {Label} from "reactstrap";


export default class ButtonSample extends ShallowComponent {

    render():Object {
        return (
            <div>
                <Label>{Application.i18n(ButtonSample,"buttons.ButtonSample","buttonNormal")}</Label>
                <div className="form-group">
                    <Button color="primary" onClick={ButtonSample.onClick}>Normal</Button>
                </div>
                <Label>{Application.i18n(ButtonSample,"buttons.ButtonSample","buttonAsync")}</Label>
                <div className="form-group">
                    <Button color="warning" onClickAsync={this.onClickAsync}>{Application.i18n(ButtonSample,"buttons.ButtonSample","async")}</Button>
                </div>
                <a href="https://reactstrap.github.io/components/buttons/" rel="noopener noreferrer"
                   target="_blank">{Application.i18n(ButtonSample,"buttons.ButtonSample","forMoreLink")}</a>
            </div>
        );
    }
    static onClick(e: Object) {
        Toast.info(`Button Click: ${e.target.innerText}`);
    }

    onClickAsync(e: Object, done: Function) {
        let me = this;
        // We used setTimeout to simulate an AJAX call.
        setTimeout(function () {
            me.onResponse(done);
        }, 1000);
    }

    onResponse(done: Function) {
        Toast.warning("Button Click: Async");
        // done method is important
        // Call this after all operations are done (at the end of AJAX)
        done();
    }
}
