import { Pet } from 'src/pets/entities/pet.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'db',
        port: 3306,
        username: 'user',
        password: 'Prueba+1234',
        database: 'pets',
        entities: [Pet],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
