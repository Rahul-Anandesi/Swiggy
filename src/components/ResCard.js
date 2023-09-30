import { CDNSTAR, CDNURL } from "../utils/constants";

const ResCard = (props) => {
    const {resData} = props;
    
    return ( 
        <div className='resCard'>
            <div className='resImageCont'>
            <img 
            className='cardImage' 
            alt='cardImg' 
            src={
                CDNURL + 
                resData.cloudinaryImageId
             }
             />
            </div>
            <div className='resDetailsCont'>
            <h3>{resData.name}</h3>
            <h3><img src = {CDNSTAR} className='star'/> {resData.avgRating} </h3>
            {/* <p>{resData.cuisines.join(',')}</p> */}
            <p>{resData.areaName}</p>
            </div>
        </div>
    )
}

export default ResCard; 