import ServerComponent from "../server-component/page";
import Clientcomponent from "../client-component/page";
import Header from "../props/page";
import UserProfile from "../muti-props/page";

export default function Page() {
  return (
   
        
   
    <div>
      <h1>Shopping Page</h1>
      <ServerComponent />
      <Clientcomponent />
      <Header title="Shopping Page" />
      <p>This page demonstrates a shopping feature.</p>
      <UserProfile name="John Doe" age={30} email="sdsd" isAdmin={false} />
    </div>
  );
}