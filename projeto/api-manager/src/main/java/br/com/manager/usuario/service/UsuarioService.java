package br.com.manager.usuario.service;

import br.com.manager.usuario.dto.UsuarioDTO;
import br.com.manager.usuario.dto.UsuarioMapper;
import br.com.manager.usuario.model.Usuario;
import br.com.manager.usuario.repository.UsuarioRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
public class UsuarioService {

    private final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    public List<UsuarioDTO> listarTodos() {
        return repository.listAll()
                .stream()
                .map(UsuarioMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public UsuarioDTO salvar(UsuarioDTO dto) {
        Usuario usuario = UsuarioMapper.toEntity(dto);
        repository.persist(usuario);
        return UsuarioMapper.toDTO(usuario);
    }

    public UsuarioDTO buscarPorId(Long id) {
        return repository.findByIdOptional(id)
                .map(UsuarioMapper::toDTO)
                .orElse(null);
    }

    @Transactional
    public boolean excluir(Long id) {
        return repository.deleteById(id);
    }
}