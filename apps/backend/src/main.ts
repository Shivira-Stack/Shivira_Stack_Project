import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS
  app.enableCors({
    origin: (origin, callback) => {
      console.log('Incoming Origin:', origin);

      if (!origin) return callback(null, true);

      const allowedOrigins = [
        process.env.FRONTEND_URL,
        process.env.FRONTEND_URL_1,
        process.env.FRONTEND_URL_2,
        process.env.FRONTEND_URL_3,
      ].filter(Boolean);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log('Blocked Origin:', origin);
      callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  });

  app.use((req, res, next) => {
    console.log(
      `[${req.method}] ${req.originalUrl} - Origin: ${req.headers.origin || 'No Origin'}`,
    );
    next();
  });

  // Request validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const port = process.env.PORT || 5000;

  await app.listen(port, '0.0.0.0');

  console.log(`🚀 Server running on port http://localhost:${port}`);
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Project:', process.env.PROJECT_NAME);
  console.log('Website:', process.env.FRONTEND_URL);
  console.log('User Panel:', process.env.FRONTEND_URL_1);
  console.log('Admin Panel:', process.env.FRONTEND_URL_2);
}

bootstrap();