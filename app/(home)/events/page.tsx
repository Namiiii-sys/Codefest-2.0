import Events from "./eventx"
import HackathonDetails from "./hackathon";
import MoreSponsors from "./moresponsors";
import PrizeDetails from "./prizedetails";
function page() {
  return (
    <>
<HackathonDetails/>
<PrizeDetails/>
<Events/>
<MoreSponsors/>
 </>
  )
}

export default page