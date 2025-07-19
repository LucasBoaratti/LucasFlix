//Axios: permite a comunicação com as páginas HTTP (https)
import axios from "axios";
//As ferramentas começadas com use são hooks de manuseio da biblioteca React
import React, {useState, useEffect} from "react";
//Importando o componente Card.jsx, para exibir as informações básicas de um filme
import { Card } from "./Card";
//Importando o componente Modal, para mostrar os detalhes do filme
import { Modal } from "./Modal";
//Importando o arquivo CSS para estilizar a página
import estilos from "./Lista.module.css";

const API_key = ""; //Chave de acesso do TMDB (Coloque sua chave da API após criar sua conta no The Movie DataBase :)
const API_URL = "https://api.themoviedb.org/3"; //URL base da API do TMDB

export function Lista() {
    //Crio uma variável chamada movie, e "seto" o estado dela como vazio
    const [movies, setMovie] = useState([]); 
    //Mostra se foi selecionado um filme para a visualização
    const [SelectedMovie, setSelectedMovie] = useState(null);

    //Effect trabalha com uma estrutura específica envolvendo parâmetros (), script {} e dependências []
    useEffect(()=> {
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`) //Utilizando uma requisição GET para buscar os filmes populares da API
        //Se deu certo a comunicação, então grava o resultado no "response" que pode pegar o elemento através do data
        .then(response => {
            console.log(response.data.results); //Exibindo os resultados no console

            setMovie(response.data.results); //Atualizando o estado com os filmes

        })
        //Se der ruim, exibe o erro de comunicação
        .catch(error => {
            console.log('Error', error); 
        }); 
    }, []);

    const handleOpenModal = (movie) => { //Função que define o filme clicado para exibir no Modal
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => { //Função que fecha o Modal, além de limpar o estado
        setSelectedMovie(null);
    };

    return (
        <div className={estilos.container}>
            <h1>Conheça os melhores filmes!</h1>
            <figure style={{display:"flex", flexWrap:"wrap", justifyContent:"center", columnGap:"40px"}}> {/* Estilizando o card de filmes para ficar flexível */} 

                {/* Percorrendo a lista de filmes e exibindo um card para cada um deles */}
                {movies.map(movies => ( 
                    //key: Chave única para identificar cada item 
                    //movie: Passa o filme para o componente Card
                    //onOpenModal: Função para abrir o modal
                    <Card key={movies.id} movie={movies} onOpenModal={handleOpenModal} /> 
                ))}
            </figure>
            {/* Renderizando o componente Modal, se tiver um filme selecionado */}
            {SelectedMovie && <Modal movie={SelectedMovie} onClose={handleCloseModal} />}
        </div>
    )
}
