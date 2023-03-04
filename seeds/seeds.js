const sequelize = require("../connection/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  // await seedPosts();
  // console.log('\n----- POSTS SEEDED -----\n');

  process.exit(0);
};
seedAll();
//////////////////////////////////////////////////////////////////////////
const { Category } = require("../models");
const categoryData = [
    {
        category_name: 'Programming',
    },
    {
        category_name: 'Gaming',
    },
    {
        category_name: 'General',
    }
];
const seedCategories = () => Category.bulkCreate(categoryData);
///////////////////////////////////////////////////////////////////////
const { User } = require('../models');
const userData = [
    {
        user_name: 'cooldude141',
        password: '1234'
    },
    {
        user_name: 'XxXDevilXXxX',
        password: '1234'
    },
    {
        user_name: 'Wario',
        password: '1234'
    },
    {
        user_name: 'Dubdub',
        password: '1234'
    },
    {
        user_name: 'Icestea23',
        password: '1234'
    },
  ];
const seedUsers = () => User.bulkCreate(userData);
//////////////////////////////////////////////////////////////////////////
// const { Post } = require('../models');
// const postData = [
//   {
//     post_title: 'Mario sucks',
//     post_body: "Mario is overrated. I think that Wario is way cooler.",
//     category_id: 2,
//     user_id: 3,
//   },
//   {
//     post_title: 'Garlic and Money',
//     post_body: 'Wow, I sure do love garlic and money. Literally all I live for these days. Anyone else feel the same?',
//     category_id: 3,
//     user_id: 3,
//   },
//   {
//     post_title: 'Does anyone else think sequelize sucks?',
//     post_body: "I've been using a bunch of sequelize lately, and have decided that I really don't like it. It's just janky, you know what I mean?",
//     category_id: 1,
//     user_id: 4,
//   },
//   {
//     post_title: 'Anyone want to hang out IRL?',
//     post_body: 'Just gaging any interest in people hanging out irl. Anyone here from Chicago?',
//     category_id: 3,
//     user_id: 4,
//   },
//   {
//     post_title: 'Best RPGs',
//     post_body: 'Anyone have a good reccomendation for any good rpgs?',
//     category_id: 2,
//     user_id: 5,
//   },
//   {
//     post_title: 'For Loops',
//     post_body: "Could someone please explain to me how for loops work? I just can't seem to figure them out",
//     category_id: 1,
//     user_id: 5,
//   },
//   {
//     post_title: "Wuts your favorite coding language?",
//     post_body: "Mine is VANILLA js, cuz I'm cool like that",
//     category_id: 1,
//     user_id: 1,
//   },
//   {
//     post_title: 'CSS IS BEST',
//     post_body: 'You haters that suck at CSS are just jealous :)',
//     category_id: 1,
//     user_id: 1,
//   },
//   {
//     post_title: 'This forum is cool!',
//     post_body: 'Just wanted to mention to the devs that I really like this forum!',
//     category_id: 3,
//     user_id: 2,
//   },
//   {
//     post_title: 'How to HTML',
//     post_body: 'Like, where do I even start?',
//     category_id: 1,
//     user_id: 2,
//   },
// ];
// const seedPosts = () => Post.bulkCreate(postData);

