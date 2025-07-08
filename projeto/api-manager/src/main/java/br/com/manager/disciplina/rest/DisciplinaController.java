package br.com.manager.disciplina.rest;

import br.com.manager.disciplina.dto.DisciplinaDTO;
import br.com.manager.disciplina.service.DisciplinaService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/disciplina")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class DisciplinaController {

    private final DisciplinaService service;

    public DisciplinaController(DisciplinaService service) {
        this.service = service;
    }

    @GET
    @RolesAllowed({"admin", "coordenador"})
    public List<DisciplinaDTO> listar() {
        return service.listarTodos();
    }

    @POST
    @RolesAllowed("admin")
    public Response criar(DisciplinaDTO dto) {
        return Response.status(Response.Status.CREATED).entity(service.salvar(dto)).build();
    }

    @GET
    @Path("/{id}")
    @RolesAllowed({"admin", "coordenador"})
    public Response buscar(@PathParam("id") Long id) {
        DisciplinaDTO dto = service.buscarPorId(id);
        return dto != null ? Response.ok(dto).build() : Response.status(Response.Status.NOT_FOUND).build();
    }

    @DELETE
    @Path("/{id}")
    @RolesAllowed("admin")
    public Response excluir(@PathParam("id") Long id) {
        return service.excluir(id) ? Response.noContent().build() : Response.status(Response.Status.NOT_FOUND).build();
    }
}
