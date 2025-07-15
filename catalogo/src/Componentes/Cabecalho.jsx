import estilos from './Cabecalho.module.css'; //Importando o css do cabeçalho com o campo de nome estilos
import { Link } from 'react-router-dom';
import LucasFlix from '../assets/Imagens/LucasFlix.png';    

export function Cabecalho() { //Exportando/criando a função do cabeçalho para estruturá-la
    return ( //Retornando uma página HTML
        <header className={estilos.container}> {/* Adicionando a tag header e colocando o nome da classe com o campo de estilos*/}
            <div className={estilos.cabecalho}>
                <img src={LucasFlix} alt="LucasFlix" className={estilos.logo}/> 
                <div className={estilos.barraNavegacao}>
                    <nav className={estilos.container}> {/* Dando o nome para a classe a partir do nome estilos e do campo no CSS */}
                        <ul>   
                            <li>
                                <Link to="/">
                                    <p><span className="material-symbols-outlined">home</span>Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="serie">
                                    <p><span className="material-symbols-outlined">movie</span>Séries</p>
                                </Link>
                            </li>             
                            <li>
                                <Link to="perfil">
                                    <p><span className="material-symbols-outlined">person</span>Perfil</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}