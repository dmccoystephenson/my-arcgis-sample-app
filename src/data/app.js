import WebMap from "esri/WebMap";
import MapView from "esri/views/MapView";
import Search from "esri/widgets/Search";

const noop = () => {};

export const webmap = new WebMap({
  portalItem: {
    id: "e691172598f04ea8881cd2a4adaa45ba"
  }
});

export const view = new MapView({
  map: webmap
});

export const search = new Search({ view });
view.ui.add(search, "bottom-left");

export const initialize = (container) => {
  view.container = container;
  view
    .when()
    .then(_ => {
      console.log("Map and View are ready");
    })
    .catch(noop);
  return () => {
    view.container = null;
  };
};

