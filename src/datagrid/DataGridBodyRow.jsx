import React from "react";
import { ShallowComponent,Assertions,Objects } from "robe-react-commons";
import is from "is-js";
import ComponentManager from "../form/ComponentManager";
import "./DataGridBodyRow.css";

export default class DataTableBodyRow extends ShallowComponent {

    /**
     * @type {func}
     */
    static propTypes = {
        onClick: React.PropTypes.func,
        resources: React.PropTypes.object,
        fields: React.PropTypes.array,
        data: React.PropTypes.object,
        onSelection: React.PropTypes.func,

        /**
         * Render method for the row. Use for custom row templates
         */
        rowRenderer: React.PropTypes.func,

        /**
         * Render method for the cell. Use for custom cell templates.
         * Default row template will call for every cell render event.
         */
        cellRenderer: React.PropTypes.func
    };
    __onChanges = {};
    constructor(props: Object) {
        super(props);
        let dataRow = this.props.data;
        this.state = {
            selected: false,
            editCellId: [],
            classesCellId: "",
            dataRow : dataRow,
            changeSave : false, //tıklatıktan sonra gridi tekrardan basmasın
            beforeRow : []
        };
    }

    render(): Object {
        if (this.props.rowRenderer !== undefined) {
            return this.props.rowRenderer(this.props.fields, this.state.dataRow);
        }
        return this.__generateRow(this.props.fields, this.state.dataRow);
    }

    __generateRow(fields: Array<Map>, row: Object): Object {
        if (!row) {
            return null;
        }

        if (!is.object(row)) {
            throw Error(`Undefined data row at: ${row}`);
        }

        let cells = [];
        for (let j = 0; j < fields.length; j++) {
            let cell;
            if (this.props.cellRenderer !== undefined) {
                cell = this.props.cellRenderer(j, fields, row);
            } else {
                cell = this.__cellRenderer(j, fields, row);
            }
            if (cell !== undefined) {
                cells.push(cell);
            }
        }
        let rowClassName = "datagrid-body-row";
        if (this.state.selected) {
            rowClassName = `${rowClassName}-selected`;
        }

        return (
            <tr className={rowClassName} onClick={this.__onClick} key={row[this.props.idField]}>
                {cells}
            </tr>
        );
    }

    __cellRenderer(idx: number, fields: Array, row: Object): Object {
        let me = this;
        let column = fields[idx];
        let cellId = "row-"+row[this.props.idField]+"-cell-"+idx;
        let field = fields[idx];

        let Component = ComponentManager.getComponent(field.type);
        if (column.visible !== false) {
            let value = row[column.name];
            if (column.mapping != undefined) {
                try {
                    value = eval("row."+column.mapping);
                } catch (e) {
                    value = row[column.name];
                }
            }

            let result;
            if (column.renderer != undefined){
                result = column.renderer(this.props.data);
            } else {
                result = column.displayAsText ? column.displayAsText(column.type, column, value, row) : ComponentManager.getDisplayAsText(column.type, column, value, row);
            }

            let classNameCell = "";
            if (this.state.editCellId.length > 0 && this.props.inline == true){
                let selectedCell = this.state.editCellId.filter(function(r){
                    return r == cellId;
                });

                if(field.type === "radio")
                    field.type = "select";
                if(field.change != false ){
                    if (selectedCell.length > 0){
                        result = value;
                        //autoFocus parametresi eklenerek focus özelliği eklendi.
                        result = (<Component
                            {...field}
                            value={result}
                            onChange={this.__onChange}
                            validationDisplay="block"
                            className = "focus-click focus-alert"
                            autoFocus
                        />)
                        classNameCell = "edited-cell"
                    }
                }
            }

            return (<td id={cellId} key={column.name} className={classNameCell} onClick={this.__cellOnClick}>{result}</td>);

        }
        return undefined;
    }
    __onChange(e: Object): boolean {  //dataformdaki onChange metodu buraya da eklendi.
        let me = this;
        let name = e.target.name;
        let value = e.target.parsedValue !== undefined ? e.target.parsedValue : e.target.value;
        let state = {};

        state[name] = value;
        let objectData = this.state.dataRow; //dataRow yeni bir dataya aktarılıyor.
        objectData[name] = value;
        this.setState({dataRow:objectData});
        if (this.__onChanges[name]) {
            let result = this.__onChanges[name](e, (result2: boolean) => {
                me.__setPropsOfFields(result2, state);
                me.setState(state);
                return false;
            });
            if (result) {
                this.__setPropsOfFields(result, state);
            }
            if (result !== false) {
                this.setState(state);
            }
        } else {
            this.setState(state);
        }
        return true;
    }
    __onClick() {
        if (this.props.onSelection) {
            this.props.onSelection(this);
        }

        if (this.props.onClick) {
            this.props.onClick(this.props.data);
        }
    }
    __setPropsOfFields(propsOfFields: Object, state: Object) {
        if (Assertions.isObject(propsOfFields)) {
            for (let targetName in propsOfFields) {
                if (Objects.hasProperty(propsOfFields, targetName)) {
                    this.__setPropsOfField(targetName, propsOfFields[targetName], state);
                }
            }
        }
    }


    __cellOnClick(e){
        if (!e.currentTarget.classList.contains("edited-cell")){
            this.setState({editCellId:[e.target.id]})
        }
    }

    shouldComponentUpdate(): boolean {
        return true;
    }


}
