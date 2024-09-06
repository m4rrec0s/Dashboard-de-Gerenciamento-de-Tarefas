# Gerenciamento de Tarefas

Este é um projeto completo de gerenciamento de tarefas, que permite aos usuários adicionar, editar, excluir e visualizar tarefas de forma organizada. Além disso, o projeto inclui gráficos dinâmicos que exibem o progresso das tarefas ao longo do tempo, além de um sistema de alternância de temas e autenticação de usuário.

![Apresentação do Projeto](./public/movie/presents.gif)

## Funcionalidades

- **Gerenciamento de Tarefas:** Adicione, edite e exclua tarefas facilmente.
- **Filtragem e Pesquisa:** Filtre e pesquise suas tarefas de forma eficiente.
- **Visualização com Gráficos:** Visualize o progresso de suas tarefas em gráficos de linha, barra e rosca.
- **Temas Claro/Escuro:** Alterne entre temas claro e escuro para melhorar a experiência de visualização.
- **Autenticação de Usuário:** Autenticação simples onde o usuário insere um nome e email para acessar a aplicação.

## Tecnologias Utilizadas

- **Next.js:** Framework React para renderização no lado do servidor e otimização de desempenho.
- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript:** Suporte a tipagem estática para maior confiabilidade e manutenibilidade do código.
- **Chart.js:** Biblioteca de gráficos para exibir dados dinâmicos.
- **Styled Components:** Solução para aplicar estilos com escopo baseado em componentes.
- **Lucide-react:** Ícones minimalistas usados na interface.
- **next-themes:** Gerenciamento de temas para alternância entre os modos claro e escuro.

## Pré-requisitos

- **Node.js:** Versão 14 ou superior.
- **npm** ou **yarn:** Gerenciadores de pacotes.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/m4rrec0s/Dashboard-de-Gerenciamento-de-Tarefas.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd Dashboard-de-Gerenciamento-de-Tarefas
   ```

3. Instale as dependências necessárias:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

## Executando o Projeto

1. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   ou

   ```bash
   yarn dev
   ```

2. Abra o navegador e acesse `http://localhost:3000`.

## Estrutura do Projeto

- **`_components/`:** Contém os componentes reutilizáveis como gráficos, menus, modais e outros elementos da interface.
- **`_context/`:** Implementação do contexto de autenticação e gerenciamento de estado global.
- **`_lib/`:** Contém a configuração e funções auxiliares do projeto, como integração com Styled Components.
- **`data/`:** Armazena dados mockados usados nas páginas de tarefas e gráficos.
- **`styles/`:** Arquivos de estilos globais e variáveis de temas.
- **`pages/`:** Páginas principais da aplicação, gerenciadas pelo Next.js.

## Autenticação

O sistema de autenticação é baseado no contexto de autenticação localizado no arquivo [`_context/auth-context.tsx`]. O usuário precisa inserir um nome e um email para acessar o aplicativo. Esta autenticação é simples e simula um fluxo de login para propósitos de desenvolvimento.

## Temas

O projeto suporta alternância de temas entre claro e escuro, utilizando `next-themes` e `Styled Components` para gerenciar estilos dinâmicos. Os usuários podem alterar o tema clicando no ícone de sol/lua, localizado no cabeçalho da aplicação.

## Gráficos

Os gráficos são renderizados com a biblioteca `react-chartjs-2` e `Chart.js`, permitindo uma visualização intuitiva do progresso das tarefas ao longo do tempo:

- **Gráfico de Linha:** Exibe tarefas completadas por dia ([`LineChart.tsx`]).
- **Gráfico de Barra:** Mostra tarefas completadas por semana ([`BarChart.tsx`]).
- **Gráfico de Rosca:** Exibe o total de tarefas completadas por mês ([`DoughnutChart.tsx`]).

Esses gráficos estão na página de estatísticas, acessível a partir do menu principal.