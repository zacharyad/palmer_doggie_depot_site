import Link from "next/link"
import { useEffect } from "react";
const Faqs = () => {

    useEffect(() => {
        console.log(":RUNNING")

        function clickEvent(e, h) {
            console.log("H: ", h)
            let node = e.target.parentNode

            if(node.classList.contains("faq")){
                node = node.childNodes[1]
                toggleNodeClassName(node, "expanded")
                
            } else {
                node = node.parentNode.childNodes[1]
                toggleNodeClassName(node, "expanded")
            }

            function toggleNodeClassName(node, name){
                if(node.classList.contains(name)){
                    node.classList.remove(name)
                    node.style.height = "0px"
                } else {
                    node.classList.add(name)
                    node.style.height = `${node.childNodes[0].offsetHeight}px`
                }
            } 
        }
        let allFaqHeaders = [...document.getElementsByClassName("faq")].map(elem => {
            console.log(elem)
            elem.addEventListener('click', clickEvent)
            return elem
        })

        return () => {
            allFaqHeaders.forEach(elem => {
                elem.removeEventListener("click", clickEvent)
            })
        }
    }, [])
    

    return (
<>
<h3>Faqs Page</h3>
<div className="faq-list">
    <div className="faq">
        <div className="faq-header">
            <h3 className="faq-title">
            What are the Palmer Doggie Depot dog park rules?
            </h3>
        </div>
        <div className="faq-body">
            <div className="faq-text">
            The rules for the dog park are located on our Park Info page and are also posted in the dog park. Please keep your eye on your dog(s) at all times, and use good judgement. For the safety of the humans and our four-legged friends, we ask that you pay careful attention to and follow all dog park rules.
            </div>
        </div>
    </div>

    <div className="faq">
        <div className="faq-header">
            <h3 className="faq-title">
            What is the park’s exact location?
            </h3>
        </div>
        <div className="faq-body">
            <div className="faq-text">
            Palmer Doggie Depot is located at 37 E Palmer St, Phila, PA 19125 (on E Palmer St at Blair St). Check out our Park Info page!
            </div>
        </div>
    </div>

    <div className="faq">
        <div className="faq-header">
            <h3 className="faq-title">
            When is the park open?
            </h3>
        </div>
        <div className="faq-body">
            <div className="faq-text">
            Palmer Doggie Depot is open daily from 6am to 10pm. Check out our Park Info page!
            </div>
        </div>
    </div>

    <div className="faq">
        <div className="faq-header">
            <h3 className="faq-title">
            Is there a fee to access the park?
            </h3>
        </div>
        <div className="faq-body">
            <div className="faq-text">
            No…Palmer Doggie Depot (PDD) is a free neighborhood amenity for all dogs and their owners.
            </div>
        </div>
    </div>


    <div className="faq">
        <div className="faq-header">
            <h3 className="faq-title">
            Is a water available at the park?
            </h3>
        </div>
        <div className="faq-body">
            <div className="faq-text">
            One of the projects in the works is obtaining a water source for the dogs. At the moment a water source is not available. We encourage you to bring water for your pooches, especially on hotter days.
            </div>
        </div>
    </div>

    <div className="faq">
        <div className="faq-header">
            <h3 className="faq-title">
            Is the park just for residents of Fishtown?
            </h3>
        </div>
        <div className="faq-body">
            <div className="faq-text">
            Most who visit the park are residents of the neighborhood, but all are welcome!
            </div>
        </div>
    </div>

    <div className="faq">
        <div className="faq-header">
            <h3 className="faq-title">
            What types of vaccinations does my dog need to have in order to use the park?
            </h3>
        </div>
        <div className="faq-body">
            <div className="faq-text">
            All dogs must be legally licensed and vaccinated. Core vaccinations (rabies and distemper) must be up to date.
            </div>
        </div>
    </div>

    <div className="faq">
        <div className="faq-header">
            <h3 className="faq-title">
            Is there an age requirement for dogs?
            </h3>
        </div>
        <div className="faq-body">
            <div className="faq-text">
            Yes. The park is for dogs above four months of age.
            </div>
        </div>
    </div>

    <div className="faq">
        <div className="faq-header">
            <h3 className="faq-title">
            How do I keep my dog safe at the park?
            </h3>
        </div>
        <div className="faq-body">
            <div className="faq-text">
            In order to keep your beloved furry friend (and yourself) safe, it important to understand yourself, your dog, and the language cues of the animals. Opportunity Barks offers extremely useful information on steps you can take to “play it safe” and how to manage a harmful situation. Courtesy of Opportunity Barks, the information can be downloaded here.
            </div>
        </div>
    </div>

    <div className="faq">
        <div className="faq-header">
            <h3 className="faq-title">
            What do I do if a person (or an animal) is bit at the park?
            </h3>
        </div>
        <div className="faq-body">
            <div className="faq-text">
            It is important to try and stay calm an alert while at the park. If you are harmed by an animal at the park, seek medical attention immediately, calling 911 if necessary. Should your animal be bitten, bring him or her to the nearest emergency veterinary clinic for immediate medical attention. Users of Palmer Doggie Depot use the park solely at their own risk and the risk of their dog(s). All people and/or organizations associated with Palmer Doggie Depot assume no liability for any injuries, expenses, damages, or losses arising from use of the park.
            </div>
        </div>
    </div>

    <div className="faq">
        <div className="faq-header">
            <h3 className="faq-title">
            Other questions? 
            </h3>
        </div>
        <div className="faq-body">
            <div className="faq-text">
            Feel free to email us at info@palmerdoggiedepot.org or connect with us using our <Link href="/Contact">contact form!</Link></div>
        </div>
    </div>
    </div>
       
</>
    )
}

export default Faqs