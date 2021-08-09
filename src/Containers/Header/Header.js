import { faHeart, faMoon, faSun, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import ThemeContext from '../../ThemeContext';


const Header = () => {
    const { theme, toggleTheme, colors } = useContext(ThemeContext);

    const HeaderWrapper = styled.header`
        background-color: ${props => props.colors.hbgColor};
        
        .logo{
            width: 80px;
        }
    `;

    return (
        <HeaderWrapper colors={colors}>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/">
                        <img src={theme == "light" && "https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web-olxuz/static/img/fb/fb-image_redesign.png?t=21-07-10" || "https://apkshki.com/storage/1066/icon_5e74da3139cab_1066_w256.png"} alt="?" className="logo" />
                    </Link>
                    <div>
                        <Link to="/" className="btn text-white border-end rounded-0 py-0">O`z</Link>
                        <Link to="/" className="btn text-white disabled">Ру</Link>
                        <Link to="/" className="btn text-white fs-5"><FontAwesomeIcon icon={faHeart} /></Link>
                        <Link to="/" className="btn text-white fw-bold"><FontAwesomeIcon icon={faUser} /> Mening profilim</Link>
                        <Link to="/" className="btn bg-white fw-bold btn1">E'lon berish</Link>
                        <button className="btn text-white p-0 fs-3 ms-3" onClick={toggleTheme}><FontAwesomeIcon icon={theme == "dark" && faSun || faMoon} /></button>
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header
