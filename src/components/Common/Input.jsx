/*function Input({

    name,
    type = "text",
    placeholder,
    formData,
    setFormData,
    min,
    max,
    minLength,
    maxLength,
    required = true


}) {


    return (
        <input
            type={type}
            placeholder={placeholder}
            value={formData[name] || ''}
            min={min}
            max={max}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    [name]: e.target.value
                })}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
        />
    )
}setFormData,


export default Input;
/////////////////

function Input({
    name,
    type = "text",
    placeholder,
    formData,
    setFormData,
    handleChange,
    min,
    max,
    minLength,
    maxLength,
    required = true
}) {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={formData[name] || ""}
            min={min}
            max={max}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
            onChange={handleChange}
        />
    );
}

export default Input;*/
function Input({
    name,
    type = "text",
    placeholder,
    formData,
    setFormData,
    handleChange,
    min,
    max,
    minLength,
    maxLength,
    required = true
}) {
    const handleInputChange = handleChange ?? ((e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    });

    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={formData[name] || ""}
            min={min}
            max={max}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
            onChange={handleInputChange}
        />
    );
}

export default Input;