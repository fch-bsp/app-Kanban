# 📋 Kanban Board App

Uma aplicação Kanban simples construída com Node.js e HTML/CSS/JavaScript vanilla, otimizada para Kubernetes/EKS.

## 🚀 Funcionalidades

- ✅ Visualização de tarefas em colunas (A Fazer, Fazendo, Concluído)
- ✅ Adicionar novas tarefas via interface web
- ✅ Mover tarefas entre colunas (clique nas tarefas)
- ✅ Interface responsiva e intuitiva
- ✅ API REST completa para gerenciamento de tarefas
- ✅ Integração com Kubernetes/EKS
- ✅ Session affinity para consistência de dados

## 🛠️ Tecnologias

- **Backend**: Node.js + Express
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Containerização**: Docker
- **Orquestração**: Kubernetes/EKS
- **Load Balancer**: AWS NLB + Nginx Ingress

## 🏃‍♂️ Como executar

### Localmente
```bash
npm install
npm start
```
Acesse: `http://localhost:3000`

### Com Docker
```bash
docker build -t kanban-app .
docker run -p 3000:3000 kanban-app
```

### Kubernetes/EKS
```bash
# Aplicar manifests
kubectl apply -f kubernetes/manifests/

# Aplicar ingress (namespace foodme)
kubectl apply -f kubernetes/ingress/
```

## 📡 API Endpoints

- `GET /api/tasks` - Listar todas as tarefas
- `POST /api/tasks` - Criar nova tarefa
  ```json
  {"title": "Nova tarefa"}
  ```
- `PUT /api/tasks/:id` - Atualizar status da tarefa
  ```json
  {"status": "doing"}
  ```

## 🌐 Produção

**URL**: `https://your-domain.com/kanban/`

### Funcionalidades da Interface:
1. **Adicionar Tarefa**: Clique no botão "+ Adicionar Tarefa"
2. **Mover Tarefa**: Clique em qualquer tarefa para movê-la entre colunas
3. **Fluxo**: Todo → Fazendo → Concluído → Todo (ciclo)

## 🏗️ Arquitetura

```
Internet → NLB → Nginx Ingress → Kanban Service → Kanban Pod
```

- **Session Affinity**: Configurado para garantir consistência
- **Ingress Consolidado**: Otimização de recursos compartilhados
- **Single Replica**: Para evitar problemas de estado compartilhado

## 📋 Notas de Produção

- Estado atual armazenado em memória
- Para múltiplas replicas, implementar banco de dados (Redis/MongoDB)
- Configurado para ambiente EKS com ingress consolidado

## 🚀 Comandos Docker Úteis

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
