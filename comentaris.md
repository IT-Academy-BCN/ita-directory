# Escenari ideal

Només carregar-se la pantalla Ad fa un fetch a la base de dades i agafa tot l'objecte "data" de l'anunci amb el primer id que existeixi (es poden ordenar els id i agafar el més petit).

Un cop s'hagi agafat aquesta informació caldrà "displayejar-la".

Primer de tot cal identificar quina informació utilitzarà cada component.

{"message":"Ad fetched correctly.",
"data":
{"id":1,
"user_id":1,
"title":"ad1",
"description":"ad house 1",
"city":"Barcelona",
"n_rooms":2,
"price":900,
"square_meters":80,
"n_bathrooms":1,
"map_lat":"41.385063",
"map_lon":"2.173404",
"image_url":"path" => No sé fins a quin punt estaria bé incloure assignar una imatge a l'objecte json. D'aquesta manera tota la informació estaria assignada a un id d'anunci.
}
}

- Gallery:

- Map:

- IconWithLabel:

Per últim, enlloc de fer un map de l'objecte hardcodejat es podria fer algo com el següent:

return (
<StyledItems>
<IconWithLabel
        icon={faMapMarkerAlt}
        text={ad.city}
    />
<IconWithLabel
        icon={faBed}
        text={ad.n_rooms}
    />
=> El mateix per a cada característica de l'habitatge
</StyledItems>
);

Creariem un useState que s'anomenaria adId, on quedaria emmagatzemat l'id de l'anunci actual
