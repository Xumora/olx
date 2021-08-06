import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

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
    return (
        <footer>
            <div className="container py-5">
                <div className="row">
                    {
                        data.map((value, index) => {
                            return <div className="col-12 col-md-3">
                                <ul>
                                    {
                                        value.links.map((v, i) => {
                                            return <li>
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
        </footer>
    )
}

export default Footer
