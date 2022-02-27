package co.com.sofka.crud.controller;

import co.com.sofka.crud.models.dto.GroupDto;
import co.com.sofka.crud.models.dto.ToDoDto;
import co.com.sofka.crud.services.GroupService;
import co.com.sofka.crud.services.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ToDoController {

    @Autowired
    private ToDoService service;

    @Autowired
    private GroupService groupService;

    @GetMapping(value = "/todos")
    public Iterable<ToDoDto> list(){
        return service.list();
    }
    
    @PostMapping(value = "/todo")
    public Iterable<GroupDto> save(@RequestBody ToDoDto toDoDto){
        service.save(toDoDto);
        return groupService.list();
    }

    @PutMapping(value = "/todo")
    public ToDoDto update(@RequestBody ToDoDto toDoDto){
        if(toDoDto.getId() != null){
            return service.save(toDoDto);
        }
        throw new RuntimeException("No existe el id para actualizar");
    }

    @DeleteMapping(value = "/{id}/todo")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "/{id}/todo")
    public ToDoDto get(@PathVariable("id") Long id){
        return service.get(id);
    }

}
