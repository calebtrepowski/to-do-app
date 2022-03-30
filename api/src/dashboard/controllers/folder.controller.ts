import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Folder } from '../models/folder.interface';
import { FolderService } from '../services/folder.service';

@Controller('folder')
export class FolderController {
  constructor(private folderService: FolderService) {}

  @Post()
  create(@Body() folder: Folder): Observable<Folder> {
    return this.folderService.create(folder);
  }

  @Get()
  findAll() {
    return this.folderService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() folder: Folder,
  ): Observable<UpdateResult> {
    return this.folderService.update(id, folder);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.folderService.delete(id);
  }
}
