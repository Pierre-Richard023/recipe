import { useDispatch } from "react-redux"
import { INTOLERANCES } from "../../utils/var"
import Carrousel from "../carrousel/carrousel"
import { updateIntolerancesFilter } from "../../store/slice/customizeFilterSlice"

const FoodIntolerances = () => {

    const dispatch = useDispatch()

    const handleClick = (choice) =>{
        dispatch(updateIntolerancesFilter(choice))
    }

    return (
        <section className="m-4">
            <h1 className="text-center mb-8 text-lg sm:text-4xl">Do you have any food intolerances ?</h1>

            {
                <Carrousel data={INTOLERANCES} update={handleClick} step={"intolerances"} />
            }

        </section>
    )
}

export default FoodIntolerances