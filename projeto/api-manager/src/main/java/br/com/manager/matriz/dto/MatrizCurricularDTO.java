package br.com.manager.matriz.dto;

import lombok.Data;

@Data
public class MatrizCurricularDTO {
    public Long id;
    public Long cursoId;
    public Long semestreId;
    public Long disciplinaId;
    public Integer ordem;
}
