import {NavMenu, Messages, Settings} from "./components"
export default function LeftSidebar(){
    return(
        <>
            <div className="h-full flex flex-col justify-between">
                <NavMenu />
                <Messages />
                <Settings />
            </div>
        </>
    )
}