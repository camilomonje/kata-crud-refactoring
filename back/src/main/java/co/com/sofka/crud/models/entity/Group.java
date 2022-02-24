package co.com.sofka.crud.models.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "grupos")
public class Group {
    @Id
    @GeneratedValue
    private Long grupoId;
    private String grupoNombre;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "grupos")
    private List<ToDo> toDos;

    public List<ToDo> getToDos() {
        return toDos;
    }

    public void setToDos(List<ToDo> toDos) {
        this.toDos = toDos;
    }

    public Long getGrupoId() {
        return grupoId;
    }

    public void setGrupoId(Long grupoId) {
        this.grupoId = grupoId;
    }

    public String getGrupoNombre() {
        return grupoNombre;
    }

    public void setGrupoNombre(String grupoNombre) {
        this.grupoNombre = grupoNombre;
    }
}
