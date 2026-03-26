import Bruce from '../../assets/Bruce.webp'
import Coringa from '../../assets/coringap.jpg'
import Alfred from '../../assets/alfred.jpg'

function Personagens(){
    return(
        <div>
            <br />
            <br />
            <h1> Bruce Wayne</h1>
            <img src={Bruce} alt="" />
            <br/>
            <br />
            <h4>Bilionário de Bruce Wayne que vive uma vida dupla como
                 o vigilante Batman. No filme, ele enfrenta o dilema 
                 de continuar sendo o herói de Gotham ou permitir que 
                 alguém como Harvey Dent assuma esse papel. Ele luta 
                 contra o crime enquanto tenta manter sua identidade 
                 em segredo.</h4>
            <br />
            <br />
            <h1> Coringa</h1>
            <img src={Coringa} alt="" />
            <br/>
            <br />
            <h4>Vilão principal do filme, 
                Joker é um criminoso caótico que quer 
                provar que qualquer pessoa pode se corromper. 
                Ele espalha o caos em Gotham e desafia diretamente 
                os ideais de Batman, manipulando situações para mostrar
                 o lado mais sombrio das pessoas.</h4>
            <br />
            <br />
            <h1>Alfred</h1>
            <img src={Alfred} alt="" />
            <br/>
            <br />
            <h4>Mordomo fiel e conselheiro de Bruce Wayne. 
                Alfred Pennyworth atua como uma figura paterna, 
                oferecendo apoio emocional e orientação moral 
                para Bruce, principalmente quando ele começa a 
                questionar suas escolhas como Batman.</h4>
        </div>
    )
}

export default Personagens