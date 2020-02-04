import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
    // return React.createElement("div", {
    //     id: "something-important"
    // }, [
    //     React.createElement("h1", {}, "Adopt Me!"),
    //     React.createElement(Pet, {
    //         name: "Luna",
    //         animal: "Dog",
    //         breed: "Havanese"
    //     }),
    //     React.createElement(Pet, {
    //         name: "Pepper",
    //         animal: "Bird",
    //         breed: "Cockatiel"
    //     }),
    //     React.createElement(Pet, {
    //         name: "Doink",
    //         animal: "Cat",
    //         breed: "Mixed"
    //     })
    // ]);
    return(
        <div>
            <h1 id="something-important">Adopt Me!</h1>
            <Pet name="Luna" animal="Dog" breed="Havenese" />
            <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
            <Pet name="Doink" animal="Cat" breed="Mixed" />
        </div>

    );
};

ReactDOM.render(
    React.createElement(App), //Composite Component- component you and i have created.
    document.getElementById("root")
);