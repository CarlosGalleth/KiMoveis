import { MigrationInterface, QueryRunner } from "typeorm";

export class fixFieldRealEstateId1678228839861 implements MigrationInterface {
    name = 'fixFieldRealEstateId1678228839861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "propertieId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "propertieId" integer NOT NULL`);
    }

}
