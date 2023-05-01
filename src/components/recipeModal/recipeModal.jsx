import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import RecipeView from '../recipeView/recipeView';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/slice/recipeSlice';

const RecipeModal = () => {

    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.recipe.isOpen)

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => dispatch(closeModal())}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 sm:px-24 overflow-y-auto">
                        <div className="flex min-h-full bg-gray-800 p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full relative transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">

                                    <button
                                        className="absolute top-2 right-2 inline-block rounded-full border border-red-600 bg-red-600 p-3 text-white hover:bg-transparent hover:text-red-600"
                                        onClick={() => dispatch(closeModal())}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                                        </svg>
                                    </button>

                                    <RecipeView />

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default RecipeModal