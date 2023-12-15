import {db} from '../const/firebase'
import {collection, getDocs} from "firebase/firestore";

class CarMakerService {
    GetCarMakerCollection = async () => {
       return await getDocs(collection(db, "VehicleMake"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                if (newData && newData.length) return newData
                return []
            })
    }
}

export default CarMakerService