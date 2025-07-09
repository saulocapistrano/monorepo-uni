
import br.com.manager.semestre.dto.SemestreDTO;
import br.com.manager.semestre.repository.SemestreRepository;
import br.com.manager.semestre.service.SemestreService;
import io.quarkus.test.InjectMock;
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.anyLong;

@QuarkusTest
class SemestreServiceTest {

    @InjectMock
    SemestreRepository repository;

    @InjectMock
    SemestreService service;

    @Test
    void listarTodos_deveRetornarListaVazia() {
        Mockito.when(repository.listAll()).thenReturn(Collections.emptyList());
        List<SemestreDTO> result = service.listarTodos();
        assertTrue(result.isEmpty());
    }

    @Test
    void excluir_deveRetornarTrueQuandoExistir() {
        Mockito.when(repository.deleteById(anyLong())).thenReturn(true);
        assertTrue(service.excluir(1L));
    }
}