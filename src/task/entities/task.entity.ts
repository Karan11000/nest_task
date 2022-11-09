import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    taskId: string;
    
    @Column()
    taskName:string;
  
    @Column()
    taskDescription:string;

    @Column({nullable:false})
    dueDate:string;

    @Column({default:""})
    assignee:string;

    @Column({default:"pending"})
    status:string;

}
