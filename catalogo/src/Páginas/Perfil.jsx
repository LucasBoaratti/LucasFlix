import estilos from "./Perfil.module.css";
import FotoPerfil from "../assets/Imagens/Foto de Perfil.png";
import Amigo1 from "../assets/Imagens/Amigo1.jpg";
import Amigo2 from "../assets/Imagens/Amigo2.jpg";
import Amigo3 from "../assets/Imagens/Amigo3.jpg";
import Minecraft from "../assets/Imagens/Pôster de Minecraft.webp";
import HomemAranha from "../assets/Imagens/Homem Aranha.jpg";
import ToyStory from "../assets/Imagens/Toy Story.webp";
import Vingadores from "../assets/Imagens/Vingadores Ultimato.jpg";
import Inseto from "../assets/Imagens/Vida de Inseto.jpg";
import Andor from "../assets/Imagens/Andor.jpg";
import TheBadBatch from "../assets/Imagens/the-bad-batch.jpg";
import SkeletonCrew from "../assets/Imagens/Skeleton Crew.jpg";
import WandaVision from "../assets/Imagens/WandaVision.webp";
import Gavião from "../assets/Imagens/Gavião Arqueiro.webp";


export function Perfil() {
    return (
        <main>
            <div className={estilos.container}>
                <h1>Meu perfil</h1>
                <div className={estilos.informacoesPessoais}>
                    <div className={estilos.informacoesPerfil}>
                        <div className={estilos.informacoes}>
                            <img src={FotoPerfil} alt="Minha foto de perfil" />
                            <div className={estilos.dados}>
                                <h2>Lucas Boaratti</h2>
                                <p>Data de entrada: 01/04/2025</p>
                                <p>Data de nascimento: 26/05/2005</p>
                                <p>E-Mail: lucasboaratti@email.com</p>
                                <p>Telefone: 19 92485-3285</p>
                            </div>
                        </div>
                        <div className={estilos.editarPerfil}>
                            <i class="bi bi-pencil-square"></i>
                        </div>
                    </div>
                    <div className={estilos.listaAmigos}>
                        <h2>Lista de amigos</h2>
                        <div className={estilos.amigos}>
                            <div className={estilos.informacoesAmigo}>
                                <img src={Amigo1} alt="Luffy" />
                                <h4>Luffy</h4>
                            </div>
                            <p>Eu vou ser o rei dos piratas!!!</p>
                            <div className={estilos.informacoesAmigo}>
                                <img src={Amigo2} alt="T3ddy" />
                                <h4>T3ddy</h4>
                            </div>
                            <p>Fala famil.</p>
                            <div className={estilos.informacoesAmigo}>
                                <img src={Amigo3} alt="Resende" />
                                <h4>Cidadão Gabriel Resende</h4>
                            </div>
                            <p>Amo front-end e cybersecurity.</p>
                        </div>
                    </div>
                </div>
                <div className={estilos.filmesAssistidos}>
                    <h1>Filmes assistidos</h1>
                    <div className={estilos.filmes}>
                        <div className={estilos.filmeAssistido}>
                            <h3>Minecraft o Filme</h3>
                            <img src={Minecraft} alt="Minecraft o Filme"/>
                        </div>
                        <div className={estilos.filmeAssistido}>
                            <h3>Homem Aranha: Sem Volta Para Casa</h3>
                            <img src={HomemAranha} alt="Homem Aranha: Sem Volta Para Casa"/>
                        </div>
                        <div className={estilos.filmeAssistido}>
                            <h3>Toy Story</h3>
                            <img src={ToyStory} alt="Toy Story"/>
                        </div>
                        <div className={estilos.filmeAssistido}>
                            <h3>Vingadores Ultimato</h3>
                            <img src={Vingadores} alt="Vingadores Ultimato"/>
                        </div>
                        <div className={estilos.filmeAssistido}>
                            <h3>Vida de Inseto</h3>
                            <img src={Inseto} alt="Vida de Inseto"/>
                        </div>
                    </div>
                </div>
                <div className={estilos.seriesAssistidas}>
                    <h1>Séries assistidas</h1>
                    <div className={estilos.series}>
                        <div className={estilos.serieAssistida}>
                            <h3>Andor</h3>
                            <img src={Andor} alt="Andor"/>
                        </div>
                        <div className={estilos.serieAssistida}>
                            <h3>The Bad Batch</h3>
                            <img src={TheBadBatch} alt="The Bad Batch"/>
                        </div>
                        <div className={estilos.serieAssistida}>
                            <h3>Skeleton Crew</h3>
                            <img src={SkeletonCrew} alt="Skeleton Crew"/>
                        </div>
                        <div className={estilos.serieAssistida}>
                            <h3>WandaVision</h3>
                            <img src={WandaVision} alt="WandaVision"/>
                        </div>
                        <div className={estilos.serieAssistida}>
                            <h3>Gavião Arqueiro</h3>
                            <img src={Gavião} alt="Gavião Arqueiro"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}