package co.com.sofka.crud.controller;

import co.com.sofka.crud.models.dto.GroupDto;
import co.com.sofka.crud.services.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class GroupController {

    @Autowired
    private GroupService service;

    @GetMapping(value = "/groups")
    public Iterable<GroupDto> list(){
        return service.list();
    }

    @PostMapping(value = "/group")
    public GroupDto save(@RequestBody GroupDto groupDto){
        return service.save(groupDto);
    }

    @DeleteMapping(value = "/{id}/group")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "/{id}/group")
    public GroupDto get(@PathVariable("id") Long id){
        return service.get(id);
    }

}
