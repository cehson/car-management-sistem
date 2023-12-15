import {observable, configure, action, runInAction, makeObservable} from "mobx"
import CarMakerService from '../services/CarMakerService'

configure({enforceActions: 'observed'})

class Store {
    VehicleMakeCollection = []

    constructor() {
        makeObservable(this, {
            VehicleMakeCollection: observable,
            getCarMakers: action
        })
        this.CarMakerService = new CarMakerService()
    }

    getCarMakers = async () => {
        try {
            const data = await this.CarMakerService.GetCarMakerCollection()
            if (data) {
                runInAction(() => {
                    this.VehicleMakeCollection = data
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

const store = new Store()
export default store

