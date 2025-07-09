# Sistema de GESTÃO ACADÊMICA

Este projeto faz parte de um teste técnico e implementa um sistema completo para gestão de alunos, professores, cursos, semestres e matriz curricular.

---

## 🔐 Segurança e execução

Este projeto isola as credenciais sensíveis fora do versionamento, seguindo boas práticas de segurança.

Você receberá um arquivo `.env.secret` **manualmente** por e-mail ou WhatsApp.

---

## ✅ Como rodar a infraestrutura local:

```bash
# 1. Clone o repositório
git clone https://github.com/saulocapistrano/monorepo-uni.git
cd monorepo-uni

# 2. Crie o .env (com as referências)
cp .env.example .env

# 3. Adicione o arquivo .env.secret fornecido separadamente na raiz do projeto

# 4. Execute o script

# 5. Inicie localmente o seu Dockerdesktop

./start.sh
````

---

## O que será iniciado:

* **PostgreSQL 15**

    * Banco de dados: `academico`
    * Porta: `5432`

* **Keycloak 24**

    * Realm: `academico-realm` (importado automaticamente)
    * Usuário administrador: `admin`
    * Importação automática de:

        * 4 perfis (`admin`, `coordenador`, `professor`, `aluno`)
        * 1 usuário de exemplo:

            * Email: `admin@academico.com`
            * Senha: `123456`
        * 2 clients: `sso-app` e `admin-api`
    * Porta: `8080`

* **API Manager (Java + Quarkus)**

    * Porta: `8082`
    * Endpoints REST protegidos por roles via Keycloak
    * Swagger disponível em: [http://localhost:8082/swagger](http://localhost:8082/swagger)

* **UI Manager (Angular 15+)**

    * Aplicação frontend standalone
    * Porta: `4200` (via NGINX dentro do Docker)
    * CORS habilitado para consumo da API
    * Login via Keycloak

---

## 🌐 URLs disponíveis

* **Keycloak Admin Console**
  [http://localhost:8080/admin](http://localhost:8080/admin)
  Use `admin` + senha do `.env.secret`

* **Login no Sistema**
  [http://localhost:4200](http://localhost:4200)
  Use:

  ```
  Email: admin@academico.com
  Senha: 123456
  ```

* **Swagger (API Manager)**
  [http://localhost:8082/swagger](http://localhost:8082/swagger)

* **Conta de usuário autenticado**
  [http://localhost:8080/realms/academico-realm/account](http://localhost:8080/realms/academico-realm/account)

---

## 🚀 Como rodar apenas o Frontend manualmente (opcional)

```bash
cd projeto/ui-manager
npm install
ng serve
```

---

## 🐳 Como buildar e incluir o Frontend no Docker

```bash
# A partir da raiz do monorepo
cd projeto/ui-manager

# Gera a pasta dist/ui-manager
ng build --configuration=production

# Volte à raiz e reconstrua o container
docker compose build ui-manager

# Inicie novamente tudo
./start.sh
```

---

## ✅ Roles disponíveis

* `admin`
* `coordenador`
* `professor`
* `aluno`

---

## 📌 Observações

* O sistema está organizado por features (Angular Standalone Components).
* Toda autenticação é feita via Keycloak e JWT (Access Token).
* Os serviços estão isolados em containers Docker.
* Aplicação com arquitetura limpa no backend (Quarkus).

---

