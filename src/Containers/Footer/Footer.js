import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import ThemeContext from '../../ThemeContext';

const data = [
    {
        links: [
            { to: "/mobileapps", name: "Mobil ilovalar" },
            { to: "/help", name: "Yordam" },
            { to: "/", name: "Pullik xizmatlar" },
            { to: "/", name: "OLX-da biznes" },
            { to: "/", name: "Saytda reklama" },
            { to: "/", name: "Foydalanish shartlari" },
            { to: "/", name: "Maxfiylik siyosati" },
        ]
    },
    {
        links: [
            { to: "/", name: "Qanday sotib olish va sotish?" },
            { to: "/", name: "Xavfsizlik qoidalari" },
            { to: "/", name: "Sayt xaritasir" },
            { to: "/", name: "Mintaqalar xaritasi" },
            { to: "/", name: "Career" },
            { to: "/", name: "Teskari aloqa" },
        ]
    },
]

const Footer = () => {
    const { colors } = useContext(ThemeContext);

    const FooterWrapper = styled.footer`
        background-color: ${props => props.colors.fbgColor};
        
        & ul{
            list-style: none;

            & .btn{
                color: ${props => props.colors.fcolor} 
            } 
        }

        & p{
            color: ${props => props.colors.fcolor} 
        } 
    `;

    console.log(colors);

    return (
        <FooterWrapper colors={colors}>
            <div className="container py-5">
                <div className="row">
                    {
                        data.map((value, index) => {
                            return <div className="col-12 col-md-3" key={index}>
                                <ul>
                                    {
                                        value.links.map((v, i) => {
                                            return <li key={i}>
                                                <Link to={v.to} className="btn p-0 fw-bold mt-3">
                                                    {v.name}
                                                </Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        })
                    }
                    <div className="col-12 col-md-6 pt-4">
                        <a href="#">
                            <img src="https://static.olx.uz/static/olxuz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg" alt="?" />
                        </a>
                        <a href="#" className="ms-3">
                            <img src="https://static.olx.uz/static/olxuz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg" alt="?" />
                        </a>
                        <p className="m-3">Telefoningiz uchun bepul ilova</p>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer
