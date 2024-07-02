interface Props {
  onclick: () => void;
  active: boolean;
}

const ButtonSlide = ({ onclick, active }: Props) => {
  return (
    <button
      onClick={onclick}
      className={`flex justify-center items-center text-xs bg-zinc-400 text-zinc-100 size-3 rounded-full hover:scale-125 duration-200 ${
        active ? "bg-slate-950" : "bg-zinc-400"
      }`}
    >
      {" "}
    </button>
  );
};

export default ButtonSlide;
