import { Injectable } from '@nestjs/common';
import { Travel } from './interfaces/travel.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TravelsService {
    private readonly travels: Travel[];

    constructor() {
        const jsonData = fs.readFileSync(path.join(__dirname, '../../data/travels.json'), 'utf8');
        this.travels = JSON.parse(jsonData);
    }

    findAll(): Travel[] {
        return this.travels;
    }
}