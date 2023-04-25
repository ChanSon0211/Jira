


export type MemberType = {
    userId: number;
    name: string;
    avatar: string;
}


export interface ProjectType {
    member: MemberType[];
    creator: {
        id: number;
        name: string;
    };
    id: number;
    projectName: string;
    description: string;
    categoryId: number;
    categoryName: string;
    alias: string;
    deleted: boolean;
}