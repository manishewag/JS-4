let myResume={
    "basics": {
      "name": "Manikandan",
      "email": "manikandancivil1712@gamil.com",
      "phone": 6382818638,
      "degree": "BE",
      "location": {
        "address": "2/116, Akrahara street, Thenkeeranur",
        "postalCode": 606213,
        "city": "Kallakurichi",
        "state": "Tamilnadu",
        "country": "India"
      },
    },
    "work": [
      {
        "company": "Kousic&co",
        "position": "Site Engineer",
        "startDate": "June 2023",
        "endDate": "Sept 2024",
        "summary": "i have lots of experience",
      },
    ],
    "education": [
      {
        "institution": "MahaBarathi Engg College",
        "department": "Civil",
        "studyType": "fulltime",
        "batch start year": 2013,
        "batch end year": 2017,
        "gpa": 7.5,
      }
    ],
    "languages": [
      {
        "language": "Tamil,English",
      }
    ],
    "interests": [
      {
        "name": "reading, playing",
      }
    ]
  }
  console.log(myResume);


  
  console.log("Using for loop:");
  for (let key in resumeData) {
  console.log(`${key}: ${resumeData[key]}`);
}


  console.log("\nUsing for...in loop:");
  for (let key in resumeData) {
  if (resumeData.hasOwnProperty(key)) {
    console.log(`${key}: ${resumeData[key]}`);
  }
}


  console.log("\nUsing for...of loop:");
  for (let value of Object.values(resumeData)) {
  console.log(value);
}

  console.log("\nUsing forEach loop for education:");
  resumeData.education.forEach((education) => {
  console.log(education);
});

  console.log("\nUsing forEach loop for experience:");
  resumeData.experience.forEach((experience) => {
  console.log(experience);
});

  console.log("\nUsing forEach loop for skills:");
  resumeData.skills.forEach((skill) => {
  console.log(skill);
});
        