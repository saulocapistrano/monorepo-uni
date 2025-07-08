package br.com.manager.matriz.rest;

import br.com.manager.matriz.dto.MatrizCurricularDTO;
import br.com.manager.matriz.service.MatrizCurricularService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/matriz-curricular")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class MatrizCurricularController {

    private final MatrizCurricularService service;

    public MatrizCurricularController(MatrizCurricularService service) {
        this.service = service;
    }

    @GET
    @RolesAllowed({"admin", "coordenador"})
    public List<MatrizCurricularDTO> listar() {
        return service.listarTodos();
    }

    @POST
    @RolesAllowed("admin")
    public Response criar(MatrizCurricularDTO dto) {
        return Response.status(Response.Status.CREATED).entity(service.salvar(dto)).build();
    }

    @GET
    @Path("/{id}")
    @RolesAllowed({"admin", "coordenador"})
    public Response buscar(@PathParam("id") Long id) {
        MatrizCurricularDTO dto = service.buscarPorId(id);
        return dto != null ? Response.ok(dto).build() : Response.status(Response.Status.NOT_FOUND).build();
    }

    @DELETE
    @Path("/{id}")
    @RolesAllowed("admin")
    public Response excluir(@PathParam("id") Long id) {
        return service.excluir(id) ? Response.noContent().build() : Response.status(Response.Status.NOT_FOUND).build();
    }
}
