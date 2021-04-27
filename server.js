
const mongoose  = require('mongoose')
const dotenv = require('dotenv')


// dotenv.config({path:'./dotenv.env'})
dotenv.config({path:'./dot.env'})
// console.log(process.argv)



const app = require('./app')

 

if(process.argv[2] === '--production'){
    process.env.NODE_ENV = 'production'
}

console.log(process.env.NODE_ENV)
console.log(process.env.PORT)
 
const server = process.env.PORT;

mongoose.connect('mongodb://localhost/new',{ useNewUrlParser: true,useUnifiedTopology: true  })
.then(()=>{

    
//   server.applyMiddleware({ app });
//   console.log('server.graphqlPath',server.graphqlPath) 
//     app.listen({ port: process.env.PORT }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// )
    
    app.listen(server,()=>{
        console.log(`connected to port ${process.env.PORT}`)
    })
})

// console.log('process.cwd',process.cwd) 

process.on('unhandledRejection',(err) => { 
    console.log(err.name,err.message);
    process.exit(1);
});