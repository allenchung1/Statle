import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// set up postgreSQL database
// const states = [
//     { name: "Alabama", population: 5157699, size: 52420, gdp: 318080, region: "South", fact: "Montgomery was the birthplace of the Civil Rights Movement, with Rosa Parks' bus protest in 1955", winnerCount: 0 },
//     { name: "Alaska", population: 740133, size: 665384, gdp: 69794, region: "Other", fact: "Alaska has more coastline than all other U.S. states combined", winnerCount: 0 },
//     { name: "Arizona", population: 7582384, size: 113990, gdp: 548806, region: "West", fact: "The Grand Canyon is so massive it creates its own weather, with temperature variations between the rim and the canyon floor", winnerCount: 0 },
//     { name: "Arkansas", population: 3088354, size: 53179, gdp: 186197, region: "South", fact: "Arkansas is the only state in the U.S. where you can find diamonds naturally, at Crater of Diamonds State Park", winnerCount: 0 },
//     { name: "California", population: 39431263, size: 163695, gdp: 4080178, region: "West", fact: "California's Sequoia National Park is home to the world's biggest tree by volume, a sequoia named General Sherman", winnerCount: 0 },
//     { name: "Colorado", population: 5957493, size: 104094, gdp: 550173, region: "West", fact: "The Centennial State is home to the highest paved road in North America (Mount Evans Scenic Byway)", winnerCount: 0 },
//     { name: "Connecticut", population: 3675069, size: 5543, gdp: 363417, region: "Northeast", fact: "The first hamburger in the U.S. was reportedly served at Louis' Lunch in New Haven in 1900", winnerCount: 0 },
//     { name: "Delaware", population: 1051917, size: 2489, gdp: 102401, region: "South", fact: "Delaware is the first state to ratify the U.S. Constitution, earning it the nickname 'The First State'", winnerCount: 0 },
//     { name: "Florida", population: 23372215, size: 65758, gdp: 1695273, region: "South", fact: "Florida is the only place in the world where crocodiles and alligators coexist", winnerCount: 0 },
//     { name: "Georgia", population: 11180878, size: 59425, gdp: 877746, region: "South", fact: "Coca-Cola was invented in Atlanta in 1886", winnerCount: 0 },
//     { name: "Hawaii", population: 1446146, size: 10932, gdp: 114936, region: "Other", fact: "Hawaii's Mauna Kea is the tallest mountain in the world when measured from its base on the ocean floor", winnerCount: 0 },
//     { name: "Idaho", population: 2001619, size: 83569, gdp: 127373, region: "West", fact: "Idaho is home to Hell's Canyon, the deepest gorge in North America, even deeper than the Grand Canyon", winnerCount: 0 },
//     { name: "Illinois", population: 12710158, size: 57914, gdp: 1132143, region: "Midwest", fact: "The first skyscraper was built in Chicago in 1885", winnerCount: 0 },
//     { name: "Indiana", population: 6924275, size: 36420, gdp: 523832, region: "Midwest", fact: "Indianapolis hosts the largest single-day sporting event in the world, the Indianapolis 500", winnerCount: 0 },
//     { name: "Iowa", population: 3241488, size: 56273, gdp: 255962, region: "Midwest", fact: "Iowa has more pigs than people—nearly 22 million pigs compared to 3 million residents", winnerCount: 0 },
//     { name: "Kansas", population: 2970606, size: 82278, gdp: 234119, region: "Midwest", fact: "Kansas is home to Dodge City, the windiest city in the U.S", winnerCount: 0 },
//     { name: "Kentucky", population: 4588372, size: 40408, gdp: 291108, region: "South", fact: "Kentucky is the birthplace of the iconic bourbon whiskey", winnerCount: 0 },
//     { name: "Louisiana", population: 4597740, size: 52378, gdp: 326653, region: "South", fact: "Louisiana is home to Tabasco sauce, produced on Avery Island since the 1860s", winnerCount: 0 },
//     { name: "Maine", population: 1405012, size: 35380, gdp: 97872, region: "Northeast", fact: "Maine produces 90% of the nation's lobster supply", winnerCount: 0 },
//     { name: "Maryland", population: 6263220, size: 12406, gdp: 539232, region: "South", fact: "The U.S. national anthem was written in Baltimore during the War of 1812", winnerCount: 0 },
//     { name: "Massachusetts", population: 7136171, size: 10554, gdp: 776147, region: "Northeast", fact: "Basketball was invented in Springfield, Massachusetts, by James Naismith in 1891", winnerCount: 0 },
//     { name: "Michigan", population: 10140459, size: 96714, gdp: 703277, region: "Midwest", fact: "Michigan is home to the only floating post office in the U.S., the J.W. Westcott II on the Detroit River", winnerCount: 0 },
//     { name: "Minnesota", population: 5793151, size: 86936, gdp: 497631, region: "Midwest", fact: "Minnesota has more than 10,000 lakes, earning its nickname 'Land of 10,000 Lakes'", winnerCount: 0 },
//     { name: "Mississippi", population: 2943045, size: 48432, gdp: 156026, region: "South", fact: "The Teddy Bear was named after President Theodore Roosevelt's bear-hunting trip in Mississippi in 1902", winnerCount: 0 },
//     { name: "Missouri", population: 6245466, size: 69707, gdp: 448165, region: "Midwest", fact: "Missouri's St. Louis Zoo is free to enter and consistently ranked as one of the best zoos in the world", winnerCount: 0 },
//     { name: "Montana", population: 1137233, size: 147040, gdp: 75855, region: "West", fact: "Montana is home to more cattle than people", winnerCount: 0 },
//     { name: "Nebraska", population: 2005465, size: 77348, gdp: 185238, region: "Midwest", fact: "Kool-Aid was invented in Hastings, Nebraska, and is the official state soft drink", winnerCount: 0 },
//     { name: "Nevada", population: 3267467, size: 110572, gdp: 259702, region: "West", fact: "Nevada is the driest state in the U.S., with an average annual rainfall of just 10 inches", winnerCount: 0 },
//     { name: "New Hampshire", population: 1409032, size: 9349, gdp: 120163, region: "Northeast", fact: "New Hampshire was the first state to declare its independence from Great Britain on January 5, 1776", winnerCount: 0 },
//     { name: "New Jersey", population: 9500851, size: 8723, gdp: 841417, region: "Northeast", fact: "The first baseball game was played in Hoboken in 1846", winnerCount: 0 },
//     { name: "New Mexico", population: 2130256, size: 121590, gdp: 140092, region: "West", fact: "New Mexico has more Ph.D. holders per capita than any other state due to its national laboratories and research facilities", winnerCount: 0 },
//     { name: "New York", population: 19867248, size: 54555, gdp: 2284364, region: "Northeast", fact: "Times Square is named after the New York Times newspaper", winnerCount: 0 },
//     { name: "North Carolina", population: 11046024, size: 53819, gdp: 832747, region: "South", fact: "Pepsi was invented in New Bern, North Carolina, in 1893 by Caleb Bradham", winnerCount: 0 },
//     { name: "North Dakota", population: 796568, size: 70698, gdp: 75724, region: "Midwest", fact: "North Dakota is the leading producer of honey in the U.S. — it's home to more than 300,000 honey bee colonies", winnerCount: 0 },
//     { name: "Ohio", population: 11883304, size: 44826, gdp: 922776, region: "Midwest", fact: "Eight U.S. presidents were born here, earning it the nickname 'Mother of Presidents'", winnerCount: 0 },
//     { name: "Oklahoma", population: 4095393, size: 69899, gdp: 264596, region: "South", fact: "The parking meter was invented in Oklahoma City in 1935", winnerCount: 0 },
//     { name: "Oregon", population: 4272371, size: 98379, gdp: 329378, region: "West", fact: "The world's largest mushroom, an underground fungus, spans over 2,400 acres in the Blue Mountains of Oregon", winnerCount: 0 },
//     { name: "Pennsylvania", population: 13078751, size: 46054, gdp: 1017257, region: "Northeast", fact: "The first American flag was sewn by Betsy Ross in Philadelphia in 1776", winnerCount: 0 },
//     { name: "Rhode Island", population: 1112308, size: 1545, gdp: 81911, region: "Northeast", fact: "It's the smallest state but has the longest name: 'The State of Rhode Island and Providence Plantations'", winnerCount: 0 },
//     { name: "South Carolina", population: 5478831, size: 32020, gdp: 348128, region: "South", fact: "The first battle of the Civil War occurred at Fort Sumter", winnerCount: 0 },
//     { name: "South Dakota", population: 924669, size: 77116, gdp: 74938, region: "Midwest", fact: "South Dakota has the world's only Corn Palace, decorated with murals made entirely of corn and grains", winnerCount: 0 },
//     { name: "Tennessee", population: 7227750, size: 42144, gdp: 545695, region: "South", fact: "Bristol, Tennessee, is known as the 'Birthplace of winnerCountry Music'", winnerCount: 0 },
//     { name: "Texas", population: 31290831, size: 268596, gdp: 2694524, region: "South", fact: "Texas is so large that El Paso, on its western edge, is closer to Los Angeles than it is to Houston", winnerCount: 0 },
//     { name: "Utah", population: 3503613, size: 84897, gdp: 298815, region: "West", fact: "Utah's Bonneville Salt Flats are so flat and expansive they're used for land speed record attempts", winnerCount: 0 },
//     { name: "Vermont", population: 648493, size: 9616, gdp: 45432, region: "Northeast", fact: "Vermont is the largest producer of maple syrup in the U.S", winnerCount: 0 },
//     { name: "Virginia", population: 8811195, size: 42775, gdp: 759236, region: "South", fact: "The first permanent English settlement in America, Jamestown, was established in Virginia in 1607", winnerCount: 0 },
//     { name: "Washington", population: 7958180, size: 71298, gdp: 850529, region: "West", fact: "Seattle is home to the first Starbucks, opened in 1971", winnerCount: 0 },
//     { name: "West Virginia", population: 1769979, size: 24230, gdp: 107351, region: "South", fact: "West Virginia has more than 50 state parks, making it one of the best states for outdoor enthusiasts", winnerCount: 0 },
//     { name: "Wisconsin", population: 5960975, size: 65496, gdp: 448446, region: "Midwest", fact: "Wisconsin is home to the National Mustard Museum, which has over 6,000 jars of mustard from around the world", winnerCount: 0 },
//     { name: "Wyoming", population: 587618, size: 97813, gdp: 52980, region: "West", fact: "Yellowstone, the first national park in the world, is located here", winnerCount: 0 },
// ]

// async function main() {
//     // Seed the database with states
//     await prisma.game.deleteMany();
//     await prisma.state.deleteMany();
//     for (const state of states) {
//       await prisma.state.create({
//         data: state,
//       });
//     }
//     console.log('Database seeded with 50 states!');
  
//     // Fetch all entries in the State table
//     const allStates = await prisma.state.findMany();
//     console.log('All States in the database:', allStates);
//   }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

export default prisma;