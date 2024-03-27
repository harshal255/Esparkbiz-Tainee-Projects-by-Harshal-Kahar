const port = 3000;
const project_root = document.getElementById("project_root");

const projectData = [
    {
        id: 1,
        date: "1/2/2024",
        title: "Dynamic Table",
        url: `http://localhost:${port}/dynamic_table`
    },
]

let html_str = `<span class="border p-5 py-2 flex items-center justify-center bg-gray-100">Project Name </span>
<span class="border p-5 py-2 flex items-center justify-center bg-gray-100">Date</span>`


projectData.map(ele => {
    let project_str = `
    <a href=${ele.url} class="border p-5 py-2 flex items-center justify-center text-purple-600 hover:text-purple-500">${ele.title}</a>
<span class="border p-5 py-2 flex items-center justify-center">${ele.date}</span>`
    html_str += project_str;
})

project_root.innerHTML = html_str;