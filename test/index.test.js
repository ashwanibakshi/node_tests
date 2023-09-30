// const chai = require('chai');
// const chaiHttp = require('chai-http');
const assert = require('assert');
const app = require('../src/index');
const request = require('supertest');

// chai.use(chaiHttp);

// const expect = chai.expect;

// describe('Users Api',()=>{
//     describe('Get /api/showall',()=>{
//         it('Give all users',(done)=>{
//              chai.request(app)
//              .get('/showall')
//              .end((err,res)=>{
//                 if(err){
//                     expect(res).to.have.status(500);
//                    expect(res.body).to.have.property('message').that.is.equal('An error occurred while fetching user data');
//                 }
//                 else{
//                     expect(res.body).to.be.an('array');
//                 }
//                 done();
//              });
//         });
//     });
//     describe('Post /api/register',()=>{
//         it('Register User',(done)=>{
//             chai.request(app)
//             .post('/register')
//             .send({email:'demo@d.com',password:'123456'})
//             .end((err,res)=>{
//                 if (err) {
//                     expect(res).to.have.status(500);
//                     expect(res.body).to.have.property('message').that.is.equal('An error occurred!!');
//                   } else {
//                     expect(res).to.have.status(201);
//                     expect(res.body).to.have.property('message').equal('User registered successfully');
//                   }
        
//                   done();
//             })
//         })
//     })
// });


describe('User Api',function(){
   describe('Get /api/showall',function(){
         it('Give all users',function(done){
            request(app)
            .get('/showall')
            .end(function(err,res){
                      if(err){
                        return done(err);
                      }
                      assert.ok(res);
                      done();
            });
         });
   });
   describe('Post /api/register',function(){
        it('Register User',function(done){
            request(app)
            .post('/register')
            .send({email:'a@a.com',password:'123456'})
            .end(function(err,res){
                 if(err){
                         return done(err);
                 }
                 assert.ok(res);
                 done();
            });
        });
   });
});