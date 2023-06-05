
export default function Header({pokemonFilter}){
    return(
      <div className="navBar">
        <input type="text" placeholder="Buscasr" onChange={(f) => pokemonFilter(f.target.value)}/>
        <i className="bi bi-search search"></i>
      </div>
    )
}