
const server = require('../src/server');

describe('server', ()=> {
  it('GET / responds with 200 containing "Hello World!"', ()=>{
    return supertest(server)
      .get('/')
      .expect(200, 'Hello boilerplate!')
  })
})