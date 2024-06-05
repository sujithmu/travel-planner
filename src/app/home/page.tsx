import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Home from "@/components/template/home/Home";
import  TripPlanner from '@/components/template/planner/TripPlanner'

async function HomePage() {
    const session = await getServerSession(authOptions);
    const user = session?.user.email?.substring(0, session.user.email.indexOf("@"));
    if(user){
        // return <h2 className="text-2xl"> Home page - welcome back {user}</h2>
        // return <Home />
        return <TripPlanner />
    }
}

export default HomePage