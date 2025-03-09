import { getAllNews, deleteAllNews, createNews } from "./API/APIFunctions";

import { useEffect, useState } from "react";

import NoticeComponent from "./components/noticeComponent";
import EmptyNotice from "./components/emptyNotice";
import ButtonAction from "./components/buttonAction";
import InputText from "./components/InputText";

function App() {
  const [news, setNews] = useState([]);

  const handleCreateNews = async () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const content = document.getElementById("content").value;

    await createNews(title, description, content);
    listAllNews();
  };

  //Função para listar todas as noticias
  const listAllNews = async () => {
    const noticia = await getAllNews();
    setNews(noticia.news);
  };

  useEffect(() => {
    listAllNews();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-5 bg-slate-300">
      <h1 className="text-[30px] font-bold">
        CRUD: Create, Read, Update, Delete
      </h1>

      <div className="flex flex-col gap-5 w-[90%] h-[90%] bg-stone-300 rounded-[10px] shadow-lg p-5">
        <div className="flex w-full gap-5 max-2xl:flex-wrap">
          {/* Formulario de cadastro de noticias */}
          <form
            action=""
            className="flex flex-col w-full bg-slate-700 text-[17px] rounded-[5px] shadow-lg p-5 gap-5"
          >
            <InputText name={"title"} placeholder={"Title"} />
            <InputText name={"description"} placeholder={"Description"} />
            <InputText name={"content"} placeholder={"Content"} />
          </form>
          {/* Botões de ação */}
          <div className="flex flex-col justify-between w-full gap-5">
            <ButtonAction func={listAllNews} color={"blue"} text={"Refresh"} />
            <ButtonAction
              func={deleteAllNews}
              color={"red"}
              text={"Delete All News"}
            />
            <ButtonAction
              func={handleCreateNews}
              color={"green"}
              text={"Add News"}
            />
          </div>
        </div>

        {/* Lista de noticias */}
        <div className="flex flex-wrap gap-3">
          {news.length > 0
            ? news.map((item, index) =>
                <NoticeComponent key={index} item={item} />
              )
            : <EmptyNotice />}
        </div>
      </div>
    </div>
  );
}

export default App;
