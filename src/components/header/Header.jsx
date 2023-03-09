import React from 'react'
import './header.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsCartPlusFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { useState } from 'react'
import { datafood } from '../pages/Food/Datafood'

const Header = (
	{ 	allProducts,
		setAllProducts,
		total,
		countProducts,
		setCountProducts,
		setTotal,
		setProductList,
	}
) => {
	const [active, setActive] = useState(false);

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
		<div className='header_container' id='Header'>
			<nav className='nav_container'>
				<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='nav_menu' ><BsFacebook style={{ fontSize: '30px' }} /></a>
				<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='nav_menu'><BsInstagram style={{ fontSize: '30px' }} /></a>
				<a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer" className='nav_menu'><AiFillTwitterCircle style={{ fontSize: '30px' }} /></a>
			</nav>
			<nav className='nav_container'>
				<Link to="/Cinemeros/#contact" className='nav_menu'>Contáctanos</Link>
				<NavLink to="/Cinemeros/work" className='nav_menu' >Trabaja con nosotros</NavLink>
			</nav>
			<nav className='nav_container'>
				<NavLink to="/Cinemeros/register" className='btn' >Registrarse</NavLink>
				<NavLink to="/Cinemeros/singin" className='btn' >Iniciar sesión</NavLink>
				<div className="container__icon">
					<div className="icon">
						<a href={() => false} className='nav_menu' onClick={() => setActive(!active)} ><BsCartPlusFill style={{ fontSize: '30px' }} />
						</a>
						<div className='count-products'>
							<span id='contador-productos'>{countProducts} </span>
						</div>
					</div>
				</div>

				<div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
					{allProducts.length ? (
						<>
							<div className='row-product'>
								{allProducts.map(product => (
									<div className='cart-product' key={product.id}>
										<div className='info-cart-product'>
											<span className='cantidad-producto-carrito'>
											{product.quantity=== 0 ? 1 : product.quantity}
											</span>
											<p className='titulo-producto-carrito'>
												{product.nameProduct}
											</p>
											<span className='precio-producto-carrito'>
												S/. {product.price}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total'>
								<span className='total-pagar'>Total: S/. {total}</span>
								<button className='btn1' onClick={onCleanCart}>
									Vaciar Carrito
								</button>
								<button className='btn1' onClick={onCleanCart}>
									Comprar
								</button>
							</div>

						</>
					) : (
						<>
							<a href={() => false} className='close__menu' onClick={() => setActive(!active)} ><AiFillCloseCircle style={{ fontSize: '30px' }} /></a>
							<p className='cart-empty'>El carrito está vacío</p>
						</>
					)}
				</div>
			</nav>

		</div>
	)
}

export default Header