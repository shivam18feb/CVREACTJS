import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faMessage,faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Intro(){
    return(
        <div>
            <div className="boxsize">
                <div className="intro">
                <h1>Helloo Am a Frontend Developer !! </h1>
                <h2 id="namesize">Shivam Pandey</h2>
                <h5>(Html/Css/JavaScript/ReactJs/Python/Django/Github)<br/>
                <p>D.O.B:- 18/09/1996 <br/>Connect with </p></h5>
                    <ul className="icons">
                    <li className='iconsadjust'><FontAwesomeIcon icon={faPhone} /></li>
                    <li className='iconsadjust'><FontAwesomeIcon icon={faEnvelope} /></li>
                    <li className='iconsadjust'><FontAwesomeIcon icon={faMessage} /></li>
                    <li className='iconsadjust'></li>
                    <li className='iconsadjust'></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}