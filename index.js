const container=document.querySelector('.container')
const response=fetch('https://fakestoreapi.com/products')
.then(response=>response.json())
.then(json=>data(json))
const data=response=>{
    console.log(response)
    for(let i=0;i<response.length;i=i+1){
        single_data=response[i];
        const div1=document.createElement('div')
        div1.className='child'
        const img=document.createElement('img')
        img.src=single_data.image
        const title=document.createElement('h3')
        title.innerText=single_data.title
        const price=document.createElement('h4')
        price.innerText=single_data.price
        const rating=document.createElement('h5')
        rating.innerText=single_data.rating.rate
        div1.appendChild(img)
        div1.appendChild(title)
        div1.appendChild(price)
        div1.appendChild(rating)
        container.appendChild(div1)
        const btn=document.createElement('button')
        btn.innerText='Add to Cart'
        div1.appendChild(btn)

    }
}