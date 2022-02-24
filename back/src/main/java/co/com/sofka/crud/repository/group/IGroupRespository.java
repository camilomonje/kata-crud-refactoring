package co.com.sofka.crud.repository.group;

import co.com.sofka.crud.models.dto.GroupDto;

public interface IGroupRespository {

    public Iterable<GroupDto> list();
    public GroupDto save(GroupDto groupDto);
    public void delete(Long id);
    public GroupDto get(Long id);
}
