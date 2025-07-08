package br.com.manager.curso.rest;

import br.com.manager.curso.dto.CursoDTO;
import br.com.manager.curso.service.CursoService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;

import java.util.List;

@Path("/curso")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Curso", description = "Operações relacionadas a cursos")
public class CursoController {

    private final CursoService service;

    public CursoController(CursoService service) {
        this.service = service;
    }

    @GET
    @RolesAllowed({"admin", "coordenador"})
    public List<CursoDTO> listar() {
        return service.listarTodos();
    }

    @POST
    @RolesAllowed("admin")
    public Response criar(CursoDTO dto) {
        return Response.status(Response.Status.CREATED).entity(service.salvar(dto)).build();
    }

    @GET
    @Path("/{id}")
    @RolesAllowed({"admin", "coordenador"})
    public Response buscar(@PathParam("id") Long id) {
        CursoDTO dto = service.buscarPorId(id);
        return dto != null ? Response.ok(dto).build() : Response.status(Response.Status.NOT_FOUND).build();
    }

    @DELETE
    @Path("/{id}")
    @RolesAllowed("admin")
    public Response excluir(@PathParam("id") Long id) {
        return service.excluir(id) ? Response.noContent().build() : Response.status(Response.Status.NOT_FOUND).build();
    }
}
