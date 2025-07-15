import estilos from "./Modal.module.css"; //Importando o arquivo CSS do Modal

//Estrutura básica
//movie: Aqui, está o filme selecionado
//onClose: Função que fecha o Modal
export function Modal({movie, onClose}) {
    //Se clicado fora de um card, não quero que o código seja executado
    if (!movie) {
        return null;
    }

    console.log("Modal renderizada!"); //Renderizando o Modal no console
    console.log(movie); //Exibindo os dados do filme selecionado

    return (
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}> 
                {/* Cabeçalho do Modal */}
                <div className={estilos.modalHeader}>
                    {/* Exibindo o título do filme */}
                    <h2>{movie.title}</h2>
                    {/* Botão que fecha o Modal, chamado a partir da função onClose */}
                    <button onClick={onClose}>X</button>
                    <div className={estilos.imgDetails}>
                        {/* Exibindo o pôster do filme e sua sinopse ao passar o mouse por cima */}
                        <img className={estilos.imgModal} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.overview} />
                        {/* Exibindo uma lista com os detalhes do filme */}
                        <ul className={estilos.movieDetails}>
                            {/* Exibindo a popularidade com um fallback se não houver uma popularidade */}
                            <li>{`Popularidade: ${movie.popularity ?? "Não disponível no momento,  aguarde"}`}</li>
                            <li>{`Data de Lançamento: ${movie.release_date}`}</li>
                            <li>{`Quantidade de Votos: ${movie.vote_count}`}</li>
                            <li>{`Sinopse: ${movie.overview}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}