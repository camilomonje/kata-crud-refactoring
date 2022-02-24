package co.com.sofka.crud.models.mapper;

import co.com.sofka.crud.models.dto.GroupDto;
import co.com.sofka.crud.models.entity.Group;
import org.mapstruct.*;


@Mapper(componentModel = "spring")
public interface GroupMapper {
    @Mappings({
            @Mapping(source = "grupoId", target = "groupId"),
            @Mapping(source = "grupoNombre", target = "groupName")
    })
    GroupDto toGroupDto(Group group);
    Iterable<GroupDto> toGroupDtos(Iterable<Group> groups);

    @InheritInverseConfiguration
    Group toGroup(GroupDto groupDto);
}
