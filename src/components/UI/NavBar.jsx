import React from "react";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
import hexagon from "../../assets/icons/hexagon.svg";
import search from "../../assets/icons/search.svg";
import logout from "../../assets/icons/logout.svg";

const NavBar = () => {
	const toogle = ({ isActive }) => {
		return isActive
			? "block py-2 pl-3 pr-4 first:text-blue bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
			: "block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-white md:p-0";
	};

	const size = "34";

	return (
		<>
			<nav className=" bg-white border-gray-200 px-2 sm:px-4 rounded-md py-2.5 dark:bg-black fixed z-10 w-full">
				<section className="block w-auto">
					<ul className="p-2 grid grid-cols-2 space-x-8 mt-0 text-sm md:border-0 dark:bg-gray-900 dark:border-gray-700 justify-center md:justify-start">
						<li>
							<NavLink to="app" className={toogle} aria-current="page">
								<ReactSVG
									src={hexagon}
									className="text-black dark:text-white hover:-translate-y-1 transition ease-in"
									beforeInjection={(svg) => {
										svg.setAttribute("height", `${size}px`);
										svg.setAttribute("width", `${size}px`);
									}}
								/>
							</NavLink>
						</li>

						<li className='flex justify-end'>
							<NavLink to="login" className={toogle} aria-current="page">
								<ReactSVG
									src={logout}
									className="text-black dark:text-white hover:-translate-y-1 transition ease-in"
									beforeInjection={(svg) => {
										svg.setAttribute("height", `${size}px`);
										svg.setAttribute("width", `${size}px`);
									}}
								/>
							</NavLink>
						</li>
					</ul>
				</section>
			</nav>
		</>
	);
};

export default NavBar;
