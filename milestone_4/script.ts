// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//for form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reolad

    // Collect input values
    const Name = (document.getElementById('name') as HTMLInputElement).value
    const Email = (document.getElementById('email') as HTMLInputElement).value
    const Phone = (document.getElementById('Phone') as HTMLInputElement).value
    const education = (document.getElementById('Education') as HTMLInputElement).value
    const experience = (document.getElementById('Experience') as HTMLInputElement).value
    const skills = (document.getElementById('Skills') as HTMLInputElement).value
    
    // now generating the resume
    const resumeHTML =`
    <h2><b>Editable Resume</b></h2> 
    <h3>Personal Information</h3>
    <p><b>Name:</b> <span contenteditable="true"> ${Name}</p> </span>
    <p><b>Email:</b> <span contenteditable="true"> ${Email}</p> </span>
    <p><b>Phone:</b> <span contenteditable="true"> ${Phone}</p> </span>

    <h3>Education</h3>
    <p contenteditable = "true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable = "true" >${experience}</p>

    <h3>Skills</h3>
    <li contenteditable = "true" ><ul> ${skills} </ul> </li>`;

    //core logic of generation
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('The resume display element is missing.')
    }

})