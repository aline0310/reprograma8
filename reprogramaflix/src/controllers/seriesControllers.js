const app = require("../app");
const series = require("../models/series.json");


const home = (request, response) => {
    response.status(200).send(
    {
        "message": "Welcome!!! Do you wanna have fun today? *.* Here you gonna find a lot of good series for you spend very well your time"
    })
};

const bringMeAll = (request, response) => {
    response.status(200).send(series);
};

const getById = (request, response) => {
    const idRequested = request.params.id;
    const idFiltered = series.find(serie => serie.id == idRequested);
    response.status(200).send(idFiltered);
}

const getByTitle = (request, response) => {
    const requestedTitle = request.query.title.toLowerCase()
    const filteredTitle = series.find(serie => serie.title.toLowerCase().includes(requestedTitle))

    if(filteredTitle === "" || filteredTitle === undefined){
        response.status(404).send({
            "message": "Error!!!Please, insert a title avaiable!"
        })
    }else{
        response.status(200).send(filteredTitle)
    }
}




module.exports = {home, bringMeAll, getById, getByTitle}



