package co.com.sofka.crud.services;

import co.com.sofka.crud.models.dto.ToDoDto;
import co.com.sofka.crud.repository.IToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToDoService {

    @Autowired
    private IToDoRepository repository;

    public Iterable<ToDoDto> list(){
        return repository.list();
    }

    public ToDoDto save(ToDoDto todo){
        return repository.save(todo);
    }

    public void delete(Long id){
        repository.delete(id);
    }

    public ToDoDto get(Long id){
         return repository.get(id);
    }

}
