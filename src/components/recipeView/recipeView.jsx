import { useDispatch, useSelector } from "react-redux"
import Loading from "../loading/loading"
import { useEffect } from "react"
import { getRecipe } from "../../store/slice/recipeSlice"

const RecipeView = () => {

    const dispatch = useDispatch()
    const choiceId = useSelector(state => state.recipe.choiceId)
    const recipe = useSelector(state => state.recipe.recipe)
    const loading = useSelector(state => state.recipe.loading)

    useEffect(()=>{
        dispatch(getRecipe(choiceId))
    },[])

    return (
        <>
            {
                loading && <Loading />
            }
            {
                !loading &&
                <section className="px-4 md:px-8 text-gray-100">

                    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 border-b-4 border-slate-300">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

                            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full" >
                                <img className="absolute inset-0 h-px-556 w-px-370 object-cover"
                                    alt={recipe?.title}
                                    src={recipe?.image}
                                />
                            </div>

                            <div className="">
                                <h2 className=" text-center text-3xl font-bold font-mono uppercase sm:text-4xl">{recipe.title}</h2>

                                <div className="my-4" >
                                    {
                                        recipe?.cuisines?.map((val, i) =>
                                            <span key={i} className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-blue-100 text-blue-800 mx-2 my-2">
                                                {val}
                                            </span>
                                        )
                                    }
                                </div>

                                <div dangerouslySetInnerHTML={{ __html: recipe?.summary }} className="mt-4">
                                </div>

                                <div className="m-4">
                                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                        <div
                                            className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                                        >
                                            <dt className="order-last text-lg font-medium text-gray-500">
                                                Ingredients
                                            </dt>

                                            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                                {recipe?.extendedIngredients?.length}
                                            </dd>
                                        </div>

                                        <div
                                            className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                                        >
                                            <dt className="order-last text-lg font-medium text-gray-500">
                                                Minutes
                                            </dt>

                                            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                                {recipe?.readyInMinutes}
                                            </dd>
                                        </div>

                                        <div
                                            className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                                        >
                                            <dt className="order-last text-lg font-medium text-gray-500">
                                                Person(s)
                                            </dt>

                                            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                                {recipe?.servings}
                                            </dd>
                                        </div>
                                    </dl>
                                </div>

                                <div className="" >
                                    <p className="my-2">Dish type(s) : </p>
                                    {
                                        recipe?.dishTypes?.map((val, i) =>
                                            <span key={i} className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-blue-100 text-blue-800 mx-2 my-2">
                                                {val}
                                            </span>
                                        )
                                    }
                                </div>

                                {
                                    (recipe?.diets?.length > 0) &&

                                    <div className="my-4" >
                                        <p className="my-2">Diet(s) : </p>
                                        {
                                            recipe?.diets?.map((val, i) =>
                                                <span key={i} className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-blue-100 text-blue-800 mx-2 my-2">
                                                    {val}
                                                </span>
                                            )
                                        }
                                    </div>
                                }
                                
                            </div>
                        </div>
                    </div>

                    <div className="my-4" >
                        <h3 className="text-2xl my-2 md:my-8 text-center">Ingredients</h3>

                        <ul className="list-disc list-inside text-lg">

                            {
                                recipe?.extendedIngredients?.map((val, i) =>
                                    <li key={i}>
                                        {val.original}
                                    </li>
                                )
                            }

                        </ul>

                    </div>

                    <div className="mt-4">
                        <h4 className="text-2xl my-2 md:my-8 text-center">Instructions</h4>
                        { (recipe?.analyzedInstructions?.length > 0 ) &&
                            recipe?.analyzedInstructions?.map((val, i) =>
                                <div key={i} className="">

                                    <ol className="list-decimal list-inside text-lg">
                                        {
                                            val.steps?.map((step, idx) =>
                                                <li key={idx} >
                                                    {step.step}
                                                </li>
                                            )
                                        }

                                    </ol>
                                </div>
                            )
                        }

                        {
                            (recipe?.analyzedInstructions?.length === 0 ) &&
                            <div className="text-center text-2xl text-red-600 text-bold">
                                <h2>No instructions were found</h2>
                            </div>
                        }
                    </div>

                </section>
            }
        </>

    )
}


export default RecipeView