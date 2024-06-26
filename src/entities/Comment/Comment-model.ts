
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, BaseEntity } from "typeorm";

import { Issue } from "../issue/Issue-model";
import { User } from "../user/User-model";


@Entity("comments")
export class Comment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "text", nullable: false })
    content!: string;

    @ManyToOne(() => Issue, { nullable: false })
    @JoinColumn({ name: "issue_id" })
    issue!: Issue;

    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({ name: "user_id" })
    user!: User;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updated_at!: Date;
}