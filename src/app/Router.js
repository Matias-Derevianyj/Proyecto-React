import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../page/Inicio";
import PageZapatillas from "../page/PageZapatillas"
import Layout from "./Layout";
const Router = ()=>(
    <BrowserRouter >
        <Routes>
            <Route element={<Layout/>} path={process.env.PUBLIC_URL}>
                <Route index element={<Inicio/>}/>
                <Route path="page/:idCategoria" element={<PageZapatillas/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router
