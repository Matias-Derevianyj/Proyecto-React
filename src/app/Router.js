import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from '../components/ItemDetailContainer'
import Inicio from "../page/Inicio";
import PageZapatillas from "../page/PageZapatillas"
import Layout from "./Layout";
import PageRemeras from "../page/PageRemeras";
const Router = ()=>(
    <BrowserRouter >
        <Routes>
            <Route element={<Layout/>} path={process.env.PUBLIC_URL}>
                <Route index element={<Inicio/>}/>
                <Route path="page/:idCategoria" element={<PageZapatillas/>}/>
                <Route path="page/:idCategoria" element={<PageRemeras/>}/>
                <Route path="product/:idProduct" element={<ItemDetailContainer/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router
