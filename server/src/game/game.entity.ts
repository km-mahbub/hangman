import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity('games')
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 256,
    nullable: false
  })
  word: string;

  @Column({
    length: 256,
    default: ''
  })
  correctLetters: string;

  @Column({
    length: 256,
    default: ''
  })
  wrongLetters: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  isWin: boolean;

  @Column({
    type: 'boolean',
    default: false,
  })
  completed: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
