import type { PetDefinition } from './types';
export const pets: PetDefinition[] = [
 { id: 'dog', name: 'Dog', care: 'Make time for daily exercise, enrichment, and fresh water.', breeds: [{name:'German Shepherd',trivia:'German Shepherds were originally bred for herding sheep.'},{name:'Shih Tzu',trivia:'The name Shih Tzu means little lion.'},{name:'Labrador Retriever',trivia:'Labradors have a water-resistant double coat.'},{name:'Golden Retriever',trivia:'Golden Retrievers were developed as retrieving dogs.'},{name:'Poodle',trivia:'Poodles come in standard, miniature, and toy sizes.'}] },
 { id:'cat',name:'Cat',care:'Provide scratching posts, climbing spaces, and daily interactive play.',breeds:[{name:'Siamese',trivia:'Siamese cats are known for their distinctive pointed coats.'},{name:'Persian',trivia:'Persians have long coats that require regular grooming.'},{name:'Maine Coon',trivia:'Maine Coons are known for their large size and tufted ears.'}] },
 { id:'goldfish',name:'Goldfish',care:'Choose a spacious, filtered aquarium with stable water quality.',breeds:[{name:'Common Goldfish',trivia:'Goldfish can live for many years in a suitable aquarium.'}] },
 { id:'budgie',name:'Budgie',care:'Offer social interaction, safe toys, and a varied diet.',breeds:[{name:'American Budgie',trivia:'Budgies are small parrots native to Australia.'}] },
 { id:'hamster',name:'Hamster',care:'Provide deep bedding, an appropriate exercise wheel, and hiding places.',breeds:[{name:'Syrian Hamster',trivia:'Adult Syrian hamsters are solitary animals.'}] },
 { id:'rabbit',name:'Rabbit',care:'Offer abundant hay, room to move, and safe chewing materials.',breeds:[{name:'Holland Lop',trivia:'Holland Lops are recognized by their drooping ears.'}] },
 { id:'turtle',name:'Turtle',care:'Match lighting, temperature, and habitat to the turtle’s species.',breeds:[{name:'Red-eared Slider',trivia:'Red-eared sliders have distinctive markings behind their eyes.'}] },
 { id:'gecko',name:'Leopard gecko',care:'Provide a suitable temperature gradient and secure hiding places.',breeds:[{name:'Normal / Wild Type',trivia:'Wild-type leopard geckos have dark spots on a yellow background.'}] },
 { id:'mouse',name:'Fancy mouse',care:'Provide nesting material, enrichment, and species-appropriate housing.',breeds:[{name:'Standard Fancy',trivia:'Fancy mice come in many coat colors and patterns.'}] },
 { id:'cockatiel',name:'Cockatiel',care:'Provide a spacious enclosure, enrichment, and daily social time.',breeds:[{name:'Grey Cockatiel',trivia:'Grey cockatiels have distinctive orange cheek patches.'}] },
];
