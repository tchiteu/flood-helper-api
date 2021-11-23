import { Module } from '@nestjs/common';
import { OccurrenceController } from './occurrence.controller';
import { OccurrenceService } from './occurrence.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [OccurrenceController],
  providers: [OccurrenceService, PrismaService],
})
export class OccurrenceModule {}
