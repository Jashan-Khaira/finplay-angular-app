export class TabModel {
    id: string = '';
    label: string = '';
    disabled: boolean = false;
    route: string = '';
    constructor(id: string, label: string, disabled: boolean, route: string) {
        this.id = id;
        this.label = label;
        this.disabled = disabled;
        this.route = route;
    }
}