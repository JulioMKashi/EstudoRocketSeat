/*
Crie uma lista de pacientes 

Cada paciente dentro da lista, deverá conter 
  nome 
  idade 
  peso 
  altura 

Escreva uma lista contendo o nome dos pacientes, idade, peso e altura 
*/

const patients = [
  {
    name: "Julio",
    age: "33",
    weight: "56",
    height: "168"
  },
  {
    name: "luiz",
    age: "30",
    weight: "56",
    height: "184"
  },
  {
    name: "Yor",
    age: "28",
    weight: "56",
    height: "174"
  },
]

let patientInformation = []
let index = 1

for(let patient of patients){
  patientInformation.push(`-Paciente ${index}: ${patient.name} - Idade: ${patient.age} - Peso: ${patient.weight} - Altura: ${patient.height}
  `)
  index++
}

alert(patientInformation)


// let patientsName = []
// let patientsAge = []
// let patientsWeight = []
// let patientsHeight = []
// let index = 0

// for(let patient of patients){
//   patientsName.push(patient.name)
//   patientsAge.push(patient.age)
//   patientsWeight.push(patient.weight)
//   patientsHeight.push(patient.height)
//   alert(
//   `Nome: ${patientsName[index]},  
//   Idade: ${patientsAge[index]}, 
//   Peso: ${patientsWeight[index]}, 
//   Altura${patientsHeight[index]}`)
//   index++
// }

// alert(`
//  ${patientsName}, 
//  ${patientsAge}, 
//  ${patientsWeight},
//  ${patientsHeight}`)

 
