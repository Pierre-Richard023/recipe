import { useDispatch } from "react-redux"
import { TYPE } from "../../utils/var"
import Carrousel from "../carrousel/carrousel"
import { updateTypesFilter } from "../../store/slice/customizeFilterSlice"

const FoodTypes = () => {

    const dispatch = useDispatch()

    const handleClick = (choice) =>{
        dispatch(updateTypesFilter(choice))
    }

    return (
        <section className="m-4">
            <h1 className="text-center mb-8 text-lg sm:text-4xl">What type of recipe?</h1>
            {
                <Carrousel data={TYPE}  update={handleClick} step={"type"}/>
            }

        </section>
    )
}


export default FoodTypes