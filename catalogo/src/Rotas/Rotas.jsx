import {Routes, Route, Router} from "react-router-dom";
import { Inicial } from "../Páginas/Inicial";
import { Serie } from "../Páginas/Serie";
import { Perfil } from "../Páginas/Perfil";
import { Lista } from "../Componentes/Lista";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Inicial/>}>
                <Route index element={<Lista/>}/>
                <Route path="perfil" element={<Perfil/>}/>
                <Route path="serie" element={<Serie/>}/>
            </Route>
        </Routes>
    );
}