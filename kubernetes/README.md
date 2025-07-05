# Kubernetes Manifests

Este diretório contém os arquivos de configuração Kubernetes para a aplicação Kanban.

## Estrutura

### `/manifests`
- `kanban-service-fixed.yaml` - Service com session affinity para garantir consistência
- `kanban-proxy-service.yaml` - Service proxy para integração com ingress consolidado

### `/ingress`
- `foodme-consolidated-final.yaml` - Ingress consolidado com rota para kanban

## Deploy

1. Aplicar os services:
```bash
kubectl apply -f manifests/
```

2. Aplicar o ingress (no namespace foodme):
```bash
kubectl apply -f ingress/
```

## Notas

- A aplicação usa 1 replica para evitar problemas de estado compartilhado
- O ingress está consolidado no namespace `foodme` para otimização de recursos
- Session affinity configurada para garantir consistência de dados
