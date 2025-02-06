import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // Define uma lista com as propriedades que são permitidas - DTO
            forbidNonWhitelisted: true, // Bloqueia a requisição caso tenha propriedades não permitidas - DTO
            transform: true, // Transforma os dados de uma requisção conforme o DTO.
        }),
    );
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
