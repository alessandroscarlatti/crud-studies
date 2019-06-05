import React from 'react';

export default class ViewingPenguin extends React.Component {

    constructor(props) {
        super(props);

        this.editStart = this.editStart.bind(this);
    }

    editStart() {
        if (this.props.editStart != null)
            this.props.editStart(this.props.penguin);
    }

    render() {
        return (
            <h2>{this.props.penguin.data.name} <button onClick={this.editStart}>Edit</button></h2>
        )
    }
}