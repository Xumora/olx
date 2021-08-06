import React from 'react';
import { Link } from 'react-router-dom';

const data = [
    { name: "Bolalar dunyosi", to: "/childrenWorld", bgColor: "#ffce32", img: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png" },
    { name: "Ko'chmas mulk", to: "/estate", bgColor: "#3a77ff", img: "https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png" },
    { name: "Transport", to: "/transport", bgColor: "#23e5db", img: "https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png" },
    { name: "Ish", to: "/job", bgColor: "#ff5636", img: "https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png" },
    { name: "Hayvonlar", to: "/animals", bgColor: "#fff6d9", img: "https://categories.olxcdn.com/assets/categories/olxuz/zhivotnye-35-2x.png" },
    { name: "Uy va Bog'", to: "/garden", bgColor: "#ceddff", img: "https://categories.olxcdn.com/assets/categories/olxuz/dom-i-sad-899-2x.png" },
    { name: "Elektr jihozlari", to: "/electronics", bgColor: "#c8f8f6", img: "https://categories.olxcdn.com/assets/categories/olxuz/elektronika-37-2x.png" },
    { name: "Xizmatlar", to: "/services", bgColor: "#ffd6c9", img: "https://categories.olxcdn.com/assets/categories/olxuz/uslugi-7-2x.png" },
    { name: "Moda va stil", to: "/style", bgColor: "#ffce32", img: "https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-2x.png" },
    { name: "Xobbi, dam olish sport", to: "/hobby", bgColor: "#ceddff", img: "https://categories.olxcdn.com/assets/categories/olxuz/hobbi-otdyh-i-sport-903-2x.png" },
    { name: "Tekinga beraman", to: "/free", bgColor: "#c8f8f6", img: "https://categories.olxcdn.com/assets/categories/olxuz/otdam-darom-1151-2x.png" },
    { name: "Ayrboshlash", to: "/barter", bgColor: "#ffd6c9", img: "https://categories.olxcdn.com/assets/categories/olxuz/obmen-barter-1153-2x.png" },
]

const Home = () => {
    return (
        <section>
            <div className="container py-5">
                <h1 className="text-center">Bosh toifalar</h1>
                <div className="row py-5">
                    {
                        data.map((v, i) => {
                            return <div className="col-4 col-md-2 mt-4">
                                <Link to={v.to} className="d-block w-50 mx-auto c-link" style={{ textDecoration: "none" }}>
                                    <div style={{ width: "80px", height: "80px", borderRadius: "50%", backgroundColor: v.bgColor, margin: "0 auto" }}>
                                        <img src={v.img} alt="?" className="w-100" />
                                    </div>
                                    <p className="mt-3 text-center text-dark fw-bold">{v.name}</p>
                                </Link>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Home
