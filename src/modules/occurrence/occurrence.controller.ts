import { Occurrence } from '.prisma/client';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { OccurrenceService } from './occurrence.service';

@Controller('/occurrences')
export class OccurrenceController {
  constructor(private readonly occurrenceService: OccurrenceService) {}

  @Get()
  getAllOccurrences(): Promise<Occurrence[]> {
    return this.occurrenceService.occurrences({});
  }

  @Post()
  createOccurrence(@Body() occurrenceData: Occurrence): Promise<Occurrence> {
    return this.occurrenceService.createOccurrence(occurrenceData);
  }
}
