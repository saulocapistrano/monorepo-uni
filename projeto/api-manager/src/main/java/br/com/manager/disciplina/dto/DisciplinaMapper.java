package br.com.manager.disciplina.dto;

import br.com.manager.disciplina.model.Disciplina;

public class DisciplinaMapper {
    public static DisciplinaDTO toDTO(Disciplina entity) {
        return new DisciplinaDTO(
                entity.getId(),
                entity.getCodigo(),
                entity.getNome(),
                entity.getDescricao(),
                entity.getCargaHoraria()
        );
    }

    public static Disciplina toEntity(DisciplinaDTO dto) {
        Disciplina entity = new Disciplina();
        entity.setId(dto.id);
        entity.setCodigo(dto.codigo);
        entity.setNome(dto.nome);
        entity.setDescricao(dto.descricao);
        entity.setCargaHoraria(dto.cargaHoraria);
        return entity;
    }
}
