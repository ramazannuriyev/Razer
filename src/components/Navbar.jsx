import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import '../assets/scss/components/Navbar.scss'

const Navbar = () => {
	const [menuActive, setMenuActive] = useState(false);

	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	const closeMenu = () => {
		setMenuActive(false);
	};


	return (
		< >

			<div className="navbar">
				<div className="resp-nav">
					<div className="resp-bars">
							<header className="header">
								<ul className={`menu ${menuActive ? "active" : ""}`}>
									<li>
										<Link to='home'>
											<a className="menu-item" href="#" onClick={closeMenu}>
												Home
											</a>
										</Link>
									</li>
									<li>
										<Link to={"about"}>
											<a className="menu-item" href="#" onClick={closeMenu}>
												About
											</a>
										</Link>
									</li>
									<li>
										<Link to="contact">
											<a className="menu-item" href="#" onClick={closeMenu}>
												Contact
											</a>
										</Link>
									</li>
									<li>
										<a className="menu-item" href="#" onClick={closeMenu}>
											Register
										</a>
									</li>
								</ul>
								<div className="burger__icon" onClick={toggleMenu}>
									<i class="fa-solid fa-bars"></i>
								</div>
							</header>

					</div>
					<div className="resp-logo">
						<Link to={'/'}><a href=""><img src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg" alt="logo" /></a></Link>
					</div>
					<div className="resp-icon">
						<a href=""><i class="fa-solid fa-cart-shopping"></i></a>
					</div>
					<ul class="menu" id="menu">
						<Link to={'/store'}><a href="">Store</a></Link>
						<Link to={'/pc'}><a href="">PC</a></Link>
						<Link to={'/console'}><a href="">Console</a></Link>
						<Link to={'/mobile'}><a href="">Mobile</a></Link>
						<Link to={'/lifestyle'}><a href="">Lifestyle</a></Link>
						<Link to={'/services'}><a href="">Services</a></Link>
						<Link to={'/community'}><a href="">Community</a></Link>
						<Link to={'/support'}><a href="">Support</a></Link>
					</ul>
				</div>
				<div className="navbar-left">
					<Link to={'/'}><a href=""><img src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg" alt="logo" /></a></Link>
					<Link to={'/store'}><a href="">Store</a></Link>
					<Link to={'/pc'}><a href="">PC</a></Link>
				</div>
				<div className="navbar-center">
					<Link to={'/console'}><a href="">Console</a></Link>
					<Link to={'/mobile'}><a href="">Mobile</a></Link>
					<Link to={'/lifestyle'}><a href="">Lifestyle</a></Link>
					<Link to={'/services'}><a href="">Services</a></Link>
					<Link to={'/community'}><a href="">Community</a></Link>
					<Link to={'/support'}><a href="">Support</a></Link>
				</div>
				<div className="navbar-right">
					<a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
					<a href=""><i class="fa-solid fa-cart-shopping"></i></a>
				</div>
			</div>
		</>
	)
}

export default Navbar