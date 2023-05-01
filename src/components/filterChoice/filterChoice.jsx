import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDataStep } from "../../store/slice/customizeFilterSlice"
import { stepChoiseConfig } from "../../utils/stepChoiceConfig"

const FilterChoice = ({ data, update, step }) => {

    const dispatch = useDispatch()
    const dataStep = useSelector(state => state.customizeFilter.dataStep)
    const [isSelected, setIsSelected] = useState(false)
    const [choiceConfig, setChoiceConfig] = useState({})

    useEffect(() => {
        getChoiceConfig()
        dispatch(getDataStep(step))
    }, [])

    useEffect(() => {
        if (dataStep.includes(data?.name))
            setIsSelected(true)
        else
            setIsSelected(false)
    }, [dataStep])


    const handleClick = () => {
        update(data?.name)
        setIsSelected(!isSelected)
    }

    const getChoiceConfig = () => {

        if (step === "cuisines")
            setChoiceConfig(stepChoiseConfig.cuisines)
        else if (step === "type")
            setChoiceConfig(stepChoiseConfig.type)
        else if (step === "intolerances")
            setChoiceConfig(stepChoiseConfig.intolerances)
        else if (step === "diets")
            setChoiceConfig(stepChoiseConfig.diets)
        else if (step === "unwantedIngredients")
            setChoiceConfig(stepChoiseConfig.unwantedIngredients)
    }

    return (
        <div className="flex w-full justify-center">
            <div className="relative w-44 h-44 relative rounded-full flex items-center"
                role="button"
                onClick={handleClick}
            >
                {
                    (step === "cuisines") &&
                    <img className="w-44 h-44 rounded-full" src={data?.image} alt={data?.name} />
                }

                <div className={`absolute top-0 left-0 w-full h-full rounded-full ${choiceConfig?.class} ${ isSelected ? choiceConfig?.select : choiceConfig?.notSelect } `} >
                    <div className="relative w-full h-full flex flex-col items-center justify-center ">
                        {
                            (step !== "cuisines") &&
                            <img    src={data?.image} 
                                    className="w-12 h-12"
                            />

                        }
                        <span className={`text-sm font-bold uppercase `}>
                        {data?.name} 
                        </span>
                    </div>
                    {
                        (step === "intolerances" || step === "unwantedIngredients") &&
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className={`w-40 h-2 transform rotate-45  ${isSelected ? 'bg-green-900':'bg-gray-500/50'} `}   ></div>
                        </div>
                    }

                </div>
            </div>
        </div >
    )
}

export default FilterChoice