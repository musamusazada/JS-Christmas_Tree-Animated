//Getting the Dom element
let treeEl = document.querySelector(".christmas-tree");
let treeHightID = document.getElementById("treeHeightID");
//Color Array
let colors = ["red", "green", "yellow", "cyan", "blue", "purple", "pink"];

//***Christmas Tree with Array Functions */

//Lets create an array containing one element.
let star = ['<i class="fas fa-star"></i>']
    //Taking the height input from user(how tall should our star would be)


function workBear() {
    let treeHeight = treeHightID.value;
    //Before Starting, with this method we center the Tree in Console.
    for (let i = 0; i < treeHeight - 1; i++) {
        star.unshift(" ");
    }

    //Now in every iteration, we log the string, prepare it for next iteration and remove the empty space;
    for (let i = 0; i < treeHeight; i++) {

        let treeBranch = document.createElement("p");

        treeBranch.classList.add("branch");
        treeBranch.innerHTML = star.join('');
        treeEl.appendChild(treeBranch);
        star.push(' <i class="fas fa-star"></i>');
        star.shift();
        let starEl = document.querySelectorAll(".fa-star");
        starEl.forEach(el => el.style.color = colors[parseInt(Math.random() * colors.length)]);

    }
}