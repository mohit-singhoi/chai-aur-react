
function customRender(reactElement, container) {
    /* 1st Way
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.props.children;
    domElement.href = reactElement.props.href;
    domElement.target = reactElement.props.target;
    container.appendChild(domElement);
    */

    // 2nd Way
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.props.children;

    for (const prop in reactElement.props) {
        if(prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop]);

    }
    container.appendChild(domElement);
}



const reactElement = {
    type: 'a',
    props: {
        href: "https://www.youtube.com",
        target: "_blank",
        children: " Click me to Visist Google"
    },

};



const mainContainer = document.getElementById("root");
// const mainContainer2 = document.querySelector("#root");

customRender(reactElement, mainContainer);