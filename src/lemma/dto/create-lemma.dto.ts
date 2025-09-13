import { PartOfSpeech } from "../enum/part-of-speech.enum";

export class CreateLemmaDto {
    lemma: string;
    partOfSpeech: PartOfSpeech;
}
