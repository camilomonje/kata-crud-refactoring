package co.com.sofka.crud.repository.group;

import co.com.sofka.crud.models.entity.Group;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IGroupCrudRepository extends CrudRepository<Group, Long> {
}
