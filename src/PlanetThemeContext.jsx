import React from "react";
const PlanetTheme = React.createContext()

function PlanetThemeContextProvider(props){
    // default mars for now
    const [planet, setPlanet] = React.useState({first: "marsOne", second: "marsTwo", cta: "marsCta"})

    function toggleMercury(){
        setPlanet(prevState => ({
            ...prevState,
            first: "mercuryOne",
            second: "mercuryTwo",
            cta: "mercuryCta"
        }))
    }

    function toggleVenus(){
        setPlanet(prevState => ({
            ...prevState,
            first: "venusOne",
            second: "venusTwo",
            cta: "venusCta"
        }))
    }

    function toggleMars(){
        setPlanet(prevState => ({
            ...prevState,
            first: "marsOne",
            second: "marsTwo",
            cta: "marsCta"
        }))
    }

    function toggleJupiter(){
        setPlanet(prevState => ({
            ...prevState,
            first: "jupiterOne",
            second: "jupiterTwo",
            cta: "jupiterCta"
        }))
    }

    function toggleSaturn(){
        setPlanet(prevState => ({
            ...prevState,
            first: "saturnOne",
            second: "saturnTwo",
            cta: "saturnCta"
        }))
    }

    function toggleUranus(){
        setPlanet(prevState => ({
            ...prevState,
            first: "uranusOne",
            second: "uranusTwo",
            cta: "uranusCta"
        }))
    }

    function toggleNeptune(){
        setPlanet(prevState => ({
            ...prevState,
            first: "neptuneOne",
            second: "neptuneTwo",
            cta: "neptuneCta"
        }))
    }

    return (
        <PlanetTheme.Provider value={{planet, toggleMercury, toggleVenus, toggleMars, toggleJupiter, toggleSaturn, toggleUranus, toggleNeptune}}>
            {props.children}
        </PlanetTheme.Provider>
    )
}

export {PlanetThemeContextProvider, PlanetTheme}