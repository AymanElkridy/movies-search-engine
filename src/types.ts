export type OMDBSearchResult = {
	Search: Movie[]
	totalResults: string
	Response: string
}

export type Movie = {
	Title: string
	Year: string
	imdbID: string
	Type: string
	Poster: string
}

export type MovieDetails = {
	Title: string
	Year: string
	Rated: string
	Released: string
	Runtime: string
	Genre: string
	Director: string
	Writer: string
	Actors: string
	Plot: string
	Language: string
	Country: string
	Awards: string
	Poster:string
	Ratings: {
			Source: string
			Value: string
	}[]
	Metascore: string
	imdbRating: string
	imdbVotes: string
	imdbID: string
	Type: string
	DVD: string
	BoxOffice: string
	Production: string
	Website: string
	Response: string
}

const movie = {
	'Title':'Batman Begins',
	'Year':'2005',
	'imdbID':'tt0372784',
	'Type':'movie',
	'Poster':'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
}

const movie_details = {
	'Title':'Batman',
	'Year':'1989',
	'Rated':'PG-13',
	'Released':'23 Jun 1989',
	'Runtime':'126 min',
	'Genre':'Action, Adventure',
	'Director':'Tim Burton',
	'Writer':'Bob Kane, Sam Hamm, Warren Skaaren',
	'Actors':'Michael Keaton, Jack Nicholson, Kim Basinger',
	'Plot':'The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.',
	'Language':'English, French, Spanish',
	'Country':'United States, United Kingdom',
	'Awards':'Won 1 Oscar. 9 wins & 26 nominations total',
	'Poster':'https://m.media-amazon.com/images/M/MV5BZTM2NmZlOTEtYTI5NS00N2JjLWJkNzItMmZkNDBlYmQzNDA2XkEyXkFqcGdeQXVyMTAxODYyODI@._V1_SX300.jpg',
	'Ratings':[
		{'Source':'Internet Movie Database','Value':'7.5/10'},
		{'Source':'Rotten Tomatoes','Value':'73%'},
		{'Source':'Metacritic','Value':'69/100'}
	],
	'Metascore':'69',
	'imdbRating':'7.5',
	'imdbVotes':'373,505',
	'imdbID':'tt0096895',
	'Type':'movie',
	'DVD':'22 Aug 1997',
	'BoxOffice':'$251,409,241',
	'Production':'N/A',
	'Website':'N/A',
	'Response':'True'
}