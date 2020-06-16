import React from "react"
import {Recipes} from "./Recipes";
import {StateProvider} from "./Store";
import {Modal} from "./Modal";

const App = () => {
    return (
        <StateProvider>
            <Recipes></Recipes>
            <Modal></Modal>
        </StateProvider>
    );
};

export default App;
