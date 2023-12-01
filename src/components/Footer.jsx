import React from 'react'
import '../assets/scss/components/Footer.scss'

const Footer = () => {
	return (
		<>
			<div className="footer d-flex flex-column">
				<div className="container d-flex justify-content-start resp-footer">
					<div className="row d-flex justify-content-between">
						<div className="col footer-top">
							<div className="shop-container">
								<span className='footer-title'>Shop</span>
								<div className="shop-list footer-list">
									<ul>
										<li><a href=''>RazerStore</a></li>
										<li><a href=''>RazerCafe</a></li>
										<li><a href=''>Store Locator</a></li>
										<li><a href=''>Purchase Programs</a></li>
										<li><a href=''>Education</a></li>
										<li><a href=''>Exclusives</a></li>
										<li><a href=''>RazerStore rewards</a></li>
										<li><a href=''>Newsletter</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col footer-top">
							<div className="explore-container">
								<span className='footer-title'>Explore</span>
								<div className="explore-list footer-list">
									<ul>
										<li><a href=''>Technology</a></li>
										<li><a href=''>Chroma RGB</a></li>
										<li><a href=''>Concepts</a></li>
										<li><a href=''>Esports</a></li>
										<li><a href=''>Collabs</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col footer-top">
							<div className="support-container">
								<span className='footer-title'>Support</span>
								<div className="support-list footer-list">
									<ul>
										<li><a href=''>Get Help</a></li>
										<li><a href=''>Registration & Warranty</a></li>
										<li><a href=''>RazerStore Support</a></li>
										<li><a href=''>RazerCare</a></li>
										<li><a href=''>Manage Razer ID</a></li>
										<li><a href=''>Support Videos</a></li>
										<li><a href=''>Accessibility Statement</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col footer-top">
							<div className="company-container">
								<span className='footer-title'>Company</span>
								<div className="company-list footer-list">
									<ul>
										<li><a href=''>About Us</a></li>
										<li><a href=''>Careers</a></li>
										<li><a href=''>Newsroom</a></li>
										<li><a href=''>zVentures</a></li>
										<li><a href=''>Contact Us</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col footer-top">
							<div className="follow-container">
								<span className='footer-title'>Follow Us</span>
								<div className="follow-list footer-list">
									<ul>
										<li><a href=''><i class="fa-brands fa-facebook"></i></a></li>
										<li><a href=''><i class="fa-brands fa-instagram"></i></a></li>
										<li><a href=''><i class="fa-brands fa-x-twitter"></i></a></li>
										<li><a href=''><i class="fa-brands fa-youtube"></i></a></li>
										<li><a href=''><i class="fa-brands fa-tiktok"></i></a></li>
										<li><a href=''><i class="fa-brands fa-twitch"></i></a></li>
										<li><a href=''><i class="fa-brands fa-discord"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col footer-top">
							<div className="follow-container footer-right">
								<span>FOR GAMERS. BY GAMERS.™</span>
								<div className="follow-list footer-list">

								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row d-flex justify-content-center resp-bottom-footer">
						<div className="col-sm-12 w-100">
							<div className="footer-underline">

							</div>
							<div className="row">
								<div className="container">
									<div className="bottom-footer d-flex flex-row justify-content-between">
										<div className="left-footer d-flex flex-row justify-content-between">
											<div className="lb-footer">
												<span>Copyright © 2023 Razer Inc. All rights reserved.</span>
											</div>
											<div className="cb-footer ">
												<a href="">Site Map </a><span className='sticks'>&ensp; &#10072;</span>
												<a href="">Legal Terms </a><span className='sticks'>&ensp; &#10072;</span>
												<a href="">Privacy Policy </a><span className='sticks'>&ensp; &#10072;</span>
												<a href="">Cookie Settings</a>
											</div>
										</div>
										<div className="right-footer ">
											<div className="rb-footer d-flex flex-row">
												<p>United States  &ensp; &#10072;</p>
												<a href="">Change Location  &#62;</a>
											</div>
										</div>
									</div>
								</div>

							</div>

						</div>
					</div>
				</div>
				<div className="responsiv-footer">
					<div className="container p-4 pt-1">
						<div className="resp-shop resp-footer-title ">
							<span>Shop</span>
							<a href=""><i class="fa-regular fa-plus"></i></a>
						</div>
						<div className="resp-explore resp-footer-title ">
							<span>Explore</span>
							<a href=""><i class="fa-regular fa-plus"></i></a>
						</div>
						<div className="resp-support resp-footer-title ">
							<span>Support</span>
							<a href=""><i class="fa-regular fa-plus"></i></a>
						</div>
						<div className="resp-company resp-footer-title ">
							<span>Company</span>
							<a href=""><i class="fa-regular fa-plus"></i></a>
						</div>
						<div className="resp-center-footer d-flex flex-column justify-content-center align-items-center">
							<span>Copyright © 2023 Razer Inc. All rights reserved.
							</span>
							<div className="resp-cb-footer mt-3 ">
								<a href="">Site Map </a><span className='sticks p-1'> &#10072;</span>
								<a href="">Legal Terms </a><span className='sticks p-1'> &#10072;</span>
								<a href="">Privacy Policy </a><span className='sticks p-1'> &#10072;</span>
								<a href="">Cookie Settings</a>
							</div>
						</div>
						<div className="resp-bottom-footer">
							<div className="resp-rb-footer">
								<p>United States  &ensp; &#10072;</p>
								<a href="">Change Location  &#62;</a>
							</div>
							<span>FOR GAMERS. BY GAMERS.™</span>
							<div className="resp-footer-list resp-follow-list">
								<ul>
									<li><a href=''><i class="fa-brands fa-facebook"></i></a></li>
									<li><a href=''><i class="fa-brands fa-instagram"></i></a></li>
									<li><a href=''><i class="fa-brands fa-x-twitter"></i></a></li>
									<li><a href=''><i class="fa-brands fa-youtube"></i></a></li>
									<li><a href=''><i class="fa-brands fa-tiktok"></i></a></li>
									<li><a href=''><i class="fa-brands fa-twitch"></i></a></li>
									<li><a href=''><i class="fa-brands fa-discord"></i></a></li>
								</ul>
							</div>

						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default Footer