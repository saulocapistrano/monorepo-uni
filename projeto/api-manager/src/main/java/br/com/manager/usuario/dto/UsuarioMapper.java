package br.com.manager.usuario.dto;

import br.com.manager.usuario.model.Usuario;

public class UsuarioMapper {
    public static UsuarioDTO toDTO(Usuario usuario) {
        UsuarioDTO dto = new UsuarioDTO();
        dto.id = usuario.getId();
        dto.nome = usuario.getNome();
        dto.email = usuario.getEmail();
        dto.tipo = usuario.getTipo();
        return dto;
    }
    public static Usuario toEntity(UsuarioDTO dto) {
        Usuario usuario = new Usuario();
        usuario.setId(dto.id);
        usuario.setNome(dto.nome);
        usuario.setEmail(dto.email);
        usuario.setTipo(dto.tipo);
        return usuario;
    }
}