# Sistema de Autômatos de Pilha Determinísticos

## Visão Geral

O sistema de Autômatos de Pilha Determinísticos permite aos usuários criar, editar e validar autômatos de pilha. A interface é composta por uma página inicial, uma página de edição interna, e diversas funções para validação e geração de autômatos formais.

## Página Inicial

### Descrição

A página inicial serve como ponto de entrada do sistema, onde são listados todos os autômatos de pilha criados pelo usuário. A partir desta página, é possível adicionar um novo autômato ou editar/remover os existentes.

### Componentes

- **Botão "Adicionar Novo"**: Permite criar um novo autômato.
- **Lista de Autômatos**: Exibe os autômatos criados, com opções para editar (ícone de lápis) ou remover (ícone de lixeira).

### Imagem

![Página Inicial](path/to/your/image1.png)

## Página Interna

### Descrição

A página interna permite a edição dos detalhes de um autômato específico. Aqui, o usuário pode adicionar estados, entradas, valores de pilha e definir transições.

### Componentes

- **Adicionar Estado**: Campo para inserir novos estados no autômato.
- **Adicionar Entrada**: Campo para adicionar novas entradas.
- **Adicionar Valor de Pilha**: Campo para adicionar novos valores de pilha.
- **Adicionar Novo Valor de Pilha**: Campo para definir transições entre valores de pilha.
- **Campos de Detalhes**: À direita, diversos campos para inserir nome, transições e símbolos do autômato.
- **Botões**: "Salvar", "Validar", "Gerar AP Formal", "Voltar".

### Imagem

![Página Interna](path/to/your/image2.png)

## Validação

### Descrição

Após inserir os detalhes de um autômato, o usuário pode validá-lo. Se o autômato estiver correto, uma mensagem de sucesso é exibida, juntamente com os passos da solução.

### Componentes

- **Mensagem de Sucesso**: "Faz parte da linguagem! Confira os passos da solução: (detalhes da solução)".

### Imagem

![Validação](path/to/your/image3.png)

## Geração de Autômato Formal

### Descrição

A partir da página interna, o usuário pode gerar a representação formal do autômato de pilha. Esta função converte os detalhes inseridos em uma forma matemática rigorosa.

### Componentes

- **Botão "Gerar AP Formal"**: Gera a representação formal do autômato.

---

Esta é uma estrutura básica para a documentação do seu sistema. Para finalizar, seria interessante adicionar mais detalhes como exemplos de uso, explicações detalhadas das transições e talvez um glossário de termos.
