import Post from "../components/post/Post";
import LeftMenu from "../components/leftMenu/LeftMenu";
import { SideComments } from "@/components/commentComponents/sideComments/SideComments";
import Header from "../components/header/Header";


export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-[90px]  flex justify-between align-center">
        <div className="leftSide">
          <LeftMenu/>
        </div>
        <div className="content max-w-[740px] top-[90px] absolute inset-0 m-auto">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
        <div className="rightSide">
            <SideComments/>
        </div>
      </div>
    </div>
  );
}
