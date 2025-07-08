package br.com.manager.usuario.rest;

import br.com.manager.usuario.dto.UsuarioDTO;
import br.com.manager.usuario.service.UsuarioService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.eclipse.microprofile.openapi.annotations.parameters.Parameter;

import java.util.List;

@Path("/usuario")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Usuários", description = "Operações relacionadas à entidade Usuário")
public class UsuarioController {

    private final UsuarioService service;

    public UsuarioController(UsuarioService service) {
        this.service = service;
    }

    @GET
    @RolesAllowed({"admin", "coordenador"})
    @Operation(summary = "Listar usuários", description = "Retorna todos os usuários cadastrados.")
    public List<UsuarioDTO> listar() {
        return service.listarTodos();
    }

    @POST
    @RolesAllowed("admin")
    @Operation(summary = "Criar novo usuário", description = "Cria um novo usuário com os dados informados.")
    public Response criar(UsuarioDTO dto) {
        return Response.status(Response.Status.CREATED).entity(service.salvar(dto)).build();
    }

    @GET
    @Path("/{id}")
    @RolesAllowed({"admin", "coordenador"})
    @Operation(summary = "Buscar usuário por ID", description = "Busca e retorna um usuário com base no ID informado.")
    public Response buscar(@Parameter(description = "ID do usuário", required = true) @PathParam("id") Long id) {
        UsuarioDTO dto = service.buscarPorId(id);
        return dto != null ? Response.ok(dto).build() : Response.status(Response.Status.NOT_FOUND).build();
    }

    @DELETE
    @Path("/{id}")
    @RolesAllowed("admin")
    @Operation(summary = "Excluir usuário", description = "Remove um usuário pelo ID.")
    public Response excluir(@Parameter(description = "ID do usuário a excluir", required = true) @PathParam("id") Long id) {
        return service.excluir(id) ? Response.noContent().build() : Response.status(Response.Status.NOT_FOUND).build();
    }
}
