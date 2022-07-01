import './DropDownList.css'

export const DropDownList = (props) => {
    return(
        <div className="drop-down-list">
            <label>
                {props.label}
            </label>
            <select required={props.mandatory & props.itens !== ''}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}