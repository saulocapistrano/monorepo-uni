package br.com.manager.service;

import br.com.manager.usuario.dto.UsuarioDTO;
import br.com.manager.usuario.repository.UsuarioRepository;
import br.com.manager.usuario.service.UsuarioService;
import io.quarkus.test.InjectMock;
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.anyLong;

@QuarkusTest
class UsuarioServiceTest {

    @InjectMock
    UsuarioRepository repository;

    @InjectMock
    UsuarioService service;

    @Test
    void listarTodos_deveRetornarListaVazia() {
        Mockito.when(repository.listAll()).thenReturn(Collections.emptyList());
        List<UsuarioDTO> result = service.listarTodos();
        assertTrue(result.isEmpty());
    }


    @Test
    void buscarPorId_deveRetornarNullParaIdInexistente() {
        Mockito.when(repository.findByIdOptional(anyLong())).thenReturn(Optional.empty());
        assertNull(service.buscarPorId(999L));
    }
}