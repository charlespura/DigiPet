import { Bird, Cat, Dog, Fish, Mouse, PawPrint, Rabbit, Turtle, type LucideIcon } from 'lucide-react';
import type { PetType } from '../types';
const icons: Record<PetType, LucideIcon> = { dog: Dog, cat: Cat, goldfish: Fish, budgie: Bird, hamster: Mouse, rabbit: Rabbit, turtle: Turtle, gecko: PawPrint, mouse: Mouse, cockatiel: Bird };
export function PetIcon({ type, className = 'h-6 w-6' }: { type: PetType; className?: string }) { const Icon = icons[type]; return <Icon aria-hidden="true" className={className} />; }
