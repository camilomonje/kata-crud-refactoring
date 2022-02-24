package co.com.sofka.crud.models.mapper;

import co.com.sofka.crud.models.dto.GroupDto;
import co.com.sofka.crud.models.entity.Group;
import org.mapstruct.*;


@Mapper(componentModel = "spring", uses = {ToDoMapper.class})
public interface GroupMapper {
    @Mappings({
            @Mapping(source = "grupoId", target = "groupId"),
            @Mapping(source = "grupoNombre", target = "groupName"),
            @Mapping(source = "toDos", target = "toDoDtos")
    })
    GroupDto toGroupDto(Group group);
    Iterable<GroupDto> toGroupDtos(Iterable<Group> groups);

    @InheritInverseConfiguration
    Group toGroup(GroupDto groupDto);
}
