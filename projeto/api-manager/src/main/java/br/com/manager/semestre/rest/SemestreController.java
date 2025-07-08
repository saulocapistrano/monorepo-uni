package br.com.manager.semestre.rest;

import br.com.manager.semestre.dto.SemestreDTO;
import br.com.manager.semestre.service.SemestreService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.parameters.Parameter;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;

import java.util.List;

@Path("/semestre")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Semestres", description = "Gerenciamento dos semestres letivos")
public class SemestreController {

    private final SemestreService service;

    public SemestreController(SemestreService service) {
        this.service = service;
    }

    @GET
    @RolesAllowed({"admin", "coordenador"})
    @Operation(summary = "Listar semestres", description = "Retorna todos os semestres cadastrados.")
    public List<SemestreDTO> listar() {
        return service.listarTodos();
    }

    @POST
    @RolesAllowed("admin")
    @Operation(summary = "Criar semestre", description = "Cria um novo semestre.")
    public Response criar(SemestreDTO dto) {
        return Response.status(Response.Status.CREATED).entity(service.salvar(dto)).build();
    }

    @GET
    @Path("/{id}")
    @RolesAllowed({"admin", "coordenador"})
    @Operation(summary = "Buscar semestre por ID", description = "Busca um semestre com base no ID.")
    public Response buscar(@Parameter(description = "ID do semestre") @PathParam("id") Long id) {
        SemestreDTO dto = service.buscarPorId(id);
        return dto != null ? Response.ok(dto).build() : Response.status(Response.Status.NOT_FOUND).build();
    }

    @DELETE
    @Path("/{id}")
    @RolesAllowed("admin")
    @Operation(summary = "Excluir semestre", description = "Exclui um semestre pelo ID.")
    public Response excluir(@Parameter(description = "ID do semestre") @PathParam("id") Long id) {
        return service.excluir(id) ? Response.noContent().build() : Response.status(Response.Status.NOT_FOUND).build();
    }
}
