import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import NavBar from './NavBar';
import StallLiu from '../assets/stallliu.png';
import LockerMain from '../assets/lockermain.png';
import WuRoom from '../assets/wulockerroom.png';
import NikoShot from '../assets/nikoshot.png';
import SeanShot from '../assets/seanss.png';
import StephShot from '../assets/stephsss.png';
import GegShot from '../assets/gregss.jpeg';
const CoachesPage = ({ match }) => {
	return (
		<>
			<NavBar></NavBar>
			<div className="w-full flex">
				<div>
					<p className="text-4xl pt-24 w-1/4 px-24 font-semibold">
						Coaches.
					</p>
					<p className="px-24 w-2/3">
						We are thankful to welcome a wonderful group of Coaches
						and staff in for our 2021-2022 season. The Washington
						University Ice Hockey team head Coach is Chris
						Nikonovich.
					</p>
					<div className="flex mt-12 w-2/3 mx-auto">
						<img
							src={NikoShot}
							className="rounded-full w-1/6 border-4 border-black"></img>
						<div className="ml-4">
							<p className="text-2xl">Christopher Nikonivich</p>
							<p className="font-bold text-xl">Head Coach</p>
							<p>
								Coach Nikonovich assumed the head coach position
								in 2019. Since then he has led a new era in the
								program, helping to hone WashU hockeys ability
								to compete and win. Aside from decades of hockey
								experience, Coach Nikonovich is a member of not
								only the United States armed forces, but also is
								a first responder and deputy coroner. He carries
								the same sense of professionalism, pride, hard
								work, respect, and caring into the ice rink as a
								coach.
							</p>
						</div>
					</div>
					<div className="flex mt-12 w-2/3 mx-auto">
						<img
							src={SeanShot}
							className="rounded-full w-1/6 border-4 border-black"></img>
						<div className="ml-4">
							<p className="text-2xl">Sean Daley</p>
							<p className="font-bold text-xl">
								Assistant Coach (Defense / Goalie Development)
							</p>
							<p>
								Sean Daley was a former player and captain of
								Washington University who graduated in 2020 with
								a degree in Chemical Engineering. Since then he
								has excelled in the private sector, and joined
								the team as an assistant coach focusing
								primarily on goalie and defensive development.
							</p>
						</div>
					</div>
					<div className="flex mt-12 w-2/3 mx-auto">
						<img
							src={StephShot}
							className="rounded-full w-1/6 h-1/4 border-4 border-black"></img>
						<div className="ml-4">
							<p className="text-2xl">Stephan Meyer</p>
							<p className="font-bold text-xl">
								Assistant Coach (Offense)
							</p>
							<p>
								Stephan Meyer joined as an assistant coach
								during the 2021-2022 season, assuming control of
								offensive development. His years of experience
								in hockey and adaptability have allowed him to
								develop a robust offense. Off the ice, Stephan
								is an accomplished cyclist and a mechanical
								engineer.
							</p>
						</div>
					</div>
					<div className="flex mt-12 w-2/3 mx-auto">
						<img
							src={GegShot}
							className="rounded-full w-1/6 border-4 border-black"></img>
						<div className="ml-4">
							<p className="text-2xl">Greg Gajewski</p>
							<p className="font-bold text-xl">General Manager</p>
							<p>
								{' '}
								Greg Gajewski was a founding member of the
								Washington University ice hockey team. Having
								also been a founding member, and head coach of,
								St. Louis Universities ice hockey program, he
								brings a level of expertise and experience which
								is irreplaceable. Gregs role stretches to every
								aspect of the team — on and off the ice. Greg is
								the engine of the team!
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoachesPage;
