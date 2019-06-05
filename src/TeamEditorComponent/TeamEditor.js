import React from 'react';
import ViewingPenguin from './ViewingPenguin';

export default class TeamEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            penguins: [
                {
                    id: 0,
                    state: "VIEW",
                    data: {
                        name: "phil"
                    }
                },
                {
                    id: 1,
                    state: "VIEW",
                    data: {
                        name: "annie"
                    }
                }
            ]
        }

    }

    render() {

        let penguins = [];

        this.state.penguins.forEach(penguin => {
            penguins.push(<ViewingPenguin />)
        })

        return (
            <div>
                <div>TeamEditor</div>
                {penguins}
            </div>
        )
    }
}