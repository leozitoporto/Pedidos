# Build e execução do projeto

- Para executar, descompactar os arquivos em uma pasta e executar na raíz da
  mesma o comando "npm install" isso vai baixar as dependências do projeto. Após
  esse procedimento executar o script chamado "npm run dev" onde
  foi utiliza a biblioteca tsx para converter o código para .js e executar de
  forma automática.
- Para criar o Build do projeto foi criado um script chamado "npm run build",
  esse irá criar uma pasta na raiz chamada "build" que irá conter os arquivos
  .cjs para execução. Após executar o script, "node build/server.cjs" para rodar
  a aplicação.

# Testes da aplicação

- Foi utilizado o Jest para testes.
- Rodar o script "npm run test"
- Para testes na aplicação deve ser copiado para a pasta "./archives/file.json"
  a entrada de dado requerida.

# Bibliotecas/Frameworks utilizadas

- npm init -y => Utilizado para cria o arquivo package.json, que contem nome,
  versão, scripts, armazena informações como as dependências de terceiros quer
  viermos a utilizar no projeto, assim como outras varias outras informações.

- npm install -D typescript => Utilizado para adicionar o typescript ao projeto

- npm instal -D @types/node => Utilizado para adicionar o pacote de tipagem como
  dependência de desenvolvimento ao projeto.

- npx tsc --init => Utilizado para cria o arquivo tsconfig.json.

- npm install tsx -D => Utilizado para converte o código para js executa de
  forma automática, em modo desenvolvimento.

- npm install tsup -D => Utilizado para criar a versão de build da aplicação.

- npm install eslint @rocketseat/eslint-config -D => Utilizado para manter um
  padrão de escrita no código do projeto

- npm install -D jest => Utilizado para realizar os testes no projeto

- npm instal -D @types/jest => Utilizado para adicionar a tipagem do jest
