import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-VZZPY370NH"); // Replace with your Measurement ID
};

export const logPageView = (url: string) => {
  ReactGA.send({ hitType: "pageview", page: url });
};
