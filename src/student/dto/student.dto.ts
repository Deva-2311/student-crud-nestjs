import { IsString, IsInt, IsOptional } from 'class-validator';

/* CREATE DTO */

export class CreateStudentDto {
  name: string;
  age: number;
  city: string;
}

export class UpdateStudentDto {
  name?: string;
  age?: number;
  city?: string;
}