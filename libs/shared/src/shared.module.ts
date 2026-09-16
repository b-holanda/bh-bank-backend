import { Module } from '@nestjs/common';
import { DomainModule } from './domain/domain.module.js';
import { ApplicationModule } from './application/application.module.js';

@Module({
  providers: [],
  exports: [],
  imports: [DomainModule, ApplicationModule],
})
export class SharedModule {}
