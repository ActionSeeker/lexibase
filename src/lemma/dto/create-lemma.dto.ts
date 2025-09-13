import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsString, MinLength } from "class-validator";
import { PartOfSpeech } from "../enum/part-of-speech.enum";

export class CreateLemmaDto {
    @ApiProperty({ example: 1, description: 'ID of the language' })
    @IsInt()
    languageId: number;

    @ApiProperty({ example: 'சாப்பிடு', description: 'Base form of the word' })
    @IsString()
    @MinLength(1)
    lemma: string;

    @ApiProperty({
        description: 'Part of speech of the lemma',
        enum: PartOfSpeech,
        example: PartOfSpeech.VERB,
    })
    @IsEnum(PartOfSpeech)
    partOfSpeech: PartOfSpeech;
}
