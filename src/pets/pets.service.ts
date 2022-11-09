import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { ulid } from 'ulid';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {
  constructor(
    @Inject('PET_REPOSITORY')
    private petRepository: Repository<Pet>,
  ) {}

  async findAll(): Promise<Pet[]> {
    return this.petRepository.find();
  }

  public async create(createPetDto: CreatePetDto): Promise<Pet[]> {
    return this.petRepository.save([createPetDto]);
  }

  public async findOne(id: number): Promise<Pet> {
    return this.petRepository.findOne({
      where: { id },
    });
  }

  public async update(id: number, updatePetDto: UpdatePetDto): Promise<Pet> {
    let editedPet = await this.petRepository.findOne({
      where: { id },
    });
    if (!editedPet) {
      throw new NotFoundException('Pet is not found');
    }

    editedPet = { ...editedPet, ...updatePetDto };

    await this.petRepository.save(editedPet);
    return editedPet;
  }

  async remove(id: number): Promise<void> {
    await this.petRepository.delete(id);
  }
}
