
const CardsPerfilItems = ({image,p1,p2}) => {
    
    return (
        <section>
            <section  class="imge"><img src={image}/></section>
            <p class="p1">{p1}</p>
            <p class="p2">{p2}</p>
        </section>
    )

}

export default CardsPerfilItems;