import React from "react";

function ExperienceCards(props) {
  return (
    <div class="row">
       <h1>
          <strong className="purple">Work Experience </strong> 
            </h1>
  <div class="col-sm-6">
    <div class="card expCard quote-card-view">
      <div class="card-body">
       <span> <h2 class="card-title">Application Development Analyst</h2>
       <p class="main-name">Accenture Solutions Pvt Ltd (Sept 2021 - Present)</p>
       </span>
        <p class="card-text">
          <ul>
           <li class="exp-body">Primarily responsible for developing web applications including a supply chain management tool using Blazor and a seat management system with Angular.
           Collaborated with designers to create user-centric interfaces, deployed applications to cloud-based environments, and integrated with APIs.
           Utilized analytics to track and understand user usage patterns, data visualization within Blazor to create dashboards and reports.  </li> <br/>
           <li class="exp-body">Awards : <p class="main-name"><b>Growth Catalyst Award</b></p> 
           <p class="main-name "><b>Accenture Celebrates Excellence</b></p></li> <br/>
          </ul>
        </p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card expCard quote-card-view">
      <div class="card-body">
        <h2 class="card-title">Quality Assuarance Intern</h2>
        <p class="main-name">CognitiveClouds Software Pvt Ltd (Sep 2020 - Dec 2020)</p>
           <li class="exp-body">Responsible for creating and fixing interface usability issues, developing automated tests and
              working with developers to review test cases </li> <br />
             <li class="exp-body"> Documented test plans and test scripts, input data, actual data and expected data for integration
              testing</li> <br />
             <li class="exp-body"> Presented client demos of the application's new features.</li> <br />
      </div>
    </div>
  </div>
</div>
  );
}
export default  ExperienceCards;
