import { useDispatch } from "react-redux"
import { CUISINE } from "../../utils/var"
import Carrousel from "../carrousel/carrousel"
import { updateCuisinesFilter } from "../../store/slice/customizeFilterSlice"

const Cuisines = () => {

    const dispatch = useDispatch()

    const handleClick = (choice) =>{
        dispatch(updateCuisinesFilter(choice))
    }

    return (
        <div className="m-4">
            <h1 className="text-center mb-8 text-lg sm:text-4xl">What are your favorite cuisines?</h1>
            {
                <Carrousel data={CUISINE} update={handleClick} unwanted={false} step={"cuisines"} />
            }
        </div>
    )
}


export default Cuisines