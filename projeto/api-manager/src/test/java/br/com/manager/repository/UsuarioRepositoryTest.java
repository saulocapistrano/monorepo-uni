package br.com.manager.repository;

import br.com.manager.usuario.model.Usuario;
import br.com.manager.usuario.repository.UsuarioRepository;
import io.quarkus.test.junit.QuarkusTest;
import jakarta.inject.Inject;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

@QuarkusTest
public class UsuarioRepositoryTest {

    @Inject
    UsuarioRepository repository;

    @Test
    public void testPersistirBuscarUsuario() {
        Usuario u = new Usuario();
        u.setNome("João Teste");
        u.setEmail("joao@teste.com");
        u.setTipo("aluno");

        repository.persist(u);
        assertNotNull(u.getId());
        assertTrue(repository.findByIdOptional(u.getId()).isPresent());
    }
}