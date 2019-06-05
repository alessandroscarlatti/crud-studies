export default class PenguinRepository {

    getPenguins(callback) {
        let penguins = [
            {
                id: 0,
                name: "phil"
            }, {
                id: 1,
                name: "annie"
            }
        ]
        console.log("Penguin repository returning penguins", penguins);

        setTimeout(() => {callback(penguins);}, 100)
    }
}