CREATE SCHEMA IF NOT EXISTS academico;

CREATE TABLE usuario (
                         id SERIAL PRIMARY KEY,
                         username VARCHAR(50) NOT NULL UNIQUE,
                         email VARCHAR(100) UNIQUE,
                         senha_hash VARCHAR(255) NOT NULL,
                         type VARCHAR(20) NOT NULL CHECK (type IN ('ADMIN', 'COORDENADOR', 'PROFESSOR', 'ALUNO')),
                         nome_completo VARCHAR(100),
                         criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE semestre (
                          id SERIAL PRIMARY KEY,
                          descricao VARCHAR(20) NOT NULL,
                          data_inicio DATE NOT NULL,
                          data_fim DATE NOT NULL,
                          UNIQUE (descricao)
);

CREATE TABLE curso (
                       id SERIAL PRIMARY KEY,
                       nome VARCHAR(100) NOT NULL,
                       descricao TEXT,
                       coordenador_id INTEGER REFERENCES usuario(id) ON DELETE SET NULL
);

CREATE TABLE disciplina (
                            id SERIAL PRIMARY KEY,
                            codigo VARCHAR(20) NOT NULL UNIQUE,
                            nome VARCHAR(100) NOT NULL,
                            descricao TEXT,
                            carga_horaria INTEGER CHECK (carga_horaria > 0)
);

CREATE TABLE matriz_curricular (
                                   id SERIAL PRIMARY KEY,
                                   curso_id INTEGER NOT NULL REFERENCES curso(id) ON DELETE CASCADE,
                                   semestre_id INTEGER NOT NULL REFERENCES semestre(id) ON DELETE CASCADE,
                                   disciplina_id INTEGER NOT NULL REFERENCES disciplina(id) ON DELETE CASCADE,
                                   ordem INTEGER DEFAULT 1 CHECK (ordem > 0),
                                   UNIQUE (curso_id, semestre_id, disciplina_id)
);

CREATE INDEX idx_usuario_type ON usuario(type);
CREATE INDEX idx_matriz_curricular_curso ON matriz_curricular(curso_id);
