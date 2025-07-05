# Changelog

## [v2.0.0] - 2025-07-05

### 🚀 Funcionalidades
- ✅ Interface web totalmente funcional
- ✅ API REST completa (GET, POST, PUT)
- ✅ Criação de tarefas via interface
- ✅ Movimentação de tarefas entre colunas (clique)
- ✅ Integração com Kubernetes/EKS

### 🔧 Correções
- **BREAKING**: Corrigidos caminhos da API de `/api/tasks` para `./api/tasks`
- Resolvido problema de estado não compartilhado entre pods
- Configurado session affinity no service
- Integração com ingress consolidado

### 🏗️ Infraestrutura
- Configuração para EKS/Kubernetes
- Service com session affinity
- Ingress consolidado para otimização de recursos
- Dockerfile otimizado

### 📋 Deploy
- Aplicação rodando em produção no EKS
- URL: `/kanban/` no ambiente consolidado
- 1 replica para garantir consistência de dados

### 🐛 Problemas Conhecidos
- Estado armazenado em memória (não persistente entre restarts)
- Recomendado implementar banco de dados para produção com múltiplas replicas
