import { useState } from "react";
import { Link } from "react-router-dom";
import Modali from "./modal";
import Modaltwo from "./donationModal";

const Content = (props)=>{
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    
    
    const handleClose = () => setShow(false);
    const Close = () => setOpen(false);
    const handleShow = () => setShow(true)
    const opening = () => setOpen(true)
    


    return(
        <div className="content">
            <div className="contentContainer">
                <div className="col-lg-6 col-md-12">
                    <div className="contentText">
                        <h2>{props.header}</h2>
                        <p>{props.ptext}</p>
                        <p>{props.ptext2}</p>
                        <p>{props.ptext3}</p>
                        <button className="redbtn">{props.bttn}</button>
                        <Link  onClick={handleShow}>{props.sendBtn}</Link>
                        <span  onClick={opening}>{props.sendBttn}</span>
                        <div className="sign"><h5>{props.signame} <span>{props.signature}</span> </h5></div>
                        <Modali show={show} handleClose={handleClose} />
                        <Modaltwo open={open} Close={Close}/>
                       
                    </div>
                   


                </div>
                <div className="col-lg-6 col-md-12">
                    <img src={props.imagess} alt="" className="img-fluid"/>
                    
                </div>



            </div>




        </div>




    )
}
export default Content;