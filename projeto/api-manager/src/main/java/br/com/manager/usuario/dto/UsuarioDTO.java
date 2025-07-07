package br.com.manager.usuario.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO {
    public Long id;
    public String nome;
    public String email;
    public String tipo;
}