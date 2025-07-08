package br.com.manager.disciplina.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "disciplina", schema = "academico")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Disciplina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 20)
    private String codigo;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @Column(name = "carga_horaria", nullable = false)
    private Integer cargaHoraria;
}
