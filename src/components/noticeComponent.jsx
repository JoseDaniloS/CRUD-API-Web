import Delete from "/delete.png";
import Editar from "/editar.png";
import Salvar from "/salvar.png";

import { useState } from "react";

import { deleteNewsbyTitle } from "../API/APIFunctions";
import { editNewsbyTitle } from "../API/APIFunctions";

import InputNoticeComponent from "./inputNoticeComponent";
import { toast } from "react-toastify";

function NoticeComponent({ item }) {
  
  
  const [itemEdit, setItemEdit] = useState(item);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemEdit({ ...itemEdit, [name]: value });
  };

  const saveEdit = async () => {
    //Verifica se o campo de descrição foi alterado
    if (
      itemEdit.description === item.description || !itemEdit.description) {
      toast.error("Campo de descrição não pode ser vazio ou igual ao anterior");
      return;
    }

    //Verifica se o campo de conteudo foi alterado
    if (itemEdit.content === item.content || !itemEdit.content) {
      toast.error("Campo de conteudo não pode ser vazio ou igual ao anterior");
      return;
    }

    await editNewsbyTitle(
      itemEdit.title,
      itemEdit.description,
      itemEdit.content
    );
  };

  const [edit, setEdit] = useState(false);
  return (
    <div className="flex items-center justify-between w-full p-5 bg-white rounded-md shadow-xl ">
      <div>
        <h2>
          <b>Titulo:</b> {itemEdit.title}
        </h2>
        <p>
          <b>Descrição: </b>
          {edit ? (
            <InputNoticeComponent
              name={"description"}
              value={itemEdit.description}
              func={handleChange}
            />
          ) : (
            <>{itemEdit.description}</>
          )}
        </p>
        <span>
          <b>Conteudo: </b>
          {edit ? (
            <InputNoticeComponent
              name={"content"}
              value={itemEdit.content}
              func={handleChange}
            />
          ) : (
            <> {itemEdit.content}</>
          )}
        </span>
      </div>
      <div className="flex gap-5">
        {edit && (
          <img
            className="w-[30px] cursor-pointer"
            src={Salvar}
            alt=""
            onClick={() => {
              setEdit(false), saveEdit();
            }}
          />
        )}
        <img
          className="w-[30px] cursor-pointer"
          src={Editar}
          onClick={() => setEdit(true)}
          alt="Editar"
        />
        <img
          className="w-[30px] cursor-pointer"
          src={Delete}
          onClick={async () => {
            await deleteNewsbyTitle(item.title);
          }}
          alt="Delete"
        />
      </div>
    </div>
  );
}

export default NoticeComponent;
