
import React, { useState, useEffect, useRef } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as parkDate from '../bahraiTown.json'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder' 
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import '../Style/Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiaWJ0aXNhbWFrcmFtIiwiYSI6ImNrdWw0a3c4cDFkd2syd242NmU5ZTBrbm8ifQ.wGDoEac8gbktn1oYzxhhWQ';

function Map() {
    // const history=useHistory();
    useEffect(() => {
       
        mapboxgl.accessToken = 'pk.eyJ1IjoiaWJ0aXNhbWFrcmFtIiwiYSI6ImNrdWw0a3c4cDFkd2syd242NmU5ZTBrbm8ifQ.wGDoEac8gbktn1oYzxhhWQ';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-day-v1',
            center: [74.1768, 31.3695],
            zoom: 12
        });

        map.addControl(
            new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
            })


        );

        map.on('load', () => {
            // Add a data source containing GeoJSON data.
            map.addSource('maine', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        // These coordinates outline Maine.
                        'coordinates': [
                            [
                                [74.193497, 31.344577],
                                [74.195764, 31.348170],
                                [74.195988, 31.348176],
                                [74.199257, 31.354088],
                                [74.199479, 31.366488],
                                [74.202513, 31.366399],
                                [74.202764, 31.375639],
                                [74.200002, 31.382586],
                                [74.198802, 31.381766],
                                [74.198548, 31.387179],
                                [74.198362, 31.387210],
                                [74.198347, 31.387605],
                                [74.198032, 31.387648],
                                [74.198019, 31.388151],
                                [74.197388, 31.388135],
                                [74.197374, 31.388642],
                                [74.196735, 31.388644],
                                [74.196735, 31.389126],
                                [74.196085, 31.389126],
                                [74.196059, 31.390750],
                                [74.195549, 31.390992],
                                [74.195429, 31.391390],
                                [74.195115, 31.391513],
                                [74.195107, 31.391644],
                                [74.194336, 31.391650],
                                // chages ocurs
                                [74.195071, 31.391634],


                                [74.188515, 31.390984],
                                [74.188531, 31.390278],
                                [74.188742, 31.390209],
                                [74.188418, 31.389365],
                                [74.187208, 31.389380],
                                [74.187175, 31.389922],
                                [74.185922, 31.389964],
                                [74.185910, 31.390398],
                                [74.183929, 31.390354],
                                [74.183943, 31.389902],
                                [74.182092, 31.389855],
                                [74.182106, 31.390235],
                                [74.182468, 31.390271],
                                [74.182440, 31.390829],
                                [74.180562, 31.390781],
                                [74.180649, 31.388264],
                                [74.181429, 31.388264],
                                [74.181511, 31.385409],
                                [74.180836, 31.385402],
                                // [74.180836,31.184819],
                                [74.181583, 31.384819],
                                [74.181639, 31.382959],
                                [74.180972, 31.382918],
                                [74.180924, 31.383329],
                                [74.174559, 31.383253],
                                [74.174540, 31.383847],
                                [74.175181, 31.383823],
                                [74.175181, 31.384785],
                                [74.173259, 31.384754],
                                [74.173246, 31.384238],
                                [74.172604, 31.384217],
                                [74.172653, 31.384751],
                                [74.171957, 31.384740],
                                [74.171971, 31.385215],
                                [74.168201, 31.385131],
                                [74.168707, 31.393920],
                                [74.168124, 31.393911],
                                [74.167441, 31.392841],
                                [74.167200, 31.392676],
                                [74.165650, 31.391243],
                                [74.165538, 31.391051],
                                [74.165377, 31.391010],
                                [74.164541, 31.391058],
                                [74.164563, 31.391300],
                                [74.163124, 31.391321],
                                [74.163133, 31.391122],
                                [74.162988, 31.391088],
                                [74.162993, 31.390354],
                                [74.163183, 31.390309],
                                [74.163250, 31.389348],
                                [74.162897, 31.389369],
                                [74.162865, 31.388888],
                                [74.162567, 31.388888],
                                [74.162524, 31.388361],
                                [74.161922, 31.388382],
                                [74.161906, 31.388649],
                                [74.161319, 31.388649],
                                [74.161311, 31.388361],
                                [74.160748, 31.388375],
                                [74.160756, 31.387874],
                                [74.161806, 31.387852],
                                [74.161789, 31.387364],
                                [74.163237, 31.387371],
                                [74.163237, 31.387707],
                                [74.163815, 31.387714],
                                [74.163840, 31.386848],
                                [74.164467, 31.386848],
                                [74.163643, 31.385975],
                                [74.162945, 31.385578],
                                [74.162839, 31.384558],
                                [74.163019, 31.384071],
                                [74.163727, 31.383439],
                                [74.164492, 31.383195],
                                [74.168109, 31.383112],
                                [74.167979, 31.380545],
                                [74.167373, 31.378479],
                                [74.167019, 31.377910],
                                [74.160740, 31.372072],
                                [74.161244, 31.367546],
                                [74.162312, 31.367438],
                                [74.162961, 31.365293],
                                [74.163090, 31.363104],
                                [74.161824, 31.363109],
                                [74.161792, 31.363246],
                                [74.161181, 31.363246],
                                [74.161162, 31.361615],
                                [74.160567, 31.361622],
                                [74.160567, 31.361086],
                                [74.161202, 31.361066],
                                [74.161250, 31.360592],
                                [74.161612, 31.360592],
                                [74.161580, 31.360743],
                                [74.161724, 31.360764],
                                [74.161708, 31.360812],
                                [74.161789, 31.360826],
                                [74.161781, 31.360867],
                                [74.162247, 31.360880],
                                [74.162470, 31.359978],
                                [74.162872, 31.360054],
                                [74.162736, 31.360823],
                                [74.162736, 31.360823],
                                [74.163070, 31.360825],
                                [74.163118, 31.361155],
                                [74.163721, 31.361127],
                                [74.163737, 31.360414],
                                [74.164348, 31.360386],
                                [74.164348, 31.360578],
                                [74.164951, 31.360592],
                                [74.164951, 31.360070],
                                [74.165023, 31.360070],
                                [74.165001, 31.358579],
                                [74.165386, 31.358593],
                                [74.165391, 31.358127],
                                [74.166259, 31.358079],
                                [74.166284, 31.357455],
                                [74.165713, 31.357455],
                                [74.165713, 31.357668],
                                [74.163720, 31.357688],
                                [74.163755, 31.355601],
                                [74.165733, 31.355565],
                                [74.165627, 31.356152],
                                [74.166272, 31.356143],
                                [74.166283, 31.356622],
                                [74.167636, 31.356613],
                                [74.167683, 31.355128],
                                [74.165979, 31.355128],
                                [74.165954, 31.354187],
                                [74.165014, 31.354208],
                                [74.164974, 31.353666],
                                [74.163608, 31.353666],
                                [74.163654, 31.350464],
                                [74.162402, 31.350488],
                                [74.162388, 31.349799],
                                [74.159814, 31.349632],
                                [74.159856, 31.349086],
                                [74.159216, 31.348575],
                                [74.161039, 31.347386],
                                [74.160771, 31.347030],
                                [74.161425, 31.346495],
                                [74.162051, 31.347268],
                                [74.161898, 31.347363],
                                [74.162287, 31.347767],
                                [74.163414, 31.347078],
                                [74.163846, 31.347422],
                                [74.164569, 31.346911],
                                [74.165293, 31.347660],
                                [74.165571, 31.347553],
                                [74.165835, 31.347909],
                                [74.165654, 31.348088],
                                [74.165877, 31.348456],
                                [74.165696, 31.348682],
                                [74.166420, 31.349335],
                                [74.168632, 31.347886],
                                [74.168994, 31.348385],
                                [74.170900, 31.347149],
                                [74.171354, 31.347551],
                                [74.174742, 31.340012],
                                [74.175209, 31.337111],
                                [74.175938, 31.337165],
                                [74.176509, 31.336272],
                                [74.180026, 31.341279],
                                [74.176287, 31.341198],
                                [74.177142, 31.342795],
                                [74.178917, 31.342876],
                                [74.179012, 31.345257],
                                [74.179677, 31.345312],
                                [74.179736, 31.345275],
                                [74.179712, 31.347271],
                                [74.179086, 31.347271],
                                [74.179110, 31.348258],
                                [74.178435, 31.349287],
                                [74.178411, 31.349780],
                                [74.180844, 31.349842],
                                [74.181253, 31.350706],
                                [74.185348, 31.350829],
                                [74.185348, 31.351097],
                                [74.185107, 31.351673],
                                [74.185117, 31.351645],
                                [74.185582, 31.351699],
                                [74.185740, 31.352494],
                                [74.186100, 31.352503],
                                [74.186089, 31.353235],
                                [74.186460, 31.353180],
                                [74.186878, 31.353916],
                                [74.187365, 31.353738],
                                [74.187601, 31.352609],
                                [74.190946, 31.350425],
                                [74.190368, 31.349541],
                                [74.190489, 31.349109],
                                [74.189863, 31.349109],
                                [74.189670, 31.348142],
                                [74.189044, 31.348204],
                                [74.188827, 31.346887],
                                [74.191428, 31.346496],
                                [74.191242, 31.345444],
                                [74.193497, 31.344577]





                            ]
                        ]
                    }
                }
            });

            // Add a new layer to visualize the polygon.
            map.addLayer({
                'id': 'maine',
                'type': 'fill',
                'source': 'maine', // reference the data source
                'layout': {},
                'paint': {
                    'fill-color': 'lightgray', // blue color fill
                    'fill-opacity': 0.2
                }
            });
            // Add a black outline around the polygon.
            map.addLayer({
                'id': 'outline',
                'type': 'line',
                'source': 'maine',
                'layout': {},
                'paint': {
                    'line-color': 'blue',
                    'line-width': 1
                }
            });
        });

        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                // When active the map will receive updates to the device's location as it changes.
                trackUserLocation: true,
                // Draw an arrow next to the location dot to indicate which direction the device is heading.
                showUserHeading: true
            })
        );
        const div=document.createElement('div');
        const button=document.createElement('button');
        button.innerText="Click Here";
        div.append(button);
        map.addControl(new mapboxgl.NavigationControl());
        for (const { geometry, properties } of parkDate.features) {
            // create a HTML element for each feature
            const el = document.createElement('div');
            el.className = "marker";
            if(properties.Type=='Commercial')
            {
                el.className='marker1';
            }
            else if(properties.Type=='Plot')
            {
                el.className='marker2';
            }
            new mapboxgl.Marker(el)
                .setLngLat(geometry.coordinates)
                .setPopup(
                    new mapboxgl.Popup({ offset:25}) // add popups
                        .setHTML(
                            `
                            <img src=${properties.image} width="300" height="180" style="margin:auto;border-radius:10px;">
                            <div style="background:black;position:absolute;width:300px;height:40px;top:150px;opacity:0.4;"></div>
                            <div style="display:flex;justify-content:space-between;position:absolute;top:155px" >
                                <P style="color:white;font-size:20px; margin-left:5px;font-weight:700;">${properties.Price}</P>
                                <p style="font-size:14px;margin-left:130px;color:white">${properties.land_size}</p>
                            </div>
                           <div style="margin-top:15px;padding:5px">
                                <div style="margin-bottom:10px"><img src=${properties.icon} width="20" height="20" style="object-fit:contain;margin-top:-5px"><span style="margin-left:5px;font-weight:700;font-size:19px;">Address</span><span style="margin-left:15px;font-size:13px;color:gray;
                                 ">${properties.Address} </span></div>
                                 <img src=${properties.icon1} width="20" height="20" style="object-fit:contain;margin-top:-5px"><span style="margin-left:7px;font-weight:700;font-size:19px">Area</span><span style="margin-left:40px;font-size:13px;color:gray">${properties.Area}</span>
                           </div>
                           <div><a href='/mapdata?House_id=${properties.House_Number}' target=_blank  style="float:right;cursor:pointer;color:blue;font-size:15px;margin-right:5px; text-decoration:none;outline:none">See more</a></div>
                            `
                        )
                       
                )
                // .setDOMContent(div)
               
                .addTo(map);
            document.getElementById('map').style.display = 'block';
        }


    })
    return (
        <div>
        </div>
    )

}

export default Map











