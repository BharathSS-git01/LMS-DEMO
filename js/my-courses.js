const courses=[
{title:"Deep Learning",institution:"NPTEL",progress:70,status:"ongoing"},
{title:"Machine Learning",institution:"NPTEL",progress:45,status:"ongoing"},
{title:"AI For Management",institution:"NPTEL",progress:100,status:"completed"}
];

const ongoing=document.getElementById("ongoingCourses");
const completed=document.getElementById("completedCourses");

let e=0,p=0,c=0;

courses.forEach(course=>{

e++;

const card=document.createElement("div");
card.className="course-card";

card.innerHTML=`
<div class="course-banner">${course.title}</div>
<div class="course-content">
<h3>${course.title}</h3>
<p>${course.institution}</p>

<div class="progress-bar">
<div class="progress-fill" style="width:${course.progress}%"></div>
</div>

<p>${course.progress}% Completed</p>

${course.status==='ongoing'
?`<button class="continue-btn">Continue Course</button>`
:`<button class="continue-btn">View Certificate</button>`}
</div>`;

if(course.status==='ongoing'){ongoing.appendChild(card);p++;}
else{
completed.appendChild(card);c++;

const cert=document.createElement("div");
cert.className="cert-card";
cert.innerHTML=`
<h4>${course.title}</h4>
<p>Certificate Issued</p>`;

document.getElementById("certificates").appendChild(cert);
}
});

document.getElementById("enrolledCount").innerText=e;
document.getElementById("progressCount").innerText=p;
document.getElementById("completedCount").innerText=c;