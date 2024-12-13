import { IsDateString, IsEmail, IsString } from "class-validator";


export class CreateClientDto {
    @IsString()
    "name":string;
    @IsEmail()
    "email":string;
    @IsString()
    "login":string;
    @IsString()
    "password":string;
    @IsDateString()
    "birthday":Date;
}
