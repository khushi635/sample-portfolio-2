
import Navbar from "./navbar/Navbar.jsx"
import Hero from "./hero-sec/Hero.jsx"
import Projects from "./projects/Projects.jsx"


    const url = "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"

    // const findData = async(url) => {
       
    //    try{
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     return data;
    //    } catch(err) {
    //     console.log(err)
    //    }
       
    // }

    const response =  await fetch(url)
    const data = await response.json()
   
    // console.log(data)
    // console.log(data.user.skills[0].image.url)
    // const mydata = data.user.about.name

    const wholeData = {
        about: {
            name: data.user.about.name,
            title:data.user.about.title,
            email: data.user.email,
            address: data.user.about.address,
            profileImg: data.user.about.avatar.url,
            description: data.user.about.description,
            subTitle: data.user.about.subTitle
           
        },
        projects: {
           project0: {
            img: data.user.projects[0].image.url, 
            techStack:data.user.projects[0].techStack,
            title: data.user.projects[0].title
           },
           project1: {
            img: data.user.projects[1].image.url, 
            techStack:data.user.projects[1].techStack,
            title: data.user.projects[1].title
           },
           project2: {
            img: data.user.projects[2].image.url, 
            techStack:data.user.projects[2].techStack,
            title: data.user.projects[2].title
           },
           project3: {
            img: data.user.projects[3].image.url, 
            techStack:data.user.projects[3].techStack,
            title: data.user.projects[3].title
           },
           project4: {
            img: data.user.projects[4].image.url, 
            techStack:data.user.projects[4].techStack,
            title: data.user.projects[4].title
           },
            project5: {
            img: data.user.projects[5].image.url, 
            techStack:data.user.projects[5].techStack,
            title: data.user.projects[5].title
           },
           project6: {
            img: data.user.projects[6].image.url, 
            techStack:data.user.projects[6].techStack,
            title: data.user.projects[6].title
           },
           project7: {
            img: data.user.projects[7].image.url, 
            techStack:data.user.projects[7].techStack,
            title: data.user.projects[7].title
           },
           project8: {
            img: data.user.projects[8].image.url, 
            techStack:data.user.projects[8].techStack,
            title: data.user.projects[8].title
           },
           project9: {
            img: data.user.projects[9].image.url, 
            techStack:data.user.projects[9].techStack,
            title: data.user.projects[9].title
           },
           project10: {
            img: data.user.projects[10].image.url, 
            techStack:data.user.projects[10].techStack,
            title: data.user.projects[10].title
           },
           project11: {
            img: data.user.projects[11].image.url, 
            techStack:data.user.projects[11].techStack,
            title: data.user.projects[11].title
           },
           project12: {
            img: data.user.projects[12].image.url, 
            techStack:data.user.projects[12].techStack,
            title: data.user.projects[12].title
           },
           project13: {
            img: data.user.projects[13].image.url, 
            techStack:data.user.projects[13].techStack,
            title: data.user.projects[13].title
           },
           project14: {
            img: data.user.projects[14].image.url, 
            techStack:data.user.projects[14].techStack,
            title: data.user.projects[14].title
           }

        },
        skills: {
        0: {
             name: data.user.skills[0].name,
             skillIcon: data.user.skills[0].image.url,
             percentage: data.user.skills[0].percentage   
            },
            1: {
                name: data.user.skills[1].name,
                skillIcon: data.user.skills[1].image.url,
                percentage: data.user.skills[1].percentage   
               },
               2: {
                name: data.user.skills[2].name,
                skillIcon: data.user.skills[2].image.url,
                percentage: data.user.skills[2].percentage   
               },
               3: {
                name: data.user.skills[3].name,
                skillIcon: data.user.skills[3].image.url,
                percentage: data.user.skills[3].percentage   
               },
               4: {
                name: data.user.skills[4].name,
                skillIcon: data.user.skills[4].image.url,
                percentage: data.user.skills[4].percentage   
               },
               5: {
                name: data.user.skills[5].name,
                skillIcon: data.user.skills[5].image.url,
                percentage: data.user.skills[5].percentage   
               },
               6: {
                name: data.user.skills[6].name,
                skillIcon: data.user.skills[6].image.url,
                percentage: data.user.skills[6].percentage   
               },
               7: {
                name: data.user.skills[7].name,
                skillIcon: data.user.skills[7].image.url,
                percentage: data.user.skills[7].percentage   
               },
               8: {
                name: data.user.skills[8].name,
                skillIcon: data.user.skills[8].image.url,
                percentage: data.user.skills[8].percentage   
               },
               9: {
                name: data.user.skills[9].name,
                skillIcon: data.user.skills[9].image.url,
                percentage: data.user.skills[9].percentage   
               },
               10: {
                name: data.user.skills[10].name,
                skillIcon: data.user.skills[10].image.url,
                percentage: data.user.skills[10].percentage   
               },
               11: {
                name: data.user.skills[11].name,
                skillIcon: data.user.skills[11].image.url,
                percentage: data.user.skills[11].percentage   
               },
               12: {
                name: data.user.skills[12].name,
                skillIcon: data.user.skills[12].image.url,
                percentage: data.user.skills[12].percentage   
               },
               13: {
                name: data.user.skills[13].name,
                skillIcon: data.user.skills[13].image.url,
                percentage: data.user.skills[13].percentage   
               },
               14: {
                name: data.user.skills[14].name,
                skillIcon: data.user.skills[14].image.url,
                percentage: data.user.skills[14].percentage   
               },
               15: {
                name: data.user.skills[15].name,
                skillIcon: data.user.skills[15].image.url,
                percentage: data.user.skills[15].percentage   
               },
               16: {
                name: data.user.skills[16].name,
                skillIcon: data.user.skills[16].image.url,
                percentage: data.user.skills[16].percentage   
               },
               17: {
                name: data.user.skills[17].name,
                skillIcon: data.user.skills[17].image.url,
                percentage: data.user.skills[17].percentage   
               },
               18: {
                name: data.user.skills[18].name,
                skillIcon: data.user.skills[18].image.url,
                percentage: data.user.skills[18].percentage   
               },
               19: {
                name: data.user.skills[19].name,
                skillIcon: data.user.skills[19].image.url,
                percentage: data.user.skills[19].percentage   
               }
        },
        services: {
            0: {
                name: data.user.services[0].name,
                charge: data.user.services[0].charge,
                desc: data.user.services[0].desc,
                imgIcon: data.user.services[0].image.url

            },
            1: {
                name: data.user.services[1].name,
                charge: data.user.services[1].charge,
                desc: data.user.services[1].desc,
                imgIcon: data.user.services[1].image.url

            },
            2: {
                name: data.user.services[2].name,
                charge: data.user.services[2].charge,
                desc: data.user.services[2].desc,
                imgIcon: data.user.services[2].image.url

            },
            3: {
                name: data.user.services[3].name,
                charge: data.user.services[3].charge,
                desc: data.user.services[3].desc,
                imgIcon: data.user.services[3].image.url

            },
            4: {
                name: data.user.services[4].name,
                charge: data.user.services[4].charge,
                desc: data.user.services[4].desc,
                imgIcon: data.user.services[4].image.url

            },
            5: {
                name: data.user.services[5].name,
                charge: data.user.services[5].charge,
                desc: data.user.services[5].desc,
                imgIcon: data.user.services[5].image.url

            }
        },
        socialHandles: {
            0: {
                platformName: data.user.social_handles[0].platform,
                imgIcon: data.user.social_handles[0].image.url
            },
            1: {
                platformName: data.user.social_handles[1].platform,
                imgIcon: data.user.social_handles[1].image.url
            },
            2: {
                platformName: data.user.social_handles[2].platform,
                imgIcon: data.user.social_handles[2].image.url
            },
            3: {
                platformName: data.user.social_handles[3].platform,
                imgIcon: data.user.social_handles[3].image.url
            }
        },
        testimonials: {
            0: {
                name: data.user.testimonials[0].name,
                position: data.user.testimonials[0].position,
                img: data.user.testimonials[0].image.url,
                review: data.user.testimonials[0].review,
            },
            1: {
                name: data.user.testimonials[1].name,
                position: data.user.testimonials[1].position,
                img: data.user.testimonials[1].image.url,
                review: data.user.testimonials[1].review,
            },
            2: {
                name: data.user.testimonials[2].name,
                position: data.user.testimonials[2].position,
                img: data.user.testimonials[2].image.url,
                review: data.user.testimonials[2].review,
            },
            3: {
                name: data.user.testimonials[3].name,
                position: data.user.testimonials[3].position,
                img: data.user.testimonials[3].image.url,
                review: data.user.testimonials[3].review,
            },
            4: {
                name: data.user.testimonials[4].name,
                position: data.user.testimonials[4].position,
                img: data.user.testimonials[4].image.url,
                review: data.user.testimonials[4].review,
            }
        }
    }

    // console.log(wholeData)
   

    // const wholeData = {
    //     name: data.user.about.name
    // }
    // console.log(wholeData)

    export default wholeData


    // "build": "vite build",

    // "start": "react-scripts start",
    // "build": "react-scripts build",

     

   

    


   
   

   
   
