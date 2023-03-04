import { MigrationInterface, QueryRunner } from "typeorm";

export class fixFieldRealEstateValue1677894401182 implements MigrationInterface {
    name = 'fixFieldRealEstateValue1677894401182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" DROP DEFAULT`);
    }

}
