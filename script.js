console.log("Akmal Irfan Maulana");
const challenge1 = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts/8/comments")
    .then((res) => {
        console.log("Jumlah comments : " + Object.keys(res.data).length);
        console.log(res.data);
    });
};

const challenge2 = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts?userId=8")
    .then((res) => {
        console.log(res.data);
    });
};