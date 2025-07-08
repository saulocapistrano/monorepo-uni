package br.com.manager.matriz.dto;

import br.com.manager.curso.model.Curso;
import br.com.manager.semestre.model.Semestre;
import br.com.manager.disciplina.model.Disciplina;
import br.com.manager.matriz.model.MatrizCurricular;

public class MatrizCurricularMapper {

    public static MatrizCurricularDTO toDTO(MatrizCurricular m) {
        MatrizCurricularDTO dto = new MatrizCurricularDTO();
        dto.id = m.getId();
        dto.cursoId = m.getCurso().getId();
        dto.semestreId = m.getSemestre().getId();
        dto.disciplinaId = m.getDisciplina().getId();
        dto.ordem = m.getOrdem();
        return dto;
    }

    public static MatrizCurricular toEntity(MatrizCurricularDTO dto) {
        MatrizCurricular m = new MatrizCurricular();
        m.setId(dto.id);

        Curso curso = new Curso();
        curso.setId(dto.cursoId);
        m.setCurso(curso);

        Semestre semestre = new Semestre();
        semestre.setId(dto.semestreId);
        m.setSemestre(semestre);

        Disciplina disciplina = new Disciplina();
        disciplina.setId(dto.disciplinaId);
        m.setDisciplina(disciplina);

        m.setOrdem(dto.ordem != null ? dto.ordem : 1);
        return m;
    }
}
