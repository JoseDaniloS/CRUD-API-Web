function InputNoticeComponent({name, value , func}){
    return(
        <input name={name} className="px-2 rounded-md border-slate-400 bg-slate-200" type="text" value={value} onChange={func}/>
    )
}

export default InputNoticeComponent;