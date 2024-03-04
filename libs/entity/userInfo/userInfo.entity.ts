import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { User } from '../src/user/user.entity';

@Index('user_info_FK', ['userId'], {})
@Entity('user_info', { schema: 'learn' })
export class UserInfo {
  @Column('varchar', { name: 'email', comment: '유저 이메일', length: 100 })
  email: string;

  @Column('varchar', { name: 'password', comment: '비밀번호', length: 100 })
  password: string;

  @Column('int', { name: 'user_id', comment: 'mapping key' })
  userId: number;

  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @ManyToOne(() => User, user => user.userInfos, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION'
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
