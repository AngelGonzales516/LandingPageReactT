import CardsPerfilItems from './CardPerfilItems'
import './CardsPerfil.css'

const CardsPerfil = () =>{

    const data = [{ image: require('./../Img/AllMight.jpg') ,P1:"AllMight.hn ", p2:" Tiene un gran servicio recomendado por !Plus ultra!"},
    { image: require('./../Img/spiderMan.jpg') ,P1:" Spidy ", p2:" Me antendieron de lo mejor y pude disfrutra de una buena un dulce sueño"},
]

    const cardsPerfilItems = data.map ((u,i)=>{
        return (
            <CardsPerfilItems image={u.image}
            p1={u.P1}
            p2={u.p2}
            key={i}
            />
        );
    })
        return (
            <section class="Conteiner">
                {cardsPerfilItems}
            </section>
        )

}

export default CardsPerfil;