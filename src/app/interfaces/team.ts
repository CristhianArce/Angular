import { Player } from './player';
import { Countries } from './player';

export interface Team{
    $key?: string;
    name: string;
    country: string;
    players: Player[];
}