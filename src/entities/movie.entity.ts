import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
class Movie {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", unique: true })
  imagem: string;

  @Column({ type: "varchar", unique: true })
  titulo: string;

  @Column({ type: "varchar" })
  nota: string;
}

export { Movie };
