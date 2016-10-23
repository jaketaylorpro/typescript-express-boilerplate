export interface IViewModel {
    Message: string;
}
export class ViewModel implements IViewModel {
    Message: string;
    constructor(message: string) {
        this.Message = message;
    }
}