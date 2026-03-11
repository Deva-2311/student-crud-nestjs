import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';   // now correctly exported

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '231106',
      database: 'student',
      entities: [Student],
      synchronize: true,
    }),
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}