package co.com.sofka.crud.repository;

import co.com.sofka.crud.models.entity.ToDo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IToDoCrudRepository extends CrudRepository<ToDo, Long> {
}
