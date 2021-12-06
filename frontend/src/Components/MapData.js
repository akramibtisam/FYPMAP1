import House_header from "./House_header"
import '../Style/MapData.css'
import House_icons from "./House_icons"
import House_img from "./House_img"
import House_details from "./House_details"
import Call from "./Call"
function MapData() {
    return (
        <div className="mapdata_container">
            <House_header/>
            <div className="border-bottom"></div>
            <House_icons/>
            <House_img/>
            <House_details/>
            <Call/>

        </div>
    )
}

export default MapData
