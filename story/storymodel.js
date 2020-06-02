const db = require('../data/dbConfig.js');

module.exports = {
    
    getStory,
    findStoryById,
    addStory,
    updateStory,
    removeStory,
}

function getStory() {
    return db.select('*').from('story');
  }

  function findStoryById(id) {
    return db('story')
          .where('id', id)
          .first();
  };

  async function addStory(newStory){
    const [id] = await db('story').insert(newStory);
    return findStoryById(id);
    // return db('story')
    // .insert(newStory)
    // .then(ids => {
    //     const [id] = ids
    //     return findStoryById(id)
    // })
}


  
  function updateStory(id, story) {
    return db('story')
           .where('id', id)
           .update(story);
  }

  function removeStory(id) {
    return db('story')
      .where('id', Number(id))
      .del();
  }