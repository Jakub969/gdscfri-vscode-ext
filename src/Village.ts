export class Village {
    name: string;
    population: number;
    constructor(name: string, population: number) {
        this.name = name;
        this.population = population;
    }
    printVillage() {
        console.log(`Village ${this.name} has population of ${this.population}`);
    }
}