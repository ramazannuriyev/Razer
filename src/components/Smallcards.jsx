import React from 'react'
import '../assets/scss/components/Smallcards.scss'

const Smallcards = () => {
	return (
		<>
			<div className="smallcards w-100 d-flex flex-column">
				<div className='d-flex resp-smallcards'>
					<div className="Mercury resp-cards w-50">
						<div className="container">
							<div className="Mercury-body">
								<div className="Mercury-text smallcard-text">
									<h2 className='text-white'>RAZER BLADE 16 & 18 MERCURY</h2>
									<h3 className='text-white mt-1'>PERFORMANCE REIMAGINED</h3>
									<div className="sources mt-2">
										<div><a href="" className='text-white' >Razer Blade 16</a><span className='arrow'>&#62;</span></div>
										<div><a href="" className='text-white'>Razer Blade 18</a><span className='arrow'>&#62;</span></div>
									</div>

								</div>
							</div>
						</div>
					</div>
					<div className="Fujin resp-cards w-50">
						<div className="container">
							<div className="Fujin-body">
								<div className="Fujin-text smallcard-text">
									<h2 className='text-white'>RAZER FUJIN</h2>
									<h3 className='text-white mt-1'>BREATHABLE. FLEXIBLE. COMFORTABLE.</h3>
									<div className="sources mt-2">
										<div><a href="" className='text-white' >Learn More</a><span className='arrow'>&#62;</span></div>
										<div><a href="" className='text-white'>Buy</a><span className='arrow'>&#62;</span></div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="d-flex resp-smallcards">
					<div className="Smurfs resp-cards w-50">

						<div className="container">
							<div className="Smurfs-header">
								<div className="button">
									<span>RAZER.COM</span>
									<p>EXCLUSIVE</p>
								</div>
							</div>
							<div className="Smurfs-body">
								<div className="Smurfs-text smallcard-text">
									<h2 className='text-white mt-1'>RAZER | SMURFS</h2>
									<h3 className='text-white mt-1'>NOW AVIALABLE ON RAZER CUSTOMS</h3>
									<div className="sources mt-1 d-flex justify-content-center">
										<div><a href="" className='text-white' >Shop Now</a><span className='arrow'>&#62;</span></div>
									</div>

								</div>
							</div>
						</div>

					</div>
					<div className="Blade14 resp-cards w-50">
						<div className="container">
							<div className="Blade14-body">
								<div className="Blade14-text smallcard-text">
									<h2 className='text-white'>NEW RAZER BLADE 14</h2>
									<h3 className='text-white mt-1'>GET A RAZER GIFT CARD OF UP TO US$200</h3>
									<div className="sources mt-2">
										<div><a href="" className='text-white' >Learn More</a><span className='arrow'>&#62;</span></div>
										<div><a href="" className='text-white'>Buy</a><span className='arrow'>&#62;</span></div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="d-flex resp-smallcards">
					<div className="Blackwidow resp-cards w-50">

						<div className="container">
							<div className="Blackwidow-header">
								<div className="button">
									<span>RAZER.COM</span>
									<p>EXCLUSIVE</p>
								</div>
							</div>
							<div className="Blackwidow-body">
								<div className="Blackwidow-text smallcard-text">
									<h2 className='text-white mt-1'>RAZER BLACKWIDOW V4 PRO</h2>
									<h3 className='text-white mt-1'>NEW ORANGE SWITCHES GEN-3</h3>
									<div className="sources mt-1 d-flex justify-content-evenly">
									<div><a href="" className='text-white' >Learn More</a><span className='arrow'>&#62;</span></div>
										<div><a href="" className='text-white'>Buy</a><span className='arrow'>&#62;</span></div>
									</div>

								</div>
							</div>
						</div>

					</div>
					<div className="PS5-combo resp-cards w-50">
						<div className="container">
							<div className="PS5-combo-body">
								<div className="PS5-combo-text smallcard-text">
									<h2 className='text-white'>WIN THE KITSUNE + PS5 COMBO!</h2>
									<h3 className='text-white mt-1'>RAZERSTORE REWARDS GIVEAWAY</h3>
									<div className="sources mt-2 d-flex justify-content-center">
										<div><a href="" className='text-white' >Join Now </a><span className='arrow'>&#62;</span></div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>


			</div>
		</>
	)
}

export default Smallcards