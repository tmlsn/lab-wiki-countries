import { Link } from "react-router-dom"


export function CountriesList(countries) {;
    console.log(countries)
    console.log(typeof countries)
   
    return ( 
        <div>
        {countries.map((country) => {

            return (
                <div>
                    <div>
                        <image src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`} alt="flag"/>
                        <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                    </div>
                </div>
            )
        })}
        </div>
    )
}