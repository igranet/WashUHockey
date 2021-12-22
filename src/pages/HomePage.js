import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import teamPic from '../assets/teampic.jpg';
import bearLogo from '../assets/bearLogo.png';
import NavBar from './NavBar';
import SnarfsLogo from '../assets/snarfslogo.png';
import GlobalBrew from '../assets/globalbrew.png';
import SugarFire from '../assets/sugarfire.png';
import SupportBar from '../components/supportBar';
import RecruitPic from '../assets/schedulepic.png';
import HomePageBox from '../components/HomePageBox';
import StephDad from '../assets/stephdad.jpg';
import DanielPic from '../assets/danielpic.png';
import KentaPic from '../assets/kentaPic.png';
import FooterBar from '../components/footerBar';
import BearPicTwo from "../assets/bearpictwo.png"
import MACHA from "../assets/macha.png"
import ACHA from "../assets/achalogo.png"
import WUCREST from "../assets/wucrest.png"
const HomePage = ({ match }) => {
	return (
		<>
			<NavBar></NavBar>

			<div className="w-full h-screen bg-gray-200 z-10">
				<div className="w-full h-5/6 z-10 absolute">
					<div className="bg-gray-300 bg-opacity-0 w-2/3 mx-auto rounded-lg">
                        <p className="py-4 bg-opacity-20 text-6xl font-light text-opacity-90 text-gray-900 font-sans text-center mt-24 font-medium pb-4">
							Washington University St. Louis
						</p>
                        <img classname="w-2" src={BearPicTwo}></img>
						{/* <div className="w-3/4 mx-auto h-2 border-t-8 pt-4 pb-4 border-red-800 border-opacity-70 rounded-lg"></div> */}
						
                        {/* <p className=" text-gray-600 text-8xl text-center font-light italic py-3">
							Ice Hockey
						</p> */}
					</div>
				</div>
				<div className="w-full h-5/6 bg-gray-100 absolute bg-opacity-60">
					{' '}
				</div>
				<img
					className="w-full h-5/6 z-0 border-red-100"
					src={teamPic}></img>
				<div className="w-full mx-auto flex flex-rows -mt-28 px-12">
					<HomePageBox
						pic={RecruitPic}
						text="Recruiting"
						link="/recruiting"></HomePageBox>
					<HomePageBox
						pic={DanielPic}
						text="About"
						link="/about"></HomePageBox>
					<HomePageBox
						pic={KentaPic}
						text="Sponsor"
						link="/home"></HomePageBox>
				</div>
				<SupportBar className="mt-32"></SupportBar>
                <div className="flex w-2/3 mx-auto -mt-12 -mb-12">
                    {/* <img className="w-1/3" src={MACHA}></img> */}
                    <img className="w-24 mx-auto" src={WUCREST}></img>
                    {/* <img src={ACHA}></img> */}
                    
                </div>
				<footer className=" h-18 bg-gray-700 mt-24 border-t-2 border-black flex flex-col">
					<div className="pt-2 w-full text-center text-xl font-medium space-x-24 text-white cursor-pointer ">
						<span className="hover:text-red-400 duration-500" onClick={(()=>{window.location = "/contact/"})}>
							Contact.
						</span>
						<span className="hover:text-red-400 duration-500" onClick={(()=>{window.location = "/about"})}>
							About.
						</span>
						<span className="hover:text-red-400 duration-500">
							Sponsor.
						</span>
					</div>
					<div className="pt-4 text-center w-full text-gray-200 font-light align-text-bottom h-full my-auto">
						Copyright WashU Hockey 2022
					</div>
				</footer>
			</div>
		</>
	);
};

export default HomePage;
