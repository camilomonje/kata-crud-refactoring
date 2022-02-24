package co.com.sofka.crud.repository.group;

import co.com.sofka.crud.models.dto.GroupDto;
import co.com.sofka.crud.models.entity.Group;
import co.com.sofka.crud.models.mapper.GroupMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class GroupRepository implements IGroupRespository{

    @Autowired
    private IGroupCrudRepository groupCrudRepository;

    @Autowired
    private GroupMapper mapper;


    @Override
    public Iterable<GroupDto> list() {
        Iterable<Group> groups = groupCrudRepository.findAll();
        return mapper.toGroupDtos(groups);
    }

    @Override
    public GroupDto save(GroupDto toDoDTO) {
        Group group = mapper.toGroup(toDoDTO);
        return mapper.toGroupDto(groupCrudRepository.save(group));
    }

    @Override
    public void delete(Long id) {
        groupCrudRepository.delete(mapper.toGroup(get(id)));
    }

    @Override
    public GroupDto get(Long id) {
        Group group = groupCrudRepository.findById(id).orElseThrow();
        return mapper.toGroupDto(group);
    }
}
