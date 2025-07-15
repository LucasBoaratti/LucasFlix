import estilos from './Conteudo.module.css'; //Importando o css do conteúdo com o campo de nome estilos
import { Lista } from './Lista';

export function Conteudo() { //Exportando/criando a função da barra de navegação
    return ( //Retornando uma página HTML
        <main className={estilos.container}> {/* Aplicando o nome para a classe a partir do nome estilos e do campo no CSS */}
            <Lista /> {/* Renderizando o componente Lista.jsx */}
        </main>
    )
}