import React from 'react';
import ViewingPenguin from './ViewingPenguin';
import EditingPenguin from './EditingPenguin';

export default class TeamEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            penguins: []
        }

        this.initWithPenguins = this.initWithPenguins.bind(this);
        this.editStart = this.editStart.bind(this);
        this.editCancel = this.editCancel.bind(this);
        this.editSave = this.editSave.bind(this);
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

    editStart(penguinEdit) {
        console.log("edit start", penguinEdit);
        let penguins = [];
        this.state.penguins.forEach(penguin => {
            if (penguin.data.id === penguinEdit.data.id) {
                penguin.state = "EDIT";
            }
            penguins.push(penguin);
        })

        this.setState({
            penguins: penguins
        })
    }

    editCancel(penguinEdit) {
        console.log("Edit Cancel.", penguinEdit);
        let penguins = [];
        this.state.penguins.forEach(penguin => {
            if (penguin.data.id === penguinEdit.data.id) {
                penguin.state = "VIEW";
            }
            penguins.push(penguin);
        })

        this.setState({
            penguins: penguins,
        })
    }

    editSave(penguinSave) {
        console.log("Edit Save.", penguinSave);
        let penguins = [];
        this.state.penguins.forEach(penguin => {
            if (penguin.data.id === penguinSave.data.id) {
                penguin.state = "VIEW";
                penguin.data = penguinSave.data;
            }
            penguins.push(penguin);
        })

        this.setState({
            penguins: penguins,
        })
    }

    penguinComponentFactory(penguin) {
        switch (penguin.state) {
            case "VIEW":
                return <ViewingPenguin key={penguin.data.id} penguin={penguin} editStart={this.editStart} />
            case "EDIT":
                return <EditingPenguin key={penguin.data.id} penguin={penguin} editCancel={this.editCancel} editSave={this.editSave}/>
        }
    }

    componentDidMount() {
        // get the penguins from the repository
        this.props.penguinRepository.getPenguins(this.initWithPenguins);
    }

    render() {
        let penguins = [];

        this.state.penguins.forEach(penguin => {
            penguins.push(this.penguinComponentFactory(penguin))
        })

        return (
            <div>
                <div>TeamEditor</div>
                {penguins}
            </div>
        )
    }
}