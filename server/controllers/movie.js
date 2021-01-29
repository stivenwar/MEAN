const Movie = require('../models/movie');
const movieControll = {};

movieControll.getMovies = async (req, res) => {
    const movies = await Movie.find()
        .catch((err) => {
            console.error(err);
        });
    res.json(movies);
    console.log(movies);
};
movieControll.createMovie = async (req, res) => {
    const movies = new Movie(req.body);
    await movies.save()
        .catch(err => {
            console.error(err);
        });
    res.json({'status': 'Movie insertada correctamente'});
    console.log(movies);
};
movieControll.getMovie = async (req, res) => {
    const movie = await Movie.find(req.params.id)
        .catch((err) => {
            console.error(err);
        });
    res.json(movie);

};
movieControll.updateMovie = async (req,res) => {
    const movie = {
        title: req.body.title,
        year: req.body.year,
        rated: req.body.rated,
        runtime: req.body.runtime,
        countries: req.body.countries,
        genres: req.body.genres,
        director: req.body.director,
        writers: req.body.writers,
        actors: req.body.actors,
        plot: req.body.plot,
        poster: req.body.poster,
        imdb: req.body.imdb,
        tomato: req.body.tomato,
        metacritic: req.body.metacritic,
        awards: req.body.awards,
        type: req.body.type
    };
    await Movie.findByIdAndUpdate(req. params.id, {$set: movie}, {new: true});
    res.json({status: 'Movie actualizada' });
};
movieControll.deleteMovie = async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({status: 'Movie borrada'})
};
movieControll.addMovie = async (req, res) => {
    const movies = new Movie({
        title: req.body.title,
        year: req.body.year,
        rated: req.body.rated,
        runtime: req.body.runtime,
        countries: req.body.countries,
        genres: req.body.genres,
        director: req.body.director,
        writers: req.body.writers,
        actors: req.body.actors,
        plot: req.body.plot,
        poster: req.body.poster,
        imdb: req.body.imdb,
        tomato: req.body.tomato,
        metacritic: req.body.metacritic,
        awards: req.body.awards,
        type: req.body.type
    });
    await Movie.add(movies);
    res.json({status: 'Movie añadida'})
}

module.exports = movieControll;
