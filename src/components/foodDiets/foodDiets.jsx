import { useDispatch } from "react-redux"
import { DIET } from "../../utils/var"
import Carrousel from "../carrousel/carrousel"
import { updateDietsFilter } from "../../store/slice/customizeFilterSlice"

const FoodDiets = () => {

    const dispatch = useDispatch()

    const handleClick = (choice) => {
        dispatch(updateDietsFilter(choice))
    }

    return (
        <section className="m-4">
            <h1 className="text-center mb-8 text-lg sm:text-4xl">Do you follow any of these diets?</h1>

            {
                <Carrousel data={DIET} update={handleClick} step={"diets"} />
            }

        </section>
    )
}

export default FoodDiets