import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header/header"
import Home from "./pages/home/home"
import SearchResults from "./pages/searchResults/searchResults"
import FilterResults from "./pages/filterResults/filerResults"


const App = () => {

    return (
        <main className="min-h-screen px-8 md:px-20 bg-slate-950 text-white">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Home />} />
                        <Route path="/search" element={<SearchResults />} />
                        <Route path="/customize-filter" element={<FilterResults />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </main>
    )
}


export default App