const images = [
    "img/ugandapic.webp",
    "img/nature.jpg"
];
const paragraph = [
    "Uganda is my country.I love Uganda.I am a Ugandan by nationaly and l will always choose Uganda amongest all odds." ,
    "One thing l love about Uganda is it's nature. We have been blessed with the best weather which has given us a green view reflected by the lakes,rivers,mountains,hills and most importantly wildlife."
]
const headings = [
    "Oh Uganda",
    "What describes my country"
];

for (let i = 0; i < 2; i++) {
    let div = document.createElement('div');
    div.id = 'div-id-' + i;
    let heading = document.createElement('h3');
    const node_head = document.createTextNode(headings[i]); 
    heading.appendChild(node_head);
    div.appendChild(heading);

    let para = document.createElement('p');
    const node = document.createTextNode(paragraph[i]);    
    para.appendChild(node);
    div.appendChild(para);

    let img = document.createElement('img');
    img.src = images[i];
    div.appendChild(img);
    document.body.appendChild(div);
}