import { Link } from "react-router-dom"

const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters})=> {

    return (
        <section className=" my-6 h-full">
       
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 sm:h-96 md:h-full">

                  <section className="p-1 h-full rounded-xl group sm:flex space-x-6 bg-yellow-50 shadow-xl hover:rounded-2xl">
                    <img src={`./assets/${id}.jpg`} alt={`image of ${superhero}`} loading="lazy" width="800" height="1000" className="h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>

                    <div className="sm:w-7/12 pl-0 p-5 text-md font-bold">
                      <section className="space-y-2">
                        <article className="space-y-4 mb-4">
                          <h4 className="text-2xl font-semibold text-cyan-900">{superhero}</h4>
                          <pre className=" text-red-400">{publisher}</pre>
                          <p className="text-gray-600">
                            {alter_ego}
                          </p>
                            {
                              (alter_ego !== characters)
                              && <p>{characters}</p>
                            }
                            <p>
                              {first_appearance}
                            </p>
                        </article>
                        <Link className="text-blue-300" to={`./hero/${id}`}>
                          Read more...
                        </Link>
                      </section>        
                    </div>
                  </section>    
            </div>
        </section>
    )
}
export default HeroCard