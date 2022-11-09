import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

  @Column('int')
  age: number;

  @Column({ length: 20 })
  race: string;

  @Column({ length: 10 })
  weight: string;

  @Column()
  image: string;

  @Column({ length: 50 })
  countryOfOrigin: string;
}
