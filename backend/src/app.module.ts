import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ExampleModule } from './modules/example/example.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'frontend/dist'),
    }),
    ConfigModule.forRoot(),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'mysql',
    //     host: configService.get('DB_HOST'),
    //     username: configService.get('DB_USERNAME'),
    //     password: configService.get('DB_PASSWORD'),
    //     port: configService.get('DB_PORT'),
    //     database: configService.get('DB_NAME'),
    //     synchronize: false,
    //     autoLoadEntities: true,
    //   }),
    //   inject: [ConfigService],
    // }),
    ExampleModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule { }
