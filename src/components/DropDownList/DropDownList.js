import './DropDownList.css'

export const DropDownList = (props) => {
    return(
        <div className="drop-down-list">
            <label>
                {props.label}
            </label>
            <select onChange={event => props.whenChanged(event.target.value)} required={props.mandatory} value={props.value}>
                <option value=''></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}