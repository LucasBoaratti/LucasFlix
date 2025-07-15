//Crio um apelido para o arquivo de CSS e chamo no componente
import estilos from './Card.module.css';

//Precisamos colocar a estrutura para fazer o componente 
export function Card({ movie, onOpenModal }) { 
    //movie: Objeto com os dados do filme
    //onOpenModal: Função passada como um prop para um modal com os detalhes do filme 
    return (
        <main className={estilos.container}>
            <h3>{movie.title}</h3> {/* Exibindo o título do filme */}

            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} onClick={() => onOpenModal(movie)} alt={movie.title} /> 
            {/* Exibindo o pôster do filme (nesse caso, a função onOpenModal será chamada com os dados do filme como argumento) */}

            <p>{movie.overview}</p> {/* Exibindo a sinopse do filme */}
        </main>
    )
}