var bio = {
    "name": "Michael Kuehn",
    "role": "Front-End Developer / Data Analyst",
    "contacts": {
        "mobile": "304-807-9843",
        "email": "mkuehn10@gmail.com",
        "github": "mkuehn10",
        "twitter": "@mkuehn10",
        "location": "Charleston, West Virginia",
        "otherLocations": [
            "Columbia, South Carolina",
            "San Antonio, Texas",
            "Augusta, Georgia",
            "North Olmsted, Ohio",
        ]
    },
    "welcomeMessage": "Currently seeking opportunities in web development and data analysis",
    "skills": ["HTML", "CSS", "R", "Python", "JavaScript", "Data Analysis"],
    "biopic": "images/baymax.png"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    function displayContacts(id) {
        $(id).prepend(formattedLocation);
        $(id).prepend(formattedTwitter);
        $(id).prepend(formattedGithub);
        $(id).prepend(formattedEmail);
        $(id).prepend(formattedMobile);
    }

    displayContacts("#topContacts");
    displayContacts("#footerContacts");
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPicture);
    $("#header").append(formattedWelcome);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        });
    }
};

var education = {
    "schools": [{
        "name": "Western Governors University",
        "location": "Charleston, West Virginia",
        "degree": "M.A.",
        "majors": ["Mathematics Education (5-12)"],
        "dates": "2011-2013",
        "url": "http://www.wgu.edu/wgu/credit/program546b"
    }, {
        "name": "United States Military Academy",
        "location": "West Point, New York",
        "degree": "B.S.",
        "majors": ["Information Systems Engineering", "Computer Science"],
        "dates": "1999-2003",
        "url": "http://www.usma.edu/eecs"
    }],
    "onlineCourses": [{
        "title": "Front-End Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": "Data Analyst Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/data-analyst-nanodegree--nd002"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors.join(", "));
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
    });
    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
    });
};

var work = {
    "jobs": [{
        "employer": "Western Governors University",
        "title": "Evaluation Faculty, Teacher Education",
        "location": "Charleston, West Virginia",
        "dates": "2014-Present",
        "description": "Evaluate student submissions in various math content and pedagogy areas.",
        "url": "http://www.wgu.edu"
    }, {
        "employer": "Kanawha County Schools",
        "title": "Mathematics Teacher",
        "location": "Charleston, West Virginia",
        "dates": "2010-2015",
        "description": "8th grade and High School Mathematics Teacher.  Taught AP Calculus, AP Statistics, Trigonometry, Algebra 2, and other courses.",
        "url": "http://kcs.kana.k12.wv.us"
    }, {
        "employer": "American Tank & Fabricating",
        "title": "Project Administrator",
        "location": "Cleveland, Ohio",
        "dates": "2008-2010",
        "description": "Managed the entire spectrum of manufacturing operations for several product lines including the largest customer for the Heavy Fabricating Division.",
        "url": "http://www.atfco.com"
    }, {
        "employer": "United States Army",
        "title": "Enlisted Soldier, Cadet, and Officer",
        "location": "Schofield Barracks, Hawaii",
        "dates": "1998-2008",
        "description": "Served as a Medical Service Corps Officer while deployed to Afghanistan and Iraq.",
        "url": "https://www.army.mil/"
    }]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkDate = HTMLworkDates.replace("%data%", job.dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedWorkDate, formattedWorkDescription);
    });
};

var projects = {
    "projects": [{
        "title": "Online Portfolio",
        "dates": "2016",
        "description": "I created an online portfolio to showcase all of my web development and data analysis projects.",
        "images": ["images/portfolio.jpg", "images/portfolio2.jpg"],
        "url": "https://mkuehn10.github.io/"
    }, {
        "title": "Identify Fraud at Enron",
        "dates": "2016",
        "description": "Identified which Enron employees are more likely to have committed fraud using machine learning and public Enron financial and email data.",
        "images": ["images/enron1.jpg", "images/enron2.jpg"],
        "url": "https://github.com/mkuehn10/P5-Identify-Fraud-from-Enron"
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectTitle, formattedProjectDate, formattedProjectDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedProjectImage);
            });
        }
    });
};


bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);