const iceCreamList = [
  {
    id: 1,
    name: "Strawberry Split",
    ingredients:
      "Strawberry, vanilla extract, marshmallow, fudge, chocolate toppings, whipped cream, nuts.",
    description:
      "Strawberry Split is a delightful and indulgent dessert featuring a trio of chocolate, vanilla, and strawberry ice cream. This treat is topped with a generous serving of marshmallow, rich fudge, and decadent chocolate toppings, creating a perfect balance of flavors. The dessert is finished with a dollop of whipped cream and a sprinkle of crunchy nuts, adding texture and extra sweetness. A perfect choice for anyone looking for a creamy, satisfying, and visually stunning treat!",
    price: 8.5,
    imageUrl: "https://assets.nicepagecdn.com/d2cc3eaa/89212/images/w-min.jpg",
    servingSize: "1 serving (200g)",
    kilocalories: "350",
  },
  {
    id: 2,
    name: "Chocolate Ice Cream",
    ingredients:
      "Chocolate, milk, heavy cream, sugar, egg yolks, cocoa powder, vanilla extract",
    description:
      "Chocolate Ice Cream is a rich and indulgent dessert featuring a slice of creamy coffee ice cream resting on a crunchy Oreo cookie crust. Topped with smooth fudge and a generous dollop of whipped cream, this treat combines the perfect balance of deep coffee flavor, sweet chocolate richness, and satisfying texture. It’s a decadent choice for anyone craving a sweet and flavorful experience!",
    price: 9,
    imageUrl: "https://assets.nicepagecdn.com/d2cc3eaa/89212/images/s-min.jpg",
    servingSize: "1 serving (200g)",
    kilocalories: "400",
  },
  {
    id: 3,
    name: "Sundae Ice Cream",
    ingredients:
      "Hot fudge, caramel sauce, whipped cream, chopped nuts, maraschino cherry, sprinkles",
    description:
      "Sundae Ice Cream is a classic and indulgent dessert featuring a scoop (or more) of rich, creamy ice cream, topped with your choice of decadent sauces like hot fudge or caramel. This delightful treat is finished with a generous swirl of whipped cream, crunchy nuts, and a cherry on top for that extra touch of sweetness. You can customize your sundae with sprinkles, chocolate chips, or even fresh fruit, creating a perfect balance of creamy, crunchy, and sweet textures in every bite. It’s the ultimate dessert for anyone looking to indulge in a fun, customizable treat!",
    price: 7.5,
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/11/23/20/04/coffee-4648041_960_720.jpg",
    servingSize: "1 serving (150g)",
    kilocalories: "280",
  },
  {
    id: 4,
    name: "Bowl Ice Cream",
    ingredients:
      "Marshmallows, vanilla, milk, strawberry, cherry, raspberry, mint, chocolate sauce",
    description:
      "Bowl Ice Cream is a customizable, indulgent treat served in a bowl, perfect for those who love to mix and match their favorite ice cream flavors and toppings. It features a generous scoop (or multiple scoops) of rich, creamy ice cream, paired with a variety of toppings like chocolate chips, sprinkles, crushed cookies, fresh fruit, and sweet syrups. You can also add whipped cream and a sprinkle of chopped nuts for extra crunch. This dessert offers the freedom to create your perfect combination of flavors and textures, making it an ideal choice for anyone looking to satisfy their sweet tooth in a fun and personalized way!",
    price: 8,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/12/26/16/09/bowl-1932375_960_720.jpg",
    servingSize: "1 serving (200g)",
    kilocalories: "350",
  },
  {
    id: 5,
    name: "Gelato Ice Cream",
    ingredients:
      "Milk, heavy cream, sugar, egg yolks, vanilla extract, strawberry, raspberry, cherry",
    description:
      "Gelato Ice Cream is a luxurious, Italian-style frozen dessert known for its rich, creamy texture and intense flavors. Made with a higher ratio of milk to cream compared to traditional ice cream, gelato has a denser and smoother consistency. It is typically churned at a slower speed, incorporating less air, which gives it a velvety mouthfeel. Gelato comes in a variety of flavors, from classic chocolate and vanilla to fruit-based varieties like strawberry and lemon, and indulgent options like pistachio or hazelnut. Whether you prefer the richness of nut-based flavors or the bright, refreshing taste of fruit, gelato offers a satisfying and authentic taste of Italy in every bite.",
    price: 10,
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/08/16/22/59/ice-cream-3611698_960_720.jpg",
    servingSize: "1 serving (200g)",
    kilocalories: "350",
  },
  {
    id: 6,
    name: "Waffle Candy Ice Cream",
    ingredients:
      "Milk, heavy cream, sugar, egg yolks, vanilla extract, waffle crumbs, chocolate syrup",
    description:
      "Waffle Candy Ice Cream is a playful and delicious frozen treat that combines creamy, smooth ice cream with the delightful crunch of crispy waffle bits and sweet candy pieces. The rich ice cream base is swirled with chunks of crunchy waffles, adding a satisfying texture, while colorful candy bits like chocolate chips, caramel chunks, or gummies bring a burst of sweetness. This indulgent treat offers a perfect balance of creamy, crunchy, and sweet, making it a fun and irresistible choice for anyone with a sweet tooth!",
    price: 9.5,
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/11/07/13/05/waffle-4608843_1280.jpg",
    servingSize: "1 serving (125g)",
    kilocalories: "300",
  },
  {
    id: 7,
    name: "Dessert Ice Cream",
    ingredients:
      "Milk, heavy cream, sugar, egg yolks, vanilla extract, nuts, candy pieces, chocolate chips",
    description:
      "Dessert Ice Cream is a decadent and customizable frozen treat, perfect for satisfying your sweet tooth. It features a rich, creamy ice cream base, which can be flavored in a variety of ways, from classic vanilla to indulgent chocolate or fruity flavors. The ice cream is then topped with an array of delightful extras such as fresh fruit, chocolate or caramel sauces, crunchy nuts, whipped cream, and sprinkles. Whether you prefer it simple or loaded with toppings, Dessert Ice Cream offers a perfect combination of creamy, sweet, and crunchy textures, making it an irresistible choice for any dessert lover.",
    price: 6.5,
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/02/14/14/19/ice-cream-4848501_1280.jpg",
    servingSize: "1 serving (150g)",
    kilocalories: "250",
  },
  {
    id: 8,
    name: "Sweet Ice Cream",
    ingredients:
      "Milk, heavy cream, sugar, egg yolks, vanilla extract, honey, fruit purees, chocolate chips",
    description:
      "Sweet Ice Cream is a delightful and creamy treat that brings the perfect balance of sweetness and smooth texture in every bite. Made with a rich ice cream base of milk, cream, and sugar, it offers a luscious, indulgent experience. The flavor can vary, ranging from classic vanilla to fruity or chocolate variations, with optional add-ins like nuts or sweet swirls of caramel and chocolate. Topped with whipped cream, sprinkles, or candy pieces, Sweet Ice Cream is a versatile and satisfying dessert that’s perfect for anyone craving a sweet, refreshing indulgence.",
    price: 7.5,
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/06/13/22/59/ice-cream-8828624_960_720.jpg",
    servingSize: "1 serving (150g)",
    kilocalories: "230",
  },
  {
    id: 9,
    name: "Ice Cake with fruits",
    ingredients:
      "Vanilla, chocolate, strawberry, raspberry, milk, heavy cream, sugar, egg yolks",
    description:
      "Ice Cake with Fruits is a visually stunning and refreshing dessert that combines the creamy richness of ice cream with the vibrant freshness of seasonal fruits. This dessert typically features layers of smooth ice cream, such as vanilla, chocolate, or fruity flavors, alternating with juicy, fresh fruits like strawberries, mangoes, and kiwi. The fruity layers provide a burst of natural sweetness and tang, while the ice cream adds indulgent creaminess. Often served with a light cake base or crumbly crust, Ice Cake with Fruits offers a delightful balance of textures—smooth, crunchy, and refreshing. It’s the perfect treat for hot summer days, special occasions, or any time you want to enjoy a refreshing yet indulgent dessert.",
    price: 13,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/23/21/01/bake-1003685_1280.jpg",
    servingSize: "1 slice (200g)",
    kilocalories: "400",
  },
  {
    id: 10,
    name: "Chocolate Ice Cake",
    ingredients:
      "Chocolate, flour, milk, sugar, eggs, cocoa powder, baking powder butter, oil, vanilla extract",
    description:
      "Chocolate Ice Cake is a rich and indulgent dessert that combines the best of both worlds: decadent chocolate cake and creamy chocolate ice cream. This layered treat typically features moist, soft chocolate cake at the base, topped with smooth, velvety chocolate ice cream. The layers are often enveloped in a glossy chocolate ganache or syrup, adding an extra layer of sweetness and texture. With its perfect balance of creamy, rich ice cream and airy, tender cake, Chocolate Ice Cake is a delightful choice for chocolate lovers, offering a satisfying combination of flavors and textures in every bite. It’s an ideal dessert for special occasions, celebrations, or any time you’re craving something truly indulgent.",
    price: 12,
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/07/14/13/33/cake-4337127_960_720.jpg",
    servingSize: "1 slice (200g)",
    kilocalories: "450",
  },
  {
    id: 11,
    name: "Vanilla Chocolate",
    ingredients:
      "Milk, heavy cream, sugar, eggs yolks, vanilla extract, vanilla bean, cocoa powder, fruit syrup",
    description:
      "Vanilla Chocolate Ice Cream is a delightful fusion of two classic flavors: smooth, creamy vanilla and rich, velvety chocolate. This combination offers the perfect balance of sweetness, with the mellow, creamy taste of vanilla complementing the deep, indulgent flavor of chocolate. The ice cream base is typically made from milk, cream, sugar, and egg yolks, giving it a silky texture. Whether swirled together or presented as distinct layers, Vanilla Chocolate Ice Cream offers a harmonious blend of flavors that is both comforting and satisfying. It’s a perfect treat for those who love the timeless pairing of vanilla and chocolate in one delicious scoop.",
    price: 8,
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/04/21/15/40/ai-generated-8710905_960_720.png",
    servingSize: "1 serving (125g)",
    kilocalories: "300",
  },
  {
    id: 12,
    name: "Pistachio Ice Cream",
    ingredients:
      "Chopped pistachios, milk, heavy cream, sugar, eggs yolks, vanilla extract, pistachio extract",
    description:
      "Pistachio Ice Cream is a creamy, indulgent frozen dessert that features the rich, nutty flavor of pistachios in every bite. Made with a smooth ice cream base of milk, cream, and sugar, it’s infused with ground pistachios or pistachio paste, giving it a subtle, earthy sweetness. The ice cream has a velvety texture with hints of natural green color, making it both visually appealing and delicious. Some variations include chopped pistachios mixed throughout, adding a satisfying crunch. Pistachio Ice Cream is the perfect treat for those who enjoy nutty, slightly sweet flavors in a rich and creamy dessert.",
    price: 12,
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/02/19/16/27/ice-cream-4862623_1280.jpg",
    servingSize: "1/2 cup (125g)",
    kilocalories: "275",
  },
  {
    id: 13,
    name: "Strawberry Ice Cream",
    ingredients:
      "Chopped strawberries, milk, heavy cream, sugar, eggs yolks, strawberry extract, lemon juice",
    description:
      "Strawberry Ice Cream is a sweet and refreshing frozen dessert made with the natural flavors of ripe strawberries. The creamy base is crafted from milk, cream, and sugar, and is infused with strawberry puree or fresh strawberry pieces, giving it a vibrant pink color and a burst of fruity sweetness. This smooth, velvety ice cream offers a perfect balance of creamy richness and tangy berry flavor, making it a favorite for those who love light, refreshing treats. Whether served on its own or paired with other desserts, Strawberry Ice Cream is a classic, timeless indulgence that brings the taste of summer to any occasion. The creamy base is crafted from milk, cream, and sugar, and is infused with strawberry puree or fresh strawberry pieces, giving it a vibrant pink color and a burst of fruity sweetness. This smooth, velvety ice cream offers a perfect balance of creamy richness and tangy berry flavor, making it a favorite for those who love light, refreshing treats. Whether served on its own or paired with other desserts, Strawberry Ice Cream is a classic, timeless indulgence that brings the taste of summer to any occasion.",
    price: 6.5,
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/07/02/12/07/ai-generated-8867608_1280.png",
    servingSize: "1 serving (100g)",
    kilocalories: "250",
  },
  {
    id: 14,
    name: "Flavor Ice Cream",
    ingredients:
      "Chocolate or vanilla puree, milk, sugar, egg yolks, chocolate syrup, nuts, vanilla extract, chocolate chips",
    price: 7.5,
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/08/12/13/45/ice-cream-4401300_960_720.jpg",
    servingSize: "1 serving (100g)",
    kilocalories: "250",
  },
];
export default iceCreamList;
