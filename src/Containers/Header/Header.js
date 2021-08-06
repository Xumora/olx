import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/">
                        <img src="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web-olxuz/static/img/fb/fb-image_redesign.png?t=21-07-10" alt="?" className="logo" />
                    </Link>
                    <div>
                        <Link to="/" className="btn text-white border-end rounded-0 py-0">O`z</Link>
                        <Link to="/" className="btn text-white disabled">Ру</Link>
                        <Link to="/" className="btn text-white fs-5"><FontAwesomeIcon icon={faHeart} /></Link>
                        <Link to="/" className="btn text-white fw-bold"><FontAwesomeIcon icon={faUser} /> Mening profilim</Link>
                        <Link to="/" className="btn bg-white fw-bold">E'lon berish</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
