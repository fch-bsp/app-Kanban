# 📋 Kanban Board

Aplicação Kanban simples com Node.js e Docker.

## 🚀 Como usar com Docker

### 1. Build da imagem
```bash
docker build -t kanban-app .
```

### 2. Rodar container
```bash
docker run -d -p 3000:3000 --name kanban kanban-app
```

### 3. Acessar aplicação
Abra no navegador: **http://localhost:3000**

## 🛠️ Comandos úteis

### Ver logs
```bash
docker logs kanban
```

### Parar aplicação
```bash
docker stop kanban
```

### Remover container
```bash
docker rm kanban
```

### Limpar tudo
```bash
docker stop kanban && docker rm kanban
```

## ✨ Funcionalidades

- ✅ 3 colunas: A Fazer, Fazendo, Concluído
- ✅ Adicionar novas tarefas
- ✅ Mover tarefas entre colunas (clique na tarefa)
- ✅ Interface responsiva
- ✅ API REST integrada