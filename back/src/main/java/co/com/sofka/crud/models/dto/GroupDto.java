package co.com.sofka.crud.models.dto;

import java.util.List;

public class GroupDto {

    private Long groupId;
    private String groupName;
    private List<ToDoDto> toDoDtos;

    public Long getGroupId() {
        return groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public List<ToDoDto> getToDoDtos() {
        return toDoDtos;
    }

    public void setToDoDtos(List<ToDoDto> toDoDtos) {
        this.toDoDtos = toDoDtos;
    }
}
