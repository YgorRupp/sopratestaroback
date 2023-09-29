import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMovies1695816235969 implements MigrationInterface {
    name = 'CreateMovies1695816235969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies" ("id" SERIAL NOT NULL, "imagem" character varying NOT NULL, "titulo" character varying NOT NULL, "nota" character varying NOT NULL, CONSTRAINT "UQ_1f0c7fdb9ca7495347605940283" UNIQUE ("imagem"), CONSTRAINT "UQ_4386897cfc869327578f1c80ae2" UNIQUE ("titulo"), CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movies"`);
    }

}
