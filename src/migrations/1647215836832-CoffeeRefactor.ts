import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeRefactor1647215836832 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"',
    );
  }
}
