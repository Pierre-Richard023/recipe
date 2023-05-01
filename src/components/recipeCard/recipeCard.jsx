import { useDispatch } from "react-redux"
import { openModal } from "../../store/slice/recipeSlice"


const RecipeCard = ({ id, img, name }) => {

    const dispatch = useDispatch()

    return (
        <button typeof="button"
            className="flex flex-col"
            onClick={() => dispatch(openModal(id))}
        >
            <div className="container">
                <img className="object-cover w-full h-52" src={img} alt={name} />
                <div className="flex flex-col flex-1 p-6">
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                        {name}
                    </h3>
                </div>
            </div>
        </button>
    )
}

export default RecipeCard