const names = ["Pankaj", "Ankush", "Prashant","Pulkit","Raghav","Niraj","Harsh"];
function getRandomName(namesArray) {
      const randomIndex = Math.floor(Math.random() * namesArray.length);
      return namesArray[randomIndex];
  }
  const mentor = getRandomName(names);
  const mentorname = document.querySelector(".color-change");
  mentorname.innerHTML = mentor;


const desc =`I am ${mentor} the top \ninstructor of &  having \n over 20 years of experience \nin the computer science and\n information technology fields.\n Taught many courses at the University\n level to thousands of students. Have been\n training students and employees\n on various programming languages like,\n C++ , VC++ , JAVA  technologies\n and Web Development.Have Delivered Seminars\n on various topics like Distributed System, \nCloud Computing and Big Data.\n Have been into web development using\n technologies like, Java, ASP.NET and PHP.`;
const description = document.querySelector(".Description");
description.innerHTML = desc;


const mlinks = ["images/teacher_images/a.jpg","images/teacher_images/b.jpg","images/teacher_images/c.jpeg","images/teacher_images/d.jpeg","images/teacher_images/e.jpeg","images/teacher_images/f.jpg","images/teacher_images/g.jpeg"];
function getrandom(mlinksArray){
    const randomIndex = Math.floor(Math.random()*mlinksArray.length);
    return mlinksArray[randomIndex];
}
const men = getrandom(mlinks);
const img = document.querySelector(".mentorI");
img.src = men;


const thumb = ["images/course_images/h.webp","images/course_images/i.jpg","images/course_images/j.jpg","images/course_images/k.png","images/course_images/l.jpeg","images/course_images/m.jpg","images/course_images/n.jpg","images/course_images/o.jpg","images/course_images/p.jpg","images/course_images/q.jpg","images/course_images/r.jpg","images/course_images/s.png"];
function getrand(thumbArray){
    const randomIndex = Math.floor(Math.random()*thumbArray.length);
    return thumbArray[randomIndex];
}
const thumbnail = getrand(thumb);
const imag = document.querySelector(".Thumb");
imag.src = thumbnail;