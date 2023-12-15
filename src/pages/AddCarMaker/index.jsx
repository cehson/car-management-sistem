import store from "../../store";
import {observer} from "mobx-react";
import {useEffect} from "react";

function Listing() {
    useEffect(() => {
        store.getCarMakers()
    }, [])
    return (
        <>
            <main>
                <header>
                    <h1 className='text-3xl font-bold'>Add Car Maker</h1>
                </header>
                    <div>
                        <button onClick={store.GetPosts}>
                            ADD item
                        </button>
                    </div>
                <div>
                    <ul>
                        { store.VehicleMakeCollection && store.VehicleMakeCollection.length &&
                            store.VehicleMakeCollection.map((el, index) => (
                                <li key={el.Id}>
                                    {el.Id}: {el.Name}
                                </li>
                            ))
                        }
                        <li>

                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}

const ListingObserver = observer(Listing)
export  default  ListingObserver