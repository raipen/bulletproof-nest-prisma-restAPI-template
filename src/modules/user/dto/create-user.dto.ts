import { IsString } from 'nestjs-swagger-dto';
export class CreateUserDto {
    @IsString({
        minLength: 2,
        maxLength: 10,
    })
    name: string;
    email: string;
    password: string;
}
