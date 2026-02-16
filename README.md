# Sistema de Controle de Estacionamento

Este é um simples sistema de console (CLI) para gerenciar a entrada de veículos em um estacionamento com capacidade limitada. O programa monitora o número de carros e encerra a operação quando o estacionamento está cheio ou quando o operador indica o fim do expediente.

## 📜 Descrição do Problema

Um operador de estacionamento precisa de um sistema para controlar o número de carros que entram a cada hora. O estacionamento tem uma capacidade máxima de 50 carros. O sistema deve ser encerrado quando a capacidade máxima for atingida ou quando o operador digitar `0`, indicando que não há mais carros entrando.

## ✨ Funcionalidades

- **Capacidade Máxima:** O estacionamento suporta no máximo 50 veículos.
- **Entrada de Dados:** A cada iteração, o programa solicita ao operador o número de carros que entraram na última hora.
- **Status Atual:** Informa a quantidade de veículos presentes no estacionamento antes de cada nova entrada.
- **Validação de Capacidade:** Se o número de carros inserido exceder a capacidade restante, o sistema avisa o operador e solicita uma nova entrada válida, sem adicionar os veículos.
- **Condições de Encerramento:** O programa termina imediatamente se:
  - A capacidade do estacionamento for atingida.
  - O operador inserir o valor `0`.

## 💻 Tecnologias Utilizadas

- **Node.js:** Ambiente de execução para o JavaScript.
- **`prompt-sync`:** Biblioteca para receber entradas do usuário de forma síncrona no terminal.

## 🚀 Como Executar

1.  **Pré-requisitos:**
    - Certifique-se de ter o Node.js instalado em sua máquina.

2.  **Instalação de Dependências:**
    - Abra o terminal na pasta do projeto e execute o comando abaixo para instalar as dependências:
      ```bash
      npm i
      ```

3.  **Execução do Programa:**
    - Após a instalação, execute o script com o seguinte comando:
      ```bash
      node estacionamento.js
      ```

## 📋 Cenários de Uso

### Cenário 1: Estacionamento Atinge a Capacidade Máxima
O operador insere `10`, depois `20` e por fim `20`.

**Saída Final:**
```
Muito obrigado por usar nosso sistema! O estacionamento encheu!
```

### Cenário 2: Operador Encerra o Expediente
O operador insere `10`, depois `13` e por fim `0`.

**Saída Final:**
```
Muito obrigado por usar nosso sistema!
```

### Cenário 3: Tentativa de Exceder a Capacidade
O operador insere `20`, depois `20` e tenta inserir mais `20`.

**Saída na terceira tentativa:**
```
Não é possível estacionar tantos veículos!
```
O programa então aguardará uma nova entrada válida, mantendo os 40 carros já registrados.

## 👤 Autor

Este projeto foi desenvolvido por **Ryan**.

GitHub: cstroDev
