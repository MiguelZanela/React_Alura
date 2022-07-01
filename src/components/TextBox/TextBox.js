import "./TextBox.css"

export const TextBox = (props) => {

    // a way to concatenate the variables that come from props with any string
    //const placeholderWithTxt = `${props.placeholder}...`

    return (
        <div className="text-box">
            <label>
                {props.label}
            </label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}