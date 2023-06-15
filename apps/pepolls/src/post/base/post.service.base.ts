/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Post, Comment, User } from "@prisma/client";

export class PostServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PostCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostCountArgs>
  ): Promise<number> {
    return this.prisma.post.count(args);
  }

  async findMany<T extends Prisma.PostFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostFindManyArgs>
  ): Promise<Post[]> {
    return this.prisma.post.findMany(args);
  }
  async findOne<T extends Prisma.PostFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostFindUniqueArgs>
  ): Promise<Post | null> {
    return this.prisma.post.findUnique(args);
  }
  async create<T extends Prisma.PostCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostCreateArgs>
  ): Promise<Post> {
    return this.prisma.post.create<T>(args);
  }
  async update<T extends Prisma.PostUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostUpdateArgs>
  ): Promise<Post> {
    return this.prisma.post.update<T>(args);
  }
  async delete<T extends Prisma.PostDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostDeleteArgs>
  ): Promise<Post> {
    return this.prisma.post.delete(args);
  }

  async findComments(
    parentId: string,
    args: Prisma.CommentFindManyArgs
  ): Promise<Comment[]> {
    return this.prisma.post
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comments(args);
  }

  async getSharingUsers(parentId: string): Promise<User | null> {
    return this.prisma.post
      .findUnique({
        where: { id: parentId },
      })
      .sharingUsers();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.post
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
