import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { petProviders } from './pet.providers';
import { PetService } from './pets.service';
import { PetsController } from './pets.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PetsController],
  providers: [...petProviders, PetService],
})
export class PetsModule {}
