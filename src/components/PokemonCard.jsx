

export default function PokemonCard ({name, img,types}){
    const typesHandler=()=>{
        if(types[1]){
            return  <div className="types">
                        <p className={`type1 ${types[0].type.name}`}>{types[0].type.name}</p>
                        <p className={`type2 ${types[1].type.name}`}>{types[1].type.name}</p>
                    </div>
                    
        }else{
            return  <div className="types">
                     <p className={`type1 ${types[0].type.name}`}>{types[0].type.name}</p>
                    </div>
        }   
    }
    return(
        <div className="cardPoke">
            <img src={img} alt="" />
            <h5>{}</h5>
            <p>{typesHandler()}</p>
        </div>
    )
}