import Link from "next/link"
import { useEffect } from "react";
import { parseDomElemToAddToggleClass, findDomElementToAddEventToToggleExpandClass } from "./api/utils/domHelpers"
import FaqItem from './components/FaqItem'


let dummyData = [
    {
        title: "What are the Palmer Doggie Depot dog park rules?",
        content: "The rules for the dog park are located on our Park Info page and are also posted in the dog park. Please keep your eye on your dog(s) at all times, and use good judgement. For the safety of the humans and our four-legged friends, we ask that you pay careful attention to and follow all dog park rules."
    },
    {
        title: "What is the park’s exact location?",
        content: "Palmer Doggie Depot is located at 37 E Palmer St, Philadelphia, PA 19125 (on E Palmer St at Blair St). Check out our Park Info page!"
    },

    {
        title: "When is the park open?",
        content: "Palmer Doggie Depot is open daily from 6am to 10pm. Check out our Park Info page!"
    },
    {
        title: "Is there a fee to access the park?",
        content: "No…Palmer Doggie Depot (PDD) is a free neighborhood amenity for all dogs and their owners."
    },
    {
        title: "Is a water available at the park?",
        content: "One of the projects in the works is obtaining a water source for the dogs. At the moment a water source is not available. We encourage you to bring water for your pooches, especially on hotter days."
    },
    {
                
        title: "Is the park just for residents of Fishtown?",
        content: "Most who visit the park are residents of the neighborhood, but all are welcome!"
    },
    {
        title: "What types of vaccinations does my dog need to have in order to use the park?",
        content: "All dogs must be legally licensed and vaccinated. Core vaccinations (rabies and distemper) must be up to date."
    },
    {
        title: "Is there an age requirement for dogs?",
        content: "Yes. The park is for dogs above four months of age."
    },
    {
        title: "How do I keep my dog safe at the park?",
        content: "In order to keep your beloved furry friend (and yourself) safe, it important to understand yourself, your dog, and the language cues of the animals. Opportunity Barks offers extremely useful information on steps you can take to “play it safe” and how to manage a harmful situation. Courtesy of Opportunity Barks, the information can be downloaded here."
    },
    {
        title: "What do I do if a person (or an animal) is bit at the park?",
        content: "It is important to try and stay calm an alert while at the park. If you are harmed by an animal at the park, seek medical attention immediately, calling 911 if necessary. Should your animal be bitten, bring him or her to the nearest emergency veterinary clinic for immediate medical attention. Users of Palmer Doggie Depot use the park solely at their own risk and the risk of their dog(s). All people and/or organizations associated with Palmer Doggie Depot assume no liability for any injuries, expenses, damages, or losses arising from use of the park."
    },
    {
        title: "Other questions? ",
        content: "Feel free to email us at info@palmerdoggiedepot.org or connect with us using our contact form!"
    }
]



const Faqs = () => {

    useEffect(() => {
        let allFaqHeaders = findDomElementToAddEventToToggleExpandClass()

        return () => {
            allFaqHeaders.forEach(elem => {
                elem.removeEventListener("click", parseDomElemToAddToggleClass)
            })
        }
    }, [])
    

    return (
            <>
                <div className="faq-page">
                    <h3>Frequently Asked Questions</h3>
                    <div className="faq-list">
                    {
                        dummyData.length ?
                        dummyData.map(faq => {
                            return <FaqItem title={faq.title} content={faq.content} />
                        }) :

                        <div>Sorry Issue fetching FAQ's</div>  
                    }
                    </div>

                </div>
                        
            </>
    )
}

export default Faqs