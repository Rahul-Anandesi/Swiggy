import { useState } from "react";

const Header = () => {
    
    const [signBut, setSignBut] = useState('Sign In');


    return (
        <div className='header'>
            <div id='logo'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCrtmEN9vahUD5tHWmx8MXdQycacsG0bfNg&usqp=CAU' className='Image'/>
            </div>
            <div className='MenuCont'>
                <ul className='Menu'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                   
                    <button className="signBut" 
                    onClick={
                        () => {
                            signBut==='Sign In'
                            ? setSignBut('Sign Out')
                            : setSignBut('Sign In');

                            
                        }} 
                    >{signBut}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;