import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Occurrence, Prisma } from '@prisma/client';

@Injectable()
export class OccurrenceService {
  constructor(private prisma: PrismaService) {}

  async occurrence(
    occurrenceWhereUniqueInput: Prisma.OccurrenceWhereUniqueInput,
  ): Promise<Occurrence | null> {
    return this.prisma.occurrence.findUnique({
      where: occurrenceWhereUniqueInput,
    });
  }

  async occurrences(params: {
    skip?: number;
    take?: number;
    where?: Prisma.OccurrenceWhereInput;
    orderBy?: Prisma.OccurrenceOrderByWithRelationInput;
  }): Promise<Occurrence[]> {
    const { skip = 0, take = 299, where, orderBy } = params;

    return this.prisma.occurrence.findMany({
      skip,
      take,
      where,
      orderBy,
    });
  }

  async createOccurrence(
    data: Prisma.OccurrenceCreateInput,
  ): Promise<Occurrence> {
    return this.prisma.occurrence.create({
      data,
    });
  }

  async deleteOccurrence(
    where: Prisma.OccurrenceWhereUniqueInput,
  ): Promise<Occurrence> {
    return this.prisma.occurrence.delete({
      where,
    });
  }
}
