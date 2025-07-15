import { Cabecalho } from "../Componentes/Cabecalho";
import { Outlet } from "react-router-dom"; //Outlet é um espaço que serve para renderizar o componente da rota. Então se clicar no Link "perfil", vai exibir o componente que corresponde ao endereço perfil em Rotas
import { Rodape } from "../Componentes/Rodape";

//Estrutura
export function Inicial() {
    return (
        <>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </>
    )
}