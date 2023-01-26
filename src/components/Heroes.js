function Simpsons({value}){
    return(
        <div>
            <h1>{value.name} {value.surname} {value.age} years old</h1>
            <img src={value.photo}/>
            <h3>{value.info}</h3>
        </div>
    )
}

function RikiMorty({value}){
    return(
        <div className="historyRikyMorty">
            <h2><u>
            Name: {value.name}_ Status: {value.status}_________ gender: {value.gender}___ Species: {value.species}_ </u></h2>
            <img src={value.image}/>
            <h3>{value.info}</h3>
        </div>
    )
}

export {Simpsons, RikiMorty}

