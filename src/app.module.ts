import { Module } from '@nestjs/common';
import { OccurrenceModule } from './modules/occurrence/ocurrence.module';

@Module({
  imports: [OccurrenceModule],
})
export class AppModule {}
