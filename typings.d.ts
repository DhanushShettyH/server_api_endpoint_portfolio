// type defination file
//Interfaces are often used to define the structure of data objects, such as API responses, form input data, or any other data that your application deals with
//for type safety, form validation
//When working with APIs in Next.js, you often receive JSON data from the server. You can create interfaces to describe the structure of the expected API responses, 
interface SanityBody {
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
}

interface Image {
    _type:"image";
    asset:{
        _ref:string;
        _type:"reference";
    };
}

export interface PageInfo extends SanityBody{
    _type:"pageInfo";
    address:string;
    backgroundInformation:string;
    email:string;
    role:string;
    heroImage:Image;
    name:string;
    phoneNumber:string;
    profilePic:Image;
}

export interface Technology extends SanityBody{
    _type:"skill";
    image:Image;
    progress:number;
    title:string;
}

export interface Skill extends SanityBody{
    _type:"skill";
    image:Image;
    progress:number;
    title:string;
}


export interface Experience extends SanityBody{
    _type:"experience";
    company:string;
    companyImage:Image;
    dateStarted:date;
    dateEnded:date;
    isCurrentlyWorkingHere:boolean;
    jobTitle:string;
    points:string[];
    technologies:Technology[];
}

export interface Project extends SanityBody{
    title:string
    _type:"project";
    image:Image;
    linkToBuild:string;
    summary:string;
    technologies: Technology[];
}

export interface Social extends SanityBody{
    _type:"social";
    title:string;
    url:string;
}
