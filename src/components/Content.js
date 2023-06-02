
const Content = (props)=>{

    return(
        <div className="content">
            <div className="contentContainer">
                <div className="col-lg-6">
                    <div className="contentText">
                        <h2>{props.header}</h2>
                        <p>{props.ptext}</p>
                        <p>{props.ptext2}</p>
                        <p>{props.ptext3}</p>
                        <button className="redbtn">{props.bttn}</button>
                        <div className="sign"><h5>{props.signame} <span>{props.signature}</span> </h5></div>
                    </div>

                </div>
                <div className="col-lg-6">
                    <img src={props.imagess} alt="" className="img-fluid"/>
                    
                </div>



            </div>




        </div>




    )
}
export default Content;