

const Fooditem = (props) =>{
    return(
        <div className="FoodCard">
            <img src={props.images} alt="" className="img-fluid"/>
            <h3>{props.tittle}</h3>
        </div>
    )

}
export default Fooditem;