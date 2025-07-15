import axios from "axios"; //Axios: permite a comunicação com as páginas HTTP (https)
import React, {useState, useEffect} from "react"; //As ferramentas começadas com use são hooks de manuseio da biblioteca React
import { Card } from "../Componentes/Card"; //Importando o componente Card.jsx, para exibir as informações básicas de um filme
import { ModalSerie } from "../Páginas/ModalSerie"; //Importando o componente Modal, para mostrar os detalhes do filme
import estilos from "./Serie.module.css"; //Importando o arquivo CSS para estilizar a página
import { Card_Series } from "./Card_Series";

const API_key = "0817bdfeec7bae416b4022409f509431"; //Chave de acesso do TMDB
const API_URL = "https://api.themoviedb.org/3"; //URL base da API do TMDB

export function Serie() {
    const [series, setSerie] = useState([]); //Crio uma variável chamada series, e "seto" o estado dela como vazio
    const [SelectedSerie, setSelectedSerie] = useState(null); //Mostra se foi selecionado uma série para a visualização

    useEffect (() => { //Effect trabalha com uma estrutura específica envolvendo parâmetros (), script {} e dependências []
        axios.get(`${API_URL}/tv/popular?api_key=${API_key}&language=pt-BR`) //Utilizando uma requisição GET para buscar as séries populares da API

        .then(response => { //Se deu certo a comunicação, então grava o resultado no "response" que pode pegar o elemento através do data
            console.log(response.data.results); //Exibindo os resultados no console

            setSerie(response.data.results); //Atualizando o estado com os filmes
        })
        .catch(error => { //Se der ruim, exibe o erro de comunicação
            console.log("Error:", error);
        })
    }, [])

    const handleOpenModal = (serie) => { //Função que define a série clicada para exibir no Modal
        setSelectedSerie(serie);
    }

    const handleCloseModal = () => { //Função que fecha o Modal, além de limpar o estado
        setSelectedSerie(null);
    }

    return (
        <div className={estilos.container}>
            <h1>Conheça as melhores séries!</h1>
            <figure style={{display:"flex", flexWrap:"wrap", justifyContent:"center", columnGap:"40px"}}> {/* Estilizando o card de séries para ficar flexível */}
                {/* Percorrendo a lista de filmes e exibindo um card para cada um deles */}
                {series.map(series => (
                    //key: Chave única para identificar cada item 
                    //movie: Passa o filme para o componente Card
                    //onOpenModal: Função para abrir o modal
                    <Card_Series key={series.id} serie={series} onOpenModal={handleOpenModal} />
                ))}
            </figure>
            {/* Renderizando o componente Modal, se tiver um filme selecionado */}
            {SelectedSerie && <ModalSerie serie={SelectedSerie} onClose={handleCloseModal} />}
        </div>
    )
}