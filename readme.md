
# Documentação do Sistema de Autômatos de Pilha Determinísticos

## Página Inicial

**Descrição:**
A página inicial do sistema exibe uma lista de autômatos de pilha determinísticos cadastrados. Cada item da lista tem opções para editar ou excluir o autômato.

**Elementos da Página:**
- **Título:** "AUTÔMATOS DE PILHA DETERMINÍSTICOS"
- **Botão Adicionar Novo:** Um botão verde que permite adicionar um novo autômato à lista.
- **Lista de Autômatos:**
  - Cada autômato é exibido com seu nome.
  - Botão Editar (ícone de lápis) para editar o autômato.
  - Botão Excluir (ícone de lixeira) para remover o autômato.

**Fluxo de Usuário:**
1. **Adicionar Novo Autômato:**
   - Clique no botão "Adicionar Novo".
   - O usuário será redirecionado para a página de criação/edição de autômatos.
2. **Editar Autômato:**
   - Clique no ícone de lápis ao lado do autômato que deseja editar.
   - O usuário será redirecionado para a página de edição do autômato selecionado.
3. **Excluir Autômato:**
   - Clique no ícone de lixeira ao lado do autômato que deseja excluir.
   - O autômato será removido da lista.

## Página Interna

**Descrição:**
A página interna permite a configuração dos estados e transições do autômato de pilha determinístico.

**Elementos da Página:**
- **Título:** "AUTÔMATOS DE PILHA DETERMINÍSTICOS"
- **Seção Estados:**
  - Botão Adicionar Estado: Permite adicionar um novo estado.
  - Campos para configuração de estados, entradas e valores de pilha.
  - Botões para adicionar entradas e valores de pilha para cada estado.
  - Botões para remover estados, entradas e valores de pilha.
- **Seção de Configuração do Autômato:**
  - Campo para o nome do autômato.
  - Campo para a entrada a ser validada.
  - Campo para o estado inicial.
  - Campo para o estado final.
  - Campo para o valor inicial da pilha.
- **Botões de Ação:**
  - Botão Salvar: Salva a configuração do autômato.
  - Botão Validar: Valida a entrada com base no autômato configurado.
  - Botão Voltar: Retorna à página inicial.

**Fluxo de Usuário:**
1. **Adicionar Estado:**
   - Clique no botão "Adicionar Estado".
   - Preencha o campo do estado com o nome do estado.
2. **Adicionar Entrada:**
   - Preencha o campo de entrada com o símbolo de entrada.
   - Clique no botão "Adicionar Entrada".
3. **Adicionar Valor de Pilha:**
   - Preencha o campo de valor de pilha com o símbolo de pilha.
   - Clique no botão "Adicionar Valor de Pilha".
4. **Configurar Autômato:**
   - Preencha os campos de configuração com os valores apropriados.
5. **Salvar Configuração:**
   - Clique no botão "Salvar" para salvar a configuração do autômato.
6. **Validar Entrada:**
   - Clique no botão "Validar" para verificar se a entrada faz parte da linguagem do autômato.
7. **Voltar à Página Inicial:**
   - Clique no botão "Voltar" para retornar à página inicial.

## Validação

**Descrição:**
A tela de validação exibe o resultado da verificação da entrada, indicando se ela faz parte da linguagem do autômato.

**Elementos da Página:**
- **Mensagem de Validação:**
  - Exibe uma mensagem indicando se a entrada faz ou não parte da linguagem do autômato.
  - Exibe os passos de transição que levaram ao resultado.
