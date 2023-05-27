import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirlineModule } from './airline/airline.modulel';
import { DatasourceModule } from './datasource/datasource.module';
import { FlightModule } from './flight/flight.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [AirlineModule,DatasourceModule,FlightModule,TicketModule,TypeOrmModule.forRoot({
    type: 'postgres', //тип подключаемой БД
    port: 5432, //порт
    username: 'postgres', //имя пользователя
    password: '123456', //пароль
    host: 'localhost', //хост, в нашем случае БД развернута локально
    synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
    logging: 'all', //включим логирование для удобства отслеживания процессов
  entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
  }),
],
  controllers: [],
  providers: [],
})
export class AppModule {}
