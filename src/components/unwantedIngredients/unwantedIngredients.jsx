import { useDispatch } from "react-redux"
import { UNWANTEDINGREDIENTS } from "../../utils/var"
import Carrousel from "../carrousel/carrousel"
import { updateUnwantedIngredientsFilter } from "../../store/slice/customizeFilterSlice"

const UnwantedIngredients = () => {

    const dispatch = useDispatch()

    const handleClick = (choice) =>{
        dispatch(updateUnwantedIngredientsFilter(choice))
    }

    return (
        <section className="m-4">
            <h1 className="text-center mb-8 text-lg sm:text-4xl">Any ingredients you don't want to see in your recommended recipes?</h1>

            {
                <Carrousel data={UNWANTEDINGREDIENTS}  update={handleClick} step={"unwantedIngredients"} />
            }

        </section>
    )
}

export default UnwantedIngredients