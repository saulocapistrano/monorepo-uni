package br.com.manager.semestre.rest;

import br.com.manager.semestre.service.SemestreService;
import io.quarkus.test.InjectMock;
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static io.restassured.RestAssured.given;
import static org.mockito.ArgumentMatchers.anyLong;

@QuarkusTest
class SemestreControllerTest {

    @InjectMock
    SemestreService service;

    @Test
    void excluir_deveRetornar204QuandoExistir() {
        Mockito.when(service.excluir(anyLong())).thenReturn(true);

        given()
                .when().delete("/semestre/1")
                .then()
                .statusCode(204);
    }

    @Test
    void excluir_deveRetornar404QuandoNaoExistir() {
        Mockito.when(service.excluir(anyLong())).thenReturn(false);

        given()
                .when().delete("/semestre/999")
                .then()
                .statusCode(404);
    }
}