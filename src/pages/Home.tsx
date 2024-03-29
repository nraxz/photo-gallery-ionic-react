import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  IonAlert,
  useIonAlert,
} from "@ionic/react";
import GetAllProducts from "../data/api";
import { Currency } from "../enums/Currency";

const Home: React.FC = () => {
  const { data, loading, error } = GetAllProducts();
  const [presentAlert] = useIonAlert();

  const currency: Currency = Currency.GBP;

  const handleAddToCartClick = (productName: string) => {
    console.log(productName);
    presentAlert({
      header: "Product Added",
      message: `${productName} has been added to your cart.`,
      buttons: ["OK"],
    });
  };

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = (
      <p className="text-center my-5 mx-20 bg-red-700 text-gray-300">
        {error.message === "The API is offline or there is a network error."
          ? "Cannot connect to the API. Please check your network connection or try again later."
          : "An error occurred while loading products (probably offline): " +
            error.message}
      </p>
    );
  } else if (data && data.length > 0) {
    content = (
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">All Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          {data.map((product) => (
            <div
              key={product.productId}
              className="bg-slate-300 rounded-lg shadow-md p-4 flex flex-col"
            >
              <div className="flex-1">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="w-full h-32 flex items-center justify-center rounded-t-lg bg-slate-200">
                    <span>No pic</span>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    {product.productName}
                  </h3>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              </div>
              <div className="border-t p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-bold">
                    {product.price} {currency}
                  </span>
                  <span
                    className={`inline-block px-3 py-1 text-sm ${
                      parseInt(product.quantity, 10) > 0
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    } rounded-full`}
                  >
                    {parseInt(product.quantity, 10) > 0
                      ? `In Stock (${product.quantity})`
                      : "Out of Stock"}
                  </span>
                </div>
                {parseInt(product.quantity, 10) > 0 && (
                  <button
                    className="mt-3 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleAddToCartClick(product.productName)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    content = <p>No products available.</p>;
  }

  return (
    <IonPage className="">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Naresh Shahi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="contentContainer">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Shop</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonText>{content}</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Home;
