package br.com.manager.semestre.repository;

import br.com.manager.semestre.model.Semestre;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class SemestreRepository implements PanacheRepository<Semestre> {
}
