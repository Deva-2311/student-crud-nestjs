import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entity/student.entity';
import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {

  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  
  
  // READ ALL
  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  // READ ONE
  findOne(id: number): Promise<Student | null> {
    return this.studentRepository.findOneBy({ id });
  }

  
  
  // DELETE
  async remove(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }

  async create(createStudentDto: CreateStudentDto) {
  const student = this.studentRepository.create(createStudentDto);
  return this.studentRepository.save(student);
}

async update(id: number, updateStudentDto: UpdateStudentDto) {
  await this.studentRepository.update(id, updateStudentDto);
  return this.studentRepository.findOneBy({ id });
}
}