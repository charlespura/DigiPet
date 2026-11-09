export type Tab = 'generator' | 'scanner' | 'gallery' | 'help';
export type PetType = 'dog' | 'cat' | 'goldfish' | 'budgie' | 'hamster' | 'rabbit' | 'turtle' | 'gecko' | 'mouse' | 'cockatiel';
export interface Breed { name: string; trivia: string }
export interface PetDefinition { id: PetType; name: string; care: string; breeds: Breed[] }
export interface PetFormData { petName: string; owner: string; phone: string; chip: string }
export interface PetRecord extends PetFormData { id: string; petType: PetType; breed: string; trivia: string; timestamp: string; qrUrl: string }
