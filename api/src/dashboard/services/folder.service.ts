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
    // const folders = await this.folderRepository.query(
    //   'SELECT * FROM folders LEFT JOIN todos on todos."folderId" = folders.id',
    // );
    //   .createQueryBuilder('f')
    //   .leftJoinAndSelect('f.todos', 't')
    //   .where('todo_id = f.id')
    //   .getQuery();
    //   .leftJoin('f.todos', 't')
    //   .leftJoinAndSelect('folder.todos', 'folder')
    //   .getMany();
    // console.log(folders);
    // return null;
    return from(this.folderRepository.find());
  }

  update(id: string, folder: Folder): Observable<UpdateResult> {
    return from(this.folderRepository.update(id, folder));
  }

  delete(id: string): Observable<DeleteResult> {
    return from(this.folderRepository.delete(id));
  }
}
