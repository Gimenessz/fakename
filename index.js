export default function fakename() {
    const first = ['Pedro', 'Gustavo', 'Manu', 'Raphael'];
    const last = ['Silva', 'Sanches', 'Martins', 'Oliveira'];
    let firstName = first[Math.floor(Math.random() * first.length)];
    let lastName = last[Math.floor(Math.random() * last.length)];
    return `${firstName} ${lastName}`;
}
