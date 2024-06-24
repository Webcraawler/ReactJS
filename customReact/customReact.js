function customRender(contain,element){
    // const ele = document.createElement(element.type)
    // ele.innerHTML = element.children

    // ele.setAttribute('href', element.props.href)

    // ele.setAttribute('target',element.props.target)

    // contain.appendChild(ele)


    const ele = document.createElement(element.type)
    ele.innerHTML = element.children

    for (const prop in element.props) {
        if(prop==='children')continue;

        ele.setAttribute(prop,element.props[prop])
    }

    contain.appendChild(ele)
}


const ele = {
    type:"a",
    props:{
        href:"https://google.com",
        target: "_blank"
    },
    children:"Click to visit Google"
}


const contain = document.querySelector("#root")

customRender(contain,ele)


//-----------summary-------------

//first we took the html tag where we to insert aur content 
//and then we made a function that takes the container and the element as parameter 
//now we define the element that we will pass in the function by making our own custom syntax
// then we design the function such that it append the element in the container
