import { Module } from '@nestjs/common';
import { DataSourceService } from './datasource.service';

@Module({
  providers: [DataSourceService], // тут мы указали что у нас есть сервис внутри модуля
  exports: [DataSourceService], // здесь мы разрешаем экспортировать сервис в другие модули
})
export class DatasourceModule {}
