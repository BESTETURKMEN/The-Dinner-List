const listData = [
    {
        id: "1",
        name: "Adele",
    },
    {
        id: "2",
        name: "Agnes",
    },
    {
        id: "3",
        name: "Billy",
    },
    {
        id: "4",
        name: "Bob",
    },
    {
        id: "5",
        name: "Calvin",
    },
    {
        id: "6",
        name: "Christina",
    },
    {
        id: "7",
        name: "Cindy",
    },
];

const NameList = listData.map((item) => item.name);


const handleSearch = () => {
    const inputValue = document.getElementById("myInput").value.toLowerCase();
    const ulElement = document.getElementById("myUL");

    let listToShow;

    if (inputValue !== '') {
        listToShow = NameList.filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()));
        console.log(listToShow)
    } else {
        listToShow = NameList;
    }

    ulElement.innerHTML = '';

    listToShow.forEach((item) => {
        const liCreateElement = document.createElement("li");
        liCreateElement.id = "mynewUL";
        liCreateElement.textContent = item;
        ulElement.appendChild(liCreateElement);
    });
};
