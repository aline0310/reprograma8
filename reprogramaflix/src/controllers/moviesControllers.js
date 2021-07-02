const movies = require("../models/filmes.json")

const home = (request, response) => {
    response.status(200).send(
        
        
            "Aqui quem fala é ela, a Phizeeeeer! Tá passado?!"
    
          
    )
}

const getAll = (request, response) => {
    response.status(200).send(movies);
};    

const getById = (request, response) => {
  const RequestedId = request.params.id;
  const filteredId = movies.find(movie => movie.id == RequestedId);
  response.status(200).send(filteredId);
}

const getByTitle = (request, response) =>{
    const requestedTitle = request.query.title.toLowerCase()
    const filteredTitle = movies.find(movie => movie.title.toLowerCase().includes(requestedTitle))
    console.log(filteredTitle)
    
    if( filteredTitle === "" || filteredTitle === undefined){
        response.status(404).send( "Querido Naro, por favor digite um título válido")
    }else{
        response.status(200).send(filteredTitle)
    }
    
}


module.exports = {home, getAll, getById, getByTitle}