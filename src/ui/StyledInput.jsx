import PropTypes from "prop-types";


export default function StyledInput({
  state,
  setState, 
  type = "text", 
  placeholder = "", 
  name = "",
  disabled = false,
}) {



  return (
    <input 
      type={type} 
      placeholder={placeholder}
      name={name}
      className={`px-1 py-1 outline-none`}
      required 
      value={state}
      onChange={(e) => setState(e.target.value)}
      disabled={disabled}
    />
  )
}


StyledInput.propTypes = {
  state: PropTypes.string,
  setState: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
}