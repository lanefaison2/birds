exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('bird').del()
    .then( () => {
      // Inserts seed entries
      return knex('bird').insert([
        {order: 1, name: 'Oriole1', location_id: 1, rating: 3, notes: 'Notes on bird 1'},
        {order: 2, name: 'Oriole2', location_id: 1, rating: 5, notes: 'Notes on bird 2'},
        {order: 3, name: 'Oriole3', location_id: 2, rating: 2, notes: 'Notes on bird 3'}
      ])
    })
}
