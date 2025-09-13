import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class CreateLanguageDto {
    @ApiProperty({
        example: 'ta',
        description: 'Language code (2–8 characters, must be unique)',
    })
    @IsString()
    @Length(2, 8)
    code: string;

    @ApiProperty({
        example: 'Tamil',
        description: 'Display name of the language',
    })
    @IsString()
    @Length(1, 50)
    name: string;
}