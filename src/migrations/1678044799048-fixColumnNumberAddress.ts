import { MigrationInterface, QueryRunner } from "typeorm";

export class fixColumnNumberAddress1678044799048 implements MigrationInterface {
    name = 'fixColumnNumberAddress1678044799048'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" SET NOT NULL`);
    }

}
