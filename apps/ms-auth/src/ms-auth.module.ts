import { Module } from '@nestjs/common';
import { DomainModule } from './domain/domain.module.js';
import { ApplicationModule } from './application/application.module.js';

@Module({
  imports: [DomainModule, ApplicationModule],
  controllers: [],
  providers: [],
})
export class MsAuthModule {}
