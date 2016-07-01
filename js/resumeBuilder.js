var bio = {
    "name": "Michael Kuehn",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "304-807-9843",
        "email": "mkuehn10@gmail.com",
        "github": "mkuehn10",
        "twitter": "mkuehn10",
        "location": "Charleston, WV"
    },
    "welcomeMessage": "Hello!",
    "skills": ["HTML", "CSS", "R", "Python", "JavaScript", "Data Analysis"],
    "biopic": "http://blog.room34.com/wp-content/uploads/underdog/logo.thumbnail.png"
};

var education = {
    "schools": [
        {
            "name": "Western Governors University",
            "location": "Salt Lake City, Utah",
            "degree": "M.A.",
            "majors": ["Mathematics Education (5-12)"],
            "dates": "2011-2013",
            "url": "http://www.wgu.edu"
        },
        {
            "name": "United States Military Academy",
            "location": "West Point, New York",
            "degree": "B.S.",
            "majors": ["Information Systems Engineering", "Computer Science"],
            "dates": "1999-2003",
            "url": "http://www.usma.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "Data Analyst Nanodegree",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/course/data-analyst-nanodegree--nd002"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer": "Western Governors University",
            "title": "Evaluation Faculty, Teacher Education",
            "location": "Salt Lake City, Utah",
            "dates": "2014-Present",
            "description": "Job Description"
        }
    ]
};



var projects = {
    "projects": [
        {
            "title": "Project Title",
            "dates": "Dates",
            "description": "Description",
            "images": ["url1", "url2"]
        }
    ]
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPicture =HTMLbioPic.replace("%data%", bio.biopic);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);



$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedPicture);
$("#header").append(formattedWelcome);


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(val) {
            var formattedSkills = HTMLskills.replace("%data%", val);
            $("#skills").append(formattedSkills);
    });
};