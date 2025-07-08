package br.com.manager.curso.dto;

import br.com.manager.curso.model.Curso;

public class CursoMapper {
    public static CursoDTO toDTO(Curso curso) {
        CursoDTO dto = new CursoDTO();
        dto.id = curso.getId();
        dto.nome = curso.getNome();
        dto.codigo = curso.getCodigo();
        return dto;
    }

    public static Curso toEntity(CursoDTO dto) {
        Curso curso = new Curso();
        curso.setId(dto.id);
        curso.setNome(dto.nome);
        curso.setCodigo(dto.codigo);
        return curso;
    }
}
