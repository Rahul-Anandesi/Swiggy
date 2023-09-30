import React, { useEffect, useState } from 'react';
import ResCard from './ResCard';
import restaurantList from '../utils/mockdata';

const Body = () => {

    const [resList,setresList]=useState(restaurantList);

    useEffect(()=>
    {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5106321&lng=78.5080177&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
            );

        const json =  await data.json();
        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setresList(
        //  json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
         <div >
            <div className='filter'>
                <button  className='but'
                 onClick={() =>{
                 let filteredList = resList.filter((res) => res.avgRating>4)
                 setresList(filteredList);
                }

                  }>Ratings 4.0+</button>
            </div>
            <div className='body'>
                <div className='ResCont'>
                    {
                    resList.map(restaurant => <ResCard resData = {restaurant}/> )
                    }   
                </div>
            </div>

         </div>
    )
}

export default Body;