import estilos from "./ModalSerie.module.css"; //Importando o arquivo CSS do Modal

//Estrutura básica
//movie: Aqui, está a série selecionado
//onClose: Função que fecha o Modal
export function ModalSerie({serie, onClose}) {
    //Se clicado fora de um card, não quero que o código seja executado
    if (!serie) {
        return null;
    }

    console.log("Modal renderizada!"); //Renderizando o Modal no console
    console.log(serie); //Exibindo os dados da série selecionada

    return (
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}> 
                {/* Cabeçalho do Modal */}
                <div className={estilos.modalHeader}>
                    {/* Exibindo o título da série */}
                    <h2>{serie.name}</h2>
                    {/* Botão que fecha o Modal, chamado a partir da função onClose */}
                    <button onClick={onClose}>X</button>
                    <div className={estilos.imgDetails}>
                        {/* Exibindo o pôster da série e sua sinopse ao passar o mouse por cima */}
                        <img className={estilos.imgModal} src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={serie.overview} />
                        {/* Exibindo uma lista com os detalhes da série */}
                        <ul className={estilos.movieDetails}>
                            {/* Exibindo a popularidade com um fallback se não houver uma popularidade */}
                            <li>{`Popularidade: ${serie.popularity ?? "Não disponível no momento, aguarde"}`}</li>
                            <li>{`Data de Lançamento: ${serie.first_air_date}`}</li>
                            <li>{`Quantidade de Votos: ${serie.vote_count}`}</li>
                            <li>{`Sinopse: ${serie.overview}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}