export  type Animal= "dog"|"cat"|"bird"|"reptile"|"rabbit";

export interface pet{
     id: number;
     name: string;
     animal: Animal;
     description: string;
     breed: string;
    image: string[];
    city: string;
    state: string;

}
export interface PetAPIResponse{
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: boolean;
    pets: pet[];
}
export interface BreedListAPIResponse{
    animal: Animal;
    breeds: string[];
}