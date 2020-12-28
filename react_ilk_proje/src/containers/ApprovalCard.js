import React from 'react';
import { Link } from 'react-router-dom';



function Detay(){
   <div>
       <span>
           gfdgd
       </span>
   </div>
    alert('Tebrikler');
}



const ApprovalCard = (props) => {
    return (
        
    <div className="ui card" >
        <div className="content">
                 {props.children}       
        </div>
        <div className="extra content">
            <span className="left floated like">
            <i className="like icon"></i>
            Beğen
            </span>
            <span className=" floated star">
            <i className="star icon"></i>
            Favoriye Al 
            </span>
            <span className="right floated ">
            
            <Link to='/ ??? /0'>Detay</Link>
            </span>
        </div>
    </div>
)
}

export default ApprovalCard;