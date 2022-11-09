import { Pet } from 'src/pets/entities/pet.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'pets',
        entities: [Pet],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
