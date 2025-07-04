echo "Carregando variáveis sensíveis..."
set -a
source .env.secret
set +a

echo "Iniciando infraestrutura com Docker Compose..."
docker compose -f docker/docker-compose.yml --env-file .env up -d
