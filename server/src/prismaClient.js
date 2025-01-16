import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// set up postgreSQL database
// const states = [
//     { name: "Alabama", population: 5157699, size: 52420, gdp: 318080, region: "South" },
//     { name: "Alaska", population: 740133, size: 665384, gdp: 69794, region: "Other" },
//     { name: "Arizona", population: 7582384, size: 113990, gdp: 548806, region: "West" },
//     { name: "Arkansas", population: 3088354, size: 53179, gdp: 186197, region: "South" },
//     { name: "California", population: 39431263, size: 163695, gdp: 4080178, region: "West" },
//     { name: "Colorado", population: 5957493, size: 104094, gdp: 550173, region: "West" },
//     { name: "Connecticut", population: 3675069, size: 5543, gdp: 363417, region: "Northeast" },
//     { name: "Delaware", population: 1051917, size: 2489, gdp: 102401, region: "South" },
//     { name: "Florida", population: 23372215, size: 65758, gdp: 1695273, region: "South" },
//     { name: "Georgia", population: 11180878, size: 59425, gdp: 877746, region: "South" },
//     { name: "Hawaii", population: 1446146, size: 10932, gdp: 114936, region: "Other" },
//     { name: "Idaho", population: 2001619, size: 83569, gdp: 127373, region: "West" },
//     { name: "Illinois", population: 12710158, size: 57914, gdp: 1132143, region: "Midwest" },
//     { name: "Indiana", population: 6924275, size: 36420, gdp: 523832, region: "Midwest" },
//     { name: "Iowa", population: 3241488, size: 56273, gdp: 255962, region: "Midwest" },
//     { name: "Kansas", population: 2970606, size: 82278, gdp: 234119, region: "Midwest" },
//     { name: "Kentucky", population: 4588372, size: 40408, gdp: 291108, region: "South" },
//     { name: "Louisiana", population: 4597740, size: 52378, gdp: 326653, region: "South" },
//     { name: "Maine", population: 1405012, size: 35380, gdp: 97872, region: "Northeast" },
//     { name: "Maryland", population: 6263220, size: 12406, gdp: 539232, region: "South" },
//     { name: "Massachusetts", population: 7136171, size: 10554, gdp: 776147, region: "Northeast" },
//     { name: "Michigan", population: 10140459, size: 96714, gdp: 703277, region: "Midwest" },
//     { name: "Minnesota", population: 5793151, size: 86936, gdp: 497631, region: "Midwest" },
//     { name: "Mississippi", population: 2943045, size: 48432, gdp: 156026, region: "South" },
//     { name: "Missouri", population: 6245466, size: 69707, gdp: 448165, region: "Midwest" },
//     { name: "Montana", population: 1137233, size: 147040, gdp: 75855, region: "West" },
//     { name: "Nebraska", population: 2005465, size: 77348, gdp: 185238, region: "Midwest" },
//     { name: "Nevada", population: 3267467, size: 110572, gdp: 259702, region: "West" },
//     { name: "New Hampshire", population: 1409032, size: 9349, gdp: 120163, region: "Northeast" },
//     { name: "New Jersey", population: 9500851, size: 8723, gdp: 841417, region: "Northeast" },
//     { name: "New Mexico", population: 2130256, size: 121590, gdp: 140092, region: "West" },
//     { name: "New York", population: 19867248, size: 54555, gdp: 2284364, region: "Northeast" },
//     { name: "North Carolina", population: 11046024, size: 53819, gdp: 832747, region: "South" },
//     { name: "North Dakota", population: 796568, size: 70698, gdp: 75724, region: "Midwest" },
//     { name: "Ohio", population: 11883304, size: 44826, gdp: 922776, region: "Midwest" },
//     { name: "Oklahoma", population: 4095393, size: 69899, gdp: 264596, region: "South" },
//     { name: "Oregon", population: 4272371, size: 98379, gdp: 329378, region: "West" },
//     { name: "Pennsylvania", population: 13078751, size: 46054, gdp: 1017257, region: "Northeast" },
//     { name: "Rhode Island", population: 1112308, size: 1545, gdp: 81911, region: "Northeast" },
//     { name: "South Carolina", population: 5478831, size: 32020, gdp: 348128, region: "South" },
//     { name: "South Dakota", population: 924669, size: 77116, gdp: 74938, region: "Midwest" },
//     { name: "Tennessee", population: 7227750, size: 42144, gdp: 545695, region: "South" },
//     { name: "Texas", population: 31290831, size: 268596, gdp: 2694524, region: "South" },
//     { name: "Utah", population: 3503613, size: 84897, gdp: 298815, region: "West" },
//     { name: "Vermont", population: 648493, size: 9616, gdp: 45432, region: "Northeast" },
//     { name: "Virginia", population: 8811195, size: 42775, gdp: 759236, region: "South" },
//     { name: "Washington", population: 7958180, size: 71298, gdp: 850529, region: "West" },
//     { name: "West Virginia", population: 1769979, size: 24230, gdp: 107351, region: "South" },
//     { name: "Wisconsin", population: 5960975, size: 65496, gdp: 448446, region: "Midwest" },
//     { name: "Wyoming", population: 587618, size: 97813, gdp: 52980, region: "West" },
// ]

// async function main() {
//     // Seed the database with states
//     // await prisma.state.deleteMany();
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