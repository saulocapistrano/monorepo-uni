package br.com.manager.semestre.service;

import br.com.manager.semestre.dto.SemestreDTO;
import br.com.manager.semestre.dto.SemestreMapper;
import br.com.manager.semestre.model.Semestre;
import br.com.manager.semestre.repository.SemestreRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
public class SemestreService {

    private final SemestreRepository repository;

    public SemestreService(SemestreRepository repository) {
        this.repository = repository;
    }

    public List<SemestreDTO> listarTodos() {
        return repository.listAll()
                .stream()
                .map(SemestreMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public SemestreDTO salvar(SemestreDTO dto) {
        Semestre semestre = SemestreMapper.toEntity(dto);
        repository.persist(semestre);
        return SemestreMapper.toDTO(semestre);
    }

    public SemestreDTO buscarPorId(Long id) {
        return repository.findByIdOptional(id)
                .map(SemestreMapper::toDTO)
                .orElse(null);
    }

    @Transactional
    public boolean excluir(Long id) {
        return repository.deleteById(id);
    }
}
