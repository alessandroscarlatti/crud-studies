import React from 'react';

export default class ViewingPenguin extends React.Component {
    render() {
        return (
            <h2>{this.props.penguin.data.name}</h2>
        )
    }
}