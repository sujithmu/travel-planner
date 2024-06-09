import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import  TripPlanner from '@/components/template/planner/TripPlanner'

async function HomePage() {
    const session = await getServerSession(authOptions);
    const user = session?.user.email?.substring(0, session.user.email.indexOf("@"));
    if(user){
        return <TripPlanner />
    }
}

export default HomePage