import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "./Post";


@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column({length: 100, nullable: false})
    firstName: string
    @Column({length: 100, nullable: false})
    lastName: string
    @Column({length: 100, nullable: false})
    email: string

    @OneToMany(() => Post, post => post.user)
    posts: Post[]

    constructor(id:number, firstName: string, lastName: string, email: string,posts: Post[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.posts=posts
    }
}