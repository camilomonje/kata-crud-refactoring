package co.com.sofka.crud.models.entity;

import javax.persistence.*;

@Entity
@Table(name = "grupos")
public class Group {
    @Id
    @GeneratedValue
    private Long grupoId;
    private String grupoNombre;

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
