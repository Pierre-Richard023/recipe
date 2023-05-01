import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecipeByFilter, changePage } from "../../store/slice/customizeFilterSlice"
import RecipeCard from "../../components/recipeCard/recipeCard"
import Pagination from "../../components/pagination/pagination"
import RecipeModal from "../../components/recipeModal/recipeModal"
import Loading from "../../components/loading/loading"

const FilterResults = () => {

    const dispatch = useDispatch()
    const filter = useSelector(state => state.customizeFilter.filter)
    const loading = useSelector(state => state.customizeFilter.loading)
    const resultPage = useSelector(state => state.customizeFilter.resultPage)
    const currentPage = useSelector(state => state.customizeFilter.currentPage)
    const maxPages = useSelector(state => state.customizeFilter.maxPages)
    const pagesView = useSelector(state => state.customizeFilter.pagesView)

    useEffect(() => {
        dispatch(getRecipeByFilter({ filter, page: currentPage }))
    }, [filter])


    const prevPage = () => {
        if (currentPage > 1)
            dispatch(changePage(currentPage - 1))
    }

    const nextPage = () => {

        if (currentPage < maxPages) {
            let nxtP = currentPage + 1

            if (!pagesView.includes(nxtP)) {
                dispatch(getRecipeByFilter({ filter, page: nxtP }))
            }
            dispatch(changePage(nxtP))
        }
    }

    console.log(resultPage)

    return (
        <section className="w-full sm:p-16">

            <div className="mb-4" >
                <RecipeModal />

                <h2 className="text-xl m-4 p-2 border-b border-white"> {resultPage?.results?.length} suggested recipes</h2>
                <Pagination currentPage={currentPage} prevPage={prevPage} nextPage={nextPage} maxPages={maxPages} />
            </div>

            {
                loading && <Loading />
            }

            {!loading &&
                <>
                    {(resultPage?.results?.length > 0) &&
                        <div className="">
                            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 ">
                                {
                                    resultPage?.results?.map((val, i) =>
                                        <RecipeCard key={i} name={val.title} img={val.image} id={val.id} />
                                    )
                                }
                            </div>
                        </div>
                    }
                    {(resultPage?.results?.length === 0) &&

                        <div className="text-center text-2xl text-red-600 text-bold">
                            <h2>No recipe was found with your filter</h2>
                        </div>
                    }

                </>
            }

            {(maxPages > 1) &&
                <Pagination currentPage={currentPage} prevPage={prevPage} nextPage={nextPage} maxPages={maxPages} />
            }

        </section>
    )
}

export default FilterResults