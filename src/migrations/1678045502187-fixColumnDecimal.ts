import { MigrationInterface, QueryRunner } from "typeorm";

export class fixColumnDecimal1678045502187 implements MigrationInterface {
    name = 'fixColumnDecimal1678045502187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" SET DEFAULT '0'`);
    }

}
