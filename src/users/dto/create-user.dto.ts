import { Type } from "class-transformer"
import { IsEmail, IsNumber, IsString } from "class-validator"

export class CreateUserDto {
    
    @IsString()
    nombre: string

    @IsEmail()
    email: string

    @Type(() => Number)
    @IsNumber()
    puntos: number

    @IsString()
    ciudad: string
}
