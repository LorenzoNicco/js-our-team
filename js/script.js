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
*/
console.log("Collegamento  file js ok");

// Milestone 0
const teamMember1 = {
    completeName: "Wayne Barnett",
    role: "Founder & CEO",
    profilePic: "wayne-barnett-founder-ceo.jpg"
}
console.log("Wayne", teamMember1);

const teamMember2 = {
    completeName: "Angela Caroll",
    role: "Chief Editor",
    profilePic: "angela-caroll-chief-editor.jpg"
}
console.log("Angela", teamMember2);

const teamMember3 = {
    completeName: "Walter Gordon",
    role: "Office Manager",
    profilePic: "walter-gordon-office-manager.jpg"
}
console.log("Walter", teamMember3);

const teamMember4 = {
    completeName: "Angela Lopez",
    role: "Social Media Manager",
    profilePic: "angela-lopez-social-media-manager.jpg"
}
console.log("Angela", teamMember4);

const teamMember5 = {
    completeName: "Scott Estrada",
    role: "Developer",
    profilePic: "scott-estrada-developer.jpg"
}
console.log("Scott", teamMember5);

const teamMember6 = {
    completeName: "Barbara Ramos",
    role: "Graphic Designer",
    profilePic: "barbara-ramos-graphic-designer.jpg"
}
console.log("Barbara", teamMember6);

const teamMembers = [];
teamMembers.push(teamMember1, teamMember2, teamMember3, teamMember4, teamMember5, teamMember6);
console.log("Team", teamMembers);