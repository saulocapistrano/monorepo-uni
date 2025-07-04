Sistema de GESTÃO ACADÊMICA - Este projeto faz parte de um teste técnico. 
## 🔐 Segurança e execução

Este projeto isola as credenciais sensíveis fora do versionamento, seguindo boas práticas de segurança.

Você receberá um arquivo `.env.secret` **manualmente** por e-mail ou WhatsApp.

---

### ✅ Como rodar a infraestrutura local:

```bash
# 1. Clone o repositório
git clone https://github.com/saulocapistrano/monorepo-uni.git
cd monorepo-uni

# 2. Crie o .env (com as referências)
cp .env.example .env

# 3. Adicione o arquivo .env.secret fornecido separadamente na raiz do projeto

# 4. Execute o script
./start.sh
```

---

### ✅ O que será iniciado

* **PostgreSQL 15**

    * Banco de dados: `academico`
    * Porta: `5432`
* **Keycloak 24**

    * Realm: `academico-realm` (importado automaticamente)
    * Usuário administrador: `admin`
    * Importação automática de:

        * 4 perfis (`admin`, `coordenador`, `professor`, `aluno`)
        * 1 usuário (`admin@academico.com` / senha definida no `.env.secret`)
        * 2 clients (`sso-app` e `admin-api`)
    * Porta: `8080`

---

### 🌐 URLs disponíveis

* **Keycloak Admin Console**:
  👉 [http://localhost:8080/admin](http://localhost:8080/admin)
  Use o admin/senha definidos no `.env.secret`

* **Keycloak Realm Login Page (usuário)**:
  👉 [http://localhost:8080/realms/academico-realm/account](http://localhost:8080/realms/academico-realm/account)
  Para login com `admin@academico.com` ou usuários futuros

* **PostgreSQL**:
  Conexão: `jdbc:postgresql://localhost:5432/academico`
  Pode ser acessado com um cliente como DBeaver, pgAdmin, etc.


