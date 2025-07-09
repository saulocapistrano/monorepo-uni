
import br.com.manager.curso.model.Curso;
import br.com.manager.disciplina.model.Disciplina;
import br.com.manager.matriz.dto.MatrizCurricularDTO;
import br.com.manager.matriz.dto.MatrizCurricularMapper;
import br.com.manager.matriz.model.MatrizCurricular;
import br.com.manager.semestre.model.Semestre;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MatrizCurricularMapperTest {

    @Test
    void toDTO_deveMapearCorretamente() {
        MatrizCurricular entity = new MatrizCurricular();
        entity.setId(1L);
        entity.setOrdem(2);

        Curso curso = new Curso();
        curso.setId(10L);
        entity.setCurso(curso);

        Semestre semestre = new Semestre();
        semestre.setId(20L);
        entity.setSemestre(semestre);

        Disciplina disciplina = new Disciplina();
        disciplina.setId(30L);
        entity.setDisciplina(disciplina);

        MatrizCurricularDTO dto = MatrizCurricularMapper.toDTO(entity);

        assertEquals(1L, dto.id);
        assertEquals(10L, dto.cursoId);
        assertEquals(20L, dto.semestreId);
        assertEquals(30L, dto.disciplinaId);
        assertEquals(2, dto.ordem);
    }

    @Test
    void toEntity_deveMapearCorretamente() {
        MatrizCurricularDTO dto = new MatrizCurricularDTO();
        dto.id = 1L;
        dto.cursoId = 10L;
        dto.semestreId = 20L;
        dto.disciplinaId = 30L;
        dto.ordem = 2;

        MatrizCurricular entity = MatrizCurricularMapper.toEntity(dto);

        assertEquals(1L, entity.getId());
        assertEquals(10L, entity.getCurso().getId());
        assertEquals(20L, entity.getSemestre().getId());
        assertEquals(30L, entity.getDisciplina().getId());
        assertEquals(2, entity.getOrdem());
    }
}