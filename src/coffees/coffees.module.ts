import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

// class MockCoffeesService {}
@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS,
      useValue: ['buddys brew', 'nescafe'],
    },
  ],
  // providers: [
  //   {
  //     provide: CoffeesService,
  //     useClass: new MockCoffeesService,
  //   },
  // ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
