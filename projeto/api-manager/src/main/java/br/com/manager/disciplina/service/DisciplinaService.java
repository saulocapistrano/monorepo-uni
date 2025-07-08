package br.com.manager.disciplina.service;

import br.com.manager.disciplina.dto.DisciplinaDTO;
import br.com.manager.disciplina.dto.DisciplinaMapper;
import br.com.manager.disciplina.model.Disciplina;
import br.com.manager.disciplina.repository.DisciplinaRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
public class DisciplinaService {

    private final DisciplinaRepository repository;

    public DisciplinaService(DisciplinaRepository repository) {
        this.repository = repository;
    }

    public List<DisciplinaDTO> listarTodos() {
        return repository.listAll().stream()
                .map(DisciplinaMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public DisciplinaDTO salvar(DisciplinaDTO dto) {
        Disciplina entity = DisciplinaMapper.toEntity(dto);
        repository.persist(entity);
        return DisciplinaMapper.toDTO(entity);
    }

    public DisciplinaDTO buscarPorId(Long id) {
        return repository.findByIdOptional(id)
                .map(DisciplinaMapper::toDTO)
                .orElse(null);
    }

    @Transactional
    public boolean excluir(Long id) {
        return repository.deleteById(id);
    }
}
