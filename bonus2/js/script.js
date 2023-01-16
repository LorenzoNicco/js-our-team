/*
    STEPS:
        Milestone 0:
            1. Creare un oggetto con i dati forniti
            2. Raggruppare gli oggetti creati in un array.
        Milestone 1:
            1. Stampare un console.log di ogni membro del team con le proprie informazioni.
            2. Per farlo, creare un ciclo per stampare in console
        Milestone 2:
            1. Creare un elemento html (div?) dove poter stampare.
            2. Stampare le stesse informazioni in pagina, sottoforma di stringhe
        Bonus 1.
            Trasformare la stringa foto in una immagine effettiva
        Bonus 2.
            Organizzare i singoli membri in card/schede
*/
console.log("Collegamento  file js ok");

// Milestone 0
const teamMembers = [
    {
        completeName: "Wayne Barnett",
        role: "Founder & CEO",
        profilePic: `<img src="../img/wayne-barnett-founder-ceo.jpg" class="pic card-img-top">`
    },
    {
        completeName: "Angela Caroll",
        role: "Chief Editor",
        profilePic: `<img src="../img/angela-caroll-chief-editor.jpg" class="pic card-img-top">`
    },
    {
        completeName: "Walter Gordon",
        role: "Office Manager",
        profilePic: `<img src="../img/walter-gordon-office-manager.jpg" class="pic card-img-top">`
    },
    {
        completeName: "Angela Lopez",
        role: "Social Media Manager",
        profilePic: `<img src="../img/angela-lopez-social-media-manager.jpg" class="pic card-img-top">`
    },
    {
        completeName: "Scott Estrada",
        role: "Developer",
        profilePic: `<img src="../img/scott-estrada-developer.jpg" class="pic card-img-top">`
    },
    {
        completeName: "Barbara Ramos",
        role: "Graphic Designer",
        profilePic: `<img src="../img/barbara-ramos-graphic-designer.jpg" class="pic card-img-top">`
    }
];
console.log("Team", teamMembers);

for (let i = 0; i < teamMembers.length; i++) {
    for (let key in teamMembers[i]) {
        console.log(teamMembers[i][key]);
    }
}

const canvas = document.getElementById("canvas");

// Bonus 2 con bootstrap
for (let i = 0; i < teamMembers.length; i++) {
    canvas.innerHTML += `
    <div class="card col-4 mb-3 text-bg-primary" style="width: 18rem;">
        ${teamMembers[i]["profilePic"]}

        <div class="card-body">
            <h5 class="nome card-title">${teamMembers[i]["completeName"]}</h5>

            <p class="ruolo card-text">${teamMembers[i]["role"]}</p>
        </div>
    </div>
    `;
}