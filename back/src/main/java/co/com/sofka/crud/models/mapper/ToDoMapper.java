package co.com.sofka.crud.models.mapper;

import co.com.sofka.crud.models.dto.ToDoDto;
import co.com.sofka.crud.models.entity.ToDo;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface ToDoMapper {
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "nombre", target = "name"),
            @Mapping(source = "completado", target = "completed"),
            @Mapping(source = "grupoId", target = "groupId")
    })
    ToDoDto toToDoDto(ToDo toDo);
    Iterable<ToDoDto> toToDoDtos(Iterable<ToDo> toDos);

    @InheritInverseConfiguration
    ToDo toToDo(ToDoDto todoDto);
}
