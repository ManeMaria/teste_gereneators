import axios from "axios";

const myDb = async ()=> Array.from({ length: 1000 }, (v, index) => `${index}-cellPhone`);

const PRODUCTS_URL = "http://localhost:3000/prod";
const CART_URL = "http://localhost:4000/cart";

async function* processDbData() {
  const products = await myDb();
  for (const product of products) {
    const { data:  prodInfo} = await axios.get(`${PRODUCTS_URL}?name=${product}`);
    const { data:  carData} = await axios.post(`${CART_URL}`, prodInfo );

    yield carData
  }

}

async function func (){
    for await (const data of processDbData()) {
        const {id, product} = data
        console.log(id, product)
    }
}

func()

