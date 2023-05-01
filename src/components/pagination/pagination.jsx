
const Pagination = ({ currentPage, prevPage, nextPage, maxPages }) => {


    return (
        <div className="flex justify-center ">
            <div className="inline-flex items-center justify-center gap-3">
                <button
                    typeof="button"
                    onClick={prevPage}
                    className="inline-flex h-12 w-12 bg-purple-700 hover:bg-purple-900 items-center justify-center rounded border border-gray-300 rtl:rotate-180"
                >
                    <span className="sr-only">Next Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                <p className="text-lg">
                    {currentPage}
                    <span className="mx-0.25">/</span>
                    {maxPages}
                </p>

                <button
                    typeof="button"
                    onClick={nextPage}
                    className="inline-flex h-12 w-12 bg-purple-700 hover:bg-purple-900 items-center justify-center rounded border border-gray-300 rtl:rotate-180"
                >
                    <span className="sr-only">Next Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>

    )
}


export default Pagination