package co.com.sofka.crud.models.entity;

import javax.persistence.*;


@Entity
@Table(name = "todo")
public class ToDo {
    @Id
    @GeneratedValue
    private Long id;
    private String nombre;
    private boolean completado;
    private String idGrupoLista;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public boolean isCompletado() {
        return completado;
    }

    public void setCompletado(boolean completado) {
        this.completado = completado;
    }

    public String getIdGrupoLista() {
        return idGrupoLista;
    }

    public void setIdGrupoLista(String idGrupoLista) {
        this.idGrupoLista = idGrupoLista;
    }
}
