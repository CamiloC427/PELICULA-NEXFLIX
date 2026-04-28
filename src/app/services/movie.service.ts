import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 11,
      title: '12 Angry Men',
      genre: 'Drama',
      releaseDate: '1957-04-10',
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
      synopsis: 'Un jurado tiene la difícil tarea de decidir si un joven acusado de asesinato es culpable o no.',
      review: '12 Angry Men (12 hombres en pugna) es un drama judicial dirigido por Sidney Lumet. La trama se desarrolla casi por completo en una sala de jurado, donde doce hombres deben decidir el destino de un joven acusado de asesinato. Al principio, la mayoría cree en su culpabilidad, pero uno de los jurados siembra la duda razonable y comienza una intensa deliberación. Con diálogos potentes y una profunda exploración de los prejuicios, la justicia y la moral, la película es un clásico atemporal que demuestra el poder de la razón y la conciencia individual.',
      image: 'angry_men.jpg',
      thumbnail: 'angry_men-thumb.jpg',
      comments: []
    },
     {
      id: 12,
      title: 'The Lord of the Rings: The Return of the King',
      genre: 'Drama',
      releaseDate: '2003-12-17',
      actors: ['Elijah Wood', 'Viggo Mortensen','Ian McKellen'],
      synopsis: 'La épica conclusión de la trilogía, con la batalla final para destruir el Anillo y derrotar a Sauron.',
      review: 'The Lord of the Rings: The Return of the King (El Señor de los Anillos: El Retorno del Rey) es la épica conclusión de la trilogía dirigida por Peter Jackson. La historia sigue la batalla final por la Tierra Media mientras Frodo y Sam se acercan al Monte del Destino para destruir el Anillo Único. Con batallas impresionantes, momentos emotivos y un cierre poderoso para cada personaje, la película es una celebración del coraje, la amistad y la esperanza. Ganadora de 11 premios Óscar, es considerada una de las mejores películas de fantasía de todos los tiempos.',
      image: 'return_of_the_king.jpg',
      thumbnail: 'return_of_the_king-thumb.jpg'
    },
         {
      id: 30,
      title: 'The Good, the Bad and the Ugly',
      genre: 'Crime',
      releaseDate: '1966-12-23',
      actors: ['Clint Eastwood', 'Lee Van Cleef','Eli Wallach'],
      synopsis: 'Tres hombres buscan un tesoro en el viejo oeste, pero cada uno tiene sus propios intereses.',
      review: 'The Good, the Bad and the Ugly (El bueno, el feo y el malo) es un clásico del spaghetti western dirigido por Sergio Leone. Ambientada durante la Guerra de Secesión, sigue a tres pistoleros —el astuto Blondie, el despiadado Angel Eyes y el impredecible Tuco— que compiten por encontrar un tesoro escondido. Con una dirección estilizada, música legendaria de Ennio Morricone y duelos memorables, la película es una obra maestra del género, que combina tensión, humor y crítica social con maestría.',
      image: 'good_bad_ugly.jpg',
      thumbnail: 'good_bad_ugly-thumb.jpg'
    },
         {
      id: 7,
      title: 'Interstellar',
      genre: 'Sci-fi',
      releaseDate: '2014-11-07',
      actors: ['Matthew McConaughey', 'Anne Hathaway','Jessica Chastain'],
      synopsis: 'Unos exploradores viajan a través de un agujero de gusano para asegurar la supervivencia de la humanidad.',
      review: 'Interstellar es una épica de ciencia ficción dirigida por Christopher Nolan, que sigue a un grupo de astronautas en un viaje a través de un agujero de gusano en busca de un nuevo hogar para la humanidad. Con impresionantes efectos visuales y una trama emocionalmente compleja sobre el amor, el sacrificio y el tiempo, la película plantea preguntas filosóficas sobre la supervivencia y el destino. Es un viaje cinematográfico inolvidable que combina ciencia y emoción.',
      image: 'interstellar.jpg',
      thumbnail: 'interstellar-thumb.jpg'
    },
         {
      id: 5,
      title: 'Inception',
      genre: 'Sci-fi',
      releaseDate: '2010-07-16',
      actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt','Ellen Page'],
      synopsis: 'Un ladrón que roba secretos a través de la tecnología de compartir sueños.',
      review: 'Inception es un thriller de ciencia ficción dirigido por Christopher Nolan que explora el mundo de los sueños y la mente humana. Dom Cobb, un experto en robar secretos a través de los sueños, recibe una última misión: implantar una idea en la mente de un objetivo. Con una narrativa intrincada, efectos visuales impresionantes y una trama que desafía la percepción de la realidad, la película se convierte en un complejo y fascinante rompecabezas sobre el subconsciente y la realidad.',
      image: 'inception.jpg',
      thumbnail: 'inception-thumb.jpg'
    },
         {
      id: 3,
      title: 'The Dark Knight',
      genre: 'Action',
      releaseDate: '2008-07-18',
      actors: ['Christian Bale', 'Heath Ledger','Aaron Eckhart'],
      synopsis: 'Batman se enfrenta al Joker en una prueba psicológica y física.',
      review: 'The Dark Knight es una intensa y aclamada película de Christopher Nolan que redefine el cine de superhéroes. Batman enfrenta a su mayor desafío: el Joker, un criminal caótico que siembra el caos en Gotham. Con una actuación legendaria de Heath Ledger, la película explora el límite entre el bien y el mal, el sacrificio y la justicia. Es oscura, profunda y emocionante.',
      image: 'dark_knight.jpg',
      thumbnail: 'dark_knight-thumb.jpg'
    },
         {
      id: 20,
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      genre: 'Sci-fi',
      releaseDate: '1980-05-21',
      actors: ['Mark Hamill', 'Harrison Ford','Carrie Fisher'],
      synopsis: 'La lucha entre los rebeldes y el Imperio continúa, mientras Luke Skywalker enfrenta su destino.',
      review: 'Star Wars: Episode V – The Empire Strikes Back (Star Wars: Episodio V – El Imperio contraataca) es la segunda entrega de la trilogía original y una de las más aclamadas de la saga. Dirigida por Irvin Kershner, la historia sigue a Luke Skywalker mientras entrena con el maestro Yoda para convertirse en Jedi, mientras el Imperio, liderado por Darth Vader, persigue sin descanso a la Alianza Rebelde. Con un tono más oscuro, giros impactantes y un desarrollo profundo de los personajes, la película elevó el universo de Star Wars y dejó una huella imborrable en la historia del cine.',
      image: 'empire_strikes_back.jpg',
      thumbnail: 'empire_strikes_back-thumb.jpg'
    },
         {
      id: 19,
      title: 'One Flew Over the Cuckoo\'s Nest',
      genre: 'Drama',
      releaseDate: '1975-11-19',
      actors: ['Jack Nicholson', 'Louise Fletcher','Michael Berryman'],
      synopsis: 'Un hombre se hace pasar por loco para evitar la prisión y termina en un hospital psiquiátrico.',
      review: 'One Flew Over the Cuckoo\'s Nest (Atrapado sin salida) es un poderoso Drama dirigido por Miloš Forman, basado en la novela de Ken Kesey. La historia sigue a Randle McMurphy, un hombre rebelde que finge estar loco para evitar la cárcel y es internado en un hospital psiquiátrico. Allí desafía la autoridad de la estricta enfermera Ratched, inspirando a los demás pacientes a recuperar su dignidad. Con una actuación magistral de Jack Nicholson, la película es una crítica al sistema institucional y un canto a la libertad individual. Ganadora de cinco premios Óscar, incluyendo Mejor Película.',
      image: 'cuckoos_nest.jpg',
      thumbnail: 'cuckoos_nest-thumb.jpg'
    },
         {
      id: 9,
      title: 'Gladiator',
      genre: 'Action',
      releaseDate: '2000-05-05',
      actors: ['Russell Crowe', 'Joaquin Phoenix','Connie Nielsen'],
      synopsis: 'Un general busca venganza contra el emperador corrupto.',
      review: 'Gladiator es una épica histórica dirigida por Ridley Scott, que cuenta la historia de Máximo, un general romano traicionado que busca venganza tras la muerte de su familia a manos del corrupto emperador Cómodo. Con impresionantes escenas de combate, una actuación sobresaliente de Russell Crowe y una trama de lealtad, justicia y redención, la película es un emocionante viaje de lucha por el honor y la libertad. Ganadora de varios premios, incluyendo el Óscar a Mejor Película.',
      image: 'gladiator.jpg',
      thumbnail: 'gladiator-thumb.jpg'
    },
         {
      id: 8,
      title: 'Fight Club',
      genre: 'Drama',
      releaseDate: '1999-10-15',
      actors: ['Brad Pitt', 'Edward Norton','Helena Bonham Carter'],
      synopsis: 'Dos hombres forman un club de lucha clandestino.',
      review: 'Fight Club es una película provocadora dirigida por David Fincher, basada en la novela de Chuck Palahniuk. Sigue a un hombre insatisfecho con su vida que forma un club clandestino de lucha como una forma de liberar sus frustraciones. A medida que la historia avanza, la relación con su enigmático compañero, Tyler Durden, se vuelve más peligrosa y filosófica. Con temas de consumismo, identidad y alienación, Fight Club es una obra radical que cuestiona la sociedad moderna y la naturaleza del ser humano.',
      image: 'fight_club.jpg',
      thumbnail: 'fight_club-thumb.jpg'
    },
         {
      id: 10,
      title: 'The Matrix',
      genre: 'Sci-fi',
      releaseDate: '1999-03-31',
      actors: ['Keanu Reeves', 'Laurence Fishburne','Carrie-Anne Moss'],
      synopsis: 'Un hacker descubre la verdad sobre la realidad.',
      review: 'The Matrix es una innovadora película de ciencia ficción dirigida por las hermanas Wachowski. La historia sigue a Neo, un hacker que descubre que la realidad que conoce es una simulación creada por máquinas para controlar a la humanidad. Con efectos especiales revolucionarios, una trama profunda sobre la percepción de la realidad, la libertad y el destino, The Matrix se convirtió en un hito del cine de acción y una referencia cultural. Su influencia perdura en la cultura pop y la filosofía.',
      image: 'matrix.jpg',
      thumbnail: 'matrix-thumb.jpg'
    },
         {
      id: 21,
      title: 'Se7en',
      genre: 'Crime',
      releaseDate: '1995-09-22',
      actors: ['Brad Pitt', 'Morgan Freeman','Kevin Spacey'],
      synopsis: 'Dos detectives investigan una serie de asesinatos basados en los siete pecados capitales.',
      review: 'Se7en (Pecados capitales) es un oscuro thriller dirigido por David Fincher. La historia sigue a dos detectives, el veterano Somerset y el impulsivo Mills, mientras investigan una serie de asesinatos brutales inspirados en los siete pecados capitales. Con una atmósfera inquietante, un guion inteligente y un final impactante que se ha vuelto icónico, la película explora los límites de la moralidad y el mal humano. Es un clásico moderno del suspenso, con actuaciones destacadas de Morgan Freeman, Brad Pitt y Kevin Spacey.',
      image: 'seven.jpg',
      thumbnail: 'seven-thumb.jpg'
    },
         {
      id: 22,
      title: 'It\'s a Wonderful Life',
      genre: 'Drama',
      releaseDate: '1946-12-20',
      actors: ['James Stewart', 'Donna Reed','Lionel Barrymore'],
      synopsis: 'Un hombre deprimido recibe la oportunidad de ver cómo hubiera sido la vida de las personas a su alrededor sin él.',
      review: 'It’s a Wonderful Life (¡Qué bello es vivir!) es un entrañable clásico navideño dirigido por Frank Capra. La película cuenta la historia de George Bailey, un hombre que, en un momento de desesperación, recibe la visita de un ángel que le muestra cómo habría sido el mundo si él nunca hubiera existido. A través de este viaje emocional, George redescubre el valor de su vida y el impacto que ha tenido en los demás. Con un mensaje profundo sobre esperanza, comunidad y el sentido de propósito, es una de las películas más queridas de todos los tiempos.',
      image: 'wonderful_life.jpg',
      thumbnail: 'wonderful_life-thumb.jpg'
    },
         {
      id: 18,
      title: 'The Silence of the Lambs',
      genre: 'Crime',
      releaseDate: '1991-02-14',
      actors: ['Jodie Foster', 'Anthony Hopkins','Lawrence A. Bonney'],
      synopsis: 'Una joven agente del FBI busca la ayuda de un asesino en prisión para atrapar a otro asesino.',
      review: 'The Silence of the Lambs (El silencio de los inocentes) es un thriller psicológico dirigido por Jonathan Demme. La historia sigue a Clarice Starling, una joven agente del FBI que busca la ayuda del brillante pero peligroso psiquiatra y asesino en serie Hannibal Lecter para atrapar a otro asesino llamado Buffalo Bill. Con actuaciones inolvidables de Jodie Foster y Anthony Hopkins, la película mezcla tensión, inteligencia y horror de manera magistral. Ganadora de cinco premios Óscar, es un referente del cine de suspenso y Crimen.',
      image: 'silence_of_the_lambs.jpg',
      thumbnail: 'silence_of_the_lambs-thumb.jpg'
    },
         {
      id: 26,
      title: 'Seven Samurai',
      genre: 'Action',
      releaseDate: '1954-04-26',
      actors: ['Toshiro Mifune', 'Takashi Shimura','Keiko Tsushima'],
      synopsis: 'Un pueblo recluta a siete samuráis para defenderse de una banda de bandidos.',
      review: 'Seven Samurai (Los siete samuráis) es una obra maestra del cine japonés dirigida por Akira Kurosawa. La historia se sitúa en el Japón feudal, donde un pequeño pueblo contrata a siete samuráis para protegerse de bandidos que amenazan con saquear sus cosechas. Con una narrativa épica, personajes memorables y un enfoque innovador en la acción y el Drama, la película combina honor, sacrificio y lucha por la justicia. Su influencia en el cine mundial es enorme, siendo inspiración directa para muchas películas posteriores, incluido The Magnificent Seven.',
      image: 'seven_samurai.jpg',
      thumbnail: 'seven_samurai-thumb.jpg'
    },
         {
      id: 6,
      title: 'Pulp Fiction',
      genre: 'Crime',
      releaseDate: '1994-10-14',
      actors: ['John Travolta', 'Uma Thurman','Samuel L. Jackson'],
      synopsis: 'Relatos entrelazados de violencia y redención.',
      review: 'Pulp Fiction es una película icónica dirigida por Quentin Tarantino, conocida por su narrativa no lineal y diálogos únicos. A través de varias historias entrelazadas sobre Crimen, violencia y redención, la película sigue a personajes como Vincent Vega y Jules Winnfield, cuyas vidas se cruzan en situaciones inesperadas. Con una banda sonora memorable y actuaciones destacadas de John Travolta, Samuel L. Jackson y Uma Thurman, Pulp Fiction es un hito del cine contemporáneo que marcó una era en el cine independiente.',
      image: 'pulp_fiction.jpg',
      thumbnail: 'pulp_fiction-thumb.jpg'
    },
         {
      id: 1,
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      releaseDate: '1994-09-23',
      actors: ['Tim Robbins', 'Morgan Freeman','Bob Gunton'],
      synopsis: 'Dos hombres encarcelados forjan un vínculo a lo largo de los años, encontrando consuelo y redención.',
      review: 'Es una película dirigida por Frank Darabont, basada en una novela corta de Stephen King. La historia sigue a Andy Dufresne, un banquero condenado injustamente a cadena perpetua por el asesinato de su esposa y su amante. En la prisión de Shawshank, entabla una profunda amistad con Red, otro preso. A través de los años, Andy mantiene la esperanza y usa su inteligencia para sobrevivir, ganarse la confianza de los guardias y transformar la prisión. La película es un homenaje a la resiliencia humana, la amistad y la esperanza, con un final emotivo y liberador. Es considerada una de las mejores películas de todos los tiempos.',
      image: 'shawshank.jpg',
      thumbnail: 'shawshank-thumb.jpg'
    },
         {
      id: 4,
      title: 'Forrest Gump',
      genre: 'Romance',
      releaseDate: '1994-07-06',
      actors: ['Tom Hanks', 'Robin Wright','Gary Sinise'],
      synopsis: 'La vida a través de los ojos de un hombre simple con un coeficiente intelectual bajo.',
      review: 'Forrest Gump es una emotiva película dirigida por Robert Zemeckis, protagonizada por Tom Hanks. La historia sigue a Forrest, un hombre con una discapacidad intelectual, que a pesar de sus limitaciones, se ve involucrado en momentos históricos clave de Estados Unidos. A lo largo de su vida, vive grandes aventuras, desde la guerra de Vietnam hasta la carrera como corredor, todo mientras mantiene un amor incondicional por Jenny, su amiga de toda la vida. Con una mezcla de comedia, Drama y ternura, Forrest Gump es una reflexión sobre el destino, la perseverancia y el amor.',
      image: 'forrest_gump.jpg',
      thumbnail: 'forrest_gump-thumb.jpg'
    },
         {
      id: 28,
      title: 'Saving Private Ryan',
      genre: 'Drama',
      releaseDate: '1998-07-24',
      actors: ['Tom Hanks', 'Matt Damon','Tom Sizemore'],
      synopsis: 'Un grupo de soldados busca a un paracaidista perdido durante la invasión de Normandía.',
      review: 'Saving Private Ryan (Rescatando al soldado Ryan) es un poderoso Drama bélico dirigido por Steven Spielberg. Ambientada en la Segunda Guerra Mundial, sigue a un grupo de soldados enviados tras las líneas enemigas para encontrar y traer de vuelta al soldado James Ryan, cuyo tres hermanos han muerto en combate. Con una representación cruda y realista del desembarco en Normandía y una profunda exploración del sacrificio, el deber y la humanidad en tiempos de guerra, la película es considerada una de las más impactantes del género. Ganadora de varios premios Óscar, incluida Mejor Director.',
      image: 'saving_private_ryan.jpg',
      thumbnail: 'saving_private_ryan-thumb.jpg'
    },
         {
      id: 16,
      title: 'City of God',
      genre: 'Drama',
      releaseDate: '2002-02-08',
      actors: ['Alexandre Rodrigues', 'Leandro Firmino','Phellipe Haagensen'],
      synopsis: 'La vida en una favela brasileña a través de los ojos de dos jóvenes, uno que sueña con ser fotógrafo y otro que se adentra en el Crimen.',
      review: 'City of God (Ciudad de Dios) es un aclamado Drama brasileño dirigido por Fernando Meirelles y Kátia Lund. Ambientada en las favelas de Río de Janeiro, la película sigue a dos jóvenes, Buscapé y Zé Pequeño, que toman caminos muy diferentes en un entorno marcado por la violencia, el Crimen y la pobreza. A través de una narración intensa y visualmente impactante, City of God muestra cómo las decisiones individuales pueden influir en la vida dentro de una sociedad empobrecida y llena de conflictos. La película es un retrato brutal y realista de la vida en las favelas y un grito contra las desigualdades sociales.',
      image: 'city_of_god.jpg',
      thumbnail: 'city_of_god-thumb.jpg'
    },
         {
      id: 27,
      title: 'The Green Mile',
      genre: 'Drama',
      releaseDate: '1999-12-10',
      actors: ['Tom Hanks', 'Michael Clarke Duncan','David Morse'],
      synopsis: 'Un oficial de prisión se enfrenta a los extraños poderes de un prisionero condenado a muerte.',
      review: 'The Green Mile es un emotivo Drama dirigido por Frank Darabont, basado en la novela de Stephen King. La historia se centra en Paul Edgecomb, un guardia de prisión que supervisa a los reos en el corredor de la muerte, donde se encuentra con John Coffey, un hombre condenado por un Crimen que no cometió. A pesar de su apariencia temible, Coffey tiene poderes sobrenaturales que lo convierten en un ser profundamente bondadoso. Con una mezcla de misticismo, amistad y sacrificio, la película explora temas de justicia, humanidad y redención. Con actuaciones destacadas de Tom Hanks y Michael Clarke Duncan, The Green Mile es una conmovedora reflexión sobre el bien y el mal.',
      image: 'green_mile.jpg',
      thumbnail: 'green_mile-thumb.jpg'
    },
         {
      id: 17,
      title: 'Life Is Beautiful',
      genre: 'Drama',
      releaseDate: '1997-12-20',
      actors: ['Roberto Benigni', 'Nicoletta Braschi','Giorgio Cantarini'],
      synopsis: 'Un hombre judío en un campo de concentración utiliza su imaginación para proteger a su hijo del horror del Holocausto.',
      review: 'Life Is Beautiful (La vida es bella) es una emotiva comedia dramática italiana dirigida y protagonizada por Roberto Benigni. La película cuenta la historia de Guido, un hombre judío que, durante la Segunda Guerra Mundial, usa su imaginación y humor para proteger a su hijo de los horrores del campo de concentración nazi. A través de su capacidad para convertir una tragedia en una experiencia menos aterradora para su hijo, La vida es bella celebra el poder del amor y la esperanza en medio de la desesperación. Con su mezcla de comedia y Drama, la película es un testamento a la resistencia del espíritu humano.',
      image: 'life_is_beautiful.jpg',
      thumbnail: 'life_is_beautiful-thumb.jpg'
    },
         {
      id: 29,
      title: 'Terminator 2: Judgment Day',
      genre: 'Sci-fi',
      releaseDate: '1991-07-03',
      actors: ['Arnold Schwarzenegger', 'Linda Hamilton','Edward Furlong'],
      synopsis: 'Un cyborg de metal líquido y un exterminador de la máquina viajan en el tiempo para cambiar el futuro.',
      review: 'UnaTerminator 2: Judgment Day (Terminator 2: El juicio final) es una icónica película de ciencia ficción dirigida por James Cameron. La historia sigue a Sarah Connor y su hijo John, quienes deben enfrentarse nuevamente al Terminator, un androide que esta vez, en un giro inesperado, es enviado para proteger a John, quien está destinado a liderar la resistencia contra las máquinas en el futuro. Con efectos especiales revolucionarios para su época, una trama intensa sobre el destino y la humanidad, y la memorable actuación de Arnold Schwarzenegger, Terminator 2 se ha consolidado como una de las mejores películas de acción y ciencia ficción de todos los tiempos.',
      image: 'terminator_2.jpg',
      thumbnail: 'terminator_2-thumb.jpg'
    },
         {
      id: 23,
      title: 'Back to the Future',
      genre: 'Sci-fi',
      releaseDate: '1985-07-03',
      actors: ['Michael J. Fox', 'Christopher Lloyd','Lea Thompson'],
      synopsis: 'Un adolescente viaja en el tiempo y accidentalmente pone en peligro la existencia de su familia.',
      review: 'Back to the Future (Regreso al futuro) es una película de ciencia ficción y aventuras dirigida por Robert Zemeckis. La historia sigue a Marty McFly, un adolescente que, con la ayuda de un excéntrico inventor llamado Doc Brown, viaja al pasado en una máquina del tiempo construida en un DeLorean. Durante su viaje a los años 50, Marty interfiere accidentalmente en el encuentro de sus padres, lo que pone en peligro su propia existencia. Con un guion ingenioso, una mezcla de humor, emoción y acción, Back to the Future se convirtió en un clásico del cine y un referente de los viajes en el tiempo."',
      image: 'back_to_the_future.jpg',
      thumbnail: 'back_to_the_future-thumb.jpg'
    },
         {
      id: 13,
      title: 'Spirited Away',
      genre: 'Action',
      releaseDate: '2001-07-20',
      actors: ['Rumi Hiiragi', 'Miyu Irino','Mari Natsuki'],
      synopsis: 'Una niña se encuentra atrapada en un misterioso mundo de espíritus y debe encontrar una manera de regresar a su hogar.',
      review: 'Spirited Away (El viaje de Chihiro) es una aclamada película de animación japonesa dirigida por Hayao Miyazaki. La historia sigue a Chihiro, una niña que, junto a sus padres, se encuentra atrapada en un mundo mágico de espíritus y criaturas fantásticas después de que sus padres son transformados en cerdos. Mientras busca una forma de escapar y salvar a su familia, Chihiro trabaja en un misterioso baño termal dirigido por seres sobrenaturales. Con una animación espectacular, una narrativa rica en simbolismo y temas de crecimiento personal, Spirited Away es una obra maestra del cine de animación, ganadora del Óscar a Mejor Película de Animación.',
      image: 'spirited_away.jpg',
      thumbnail: 'spirited_away-thumb.jpg'
    },
         {
      id: 24,
      title: 'The Pianist',
      genre: 'Drama',
      releaseDate: '2002-09-24',
      actors: ['Adrien Brody', 'Thomas Kretschmann','Frank Finlay'],
      synopsis: 'Un pianista judío lucha por sobrevivir durante la ocupación nazi en Polonia.',
      review: 'The Pianist (El pianista) es un Drama biográfico dirigido por Roman Polanski, basado en las memorias del pianista judío polaco Władysław Szpilman. La película sigue a Szpilman mientras sobrevive a la invasión nazi en Polonia durante la Segunda Guerra Mundial, enfrentándose a la brutalidad del régimen y las dificultades extremas. Con una actuación magistral de Adrien Brody, quien interpreta a Szpilman, The Pianist es una desgarradora historia de resistencia, pérdida y la lucha por la supervivencia. La película ganó varios premios, incluidos tres premios Óscar, y es un testamento al espíritu humano en tiempos de desesperación.',
      image: 'pianist.jpg',
      thumbnail: 'pianist-thumb.jpg'
    },
         {
      id: 14,
      title: 'Parasite',
      genre: 'Drama',
      releaseDate: '2019-05-30',
      actors: ['Song Kang-ho', 'Lee Sun-kyun','Cho Yeo-jeong'],
      synopsis: 'Una familia pobre se infiltra en la vida de una familia rica, pero las cosas toman un giro oscuro.',
      review: 'Parasite (Parásito) es una aclamada película surcoreana dirigida por Bong Joon-ho. La historia sigue a la familia Kim, que vive en la pobreza, mientras se infiltran gradualmente en la vida de los ricos Park, trabajando en sus hogares bajo falsas identidades. A medida que las tensiones entre las dos familias aumentan, la película aborda temas de desigualdad social, clases sociales y la lucha por sobrevivir. Con una narrativa inteligente, giros inesperados y una crítica profunda a las estructuras sociales, Parasite se convirtió en un fenómeno global, ganando varios premios, incluidos cuatro premios Óscar, como Mejor Película.',
      image: 'parasite.jpg',
      thumbnail: 'parasite-thumb.jpg'
    },
         {
      id: 15,
      title: 'Psycho',
      genre: 'Crime',
      releaseDate: '1960-06-16',
      actors: ['Anthony Perkins', 'Janet Leigh','Vera Miles'],
      synopsis: 'Una mujer roba una gran suma de dinero y se refugia en un motel, donde conoce al extraño dueño.',
      review: 'Psycho (Psicosis) es un thriller psicológico dirigido por Alfred Hitchcock, considerado uno de los pilares del cine de suspenso. La película sigue a Marion Crane, quien, después de robar una gran suma de dinero, se refugia en el aislado motel Bates, donde conoce a Norman Bates, el enigmático dueño. A medida que la historia avanza, la tensión se intensifica, revelando giros inesperados y un final inolvidable. Con su atmósfera inquietante, la famosa escena de la ducha y la actuación de Anthony Perkins como Norman Bates, Psycho ha dejado una huella indeleble en el género de terror y suspense.',
      image: 'psycho.jpg',
      thumbnail: 'psycho-thumb.jpgg'
    },
         {
      id: 2,
      title: 'The Godfather',
      genre: 'Crime',
      releaseDate: '1972-03-24',
      actors: ['Marlon Brando', 'Al Pacino','James Caan'],
      synopsis: 'Un patriarca envejecido transfiere el control de su imperio a su hijo.',
      review: 'El Padrino es una obra maestra del cine dirigida por Francis Ford Coppola. Narra la historia de la poderosa familia criminal Corleone, centrándose en el ascenso de Michael Corleone, quien hereda el legado de su padre a pesar de sus reservas iniciales. Con actuaciones icónicas, una narrativa envolvente y temas como la lealtad, el poder y la familia, sigue siendo una de las películas más influyentes de la historia.',
      image: 'godfather.jpg',
      thumbnail: 'godfather-thumb.jpg'
    },
             {
      id: 25,
      title: 'Grave of the Fireflies',
      genre: 'Drama',
      releaseDate: '1988-04-16',
      actors: ['Tsutomu Tatsumi', 'Ayano Shiraishi','Akemi Yamaguchi'],
      synopsis: 'Dos hermanos luchan por sobrevivir durante los últimos días de la Segunda Guerra Mundial en Japón.',
      review: 'Grave of the Fireflies (La tumba de las luciérnagas) es un desgarrador Drama de animación dirigido por Isao Takahata, que sigue a dos hermanos, Seita y Setsuko, en su lucha por sobrevivir durante los últimos días de la Segunda Guerra Mundial en Japón. Tras la destrucción de su hogar por un bombardeo, los niños intentan encontrar refugio y comida mientras enfrentan las duras realidades de la guerra y la pérdida. Con una animación hermosa pero trágica, Grave of the Fireflies es una poderosa reflexión sobre el sufrimiento, la inocencia y la brutalidad del conflicto bélico, dejando una huella emocional profunda en el espectador.',
      image: 'grave_of_the_fireflies.jpg',
      thumbnail: 'grave_of_the_fireflies-thumb.jpg'
    },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  searchMovies(query: string): Movie[] {
    return this.movies.filter(m =>
      m.title.toLowerCase().includes(query.toLowerCase()) ||
      m.genre.toLowerCase().includes(query.toLowerCase())
    );
  }
}
