# News CRUD Frontend

Este repositório contém a interface web para consumir a API de CRUD de notícias. O projeto foi desenvolvido utilizando **React**, **Tailwind CSS**, **Axios**, **React-Toastify** e **dotenv** para gerenciamento de variáveis de ambiente, consumo de API e feedback visual.

## Tecnologias Utilizadas

- **React** - Biblioteca para construção da interface.
- **Tailwind CSS** - Framework CSS utilitário para estilização rápida.
- **Axios** - Cliente HTTP para requisições à API.
- **React-Toastify** - Biblioteca para exibir notificações amigáveis.
- **dotenv** - Gerenciamento de variáveis de ambiente

## Instalação e Configuração

1. Clone este repositório:
   ```sh
   git clone https://github.com/JoseDaniloS/CRUD-API-Web
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd CRUD-API-Web
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Configure a URL da API no arquivo **.env**:
   ```env
   API_URL=http://localhost:3000/api/news
   ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, utilize:
```sh
npm run dev
```
O projeto será executado em `http://localhost:5173` (ou na porta definida pelo Vite).

## Funcionalidades

- Listagem de notícias.
- Criação de novas notícias.
- Atualização de notícias existentes.
- Exclusão de notícias individuais ou em massa.
- Notificações amigáveis ao usuário (React-Toastify).

## Estrutura do Projeto

```
news-crud-frontend/
├── src/
│   ├── components/  # Componentes reutilizáveis
│   ├── services/     # Configuração do Axios para consumo da API
│   ├── App.jsx       # Componente raiz do projeto
│   ├── main.jsx      # Arquivo de entrada
├── public/           # Arquivos estáticos
├── .env              # Configuração de variáveis de ambiente
├── package.json      # Dependências do projeto
```

## Contribuição

Sinta-se à vontade para contribuir! Para sugerir melhorias:
1. Fork o repositório.
2. Crie uma branch (`git checkout -b minha-feature`).
3. Commit suas alterações (`git commit -m 'Minha nova feature'`).
4. Envie um push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT.

