import HeroesList from "./subComponents/HeroesList";
import useForm from "../../hooks/useForm";
import getHeroesByPublisher from "../../tools/getHeroesByPublisher";
import getHero from "../../tools/getHero";
import HeroCard from "./subComponents/HeroCard";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import search_logo from "../../assets/icons/search.svg";

const HeoresIndex = () => {
	const [{ search }, handleInpuChange] = useForm({
		search: "",
	});

	const [heroesFind, setHeroesFind] = useState(null);

	useEffect(() => {
		setHeroesFind(getHero(search));
	}, [search]);

	const { dc, marvel } = {
		dc: getHeroesByPublisher("DC Comics"),
		marvel: getHeroesByPublisher("Marvel Comics"),
	};

	return (
		<main className=" dark:bg-slate-800 dark:text-white">
			<section className="relative overflow-x-auto shadow-md">
				<div className="p-4">
					<label htmlFor="table-search" className="sr-only">
						Search
					</label>
					<section className="relative mt-1">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<ReactSVG src={search_logo} />
						</div>
						<input
							type="text"
							id="table-search"
							name='search'
							onChange={handleInpuChange}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search some heroes"
						/>
					</section>
				</div>
			</section>

			<section className='grid grid-cols-2'>
				{search ? (
					<>
						<section className='min-h-screen col-span-2'>
							{heroesFind.length ? (
								heroesFind.map((hero) => (
									<div className='lg:h-[400px]' key={hero.id}>
										<HeroCard {...hero} />
									</div>
								))
							) : (
								<h3>Not found</h3>
							)}
						</section>
					</>
				) : (
					<>
						<section className=' min-h-screen'>
							<HeroesList heroes={dc} />
						</section>

						<section className='min-h-screen'>
							<HeroesList heroes={marvel} />
						</section>
					</>
				)}
			</section>
		</main>
	);
};
export default HeoresIndex;
