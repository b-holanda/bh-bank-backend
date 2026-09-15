import { Module } from '@nestjs/common';
import { MsAuthController } from './ms-auth.controller.js';
import { MsAuthService } from './ms-auth.service.js';

@Module({
  imports: [],
  controllers: [MsAuthController],
  providers: [MsAuthService],
})
export class MsAuthModule {}
