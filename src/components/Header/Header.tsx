import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {useHistory, useLocation} from "react-router-dom";
import './Header.css';

function Header() {
    const history = useHistory();
    const location = useLocation();
    return (
        <header className="bg-primary">
            <h1 className="text-white text-center p-3">Cat card app</h1>
            {location.pathname !== '/' && 
                <button className="btn btn-primary back-btn" onClick={() => history.goBack()}>
                    <FontAwesomeIcon icon={faCaretLeft} /> Back
                </button>
            }
        </header>
    )
}
 
export default Header;