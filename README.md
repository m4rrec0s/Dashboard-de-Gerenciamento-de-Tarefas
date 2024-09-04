# Desafio Técnico: Dashboard de Gerenciamento de Tarefas

## Objetivo do Projeto

O objetivo deste projeto é avaliar suas habilidades em desenvolvimento frontend utilizando Next.js, TypeScript, RTK Query, e Styled Components. Você deverá criar um dashboard de gerenciamento de tarefas que permita visualizar, criar, atualizar e deletar tarefas, além de exibir gráficos de produtividade.

## Requisitos do Projeto

### Funcionalidades Básicas

1. **Dashboard de Tarefas**:

   - Crie uma interface que mostre uma lista de tarefas com as seguintes informações:
     - Título da tarefa
     - Descrição
     - Status (Pendente, Em progresso, Concluída)
     - Data de criação
     - Data de conclusão (se aplicável)
   - Permita que o usuário adicione, edite e delete tarefas.

2. **Filtro e Ordenação**:

   - Implemente filtros por status das tarefas.
   - Permita ordenar as tarefas por data de criação ou data de conclusão.

3. **Gráfico de Produtividade**:

   - Exiba um gráfico que mostre o número de tarefas concluídas por dia, semana ou mês.
   - Utilize uma biblioteca como `recharts` ou `chart.js` para criar os gráficos.

4. **Design Responsivo**:
   - A interface deve ser responsiva e funcionar bem em dispositivos móveis e desktops.
   - Utilize **Styled Components** para a estilização da aplicação.

### Requisitos Técnicos

1. **Next.js e TypeScript**:

   - A aplicação deve ser desenvolvida utilizando **Next.js** e **TypeScript**.
   - Siga as boas práticas de tipagem no TypeScript.

2. **Styled Components**:

   - Utilize **Styled Components** para criar componentes estilizados e temáticos.
   - Crie um tema global para a aplicação, com suporte a dark mode (opcional).

3. **Testes Automatizados** (opcional):

   - Implemente testes unitários e de integração utilizando **Jest** e **Testing Library**.
   - Teste os componentes principais, as chamadas de API e a lógica de estado.

4. **Documentação**:
   - Documente o processo de instalação, configuração e uso da aplicação no README.md.

### Requisitos Opcionais (Diferenciais)

1. **Autenticação/Autorização**:
   - Proteja as rotas sensíveis e exiba o nome do usuário logado no dashboard.

## Critérios de Avaliação

1. **Clareza e Organização do Código**:

   - O código deve ser limpo, modular e seguir as boas práticas de desenvolvimento.

2. **Conhecimento em Next.js e TypeScript**:

   - A tipagem correta e abrangente no TypeScript será considerada.

3. **Design e Usabilidade**:

   - A interface deve ser intuitiva, atraente e funcional, com uma boa experiência de usuário em diferentes dispositivos.

4. **Testes** (Opcional):

   - A qualidade e cobertura dos testes automatizados serão analisadas.

5. **Documentação**:
   - A documentação deve ser clara e permitir que outro desenvolvedor configure e execute o projeto sem dificuldades.
