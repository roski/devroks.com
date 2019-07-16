export interface Post {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    user: any;
    userId: string;
}
