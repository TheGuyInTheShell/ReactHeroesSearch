import HeroCard from "./HeroCard"

const HeroesList = ({heroes})=> {
    return (
        <div className="">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} 
                    {...hero}
                    />
                ))
            }
        </div>
    )
}
export default HeroesList