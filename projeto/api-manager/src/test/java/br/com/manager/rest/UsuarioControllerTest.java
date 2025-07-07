package br.com.manager.rest;

import br.com.manager.usuario.dto.UsuarioDTO;
import br.com.manager.usuario.service.UsuarioService;
import io.quarkus.test.InjectMock;
import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;

import jakarta.inject.Inject;

import java.util.List;

import static io.restassured.RestAssured.given;
import static org.mockito.Mockito.*;
import static org.hamcrest.Matchers.*;


@QuarkusTest
class UsuarioControllerTest {

    @InjectMock
    UsuarioService usuarioService;

    @Test
    void deveListarUsuarios() {
        UsuarioDTO mockUsuario = new UsuarioDTO(1L, "admin", "Administrador", "admin@email.com");
        when(usuarioService.listarTodos()).thenReturn(List.of(mockUsuario));

        given()
                .auth().oauth2("mock-token")
                .when()
                .get("/usuario")
                .then()
                .statusCode(200)
                .body("[0].id", equalTo(1))
                .body("[0].nome", equalTo("Administrador"));
    }

    @Test
    void deveBuscarUsuarioPorId() {
        UsuarioDTO dto = new UsuarioDTO(1L, "admin", "Administrador", "admin@email.com");
        when(usuarioService.buscarPorId(1L)).thenReturn(dto);

        given()
                .auth().oauth2("mock-token")
                .when()
                .get("/usuario/1")
                .then()
                .statusCode(200)
                .body("nome", equalTo("Administrador"));
    }

    @Test
    void deveRetornar404SeUsuarioNaoExistir() {
        when(usuarioService.buscarPorId(999L)).thenReturn(null);

        given()
                .auth().oauth2("mock-token")
                .when()
                .get("/usuario/999")
                .then()
                .statusCode(404);
    }

    @Test
    void deveCriarUsuario() {
        UsuarioDTO input = new UsuarioDTO(null, "user", "Usuário", "user@email.com");
        UsuarioDTO saved = new UsuarioDTO(2L, "user", "Usuário", "user@email.com");

        when(usuarioService.salvar(input)).thenReturn(saved);

        given()
                .auth().oauth2("mock-token")
                .contentType(ContentType.JSON)
                .body(input)
                .when()
                .post("/usuario")
                .then()
                .statusCode(201)
                .body("id", notNullValue());
    }

    @Test
    void deveExcluirUsuario() {
        when(usuarioService.excluir(1L)).thenReturn(true);

        given()
                .auth().oauth2("mock-token")
                .when()
                .delete("/usuario/1")
                .then()
                .statusCode(204);
    }

    @Test
    void naoDeveExcluirUsuarioInexistente() {
        when(usuarioService.excluir(999L)).thenReturn(false);

        given()
                .auth().oauth2("mock-token")
                .when()
                .delete("/usuario/999")
                .then()
                .statusCode(404);
    }
}

