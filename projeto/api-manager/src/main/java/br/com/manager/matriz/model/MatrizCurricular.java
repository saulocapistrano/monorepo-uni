package br.com.manager.matriz.model;

import br.com.manager.curso.model.Curso;
import br.com.manager.disciplina.model.Disciplina;
import br.com.manager.semestre.model.Semestre;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "matriz_curricular", schema = "academico",
        uniqueConstraints = @UniqueConstraint(columnNames = {"curso_id", "semestre_id", "disciplina_id"}))
@Data
public class MatrizCurricular {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ordem", nullable = false)
    private Integer ordem = 1;

    @ManyToOne
    @JoinColumn(name = "curso_id", nullable = false)
    private Curso curso;

    @ManyToOne
    @JoinColumn(name = "semestre_id", nullable = false)
    private Semestre semestre;

    @ManyToOne
    @JoinColumn(name = "disciplina_id", nullable = false)
    private Disciplina disciplina;
}
