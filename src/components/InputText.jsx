function InputText({name, placeholder}) {
    return (
        <input
            className="p-3 rounded-[5px] placeholder:text-black shadow-lg bg-stone-300 border-2 focus:outline-none"
            type="text"
            name={name}
            id={name}
            placeholder={placeholder}
          />
    )
}

export default InputText;