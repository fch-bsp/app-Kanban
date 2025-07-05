# Changelog

## [v5.0.0] - 2025-07-05

### 📚 Documentação
- ✨ README completamente redesenhado com design profissional
- 🎨 Adicionados badges, diagramas e estrutura visual moderna
- 📊 Incluídas métricas de performance e monitoramento
- 🏗️ Diagrama de arquitetura com Mermaid
- 📋 Documentação completa da API
- 📁 Estrutura do projeto detalhada
- 📄 Licença MIT adicionada

### 🎯 Melhorias
- 🌟 Interface de documentação profissional
- 📱 Design responsivo na documentação
- 🔗 Links e navegação otimizados
- 📈 Seção de monitoramento e observabilidade
- 🤝 Guia de contribuição

## [v4.0.0] - 2025-07-05

### 🎨 Interface
- Ajustado posicionamento da identificação TIME AZB-BSPCLOUD
- Título limpo: "Kanban Board"
- Header principal: "Kanban Board | TIME AZB-BSPCLOUD"
- Melhor experiência do usuário

## [v3.0.0] - 2025-07-05

### 🏷️ Branding
- Adicionada identificação "TIME AZB-BSPCLOUD" no título
- Deploy realizado com sucesso no EKS
- Nova imagem v3 no ECR

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
