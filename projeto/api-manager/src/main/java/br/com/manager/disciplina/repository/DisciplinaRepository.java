package br.com.manager.disciplina.repository;
import br.com.manager.disciplina.model.Disciplina;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class DisciplinaRepository implements PanacheRepository<Disciplina> {
}
