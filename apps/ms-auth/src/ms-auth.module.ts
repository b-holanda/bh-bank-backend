import { Module } from '@nestjs/common';
import { DomainModule } from './domain/domain.module.js';

@Module({
  imports: [DomainModule],
  controllers: [],
  providers: [],
})
export class MsAuthModule {}
