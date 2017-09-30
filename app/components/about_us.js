// Import React
import React from 'react';

// Returns Component JSX
const AboutUs = () =>{
  return(
    <div id="about-us" className="container">

	    <div id="our-mission" className="container">
	      	<section id="mission" className="bg-light-gray">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<h1 className="section-heading" id="aboutSection">About Us</h1>
								<h3 className="section-subheading text-muted" id="aboutSectionSub">We make gardening easy.</h3>
							</div>
						</div>
					</div>
			</section>
		</div>
      	<section id="team" className="bg-light-gray">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h1 className="section-heading" id="aboutSection">The Team</h1>
							<h3 className="section-subheading text-muted" id="aboutSectionSub">WE LOVE VEGETABLES</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3">
							<div className="team-member">
								<img src="images/brian.png" className="img-responsive img-circle" alt=""/>
								<h4>Brian</h4>
								<p className="text-muted">Full-stack Developer<br/><em>Favorite Vegetable: Carrots</em></p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="team-member">
								<img src="images/corey.png" className="img-responsive img-circle" alt=""/>
								<h4>Corey</h4>
								<p className="text-muted">Frontend Developer<br/><em>Favorite Vegetable: Tomatoes</em></p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="team-member">
								<img src="images/lauren.png" className="img-responsive img-circle" alt=""/>
								<h4>Lauren</h4>
								<p className="text-muted">Backend Developer<br/><em>Favorite Vegetable: Pumpkins</em></p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="team-member">
								<img src="images/kuhri.png" className="img-responsive img-circle" alt=""/>
								<h4>Kuhri</h4>
								<p className="text-muted">UI / UX<br/><em>Favorite Vegetable: Brussel Sprouts</em></p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-8 col-lg-offset-2 text-center">
							<p className="large text-muted"></p>
						</div>
					</div>
				</div>
		</section>

		<div id="our-mission" className="container">
	      	<section id="mission" className="bg-light-gray">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<h1 className="section-heading" id="aboutSection">Our Mission</h1>
								<h3 className="section-subheading text-muted" id="aboutSectionSub">Vegetation Nation</h3>
							</div>
						</div>
					</div>
			</section>
		</div>

    </div>
  )
}

export default AboutUs;