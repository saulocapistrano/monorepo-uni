package br.com.manager.matriz.service;

import br.com.manager.matriz.dto.MatrizCurricularDTO;
import br.com.manager.matriz.dto.MatrizCurricularMapper;
import br.com.manager.matriz.model.MatrizCurricular;
import br.com.manager.matriz.repository.MatrizCurricularRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
public class MatrizCurricularService {

    private final MatrizCurricularRepository repository;

    public MatrizCurricularService(MatrizCurricularRepository repository) {
        this.repository = repository;
    }

    public List<MatrizCurricularDTO> listarTodos() {
        return repository.listAll().stream()
                .map(MatrizCurricularMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public MatrizCurricularDTO salvar(MatrizCurricularDTO dto) {
        MatrizCurricular m = MatrizCurricularMapper.toEntity(dto);
        repository.persist(m);
        return MatrizCurricularMapper.toDTO(m);
    }

    public MatrizCurricularDTO buscarPorId(Long id) {
        return repository.findByIdOptional(id)
                .map(MatrizCurricularMapper::toDTO)
                .orElse(null);
    }

    @Transactional
    public boolean excluir(Long id) {
        return repository.deleteById(id);
    }
}
