export const MYCO_MONITORING_MAP = {
  center: [51.3593, 5.772],
  zoom: 13,
  categories: [
    {
      id: "container",
      legendLabel: "MycoContainer",
      markerClass: "monitoring-marker--container",
      locations: [
        { id: "container-pond", latitude: 51.356521, longitude: 5.765915, label: "MycoContainer (Pond)" },
        { id: "container-main", latitude: 51.360444, longitude: 5.768021, label: "MycoContainer" },
      ],
    },
    {
      id: "islands",
      legendLabel: "MycoIslands",
      markerClass: "monitoring-marker--island",
      locations: [
        { id: "island", latitude: 51.359429, longitude: 5.776024, label: "MycoIsland" },
      ],
    },
    {
      id: "monitoring-location",
      legendLabel: "Monitoring Location",
      markerClass: "monitoring-marker--monitoring",
      locations: [
        { id: "monitoring-east", latitude: 51.360613, longitude: 5.771682, label: "Monitoring Location" },
        { id: "monitoring-west", latitude: 51.359249, longitude: 5.770821, label: "Monitoring Location" },
      ],
    },
  ],
};