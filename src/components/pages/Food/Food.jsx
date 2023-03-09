import React from 'react';
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { datafood } from './Datafood'

import './food.css'

const Food = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
    productList,
    setProductList,
}) => {

    function useScrollToTop() {
        const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
    }
    useScrollToTop();

    const onAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {

            const products = allProducts.map(item => {

                if (item.id === product.id) {
                    if (product.quantity === 1) {
                        return { ...item, quantity: item.quantity + 2 };
                    } else {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                } else {
                    return item;
                }
            });

            const updatedProductList = productList.map(item2 => {
                if (item2.id === product.id) {
                    return { ...item2, quantity: item2.quantity + 1 };
                } else {
                    return item2;
                }
            });
            setProductList(updatedProductList);
            console.log(product.quantity);

            setTotal(total + product.price);
            setCountProducts(countProducts + 1);
            // console.log(total);
            // console.log(product);
            // console.log(countProducts);

            return setAllProducts([...products]);
        }

        const updatedProductList = productList.map(item2 => {
            if (item2.id === product.id) {
                return { ...item2, quantity: item2.quantity + 1 };
            } else {
                return item2;
            }
        });
        setProductList(updatedProductList);

        setTotal(total + product.price * (product.quantity + 1));
        setCountProducts(countProducts + (product.quantity + 1));
        setAllProducts([...allProducts, product]);
    };
    const onRemoveProduct = product => {
        if (product.quantity > 0) {
            if (allProducts.find(item => item.id === product.id)) {

                const products = allProducts.map(item => {

                    if (item.id === product.id) {
                        if (product.quantity > 0) {
                            return { ...item, quantity: item.quantity - 1 };
                        }
                    } 
                        return item;
                    
                });

                const updatedProductList = productList.map(item2 => {
                    if (item2.id === product.id) {
                        return { ...item2, quantity: item2.quantity - 1 };
                    } else {
                        return item2;
                    }
                });
                setProductList(updatedProductList);

                setTotal(total - product.price);
                setCountProducts(countProducts - 1);

                if (product.quantity===1){
                    onDeleteProduct(product);
                    if(!allProducts.length){
                        onCleanCart();
                    }
                } else {
                    return setAllProducts([...products]);
                }
            }
        }

    };

    const onDeleteProduct = product => {
        const results = allProducts.filter(
            item => item.id !== product.id
        );

        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(results);
    };
    const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
		allProducts.splice(0, allProducts.length);
		setProductList(datafood);
	};
    return (
        <div className='container__fooddetails'>
            {productList.map(product => (
                <div key={product.id} className="card__fooddetails" >
                    <img src={product.img} className="img__food" alt="" />
                    <div className="food__container">
                        <div className="food__details">
                            <div className="food__name">
                                <h5>{product.nameProduct}</h5>
                                <h5>S/. {product.price} </h5>
                            </div>
                            <p>{product.description}</p>
                        </div>
                        <div className="food__botoncanasta">
                            <div className="food__bcounter">
                                <button className='btn__food' onClick={() => onRemoveProduct(product)}
                                >-</button>
                                <span data-id={product.id}> {product.lenght === 1 ? 1 : product.quantity} </span> {/* CONDICIONAL PARA QUE SE MUESTRE 1 SI HAY UN ELEMENTO Y PARA QUE SE QUEDE EN CER OCUANDO SE DE A VACIAR CARRITO */}
                                <button className='btn__food' onClick={() => onAddProduct(product)}
                                >+</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Food;