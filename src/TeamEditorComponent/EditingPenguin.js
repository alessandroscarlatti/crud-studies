import React from 'react';

export default class EditingPenguin extends React.Component {

    constructor(props) {
        super(props);

        this.editCancel = this.editCancel.bind(this);
        this.editSave = this.editSave.bind(this);
        this.updateName = this.updateName.bind(this);
        this.state = {
            name: this.props.penguin.data.name
        }
    }

    editCancel() {
        if (this.props.editCancel != null)
            this.props.editCancel(this.props.penguin);
    }

    editSave() {
        if (this.props.editSave != null) {
            let penguin = this.props.penguin;
            penguin.data.name = this.state.name
            this.props.editSave(penguin);
        }
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <h2>
                <input type="text" value={this.state.name} onChange={this.updateName}/>
                {' '}
                <button onClick={this.editSave}>Save</button>
                {' '}
                <button onClick={this.editCancel}>Cancel</button>
            </h2>
        )
    }
}