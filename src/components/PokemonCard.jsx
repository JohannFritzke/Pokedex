import axios from "axios";

export default function PokemonCard({ name, img, types, number }) {
  const typesHandler = () => {
    if (types[1]) {
      return (
        <div className="types">
          <p className={`type1 ${types[0].type.name}`}>{types[0].type.name}</p>
          <p className={`type2 ${types[1].type.name}`}>{types[1].type.name}</p>
        </div>
      );
    } else {
      return (
        <div className="types">
          <p className={`type1 ${types[0].type.name}`}>{types[0].type.name}</p>
        </div>
      );
    }
  };

  const shiny = (id) => {
    var shiny = document.getElementById(id);

    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((resp) => {
      if(shiny.src.includes("shiny")){
        shiny.src = resp.data.sprites.other["official-artwork"].front_default;
      }else if(resp.data.sprites.other["official-artwork"].front_shiny != null ){
        shiny.src = resp.data.sprites.other["official-artwork"].front_shiny;
      }
    });

    //shiny.src=requi.data.sprites.other["official-artwork"].front_shiny
  };
  return (
    <div className="cardPoke">
      <p className="number">#{number}</p>
      <img src={img} alt="" id={number} />
      <h5>{name}</h5>
      {typesHandler()}
      <p className="bi bi-star-fill shiny" onClick={() => shiny(number)}></p>
    </div>
  );
}
