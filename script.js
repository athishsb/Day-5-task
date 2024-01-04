let myResume={
    "basics": {
      "name": "ATHISH S B",
      "email": "athishbalajisb22@gmail.com",
      "phone": 9655400754,
      "degree": "B.Sc",
      "location": {
        "address": "30, Thambi Kaliamman Kovil Street, Ponnammapet",
        "postalCode": 636001,
        "city": "Salem",
        "state": "Tamilnadu",
        "country": "India"
      },
      },
    "education": [
      {
        "institution": "Sri Ramakrishna Mission Vidyalaya College of Arts and Science",
        "department": "Computer Science",
        "studyType": "fulltime",
        "batch start year": 2020,
        "batch end year": 2023,
        "cgpa": 8.6,
      }
    ],
    "skills": [
      {
        "name": "html,css,c#,python,java,",
        "level": "beginner",
        "project": [
          "billing system using C# language"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,English",
      }
    ]
  }
console.log(myResume);console.log('');


//Iterate over education and skills using a for loop
for(let i=0;i<myResume.education.length;i++)
{
  console.log(`Institution:${myResume.education[i].institution}`);
}
for(let i=0;i<myResume.skills.length;i++)
{
  console.log(`Skill:${myResume.skills[i].name}`);
}console.log('');


//Iterate over basics and languages using a for-in loop
for(let key in myResume.basics)
{
  console.log(`${key}: ${myResume.basics[key]}`);
}
for(let key in myResume.languages[0])
{
  console.log(`${key}: ${myResume.languages[0][key]}`);
}console.log('');


// Iterate over education and skills using a for-of loop
for(let edu of myResume.education)
{
  console.log(`Institution: ${edu.institution}`);
}
for(let skill of myResume.skills)
{
  console.log(`Skill: ${skill.name}`);
}console.log('');


//Iterate over education using forEach
myResume.education.forEach(edu=>{
  console.log(`Institution: ${edu.institution}`);
});
myResume.skills.forEach(skill=>{
  console.log(`Skill: ${skill.name}`);
});
