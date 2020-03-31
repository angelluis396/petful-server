const petStore = {
  dogs : [
    {
      id: 1 ,
      imageURL:'https://vetstreet.brightspotcdn.com/dims4/default/81a2e35/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fa9%2Ff54ad0a80611e0a0d50050568d634f%2Ffile%2FSiberian-Husky-4-645mk062811.jpg', 
      imageDescription: 'Nala the Husky',
      name: 'Nala',
      sex: 'Female',
      age: 6,
      breed: 'Siberian Husky',
      story: 'Owner Passed',
      adopted: false
    },
    {
      id: 2 ,
      imageURL:'https://vetstreet.brightspotcdn.com/dims4/default/edb51df/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F19%2F716f20a7f711e0a0d50050568d634f%2Ffile%2FPomeranian-2-645mk062811.jpg', 
      imageDescription: 'Fluffy the pomeranian.',
      name: 'Fluffy',
      sex: 'Male',
      age: 1,
      breed: 'Pomeranian',
      story: 'Thrown on the street',
      adopted: false
    },
    {
      id: 3 ,
      imageURL:'https://vetstreet.brightspotcdn.com/dims4/default/9d51a10/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F24%2F697af0a7fa11e0a0d50050568d634f%2Ffile%2FPug-2-645mk062811.jpg', 
      imageDescription: 'Butch the pug.',
      name: 'Butch',
      sex: 'Male',
      age: 5,
      breed: 'Pug',
      story: 'Found in a dumpster',
      adopted: false
    },
    {
      id: 4 ,
      imageURL:'https://upload.wikimedia.org/wikipedia/commons/b/b1/American_Pitbull_Terrier_-_Colby_Line.jpg', 
      imageDescription: 'Pete the pitbull.',
      name: 'Pete',
      sex: 'Male',
      age: 5,
      breed: 'American Pitbull',
      story: 'Found on the street',
      adopted: false
    },
    {
      id: 5 ,
      imageURL:'https://modeltheme.com/mt_numbat/wp-content/uploads/2017/06/Siberian-Husky-600x600.jpg', 
      imageDescription: 'Goku the Husky.',
      name: 'Goku',
      sex: 'Male',
      age: 4,
      breed: 'Siberian Husky',
      story: 'Found in park',
      adopted: false
    },
    {
      id: 6 ,
      imageURL:'https://hdliveextra-a.akamaihd.net/HD/image_sports/mobile/nbc_dogshow_toy_pomeranian_v2_191121_640x360.jpg', 
      imageDescription: 'Dash the pomeranian.',
      name: 'Dash',
      sex: 'Female',
      age: 4,
      breed: 'Pomeranian',
      story: 'Owner couldnt afford to take care of her',
      adopted: false
    },
    {
      id: 7 ,
      imageURL:'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', 
      imageDescription: 'Skeeter the pug.',
      name: 'Skeeter',
      sex: 'Male',
      age: 3,
      breed: 'Pug',
      story: 'Owner Passed',
      adopted: false
    },
    {
      id: 8 ,
      imageURL:'https://canineperspectivechicago.com/wp-content/uploads/2018/08/American-Pit-Bull-Terrier-1.jpg', 
      imageDescription: 'Martha the pitbull.',
      name: 'Martha',
      sex: 'Female',
      age: 9,
      breed: 'American Pitbull',
      story: 'Found on the street',
      adopted: false
    },
    {
      id: 9 ,
      imageURL:'https://i.barkpost.com/wp-content/uploads/2019/08/pomeranian-featured-image-.jpg?q=70&fit=crop&crop=entropy&w=808&h=500', 
      imageDescription: 'Flipper the pomeranian.',
      name: 'Flipper',
      sex: 'Male',
      age: 5,
      breed: 'Pomeranian',
      story: 'Owner Passed',
      adopted: false
    },
    {
      id: 10 ,
      imageURL:'https://static01.nyt.com/images/2019/03/01/world/01germany-pug/merlin_151392645_ade83440-28f1-4faa-b26f-50a26699c6b5-articleLarge.jpg?quality=75&auto=webp&disable=upscale', 
      imageDescription: 'Buck the pug.',
      name: 'Buck',
      sex: 'Male',
      age: 5,
      breed: 'Pug',
      story: 'Found on the street',
      adopted: false
    },
    {
      id: 11 ,
      imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQxNQfYmOC16rIS5Zxx8duRhrIuyBcrW-JZXjOWlgbsqb1L12Zg&s', 
      imageDescription: 'Sirius the pitbull.',
      name: 'Sirius',
      sex: 'Male',
      age: 1,
      breed: 'American Pitbull',
      story: 'Found on the street',
      adopted: false
    },
    {
      id: 12 ,
      imageURL:'https://upload.wikimedia.org/wikipedia/commons/a/a3/Black-Magic-Big-Boy.jpg', 
      imageDescription: 'Fudge the Husky.',
      name: 'Fudge',
      sex: 'Male',
      age: 5,
      breed: 'Siberian Husky',
      story: 'Owner could no longer afford to take care of him',
      adopted: false
    }
  ],
  cats : [
    {
      id: 13 ,
      imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
      imageDescription: 'Fluffy the bengal.',
      name: 'Fluffy',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street',
      adopted: false
    },
    {
      id: 14 ,
      imageURL:'https://i.pinimg.com/originals/a8/89/48/a8894847467aadbf5511f4ba4c6fea9f.jpg', 
      imageDescription: 'Cedrick the British Short Hair.',
      name: 'Cedrick',
      sex: 'Male',
      age: 3,
      breed: 'British Short Hair',
      story: 'Thrown on the street',
      adopted: false
    },
    {
      id: 15 ,
      imageURL:'https://vetstreet.brightspotcdn.com/dims4/default/c759deb/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fa8%2F0a%2Fec3909ff44aaaffa64bfc771d828%2FPersian-AP-YAIRFN-645sm3614.jpg', 
      imageDescription: ' Ruby the Persian cat.',
      name: 'Ruby',
      sex: 'Female',
      age: 8,
      breed: 'Persian',
      story: 'Thrown on the street',
      adopted: false
    },
    {
      id: 16 ,
      imageURL:'https://d3eh3svpl1busq.cloudfront.net/mwIJloVUffDtKiCgRcivopdgojcJrVwT/assets/static/optimized/rev-dbf3d6b/image/siamese-cat-cover.jpg', 
      imageDescription: 'Phil the Siamese Cat.',
      name: 'Phil',
      sex: 'Male',
      age: 8,
      breed: 'Siamese',
      story: 'Thrown on the street',
      adopted: false
    },
    {
      id: 17 ,
      imageURL:'https://www.thesprucepets.com/thmb/ZpBx4mU_VY6z7xVuQkPh8qb_3vE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/cute-russian-blue-cat-sitting-on-the-bed--female-cat--498731394-5c2a695746e0fb00015354ac.jpg', 
      imageDescription: 'Marcy the Russian Blue cat.',
      name: 'Marcy',
      sex: 'Female',
      age: 2,
      breed: 'Russian Blue',
      story: 'Thrown on the street',
      adopted: false
    },
    {
      id: 18 ,
      imageURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/A_Sphynx_cat.jpg/220px-A_Sphynx_cat.jpg', 
      imageDescription: 'Marcus the sphynx.',
      name: 'Marcus',
      sex: 'Male',
      age: 2,
      breed: 'Sphynx',
      story: 'Thrown on the street',
      adopted: false
    },
    {
      id: 19 ,
      imageURL:'https://i.pinimg.com/originals/0f/7c/27/0f7c27f1c593f22134f30bb11ad50144.jpg', 
      imageDescription: ' Chubz the Bengal.',
      name: 'Chubz',
      sex: 'Male',
      age: 8,
      breed: 'Bengal',
      story: 'Thrown on the street',
      adopted: false
    },
    {
      id: 20 ,
      imageURL:'https://www.thesprucepets.com/thmb/xNnO6wEgYaHuc0NgPMCl8yL8PxA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/BlueBritishShorthairwithGoldEyes-4734bd8247b04451b6da1994a3f62ae7.jpg', 
      imageDescription: 'CeeCee the British Short Hair.',
      name: 'CeeCee',
      sex: 'Female',
      age: 3,
      breed: 'British Short Hair',
      story: 'Thrown on the street',
      adopted: false
    },
    {
      id: 21 ,
      imageURL:'https://vetstreet-brightspot.s3.amazonaws.com/f7/3b/a9263b9846c7a943e56b9c10f099/Persian-AP-0IUWP7-645sm3614.jpg', 
      imageDescription: 'Bash the Persian Cat.',
      name: 'Bash',
      sex: 'Male',
      age: 1,
      breed: 'Persian',
      story: 'Thrown on the street',
      adopted: false
    },
    {
      id: 22 ,
      imageURL:'https://www.thesprucepets.com/thmb/agpvZCk-O_o-zUILhO-D2k1s7Dk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/37868147_243349996310794_540614542934147072_n-5b69b2b046e0fb0050630e3d.jpg', 
      imageDescription: 'Phyllis the Siamese Cat.',
      name: 'Phyllis',
      sex: 'Female',
      age: 9,
      breed: 'Siamese',
      story: 'Thrown on the street',
      adopted: false
    },
    {
      id: 23 ,
      imageURL:'https://azure.wgp-cdn.co.uk/app-yourcat/posts/russian_blue1.jpg?&width=1200&height=630&mode=crop', 
      imageDescription: 'Champ the Russian Blue cat.',
      name: 'Champ',
      sex: 'Male',
      age: 5,
      breed: 'Russian Blue',
      story: 'Thrown on the street',
      adopted: false
    },
    {
      id: 24 ,
      imageURL:'https://www.prestigeanimalhospital.com/sites/default/files/styles/large/adaptive-image/public/sphynx-cat-breed-info.jpg?itok=cn-84l5R', 
      imageDescription: 'Siri the sphynx.',
      name: 'Siri',
      sex: 'Female',
      age: 7,
      breed: 'Sphynx',
      story: 'Thrown on the street',
      adopted: false
    }
  ]
};

module.exports = petStore;