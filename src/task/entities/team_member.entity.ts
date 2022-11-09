import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class TeamMember {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    team:string;

    @Column()
    employeId:string;
    
}
