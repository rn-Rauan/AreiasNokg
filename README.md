# Simulador de Fluxo de Refeitório (SFR)

## 📌 Visão Geral
O **Simulador de Fluxo de Refeitório (SFR)** é um sistema que modela o fluxo de alunos em um refeitório universitário. O objetivo é permitir a configuração de parâmetros operacionais e a análise estatística dos resultados, auxiliando na identificação de gargalos, eficiência e tempo médio de atendimento.

## 🎯 Objetivo
Criar uma simulação detalhada do funcionamento de um refeitório, incluindo:
- Entrada e controle de fluxo de alunos.
- Tempo de permanência nas filas e mesas.
- Atendimento dos funcionários.
- Visualização dos resultados através de tabelas e gráficos.

## 🏗️ Arquitetura e Tecnologias Utilizadas
O projeto segue uma arquitetura em camadas e utiliza as seguintes tecnologias:

| Categoria | Tecnologia |
|-----------|----------------|
| **Linguagem** | TypeScript |
| **Framework Frontend** | React |
| **Estilização** | Tailwind CSS |
| **Servidor de Desenvolvimento** | Vite |
| **Gráficos** | Recharts |
| **Armazenamento** | localStorage |

## 📂 Estrutura do Projeto
```
📁 simulador-fluxo-refeitorio-ifpi
 ├── 📁 src
 │   ├── 📁 adapter
 │   ├── 📁 domain
 │   ├── 📁 view
 │   ├── App.tsx
 │   ├── index.tsx
 │   └── main.tsx
 ├── package.json
 ├── README.md
 ├── tsconfig.json
 └── vite.config.ts
```

## 🛠️ Requisitos Funcionais
- Criar, editar, listar e excluir simulações.
- Configurar parâmetros como limite de filas, tempo médio de atendimento, etc.
- Executar a simulação com base em eventos discretos.
- Exibir os resultados da simulação através de tabelas e gráficos.

## 🔐 Requisitos Não Funcionais
- Interface intuitiva e responsiva.
- Tempo de resposta inferior a 2 segundos.
- Persistência de dados no **localStorage** e possibilidade de armazenamento em nuvem.
- Controle de acesso por login e senha (opcional).

## ⚡ Processo de Desenvolvimento
Utilizamos **Scrum** como metodologia ágil, seguindo ciclos de **sprints** de 2 semanas:

| Sprint | Período | Atividades |
|--------|---------|------------|
| Sprint 1 | 29/jan – 11/fev | Definição de requisitos, setup do ambiente, primeiros protótipos |
| Sprint 2 | 12/fev – 25/fev | Implementação avançada, testes e refinamento |

## 🧪 Ferramentas de Apoio
- **Git/GitHub** para controle de versão.
- **Trello/Jira** para gestão de tarefas.
- **Jest/Cypress** para testes automatizados.
- **SonarQube** para análise da qualidade do código.
- **Slack/Teams** para comunicação.

## 🚀 Como Executar o Projeto
1. Clone este repositório:
   ```sh
   git clone https://github.com/rn-Rauan/AreiasNokg
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd simulador-fluxo-refeitorio-ifpi
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

## 📜 Licença
Este projeto está licenciado sob a **MIT License**.