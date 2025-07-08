package br.com.manager.disciplina.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.eclipse.microprofile.openapi.annotations.media.Schema;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Representação da Disciplina")
public class DisciplinaDTO {

    @Schema(example = "1")
    public Long id;

    @Schema(example = "INF101")
    public String codigo;

    @Schema(example = "Algoritmos e Programação")
    public String nome;

    @Schema(example = "Disciplina introdutória de algoritmos.")
    public String descricao;

    @Schema(example = "60")
    public Integer cargaHoraria;
}
