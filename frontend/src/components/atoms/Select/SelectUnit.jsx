import PropType from 'prop-types'
import Select from 'react-select'

function SelectUnit({
  options,
  handleOnChange,
  className,
  components,
  placeholder,
  value,
  containerValue,
  customStyles,
}) {
  return (
    <Select
      options={options}
      onChange={handleOnChange}
      isMulti={false}
      styles={customStyles}
      components={components}
      placeholder={placeholder}
      value={value}
      containerValue={containerValue}
      autoFocus
      isClearable
      isDisabled={false}
      isLoading={false}
      isRtl={false}
      isSearchable
      isOptionSelected
      onSelectResetsInput={false}
      className={`header-select ${className}`}
    />
  )
}

SelectUnit.propTypes = {
  options: PropType.object,
  handleOnChange: PropType.func,
  className: PropType.string,
  components: PropType.node,
  placeholder: PropType.string,
  value: PropType.string,
  containerValue: PropType.string,
  customStyles: PropType.object,
}

export default SelectUnit
