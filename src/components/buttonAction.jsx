function ButtonAction({ func, color, text }) {
  return (
    <button
      className="p-3 text-white font-bold w-full rounded-[5px] shadow-lg"
      style={{ backgroundColor: color }}
      onClick={func}
    >
      {text}
    </button>
  );
}

export default ButtonAction;
