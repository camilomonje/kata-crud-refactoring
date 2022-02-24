package co.com.sofka.crud.services;

import co.com.sofka.crud.models.dto.GroupDto;
import co.com.sofka.crud.repository.group.IGroupRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GroupService {

    @Autowired
    private IGroupRespository repository;

    public Iterable<GroupDto> list(){
        return repository.list();
    }

    public GroupDto save(GroupDto groupDto){
        return repository.save(groupDto);
    }

    public void delete(Long id){
        repository.delete(id);
    }

    public GroupDto get(Long id){
        return repository.get(id);
    }
}
