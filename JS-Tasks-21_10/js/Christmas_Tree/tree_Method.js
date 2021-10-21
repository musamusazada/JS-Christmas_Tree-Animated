let arrStar = ["*"]
    //Taking the height input from user(how tall should our star would be)
let Height = document.getElementById("treeHeightID").value;
//Before Starting, with this method we center the Tree in Console.
for (let i = 0; i < Height - 1; i++) {
    arrStar.unshift(" ");
}
for (let i = 0; i < Height; i++) {

    console.log(arrStar.join(''));
    arrStar.push(" *");
    arrStar.shift();

}