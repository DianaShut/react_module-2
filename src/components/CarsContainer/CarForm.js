import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../store/slices";
import {useEffect} from "react";

const CarForm = () => {
    const {register, reset, handleSubmit, setValue} = useForm()
    const dispatch = useDispatch()
    const{carForUpdate} = useSelector(state => state.cars) //зі store->reducer->cars

    const save = async (car) =>
        await carService.create(car)
        dispatch(carsActions.trigger())
        reset()

    useEffect(() => {
        if(carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    const update = async (car) =>
        await carService.updateById(carForUpdate.id, car)
        dispatch(carsActions.setCarForUpdate(null))
        dispatch(carsActions.trigger())
        reset()

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>{carForUpdate? 'update' : 'save'}</button>
            </form>
        </div>
    );
};

export {CarForm};