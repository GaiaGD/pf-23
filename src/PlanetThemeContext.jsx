import React from "react";
const PlanetTheme = React.createContext()

function PlanetThemeContextProvider(props){
    // default mars for now
    const [planet, setPlanet] = React.useState({selected: "mars", first: "marsOne", second: "marsTwo", cta: "marsCta", border: "marsBorder"})
    const [tempGravity, setTempGravity] = React.useState({gravity: 3.71, temperature: 45})

    function togglePlanet(name){

        fetch(`https://api.le-systeme-solaire.net/rest/bodies/${name}`)
        .then((response) => response.json())
        .then((data) => {
            setTempGravity(prevState => ({
                ...prevState,
                gravity: data.gravity,
                temperature: data.avgTemp
            }))

            setPlanet(prevState => ({
                ...prevState,
                selected: [`${name}`],
                first: [`${name}One`],
                second: [`${name}Two`],
                cta: [`${name}Cta`],
                border: [`${name}Border`]
            }))
        })

        // setPlanet(prevState => ({
        //     ...prevState,
        //     selected: [`${name}`],
        //     first: [`${name}One`],
        //     second: [`${name}Two`],
        //     cta: [`${name}Cta`],
        //     border: [`${name}Border`]
        // }))

    }

    return (
        <PlanetTheme.Provider value={{planet, tempGravity, togglePlanet}}>
            {props.children}
        </PlanetTheme.Provider>
    )
}

export {PlanetThemeContextProvider, PlanetTheme}