package br.com.manager.semestre.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "semestre", schema = "academico")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Semestre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(name = "inicio", nullable = false)
    private LocalDate dataInicio;

    @Column(name = "fim", nullable = false)
    private LocalDate dataFim;
}
