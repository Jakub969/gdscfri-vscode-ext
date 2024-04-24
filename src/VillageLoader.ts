import { Village } from './Village';
import * as fs from 'fs';

export class VillageLoader {

    pathToCSV: string;

    constructor(pathToCSV: string) {
        this.pathToCSV = pathToCSV;
    }
    loadVillage() : Village[] {
        const data = fs.readFileSync(this.pathToCSV, 'utf8');

        const lines = data.split('\n');

        const villages: Village[] = [];

        for (const line of lines) {
            const [name, population] = line.split(',');
            villages.push(new Village(name, parseInt(population)));
        }
    }
}