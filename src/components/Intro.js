/**
 * The Intro function returns a JSX element that displays information about a frontend developer and
 * includes icons for connecting via phone, email, and messaging.
 * @returns The function `Intro` is returning a JSX element which contains a `div` element with class
 * `boxsize` and another `div` element with class `intro`. Inside the `intro` div, there are several
 * `h1`, `h2`, `h5`, and `p` elements with some text content. Additionally, there is an unordered list
 * with class `icons` and several
 */
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