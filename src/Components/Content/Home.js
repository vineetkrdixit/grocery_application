import React from "react";
import FeedbackForm from "./FeedbackForm";
import ProductBanner from "./ProductBanner";
import ProductFilter from "./ProductFilter";
import ProductsRange from "./ProductsRange";

export default function Home() {
  const ProductData = [
    {
      productId: 1,
      productTitle: "Farm Eggs - Regular, Medium, Pack of 6",
      productDescription:
        "Eggs are one of the common food items in most of the households. From breakfast to dinner, eggs are indulged in various ways. Poached, boiled, fried; we all have our own favourite choices.",
      productPrice: 36,
      category: "Fruits & Vegitables",
      imgSrc: "/Images/egg.jpg",
    },
    {
      productId: 2,
      productTitle: "Onion 1kg",
      productDescription:
        "Onion can fill your kitchen with a thick spicy aroma. It is a common base vegetable in most Indian dishes, thanks to the wonderful flavor that it adds to any dish.   ",
      productPrice: 20,
      category: "Fruits & Vegitables",
      imgSrc: "/Images/onion.jpg",
    },
    {
      productId: 3,
      productTitle: "Extra Virgin Olive Oil, 1 L Pet Bottle",
      productDescription:
        "Extra Virgin olive oil is extracted by cold pressing exquisite Spanish olives. Olive oil has strong anti-inflammatory properties, which helps in preventing heart stroke, protective against heart disease.",
      productPrice: 728,
      category: "Fruits & Vegitables",
      imgSrc: "/Images/oliveoil.jpg",
    },
    {
      productId: 4,
      productTitle: "Fresho Cauliflower, 1 pc (approx. 400 to 600 g)",
      productDescription:
        "Cauliflowers are rich in B complex vitamins, potassium and manganese.They protect from the risk of heart diseases and brain disorders. It also contains cancer fighting nutrient called sulforaphane",
      productPrice: 27,
      category: "Fruits & Vegitables",
      imgSrc: "/Images/cauliflower.jpg",
    },
    {
      productId: 5,
      productTitle: "Banganapalli Mango, 1 kg",
      productDescription:
        "Banganpalli are sourced from Andhra Pradesh and known for their unique sweet and rich taste. Mangos are known to contain more than 20 different vitamins and minerals, which make them a superfood.",
      productPrice: 100,
      category: "Fruits & Vegitables",
      imgSrc: "/Images/mango.jpg",
    },
    {
      productId: 6,
      productTitle: "Watermelon - Medium, 1 pc 2.8 - 4 kg",
      productDescription:
        "Watermelons have excellent hydrating properties with 90% water content. Can be eaten fresh- scoop them up with ice creams or in fruit salads.Spice up your watermelon with a tinge of mint leaves.",
      productPrice: 55,
      category: "Fruits & Vegitables",
      imgSrc: "/Images/watermelon.jpg",
    },
    {
      productId: 7,
      productTitle: "Mushrooms - Button, 1 pack (Approx .180g - 200 g)",
      productDescription:
        "Button mushrooms boost our immune system. They have anti-cancer benefits. They contain good amounts of riboflavin which is necessary to maintain oral health.",
      productPrice: 45,
      category: "Fruits & Vegitables",
      imgSrc: "/Images/mushroom.jpg",
    },
    {
      productId: 8,
      productTitle: "Capsicum - Green, 1 kg",
      productDescription:
        "Green capsicums have powerful antioxidants and anti-inflammatory properties. Rich in Vitamin A, B complex, C and phytonutrients. Relieves pain of bone disorders and has the capacity to relax the repirartory passage.",
      productPrice: 60,
      category: "Fruits & Vegitables",
      imgSrc: "/Images/capsicum.jpg",
    },
    {
      productId: 9,
      productTitle: "Pomegranate, 4 pcs (approx. 800 - 880 g)",
      productDescription:
        "Pomegranate is a rich supplier of soluble and insoluble dietary fibers, vitamin K, C, minerals and B-complex vitamins such as B5, B6. Pomegranate juice lowers bad cholesterol and raises good cholesterol.Reduces the risk of heart stoke.",
      productPrice: 215,
      category: "Fruits & Vegitables",
      imgSrc: "/Images/pomegranate.jpg",
    },
    {
      productId: 10,
      productTitle: "Coriander Leaves, 250 g",
      productDescription:
        "Coriander leaves fight food poisoning and lower blood sugar levels.",
      productPrice: 20,
      category: "Fruits & Vegitables",
      imgSrc: "/Images/coriander.jpg",
    },
    {
      productId: 11,
      productTitle: "Coca Cola Soft Drink, 3x750 ml Multipack",
      productDescription:
        "Coca-Cola is the most popular and biggest-selling soft drink in history, as well as the best-known brand in the world. Quench your thirst with this amazing drink. Best when shared with loved ones!",
      productPrice: 100,
      category: "Drinks & Bevereges",
      imgSrc: "/Images/coke.jpg",
    },
    {
      productId: 12,
      productTitle: "Maaza Mango Drink, 1.5 l Pet Bottle",
      productDescription:
        "Synonymous with the very spirit of mangoes, Maaza lets you enjoy the moments of carefree indulgence. This mango drink is loved for its taste, colour, thickness and wholesome properties.",
      productPrice: 70,
      category: "Drinks & Bevereges",
      imgSrc: "/Images/maaza.jpg",
    },
    {
      productId: 13,
      productTitle: "Nescafe Gold Blend Instant Coffee Powder",
      productDescription:
        "NESCAFE brings you the premium choice for your special cup of coffee every day, rising above all to the highest standards set by coffee connoisseurs. This premium imported roast is artfully crafted with Arabica grounded 10 times finer to achieve a quality coffee experience that will awaken your senses.",
      productPrice: 400,
      category: "Drinks & Bevereges",
      imgSrc: "/Images/coffee.jpg",
    },
    {
      productId: 14,
      productTitle: "Appy Fizz Apple Juice",
      productDescription:
        "Appy Fizz sparkling Apple juice contains carbonated and vitamin A.",
      productPrice: 20,
      category: "Drinks & Bevereges",
      imgSrc: "/Images/appy.jpg",
    },
    {
      productId: 15,
      productTitle: "Glucon-D",
      productDescription:
        "Glucon-D Instant Energy Health Drink contains 99.4% of the glucose that helps replenish body glucose and fills you with the energy required to stay active. ",
      productPrice: 118,
      category: "Drinks & Bevereges",
      imgSrc: "/Images/glucond.jpg",
    },
    {
      productId: 16,
      productTitle: "Toned Milk, 500 ml Pouch",
      productDescription:
        "Toned Milk UHT processed milk with Min 1.5% fat and Min 9.0% SNF fortified with vitamins A and D. Suitable for preparing tea/coffee, milk shakes and milk delights for people leading a fitness conscious lifestyle.",
      productPrice: 30,
      category: "Dairy Products",
      imgSrc: "/Images/milk.jpg",
    },
    {
      productId: 17,
      productTitle: "Paneer, 200 g Pouch",
      productDescription: "Rich in Proteins.",
      productPrice: 82,
      category: "Dairy Products",
      imgSrc: "/Images/paneer.jpg",
    },
    {
      productId: 18,
      productTitle: "Curd",
      productDescription:
        "dahi 100% natural the taste of real dhai provides calcium good for strong bones and teeth, supply proteins help maintain active life and growth.",
      productPrice: 55,
      category: "Dairy Products",
      imgSrc: "/Images/curd.jpg",
    },
    {
      productId: 19,
      productTitle: "Cheese Slices",
      productDescription:
        "Cheese can enhance the taste of any dish, whether you consume it whole or melt it in your food.",
      productPrice: 70,
      category: "Dairy Products",
      imgSrc: "/Images/cheese.jpg",
    },
    {
      productId: 20,
      productTitle: "Ghee",
      productDescription:
        "Ghee can be consumed for improved digestion and also good supply of energy and offers energy to human body.",
      productPrice: 155,
      category: "Dairy Products",
      imgSrc: "/Images/ghee.jpg",
    },
  ];
  return (
    <>
      <ProductBanner />
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <ProductFilter />
          </div>
          <div className="col-sm-9">
            <ProductsRange ProductData={ProductData} />
          </div>
        </div>
      </div>
      <FeedbackForm />
    </>
  );
}
