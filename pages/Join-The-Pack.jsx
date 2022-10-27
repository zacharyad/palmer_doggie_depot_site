import Link from "next/link"
import SocialLinks from './components/SocialLinks'

const JoinThePack = () => {
    return (
        <>
        <h2>JoinThePack Page</h2>
        <p>PDD is sustained solely by individual donations and grants. We receive no funding from the City’s Parks Department; instead we rely on the support of the Depot’s everyday users. To date we’ve raised sufficient resources to remove the park’s remaining asphalt and arrange for the majority of its disposal. Future planned improvements include a doggie water fountain, shading, and landscaping – but we need your help for these items!</p>
        <h2>Be Part of the Pack!</h2>
        <p>Want to create the best park around for our beloved pooches? Here’s how you can help.</p>
        <ul>
            <li>
                <strong>First and foremost, use the park!</strong> 
                Regularly use the park and allow your furry friend(s) to exercise and play in a safe environment with other dogs.
</li>
            <li>
                <strong>Sign up for the Palmer Doggie Depot mailing list…</strong>
                 and share with others who would be interested in what’s going on at Palmer Doggie Depot!
</li>
            <li>
                <strong>We are looking for new board members!</strong> 
                We meet once a month, and our meetings last approximately one hour. Interested in joining us? Please email us at PalmerDoggieDepot@gmail.com for more information.
</li>
            <li>
                <strong>Volunteer your time!</strong> 
                We will be scheduling park clean-ups where we tidy up the park itself and the surrounding area, and as we complete plans for more improvements will be announcing other volunteer projects via upcoming newsletters.
</li>
            <li>
                <strong>Donate funds to help with maintenance and park improvements!</strong> 
                There are many projects in the works to make Palmer Doggie Depot the best park possible for our four-legged friends, and all are more possible through community support.
</li>
        </ul>

        <div className="signup-wrapper">
            <form action="">
                <div>
                    <label htmlFor="email-mailinglist">Sign up for the newsletter</label>
                    <input id="email-mailinglist" type="text" />
                </div>
                <button onClick={() => alert("Dummy signup")}>Sign up</button>
            </form>
        </div>

        <Link href="/Blog">Check out what is going on at the park!</Link>

       <SocialLinks />

        <div>
            <h3>Support the Park!</h3>
            <button onClick={() => alert("Dummy dontate")} >Donate</button> 
        </div>


        
        </>
    )
}

export default JoinThePack