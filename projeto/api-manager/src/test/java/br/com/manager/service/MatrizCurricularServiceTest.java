package br.com.manager.service;

import br.com.manager.matriz.dto.MatrizCurricularDTO;
import br.com.manager.matriz.repository.MatrizCurricularRepository;
import br.com.manager.matriz.service.MatrizCurricularService;
import io.quarkus.test.InjectMock;
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyLong;

@QuarkusTest
class MatrizCurricularServiceTest {

    @InjectMock
    MatrizCurricularRepository repository;

    @InjectMock
    MatrizCurricularService service;

    @Test
    void listarTodos_deveRetornarListaVaziaQuandoNaoHouverDados() {
        Mockito.when(repository.listAll()).thenReturn(Collections.emptyList());
        List<MatrizCurricularDTO> result = service.listarTodos();
        assertTrue(result.isEmpty());
    }

    @Test
    void buscarPorId_deveRetornarNullQuandoNaoEncontrado() {
        Mockito.when(repository.findByIdOptional(anyLong())).thenReturn(Optional.empty());
        assertNull(service.buscarPorId(1L));
    }

    @Test
    void excluir_deveRetornarFalseQuandoNaoEncontrado() {
        Mockito.when(repository.deleteById(anyLong())).thenReturn(false);
        assertFalse(service.excluir(1L));
    }
}