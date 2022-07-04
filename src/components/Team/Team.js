import './Team.css'

export const Team = (props) => {
    // can be done this way, creating a constant and use in the style without the secondary {}
    // const cssSecondaryColor = { backgroundColor: props.secondaryColor }
    // <section className="team" style={cssSecondaryColor}>

    return(
        <section className="team" style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}> {props.name}</h3>
        </section>
    )
}