import { Outlet, Link } from "react-router-dom"

const Header = () => {
    return (
        <>

            <nav className="w-full p-4 flex justify-center" >
                <Link to={"/"} className="flex items-center">
                    <img src="/recipe.svg" className="h-8 mr-3" alt="Recipes Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Recipes</span>
                </Link>
            </nav>


            <Outlet />
        </>
    )
}

export default Header