const menuBtn = document.getElementById("menuBtn");
const aside = document.querySelector("aside");
const header = document.querySelector("header");
const main = document.querySelector("main");


menuBtn.addEventListener("click" ,()=>{
    aside.classList.toggle("-left-full");
    aside.classList.toggle("left-0");
    header.classList.toggle("ml-60");
    main.classList.toggle("ml-60");
});


// /***************** */
// fetch data from json file and pit in table
const tbody = document.getElementById("tbody");
const topSelling = document.getElementById("top-selling");
const news = document.querySelector(".news");
fetch('src/info.json')
.then(res => res.json())
.then(data => {
    let dataArray = Object.values(data);
    const tabelData = dataArray[3];
    tabelData.map(cell => {
        const tableRow = document.createElement("tr");
        tableRow.className = "transition duration-300 hover:bg-sky-100";
        const tableData = `
            <td class="text-center p-1 text-indigo-600">${cell.number}</td>
            <td class="text-left p-1">${cell.customer}</td>
            <td class="text-left p-1 text-blue-400">${cell.product}</td>
            <td class="text-center p-1 text-sm font-semibold">$${cell.price}.00</td>
            <td class="text-white text-center p-1">
                <span class="${
                    cell.status === "Pending" ? "bg-yellow-300":
                    cell.status === "Rejected" ? "bg-red-500" :
                    "bg-green-500"
                } 
                w-full px-3 py-1 text-sm rounded-full">${cell.status}</span>
            </td>
        `;
        tableRow.innerHTML = tableData;
        tbody.appendChild(tableRow);
    });

    // Product fetching
    const topsellingprod = dataArray[2];
    topsellingprod.map(product => {
        const productTR = document.createElement("tr");
        const prodData = `
            <td class="text-center">
                    <img src="${product.preview}" class="size-12 ml-2 rounded-sm" alt="${product.name}">
                  </td>
                  <td class="text-left text-sm text-indigo-500">${product.name}</td>
                  <td class="text-center text-sm">${product.price}</td>
                  <td class="text-center text-sm font-semibold">${product.sold}</td>
                  <td class="text-center text-sm">$12.23</td>
        `;
        productTR.innerHTML = prodData;
        topSelling.appendChild(productTR);
    });

    // activit fetching
    const newsData = dataArray[1];
    newsData.map(item => {
        const div = document.createElement("div");
        div.className = "flex gap-4";
        const newItem = `
                <img src="${item.img}" class="w-15 h-13 object-center rounded-sm object-cover" alt="${item.title}">
                <div class="poppins">
                  <h4 class="text-blue-500 font-semibold text-[11px] "><a href="#">
                    ${item.title}
                    </a>
                  </h4>
                  <p class="text-slate-500 text-[12px] text-ellipsis line-clamp-2">
                    ${item.subtitle}
                  </p>
                </div>
        `;
        div.innerHTML = newItem;
        news.appendChild(div);
    });
})
.catch(errro => "error in openning file.");

// /**********************\