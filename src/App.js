import {useState} from "react";
import {ComponentOne} from "./components/ComponentOne";
import {ComponentTwo} from "./components/ComponentTwo";
import {useSelector} from "react-redux";

const App = () => {
    const{count} = useSelector(state => state.counter1) //state - це store, з якого витягуємо reducer і цей хук віддає initialState нашого слайсу
    const {count:count2} = useSelector(state => state.counter2)
    return (
        <div>
            <div>
                count: {count}
                <ComponentOne/>
            </div>
            <div>
                count2: {count2}
                <ComponentTwo/>
            </div>

        </div>
    );
};

export {App};