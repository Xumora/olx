import React, { useContext } from 'react'
import { Link, useParams } from "react-router-dom";
import datas from "../../data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import ThemeContext from '../../ThemeContext';

const Category = () => {
    const { category } = useParams();
    const data = datas[category];
    const { colors } = useContext(ThemeContext);

    const CategoryWrapper = styled.section`
        background-color: ${props => props.colors.fbgColor};
        & h1{
            color:  ${props => props.colors.fcolor}
        }
        
        & .product{
            border-radius: 10px;
        }
        & .productImg img{
            height: 170px;
            object-fit: cover;
        }
        & .info{
            height: 170px;
        }
    `;

    return (
        <CategoryWrapper className="category" colors={colors}>
            <div className="container py-5">
                <h1 className="mb-4">Oddiy e'lonlar</h1>
                <div className="row">
                    {data?.map((v, i) => {
                        return <div className="col-12 mt-3">
                            <div className="product d-flex p-2 bg-white">
                                <Link to={`${category}`} className="productImg w-25">
                                    <img src={v.img || "https://demo.morethanthemes.com/conferenceplus8/default/sites/default/files/2017-06/video-poster.jpg"} alt="?" className="w-100" />
                                </Link>
                                <div className="d-flex flex-column justify-content-between ms-3 w-50 info">
                                    <Link to={`${category}`} className="fw-bold fs-5" style={{ textDecoration: "none", color: "#002F34" }}>
                                        {v.title}</Link>
                                    <span>{v.location}</span>
                                </div>
                                <div className="d-flex flex-column justify-content-between align-items-end w-25 me-3 info">
                                    <h4>{v.price}</h4>
                                    <button className="btn p-0 fs-4">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                    )}

                </div>
            </div>
        </CategoryWrapper>
    )
}

export default Category
