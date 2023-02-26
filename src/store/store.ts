import { makeAutoObservable } from "mobx";

export default class Store {
    isLoading = false;

    constructor() {
        makeAutoObservable(this);

    }
    setLoading(bool: boolean) {
        this.isLoading = bool;
    }


    async checkStart() {
        this.setLoading(true);
        try {
        } catch (e) {
        } finally {
            this.setLoading(false);
        }
    }
}

