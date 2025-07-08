package br.com.manager.semestre.dto;


import br.com.manager.semestre.model.Semestre;

public class SemestreMapper {
    public static SemestreDTO toDTO(Semestre s) {
        SemestreDTO dto = new SemestreDTO();
        dto.id = s.getId();
        dto.nome = s.getNome();
        dto.dataInicio = s.getDataInicio();
        dto.dataFim = s.getDataFim();
        return dto;
    }

    public static Semestre toEntity(SemestreDTO dto) {
        Semestre s = new Semestre();
        s.setId(dto.id);
        s.setNome(dto.nome);
        s.setDataInicio(dto.dataInicio);
        s.setDataFim(dto.dataFim);
        return s;
    }
}
