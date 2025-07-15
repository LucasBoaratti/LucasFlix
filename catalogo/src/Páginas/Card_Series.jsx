//Crio um apelido para o arquivo de CSS e chamo no componente
import estilos from './Card_Series.module.css';

//Precisamos colocar a estrutura para fazer o componente 
export function Card_Series({ serie, onOpenModal }) { 
    //movie: Objeto com os dados da série
    //onOpenModal: Função passada como um prop para um modal com os detalhes da série
    return (
        <main className={estilos.container}>
            <h3>{serie.name}</h3> {/* Exibindo o título da série */}

            <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} onClick={() => onOpenModal(serie)} alt={serie.title} /> 
            {/* Exibindo o pôster da série (nesse caso, a função onOpenModal será chamada com os dados da série como argumento) */}

            <p>{serie.overview}</p> {/* Exibindo a sinopse da série */}
        </main>
    )
}