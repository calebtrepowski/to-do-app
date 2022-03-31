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

  async create(folder: Folder): Promise<Folder> {
    if (folder?.name === '') {
      const prevCount = await createQueryBuilder()
        .select()
        .from(FolderEntity, 'f')
        .where("f.name LIKE 'Untitled Folder%'")
        .getCount();
      folder.name = `Untitled Folder (${prevCount + 1})`;
    }
    return this.folderRepository.save(folder);
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
