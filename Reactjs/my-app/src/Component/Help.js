import React from 'react'
import axios from 'axios'
// import Jimp from 'jimp'
import Jimp from 'jimp'
import fs from 'fs'
// import file from 'file-system'
// import fse from 'fs-extra'
import FileType from 'file-type';

import { NavLink } from 'react-router-dom'

function Help() {
    let [image1,setImage1]=React.useState(null)

    function toBase64(arr) {
        //arr = new Uint8Array(arr) if it's an ArrayBuffer
        return btoa(
           arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
     }
    // function Handler(){
        
    // const history = useHistory()
    // history.push('/home')
    // }
    React.useEffect(()=>{
        
    const source = axios.CancelToken.source()
        async function fetchData(){
            try{
             let response =  await axios.get('http://localhost:3001/File/6086d4de17ef0f25d06e9448');
             console.log(response.data.data.data)
             var buffer = response.data.data.data
                  let data = new Buffer(buffer,'base64')
                  console.log(data)
                  console.log('buffer',buffer)

        //yo chai euta custom function ho ja chai hmaile buffer or arko wala data pathaune //declared mathi
        //src https://stackoverflow.com/questions/59430269/how-to-convert-buffer-object-to-image-in-javascript
                 let img = toBase64(buffer)//yanira chai both data or buffer j rakhda ni chalirako x
                 setImage1(img)
                 console.log('img',img)


                  
                    // console.log(await FileType.fromFile('lena-small-bw1.jpg'));
                    //=> {ext: 'png', mime: 'image/png'}
                



                //   fs.writeFile(`../../public/${Date.now()}`, buffer);

                // fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
                //     if (err) throw err;
                //     console.log('Saved!');
                //   });
                // console.log(file.write ===File.writeFile )
                
                //   file.writeFile(`../../public/${Date.now()}.jpg`, buffer);
                // file.writeFile('jacob.jpg',buffer,(err)=>{
                //     if(err) throw new Error('error on file.writeFile')
                //     console.log('saved')
                // })
                  
                //   file.writeFile('jacob.jpg', buffer);
                // console.log(file.readFile === fs.readFile )

                // fse.writeFileSync('jacob.jpg',buffer,err=>{
                //     if(err) throw new Error('error in fes.outputFile')
                //     console.log('saved')
                // })

                //   let data2= new Buffer.from(data1).toString("ascii")
                //   console.log(new Buffer.from(data1).toString("ascii"))
            //  setTimeout(async()=>{

            //  (await Jimp.read(data1)).getBase64(Jimp.MIME_PNG,data=>console.log(data))
            //  },2000)
            //  (await Jimp.read(data1)).getBase64(Jimp.MIME_PNG,data=>console.log(data))


            // var buffer = new Buffer(data1.imageBase64.replace(/^data:image\/\w+;base64,/, ""),'base64');

            // const base64String = btoa(String.fromCharCode(...new Uint8Array(data1)));
            // Jimp.read(data1)
            // .then(data => {
            //     console.log(data)
            //     return data
            //     .resize(256, 256) // resize
            //     .quality(60) // set JPEG quality
                
            //     .write('zzzz'); // save
            // })  
            // open a file called "lenna.png"
                // console.log(Jimp.read(buffer))
            
//             Jimp.read(data)
//   .then(image => {
//       console.log('image',image.bitmap)
  
//       return image
//     //   .resize(256, 256)
//     //   .quality(60)
//     //   .greyscale() 
//       .write('jacob.jpg')
//     // Do stuff with the image.
//   })
//   .catch(err => {
//     // Handle an exception.
//   });
 
                
}
catch(err){
    console.warn(err)
}
        }
        fetchData()
        
    return ()=> {
    source.cancel()
    }
            // source.cancel()
            
        
    },[])
    return (
        <div>
            <h1>Help</h1> 
            
            <NavLink style={{textDecoration: 'none'}} to="/">home</NavLink>
            {
                {image1} && <img src={`data:image/jpg;base64,${image1}`} alt="pic"></img>
            }
        </div>
    )
}

export default Help
