import React from "react";
import {
    ShallowComponent,
    Store,
    Application,
    RemoteEndPoint,
    Assertions,
    LocalEndPoint
} from "robe-react-commons";
import ModalDataForm from "robe-react-ui/lib/form/ModalDataForm";
import DataGrid from "robe-react-ui/lib/datagrid/DataGrid";
import FaIcon from "robe-react-ui/lib/faicon/FaIcon";
import DataGridModel from "./DataGridModel.json";
import DataGridMapModel from "./DataGridMapModel.json";
import { Label, Button } from "reactstrap";


const propsOfFields = {
    job: {
        items: [
            {
                value: "sd",
                text: "Software Developer"
            },
            {
                value: "sa",
                text: "Software Architect"
            }
        ]
    },
    gender: {
        items: [
            {
                value: "male",
                text: " Male"
            },
            {
                value: "female",
                text: "Female"
            }
        ]
    }
};

export default class DataGridSample extends ShallowComponent {

    static idField = "id";

    constructor(props: Object) {
        super(props);

        const data = [
            { id: 1, name: "John", surname: "Doe", password: "123123", job: "sd", gender: "male", email: "johndoe@example.com", birthdate: "1995-12-25" },
            { id: 2, name: "Jane", surname: "Roe", password: "123123", job: "sa", gender: "female", email: "janeroe@example.com", birthdate: "1995-12-30" }
        ];

        const data2 = [
            { id: 1, name: "John", surname: "Doe", password: "123123", job: "sd", gender: "male", email: "johndoe@example.com", birthdate: "1995-12-25" },
            { id: 2, name: "Jane", surname: "Roe", password: "123123", job: "sa", gender: "female", email: "janeroe@example.com", birthdate: "1995-12-30" }
        ];

        const mappingData = [
            { id: 1, personal: { name: "John", surname: "Doe" } },
            { id: 1, personal: { name: "Jane", surname: "Roe" } }
        ];

        let store1 = new Store({
            endPoint: new LocalEndPoint({
                data: data,
                idField: DataGridSample.idField
            }),
            idField: DataGridSample.idField,
            autoLoad: true
        });
        let store2 = new Store({
            endPoint: new LocalEndPoint({
                data: data2,
                idField: DataGridSample.idField
            }),
            idField: DataGridSample.idField,
            autoLoad: true
        });

        let store3 = new Store({
            endPoint: new LocalEndPoint({
                data: data,
                idField: DataGridSample.idField
            }),
            idField: DataGridSample.idField,
            autoLoad: true
        });

        let store4 = new Store({
            endPoint: new LocalEndPoint({
                data: data,
                idField: DataGridSample.idField
            }),
            idField: DataGridSample.idField,
            autoLoad: true
        });

        let store5 = new Store({
            endPoint: new LocalEndPoint({
                data: mappingData,
                idField: DataGridSample.idField
            }),
            idField: DataGridSample.idField,
            autoLoad: true
        });


        let actionFields = [
            {
                label: "id",
                type: "number",
                name: "id",
                tooltip: "id",
                visible: false,
                filter: true,
                range: true,
                sort: "asc"
            },
            {
                label: "Name",
                type: "string",
                name: "name",
                tooltip: "Name",
                filter: true,
                sort: "asc",
                validations: {
                    required: true
                }
            },
            {
                label: "Surname",
                type: "string",
                name: "surname",
                tooltip: "Surname",
                sort: "desc"
            },
            {
                name: "actions",
                label: "Actions",
                renderer: this.__actionBtn,
                width: "1%"
            }
        ];

        this.state = {
            fields: DataGridModel.fields,
            fieldsMap: DataGridMapModel.fields,
            actionFields: actionFields,
            store1: store1,
            store2: store2,
            store3: store3,
            store4: store4,
            store5: store5,
            showModal: false,
            item: {},
            dataRow : []

        };
    }

    render(): Object {
        return (
            <span>
                <Label>{Application.i18n(DataGridSample, "datagrid.DataGridSample", "gridOne")}</Label>
                <DataGrid
                    fields={this.state.fields}
                    propsOfFields={propsOfFields}
                    store={this.state.store1}
                    ref="table1"
                    toolbar={[{ name: "create" }, { name: "edit" }, { name: "delete" }, { name: "export" }]}
                    onNewClick={this.__addNewColumn}
                    onEditClick={this.__edit}
                    onDeleteClick={this.__remove}
                    exportButton={true}
                    editable={true}
                    inline={true}
                    onClick={this.__onPointClick}
                    onDoubleClick={this.__onDoubleClick}
                />
                <Label>{Application.i18n(DataGridSample, "datagrid.DataGridSample", "gridTwo")}</Label>
                <DataGrid
                    fields={this.state.fields}
                    propsOfFields={propsOfFields}
                    store={this.state.store2}
                    toolbar={[{ name: "custom", text: "Custom", icon: "fa-university", onClick: () => { alert("Custom button clicked"); } }]}
                    onNewClick={this.__add}
                    onEditClick={this.__edit}
                    onDeleteClick={this.__remove}
                    exportButton={true}
                    editable={true}
                    refreshable={true}
                    pagination={{ pageSize: 1 }}
                    pageSizeButtons={["1", "2", "3"]}
                    columnMenu={false}
                />
                <Label>{Application.i18n(DataGridSample, "datagrid.DataGridSample", "gridThree")}</Label>
                <DataGrid
                    fields={this.state.fields}
                    propsOfFields={propsOfFields}
                    store={this.state.store3}
                    exportButton={true}
                    cellRenderer={DataGridSample.cellRenderer}
                />
                <Label>DataGrid (DataFilter)</Label>
                <DataGrid
                    fields={this.state.fields}
                    propsOfFields={propsOfFields}
                    store={this.state.store4}
                    searchable={false}
                    datafilter={true}
                />
                <ModalDataForm
                    show={this.state.showModal}
                    onSubmit={this.__onSave}
                    onCancel={this.__onCancel}
                    defaultValues={this.state.item}
                    fields={this.state.fields}
                    propsOfFields={propsOfFields}
                />
                <Label>Mapping</Label>
                <DataGrid
                    fields={this.state.fieldsMap}
                    store={this.state.store5}
                    exportButton={true}
                />
                <Label>Action Button</Label>
                <DataGrid
                    fields={this.state.actionFields}
                    store={this.state.store3}
                    exportButton={true}
                />
            </span>
        );
    }

    __addNewColumn(){
        this.refs.table1.__addRow(true);
    }

    __add() {
        let empty = {};
        debugger;
        this.__showModal(empty);
    }
    __onPointClick(e :Object){
        let selectedCell = this.refs.table1.getSelectedRows();
        if(this.state.dataRow === selectedCell){
            debugger;
        }else{
            this.setState({dataRow : selectedCell});
        }
    }
    __edit() {
        let selectedRows = this.refs.table1.getSelectedRows();
        if (!selectedRows || !selectedRows[0]) {
            return;
        }
        this.__showModal(selectedRows[0]);
    }

    __onCancel() {
        this.setState({ showModal: false });
    }

    __onSave(newData: Object, callback: Function) {
        let id = newData[DataGridSample.idField];
        if (Assertions.isNotEmpty(id)) {
            this.state.store1.update(newData);
        } else {
            this.state.store1.create(newData);
        }
        if (newData) {
            callback(true);
            this.setState({
                showModal: true
            });
        }
    }

    __remove() {
        let selectedRows = this.refs.table1.getSelectedRows();
        this.state.store1.delete(selectedRows[0]);
    }

    __showModal(newItem: Object) {
        this.setState({ showModal: true, item: newItem });
    }

    __actionClick(row) {
        alert(row.name);
    }


    static cellRenderer(idx: number, fields: Array, row: Object) {
        if (fields[idx].visible !== false) {
            return <td key={fields[idx].name}><FaIcon code={"fa-smile-o"} /> {row[fields[idx].name]}</td>;
        }
        return undefined;
    }

    __actionBtn(row: Object) {
        let me = this;
        return (<Button color="success" size="sm" onClick={() => { return me.__actionClick(row); }}>Action</Button>);
    }
}
