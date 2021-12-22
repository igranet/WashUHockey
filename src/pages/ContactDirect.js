import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import NavBar from './NavBar';
import FooterBar from '../components/footerBar';
import RecruitForm from '../components/RecruitForm';
import SobelImage from '../assets/sobelsobel.png';
import LockerPic from '../assets/wulockerroom.png';
const ContactDirect = ({ match }) => {
	const buttStyle =
		'bg-red-400 px-4 py-4 text-white text-center mt-4 w-full rounded-lg hover:bg-red-600 duration-400';
	return (
		<>
			<NavBar></NavBar>

			<div className="w-full overflow-scroll">
				<div className="w-1/2 mx-auto -mb-12">
					<p className="mt-24 text-6xl font-medium">Contact.</p>
					<p> Need to get in touch with us? Fill out the below!</p>
				</div>

				<div className="ml-72 w-2/3 mx-auto mt-24 text-4xl text-center font-semibold overflow-scroll flex ">
					<form
						className="mx-auto"
						action="https://formspree.io/f/mqknkvvj"
						method="POST">
						<input
							name="lastname"
							className="px-4 border-gray-400 border-2 w-1/3 rounded-lg mr-2 placeholder:text-md"
							type="text"
							placeholder="First Name"></input>
						<input
							type="text"
							name="firstname"
							className="w-1/3 px-4 border-gray-400 border-2 rounded-lg"
							placeholder="Last Name"></input>
						<input
							type="text"
							name="_replyto"
							className="w-2/3 mt-4 border-gray-400 border-2 px-4 rounded-lg"
							placeholder="Email"></input>

						<textarea
							name="message"
							placeholder="Type your message here..."
							className="form-control
        block
        w-2/3
        mx-auto
        mt-6
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"></textarea>
						<input
							className={
								'mt-6 bg-red-400 mb-12 hover:bg-red-600 duration-500 text-white rounded-lg px-3 cursor-pointer font-light text-4xl'
							}
							type="submit"
						/>
					</form>
				</div>
			</div>
			{/* <FooterBar></FooterBar> */}
			<footer className="h-18 bg-gray-700 mt-24 border-t-2 border-black flex flex-col absolute bottom-0 w-full">
				<div className="pt-2 w-full text-center text-xl font-medium space-x-24 text-white cursor-pointer ">
					<span
						className="hover:text-red-400 duration-500"
						onClick={() => {
							window.location = '/contact/';
						}}>
						Contact.
					</span>
					<span
						className="hover:text-red-400 duration-500"
						onClick={() => {
							window.location = '/about';
						}}>
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
		</>
	);
};

export default ContactDirect;
