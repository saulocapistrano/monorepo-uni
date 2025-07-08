package br.com.manager.curso.service;

import br.com.manager.curso.dto.CursoDTO;
import br.com.manager.curso.dto.CursoMapper;
import br.com.manager.curso.model.Curso;
import br.com.manager.curso.repository.CursoRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
public class CursoService {

    private final CursoRepository repository;

    public CursoService(CursoRepository repository) {
        this.repository = repository;
    }

    public List<CursoDTO> listarTodos() {
        return repository.listAll()
                .stream()
                .map(CursoMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public CursoDTO salvar(CursoDTO dto) {
        Curso curso = CursoMapper.toEntity(dto);
        repository.persist(curso);
        return CursoMapper.toDTO(curso);
    }

    public CursoDTO buscarPorId(Long id) {
        return repository.findByIdOptional(id)
                .map(CursoMapper::toDTO)
                .orElse(null);
    }

    @Transactional
    public boolean excluir(Long id) {
        return repository.deleteById(id);
    }
}
