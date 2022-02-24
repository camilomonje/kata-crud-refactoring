package co.com.sofka.crud.controller;

import co.com.sofka.crud.models.dto.ToDoDto;
import co.com.sofka.crud.services.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ToDoController {

    @Autowired
    private ToDoService service;

    @GetMapping(value = "api/todos")
    public Iterable<ToDoDto> list(){
        return service.list();
    }
    
    @PostMapping(value = "api/todo")
    public ToDoDto save(@RequestBody ToDoDto todo){
        return service.save(todo);
    }

    @PutMapping(value = "api/todo")
    public ToDoDto update(@RequestBody ToDoDto todo){
        if(todo.getId() != null){
            return service.save(todo);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/todo")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/todo")
    public ToDoDto get(@PathVariable("id") Long id){
        return service.get(id);
    }

}
