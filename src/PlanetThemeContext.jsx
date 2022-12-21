import React from "react";
const PlanetTheme = React.createContext()

function PlanetThemeContextProvider(props){
    // default mars for now
    const [planet, setPlanet] = React.useState({selected: "mars", first: "marsOne", second: "marsTwo", cta: "marsCta", image: "mars", border: "marsBorder"})

    function togglePlanet(name){
        setPlanet(prevState => ({
            ...prevState,
            selected: [`${name}`],
            first: [`${name}One`],
            second: [`${name}Two`],
            cta: [`${name}Cta`],
            border: [`${name}Border`]
        }))

    }

    return (
        <PlanetTheme.Provider value={{planet, togglePlanet}}>
            {props.children}
        </PlanetTheme.Provider>
    )
}

export {PlanetThemeContextProvider, PlanetTheme}