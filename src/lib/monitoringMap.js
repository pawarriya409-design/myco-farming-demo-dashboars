export const BIOFLOW_MONITORING_MAP = {
  center: [51.3593, 5.772],
  zoom: 13,
  categories: [
    {
      id: "container",
      legendLabel: "BioFlow Container",
      markerClass: "monitoring-marker--container",
      locations: [
        { id: "container-pond", latitude: 51.356521, longitude: 5.765915, label: "Container (Pond)" },
        { id: "container-main", latitude: 51.360444, longitude: 5.768021, label: "Container" },
      ],
    },
    {
      id: "island-runoff",
      legendLabel: "Island / Runoff Point",
      markerClass: "monitoring-marker--island",
      locations: [
        { id: "island-runoff-south", latitude: 51.358813, longitude: 5.778212, label: "Island - On Runoff" },
        { id: "island", latitude: 51.359429, longitude: 5.776024, label: "Island" },
        { id: "island-runoff-north", latitude: 51.360188, longitude: 5.773093, label: "Island - On Runoff" },
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