/*
Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima 

"Paciente X possui o IMC de: Y" 

Onde X é o nome do paciente e Y é o IMC desse paciente 

Crie uma função para fazer o cálculo de IMC

IMC = peso/(altura^2)
*/

const patients = [
  {
    name: "Julio",
    age: "33",
    weight: "56",
    height: "168"
  },
  {
    name: "Luiz",
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

function IMC(weight, height){
  return (weight / ((height/100)**2)).toFixed(2)
}

function printPatientIMC(patients){
  return `
    Paciente ${patients.name} possui um IMC de 
    ${IMC(patients.weight, patients.height)}
  `
}

for (let patient of patients){
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}

