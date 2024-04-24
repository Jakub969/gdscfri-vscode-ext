import * as code from 'vscode'
import {VillageLoader} from './VillageLoader'

export class AusFilterDataCommands {
    
public static async run() {
    code.window.showInformationMessage('AusFilterDataCommands')
    const VillageLoader = new VillageLoader();
    
}
}
