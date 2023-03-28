import { heroes } from "../data/heroes";

const getHero = (target)=> {
    return heroes.filter(hero => 
        hero.id.toUpperCase().includes(target.toUpperCase()) || 
        hero.alter_ego.toUpperCase().includes(target.toUpperCase()) ||
        hero.characters.toUpperCase().includes(target.toUpperCase()) ||
        hero.first_appearance.toUpperCase().includes(target.toUpperCase()))
}
export default getHero