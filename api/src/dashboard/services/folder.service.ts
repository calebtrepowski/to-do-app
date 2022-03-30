import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import {
  createQueryBuilder,
  DeleteResult,
  Repository,
  UpdateResult,
} from 'typeorm';
import { FolderEntity } from '../models/folder.entity';
import { Folder } from '../models/folder.interface';
import { ToDoEntity } from '../models/todo.entity';

@Injectable()
export class FolderService {
  constructor(
    @InjectRepository(FolderEntity)
    private readonly folderRepository: Repository<FolderEntity>,
  ) {}

  create(folder: Folder): Observable<Folder> {
    return from(this.folderRepository.save(folder));
  }

  findAll(): Observable<FolderEntity[]> {
    return from(
      this.folderRepository.find({
        order: {
          id: 'DESC',
        },
      }),
    );
  }

  update(id: number, folder: Folder): Observable<UpdateResult> {
    return from(this.folderRepository.update(id, folder));
  }

  async delete(id: number): Promise<DeleteResult> {
    await createQueryBuilder()
      .delete()
      .from(ToDoEntity)
      .where('folderId = :id', { id })
      .execute();
    return this.folderRepository.delete(id);
  }
}
