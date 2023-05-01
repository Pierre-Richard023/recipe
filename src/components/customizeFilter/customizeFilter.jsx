import { Link } from "react-router-dom"
import { useState } from "react"
import FoodTypes from "../foodTypes/foodTypes"
import FoodIntolerances from "../foodIntolerances/foodIntolerances"
import FoodDiets from "../foodDiets/foodDiets"
import UnwantedIngredients from "../unwantedIngredients/unwantedIngredients"
import Cuisines from "../cuisines/cuisines"
import { useDispatch } from "react-redux"
import { reset, setFilter } from "../../store/slice/customizeFilterSlice"

const CustomizeFilter = () => {

    const dispatch = useDispatch()
    const [step, setStep] = useState(0)

    const handleClick =() =>{
        dispatch(reset())
        dispatch(setFilter())
    }


    return (
        <section className="w-full">


            <h3 className="text-center m-3">
                PERSONALIZE YOUR EXPERIENCE
            </h3>
            <div className="w-full px-8 m-4" ></div>



            <div className="mx-4">
                {
                    (step === 0) && <Cuisines />
                }
                {
                    (step === 1) && <FoodTypes />
                }
                {
                    (step === 2) && <FoodIntolerances />
                }
                {
                    (step === 3) && <FoodDiets />
                }
                {
                    (step === 4) && <UnwantedIngredients />
                }
            </div>

            <div className="w-full flex justify-center gap-4">
                <div className="flex">
                    {
                        (step > 0) &&
                        <button type="button"
                            className="mx-2 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                            onClick={(e) => setStep(step => step - 1)}
                        >
                            Retour
                        </button>
                    }

                    {
                        (step < 4) &&
                        <button type="button"
                            className="mx-2 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                            onClick={(e) => setStep(step => step + 1)}
                        >
                            Suivant
                        </button>
                    }

                    {
                        (step === 4) &&
                        <Link to={"/customize-filter"}
                            className="mx-2 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                            onClick={handleClick}
                        >
                            Filtre
                        </Link>
                    }

                </div>
            </div>
        </section>
    )
}


export default CustomizeFilter