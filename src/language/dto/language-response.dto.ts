import { ApiProperty } from '@nestjs/swagger';

export class LanguageResponseDto {
    @ApiProperty({
        example: 1,
        description: 'Unique identifier of the language',
    })
    id: number;

    @ApiProperty({
        example: 'ta',
        description: 'Language code (2–8 characters, unique)',
    })
    code: string;

    @ApiProperty({
        example: 'Tamil',
        description: 'Display name of the language',
    })
    name: string;
}