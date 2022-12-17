const ToggleComponent = () => {
    
    return (
        <div>
            <lable>color
                <input type="text" onChange={changeColorHandeler} />
            </lable>
            <button>Change</button>
        </div>
    )
}
export default ToggleComponent;