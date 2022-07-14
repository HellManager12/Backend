/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Users').del()
  await knex('Users').insert([
    {userlogin: 'Acid', userpassword:'bkmz099',isadmin:true,isbanned:false},
    {userlogin: 'Kate', userpassword:'121280',isadmin:false,isbanned:false},
    {userlogin: 'Toxic', userpassword:'toxicc',isadmin:false,isbanned:false},
    {userlogin: 'Esoft', userpassword:'nodereact',isadmin:false,isbanned:true}
  ]);
};
