import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import teamPic from '../assets/teampic.jpg';
import bearLogo from '../assets/bearLogo.png';
import NavBar from './NavBar';
import Champions from '../assets/champion.jpeg';
import achalogo from '../assets/achalogo.png';
import wucrest from '../assets/wucrest.png';
import wuabout from '../assets/wuabout.png';
import MACHA from '../assets/macha.png';
const AboutPage = ({ match }) => {
	return (
		<>
			<NavBar></NavBar>

			<div className="w-full h-screen">
				<div className="w-full md:h-1/2 h-1/4 bg-red-400 z-10">
					<div className="w-full h-5/6 z-10 absolute">
						<p className=" md:text-8xl text-4xl text-white text-center mt-24 md:mt-48 pb-4 font-medium">
							About The Team.
						</p>
					</div>
					<img
						className="w-full md:h-1/2 h-1/4 z-0 absolute"
						src={wuabout}></img>
				</div>
				<div className="width-full h-screen flex mx-auto">
					<div className="w-2/3 mx-auto ">
						<p className="text-black font-bold text-5xl z-10">
							About.
						</p>
						<p className="text-lg">
							The Washington University St. Louis Ice Hockey ice
							hockey team has existed in one capacity or another
							since the early 1970's. The team had a sporadic
							existence due to varying school and student support,
							until it was formalized in 2016. The team currently
							competes in the Midwestern Conference.{' '}
						</p>
						<br></br>
						<p className="text-lg">
							Currently, the team consists of roughly 30 members
							whose backgrounds range widely in hockey experience
							and location — including Junior A, Prep School
							Hockey, and other NCAA D-III schools. The team has
							changed its colors to Red, White, and Grey, in order
							to match school color changes. Chris Nikonovich
							currently serves as the teams head coach assisted by
							Greg Gajewski (GM), Sean Daley (Goalie Coach),
							Stephan Meyer (Assistant Coach), Jake Koons
							(Assistant Coach). In the 2021-2022 season Claire
							Coates is the team EMT.{' '}
						</p>
						<br></br>

						<div className="flex w-full mx-auto">
							<img className="w-1/5 mx-auto" src={achalogo}></img>{' '}
							<img className="w-1/6 mx-auto" src={wucrest}></img>
						</div>
						<br></br>
						<p className="text-black text-3xl font-bold">
							Founding.
						</p>
						<p className="text-lg">
							The team was formally re-established in 2016
							following several years of outside-of-conference
							competition to ensure the teams feasibility.
							Originally wearing green and white jerseys, the team
							sported a large "W" on the front of the jersey.
							Michael Dubus would assume the role as Captain in
							his sophomore year for his outstanding previously
							demonstrated leadership. Coach Gary Schlottach
							assumed the role of head coach. While struggling in
							the first few seasons, the Washington University ice
							hockey team would eventually win the MACHA
							championship in Spring of 2019, beating the Bradley
							Braves 7-1. This win marked also meant that the team
							would move up to the Silver Division.{' '}
							<img
								className="md:w-1/3 w-4/5 mx-auto"
								src={Champions}></img>{' '}
						</p>
						<br></br>
						<br></br>
						<p className="text-black text-3xl font-bold">
							About WashU.{' '}
						</p>
						<div>
							Washington University in St. Louis is a private
							institution that was founded in 1853, located in
							scenic St. Louis.
							<br></br>
							<br></br>
							It has a total undergraduate enrollment of 7,675,
							its setting is suburban, and the campus size is 169
							acres.
							<br></br>
							<br></br>
							Wash U is divided into four schools that serve
							undergraduate and graduate students, and four
							graduate schools.
							<br></br>​<br></br>
							Among Wash U’s graduate programs are the top-ranked
							George Warren Brown School of Social Work, the
							highly ranked Olin Business School, School of Law,
							School of Medicine, Sam Fox School of Design and
							Visual Arts, School of Engineering and Applied
							Science and a graduate program in education.​
							<br></br>
							<br></br>
							Washington University's undergraduate program is
							ranked 14th by U.S. News & World Report in 2018 and
							11th by The Wall Street Journal in their 2021
							rankings. The university is ranked 20th in the world
							in 2017 by the Academic Ranking of World
							Universities.
							<br></br>
							<br></br>
							WashU is also notable for being consistently ranked
							number 1 in the nation for housing, food, and campus
							beauty.
							<br></br>
							<br></br>
							The acceptance rate for the class of 2026 was 15%,
							with students selected from more than 31,000
							applications. Of students admitted 81 percent were
							in the top 10 percent of their class.
						</div>
						<br></br>
						<p className="text-black text-3xl font-bold">
							Sponsors.{' '}
						</p>
						<p className="text-lg">
							While the team is primarily funded by Washington
							University, it also has community partners that
							include (but are not limited to) SugarFire,
							GlobalBrew, and Snarfs Sandiwches, Celsius
							Cryotherapy.
						</p>
						<br></br>
						<p className="text-black text-3xl font-bold">
							2021-2022 Captains.
						</p>
						<p>Isaiah Granet, C, #13</p>
						<p>Nick Greco, A, #32</p>
						<p>Sam Humphreys, A, #43</p>
						<p className="mt-12">.</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
