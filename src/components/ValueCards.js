
const ValueCards = (props)=> {

    return(
        <div className="valueCard">
            <img src={props.imgss} alt=""/>
            <h4>{props.valueTittle}</h4>
            <p>{props.ptext}</p>


        </div>

    )

}
export default ValueCards;