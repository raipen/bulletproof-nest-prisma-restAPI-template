import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './common/prisma/prisma.module';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [UserModule, PrismaModule, PostModule],
})
export class AppModule {}
