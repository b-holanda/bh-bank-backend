import { Module } from '@nestjs/common';
import { DomainModule } from './domain/domain.module.js';

@Module({
  providers: [],
  exports: [],
  imports: [DomainModule],
})
export class SharedModule {}
