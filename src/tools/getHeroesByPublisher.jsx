import { heroes } from "../data/heroes";

const getHeroesByPublisher = (publisher)=> {
    const validPublisher = ['DC Comics', 'Marvel Comics']

    if ( !validPublisher.includes(publisher) ) {
        throw new Error('publisher no es correcto')
    }
    return heroes.filter(hero => hero.publisher === publisher)
}
export default getHeroesByPublisher