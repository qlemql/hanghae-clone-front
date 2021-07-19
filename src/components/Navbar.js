import React from "react";
import navstyle from "../assets/css/navstyle.css";
import { AiFillHome } from 'react-icons/ai';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import { TiCompass } from 'react-icons/ti';
import { BiHeart } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';



const Navbar = () => {
    return (
        <React.Fragment>

            <div className="navigation">
                {/* outer wrapper */}
                <div className="box">

                    {/* left inner */}
                    <div className="nav-logo">
                        <a className="no-underline" href="#">
                            <img src="img/logo.png" alt="logo"/>
                        </a>
                    </div>

                    {/* center inner */}
                    <div className="navigation-search-container">
                        <i className="fa fa-search"></i>
                        <input className="search-field" type="text" placeholder="검색"/>
                        <div className="search-container">
                            <div className="search-container-box">
                                <div className="search-results">
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right inner */}
                    <div className="navigation-icons">
                        <a href="https://instagram.com/mimoudix" className="navigation-link">
                            <i className="far fa-compass"><AiFillHome/></i>
                        </a>
                        <a className="navigation-link notifica">
                                <i className="far fa-user-circle"><HiOutlinePaperAirplane/></i>
                        </a>
                        <a href="https://instagram.com/mimoudix" className="navigation-link">
                            <i className="far fa-user-circle"><TiCompass/></i>
                        </a>
                        <a href="https://instagram.com/mimoudix" id="signout" className="navigation-link">
                            <i className="fas fa-sign-out-alt"><BiHeart/></i>
                        </a>
                        {/* 유저 프로필 이미지 */}
                        <a href="https://instagram.com/mimoudix" id="signout" className="navigation-link">
                            <i className="fas fa-sign-out-alt"><CgProfile/></i>
                        </a>
                    </div>


                </div>






            </div>
        </React.Fragment>
    );
}

export default Navbar