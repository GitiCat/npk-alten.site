import React from "react"

import YMap from "./map/map"
import FeedbackForm from "./feedback/feedback"

class Contacts extends React.Component {

	UNSAFE_componentWillMount() {
		this.mapInit();
	}

	mapInit() {
		if(typeof(ymaps) !== 'undefined') {
			var ymap;
			ymaps.ready(function() {
				ymap = new ymaps.Map("ymap-container", {
					center: [55.726272, 38.206732],
                    zoom: 15.5,
                    controls: ['typeSelector', 'fullscreenControl', 'routePanelControl']
				})

				var routeControl = ymap.controls.get("routePanelControl");
				routeControl.routePanel.state.set({
					tyle: "masstransit",
	                fromEnabled: true,
	                from: "Электроугли, Центральная 114",
	                toEnabled: false,
	                to: "Электроугли, Центральная 59"
				});

				routeControl.routePanel.options.set({
					allowSwitch: false,
	                reverseGeocoding: true,
	                types: { masstransit: true, pedestrian: true, taxi: true }
				});

				var switchRouteButton;
				switchRouteButton = new ymaps.control.Button({
					data: {
	                    content: "Поменять местами",
	                    title: "Поменять адреса местами"
	                },
	                options: { 
	                    selectOnClick: false, 
	                    maxWidth: 160 
	                }
				});

				switchRouteButton.events.add("click", function() {
					routeControl.routePanel.switchPoints();
				})

				ymap.controls.add(switchRouteButton);

				var trafficControl;
				trafficControl = new ymaps.control.TrafficControl({
					state: {
						providerKey: "traffic#actual",
						trafficShown: false
					}
				});

				ymap.controls.add(trafficControl);

				//	disable scroll zoom controls
				ymap.behaviors.disable('scrollZoom');
			});
		}
	}
	
	render() {
		return (
			<div className="contacts-container">
				<div className="d-flex flex-dir--row row-vp-start row-hp-start">
					<YMap/>
					<FeedbackForm/>
				</div>
			</div>
		)
	}
}

export default Contacts;