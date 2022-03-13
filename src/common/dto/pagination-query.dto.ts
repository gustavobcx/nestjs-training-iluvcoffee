import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  // @Type(() => Number) // enableImplicitConversion
  limit: number;

  @IsOptional()
  @IsPositive()
  // @Type(() => Number) // enableImplicitConversion
  offset: number;
}
