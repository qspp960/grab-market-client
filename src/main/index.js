import './index.css'
import axios from "axios";
import React from 'react';
import { Link } from "react-router-dom"

function MainPage() {
    const [products, setProducts] = React.useState([]);
    React.useEffect(
        function () {

        }, []);
    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="images/icons/logo.png" />
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="images/banners/banner1.png" />
                </div>
                <h1>판매 상품들</h1>
                <div id="product-list">
                    {
                        products.map(function (product, index) {
                            return (
                                <div className="product-card" to={'/product'}>
                                    <Link className="product-link">
                                        <div>
                                            <img className="product-img" src={product.imageUrl} />
                                        </div>
                                        <div className="product-contents">
                                            <span className="product-name">{product.name}</span>
                                            <span className="product-price">{product.price}</span>
                                            <div className="product-seller">
                                                <img
                                                    className="product-avatar"
                                                    src="images/icons/avatar.png"
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                    )
                        });
                    }
                                </div>
            </div>
                <div id="footer"></div>

            </div>
            );

}

            export default MainPage;