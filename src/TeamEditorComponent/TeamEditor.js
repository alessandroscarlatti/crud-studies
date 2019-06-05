import React from 'react';
import ViewingPenguin from './ViewingPenguin';

export default class TeamEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            penguins: []
        }

        this.initWithPenguins = this.initWithPenguins.bind(this);
    }

    initWithPenguins(rawPenguins) {
        let penguins = [];
        rawPenguins.forEach(rawPenguin => {
            let penguin = {
                state: "VIEW",
                data: rawPenguin,
            }
            penguins.push(penguin);
        })

        this.setState({
            penguins: penguins,
        })
    }

    componentDidMount() {
        // get the penguins from the repository
        this.props.penguinRepository.getPenguins(this.initWithPenguins);
    }

    render() {
        let penguins = [];

        this.state.penguins.forEach(penguin => {
            penguins.push(<ViewingPenguin key={penguin.data.id} penguin={penguin} />)
        })

        return (
            <div>
                <div>TeamEditor</div>
                {penguins}
            </div>
        )
    }
}