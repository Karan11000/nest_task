import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    teamName:string;
}
