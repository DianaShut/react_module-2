import {useDispatch} from "react-redux";
import {carService} from "../../services";
import {carsActions} from "../../store/slices";

const Car = ({car}) => {
    const {id, brand, price, year} =car
    const dispatch = useDispatch()

    const deleteById = async () =>
    await carService.deleteById(id)
    dispatch(carsActions.trigger())

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carsActions.setCarForUpdate(car))}>update</button>
            <button onClick={deleteById}>delete</button>
        </div>
    );
};

export {Car};