import "./TextBox.css"

export const TextBox = (props) => {

    const placeholderChanged = `${props.placeholder}...`

    const whenTyped = (event) => {
        props.whenChanged(event.target.value)
    }

    // a way to concatenate the variables that come from props with any string
    //const placeholderWithTxt = `${props.placeholder}...`

    return (
        <div className="text-box">
            <label>
                {props.label}
            </label>
            <input value={props.value}  onChange={whenTyped} required={props.mandatory} placeholder={placeholderChanged}/>
        </div>
    )
}