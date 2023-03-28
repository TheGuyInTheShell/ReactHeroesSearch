const Footer = () => {
	return (
		<footer className="bg-gradient-to-r from-gray-100 dark:from-gray-600 via-[#fcf6bf] to-gray-100 dark:to-gray-600">
			<section className="max-w-screen-lg px-4 py-12 mx-auto sm:px-6 lg:px-8 dark:text-white grid grid-cols-3">
                <div>
                    <h3 className="text-lg font-semibold">Elieser Alvarez</h3>
                    <img src='./assets/logos/EDAL_Mindjourney_Logo.png' alt="My logo by mindjourney"/>
                    <pre>GuyInTheShell <br/>Fullstack dev</pre>
                    
                </div>
                <div>
                <ul className=" border border-red-100">
                    <h3 className=" text-lg font-semibold">Medias</h3>
                    <li>Twitter</li>
                    <li>GitHub</li>
                    <li>Instagram</li>
                </ul>
                </div>

                <div>
                    <ul className=" border border-red-100">
                        <h3 className=" text-lg font-semibold">Services</h3>
                        <li>Twitter</li>
                        <li>GitHub</li>
                        <li>Instagram</li>
                    </ul>
                </div>

            </section>
		</footer>
	);
};
export default Footer;
