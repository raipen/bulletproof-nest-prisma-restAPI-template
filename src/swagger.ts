import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {NestFastifyApplication} from '@nestjs/platform-fastify';

function swagger(app:NestFastifyApplication){
  const config = new DocumentBuilder()
    .setTitle('NestJS prisma example')
    .setDescription('The fastify prisma nest rest api description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

export { swagger };
