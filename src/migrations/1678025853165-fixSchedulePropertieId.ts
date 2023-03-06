import { MigrationInterface, QueryRunner } from "typeorm";

export class fixSchedulePropertieId1678025853165 implements MigrationInterface {
    name = 'fixSchedulePropertieId1678025853165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "propertieId" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "propertieId"`);
    }

}
