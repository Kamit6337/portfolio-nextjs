import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
});
const Contact = ({ ...props }) => {
  const location = { latitude: 25.266497, longitude: 82.989469 };

  return (
    <div {...props}>
      <p>Contact</p>
      <div className="h-96 w-full z-0">
        <MapComponent
          latitude={location.latitude}
          longitude={location.longitude}
        />
      </div>
    </div>
  );
};

export default Contact;
