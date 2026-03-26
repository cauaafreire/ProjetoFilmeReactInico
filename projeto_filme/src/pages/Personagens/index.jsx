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
            <h4></h4>
            <br />
            <br />
            <h1> Coringa</h1>
            <img src={Coringa} alt="" />
            <br/>
            <br />
            <h4></h4>
            <br />
            <br />
            <h1>Alfred</h1>
            <img src={Alfred} alt="" />
            <br/>
            <br />
            <h4></h4>
        </div>
    )
}

export default Personagens