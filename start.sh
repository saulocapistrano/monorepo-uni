if [[ $1 == "clean" ]]; then
  echo "Removendo containers, volumes e redes..."
  docker compose -f docker/docker-compose.yml down -v
fi

echo "Carregando variáveis sensíveis..."
set -a
source .env.secret
set +a

echo "Iniciando infraestrutura com Docker Compose..."
docker compose -f docker/docker-compose.yml --env-file .env up -d --build

