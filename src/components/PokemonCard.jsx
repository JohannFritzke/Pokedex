

export default function PokemonCard ({name, img,types,number}){
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
            <p className="number">#{number}</p>
            <img src={img} alt=""/>
            <h5>{name}</h5>
            <p>{typesHandler()}</p>
        </div>
    )
}