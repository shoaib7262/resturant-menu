//

const addItems = () => {

    let addTitle = document.getElementById("title").value;
    let addPrice = document.getElementById("price").value;
    let addDiscription = document.getElementById("Discription").value;
    let addType = document.getElementById("Type").value;

    let foods = localStorage.getItem("foods");
    if (foods) {
        foods = JSON.parse(foods);
    } else {
        foods = [];
    }

    foods.push({
        id: Math.random(),
        title: addTitle,
        price: addPrice,
        discription: addDiscription,
        type: addType,
        liked: false,
    })

    localStorage.setItem("foods", JSON.stringify(foods));


    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("Discription").value = "";
    // document.getElementById("type").value = "";

    showItems();


}




const showItems = () => {

    const mainDiv = document.getElementById("result");
    const myFoods = JSON.parse(localStorage.getItem("foods"));




    let showInHtml = "";
    myFoods.map((food, index) => {
        showInHtml += `
        <div class="outer-card" style="display:flex;justify-content-center;align-item-center;margin:4px" >
        <img style="border:4px solid orange; border-radius:10px;" width="200" height="auto" id="myPicture" src="${displayImg()}" alt="some image">
        <div class="card mx-2"  style="width: 18rem;background-color:rgb(199, 201, 214);border:0px">
            <div class="card-body">

                <div class="" style = "border-bottom-style: dotted">
                
                    <h6 style="font-weight:600" class="card-title d-inline" id="card-title">${food.title} </h6>
                    <h6 style="color:orange;font-weight:600" class="price float-right" id="output-price">${food.price} </h6>
                    
                </div>
                
               
                <p style="color:rgb(35, 46, 116)" class="card-text" id="card-discription">${food.discription} </p>
                <div style="display:flex;justify-content-between">
                   <div> <h5 href="#" class="type" id="output-type">${food.type}</h5></div>
                      <div style="display:flex; justify-content:center">
                        <div>
                          <button onclick ="showHeart(${food.id})" style="position:relative; background:transparent;border:none;outline:none;color:grey;" id="heartIcon-${food.id}" >
                          ${food.liked ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart" ></i>'}
                          </button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>    
        </div>
        `
    })

    mainDiv.innerHTML = showInHtml;
}

const displayImg = () => {

    let picArr = ["2.jpg", "3.jpg", "4.jpg", "6.jpg", "7.jpg", "8.jpg"];
    let randomPic = Math.floor(Math.random() * picArr.length);
    let selectImg = picArr[randomPic];

    return `imag/${selectImg}`;
}

const showHeart = (id) => {
    let isLiked = false;
    const foods = JSON.parse(localStorage.getItem("foods"));

    let newFood = foods.map((food) => {
        if (food.id == id) {
            isLiked = !food.liked;
            return {
                ...food,
                liked: !food.liked
            };

        }
        else {
            return food;
        }
    })
    localStorage.setItem("foods", JSON.stringify(newFood));
    // showItems();

    console.log({ isLiked })
    const heartLike = document.getElementById(`heartIcon-${id}`);
    if(isLiked){
        heartLike.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    }
    else{
        heartLike.innerHTML = `<i class="fa-regular fa-heart" >`;
    }
}


//function for breakfast

const myFunc = (id) => {
    const button = document.getElementById(id).textContent;

    const card = document.querySelectorAll(".outer-card");
    const type = document.getElementsByTagName("h5");

    for (let i = 0; i < type.length; i++) {
        let match = card[i].getElementsByTagName("h5")[0];

        if (match) {
            let textValue = match.textContent || match.innerHTML

            if (textValue.indexOf(button) > -1) {
                card[i].style.display = "";
            }
            else {
                card[i].style.display = "none";
            }
        }
    }

}


const funcAll = () => {

    const button = document.getElementById("btn-all").textContent;

    const card = document.querySelectorAll(".outer-card");


    for (let i = 0; i < card.length; i++) {
        let match = card[i];

        if (match) {
            let textValue = match.textContent || match.innerHTML

            if (textValue.indexOf(button) > -1) {
                card[i].style.display = "";
            }
            else {
                card[i].style.display = "";
            }
        }
    }

}

