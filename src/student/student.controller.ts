import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from '../entity/student.entity';
import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';

@Controller('students')
export class StudentController {

  constructor(private readonly studentService: StudentService) {}

  // READ ALL
  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  // READ ONE
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.studentService.findOne(id);
  }

  // UPDATE
 
@Put(':id')
update(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto) {
  return this.studentService.update(id, updateStudentDto);
}
// DELETE
@Delete(':id')
remove(@Param('id') id: number) {
  return this.studentService.remove(id);
}

// CREATE
@Post()
create(@Body() createStudentDto: CreateStudentDto) {
  return this.studentService.create(createStudentDto);
}
}